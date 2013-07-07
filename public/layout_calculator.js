(function () {
  window.google.biw = 1162;
  window.google.bih = 370;
  window.google.pmc.jstr = {
    "meta": {
      "bgtprefetch": "1",
      "bgtprefetchlp": 0,
      "genChunk": true,
      "genChunkMax": 9,
      "genMoreResultsChunkCutoff": 3,
      "genPrefetchCutoff": 1,
      "mpfStart": 1,
      "nTbnsPending": 8,
      "numResults": 1230,
      "pageAgeLimitMillis": 172800000,
      "showMoreResults": true
    }
  };

  var defaults = {
    row_height: 140,
    mrw: 80,
    isuf: 0,
    eca: 0.1,
    ma: 12,
    bge: true
  };

  var aspectRatio = function (image) {
    return image.width / image.height;
  };

  var hasClass = function (el, cssClass) {
    return el ? RegExp("(\\s|^)" + cssClass + "(\\s|$)").test(el.className) : false;
  };

  var camelize = function (str) {
    return String(str).replace(/\-([a-z])/g, function (a, c) {
      return c.toUpperCase();
    });
  };

  var parseJSON = function (str) {
    return window.JSON ? window.JSON.parse(str) : eval("(" + str + ")");
  };

  var typeString = function (obj) {
    var typeOfString = typeof obj;
    if ("object" == typeOfString)
      if (obj) {
        if (obj instanceof Array) return "array";
        if (obj instanceof Object) return typeOfString;
        var toString = Object.prototype.toString.call(obj);
        if ("[object Window]" == toString) return "object";
        if ("[object Array]" == toString || "number" == typeof obj.length && "undefined" != typeof obj.splice && "undefined" != typeof obj.propertyIsEnumerable && !obj.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == toString || "undefined" != typeof obj.call && "undefined" != typeof obj.propertyIsEnumerable && !obj.propertyIsEnumerable("call")) return "function";
      } else return "null";
      else if ("function" == typeOfString && "undefined" == typeof obj.call) return "object";
    return typeOfString;
  };

  var initializeSettingsCache = function () {
    settings = {};
    var grid = document.getElementById("images-grid");
    if (grid) {
      for (var i = 0; i < grid.attributes.length; ++i) {
        var attribute = grid.attributes[i];
        if (attribute.specified && 0 === attribute.name.indexOf("data-")) {
          settings[attribute.name] = attribute.value;
        }
      }
    }
  };

  var numericalSetting = function (key, defaultValue) {
    settings || initializeSettingsCache();
    return settings.hasOwnProperty(key) ? parseFloat(settings[key]) : defaultValue;
  };

  var definePublicFunction = function (name, fn) {
    s.prototype[name] = fn;
  };

  var p, u = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.p = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a
    };
  var xa = function (a, b, c, d, e, f, g, h, k) {
      var l = [];
      if (!a.length) return l;
      var n = b - c,
        r = [],
        v = 0;
      if (0 > n)
        for (c = 0; c < a.length; c++) {
          var m = a[c],
            q = Q(aspectRatio(m), d, f, m.width, g),
            m = q / aspectRatio(m) * (va(m) - aspectRatio(m));
          if (0 < m) throw Error("thinnest AR > AR");
          m + q < f &&
            (m = f - q);
          r[c] = m;
          v += m
        } else if (!k)
          for (c = 0; c < a.length; c++) {
            m = a[c];
            m = Q(wa(m), d, f, m.width, g) - Q(aspectRatio(m), d, f, m.width, g);
            if (0 > m) throw Error("widest AR < AR");
            r[c] = m;
            v += m
          }
      for (c = m = 0; c < a.length; c++) q = k || 0 == v ? 0 : n * r[c] / v, q = Math.round(Math.max(f, Q(aspectRatio(a[c]), d, f, a[c].width, g) + q)), m += q + e, l.push(q);
      if (!k)
        if (b = b - m - (h || 0), l[l.length - 1] + b < f)
          for (c = l.length - 1; - 1 < c && (a = Math.max(b, f - l[c]), l[c] += a, b -= a, 0 != b); c--);
        else a[a.length - 1].s && 0 < b || (l[l.length - 1] += b);
      return l
    }, Q = function (a, b, c, d, e) {
      a = Math.min(a, e || Number.MAX_VALUE);
      return Math.max(Math.min(b *
        a, d), c)
    };
  var Qa, settings,
    lb = numericalSetting("data-mrw", defaults.mrw),
    mb = numericalSetting("data-isuf", defaults.isuf),
    qb = function (a, b, c, d) {
      return {
        P: d + "px",
        r: ""
      };
    }, Z = function (a, b) {
      if (undefined === Qa) {
        var c = window.navigator.userAgent;
        Qa = !(!c || -1 == c.indexOf("WebKit") || 0 == c.indexOf("Opera"))
      }
      if (Qa)
        for (var d in b) c = camelize(d), a.style[c] = b[d];
      else {
        c = [];
        for (d in b) c.push(d + ":" + b[d]);
        a.setAttribute("style", c.join(";"))
      }
    }, rb = function (a, b, c) {
      this.a = a;
      this.c = false;
      this.e = 0;
      this.h = 0;
      this.d = 0;
      this.k = 0;
      this.n = false;
      this.width = b.width;
      this.height = b.height;
      this.s = false
    }, sb = numericalSetting("data-eca", defaults.eca),
    va = function (a) {
      var b = (a.d + a.k) / 100;
      b = Math.min(1, b + sb);
      return (a.width - a.width * b) / a.height
    }, wa = function (a) {
      var b = (a.e + a.h) / 100;
      b = Math.min(1, b + sb);
      return a.width / (a.height - a.height * b)
    }, tb = function (b) {
      return Math.floor(0.5 * b)
    }, ub = function (b) {
      return Math.floor(b / 2)
    };
  var Yb = function (a, b) {
    var c = Xb;
    this.d = a;
    this.a = c;
    this.e = !! b;
    this.c = lb || 0
  };
  var bc = function (a, b) {
      for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c],
          e, f;
        (f = "array" == typeString(d)) || (e = typeString(d), f = (e = "array" == e || "object" == e && "number" == typeof d.length) && Object.prototype.hasOwnProperty.call(d, "callee"));
        if (f) a.push.apply(a, d);
        else if (e) {
          f = a.length;
          for (var g = d.length, h = 0; h < g; h++) a[f + h] = d[h]
        } else a.push(d)
      }
    }, cc = function () {}, ec = function (a) {
      var b =
        dc;
      a.$ = 0;
      if (b.m) {
        b = b.m;
        c = 0;
        for (var d = b.length - 1; c <= d;) {
          var e = c + d >> 1;
          0 > b[e].$ ? d = e - 1 : c = e + 1
        }
        c < b.length && 0 == b[c].$ && ++c;
        b.splice(c, 0, a)
      } else b.m = [a]
    }, hc = function (a) {
      function b(a) {
        arguments.callee.p.constructor.call(this, a);
        var b = this.m.length;
        this.d = [];
        for (var c = 0; c < b; ++c) this.m[c].ra || (this.d[c] = new this.m[c](a))
      }
      var c = a.w;
      u(b, c);
      for (var d = []; a;) {
        if (c = a.w) {
          c.m && bc(d, c.m);
          var c = c.prototype,
            e;
          for (e in c)
            if (c.hasOwnProperty(e) && "function" == typeString(c[e]) && c[e] !== a) {
              var f = !! c[e].ga,
                g = fc(e, c, d, f);
              (f = gc(e, c, g, f)) && (b.prototype[e] = f)
            }
        }
        a = a.p && a.p.constructor
      }
      b.prototype.m = d;
      return b
    }, fc = function (a, b, c, d) {
      for (var e = [], f = 0; f < c.length && (c[f].prototype[a] ===
        b[a] || (e.push(f), !d)); ++f);
      return e
    }, gc = function (a, b, c, d) {
      return c.length ? d ? function (b) {
        var d = this.d[c[0]];
        return d ? d[a].apply(this.d[c[0]], arguments) : this.m[c[0]].prototype[a].apply(this, arguments)
      } : b[a].ha ? function (b) {
        var d;
        i: {
          d = Array.prototype.slice.call(arguments, 0);
          for (var g = 0; g < c.length; ++g) {
            var h = this.d[c[g]];
            if (h = h ? h[a].apply(h, d) : this.m[c[g]].prototype[a].apply(this, d)) {
              d = h;
              break i
            }
          }
          d = false
        }
        return d
      } : b[a].Y ? function (b) {
        var d;
        i: {
          d = Array.prototype.slice.call(arguments, 0);
          for (var g = 0; g < c.length; ++g) {
            var h =
              this.d[c[g]],
              h = h ? h[a].apply(h, d) : this.m[c[g]].prototype[a].apply(this, d);
            if (null != h) {
              d = h;
              break i
            }
          }
          d = undefined
        }
        return d
      } : b[a].Z ? function (b) {
        for (var d = Array.prototype.slice.call(arguments, 0), g = 0; g < c.length; ++g) {
          var h = this.d[c[g]];
          h ? h[a].apply(h, d) : this.m[c[g]].prototype[a].apply(this, d)
        }
      } : function (b) {
        for (var d = Array.prototype.slice.call(arguments, 0), g = [], h = 0; h < c.length; ++h) {
          var k = this.d[c[h]];
          g.push(k ? k[a].apply(k, d) : this.m[c[h]].prototype[a].apply(this, d))
        }
        return g
      } : d || b[a].ha || b[a].Y || b[a].Z ? null : ic
    }, ic = function () {
      return []
    };
  var jc = function () {
    var a = function () {};
    a.Y = true;
    return a
  }, kc = function () {
      var a = function () {};
      a.ga = true;
      return a
    }, lc = function () {
      var a = function () {};
      a.Z = true;
      return a
    }, s = function () {
      if (!this.l) {
        for (var a = this.constructor; a && !a.w;) a = a.p && a.p.constructor;
        a.w.N || (a.w.N = hc(a));
        this.l = new a.w.N(this);
      }
      this.d = new nc;
      this.a = [];
      this.R = [];
      this.U = [];
      this.n = [];
      this.h = numericalSetting("data-row-height", defaults.row_height);
      this.V = false;
      this.l.initialize(this.h)
    }, Xb = numericalSetting("data-ma", defaults.ma);
  numericalSetting("data-mrw", defaults.mrw);
  settings || initializeSettingsCache();
  var oc = settings.hasOwnProperty("data-bge") ? "true" == settings["data-bge"] : defaults.bge;
  s.prototype.F = false;
  s.prototype.H = false;
  s.prototype.qa = 0;
  s.prototype.getResults = function () {
    return this.U
  };
  definePublicFunction("getResults", s.prototype.getResults);
  s.prototype.getNumPages = function () {
    return this.l.ca()
  };
  definePublicFunction("getNumPages", s.prototype.getNumPages);
  s.prototype.getResultsForPage = function (a) {
    return this.l.da(a)
  };
  definePublicFunction("getResultsForPage", s.prototype.getResultsForPage);
  s.prototype.layoutResults = function (a) {
    this.s = this.a.length ? 3 : 0;
    this.c = document.getElementById("rg");
    switch (this.s) {
    case 0:
      this.l.T();
      pc(this);
      rc(this);
      break;
    case 3:
      sc(this);
      rc(this);
      break;
    default:
      throw Error("Unexpected layout state: " + this.s);
    }
  };
  definePublicFunction("layoutResults", s.prototype.layoutResults);
  s.prototype.moveAndLayoutNewResults = function () {
    var a = document.getElementById("rg"),
      b = document.querySelectorAll("div.rg_add_chunk");
    if (a && 0 != b.length) {
      for (var c, d = 0; c = b[d]; ++d) {
        var e = c.getAttribute("data-cei");
        if (e && !this.R[e]) {
          this.R[e] = true;
          var f = 1 == this.a.length && 100 > this.a[0],
            g = 3 == this.a.length;
          for (this.e = document.createDocumentFragment(); 0 < c.childNodes.length;) this.e.appendChild(c.childNodes[0]);
          this.k();
          a.appendChild(this.e);
          this.e = null
        }
        c.parentNode.removeChild(c);
      }
      tc(this)
    } else 1 == this.a.length && 20 >= this.a[0]
  };
  definePublicFunction("moveAndLayoutNewResults", s.prototype.moveAndLayoutNewResults);
  s.prototype.areAllResultsLoaded = function () {
    return this.F
  };
  definePublicFunction("areAllResultsLoaded", s.prototype.areAllResultsLoaded);
  s.prototype.getChunkSize = function (a) {
    return this.a[a] || 0
  };
  definePublicFunction("getChunkSize", s.prototype.getChunkSize);
  s.prototype.hasRenderedChunk = function (a) {
    return undefined !== this.a[a]
  };
  definePublicFunction("hasRenderedChunk", s.prototype.hasRenderedChunk);
  s.prototype.getChunkSizeArray = function () {
    return this.a
  };
  definePublicFunction("getChunkSizeArray", s.prototype.getChunkSizeArray);
  var sc = function (a) {
    console.log("this is called when window width/height changes");
    a.U = [];
    pc(a);
    a.l.aa();
  }, uc = function (a, b) {
      b.hasAttribute("data-ri") || b.setAttribute("data-ri", a.qa++)
    }, pc = function (a) {
      for (var b = a.d.c = window.innerHeight || document.documentElement.offsetHeight, c = a.c, d = 0; c && !isNaN(c.offsetTop);) d += c.offsetTop, c = c.offsetParent;
      c = a.d.e = d;
      a.d.d = b - c;
      b = document.getElementById("images-grid-inner").offsetWidth;
      0 < b && (a.d.a = b);
      document.getElementById("rg").style.width = (a.d.a || 0) + "px"
    }, rc = function (a) {
      var b = a.c.parentNode,
        c = a.c.nextSibling;
      b.removeChild(a.c);
      a.l.W(a.s, a.d, a.e);
      a.c.style.visibility = "visible";
      b.insertBefore(a.c, c)
    }, jd = function (a) {
      if (!a.a.length) return false;
      if (oc || !a.V) switch (a.a.length) {
      case 1:
        return 20 > a.a[0];
      case 2:
        return 80 > a.a[1];
      default:
        return 100 > a.a[a.a.length - 1]
      } else return 100 > a.a[a.a.length -
        1]
    }, ld = function (a) {}, qc = function (a) {
      a = a.c.getElementsByTagName("img");
      for (var b = 0, c;
        (c = a[b]) && !(c.hasAttribute("data-src") || c.hasAttribute("src") && 0 != c.getAttribute("src").indexOf("data:")); b++);
      return b
    };
  s.prototype.addNewResultsListener = function (a) {
    this.n.push(a)
  };
  definePublicFunction("addNewResultsListener", s.prototype.addNewResultsListener);
  s.prototype.removeNewResultsListener = function (a) {
    var b = this.n,
      c = -1;
    if (Array.prototype.indexOf) c = Array.prototype.indexOf.call(b, a);
    else
      for (var d = b.length, e = 0; e < d; e++)
        if (b[e] === a) {
          c = e;
          break
        } a = c; - 1 != a && b.splice(a, 1)
  };
  definePublicFunction("removeNewResultsListener", s.prototype.removeNewResultsListener);
  var nc = function () {}, dc = function (a) {
      this.a = a
    }, md = dc,
    nd = s;
  md.p ? ac(md.prototype instanceof cc, "delegate base class is not a subclass of fava.delegate.Delegate") : u(md, cc);
  nd.w = md;
  var od = nd;
  do od = od.p && od.p.constructor; while (od && !od.w);
  if (od && od.w !== md.p.constructor) throw Error("delegate base must derive from superclass delegate base");
  p = dc.prototype;
  p.initialize = lc();
  p.ca = jc();
  p.da = jc();
  p.ba = lc();
  p.T = kc();
  p.W = kc();
  p.S = kc();
  p.aa = lc();
  var pd = function (a) {
    this.a = a
  };
  u(pd, dc);
  ec(pd);
  var qd = function (a, b) {
    this.d = a;
    this.c = new Yb(a, b);
    this.a = Xb
  }, rd = function (a) {
      this.a = a;
      this.e = document.getElementById("rg");
      this.c = [];
      a = document.getElementById("isr_spnm");
      this.s = !! a;
      this.F = a ? a.innerHTML : "";
      this.n = 0
    };
  u(rd, dc);
  ec(rd);
  p = rd.prototype;
  p.initialize = function (a) {
    this.k = a
  };
  p.ca = function () {
    return this.c.length
  };
  p.da = function (a) {
    return (a = this.c[a]) ? a.g : null
  };
  p.T = function () {
    for (var a = this.a.getChunkSizeArray(), b = 0, c = this.e.childNodes, d = 0, e; e = c[d]; d++)
      if (hasClass(e, "rg_di")) uc(this.a, e), e.hasAttribute("data-ci") && (a.push(b), b = 0), b++;
    0 < b && (a.push(b), jd(this.a))
  };
  p.W = function (a, b, c) {
    for (var d = [], e = [], f = this.e.childNodes, g = 0, h; h = f[g]; g++) {
      if (hasClass(h, "rg_di")) d.push(h);
    }
    if (c)
      for (c = c.childNodes, g = 0; f = c[g]; g++) d.push(f);
    (0 < d.length || 0 < e.length) && sd(this, a, b, e, d)
  };
  p.S = function (a, b, c) {
    var d = [],
      e = null;
    if (this.h && this.h.length)
      for (var f = document.createDocumentFragment(), g = 0; g < this.h.length; g++) {
        var h = this.h[g],
          e = h.nextSibling;
        f.appendChild(h);
        d.push(h)
      }
    if (c)
      for (c = c.childNodes, g = 0; h = c[g]; g++) d.push(h);
    sd(this, a, b, [], d);
    f && this.e.insertBefore(f, e)
  };
  p.aa = function () {
    this.c = [];
    this.h = [];
    this.n = 0
  };
  var sd = function (a, b, c, d, e) {
    for (var f, g, h, k = null, l = null, n = 0; n < d.length; n++) {
      for (var r = d[n], v = r.childNodes, m = 0, q = Number.MAX_VALUE, w = [], F = 0, aa; aa = v[F]; F++)
        for (F = 0; F < w.length; F++) w[F].width = q;
      var vc = new ud(r, w, m, q);
      w[0].ea ? l = vc : k = vc
    }
    h = [k, l];
    for (var zd = a.a, Bb = [], Ua = 0; Ua < e.length; Ua++) {
      var Ad =
        Bb,
        Bd = Ua,
        wc = zd,
        Va = e[Ua],
        Wa = undefined,
        Cb = undefined;
        for (var Cd = Va.getElementsByTagName("div"), xc = 0, Ea = undefined; Ea = Cd[xc]; xc++)
          if ("rg_meta" == Ea.className) {
            Wa = parseJSON(Ea.innerText || Ea.textContent || Ea.innerHTML);
            break
          } if (!Wa) throw Error("No metadata for image.");
      Ad[Bd] = new rb(Va, Wa, Cb)
    }
    if (c.a) {
      4 * a.k > c.a && (a.k = Math.floor(c.a / 4), a.a.h = a.k);
      for (var Xa = new qd(a.k, !a.a.areAllResultsLoaded()), N = h, Db = c.a, N = N || [], la = [0, 0], Eb = [], G = 0; G < N.length; G++) {
        var ca = N[G];
        if (ca) {
          la[G] = ca.a;
          for (var O = 0; O < ca.a; O++) Eb[O] = (Eb[O] || 0) + ca.width + Xa.a
        }
      }
      var ma = Xa.c,
        Ya = Bb,
        yc = Number.MAX_VALUE,
        zc = Eb || [],
        Ya = Ya.slice(0),
        Ac = ma.d,
        na = [],
        da = [];
      for (f = 0; 4 > f; f++) {
        for (var I = ma, Bc = Ya, Dd = Db, Za = yc, Fb = Ac, Cc = na, Ed = zc, Gb = 0, W = [], Hb = [], Ib = 0, Dc = Cc.length || Za / Fb, P = 0; P < Dc; P++) {
          for (var Jb = Ed[P] || 0, $a = Cc[P] || Fb, ea = Dd - Jb, Fd = Math.floor(ea / (I.a + I.c)), Fa = 0, Kb = 0, Lb = 0, Ga = 0, Mb = 0; Gb < Bc.length && Ga < Fd;) {
            var fa = Bc[Gb],
              Gd = Q(aspectRatio(fa), $a, I.c, fa.width, 2),
              Nb = Fa + Gd + I.a,
              Hd = Q(va(fa), $a, I.c, fa.width, 2),
              Kb = Kb + (Hd + I.a);
            if (Nb > ea && Nb - ea > ea - Fa)
              if (Lb >= ea) break;
              else if (Kb > ea) break;
            Ga++;
            var Fa = Nb,
              Id = Q(wa(fa), $a, I.c, fa.width, 2),
              Lb = Lb + (Id + I.a),
              Mb = Mb + aspectRatio(fa);
            Gb++;
            if (Fa > ea) break
          }
          if (0 == Ga && !Jb) break;
          W[P] = {
            count: Ga,
            width: Fa + Jb,
            height: $a,
            G: undefined
          };
          var Ec = 1 / Math.sqrt((Mb + 0.1) / (Ga + 0.1));
          Hb.push(Ec);
          Ib += Ec
        }
        var ab = Hb.length;
        ab < Dc && (Za = ab * (Fb + I.a));
        for (var Jd = Za - I.a * ab, Ob = 0, P = 0; P < ab; P++) {
          var Fc = Math.round(Jd * (Hb[P] / Ib));
          W[P].G = Fc;
          Ob += Fc + I.a
        }
        0 < W.length && (W[W.length -
          1].G += Za - Ob);
        da = W;
        da.length != na.length && (na.length = da.length, yc = na.length * (Ac + ma.a));
        for (var Gc = false, oa = 0; oa < da.length; oa++) na[oa] != da[oa].G && (na[oa] = da[oa].G, Gc = true);
        if (!Gc) break
      }
      for (var Hc = Ya, Ic = da, Ha = 0, X = [], pa = [], Jc = [], bb = 0; bb < Ic.length; bb++) {
        var H = Ic[bb];
        if (!H.count) break;
        var Kd = Hc.slice(Ha, Ha + H.count),
          Ld = Db - H.width,
          Kc = Ha + H.count == Hc.length && Ld > H.width / H.count;
        if (Kc && ma.e) break;
        for (var Lc = xa(Kd, Db, H.width, H.height, ma.a, ma.c, 2, zc[bb], Kc), Pb = 0; Pb < Lc.length; Pb++) Jc.push({
          width: Lc[Pb],
          height: H.height
        });
        Ha += H.count;
        X.push(H.count);
        pa.push(H.height)
      }
      for (var Qb = [], Mc = false, G = 0; G < N.length; G++)
        if (ca = N[G]) {
          for (var ga = 0, O = 0; O < ca.a; O++) pa[O] ? ga += pa[O] : (ga += Xa.d, Mc = true, la[O]--);
          ga += Xa.a * (ca.a - 1);
          Qb[G] = ga
        }
      for (var images = [], Md = 0, R = 0; R < X.length; R++) {
        var Ia = X[R];
        0 < la[0] && (Ia++, la[0]--, 0 == R && (Ia++, images.push({
          I: true,
          width: N[0].width,
          height: Qb[0]
        })), images.push({
          padding: true,
          width: N[0].width,
          height: pa[R]
        }));
        for (G = 0; G < X[R]; G++) images.push(Jc[Md++]);
        0 < la[1] && (Ia++, la[1]--, 0 == R && (Ia++, images.push({
          I: true,
          width: N[1].width,
          height: Qb[1]
        })), images.push({
          padding: true,
          width: N[1].width,
          height: pa[R]
        }));
        X[R] = Ia
      }
      g = Mc;
      a.a.H = g;
      var cb = 0,
        J = 0;
      a.c.length || a.c.push({
        g: [],
        o: 0
      });
      for (var z = a.c[a.c.length - 1], Nc = 1 == a.c.length ? c.d : c.c, Ja = 0; Ja < X.length; Ja++) {
        if (0 != z.o && 32 > Nc - z.o) {
          a.n += z.o;
          z = {
            g: [],
            o: 0
          };
          a.c.push(z);
          var Nc = c.c,
            Y = document.createElement("div");
          Y.className = "rgsh";
          a.s ? Y.innerHTML = a.F.replace(/\%1\$d/, String(a.c.length)) : Y.style.display = "none";
          Y.setAttribute("id", "page" + a.c.length);
          Y.setAttribute("data-pg", a.c.length);
          Y.setAttribute("data-offset", c.e + a.n + z.o);
          Y.setAttribute("data-fri", a.a.getResults().length);
          e[J].parentNode.insertBefore(Y, e[J]);
          a.s && (z.o += 32);
          3 != b && 2 == a.c.length && ld(a.c[0].g.length)
        }
        z.o += pa[Ja];
        z.o += Xb;
        for (qa = 0; qa < X[Ja]; qa++) {
          image = images[cb];

          var ra = Bb[J];
          var A = ra,
            B = image.width,
            K = image.height,
            eb = A.a,
            Rd = eb.getElementsByTagName("img")[0],
            Yc = K,
            Zc = K,
            x = A.width,
            D = A.height;
          if (A.width > B || A.height > K) {
            var $c = B / K,
              fb = Math.min(wa(A), Math.max($c, va(A)));
            if (aspectRatio(A) > fb) var ad = Math.min(A.height, B / fb),
            x = ad * aspectRatio(A), D = ad;
            else var bd = Math.min(A.width, fb > $c ? B : K * fb),
            x = bd, D = bd / aspectRatio(A)
          }
          if (0 < mb && !A.c) {
            var gb = mb + 1,
              Tb = B / x,
              sa = K / D;
            if (1 < Tb && Tb <= gb) {
              var hb = Tb;
              sa > hb && sa <= gb && (hb = sa);
              x *= hb;
              D *= hb
            } else if (1 <
              sa && sa <= gb) {
              var Ub = x * sa;
              if (Ub > B || Ub * gb < B) D = K, x = Ub
            }
          }
          var x = Math.round(x),
            D = Math.round(D),
            cd = 0,
            dd = 0,
            ed = 0,
            Vb = 0,
            fd = 0,
            gd = 0;
          if (x > B) var Sd = x - B,
          Vb = -1 * ub(x - B), fd = -Sd - Vb;
          else x < B && (cd = (B - x) / 2); if (D > K) gd = -1 * tb(D - K);
          else if (D < K) var Yc = Zc = D,
          hd = K - D, dd = Math.floor(hd / 2), ed = Math.ceil(hd / 2);
          Z(eb, {
            width: B + "px",
            height: Yc + "px",
            "padding-top": dd + "px",
            "padding-bottom": ed + "px"
          });
          Z(Rd, {
            width: x + "px",
            height: D + "px",
            "margin-left": Vb + "px",
            "margin-right": fd + "px",
            "margin-top": gd + "px"
          });
          var Td = eb.getElementsByTagName("a")[0],
            Ud =
              Math.min(x, B),
            id = qb(eb, B, x, cd);
          Z(Td, {
            width: Ud + "px",
            height: Zc + "px",
            left: id.P,
            right: id.r
          });
          z.g.push(ra.a);
          a.a.getResults().push(ra.a);

          ra.a.style.display = "inline-block";
          J++;

          cb++
        }
      }
      a.h = [];
      for (var ib = J; ib < e.length; ib++) e[ib].style.display = "none", a.h.push(e[ib]);
      a.a.areAllResultsLoaded() && (1 == a.c.length && 3 != b) && ld(a.c[0].g.length)
    }
  }, td = function (a, b) {
      this.d = a;
      this.width = b.bw;
      this.a = b.rs || 2;
      this.ea = !! b.fl;
      this.c = new wb(a)
    }, ud = function (a, b, c, d) {
      this.d = a;
      this.c = b;
      this.a = c;
      this.width = d
    };
  var vd = new s;
  vd.layoutResults();
  var wd = ["google", "isr", "layout"],
    $ = this;
  for (var yd; wd.length && (yd = wd.shift());) wd.length || undefined === vd ? $ = $[yd] ? $[yd] : $[yd] = {} : $[yd] = vd;
})();
