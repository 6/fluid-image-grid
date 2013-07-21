(function() {
  var currentPage = function () {
    var pages = $("#rg .fluid-image-grid-page-separator");
    pages.sort(function (a, b) {
      var pageA = parseInt($(a).data('pg'));
      var pageB = parseInt($(b).data('pg'));
      return (pageA < pageB) ? -1 : (pageA > pageB) ? 1 : 0;
    });
    for (var i = 0; i < pages.length; i++) {
      var $page = $(pages[i]);
      var pageTopOffset = $page.data("offset") || $page.offset().top;
      if (pageTopOffset > $('body').scrollTop()) return i;
    }
    return 0;
  };

  var loadPagesIfNeeded = function() {
    var currentTime = new Date().getTime();
    if (currentTime - lastPageLoadedTime >= 15) {
      lastPageLoadedTime = currentTime;
      loadPages();
    }
  };

  var loadPages = function () {
    var page = currentPage();
    loadPage(page);
    loadPage(page + 1);
  };

  var loadPage = function (pageNumber) {
    var shouldLoadPage = !(0 > pageNumber || 1 < pageNumber && 0 === $('body').scrollTop());
    if (!shouldLoadPage) return;
    pagesToLoad.push(pageNumber);
    if(shoudRetryLoadImages) loadImagesForNextPage();
  };

  var loadImagesForNextPage = function () {
    var pageToLoad = pagesToLoad.shift();
    if (typeof pageToLoad === "undefined") return shoudRetryLoadImages = true;

    shoudRetryLoadImages = false;
    var results = window.FluidImageGrid.getResultsForPage(pageToLoad);
    if (!results) return loadImagesForNextPage();

    var resultImages = [];
    for (var i = 0; i < results.length; i++)
      resultImages.push($(results[i]).find('img.rg_i')[0]);

    nImagesPendingLoad += resultImages.length;
    for (var i = 0; i < resultImages.length; i++) {
      var image = resultImages[i];
      if(!$(image).data("src") || "string" == typeof image.src && image.src) {
        onImageLoad();
      }
      else {
        $(image).on("load", onImageLoad);
        image.src = $(image).data("src");
      }
    }
  };

  var onImageLoad = function () {
    nImagesPendingLoad--;
    nImagesPendingLoad <= +settings.nTbnsPending && loadImagesForNextPage();
  };

  var onScrollThrottled = function() {
    var currentTime = new Date().getTime();
    if (settings.scrollThrottleRate >= currentTime - lastScrollTime) return;

    var top = $('body').scrollTop();
    lastScrollTime = currentTime;
    lastScrollY = top;
    if (top - farthestScrolledY > 0) {
      farthestScrolledY = top;
      loadPagesIfNeeded();
    }
  };

  var onResizeThrottled = function() {
    window.clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(function () {
      window.FluidImageGrid.layoutResults(true);
      $('body').scrollTop(lastScrollY);
      if ($('body').scrollTop() > $("#images-grid").offset().top) {
        loadPages();
      }
    }, settings.resizeThrottleRate);
  };

  var defaultSettings = {
    "nTbnsPending": 8,
    "resizeThrottleRate": 50,
    "scrollThrottleRate": 40
  },
  settings = {},
  lastPageLoadedTime = new Date().getTime(),
  lastScrollTime = 0,
  lastScrollY = 0,
  farthestScrolledY = 0,
  nImagesPendingLoad = 0,
  pagesToLoad = [],
  shoudRetryLoadImages = true,
  currentScrollY = 0,
  resizeTimeout = -1;

  window.FluidImageGrid = window.FluidImageGrid || {};
  window.FluidImageGrid.init = function(options) {
    this.layoutResults();
    settings = $.extend(defaultSettings, options || {});
    $(window).on("scroll", onScrollThrottled);
    $(window).on("resize", onResizeThrottled);
    loadPages();
  };
})();
