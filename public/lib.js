(function() {
  var _ = {};

  var currentPage = function () {
    var a = [],
      b = $('body').scrollTop();
      var pages = $("#rg div.rgsh");
      if (!pages.length) return [0];
      for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        var pageTopOffset = $(page).data("offset") || $(page).offset().top;
        if (pageTopOffset > b && (a.push(i), pageTopOffset + page.offsetHeight >= b)) break;
      }
    return a;
  };

  var prefetchPageIfNeeded = function() {
    var currentTime = new Date().getTime();
    if (currentTime - lastPrefetchTime >= 15) {
      lastPrefetchTime = currentTime;
      prefetchPage();
    }
  };

  var prefetchPage = function () {
    var a = currentPage();
    if (0 !== a.length) {
      for (var b = 0; b < a.length; b++) dM(a[b]);
      var c = a[a.length - 1],
        d = a[0];
      window.setTimeout(function () {
        for (var a = 1, b = 1; b <= a; b++)
          dM(c + b), dM(d - b);
      }, 100);
    }
  };

  var dM = function (a) {
    if (!(0 > a || 1 < a && 0 === $('body').scrollTop())) {
      pagesToLoad.push(a);
      if(!gM) {
        loadImages();
      }
    }
  };

  var loadImages = function () {
    var pageToLoad = pagesToLoad.shift();
    if (undefined !== pageToLoad) {
      gM = true;
      if (!window.google.isr.layout.getResultsForPage(pageToLoad)) {
        loadImages();
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
    jM <= +settings.nTbnsPending && loadImages();
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
      prefetchPageIfNeeded();
    }
  };

  var onResizeThrottled = function() {
    window.clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(function () {
      window.google.isr.layout.layoutResults(true);
      if ($('body').scrollTop() > $("#images-grid").offset().top) {
        prefetchPage();
      }
    }, settings.resizeThrottleRate);
  };

  var defaultSettings = {
    "nTbnsPending": 8,
    "resizeThrottleRate": 50,
    "scrollThrottleRate": 40
  },
  settings = {},
  lastPrefetchTime = new Date().getTime(),
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
    prefetchPage();
  };
})();
