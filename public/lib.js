var _ = _ || {};
window.google = {
  time: function () {
    return new Date().getTime();
  },
  y: {},
  pmc: {
    j: {}
  }
};
(function (_) {
  var window = this;
  try {
    var aaa;
    var Ya;
    _.aa = function () {
      return function (a) {
        return a
      }
    };
    _.ka = function () {
      return function () {}
    };
    _.la = function (a) {
      return function (b) {
        this[a] = b
      }
    };
    _.ma = function (a) {
      return function () {
        return this[a]
      }
    };
    _.ua = function (a) {
      return function () {
        return a
      }
    };
    _.za = function (a, b, c) {
      a = a.split(".");
      c = c || _.Ca;
      a[0] in c || !c.execScript || c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] ? c[d] : c[d] = {} : c[d] = b
    };
    _.Fa = function (a, b) {
      for (var c = a.split("."), d = b || _.Ca, e; e = c.shift();)
        if (null != d[e]) d = d[e];
        else return null;
      return d
    };
    _.Ga = function () {};
    _.Ia = function (a) {
      a.G = function () {
        return a.JQ ? a.JQ : a.JQ = new a
      }
    };
    _.La = function (a) {
      var b = typeof a;
      if ("object" == b)
        if (a) {
          if (a instanceof Array) return "array";
          if (a instanceof Object) return b;
          var c = Object.prototype.toString.call(a);
          if ("[object Window]" == c) return "object";
          if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
          if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
      return b
    };
    _.Ma = function (a) {
      return void 0 !== a
    };
    _.Oa = function (a) {
      return "array" == (0, _.La)(a)
    };
    _.Qa = function (a) {
      var b = (0, _.La)(a);
      return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.Ra = function (a) {
      return "string" == typeof a
    };
    _.Sa = function (a) {
      return "number" == typeof a
    };
    _.Va = function (a) {
      return "function" == (0, _.La)(a)
    };
    _.Wa = function (a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b
    };
    _.Xa = function (a) {
      return a[Ya] || (a[Ya] = ++aaa)
    };
    var baa = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    };
    _.$a = function (a, b, c) {
      _.$a = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? baa : caa;
      return _.$a.apply(null, arguments)
    };
    _.ab = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var b = Array.prototype.slice.call(arguments);
        b.unshift.apply(b, c);
        return a.apply(this, b)
      }
    };
    _.db = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.ja = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a
    };
    _.fb = function (a) {
      Error.captureStackTrace ? Error.captureStackTrace(this, _.fb) : this.stack = Error().stack || "";
      a && (this.message = String(a))
    };
    _.pb = function (a) {
      return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };
    _.Ib = function (a, b) {
      var c = (0, _.Gb)(a, b),
        d;
      (d = 0 <= c) && (0, _.Jb)(a, c);
      return d
    };
    var rc = function (a) {
      for (var b in _.sc) _.sc[b] = false;
      for (var c in _.tc) _.tc[c] = false;
      b = c = null;
      if (window.opera) {
        _.sc.opera = true;
        _.tc.opera = true;
        var d = window.opera.version;
        d ? _.uc = _.vc = (0, _.Va)(d) ? d() : d : c = b = /Opera[\/\s](\S+)/
      } else 0 <= a.indexOf("MSIE") ? (_.sc.Hc = true, _.tc.Hc = true, c = b = /MSIE\s+([^\);]+)(\)|;)/) : 0 <= a.indexOf("WebKit") ? (_.sc.Yr = true, c = /Version\/(\S+)/, 0 <= a.indexOf("Silk-Accelerated") ? (_.tc.Fq = true, _.tc.bF = true, b = c) : 0 <= a.indexOf("Android") && 0 > a.indexOf("Mobile") ? (_.tc.Fq = true, 0 <= a.indexOf("Chrome") && (_.tc.WJ = true),
        b = c) : 0 <= a.indexOf("Android") && 0 <= a.indexOf("Mobile") ? (_.tc.Eq = true, 0 <= a.indexOf("Chrome") && (_.tc.gB = true), b = c) : 0 <= a.indexOf("Chrome") ? (_.tc.kw = true, b = /Chrome\/(\S+)/) : 0 <= a.indexOf("Safari") && (_.tc.Fz = true, b = c), 0 <= a.indexOf("iPad") ? (_.tc.Oq = true, _.tc.Fz || (_.tc.Fz = true, b = c)) : 0 <= a.indexOf("iPhone") && (_.tc.xt = true, _.tc.Fz || (_.tc.Fz = true, b = c)), c = /WebKit\/(\S+)/) : 0 <= a.indexOf("Gecko") && (_.sc.vx = true, 0 <= a.indexOf("Firefox") && (_.tc.qw = true, b = /Firefox\/(\S+)/), c = /rv\:([^\);]+)(\)|;)/);
      c && (_.vc = (c = c.exec(a)) ? c[1] : "");
      b && (_.uc =
        (c = b.exec(a)) ? c[1] : "", _.tc.Hc && (a = window.document ? window.document.documentMode : void 0) && a > (0, window.parseFloat)(_.uc) && (_.uc = a.toFixed(1).toString()));
      (0, _.za)("google.browser.engine.IE", _.sc.Hc, void 0);
      (0, _.za)("google.browser.engine.GECKO", _.sc.vx, void 0);
      (0, _.za)("google.browser.engine.WEBKIT", _.sc.Yr, void 0);
      (0, _.za)("google.browser.engine.OPERA", _.sc.opera, void 0);
      (0, _.za)("google.browser.engine.version", _.vc, void 0);
      (0, _.za)("google.browser.product.IE", _.tc.Hc, void 0);
      (0, _.za)("google.browser.product.FIREFOX",
        _.tc.qw, void 0);
      (0, _.za)("google.browser.product.SAFARI", _.tc.Fz, void 0);
      (0, _.za)("google.browser.product.IPAD", _.tc.Oq, void 0);
      (0, _.za)("google.browser.product.IPHONE", _.tc.xt, void 0);
      (0, _.za)("google.browser.product.CHROME", _.tc.kw, void 0);
      (0, _.za)("google.browser.product.ANDROID_TABLET", _.tc.Fq, void 0);
      (0, _.za)("google.browser.product.ANDROID_MOBILE", _.tc.Eq, void 0);
      (0, _.za)("google.browser.product.KINDLE_FIRE", _.tc.bF, void 0);
      (0, _.za)("google.browser.product.OPERA", _.tc.opera, void 0);
      (0, _.za)("google.browser.product.version",
        _.uc, void 0)
    };
    var Bc = function () {
      return _.Ca.navigator ? _.Ca.navigator.userAgent : null
    };
    var Cc = function () {
      return _.Ca.navigator
    };
    _.Ec = function (a) {
      var b;
      if (!(b = Gc[a])) {
        b = 0;
        for (var c = (0, _.pb)(String(Hc)).split("."), d = (0, _.pb)(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
          var g = c[f] || "",
            h = d[f] || "",
            k = RegExp("(\\d*)(\\D*)", "g"),
            l = RegExp("(\\d*)(\\D*)", "g");
          do {
            var n = k.exec(g) || ["", "", ""],
              p = l.exec(h) || ["", "", ""];
            if (0 == n[0].length && 0 == p[0].length) break;
            b = ((0 == n[1].length ? 0 : (0, window.parseInt)(n[1], 10)) < (0 == p[1].length ? 0 : (0, window.parseInt)(p[1], 10)) ? -1 : (0 == n[1].length ? 0 : (0, window.parseInt)(n[1], 10)) > (0 == p[1].length ?
              0 : (0, window.parseInt)(p[1], 10)) ? 1 : 0) || ((0 == n[2].length) < (0 == p[2].length) ? -1 : (0 == n[2].length) > (0 == p[2].length) ? 1 : 0) || (n[2] < p[2] ? -1 : n[2] > p[2] ? 1 : 0)
          } while (0 == b)
        }
        b = Gc[a] = 0 <= b
      }
      return b
    };
    _.Rc = function (a, b) {
      this.x = (0, _.Ma)(a) ? a : 0;
      this.y = (0, _.Ma)(b) ? b : 0
    };
    _.Sc = function (a, b) {
      this.width = a;
      this.height = b
    };
    _.Uc = function (a) {
      return a ? new _.Vc((0, _.Wc)(a)) : Xc || (Xc = new _.Vc)
    };
    _.v = function (a) {
      return (0, _.Ra)(a) ? window.document.getElementById(a) : a
    };
    _.hd = function (a) {
      var b = (0, _.id)(a);
      a = a.parentWindow || a.defaultView;
      return _.Jc && (0, _.Ec)("10") && a.pageYOffset != b.scrollTop ? new _.Rc(b.scrollLeft, b.scrollTop) : new _.Rc(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    };
    _.id = function (a) {
      return !_.jd && fd(a) ? a.documentElement : a.body
    };
    _.Wc = function (a) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    _.Vc = function (a) {
      this.A = a || _.Ca.document || window.document
    };
    _.Ud = function (a) {
      return (0, _.hd)(a.A)
    };
    _.ee = function (a, b) {
      var c = (0, _.Wc)(a);
      return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
    };
    _.fe = function (a, b) {
      return (0, _.ee)(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    _.ne = function (a) {
      a = a ? (0, _.Wc)(a) : window.document;
      return !_.Jc || (0, _.Ic)(9) || (0, _.Td)((0, _.Uc)(a)) ? a.documentElement : a.body
    };
    var oe = function (a) {
      var b;
      try {
        b = a.getBoundingClientRect()
      } catch (c) {
        return {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }
      }
      _.Jc && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
      return b
    };
    _.qe = function (a) {
      var b, c = (0, _.Wc)(a),
        d = (0, _.fe)(a, "position"),
        e = _.Wd && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
        f = new _.Rc(0, 0),
        g = (0, _.ne)(c);
      if (a == g) return f;
      if (a.getBoundingClientRect) b = oe(a), a = (0, _.Ud)((0, _.Uc)(c)), f.x = b.left + a.x, f.y = b.top + a.y;
      else if (c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
      else {
        b = a;
        do {
          f.x += b.offsetLeft;
          f.y += b.offsetTop;
          b != a && (f.x +=
            b.clientLeft || 0, f.y += b.clientTop || 0);
          if (_.jd && "fixed" == (0, _.ge)(b)) {
            f.x += c.body.scrollLeft;
            f.y += c.body.scrollTop;
            break
          }
          b = b.offsetParent
        } while (b && b != a);
        if (_.Xd || _.jd && "absolute" == d) f.y -= c.body.offsetTop;
        for (b = a;
          (b = (0, _.pe)(b)) && b != c.body && b != g;) f.x -= b.scrollLeft, _.Xd && "TR" == b.tagName || (f.y -= b.scrollTop)
      }
      return f
    };
    _.re = function (a) {
      return (0, _.qe)(a).x
    };
    _.se = function (a) {
      return (0, _.qe)(a).y
    };
    _.$e = function (a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, false) : a.attachEvent("on" + b, c);
      (a == window || a == window.document || a == window.document.documentElement || a == window.document.body) && window.google.jsad && window.google.jsa && window.google.jsa.adc(b, c, !! d)
    };
    _.vf = function (a, b) {
      wf.push(a);
      xf[a] = b;
    };
    var Cf = function (a) {
      a = xf[a];
      return Boolean(a && a._e)
    };
    _.Xf = function () {
      return window.location
    };
    _.gg = function (a, b) {
      var c = (0, _.Xa)(a),
        d = b || Caa;
      return function () {
        var b = this || _.Ca,
          b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {}),
          f = d(c, arguments);
        return b.hasOwnProperty(f) ? b[f] : b[f] = a.apply(this, arguments)
      }
    };
    var Caa = function (a, b) {
      for (var c = [a], d = b.length - 1; 0 <= d; --d) c.push(typeof b[d], b[d]);
      return c.join("\x0B")
    };
    _.ng = function () {};
    _.tg = function (a) {
      return function () {
        return a
      }
    };
    var vg = function () {};
    var wg = function (a, b) {
      this.A = a;
      this.B = b
    };
    var xg = function (a, b) {
      this.GO = a;
      this.He = b;
      this.B = [];
      this.A = [];
      this.D = []
    };
    var zg = function (a, b) {
      var c = new a.oZ;
      c.initialize(b());
      a.JB = c;
      c = (c = !! Ag(a, a.D, b())) || !! Ag(a, a.B, b());
      c || (a.A.length = 0);
      return c
    };
    var Ag = function (a, b, c) {
      a = [];
      for (var d = 0; d < b.length; d++) try {
        b[d].execute(c)
      } catch (e) {
        a.push(e)
      }
      b.length = 0;
      return a.length ? a : null
    };
    _.Bg = function (a, b) {
      this.Nx = [];
      this.J = a;
      this.H = b || null
    };
    _.Cg = function (a, b, c) {
      a.Wz = true;
      a.B = c;
      a.SE = !b;
      Dg(a)
    };
    _.Eg = function (a) {
      if (a.Wz) {
        if (!a.KM) throw new Fg(a);
        a.KM = false
      }
    };
    var Dg = function (a) {
      a.D && (a.Wz && Hg(a)) && (_.Ca.clearTimeout(a.D), delete a.D);
      a.A && (a.A.GK--, delete a.A);
      for (var b = a.B, c = false, d = false; a.Nx.length && !a.RJ;) {
        var e = a.Nx.shift(),
          f = e[0],
          g = e[1],
          e = e[2];
        if (f = a.SE ? g : f) try {
          var h = f.call(e || a.H, b);
          (0, _.Ma)(h) && (a.SE = a.SE && (h == b || h instanceof Error), a.B = b = h);
          b instanceof _.Bg && (d = true, a.RJ = true)
        } catch (k) {
          b = k, a.SE = true, Hg(a) || (c = true)
        }
      }
      a.B = b;
      d && ((0, _.Gg)(b, (0, _.$a)(a.yO, a, true), (0, _.$a)(a.yO, a, false)), b.GU = true);
      c && (a.D = _.Ca.setTimeout(Faa(b), 0))
    };
    var Fg = function () {
      _.fb.call(this)
    };
    var Jg = function () {
      _.fb.call(this)
    };
    _.x = function () {
      this.zt = {};
      this.D = [];
      this.B = [];
      this.M = [];
      this.A = [];
      this.J = [];
      this.T = {};
      this.H = this.Q = new xg([], "");
      this.V = null;
      this.L = new _.Bg
    };
    var Kg = function (a) {
      var b = a.QQ,
        c = a.isActive();
      c != b && (Lg(a, c ? "active" : "idle"), a.QQ = c);
      b = 0 < a.J.length;
      b != a.SS && (Lg(a, b ? "userActive" : "userIdle"), a.SS = b)
    };
    _.Sg = function (a, b) {
      a.isDisposed() || (zg(a.zt[b], (0, _.$a)(a.hP, a)) && Tg(a, 4), (0, _.Ib)(a.J, b), (0, _.Ib)(a.D, b), 0 == a.D.length && Ug(a), a.V && b == a.V && (a.L.Wz || a.L.Un()), Kg(a))
    };
    var Pg = function (a, b) {
      (0, _.Fb)(a.J, b) || a.J.push(b)
    };
    _.Vg = function (a, b) {
      a.H = a.zt[b]
    };
    _.Wg = function (a) {
      a.H && a.H.getId();
      a.H = null
    };
    var Ug = function (a) {
      for (; a.A.length;) {
        var b = (0, _.Pc)(a.A.shift(), function (a) {
          return !this.zt[a].JB
        }, a);
        if (0 < b.length) {
          a.IH(b);
          return
        }
      }
      Kg(a)
    };
    var Yg = function (a) {
      var b = /(^.*?\/_\/js\/)/.exec(a);
      this.D = b && b[1] || null;
      this.J = hg(a, "k");
      this.A = hg(a, "am");
      this.B = hg(a, "sv");
      this.L = hg(a, "rs")
    };
    _.fh = function () {
      this.B = []
    };
    _.nh = function (a, b) {
      this.type = a;
      this.currentTarget = this.target = b
    };
    var ph = function (a) {
      ph[" "](a);
      return a
    };
    _.qh = function (a, b) {
      a && this.init(a, b)
    };
    var vh = function (a, b, c, d, e, f) {
      this.nu = a;
      this.A = b;
      this.src = c;
      this.type = d;
      this.capture = !! e;
      this.gA = f;
      this.key = ++Oaa;
      this.Kx = this.nC = false
    };
    _.Oh = function () {
      this.L = {};
      this.mr = this
    };
    var Uh = function (a, b, c, d) {
      _.Oh.call(this);
      this.V = a.replace(Raa, "_");
      this.Da = a;
      this.aF = b || null;
      this.$ = c ? Th(c) : null;
      this.H = [];
      this.T = {};
      this.ca = this.Q = d || (0, _.Ve)();
      this.A = {};
      this.A["main-actionflow-branch"] = 1;
      this.J = new _.gf;
      this.D = false;
      this.B = {};
      this.M = {};
      this.va = false;
      c && (b && "click" == c.type) && this.action(b);
      Vh.push(this)
    };
    var Xh = function (a, b) {
      _.nh.call(this, a, b)
    };
    var $h = function (a, b) {
      this.B = {};
      this.H = {};
      this.V = {};
      this.D = null;
      this.J = {};
      this.A = [];
      this.T = a || Waa;
      this.M = b
    };
    var Waa = function (a) {
      return new Uh(a.action, a.actionElement, a.event)
    };
    var di = function (a, b) {
      var c;
      window.document.createEvent ? (c = window.document.createEvent("Event"), c.initEvent(b || a.type, true, true)) : (c = window.document.createEventObject(), c.type = b || a.type);
      return c
    };
    var ei = function (a) {
      var b = a.__r_ctrl;
      b && !b.fM && (b = null);
      b || (b = a.getAttribute("data-rtid"), (b = _.fi[b]) && (a.__r_ctrl = b));
      return b
    };
    var Zaa = function (a, b) {
      for (var c = 0; c < a.length;) {
        var d = a[c];
        b.B.hasOwnProperty(d.action) || b.H.hasOwnProperty(d.action.split(".")[0]) ? ((0, _.bi)(d), (0, _.Ob)(a, c, 1)) : c++
      }
    };
    var $aa = function (a, b, c) {
      var d = "";
      c && (d += c + ":");
      return d += a + "." + b
    };
    var aba = function (a, b, c) {
      gi[$aa(a, b)] = c;
      var d = {};
      d[b] = function (a) {
        var b = a.aF,
          d = (0, _.mh)(b),
          h = a.event();
        if (c(b, d, h, a) && (a = hi[h.type]))
          for (b = 0; b < a.length; ++b) a[b].Un(h)
      };
      Xaa(ii, a, null, d)
    };
    _.ji = function (a, b, c) {
      if (window.google.jsad) {
        for (var d in b) aba(a, d, b[d]);
        if (!c)
          for (d in ki[a] = ki[a] || [], b)(0, _.Fb)(ki[a], d) || (0, _.Hb)(ki[a], d)
      }
    };
    _.li = function (a, b) {
      for (var c = 0; c < b.length; ++c) {
        var d = b[c],
          e = null,
          e = a ? a + "." + d : d;
        delete ii.B[e];
        a in ki && ((0, _.Ib)(ki[a], b[c]), 0 == ki[a].length && delete ki[a])
      }
    };
    var mi = function (a, b) {
      var c = hi[a];
      if (!c) return null;
      for (var d = 0; d < c.length; ++d)
        if (c[d].Un == b) return c[d];
      return null
    };
    var bba = function (a, b) {
      try {
        (0, _.ah)(b)
      } catch (c) {}
    };
    var cba = function (a) {
      var b = (0, _.Mf)();
      b && b.Mb();
      window.google.j && window.google.j.init || a && (0, _.Yf)(a.href);
      return true
    };
    var dba = function (a, b) {
      (0, _.Yf)(b.url)
    };
    var fba = function (a, b) {
      window.open(b.url, b.target || "_blank", b.opt || "")
    };
    var gba = function (a) {
      (0, _.Va)(a.select) && a.select()
    };
    var ni = function () {};
    var oi = function (a, b) {
      this.J = a;
      this.H = b
    };
    _.pi = function () {
      return _.pi.A.A()
    };
    var qi = function () {};
    var ri = function (a) {
      if (_.pi.B) return "";
      if (!a.H && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
          var d = b[c];
          try {
            return new window.ActiveXObject(d), a.H = d
          } catch (e) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }
      return a.H
    };
    var hba = function (a, b) {
      var c = b.xhr,
        d = (0, _.pi)();
      d.open("GET", c, true);
      d.send("");
      c = (0, _.ad)("nossln");
      (0, _.Ce)(c, false)
    };
    _.si = function (a) {
      var b = {};
      if (a) {
        a = (0, window.decodeURIComponent)(a.replace(/\+/g, " "));
        a = a.split(",");
        for (var c = 0, d; d = a[c++];) {
          d = d.split(":");
          var e = d[1] || "",
            e = e.replace(/_3/g, ":").replace(/_2/g, ",").replace(/_1/g, "_");
          b[d[0]] = e
        }
      }
      return b
    };
    _.ti = function (a) {
      return a && (0, _.Fd)(a) ? (0, _.kh)(a, "ved") || "" : ""
    };
    _.ui = function (a) {
      if (a)
        for (var b = 0, c; c = a.childNodes[b]; b++)
          if (c = (0, _.ti)(c)) return c;
      return ""
    };
    _.vi = function () {
      this.A = [];
      this.B = ""
    };
    _.wi = function (a, b, c) {
      a.A.push({
        KF: b,
        targetElement: c || "",
        bH: 0
      })
    };
    var xi = function (a, b, c) {
      a.A.push({
        KF: b || "",
        targetElement: c || "",
        bH: 1
      })
    };
    var yi = function (a, b) {
      var c = "";
      b && (c = "string" == typeof b ? b : window.google.getEI(b));
      return c && c != a.B ? c : ""
    };
    _.zi = function (a) {
      for (var b = a.A.length, c = [], d, e, f = 0; f < b; ++f)(d = yi(a, a.A[f].targetElement)) || 0 != a.A[f].bH ? 1 == a.A[f].bH ? c.push(a.A[f].KF + "." + d + ".h") : 2 == a.A[f].bH ? (e = (e = yi(a, a.A[f].Q3)) ? "." + e : "", a.A[f].MP && a.A[f].MP && c.push(a.A[f].KF + "." + d + ".c." + a.A[f].MP + e)) : c.push(a.A[f].KF + "." + d) : c.push(a.A[f].KF);
      a = "&vet=1" + c.join(";");
      return a = 0 < b ? a : ""
    };
    _.Ai = function (a) {
      for (var b = 0; b < _.Bi.length; b += 2) a = a.replace(RegExp(_.Bi[b], "g"), _.Bi[b + 1]);
      return a
    };
    _.Ci = function (a) {
      a || (a = window.event);
      return a.target || a.srcElement
    };
    _.Di = function (a) {
      a = a || window.event;
      _.sc.Hc ? a.cancelBubble = true : a.stopPropagation && a.stopPropagation()
    };
    var Ei = function (a) {
      (0, _.Ce)(a, false);
      Fi[a.id] && (0, _.af)(window.document.body, "click", Fi[a.id])
    };
    _.Gi = function (a, b, c, d, e, f, g) {
      var h = a ? "&ved=" + a : "",
        k = b ? window.google.getEI(b) : window.google.kEI,
        l = c || [];
      d = d || [];
      e = e || [];
      f = f || "";
      g = g || "";
      var n = new _.vi,
        p = l.length,
        m = e.length;
      n.B = k;
      for (k = 0; k < p; k++) k >= m || e[k] ? (0, _.wi)(n, l[k], d[k]) : xi(n, l[k], d[k]);
      0 == p && (0 < e.length && !e[0]) && xi(n);
      l = (0, _.zi)(n);
    };
    _.Hi = function (a, b, c, d, e) {
      var f = a ? (0, _.ti)(a) : "",
        g = [];
      if (b)
        for (var h = 0, k; k = b[h]; h++)(k = (0, _.ti)(k)) && g.push(k);
      (0, _.Gi)(f, a, g, b, c, d, e)
    };
    _.Ii = function () {
      var a = _.Ji.value;
      _.Ki = a ? (0, _.kf)(a) : {}
    };
    _.Li = _.Li || {};
    _.Ca = this;
    Ya = "closure_uid_" + (1E9 * Math.random() >>> 0);
    aaa = 0;
    _.Ve = Date.now || function () {
      return +new Date
    };
    Function.prototype.bind = Function.prototype.bind || function (a, b) {
      if (1 < arguments.length) {
        var c = Array.prototype.slice.call(arguments, 1);
        c.unshift(this, a);
        return _.$a.apply(null, c)
      }
      return (0, _.$a)(this, a)
    };
    (0, _.db)(_.fb, Error);
    _.fb.prototype.name = "CustomError";
    var daa;
    var ub;
    var tb;
    var sb;
    var rb;
    rb = /&/g;
    sb = /</g;
    tb = />/g;
    ub = /\"/g;
    daa = /[&<>\"]/;
    _.iba = 2147483648 * Math.random() | 0;
    var Kb;
    Kb = Array.prototype;
    _.Gb = Kb.indexOf ? function (a, b, c) {
      return Kb.indexOf.call(a, b, c)
    } : function (a, b, c) {
      c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
      if ((0, _.Ra)(a)) return (0, _.Ra)(b) && 1 == b.length ? a.indexOf(b, c) : -1;
      for (; c < a.length; c++)
        if (c in a && a[c] === b) return c;
      return -1
    };
    _.forEach = Kb.forEach ? function (a, b, c) {
      Kb.forEach.call(a, b, c)
    } : function (a, b, c) {
      for (var d = a.length, e = (0, _.Ra)(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    };
    _.Pc = Kb.filter ? function (a, b, c) {
      return Kb.filter.call(a, b, c)
    } : function (a, b, c) {
      for (var d = a.length, e = [], f = 0, g = (0, _.Ra)(a) ? a.split("") : a, h = 0; h < d; h++)
        if (h in g) {
          var k = g[h];
          b.call(c, k, h, a) && (e[f++] = k)
        }
      return e
    };
    _.Rg = Kb.map ? function (a, b, c) {
      return Kb.map.call(a, b, c)
    } : function (a, b, c) {
      for (var d = a.length, e = Array(d), f = (0, _.Ra)(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
      return e
    };
    _.Ig = Kb.some ? function (a, b, c) {
      return Kb.some.call(a, b, c)
    } : function (a, b, c) {
      for (var d = a.length, e = (0, _.Ra)(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a)) return true;
      return false
    };
    _.ff = Kb.every ? function (a, b, c) {
      return Kb.every.call(a, b, c)
    } : function (a, b, c) {
      for (var d = a.length, e = (0, _.Ra)(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && !b.call(c, e[f], f, a)) return false;
      return true
    };
    var mc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var Ac;
    _.sc = {
      Hc: false,
      vx: false,
      Yr: false,
      opera: false
    };
    _.tc = {
      Hc: false,
      qw: false,
      Fz: false,
      Oq: false,
      xt: false,
      kw: false,
      WJ: false,
      gB: false,
      Fq: false,
      Eq: false,
      opera: false,
      bF: false
    };
    Ac = null;
    _.vc = "";
    _.uc = "";
    (0, _.za)("google.browser.init", rc, void 0);
    (0, _.za)("google.browser.compareVersions", _.wc, void 0);
    (0, _.za)("google.browser.isEngineVersion", _.xc, void 0);
    (0, _.za)("google.browser.isProductVersion", _.yc, void 0);
    (0, _.za)("google.browser.getBrowserDimension", _.zc, void 0);
    (0, _.za)("google.browser.Dimension", {
      HEIGHT_WITH_SCROLLBARS: 0,
      HEIGHT_WITHOUT_SCROLLBARS: 1,
      WIDTH_WITH_SCROLLBARS: 2,
      WIDTH_WITHOUT_SCROLLBARS: 3
    }, void 0);
    rc(window.google.ua || window.navigator.userAgent);
    var aj;
    var Yi;
    var Xi;
    var ke;
    var Qi;
    var Pi;
    var Oi;
    var Ni;
    var Mi;
    Qi = Pi = Oi = Ni = Mi = false;
    var Vi;
    if (Vi = Bc()) {
      var jba = Cc();
      Mi = 0 == Vi.indexOf("Opera");
      Ni = !Mi && -1 != Vi.indexOf("MSIE");
      Pi = (Oi = !Mi && -1 != Vi.indexOf("WebKit")) && -1 != Vi.indexOf("Mobile");
      Qi = !Mi && !Oi && "Gecko" == jba.product
    }
    _.Xd = Mi;
    _.Jc = Ni;
    _.Wd = Qi;
    _.jd = Oi;
    _.Wi = Pi;
    Xi = Cc();
    Yi = Xi && Xi.platform || "";
    _.ie = -1 != Yi.indexOf("Mac");
    _.Ri = -1 != Yi.indexOf("Win");
    _.Si = -1 != Yi.indexOf("Linux");
    ke = !! Cc() && -1 != (Cc().appVersion || "").indexOf("X11");
    var Zi = Bc();
    _.Ti = !! Zi && 0 <= Zi.indexOf("Android");
    _.Ui = !! Zi && 0 <= Zi.indexOf("iPhone");
    _.$i = !! Zi && 0 <= Zi.indexOf("iPad");
    n: {
      var bj = "",
        cj;
      if (_.Xd && _.Ca.opera) var dj = _.Ca.opera.version,
      bj = "function" == typeof dj ? dj() : dj;
      else if (_.Wd ? cj = /rv\:([^\);]+)(\)|;)/ : _.Jc ? cj = /MSIE\s+([^\);]+)(\)|;)/ : _.jd && (cj = /WebKit\/(\S+)/), cj) var ej = cj.exec(Bc()),
      bj = ej ? ej[1] : "";
      if (_.Jc) {
        var fj = Dc();
        if (fj > (0, window.parseFloat)(bj)) {
          aj = String(fj);
          break n
        }
      }
      aj = bj
    }
    var Hc = aj,
      Gc = {}, gj = _.Ca.document,
      haa = gj && _.Jc ? Dc() || ("CSS1Compat" == gj.compatMode ? (0, window.parseInt)(Hc, 10) : 5) : void 0;
    var Xc, iaa = !_.Jc || (0, _.Ic)(9),
      kaa = !_.Wd && !_.Jc || _.Jc && (0, _.Ic)(9) || _.Wd && (0, _.Ec)("1.9.1"),
      Ld = _.Jc && !(0, _.Ec)("9"),
      laa = _.Jc || _.Xd || _.jd;
    _.q = _.Rc.prototype;
    _.q.clone = function () {
      return new _.Rc(this.x, this.y)
    };
    _.q.ceil = function () {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this
    };
    _.q.floor = function () {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this
    };
    _.q.round = function () {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this
    };
    _.q.translate = function (a, b) {
      a instanceof _.Rc ? (this.x += a.x, this.y += a.y) : (this.x += a, (0, _.Sa)(b) && (this.y += b));
      return this
    };
    _.q.scale = function (a, b) {
      var c = (0, _.Sa)(b) ? b : a;
      this.x *= a;
      this.y *= c;
      return this
    };
    _.q = _.Sc.prototype;
    _.q.clone = function () {
      return new _.Sc(this.width, this.height)
    };
    _.q.isEmpty = function () {
      return !(this.width * this.height)
    };
    _.q.ceil = function () {
      this.width = Math.ceil(this.width);
      this.height = Math.ceil(this.height);
      return this
    };
    _.q.floor = function () {
      this.width = Math.floor(this.width);
      this.height = Math.floor(this.height);
      return this
    };
    _.q.round = function () {
      this.width = Math.round(this.width);
      this.height = Math.round(this.height);
      return this
    };
    _.q.scale = function (a, b) {
      var c = (0, _.Sa)(b) ? b : a;
      this.width *= a;
      this.height *= c;
      return this
    };
    var cd = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width"
    }, maa = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
      }, Nd = {
        IMG: " ",
        BR: "\n"
      };
    var Ef, Ff, xf = {}, wf = [],
      yf = false,
      lba = _.kf;
    google.med = function() {
      EK = window.google.pmc.jstr.meta;
      FK = false;
      GK = EK.showMoreResults;
      Bwa = EK.numResults;
      _.oK = EK.genChunk;
      _.nK = zK = true;
      yK = "rg_di";
      AK = "div";
      HK = false;
      IK(window, "scroll", function(a) {
        var currentTime = new Date().getTime();
        if (40 < currentTime - Swa) {
          Swa = currentTime;
          Twa = _.vL;
        }
        else {
          _.vL = Twa;
        }
        var top = scrollTop(),
          b = top - _.vL;
        if (0 !== b) {
          _.vL = top;
          _.vK[4][0]({sp: top, sc: b});
        }
      });
      IK(window, "resize", function() {
        window.clearTimeout(_.wL);
        _.wL = window.setTimeout(function () {
          var a = window.innerWidth || window.document.documentElement.offsetWidth,
            b = window.innerHeight || window.document.documentElement.offsetHeight;
          if (a > 0 && b > 0) {
            var grid = _.se(window.document.getElementById("images-grid")),
              a = scrollTop() > grid,
              b = null;
            c = +window.document.getElementById("images-grid-inner").offsetWidth;
            window.google.isr.layout.layoutResults(true);
            a ? (a = 0, mL(a)) : BL();
          }
        }, 50);
      });
      window.google.isr.url = "/";
      window.google.isr.bgd = TK;
      _.XK = true;
      _.Bxa();
      yf = true;
    };
    (0, _.za)("google.register", _.vf, void 0);
    var yaa;
    var Jf;
    var Hf;
    var Kf;
    Hf = [];
    Jf = [];
    yaa = window.google.j && window.google.j.en;
    _.hj = _.Mf;
    var Of = {};
    (0, _.za)("google.msg.listen", _.Nf, void 0);
    (0, _.za)("google.msg.unlisten", _.Pf, void 0);
    (0, _.za)("google.msg.send", _.Qf, void 0);

    var Zf, Baa = (0, _.Xf)().protocol + "//" + (0, _.Xf)().host;

    _.ng.prototype.Md = false;
    _.ng.prototype.isDisposed = (0, _.ma)("Md");
    _.ng.prototype.dispose = function () {
      this.Md || (this.Md = true, this.La())
    };
    _.ng.prototype.La = function () {
      if (this.Za)
        for (; this.Za.length;) this.Za.shift()()
    };
    var nj;
    _.mj = (0, _.tg)(false);
    nj = (0, _.tg)(true);
    (0, _.db)(vg, _.ng);
    vg.prototype.initialize = (0, _.ka)();
    wg.prototype.execute = function (a) {
      this.A && (this.A.call(this.B || null, a), this.A = this.B = null)
    };
    wg.prototype.abort = function () {
      this.B = this.A = null
    };
    (0, _.db)(xg, _.ng);
    _.q = xg.prototype;
    _.q.oZ = vg;
    _.q.JB = null;
    _.q.getId = (0, _.ma)("He");
    _.q.aI = function (a, b) {
      return yg(this, this.B, a, b)
    };
    _.q.La = function () {
      xg.ja.La.call(this);
      (0, _.rg)(this.JB)
    };
    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    _.q = _.Bg.prototype;
    _.q.Wz = false;
    _.q.SE = false;
    _.q.RJ = false;
    _.q.GU = false;
    _.q.KM = false;
    _.q.GK = 0;
    _.q.yO = function (a, b) {
      this.RJ = false;
      (0, _.Cg)(this, a, b)
    };
    _.q.Un = function (a) {
      (0, _.Eg)(this);
      (0, _.Cg)(this, true, a)
    };
    (0, _.db)(Fg, _.fb);
    (0, _.db)(Jg, _.fb);
    (0, _.db)(_.x, _.ng);
    (0, _.Ia)(_.x);
    _.q = _.x.prototype;
    _.q.PJ = false;
    _.q.eV = false;
    _.q.FL = null;
    _.q.pG = 0;
    _.q.QQ = false;
    _.q.SS = false;
    _.q.dR = null;
    _.q.H0 = function (a, b) {
      if ((0, _.Ra)(a)) {
        for (var c = a.split("/"), d = [], e = 0; e < c.length; e++) {
          var f = c[e].split(":"),
            g = f[0];
          if (f[1])
            for (var f = f[1].split(","), h = 0; h < f.length; h++) f[h] = d[(0, window.parseInt)(f[h], 36)];
          else f = [];
          d.push(g);
          this.zt[g] = new xg(f, g)
        }
        b && b.length ? ((0, _.Nb)(this.D, b), this.V = b[b.length - 1]) : this.L.Wz || this.L.Un();
        this.H == this.Q && (this.H = null, zg(this.Q, (0, _.$a)(this.hP, this)) && Tg(this, 4))
      }
    };
    _.q.hP = (0, _.ma)("dR");
    _.q.isActive = function () {
      return 0 < this.D.length
    };
    _.q.load = function (a, b) {
      return Mg(this, [a], b)[a]
    };
    Yg.prototype.H = function (a) {
      a = Kaa(this, a);
      var b = window.document.createElement("script");
      b.src = a;
      (0, _.Me)(b)
    };
    var $g = false;
    (0, _.za)("google.load", _.ah, void 0);
    (0, _.za)("google.loadAll", function (a) {
      var b = Zg();
      Mg(b, a, void 0)
    }, void 0);
    var ch = true,
      dh = _.sc.Hc && 0 > (0, _.wc)(_.vc, "9");
    _.fh.prototype.Id = (0, _.ma)("A");
    _.fh.prototype.toString = function () {
      return this.A.toString()
    };
    var Maa = !_.Jc || (0, _.Ic)(9),
      Dh = !_.Jc || (0, _.Ic)(9),
      mba = _.Jc && !(0, _.Ec)("9");
    !_.jd || (0, _.Ec)("528");
    _.Wd && (0, _.Ec)("1.9b") || _.Jc && (0, _.Ec)("8") || _.Xd && (0, _.Ec)("9.5") || _.jd && (0, _.Ec)("528");
    _.Wd && !(0, _.Ec)("8") || _.Jc && (0, _.Ec)("9");
    _.q = _.nh.prototype;
    _.q.dispose = (0, _.ka)();
    _.q.nA = false;
    _.q.bS = true;
    ph[" "] = _.Ga;
    (0, _.db)(_.qh, _.nh);
    var Naa = [1, 4, 2];

    _.q.mW = (0, _.ma)("tl");
    var uh = "closure_listenable_" + (1E6 * Math.random() | 0),
      Oaa = 0;
    var Nh;
    var Bh;
    var zh;
    _.Ch = {};
    zh = {};
    _.Ah = {};
    Bh = {};
    Nh = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    (0, _.db)(_.Oh, _.ng);
    _.Oh.prototype[uh] = true;
    _.q = _.Oh.prototype;
    _.q.VH = null;
    _.q.wM = (0, _.la)("VH");

    var oj, pj, qj, rj;
    rj = qj = pj = oj = false;
    var sj = Bc();
    sj && (-1 != sj.indexOf("Firefox") || -1 != sj.indexOf("Camino") || (-1 != sj.indexOf("iPhone") || -1 != sj.indexOf("iPod") ? oj = true : -1 != sj.indexOf("iPad") ? pj = true : -1 != sj.indexOf("Android") ? qj = true : -1 != sj.indexOf("Chrome") || -1 != sj.indexOf("Safari") && (rj = true)));
    _.tj = oj;
    _.uj = pj;
    _.vj = qj;
    _.ci = rj;
    (0, _.db)(Uh, _.Oh);
    var Vh = [],
      Yh = new _.Oh,
      Raa = /[~.,?&-]/g;
    (0, _.db)(Xh, _.nh);
    $h.prototype.Q = function (a) {
      if ((0, _.Oa)(a)) this.A = (0, _.Mb)(a), ai(this);
      else {
        var b = a.action,
          c = b.split(".")[0],
          d = this.H[c],
          e;
        this.M ? e = this.M(a) : d ? d.accept(a) && (e = d.handle) : e = this.B[b];
        e ? (c = this.T(a), e(c), Wh(c, "main-actionflow-branch")) : (e = Th(a.event), a.event = e, this.A.push(a), d) || ((a = this.V[c], a) ? a.NU || (a.S3(this, c), a.NU = true) : !this.D || c in this.J || (this.J[c] = true, this.D(this, c)))
      }
    };
    _.wj = {};
    _.xj = {};
    _.yj = {};
    _.fi = {};
    var ii = new $h;
    ii.H.r = {
      accept: function (a) {
        return !!ei(a.actionElement)
      } || nj,
      handle: function (a) {
        var b = ei(a.aF);
        if (b) {
          var c = _.wj[a.Da.split(".")[1]];
          c && (c.call(b, b.fM.nZ, a), _.zj.H())
        }
      }
    };
    var ki = {}, gi = {}, hi = {};
    var Fi;
    Fi = {};
    var Cj;
    _.Aj = [];
    _.Bj = "/";
    Cj = [];
    _._ModuleManager_initialize = (0, _.$a)(_.x.prototype.H0, _.x.G());
    (0, _._ModuleManager_initialize)("sy0/bct:0/sy1/sy2/sy4/sy3:2,3,4/cr:2,3,4,5/crp:4/sy5/cdos:8/sy7/sy6:a/c:a,b/cb/sy9/sy8:e/csi:e,f/sy10/dbm:h/el/gf/sy11/hsm:l/sy12/hv:n/riu/sy13/sy15/sy14:r/sy18/sy16:2,a,q,s,t/sy19:l,u/sy21:u/sy25/sy26:u,v,x/sy23:u/sy24:u,w,z/sy27:u,v,w/sy28:11,l,u,v/sy20:10,11,12,3,4,5,f,l,q,s,u,v,w,y,z/j:10,11,12,13,2,3,4,5,a,e,f,l,q,r,s,t,u,v,w,x,y,z/sy29:u,v,y,z/jp:15,2,a,l,q,r,s,t,u,v,x,y,z/kx/sy30/lc:18,a/sy31/hov:1a/mb:a/o3i/oh/sy32/sy33/sy34:1f,1g/aaq:1f,1g,1h/sy35:x/abd:1j,a,e,x/sy36/sy37/sy38/sy39:1n/sy41/sy42:1p/sy43:1q/sy46:1h,1l,1n,1o/sy44:1h,1l,1n,1o,1q,1r,1s/sy45:1h,1l,1n,1o,1s/sy47:1h,1l,1n,1o,1q,1s,1t,1u/sy48:1h,1l,1s,1t,1u,1v/sy49:1h,1l,1s,1t,1v/sy40:1m,1n,1o,1q,1w,1x/adct:1f,1g,1h,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y/adch/adp/ca:a/adnsp/ddad/fa/adso:h/sy50/sy52:1j,27/lare:1j,27,28,x/sy54:q/sy56/sy55:2a,2b,a,q/sy53:18,1n,27,2c,q/larh:18,1n,27,2a,2b,2c,2d,a,q/sy57:a,x/sy58:2f/adsm:2f,2g,a,x/sy59/sy60:2i/sy62/sy61:2i,2j,2k/sy64/sy65:2i,2m/sy63:2i,2l,2m,2n/sy72/sy67:1a,2p/sy68/sy69:2r/sy70/sy71:2s,2t/sy74:1q,1r/sy75:1f,1n,2r/sy73:1q,1r,2v,2w/sy66:1f,1h,1n,1q,1r,2p,2q,2u,2w,2x/sy76:1q,1r,2w,2x/sy77:2z/pla:1a,1f,1g,1h,1l,1n,1o,1p,1q,1r,1s,1t,1u,1v,2i,2j,2k,2l,2m,2n,2o,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,2z,30/sy78:2b/sy79:1g,1h,1l,1o,2b,32/cu:1f,1g,1h,1l,1n,1o,2b,32,33,a/sy80/wta:35/wmh:e/sem:e/pih:n/sy81/sy82/sy83:1m,2r,2s,t/sy84:1p,2r,3b,3c/als:1f,1g,1j,1l,1m,1n,1o,1p,1q,2f,2r,2s,3a,3b,3c,3d,a,t,x/sy85/rmcl:3f/sy86:3f,q/rkab:3f,3h,q/sy87/sy88:2i,2l,2m,2n/sy89:3j/sy90:a/sy91:1h,1s,1t/sy92:1h,1u,2p,2q/llc:11,1a,1f,1g,1h,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y,2,2a,2b,2c,2i,2j,2k,2l,2m,2n,2o,2p,2q,2t,32,3f,3h,3j,3k,3l,3m,3n,3o,a,l,q,r,s,t,u,v,w/aspn/sy93:15,2f/async:15,2,2f,3r,a,l,q,r,s,t,u,v,x,y,z/lb:15,2,3,a,l,q,r,s,t,u,v,x,y,z/bgd/col:1f,1g,1h,1j,2b,32,r,x/d_kbn:r,s/dict/gol:1f/sy95/sy96:3z/zr:3z,40/sy97/sy98/sy99/sy100:12,43,44,q,s,u,v/esp:11,12,18,1f,1j,1n,2,2a,2b,2c,42,43,44,45,a,l,q,r,s,t,u,v,w,x/erh/sy101/sy102:2i,2l,3j,48/cfm:2i,2j,2k,2l,3j,48,49/vfm:2i,2j,2k,2l,3j,48,49/fu:1f,1g,1h,1l,1n,1o,2b,32,33,a/foot/sy103/spg:4e/sy104:2f/hw:2f,4g,a,x/ht:1m/hss/hkp/hfm/sy107/sy109:4m/sy108:4m/sy105:10,1j,2c,2i,3j,4m,4n,4o,a/sy106/sy110/boee:10,1f,1j,1n,1o,2,2a,2b,2c,2i,3j,3z,40,4m,4n,4o,4p,4q,4r,a,q,r,s,t,u,w,x,z/sy113:2i,48/sy111:1n,2j,2k,3,4t/sy112:1f,1p/irc:1f,1j,1m,1n,1o,1p,2,2i,2j,2k,2p,2r,2s,3,3b,3c,3d,4,48,4m,4q,4r,4t,4u,4v,5,a,l,t,x/sy114:4o/sy115:2i,2m,2n,3j,4m,4t,4x,a,l/sy116:4m,4o,4x,a/bb:2i,2m,2n,3j,48,4m,4o,4t,4x,4y,4z,a,l/ivf:4m,4o,4x,4z,a/prw:1f,1p,4v/jstr:10,1j,2,2a,2b,2c,2i,3j,4m,4n,4o,4p,a,q,r,s,t,u,w,x,z/str:10,1j,2,2a,2b,2c,2i,3j,4m,4n,4o,4p,a,q,r,s,t,u,w,x,z/ifl/itp:1j,2f,2i,2j,4g,a,l,x/sy117/an:57/kpvlbx:1n/knf:57/sy118:3f,l/kp:3f,5b,l/rk:1j,3,3f,x/lpt:1j,2i,48,4t,x/la/lr:2i,2j,2k,2l,2m,2n,2o,3k,x/dob/sy119/fy:1f,1g,1h,1l,1n,1o,1p,1q,1r,1s,1t,1u,1v,1x,5i/fob:2i,2j,2k,2l,2m,2n,3k/shlb:1m,1n,1p,2r,2s,3b,3c,3d,5i,l,t/cwsc:1n,2i,3j/cwuc/sy120/sc:5i,5o/sc3d:5o/sy121/sy122:5r/wobd:5r,5s/hp:1f,1g,1h,1l,1n,1o,2b,32,33/imap:3j,3l/lu:1j,27,28,x/pl/plcs:1j,27,28,x/sy124:1f,1p/sy123:1h,1l,1n,2r,2w,5z/lor:15,1f,1g,1h,1l,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,2,2f,2r,2w,3r,5z,60,a,l,q,r,s,t,u,v,x,y,z/mfd:2i,2j,2k,2l,2m,2n/m:18,1n,27,2a,2b,2c,2d,a,q/nvm:1n,2i,2j,2m,48/nqsb/mock/nmd/nws/ppl:1f,1p,5z,a/pi:4e,a/prs:a/sy125/sy126/psrpc:1a,1f,1g,1h,1l,1m,1n,1o,1p,1q,1r,1s,1u,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,2z,3b,3c,3d,3o,6c,6d,t/gnko:6d/sy127:2p,3a,x/sy128:1f,1h,1l/gksp:1f,1g,1h,1l,1n,1o,1p,1q,1r,1s,1t,1u,1v,1x,2f,2p,2r,2s,2t,2u,2w,3a,5z,60,6d,6g,6h,a,x/pgl:1j,5i,q,x/pis:1j,5i,x/psj:1f,1g,1h,1l,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,6c/pmp/ptbm:1f,1g,1h,1l,1n,1o,1p,1q,1r,1s,1t,2r,2v,2w/pswtr/pstt:1f,1g,1h,1l,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,6c/dvdu/ob/qi:8,q,x/spr/ctm:2i/gsac:5r/sy129/sy131/sy130:6w,6x/gsai:2i,2m,2n,3j,48,4m,4o,4t,4x,4y,5r,6w,6x,6y,a,l/csp/bds:3z,40,x/ntf:x/sy132/ho:1f,1j,2p,6x,73,x/sy133/srst:1j,2a,6d,75,q,x/cirosm:2i,2j,2k,2l,2m,2n,2o,3j,48/st/sfa:3z/sic/skp:1f,2i,2j,2k,2l,3b/exy:1n,4m,4n/sy134:4u/tnv:1n,2i,2j,2k,2l,2m,2n,2o,3,48,4t,4u,7d/tnt:2i,2j,2k,2l,2m,2n,2o,3j/sy135/tdu:1f,2i,2j,2k,2l,2m,2n,2o,5o,75,7g/tts:l/duf:7g/vt:1j,2f,a,x/pcc/p:10,11,12,13,2,3,4,43,44,45,5,a,e,f,l,q,r,s,t,u,v,w,x,y,z/rcs/r/rem:18,2f,a,x/ssb/sf/sy136/srl:35,3z,40,7s/tbt/sy137/tbpr:7v/tbui:2a,2b,2c,7v,a,q/ttbcdr:1f,1g,1h,1l,1n,1o,2b,2i,2j,2k,3,32,33,48,4t,4u,7d/vm:2/vac/sb:18,a,b/sb_dcsp:18,a,b/sb_he:a,b/sb_sri:18,a,b/sb_mas:a,b/sb_mob:a,b/sb_mobh:a,b/sb_mps:a,b/sb_omni:42,44,a,b/sb_tab:a,b/tr:1f,1g,1h,1l,1n,6h/wobnm:2i,2j,2k,2l,2m,2n,2o,48,4t,5r,5s/sy138:a/ppr:8d,a/sy139:6d/sbub:1a,1f,1g,1h,1n,1p,1q,1r,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,6d,8f/tbh/sy140/sy141:6w/sy142:0,6w,6y,8i,8j,a/dvl:0,6w,6x,6y,8i,8j,8k,a/tic/tiu:2i,2m,2n,3j,48,4m,4o,4t,4x,4y,4z,a,l/sy143:27,3j/vs:27,3j,8o/sy144/agsa:5r,8q,l/agsacm:1f,1g,1h,1l,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,3n/gsaiv:4m,4o,4x,4z,5r,a/gsapr:5r/gsarm:8q/sac:6d/epb:r,s/ccu/aur/idck/bihu:n/sy145/mpck:1f,1l,1m,1n,2r,2s,3c,8d,92,a,t/psb:6d/sdl:1a,1f,1g,1h,1l,1n,1o,1s,1u,2p,2q,3o,6d/prec:1f,1g,1h,1l,1n,1o,1p,1q,1r,1s,1t,1u,1v,1x,2f,2r,2v,2w,2x,2z,3,5z,60,6d,73,a,x/stsm:1f,1n,1p,1q,1r,2r,2v,2w,2x,2z,30,6d,8f/am:35,7s/stt:1f,1g,1h,1l,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,6c,6d/spop:1f,1m,1n,1p,2f,2p,2r,2s,3a,3b,3c,3d,6d,6g,92,a,t,x/kpt:2i,2j,2k,2l,2m,2n,2o,3f,5b,l/tlie:3m,a/tab:2i,a/vst/sy146/owt:2i,2j,2k,2l,2m,2n,2o,48,4t,9f/duf2:7g/nmns:2i,2j,2k,2l,2m,2n,2o/sy148/sy147:3j,9j/miuv:3j,4m,4o,4x,4z,9j,9k,a,l/ms:3j,4m,9j,9k,a/kpm:2i,2j,2k,2l,2m,2n,2o,3f,3j,5b,l/kptm:4r/mlr/wobf:5r,5s/wob:3j,5r,5s/df:0,6w,6x,6y,8i,8j,8k,a/mld:27,3j,8i,8o,9j,a,l/mgq:0,8i/mbhp:1j,x/mfh:3j/mbje/mbpe:43/mbsf:a/mhsb:r,s/msbb:6w,8j,r,s/mbsk/mbsb/mad:2f,2g,a,x/pmsrpc/owm:3j,9f");

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.Oj = function () {};
    _.Pj = function (a, b) {
      a.ja || (0, _.db)(a, _.Oj);
      b.rC = a
    };
    _.Qj = function (a, b, c) {
      a.ja || (0, _.db)(a, b);
      c = c || 0;
      a.EO = c;
      if (b.Pu) {
        b = b.Pu;
        for (var d = 0, e = b.length - 1; d <= e;) {
          var f = d + e >> 1;
          c > b[f].EO ? e = f - 1 : d = f + 1
        }
        d < b.length && b[d].EO == c && ++d;
        b.splice(d, 0, a)
      } else b.Pu = [a]
    };
    var qba = function (a) {
      function b(a) {
        arguments.callee.ja.constructor.call(this, a);
        var b = this.Pu.length;
        this.A = [];
        for (var c = 0; c < b; ++c) this.Pu[c].J3 || (this.A[c] = new this.Pu[c](a))
      }
      var c = a.rC;
      (0, _.db)(b, c);
      for (var d = []; a;) {
        if (c = a.rC) {
          c.Pu && (0, _.Nb)(d, c.Pu);
          var c = c.prototype,
            e;
          for (e in c)
            if (c.hasOwnProperty(e) && (0, _.Va)(c[e]) && c[e] !== a) {
              var f = !! c[e].JU,
                g = rba(e, c, d, f);
              (f = sba(e, c, g, f)) && (b.prototype[e] = f)
            }
        }
        a = a.ja && a.ja.constructor
      }
      b.prototype.Pu = d;
      return b
    };
    var rba = function (a, b, c, d) {
      for (var e = [], f = 0; f < c.length && (c[f].prototype[a] === b[a] || (e.push(f), !d)); ++f);
      return e
    };
    var sba = function (a, b, c, d) {
      return c.length ? d ? function (b) {
        var d = this.A[c[0]];
        return d ? d[a].apply(this.A[c[0]], arguments) : this.Pu[c[0]].prototype[a].apply(this, arguments)
      } : b[a].MU ? function (b) {
        var d;
        n: {
          d = Array.prototype.slice.call(arguments, 0);
          for (var g = 0; g < c.length; ++g) {
            var h = this.A[c[g]];
            if (h = h ? h[a].apply(h, d) : this.Pu[c[g]].prototype[a].apply(this, d)) {
              d = h;
              break n
            }
          }
          d = false
        }
        return d
      } : b[a].KU ? function (b) {
        var d;
        n: {
          d = Array.prototype.slice.call(arguments, 0);
          for (var g = 0; g < c.length; ++g) {
            var h = this.A[c[g]],
              h = h ?
                h[a].apply(h, d) : this.Pu[c[g]].prototype[a].apply(this, d);
            if (null != h) {
              d = h;
              break n
            }
          }
          d = void 0
        }
        return d
      } : b[a].hF ? function (b) {
        for (var d = Array.prototype.slice.call(arguments, 0), g = 0; g < c.length; ++g) {
          var h = this.A[c[g]];
          h ? h[a].apply(h, d) : this.Pu[c[g]].prototype[a].apply(this, d)
        }
      } : function (b) {
        for (var d = Array.prototype.slice.call(arguments, 0), g = [], h = 0; h < c.length; ++h) {
          var k = this.A[c[h]];
          g.push(k ? k[a].apply(k, d) : this.Pu[c[h]].prototype[a].apply(this, d))
        }
        return g
      } : d || b[a].MU || b[a].KU || b[a].hF ? null : tba
    };
    var tba = function () {
      return []
    };
    _.Rj = function () {
      return (0, _.ka)()
    };
    _.Sj = function (a) {
      if (!a.jt) {
        var b;
        for (b = a.constructor; b && !b.rC;) b = b.ja && b.ja.constructor;
        b.rC.FO || (b.rC.FO = qba(b));
        b = new b.rC.FO(a);
        a.jt = b;
        a.jK || (a.jK = uba)
      }
    };
    var uba = function (a) {
      return this.jt.jK(a)
    };
    (0, _.Vg)(_.x.G(), "sy2");
    _.Oj.prototype.jK = function (a) {
      if (this.A)
        for (var b = 0; b < this.A.length; ++b)
          if (this.A[b] instanceof a) return this.A[b];
      return null
    };
    (0, _.Sg)(_.x.G(), "sy2");
    (0, _.Wg)(_.x.G(), "sy2");
  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.Vj = function (a) {
      a = a ? a : (0, _.ka)();
      a.JU = true;
      return a
    };
    _.Wj = function () {
      (0, _.Sj)(this);
      this.A = this.B = this.L = false;
      this.H = true;
      this.D = false
    };
    _.Xj = function () {};
    _.Yj = function (a, b) {
      return !!(a.altKey || a.ctrlKey || a.shiftKey || a.metaKey || a.button && 0 != a.button || 1 < b)
    };
    var vba = function (a, b) {
      var c = window.event && (0, _.Sa)(window.event.button) ? window.event.button : void 0;
      return function (d) {
        (0, _.Yj)(d, c) || b.target || ((0, _.Yf)(a), (0, _.Di)(d), d.preventDefault && d.preventDefault(), d.returnValue = false)
      }
    };
    (0, _.Vg)(_.x.G(), "sy3");
    (0, _.Ia)(_.Wj);
    (0, _.db)(_.Xj, _.Oj);
    (0, _.Pj)(_.Xj, _.Wj);
    _.Wj.prototype.J = function (a, b, c, d, e, f, g, h, k, l, n) {
      try {
        var p = window.google.getEI(a);
        if (a === window)
          for (a = window.event.srcElement, p = window.google.getEI(a); a && !a.href;) a = a.parentNode;
        b = window.encodeURIComponent || window.escape;
        var m = _.sc.Hc ? a.getAttribute("href", 2) : a.getAttribute("href"),
          t, s, r, w = (0, _.Ve)();
        window.google.v6 && (t = window.google.v6.src, s = window.google.v6.complete || window.google.v6s ? 2 : 1, r = w - window.google.v6t, delete window.google.v6);
        g && "&sig2=" != g.substring(0, 6) && (g = "&sig2=" + g);
        var G = window.google.psy &&
          window.google.psy.q && window.google.psy.q(),
          J = G ? b(G) : (0, _.dg)("q"),
          u = this.H && (this.B || this.A),
          E = !u && (this.B || this.A),
          w = "";
        this.A && ("encrypted.google.com" != window.location.hostname && "https:" != m.substr(0, 6)) && (w = "http://" + window.location.hostname + (window.google.kPTP ? ":" + window.google.kPTP : ""));
        G = "";
        c && "docid=" == c.substr(0, 6) && (G = c);
        c = "" != G ? true : false;
        var F = n && n.button && 2 == n.button ? "&cad=rja" : "",
          R;
        if (this.D) {
          n = m;
          d = "";
          for (var Z = 0, T = n.length; Z < T; ++Z) d += "%" + n.charCodeAt(Z).toString(16);
          R = d
        } else R = b(m).replace(/\+/g,
          "%2B");
        var m = R,
          ca = [w, "/url?sa=", l ? "i" : "t", this.B || this.A ? "&rct=j" : "", u ? "&q=" + (J || "") : "", E ? "&q=&esrc=s" : "", this.A && this.L ? "&frm=1" : "", "&source=", window.google.sn, "&cd=", b(e), F, c ? "&" + G : "", window.google.j && window.google.j.pf ? "&sqi=2" : "", "&ved=", b(h), "&url=", m, "&ei=", p, k ? "&authuser=" + b(k.toString()) : "", t ? "&v6u=" + b(t) + "&v6s=" + s + "&v6t=" + r : "", f ? "&usg=" + f : "", g, _.Lj ? (0, _.Fj)() : "", l ? "&psig=" + l : ""].join("");
        if (2038 < ca.length)
          if (u && 2038 >= ca.length - J.length) ca = ca.replace(J, J.substring(0, J.length - (ca.length - 2038)));
          else return true;
        var P = a.href;
        a.href = ca;
        (this.B || this.A) && this.jt.B(P, ca, a);
        a.onmousedown = ""
      } catch (S) {}
      return true
    };
    _.Xj.prototype.B = function (a, b, c) {
      window.google.j && window.google.j.init || (0, _.$e)(c, "click", vba(b, c))
    };
    (0, _.Vj)(_.Xj.prototype.B);
    _.Wj.prototype.init = function (a) {
      this.L = a.uff;
      this.B = a.rctj;
      this.A = a.ref;
      this.H = a.qir;
      this.D = a.eup
    };
    (0, _.za)("rwt", function () {
      _.Wj.G().J.apply(_.Wj.G(), arguments)
    }, void 0);

    (0, _.Sg)(_.x.G(), "sy3");
    (0, _.Wg)(_.x.G(), "sy3");
  } catch (e) {
    _._DumpException(e)
  }
  try {
    (0, _.Vg)(_.x.G(), "cr");
    (0, _.Sg)(_.x.G(), "cr");
    (0, _.Wg)(_.x.G(), "cr");
  } catch (e) {
    _._DumpException(e)
  }

  try {
    _.ql = function (a) {
      var b = (0, _.dg)("tbm", a);
      return b ? [b] : (a = (0, _.dg)("tbs", a)) ? (0, _.Rg)(a.split(","), function (a) {
        return a.split(":")[0]
      }) : []
    };
    _.rl = function (a, b) {
      var c = (0, _.ql)(b),
        c = (0, _.ab)(_.Fb, c);
      return (0, _.Ig)((0, _.Ra)(a) ? [a] : a, c)
    };
    _.sl = function (a, b) {
      _.tl[a] || (_.tl[a] = b)
    };
    _.ul = function (a, b, c) {
      var d = {};
      b = "#" == b.charAt(0) ? b.substring(1) : b;
      d[a] = b;
      if ("" == a && vl && b !== _.wl[a])
        for (var e in xl) d[xl[e]] = "";
      for (var f in d) _.wl[f] = d[f];
      a = (0, _.yl)();
      if (c)
        if (c = a, zl) window.history.replaceState(c, window.document.title || "", "#" + c), Al(c);
        else {
          a = (0, _.Xf)();
          b = a.href.replace(/#.*/, "");
          if ((c = c || "") || 0 < a.href.indexOf("#")) c = "#" + c;
          a.replace(b + c)
        } else zl ? (window.history.pushState(a, window.document.title || "", "#" + a), Al(a)) : (0, _.cg)().replace(/^#*/, "") != a && ((0, _.Xf)().hash = a)
    };
    _.yl = function (a) {
      var b = [],
        c = [],
        d;
      for (d in _.wl) c.push(d);
      c.sort();
      for (d = 0; d < c.length; d++) {
        var e = c[d],
          f = a && a[e] ? a[e] : _.wl[e];
        e ? f && b.push(e + "=" + f) : (e = a && a[e] ? a[e] : _.wl[e]) && b.push(e)
      }
      a = b.join("&");
      return a = a.replace(/^#*/, "")
    };
    _.Bl = function (a, b) {
      var c = {
        "": ""
      }, d = a || (0, _.cg)();
      if (d) {
        for (var d = d.replace(/^#*/, "").split("&"), e = [], f = 0; f < d.length; f++) {
          var g = d[f],
            h = g.split("=")[0];
          Zba[h] ? c[h] = g.split("=")[1] : e.push(g)
        }
        c[""] = e.join("&")
      }
      b && (_.wl = c);
      return c
    };
    var Al = function (a, b) {
      _.wl = (0, _.Bl)(a);
      for (var c in _.tl) _.tl[c](_.wl[c] ? _.wl[c] : "", b)
    };
    var Cl = function () {
      Al()
    };
    var Dl = function (a) {
      Al(a.state)
    };
    (0, _.Vg)(_.x.G(), "sy11");
    var El;
    var vl;
    var zl;
    var xl;
    var Zba;
    Zba = {
      agsa: true,
      biv: true,
      facrc: true,
      imgrc: true,
      imgdii: true,
      itp: true,
      lmt: true,
      mip: true,
      mis: true,
      miuv: true,
      mkp: true,
      mldd: true,
      now: true,
      qm: true,
      sh: true,
      psh: true,
      tts: true,
      updateac: true,
      "": true
    };
    xl = ["facrc", "imgrc", "psh", "tts"];
    _.wl = {
      "": ""
    };
    _.tl = {};
    zl = false;
    vl = false;
    El = false;
    (0, _.za)("google.hs.init", function () {
      El || Al(void 0, true);
      El = true
    }, void 0);

    (0, _.Sg)(_.x.G(), "sy11");
    (0, _.Wg)(_.x.G(), "sy11");
  } catch (e) {
    _._DumpException(e)
  }
  try {
    var ica = function (a, b) {
      b = b || 0;
      return function () {
        return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
      }
    };
    _.sn = function (a, b, c) {
      this.GB = a;
      this.B = c;
      this.A = b || window;
      this.gh = (0, _.$a)(this.nP, this)
    };
    var tn = function (a) {
      a = a.A;
      return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || null
    };
    var un = function (a) {
      a = a.A;
      return a.cancelRequestAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || null
    };
    _.vn = function (a, b) {
      if (!a) return {};
      for (var c = a.substr(Math.max(a.indexOf("?"), a.indexOf("#")) + 1).split("&"), d = {}, e = 0; e < c.length; ++e) {
        var f = c[e];
        if (f && (f = f.split("="), !(0, _.Ma)(d[f[0]]))) {
          var g = f[1] || "";
          d[f[0]] = b ? (0, window.decodeURIComponent)(g) : g
        }
      }
      return d
    };
    _.wn = function (a) {
      a.orq && (a.q = a.orq, delete a.orq, a.ortbs ? (a.tbs = a.ortbs, delete a.ortbs) : delete a.tbs)
    };
    _.xn = function (a, b, c) {
      if (!a || "#" == a) return "";
      a = (0, _.vn)(a);
      c && (0, _.wn)(a);
      for (var d in a) b[d] && delete a[d];
      c && (0, _.yn)(a);
      return (0, _.zn)(a)
    };
    _.yn = function (a) {
      if ((0, _.Ma)(a.q)) {
        var b = (0, window.decodeURIComponent)(a.q.replace(/\+/g, "%20")),
          b = b.replace(/( |\u3000)+/g, " "),
          c = _.An ? b.replace(_.An, "") : b;
        0 < c.length && (b = c);
        a.q = (0, window.encodeURIComponent)(b.toLowerCase())
      }
    };
    _.Bn = function (a) {
      var b = [];
      (0, _.forEach)(arguments, function (a) {
        a && (0, _.Nb)(b, (0, _.dc)(a))
      });
      return (0, _.nc)(b)
    };
    _.zn = function (a) {
      var b = [],
        c;
      for (c in a) b.push(c + "=" + a[c]);
      b.sort();
      return b.join("&")
    };
    _.Cn = function (a, b) {
      var c = window.decodeURIComponent,
        d;
      d = (0, _.Bn)((0, _.Dn)(), b);
      d = (0, _.xn)(a, d, true);
      return c(d)
    };
    var En = function (a, b) {
      if (Fn[a]) {
        var c = Fn[a],
          d = jca[a];
        if (b && d) {
          for (var e = [], f = 0; f < c.length; f++) {
            var g = c[f];
            d[g] || e.push(g)
          }
          return e
        }
        return c
      }
      return []
    };
    _.Gn = function (a, b) {
      for (var c = {}, d = En(a, true), e = 0; e < d.length; e++) {
        var f = d[e];
        (0, _.Ma)(b[e]) && (c[f] = b[e])
      }
      return c
    };
    _.Hn = function (a, b, c) {
      b._sn = a;
      b._t = "jesr";
      try {
        (0, _.Qf)(115, [b])
      } catch (d) {}
    };
    _.In = function () {};
    _.Jn = function (a) {
      this.L = a || 16;
      this.B = [];
      this.A = null;
      this.D = new _.sn(this.J, window, this)
    };
    _.Kn = function () {
      this.tz = []
    };
    _.Ln = function (a, b) {
      _.Mn.execute(function () {
        var c = a.n + "",
          d = b && (0, _.Ma)(b.ss) ? b.ss : a.ss;
        try {
          if (c && ("bvch" == c || (d ? d == window.google.j.ss && window.google.j.ss > _.Nn : 0 === d))) {
            for (var d = [], e = En(c, false), f = 0; f < e.length; f++) d.push(b && (0, _.Ma)(b[e[f]]) ? b[e[f]] : a[e[f]]);
            window.google.j[c].apply(null, d)
          }
        } catch (g) {
          c = {
            n: c,
            m: a
          }, b && (c.g = b, c.s = b.is), (0, _.Hn)("ECF", c, g)
        }
      })
    };
    _.On = function (a) {
      this.A = a || ""
    };
    (0, _.db)(_.sn, _.ng);
    _.q = _.sn.prototype;
    _.q.He = null;
    _.q.cN = false;
    _.q.start = function () {
      this.stop();
      this.cN = false;
      var a = tn(this),
        b = un(this);
      a && !b && this.A.mozRequestAnimationFrame ? (this.He = (0, _.wh)(this.A, "MozBeforePaint", this.gh), this.A.mozRequestAnimationFrame(null), this.cN = true) : this.He = a && b ? a.call(this.A, this.gh) : this.A.setTimeout(ica(this.gh), 20)
    };
    _.q.stop = function () {
      if (this.isActive()) {
        var a = tn(this),
          b = un(this);
        a && !b && this.A.mozRequestAnimationFrame ? (0, _.Hh)(this.He) : a && b ? b.call(this.A, this.He) : this.A.clearTimeout(this.He)
      }
      this.He = null
    };
    _.q.isActive = function () {
      return null != this.He
    };
    _.q.nP = function () {
      this.cN && this.He && (0, _.Hh)(this.He);
      this.He = null;
      this.GB.call(this.B, (0, _.Ve)())
    };
    _.q.La = function () {
      this.stop();
      _.sn.ja.La.call(this)
    };
    (0, _.Vg)(_.x.G(), "sy16");
    _.An = null;
    _.Dn = (0, _.gg)((0, _.ab)(_.nc, "aqs ac bih biw bs btnG bvm client cp dc ds ech es_nrs extab gm gs_id gs_is gs_ivs gs_l gs_mss gs_ri gs_rn hs inm ion lpt mvs npsic oq output p_deb pbx pdl pf pkc pnp pq prmdo psi qe qesig redir rlz sclient se site sns source sqi sugexp suggest tbo tch tok wrapid xhr".split(" ")));
    var Fn = {
      ac: "c fp r sc is sd".split(" "),
      ad: "is t e fp csi ir bc".split(" "),
      ap: ["ss", "ps", "bm", "cc"],
      bc: ["bc", "sc"],
      bvch: ["u", "e"],
      p: ["is", "i", "h", "sc"],
      pa: ["is", "i", "h"],
      pah: ["is", "lp"],
      pc: "i h fp r sc is".split(" "),
      pcs: "i css fp r sc is".split(" "),
      pds: ["i", "css"],
      ph: ["is", "lu", "ig"],
      phf: ["is", "hf"],
      sa: ["is", "i", "a"],
      slp: ["is", "op"],
      spf: ["is", "ip"],
      zz: ["is", "ir", "ie"],
      zc: ["c", "fp", "r", "sc", "is"],
      zp: ["ss"]
    }, jca = {
        ad: {
          is: true
        },
        p: {
          is: true
        },
        pa: {
          is: true
        },
        pah: {
          is: true
        },
        ph: {
          is: true
        },
        phf: {
          is: true
        },
        sa: {
          is: true
        },
        slp: {
          is: true
        },
        spf: {
          is: true
        },
        zz: {
          is: true
        }
      };
    (0, _.Ia)(_.In);
    _.In.prototype.execute = function (a) {
      a()
    };
    _.In.prototype.H = (0, _.tg)([]);
    (0, _.Ia)(_.Jn);
    var Pn = window.performance && window.performance.now ? function () {
        return window.performance.now()
      } : _.Ve;
    _.Jn.prototype.J = function () {
      var a = Pn();
      this.D.start();
      for (var b; Pn() - a < this.L && (b = this.B.shift());) this.A = [], b(), Array.prototype.unshift.apply(this.B, this.A), this.A = null;
      this.B.length || this.D.stop()
    };
    _.Jn.prototype.execute = function (a) {
      (this.A || this.B).push(a);
      this.D.isActive() || this.D.start()
    };
    _.Jn.prototype.H = function () {
      var a = this.B;
      this.A && Array.prototype.unshift.apply(a, this.A);
      this.B = [];
      this.A = [];
      return a
    };
    _.Mn = _.In.G();
    window.google.j && (window.google.j.ss = 1);
    _.Kn.prototype.clear = function () {
      this.tz = []
    };
    _.Kn.prototype.getAll = (0, _.ma)("tz");
    _.Kn.prototype.add = function (a, b) {
      var c = (0, _.Gn)(a, b);
      c.n = a;
      this.tz.push(c)
    };
    (0, _.za)("google.j.api", _.Ln, void 0);
    _.Qn = null;
    (0, _.za)("google.j.cl", function () {
      for (var a = _.Qn.rK("s"), b = 0, c; c = a[b++];) "#" != c && _.Qn.removeItem("s", c)
    }, void 0);
    _.On.prototype.register = function (a) {
      this.A && (a.A((0, _.$a)(this.zb, this), this.A), a.B(_.Cn, this.A))
    };
    (0, _.Sg)(_.x.G(), "sy16");
    (0, _.Wg)(_.x.G(), "sy16");
  } catch (e) {
    _._DumpException(e)
  }
  try {
    var hy = function (a) {
      return _.Ox ? a.pointerId : a.identifier
    };
    _.iy = function (a, b, c, d) {
      var e = window.document.createEvent("HTMLEvents");
      e.initEvent(b, true, true);
      e.sender = c;
      e.B = d;
      a.dispatchEvent(e)
    };
    _.jy = function (a) {
      return a + "_" + Uja++
    };
    _.ky = function (a, b, c, d, e) {
      a = (0, _.se)((0, _.v)(a));
      (0, _.Xx)(a, b, c, d, e)
    };
    var ly = function (a, b, c) {
      this.Ma = a;
      this.Wa = b;
      this.D = c;
      this.B = [];
      this.J = [];
      this.V = [];
      this.$ = [];
      this.L = [];
      this.M = []
    };
    var my = function (a, b) {
      for (var c, d = (0, _.Vx)(b), e = d.length, f = 0; f < a.A; f++) {
        a.J[f] = void 0;
        for (var g = 0; g < e; g++)
          if (a.B[f] == hy(d[g])) {
            a.J[f] = d[g];
            c = true;
            break
          }
      }
      return c
    };
    var ny = function (a, b) {
      var c = b || 0,
        d = a.J[c];
      return d ? d.clientX : a.Ma[a.B[c || 0]]
    };
    var oy = function (a, b) {
      var c = b || 0,
        d = a.J[c];
      return d ? d.clientY : a.Wa[a.B[c || 0]]
    };
    var py = function (a, b, c) {
      ly.call(this, b, c, 1);
      this.Za = a;
      this.ca = new _.cy
    };
    _.qy = function (a) {
      return oy(a) - a.Uc
    };
    _.ry = function (a) {
      return ny(a) - a.Md
    };
    var sy = function (a, b, c) {
      ly.call(this, b, c, 2);
      this.Q = a
    };
    _.ty = function (a) {
      this.H = a;
      this.la = this.H.W();
      this.B = {};
      this.D = {};
      this.A = []
    };
    _.uy = function (a, b, c) {
      var d = a.A[b];
      if (d) return d;
      d = new Vja[b](c, a.B, a.D);
      return a.A[b] = d
    };
    var Wja = function (a, b) {
      a.H.dA(null);
      for (var c = a.A.length, d = 0; d < c; d++) {
        var e = a.A[d];
        if (e) {
          var f = e;
          if (!f.T && 0 < f.A) {
            for (var e = void 0, g = 0; g < f.A; g++)
              if (f.B[g] == b) {
                e = g;
                break
              }(0, _.Ma)(e) && (f.H && f.va(null), f.B.splice(e, 1), f.A--, f.H = false)
          }
        }
      }
      delete a.B[b];
      delete a.D[b]
    };
    _.vy = function (a, b, c) {
      var d = (0, _.$a)(a.J, a);
      (0, _.Mx)(a.la, (0, _.$a)(a.M, a), (0, _.$a)(a.L, a), d, d, b, c)
    };
    var Uja = 0;
    (0, _.Vg)(_.x.G(), "sy61");
    ly.prototype.A = 0;
    ly.prototype.reset = function () {
      this.A = 0;
      this.T = this.H = false
    };
    (0, _.db)(py, ly);
    py.prototype.vc = function (a) {
      (0, _.dy)(this.ca, this.L[0], this.M[0], a.timeStamp);
      this.Md = this.L[0];
      this.Uc = this.M[0]
    };
    py.prototype.Gb = function (a) {
      return this.Za.RC(a)
    };
    py.prototype.Da = function (a) {
      this.Md = this.L[0];
      this.Uc = this.M[0];
      (0, _.ey)(this.ca, ny(this), oy(this), a.timeStamp);
      this.Za.iA(a);
      a.preventDefault()
    };
    py.prototype.va = function (a) {
      a && (this.Q = (0, _.gy)(this.ca, this.Ma[this.B[0]], this.Wa[this.B[0]], a.timeStamp) || void 0, a.preventDefault());
      this.Za.QC(a);
      var b = this.L[0],
        c = this.M[0];
      a && (0, _.Qja)() ? a.preventDefault() : (0, _.by)(b, c, void 0)
    };
    (0, _.db)(sy, ly);
    sy.prototype.vc = _.Ga;
    sy.prototype.Gb = function (a) {
      return this.Q.D(a)
    };
    sy.prototype.Da = function (a) {
      this.Q.B(a);
      a.preventDefault()
    };
    sy.prototype.va = function (a) {
      this.Q.A(a);
      a && a.preventDefault()
    };
    var Vja = [py, sy];
    _.ty.prototype.M = function (a) {
      var b = (0, _.Ux)(a),
        c = b.length,
        d;
      for (d in this.B) {
        for (var e = 0; e < c; e++)
          if (d == hy(b[e])) {
            var f = true;
            break
          }
        f || Wja(this, +d)
      }
      b = (0, _.Vx)(a);
      c = b.length;
      for (e = 0; e < c; e++) d = hy(b[e]), (0, _.Ma)(this.B[d]) && Wja(this, +d);
      c = true;
      e = this.A.length;
      for (b = 0; b < e; b++)
        if ((d = this.A[b]) && d.A != d.D) {
          c = false;
          break
        }
      if (!c && this.H.eA(a)) {
        c = (0, _.Vx)(a);
        d = c.length;
        for (b = 0; b < d; b++) {
          var f = c[b],
            g = hy(f);
          this.B[g] = f.clientX;
          this.D[g] = f.clientY
        }
        for (b = 0; b < e; b++)
          if (d = this.A[b])
            if (c = d, d = a, !c.T && c.A != c.D) {
              for (var f = (0, _.Vx)(d),
                  g = Math.min(f.length, c.D - c.A), h = 0; h < g; h++) {
                var k = f[h];
                c.B[c.A] = hy(k);
                c.L[c.A] = k.clientX;
                c.M[c.A] = k.clientY;
                c.A++
              }
              my(c, d);
              if (c.A == c.D)
                for (h = 0; h < c.D; h++) c.V[h] = c.$[h] = 0;
              c.vc(d)
            }
      }
    };
    _.ty.prototype.L = function (a) {
      for (var b = true, c = this.A.length, d = 0; d < c; d++) {
        var e = this.A[d];
        if (e && 0 < e.A) {
          b = false;
          break
        }
      }
      if (!b) {
        for (d = 0; d < c; d++)
          if (e = this.A[d])
            if (b = e, e = a, !b.T && b.A == b.D && my(b, e))
              if (b.H) b.Da(e);
              else {
                for (var f = void 0, g = 0; g < b.D; g++) {
                  var h = b.J[g];
                  if (h) {
                    var k = b.B[g],
                      l = b.Wa[k] - h.clientY;
                    b.V[g] += Math.abs(b.Ma[k] - h.clientX);
                    b.$[g] += Math.abs(l);
                    f = f || 2 < b.V[g] || 2 < b.$[g]
                  }
                }
                if (f) {
                  for (g = 0; g < b.D; g++) b.L[g] = ny(b, g), b.M[g] = oy(b, g);
                  b.H = b.Gb(e);
                  b.H ? b.Da(e) : b.reset()
                }
              }
        a = (0, _.Vx)(a);
        c = a.length;
        for (d = 0; d < c; d++) b =
          a[d], e = hy(b), (0, _.Ma)(this.B[e]) && (this.B[e] = b.clientX, this.D[e] = b.clientY)
      }
    };
    _.ty.prototype.J = function (a) {
      for (var b = (0, _.Vx)(a), c = b.length, d, e = 0; e < c; e++) {
        var f = b[e],
          f = hy(f);
        (0, _.Ma)(this.B[f]) && (this.H.dA(a), d = true)
      }
      if (d) {
        d = this.A.length;
        for (e = 0; e < d; e++)
          if (f = this.A[e]) {
            var g = a;
            if (!f.T && 0 < f.A && my(f, g)) {
              f.H && f.va(g);
              for (var g = f.A, h = 0, k = 0; k < g; k++)
                if (f.J[k]) {
                  var l = f;
                  l.B.splice(k - h, 1);
                  l.A--;
                  l.H = false;
                  h++
                }
            }
          }
        for (e = 0; e < c; e++) f = b[e], f = hy(f), (0, _.Ma)(this.B[f]) && (delete this.B[f], delete this.D[f])
      }
    };
    _.ty.prototype.reset = function () {
      for (var a in this.B) delete this.B[Number(a)], delete this.D[Number(a)];
      for (a = 0; a < this.A.length; a++) {
        var b = this.A[a];
        b && b.reset()
      }
    };

    (0, _.Sg)(_.x.G(), "sy61");
    (0, _.Wg)(_.x.G(), "sy61");
  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.swa = function (a) {
      for (var b = window.google.isr.layout.getChunkSizeArray(), c = 0, d = 0; d < b.length; d++) {
        if (c + b[d] > a) return d;
        c += b[d]
      }
      return -1
    };
    _.twa = function (a) {
      var b = "";
      if (_.nK) a = (a = window.document.getElementById("page" + a)) ? a.getAttribute("data-fri") : "0", b = String((0, _.swa)((0, window.parseInt)(a, 10)));
      else if (_.oK) {
        var c = 1E4,
          d;
        for (d in _.pK) {
          var e = +d - a;
          0 <= e && e < c && (c = e, b = _.pK[d])
        }
      } else b = 1 == a ? "ls" : a <= window.google.isr.lp() ? "bg" : "sbg";
      return (0, _.qK)(b)
    };
    _.qK = function (a) {
      var b = _.rK[a];
      if (!b || !b.ei) {
        return window.google.kEI
      }
      return b.ei
    };
    (0, _.Vg)(_.x.G(), "sy108");
    _.nK = false;
    _.oK = false;
    _.pK = {};
    _.rK = {};
    (0, _.za)("google.isr.chunkid", _.twa, void 0);
    (0, _.za)("google.isr.chunkEventId", _.qK, void 0);
    (0, _.za)("google.isr.vefc", function (a, b) {
      var c = "i" + b,
        d = _.rK[a];
      return d && void 0 !== d[c] ? d[c] : null
    }, void 0);
    (0, _.Sg)(_.x.G(), "sy108");
    (0, _.Wg)(_.x.G(), "sy108");
  } catch (e) {
    _._DumpException(e)
  }
  try {
    var zK;
    var GK;
    var Bwa;
    var dL;
    var uK = function (a, b) {
      _.vK[a] || (_.vK[a] = []);
      _.vK[a].push(b)
    };
    var IK = function (a, b, c) {
      (0, _.$e)(a, b, c);
      _.Lwa.push([a, b, c])
    };
    var Owa = function () {
      fL("getAllResultPages");
      var a = window.document.getElementById("rg");
      return a ? a.querySelectorAll(eL() + ".rg_ul") : []
    };
    var TK = function () {
      window.clearTimeout(_.ZK);
      RK("bg");
      window.google.isr.bg_done = true;
      _.$K = false;
      _.KK || Pwa();
      window.setTimeout(function () {
        zK || (window.google.isr.prs || _.KK)
      }, 0);
      if (_.oK && (Qwa(), !zK)) {
        var a = Math.ceil(hL() / cL());
        _.pK[a + ""] = "1"
      }!CK || (window.google.isr.bg_stored || window.location.href.match(/(#q=|#.*&q=)/)) ||
        (window.google.isr.bg_stored = true, (0, _.To)());
      a = zK ? window.google.isr.layout.getNumPages() : Owa().length;
    };
    var jL = function () {
      try {
        var a = window.JSON.parse(window.sessionStorage.getItem("images-sh")) || {};
        a[window.location.href] = {
          s: _.kL,
          l: scrollTop(),
          p: _.oK && scrollTop() < _.lL
        };
        var b = window.JSON.stringify(a);
        window.sessionStorage.setItem("images-sh", b)
      } catch (c) {}
    };
    var hL = function () {
      fL("getLastPageNumber");
      if (_.oL) return _.oL;
      var a = window.document.getElementById("isr_lp");
      return a ? _.oL = +a.innerHTML : 1
    };
    var scrollTop = function () {
      return window.pageYOffset || window.document.body.scrollTop || window.document.documentElement.scrollTop || 0
    };
    var qL = function () {
      fL("getVisiblePages");
      var a = [],
        b = scrollTop(),
        c = b + QK;
      if (window.document.getElementById("rg"))
        for (var d = Owa(), e = 0, f = 0, g; g = d[f]; f++) {
          var h = (0, _.se)(g);
          g = h + g.offsetHeight;
          if (h && g && h <= c && g >= b) a.push(e);
          else if (a.length) break;
          e++
        }
      return a
    };
    var rL = function (a) {
      var b = scrollTop();
      if (_.oK && scrollTop() + QK > sL()) {
        var c = window.document.querySelector(AK + "." + yK);
        a = Math.max(0, b + a * c.offsetHeight);
        mL(a)
      } else {
        0 > a ? (c = window.google.isr.page.findRowAt(b), (0, _.se)(c) >= b - 3 && (c = window.google.isr.page.findRowAbove(b))) : c = window.google.isr.page.findRowBelow(b + 3);
        if (c) {
          var d = c.parentNode,
            c = (0, _.se)("to" == _.zv.isg ? d : c);
          if (0 > a && c < b || 0 < a && c > b) {
            mL(c);
            return
          }
        }
        c = 0 > a ? 0 : 999999;
        mL(c)
      }
    };
    var Ewa = function (a) {
      a = a || window.event;
      var b = a.keyCode;
      if (!a.altKey && !a.ctrlKey) {
        if (27 == b && !a.shiftKey && window.google.isr.Hover && window.google.isr.Hover.isActive()) return window.google.isr.Hover.hide(), false;
        var c = window.google.isr.ircin && window.google.isr.ircin() && window.google.isr.ircv && window.google.isr.ircv();
        if (window.google.isr.Hover && !c)
          if (39 != b && 37 != b || a.shiftKey) {
            if (38 == b) return window.google.isr.Hover.isActive() ?
              (window.google.isr.Hover.moveHover(2), tL = "hk") : (rL(-1), tL = "rk"), false;
            if (40 == b) return window.google.isr.Hover.isActive() ? (window.google.isr.Hover.moveHover(3), tL = "hk") : (rL(1), tL = "rk"), false
          } else return a = (0, _.ig)() ? 37 == b ? 1 : 0 : 37 == b ? 0 : 1, window.google.isr.Hover.moveHover(a), tL = "hk", false
      }
      return _.LK ? (0, _.LK)(a) : true
    };
    var mL = function (a) {
    };
    var Pwa = function () {
      var a = window.document.getElementById("smc");
      a && (a.style.display = "none", _.oK || (_.kL || !(GK || pL.ls + pL.bg < Bwa)) || (a.style.display = "block"))
    };
    var xL = function (a, b, c) {
      var d = a.indexOf("#"),
        e = 0 <= d ? a.substr(d) : "";
      a = 0 <= d ? a.substr(0, d) : a;
      a = a.replace(RegExp("([?&])" + b + "=([^&]*)&?", "i"), "$1");
      a = a.replace(/[?&]$/, "");
      a += (a.match(/\?/) ? "&" : "?") + b + "=" + c;
      return a += e
    };
    var yL = function (a, b) {
      var c = window.google.biw,
        d = window.google.bih,
        c = 0 > c || 0 > d;
      if (!window.google.isr.prs || c) a = xL(a, "biw", OK), a = xL(a, "bih", QK);
      c && b && (a = xL(a, "sei", window.google.kEI));
      return a
    };
    var Uwa = function () {
      var a = new _.ts(window.google.isr.url);
      (0, _.Bs)(a, "pf");
      var b;
      (b = (b = window.location.href.match(/[?&#]imgrc=([^&#]+)/)) ? b[1] : "") && (0, _.As)(a, "imgrc", (0, window.decodeURIComponent)(b));
      (0, _.Yf)(a.toString())
    };
    var Kwa = function () {
      zK ? null : _.XK ? (_.YK = false, window.google.isr.bg_done || _.$K || (_.$K = true, _.oK ? $wa(function () {
        DL();
        TK()
      }) : EL(["bg"], TK))) : _.YK = true
    };
    var EL = function (a, b) {
      fL("loadResults_");
      var c = a.shift(),
        d = window.google.isr.url,
        d = xL(d, "tbm", "isch"),
        d = xL(d, "ijn", c),
        d = xL(d, "ei", window.google.kEI),
        e, f;
      "bg" == c ? (d = xL(d, "sprg", "1"), e = 1, f = pL.ls) : "sbg" == c ? (e = hL(), d = xL(d, "sprg", e), e = Math.floor(e / cL()) + 1, f = pL.ls + pL.bg) : f = e = 0;
      d = xL(d, "page", e);
      d = xL(d, "start", f);
      if (!_.iL.UB || _.iL.UB != d) {
        _.iL.UB = d;
        var g = function () {
          return d == _.iL.UB
        };
        xK(d, function (d) {
          bxa(c, b, g, a, d)
        })
      }
    };
    var bxa = function (a, b, c, d, e) {
      if (!c || c())
        if ((c = window.document.getElementById("rg")) && (_.oK ? 0 <= (0, window.parseInt)(a, 10) : "ls" == a || "bg" == a || "sbg" == a)) {
          if (FL(a)) {
            var f = c.parentNode,
              g = window.document.getElementById("rg_h");
            window.google.isr.Hover && window.google.isr.Hover.hide();
            f.removeChild(c);
            c = window.document.createElement("div");
            c.id = "rg";
            g && c.appendChild(g);
            f.appendChild(c);
            dL = _.oL = 0
          }
          _.oK && (f = window.document.querySelector("#isr_lp")) && (f.parentNode.removeChild(f), f = null);
          f = window.document.createElement("div");
          window.document.body.appendChild(f);
          f.innerHTML = e;
          Jwa(a);
          _.oK && (_.oL = 0, zK || (e = Math.ceil(hL() / cL()), _.pK[e + ""] = a));
          (0, _.yd)((0, _.v)("isr_ld"));
          if (zK) window.google.isr.layout.moveAndLayoutNewResults(), window.document.body.removeChild(f);
          else {
            var h = window.document.getElementById("rg").style;
            if (e = window.document.getElementById("rg_add")) e.id = _.oK ? "rg_c" + a : "ls" == a ? "rg_ls" : "bg" == a ? "rg_bg" : "rg_sbg", c.appendChild(e), window.document.body.removeChild(f), FL(a) && (c = +window.document.getElementById("isr_w").innerHTML,
              h.width = c + "px", Xwa(c))
          }
          FK && !_.oK && ("ls" == a ? h.height = Cwa : "bg" == a && (h.height = "auto"));
          window.setTimeout(function () {
            if (_.XK) {
              "bg" == a && (!_.oK && window.google.isr.Hover) && window.google.isr.Hover.loadDataForScreen(0);
              RK(a);
              window.google.isr.Hover && window.google.isr.Hover.resetResultsArea();
              delete _.iL.UB;
              _.oK ? b && b() : d.length ? EL(d, b) : b && b()
            }
          }, 0)
        }
    };
    var Jwa = function (a) {
      var b = (0, _.v)("isr_scm_" + a);
      if (b) {
        for (var c = {
          ei: b.getAttribute("eid")
        }, d = (0, _.Ad)(b), e = 0, f; f = d[e]; e++) c[f.getAttribute("id")] = f.getAttribute("data-ved");
        _.rK[a] = c;
        HK && "0" == a && (_.rK["1"] = c);
        b.parentNode.removeChild(b)
      } else delete _.rK[a], HK && "0" == a && delete _.rK["1"]
    };
    var FL = function (a) {
      return _.oK && "0" == a || !_.oK && "ls" == a
    };
    var RK = function (a) {
      if (!zK) {
        var b;
        if (_.oK)(b = window.document.getElementById("rg_c" + a)) || ("0" == a ? b = window.document.querySelector(eL() + ".rg_ul") : "1" == a && (b = window.document.querySelector("#rg_bg")));
        else if ("ls" != a || window.document.getElementById("rg_ls")) b = window.document.getElementById("ls" == a ? "rg_ls" : "bg" == a ? "rg_bg" : "rg_sbg");
        else {
          var c = window.document.getElementById("rg");
          b = c && c.getElementsByTagName(eL())[0]
        }
        c = 0;
        if (b && (b = b.getElementsByTagName("img"), c = b.length, FL(a)))
          for (var d = 0; d < b.length; ++d) "rg_hi" ==
            b[d].id && --c;
        pL[a] = c
      }
    };
    var Xwa = function (a) {
      var b = window.document.getElementById("tbbcc");
      b && (b.style.width = a + "px");
      if (b = window.document.getElementById("tbbcs")) b.style.width = a + "px"
    };
    var Rwa = function () {
      cxa();
      EL(["sbg"], function () {
        window.document.getElementById("smc").style.display = "none";
        _.kL = true;
        jL()
      })
    };
    var Awa = function (a, b) {
      a.value = b.lt;
      a.blur();
      Rwa()
    };
    var cxa = function () {
      var a = (0, _.v)("smb");
      a && a.removeAttribute("jsaction");
      (0, _.li)("isr", ["smr"])
    };
    var Fwa = function (a) {
      n: {
        a = a || window.event;
        if (a = a.target || a.srcElement) {
          for (var b = a.nodeName;
            "A" != b && "BODY" != b;) {
            a = a.parentNode;
            if (!a || !a.nodeName) break;
            b = a.nodeName
          }
          if ("A" == b) break n
        }
        a = null
      }
      if (a) return /\/im(ages|gres|ghp)\?|\/search\?(.*&)?tbm=isch(&|$)/.test(a.href) && (a.href = yL(a.href)), true
    };
    var fL = function (a) {};
    var Qwa = function () {
      var a = (0, _.v)("rg");
      GL = a ? a.querySelectorAll("ul.rg_ul") : [];
      HL = [];
      IL = [];
      _.JL = -1;
      KL = [];
      LL = 300;
      HK && (ML = 2);
      FK && (LL += 20);
      var a = 0 < GL.length,
        b = 1 == GL.length;

      zK && (window.google.isr.bg_done || window.google.isr.layout.moveAndLayoutNewResults(), b = (a = 0 < window.google.isr.layout.getChunkSize(0)) && !window.google.isr.layout.getChunkSize(1));
      a ? b ? (IL[0] = true, ML = 1, HK && window.google.log("stbc_mc1",
        "")) : (IL[0] = true, IL[1] = true, ML = 2) : (ML = 0);
      uK(4, NL);
      _.oL = 0;
      OL(!IL[0]);
      dxa();
      _.PL = _.BK;
      NL()
    };
    var OL = function (a) {
      (exa = a) && zK && (window.google.isr.layout.setAllResultsLoaded(), BL())
    };
    var QL = function () {
      return zK ? window.google.isr.layout.areAllResultsLoaded() : exa
    };
    var fxa = function () {
      var a = (0, _.v)("rg");
      if (RL) return a.offsetHeight;
      if (zK) return SL();
      for (var b = a = 0, c; c = GL[b++];) a += c.offsetHeight;
      return a
    };
    var dxa = function () {
      if (IL.length) {
        for (var a = 0, b = IL.length - 1; 0 <= b; --b)
          if (IL[b]) {
            a = b;
            break
          }
        b = (0, _.v)("rg");
        RL = "auto" == b.style.height;
        var c = zK ? window.google.isr.layout.getResults().length : b.querySelectorAll("li.rg_li").length;
        FK && (RL = true, b.style.height = "auto", QL() ? b.style.paddingBottom = "0px" : b.style.paddingBottom = LL + "px");
        if (!RL && c) {
          var d = b.style.height,
            e = HK ? 4 : 3,
            f = HK ? 7 : 6;
          QL() ? d = "auto" : d && a != e && a != f || (d = d ? a == e ? 700 : 1E3 : 400, e = zK ? SL(0) : (e = GL[0]) ? e.offsetHeight : 0, e = 2 * e, d = Math.round(d * fxa() / c + e) + "px");
          gxa(a) ?
            (TL = d + "", b.style.height = "auto") : b.style.height = d
        }
        a = zK ? window.google.isr.layout.hasRenderedChunk(2) : !! (0, _.v)("rg_c2");
        HK || (a = window.google.isr.layout.hasRenderedChunk(1));
        if (a)
          if (a = HK ? 3 : 2, zK) {
            b = -1;
            a = Math.min(a, window.google.isr.layout.getChunkSizeArray().length - 1);
            for (c = 0; c <= a; c++) b += window.google.isr.layout.getChunkSize(c);
            a = window.google.isr.layout.getResults();
            _.lL = (a = a[Math.min(b, a.length - 1)]) ? (0, _.se)(a) + a.offsetHeight : 0
          } else
            for (_.lL = 0, (b = window.document.querySelector("ul.rg_ul")) && (_.lL += b.offsetHeight), (b = window.document.querySelector("#rg_bg") || (0, _.v)("rg_c1")) && (_.lL += b.offsetHeight), b = 2; b <= a; ++b)(c = (0, _.v)("rg_c" + b)) && (_.lL += c.offsetHeight);
          else _.lL = (0, _.v)("rg").offsetHeight
      }
    };
    var NL = function () {
      var a = zK ? zL() : qL(),
        b = zK ? window.google.isr.layout.getNumPages() : GL.length;
      if (!b || QL() || 0 <= _.JL || _.PL || window.google.isr.layout && !window.google.isr.bg_done) _.JL > (HK ? 1 : 0) && nL(true);
      else {
        var c = a.length,
          d = EK.genPrefetchCutoff ? +EK.genPrefetchCutoff : 1;
        !c || a[c - 1] >= b - d ? UL(DL) : nL(false)
      }
    };
    var $wa = function (a) {
      _.BK || (HK ? (ML = 1, _.JL = -1, IL = [true], OL(false), _.PL = true, HL = [], UL(a)) : null)
    };
    var UL = function (a) {
      QL() || (HL.push(ML++), -1 == _.JL && hxa(a))
    };
    var DL = function (a) {
      var b = _.JL;
      if (!(0 > b || (0, _.Ma)(window.google.isr.layout) && !window.google.isr.layout.hasRenderedChunk(b))) {
        GL = window.document.querySelectorAll("ul.rg_ul");
        IL[b] = true;
        _.oL = 0;
        nL(false);
        var c = HK ? 10 : 9;
        b >= (EK.genChunkMax ? EK.genChunkMax : c) ? OL(true) : (c = zK ? window.google.isr.layout.getChunkSize(b) : (c = (0, _.v)("rg_c" + b)) ? c.querySelectorAll("li.rg_li").length : 0, (0 == b && 0 == c || 0 < b && 30 > c) && OL(true));
        gxa(b) && ((b = (0, _.v)("smc")) && GK && (b.style.display = "block", cxa(), (0, _.$e)(b, "click", ixa)), _.PL = true);
        dxa();
        jL();
        _.JL = -1;
        for (QL() || void 0 != a && !a || NL(); 0 < KL.length;) {
          a = KL.shift();
          try {
            a()
          } catch (d) {}
        }
      }
    };
    var hxa = function (a) {
      var b = HL.shift();
      if ((0, _.Ma)(b) && 0 <= b && !IL[b]) {
        _.JL = b;
        b > (HK ? 1 : 0) && nL(true);
        1 == b && HK;
        var c = window.google.isr.url,
          c = xL(c, "tbm", "isch"),
          c = xL(c, "ijn", b),
          c = xL(c, "ei", window.google.kEI);
        window.google.isr.addh && (c = xL(c, "addh", window.google.isr.addh));
        if (!zK) {
          var d = 0;
          1 == b ? (c = xL(c, "sprg", "1"), d = 1) : 1 < b && (d = hL(), c = xL(c, "sprg", d), d = Math.floor(d / cL()) + 1);
          c = xL(c, "page", d)
        }
        var d = (d = window.document.querySelector("#rg")) ? d.querySelectorAll(AK + "." + yK).length : 0,
          e = 100 * (HK ? b - 1 : b);
        0 == b && (e = 0);
        1 == b && HK && (e = 20);
        if (d != e) {
          var f = -1;
          (0, _.Ma)(window.google.isr.layout) && (f = window.google.isr.layout.getResults().length);
        }
        c = xL(c, "start", 0 < b ? d : 0);
        c = xL(c, "csl", zK ? 1 : 0);
        console.log("start loading more results now");
      } else _.JL = -1
    };
    var nL = function (a) {};
    var sL = function () {
      var a = (0, _.v)("rg");
      if (zK) return (0, _.se)(a) + SL();
      a = GL;
      return a.length ? (a = a[a.length - 1], (0, _.se)(a) + a.offsetHeight) : 0
    };
    var gxa = function (a) {
      var b = +EK.genMoreResultsChunkCutoff;
      return !!b && a == b && CK
    };
    var ixa = function () {
      var a = (0, _.v)("smc");
      (0, _.af)(a, "click", ixa);
      _.PL = false;
      UL(function () {
        a.style.display = "none";
        (0, _.v)("rg").style.height = TL ? TL : "auto";
        DL()
      })
    };
    var WL = function (a) {
      var b = window.google.time(),
        c = 1728E5;
      0 < +EK.pageAgeLimitMillis && (c = +EK.pageAgeLimitMillis);
      if (b - jxa > c) return true;
      c = zK ? zL() : qL();
      if (!zK) {
        fL("getVisibleScreens");
        for (var c = c ? c : qL(), d = cL(), e = 0 < c.length ? [Math.floor(c[0] / d)] : [], f = 0, g = 1; g < c.length; g++) {
          var h = Math.floor(c[g] / d);
          h != e[f] && (f++, e[f] = h)
        }
        c = e
      }
      e = c;
      d = false;
      for (c = 0; c < e.length; c++) XL[e[c] + 1] || (XL[e[c] + 1] = b, d = true);
      var f = [],
        k;
      for (k in XL) {
        g = false;
        for (c = 0; c < e.length; c++)
          if (e[c] + 1 == k) {
            g = true;
            break
          }
        g || f.push(k)
      }
      for (c = 0; c < f.length; c++) delete XL[f[c]],
      delete YL[f[c]];
      k = [];
      for (var l in XL) YL[l] || (1E3 <= b - XL[l] ? k.push(l) : d = true);
      a && (0 < a.sc ? ZL = "&forward=1" : 0 > a.sc && (ZL = "&forward=0"));
      if (0 < k.length) {
        a = "&iact=ms";
        tL && (a = "&iact=" + tL);
        for (c = 0; c < k.length; c++)
          if (b = Nwa[k[c] - 1]) b = "/imgevent?ei=" + window.google.isr.chunkid(k[c]) + "&page=" + k[c] + "&start=" + b.start + "&ndsp=" + b.gF + ZL + a, window.google.isr.url && ((l = window.google.isr.url.match(/[?&]e=([^&]+)/)) && (b += "&e=" + l[1]), (l = window.google.isr.url.match(/[?&]expid=(\d+)/)) && (b += "&expid=" + l[1])),
        YL[k[c]] = true;
        tL = null;
        ZL = ""
      } else d ? ($L && (window.clearTimeout($L), $L = null), $L = window.setTimeout(WL, 1E3)) : tL = null;
      return true
    };
    var kxa = function () {
      tL = "sw";
      return true
    };
    var aM = function () {
      if (!zK) {
        var a = window.document.getElementById("rg").getElementsByTagName("SPAN");
        bM = [];
        for (var b = 0, c; c = a[b]; b++) "rg_ctlv" != c.className && "rg_ctl" != c.className || !c.querySelector(eL() + ".rg_ul") || bM.push(c)
      }
    };
    var dM = function (a) {
      if ((zK || bM && !(0 > a) && bM[a]) && !(0 > a || eM[a] || zK && 1 < a && 0 == scrollTop())) {
        fM.push(a);
        if (!zK || mxa(a)) eM[a] = true;
        gM || hM()
      }
    };
    var hM = function () {
      var a = fM.shift();
      (0, _.Ma)(a) ? (gM = true, (0, _.nxa)(a)) : gM = false
    };
    _.nxa = function (a) {
      if ((zK ? !window.google.isr.layout.getResultsForPage(a) : !bM || 0 > a || !bM[a]) || iM[a]) hM();
      else {
        oxa(a);
        var b;
        if (zK) {
          b = window.google.isr.layout.getResultsForPage(a);
          for (var c = [], d = 0; d < b.length; d++) c.push(b[d].querySelector("img.rg_i"));
          b = c
        } else b = bM[a].getElementsByTagName("IMG");
        jM += b.length;
        for (c = 0; d = b[c++];) {
          var e = d.getAttribute("data-src");
          !e || "string" == typeof d.src && d.src ? kM() : ((0, _.$e)(d, "load", kM), (0, _.$e)(d, "error", pxa), FK ? (qxa.push({
            wY: d,
            z1: e
          }), 6 > lM && rxa()) : d.src = e)
        }
        if (!zK || mxa(a)) iM[a] = true;
        0 == +EK.nTbnsPending && hM()
      }
    };
    var rxa = function () {
      var a = qxa.shift();
      (0, _.Ma)(a) && (a.wY.src = a.z1, lM++)
    };
    var pxa = function (a) {
      ++_.mM;
      a = a || window.event;
      sxa(a, true, _.mM);
      if (a = a.target || a.srcElement)(0, _.af)(a, "error", pxa), (0, _.$e)(a, "error", txa), (0, _.af)(a, "load", kM), a.setAttribute("src", a.getAttribute("src") + "&reload=on");
      kM()
    };
    var sxa = function (a, b, c) {
      a = b ? "f" : "t";
    };
    var txa = function (a) {
      ++_.oM;
      a = a || window.event;
      sxa(a, false, _.oM);
      (a = a.target || a.srcElement) && (0, _.af)(a, "error", txa)
    };
    var kM = function () {
      ++_.nM; - 1 != _.pM && (window.clearTimeout(_.pM), _.pM = -1);
      FK && (lM--, 6 > lM && window.setTimeout(rxa, 0));
      jM--;
      var a = +EK.nTbnsPending;
      a && jM <= a && hM()
    };
    var BL = function () {
      var a = zK ? zL() : qL();
      if (0 != a.length) {
        for (var b = 0; b < a.length; b++) dM(a[b]);
        var c = a[a.length - 1],
          d = a[0],
          a = +EK.bgtprefetchlp; - 1 != qM && 0 < a && (window.clearTimeout(qM), qM = -1);
        uxa || (uxa = true, EK.bgtprefetch || (vxa = false));
        if (vxa) {
          var a = 0 < a ? a : 100,
            e = 1,
            b = +EK.mpfStart;
          0 < b && d >= b && (e = wxa);
          FK && (e = 2);
          qM = window.setTimeout(function () {
            for (var a = zK ? 1 : cL(), b = 1; b <= a * e; b++) dM(c + b), dM(d - b)
          }, a)
        }
      }
    };
    var sM = function () {
      fL("thumbnails.renderBigGulp_");
      if ((0, _.Ma)(window.google.isr.bg_done) && window.document.getElementById("images-grid")) {
        1 == cM && (aM(), !zK && window.google.isr.Hover && window.google.isr.Hover.loadDataForScreen(0));
        var a = zK ? window.google.isr.layout.getNumPages() : bM.length;
        cM >= a ? (window.google.stb.csi.updateRowsInfo && window.google.stb.csi.updateRowsInfo(),
          _.oK || (window.document.getElementById("rg").style.height = "auto"), BL()) : (oxa(cM++), window.setTimeout(sM, 40))
      } else window.setTimeout(sM, 100)
    };
    var oxa = function (a) {
      zK || (1 > a || tM[a]) || (bM[a].className = "rg_ctlv", tM[a] = true)
    };
    _.Bxa = function () {
      var a = window.document.getElementById("rg");
      _.vK[4] || (_.vK[4] = []);
      _.vK[4].push(function() {
        var a = new Date().getTime(),
        b = a - yxa;
        if (b >= 15) {
          var c = scrollTop(),
            d = c - zxa;
          yxa = a;
          zxa = c;
          Axa++;
          a = Math.abs(d / b);
          if (- 1 != rM) {
            window.clearTimeout(rM);
            rM = -1;
          }
          BL();
        }
      });
      BL();
    };
    var AL = function () {
      aM();
      iM = [];
      eM = [];
      fM = [];
      zK || (iM[0] = true, eM[0] = true);
      gM = false;
      tM = [];
      window.clearTimeout(_.pM)
    };
    var mxa = function (a) {
      var b = window.google.isr.layout.getNumPages();
      return a < b - 1 ? true : a == b - 1 ? QL() : false
    };
    var zL = function () {
      var a = [],
        b = scrollTop(),
        c = b + QK;
      if (window.document.getElementById("rg")) {
        var d;
        d = (d = window.document.getElementById("rg")) ? d.querySelectorAll("div.rgsh") : [];
        if (!d.length) return [0];
        for (var e = 0; e < d.length; e++) {
          var f = Cxa(d[e]);
          if (f > b && (a.push(e), f + d[e].offsetHeight >= c)) break
        }(b = d[d.length - 1]) && Cxa(b) + b.offsetHeight < c && a.push(d.length)
      }
      return a
    };
    var Cxa = function (a) {
      return a.hasAttribute("data-offset") ? (0, window.parseInt)(a.getAttribute("data-offset"), 10) : (0, _.se)(a)
    };
    var SL = function (a) {
      var b = void 0 === a ? window.google.isr.layout.getResults() : window.google.isr.layout.getResultsForPage(a);
      if (!b || !b.length) return 0;
      a = void 0 === a ? (0, _.v)("rg") : b[0];
      b = b[b.length - 1];
      return (0, _.se)(b) - (0, _.se)(a) + b.offsetHeight
    };
    _.iL = {};
    (0, _.Vg)(_.x.G(), "sy105");
    _.CL = [];
    _.vK = {};
    var Ywa;
    var zxa;
    var yxa;
    var lM;
    var qxa;
    var wxa;
    var jM;
    var vxa;
    var uxa;
    var eM;
    var gM;
    var fM;
    var qM;
    var Axa;
    var cM;
    var tM;
    var rM;
    var iM;
    var bM;
    var Dxa;
    var jxa;
    var ZL;
    var tL;
    var YL;
    var XL;
    var $L;
    var KL;
    var GL;
    var TL;
    var RL;
    var exa;
    var ML;
    var IL;
    var LL;
    var HL;
    var HK;
    var AK;
    var yK;
    var EK;
    var Nwa;
    var Cwa;
    var FK;
    var DK;
    var CK;
    var pL;
    var Twa;
    var Swa;
    var QK;
    var OK;
    _.BK = false;
    _.LK = null;
    OK = 0;
    QK = 0;
    _.wL = -1;
    _.vL = 0;
    Swa = 0;
    Twa = 0;
    _.oL = 0;
    _.kL = false;
    pL = {};
    _.KK = (_.tc.Oq || _.tc.Fq) && _.sc.Yr;
    CK = false;
    DK = false;
    _.iL.UB = "";
    _.XK = false;
    _.YK = false;
    _.$K = false;
    _.aL = false;
    _.UK = false;
    FK = false;
    _.Lwa = [];
    _.Mwa = [];
    Cwa = "auto";
    Nwa = [];
    _.VK = false;
    EK = {};
    _.ZK = -1;
    yK = "rg_li";
    AK = "li";
    HK = true;
    HL = [];
    LL = 300;
    IL = [];
    _.JL = -1;
    ML = 1;
    exa = false;
    RL = false;
    TL = "";
    _.VL = -1;
    GL = [];
    _.PL = false;
    _.lL = 0;
    KL = [];
    $L = null;
    XL = {};
    YL = {};
    tL = null;
    ZL = "";
    jxa = (new Date).getTime();
    Dxa = 0;
    bM = [];
    iM = [];
    rM = -1;
    tM = [];
    cM = 1;
    Axa = 0;
    qM = -1;
    fM = [];
    gM = false;
    eM = [];
    uxa = false;
    vxa = true;
    jM = 0;
    wxa = 1;
    qxa = [];
    lM = 0;
    yxa = (new Date).getTime();
    zxa = 0;
    _.pM = -1;
    _.nM = 0;
    _.mM = 0;
    _.oM = 0;
    Ywa = 0;
    (0, _.za)("google.isr.lp", hL, void 0);
    (0, _.za)("google.isr.st", mL, void 0);
    (0, _.za)("google.isr.sor", rL, void 0);
    (0, _.za)("google.isr.imgevent", function (a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        c.page && (c = c.page, XL[c] && (YL[c] = true))
      }
    }, void 0);
    (0, _.za)("google.isr.makeImgeventRequest", function (a) {
      Dxa++;
      var b = "dhr" + Dxa,
        c = window.document.createElement("script");
      c.src = a;
      c.id = b;
      window.document.body.appendChild(c)
    }, void 0);
    (0, _.za)("google.isr.makePageSeen", function (a) {
      !YL[a] && XL[a] && (XL[a] = -1, WL())
    }, void 0);
    (0, _.za)("google.isr.srr", function (a) {
      uK(5, a)
    }, void 0);
    (0, _.za)("google.isr.fnc", function (a) {
      -1 == _.JL ? UL(function () {
        DL(false);
        a()
      }) : KL.push(a)
    }, void 0);
    (0, _.za)("google.isr.aacl", QL, void 0);

    (0, _.Sg)(_.x.G(), "sy105");
    (0, _.Wg)(_.x.G(), "sy105");
  } catch (e) {
    _._DumpException(e)
  }
  try {
    var KAa = function () {
      window.clearTimeout(_.pM);
      _.pM = -1;
      _.nM = _.oM = _.mM = 0;
      _.oK && (0 <= _.JL && (_.VL = _.JL, _.JL = -1), _.PL = true, _.lL = 0);
      window.clearTimeout(_.ZK); - 1 != _.wL && (window.clearTimeout(_.wL), _.wL = -1);
      for (var a = (0, _.v)("topstuff"), b = 0; a && b < a.childNodes.length; ++b)(0, _.Pe)(a.childNodes[b], "display", "none");
      if (a = window.document.getElementById("rg")) b = window.document.createElement("div"), b.id = a.id, a.parentNode.replaceChild(b, a);
      _.oL = 0;
      _.kL = false;
      _.rK = {};
      _.pK = {};
      _.vL = 0;
      (a = (0, _.v)("smc")) && (0, _.Pe)(a, "display",
        "none");
      delete window.google.isr.bg_ready;
      delete window.google.isr.bgd;
      delete window.google.isr.bg_done;
      delete _.iL.UB;
      delete window.google.isr.url;
      for (delete window.google.isr.csi_done; a = _.Lwa.pop();)(0, _.af)(a[0], a[1], a[2]);
      if (_.VK)
        for (_.UK = false; a = _.Mwa.pop();)(0, _.Pf)(a[0], a[1]);
      _.KK || _.BK || (window.document[_.tc.qw ? "onkeypress" : "onkeydown"] = _.LK);
      window.google.stb.csi.reinitialize();
      _.XK = _.aL = _.$K = _.YK = false;
      (0, _.af)(window, "resize", _.tK);
      for (var c in _.vK) "object" == typeof _.vK[c] && delete _.vK[c]
    };
    (0, _.Vg)(_.x.G(), "jstr");
    (0, _.Sg)(_.x.G(), "jstr");
    (0, _.Wg)(_.x.G(), "jstr");
  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.Wo = function (a) {
      return "#" == a.Ed
    };
    _.Xo = function (a) {
      return _.Yo._hm ? (a = (0, _.Bl)(a) || {}, "#" + (a[""] ? a[""] : "")) : a || "#"
    };
    _.Zo = function () {
      var a;
      _.Yo._h5h ? (a = (0, _.Xo)((0, _.cg)()).match(/[#&](as_q=|q=|tbs=sbi|tbs=simg)/), a = (0, _.Xf)().href.match(a ? /#(.*)/ : /\?([^#]*)/)) : a = (0, _.Xf)().href.match(/#(.*)/);
      a = (0, _.Xo)(a ? "#" + a[1] : "#");
      _.Yo._h5h && (a = a.replace(/&fpz=([^&]*)/g, "&fp=$1"));
      return new _.Rn("current", a)
    };
    _.$o = function () {
      var a = (0, _.Zo)().value();
      return /#.+/.test(a) ? a : (0, _.Xf)().href.substr((0, _.Xf)().href.indexOf("?")).replace(/#.*/, "")
    };
    _.ap = function (a, b) {
      try {
        var c = (void 0 === b ? (0, _.$o)() : b).match("[?&#]" + a + "=(.*?)([&#]|$)");
        if (c) return (0, window.decodeURIComponent)(c[1].replace(/\+/g, " ").replace(/[\n\r]+/g, " "))
      } catch (d) {
        (0, _.Hn)("GQC", {
          c: a
        }, d)
      }
      return null
    };
    _.bp = function (a) {
      var b = (0, _.ap)("dq", a);
      return null != b ? b : (0, _.ap)("q", a) || (0, _.ap)("as_q", a)
    };
    _.Yo = {
      _ahl: true,
      _csm: 0,
      _dape: false,
      _en: false,
      _hnp: false,
      _ipp: false,
      _sb: true,
      _scl: true,
      _hm: false,
      _h5h: false,
      _h5l: void 0,
      _tlh: false
    };
    (0, _.Vg)(_.x.G(), "sy27");

    (0, _.Sg)(_.x.G(), "sy27");
    (0, _.Wg)(_.x.G(), "sy27");
  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.cp = function () {
      return (0, _.gn)() ? "gbqfw" : "searchform"
    };
    (0, _.Vg)(_.x.G(), "sy28");
    _.mca = (0, _.tg)("pushState" in window.history && (_.tc.qw || _.tc.kw));
    (0, _.Sg)(_.x.G(), "sy28");
    (0, _.Wg)(_.x.G(), "sy28");
  } catch (e) {
    _._DumpException(e)
  }
  try {
    var nca = function (a) {
      a.Ed = "#"
    };
    _.dp = function (a) {
      "hp" == a ? ((0, _.lj)(window.document.body, ["tbo", "srp"]), (0, _.Sf)(window.document.body, "hp")) : ((0, _.Tf)(window.document.body, "hp"), (0, _.Sf)(window.document.body, "srp"));
      (0, _.Qf)(132, [a])
    };
    _.ep = function (a) {
      if ((0, _.ap)("q", a)) return true;
      a = (0, _.ap)("tbs", a);
      return !!a && (-1 != a.indexOf("simg") || -1 != a.indexOf("sbi") || -1 != a.indexOf("ppl_id") && -1 != a.indexOf("ppl_np"))
    };
    var gp = function () {
      var a = (0, _.Xf)(),
        b = (0, _.Xo)((0, _.cg)());
      return (0 == a.href.indexOf(_.Yo._h5l) || "/search" != a.pathname && "/images" != a.pathname) && !(0, _.ep)(b)
    };
    var hp = function () {
      var a = [];
      if (window.gbar) {
        var b = window.gbar.bv;
        b && a.push("on." + b.n, "or." + b.r)
      }
      window.google.j.cf && a.push("cf." + window.google.j.cf);
      return 0 < a.length ? "bav=" + a.join(",") : ""
    };
    var ip = function () {
      for (var a = 0; a < jp.length; ++a)(0, _.Un)(jp[a]);
      jp = [];
      kp = 0
    };
    _.lp = function () {
      return gp() ? "#" : (0, _.Zo)().value()
    };
    var oca = function (a) {
      return (0, _.yl)((0, _.Bl)(a))
    };
    var mp = function (a, b) {
      var c = a.split("#");
      return 1 < c.length ? c[0] + "#" + b(c[1]) : a
    };
    _.np = function (a) {
      a = a.replace(/(^|&)bav\=[^&]*/g, "");
      var b = hp();
      return "" != b ? a + "&" + b : a
    };
    var pca = function (a, b) {
      if (!a || !_.Yo._tlh) return a;
      var c = (0, _.Bn)((0, _.Dn)(), b);
      return (0, _.xn)(a, c, false)
    };
    var op = function (a, b) {
      _.Yo._hm ? (0, _.ul)("", a, b) : b ? (0, _.Xf)().replace((0, _.Xf)().href.replace(/#.*/, "") + a) : (0, _.Xf)().hash = a;
      (0, _.Qf)(43, [a])
    };
    var pp = function (a) {
      a = (0, _.np)(a);
      a = a.replace(/(^|&)bvm\=[^&]*/g, "");
      var b = _.Nj ? (0, _.Fj)() : "";
      return a = b ? a + b : a
    };
    var qp = function () {
      for (var a = _.Qn.rK("c"), b = 0; b < a.length; ++b)
        if ("1" != a[b]) return a[b];
      return "1"
    };
    var qca = function (a) {
      a._ls = (0, _.Sn)().value()
    };
    var rca = function (a) {
      a = a || (0, _.Xo)((0, _.cg)());
      return !(a && -1 < a.substr(1).indexOf("#"))
    };
    var sca = function (a) {
      kp && (window.clearTimeout(kp), kp = window.setTimeout(ip, a))
    };
    var tca = function (a) {
      kp && (window.clearTimeout(kp), (0, _.Cn)(a) == (0, _.Cn)(rp) && ip())
    };
    var sp = function () {
      _.Nn = window.google.j.ss
    };
    var tp = function () {
      window.google.j.ss = _.yo > window.google.j.ss ? _.yo : window.google.j.ss + 1
    };
    var up = function (a) {
      _.Mn.execute(function () {
        var b = _.Mn.H();
        _.Mn = a;
        for (var c = 0, d; d = b[c++];) a.execute(d)
      })
    };
    _.vp = function (a, b) {
      a = mp(a, pca);
      try {
        if (_.Yo._h5h) {
          var c = a;
          try {
            _.Yo._hm && (c = mp(c, oca));
            var d = c.replace(/^#/, "/" + (0, _.eo)() + "?").replace(/&fp=([^&]*)/g, "&fpz=$1");
            if (!((0, _.Xf)().href.replace(RegExp(".*(?=/" + (0, _.eo)() + "\\?)"), "") == d || "#" == c && gp())) window.history[b ? "replaceState" : "pushState"](c, "", d)
          } catch (e) {
            (0, _.Hn)("SL", {
              h5h: _.Yo._h5h,
              r: b,
              v: c
            }, e)
          }
        } else b ? op(a, true) : a.indexOf("#") || op(a)
      } catch (f) {
        (0, _.Hn)("SL", {
          h5h: _.Yo._h5h,
          r: b,
          v: a
        }, f)
      }
    };
    _.wp = function (a) {
      var b = "#";
      try {
        if ((0, _.Ra)(a)) b += a.match(/\?(.*)/)[1].replace(/#.*/, "");
        else {
          for (var c = [], d = 0, e; e = a.elements[d++];)
            if ("radio" != e.type && "submit" != e.type || e.checked) {
              if ("btnI" == e.name) return;
              e.name && c.push(e.name + "=" + (0, window.encodeURIComponent)(e.value).replace("%3A", ":"))
            }
          b += c.join("&").replace(/\%20/g, "+")
        }
        var b = pp(b),
          b = b.replace(/\'/g, "%27"),
          f;
        if (f = b) {
          var g = (0, _.ap)("q", b);
          f = /^\s*cache:/.test(g)
        }
        if (f) return "#"
      } catch (h) {
        (0, _.Hn)("GUFQ", {
          t: a.tagName
        }, h);
        return
      }
      b = (0, _.fg)("fp", b, "1" ==
        _.Uo ? qp() : _.Uo);
      return b = (0, _.Qf)(51, [b], b) || ""
    };
    var uca = function (a, b, c, d) {
      _.Lo && (0, _.Qf)(72, []);
      var e = _.Lo.L(a);
      if (!e && (b || (_.Lo.H(), _.Lo.D(), _.Lo.$()), _.Mo && !_.Lo.V())) {
        _.Mo.dd(a, c);
        return
      }
      d && e && !c ? window.setTimeout(function () {
        _.Lo.dd(a)
      }, d) : _.Lo.dd(a, c)
    };
    var vca = function () {
      var a = (0, _.v)("ecs");
      if (a && (a = (0, _.kh)(a, "url"))) {
        var b;
        b = a;
        0 <= b.indexOf("?") && (b = b.substr(0, b.indexOf("?") + 1));
        b = b.substr(b.lastIndexOf("/") + 1);
        b = b.substr(0, b.indexOf("."));
        if (!(b in _.Qn.A.c && (0, _.Ma)(_.Qn.getItem("c", b)))) {
          a = a.replace(/([\?&])bav=[^&]*&?/, "$1");
          b = hp();
          if ("" != b) {
            var c = "&";
            if (-1 != a.indexOf("?")) {
              var d = a[a.length - 1];
              if ("&" == d || "?" == d) c = ""
            } else c = "?";
            a = a + c + b
          }
          b = (0, _.od)("SCRIPT");
          b.src = a;
          ((0, _.v)("xjsd") || window.document.body).appendChild(b)
        }
      }
    };
    _.xp = function (a, b) {
      var c = a || _.Uo;
      try {
        _.Vn.G().clear();
        var d = _.Qn.getItem("c", c);
        if (null != d)
          for (var e = 0, f; f = d.L[e++];) {
            var g = (0, _.v)(f);
            if (g) {
              if (!b || (0, _.Qf)(130, [f, b])) g.style.visibility = "hidden"
            } else(0, _.Hn)("C", {
              container: f
            }, Error("Missing chrome container"))
          } else(0, _.Hn)("C", {
            fp: c
          }, Error("Missing chrome item"))
      } catch (h) {
        (0, _.Hn)("C", {
          fp: c,
          c: f
        }, h)
      }
    };
    var wca = function (a) {
      var b = (0, _.Sn)();
      if ((0, _.Wo)(b)) return null;
      b = (0, _.Qo)(b.Ed);
      return (b = _.Qn.getItem("s", b)) ? b.D && b.D[a] ? b.D[a] : "" : null
    };
    var xca = function (a) {
      return window.google.psy && window.google.psy.q ? false : yp ? true : (a = (0, _.dg)("redir", a)) ? (yp = true, window.location.replace((0, window.decodeURIComponent)(a)), true) : false
    };
    var zp = function (a, b) {
      var c = b || window.google.j.gwtl();
      if (_.tc.Hc) {
        window.history.back();
        try {
          c.replace(a), (0, _.Qf)(43, [a, true])
        } catch (d) {
          (0, _.Hn)("SL", {
            h5h: _.Yo._h5h,
            r: true,
            v: a
          }, d)
        }
      } else try {
        c.href = a, (0, _.Qf)(43, [a])
      } catch (e) {
        (0, _.Hn)("SL", {
          h5h: _.Yo._h5h,
          r: false,
          v: a
        }, e)
      }
    };
    var yca = function (a) {
      var b = a.lastIndexOf("\x3c/script>");
      return 0 > b ? a : a.substr(b + 9)
    };
    var Ap = function (a) {
      _.tc.Hc && (a = a.replace(zca, "<input type=hidden>$1"));
      return a
    };
    var Aca = function (a) {
      (Bp = a) && (0, _.Nf)(80, tca)
    };
    var Cp = function (a, b) {
      for (var c = 0, d; d = a[c++];)(0, _.Ln)(d, b)
    };
    var Dp = function (a) {
      var b = (0, _.hn)();
      if (!b || b.q.value != a) {
        var c;
        if (!Ep && window.google.ac && window.google.ac.gs) {
          c = window.google.ac.gs();
          var d = _.y.Mk();
          c && d && (Ep = d.translate(window.google.ac.gs()))
        }(c = Ep) && c.yc(a);
        b && (b.q.value = a)
      }
    };
    var Fp = function (a, b, c) {
      return a.replace(RegExp("([?&]" + b + "=).*?([&#]|$)"), "$1" + (0, window.encodeURIComponent)(c).replace(/\%20/g, "+") + "$2")
    };
    var Bca = function (a) {
      a ? _.An = RegExp("[" + a + "]+$") : _.An = null
    };
    var Gp = function (a, b) {
      _.Yo[a] = b
    };
    var Hp = function () {
      return (_.Yo._h5h ? (0, _.Xf)().href == _.Yo._h5l : "#" == (0, _.Xo)((0, _.cg)())) || "/search" != (0, _.Xf)().pathname || Ip ? "" : (Ip = true, "&sei=" + Cca)
    };
    var Dca = function () {
      if ((0, _.qn)("session", "web") && "/search" == (0, _.Xf)().pathname) {
        for (var a = (0, _.pn)("session", "web"), b = a.get("bpk"), b = (0, _.Oa)(b) ? b : [], c = 0; c < b.length; c++)
          if (b[c] == window.google.kEI) {
            Ip = true;
            break
          }
        Ip || (b.push(window.google.kEI), a.set("bpk", b));
        (0, _.Lf)(_.mj, _.Ga, Hp)
      }
    };
    var Jp = function (a, b) {
      var c = _.Qn.getItem("u", a);
      if (c)
        for (var d = 0; d < c.B.length; ++d) {
          var e = c.B[d].A.getAll();
          Cp(e, b)
        }
    };
    var Eca = function (a) {
      var b = {
        is: a,
        ss: 0
      };
      Jp((0, _.Qo)(a), b)
    };
    var Kp = function (a) {
      if ((0, _.Qf)(3, [a])) {
        tp();
        up(_.In.G());
        (0, _.xp)();
        try {
          var b = _.Qn,
            c = (0, _.Qo)(a),
            d = b.getItem("s", c).A.getAll(),
            b = {
              is: a,
              ss: 0
            };
          Cp(d, b);
          Jp(c, b);
          _.tc.Hc && _.Mn.execute(function () {
            for (var a = ["pmocntr", "pmocntr2"], b = 0, c; c = a[b++];)
              if (c = (0, _.v)(c)) c.style.display = "none"
          })
        } catch (e) {
          (0, _.Hn)("DPFC", {
            s: a
          }, e)
        }
        _.Mn.execute((0, _.ab)(function (a) {
          (0, _.Qf)(31, [a]);
          window.postMessage && window.postMessage("jrc", "*")
        }, a))
      } else _.Yo._scl = true
    };
    var Fca = function (a, b, c) {
      a[b] ? a.__handler || (a.__handler = a[b], a[b] = function (b) {
        return false != a.__handler(b) && c(b, a)
      }) : a.__handler = a[b] = (0, _.$a)(c, a)
    };
    var Lp = function (a, b) {
      a && (_.tc.Hc ? a.styleSheet && (a.styleSheet.cssText = b) : a.textContent = b)
    };
    var Up = function (a, b) {
      if (b || window.google.j.ss == _.Nn && ++Vp == Sp) Rp = true;
      if (!b && (a = a || window.event)) {
        var c = a.target || a.srcElement,
          d = Up;
        (0, _.af)(c, "load", d);
        (0, _.af)(c, "error", d)
      }
    };
    var Wp = function (a) {
      var b = _.Yo._csm;
      return "n." + a[0] + ",ttfc." + Math.round(a[1]) + ",ttlc." + Math.round(a[2]) + ",cbt." + Math.round(a[3]) + (b ? ",slow." + b : "")
    };
    var Gca = function (a) {
      a._ph = Yp[Zp] || 0
    };
    var $p = function (a, b) {
      for (var c in b) {
        var d = b[c];
        d && "object" == typeof d ? (a[c] && "object" == typeof a[c] || (a[c] = {}), $p(a[c], d)) : a[c] = d
      }
    };
    var aq = function (a, b, c, d) {
      try {
        d || _.So.add("p", [b, c]);
        if (!(0, _.Qf)(6, [b, a, c])) return false;
        (0, _.Qf)(118, [a, b]);
        var e = (0, _.v)(b);
        c = Ap(c);
        try {
          if (e.innerHTML = c, 0 < Bp && (0, _.Qf)(79, [])) {
            if (0 != e.getElementsByTagName("SCRIPT").length && (rp && (a != rp && kp) && (window.clearTimeout(kp), kp = 0, jp = []), rp = a, jp.push(e), 1 == jp.length && (kp = window.setTimeout(ip, Bp)), !bq)) {
              var f = (0, _.$a)(sca, null, Bp);
              (0, _.$e)(window, "keypress", f);
              bq = true
            }
          } else(0, _.Un)(e)
        } catch (g) {
          var h = e.cloneNode(false);
          h.innerHTML = c;
          e.parentNode.replaceChild(h, e);
          (0, _.Un)(h)
        }(0, _.Qf)(119, [a, b]);
        (0, _.v)(b).style.visibility = ""
      } catch (k) {
        (0, _.Hn)("P", {
          id: b
        }, k)
      }
      Yp[Zp] = 21;
      if (!(0, _.Qf)(18, [b])) return false
    };
    var Hca = function (a, b) {
      if (("sdb" == b || "taw" == b) && cq) {
        window.document.body.style.height = window.document.body.offsetHeight + 4 + "px";
        try {
          (0, _.Qf)(129, [], false, true) || (0, _.xp)(void 0, a)
        } catch (c) {}(0, _.Qf)(103, [a]) && window.scroll(0, 0);
        cq = false
      }
    };
    var Ica = function (a, b) {
      if ("main" == b) {
        var c = (0, _.bp)(a);
        null !== c && (c = (0, _.Qf)(4, [c, true], c, null), null === c || Dp(c))
      }
    };
    var dq = function () {
      (0, _.Sj)(this)
    };
    _.eq = function () {};
    var iq = function (a, b, c) {
      var d = (0, _.Ra)(a);
      if (!_.Yo._en || !(0, _.Qf)(70, [a, d])) return true;
      !d && a.q && a.q.blur();
      a = (0, _.wp)(a);
      if (!a || "#" == a) return true;
      if (!(0, _.ep)(a)) return false;
      !_.sc.Yr && (0, _.Qf)(24, [a]) && (0, _.vp)(a);
      var d = (0, _.ap)("tbm", a),
        e = (0, _.ap)("tbm", (0, _.Tn)().value());
      d != e && (0, _.Qf)(88, [e, d]);
      (0, _.Tn)().set(a);
      _.Yo._hnp = true;
      _.Qn.removeItem("s", (0, _.Qo)(a));
      (0, _.yd)((0, _.v)("jjsd"));
      window.google._bfr = void 0;
      (0, _.v)("csi").value = "";
      (0, _.fq)(a, b, c);
      return false
    };
    var Jca = function () {
      var a = (0, _.hn)();
      a && jq && (a.q.value = jq)
    };
    var Kca = function () {
      var a = (0, _.hn)();
      a && (a.q.setAttribute("value", a.q.value), (a = (0, _.v)("grey")) && a.setAttribute("value", a.value))
    };
    var Lca = function (a, b) {
      (0, _.Qf)(69);
      return iq(b)
    };
    var lq = function () {
      this.J = 0;
      this.Bc = "";
      this.B = this.D = this.H = false;
      this.A = ""
    };
    var mq = function () {
      this.A = {}
    };
    var Mca = function (a, b, c) {
      var d = new lq;
      c && (d.J = c);
      return a.A[b] = d
    };
    var nq = function () {
      this.A = "/" + (0, _.eo)() || "";
      this.B = new mq
    };
    var qq = function (a, b, c) {
      a && "#" != a || (0, _.Xf)().href.replace(/#.*/, "") == _.Yo._h5l || "/search" == (0, _.Xf)().pathname || "/images" == (0, _.Xf)().pathname ? rq(b ? 1 : 0, c, a || (0, _.lp)()) : (0, _.Xf)().replace((0, _.Xf)().href)
    };
    var Nca = function (a) {
      var b = (0, _.lp)();
      qq("#" == b ? "#" : a && a.state, false, false)
    };
    var sq = function () {
      var a = (0, _.Xo)((0, _.cg)());
      return (0, _.ep)(a) ? ((0, _.vp)((0, _.Xf)().href.match(/#.*/)[0], true), true) : false
    };
    var Oca = function () {
      sq() && rq()
    };
    var Pca = function () {
      rq()
    };
    var Qca = function (a, b) {
      rq(b)
    };
    var Rca = function (a) {
      return !/&rct=j/.test(a) && _.Po.jh.test(a) && !iq(a, true)
    };
    var jp = [],
      kp, rp, Ep = null,
      jq, hq = false,
      gq = false,
      yp = false,
      zca = /[\s\n\r]*(\x3cscript[\s\S]*?\x3e)/ig,
      bq, Bp, xq = false;
    (0, _.Vg)(_.x.G(), "sy20");
    var yq, Cca = window.google.kEI,
      Ip = false;
    var Sp, Vp, Op = 0,
      Rp = false,
      Tp = 0,
      uq = {
        webhp: 1,
        imghp: 1,
        mobilewebhp: 1
      };
    var Yp = {}, Zp = "";
    var cq = false;
    var zq;
    var wq = false,
      pq = window.google.j ? window.google.j.b : false;

    (0, _.Sg)(_.x.G(), "sy20");
    (0, _.Wg)(_.x.G(), "sy20");
  } catch (e) {
    _._DumpException(e)
  }
  try {
    (0, _.Vg)(_.x.G(), "pcc");
    if (window.google.y.first) {
      for (var O1 = 0, GPa; GPa = window.google.y.first[O1]; ++O1) GPa();
      delete window.google.y.first
    }
    for (O1 in window.google.y) window.google.y[O1][1] ? window.google.y[O1][1].apply(window.google.y[O1][0]) : window.google.y[O1][0].go();
    (0, _.za)("google.y.x", window.google.x, void 0);
    window.google.y.first = [];
    (0, _.za)("google.x", function (a, b) {
      b && b.apply(a);
      return false
    }, void 0);
    window.google.pml = 1;

    (0, _.Sg)(_.x.G(), "pcc");
    (0, _.Wg)(_.x.G(), "pcc");
  } catch (e) {
    _._DumpException(e)
  }
})(_);
