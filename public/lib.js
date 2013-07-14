(function() {
  var _ = {};

  var currentPage = function () {
    var a = [],
      b = $('body').scrollTop();
      var pages = window.document.getElementById("rg").querySelectorAll("div.rgsh");
      if (!pages.length) return [0];
      for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        var pageTopOffset = page.hasAttribute("data-offset") ? window.parseInt(page.getAttribute("data-offset"), 10) : $(page).offset().top;
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
      fM.push(a);
      if(!gM) {
        loadImages();
      }
    }
  };

  var loadImages = function () {
    var a = fM.shift();
    if (undefined !== a) {
      gM = true;
      if (!window.google.isr.layout.getResultsForPage(a)) {
        loadImages();
      }
      else {
        var b = window.google.isr.layout.getResultsForPage(a);
        for (var c = [], d = 0; d < b.length; d++) c.push(b[d].querySelector("img.rg_i"));
        b = c;
        jM += b.length;
        for (c = 0; d = b[c++];) {
          var e = d.getAttribute("data-src");
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

  var settings = {
    "nTbnsPending": 8
  };
  var lastPrefetchTime = new Date().getTime(),
  lastScrollTime = 0,
  lastScrollY = 0,
  jM = 0,
  fM = [],
  gM = false;
  currentScrollY = 0;
  resizeTimeout = -1;

  window.init = function() {
    $(window).on("scroll", function(a) {
      var currentTime = new Date().getTime();
      if (40 < currentTime - lastScrollTime) {
        lastScrollTime = currentTime;
        lastScrollY = currentScrollY;
      }
      var top = $('body').scrollTop();
      if (top - lastScrollY > 0) {
        currentScrollY = top;
        prefetchPageIfNeeded();
      }
    });

    $(window).on("resize", function() {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(function () {
        var a = window.innerWidth || window.document.documentElement.offsetWidth,
          b = window.innerHeight || window.document.documentElement.offsetHeight;
        if (a > 0 && b > 0) {
          var gridTopOffset = $("#images-grid").offset().top,
            a = $('body').scrollTop() > gridTopOffset,
            b = null;
          c = +window.document.getElementById("images-grid-inner").offsetWidth;
          window.google.isr.layout.layoutResults(true);
          a ? (a = 0) : prefetchPage();
        }
      }, 50);
    });
    prefetchPage();
  };
})();
