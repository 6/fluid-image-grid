(function() {
  var _ = {};

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
    if (undefined !== pageToLoad) {
      gM = true;
      if (!window.google.isr.layout.getResultsForPage(pageToLoad)) {
        loadImagesForNextPage();
      }
      else {
        var b = window.google.isr.layout.getResultsForPage(pageToLoad);
        for (var c = [], d = 0; d < b.length; d++)
          c.push($(b[d]).find('img.rg_i')[0]);
        b = c;
        jM += b.length;
        for (c = 0; d = b[c++];) {
          var e = $(d).data("src");
          if(!e || "string" == typeof d.src && d.src) {
            kM();
          }
          else {
            $(d).on("load", kM);
            d.src = e;
          }
        }
      }
    }
    else {
      gM = false;
    }
  };

  var kM = function () {
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
