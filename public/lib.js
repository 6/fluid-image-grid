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

  var prefetchPage = function () {
    var a = currentPage();
    if (0 !== a.length) {
      for (var b = 0; b < a.length; b++) dM(a[b]);
      var c = a[a.length - 1],
        d = a[0],
        a = +EK.bgtprefetchlp; - 1 != qM && 0 < a && (window.clearTimeout(qM), qM = -1);
      uxa || (uxa = true, EK.bgtprefetch || (vxa = false));
      if (vxa) {
        var a = 0 < a ? a : 100,
          e = 1,
          b = +EK.mpfStart;
        0 < b && d >= b && (e = 1);
        qM = window.setTimeout(function () {
          for (var a = 1, b = 1; b <= a * e; b++) dM(c + b), dM(d - b)
        }, a);
      }
    }
  };

  var dM = function (a) {
    if (!(0 > a || 1 < a && 0 === $('body').scrollTop())) {
      fM.push(a);
      if(!gM) {
        hM();
      }
    }
  };

  var hM = function () {
    var a = fM.shift();
    if (undefined !== a) {
      gM = true;
      if (!window.google.isr.layout.getResultsForPage(a)) {
        hM();
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
    ++_.nM; - 1 != _.pM && (window.clearTimeout(_.pM), _.pM = -1);
    jM--;
    var a = +EK.nTbnsPending;
    a && jM <= a && hM();
  };

  var EK = {
    "bgtprefetch": "1",
    "bgtprefetchlp": 0,
    "genChunk": true,
    "mpfStart": 1,
    "nTbnsPending": 8
  };
  var yxa = new Date().getTime(),
  Swa = 0,
  Twa = 0,
  jM = 0,
  zxa = 0,
  qM = -1,
  rM = -1,
  fM = [],
  vxa = true,
  uxa = false,
  gM = false;
  _.vL = 0;
  _.wL = -1;
  _.vK = {};
  _.vK[4] || (_.vK[4] = []);

  window.init = function() {
    $(window).on("scroll", function(a) {
      var currentTime = new Date().getTime();
      if (40 < currentTime - Swa) {
        Swa = currentTime;
        Twa = _.vL;
      }
      else {
        _.vL = Twa;
      }
      var top = $('body').scrollTop(),
        b = top - _.vL;
      if (0 !== b) {
        _.vL = top;
        _.vK[4][0]({sp: top, sc: b});
      }
    });

    $(window).on("resize", function() {
      window.clearTimeout(_.wL);
      _.wL = window.setTimeout(function () {
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

    _.vK[4].push(function() {
      var a = new Date().getTime(),
      b = a - yxa;
      if (b >= 15) {
        var c = $('body').scrollTop(),
          d = c - zxa;
        yxa = a;
        zxa = c;
        a = Math.abs(d / b);
        if (- 1 != rM) {
          window.clearTimeout(rM);
          rM = -1;
        }
        prefetchPage();
      }
    });
    prefetchPage();
  };
})();
