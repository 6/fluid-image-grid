(function() {
  var currentPage = function () {
    var pages = $("#rg div.rgsh");
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
    if(!gM) {
      loadImagesForNextPage();
    }
  };

  var loadImagesForNextPage = function () {
    var pageToLoad = pagesToLoad.shift();
    if (typeof pageToLoad === "undefined") return gM = false;

    gM = true;
    var results = window.google.isr.layout.getResultsForPage(pageToLoad);
    if (!results) return loadImagesForNextPage();

    var resultImages = [];
    for (var i = 0; i < results.length; i++)
      resultImages.push($(results[i]).find('img.rg_i')[0]);

    jM += resultImages.length;
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
    jM--;
    jM <= +settings.nTbnsPending && loadImagesForNextPage();
  };

  var onScrollThrottled = function() {
    var currentTime = new Date().getTime();
    if (settings.scrollThrottleRate < currentTime - lastScrollTime) {
      lastScrollTime = currentTime;
      lastScrollY = currentScrollY;
    }
    var top = $('body').scrollTop();
    if (top - lastScrollY > 0) {
      currentScrollY = top;
      loadPagesIfNeeded();
    }
  };

  var onResizeThrottled = function() {
    window.clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(function () {
      window.google.isr.layout.layoutResults(true);
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
  jM = 0,
  pagesToLoad = [],
  gM = false;
  currentScrollY = 0,
  resizeTimeout = -1;

  window.init = function(options) {
    settings = $.extend(defaultSettings, options || {});
    $(window).on("scroll", onScrollThrottled);
    $(window).on("resize", onResizeThrottled);
    loadPages();
  };
})();
