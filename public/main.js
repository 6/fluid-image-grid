var _ = _ || {};
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
        var caa = function (a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function () {
                return a.apply(b, arguments)
            }
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
        _.cb = function (a, b, c) {
            (0, _.za)(a, b, c)
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
        _.gb = function (a, b) {
            return 0 == a.lastIndexOf(b, 0)
        };
        _.ib = function (a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        };
        _.jb = function (a, b) {
            for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
            return d + c.join("%s")
        };
        _.kb = function (a) {
            return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
        };
        _.lb = function (a) {
            return /^[\s\xa0]*$/.test(a)
        };
        _.ob = function (a) {
            return (0, _.lb)(null == a ? "" : String(a))
        };
        _.pb = function (a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        };
        _.qb = function (a, b) {
            if (b) return a.replace(rb, "&amp;").replace(sb, "&lt;").replace(tb, "&gt;").replace(ub, "&quot;");
            if (!daa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(rb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(sb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(tb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ub, "&quot;"));
            return a
        };
        _.vb = function (a) {
            return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        };
        _.wb = function (a, b) {
            return Array(b + 1).join(a)
        };
        _.xb = function (a) {
            var b = Number(a);
            return 0 == b && (0, _.lb)(a) ? window.NaN : b
        };
        _.yb = function (a) {
            return String(a).replace(/\-([a-z])/g, function (a, c) {
                return c.toUpperCase()
            })
        };
        var zb = function (a) {
            return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
        };
        var eaa = function (a, b) {
            var c = (0, _.Ra)(b) ? (0, _.vb)(b) : "\\s",
                c = c ? "|[" + c + "]+" : "";
            return a.replace(RegExp("(^" + c + ")([a-z])", "g"), function (a, b, c) {
                return b + c.toUpperCase()
            })
        };
        _.Cb = function (a, b, c) {
            for (var d = (0, _.Ra)(a) ? a.split("") : a, e = a.length - 1; 0 <= e; --e) e in d && b.call(c, d[e], e, a)
        };
        _.Db = function (a, b, c) {
            b = (0, _.Eb)(a, b, c);
            return 0 > b ? null : (0, _.Ra)(a) ? a.charAt(b) : a[b]
        };
        _.Eb = function (a, b, c) {
            for (var d = a.length, e = (0, _.Ra)(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return f;
            return -1
        };
        _.Fb = function (a, b) {
            return 0 <= (0, _.Gb)(a, b)
        };
        _.Hb = function (a, b) {
            (0, _.Fb)(a, b) || a.push(b)
        };
        _.Ib = function (a, b) {
            var c = (0, _.Gb)(a, b),
                d;
            (d = 0 <= c) && (0, _.Jb)(a, c);
            return d
        };
        _.Jb = function (a, b) {
            return 1 == Kb.splice.call(a, b, 1).length
        };
        _.Lb = function (a) {
            return Kb.concat.apply(Kb, arguments)
        };
        _.Mb = function (a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        };
        _.Nb = function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c],
                    e;
                if ((0, _.Oa)(d) || (e = (0, _.Qa)(d)) && Object.prototype.hasOwnProperty.call(d, "callee")) a.push.apply(a, d);
                else if (e)
                    for (var f = a.length, g = d.length, h = 0; h < g; h++) a[f + h] = d[h];
                else a.push(d)
            }
        };
        _.Ob = function (a, b, c, d) {
            return Kb.splice.apply(a, (0, _.Pb)(arguments, 1))
        };
        _.Pb = function (a, b, c) {
            return 2 >= arguments.length ? Kb.slice.call(a, b) : Kb.slice.call(a, b, c)
        };
        _.Sb = function (a, b) {
            for (var c = b || a, d = {}, e = 0, f = 0; f < a.length;) {
                var g = a[f++],
                    h = (0, _.Wa)(g) ? "o" + (0, _.Xa)(g) : (typeof g).charAt(0) + g;
                Object.prototype.hasOwnProperty.call(d, h) || (d[h] = !0, c[e++] = g)
            }
            c.length = e
        };
        _.Tb = function (a, b) {
            Kb.sort.call(a, b || _.Ub)
        };
        _.Ub = function (a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        };
        _.Vb = function () {};
        var Wb = function (a) {
            if (a instanceof _.Vb) return a;
            if ("function" == typeof a.nx) return a.nx(!1);
            if ((0, _.Qa)(a)) {
                var b = 0,
                    c = new _.Vb;
                c.next = function () {
                    for (;;) {
                        if (b >= a.length) throw Xb;
                        if (b in a) return a[b++];
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        };
        var Yb = function (a, b, c) {
            if ((0, _.Qa)(a)) try {
                (0, _.Zb)(a, b, c)
            } catch (d) {
                if (d !== Xb) throw d;
            } else {
                a = Wb(a);
                try {
                    for (;;) b.call(c, a.next(), void 0, a)
                } catch (e) {
                    if (e !== Xb) throw e;
                }
            }
        };
        var faa = function (a) {
            if ((0, _.Qa)(a)) return (0, _.Mb)(a);
            a = Wb(a);
            var b = [];
            Yb(a, function (a) {
                b.push(a)
            });
            return b
        };
        _.$b = function (a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        };
        _.ac = function (a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        };
        _.bc = function (a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        };
        _.dc = function (a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        };
        _.fc = function (a) {
            for (var b in a) return !1;
            return !0
        };
        _.hc = function (a, b) {
            var c;
            (c = b in a) && delete a[b];
            return c
        };
        _.ic = function (a, b, c) {
            return b in a ? a[b] : c
        };
        _.jc = function (a) {
            var b = {}, c;
            for (c in a) b[c] = a[c];
            return b
        };
        _.kc = function (a) {
            var b = {}, c;
            for (c in a) b[a[c]] = c;
            return b
        };
        _.lc = function (a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < mc.length; f++) c = mc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
        _.nc = function (a) {
            var b = arguments.length;
            if (1 == b && (0, _.Oa)(arguments[0])) return _.nc.apply(null, arguments[0]);
            for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
            return c
        };
        _.oc = function (a, b) {
            this.Qc = {};
            this.A = [];
            var c = arguments.length;
            if (1 < c) {
                if (c % 2) throw Error("Uneven number of arguments");
                for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
            } else if (a) {
                a instanceof _.oc ? (c = a.vw(), d = a.ot()) : (c = (0, _.dc)(a), d = (0, _.bc)(a));
                for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
            }
        };
        var gaa = function (a, b) {
            return a === b
        };
        var pc = function (a) {
            if (a.Yh != a.A.length) {
                for (var b = 0, c = 0; b < a.A.length;) {
                    var d = a.A[b];
                    (0, _.qc)(a.Qc, d) && (a.A[c++] = d);
                    b++
                }
                a.A.length = c
            }
            if (a.Yh != a.A.length) {
                for (var e = {}, c = b = 0; b < a.A.length;) d = a.A[b], (0, _.qc)(e, d) || (a.A[c++] = d, e[d] = 1), b++;
                a.A.length = c
            }
        };
        _.qc = function (a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        };
        var rc = function (a) {
            for (var b in _.sc) _.sc[b] = !1;
            for (var c in _.tc) _.tc[c] = !1;
            b = c = null;
            if (window.opera) {
                _.sc.opera = !0;
                _.tc.opera = !0;
                var d = window.opera.version;
                d ? _.uc = _.vc = (0, _.Va)(d) ? d() : d : c = b = /Opera[\/\s](\S+)/
            } else 0 <= a.indexOf("MSIE") ? (_.sc.Hc = !0, _.tc.Hc = !0, c = b = /MSIE\s+([^\);]+)(\)|;)/) : 0 <= a.indexOf("WebKit") ? (_.sc.Yr = !0, c = /Version\/(\S+)/, 0 <= a.indexOf("Silk-Accelerated") ? (_.tc.Fq = !0, _.tc.bF = !0, b = c) : 0 <= a.indexOf("Android") && 0 > a.indexOf("Mobile") ? (_.tc.Fq = !0, 0 <= a.indexOf("Chrome") && (_.tc.WJ = !0),
                b = c) : 0 <= a.indexOf("Android") && 0 <= a.indexOf("Mobile") ? (_.tc.Eq = !0, 0 <= a.indexOf("Chrome") && (_.tc.gB = !0), b = c) : 0 <= a.indexOf("Chrome") ? (_.tc.kw = !0, b = /Chrome\/(\S+)/) : 0 <= a.indexOf("Safari") && (_.tc.Fz = !0, b = c), 0 <= a.indexOf("iPad") ? (_.tc.Oq = !0, _.tc.Fz || (_.tc.Fz = !0, b = c)) : 0 <= a.indexOf("iPhone") && (_.tc.xt = !0, _.tc.Fz || (_.tc.Fz = !0, b = c)), c = /WebKit\/(\S+)/) : 0 <= a.indexOf("Gecko") && (_.sc.vx = !0, 0 <= a.indexOf("Firefox") && (_.tc.qw = !0, b = /Firefox\/(\S+)/), c = /rv\:([^\);]+)(\)|;)/);
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
        _.wc = function (a, b) {
            for (var c = 0, d = a.replace(/^\s+|\s+$/g, "").split("."), e = b.replace(/^\s+|\s+$/g, "").split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
                var h = d[g] || "",
                    k = e[g] || "",
                    l = RegExp("(\\d*)(\\D*)", "g"),
                    n = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var p = l.exec(h) || ["", "", ""],
                        m = n.exec(k) || ["", "", ""];
                    if (0 == p[0].length && 0 == m[0].length) break;
                    c = ((0 == p[1].length ? 0 : (0, window.parseInt)(p[1], 10)) < (0 == m[1].length ? 0 : (0, window.parseInt)(m[1], 10)) ? -1 : (0 == p[1].length ? 0 : (0, window.parseInt)(p[1], 10)) > (0 == m[1].length ?
                        0 : (0, window.parseInt)(m[1], 10)) ? 1 : 0) || ((0 == p[2].length) < (0 == m[2].length) ? -1 : (0 == p[2].length) > (0 == m[2].length) ? 1 : 0) || (p[2] < m[2] ? -1 : p[2] > m[2] ? 1 : 0)
                } while (0 == c)
            }
            return c
        };
        _.xc = function (a) {
            return 0 <= (0, _.wc)(_.vc, a)
        };
        _.yc = function (a) {
            return 0 <= (0, _.wc)(_.uc, a)
        };
        _.zc = function (a) {
            var b = 0 == a || 2 == a;
            a = 0 == a || 1 == a ? "Height" : "Width";
            if (_.sc.Yr && (_.tc.Fq || _.tc.Eq || _.tc.bF)) {
                if (_.tc.bF) {
                    var b = window.outerWidth,
                        c = window.screen.width,
                        d = window.screen.height,
                        e = window.devicePixelRatio;
                    0 < e && e < Number.MAX_VALUE || (e = 1);
                    null == Ac && (Ac = new _.oc, Ac.set(600, 1024), Ac.set(1024, 600), Ac.set(800, 1200), Ac.set(1200, 800));
                    for (var f = 0, g = Ac.vw(), h = 0; h < g.length; ++h) {
                        var k = (0, window.parseInt)(g[h], 10);
                        if (b >= k - 5 && b <= k + 5) {
                            f = "Width" == a ? k : (0, window.parseInt)(Ac.get(k), 10);
                            break
                        }
                    }
                    0 == f && (f = "Width" ==
                        a ? c : d);
                    return f / e
                }
                if ("Width" == a) return window.document.documentElement.offsetWidth;
                a = window.screen.height / window.screen.width;
                0 < a && a < Number.MAX_VALUE || (a = 1);
                b = window.outerHeight / window.outerWidth;
                if (1 < b && 1 > a || 1 > b && 1 < a) a = 1 / a;
                return Math.round(window.document.documentElement.offsetWidth * a)
            }
            if (b) {
                if (window["inner" + a]) return window["inner" + a];
                if (window.document.documentElement && window.document.documentElement["offset" + a]) return window.document.documentElement["offset" + a]
            } else return ("CSS1Compat" == window.document.compatMode ?
                window.document.documentElement : window.document.body)["client" + a];
            return 0
        };
        var Bc = function () {
            return _.Ca.navigator ? _.Ca.navigator.userAgent : null
        };
        var Cc = function () {
            return _.Ca.navigator
        };
        var Dc = function () {
            var a = _.Ca.document;
            return a ? a.documentMode : void 0
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
        _.Ic = function (a) {
            return _.Jc && haa >= a
        };
        _.Kc = function (a) {
            a = a.className;
            return (0, _.Ra)(a) && a.match(/\S+/g) || []
        };
        _.Lc = function (a, b) {
            var c = (0, _.Kc)(a),
                d = (0, _.Pb)(arguments, 1),
                e = c.length + d.length;
            (0, _.Mc)(c, d);
            d = c.join(" ");
            a.className = d;
            return c.length == e
        };
        _.Nc = function (a, b) {
            var c = (0, _.Kc)(a),
                d = (0, _.Pb)(arguments, 1),
                e = (0, _.Oc)(c, d),
                f = e.join(" ");
            a.className = f;
            return e.length == c.length - d.length
        };
        _.Mc = function (a, b) {
            for (var c = 0; c < b.length; c++)(0, _.Fb)(a, b[c]) || a.push(b[c])
        };
        _.Oc = function (a, b) {
            return (0, _.Pc)(a, function (a) {
                return !(0, _.Fb)(b, a)
            })
        };
        _.Qc = function (a, b, c) {
            return Math.min(Math.max(a, b), c)
        };
        _.Rc = function (a, b) {
            this.x = (0, _.Ma)(a) ? a : 0;
            this.y = (0, _.Ma)(b) ? b : 0
        };
        _.Sc = function (a, b) {
            this.width = a;
            this.height = b
        };
        _.Tc = function (a, b) {
            return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
        };
        _.Uc = function (a) {
            return a ? new _.Vc((0, _.Wc)(a)) : Xc || (Xc = new _.Vc)
        };
        _.v = function (a) {
            return (0, _.Ra)(a) ? window.document.getElementById(a) : a
        };
        _.Yc = function (a, b, c) {
            return (0, _.Zc)(window.document, a, b, c)
        };
        _.$c = function (a, b) {
            var c = b || window.document;
            return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : (0, _.Zc)(window.document, "*", a, b)
        };
        _.ad = function (a, b) {
            var c = b || window.document,
                d = null;
            return (d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : (0, _.$c)(a, b)[0]) || null
        };
        _.Zc = function (a, b, c, d) {
            a = d || a;
            b = b && "*" != b ? b.toUpperCase() : "";
            if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
            if (c && a.getElementsByClassName) {
                a = a.getElementsByClassName(c);
                if (b) {
                    d = {};
                    for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                    d.length = e;
                    return d
                }
                return a
            }
            a = a.getElementsByTagName(b || "*");
            if (c) {
                d = {};
                for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && (0, _.Fb)(b.split(/\s+/), c) && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        };
        _.bd = function (a, b) {
            (0, _.$b)(b, function (b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in cd ? a.setAttribute(cd[d], b) : (0, _.gb)(d, "aria-") || (0, _.gb)(d, "data-") ? a.setAttribute(d, b) : a[d] = b
            })
        };
        _.dd = function (a) {
            return ed(a || window)
        };
        var ed = function (a) {
            a = a.document;
            a = fd(a) ? a.documentElement : a.body;
            return new _.Sc(a.clientWidth, a.clientHeight)
        };
        _.gd = function (a) {
            var b = a.document,
                c = 0;
            if (b) {
                a = ed(a).height;
                var c = b.body,
                    d = b.documentElement;
                if (fd(b) && d.scrollHeight) c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
                else {
                    var b = d.scrollHeight,
                        e = d.offsetHeight;
                    d.clientHeight != e && (b = c.scrollHeight, e = c.offsetHeight);
                    c = b > a ? b > e ? b : e : b < e ? b : e
                }
            }
            return c
        };
        _.hd = function (a) {
            var b = (0, _.id)(a);
            a = a.parentWindow || a.defaultView;
            return _.Jc && (0, _.Ec)("10") && a.pageYOffset != b.scrollTop ? new _.Rc(b.scrollLeft, b.scrollTop) : new _.Rc(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        };
        _.id = function (a) {
            return !_.jd && fd(a) ? a.documentElement : a.body
        };
        _.kd = function (a) {
            return a ? a.parentWindow || a.defaultView : window
        };
        _.ld = function (a, b, c) {
            return md(window.document, arguments)
        };
        var md = function (a, b) {
            var c = b[0],
                d = b[1];
            if (!iaa && d && (d.name || d.type)) {
                c = ["<", c];
                d.name && c.push(' name="', (0, _.qb)(d.name), '"');
                if (d.type) {
                    c.push(' type="', (0, _.qb)(d.type), '"');
                    var e = {};
                    (0, _.lc)(e, d);
                    delete e.type;
                    d = e
                }
                c.push(">");
                c = c.join("")
            }
            c = a.createElement(c);
            d && ((0, _.Ra)(d) ? c.className = d : (0, _.Oa)(d) ? _.Lc.apply(null, [c].concat(d)) : (0, _.bd)(c, d));
            2 < b.length && nd(a, c, b, 2);
            return c
        };
        var nd = function (a, b, c, d) {
            function e(c) {
                c && b.appendChild((0, _.Ra)(c) ? a.createTextNode(c) : c)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                !(0, _.Qa)(f) || (0, _.Wa)(f) && 0 < f.nodeType ? e(f) : (0, _.Zb)(jaa(f) ? (0, _.Mb)(f) : f, e)
            }
        };
        _.od = function (a) {
            return window.document.createElement(a)
        };
        _.pd = function (a) {
            return window.document.createTextNode(String(a))
        };
        _.qd = function (a, b, c, d) {
            for (var e = ["<tr>"], f = 0; f < c; f++) e.push(d ? "<td>&nbsp;</td>" : "<td></td>");
            e.push("</tr>");
            e = e.join("");
            c = ["<table>"];
            for (f = 0; f < b; f++) c.push(e);
            c.push("</table>");
            a = a.createElement("DIV");
            a.innerHTML = c.join("");
            return a.removeChild(a.firstChild)
        };
        _.rd = function (a, b) {
            var c = a.createElement("div");
            _.Jc ? (c.innerHTML = "<br>" + b, c.removeChild(c.firstChild)) : c.innerHTML = b;
            if (1 == c.childNodes.length) return c.removeChild(c.firstChild);
            for (var d = a.createDocumentFragment(); c.firstChild;) d.appendChild(c.firstChild);
            return d
        };
        var fd = function (a) {
            return "CSS1Compat" == a.compatMode
        };
        _.sd = function (a, b) {
            a.appendChild(b)
        };
        _.td = function (a, b) {
            nd((0, _.Wc)(a), a, arguments, 1)
        };
        _.ud = function (a) {
            for (var b; b = a.firstChild;) a.removeChild(b)
        };
        _.vd = function (a, b) {
            b.parentNode && b.parentNode.insertBefore(a, b)
        };
        _.wd = function (a, b) {
            b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
        };
        _.xd = function (a, b, c) {
            a.insertBefore(b, a.childNodes[c] || null)
        };
        _.yd = function (a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        };
        _.zd = function (a, b) {
            var c = b.parentNode;
            c && c.replaceChild(a, b)
        };
        _.Ad = function (a) {
            return kaa && void 0 != a.children ? a.children : (0, _.Pc)(a.childNodes, function (a) {
                return 1 == a.nodeType
            })
        };
        _.Bd = function (a) {
            return void 0 != a.firstElementChild ? a.firstElementChild : (0, _.Cd)(a.firstChild, !0)
        };
        _.Dd = function (a) {
            return void 0 != a.nextElementSibling ? a.nextElementSibling : (0, _.Cd)(a.nextSibling, !0)
        };
        _.Ed = function (a) {
            return void 0 != a.previousElementSibling ? a.previousElementSibling : (0, _.Cd)(a.previousSibling, !1)
        };
        _.Cd = function (a, b) {
            for (; a && 1 != a.nodeType;) a = b ? a.nextSibling : a.previousSibling;
            return a
        };
        _.Fd = function (a) {
            return (0, _.Wa)(a) && 1 == a.nodeType
        };
        _.Gd = function (a) {
            if (laa && !(_.Jc && (0, _.Ec)("9") && !(0, _.Ec)("10") && _.Ca.SVGElement && a instanceof _.Ca.SVGElement)) return a.parentElement;
            a = a.parentNode;
            return (0, _.Fd)(a) ? a : null
        };
        _.Hd = function (a, b) {
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        };
        _.Wc = function (a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        };
        _.Id = function (a, b) {
            if ("textContent" in a) a.textContent = b;
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                a.firstChild.data = b
            } else(0, _.ud)(a), a.appendChild((0, _.Wc)(a).createTextNode(String(b)))
        };
        _.Jd = function (a, b, c, d) {
            if (null != a)
                for (a = a.firstChild; a;) {
                    if (b(a) && (c.push(a), d) || (0, _.Jd)(a, b, c, d)) return !0;
                    a = a.nextSibling
                }
            return !1
        };
        _.Kd = function (a) {
            if (Ld && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
            else {
                var b = [];
                (0, _.Md)(a, b, !0);
                a = b.join("")
            }
            a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
            a = a.replace(/\u200B/g, "");
            Ld || (a = a.replace(/ +/g, " "));
            " " != a && (a = a.replace(/^\s*/, ""));
            return a
        };
        _.Md = function (a, b, c) {
            if (!(a.nodeName in maa))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in Nd) b.push(Nd[a.nodeName]);
            else
                for (a = a.firstChild; a;)(0, _.Md)(a, b, c), a = a.nextSibling
        };
        var jaa = function (a) {
            if (a && "number" == typeof a.length) {
                if ((0, _.Wa)(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if ((0, _.Va)(a)) return "function" == typeof a.item
            }
            return !1
        };
        _.Od = function (a, b, c) {
            if (!b && !c) return null;
            var d = b ? b.toUpperCase() : null;
            return (0, _.Pd)(a, function (a) {
                return (!d || a.nodeName == d) && (!c || (0, _.Fb)((0, _.Kc)(a), c))
            }, !0)
        };
        _.Qd = function (a, b) {
            return (0, _.Od)(a, null, b)
        };
        _.Pd = function (a, b, c, d) {
            c || (a = a.parentNode);
            c = null == d;
            for (var e = 0; a && (c || e <= d);) {
                if (b(a)) return a;
                a = a.parentNode;
                e++
            }
            return null
        };
        _.Rd = function (a) {
            try {
                return a && a.activeElement
            } catch (b) {}
            return null
        };
        _.Vc = function (a) {
            this.A = a || _.Ca.document || window.document
        };
        _.Sd = function (a, b) {
            return a.A.createTextNode(String(b))
        };
        _.Td = function (a) {
            return fd(a.A)
        };
        _.Ud = function (a) {
            return (0, _.hd)(a.A)
        };
        _.Vd = function () {
            return _.jd ? "Webkit" : _.Wd ? "Moz" : _.Jc ? "ms" : _.Xd ? "O" : null
        };
        _.Yd = function () {
            return _.jd ? "-webkit" : _.Wd ? "-moz" : _.Jc ? "-ms" : _.Xd ? "-o" : null
        };
        _.Zd = function (a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d
        };
        _.$d = function (a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        };
        var naa = function (a, b) {
            var c = b.x < a.left ? a.left - b.x : Math.max(b.x - (a.left + a.width), 0),
                d = b.y < a.top ? a.top - b.y : Math.max(b.y - (a.top + a.height), 0);
            return c * c + d * d
        };
        _.ae = function (a, b, c) {
            (0, _.Ra)(b) ? be(a, c, b) : (0, _.$b)(b, (0, _.ab)(be, a))
        };
        var be = function (a, b, c) {
            (c = ce(a, c)) && (a.style[c] = b)
        };
        var ce = function (a, b) {
            var c = (0, _.yb)(b);
            if (void 0 === a.style[c]) {
                var d = (0, _.Vd)() + eaa(b);
                if (void 0 !== a.style[d]) return d
            }
            return c
        };
        _.de = function (a, b) {
            var c = a.style[(0, _.yb)(b)];
            return "undefined" !== typeof c ? c : a.style[ce(a, b)] || ""
        };
        _.ee = function (a, b) {
            var c = (0, _.Wc)(a);
            return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
        };
        _.fe = function (a, b) {
            return (0, _.ee)(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        };
        _.ge = function (a) {
            return (0, _.fe)(a, "position")
        };
        _.he = function (a, b, c) {
            var d, e = _.Wd && (_.ie || ke) && (0, _.Ec)("1.9");
            b instanceof _.Rc ? (d = b.x, b = b.y) : (d = b, b = c);
            a.style.left = le(d, e);
            a.style.top = le(b, e)
        };
        _.me = function (a) {
            return new _.Rc(a.offsetLeft, a.offsetTop)
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
        _.pe = function (a) {
            if (_.Jc && !(0, _.Ic)(8)) return a.offsetParent;
            var b = (0, _.Wc)(a),
                c = (0, _.fe)(a, "position"),
                d = "fixed" == c || "absolute" == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (c = (0, _.fe)(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
            return null
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
        _.te = function (a) {
            var b;
            if (a.getBoundingClientRect) b = oe(a), b = new _.Rc(b.left, b.top);
            else {
                b = (0, _.Ud)((0, _.Uc)(a));
                var c = (0, _.qe)(a);
                b = new _.Rc(c.x - b.x, c.y - b.y)
            }
            _.Wd && !(0, _.Ec)(12) ? (a = (0, _.ue)(a), a = new _.Rc(b.x + a.x, b.y + a.y)) : a = b;
            return a
        };
        _.ve = function (a) {
            if (1 == a.nodeType) return (0, _.te)(a);
            var b = (0, _.Va)(a.mW),
                c = a;
            a.targetTouches ? c = a.targetTouches[0] : b && a.tl.targetTouches && (c = a.tl.targetTouches[0]);
            return new _.Rc(c.clientX, c.clientY)
        };
        _.we = function (a, b, c) {
            if (b instanceof _.Sc) c = b.height, b = b.width;
            else if (void 0 == c) throw Error("missing height argument");
            (0, _.xe)(a, b);
            (0, _.ye)(a, c)
        };
        var le = function (a, b) {
            "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
            return a
        };
        _.ye = function (a, b) {
            a.style.height = le(b, !0)
        };
        _.xe = function (a, b) {
            a.style.width = le(b, !0)
        };
        _.ze = function (a) {
            var b;
            var c = oaa;
            if ("none" != (0, _.fe)(a, "display")) b = c(a);
            else {
                b = a.style;
                var d = b.display,
                    e = b.visibility,
                    f = b.position;
                b.visibility = "hidden";
                b.position = "absolute";
                b.display = "inline";
                a = c(a);
                b.display = d;
                b.position = f;
                b.visibility = e;
                b = a
            }
            return b
        };
        var oaa = function (a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = _.jd && !b && !c;
            return (0, _.Ma)(b) && !d || !a.getBoundingClientRect ? new _.Sc(b, c) : (a = oe(a), new _.Sc(a.right - a.left, a.bottom - a.top))
        };
        _.Ae = function (a) {
            var b = (0, _.qe)(a);
            a = (0, _.ze)(a);
            return new _.$d(b.x, b.y, a.width, a.height)
        };
        _.Be = function (a, b) {
            var c = a.style;
            "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
        };
        _.Ce = function (a, b) {
            a.style.display = b ? "" : "none"
        };
        _.De = function (a) {
            return "none" != a.style.display
        };
        _.Ee = function (a, b) {
            var c = (0, _.Uc)(b),
                d = null;
            if (_.Jc) c = d = c.A.createStyleSheet(), _.Jc ? c.cssText = a : c.innerHTML = a;
            else {
                var e = (0, _.Zc)(c.A, "head", void 0, void 0)[0];
                e || (d = (0, _.Zc)(c.A, "body", void 0, void 0)[0], e = c.Qe("head"), d.parentNode.insertBefore(e, d));
                var f = d = c.Qe("style");
                _.Jc ? f.cssText = a : f.innerHTML = a;
                c.appendChild(e, d)
            }
            return d
        };
        _.Fe = function (a) {
            return "rtl" == (0, _.fe)(a, "direction")
        };
        _.Ge = function (a, b, c) {
            c = c ? null : a.getElementsByTagName("*");
            if (He) {
                if (b = b ? "none" : "", a.style[He] = b, c) {
                    a = 0;
                    for (var d; d = c[a]; a++) d.style[He] = b
                }
            } else if (_.Jc || _.Xd)
                if (b = b ? "on" : "", a.setAttribute("unselectable", b), c)
                    for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
        };
        _.Ie = function (a, b, c, d) {
            if (/^\d+px?$/.test(b)) return (0, window.parseInt)(b, 10);
            var e = a.style[c],
                f = a.runtimeStyle[c];
            a.runtimeStyle[c] = a.currentStyle[c];
            a.style[c] = b;
            b = a.style[d];
            a.style[c] = e;
            a.runtimeStyle[c] = f;
            return b
        };
        var Je = function (a, b) {
            var c = a.currentStyle ? a.currentStyle[b] : null;
            return c ? (0, _.Ie)(a, c, "left", "pixelLeft") : 0
        };
        _.Ke = function (a, b) {
            if (_.Jc) {
                var c = Je(a, b + "Left"),
                    d = Je(a, b + "Right"),
                    e = Je(a, b + "Top"),
                    f = Je(a, b + "Bottom");
                return new _.Zd(e, d, f, c)
            }
            c = (0, _.ee)(a, b + "Left");
            d = (0, _.ee)(a, b + "Right");
            e = (0, _.ee)(a, b + "Top");
            f = (0, _.ee)(a, b + "Bottom");
            return new _.Zd((0, window.parseFloat)(e), (0, window.parseFloat)(d), (0, window.parseFloat)(f), (0, window.parseFloat)(c))
        };
        _.Le = function (a) {
            return (0, _.Ke)(a, "margin")
        };
        _.ue = function (a) {
            var b;
            _.Jc ? b = "-ms-transform" : _.jd ? b = "-webkit-transform" : _.Xd ? b = "-o-transform" : _.Wd && (b = "-moz-transform");
            var c;
            b && (c = (0, _.fe)(a, b));
            c || (c = (0, _.fe)(a, "transform"));
            return c ? (a = c.match(paa)) ? new _.Rc((0, window.parseFloat)(a[1]), (0, window.parseFloat)(a[2])) : new _.Rc(0, 0) : new _.Rc(0, 0)
        };
        _.Me = function (a) {
            return ((0, _.v)("xjsc") || window.document.body).appendChild(a)
        };
        _.Ne = function (a, b) {
            var c = a.match(Oe),
                d = window.document.createElement(c[1]);
            c[2] && (d.className = c[2]);
            b && (d.innerHTML = b);
            return d
        };
        _.Pe = function (a, b) {
            for (var c = 1; c < arguments.length; c += 2) {
                var d = arguments[c],
                    e = arguments[c + 1],
                    f = a.style;
                f && d in f ? f[d] = e : d in a ? a[d] = e : _.sc.Hc && (f && "opacity" == d) && (a.zoom = 1, d = (f.filter || "").replace(/alpha\([^)]*\)/, ""), (0, window.isNaN)((0, window.parseFloat)(e)) || (d += "alpha(opacity=" + 100 * e + ")"), f.filter = d)
            }
            return a
        };
        _.Qe = function (a, b) {
            try {
                var c = a.getAttribute(b);
                return c ? c : ""
            } catch (d) {
                return (c = a.getAttributeNode(b)) ? c.value : ""
            }
        };
        _.Re = function (a, b) {
            var c = (0, _.se)((0, _.v)(a));
            0 <= c && (c += b || 0, window.scrollTo(0, c))
        };
        var qaa = function (a) {
            return a
        };
        _.Se = function (a) {
            return (3 - 2 * a) * a * a
        };
        _.Te = function (a, b, c) {
            for (var d = 0, e; e = b[d++];) {
                var f = "string" == typeof e[2];
                f ? (e[2] = Ue(e[2]), e[3] = Ue(e[3]), e[5] = "") : e[5] = null == e[5] ? "px" : e[5];
                e[4] = e[4] || qaa;
                e[6] = f;
                (0, _.Pe)(e[0], e[1], f ? "rgb(" + e[2].join(",") + ")" : e[2] + e[5])
            }
            var g = {
                kB: a,
                gh: c,
                SM: (0, _.Ve)(),
                Nx: b
            };
            We.push(g);
            Xe = Xe || window.setInterval(Ye, 15);
            return {
                finish: function () {
                    g.lB || (g.lB = !0, Ye())
                }
            }
        };
        var Ye = function () {
            ++raa;
            for (var a = 0, b; b = We[a++];) {
                var c = (0, _.Ve)() - b.SM;
                if (c >= b.kB || b.lB) {
                    for (var d = 0, e = void 0; e = b.Nx[d++];)(0, _.Pe)(e[0], e[1], e[6] ? "rgb(" + e[3].join(",") + ")" : e[3] + e[5]);
                    b.lB = !0;
                    b.gh && b.gh();
                    b = 0
                } else {
                    for (d = 0; e = b.Nx[d++];) {
                        var f = e[4](c / b.kB),
                            g;
                        if (e[6]) {
                            g = Ze(e[2][0], e[3][0], f, !0);
                            var h = Ze(e[2][1], e[3][1], f, !0),
                                f = Ze(e[2][2], e[3][2], f, !0);
                            g = "rgb(" + [g, h, f].join() + ")"
                        } else g = Ze(e[2], e[3], f, "px" == e[5]);
                        (0, _.Pe)(e[0], e[1], g + e[5])
                    }
                    b = 1
                }
                b || We.splice(--a, 1)
            }
            We.length || (window.clearInterval(Xe),
                Xe = 0)
        };
        var Ze = function (a, b, c, d) {
            a += (b - a) * c;
            return d ? Math.round(a) : a
        };
        var Ue = function (a) {
            a = a.match(/#(..)(..)(..)/).slice(1);
            for (var b = 0; 3 > b; ++b) a[b] = (0, window.parseInt)(a[b], 16);
            return a
        };
        _.$e = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c);
            (a == window || a == window.document || a == window.document.documentElement || a == window.document.body) && window.google.jsad && window.google.jsa && window.google.jsa.adc(b, c, !! d)
        };
        _.af = function (a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent("on" + b, c);
            (a == window || a == window.document || a == window.document.documentElement || a == window.document.body) && window.google.jsad && window.google.jsa && window.google.jsa.rdc(b, c)
        };
        var bf = function (a) {
            return "function" == typeof a.ys ? a.ys() : (0, _.Qa)(a) || (0, _.Ra)(a) ? a.length : (0, _.ac)(a)
        };
        var cf = function (a) {
            if ("function" == typeof a.ot) return a.ot();
            if ((0, _.Ra)(a)) return a.split("");
            if ((0, _.Qa)(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return (0, _.bc)(a)
        };
        var df = function (a) {
            if ("function" == typeof a.vw) return a.vw();
            if ("function" != typeof a.ot) {
                if ((0, _.Qa)(a) || (0, _.Ra)(a)) {
                    var b = [];
                    a = a.length;
                    for (var c = 0; c < a; c++) b.push(c);
                    return b
                }
                return (0, _.dc)(a)
            }
        };
        _.ef = function (a, b, c) {
            if ("function" == typeof a.forEach) a.forEach(b, c);
            else if ((0, _.Qa)(a) || (0, _.Ra)(a))(0, _.Zb)(a, b, c);
            else
                for (var d = df(a), e = cf(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
        };
        var saa = function (a, b, c) {
            if ("function" == typeof a.every) return a.every(b, c);
            if ((0, _.Qa)(a) || (0, _.Ra)(a)) return (0, _.ff)(a, b, c);
            for (var d = df(a), e = cf(a), f = e.length, g = 0; g < f; g++)
                if (!b.call(c, e[g], d && d[g], a)) return !1;
            return !0
        };
        _.gf = function (a) {
            this.Qc = new _.oc;
            if (a) {
                a = cf(a);
                for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
            }
        };
        var hf = function (a) {
            var b = typeof a;
            return "object" == b && a || "function" == b ? "o" + (0, _.Xa)(a) : b.substr(0, 1) + a
        };
        var taa = function (a, b) {
            var c = bf(b);
            if (a.ys() > c) return !1;
            !(b instanceof _.gf) && 5 < c && (b = new _.gf(b));
            return saa(a, function (a) {
                if ("function" == typeof b.contains) a = b.contains(a);
                else if ("function" == typeof b.qG) a = b.qG(a);
                else if ((0, _.Qa)(b) || (0, _.Ra)(b)) a = (0, _.Fb)(b, a);
                else n: {
                    var c = b,
                        f;
                    for (f in c)
                        if (c[f] == a) {
                            a = !0;
                            break n
                        }
                    a = !1
                }
                return a
            })
        };
        _.jf = function (a) {
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        };
        _.kf = function (a) {
            return eval("(" + a + ")")
        };
        _.lf = function (a, b) {
            return (0, _.mf)(new _.nf(b), a)
        };
        _.nf = function (a) {
            this.A = a
        };
        _.mf = function (a, b) {
            var c = [];
            of(a, b, c);
            return c.join("")
        };
        var of = function (a, b, c) {
            switch (typeof b) {
            case "string":
                pf(a, b, c);
                break;
            case "number":
                c.push((0, window.isFinite)(b) && !(0, window.isNaN)(b) ? b : "null");
                break;
            case "boolean":
                c.push(b);
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (null == b) {
                    c.push("null");
                    break
                }
                if ((0, _.Oa)(b)) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", f = 0; f < d; f++) c.push(e), e = b[f], of(a, a.A ? a.A.call(b, String(f), e) : e, c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" !=
                    typeof e && (c.push(d), pf(a, f, c), c.push(":"), of(a, a.A ? a.A.call(b, f, e) : e, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                throw Error("Unknown type: " + typeof b);
            }
        };
        var pf = function (a, b, c) {
            c.push('"', b.replace(uaa, function (a) {
                if (a in qf) return qf[a];
                var b = a.charCodeAt(0),
                    c = "\\u";
                16 > b ? c += "000" : 256 > b ? c += "00" : 4096 > b && (c += "0");
                return qf[a] = c + b.toString(16)
            }), '"')
        };
        _.rf = function () {};
        _.sf = function () {};
        _.tf = function (a) {
            this.Vg = a
        };
        _.uf = function () {
            var a = null;
            try {
                a = window.sessionStorage || null
            } catch (b) {}
            this.Vg = a
        };
        _.vf = function (a, b) {
            wf.push(a);
            xf[a] = b;
            yf && zf("init", a)
        };
        _.Af = function (a, b) {
            b = b || {};
            b._e = _.Ga;
            (0, _.vf)(a, b)
        };
        _.Bf = function (a) {
            window.google.pmc && (vaa(a), "dispose" == a && (window.google.pmc = null), "init" == a ? yf = !0 : "dispose" == a && (yf = !1))
        };
        var vaa = function (a) {
            ("dispose" == a ? _.Cb : _.Zb)(wf, function (b) {
                zf(a, b)
            })
        };
        var zf = function (a, b) {
            try {
                var c = xf[b];
                if (c) {
                    var d = c[a],
                        e = window.google.pmc[b];
                    d && (e || Cf(b)) && d(e)
                }
            } catch (f) {
                window.google.ml(f, !1, {
                    cause: "m" + a,
                    mid: b
                })
            }
        };
        var Cf = function (a) {
            a = xf[a];
            return Boolean(a && a._e)
        };
        _.Df = function (a, b) {
            if (Ef && "" !== Ff && (window.google.pmc[a] || Cf(a))) {
                window.google.pmc[a] = b;
                var c = Ff;
                try {
                    var d = (0, _.lf)(window.google.pmc);
                    d && Ef.set("web-mh" + c, d)
                } catch (e) {}
            }
        };
        var Gf = function () {
            for (var a = [], b = [], c = 0, d = Hf.length; c < d; c++) {
                var e = Hf[c](_.If[Jf[c]]);
                e && (0 == e.indexOf("&") ? b.push(e) : (0 < a.length && a.push(","), a.push(e)))
            }
            a = a.concat(b);
            window.google._bfr = !0;
            a.push("&ei=", window.google.kEI);
        };
        var waa = function (a, b) {
            return function (c) {
                c = c || window.event;
                for (c = c.target || c.srcElement; c.parentNode && "A" != c.tagName;) c = c.parentNode;
                a(c, b ? _.If[b] : null)
            }
        };
        var xaa = function (a) {
            !a.persisted && !Kf || yaa || Gf();
            Kf = !0
        };
        _.Lf = function (a, b, c, d) {
            d && (_.If[d] = {});
            for (var e = window.document.getElementsByTagName("a"), f = 0, g; g = e[f++];) a(g) && (0, _.$e)(g, "click", waa(b, d));
            Hf.push(c);
            Jf.push(d)
        };
        var zaa = function (a) {
            this.H = a.a;
            this.A = a.b;
            this.B = a.c;
            this.D = a.d;
            this.J = a.e;
            this.L = a.g;
            this.kF = a.h;
            this.Mb = a.i
        };
        _.Mf = function () {
            var a = window.google.comm;
            return a ? new zaa(a) : null
        };
        var Aaa = function (a, b) {
            return a[1] - b[1]
        };
        _.Nf = function (a) {
            var b = 0,
                c = arguments,
                d = c.length;
            1 == d % 2 && (b = c[d - 1]);
            for (var e = 0; e < d - 1; e += 2) {
                var f = c[e];
                Of[f] || (Of[f] = []);
                Of[f].push([c[e + 1], b]);
                Of[f].sort(Aaa)
            }
        };
        _.Pf = function (a) {
            for (var b = 0; b < arguments.length - 1; b += 2) {
                var c = Of[arguments[b]];
                if (c)
                    for (var d = arguments[b + 1], e = 0; e < c.length; ++e)
                        if (c[e][0] == d) {
                            c.splice(e, 1);
                            break
                        }
            }
        };
        _.Qf = function (a, b, c, d) {
            var e = void 0 === c ? !0 : c,
                f = !1 === c,
                g = b && b[0] === c;
            if (a in Of) {
                void 0 === d && (d = !1);
                var h;
                h = "function" == typeof d ? d : function (a) {
                    return a === d
                };
                a = Of[a].slice(0);
                for (var k = 0, l; l = a[k++];)
                    if (l = l[0].apply(null, b || []), f) e = e || l;
                    else if (g && (b[0] = l), e = l, h(e)) return e
            }
            return "function" == typeof d ? c : e
        };
        _.Rf = function (a, b, c) {
            c ? (0, _.Sf)(a, b) : (0, _.Tf)(a, b)
        };
        _.Uf = function (a, b, c) {
            return (0, _.Vf)(a, b) ? ((0, _.Tf)(a, b), (0, _.Sf)(a, c), !0) : !1
        };
        _.Wf = function (a, b) {
            var c = !(0, _.Vf)(a, b);
            (0, _.Rf)(a, b, c);
            return c
        };
        _.Xf = function () {
            return window.location
        };
        _.Yf = function (a) {
            if (!(0, _.Qf)(32, [a], 0, !0)) try {
                RegExp("^(" + Baa + ")?/(url|aclk)\\?.*&rct=j(&|$)").test(a) ? (Zf || (Zf = window.document.createElement("iframe"), Zf.style.display = "none", (0, _.Me)(Zf)), window.google.r = 1, Zf.src = a) : ((/#.*\/blank\.html$/.test(a) || /#.*about:blank$/.test(a)) && window.google.ml(Error("navbl"), !1), (0, _.Xf)().href = a)
            } catch (b) {
                (0, _.Xf)().href = a
            }
        };
        _.$f = function (a) {
            (0, _.Yf)((0, _.ag)(a))
        };
        _.bg = function () {
            var a = (0, _.Xf)(),
                b = a.hash ? a.href.substr(a.href.indexOf("#") + 1) : "",
                c = b && b.match(/(^|&)q=/),
                d = a.search ? a.href.substr(a.href.indexOf("?") + 1).replace(/#.*/, "") : "",
                b = (c ? b : d).replace(/(^|&)(fp|tch)=[^&]*/g, "").replace(/^&/, "");
            return (c ? "/search" : a.pathname) + (b ? "?" + b : "")
        };
        _.cg = function () {
            var a = (0, _.Xf)();
            return a.hash ? a.href.substr(a.href.indexOf("#")) : ""
        };
        _.dg = function (a, b) {
            if (!b && 1 < (0, _.cg)().length) {
                var c = (0, _.Qf)(131, [a], null, !1);
                if (null !== c) return c ? (0, window.encodeURIComponent)(c) : null
            }
            var d, c = b ? 0 <= (d = b.indexOf("#")) && b.substr(d) : (0, _.cg)();
            d = "[#&]" + (b ? "((q|fp)=|tbs=simg|tbs=sbi)" : "fp=");
            if (c && c.match(d)) {
                if (d = c.match("[#&]" + a + "=([^&]*)")) return d[1]
            } else if (d = (b ? b.match(/(\?|$)[^#]*/)[0] : (0, _.Xf)().search).match("[?&]" + a + "=([^&]*)")) return d[1];
            return null
        };
        _.eg = function (a, b) {
            var c = (0, _.dg)(a, b);
            return c && (0, window.decodeURIComponent)(c.replace(/\+/g, " "))
        };
        _.fg = function (a, b, c, d) {
            c = d ? c : (0, window.encodeURIComponent)(c);
            d = RegExp("([#?&]" + a + "=)[^&#]*");
            return b = d.test(b) ? b.replace(d, "$1" + c) : b + ("&" + a + "=" + c)
        };
        _.ag = function (a) {
            var b = (0, _.bg)().match(/[?&][\w\.\-~]+=([^&]*)/g),
                c = {};
            if (b)
                for (var d = 0, e; e = b[d++];) {
                    e = e.match(/([\w\.\-~]+?)=(.*)/);
                    var f = e[2];
                    c[e[1]] = f
                }
            for (e in a) a.hasOwnProperty(e) && (f = a[e], null == f ? delete c[e] : c[e] = f);
            a = "/search?";
            b = !0;
            for (e in c) c.hasOwnProperty(e) && (a = a.concat((b ? "" : "&") + e + "=" + c[e]), b = !1);
            return a
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
        var Daa = function (a, b) {
            a.indexOf("=");
            a.indexOf("/");
            b.indexOf("/");
            return a + "=" + b
        };
        var hg = function (a, b) {
            var c = (0, _.jb)("/%s=(.*?)(?:$|/)", b);
            return (c = Eaa(c).exec(a)) ? c[1] : null
        };
        _.ig = function () {
            return (0, _.Fe)(window.document.body || window.document.documentElement)
        };
        _.jg = function (a, b, c) {
            var d = c ? "" : 0;
            if (_.sc.Hc) {
                if (d = b.replace(/\-([a-z])/g, function (a, b) {
                    return b.toUpperCase()
                }), d = a.currentStyle && a.currentStyle[d] || "", !c) {
                    if (!/^-?\d/.test(d)) return 0;
                    c = a.style.left;
                    a.style.left = d;
                    d = a.style.pixelLeft;
                    a.style.left = c
                }
            } else {
                a = window.document.defaultView && window.document.defaultView.getComputedStyle(a, "");
                if (_.sc.Yr && !a) return d;
                d = a.getPropertyValue(b);
                d = c ? d : (0, window.parseInt)(d, 10)
            }
            return d
        };
        _.kg = function (a) {
            var b;
            _.sc.Hc ? b || (b = a.offsetHeight - (0, _.jg)(a, "paddingTop") - (0, _.jg)(a, "paddingBottom") - (0, _.jg)(a, "borderTop") - (0, _.jg)(a, "borderBottom")) : (b = (0, _.jg)(a, "height"), ((0, window.isNaN)(b) || 0 == b) && a.offsetHeight && (b = a.offsetHeight - (0, _.jg)(a, "padding-top") - (0, _.jg)(a, "padding-bottom") - (0, _.jg)(a, "border-top-width") - (0, _.jg)(a, "border-bottom-width")));
            return (0, window.isNaN)(b) || 0 > b ? 0 : b
        };
        _.lg = function (a) {
            var b;
            _.sc.Hc ? (b = a.style.pixelWidth || 0) || (b = a.offsetWidth - (0, _.jg)(a, "paddingLeft") - (0, _.jg)(a, "paddingRight") - (0, _.jg)(a, "borderLeft") - (0, _.jg)(a, "borderRight")) : (b = (0, _.jg)(a, "width"), ((0, window.isNaN)(b) || 0 == b) && a.offsetWidth && (b = a.offsetWidth - (0, _.jg)(a, "padding-left") - (0, _.jg)(a, "padding-right") - (0, _.jg)(a, "border-left-width") - (0, _.jg)(a, "border-right-width")));
            return (0, window.isNaN)(b) || 0 > b ? 0 : b
        };
        _.mg = function (a) {
            return (0, _.re)(a) + ((0, _.ig)() ? (0, _.lg)(a) : 0)
        };
        _.ng = function () {};
        _.pg = function (a, b) {
            (0, _.qg)(a, (0, _.ab)(_.rg, b))
        };
        _.qg = function (a, b, c) {
            a.Za || (a.Za = []);
            a.Za.push((0, _.$a)(b, c))
        };
        _.rg = function (a) {
            a && "function" == typeof a.dispose && a.dispose()
        };
        _.sg = function (a) {
            for (var b = 0, c = arguments.length; b < c; ++b) {
                var d = arguments[b];
                (0, _.Qa)(d) ? _.sg.apply(null, d) : (0, _.rg)(d)
            }
        };
        _.tg = function (a) {
            return function () {
                return a
            }
        };
        _.ug = function (a) {
            return function () {
                throw Error(a);
            }
        };
        var Faa = function (a) {
            return function () {
                throw a;
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
        var yg = function (a, b, c, d) {
            a = new wg(c, d);
            b.push(a);
            return a
        };
        var zg = function (a, b) {
            var c = new a.oZ;
            c.initialize(b());
            a.JB = c;
            c = (c = !! Ag(a, a.D, b())) || !! Ag(a, a.B, b());
            c || (a.A.length = 0);
            return c
        };
        var Gaa = function (a, b) {
            var c = Ag(a, a.A, b);
            c && window.setTimeout((0, _.ug)("Module errback failures: " + c), 0);
            a.D.length = 0;
            a.B.length = 0
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
            a.Wz = !0;
            a.B = c;
            a.SE = !b;
            Dg(a)
        };
        _.Eg = function (a) {
            if (a.Wz) {
                if (!a.KM) throw new Fg(a);
                a.KM = !1
            }
        };
        _.Gg = function (a, b, c, d) {
            a.Nx.push([b, c, d]);
            a.Wz && Dg(a);
            return a
        };
        var Hg = function (a) {
            return (0, _.Ig)(a.Nx, function (a) {
                return (0, _.Va)(a[1])
            })
        };
        var Dg = function (a) {
            a.D && (a.Wz && Hg(a)) && (_.Ca.clearTimeout(a.D), delete a.D);
            a.A && (a.A.GK--, delete a.A);
            for (var b = a.B, c = !1, d = !1; a.Nx.length && !a.RJ;) {
                var e = a.Nx.shift(),
                    f = e[0],
                    g = e[1],
                    e = e[2];
                if (f = a.SE ? g : f) try {
                    var h = f.call(e || a.H, b);
                    (0, _.Ma)(h) && (a.SE = a.SE && (h == b || h instanceof Error), a.B = b = h);
                    b instanceof _.Bg && (d = !0, a.RJ = !0)
                } catch (k) {
                    b = k, a.SE = !0, Hg(a) || (c = !0)
                }
            }
            a.B = b;
            d && ((0, _.Gg)(b, (0, _.$a)(a.yO, a, !0), (0, _.$a)(a.yO, a, !1)), b.GU = !0);
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
        var Mg = function (a, b, c) {
            var d = [];
            (0, _.Sb)(b, d);
            b = [];
            for (var e = {}, f = 0; f < d.length; f++) {
                var g = d[f],
                    h = a.zt[g],
                    k = new _.Bg;
                e[g] = k;
                h.JB ? k.Un(a.dR) : (Haa(a, g, h, !! c, k), Ng(a, g) || b.push(g))
            }
            0 < b.length && Og(a, b);
            return e
        };
        var Haa = function (a, b, c, d, e) {
            c.aI(e.Un, e);
            yg(c, c.A, function (a) {
                a = Error(a);
                (0, _.Eg)(e);
                (0, _.Cg)(e, !1, a)
            }, void 0);
            Ng(a, b) ? d && (Pg(a, b), Kg(a)) : d && Pg(a, b)
        };
        var Og = function (a, b) {
            if (a.eV) {
                var c = (0, _.$a)(a.IH, a, b);
                (0, _.Gg)(a.L, c, null, void 0)
            } else 0 == a.D.length ? a.IH(b) : (a.A.push(b), Kg(a))
        };
        var Iaa = function (a, b) {
            for (var c = 0; c < b.length; c++)
                if (a.zt[b[c]].JB) throw Error("Module already loaded: " + b[c]);
            for (var d = [], c = 0; c < b.length; c++) d = d.concat(Qg(a, b[c]));
            (0, _.Sb)(d);
            return !a.PJ && 1 < d.length ? (c = d.shift(), a.A = (0, _.Rg)(d, function (a) {
                return [a]
            }).concat(a.A), [c]) : d
        };
        var Qg = function (a, b) {
            var c = [];
            (0, _.Fb)(a.M, b) || c.push(b);
            for (var d = (0, _.Mb)(a.zt[b].GO); d.length;) {
                var e = d.pop();
                a.zt[e].JB || (0, _.Fb)(a.M, e) || (c.unshift(e), Array.prototype.unshift.apply(d, a.zt[e].GO))
            }(0, _.Sb)(c);
            return c
        };
        _.Sg = function (a, b) {
            a.isDisposed() || (zg(a.zt[b], (0, _.$a)(a.hP, a)) && Tg(a, 4), (0, _.Ib)(a.J, b), (0, _.Ib)(a.D, b), 0 == a.D.length && Ug(a), a.V && b == a.V && (a.L.Wz || a.L.Un()), Kg(a))
        };
        var Ng = function (a, b) {
            if ((0, _.Fb)(a.D, b)) return !0;
            for (var c = 0; c < a.A.length; c++)
                if ((0, _.Fb)(a.A[c], b)) return !0;
            return !1
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
        var Xg = function (a, b) {
            1 < a.B.length ? a.A = (0, _.Rg)(a.B, function (a) {
                return [a]
            }).concat(a.A) : Tg(a, b)
        };
        var Tg = function (a, b) {
            var c = a.B;
            a.D.length = 0;
            for (var d = [], e = 0; e < a.A.length; e++) {
                var f = (0, _.Pc)(a.A[e], function (a) {
                    var b = Qg(this, a);
                    return (0, _.Ig)(c, function (a) {
                        return (0, _.Fb)(b, a)
                    })
                }, a);
                (0, _.Nb)(d, f)
            }
            for (e = 0; e < c.length; e++)(0, _.Hb)(d, c[e]);
            for (e = 0; e < d.length; e++) {
                for (f = 0; f < a.A.length; f++)(0, _.Ib)(a.A[f], d[e]);
                (0, _.Ib)(a.J, d[e])
            }
            var g = a.T.error;
            if (g)
                for (e = 0; e < g.length; e++)
                    for (var h = g[e], f = 0; f < d.length; f++) h("error", d[f], b);
            for (e = 0; e < c.length; e++) a.zt[c[e]] && Gaa(a.zt[c[e]], b);
            a.B.length = 0;
            Kg(a)
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
        var Lg = function (a, b) {
            for (var c = a.T[b], d = 0; c && d < c.length; d++) c[d](b)
        };
        var Jaa = function (a) {
            for (var b = arguments[0], c = 1; c < arguments.length; c++) var d = arguments[c],
            b = (0, _.gb)(d, "/") ? d : "" == b || (0, _.ib)(b, "/") ? b + d : b + ("/" + d);
            return b
        };
        var Yg = function (a) {
            var b = /(^.*?\/_\/js\/)/.exec(a);
            this.D = b && b[1] || null;
            this.J = hg(a, "k");
            this.A = hg(a, "am");
            this.B = hg(a, "sv");
            this.L = hg(a, "rs")
        };
        var Kaa = function (a, b) {
            function c(a, b) {
                b && d.push(Daa(a, b))
            }
            var d = [a.D];
            c("k", a.J);
            c("m", b.join(","));
            c("am", a.A);
            c("rt", "j");
            c("d", "0");
            c("sv", a.B);
            c("rs", a.L);
            return Jaa.apply(null, d)
        };
        var Zg = function () {
            var a = _.x.G();
            if (!$g) {
                a.PJ = !0;
                var b = new Yg(window.google.xjsu);
                a.FL = b;
                $g = !0
            }
            return a
        };
        _.ah = function (a, b, c) {
            b = b || _.Ga;
            var d = Zg(),
                e = d.zt[a];
            e.JB ? (a = new wg(b, c), window.setTimeout((0, _.$a)(a.execute, a), 0)) : Ng(d, a) ? e.aI(b, c) : (e.aI(b, c), Og(d, [a]))
        };
        _.bh = function (a, b, c) {
            for (var d = a; null !== d && !(0, _.Vf)(d, "obcontainer");) {
                if (d == window.document.body) return;
                d = d.parentNode
            }
            d = d ? d.querySelectorAll("div.obselector") : [];
            window.google.log("prose_onebox_dropdown", "&id=" + b);
            for (b = 0; b < d.length; ++b) d[b].style.display = "none";
            "undefined" == typeof c ? d[a.selectedIndex].style.display = "inline" : d[c].style.display = "inline"
        };
        var Laa = function (a, b, c, d, e, f) {
            function g() {
                var b = s;
                "undefined" == typeof b.length && (b = [b]);
                if (a)
                    for (c = 0; d = b[c++];) d.style.marginTop = "-9999px";
                else
                    for (var c = 0, d; d = b[c++];) _.sc.Hc ? d.parentNode.style.removeAttribute("filter") : d.parentNode.style.opacity = "";
                ch = !0;
                f && f();
                dh && (window.document.body.className = window.document.body.className)
            }
            var h = [],
                k = [],
                l = a ? 1 : 0,
                n = 1 - l,
                p, m, t, s = b ? b.querySelectorAll("div.obsmw") : [];
            b = 0;
            for (var r; r = s[b++];) p = r.offsetHeight, _.sc.Yr ? (t = (0, _.lg)(r.parentNode), m = 0 == t ? 0 : -100 * p / t - 10,
                t = "%") : (m = -p - 1, t = "px"), p = (1 - l) * m, m *= 1 - n, h.push([r, "marginTop", p, m, null, t]), k.push([r.parentNode, "opacity", l, n, null, ""]);
            c ? (0, _.Te)(d, k.concat(h), g) : (c = function (a, b, c, d) {
                (0, _.Te)(c, a, function () {
                    (0, _.Te)(d, b, g)
                })
            }, a ? c(k, h, d, e) : c(h, k, e, d))
        };
        _.eh = function (a, b, c, d, e, f) {
            if (ch) {
                ch = !1;
                for (var g = a; !(0, _.Vf)(g, "obcontainer");) {
                    if (g == window.document.body) {
                        ch = !0;
                        return
                    }
                    g = g.parentNode
                }(d = (0, _.Vf)(g, "obsmo")) ? (0, _.Tf)(g, "obsmo") : (0, _.Sf)(g, "obsmo");
                e = e || 0;
                dh && (e = c = 0);
                Laa(d, g, b, c, e, f);
                a = a.getAttribute("data-log-id") || "";
                window.google.log("prose_onebox_show_more", (d ? "close" : "open") + "&id=" + a)
            }
        };
        _.fh = function () {
            this.B = []
        };
        _.gh = function (a, b, c, d, e) {
            b || (b = c ? [c] : []);
            a.A = b;
            a.B = [];
            if (e)
                for (b = 0; b < e.length; b++) a.A[e[b]] = a.A[e[b]] || [];
            if (-1 != d) {
                a.Da = {};
                n: {
                    e = a.A;
                    if (e.length && (c = e.length - 1, (b = e[c]) && "object" == typeof b && "number" != typeof b.length)) {
                        c < d && (e[d] = b, delete e[c]);
                        d = b;
                        break n
                    }
                    b = {};
                    d = e[Math.max(e.length, d)] = b
                }
                a.va = d
            }
        };
        _.hh = function (a, b, c, d) {
            a.B[c] || !d && !a.A[c] || (a.B[c] = new b(a.A[c]));
            return a.B[c]
        };
        _.ih = function (a, b, c) {
            if (!a.B[c]) {
                a.B[c] = [];
                for (var d = 0; d < a.A[c].length; d++) a.B[c][d] = new b(a.A[c][d])
            }
            return a.B[c]
        };
        _.jh = function (a, b, c) {
            a.dataset ? a.dataset[b] = c : a.setAttribute("data-" + zb(b), c)
        };
        _.kh = function (a, b) {
            return a.dataset ? a.dataset[b] : a.getAttribute("data-" + zb(b))
        };
        _.lh = function (a, b) {
            return a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + zb(b)) : !! a.getAttribute("data-" + zb(b))
        };
        _.mh = function (a) {
            if (a.dataset) return a.dataset;
            var b = {};
            a = a.attributes;
            for (var c = 0; c < a.length; ++c) {
                var d = a[c];
                if ((0, _.gb)(d.name, "data-")) {
                    var e = (0, _.yb)(d.name.substr(5));
                    b[e] = d.value
                }
            }
            return b
        };
        _.nh = function (a, b) {
            this.type = a;
            this.currentTarget = this.target = b
        };
        _.oh = function (a) {
            a.preventDefault()
        };
        var ph = function (a) {
            ph[" "](a);
            return a
        };
        _.qh = function (a, b) {
            a && this.init(a, b)
        };
        _.rh = function (a, b) {
            return Maa ? a.tl.button == b : "click" == a.type ? 0 == b : !! (a.tl.button & Naa[b])
        };
        _.sh = function (a) {
            return (0, _.rh)(a, 0) && !(_.jd && _.ie && a.ctrlKey)
        };
        _.th = function (a) {
            return !(!a || !a[uh])
        };
        var vh = function (a, b, c, d, e, f) {
            this.nu = a;
            this.A = b;
            this.src = c;
            this.type = d;
            this.capture = !! e;
            this.gA = f;
            this.key = ++Oaa;
            this.Kx = this.nC = !1
        };
        _.wh = function (a, b, c, d, e) {
            if ((0, _.Oa)(b)) {
                for (var f = 0; f < b.length; f++)(0, _.wh)(a, b[f], c, d, e);
                return null
            }
            c = (0, _.xh)(c);
            return (0, _.th)(a) ? a.listen(b, c, d, e) : yh(a, b, c, !1, d, e)
        };
        var yh = function (a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            e = !! e;
            var g = zh;
            b in g || (g[b] = {
                Yh: 0
            });
            g = g[b];
            e in g || (g[e] = {
                Yh: 0
            }, g.Yh++);
            var g = g[e],
                h = (0, _.Xa)(a),
                k;
            if (g[h]) {
                k = g[h];
                for (var l = 0; l < k.length; l++)
                    if (g = k[l], g.nu == c && g.gA == f) {
                        if (g.Kx) break;
                        d || (k[l].nC = !1);
                        return k[l]
                    }
            } else k = g[h] = [], g.Yh++;
            l = Paa();
            g = new vh(c, l, a, b, e, f);
            g.nC = d;
            l.src = a;
            l.nu = g;
            k.push(g);
            _.Ah[h] || (_.Ah[h] = []);
            _.Ah[h].push(g);
            a.addEventListener ? a.addEventListener(b, l, e) : a.attachEvent(b in Bh ? Bh[b] : Bh[b] = "on" + b, l);
            return _.Ch[g.key] =
                g
        };
        var Paa = function () {
            var a = Qaa,
                b = Dh ? function (c) {
                    return a.call(b.src, b.nu, c)
                } : function (c) {
                    c = a.call(b.src, b.nu, c);
                    if (!c) return c
                };
            return b
        };
        _.Eh = function (a, b, c, d, e) {
            if ((0, _.Oa)(b)) {
                for (var f = 0; f < b.length; f++)(0, _.Eh)(a, b[f], c, d, e);
                return null
            }
            c = (0, _.xh)(c);
            return (0, _.th)(a) ? a.MC(b, c, d, e) : yh(a, b, c, !0, d, e)
        };
        _.Fh = function (a, b, c, d, e) {
            if ((0, _.Oa)(b)) {
                for (var f = 0; f < b.length; f++)(0, _.Fh)(a, b[f], c, d, e);
                return null
            }
            c = (0, _.xh)(c);
            if ((0, _.th)(a)) return a.unlisten(b, c, d, e);
            d = !! d;
            a = (0, _.Gh)(a, b, d);
            if (!a) return !1;
            for (f = 0; f < a.length; f++)
                if (a[f].nu == c && a[f].capture == d && a[f].gA == e) return (0, _.Hh)(a[f]);
            return !1
        };
        _.Hh = function (a) {
            if ((0, _.Sa)(a) || !a || a.Kx) return !1;
            var b = a.src;
            if ((0, _.th)(b)) return Ih(b, a);
            var c = a.type,
                d = a.A,
                e = a.capture;
            b.removeEventListener ? b.removeEventListener(c, d, e) : b.detachEvent && b.detachEvent(c in Bh ? Bh[c] : Bh[c] = "on" + c, d);
            b = (0, _.Xa)(b);
            _.Ah[b] && (d = _.Ah[b], (0, _.Ib)(d, a), 0 == d.length && delete _.Ah[b]);
            a.Kx = !0;
            a.nu = null;
            a.A = null;
            a.src = null;
            a.gA = null;
            if (d = zh[c][e][b])(0, _.Ib)(d, a), 0 == d.length && (delete zh[c][e][b], zh[c][e].Yh--), 0 == zh[c][e].Yh && (delete zh[c][e], zh[c].Yh--), 0 == zh[c].Yh && delete zh[c];
            delete _.Ch[a.key];
            return !0
        };
        _.Gh = function (a, b, c) {
            var d = zh;
            return b in d && (d = d[b], c in d && (d = d[c], a = (0, _.Xa)(a), d[a])) ? d[a] : null
        };
        _.Jh = function (a, b, c, d) {
            if ((0, _.th)(a)) return Kh(a, b, c, d);
            var e = zh;
            return b in e && (e = e[b], c in e) ? Lh(e[c], a, b, c, d) : !0
        };
        var Lh = function (a, b, c, d, e) {
            c = 1;
            b = (0, _.Xa)(b);
            if (a[b])
                for (a = (0, _.Mb)(a[b]), b = 0; b < a.length; b++)(d = a[b]) && !d.Kx && (c &= !1 !== Mh(d, e));
            return Boolean(c)
        };
        var Mh = function (a, b) {
            var c = a.nu,
                d = a.gA || a.src;
            a.nC && (0, _.Hh)(a);
            return c.call(d, b)
        };
        var Qaa = function (a, b) {
            if (a.Kx) return !0;
            var c = a.type,
                d = zh;
            if (!(c in d)) return !0;
            var d = d[c],
                e, f;
            if (!Dh) {
                e = b || (0, _.Fa)("window.event");
                var g = !0 in d,
                    h = !1 in d;
                if (g) {
                    if (0 > e.keyCode || void 0 != e.returnValue) return !0;
                    n: {
                        var k = !1;
                        if (0 == e.keyCode) try {
                            e.keyCode = -1;
                            break n
                        } catch (l) {
                            k = !0
                        }
                        if (k || void 0 == e.returnValue) e.returnValue = !0
                    }
                }
                k = new _.qh;
                k.init(e, this);
                e = !0;
                try {
                    if (g) {
                        for (var n = [], p = k.currentTarget; p; p = p.parentNode) n.push(p);
                        f = d[!0];
                        for (var m = n.length - 1; !k.nA && 0 <= m; m--) k.currentTarget = n[m], e &= Lh(f, n[m], c, !0, k);
                        if (h)
                            for (f = d[!1], m = 0; !k.nA && m < n.length; m++) k.currentTarget = n[m], e &= Lh(f, n[m], c, !1, k)
                    } else e = Mh(a, k)
                } finally {
                    n && (n.length = 0)
                }
                return e
            }
            c = new _.qh(b, this);
            return e = Mh(a, c)
        };
        _.xh = function (a) {
            return (0, _.Va)(a) ? a : a[Nh] || (a[Nh] = function (b) {
                return a.handleEvent(b)
            })
        };
        _.Oh = function () {
            this.L = {};
            this.mr = this
        };
        var Ph = function (a, b, c, d, e, f) {
            var g = a.L[b] || (a.L[b] = []),
                h = (0, _.Qh)(g, c, e, f);
            if (-1 < h) return a = g[h], d || (a.nC = !1), a;
            a = new vh(c, null, a, b, !! e, f);
            a.nC = d;
            g.push(a);
            return a
        };
        var Ih = function (a, b) {
            var c = b.type;
            if (!(c in a.L)) return !1;
            if (c = (0, _.Ib)(a.L[c], b)) b.Kx = !0;
            return c
        };
        var Kh = function (a, b, c, d) {
            if (!(b in a.L)) return !0;
            var e = !0;
            b = (0, _.Mb)(a.L[b]);
            for (var f = 0; f < b.length; ++f) {
                var g = b[f];
                if (g && !g.Kx && g.capture == c) {
                    var h = g.nu,
                        k = g.gA || g.src;
                    g.nC && Ih(a, g);
                    e = !1 !== h.call(k, d) && e
                }
            }
            return e && !1 != d.bS
        };
        _.Qh = function (a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (f.nu == b && f.capture == !! c && f.gA == d) return e
            }
            return -1
        };
        _.Rh = function (a, b) {
            _.Oh.call(this);
            this.B = a || 1;
            this.A = b || _.Ca;
            this.D = (0, _.$a)(this.DW, this);
            this.H = (0, _.Ve)()
        };
        _.Sh = function (a, b, c) {
            if ((0, _.Va)(a)) c && (a = (0, _.$a)(a, c));
            else if (a && "function" == typeof a.handleEvent) a = (0, _.$a)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            return 2147483647 < b ? -1 : _.Ca.setTimeout(a, b || 0)
        };
        var Th = function (a) {
            var b = _.Ca.document;
            if (b && !b.createEvent && b.createEventObject) try {
                return b.createEventObject(a)
            } catch (c) {
                return a
            } else return a
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
            this.D = !1;
            this.B = {};
            this.M = {};
            this.va = !1;
            c && (b && "click" == c.type) && this.action(b);
            Vh.push(this)
        };
        var Wh = function (a, b, c, d) {
            if (a.D || !a.A[b]) a.Uz("done", b);
            else {
                c && a.tick(c, d);
                a.A[b]--;
                0 == a.A[b] && delete a.A[b];
                if (b = (0, _.fc)(a.A)) a.va ? b = !0 : (0 < a.J.ys() && (a.M.dup = a.J.ot().join("|")), b = new Xh("beforedone", a), a.dispatchEvent(b) && Yh.dispatchEvent(b) ? ((c = Saa(a.M)) && (a.B.cad = c), b.type = "done", b = Yh.dispatchEvent(b)) : b = !1);
                b && (a.D = !0, (0, _.Ib)(Vh, a), a.aF = null, a.$ = null, a.dispose())
            }
        };
        var Taa = function (a, b, c, d) {
            a.D && a.Uz("branch", b);
            c && a.tick(c, d);
            a.A[b] ? a.A[b]++ : a.A[b] = 1
        };
        var Zh = function (a) {
            a.D && a.Uz("tick")
        };
        var Saa = function (a) {
            var b = [];
            (0, _.$b)(a, function (a, d) {
                var e = (0, window.encodeURIComponent)(d);
                (0, window.encodeURIComponent)(a).replace(/%7C/g, "|");
                b.push(e + ":" + a)
            });
            return b.join(",")
        };
        var Uaa = function (a, b, c) {
            Zh(a);
            a.M[b] = c.toString().replace(/[:;,\s]/g, "_")
        };
        var Vaa = function (a, b) {
            for (var c = a; c && 1 == c.nodeType; c = c.parentNode) b(c)
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
        var Xaa = function (a, b, c, d) {
            (0, _.$b)(d, (0, _.$a)(function (a, d) {
                var g = c ? (0, _.$a)(a, c) : a;
                b ? this.B[b + "." + d] = g : this.B[d] = g
            }, a));
            ai(a)
        };
        var ai = function (a) {
            a.L && 0 != a.A.length && _.Ca.setTimeout((0, _.$a)(function () {
                this.L(this.A, this)
            }, a), 0)
        };
        var Yaa = function (a, b) {
            a.L = b;
            ai(a)
        };
        _.bi = function (a) {
            var b;
            b = a.event;
            var c = a.eventType,
                d = c || b.type;
            if ("keypress" == d || "keydown" == d || "keyup" == d)
                if (_.Xd && !(0, _.Ec)("12.14") || _.ci) d = di(b, c), d.ctrlKey = b.ctrlKey, d.altKey = b.altKey, d.shiftKey = b.shiftKey, d.metaKey = b.metaKey, d.keyCode = b.keyCode, d.charCode = b.charCode, b = d;
                else {
                    if (window.document.createEvent)
                        if (d = window.document.createEvent("KeyboardEvent"), d.initKeyboardEvent) {
                            var e;
                            e = b.ctrlKey;
                            var f = b.metaKey,
                                g = b.shiftKey,
                                h = [];
                            b.altKey && h.push("Alt");
                            e && h.push("Control");
                            f && h.push("Meta");
                            g &&
                                h.push("Shift");
                            e = h.join(" ");
                            d.initKeyboardEvent(c || b.type, !0, !0, window, b.charCode, b.keyCode, b.location, e, b.repeat, b.locale);
                            if (_.jd || _.Jc && (0, _.Ec)("9.0")) b = (0, _.tg)(b.keyCode), Object.defineProperty(d, "keyCode", {
                                get: b
                            }), Object.defineProperty(d, "which", {
                                get: b
                            })
                        } else d.initKeyEvent(c || b.type, !0, !0, window, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.keyCode, b.charCode);
                        else d = window.document.createEventObject(), d.type = c || b.type, d.repeat = b.repeat, d.ctrlKey = b.ctrlKey, d.altKey = b.altKey, d.shiftKey = b.shiftKey,
                    d.metaKey = b.metaKey, d.keyCode = b.keyCode, d.charCode = b.charCode;
                    b = d
                } else "click" == d || "dblclick" == d || "mousedown" == d || "mouseover" == d || "mouseout" == d || "mousemove" == d ? (window.document.createEvent ? (d = window.document.createEvent("MouseEvent"), d.initMouseEvent(c || b.type, !0, !0, window, b.detail || 1, b.screenX || 0, b.screenY || 0, b.clientX || 0, b.clientY || 0, b.ctrlKey || !1, b.altKey || !1, b.shiftKey || !1, b.metaKey || !1, b.button || 0, b.relatedTarget || null)) : (d = window.document.createEventObject(), d.type = c || b.type, d.clientX = b.clientX,
                    d.clientY = b.clientY, d.button = b.button, d.detail = b.detail, d.ctrlKey = b.ctrlKey, d.altKey = b.altKey, d.shiftKey = b.shiftKey, d.metaKey = b.metaKey), b = d) : b = di(b, c);
            a = a.targetElement;
            a.dispatchEvent ? a.dispatchEvent(b) : a.fireEvent("on" + b.type, b)
        };
        var di = function (a, b) {
            var c;
            window.document.createEvent ? (c = window.document.createEvent("Event"), c.initEvent(b || a.type, !0, !0)) : (c = window.document.createEventObject(), c.type = b || a.type);
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
            return !0
        };
        var dba = function (a, b) {
            (0, _.Yf)(b.url)
        };
        var eba = function (a, b) {
            window.google.log(b.ct, b.data || "", b.src)
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
            d.open("GET", c, !0);
            d.send("");
            c = (0, _.ad)("nossln");
            (0, _.Ce)(c, !1)
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
            _.sc.Hc ? a.cancelBubble = !0 : a.stopPropagation && a.stopPropagation()
        };
        var Ei = function (a) {
            (0, _.Ce)(a, !1);
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
            (k = b || d && d[0]) ? window.google.log(f, g + h + l, "", k) : window.google.ml(Error("lbved"), !1, {
                ved: a,
                trE: b,
                vet: c && c[0],
                taE: d && d[0],
                ct: f,
                data: g
            })
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
        _.Zb = Kb.forEach ? function (a, b, c) {
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
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        };
        _.ff = Kb.every ? function (a, b, c) {
            return Kb.every.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = (0, _.Ra)(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && !b.call(c, e[f], f, a)) return !1;
            return !0
        };
        var Xb = "StopIteration" in _.Ca ? _.Ca.StopIteration : Error("StopIteration");
        _.Vb.prototype.next = function () {
            throw Xb;
        };
        _.Vb.prototype.nx = function () {
            return this
        };
        var mc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
        _.q = _.oc.prototype;
        _.q.Yh = 0;
        _.q.QF = 0;
        _.q.ys = (0, _.ma)("Yh");
        _.q.ot = function () {
            pc(this);
            for (var a = [], b = 0; b < this.A.length; b++) a.push(this.Qc[this.A[b]]);
            return a
        };
        _.q.vw = function () {
            pc(this);
            return this.A.concat()
        };
        _.q.qG = function (a) {
            for (var b = 0; b < this.A.length; b++) {
                var c = this.A[b];
                if ((0, _.qc)(this.Qc, c) && this.Qc[c] == a) return !0
            }
            return !1
        };
        _.q.equals = function (a, b) {
            if (this === a) return !0;
            if (this.Yh != a.ys()) return !1;
            var c = b || gaa;
            pc(this);
            for (var d, e = 0; d = this.A[e]; e++)
                if (!c(this.get(d), a.get(d))) return !1;
            return !0
        };
        _.q.isEmpty = function () {
            return 0 == this.Yh
        };
        _.q.clear = function () {
            this.Qc = {};
            this.QF = this.Yh = this.A.length = 0
        };
        _.q.remove = function (a) {
            return (0, _.qc)(this.Qc, a) ? (delete this.Qc[a], this.Yh--, this.QF++, this.A.length > 2 * this.Yh && pc(this), !0) : !1
        };
        _.q.get = function (a, b) {
            return (0, _.qc)(this.Qc, a) ? this.Qc[a] : b
        };
        _.q.set = function (a, b) {
            (0, _.qc)(this.Qc, a) || (this.Yh++, this.A.push(a), this.QF++);
            this.Qc[a] = b
        };
        _.q.clone = function () {
            return new _.oc(this)
        };
        _.q.nx = function (a) {
            pc(this);
            var b = 0,
                c = this.A,
                d = this.Qc,
                e = this.QF,
                f = this,
                g = new _.Vb;
            g.next = function () {
                for (;;) {
                    if (e != f.QF) throw Error("The map has changed since the iterator was created");
                    if (b >= c.length) throw Xb;
                    var g = c[b++];
                    return a ? g : d[g]
                }
            };
            return g
        };
        var Ac;
        _.sc = {
            Hc: !1,
            vx: !1,
            Yr: !1,
            opera: !1
        };
        _.tc = {
            Hc: !1,
            qw: !1,
            Fz: !1,
            Oq: !1,
            xt: !1,
            kw: !1,
            WJ: !1,
            gB: !1,
            Fq: !1,
            Eq: !1,
            opera: !1,
            bF: !1
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
        Qi = Pi = Oi = Ni = Mi = !1;
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
        _.q = _.Vc.prototype;
        _.q.W = function (a) {
            return (0, _.Ra)(a) ? this.A.getElementById(a) : a
        };
        _.q.Qe = function (a, b, c) {
            return md(this.A, arguments)
        };
        _.q.createElement = function (a) {
            return this.A.createElement(a)
        };
        _.q.getWindow = function () {
            return this.A.parentWindow || this.A.defaultView
        };
        _.q.appendChild = _.sd;
        _.q.append = _.td;
        _.q.OG = _.ud;
        _.q.IQ = _.vd;
        _.q.PG = _.yd;
        _.q.u0 = _.zd;
        _.q.cP = _.Bd;
        _.q.contains = _.Hd;
        _.q.Ll = _.Wc;
        _.q = _.Zd.prototype;
        _.q.clone = function () {
            return new _.Zd(this.top, this.right, this.bottom, this.left)
        };
        _.q.contains = function (a) {
            return this && a ? a instanceof _.Zd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
        };
        _.q.ceil = function () {
            this.top = Math.ceil(this.top);
            this.right = Math.ceil(this.right);
            this.bottom = Math.ceil(this.bottom);
            this.left = Math.ceil(this.left);
            return this
        };
        _.q.floor = function () {
            this.top = Math.floor(this.top);
            this.right = Math.floor(this.right);
            this.bottom = Math.floor(this.bottom);
            this.left = Math.floor(this.left);
            return this
        };
        _.q.round = function () {
            this.top = Math.round(this.top);
            this.right = Math.round(this.right);
            this.bottom = Math.round(this.bottom);
            this.left = Math.round(this.left);
            return this
        };
        _.q.translate = function (a, b) {
            a instanceof _.Rc ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, (0, _.Sa)(b) && (this.top += b, this.bottom += b));
            return this
        };
        _.q.scale = function (a, b) {
            var c = (0, _.Sa)(b) ? b : a;
            this.left *= a;
            this.right *= a;
            this.top *= c;
            this.bottom *= c;
            return this
        };
        _.q = _.$d.prototype;
        _.q.clone = function () {
            return new _.$d(this.left, this.top, this.width, this.height)
        };
        _.q.contains = function (a) {
            return a instanceof _.$d ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
        };
        _.q.distance = function (a) {
            return Math.sqrt(naa(this, a))
        };
        _.q.ceil = function () {
            this.left = Math.ceil(this.left);
            this.top = Math.ceil(this.top);
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        };
        _.q.floor = function () {
            this.left = Math.floor(this.left);
            this.top = Math.floor(this.top);
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        };
        _.q.round = function () {
            this.left = Math.round(this.left);
            this.top = Math.round(this.top);
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        };
        _.q.translate = function (a, b) {
            a instanceof _.Rc ? (this.left += a.x, this.top += a.y) : (this.left += a, (0, _.Sa)(b) && (this.top += b));
            return this
        };
        _.q.scale = function (a, b) {
            var c = (0, _.Sa)(b) ? b : a;
            this.left *= a;
            this.width *= a;
            this.top *= c;
            this.height *= c;
            return this
        };
        var He = _.Wd ? "MozUserSelect" : _.jd ? "WebkitUserSelect" : null,
            paa = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
        var Oe = /^(\w+)?(?:\.(.+))?$/,
            kba = /^#([\w-]+)$/;
        (0, _.za)("google.dom.append", _.Me, void 0);
        (0, _.za)("google.dom.getAll", function (a, b) {
                var c;
                if (c = a.match(kba)) {
                    var d = (0, _.v)(c[1]);
                    return d ? [d] : []
                }
                c = a.match(Oe);
                d = c[2] && RegExp("\\b" + c[2] + "\\b");
                c = (b || window.document).getElementsByTagName(c[1] || "*");
                for (var e = [], f = 0, g; g = c[f++];) d && !d.test(g.className) || e.push(g);
                return e
            }, void 0);
        (0, _.za)("google.dom.set", _.Pe, void 0);
        var Xe = 0,
            raa = 0,
            We = [];
        (0, _.za)("google.listen", _.$e, void 0);
        (0, _.za)("google.unlisten", _.af, void 0);
        _.q = _.gf.prototype;
        _.q.ys = function () {
            return this.Qc.ys()
        };
        _.q.add = function (a) {
            this.Qc.set(hf(a), a)
        };
        _.q.removeAll = function (a) {
            a = cf(a);
            for (var b = a.length, c = 0; c < b; c++) this.remove(a[c])
        };
        _.q.remove = function (a) {
            return this.Qc.remove(hf(a))
        };
        _.q.clear = function () {
            this.Qc.clear()
        };
        _.q.isEmpty = function () {
            return this.Qc.isEmpty()
        };
        _.q.contains = function (a) {
            a = hf(a);
            return (0, _.qc)(this.Qc.Qc, a)
        };
        _.q.ot = function () {
            return this.Qc.ot()
        };
        _.q.clone = function () {
            return new _.gf(this)
        };
        _.q.equals = function (a) {
            return this.ys() == bf(a) && taa(this, a)
        };
        _.q.nx = function () {
            return this.Qc.nx(!1)
        };
        var qf = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        }, uaa = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
        (0, _.db)(_.sf, _.rf);
        _.sf.prototype.ys = function () {
            var a = 0;
            Yb(this.nx(!0), function () {
                a++
            });
            return a
        };
        _.sf.prototype.clear = function () {
            var a = faa(this.nx(!0)),
                b = this;
            (0, _.Zb)(a, function (a) {
                    b.remove(a)
                })
        };
        (0, _.db)(_.tf, _.sf);
        _.q = _.tf.prototype;
        _.q.set = function (a, b) {
            try {
                this.Vg.setItem(a, b)
            } catch (c) {
                if (0 == this.Vg.length) throw "Storage mechanism: Storage disabled";
                throw "Storage mechanism: Quota exceeded";
            }
        };
        _.q.get = function (a) {
            a = this.Vg.getItem(a);
            if (!(0, _.Ra)(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
            return a
        };
        _.q.remove = function (a) {
            this.Vg.removeItem(a)
        };
        _.q.ys = function () {
            return this.Vg.length
        };
        _.q.nx = function (a) {
            var b = 0,
                c = this.Vg,
                d = new _.Vb;
            d.next = function () {
                if (b >= c.length) throw Xb;
                var d;
                d = c.key(b++);
                if (a) return d;
                d = c.getItem(d);
                if (!(0, _.Ra)(d)) throw "Storage mechanism: Invalid value was encountered";
                return d
            };
            return d
        };
        _.q.clear = function () {
            this.Vg.clear()
        };
        _.q.key = function (a) {
            return this.Vg.key(a)
        };
        (0, _.db)(_.uf, _.tf);
        var Ef, Ff, xf = {}, wf = [],
            yf = !1,
            lba = _.kf;
        (0, _.za)("google.initHistory", function () {
                Ff = window.google.kEI;
                Ef = new _.uf;
                var a;
                n: {
                    try {
                        var b = Ef.get("web-mh" + Ff);
                        if (b) {
                            a = lba(b);
                            break n
                        }
                    } catch (c) {}
                    a = null
                }
                a && (window.google.pmc = a)
            }, void 0);
        (0, _.za)("google.med", _.Bf, void 0);
        (0, _.za)("google.register", _.vf, void 0);
        (0, _.za)("google.raas", _.Af, void 0);
        var yaa;
        var Jf;
        var Hf;
        var Kf;
        Hf = [];
        Jf = [];
        yaa = window.google.j && window.google.j.en;
        (0, _.Af)("bbd", {
            init: function () {
                _.If = {
                    persisted: !1
                };
                window.google._bfr = !1
            },
            history: function (a) {
                a && (_.If = a);
                _.If.persisted ? Gf() : _.If.persisted || (_.If.persisted = !0, (0, _.Df)("bbd", _.If), window.addEventListener && (window.addEventListener("pageshow", xaa, !1), Kf = !1))
            },
            dispose: function () {
                Hf.length = 0;
                Jf.length = 0
            }
        });
        _.hj = _.Mf;
        var Of = {};
        (0, _.za)("google.msg.listen", _.Nf, void 0);
        (0, _.za)("google.msg.unlisten", _.Pf, void 0);
        (0, _.za)("google.msg.send", _.Qf, void 0);
        var ij;
        ij = !! _.Ca.DOMTokenList;
        _.jj = ij ? function (a) {
            return a.classList
        } : function (a) {
            a = a.className;
            return (0, _.Ra)(a) && a.match(/\S+/g) || []
        };
        _.Vf = ij ? function (a, b) {
            return a.classList.contains(b)
        } : function (a, b) {
            return (0, _.Fb)((0, _.jj)(a), b)
        };
        _.Sf = ij ? function (a, b) {
            a.classList.add(b)
        } : function (a, b) {
            (0, _.Vf)(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
        };
        _.kj = ij ? function (a, b) {
            (0, _.Zb)(b, function (b) {
                (0, _.Sf)(a, b)
            })
        } : function (a, b) {
            var c = {};
            (0, _.Zb)((0, _.jj)(a), function (a) {
                c[a] = !0
            });
            (0, _.Zb)(b, function (a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c) a.className += 0 < a.className.length ? " " + d : d
        };
        _.Tf = ij ? function (a, b) {
            a.classList.remove(b)
        } : function (a, b) {
            (0, _.Vf)(a, b) && (a.className = (0, _.Pc)((0, _.jj)(a), function (a) {
                return a != b
            }).join(" "))
        };
        _.lj = ij ? function (a, b) {
            (0, _.Zb)(b, function (b) {
                (0, _.Tf)(a, b)
            })
        } : function (a, b) {
            a.className = (0, _.Pc)((0, _.jj)(a), function (a) {
                return !(0, _.Fb)(b, a)
            }).join(" ")
        };
        var Zf, Baa = (0, _.Xf)().protocol + "//" + (0, _.Xf)().host;
        (0, _.za)("google.nav.getLocation", _.bg, void 0);
        (0, _.za)("google.nav.go", _.Yf, void 0);
        (0, _.za)("google.nav.search", _.$f, void 0);
        var Eaa = (0, _.gg)(function (a) {
            return RegExp(a)
        });
        (0, _.za)("google.style.getComputedStyle", _.jg, void 0);
        (0, _.za)("google.style.getHeight", _.kg, void 0);
        (0, _.za)("google.style.getWidth", _.lg, void 0);
        (0, _.za)("google.style.getPageOffsetTop", _.se, void 0);
        (0, _.za)("google.style.getPageOffsetLeft", _.re, void 0);
        (0, _.za)("google.style.getPageOffsetStart", _.mg, void 0);
        (0, _.za)("google.style.hasClass", _.Vf, void 0);
        (0, _.za)("google.style.isRtl", _.ig, void 0);
        (0, _.za)("google.style.addClass", _.Sf, void 0);
        (0, _.za)("google.style.removeClass", _.Tf, void 0);
        _.ng.prototype.Md = !1;
        _.ng.prototype.isDisposed = (0, _.ma)("Md");
        _.ng.prototype.dispose = function () {
            this.Md || (this.Md = !0, this.La())
        };
        _.ng.prototype.La = function () {
            if (this.Za)
                for (; this.Za.length;) this.Za.shift()()
        };
        var nj;
        _.mj = (0, _.tg)(!1);
        nj = (0, _.tg)(!0);
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
        _.q.Wz = !1;
        _.q.SE = !1;
        _.q.RJ = !1;
        _.q.GU = !1;
        _.q.KM = !1;
        _.q.GK = 0;
        _.q.cancel = function (a) {
            if (this.Wz) this.B instanceof _.Bg && this.B.cancel();
            else {
                if (this.A) {
                    var b = this.A;
                    delete this.A;
                    a ? b.cancel(a) : (b.GK--, 0 >= b.GK && b.cancel())
                }
                this.J ? this.J.call(this.H, this) : this.KM = !0;
                this.Wz || (a = new Jg(this), (0, _.Eg)(this), (0, _.Cg)(this, !1, a))
            }
        };
        _.q.yO = function (a, b) {
            this.RJ = !1;
            (0, _.Cg)(this, a, b)
        };
        _.q.Un = function (a) {
            (0, _.Eg)(this);
            (0, _.Cg)(this, !0, a)
        };
        (0, _.db)(Fg, _.fb);
        Fg.prototype.message = "Deferred has already fired";
        Fg.prototype.name = "AlreadyCalledError";
        (0, _.db)(Jg, _.fb);
        Jg.prototype.message = "Deferred was canceled";
        Jg.prototype.name = "CanceledError";
        (0, _.db)(_.x, _.ng);
        (0, _.Ia)(_.x);
        _.q = _.x.prototype;
        _.q.PJ = !1;
        _.q.eV = !1;
        _.q.FL = null;
        _.q.pG = 0;
        _.q.QQ = !1;
        _.q.SS = !1;
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
        _.q.IH = function (a, b, c) {
            b || (this.pG = 0);
            this.D = b = Iaa(this, a);
            this.PJ ? this.B = a : this.B = (0, _.Mb)(b);
            Kg(this);
            0 != b.length && (this.M.push.apply(this.M, b), a = (0, _.$a)(this.FL.H, this.FL, (0, _.Mb)(b), this.zt, null, (0, _.$a)(this.VX, this, this.B, b), (0, _.$a)(this.WX, this), !! c), (c = 5E3 * Math.pow(this.pG, 2)) ? window.setTimeout(a, c) : a())
        };
        _.q.load = function (a, b) {
            return Mg(this, [a], b)[a]
        };
        _.q.VX = function (a, b, c) {
            this.pG++;
            this.B = a;
            (0, _.Zb)(b, (0, _.ab)(_.Ib, this.M), this);
            401 == c ? (Tg(this, 0), this.A.length = 0) : 410 == c ? (Xg(this, 3), Ug(this)) : 3 <= this.pG ? (Xg(this, 1), Ug(this)) : this.IH(this.B, !0, 8001 == c)
        };
        _.q.WX = function () {
            Xg(this, 2);
            Ug(this)
        };
        _.q.aI = function (a, b) {
            (0, _.Oa)(a) || (a = [a]);
            for (var c = 0; c < a.length; c++) {
                var d = a[c],
                    e = b,
                    f = this.T;
                f[d] || (f[d] = []);
                f[d].push(e)
            }
        };
        _.q.La = function () {
            _.x.ja.La.call(this);
            (0, _.sg)((0, _.bc)(this.zt), this.Q);
            this.T = this.A = this.J = this.B = this.D = this.zt = null
        };
        Yg.prototype.H = function (a) {
            if (null === a) window.google.ml(Error("LM null"), !1);
            else {
                a = Kaa(this, a);
                var b = window.document.createElement("script");
                b.src = a;
                (0, _.Me)(b)
            }
        };
        var $g = !1;
        (0, _.za)("google.load", _.ah, void 0);
        (0, _.za)("google.loadAll", function (a) {
            var b = Zg();
            Mg(b, a, void 0)
        }, void 0);
        var ch = !0,
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
        _.q.nA = !1;
        _.q.bS = !0;
        _.q.stopPropagation = function () {
            this.nA = !0
        };
        _.q.preventDefault = function () {
            this.bS = !1
        };
        ph[" "] = _.Ga;
        (0, _.db)(_.qh, _.nh);
        var Naa = [1, 4, 2];
        _.q = _.qh.prototype;
        _.q.target = null;
        _.q.relatedTarget = null;
        _.q.oP = 0;
        _.q.pP = 0;
        _.q.clientX = 0;
        _.q.clientY = 0;
        _.q.screenX = 0;
        _.q.screenY = 0;
        _.q.button = 0;
        _.q.keyCode = 0;
        _.q.charCode = 0;
        _.q.ctrlKey = !1;
        _.q.altKey = !1;
        _.q.shiftKey = !1;
        _.q.metaKey = !1;
        _.q.UC = !1;
        _.q.tl = null;
        _.q.init = function (a, b) {
            var c = this.type = a.type;
            _.nh.call(this, c);
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            var d = a.relatedTarget;
            if (d) {
                if (_.Wd) {
                    var e;
                    n: {
                        try {
                            ph(d.nodeName);
                            e = !0;
                            break n
                        } catch (f) {}
                        e = !1
                    }
                    e || (d = null)
                }
            } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
            this.relatedTarget = d;
            this.oP = _.jd || void 0 !== a.offsetX ? a.offsetX : a.layerX;
            this.pP = _.jd || void 0 !== a.offsetY ? a.offsetY : a.layerY;
            this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 !== a.clientY ? a.clientY :
                a.pageY;
            this.screenX = a.screenX || 0;
            this.screenY = a.screenY || 0;
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.UC = _.ie ? a.metaKey : a.ctrlKey;
            this.state = a.state;
            this.tl = a;
            a.defaultPrevented && this.preventDefault();
            delete this.nA
        };
        _.q.stopPropagation = function () {
            _.qh.ja.stopPropagation.call(this);
            this.tl.stopPropagation ? this.tl.stopPropagation() : this.tl.cancelBubble = !0
        };
        _.q.preventDefault = function () {
            _.qh.ja.preventDefault.call(this);
            var a = this.tl;
            if (a.preventDefault) a.preventDefault();
            else if (a.returnValue = !1, mba) try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
            } catch (b) {}
        };
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
        _.Oh.prototype[uh] = !0;
        _.q = _.Oh.prototype;
        _.q.VH = null;
        _.q.wM = (0, _.la)("VH");
        _.q.addEventListener = function (a, b, c, d) {
            (0, _.wh)(this, a, b, c, d)
        };
        _.q.removeEventListener = function (a, b, c, d) {
            (0, _.Fh)(this, a, b, c, d)
        };
        _.q.dispatchEvent = function (a) {
            var b, c = this.VH;
            if (c) {
                b = [];
                for (var d = 1; c; c = c.VH) b.push(c), ++d
            }
            c = this.mr;
            d = a.type || a;
            if ((0, _.Ra)(a)) a = new _.nh(a, c);
            else if (a instanceof _.nh) a.target = a.target || c;
            else {
                var e = a;
                a = new _.nh(d, c);
                (0, _.lc)(a, e)
            }
            var e = !0,
                f;
            if (b)
                for (var g = b.length - 1; !a.nA && 0 <= g; g--) f = a.currentTarget = b[g], e = Kh(f, d, !0, a) && e;
            a.nA || (f = a.currentTarget = c, e = Kh(f, d, !0, a) && e, a.nA || (e = Kh(f, d, !1, a) && e));
            if (b)
                for (g = 0; !a.nA && g < b.length; g++) f = a.currentTarget = b[g], e = Kh(f, d, !1, a) && e;
            return e
        };
        _.q.La = function () {
            _.Oh.ja.La.call(this);
            this.removeAllListeners();
            this.VH = null
        };
        _.q.listen = function (a, b, c, d) {
            return Ph(this, a, b, !1, c, d)
        };
        _.q.MC = function (a, b, c, d) {
            return Ph(this, a, b, !0, c, d)
        };
        _.q.unlisten = function (a, b, c, d) {
            if (!(a in this.L)) return !1;
            a = this.L[a];
            b = (0, _.Qh)(a, b, c, d);
            return -1 < b ? (a[b].Kx = !0, (0, _.Jb)(a, b)) : !1
        };
        _.q.removeAllListeners = function (a) {
            var b = 0,
                c;
            for (c in this.L)
                if (!a || c == a) {
                    for (var d = this.L[c], e = 0; e < d.length; e++)++b, d[e].Kx = !0;
                    d.length = 0
                }
            return b
        };
        (0, _.db)(_.Rh, _.Oh);
        _.q = _.Rh.prototype;
        _.q.enabled = !1;
        _.q.Cx = null;
        _.q.DW = function () {
            if (this.enabled) {
                var a = (0, _.Ve)() - this.H;
                0 < a && a < 0.8 * this.B ? this.Cx = this.A.setTimeout(this.D, this.B - a) : (this.Cx && (this.A.clearTimeout(this.Cx), this.Cx = null), this.dispatchEvent("tick"), this.enabled && (this.Cx = this.A.setTimeout(this.D, this.B), this.H = (0, _.Ve)()))
            }
        };
        _.q.start = function () {
            this.enabled = !0;
            this.Cx || (this.Cx = this.A.setTimeout(this.D, this.B), this.H = (0, _.Ve)())
        };
        _.q.stop = function () {
            this.enabled = !1;
            this.Cx && (this.A.clearTimeout(this.Cx), this.Cx = null)
        };
        _.q.La = function () {
            _.Rh.ja.La.call(this);
            this.stop();
            delete this.A
        };
        var oj, pj, qj, rj;
        rj = qj = pj = oj = !1;
        var sj = Bc();
        sj && (-1 != sj.indexOf("Firefox") || -1 != sj.indexOf("Camino") || (-1 != sj.indexOf("iPhone") || -1 != sj.indexOf("iPod") ? oj = !0 : -1 != sj.indexOf("iPad") ? pj = !0 : -1 != sj.indexOf("Android") ? qj = !0 : -1 != sj.indexOf("Chrome") || -1 != sj.indexOf("Safari") && (rj = !0)));
        _.tj = oj;
        _.uj = pj;
        _.vj = qj;
        _.ci = rj;
        (0, _.db)(Uh, _.Oh);
        var Vh = [],
            Yh = new _.Oh,
            Raa = /[~.,?&-]/g;
        _.q = Uh.prototype;
        _.q.getTick = function (a) {
            return "start" == a ? this.Q : this.T[a]
        };
        _.q.I = (0, _.ma)("V");
        _.q.tick = function (a, b) {
            Zh(this);
            b = b || {};
            a in this.T && this.J.add(a);
            var c = b.time || (0, _.Ve)();
            !b.vV && (!b.L3 && c > this.ca) && (this.ca = c);
            for (var d = c - this.Q, e = this.H.length; 0 < e && this.H[e - 1][1] > d;) e--;
            (0, _.Ob)(this.H, e, 0, [a, d, b.vV]);
            this.T[a] = c
        };
        _.q.timers = (0, _.ma)("H");
        _.q.Uz = function (a, b) {
            var c = new Xh("error", this);
            c.error = a;
            b && (c.A = b);
            Yh.dispatchEvent(c)
        };
        _.q.action = function (a) {
            Zh(this);
            var b = [],
                c = null,
                d = null,
                e = null,
                f = null;
            Vaa(a, function (a) {
                var h;
                !a.__oi && a.getAttribute && (a.__oi = a.getAttribute("oi"));
                if (h = a.__oi) b.unshift(h), c || (c = a.getAttribute("jsinstance"));
                e || d && "1" != d || (e = a.getAttribute("ved"));
                d || (d = a.getAttribute("jstrack"));
                f || (f = a.getAttribute("jstrackrate"))
            });
            d && (this.B.ct = this.V, 0 < b.length && Uaa(this, "oi", b.join(".")), c && (c = "*" == c.charAt(0) ? (0, window.parseInt)(c.substr(1), 10) : (0, window.parseInt)(c, 10), this.B.cd = c), "1" != d && (this.B.ei = d), e && (this.B.ved = e))
        };
        _.q.Un = function (a, b, c, d) {
            Taa(this, b, c);
            var e = this;
            return function () {
                var c = a.apply(this, arguments);
                Wh(e, b, d);
                return c
            }
        };
        _.q.event = (0, _.ma)("$");
        _.q.value = function (a) {
            var b = this.aF;
            return b ? b[a] : void 0
        };
        (0, _.db)(Xh, _.nh);
        $h.prototype.Q = function (a) {
            if ((0, _.Oa)(a)) this.A = (0, _.Mb)(a), ai(this);
            else {
                var b = a.action,
                    c = b.split(".")[0],
                    d = this.H[c],
                    e;
                this.M ? e = this.M(a) : d ? d.accept(a) && (e = d.handle) : e = this.B[b];
                e ? (c = this.T(a), e(c), Wh(c, "main-actionflow-branch")) : (e = Th(a.event), a.event = e, this.A.push(a), d) || ((a = this.V[c], a) ? a.NU || (a.S3(this, c), a.NU = !0) : !this.D || c in this.J || (this.J[c] = !0, this.D(this, c)))
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
        ni.prototype.D = null;
        ni.prototype.B = function () {
            var a;
            (a = this.D) || (a = {}, ri(this) && (a[0] = !0, a[1] = !0), a = this.D = a);
            return a
        };
        (0, _.db)(oi, ni);
        oi.prototype.A = function () {
            return this.J()
        };
        oi.prototype.B = function () {
            return this.H()
        };
        _.pi.B = !1;
        _.pi.D = function () {
            return _.pi.A.B()
        };
        _.pi.Cf = function (a, b) {
            _.pi.eb(new oi(a, b))
        };
        _.pi.eb = function (a) {
            _.pi.A = a
        };
        (0, _.db)(qi, ni);
        qi.prototype.A = function () {
            var a = ri(this);
            return a ? new window.ActiveXObject(a) : new window.XMLHttpRequest
        };
        _.pi.eb(new qi);
        (0, _.za)("google.exportSymbol", _.cb, void 0);
        (0, _.za)("google.xhr", _.pi, void 0);
        (0, _.za)("google.jsa.adc", function (a, b, c) {
            hi[a] = hi[a] || [];
            mi(a, b) || hi[a].push({
                Un: b,
                A0: !! c
            })
        }, void 0);
        (0, _.za)("google.jsa.rdc", function (a, b) {
            mi(a, b) && (0, _.Ib)(hi[a], mi(a, b))
        }, void 0);
        (0, _.za)("google.jsa.ia", function (a, b, c, d, e) {
            return (a = gi[a]) ? (!c && b && (c = (0, _.mh)(b)), a(b, c, d, e)) : !1
        }, void 0);
        (0, _.za)("google.fx.animate", _.Te, void 0);
        (0, _.za)("google.Toolbelt.parseTbs", _.si, void 0);
        (0, _.Af)("anim", {
            dispose: function () {
                window.clearInterval(Xe);
                Xe = 0;
                We = []
            }
        });
        (0, _.Af)("nos", {
            init: function () {
                (0, _.ji)("nos", {
                    d: hba
                })
            }
        });
        (0, _.Af)("jsa", {
            init: function () {
                Yaa(ii, Zaa);
                ii.D = bba;
                window.google.jsad && window.google.jsad((0, _.$a)(ii.Q, ii));
                (0, _.ji)("jsa", {
                    go: dba,
                    log: eba,
                    popup: fba,
                    select: gba,
                    "true": nj
                });
                (0, _.ji)("lr", {
                    smt: function (a, b) {
                        var c = Boolean(Number(b.se)),
                            d = (0, _.xb)(b.fs) || 200,
                            e = b.tag || "",
                            f = (0, _.xb)(b.ss) || 200,
                            g = b.e;
                        b.h ? (0, _.Ce)(a, !1) : g && window.google.mobile_live_result.expand(a);
                        (0, _.eh)(a, c, d, e, f)
                    },
                    ddu: function (a, b) {
                        (0, _.bh)(a, b.tag, (0, _.xb)(b.idx))
                    },
                    wobt: function (a, b) {
                        window.wob.toggle(b.url)
                    }
                });
                (0, _.ji)("spl", {
                    cc: cba
                });
                (0, _.ji)("ppl", {
                    pv: function (a, b) {
                        var c = b.se,
                            d = b.ee,
                            e = a.firstChild,
                            f = e.lastChild,
                            g = (0, _.lg)(e) / 2;
                        e.style[c] = -g + 2 + "px";
                        f.style[d] = g + 1 + "px"
                    }
                })
            },
            dispose: function () {
                for (var a in ki)(0, _.li)(a, ki[a]);
                for (var b in hi) {
                    a = hi[b];
                    for (var c = a.length - 1; 0 <= c; --c) a[c].A0 || (0, _.Jb)(a, c)
                }
                gi = {}
            }
        });
        _.vi.prototype.initialize = function () {
            this.A = [];
            this.B = ""
        };
        var Fi;
        Fi = {};
        _.Bi = "& &amp; < &lt; > &gt; \" &quot; ' &#39; { &#123;".split(" ");
        (0, _.za)("google.util.arrayIndexOf", _.Gb, void 0);
        (0, _.za)("google.util.logVisibilityChange", _.Hi, void 0);
        (0, _.za)("google.util.togglePopup", function (a) {
            var b = (0, _.v)(a);
            if (null !== b)
                if ((0, _.De)(b)) Ei(b);
                else {
                    (0, _.Ce)(b, !0);
                    var c = !1;
                    Fi[a] = function () {
                        c ? Ei(b) : c = !0
                    };
                    (0, _.$e)(window.document.body, "click", Fi[a])
                }
        }, void 0);
        window.google.timers && window.google.timers.load.t && (window.google.timers.load.t.xjses = window.google.time());
        var Cj;
        _.Aj = [];
        _.Bj = "/";
        Cj = [];
        (0, _.za)("google.History.initialize", function (a) {
            _.Bj = a;
            _.Ki = null;
            if (_.Ji = (0, _.v)("hcache")) {
                (0, _.Ii)();
                for (a = 0; a < _.Aj.length; ++a) _.Ki && (_.Ki[_.Bj] && _.Ki[_.Bj][a]) && _.Aj[a].call(null, _.Ki[_.Bj][a]);
                a = 0;
                for (var b; b = Cj[a++];) b();
                Cj = []
            }
        }, void 0);

        _._ModuleManager_initialize = (0, _.$a)(_.x.prototype.H0, _.x.G());
        (0, _._ModuleManager_initialize)("sy0/bct:0/sy1/sy2/sy4/sy3:2,3,4/cr:2,3,4,5/crp:4/sy5/cdos:8/sy7/sy6:a/c:a,b/cb/sy9/sy8:e/csi:e,f/sy10/dbm:h/el/gf/sy11/hsm:l/sy12/hv:n/riu/sy13/sy15/sy14:r/sy18/sy16:2,a,q,s,t/sy19:l,u/sy21:u/sy25/sy26:u,v,x/sy23:u/sy24:u,w,z/sy27:u,v,w/sy28:11,l,u,v/sy20:10,11,12,3,4,5,f,l,q,s,u,v,w,y,z/j:10,11,12,13,2,3,4,5,a,e,f,l,q,r,s,t,u,v,w,x,y,z/sy29:u,v,y,z/jp:15,2,a,l,q,r,s,t,u,v,x,y,z/kx/sy30/lc:18,a/sy31/hov:1a/mb:a/o3i/oh/sy32/sy33/sy34:1f,1g/aaq:1f,1g,1h/sy35:x/abd:1j,a,e,x/sy36/sy37/sy38/sy39:1n/sy41/sy42:1p/sy43:1q/sy46:1h,1l,1n,1o/sy44:1h,1l,1n,1o,1q,1r,1s/sy45:1h,1l,1n,1o,1s/sy47:1h,1l,1n,1o,1q,1s,1t,1u/sy48:1h,1l,1s,1t,1u,1v/sy49:1h,1l,1s,1t,1v/sy40:1m,1n,1o,1q,1w,1x/adct:1f,1g,1h,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y/adch/adp/ca:a/adnsp/ddad/fa/adso:h/sy50/sy52:1j,27/lare:1j,27,28,x/sy54:q/sy56/sy55:2a,2b,a,q/sy53:18,1n,27,2c,q/larh:18,1n,27,2a,2b,2c,2d,a,q/sy57:a,x/sy58:2f/adsm:2f,2g,a,x/sy59/sy60:2i/sy62/sy61:2i,2j,2k/sy64/sy65:2i,2m/sy63:2i,2l,2m,2n/sy72/sy67:1a,2p/sy68/sy69:2r/sy70/sy71:2s,2t/sy74:1q,1r/sy75:1f,1n,2r/sy73:1q,1r,2v,2w/sy66:1f,1h,1n,1q,1r,2p,2q,2u,2w,2x/sy76:1q,1r,2w,2x/sy77:2z/pla:1a,1f,1g,1h,1l,1n,1o,1p,1q,1r,1s,1t,1u,1v,2i,2j,2k,2l,2m,2n,2o,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,2z,30/sy78:2b/sy79:1g,1h,1l,1o,2b,32/cu:1f,1g,1h,1l,1n,1o,2b,32,33,a/sy80/wta:35/wmh:e/sem:e/pih:n/sy81/sy82/sy83:1m,2r,2s,t/sy84:1p,2r,3b,3c/als:1f,1g,1j,1l,1m,1n,1o,1p,1q,2f,2r,2s,3a,3b,3c,3d,a,t,x/sy85/rmcl:3f/sy86:3f,q/rkab:3f,3h,q/sy87/sy88:2i,2l,2m,2n/sy89:3j/sy90:a/sy91:1h,1s,1t/sy92:1h,1u,2p,2q/llc:11,1a,1f,1g,1h,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y,2,2a,2b,2c,2i,2j,2k,2l,2m,2n,2o,2p,2q,2t,32,3f,3h,3j,3k,3l,3m,3n,3o,a,l,q,r,s,t,u,v,w/aspn/sy93:15,2f/async:15,2,2f,3r,a,l,q,r,s,t,u,v,x,y,z/lb:15,2,3,a,l,q,r,s,t,u,v,x,y,z/bgd/col:1f,1g,1h,1j,2b,32,r,x/d_kbn:r,s/dict/gol:1f/sy95/sy96:3z/zr:3z,40/sy97/sy98/sy99/sy100:12,43,44,q,s,u,v/esp:11,12,18,1f,1j,1n,2,2a,2b,2c,42,43,44,45,a,l,q,r,s,t,u,v,w,x/erh/sy101/sy102:2i,2l,3j,48/cfm:2i,2j,2k,2l,3j,48,49/vfm:2i,2j,2k,2l,3j,48,49/fu:1f,1g,1h,1l,1n,1o,2b,32,33,a/foot/sy103/spg:4e/sy104:2f/hw:2f,4g,a,x/ht:1m/hss/hkp/hfm/sy107/sy109:4m/sy108:4m/sy105:10,1j,2c,2i,3j,4m,4n,4o,a/sy106/sy110/boee:10,1f,1j,1n,1o,2,2a,2b,2c,2i,3j,3z,40,4m,4n,4o,4p,4q,4r,a,q,r,s,t,u,w,x,z/sy113:2i,48/sy111:1n,2j,2k,3,4t/sy112:1f,1p/irc:1f,1j,1m,1n,1o,1p,2,2i,2j,2k,2p,2r,2s,3,3b,3c,3d,4,48,4m,4q,4r,4t,4u,4v,5,a,l,t,x/sy114:4o/sy115:2i,2m,2n,3j,4m,4t,4x,a,l/sy116:4m,4o,4x,a/bb:2i,2m,2n,3j,48,4m,4o,4t,4x,4y,4z,a,l/ivf:4m,4o,4x,4z,a/prw:1f,1p,4v/jstr:10,1j,2,2a,2b,2c,2i,3j,4m,4n,4o,4p,a,q,r,s,t,u,w,x,z/str:10,1j,2,2a,2b,2c,2i,3j,4m,4n,4o,4p,a,q,r,s,t,u,w,x,z/ifl/itp:1j,2f,2i,2j,4g,a,l,x/sy117/an:57/kpvlbx:1n/knf:57/sy118:3f,l/kp:3f,5b,l/rk:1j,3,3f,x/lpt:1j,2i,48,4t,x/la/lr:2i,2j,2k,2l,2m,2n,2o,3k,x/dob/sy119/fy:1f,1g,1h,1l,1n,1o,1p,1q,1r,1s,1t,1u,1v,1x,5i/fob:2i,2j,2k,2l,2m,2n,3k/shlb:1m,1n,1p,2r,2s,3b,3c,3d,5i,l,t/cwsc:1n,2i,3j/cwuc/sy120/sc:5i,5o/sc3d:5o/sy121/sy122:5r/wobd:5r,5s/hp:1f,1g,1h,1l,1n,1o,2b,32,33/imap:3j,3l/lu:1j,27,28,x/pl/plcs:1j,27,28,x/sy124:1f,1p/sy123:1h,1l,1n,2r,2w,5z/lor:15,1f,1g,1h,1l,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,2,2f,2r,2w,3r,5z,60,a,l,q,r,s,t,u,v,x,y,z/mfd:2i,2j,2k,2l,2m,2n/m:18,1n,27,2a,2b,2c,2d,a,q/nvm:1n,2i,2j,2m,48/nqsb/mock/nmd/nws/ppl:1f,1p,5z,a/pi:4e,a/prs:a/sy125/sy126/psrpc:1a,1f,1g,1h,1l,1m,1n,1o,1p,1q,1r,1s,1u,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,2z,3b,3c,3d,3o,6c,6d,t/gnko:6d/sy127:2p,3a,x/sy128:1f,1h,1l/gksp:1f,1g,1h,1l,1n,1o,1p,1q,1r,1s,1t,1u,1v,1x,2f,2p,2r,2s,2t,2u,2w,3a,5z,60,6d,6g,6h,a,x/pgl:1j,5i,q,x/pis:1j,5i,x/psj:1f,1g,1h,1l,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,6c/pmp/ptbm:1f,1g,1h,1l,1n,1o,1p,1q,1r,1s,1t,2r,2v,2w/pswtr/pstt:1f,1g,1h,1l,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,6c/dvdu/ob/qi:8,q,x/spr/ctm:2i/gsac:5r/sy129/sy131/sy130:6w,6x/gsai:2i,2m,2n,3j,48,4m,4o,4t,4x,4y,5r,6w,6x,6y,a,l/csp/bds:3z,40,x/ntf:x/sy132/ho:1f,1j,2p,6x,73,x/sy133/srst:1j,2a,6d,75,q,x/cirosm:2i,2j,2k,2l,2m,2n,2o,3j,48/st/sfa:3z/sic/skp:1f,2i,2j,2k,2l,3b/exy:1n,4m,4n/sy134:4u/tnv:1n,2i,2j,2k,2l,2m,2n,2o,3,48,4t,4u,7d/tnt:2i,2j,2k,2l,2m,2n,2o,3j/sy135/tdu:1f,2i,2j,2k,2l,2m,2n,2o,5o,75,7g/tts:l/duf:7g/vt:1j,2f,a,x/pcc/p:10,11,12,13,2,3,4,43,44,45,5,a,e,f,l,q,r,s,t,u,v,w,x,y,z/rcs/r/rem:18,2f,a,x/ssb/sf/sy136/srl:35,3z,40,7s/tbt/sy137/tbpr:7v/tbui:2a,2b,2c,7v,a,q/ttbcdr:1f,1g,1h,1l,1n,1o,2b,2i,2j,2k,3,32,33,48,4t,4u,7d/vm:2/vac/sb:18,a,b/sb_dcsp:18,a,b/sb_he:a,b/sb_sri:18,a,b/sb_mas:a,b/sb_mob:a,b/sb_mobh:a,b/sb_mps:a,b/sb_omni:42,44,a,b/sb_tab:a,b/tr:1f,1g,1h,1l,1n,6h/wobnm:2i,2j,2k,2l,2m,2n,2o,48,4t,5r,5s/sy138:a/ppr:8d,a/sy139:6d/sbub:1a,1f,1g,1h,1n,1p,1q,1r,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,6d,8f/tbh/sy140/sy141:6w/sy142:0,6w,6y,8i,8j,a/dvl:0,6w,6x,6y,8i,8j,8k,a/tic/tiu:2i,2m,2n,3j,48,4m,4o,4t,4x,4y,4z,a,l/sy143:27,3j/vs:27,3j,8o/sy144/agsa:5r,8q,l/agsacm:1f,1g,1h,1l,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,3n/gsaiv:4m,4o,4x,4z,5r,a/gsapr:5r/gsarm:8q/sac:6d/epb:r,s/ccu/aur/idck/bihu:n/sy145/mpck:1f,1l,1m,1n,2r,2s,3c,8d,92,a,t/psb:6d/sdl:1a,1f,1g,1h,1l,1n,1o,1s,1u,2p,2q,3o,6d/prec:1f,1g,1h,1l,1n,1o,1p,1q,1r,1s,1t,1u,1v,1x,2f,2r,2v,2w,2x,2z,3,5z,60,6d,73,a,x/stsm:1f,1n,1p,1q,1r,2r,2v,2w,2x,2z,30,6d,8f/am:35,7s/stt:1f,1g,1h,1l,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,6c,6d/spop:1f,1m,1n,1p,2f,2p,2r,2s,3a,3b,3c,3d,6d,6g,92,a,t,x/kpt:2i,2j,2k,2l,2m,2n,2o,3f,5b,l/tlie:3m,a/tab:2i,a/vst/sy146/owt:2i,2j,2k,2l,2m,2n,2o,48,4t,9f/duf2:7g/nmns:2i,2j,2k,2l,2m,2n,2o/sy148/sy147:3j,9j/miuv:3j,4m,4o,4x,4z,9j,9k,a,l/ms:3j,4m,9j,9k,a/kpm:2i,2j,2k,2l,2m,2n,2o,3f,3j,5b,l/kptm:4r/mlr/wobf:5r,5s/wob:3j,5r,5s/df:0,6w,6x,6y,8i,8j,8k,a/mld:27,3j,8i,8o,9j,a,l/mgq:0,8i/mbhp:1j,x/mfh:3j/mbje/mbpe:43/mbsf:a/mhsb:r,s/msbb:6w,8j,r,s/mbsk/mbsb/mad:2f,2g,a,x/pmsrpc/owm:3j,9f");

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var lk = function (a) {
            this.api = a;
            this.ll = a.c;
            this.Wa = a.e;
            this.ca = a.f;
            this.B = a.g;
            this.A = a.h;
            this.J = a.i;
            this.D = a.j;
            this.dd = a.k;
            this.L = a.l;
            this.M = a.n;
            this.Q = a.r;
            this.V = a.s;
            this.$ = a.t;
            this.H = a.u;
            this.Gb = a.v;
            this.AM = a.x;
            this.T = a.y;
            this.Ma = a.z;
            this.Da = a.aa;
            this.va = a.ab;
            this.Za = a.ac
        };
        _.mk = function (a, b) {
            return b ? new lk(b.api) : null
        };
        _.nk = function (a, b, c) {
            return (a = a.L(b, c)) ? new lk(a) : null
        };
        _.ok = function (a) {
            switch (a) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                return !0;
            default:
                return !1
            }
        };
        (0, _.Vg)(_.x.G(), "sy7");
        _.y = _.y || {};
        (0, _.Sg)(_.x.G(), "sy7");
        (0, _.Wg)(_.x.G(), "sy7");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        (0, _.Vg)(_.x.G(), "sy6");
        (0, _.Sg)(_.x.G(), "sy6");
        (0, _.Wg)(_.x.G(), "sy6");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var xba = function (a, b, c, d, e, f) {
            function g(a) {
                a && (a.send(null), n.push(a))
            }

            function h(a, c) {
                var d = [0, !1];
                return function () {
                    if (1 != a.readyState) {
                        try {
                            if (4 == a.readyState && 0 == a.status) {
                                f.handleError(1, 21, l, null, c);
                                k(a);
                                return
                            }
                        } catch (e) {
                            f.handleError(1, 21, l, null, c);
                            k(a);
                            return
                        }(3 == a.readyState || 4 == a.readyState) && 200 == a.status && 0 > (a.getResponseHeader("Content-Type") || "").indexOf("application/json") ? (f.handleError(1, 12, l, null, {
                            response: a.responseText,
                            url: c
                        }), k(a)) : 3 == a.readyState && b ? d = f.HR(a.responseText, d[0],
                            l, c) : 4 == a.readyState && (200 == a.status ? d = f.HR(a.responseText, d[0], l, c, !0) : 400 <= a.status && 500 > a.status ? f.handleError(1, 0, l, null, c) : 500 <= a.status && 600 > a.status && f.handleError(1, 1, l, null, c), d[1] && k(a))
                    }
                }
            }

            function k(a) {
                for (var b = 0, c; c = n[b]; ++b)
                    if (a == c) {
                        n.splice(b, 1);
                        break
                    }
                for (; n.length < d && p.length;) g(p.shift());
                a.A && a.A()
            }
            var l = f.Sf(a ? 5 : b ? 1 : 2),
                n = [],
                p = [];
            if ("number" != typeof d || 1 > d) d = 5;
            return {
                open: function () {
                    var b = (0, _.pi)();
                    return a ? !! b && "withCredentials" in b : !! b
                },
                dd: function (b, k) {
                    var l = (0, _.pi)();
                    if (l)
                        if (l.open("GET",
                            b), a && (l.withCredentials = !0), l.A = k, l.onreadystatechange = h(l, b), n.length < d) g(l);
                        else if (c) {
                        for (; n.length;) {
                            var r = n.shift();
                            r.onreadystatechange = (0, _.ka)();
                            r.abort();
                            r.A && r.A()
                        }
                        g(l);
                        e && f.VQ(d)
                    } else p.push(l)
                },
                getInfo: function () {
                    return l
                },
                xE: function () {
                    return b
                },
                EI: function () {
                    return c && n.length >= d
                },
                close: function () {
                    p = [];
                    for (var a = 0; a < n.length; ++a) {
                        var b = n[a];
                        b && (b.onreadystatechange = (0, _.ka)());
                        b && (0 != b.readyState && 4 != b.readyState) && b.abort();
                        b.A && b.A()
                    }
                    n = []
                }
            }
        };
        var yba = function (a, b, c, d, e) {
            function f() {
                return b && p.length >= c
            }

            function g(a) {
                var b = t[a];
                if (b) {
                    delete t[a];
                    for (var c = 0; c < p.length; ++c)
                        if (p[c] == a) {
                            p.splice(c, 1);
                            break
                        }
                    window.setTimeout(function () {
                        try {
                            (0, _.yd)(b), b.src = "about:blank"
                        } catch (a) {}
                    }, 0);
                    m[a] && (m[a](), delete m[a])
                }
            }

            function h(a, b) {
                _.sc.Hc ? b.onreadystatechange = function () {
                    var c = b.readyState;
                    "loaded" != c && "complete" != c || g(a)
                } : b.onload = function () {
                    g(a)
                }
            }
            var k = "tljp" + (0, _.Ve)() + a,
                l = e.Sf(4),
                n = 0,
                p = [],
                m = {}, t = {};
            return {
                open: (0, _.ua)(!0),
                dd: function (a, b) {
                    var l = window.document.createElement("script"),
                        G = k + n++;
                    l.src = a + "&wrapid=" + G;
                    t[G] = l;
                    if (f()) {
                        for (; p.length;) g(p[0]);
                        d && e.VQ(c)
                    }
                    p.push(G);
                    b && (m[G] = b);
                    h(G, l);
                    (0, _.Me)(l)
                },
                kF: function (a, b, c) {
                    t[a] && (e.VE(b), c && m[a] && (m[a](), delete m[a]))
                },
                getName: function () {
                    return k
                },
                getInfo: function () {
                    return l
                },
                xE: (0, _.ua)(!1),
                EI: f,
                close: function () {
                    for (var a in t) g(a), m[a] && (m[a](), delete m[a])
                }
            }
        };
        var zba = function (a, b, c, d) {
            function e(a, b, c) {
                function e() {
                    n: {
                        var b, f;
                        try {
                            b = a.location.href, f = 7 >= r || "complete" == a.document.readyState
                        } catch (h) {
                            d.handleError(1, 13, l, h, void 0);
                            break n
                        }
                        try {
                            n.test(b) || (a.google && a.google.loc || !(f && 0 > b.indexOf(p[c]))) || d.handleError(1, 19, l, void 0, void 0)
                        } catch (m) {
                            d.handleError(1, 7, l, m, void 0)
                        }
                        w == g.nJ && a && (a.src = "about:blank")
                    }
                }
                b = window.document.getElementsByName(b);
                for (var h = 0, m; m = b[h++];) "IFRAME" == m.nodeName && ((0, _.$e)(m, "load", e), f(m));
                if (w == g.cJ && !p[c]) try {
                    a.document.title =
                        window.document.title
                } catch (k) {}
            }

            function f(a) {
                if (w == g.nJ && 8 <= r) {
                    var b = window.document.createElement("div");
                    b.style.display = "none";
                    (0, _.vd)(b, a)
                }
            }
            var g = {
                nJ: 0,
                cJ: 1
            }, h = b || "tlif" + (0, _.Ve)() + a,
                k = "^" + h + "[0-9]+$",
                l = d.Sf(3),
                n = /(\/blank\.html|about:blank)$/,
                p = [],
                m = {}, t = [],
                s = 0,
                r = 0,
                w, G = window.document;
            if ("number" != typeof c || 1 > c) c = 1;
            _.sc.Hc && (r = window.document.documentMode ? window.document.documentMode : (0, window.parseInt)(_.vc.split(".")[0], 10));
            w = r && 7 >= r ? g.cJ : g.nJ;
            return {
                open: function () {
                    if (_.sc.Hc && !(0, _.yc)("10")) try {
                        var a =
                            window.google.ihtmlfile = new window.ActiveXObject("htmlfile");
                        a.open();
                        a.close();
                        a.parentWindow.google = window.google;
                        (0, _.$e)(window, "unload", function () {
                            window.google.ihtmlfile && (window.google.ihtmlfile.parentWindow.google = null, window.google.ihtmlfile = null)
                        });
                        G = a
                    } catch (b) {
                        G = window.document, d.handleError(1, 2, l, b, void 0)
                    }
                    for (a = 0; a < c; ++a) {
                        var f = h + a,
                            g;
                        if (!t[a]) try {
                            var m = G.createElement("IFRAME");
                            m.name = f;
                            m.style.display = "none";
                            m.src = "about:blank";
                            var r = G.createElement("DIV");
                            r.id = f;
                            r.appendChild(m);
                            G.body.appendChild(r);
                            g = t[a] = m.contentWindow
                        } catch (k) {
                            return d.handleError(1, 5, l, k, void 0), !1
                        }
                        if (!g) return !1;
                        e(g, f, a)
                    }
                    return !0
                },
                dd: function (a, b) {
                    s = (s + 1) % c;
                    var d = h + s;
                    a += "&wrapid=" + (0, window.encodeURIComponent)(d);
                    var e = t[s].location;
                    w == g.cJ ? e.href = a : e.replace(a);
                    b && (m[d] = b);
                    p[s] = a
                },
                kF: function (a, b, c) {
                    a && a.match(k) && (d.VE(b), c && m[a] && (m[a](), delete m[a]))
                },
                getName: function () {
                    return h
                },
                getInfo: function () {
                    return l
                },
                xE: (0, _.ua)(!0),
                close: function () {
                    for (var a = 0; a < c; ++a) {
                        var b = h + a;
                        (0, _.yd)(G.getElementById(b));
                        m[b] && (m[b](),
                            delete m[b])
                    }
                }
            }
        };
        var Aba = function (a) {
            function b() {
                l.reset();
                n.reset();
                for (var a = 0, b = 0, c = 0, d = 0; d < h.length; ++d) {
                    var e = g[h[d]],
                        f = e.Ft || 0,
                        k = e.wu,
                        e = e.Ct;
                    0 < f && (l.Ft += f, a++);
                    0 < k && (l.wu += k, b++);
                    0 < e && (l.Ct += e, c++);
                    n.Ft = Math.max(f, n.Ft);
                    n.wu = Math.max(k, n.wu);
                    n.Ct = Math.max(e, n.Ct)
                }
                1 < a && (l.Ft = (l.Ft - n.Ft) / (a - 1));
                1 < b && (l.wu = (l.wu - n.wu) / (b - 1));
                1 < c && (l.Ct = (l.Ct - n.Ct) / (c - 1))
            }

            function c() {
                var a = {
                    Ft: null,
                    wu: 0,
                    Ct: 0,
                    reset: function () {
                        a.Ft = a.wu = a.Ct = 0
                    }
                };
                return a
            }

            function d(a, b, d, e) {
                var r = g[a];
                if (!r) {
                    var n = r = c(),
                        l = h[k];
                    l && delete g[l];
                    g[a] =
                        n;
                    h[k] = a;
                    k = (k + 1) % f
                }
                null != b && null == r.Ft && (r.Ft = b);
                null != d && (r.wu = d);
                null != e && (r.Ct += e)
            }

            function e(a, b) {
                for (var c = 0, d; c < a.length; ++c)
                    if (d = b[c], 0 < d && a[c] > d) return !0;
                return !1
            }
            var f = a || 10,
                g = {}, h = [],
                k = 0,
                l = c(),
                n = c();
            a = {
                Q1: function (a, b) {
                    d(a, b, null, null)
                },
                R1: function (a, b) {
                    d(a, null, b, null)
                },
                L1: function (a, b) {
                    d(a, null, null, b)
                },
                ZU: function (a, c, d) {
                    b();
                    var g = [l.Ft, l.wu, l.Ct],
                        r = [n.Ft, n.wu, n.Ct];
                    if (a = a.BK(c, d))
                        if (c = h.length == f && e(g, a[0]), e(r, a[1]) || c) return g.concat(r);
                    return null
                },
                l0: b,
                lW: function () {
                    return l
                },
                xK: function () {
                    return n
                },
                yW: function () {
                    return h.length
                }
            };
            a.f4 = d;
            return a
        };
        var pk = function (a, b) {
            function c() {
                return !0 == a
            }
            var d = b || window.google.time(),
                e = !0,
                f, g, h, k, l = !0,
                n, p, m, t, s = !0;
            return {
                pU: function (a, b, d, m, t) {
                    h || (h = [], k = {}, l = !0, n = a);
                    if (t) {
                        var p = k,
                            s;
                        for (s in t) p[s] = t[s]
                    }
                    b && c() && h.push({
                        data: b,
                        url: a
                    });
                    d && (e = !1);
                    f = window.google.time();
                    g = m
                },
                sE: function () {
                    return k ? k : {}
                },
                qK: function () {
                    return h ? h.length : 0
                },
                Gh: function () {
                    return p
                },
                YO: function (a) {
                    return h ? h[a].data : null
                },
                bP: function () {
                    return t
                },
                wE: function () {
                    return !1 == e
                },
                wK: c,
                sW: function () {
                    return l
                },
                CE: function () {
                    return d
                },
                xW: function (a) {
                    return a &&
                        h && h.length > a && h[a].url ? h[a].url : n
                },
                MG: function () {
                    return m
                },
                refresh: function () {
                    var a = window.google.time();
                    f + 1E3 * g < a && (h = [], l = !1)
                },
                lS: function (a) {
                    p = a
                },
                L0: function (a) {
                    t = a
                },
                yM: function (a) {
                    s = a
                },
                sS: function (a) {
                    m = a
                },
                S0: function (a) {
                    g = a
                },
                tW: function () {
                    return !1 == s
                }
            }
        };
        var Bba = function () {
            function a(b) {
                if (b && b.source == window && c.length && ("comm.df" == b.data || "comm.df.daisy" == b.data)) {
                    var d = (0, _.Ve)();
                    do c.shift()(); while (c.length && 20 > (0, _.Ve)() - d);
                    c.length && "comm.df.daisy" == b.data && window.setTimeout(function () {
                        a(b)
                    }, 0)
                }
            }

            function b(b) {
                c || (c = [], window.postMessage && (0, _.$e)(window, "message", a));
                c.push(b)
            }
            var c, d = !1;
            return {
                defer: function (e) {
                    d && (0, _.Qf)(76, []) ? (b(e), 1 == c.length && window.setTimeout(function () {
                        a({
                            source: window,
                            data: "comm.df.daisy"
                        })
                    }, 0)) : window.postMessage ?
                        (b(e), window.postMessage("comm.df", window.location.href)) : window.setTimeout(e, 0)
                },
                sZ: function () {
                    return d || !! c && 0 < c.length
                },
                AM: function (a) {
                    d = a
                }
            }
        };
        var Cba = function (a, b) {
            function c() {
                if (1 != l && (l = 1, !p && window.document.addEventListener && (window.document.addEventListener("webkitvisibilitychange", e, !1), p = !0), e(), 1 == l)) {
                    var b = (0, _.Ve)(),
                        c = function () {
                            var e = (0, _.Ve)();
                            d(e - b);
                            1 == l && (b = e, n = window.setTimeout(c, a))
                        };
                    n = window.setTimeout(c, a)
                }
            }

            function d(b) {
                b -= a;
                0 > b && (b = 0);
                h[k] = b;
                k = (k + 1) % g
            }

            function e() {
                f( !! window.document.webkitHidden)
            }

            function f(a) {
                a && 1 == l && (window.clearTimeout(n), l = 2);
                a || 2 != l || c()
            }
            var g = b || 20,
                h = [],
                k = 0,
                l = 0,
                n, p = !1,
                m = {
                    start: c,
                    stop: function () {
                        window.clearTimeout(n);
                        l = 0
                    },
                    jW: function () {
                        return h.slice(k).concat(h.slice(0, k))
                    }
                };
            m.H3 = d;
            m.R3 = f;
            return m
        };
        var Dba = function (a) {
            function b() {
                return null
            }

            function c() {}

            function d() {
                return !1
            }

            function e(a, b, c) {
                for (var d = 0, e; e = t[d++];) e.VE(a, b, c)
            }

            function f(a, b, c, d, e) {
                c = 0;
                for (var f; f = t[c++];) f.handleError(a, b, d, e)
            }

            function g(a, b, c, d, f) {
                a = a.split('/*""*/');
                f = f ? 0 : -1;
                for (var g = b; g < a.length + f; ++g)++b, a[g] && e(h(a[g], c, d));
                return [b, 0 == a[a.length - 1].length && b == a.length]
            }

            function h(a, b, c) {
                try {
                    return _.sc.Hc ? (0, _.kf)(a) : (new Function("return " + a))()
                } catch (d) {
                    f(1, 9, b, d, c)
                }
                return a
            }

            function k(a) {
                return {
                    Ni: a
                }
            }

            function l(a) {
                window.google.log("omcr",
                    a.toString())
            }
            var n = {
                TF: !0,
                Fd: !1
            }, p = a.Ni,
                m, t = [],
                s = 1;
            (function () {
                var b = {
                    VE: e,
                    A: h,
                    HR: g,
                    Sf: k,
                    handleError: f,
                    VQ: l
                };
                switch (p) {
                case qk.Nz:
                    m = zba(a.aK, a.iL, a.TL, b);
                    break;
                case qk.NA:
                    m = yba(a.aK, a.$A, a.IB, a.DB, b);
                    break;
                case qk.fC:
                case qk.BD:
                case qk.iC:
                    m = xba(p == qk.iC ? n.TF : n.Fd, p == qk.fC || p == qk.iC, a.$A, a.IB, a.DB, b)
                }
            })();
            if (!m) return null;
            var r = {
                I: function () {
                    return p
                },
                n0: function (a) {
                    t.push(a)
                },
                p0: function (a) {
                    for (var b = 0, c; c = t[b]; ++b)
                        if (c == a) {
                            t.splice(b, 1);
                            break
                        }
                    t.length || (a.hM(), m.close())
                },
                wW: function () {
                    return (s++).toString()
                },
                open: m.open,
                dd: m.dd,
                kF: m.kF || c,
                EI: m.EI || d,
                getName: m.getName || b,
                getInfo: m.getInfo,
                xE: m.xE
            };
            r.VE = e;
            return r
        };
        var Eba = function (a, b) {
            function c(a) {
                a = a.replace(/^http[s]?:\/\/[^\/]*/, "");
                var b = a.indexOf("?");
                return -1 == b ? a : a.substring(0, b)
            }

            function d(a) {
                return a.substring(a.indexOf("?") + 1).split("&").sort().join("&")
            }

            function e(a, b) {
                b ? (X[b] && (X[b].name != a.name || X[b].toString() != a.toString()) && k(T.FT, 4, null, b), X[b] = a) : $ = function (b, c) {
                    var d = X[c];
                    return d ? d(b) : a(b)
                }
            }

            function f() {
                ++fa
            }

            function g(a) {
                if ("string" == typeof a) {
                    var b = c(a);
                    if (b) return a = $(a, b), wa.XO(b, a)
                }
                return null
            }

            function h() {
                return ja
            }

            function k(a,
                b, c, d) {
                if (a == T.sN || a == T.ERROR) {
                    var e = S ? S.getInfo() : null,
                        e = {
                            _svty: a,
                            _err: b,
                            _type: e && e.Ni
                        };
                    d && (e._data = (0, window.encodeURIComponent)("" + d));
                    try {
                        e._wl = (0, window.encodeURIComponent)((0, _.bg)()), window.google.ml(c || Error("comm"), !1, e)
                    } catch (f) {}
                }
                for (c = 0; e = ga[c++];) e.zb(a, b, d)
            }

            function l(a, b) {
                var c = -1 == a.indexOf("?") ? "?" : "&",
                    d = P;
                if (window.google.mcp) var d = P.split("."),
                e = window.google.mcp(d[1]), d = d[0] + "." + e;
                return a + c + "tch=" + S.I() + "&ech=" + b + "&psi=" + d + "." + fa
            }

            function n(a) {
                if (a = Dba(a))
                    if (a.n0(ya), a.open()) return S =
                        a, b.m0(S), ja = !0;
                return !1
            }

            function p(a, b, c) {
                a.push({
                    zb: b,
                    Pd: c || 0
                });
                a.sort(function (a, b) {
                    return b.Pd - a.Pd
                })
            }

            function m(a, b) {
                for (var c = 0, d; d = a[c]; ++c)
                    if (d.zb == b) {
                        a.splice(c, 1);
                        break
                    }
            }

            function t(a, b, c) {
                return a.wK() ? function () {
                    var d = "";
                    if (a)
                        for (var e = a.qK(), e = c ? Math.min(c, e) : e, f = 0; f < e; ++f) {
                            var g = a.YO(f);
                            g && (d += g)
                        }
                    return d.length ? d : b
                } : function () {
                    return b
                }
            }

            function s(a) {
                return S && ja ? S.I() == a : !1
            }

            function r(a) {
                return a && (a = a.match(Fba)) ? a[1] : ""
            }

            function w(a, b, c, d, e, f) {
                var g = wa.nW(b, d, !0);
                g || ((g = wa.oW(b, c, !0)) ? wa.TN(b, g.Gh(), d, g) : (g = f ? Z.iN : Z.eN, a = $(a, b), g = pk(g, da[c]), g.sS(c), g.yM(e), wa.TN(b, a, d, g)));
                return g
            }

            function G(a, b, c, d, e, f, g, h, m, r) {
                var n = W[d] || W["_?"];
                if (n && n.length) {
                    d = 0;
                    for (var l; l = n[d]; ++d) l.zb(a, c, f, !b, g == R.uN, e, h, m, r)
                } else k(T.ERROR, 10, null, d)
            }

            function J(a, b) {
                var c = wa.XO(a, b);
                if (c) {
                    var d = c.MG(),
                        e = c.bP(),
                        f = c.wE(),
                        g = c.qK(),
                        h = c.sE(),
                        m = (0, _.Ve)();
                    c.yM(ca.vN);
                    for (var r = 0; r < g; ++r)(function (b, f, g) {
                        L.defer(function () {
                            G(b, f, t(c, b, g + 1), a, m, c.xW(g), R.uN, d, e, h)
                        })
                    })(c.YO(r), f && r == g - 1, r);
                    return d
                }
            }

            function u(a,
                b, c, d) {
                var e = b.wE();
                c == F.uT || e && d ? wa.abort(a, b) : e && wa.bV(a, b)
            }

            function E(a, b) {
                if (!ha[a]) {
                    var c = (0, _.Ve)() - b.CE(),
                        d = b.MG();
                    na.Q1(d, c);
                    b.wE() && na.R1(d, c)
                }
            }
            var F = {
                uT: -1,
                s3: 0,
                UT: 1
            }, R = {
                    uN: !0,
                    BT: !1
                }, Z = Gba,
                T = Hba,
                ca = Iba,
                P = window.google.kEI + "." + (0, _.Ve)(),
                S, $, X = {}, W = {}, ga = [],
                ja = !1,
                V = 59,
                ia, ha = {}, da = {}, na, Y, fa = 0,
                wa, L;
            e(d);
            na = Aba();
            wa = b.pW();
            L = Bba();
            var ya = {
                VE: function (a, b, d) {
                    if (ja) {
                        var e = a.u,
                            f = e ? c(e) : "",
                            g = r(e),
                            h = a.e,
                            m = w(e, f, g, h, a.p, d);
                        E(f, m);
                        b = a.c;
                        var k = !b || b != F.UT,
                            n = a.d;
                        a = a.a;
                        if ("undefined" != typeof n && null !=
                            n) {
                            var l = e ? e.replace(Jba, "") : "";
                            m.pU(l, n, k, V, a);
                            a = function () {
                                var a = (0, _.Ve)();
                                G(n, k, t(m, n), f, m.CE(), l, R.BT, g, h, m.sE());
                                1 < m.qK() && (a = (0, _.Ve)() - a, na.L1(g, a), k && ia && (a = na.ZU(ia, f, e)) && ia.vI && ia.vI(a))
                            };
                            m.tW() || (L.sZ() ? L.defer(a) : a())
                        }
                        u(f, m, b, d)
                    }
                },
                handleError: k,
                hM: function () {
                    b.hM(S)
                }
            };
            return {
                a: (0, _.ua)("_?"),
                b: h,
                c: function () {
                    na.l0();
                    var a = na.lW(),
                        b = na.xK(),
                        c = na.yW(),
                        a = [
                            [c, a.Ft, a.wu, a.Ct],
                            [c, b.Ft, b.wu, b.Ct]
                        ];
                    return Y ? a.concat([Y.jW()]) : a
                },
                d: function (a) {
                    V = a
                },
                e: function (a) {
                    ia = {
                        BK: a.a,
                        vI: a.b
                    }
                },
                f: function (a) {
                    "function" ==
                        typeof a && (c = a)
                },
                g: e,
                h: function (a, b, c) {
                    if (b) {
                        var d = W[b];
                        d || (d = W[b] = []);
                        p(d, a, c)
                    }
                },
                i: function (a, b) {
                    p(ga, a, b)
                },
                j: function (c) {
                    if (ja) return !0;
                    ++fa;
                    var d = b.AW();
                    if (c) {
                        for (var e = null, f = 0, g; g = a[f]; ++f)
                            if (g.Ni == qk.Nz ? g.Ni == c.Ni && g.iL == c.iL && g.TL == c.TL : g.Ni == c.Ni && g.$A == c.$A && g.IB == c.IB && g.DB == c.DB) {
                                e = g;
                                break
                            }
                        e || (e = c, a.push(e));
                        e.aK = d;
                        return n(e)
                    }
                    for (f = 0; g = a[f]; ++f) {
                        g.aK = d;
                        if (n(g)) return !0;
                        a.splice(f--, 1)
                    }
                    return !1
                },
                k: function (a, b, d, e, f) {
                    if (ja) {
                        var h = c(a),
                            m = $(a, h),
                            r = void 0;
                        if (!b && !d && (r = J(h, m))) return L.defer(function () {
                            (0, _.Qf)(82, [a, e]) && e && e()
                        }), r;
                        d = S.wW();
                        f = f ? ca.tT : ca.vN;
                        b = pk(b ? Z.iN : Z.eN);
                        da[d] = b.CE();
                        b.yM(f);
                        wa.oU(h, m, d, b);
                        S.EI() && ++fa;
                        a = l(a, d);
                        S.dd(a, function () {
                            var b = a,
                                d = c(b);
                            (b = g(b)) && !b.wE() && wa.abort(d, b);
                            e && L.defer(e)
                        });
                        return d
                    }
                    k(T.sN, 14)
                },
                l: function (a) {
                    return !!g(a)
                },
                m: function () {
                    return s(qk.Nz)
                },
                n: function () {
                    return s(qk.NA)
                },
                o: function () {
                    return s(qk.BD)
                },
                p: function () {
                    return s(qk.fC)
                },
                r: function () {
                    return s(qk.iC)
                },
                s: function () {
                    return S && ja ? S.xE() : !1
                },
                t: f,
                u: function () {
                    ja ? (ja = !1, S.p0(ya), S = null) : k(T.ERROR, 3)
                },
                v: function (a,
                    b) {
                    var c = W[b];
                    c && m(c, a)
                },
                w: function (a) {
                    m(ga, a)
                },
                x: function (a) {
                    L.AM(a)
                },
                y: function (a) {
                    ha[a] = 1
                },
                z: function (a) {
                    0 < a && !window.google.commPmActive && (window.google.commPmActive = !0, Y = Cba(a), Y.start())
                },
                aa: function (a) {
                    return a && X[a] ? X[a] : d
                },
                ab: function (a, b) {
                    var c = g(a);
                    return c && c.wE() ? (c.S0(b), !0) : !1
                },
                ac: function (a) {
                    delete ha[a]
                },
                rW: h,
                EY: f
            }
        };
        var Kba = function () {
            function a(a, b) {
                var c = e[a];
                if (c) {
                    var d = b.MG();
                    delete c.qF[d];
                    delete c.gI[b.bP()]
                }
            }

            function b() {
                function a(b) {
                    for (var c in b) d(b[c]) || delete b[c]
                }
                for (var b in e) {
                    var h = c(b);
                    a(h.qF);
                    a(h.gI);
                    a(h.VB)
                }
            }

            function c(a) {
                var b = e[a];
                b || (b = e[a] = {
                    qF: {},
                    gI: {},
                    VB: {}
                });
                return b
            }

            function d(a) {
                return a && (a.refresh(), a.sW()) ? a : null
            }
            var e = {};
            window.setInterval(b, 9E4);
            return {
                oU: function (a, b, d, e) {
                    a = c(a);
                    d && (a.qF[d] = e, e.sS(d));
                    b && e.wK() && (a.VB[b] = e, e.lS(b))
                },
                TN: function (a, b, d, e) {
                    a = c(a);
                    d && (a.gI[d] = e,
                        e.L0(d));
                    b && e.wK() && (a.VB[b] = e, e.lS(b));
                    b = e.MG();
                    delete a.qF[b]
                },
                oW: function (a, b, c) {
                    return (a = e[a]) ? (b = a.qF[b], c ? b : d(b)) : null
                },
                nW: function (a, b, c) {
                    return (a = e[a]) ? (b = a.gI[b], c ? b : d(b)) : null
                },
                XO: function (a, b) {
                    var c = e[a];
                    return c ? d(c.VB[b]) : null
                },
                bV: a,
                clear: function (a) {
                    if (a)
                        for (var b = 0, c; c = a[b++];) {
                            if (c = e[c]) c.VB = {}
                        } else
                            for (c in e)
                                if (a = e[c]) a.VB = {}
                },
                abort: function (b, c) {
                    var d = e[b];
                    d && (a(b, c), delete d.VB[c.Gh()])
                },
                A: b
            }
        };
        var qk = {
            B3: 0,
            fC: 1,
            BD: 2,
            Nz: 3,
            NA: 4,
            iC: 5
        }, Gba = {
                eN: !0,
                iN: !1
            }, Hba = {
                sN: 0,
                ERROR: 1,
                FT: 2
            }, Iba = {
                vN: !0,
                tT: !1
            }, Fba = /[&\?]ech=([0-9]+)/,
            Jba = /[\?&#](tch|ech|psi|wrapid)=[^&]*/g;
        (0, _.Vg)(_.x.G(), "c");
        var Lba = function () {
            function a(a, b) {
                return {
                    Ni: g.Nz,
                    iL: b,
                    TL: a || 1
                }
            }

            function b(a, b, c) {
                return {
                    Ni: g.NA,
                    $A: !! a,
                    IB: b || 5,
                    DB: !! c
                }
            }

            function c(a, b, c) {
                return {
                    Ni: g.BD,
                    $A: !! a,
                    IB: b || 5,
                    DB: !! c
                }
            }

            function d(a, b, c) {
                return {
                    Ni: g.fC,
                    $A: !! a,
                    IB: b || 5,
                    DB: !! c
                }
            }

            function e(a, b, c, d) {
                if (b == g.Nz || b == g.NA) {
                    b = l[b];
                    for (var e in b) b[e].kF(a, c, d)
                }
            }

            function f(a) {
                switch (a) {
                case g.Nz:
                case g.NA:
                case g.BD:
                    return !0;
                case g.fC:
                    return !_.sc.Hc || _.sc.Hc && (0, _.yc)("10");
                case g.iC:
                    return !_.sc.Hc
                }
                return !1
            }
            var g = qk,
                h, k = [],
                l = {}, n = 0,
                p;
            l[g.Nz] = {};
            l[g.NA] = {};
            p = Kba();
            (0, _.za)("google.td", e, void 0);
            var m = {
                AW: function () {
                    return n++
                },
                m0: function (a) {
                    var b = l[a.I()];
                    b && (b[a.getName()] = a)
                },
                hM: function (a) {
                    var b = l[a.I()];
                    b && delete b[a.getName()]
                },
                pW: function () {
                    return p
                }
            };
            return {
                a: a,
                b: b,
                c: c,
                d: d,
                e: function (a, b, c) {
                    return {
                        Ni: g.iC,
                        $A: !! a,
                        IB: b || 5,
                        DB: !! c
                    }
                },
                g: function (e) {
                    if (e) {
                        for (var n = [], r = 0, l; l = e[r++];) f(l.Ni) && n.push(l);
                        e = n.length ? n : null
                    } else if ("undefined" != typeof h) e = h;
                    else {
                        e = [
                            [g.fC, d],
                            [g.BD, c],
                            [g.Nz, a],
                            [g.NA, b]
                        ];
                        n = [];
                        for (r = 0; l = e[r++];) f(l[0]) && (l = l[1](), n.push(l));
                        e = h = n.length ? n : null
                    } if (!e) return null;
                    e = Eba(e, m);
                    k.push(e);
                    return e
                },
                h: e,
                i: function (a) {
                    p.clear(a);
                    if (a && "undefined" != typeof a && null != a) {
                        var b = [],
                            c;
                        for (c in a)
                            if (!(0, _.Va)(a[c])) {
                                var d = c + " = ";
                                try {
                                    d += a[c]
                                } catch (e) {
                                    d += "*** " + e + " ***"
                                }
                                b.push(d)
                            }
                        b.join("\n")
                    }
                    for (a = 0; b = k[a++];) b.rW() && b.EY()
                }
            }
        }();
        (0, _.za)("google.comm", Lba, void 0);

        (0, _.Sg)(_.x.G(), "c");
        (0, _.Wg)(_.x.G(), "c");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Sq = function (a, b, c, d) {
            this.B = a;
            this.V = b;
            this.A = null;
            this.J = c || 0;
            this.T = d || (0, _.ua)(!0);
            null == a.getAttribute("aria-label") && a.setAttribute("aria-label", b);
            this.L = (0, _.$a)(this.nU, this);
            this.D = (0, _.$a)(this.qV, this);
            (0, _.$e)(this.B, "mouseover", this.L);
            (0, _.$e)(this.B, "mouseout", this.D);
            (0, _.$e)(this.B, "focus", this.L);
            (0, _.$e)(this.B, "focusin", this.L);
            (0, _.$e)(this.B, "blur", this.D);
            (0, _.$e)(this.B, "focusout", this.D);
            (0, _.$e)(this.B, "mousedown", this.D);
            (0, _.$e)(this.B, "click", this.D);
            (0, _.$e)(this.B, "keydown", this.D)
        };
        (0, _.Vg)(_.x.G(), "sy30");
        _.q = _.Sq.prototype;
        _.q.destroy = function () {
            (0, window.clearTimeout)(this.Q);
            (0, window.clearTimeout)(this.M);
            this.aR();
            (0, _.af)(this.B, "mouseover", this.L);
            (0, _.af)(this.B, "mouseout", this.D);
            (0, _.af)(this.B, "focus", this.L);
            (0, _.af)(this.B, "focusin", this.L);
            (0, _.af)(this.B, "blur", this.D);
            (0, _.af)(this.B, "focusout", this.D);
            (0, _.af)(this.B, "mousedown", this.D);
            (0, _.af)(this.B, "click", this.D);
            (0, _.af)(this.B, "keydown", this.D)
        };
        _.q.nU = function () {
            this.T() && (window.clearTimeout(this.M), this.Q = window.setTimeout((0, _.$a)(this.fZ, this), 130))
        };
        _.q.qV = function () {
            window.clearTimeout(this.Q);
            this.M = window.setTimeout((0, _.$a)(this.aR, this), 130)
        };
        _.q.fZ = function () {
            if (!this.A) {
                this.A = (0, _.Ne)("div", this.V);
                this.H = (0, _.Ne)("div");
                this.A.style.cssText = "background:#2d2d2d;border:1px solid;border-color:#fff;box-shadow:1px 2px 4px rgba(0,0,0,0.2);box-sizing:border-box;color:#fff;display:block;font-size:11px;font-weight:bold;height:29px;line-height:29px;padding:0 10px;position:absolute;text-align:center;transition:opacity 0.13s;white-space:nowrap;visibility:hidden;z-index:2000;";
                _.sc.WEBKIT ? this.A.style.cssText += "-webkit-box-shadow:0px 1px 4px rgba(0,0,0,0.2);-webkit-box-sizing:border-box;-webkit-transition:opacity 0.13s;" :
                    _.sc.GECKO ? this.A.style.cssText += "-moz-box-shadow:0px 1px 4px rgba(0,0,0,0.2);-moz-box-sizing:border-box;-moz-transition:opacity 0.13s;" : _.sc.OPERA && (this.A.style.cssText += "-o-transition:opacity 0.13s;");
                this.H.style.cssText = "border:6px solid;border-color:#fff transparent;border-top-width:0;content:'';display:block;font-size:0px;height:0;line-height:0;position:absolute;top:-6px;width:0;";
                var a = (0, _.Ne)("div");
                a.style.cssText = this.H.style.cssText;
                a.style.top = "1px";
                a.style.left = "-6px";
                a.style.borderColor =
                    "#2d2d2d transparent";
                this.H.appendChild(a);
                this.A.appendChild(this.H);
                window.document.body.appendChild(this.A);
                var a = (0, _.qe)(this.B),
                    b = this.B.offsetWidth,
                    c = a.x,
                    d = this.A.offsetWidth;
                if (0 == this.J) {
                    this.A.style.left = b / 2 - d / 2 + c + "px";
                    var e = (0, _.re)(this.A),
                        f = (0, _.zc)(3);
                    e + d > f ? this.A.style.left = c + b - d + 1 + "px" : 0 > e && (this.A.style.left = c - 1 + "px")
                } else e = (0, _.ig)(), this.A.style.left = 3 == this.J || 1 == this.J && e ? c + b - d + 1 + "px" : c - 1 + "px";
                this.A.style.top = a.y + this.B.offsetHeight + 5 + "px";
                0 == this.J ? this.H.style.left = a.x + this.B.offsetWidth / 2 - this.A.offsetLeft - 1 - 6 + "px" : (a = (0, _.ig)(), 3 == this.J || 1 == this.J && a ? this.H.style.right = "18px" : this.H.style.left = "18px");
                this.A.style.visibility = "visible"
            }
        };
        _.q.aR = function () {
            this.A && ((0, _.yd)(this.A), this.A = null)
        };

        (0, _.Sg)(_.x.G(), "sy30");
        (0, _.Wg)(_.x.G(), "sy30");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        (0, _.Vg)(_.x.G(), "sb_sri");
        var H = {
            $w: null,
            xp: /^[6-9]$/
        }, gUa = {
                km: 0,
                Wh: 1,
                jm: 2,
                Xd: 3
            }, P4 = {
                Ke: 0,
                Oi: 5,
                Qo: 19,
                Pp: 30,
                Wo: 32,
                Di: 33,
                Xo: 34,
                Ah: 35,
                Ik: 38,
                bm: 39,
                Lk: 40,
                Uj: 41,
                bz: 42,
                ky: 43,
                Cl: 44,
                il: 45,
                qp: 46,
                Ey: 47,
                Dy: 48,
                By: 49,
                ez: 50,
                gz: 51,
                ny: 52,
                my: 54,
                uy: 55,
                qq: 56,
                vy: 66,
                Gy: 68,
                Eu: 69,
                Uy: 70,
                Ov: 71,
                Fo: 400,
                Yx: 401,
                Zx: 403,
                Cy: 404,
                Xx: 406,
                Go: 407,
                hz: 408,
                Zr: 500,
                Ty: 503,
                jy: 504,
                gy: 505,
                ty: 507
            }, hUa = {
                EMPTY: 0,
                Zl: 1,
                Nh: 2
            }, iUa = {
                zq: 0,
                Eo: 1,
                Vx: 2,
                Xp: 3,
                Wp: 4
            }, jUa = {
                dD: 1,
                hD: 2,
                oD: 3,
                LD: 4,
                pD: 5,
                qD: 6,
                rD: 7,
                Pv: 8,
                sD: 9,
                DD: 10,
                ID: 11,
                JD: 16,
                KD: 12,
                Zv: 13,
                $v: 14,
                MD: 15
            }, kUa = {
                Wl: 1,
                $l: 2,
                gx: 3,
                Ul: 4,
                cm: 5,
                kx: 6,
                bx: 7,
                Ee: 8
            }, Q4 = {
                IE: 0,
                GECKO: 1,
                OPERA: 2,
                CHROME: 3,
                SAFARI: 4,
                WEBKIT: 5,
                cj: 6,
                $i: 7
            }, lUa = {
                Ng: "left",
                JI: "center",
                Fj: "right"
            }, mUa = {
                mx: 0,
                Ng: 1,
                Tn: 2
            }, nUa = {
                Fp: 0
            }, R4 = {
                DONT_CARE: 1,
                Ci: 2,
                nm: 3
            }, oUa = {
                Qh: 0,
                mm: 1,
                Xd: 2
            }, pUa = {
                Xy: "a",
                Vy: "d",
                bj: "e",
                xy: "h",
                Fy: "i",
                Ry: "j",
                ey: "k",
                My: "l",
                Sy: "m",
                Ly: "n",
                Ei: "o",
                Fi: "p",
                Qp: "q",
                cz: "r",
                hy: "t"
            }, qUa = {
                Ro: 0,
                lq: 1,
                Ho: 2,
                Io: 3,
                Ap: 4,
                Np: 5,
                nq: 6,
                mq: 7,
                yp: 8,
                Uo: 9,
                Gp: 10,
                Cp: 11,
                Dp: 12,
                $p: 13,
                Tp: 14,
                yq: 15,
                So: 16,
                Vo: 17,
                Op: 18,
                rp: 19,
                bj: 20,
                Qs: 21,
                To: 22,
                py: 23,
                Qy: 24,
                Po: 25,
                Ja: 26,
                Ue: 27,
                fq: 28,
                Zy: 29
            };
        H.Rp = [23, 24];
        H.F = {
            um: 0,
            Yw: 114,
            Ua: 115,
            Jb: 116,
            wa: 117,
            Z: 118,
            ob: 119,
            Ja: 374,
            $a: 120,
            Xa: 121,
            Zf: 122,
            Ca: 123,
            yb: 124,
            ec: 125,
            gm: 230,
            Ga: 126,
            Pa: 127,
            ra: 128,
            Bh: 343,
            gc: 129,
            Xw: 231,
            gb: 130,
            Af: 131,
            yh: 237,
            hx: 132,
            od: 134,
            Qb: 189,
            dm: 246,
            jx: 264,
            nc: 133,
            jl: 184,
            Og: 419,
            Sd: 173,
            vb: 135,
            Ta: 136,
            Xb: 137,
            Sc: 138,
            Ea: 139,
            Rd: 140,
            Bb: 141,
            kg: 142,
            lg: 240,
            Ze: 143,
            Cc: 144,
            Mh: 347,
            Dc: 191,
            Db: 150,
            Ib: 145,
            Ic: 146,
            Cb: 147,
            lx: 148,
            Df: 245,
            De: 155,
            Ab: 149,
            jf: 154,
            fh: 311,
            Te: 153,
            RENDERER: 152,
            kb: 156,
            qc: 151,
            Ff: 158,
            Vh: 294,
            hm: 157,
            Vc: 160,
            Wd: 159
        };
        var rUa = {
            Fd: 161,
            Xh: 162
        };
        H.C = {};
        H.Ip = function (a) {
            return {
                xd: function () {
                    return a.xd()
                },
                ha: function () {
                    return a.ha()
                },
                Ba: function () {
                    return a.Ba()
                }
            }
        };
        H.vq = function () {
            function a(a) {
                for (var b = [], e = 0, f; f = a[e++];) b.push(f.api || {
                    a: f.Nb,
                    b: f.X,
                    c: f.Ya,
                    d: f.I,
                    e: f.Gc,
                    f: f.ni,
                    g: f.Ch,
                    i: f.Dd,
                    j: f.U,
                    k: f.ke,
                    l: f.Fg
                });
                return b
            }

            function b(a) {
                for (var b = [], e = 0, f; f = a[e++];) f = f.api || f, b.push({
                    api: f,
                    Nb: f.a,
                    X: f.b,
                    Ya: f.c,
                    I: f.d,
                    Gc: f.e,
                    ni: f.f,
                    Ch: f.g,
                    Dd: f.i,
                    U: f.j,
                    ke: f.k,
                    Fg: f.l
                });
                return b
            }
            H.Ob = function (a) {
                var b = {};
                if (a)
                    for (var e = 0; e < a.length; ++e) b[a[e]] = !0;
                return b
            };
            H.ej = function (b) {
                var d = a(b.Ba());
                return b.api || {
                    a: b.ha,
                    b: function () {
                        return d
                    },
                    c: b.xd
                }
            };
            H.Xq = a;
            H.Uw = function (a) {
                a =
                    a.api || a;
                var d = b(a.b());
                return {
                    api: a,
                    ha: a.a,
                    Ba: function () {
                        return d
                    },
                    xd: a.c
                }
            };
            H.Ux = b;
            H.kj = function (a) {
                return a ? (a = a.toLowerCase(), "zh-tw" == a || "zh-cn" == a || "ja" == a || "ko" == a) : !1
            };
            H.getTime = function () {
                return (new Date).getTime()
            };
            H.rf = function (a) {
                return "string" == typeof a
            };
            H.lj = function (a) {
                return "number" == typeof a
            }
        };
        H.vq();
        H.iy = null;
        H.Ue = 17;
        H.hp = function () {
            return {
                G: function () {
                    var a = P4;
                    return {
                        Fe: "hp",
                        Xe: "hp",
                        Pg: "google.com",
                        wi: "",
                        Od: "en",
                        vh: "",
                        Li: "",
                        zf: "",
                        authuser: 0,
                        Ki: "",
                        fg: "",
                        $f: !1,
                        mj: "",
                        we: "",
                        Hb: 0,
                        Pj: null,
                        gg: !1,
                        Mj: !1,
                        Ii: !1,
                        nb: H.Ob([a.Qo, a.Oi, a.Ke]),
                        Bs: !1,
                        Dm: !0,
                        Zg: 10,
                        mg: !0,
                        ng: !0,
                        Qk: !1,
                        Ri: !1,
                        vo: !1,
                        Hg: !0,
                        Am: !1,
                        xk: 500,
                        Tg: !1,
                        Vi: !0,
                        Ev: !0,
                        mi: !1,
                        Kg: "",
                        Mr: "//www.google.com/textinputassistant",
                        Nr: "",
                        Pr: 7,
                        Cs: !1,
                        ln: !1,
                        Gg: !1,
                        Hr: !0,
                        Ir: !1,
                        Uf: !1,
                        Jg: !1,
                        Fv: !1,
                        Yi: !1,
                        Xi: !1,
                        ye: 1,
                        Bn: !0,
                        Rf: !1,
                        Nd: !1,
                        Qi: !1,
                        zo: 10,
                        qg: !1,
                        pk: 0,
                        du: !1,
                        Vk: !0,
                        Em: !1,
                        Yg: window.document.body,
                        mn: !0,
                        On: null,
                        Ra: {},
                        Rk: {},
                        Wi: 0,
                        bo: !1,
                        nn: !0,
                        Rb: !1,
                        Qx: null,
                        Il: !1,
                        Ix: null,
                        Rx: null,
                        Cm: !1,
                        Es: !0,
                        Vn: !1,
                        zj: 1,
                        sx: 1,
                        spellcheck: !1,
                        yo: !1,
                        Sl: "Search",
                        Ne: "I'm  Feeling Lucky",
                        Tr: "",
                        xl: "Learn more",
                        yl: "Remove",
                        Wk: "This search was removed from your Web History",
                        hk: "",
                        ux: "Did you mean:",
                        Or: "",
                        Sr: "",
                        $n: !1,
                        Uk: null,
                        Ug: 0,
                        $q: 0,
                        Xc: "",
                        Bf: "",
                        isRtl: !1,
                        lf: "absolute",
                        Ol: !1,
                        hn: !1,
                        uf: null,
                        Pl: !0,
                        Sx: 0,
                        We: [0, 0, 0],
                        Bm: null,
                        Pn: null,
                        xm: [0],
                        Ok: 0,
                        Lj: 1,
                        vf: "",
                        jr: "",
                        ir: "",
                        xs: null,
                        Tu: "",
                        Su: "",
                        Rt: 1,
                        Fh: {},
                        Fl: !0
                    }
                }
            }
        };
        H.Mo = /<\/?(?:b|em)>/gi;
        H.Bj = !0;
        H.Eh = !0;
        H.$e = "gstl_";
        var S4 = {
            rr: 1,
            Iy: 2,
            Xl: 3,
            Sh: 4,
            Th: 5,
            Kk: 6,
            Jk: 7,
            mk: 8,
            Hy: 9,
            Ky: 10,
            qv: 11,
            vv: 12,
            uv: 13,
            wv: 14,
            rv: 15,
            Jy: 16
        }, T4 = {
                Gk: 8,
                Ee: 9,
                Bi: 13,
                Se: 27,
                Lt: 32,
                Ek: 37,
                Ai: 38,
                Fk: 39,
                zi: 40,
                lk: 46
            }, sUa = {
                Do: 0,
                Lo: 1,
                Ko: 2
            }, tUa = {
                dC: "/complete/search",
                Ku: "/complete/deleteitems"
            }, uUa = {
                Hk: "a",
                Mt: "b"
            }, vUa = {
                Bu: "a",
                ak: "b",
                It: "c",
                Jt: "d",
                Kt: "e",
                ly: "f",
                wy: "g",
                VF: "h",
                UF: "i",
                oy: "j",
                aG: "k",
                SF: "l",
                dz: "m",
                uD: "n",
                wD: "o"
            }, wUa = {
                Bu: "a",
                ak: "b",
                It: "c",
                Jt: "d",
                Kt: "e",
                ly: "f",
                wy: "g",
                oy: "h",
                $r: "i",
                dz: "j",
                uD: "k",
                wD: "l"
            };
        H.gq = function () {
            var a = H.Y,
                b = 0,
                c = {}, d = {}, e = {}, f = {}, g = {};
            return {
                Tm: function () {
                    return b++
                },
                eh: function (a, b, c) {
                    d[a] = c;
                    g[a] = [b]
                },
                register: function (b, c, d) {
                    var n = f[b];
                    n ? n != a && (f[b] = a) : f[b] = d;
                    (n = g[b]) ? n.push(c) : g[b] = [c];
                    e[c] = d
                },
                Km: function () {
                    return g
                },
                G: function (b, g) {
                    var l = c[b];
                    return l ? l : (l = d[b]) ? c[b] = l() : g ? (l = e[g]) ? l() : null : (l = f[b]) && l != a ? l() : null
                }
            }
        };
        H.O = H.gq();
        H.ep = function (a, b, c, d, e, f) {
            function g() {
                if (F) {
                    for (var a = 0, b; b = E[a++];) b.xa && b.xa();
                    F = !1
                }
            }

            function h(a) {
                for (var b in a) {
                    var c = b,
                        d = a[c];
                    if (d != p.Fd)
                        if (t[c]) {
                            for (var e = G[c] || [], f = 0, g = void 0; f < d.length; ++f)(g = k(c, d[f])) && e.push(g);
                            G[c] = e
                        } else(d = k(c, d)) && (w[c] = d)
                }
            }

            function k(a, b) {
                var c;
                if (b && b instanceof Object) c = b;
                else if (c = R.G(a, b), !c) return null;
                if (c.Gd) {
                    var d = c.Gd();
                    if (d)
                        for (var e = 0, f, g, h; f = d[e++];) {
                            h = !1;
                            g = f.I();
                            if (t[g]) {
                                if (h = J[g]) {
                                    h.push(f);
                                    continue
                                }
                                h = !0
                            }
                            J[g] = h ? [f] : f
                        }
                }
                u.push([c, a]);
                E.push(c);
                return c
            }

            function l(a) {
                for (var b = H.F.um, c = 0, d; d = u[c++];) d[0] == a && (b = d[1]);
                return b
            }

            function n(a, b) {
                var c = H.indexOf(a.I(), r),
                    d = H.indexOf(b.I(), r);
                return 0 > c ? 1 : 0 > d ? -1 : c - d
            }
            var p = rUa,
                m = H.F,
                t = H.Ob([m.Wd, m.De, m.Ab, m.Te, m.jf, m.fh, m.RENDERER, m.kb, m.qc, m.Ff, m.Vh, m.Vc]),
                s = [m.Ib, m.wa, m.Z, m.ob, m.Ja, m.Ga, m.Ua, m.Jb, m.$a, m.Cb, m.Xa, m.nc, m.Zf, m.Ca, m.yb, m.ec, m.Pa, m.ra, m.Bh, m.gc],
                r = [m.Qb, m.Pa, m.Ab, m.od, m.Ca, m.Xa, m.Ga, m.Z, m.Ua, m.ra, m.Vc, m.Sd, m.ob, m.Jb, m.RENDERER, m.Te, m.gc, m.$a, m.Ja, m.yb, m.Ff, m.De, m.Af, m.gb, m.Cb, m.Bb, m.kg, m.Xb,
                    m.lg, m.Ze, m.Sc, m.Cc, m.Ea, m.Rd, m.vb, m.Ta
                ],
                w = {}, G = {}, J = {}, u = [],
                E = [],
                F = !1,
                R = H.O,
                Z = {
                    P: function (a) {
                        g();
                        for (var b = 0, c; c = E[b++];) c.P && c.P(a);
                        F = !0
                    },
                    xa: g,
                    isActive: function () {
                        return F
                    },
                    get: function (a, b) {
                        var c = w[a];
                        if (c) return c.K ? c.K(l(b)) : {}
                    },
                    Ia: function (a, b) {
                        var c = G[a];
                        if (c) {
                            for (var d = [], e = l(b), f = 0, g; g = c[f++];) d.push(g.K ? g.K(e) : {});
                            return d
                        }
                        return []
                    },
                    Zb: function () {
                        return a
                    },
                    wc: function () {
                        return e
                    },
                    eo: function (a, b) {
                        var c = G[m.Wd];
                        if (c)
                            for (var d = 0, e; e = c[d++];)
                                if (e.N() == a) return e.K ? e.K(l(b)) : {};
                        return null
                    }
                };
            (function () {
                if (f.Fl) {
                    var e = R.Km(),
                        g, m, l, r;
                    for (r in e) {
                        var G = r;
                        g = e[G];
                        m = t[G];
                        if (l = b[G]) {
                            if (l != p.Fd && m && l.length) {
                                m = b;
                                l = l.slice(0);
                                for (var u = [], ga = {}, ja = 0, V = void 0, ia = void 0; ia = l[ja++];) ia instanceof Object && (V = ia.N(), ga[V] || (u.push(ia), ga[V] = 1), l.splice(--ja, 1));
                                ja = H.Ob(l);
                                ja[p.Xh] && (ja = H.Ob(l.concat(g)), delete ja[p.Xh]);
                                for (V in ja) ga[V] || u.push((0, window.parseInt)(V, 10));
                                m[G] = u
                            }
                        } else b[G] = m ? g : g[0]
                    }
                }
                h(b);
                for (e = 0; r = s[e++];) b[r] || (m = k(r, void 0)) && (w[r] = m);
                h(J);
                E.sort(n);
                for (e = 0; r = E[e++];) r.qa && r.qa(c,
                    d);
                a.Rc(d, c.ue());
                d.vm();
                for (e = 0; r = E[e++];) r.R && r.R(Z);
                for (e = 0; r = E[e++];) r.ga && r.ga(f);
                for (e = 0; r = E[e++];) r.P && r.P(f);
                F = !0
            })();
            return Z
        };
        H.Uh = function (a, b, c) {
            function d() {
                return a
            }

            function e() {
                return s
            }

            function f() {
                return r
            }

            function g() {
                return b
            }

            function h() {
                return c || ""
            }

            function k(a, b) {
                m(a, b)
            }

            function l(a, b) {
                m(a, b, !0)
            }

            function n() {
                E || (F = R = !0)
            }

            function p() {
                T = !0
            }

            function m(a, b, c) {
                E || (F = !0, w[a] = b, c && (G[a] = b))
            }
            var t = H.Kq(),
                s, r, w = {}, G = {}, J, u, E = !1,
                F = !1,
                R = !1,
                Z = !1,
                T = !1,
                ca = {
                    getId: function () {
                        return t
                    },
                    hi: function () {
                        var a = (0, window.parseInt)(t, 36);
                        return (0, window.isNaN)(a) ? -1 : a
                    },
                    ha: d,
                    Gi: e,
                    Sa: f,
                    Kb: g,
                    U: function () {
                        return w
                    },
                    Gh: function () {
                        return J
                    },
                    ij: h,
                    Sg: function () {
                        return u
                    },
                    $h: function () {
                        return {
                            ha: d,
                            Gi: e,
                            Sa: f,
                            Kb: g,
                            ij: h,
                            setParameter: k,
                            Ye: l,
                            A: n,
                            yr: p
                        }
                    },
                    setParameter: k,
                    Ye: l,
                    A: n,
                    yr: p,
                    xn: function () {
                        return R
                    },
                    rn: function () {
                        F = Z = !0
                    },
                    zn: function (d, e, f) {
                        return !F && a == d && b.equals(e) && c == f
                    },
                    oi: function () {
                        return Z
                    },
                    vl: function () {
                        return T
                    },
                    Gm: function () {
                        E || (u = H.getTime(), "cp" in G || l("cp", b.getPosition()), m("gs_id", t), J = H.Ge(G) + ":" + a, F = E = !0)
                    }
                };
            s = a.toLowerCase();
            r = H.Nc(s);
            return ca
        };
        H.Hd = function (a, b, c, d, e, f, g, h) {
            function k() {
                return !!c && !! c[0]
            }
            var l, n = !0,
                p, m = {
                    wb: function () {
                        return a
                    },
                    ha: function () {
                        return b
                    },
                    rd: function () {
                        return k() ? c[0] : null
                    },
                    Ba: function () {
                        return c
                    },
                    Fb: k,
                    U: function () {
                        return d
                    },
                    nh: function () {
                        return e
                    },
                    Ud: function () {
                        return f
                    },
                    Fs: function () {
                        return g
                    },
                    Ji: function () {
                        return h
                    },
                    Tq: function () {
                        g = !0
                    },
                    I: function () {
                        return n
                    },
                    gi: function () {
                        p || (p = H.Ip(m));
                        return p
                    },
                    xd: function () {
                        return l
                    }
                };
            c ? c.length && 33 == c[0].I() && (f = n = !1) : c = [];
            d ? l = d.Kl("t") : d = H.Yf;
            return m
        };
        H.Bd = function (a, b, c, d, e, f) {
            function g(a) {
                if (e)
                    for (var b = 0, c; c = a[b++];)
                        if (-1 != H.indexOf(c, e)) return !0;
                return !1
            }
            var h = {
                Ei: "za",
                Fi: "zb",
                zA: "zc"
            }, k = !1,
                l = {
                    Nb: function () {
                        return a
                    },
                    X: function () {
                        return b
                    },
                    Ya: function () {
                        return c
                    },
                    I: function () {
                        return d
                    },
                    ke: function () {
                        return f.ka(h.Ei)
                    },
                    Fg: function () {
                        return f.ka(h.Fi)
                    },
                    Gc: function () {
                        return e || []
                    },
                    ni: function (a) {
                        return !!e && g([a])
                    },
                    Ch: g,
                    U: function () {
                        return f
                    },
                    Dd: function () {
                        return k
                    }
                };
            (function () {
                var a = P4;
                switch (d) {
                case a.Ke:
                case a.Wo:
                case a.Ik:
                case a.bm:
                case a.Fo:
                case a.Go:
                case a.Ah:
                case a.Di:
                case a.Uj:
                case a.Xo:
                case a.Cl:
                case a.il:
                case a.Lk:
                case a.qp:
                case a.qq:
                case a.Pp:
                    k = !0
                }
                f || (f = H.Yf)
            })();
            return l
        };
        H.Aq = function () {
            function a(a) {
                return a ? -1 < a.indexOf(" ") || f.test(a) : !1
            }
            var b = /\s/g,
                c = /\u3000/g,
                d = /^\s/,
                e = /\s+$/,
                f = /\s+/,
                g = /\s+/g,
                h = /^\s+|\s+$/g,
                k = /^\s+$/,
                l = /<[^>]*>/g,
                n = /&nbsp;/g,
                p = /&#x3000;/g,
                m = [/&/g, /&amp;/g, /</g, /&lt;/g, />/g, /&gt;/g, /"/g, /&quot;/g, /'/g, /&#39;/g, /{/g, /&#123;/g],
                t = window.document.getElementsByTagName("head")[0],
                s = 0;
            H.Me = function (a, b) {
                function c() {
                    return b
                }
                void 0 === b && (b = a);
                return {
                    getPosition: c,
                    ji: function () {
                        return a
                    },
                    Xm: c,
                    A: function () {
                        return a < b
                    },
                    equals: function (c) {
                        return c && a ==
                            c.ji() && b == c.Xm()
                    }
                }
            };
            H.xb = function (a, b, c, d) {
                if (null == b || "" === b) {
                    if (!d) return;
                    b = ""
                }
                c.push(a + "=" + (0, window.encodeURIComponent)(String(b)))
            };
            H.Ge = function (a) {
                var b = [],
                    c;
                for (c in a) H.xb(c, a[c], b);
                return b.join("&")
            };
            H.Vt = function (a) {
                var b = {}, c = Math.max(a.indexOf("?"), a.indexOf("#"));
                a = a.substr(c + 1);
                if (0 <= c && a) {
                    c = a.split("&");
                    a = 0;
                    for (var d; a < c.length; ++a)
                        if (d = c[a]) d = d.split("="), b[d[0]] = d[1] || ""
                }
                return b
            };
            H.kd = function (a) {
                return !!a && !k.test(a)
            };
            H.Jr = function (a) {
                return e.test(a)
            };
            H.escape = function (a) {
                for (var b =
                    m.length, c = 0; c < b; c += 2) a = a.replace(m[c], m[c + 1].source);
                return a
            };
            H.unescape = function (a) {
                for (var b = m.length, c = 0; c < b; c += 2) a = a.replace(m[c + 1], m[c].source);
                a = a.replace(n, " ");
                return a.replace(p, "\u3000")
            };
            H.sj = function (a) {
                return a.replace(H.Mo, "")
            };
            H.rj = function (a) {
                return a.replace(l, "")
            };
            H.Nq = function (d) {
                return a(d) ? (d = d.replace(c, "&#x3000;"), d.replace(b, "&nbsp;")) : d
            };
            H.jz = a;
            H.Nc = function (b, c) {
                return a(b) ? (b = b.replace(g, " "), b.replace(c ? h : d, "")) : b
            };
            H.trim = function (a) {
                return a.replace(h, "")
            };
            H.Gz = function (a) {
                return a.replace(e,
                    "")
            };
            H.jc = function (a, b, c) {
                c && (a = a.toLowerCase(), b = b.toLowerCase());
                return b.length <= a.length && a.substring(0, b.length) == b
            };
            H.kz = function (a, b, c) {
                c && (a = a.toLowerCase(), b = b.toLowerCase());
                c = a.length - b.length;
                return -1 < c && a.lastIndexOf(b) == c
            };
            H.Gq = function (a, b) {
                return a || b ? !! a && !! b && a.toLowerCase() == b.toLowerCase() : !0
            };
            H.Lb = function (a) {
                window.clearTimeout(a)
            };
            H.Y = (0, _.ka)();
            H.$g = function () {
                return t
            };
            H.Kq = function () {
                return (s++).toString(36)
            };
            H.wj = function (a) {
                return H.xp.test(a)
            };
            H.qu = function (a, b) {
                return H.Bd(a.Nb(),
                    a.X(), b, a.I(), a.Gc(), a.U())
            };
            H.indexOf = function (a, b) {
                if (b.indexOf) return b.indexOf(a);
                for (var c = 0, d = b.length; c < d; ++c)
                    if (b[c] === a) return c;
                return -1
            };
            H.gj = function (a, b) {
                return a.Fa() - b.Fa()
            };
            H.Hq = function (a, b) {
                return b.Fa() - a.Fa()
            };
            H.fj = function (a) {
                var b = {}, c;
                for (c in a) b[c] = a[c];
                return b
            };
            H.sg = function (a, b, c) {
                b in a || (a[b] = [162]);
                a[b].push(c)
            }
        };
        H.Aq();
        H.jg = function (a) {
            return {
                contains: function (b) {
                    return b in a
                },
                Xt: function (b) {
                    return !!a[b]
                },
                Ae: function (b) {
                    return a[b] || 0
                },
                ka: function (b) {
                    return a[b] || ""
                },
                Kl: function (b) {
                    return a[b] || null
                }
            }
        };
        H.Yf = H.jg({});
        H.Bq = function () {
            function a(a, b) {
                var c = window.document.createElement(a);
                b && (c.className = b);
                return c
            }

            function b(b) {
                return a("div", b)
            }

            function c(a, b, c) {
                var d = a.style;
                "INPUT" != a.nodeName && (c += 1);
                d.left = d.right = "";
                d[b] = c + "px"
            }

            function d(a) {
                return "rtl" == a ? "right" : "left"
            }

            function e(a, b) {
                var c = a.getElementsByTagName("input");
                if (c)
                    for (var d = 0, e; e = c[d++];)
                        if (e.name == b && "submit" != e.type.toLowerCase()) return e;
                return null
            }

            function f(a) {
                a && (a.preventDefault && a.preventDefault(), a.returnValue = !1);
                return !1
            }

            function g(a) {
                return a ?
                    a.ownerDocument || a.document : window.document
            }

            function h(a) {
                return a ? (a = g(a), a.defaultView || a.parentWindow) : window
            }

            function k(a, b, c) {
                return b + a * (c - b)
            }

            function l(a) {
                return n ? a + "" : [H.Bg ? "progid:DXImageTransform.Microsoft.Alpha(" : "alpha(", "opacity=", Math.floor(100 * a), ")"].join("")
            }
            var n = void 0 != window.document.documentElement.style.opacity,
                p = {
                    rtl: "right",
                    ltr: "left"
                };
            H.Nj = function (a, b) {
                if (a.setSelectionRange) try {
                    a.setSelectionRange(b, b)
                } catch (c) {} else if (a.createTextRange) try {
                    var d = a.createTextRange();
                    d.collapse(!0);
                    d.moveStart("character", b);
                    d.select()
                } catch (e) {}
            };
            H.Kb = function (a) {
                try {
                    var b, c;
                    if ("selectionStart" in a) b = a.selectionStart, c = a.selectionEnd;
                    else {
                        var d = a.createTextRange(),
                            e = g(a).selection.createRange();
                        d.inRange(e) && (d.setEndPoint("EndToStart", e), b = d.text.length, d.setEndPoint("EndToEnd", e), c = d.text.length)
                    } if (void 0 !== b) return H.Me(b, c)
                } catch (f) {}
                return null
            };
            H.hj = function (a, b) {
                for (var c = 0, d = 0; a && (!b || a != b);) {
                    c += a.offsetTop;
                    d += a.offsetLeft;
                    try {
                        a = a.offsetParent
                    } catch (e) {
                        a = null
                    }
                }
                return {
                    Qd: c,
                    Wb: d
                }
            };
            H.$c = function (a) {
                try {
                    return g(a).activeElement == a
                } catch (b) {}
                return !1
            };
            H.Kj = function (a) {
                var b = T4;
                return a == b.Ai || a == b.zi
            };
            H.ea = a;
            H.Jc = function () {
                var b = a("table");
                b.cellPadding = b.cellSpacing = 0;
                b.style.width = "100%";
                return b
            };
            H.Ka = b;
            H.ii = function (a, c) {
                var d = b(a),
                    e = d.style;
                e.background = "transparent";
                e.color = "#000";
                e.padding = 0;
                e.position = "absolute";
                c && (e.zIndex = c);
                e.whiteSpace = "pre";
                return d
            };
            H.xe = function (a, b) {
                a.innerHTML != b && (b && (H.Bg ? b = H.Nq(b) : H.Zk && (b = ['<pre style="font:inherit;margin:0">', b,
                    "</pre>"
                ].join(""))), a.innerHTML = b)
            };
            H.zl = function (a, b) {
                a.dir != b && (c(a, d(b), 0), a.dir = b)
            };
            H.er = c;
            H.Ij = d;
            H.qj = function (a, b) {
                a.dir != b && (a.dir = b, a.style.textAlign = p[b])
            };
            H.Le = function (b, c, d) {
                if (e(b, c)) return null;
                var f = a("input");
                f.type = "hidden";
                f.name = c;
                d && (f.value = d);
                return b.appendChild(f)
            };
            H.Hh = e;
            H.hr = function (a) {
                var b = window.document.createEvent("KeyboardEvent");
                b.initKeyEvent("keypress", !0, !0, null, !1, !1, !0, !1, 27, 0);
                a.dispatchEvent(b)
            };
            H.preventDefault = f;
            H.Sb = function (a) {
                if (a = a || window.event) a.stopPropagation &&
                    a.stopPropagation(), a.cancelBubble = a.cancel = !0;
                return f(a)
            };
            H.Jj = function (a, b) {
                b.parentNode.insertBefore(a, b.nextSibling)
            };
            H.Wg = function (a) {
                a = a.insertCell(-1);
                var b = H.ea("a");
                b.href = "#ifl";
                b.className = "gssb_j gss_ifl";
                a.appendChild(b);
                return b
            };
            H.getComputedStyle = function (a, b) {
                var c = h(a);
                return (c = c.getComputedStyle ? c.getComputedStyle(a, "") : a.currentStyle) ? c[b] : null
            };
            H.jj = function (a) {
                var b = a || window;
                a = b.document;
                var c = b.innerWidth,
                    b = b.innerHeight;
                if (!c) {
                    var d = a.documentElement;
                    d && (c = d.clientWidth,
                        b = d.clientHeight);
                    c || (c = a.body.clientWidth, b = a.body.clientHeight)
                }
                return {
                    Je: c,
                    Be: b
                }
            };
            H.Jq = function (a) {
                return (a || window).document.documentElement.clientWidth
            };
            H.Eg = function (a, b, c, d, e) {
                function f(a, b) {
                    g.push(a, a ? "px" : "", b ? "" : " ")
                }
                var g = [];
                f(a);
                f(e ? d : b);
                f(c);
                f(e ? b : d, !0);
                return g.join("")
            };
            H.nj = function (a) {
                a = a.style;
                a.border = "none";
                a.padding = H.gd || H.ub ? "0 1px" : "0";
                a.margin = "0";
                a.height = "auto";
                a.width = "100%"
            };
            H.Um = function (a) {
                return (n ? "opacity" : "filter") + ":" + l(a) + ";"
            };
            H.lv = function (a, b) {
                a.style[n ? "opacity" :
                    "filter"] = l(b)
            };
            H.Tl = function (a, b) {
                a.innerHTML = "";
                a.appendChild(window.document.createTextNode(b))
            };
            H.Rg = function (a) {
                var b = {};
                if (a)
                    for (var c = 0, d; d = a[c++];) b[d.Ub()] = d;
                return b
            };
            H.Ll = g;
            H.getWindow = h;
            H.interpolate = k;
            H.vz = function (a, b, c) {
                return Math.round(k(a, b, c))
            };
            H.Ur = function (a) {
                H.gd && (a.tabIndex = 0)
            };
            H.Px = function (a, b) {
                a.setAttribute("aria-label", b)
            };
            H.Ds = function (a) {
                a.setAttribute("aria-hidden", "true")
            }
        };
        H.Bq();
        H.No = function () {
            function a(a) {
                H.rf(a) && (a = d(a));
                var b = "";
                if (a) {
                    for (var c = a.length, e = 0, f = 0, g = 0; c--;)
                        for (f <<= 8, f |= a[g++], e += 8; 6 <= e;) var h = f >> e - 6 & 63,
                    b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(h), e = e - 6;
                    e && (f <<= 8, e += 8, h = f >> e - 6 & 63, b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(h))
                }
                return b
            }

            function b(a) {
                var b = [];
                if (a)
                    for (var c = 0, d = 0, e = 0; e < a.length; ++e) {
                        var f = a.charCodeAt(e);
                        if (32 > f || 127 < f || !k[f - 32]) return [];
                        c <<= 6;
                        c |= k[f - 32] - 1;
                        d += 6;
                        8 <= d && (b.push(c >>
                            d - 8 & 255), d -= 8)
                    }
                return b
            }

            function c(a, b) {
                var c = {};
                c.ya = Array(4);
                c.buffer = Array(4);
                c.Rn = Array(4);
                c.padding = Array(64);
                c.padding[0] = 128;
                for (var k = 1; 64 > k; ++k) c.padding[k] = 0;
                e(c);
                var k = Array(64),
                    l;
                64 < b.length ? (e(c), g(c, b), l = h(c)) : l = b;
                for (var n = 0; n < l.length; ++n) k[n] = l[n] ^ 92;
                for (n = l.length; 64 > n; ++n) k[n] = 92;
                e(c);
                for (n = 0; 64 > n; ++n) c.buffer[n] = k[n] ^ 106;
                f(c, c.buffer);
                c.total = 64;
                g(c, d(a));
                l = h(c);
                e(c);
                f(c, k);
                c.total = 64;
                g(c, l);
                return h(c)
            }

            function d(a) {
                for (var b = [], c = 0, d = 0; d < a.length; ++d) {
                    var e = a.charCodeAt(d);
                    128 >
                        e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
                }
                return b
            }

            function e(a) {
                a.ya[0] = 1732584193;
                a.ya[1] = 4023233417;
                a.ya[2] = 2562383102;
                a.ya[3] = 271733878;
                a.Yd = a.total = 0
            }

            function f(a, b) {
                for (var c = a.Rn, d = 0; 64 > d; d += 4) c[d / 4] = b[d] | b[d + 1] << 8 | b[d + 2] << 16 | b[d + 3] << 24;
                for (var d = a.ya[0], e = a.ya[1], f = a.ya[2], g = a.ya[3], h, k, E, F = 0; 64 > F; ++F) 16 > F ? (h = g ^ e & (f ^ g), k = F) : 32 > F ? (h = f ^ g & (e ^ f), k = 5 * F + 1 & 15) : 48 > F ? (h = e ^ f ^ g, k = 3 * F + 5 & 15) : (h = f ^ (e | ~g), k = 7 * F & 15), E = g, g = f, f = e, e = e + (((d + h + n[F] + c[k] & 4294967295) <<
                    l[F] | (d + h + n[F] + c[k] & 4294967295) >>> 32 - l[F]) & 4294967295) & 4294967295, d = E;
                a.ya[0] = a.ya[0] + d & 4294967295;
                a.ya[1] = a.ya[1] + e & 4294967295;
                a.ya[2] = a.ya[2] + f & 4294967295;
                a.ya[3] = a.ya[3] + g & 4294967295
            }

            function g(a, b, c) {
                c || (c = b.length);
                a.total += c;
                for (var d = 0; d < c; ++d) a.buffer[a.Yd++] = b[d], 64 == a.Yd && (f(a, a.buffer), a.Yd = 0)
            }

            function h(a) {
                var b = Array(16),
                    c = 8 * a.total,
                    d = a.Yd;
                g(a, a.padding, 56 > d ? 56 - d : 64 - (d - 56));
                for (var e = 56; 64 > e; ++e) a.buffer[e] = c & 255, c >>>= 8;
                f(a, a.buffer);
                for (e = d = 0; 4 > e; ++e)
                    for (c = 0; 32 > c; c += 8) b[d++] = a.ya[e] >>
                        c & 255;
                return b
            }
            var k = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 0, 0, 0, 0, 64, 0, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 0, 0, 0, 0, 0],
                l = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21],
                n = [3614090360, 3905402710, 606105819, 3250441966, 4118548399,
                    1200080426, 2821735955, 4249261313, 1770035416, 2336552879, 4294925233, 2304563134, 1804603682, 4254626195, 2792965006, 1236535329, 4129170786, 3225465664, 643717713, 3921069994, 3593408605, 38016083, 3634488961, 3889429448, 568446438, 3275163606, 4107603335, 1163531501, 2850285829, 4243563512, 1735328473, 2368359562, 4294588738, 2272392833, 1839030562, 4259657740, 2763975236, 1272893353, 4139469664, 3200236656, 681279174, 3936430074, 3572445317, 76029189, 3654602809, 3873151461, 530742520, 3299628645, 4096336452, 1126891415, 2878612391, 4237533241,
                    1700485571, 2399980690, 4293915773, 2240044497, 1873313359, 4264355552, 2734768916, 1309151649, 4149444226, 3174756917, 718787259, 3951481745
                ];
            return {
                I: function () {
                    return H.F.Dc
                },
                N: function () {
                    return H.C.Dc
                },
                K: function () {
                    return {
                        rk: a,
                        kl: b,
                        ql: c
                    }
                }
            }
        };
        H.C.Dc = 192;
        H.O.eh(H.F.Dc, H.C.Dc, H.No);
        H.Oo = function () {
            function a(a, c) {
                c = H.escape(H.sj(c));
                a = H.escape(H.Nc(a, H.Eh));
                if (H.jc(c, a)) return [a, "<b>", c.substr(a.length), "</b>"].join("");
                for (var d = [], e = [], f = c.length - 1, g = 0, h = -1, k; k = c.charAt(g); ++g)
                    if (" " == k || "\t" == k) d.length && (k = g + 1, e.push({
                        t: d.join(""),
                        s: h,
                        e: k
                    }), d = [], h = -1);
                    else if (d.push(k), -1 == h) h = g;
                else if (g == f) {
                    k = h;
                    var l = g + 1;
                    e.push({
                        t: d.join(""),
                        s: k,
                        e: l
                    })
                }
                d = a.split(/\s+/);
                g = {};
                for (f = 0; h = d[f++];) g[h] = 1;
                k = -1;
                d = [];
                l = e.length - 1;
                for (f = 0; h = e[f]; ++f) g[h.t] ? (h = -1 == k, f == l ? d.push({
                        s: h ? f : k,
                        e: f
                    }) : h &&
                    (k = f)) : -1 < k && (d.push({
                    s: k,
                    e: f - 1
                }), k = -1);
                if (!d.length) return ["<b>", c, "</b>"].join("");
                f = [];
                for (g = h = 0; k = d[g]; ++g)(l = e[k.s].s) && f.push("<b>", c.substring(h, l - 1), "</b> "), h = e[k.e].e, f.push(c.substring(l, h));
                h < c.length && f.push("<b>", c.substring(h), "</b> ");
                return f.join("")
            }
            return {
                I: function () {
                    return H.F.Db
                },
                N: function () {
                    return H.C.Db
                },
                K: function () {
                    return {
                        bold: a
                    }
                }
            }
        };
        H.C.Db = 95;
        H.O.eh(H.F.Db, H.C.Db, H.Oo);
        H.Bp = function () {
            function a(a) {
                a = b(a, p, c);
                a = b(a, m, d);
                return b(a, s, e)
            }

            function b(a, b, c) {
                for (var d, e, f = 0; null != (d = b.exec(a));) e || (e = []), f < d.index && e.push(a.substring(f, d.index)), e.push(c(d[0])), f = b.lastIndex;
                if (!e) return a;
                f < a.length && e.push(a.substring(f));
                return e.join("")
            }

            function c(a) {
                return String.fromCharCode(a.charCodeAt(0) - 65248)
            }

            function d(a) {
                var b = a.charCodeAt(0);
                return 1 == a.length ? g.charAt(b - 65377) : 65438 == a.charCodeAt(1) ? h.charAt(b - 65395) : k.charAt(b - 65418)
            }

            function e(a) {
                var b = a.charCodeAt(0);
                return 12443 == a.charCodeAt(1) ? l.charAt(b - 12454) : n.charAt(b - 12495)
            }

            function f(a) {
                return eval('"\\u30' + a.split(",").join("\\u30") + '"')
            }
            var g = f("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C"),
                h = f("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC"),
                k = f("D1,D4,D7,DA,DD"),
                l = f("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC"),
                n = f("D1__,D4__,D7__,DA__,DD"),
                p = /[\uFF01-\uFF5E]/g,
                m = RegExp("([\uff73\uff76-\uff84\uff8a-\uff8e]\uff9e)|([\uff8a-\uff8e]\uff9f)|([\uff61-\uff9f])", "g"),
                t = "([" + f("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB") + "]\u309b)|([" + f("CF,D2,D5,D8,DB") + "]\u309c)",
                s = RegExp(t, "g");
            return {
                I: function () {
                    return H.F.Ic
                },
                N: function () {
                    return H.C.Ic
                },
                K: function () {
                    return {
                        Dn: a
                    }
                }
            }
        };
        H.C.Ic = 12;
        H.O.register(H.F.Ic, H.C.Ic, H.Bp);
        H.kp = function (a, b, c, d, e) {
            var f = H.dc ? "-moz-" : H.ub ? "-ms-" : H.gd ? "-o-" : H.Jd ? "-webkit-" : "",
                g = "." + H.$e + d,
                h = RegExp("(\\.(" + e.join("|") + ")\\b)"),
                k = [];
            return {
                addRule: function (a, d) {
                    if (b) {
                        if (c) {
                            for (var e = a.split(","), f = [], t = 0, s; s = e[t++];) s = h.test(s) ? s.replace(h, g + "$1") : g + " " + s, f.push(s);
                            a = f.join(",")
                        }
                        k.push(a, "{", d, "}")
                    }
                },
                vm: function () {
                    if (b && k.length) {
                        b = !1;
                        var c = H.ea("style");
                        c.setAttribute("type", "text/css");
                        (a || H.$g()).appendChild(c);
                        var d = k.join("");
                        k = null;
                        c.styleSheet ? c.styleSheet.cssText = d : c.appendChild(window.document.createTextNode(d))
                    }
                },
                prefix: function (a, b) {
                    var c = [a, b || ""];
                    f && (c = c.concat(b ? [a, f, b] : [f, a]));
                    return c.join("")
                }
            }
        };
        H.Vp = function () {
            function a(a) {
                var b = 0;
                a && (g || c(), d(), a in h ? b = h[a] : (H.xe(g, H.escape(a)), h[a] = b = g.offsetWidth, H.xe(g, "")));
                return b
            }

            function b() {
                g || c();
                d();
                k || (H.xe(g, "|"), k = g.offsetHeight);
                return k
            }

            function c() {
                g = H.ii(e.Xc);
                g.style.visibility = "hidden";
                f.appendChild(g)
            }

            function d() {
                var a = H.getTime();
                if (!n || n + 3E3 < a) n = a, a = H.getComputedStyle(g, "fontSize"), l && a == l || (h = {}, k = null, l = a)
            }
            var e, f, g, h, k, l, n;
            return {
                qa: function (a) {
                    f = a.Qg() || window.document.body
                },
                ga: function (a) {
                    e = a
                },
                I: function () {
                    return H.F.Cb
                },
                N: function () {
                    return H.C.Cb
                },
                K: function () {
                    return {
                        getWidth: a,
                        getHeight: b
                    }
                }
            }
        };
        H.C.Cb = 10;
        H.O.register(H.F.Cb, H.C.Cb, H.Vp);
        H.$o = function (a) {
            var b;
            (function () {
                function c(b) {
                    return a[b] || d
                }

                function d() {}
                a || (a = {});
                b = {
                    Lc: c("a"),
                    search: c("b"),
                    ne: c("c"),
                    ic: c("d"),
                    vd: c("e"),
                    fe: c("f"),
                    Nf: c("g"),
                    Of: c("h"),
                    Jf: c("i"),
                    Cd: c("j"),
                    ce: c("k"),
                    Kf: c("l"),
                    Mf: c("m"),
                    yf: c("n"),
                    Yc: c("o"),
                    Zc: c("p"),
                    Zd: c("q"),
                    Rc: c("r"),
                    ug: c("s"),
                    vg: c("t"),
                    Wc: c("u"),
                    Pf: c("w"),
                    Gf: c("x"),
                    Lf: c("y"),
                    If: c("z"),
                    Hf: c("aa"),
                    Qf: c("ab"),
                    Ce: c("ac")
                }
            })();
            return {
                Lc: function () {
                    return b.Lc()
                },
                search: function (a, d) {
                    b.search(a, d)
                },
                ne: function (a) {
                    b.ne(a)
                },
                ic: function (a) {
                    b.ic(a)
                },
                vd: function (a) {
                    return b.vd(a)
                },
                fe: function (a) {
                    b.fe(a)
                },
                Nf: function (a) {
                    b.Nf(a)
                },
                Of: function (a) {
                    b.Of(a)
                },
                Jf: function (a) {
                    b.Jf(a)
                },
                Cd: function (a, d) {
                    b.Cd(a, d)
                },
                ce: function (a, d) {
                    b.ce(a, d)
                },
                Kf: function () {
                    b.Kf()
                },
                Mf: function (a) {
                    b.Mf(a)
                },
                yf: function (a) {
                    b.yf(a)
                },
                Yc: function () {
                    b.Yc()
                },
                Zc: function () {
                    b.Zc()
                },
                Zd: function (a) {
                    b.Zd(a)
                },
                Rc: function (a, d) {
                    b.Rc(a, d)
                },
                ug: function (a) {
                    b.ug(a)
                },
                vg: function () {
                    b.vg()
                },
                Wc: function () {
                    b.Wc()
                },
                Lf: function () {
                    b.Lf()
                },
                Pf: function (a) {
                    b.Pf(a)
                },
                Gf: function () {
                    b.Gf()
                },
                If: function () {
                    b.If()
                },
                Hf: function () {
                    b.Hf()
                },
                Qf: function () {
                    b.Qf()
                },
                Ce: function (a, d) {
                    return b.Ce(a, d)
                }
            }
        };
        H.Mp = function () {
            function a(a, b, c, d) {
                var f = a.getId(),
                    g = a.ha();
                r.$f || e();
                b = [n, p, m, "?", t ? t + "&" : "", b ? b + "&" : ""].join("");
                var k = H.xb;
                a = [];
                k("q", g, a, H.Bj);
                r.gg || k("callback", "google.sbox.p" + l, a);
                if (s) {
                    for (var g = [], J = 4 + Math.floor(32 * Math.random()), S = 0, $; S < J; ++S) $ = 0.3 > Math.random() ? 48 + Math.floor(10 * Math.random()) : (0.5 < Math.random() ? 65 : 97) + Math.floor(26 * Math.random()), g.push(String.fromCharCode($));
                    g = g.join("");
                    k("gs_gbg", g, a)
                }
                k = H.ea("script");
                k.src = b + a.join("&");
                k.charset = "utf-8";
                w[f] = k;
                G = r.$f ? d : c;
                h.appendChild(k);
                return !0
            }

            function b() {
                return 0
            }

            function c() {
                return 0
            }

            function d(a) {
                var b = w[a];
                b && (h.removeChild(b), delete w[a])
            }

            function e() {
                for (var a in w) h.removeChild(w[a]);
                w = {};
                G = null
            }

            function f(a) {
                G && G(a, !1)
            }

            function g(a) {
                a || (a = H.Y);
                var b = window.google;
                r.gg ? b.ac.h = a : b.sbox["p" + l] = a
            }
            var h = H.$g(),
                k, l, n, p, m, t, s, r, w = {}, G, J = {
                    R: function (a) {
                        k = a.get(H.F.Pa, J);
                        l = a.wc().getId()
                    },
                    P: function (a) {
                        r = a;
                        0 == a.Hb && (a = k.Sf(), n = a.protocol, p = a.host, m = a.we, t = a.Mg, s = "https:" == window.document.location.protocol, g(f), (new window.Image).src =
                            n + p + "/generate_204")
                    },
                    I: function () {
                        return H.F.Ab
                    },
                    N: function () {
                        return H.C.Ph
                    },
                    K: function () {
                        return {
                            dd: a,
                            Dg: d,
                            Mb: H.Y,
                            Oe: b,
                            Pe: c
                        }
                    },
                    xa: function () {
                        g(null);
                        e()
                    }
                };
            return J
        };
        H.C.Ph = 6;
        H.O.register(H.F.Ab, H.C.Ph, H.Mp);
        H.mp = function () {
            function a(a) {
                if (!h) return !0;
                for (var b = !1, c = !1, f = 0, g; f < a.length; ++f)
                    if (g = a.charAt(f), !d.test(g) && (e.test(g) ? c = !0 : b = !0, c && b)) return !0;
                return !1
            }

            function b(a, b, c) {
                if (!h) return !0;
                var e = f.test(c),
                    k = g.test(b);
                return "ltr" == a ? e || k || d.test(c) || d.test(b) : !e || !k
            }

            function c(a) {
                var b = k;
                h && (e.test(a) ? b = "ltr" : d.test(a) || (b = "rtl"));
                return b
            }
            var d = RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),
                e = RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"),
                f = RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"),
                g = RegExp("(?:\\d|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),
                h = e.test("x"),
                k;
            return {
                qa: function (a) {
                    k = a.ud()
                },
                I: function () {
                    return H.F.Ib
                },
                N: function () {
                    return H.C.Ib
                },
                K: function () {
                    return {
                        Lq: a,
                        wn: b,
                        yd: c
                    }
                }
            }
        };
        H.C.Ib = 1;
        H.O.register(H.F.Ib, H.C.Ib, H.mp);
        H.wp = function () {
            function a(a, b, c, d, e) {
                var f = n(a);
                f || (f = {}, s.push({
                    element: a,
                    gn: f
                }));
                var g = f[b];
                g || (g = f[b] = [], f = a.Vl ? window : H.getWindow(a), f = l(b, f, g), H.rf(b) ? a.addEventListener ? a.addEventListener(b, f, !1) : a["on" + b] = f : a[b] = f);
                d = d || 0;
                g.push({
                    vn: !! e,
                    Wf: !1,
                    Pd: d,
                    zb: c
                });
                g.sort(m);
                c.Fm = b
            }

            function b(a, b) {
                var c = n(a);
                if (c && (c = c[b.Fm]))
                    for (var d = 0, e; e = c[d++];)
                        if (e.zb == b) {
                            e.Wf = !0;
                            break
                        }
            }

            function c(b, c, d, e) {
                a(r, b, c, d, e)
            }

            function d(a) {
                b(r, a)
            }

            function e(a, b) {
                var c = b || {}, d = r[a];
                d && d(c, c.wd)
            }

            function f(a, b, c) {
                a.addEventListener ?
                    a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
            }

            function g(a, b, c) {
                a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent("on" + b, c)
            }

            function h(a) {
                t ? (w || (w = [], f(window, "message", k)), w.push(a), a = window.location.href, window.postMessage("sbox.df", /HTTPS?:\/\//i.test(a) ? a : "*")) : window.setTimeout(a, 0)
            }

            function k(a) {
                w && (a && (a.source == window && "sbox.df" == a.data) && w.length) && (w.shift()(), w && w.length && window.postMessage("sbox.df", window.location.href))
            }

            function l(a, b, c) {
                return function (d, e) {
                    if (c.length) {
                        var f;
                        if (!(f = d)) {
                            f = {};
                            var g = b.event;
                            g && (g.keyCode && (f.keyCode = g.keyCode), f.un = !0)
                        }
                        f.wd = e || a;
                        for (var g = f, h, k, m = 0, l; l = c[m++];) l.Wf ? k = !0 : h || (l.vn ? p(l, g) : h = l.zb(g));
                        if (k)
                            for (m = 0; l = c[m];) l.Wf ? c.splice(m, 1) : ++m;
                        if (f.Ie) return delete f.Ie, f.un && (f = b.event || f), H.Sb(f), f.returnValue = !1
                    }
                }
            }

            function n(a) {
                for (var b = 0, c; b < s.length; ++b)
                    if (c = s[b], c.element == a) return c.gn;
                return null
            }

            function p(a, b) {
                h(function () {
                    a.zb(b)
                })
            }

            function m(a, b) {
                return b.Pd - a.Pd
            }
            var t = window.postMessage && !(H.ub || H.Hp || H.gd),
                s = [],
                r = {
                    Vl: 1
                }, w;
            return {
                I: function () {
                    return H.F.wa
                },
                N: function () {
                    return H.C.wa
                },
                K: function () {
                    return {
                        Na: a,
                        Ag: b,
                        fc: c,
                        A: d,
                        Aa: e,
                        listen: f,
                        unlisten: g,
                        defer: h
                    }
                },
                xa: function () {
                    w = null
                }
            }
        };
        H.C.wa = 2;
        H.O.register(H.F.wa, H.C.wa, H.wp);
        H.Lp = function () {
            function a(a) {
                e[a] = !0;
                f = a
            }

            function b() {
                var a = [],
                    b;
                for (b in e) a.push((0, window.parseInt)(b, 10));
                return a
            }

            function c() {
                return f
            }

            function d() {
                e = {};
                f = null
            }
            var e, f;
            return {
                P: function () {
                    d()
                },
                I: function () {
                    return H.F.Ja
                },
                N: function () {
                    return H.C.Ja
                },
                K: function () {
                    return {
                        add: a,
                        Zm: b,
                        Qm: c,
                        reset: d
                    }
                }
            }
        };
        H.C.Ja = 375;
        H.O.register(H.F.Ja, H.C.Ja, H.Lp);
        H.Sp = function () {
            function a(a) {
                var b = n.Va(),
                    c;
                c = [];
                var g = qUa;
                c[g.Ue] = H.Ue;
                c[g.Ro] = d(r.Fe);
                c[g.fq] = d(r.Xe);
                c[g.lq] = void 0 == a ? "" : a + "";
                c[g.Ja] = p.Zm().join("j");
                a = g.Ho;
                var u = "";
                m.Tf() ? u = "o" : t.Pc() && (u = t.Hi() + "");
                c[a] = u;
                a = g.Io;
                var u = "",
                    ca = t.Ba();
                if (ca) {
                    for (var P, S = 0, $ = 0, X; X = ca[$++];) {
                        var W = X;
                        X = W.I() + "";
                        W = W.Gc();
                        W.length && (X += "i" + W.join("i"));
                        X != P && (1 < S && (u += "l" + S), u += (P ? "j" : "") + X, S = 0, P = X);
                        ++S
                    }
                    1 < S && (u += "l" + S)
                }
                c[a] = u;
                c[g.Ap] = e(n.Lm());
                c[g.Np] = e(n.Om());
                c[g.nq] = w;
                c[g.mq] = H.getTime() - G;
                c[g.Op] = e(n.Pm());
                c[g.yp] =
                    l.Wm();
                if (P = l.Hm()) c[g.Po] = P.yn ? ["1", r.mg ? "a" : "", r.ng ? "c" : ""].join("") : "", c[g.Gp] = P.tn, c[g.Qs] = P.Ru;
                c[g.Cp] = l.cg();
                c[g.Dp] = l.Mm();
                if (P = l.ll()) c[g.Uo] = P.In, c[g.To] = P.Gn, c[g.Vo] = P.Jn;
                c[g.$p] = l.Vm();
                c[g.Tp] = l.Rm();
                c[g.yq] = l.Ym();
                c[g.So] = l.Im();
                c[g.rp] = d(r.fg);
                g = g.bj;
                P = (P = m.Eb()) ? P.U().ka("e") ? "1" : "" : "";
                c[g] = P;
                for (g = 0; P = s[g++];) a = P.Ya(), h[a] && (c[a] = void 0 == c[a] ? d(P.getValue()) : "");
                c = c.join(".").replace(f, "");
                k && J ? (g = b + c, P = k.kl(J), g = k.ql(g, P), g = g.slice(0, 8), g = k.rk(g)) : g = "";
                c = [c, g].join(".");
                return {
                    oq: b,
                    gs_l: c
                }
            }

            function b() {
                G = H.getTime();
                ++w;
                n.xc();
                p.reset();
                l.xc();
                for (var a = 0, b; b = s[a++];) b.reset()
            }

            function c(a) {
                J = a
            }

            function d(a) {
                return a ? a.replace(g, "-") : ""
            }

            function e(a) {
                return Math.max(a - G, 0)
            }
            var f = /\.+$/,
                g = /\./g,
                h = H.Ob(H.Rp),
                k, l, n, p, m, t, s, r, w = -1,
                G, J, u = {
                    R: function (a) {
                        var b = H.F;
                        k = a.get(b.Dc, u);
                        l = a.get(b.Ca, u);
                        n = a.get(b.Z, u);
                        p = a.get(b.Ja, u);
                        m = a.get(b.Ga, u);
                        t = a.get(b.ra, u);
                        s = a.Ia(b.fh, u);
                        H.Rg(a.Ia(b.RENDERER, u))
                    },
                    ga: function (a) {
                        J = a.Ki
                    },
                    P: function (a) {
                        r = a;
                        b()
                    },
                    I: function () {
                        return H.F.$a
                    },
                    N: function () {
                        return H.C.$a
                    },
                    K: function () {
                        return {
                            U: a,
                            reset: b,
                            Al: c
                        }
                    }
                };
            return u
        };
        H.C.$a = 9;
        H.O.register(H.F.$a, H.C.$a, H.Sp);
        H.cq = function () {
            function a(a, b) {
                if (t) {
                    for (var c = !1, d = 0, e; e = t[d++];) 2 == e.Tc(a, b) && (c = !0);
                    if (c) return
                }
                if (H.kd(a) || E.Rb || k && k.Rb()) H.wj(b) ? u && !J && (J = H.Le(u, "btnI", "1")) : J && (u.removeChild(J), J = null), g(b), G.search(a, b), f(), l.Aa(14, {
                    query: a
                })
            }

            function b(a) {
                g();
                G.ne(a);
                f()
            }

            function c(a) {
                g();
                G.ic(a);
                f()
            }

            function d(a) {
                g(1);
                G.Zd(a);
                f()
            }

            function e(a) {
                return G.vd(a)
            }

            function f() {
                n.Vf();
                n.ym();
                m.reset();
                r ? r.clear() : s.clear();
                p.Va() != p.Ha() && p.zm();
                w && w.clear()
            }

            function g(a) {
                h && E.Cm && h.qi(a)
            }
            var h, k, l, n, p, m, t,
                s, r, w, G, J, u, E, F = {
                    qa: function (a) {
                        u = a.Qg()
                    },
                    R: function (a) {
                        var b = H.F;
                        h = a.get(b.Mh, F);
                        k = a.get(b.gb, F);
                        l = a.get(b.wa, F);
                        n = a.get(b.Ca, F);
                        p = a.get(b.Z, F);
                        m = a.get(b.$a, F);
                        s = a.get(b.ra, F);
                        r = a.get(b.Bh, F);
                        w = a.get(b.Ea, F);
                        G = a.Zb();
                        t = a.Ia(b.Vh, F)
                    },
                    P: function (a) {
                        E = a
                    },
                    I: function () {
                        return H.F.Xa
                    },
                    N: function () {
                        return H.C.Xa
                    },
                    K: function () {
                        return {
                            search: a,
                            ne: b,
                            ic: c,
                            Zd: d,
                            vd: e
                        }
                    }
                };
            return F
        };
        H.C.Xa = 11;
        H.O.register(H.F.Xa, H.C.Xa, H.cq);
        H.jq = function () {
            function a(a) {
                return (a[f.Xd] || {}).j
            }

            function b(a) {
                return a[f.Qh]
            }

            function c(a, b) {
                var c = a[f.Qh],
                    e = a[f.mm],
                    g = {}, h = a[f.Xd];
                if (h)
                    for (var k in h) {
                        var l = h[k];
                        k in n && (l = n[k].parse(l));
                        g[k] = l
                    }
                return H.Hd(b, c, d(c, e), H.jg(g), !1, !0, !1, !1)
            }

            function d(a, b) {
                for (var c = !1, d = !1, f = !1, n = 0, p; p = b[n++];)
                    if (33 == (p[g.Wh] || 0) ? d = !0 : c = !0, d && c) {
                        f = !0;
                        break
                    }
                c = 0;
                d = [];
                for (n = 0; p = b[n++];) {
                    var u = p[g.Wh] || 0;
                    if (h[u] && (!f || 33 != u)) {
                        var E;
                        E = p[g.km];
                        l && (E = k.bold(a.toLowerCase(), H.rj(H.unescape(E))));
                        d.push(H.Bd(E, H.rj(H.unescape(E)),
                            c++, u, p[g.jm] || [], e(p)))
                    }
                }
                return d
            }

            function e(a) {
                return (a = a[g.Xd]) ? H.jg(a) : H.Yf
            }
            var f = oUa,
                g = gUa,
                h, k, l, n = {}, p = {
                    R: function (a) {
                        var b = H.F;
                        k = a.get(b.Db, p);
                        if (a = a.Ia(b.Ff, p))
                            for (var b = 0, c; c = a[b++];) n[c.yx()] = c
                    },
                    P: function (a) {
                        h = a.nb;
                        l = a.qg
                    },
                    I: function () {
                        return H.F.yb
                    },
                    N: function () {
                        return H.C.yb
                    },
                    K: function () {
                        return {
                            En: a,
                            dr: b,
                            Xf: c
                        }
                    }
                };
            return p
        };
        H.C.yb = 14;
        H.O.register(H.F.yb, H.C.yb, H.jq);
        H.kq = function () {
            function a(a) {
                var d = b(a);
                if (d) {
                    e && !a.Ji() && (a = e.kt(a));
                    f.Mn(a);
                    var k = a,
                        m = k.wb().ha(),
                        t = k.Ba();
                    g.isEnabled() && (t.length ? (k = !1 == k.I(), g.setSuggestions(m, t, k)) : g.clear());
                    c.Aa(3, {
                        input: m,
                        nd: t
                    })
                }
                h.Cd(a, d);
                return d
            }

            function b(a) {
                var b = d.Ha(),
                    c = f.Eb(),
                    b = b.toLowerCase(),
                    e = a.ha().toLowerCase();
                b == e ? c = !0 : (b = H.Nc(b), a = (e = a.wb()) ? e.Sa() : H.Nc(a.ha().toLowerCase()), c = c ? c.wb().Sa() : "", c = 0 == b.indexOf(a) ? 0 == b.indexOf(c) ? a.length >= c.length : !0 : !1);
                return c
            }
            var c, d, e, f, g, h, k = {
                    R: function (a) {
                        var b = H.F;
                        c = a.get(b.wa, k);
                        d = a.get(b.Z, k);
                        e = a.get(b.Zf, k);
                        f = a.get(b.Ga, k);
                        g = a.get(b.ra, k);
                        h = a.Zb()
                    },
                    I: function () {
                        return H.F.ec
                    },
                    N: function () {
                        return H.C.ec
                    },
                    K: function () {
                        return {
                            zb: a,
                            Vd: b
                        }
                    }
                };
            return k
        };
        H.C.ec = 15;
        H.O.register(H.F.ec, H.C.ec, H.kq);
        H.iq = function () {
            function a(a, b) {
                if (na && !(ra || $ && $.El())) {
                    a.Ye("ds", Ka.vh);
                    a.Ye("pq", Ja);
                    a.Gm();
                    var c = !0,
                        d = a.hi();
                    d > fa && (fa = d);
                    ++L;
                    var d = H.getTime(),
                        e;
                    for (e in wa) {
                        var f = wa[e].Sg();
                        2500 < d - f && R(e)
                    }
                    ta && (e = S.get(a)) && ((c = oa || a.xn()) && Ka.nn && a.rn(), V.zb(e), e.nh() && ++Ea, Y = null);
                    c && (Y = a, ba && !b || F())
                }
            }

            function b() {
                return 10 <= ya || 3 <= X.Pe() ? !0 : !1
            }

            function c() {
                sa = fa
            }

            function d() {
                return fa <= sa
            }

            function e() {
                Y = null
            }

            function f() {
                return L
            }

            function g() {
                return {
                    yn: ta,
                    tn: ta ? S.ho() : 0,
                    Ru: va
                }
            }

            function h() {
                return ta ? S.cg() :
                    0
            }

            function k() {
                return Ea
            }

            function l() {
                return {
                    In: Ba,
                    Gn: Pa,
                    Jn: Ta
                }
            }

            function n() {
                return Ha
            }

            function p() {
                return qa
            }

            function m(a) {
                a = ja.Xf(a, null);
                return V.Vd(a)
            }

            function t() {
                return Aa
            }

            function s() {
                for (var a = [], b = 0, c, d = 0; d <= ca; ++d) c = pa[d], 0 == c ? b++ : (b = 1 == b ? "0j" : 1 < b ? d + "-" : "", a.push(b + c), b = 0);
                return a.join("j")
            }

            function r() {
                ta && S.Pk()
            }

            function w(a) {
                ta && S.Xn(a)
            }

            function G(a, b) {
                return ja.Xf(a, b)
            }

            function J() {
                ta && S.xc();
                Aa = qa = Ha = Ta = Pa = Ba = Ea = va = ya = L = 0;
                pa = [];
                for (var a = 0; a <= ca; ++a) pa[a] = 0
            }

            function u(a) {
                Ja = a
            }

            function E(a) {
                return function (b,
                    c) {
                    Z(b, c, a)
                }
            }

            function F() {
                H.Lb(ba);
                ba = null;
                if (!(2 < X.Pe()) && Y) {
                    var a = [],
                        b = Y.U();
                    if (b)
                        for (var c in b) H.xb(c, b[c], a);
                    da.Kf();
                    a = a.join("&");
                    a = X.dd(Y, a, E(Y), Z);
                    Y.oi() || (++Ba, a ? (a = Y, wa[a.getId()] = a, ++ya) : ++Pa);
                    Y = null;
                    a = 100;
                    b = (ya - 2) / 2;
                    for (c = 1; c++ <= b;) a *= 2;
                    a < U && (a = U);
                    ba = window.setTimeout(F, a)
                }
            }

            function R(a) {
                X.Dg(a);
                delete wa[a];
                ya && --ya
            }

            function Z(a, b, c) {
                if (na) {
                    if (!c && (c = ja.En(a), c = wa[c], !c)) return;
                    if (!c.oi()) {
                        b && ++va;
                        a = ja.Xf(a, c);
                        if (ia) {
                            var d = W.Ha();
                            a = ia.Lx(a, d)
                        }
                        b && a.Tq();
                        ta && S.put(a);
                        c.hi() <= sa || (++Ta,
                            V.zb(a) || ++Ha, b = c, U = a.U().Ae("d"), b && (R(b.getId()), b = b.Sg(), b = H.getTime() - b, Aa += b, qa = Math.max(b, qa), ++pa[b > P ? ca : T[Math.floor(b / 100)]]));
                        a && (b = pUa, (a = a.U().ka(b.Qp)) && ga.Al(a))
                    }
                }
            }
            var T = [0, 1, 2, 3, 4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8],
                ca = T[T.length - 1] + 1,
                P = 100 * T.length - 1,
                S, $, X, W, ga, ja, V, ia, ha, da, na = !1,
                Y, fa = -1,
                wa, L, ya, va, Ea, Ba, Pa, Ta, Ha, qa, Aa, pa, U, ba, oa, ra, sa, ta, Ka, Ja, Da = {
                    R: function (a) {
                        var b = H.F;
                        S = a.get(b.nc, Da);
                        $ = a.get(b.gb, Da);
                        a.get(b.wa, Da);
                        W = a.get(b.Z, Da);
                        ga = a.get(b.$a, Da);
                        ja = a.get(b.yb, Da);
                        V = a.get(b.ec,
                            Da);
                        ia = a.get(b.gm, Da);
                        a.get(b.Ga, Da);
                        ha = a.get(b.Pa, Da);
                        a.get(b.ra, Da);
                        da = a.Zb()
                    },
                    P: function (a) {
                        X = ha.Jm();
                        Ka = a;
                        na = !0;
                        wa = {};
                        U = 0;
                        oa = a.Ri;
                        ra = a.Ii;
                        sa = -1;
                        ta = Ka.Dm && !! S;
                        Ja = a.Li
                    },
                    I: function () {
                        return H.F.Ca
                    },
                    N: function () {
                        return H.C.Ca
                    },
                    K: function () {
                        return {
                            wh: a,
                            Tf: b,
                            Vf: c,
                            Ih: d,
                            ym: e,
                            Wm: f,
                            Hm: g,
                            cg: h,
                            Mm: k,
                            ll: l,
                            Vm: n,
                            Rm: p,
                            Vd: m,
                            Ym: t,
                            Im: s,
                            Mb: r,
                            Yn: w,
                            Jh: G,
                            xc: J,
                            Lh: u
                        }
                    },
                    xa: function () {
                        na = !1;
                        H.Lb(ba);
                        wa = Y = ba = null;
                        c()
                    }
                };
            return Da
        };
        H.C.Ca = 13;
        H.O.register(H.F.Ca, H.C.Ca, H.iq);
        H.tq = function () {
            function a() {
                return e.Tf()
            }

            function b(a) {
                g = a;
                ++h;
                a.Fs() && ++k;
                f.yf && f.yf(k / h)
            }

            function c() {
                return g
            }

            function d() {
                g = null
            }
            var e, f, g, h, k, l = {
                    R: function (a) {
                        e = a.get(H.F.Ca, l);
                        f = a.Zb()
                    },
                    P: function () {
                        k = h = 0;
                        g = null
                    },
                    I: function () {
                        return H.F.Ga
                    },
                    N: function () {
                        return H.C.Ga
                    },
                    K: function () {
                        return {
                            Tf: a,
                            Mn: b,
                            Eb: c,
                            A: d
                        }
                    }
                };
            return l
        };
        H.C.Ga = 5;
        H.O.register(H.F.Ga, H.C.Ga, H.tq);
        H.uq = function () {
            function a() {
                return e
            }

            function b() {
                return f
            }

            function c() {
                e && e.Mb()
            }
            var d = {}, e, f, g, h = {
                    R: function (a) {
                        for (var b = H.F, c = a.Ia(b.Ab, h), e = 0, f; f = c[e++];) d[f.Oe()] = f;
                        g = a.get(b.Qb, h)
                    },
                    P: function (a) {
                        var b = "https:" == window.document.location.protocol,
                            c = g && g.isEnabled(),
                            b = b || c,
                            c = H.xb,
                            h = [];
                        c("client", a.Fe, h);
                        c("hl", a.Od, h);
                        c("gl", a.wi, h);
                        c("sugexp", a.fg, h);
                        c("gs_rn", H.Ue, h);
                        c("gs_ri", a.Xe, h);
                        a.authuser && c("authuser", a.authuser, h);
                        f = {
                            protocol: "http" + (b ? "s" : "") + "://",
                            host: a.mj || "clients1." + a.Pg,
                            we: a.we || "/complete/search",
                            Mg: h.length ? h.join("&") : ""
                        };
                        e && e.Oe() == a.Hb || (e = d[a.Hb])
                    },
                    I: function () {
                        return H.F.Pa
                    },
                    N: function () {
                        return H.C.Pa
                    },
                    K: function (d) {
                        return {
                            Jm: d == H.F.Ca ? a : H.Y,
                            Sf: b,
                            zr: c
                        }
                    }
                };
            return h
        };
        H.C.Pa = 16;
        H.O.register(H.F.Pa, H.C.Pa, H.uq);
        H.np = function () {
            function a(a) {
                k.oe(a)
            }

            function b() {
                return l
            }

            function c(a) {
                if (a in n) {
                    if (p) {
                        if (a == p.kh()) return;
                        f();
                        p.wk()
                    }
                    p = n[a];
                    k.setPanel(p)
                }
            }

            function d() {
                return l ? k.getHeight() : 0
            }

            function e() {
                l || (k.show(g()), l = !0)
            }

            function f() {
                l && (k.hide(), l = !1)
            }

            function g() {
                var a = H.fj(h);
                p.ok(a);
                return a
            }
            var h = {
                jn: !1,
                lh: "left",
                yk: !0,
                Pb: null,
                marginWidth: 0
            }, k, l, n = {}, p, m = {
                    R: function (a) {
                        var b = H.F;
                        k = a.get(b.Jb, m);
                        if (a = a.Ia(b.jf, m))
                            for (var b = 0, c; c = a[b++];) n[c.kh()] = c
                    },
                    P: function () {
                        l = !1
                    },
                    I: function () {
                        return H.F.Ua
                    },
                    N: function () {
                        return H.C.Ua
                    },
                    K: function () {
                        return {
                            Oa: b,
                            setPanel: c,
                            getHeight: d,
                            show: e,
                            hide: f,
                            oe: a
                        }
                    },
                    xa: function () {
                        f()
                    }
                };
            return m
        };
        H.C.Ua = 7;
        H.O.register(H.F.Ua, H.C.Ua, H.np);
        H.Jp = function () {
            function a() {
                var a = {};
                sa.Aa(13, a);
                !a.cancel && Za.Hg && sa.defer(ea.Kd);
                Ua.Lf()
            }

            function b() {
                sa.Aa(12);
                Ua.Wc()
            }

            function c() {
                Ba("rtl")
            }

            function d() {
                Ba("ltr")
            }

            function e() {
                ea.Ln()
            }

            function f(a) {
                ea.Fb() ? ea.Rl() : ea.$d(a)
            }

            function g() {
                var a = iUa;
                if (Za.ye == a.zq) return !1;
                if (Za.ye == a.Wp) return Ua.Qf(), !1;
                var b = Pa();
                if (b) switch (Za.ye) {
                case a.Eo:
                    if (Ta(b, !0)) return Ka.add(U.Ee), !0;
                    break;
                case a.Xp:
                    return ea.jd(b)
                }
                return !1
            }

            function h() {
                Za.Yi ? wa(5) : (ea.Oa() ? ea.Kd() : r(), R())
            }

            function k(a) {
                xa && a.ji() ==
                    xa.length && (mb && mb.clear(), Za.Xi && wa(2), Ua.Jf(xa))
            }

            function l(a) {
                oa && 0 == a.getPosition() && oa.Bk()
            }

            function n(a, b, c, d) {
                Za.Em && !a && ea.xf(!0);
                Za.Am && (!ea.Oa() && "mousedown" == c) && ea.$d(b);
                var e;
                Bb && Bb.zn(a, b, c) ? e = Bb : Bb = e = H.Uh(a, b, c);
                var f = b = !1;
                if (a != xa || "onremovechip" == c) H.jc(c, "key") ? Ka.add(U.Wl) : "paste" == c && Ka.add(U.$l), b = !0, Aa(a), sa.Aa(1, {
                    wd: c,
                    Pb: nb
                }), Ua.fe(a), f = H.getTime(), Qb || (Qb = f), gc = f, H.kd(a) && (d = !0), f = !0;
                a = pa.DONT_CARE;
                var g = e.$h(),
                    h = Na.Eb();
                if (Da)
                    for (var k = 0, m; m = Da[k++];) m = m.Tc(g, h), m > a && (a = m);
                switch (a) {
                case pa.Ci:
                    d = !0;
                    break;
                case pa.nm:
                    d = !1
                }
                d ? (b && ea.Nn(), Rb && e.setParameter("gs_is", 1), Ua.Mf(Rb), ta.wh(e), Bb = null) : f && (ea.clear(), ta.Vf());
                sa.Aa(2, {
                    wd: c
                })
            }

            function p(a) {
                (Rb = a) && Ka.add(U.Ul)
            }

            function m(a) {
                cc != a && ((cc = a) ? Ua.If() : Ua.Hf())
            }

            function t(a) {
                Ha(a)
            }

            function s() {
                ba.focus()
            }

            function r() {
                ba.blur()
            }

            function w() {
                return ba.$c()
            }

            function G(a, b, c) {
                H.jc(a, xa, !0) && (a = xa + a.substr(xa.length));
                c = c || H.Me(a.length);
                n(a, c, "", b);
                Ha(a, !0)
            }

            function J(a) {
                G(a, !0);
                ec = H.getTime();
                Ka.add(U.cm)
            }

            function u() {
                n(xa,
                    $(), "onremovechip")
            }

            function E(a) {
                Aa(a);
                ba.refresh();
                sa.Aa(4, {
                    Pb: nb,
                    input: a
                })
            }

            function F() {
                ba.select()
            }

            function R() {
                xa != eb && Aa(eb);
                sa.Aa(5, {
                    input: eb,
                    nd: ea.Ba(),
                    Pb: nb
                });
                ba.refresh();
                Ua.Of(eb)
            }

            function Z() {
                eb = xa
            }

            function T() {
                return ba.hh()
            }

            function ca() {
                return eb
            }

            function P() {
                return xa
            }

            function S() {
                return nb
            }

            function $() {
                return ba.Kb()
            }

            function X() {
                return ba.of()
            }

            function W() {
                return ba.getHeight()
            }

            function ga() {
                return ba.getWidth()
            }

            function ja() {
                return ba.xg()
            }

            function V() {
                return Qb
            }

            function ia() {
                return gc
            }

            function ha() {
                return ec
            }

            function da() {
                return 0 != Fc
            }

            function na() {
                if (Ab) {
                    if (Za.Tg) return !0;
                    for (var a = 0, b; b = hb[a++];)
                        if (b.isEnabled()) return !0
                }
                return !1
            }

            function Y(a) {
                if (a == xa) return !0;
                var b = xa.length;
                return a.substr(0, b) == xa ? ra.wn(nb, xa, a.substr(b)) : !1
            }

            function fa() {
                ba.Lg()
            }

            function wa(a) {
                Ja.search(xa, a)
            }

            function L(a) {
                xa && (Aa(""), ba.clear(), sa.Aa(1), ea.clear(), Ua.fe(xa));
                a && Ua.Gf()
            }

            function ya() {
                ec = gc = Qb = 0
            }

            function va(a) {
                ba.zg(a)
            }

            function Ea() {
                var a = Pa();
                a && Ta(a)
            }

            function Ba(a) {
                var b = $().getPosition();
                nb == a ? ea.Fb() && b == xa.length && (ea.Pc() ? Za.Rf && (a = ea.Oc(), Ja.search(a.X(), 6)) : Za.Bn && g()) : oa && 0 == b && oa.Bk()
            }

            function Pa() {
                if (ea.Fb()) {
                    var a = ea.Pc() ? ea.Oc() : ea.rd();
                    if (a.Dd()) return a
                }
                return null
            }

            function Ta(a, b) {
                var c = a.X();
                return H.Gq(eb, c) ? !1 : (Z(), b ? G(c, !0) : E(c), !0)
            }

            function Ha(a, b) {
                xa = a || "";
                qa();
                ba.refresh();
                b || (sa.Aa(4, {
                    Pb: nb,
                    input: xa
                }), Ua.Nf(xa))
            }

            function qa() {
                var a = ra.yd(xa);
                a != nb && (ba.Kc(a), nb = a)
            }

            function Aa(a) {
                xa = eb = a || "";
                qa()
            }
            var pa = R4,
                U = kUa,
                ba, oa, ra, sa, ta, Ka, Ja, Da, Na, ea, mb, Ab, hb, Ua, eb, xa,
                nb, Fc, Qb, gc, ec, Rb, cc, Bb, Za, bb = {
                    R: function (a) {
                        var b = H.F;
                        ba = a.get(b.ob, bb);
                        oa = a.get(b.gb, bb);
                        ra = a.get(b.Ib, bb);
                        sa = a.get(b.wa, bb);
                        ta = a.get(b.Ca, bb);
                        Ka = a.get(b.Ja, bb);
                        Ja = a.get(b.Xa, bb);
                        Da = a.Ia(b.kb, bb);
                        Na = a.get(b.Ga, bb);
                        ea = a.get(b.ra, bb);
                        mb = a.get(b.Ea, bb);
                        Ab = a.get(b.Sd, bb);
                        hb = a.Ia(b.Vc, bb);
                        Ua = a.Zb();
                        Fc = a.wc().zd()
                    },
                    ga: function (a) {
                        Za = a;
                        Da.sort(H.gj);
                        xa = eb = ba.Nm() || ""
                    },
                    P: function (a) {
                        Za = a;
                        cc = Rb = !1;
                        qa()
                    },
                    I: function () {
                        return H.F.Z
                    },
                    N: function () {
                        return H.C.Z
                    },
                    K: function () {
                        return {
                            Ui: a,
                            oo: b,
                            qo: c,
                            to: d,
                            fn: e,
                            cn: f,
                            jd: g,
                            no: h,
                            bn: k,
                            jo: l,
                            po: n,
                            Bo: p,
                            Zi: m,
                            uc: t,
                            pg: s,
                            Td: r,
                            dv: w,
                            rg: G,
                            bu: J,
                            cu: u,
                            yc: E,
                            Kh: F,
                            oj: R,
                            zm: Z,
                            hh: T,
                            Va: ca,
                            Ha: P,
                            yd: S,
                            Kb: $,
                            of: X,
                            getHeight: W,
                            getWidth: ga,
                            xg: ja,
                            Lm: V,
                            Om: ia,
                            Pm: ha,
                            uo: da,
                            yg: na,
                            br: Y,
                            Lg: fa,
                            search: wa,
                            clear: L,
                            xc: ya,
                            zg: va,
                            uh: Ea
                        }
                    }
                };
            return bb
        };
        H.C.Z = 3;
        H.O.register(H.F.Z, H.C.Z, H.Jp);
        H.wq = function () {
            function a(a) {
                a.Pb = Da;
                a.marginWidth = Ja;
                var b = Na.Pn;
                b || (b = "rtl" == Da ? "right" : "left");
                a.lh = b
            }

            function b(a, b, d) {
                a = Ha && Ha.Ew(b);
                R();
                if ((pa = b) && b.length) {
                    var e = b[0].X();
                    wa.Lq(e) && (e = va.Va());
                    Da = wa.yd(e);
                    e = !1;
                    d ? (oa = Y.Zl, e = fa.Hn(b, Da), d = uUa, b = b[0].U().ka(d.Hk), b = H.unescape(b), Ja = Ea.getWidth(b)) : (oa = Y.Nh, e = fa.render(V(), Da), Ja = 0);
                    a && (ba = Ha.yw(), c(Ha.uw()));
                    e ? E() : R()
                }
            }

            function c(a) {
                na();
                if (U != a) {
                    var b = U;
                    U = a;
                    da(b)
                }
            }

            function d() {
                if (G())
                    if (ra) {
                        var a = U;
                        U == pa.length - 1 ? ba = U = null : null == U ? U = 0 : ++U;
                        ba =
                            U;
                        ha(a, d)
                    } else E()
            }

            function e() {
                if (G())
                    if (ra) {
                        var a = U;
                        pa && 0 != U ? null == U ? U = pa.length - 1 : --U : ba = U = null;
                        ba = U;
                        ha(a, e)
                    } else E()
            }

            function f(a) {
                var b = a ? 4 : 3;
                J() ? (a = r(), fa.ve(a) || va.search(b), b = va.Va(), Aa.ce(b, a)) : va.search(b)
            }

            function g(a) {
                return fa.jd(a)
            }

            function h(a) {
                ba = U = a;
                a = pa[a];
                var b = va.Va();
                Aa.ce(b, a)
            }

            function k() {
                return ra
            }

            function l() {
                return sa
            }

            function n(a) {
                sa && !a && R();
                sa = a
            }

            function p() {
                return oa
            }

            function m() {
                return pa
            }

            function t() {
                return G() ? pa[0] : null
            }

            function s() {
                return U
            }

            function r() {
                return J() ?
                    pa[ba] : null
            }

            function w() {
                return ba
            }

            function G() {
                return !(!pa || !pa.length)
            }

            function J() {
                return null != ba
            }

            function u() {
                ra && !ta && (ta = window.setTimeout(R, Na.xk))
            }

            function E() {
                ra || (L.setPanel(ja()), L.show(), ra = !0, Aa.Yc())
            }

            function F() {
                ra && (ta && (H.Lb(ta), ta = null), L.hide(), ra = !1, Aa.Zc())
            }

            function R() {
                F();
                pa = null;
                oa = Y.EMPTY;
                null != U && fa.Ac(U);
                ba = U = null;
                fa.clear()
            }

            function Z() {
                ya.Vf();
                F()
            }

            function T() {
                null != U && fa.Ac(U);
                ba = U = null
            }

            function ca() {
                na();
                Ka = window.setTimeout(T, 0)
            }

            function P() {
                na()
            }

            function S(a) {
                if (G()) E();
                else {
                    var b = va.Va();
                    if (b) {
                        a = a || va.Kb();
                        b = H.Uh(b, a);
                        if (Pa) {
                            a = b.$h();
                            for (var c = Ta.Eb(), d = 0, e; e = Pa[d++];) e.Tc(a, c)
                        }
                        ya.wh(b)
                    }
                }
            }

            function $() {
                return fa.za()
            }

            function X() {
                return fa.qf()
            }

            function W() {
                ra = !1
            }

            function ga() {
                fa.$b()
            }

            function ja() {
                return H.C.ra
            }

            function V() {
                if (G() && oa == Y.Nh) {
                    for (var a = [], b = [], c = 0, d;
                        (d = Ba[c++]) && !d.getMessage(va.Va(), pa, b););
                    c = sUa;
                    (d = b ? b.length : 0) && (d -= ia(b, a, c.Do));
                    for (var e = 0; e < pa.length; ++e) a.push(pa[e]);
                    d && (d -= ia(b, a, c.Lo));
                    Na.Gg && a.push(1);
                    d && ia(b, a, c.Ko);
                    Na.Uf && a.push(2);
                    qa &&
                        qa.ox(a);
                    return a
                }
                return null
            }

            function ia(a, b, c) {
                for (var d = 0, e = 0, f; e < a.length; ++e)(f = a[e]) && f.position == c && (b.push(f), ++d);
                return d
            }

            function ha(a, b) {
                if (null == U || fa.hb(U))
                    if (da(a), null == U) va.oj();
                    else {
                        var c = fa.qd(pa[U]);
                        va.uc(c);
                        Aa.Pf(c)
                    } else fa.Ac(a), b()
            }

            function da(a) {
                na();
                null != a && fa.Ac(a);
                null != U && fa.bh(U)
            }

            function na() {
                Ka && (H.Lb(Ka), Ka = null)
            }
            var Y = hUa,
                fa, wa, L, ya, va, Ea, Ba, Pa, Ta, Ha, qa, Aa, pa, U, ba, oa, ra, sa, ta, Ka, Ja, Da, Na, ea = {
                    R: function (a) {
                        var b = H.F;
                        fa = a.get(b.gc, ea);
                        wa = a.get(b.Ib, ea);
                        L = a.get(b.Ua,
                            ea);
                        ya = a.get(b.Ca, ea);
                        va = a.get(b.Z, ea);
                        Ea = a.get(b.Cb, ea);
                        Ba = a.Ia(b.Te, ea);
                        Pa = a.Ia(b.kb, ea);
                        Ta = a.get(b.Ga, ea);
                        Ha = a.get(b.jl, ea);
                        qa = a.get(b.hm, ea);
                        Aa = a.Zb()
                    },
                    ga: function () {
                        Pa.sort(H.gj);
                        Ba.sort(H.Hq)
                    },
                    P: function (a) {
                        Na = a;
                        ba = U = null;
                        oa = Y.EMPTY;
                        ra = !1;
                        sa = !0;
                        Da = "";
                        Ja = 0
                    },
                    I: function () {
                        return H.F.ra
                    },
                    N: function () {
                        return H.C.ra
                    },
                    K: function () {
                        return {
                            setSuggestions: b,
                            Ck: c,
                            Rl: d,
                            Ln: e,
                            ve: f,
                            jd: g,
                            $m: h,
                            Oa: k,
                            isEnabled: l,
                            xf: n,
                            Sm: p,
                            Ba: m,
                            rd: t,
                            Zq: s,
                            Oc: r,
                            Hi: w,
                            Fb: G,
                            Pc: J,
                            Nn: u,
                            show: E,
                            hide: F,
                            clear: R,
                            Kd: Z,
                            yj: T,
                            Qr: ca,
                            A: P,
                            $d: S
                        }
                    },
                    Gd: function () {
                        var b = {
                            ok: a,
                            za: $,
                            qf: X,
                            wk: W,
                            $b: ga,
                            kh: ja
                        };
                        return [{
                            qa: H.Y,
                            R: H.Y,
                            ga: H.Y,
                            P: H.Y,
                            I: function () {
                                return H.F.jf
                            },
                            N: function () {
                                return H.C.ra
                            },
                            K: function () {
                                return b
                            },
                            Gd: H.Y,
                            xa: H.Y
                        }]
                    },
                    xa: function () {
                        ta && (H.Lb(ta), ta = null);
                        pa = null;
                        F()
                    }
                };
            return ea
        };
        H.C.ra = 17;
        H.O.register(H.F.ra, H.C.ra, H.wq);
        H.pp = function () {
            function a(a) {
                a != F && (F = a, a = a.za(), R ? a != R && u.replaceChild(a, R) : u.appendChild(a), R = a)
            }

            function b() {
                E || (E = u ? Math.max(u.offsetHeight, 0) : 0);
                return E
            }

            function c(a) {
                u.className = a.jn ? "gssb_e gsdd_a" : "gssb_e";
                var b = a.Pb || S;
                r != b && (r = b, H.qj(s, b));
                b = a.marginWidth;
                if (J != b) {
                    var c = G.style;
                    b ? (w.hasChildNodes() || w.appendChild(G), c.width = b + "px", H.dc && (c.paddingLeft = "1px")) : (w.hasChildNodes() && w.removeChild(G), c.paddingLeft = "");
                    J = b
                }
                X = a.yk;
                W = a.lh;
                k(Z, !0);
                k(P, !0);
                p.Aa(16);
                e()
            }

            function d() {
                E = 0;
                k(Z, !1);
                k(P, !1);
                p.Aa(11)
            }

            function e() {
                E = 0;
                g();
                if (P) {
                    var a = m.xm[nUa.Fp],
                        c = P.style;
                    "relative" != m.lf && (c.top = s.style.top, c.left = s.offsetLeft + w.offsetWidth + "px");
                    a = b() + a;
                    P.style.height = Math.max(a, 0) + "px";
                    h(P, u.offsetWidth)
                }
                F && F.$b()
            }

            function f(a) {
                if (T) ca != a && T.replaceChild(a, ca);
                else {
                    var b = s.insertRow(-1);
                    b.style.height = "0";
                    b.insertCell(-1);
                    T = b.insertCell(-1);
                    l.Oa() || (k(u, !1), k(s, !0), e());
                    Z = u;
                    T.appendChild(a)
                }
                ca = a
            }

            function g() {
                var a = F && F.qf(),
                    b = a ? a.offsetWidth : n.getWidth(),
                    c = $;
                c ? H.rf(c) && (c = null) : J || !X ? (u.style.width =
                    "", s.style.width = "") : (u.style.width = "100%", c = b + m.We[2], h(s, c));
                if ("relative" != m.lf) {
                    var d = n.of();
                    a && (d.Wb = H.hj(a).Wb);
                    var a = c,
                        e = m.We,
                        c = e[1],
                        e = e[0],
                        e = d.Qd + n.getHeight() + e;
                    "right" == W ? (a = H.getWindow(s), b = {
                        Kn: H.Jq(a) - (d.Wb - c + b),
                        Qd: e
                    }) : (d = d.Wb + c, "center" == W && a && (d += (b - a) / 2), b = {
                        Wb: d,
                        Qd: e
                    });
                    d = s.style;
                    d.top = b.Qd + "px";
                    d.left = d.right = "";
                    void 0 != b.Wb ? d.left = b.Wb + "px" : d.right = b.Kn + "px"
                }
                H.Bg && (d.zoom = "normal", d.zoom = 1)
            }

            function h(a, b) {
                H.lj(b) ? 0 < b && (a.style.width = b + "px") : a.style.width = b
            }

            function k(a, b) {
                a && (a.style.display =
                    b ? "" : "none")
            }
            var l, n, p, m, t, s, r, w, G, J, u, E, F, R, Z, T, ca, P, S, $, X = !0,
                W, ga = {
                    qa: function (a, b) {
                        S = a.ud();
                        b.addRule(".gssb_c", "border:0;position:absolute;z-index:989");
                        b.addRule(".gssb_e", ["border:1px solid #ccc;border-top-color:#d9d9d9;", b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);"), "cursor:default"].join(""));
                        b.addRule(".gssb_f", "visibility:hidden;white-space:nowrap");
                        b.addRule(".gssb_k", "border:0;display:block;position:absolute;top:0;z-index:988");
                        b.addRule(".gsdd_a", "border:none!important")
                    },
                    R: function (a) {
                        var b =
                            H.F;
                        l = a.get(b.Ua, ga);
                        n = a.get(b.Z, ga);
                        p = a.get(b.wa, ga);
                        t = a.wc().getId()
                    },
                    ga: function (a) {
                        m = a;
                        s = H.Jc();
                        s.className = H.$e + t + " gssb_c";
                        k(s, !1);
                        Z = s;
                        var b = s.insertRow(-1);
                        w = b.insertCell(-1);
                        w.className = "gssb_f";
                        G = H.Ka();
                        u = b.insertCell(-1);
                        u.className = "gssb_e";
                        u.style.width = "100%";
                        m.hn && (P = H.ea("iframe", H.$e + t + " gssb_k"), k(P, !1), (m.Yg || window.document.body).appendChild(P));
                        if ($ = m.Bm) H.lj($) && ($ += m.We[mUa.Tn]), h(s, $);
                        g();
                        (a.Yg || window.document.body).appendChild(s);
                        p.fc(8, e)
                    },
                    P: function (a) {
                        m = a;
                        s.style.position =
                            a.lf
                    },
                    I: function () {
                        return H.F.Jb
                    },
                    N: function () {
                        return H.C.Jb
                    },
                    K: function () {
                        return {
                            setPanel: a,
                            getHeight: b,
                            oe: f,
                            show: c,
                            hide: d,
                            $b: e
                        }
                    }
                };
            return ga
        };
        H.C.Jb = 8;
        H.O.register(H.F.Jb, H.C.Jb, H.pp);
        H.Kp = function () {
            function a(a, b) {
                Pa && (Pa = !1, Y.Ag(L, P), Y.Ag(L, S));
                b || (b = a);
                L.parentNode.replaceChild(a, L);
                b.appendChild(L);
                Ba && Ea.Vk && (H.ub || H.dc ? Y.defer(function () {
                    L.focus();
                    H.Nj(L, qa.getPosition())
                }) : L.focus());
                $()
            }

            function b() {
                return oa
            }

            function c(a) {
                var b = "rtl" == a == ("rtl" == Da);
                L.dir = a;
                if (ra) {
                    fa.Kc(a);
                    var c = U.parentNode;
                    c.removeChild(ra);
                    b ? H.Jj(ra, U) : c.insertBefore(ra, U)
                }
                oa && (oa.dir = a, c = oa.parentNode, c.removeChild(oa), b ? c.insertBefore(oa, U) : H.Jj(oa, U));
                0 != ya && (a = H.Ij(a), H.er(L, a, 0))
            }

            function d() {
                return qa
            }

            function e() {
                return H.hj(ba)
            }

            function f() {
                var a = ba ? ba.offsetHeight : 0;
                ea > a && (a = ea);
                return a
            }

            function g() {
                return mb ? mb : ba ? ba.offsetWidth : 0
            }

            function h() {
                var a = L.offsetWidth;
                Ea.Jg && (a -= L.offsetHeight);
                return a
            }

            function k() {
                return L.value
            }

            function l(a) {
                (Ea.$n ? L : U || Ab || L).style.background = a || "transparent"
            }

            function n() {
                pa = !0
            }

            function p() {
                L.select();
                V()
            }

            function m() {
                H.Cj && (L.value = "");
                L.value = da.Ha();
                H.Cj && (L.value = L.value);
                J()
            }

            function t() {
                if (!Ba) try {
                    L.focus(), Ba = !0, J()
                } catch (a) {}
            }

            function s() {
                Ba && (L.blur(),
                    Ba = !1)
            }

            function r() {
                return Ba
            }

            function w() {
                L.value = ""
            }

            function G() {
                var b = Na.get("gs_id");
                if (b) oa = Na.get("gs_ttc"), U = Na.get("gs_tti"), da.yg() && fa && (sa = fa.za(), ra = sa.parentNode);
                else {
                    b = H.Jc();
                    b.id = Na.getId("gs_id");
                    b.className = H.$e + va + " " + (Ea.vf || L.className);
                    var c = b.insertRow(-1),
                        d = b.style,
                        e = L.style;
                    d.width = mb ? mb + "px" : e.width;
                    d.height = ea ? ea + "px" : e.height;
                    d.padding = "0";
                    H.nj(L);
                    L.className = Ea.Xc;
                    Ja && (oa = c.insertCell(-1), oa.id = Na.getId("gs_ttc"), oa.style.whiteSpace = "nowrap");
                    U = c.insertCell(-1);
                    U.id = Na.getId("gs_tti");
                    U.className = "gsib_a";
                    da.yg() && fa && (sa = fa.za(), ra = c.insertCell(-1), ra.className = "gsib_b", ra.appendChild(sa));
                    a(b, U)
                }
                H.zh && H.Jd && (L.style.height = "1.25em", L.style.marginTop = "-0.0625em");
                u(b);
                ba = b
            }

            function J() {
                if (Ba) {
                    var a = L.value.length;
                    qa = H.Me(a);
                    H.Nj(L, a)
                }
            }

            function u(a) {
                Y.Na(a, "mouseup", function () {
                    L.focus()
                })
            }

            function E() {
                function a(c) {
                    Y.Na(L, c, ca, 10, b)
                }
                Y.Na(L, "keydown", R);
                (H.gd || Ea.Vn) && Y.Na(L, "keypress", T);
                Y.Na(L, "select", V, 10);
                var b = !1;
                a("mousedown");
                a("keyup");
                a("keypress");
                b = !0;
                a("mouseup");
                a("keydown");
                a("focus");
                a("blur");
                a("cut");
                a("paste");
                a("input");
                Y.Na(L, "compositionstart", F);
                Y.Na(L, "compositionend", F)
            }

            function F(a) {
                a = a.type;
                "compositionstart" == a ? da.Zi(!0) : "compositionend" == a && da.Zi(!1)
            }

            function R(a) {
                var b = a.keyCode;
                Aa = b;
                var c = (H.Jd || H.dc) && H.Kj(b) && na.Fb(),
                    d = b == ha.Bi,
                    e = b == ha.Se;
                ta = !1;
                b == ha.Ee && (ta = da.jd());
                d && ((b = na.Oc()) && Z(b) ? na.ve(a.shiftKey) : Y.defer(function () {
                    na.ve(a.shiftKey)
                }));
                if (c || d || e || ta) a.Ie = !0
            }

            function Z(a) {
                return (a = wa[a.I()].wz) && a()
            }

            function T(a) {
                var b = a.keyCode,
                    c = b == ha.Se,
                    d = b == ha.Ee && ta;
                if (b == ha.Bi || c || d) a.Ie = !0
            }

            function ca(a) {
                if (!Ka) {
                    var b = a.wd;
                    if (!(b.indexOf("key") || a.ctrlKey || a.altKey || a.shiftKey || a.metaKey)) n: if (a = a.keyCode, "keypress" != b) {
                        var c = H.Kj(a),
                            d;
                        if ("keydown" == b) {
                            if (d = 229 == a, da.Bo(d), c) break n
                        } else if (d = a != Aa, Aa = -1, !c || d) break n;
                        switch (a) {
                        case ha.Se:
                            da.no();
                            break;
                        case ha.Ek:
                            da.qo();
                            break;
                        case ha.Fk:
                            da.to();
                            break;
                        case ha.Ai:
                            da.fn();
                            break;
                        case ha.zi:
                            da.cn(qa);
                            break;
                        case ha.lk:
                            da.bn(qa);
                            break;
                        case ha.Gk:
                            da.jo(qa)
                        }
                    }
                    V();
                    da.po(L.value, qa, b)
                }
            }

            function P() {
                Ba = !0;
                da.oo()
            }

            function S() {
                Ba = !1;
                da.Ui()
            }

            function $() {
                Pa || (Pa = !0, Y.Na(L, "focus", P, 99), Y.Na(L, "blur", S, 99))
            }

            function X() {
                Ha || (Ha = window.setInterval(ga, Ea.zo || 50))
            }

            function W() {
                Ha && (H.Lb(Ha), Ha = null)
            }

            function ga() {
                ca({
                    wd: "polling"
                })
            }

            function ja() {
                H.dc && H.hr(L)
            }

            function V() {
                if (Ba) {
                    var a = H.Kb(L);
                    a && (qa = a)
                }
            }

            function ia() {
                var a;
                Y.listen(window, "pagehide", function () {
                    Ka = !0;
                    a = L.value
                });
                Y.listen(window, "pageshow", function (b) {
                    Ka = !1;
                    b.persisted && da.yc(a)
                })
            }
            var ha = T4,
                da, na, Y, fa, wa, L, ya, va, Ea, Ba, Pa = !1,
                Ta, Ha, qa = H.Me(0),
                Aa = -1,
                pa = !1,
                U, ba, oa, ra, sa, ta, Ka, Ja, Da, Na, ea, mb, Ab, hb = {
                    qa: function (a, b) {
                        Na = a;
                        L = a.je();
                        Da = a.ud();
                        a.ue() || (b.addRule(".gsib_a", "width:100%;padding:4px 6px 0"), b.addRule(".gsib_a,.gsib_b", "vertical-align:top"))
                    },
                    R: function (a) {
                        var b = H.F;
                        da = a.get(b.Z, hb);
                        Y = a.get(b.wa, hb);
                        na = a.get(b.ra, hb);
                        fa = a.get(b.Sd, hb);
                        wa = H.Rg(a.Ia(b.RENDERER, hb));
                        a = a.wc();
                        ya = a.zd();
                        va = a.getId()
                    },
                    ga: function (a) {
                        Ea = a;
                        ea = a.Ug;
                        mb = a.$q;
                        Ba = H.$c(L);
                        V();
                        H.ub && Y.Na(L, "beforedeactivate", function (a) {
                            pa && (pa = !1, a.Ie = !0)
                        }, 10);
                        H.dc && ia();
                        ba = L;
                        Ja = !! a.Ra[H.F.gb];
                        (da.uo() || da.yg() || Ja || a.bo) && G();
                        a.Qi && (Y.Na(L, "blur", W, 10), Y.Na(L, "focus", X, 10), Ta = !0);
                        Y.fc(8, ja);
                        E();
                        $()
                    },
                    P: function (a) {
                        Ea = a;
                        var b = a.Uk;
                        b && (Ab = Na.Fc(b));
                        L.setAttribute("autocomplete", "off");
                        L.setAttribute("spellcheck", a.spellcheck);
                        L.style.outline = a.yo ? "" : "none";
                        Ta && X()
                    },
                    I: function () {
                        return H.F.ob
                    },
                    N: function () {
                        return H.C.ob
                    },
                    K: function () {
                        return {
                            Vq: a,
                            hh: b,
                            Kc: c,
                            Kb: d,
                            of: e,
                            getHeight: f,
                            getWidth: g,
                            xg: h,
                            Nm: k,
                            zg: l,
                            Lg: n,
                            select: p,
                            refresh: m,
                            focus: t,
                            blur: s,
                            $c: r,
                            clear: w
                        }
                    },
                    xa: function () {
                        Ta &&
                            W();
                        Ea.Hg && Y.Ag(L, da.Ui)
                    }
                };
            return hb
        };
        H.C.ob = 4;
        H.O.register(H.F.ob, H.C.ob, H.Kp);
        H.fw = function () {
            function a(a, b) {
                if (!V) return !1;
                ga = b;
                G();
                for (var c = !1, d = 0, e; e = a[d++];) m(e) && (c = !0);
                return c
            }

            function b(a) {
                var b = F[a.I()];
                return b && b.dn ? b.dn(a) : !1
            }

            function c(a) {
                return F[a.I()].Vb(null, a, R)
            }

            function d(a) {
                var b = F[a.I()];
                if (b && b.qd) {
                    var c = E.Va();
                    return b.qd(a, c)
                }
                return a.X()
            }

            function e(a, b) {
                if (!V) return !1;
                ga = b;
                G();
                for (var c = !1, d = 0, e; e = a[d++];)
                    if (1 == e)
                        if (ha) ia.appendChild(ha);
                        else {
                            e = s();
                            var f = e.style;
                            f.textAlign = "center";
                            f.whiteSpace = "nowrap";
                            e.dir = ja;
                            f = H.Ka();
                            f.style.position = "relative";
                            da = H.Ka();
                            da.className = "gssb_g";
                            T.Uf && (da.style.paddingBottom = "1px");
                            var g = jUa;
                            t(T.Sl, da, g.Zv);
                            T.Hr ? t(T.Ne, da, g.Pv) : T.Ir && t(T.Tr, da, g.$v);
                            f.appendChild(da);
                            e.appendChild(f);
                            ha = e.parentNode
                        } else 2 == e ? na ? ia.appendChild(na) : (e = s(), f = e.style, f.padding = "1px 4px 2px 0", f.fontSize = "11px", f.textAlign = "right", f = H.ea("a"), f.id = "gssb_b", f.href = "http://www.google.com/support/websearch/bin/answer.py?hl=" + T.Od + "&answer=106230", f.innerHTML = T.xl, e.appendChild(f), na = e.parentNode) : 3 == e ? (e = $.pop()) ? ia.appendChild(e) :
                            (e = V.insertRow(-1), e.An = !0, e = e.insertCell(-1), f = H.ea("div", "gssb_l"), e.appendChild(f)) : m(e) && (c = !0);
                return c
            }

            function f(a) {
                r(a, Y);
                var b = J.Ba();
                b && u.Aa(9, {
                    index: a,
                    Rw: b[a],
                    ZC: X[a]
                })
            }

            function g(a) {
                r(a, "");
                u.Aa(10)
            }

            function h() {
                for (var a, b, c; c = P.pop();) a = c.I(), (b = ca[a]) || (b = ca[a] = []), b.push(c), a = c.za(), a.parentNode.removeChild(a);
                for (; a = ia.firstChild;) a = ia.removeChild(a), a.An ? $.push(a) : a != ha && a != na && S.push(a);
                X = []
            }

            function k(a) {
                return (a = X[a]) ? a.hb() : !1
            }

            function l() {
                G()
            }

            function n() {
                return V
            }

            function p() {
                return T.Pl ||
                    ja == ga ? W : null
            }

            function m(a) {
                var b = a.I(),
                    c = F[b];
                if (!c) return !1;
                var d = (b = ca[b]) && b.pop();
                d || (d = c.Tb(R));
                c.render(a, d);
                P.push(d);
                var e = d.za(),
                    b = s();
                b.className = "gssb_a " + T.Bf;
                b.appendChild(e);
                if (void 0 !== a.Ya) {
                    X.push(d);
                    var d = ga,
                        f = a.Ya();
                    T.Es && (e.onmouseover = function () {
                        J.Ck(f)
                    }, e.onmouseout = function () {
                        J.Qr()
                    });
                    e.onclick = function (b) {
                        E.Td();
                        a.Dd() && E.uc(a.X());
                        J.yj();
                        J.$m(f);
                        b = b || H.getWindow(e).event;
                        c.tb(b, a, R)
                    }
                } else d = ja;
                H.qj(b, d);
                return !0
            }

            function t(a, b, c) {
                var d = H.ea("input");
                d.type = "button";
                d.value =
                    H.unescape(a);
                d.onclick = function () {
                    R.search(E.Ha(), c)
                };
                var e;
                if (T.Ol) {
                    a = "lsb";
                    e = H.ea("span");
                    var f = H.ea("span");
                    e.className = "ds";
                    f.className = "lsbb";
                    e.appendChild(f);
                    f.appendChild(d)
                } else a = "gssb_h", e = d;
                d.className = a;
                b.appendChild(e)
            }

            function s() {
                var a = S.pop();
                if (a) return ia.appendChild(a), a.firstChild;
                a = V.insertRow(-1);
                a = a.insertCell(-1);
                a.className = T.Bf;
                a.onmousedown = w;
                return a
            }

            function r(a, b) {
                var c = X[a];
                c && c.hb() && (c.za().parentNode.parentNode.className = b)
            }

            function w(a) {
                a = a || H.getWindow(V).event;
                a.stopPropagation ? a.stopPropagation() : H.gd || H.ub && E.Lg();
                return !1
            }

            function G() {
                if (da) {
                    var a = T.Ok ? T.Ok : E.getWidth() - 3;
                    0 < a && (da.style.width = a + "px")
                }
            }
            var J, u, E, F, R, Z, T, ca = {}, P = [],
                S = [],
                $ = [],
                X = [],
                W, ga, ja, V, ia, ha, da, na, Y, fa = {
                    qa: function (a, b) {
                        Z = a;
                        ja = a.ud();
                        b.addRule(".gssb_a", "padding:0 7px");
                        b.addRule(".gssb_a,.gssb_a td", "white-space:nowrap;overflow:hidden;line-height:22px");
                        b.addRule("#gssb_b", "font-size:11px;color:#36c;text-decoration:none");
                        b.addRule("#gssb_b:hover", "font-size:11px;color:#36c;text-decoration:underline");
                        b.addRule(".gssb_g", "text-align:center;padding:8px 0 7px;position:relative");
                        b.addRule(".gssb_h", ["font-size:15px;height:28px;margin:0.2em", H.Jd ? ";-webkit-appearance:button" : ""].join(""));
                        b.addRule(".gssb_i", "background:#eee");
                        b.addRule(".gss_ifl", "visibility:hidden;padding-left:5px");
                        b.addRule(".gssb_i .gss_ifl", "visibility:visible");
                        b.addRule("a.gssb_j", "font-size:13px;color:#36c;text-decoration:none;line-height:100%");
                        b.addRule("a.gssb_j:hover", "text-decoration:underline");
                        b.addRule(".gssb_l",
                            "height:1px;background-color:#e5e5e5");
                        b.addRule(".gssb_m", "color:#000;background:#fff")
                    },
                    R: function (a) {
                        var b = H.F;
                        J = a.get(b.ra, fa);
                        u = a.get(b.wa, fa);
                        E = a.get(b.Z, fa);
                        R = a.get(b.Xa, fa);
                        F = H.Rg(a.Ia(b.RENDERER, fa))
                    },
                    ga: function (a) {
                        T = a;
                        V = H.Jc();
                        a = H.ea("tbody");
                        V.appendChild(a);
                        ia = V.getElementsByTagName("tbody")[0]
                    },
                    P: function (a) {
                        T = a;
                        var b = a.uf;
                        b && (W = Z.Fc(b));
                        V.className = a.jr || "gssb_m";
                        Y = a.ir || "gssb_i"
                    },
                    I: function () {
                        return H.F.gc
                    },
                    N: function () {
                        return H.C.gc
                    },
                    K: function () {
                        return {
                            Hn: a,
                            qd: d,
                            ve: c,
                            jd: b,
                            render: e,
                            bh: f,
                            Ac: g,
                            clear: h,
                            hb: k,
                            $b: l,
                            za: n,
                            qf: p
                        }
                    }
                };
            return fa
        };
        H.C.gc = 18;
        H.O.register(H.F.gc, H.C.gc, H.fw);
        H.hq = function () {
            function a(a) {
                h(a);
                var b = a.wb();
                if ((!b || !b.vl()) && p)
                    for (b = 0; b < p.length; ++b) p[b].update(a)
            }

            function b(a) {
                var b = n[a.Gh()] || null,
                    c = !1;
                if (b)++m, c = !0;
                else if (p && !a.vl())
                    for (var d = 0; d < p.length; ++d)
                        if (b = p[d].get(a)) {
                            h(b);
                            ++t;
                            break
                        }
                b && (d = a.ha(), d != b.ha() ? b = H.Hd(a, d, b.Ba(), b.U(), b.nh(), b.Ud(), c, b.Ji()) : c && b.Tq());
                return b
            }

            function c() {
                return m
            }

            function d() {
                return t
            }

            function e() {
                t = m = 0
            }

            function f(a) {
                var b, c, d, e;
                for (e in n)
                    for (b = n[e], b = b.Ba(), d = 0; c = b[d++];)
                        if (c.I() == a) {
                            delete n[e];
                            break
                        }
                k()
            }

            function g() {
                n = {};
                k()
            }

            function h(a) {
                a && a.Ud() && (n[a.wb().Gh()] = a)
            }

            function k() {
                if (p)
                    for (var a = 0; a < p.length; ++a) p[a].reset()
            }

            function l(a, b) {
                return b.Fa() - a.Fa()
            }
            var n = {}, p, m, t, s = {
                    R: function (a) {
                        p = a.Ia(H.F.qc, s);
                        p.sort(l)
                    },
                    P: function () {
                        e()
                    },
                    I: function () {
                        return H.F.nc
                    },
                    N: function () {
                        return H.C.nc
                    },
                    K: function () {
                        return {
                            put: a,
                            get: b,
                            ho: c,
                            cg: d,
                            xc: e,
                            Xn: f,
                            Pk: g
                        }
                    }
                };
            return s
        };
        H.C.nc = 21;
        H.O.register(H.F.nc, H.C.nc, H.hq);
        H.Zw = function (a, b, c, d, e, f, g, h, k, l, n, p, m, t, s) {
            var r = {
                Yt: function () {
                    return a
                },
                Fa: function () {
                    return b
                },
                Aw: function () {
                    return c
                },
                zw: function () {
                    return d
                },
                uB: function () {
                    return e
                },
                tB: function () {
                    return f
                },
                rw: function () {
                    return g
                },
                eb: function (a, b) {
                    return h ? h(r, a, b) : !1
                },
                El: function () {
                    return k
                },
                Vi: function () {
                    return l
                },
                Rb: function () {
                    return n
                },
                wf: function () {
                    return p
                },
                EB: function (a) {
                    return m ? m(r, a) : !0
                },
                remove: function (a) {
                    t && t(r, a)
                },
                qB: function () {
                    return s
                },
                equals: function (d) {
                    return r == d || d && d.Yt() == a && d.Fa() == b &&
                        d.Aw() == c
                }
            };
            return r
        };
        H.BA = function () {
            function a(a) {
                if (f(a)) return !1;
                var b = P[S];
                l(b);
                P.push(a);
                P.sort(u);
                var c = E(a);
                R.TB(a, c);
                b && k(b);
                F();
                return !0
            }

            function b(b) {
                b = H.Vt(b || window.location.href);
                for (var c = P.length, d; d = P[--c];) d.EB(b) || n(d, !1);
                for (c = 0; d = ca[c++];)
                    if (d = d.tx(b))
                        for (var e = 0, f; f = d[e++];) a(f)
            }

            function c() {
                for (var a = P.length, b; b = P[--a];)
                    if (b = b.rw()) return b;
                return ""
            }

            function d() {
                return !!P.length
            }

            function e() {
                return -1 != S
            }

            function f(a) {
                return -1 != E(a)
            }

            function g(a) {
                return e() && E(a) == S
            }

            function h() {
                d() && k(P[P.length -
                    1])
            }

            function k(a) {
                a = E(a);
                a != S && (e() && R.Ac(S), Z.Td(), S = a, e() && R.bh(S))
            }

            function l(a) {
                e() && (a = E(a), R.Ac(a), a == S && (S = -1))
            }

            function n(a, b) {
                var c = E(a);
                if (-1 == c) return !1;
                var d = P[S];
                l(d);
                P.splice(c, 1);
                R.Dt(c);
                d && k(d);
                F();
                a.remove( !! b);
                Z.pg();
                b && Z.cu();
                return !0
            }

            function p() {
                0 < S && (R.Ac(S), --S, R.bh(S))
            }

            function m() {
                e() && (S + 1 == P.length ? (R.Ac(S), S = -1, Z.pg()) : (R.Ac(S), ++S, R.bh(S)))
            }

            function t() {
                n(P[S], !0)
            }

            function s() {
                e() && (l(P[S]), Z.pg())
            }

            function r() {
                return $
            }

            function w() {
                for (var a = 0, b; b = P[a++];)
                    if (b.Rb()) return !0;
                return !1
            }

            function G() {
                for (var a = P.length, b; b = P[--a];)
                    if (b = b.wf()) return b;
                return ""
            }

            function J() {
                return P.slice(0)
            }

            function u(a, b) {
                return a.Fa() - b.Fa()
            }

            function E(a) {
                for (var b = 0, c = P.length; b < c; ++b)
                    if (P[b].equals(a)) return b;
                return -1
            }

            function F() {
                for (var a = 0, b; b = P[a++];)
                    if (b.El()) {
                        T.xf(!1);
                        $ = !0;
                        return
                    }
                T.xf(!0);
                $ = !1
            }
            var R, Z, T, ca, P = [],
                S = -1,
                $ = !1,
                X = {
                    R: function (a) {
                        var b = H.F;
                        R = a.get(b.Af, X);
                        Z = a.get(b.Z, X);
                        T = a.get(b.ra, X);
                        ca = a.Ia(b.De, X)
                    },
                    P: function () {
                        b()
                    },
                    I: function () {
                        return H.F.gb
                    },
                    N: function () {
                        return H.C.gb
                    },
                    K: function () {
                        return {
                            A: a,
                            qh: b,
                            rw: c,
                            eb: d,
                            B: e,
                            isActive: f,
                            $E: g,
                            Bk: h,
                            select: k,
                            Qu: l,
                            Dt: n,
                            Qw: p,
                            Pw: m,
                            SB: t,
                            dB: s,
                            El: r,
                            Rb: w,
                            wf: G,
                            oB: J
                        }
                    }
                };
            return X
        };
        H.C.gb = 22;
        H.O.register(H.F.gb, H.C.gb, H.BA);
        H.CA = function () {
            function a(a, b) {
                var f = c.DONT_CARE;
                if (e)
                    for (var l = d.oB(), n = 0, p; p = l[n++];) p.eb(a, b) && (f = c.Ci);
                return f
            }

            function b() {
                return 11
            }
            var c = R4,
                d, e, f = {
                    R: function (a) {
                        d = a.get(H.F.gb, f)
                    },
                    P: function (a) {
                        e = !! a.Ra[H.C.bq]
                    },
                    I: function () {
                        return H.F.kb
                    },
                    N: function () {
                        return H.C.bq
                    },
                    K: function () {
                        return {
                            Tc: a,
                            Fa: b
                        }
                    }
                };
            return f
        };
        H.C.bq = 112;
        H.O.register(H.F.kb, H.C.bq, H.CA);
        H.DA = function () {
            function a(a, b) {
                function c() {
                    var a = H.ea("span", "gscp_e");
                    d.appendChild(a)
                }
                var d = H.ea("a", "gscp_a");
                n && (d.style.margin = n + "px");
                l && (d.style.height = d.style.lineHeight = l + "px");
                H.Ur(d);
                d.href = "#";
                d.onclick = function () {
                    h.defer(function () {
                        f.select(a)
                    });
                    return !1
                };
                d.onfocus = function () {
                    f.select(a)
                };
                d.onblur = function () {
                    f.Qu(a)
                };
                d.onkeydown = e;
                var g = a.Aw();
                if (g) {
                    var p = a.uB(),
                        J = a.tB();
                    if (a.zw()) {
                        var u = H.ea("span", "gscp_f"),
                            E = u.style;
                        E.width = p + "px";
                        E.height = J + "px";
                        E.background = ["url(", g, ") no-repeat ",
                            a.zw()
                        ].join("")
                    } else u = H.ea("img", "gscp_f"), u.src = g, u.width = p, u.height = J;
                    J < l && (u.style.marginBottom = (l - J) / 2 + "px");
                    d.appendChild(u)
                }
                c();
                g = H.ea("span", "gscp_c");
                H.Tl(g, a.Yt());
                d.appendChild(g);
                a.Vi() ? (g = H.ea("span", "gscp_d"), g.innerHTML = "&times;", g.onclick = function (b) {
                    f.Dt(a, !0);
                    return H.Sb(b)
                }, d.appendChild(g)) : c();
                k && (b >= k.childNodes.length ? k.appendChild(d) : k.insertBefore(d, k.childNodes[b]))
            }

            function b(a) {
                if (a = k.childNodes[a]) a.className = "gscp_a gscp_b", a.focus()
            }

            function c(a) {
                if (a = k.childNodes[a]) a.className =
                    "gscp_a"
            }

            function d(a) {
                k.removeChild(k.childNodes[a])
            }

            function e(a) {
                a = a || window.event;
                var b = T4,
                    c = a.keyCode,
                    d = "rtl" == g.yd();
                switch (c) {
                case b.Ek:
                    d ? f.Pw() : f.Qw();
                    break;
                case b.Fk:
                    d ? f.Qw() : f.Pw();
                    break;
                case b.lk:
                case b.Gk:
                    f.SB();
                    break;
                case b.Se:
                case b.Lt:
                    f.dB();
                default:
                    return
                }
                H.Sb(a)
            }
            var f, g, h, k, l, n, p = {
                    qa: function (a, b) {
                        b.addRule(".gscp_a,.gscp_c,.gscp_d,.gscp_e,.gscp_f", "display:inline-block;vertical-align:bottom");
                        b.addRule(".gscp_f", "border:none");
                        b.addRule(".gscp_a", ["background:#d9e7fe;border:1px solid #9cb0d8;cursor:default;outline:none;text-decoration:none!important;",
                            b.prefix("user-select:none;")
                        ].join(""));
                        b.addRule(".gscp_a:hover", "border-color:#869ec9");
                        b.addRule(".gscp_a.gscp_b", "background:#4787ec;border-color:#3967bf");
                        b.addRule(".gscp_c", "color:#444;font-size:13px;font-weight:bold");
                        b.addRule(".gscp_d", "color:#aeb8cb;cursor:pointer;font:21px arial,sans-serif;line-height:inherit;padding:0 7px");
                        if (H.Du || H.Yk && H.Cu) b.addRule(".gscp_d", "position:relative;top:1px"), H.ub && b.addRule(".gscp_c", "position:relative;top:1px");
                        b.addRule(".gscp_a:hover .gscp_d", "color:#575b66");
                        b.addRule(".gscp_c:hover,.gscp_a .gscp_d:hover", "color:#222");
                        b.addRule(".gscp_a.gscp_b .gscp_c,.gscp_a.gscp_b .gscp_d", "color:#fff");
                        b.addRule(".gscp_e", "height:100%;padding:0 4px")
                    },
                    R: function (a) {
                        var b = H.F;
                        f = a.get(b.gb, p);
                        g = a.get(b.Z, p);
                        h = a.get(b.wa, p)
                    },
                    ga: function (a) {
                        a.Ra[H.F.gb] && (n = a.Rt, k = g.hh(), (a = a.Ug) && (l = a - 2 * (n + 1)))
                    },
                    I: function () {
                        return H.F.Af
                    },
                    N: function () {
                        return H.C.Af
                    },
                    K: function () {
                        return {
                            TB: a,
                            bh: b,
                            Ac: c,
                            Dt: d
                        }
                    }
                };
            return p
        };
        H.C.Af = 23;
        H.O.register(H.F.Af, H.C.Af, H.DA);
        H.tD = function () {
            function a() {
                n && k.jw(h)
            }

            function b() {
                n && k.uu(h)
            }

            function c() {
                n && l.jw(h)
            }

            function d() {
                n && l.uu(h)
            }
            var e, f, g, h, k, l, n = !1,
                p = {
                    qa: function (a, b) {
                        function c(a) {
                            return ["box-shadow:", a, "-moz-box-shadow:", a, "-webkit-box-shadow:", a].join("")
                        }
                        g = a;
                        b.addRule(".gsfe_a", ["border:1px solid #b9b9b9;border-top-color:#a0a0a0;", c("inset 0px 1px 2px rgba(0,0,0,0.1);")].join(""));
                        b.addRule(".gsfe_b", ["border:1px solid #4d90fe;outline:none;", c("inset 0px 1px 2px rgba(0,0,0,0.3);")].join(""))
                    },
                    R: function (a) {
                        var b =
                            H.F;
                        e = a.get(b.wa, p);
                        f = a.get(b.Z, p)
                    },
                    ga: function (f) {
                        var n = f.xs;
                        if (h = n ? g.Fc(n) : null) e.fc(S4.vv, c), e.fc(S4.uv, d), e.Na(h, "mouseover", a), e.Na(h, "mouseout", b), k = H.Sz(f.Tu || "gsfe_a"), l = H.Sz(f.Su || "gsfe_b")
                    },
                    P: function () {
                        n = !0;
                        h && f.dv() && l.jw(h)
                    },
                    I: function () {
                        return H.F.Wd
                    },
                    N: function () {
                        return H.C.Mz
                    },
                    xa: function () {
                        n = !1;
                        h && (k.uu(h), l.uu(h))
                    }
                };
            return p
        };
        H.C.Mz = 190;
        H.O.register(H.F.Wd, H.C.Mz, H.tD);
        H.Sz = function (a) {
            var b = RegExp("(?:^|\\s+)" + a + "(?:$|\\s+)");
            return {
                jw: function (c) {
                    c && !b.test(c.className) && (c.className += " " + a)
                },
                uu: function (a) {
                    a && (a.className = a.className.replace(b, " "))
                }
            }
        };
        H.or = function () {
            function a(a) {
                a = f.getWidth(a);
                var b = d.xg();
                return a < b
            }

            function b(a) {
                c(a, !0)
            }

            function c(b, c) {
                if (g && a(d.Ha())) {
                    if (!h || c) e.Aa(6, b), h = !0
                } else h && (e.Aa(7), h = !1)
            }
            var d, e, f, g, h = !0,
                k = {
                    R: function (a) {
                        var b = H.F;
                        e = a.get(b.wa, k);
                        d = a.get(b.Z, k);
                        f = a.get(b.Cb, k)
                    },
                    ga: function () {
                        var a = e.fc;
                        a(S4.rr, b);
                        a(S4.Sh, b);
                        a(S4.Th, b);
                        a(S4.mk, c)
                    },
                    P: function (a) {
                        g = !! a.Ra[H.F.Ta];
                        c(null, !0)
                    },
                    I: function () {
                        return H.F.Ta
                    },
                    N: function () {
                        return H.C.Ta
                    },
                    K: function () {
                        return {
                            Pq: a
                        }
                    }
                };
            return k
        };
        H.C.Ta = 46;
        H.O.register(H.F.Ta, H.C.Ta, H.or);
        H.qr = function () {
            function a() {
                return d
            }
            var b, c, d, e, f = {
                    qa: function (a) {
                        e = a
                    },
                    R: function (a) {
                        b = a.get(H.F.ob, f);
                        c = a.wc()
                    },
                    ga: function () {
                        d = e.get("gs_lc");
                        if (!d) {
                            d = H.Ka();
                            d.id = e.getId("gs_lc");
                            d.style.position = "relative";
                            var a = c.zd(),
                                f = e.je().style;
                            2 == a && (f.overflow = "hidden");
                            f.background = "transparent url(data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw%3D%3D)";
                            f.position = "absolute";
                            f.zIndex = 6;
                            b.Vq(d)
                        }
                    },
                    I: function () {
                        return H.F.Bb
                    },
                    N: function () {
                        return H.C.Bb
                    },
                    K: function () {
                        return {
                            Jl: a
                        }
                    }
                };
            return f
        };
        H.C.Bb = 43;
        H.O.register(H.F.Bb, H.C.Bb, H.qr);
        H.GA = function () {
            function a() {
                return k
            }

            function b() {
                g && k && !e.Ha() ? h || (d.show(), h = !0) : c()
            }

            function c() {
                h && (d.hide(), h = !1)
            }
            var d, e, f, g, h = !0,
                k, l = {
                    R: function (a) {
                        var b = H.F;
                        d = a.get(b.Rd, l);
                        e = a.get(b.Z, l);
                        f = a.get(b.wa, l)
                    },
                    ga: function () {
                        var a = f.fc;
                        a(S4.Kk, b);
                        a(S4.Sh, b);
                        a(S4.Th, b);
                        a(S4.Jk, c)
                    },
                    P: function (a) {
                        g = !! a.Ra[H.F.vb];
                        d.Kc(e.yd());
                        a = a.hk || "";
                        k != a && (k = a, d.refresh());
                        b()
                    },
                    I: function () {
                        return H.F.vb
                    },
                    N: function () {
                        return H.C.vb
                    },
                    K: function () {
                        return {
                            Ha: a
                        }
                    }
                };
            return l
        };
        H.C.vb = 38;
        H.O.register(H.F.vb, H.C.vb, H.GA);
        H.HA = function () {
            function a() {
                var a = e.Ha();
                p ? H.xe(n, H.escape(a)) : n.value != a && (n.value = a, H.Px(k.je(), a))
            }

            function b() {
                n.style.visibility = ""
            }

            function c() {
                n.style.visibility = "hidden"
            }

            function d(a) {
                H.zl(n, a)
            }
            var e, f, g, h, k, l, n, p, m = {
                    qa: function (a) {
                        k = a
                    },
                    R: function (a) {
                        var b = H.F;
                        e = a.get(b.vb, m);
                        f = a.get(b.Bb, m);
                        g = a.wc()
                    },
                    ga: function (a) {
                        l = f.Jl();
                        h = g.getId();
                        p = 2 == g.zd();
                        var b = (p ? "gs_htd" : "gs_htif") + h,
                            c = k.Fc(b);
                        c ? n = c : (p ? c = H.ii(a.Xc, 1) : (c = H.ea("input", a.Xc), c.disabled = "disabled", c.autocapitalize = c.autocomplete =
                            c.autocorrect = "off", H.Ds(c), H.nj(c), a = c.style, a.position = "absolute", a.zIndex = 1, a.backgroundColor = "transparent", a.outline = "", H.Jd && (a.WebkitTextFillColor = "silver")), c.id = b, c.style.color = "silver", l.appendChild(c), n = c)
                    },
                    I: function () {
                        return H.F.Rd
                    },
                    N: function () {
                        return H.C.Rd
                    },
                    K: function () {
                        return {
                            refresh: a,
                            show: b,
                            hide: c,
                            Kc: d
                        }
                    }
                };
            return m
        };
        H.C.Rd = 42;
        H.O.register(H.F.Rd, H.C.Rd, H.HA);
        H.Rv = function () {
            function a(a) {
                return H.Sv(e, a)
            }

            function b(a, b) {
                b.render(a.Nb(), a.X(), f)
            }

            function c(a, b, c) {
                c.search(b.X(), 1)
            }

            function d() {
                return 38
            }
            var e, f, g = {
                    qa: function (a, b) {
                        b.addRule(".gsmq_a", "padding:0")
                    },
                    R: function (a) {
                        e = a.get(H.F.Z, g)
                    },
                    P: function (a) {
                        f = a.Nd ? a.Ne : ""
                    },
                    I: function () {
                        return H.F.RENDERER
                    },
                    N: function () {
                        return H.C.ur
                    },
                    K: function () {
                        return {
                            Tb: a,
                            render: b,
                            tb: c,
                            Vb: H.Y,
                            Ub: d
                        }
                    }
                };
            return g
        };
        H.C.ur = 94;
        H.O.register(H.F.RENDERER, H.C.ur, H.Rv);
        H.Sv = function (a, b) {
            var c, d, e, f, g;
            (function () {
                c = H.Ka();
                c.className = "gsmq_a";
                var a = H.Jc();
                c.appendChild(a);
                d = a.insertRow(-1);
                a = d.insertCell(-1);
                a.style.width = "100%";
                e = H.ea("span");
                a.appendChild(e)
            })();
            return {
                za: function () {
                    return c
                },
                I: (0, _.ua)(38),
                hb: (0, _.ua)(!0),
                render: function (c, k, l) {
                    e.innerHTML = c;
                    g = k;
                    l && !f && (f = H.Wg(d), f.onclick = function (c) {
                        a.Td();
                        a.uc(g);
                        b.search(g, 9);
                        return H.Sb(c)
                    });
                    l ? (f.innerHTML = l + " &raquo;", f.style.display = "") : f && (f.style.display = "none")
                }
            }
        };
        H.Tv = function () {
            function a(a, b) {
                if (c && b) {
                    var f = b.U().ka("i");
                    a.setParameter("gs_mss", f)
                }
                return 1
            }

            function b() {
                return 7
            }
            var c;
            return {
                P: function (a) {
                    c = !! a.Ra[H.C.uj]
                },
                I: function () {
                    return H.F.kb
                },
                N: function () {
                    return H.C.uj
                },
                K: function () {
                    return {
                        Tc: a,
                        Fa: b
                    }
                }
            }
        };
        H.C.uj = 49;
        H.O.register(H.F.kb, H.C.uj, H.Tv);
        H.Iu = function () {
            function a(a) {
                n = a.Lj;
                p = a.yl;
                m = a.Wk;
                t = a.Nd ? a.Ne : ""
            }

            function b(a) {
                return H.Ju(f, g, h, k, l, a, n, m)
            }

            function c(a, b) {
                b.render(a.Nb(), a.X(), a.Ya(), p, t)
            }

            function d(a, b, c) {
                c.search(b.X(), 1)
            }

            function e() {
                return 35
            }
            var f, g, h, k, l, n, p, m, t, s = {
                    qa: function (a, b) {
                        b.addRule("a.gspqs_a", "padding:0 3px 0 8px");
                        b.addRule(".gspqs_b", "color:#666;line-height:22px")
                    },
                    R: function (a) {
                        var b = H.F;
                        h = a.get(b.Ca, s);
                        k = a.get(b.Z, s);
                        g = a.get(b.Qb, s);
                        f = a.get(b.Pa, s);
                        l = a.get(b.ra, s)
                    },
                    ga: a,
                    P: a,
                    I: function () {
                        return H.F.RENDERER
                    },
                    N: function () {
                        return H.C.Pt
                    },
                    K: function () {
                        return {
                            Tb: b,
                            render: c,
                            tb: d,
                            Vb: H.Y,
                            Ub: e
                        }
                    }
                };
            return s
        };
        H.C.Pt = 33;
        H.O.register(H.F.RENDERER, H.C.Pt, H.Iu);
        H.Ju = function (a, b, c, d, e, f, g, h) {
            function k(a) {
                E = !0;
                b.Ak(G, l);
                return H.Sb(a)
            }

            function l() {
                E && (c.Yn(35), a.zr(), n.onmouseover = n.onmouseout = n.onclick = null, p.style.display = "none", m.style.display = "", e.Hi() == J && d.oj(), e.Zq() == J && (e.yj(), d.pg()), u = !1)
            }
            var n, p, m, t, s, r, w, G, J, u = !0,
                E = !1;
            (function () {
                n = H.Ka();
                n.className = "gsq_a";
                var a = H.Jc();
                n.appendChild(a);
                p = a.insertRow(-1);
                var b = p.insertCell(-1);
                t = H.ea("span");
                t.style.color = "#52188c";
                b.appendChild(t);
                if (0 != g) {
                    r = H.ea("a");
                    r.href = "#ps";
                    r.className = "gspqs_a gssb_j";
                    var c = p.insertCell(-1);
                    c.appendChild(r);
                    (2 == g ? c : b).style.width = "100%";
                    m = a.insertRow(-1);
                    w = m.insertCell(-1);
                    w.className = "gspqs_b";
                    w.innerHTML = h;
                    w.colSpan = "2"
                }
            })();
            return {
                za: function () {
                    return n
                },
                I: (0, _.ua)(35),
                hb: function () {
                    return u
                },
                render: function (a, b, c, e, h) {
                    E = !1;
                    u = !0;
                    G = b;
                    J = c;
                    p.style.display = "";
                    t.innerHTML = a;
                    0 != g && (m.style.display = "none", r.innerHTML = e, r.onclick = k);
                    h && !s && (s = H.Wg(p), s.onclick = function (a) {
                        d.Td();
                        d.uc(G);
                        f.search(G, 9);
                        return H.Sb(a)
                    });
                    h ? (s.innerHTML = h + " &raquo;", s.style.display = "") :
                        s && (s.style.display = "none")
                }
            }
        };
        H.Gu = function () {
            function a() {
                var a = {};
                f && (a.tok = e);
                return a
            }

            function b() {
                return f
            }

            function c(a, b) {
                d.kv(a, b)
            }
            var d, e, f, g = {
                    R: function (a) {
                        d = a.get(H.F.od, g)
                    },
                    P: function (a) {
                        e = a.zf;
                        var b = "https:" == window.document.location.protocol,
                            b = 0 == a.Hb || b;
                        a = !! a.nb[P4.Ah];
                        f = !! (d && e && b && a)
                    },
                    I: function () {
                        return H.F.Qb
                    },
                    N: function () {
                        return H.C.Qb
                    },
                    K: function () {
                        return {
                            Wu: a,
                            isEnabled: b,
                            Ak: c
                        }
                    }
                };
            return g
        };
        H.C.Qb = 188;
        H.O.register(H.F.Qb, H.C.Qb, H.Gu);
        H.Fu = function () {
            function a(a, b) {
                l[a] = b;
                var n = [];
                H.xb("delq", a, n);
                H.xb("client", h, n);
                H.xb("callback", "google.sbox.d" + d, n);
                var s = e;
                H.xb("tok", f, n);
                g && H.xb("authuser", g, n);
                k = H.ea("script");
                k.src = s + n.join("&");
                c.appendChild(k)
            }

            function b(a) {
                k && (c.removeChild(k), k = null);
                a = a[0];
                var b = l[a];
                b && (delete l[a], b())
            }
            var c = H.$g(),
                d, e, f, g, h, k, l = {}, n = {
                    R: function (a) {
                        a.get(H.F.Qb, n);
                        d = a.wc().getId()
                    },
                    ga: function () {
                        window.google.sbox["d" + d] = b
                    },
                    P: function (a) {
                        e = "https://" + (a.mj || "clients1." + a.Pg) + tUa.Ku + "?";
                        f = a.zf;
                        g =
                            a.authuser;
                        h = a.Fe
                    },
                    I: function () {
                        return H.F.od
                    },
                    N: function () {
                        return H.C.od
                    },
                    K: function () {
                        return {
                            kv: a
                        }
                    },
                    xa: function () {
                        k && (c.removeChild(k), k = null)
                    }
                };
            return n
        };
        H.C.od = 186;
        H.O.register(H.F.od, H.C.od, H.Fu);
        H.Hu = function () {
            function a(a) {
                var b = c.Wu(),
                    d;
                for (d in b) a.setParameter(d, b[d]);
                return 1
            }

            function b() {
                return 12
            }
            var c, d = {
                    R: function (a) {
                        c = a.get(H.F.Qb, d)
                    },
                    I: function () {
                        return H.F.kb
                    },
                    N: function () {
                        return H.C.Sn
                    },
                    K: function () {
                        return {
                            Tc: a,
                            Fa: b
                        }
                    }
                };
            return d
        };
        H.C.Sn = 187;
        H.O.register(H.F.kb, H.C.Sn, H.Hu);
        H.ZI = function () {
            function a(a, b) {
                var c;
                if (c = f) {
                    c = a.Kb();
                    var d = a.ha(),
                        p = H.getTime();
                    d == k ? (c.equals(l) || (g = null), c = !1) : (d && d != g ? g ? b && b.Fb() && b.rd().X() == a.Sa() && (g = null) : d.length < k.length && 500 <= p - n && (g = k, h = null, e.AF(g)) : g = null, l = c, k = d, n = p, c = !! g);
                    if (c) n: {
                        var G = a.ha(),
                            J = a.Kb().getPosition();
                        null == h && (h = J);
                        for (c = 0; c < h && g[c] == G[c];)++c;
                        d = g.length - G.length;
                        p = J + d;
                        if (c < p && (G = G.substr(J), J = g.substr(p), (c || G) && G == J)) {
                            h = c;
                            a.Ye("dc", g.substring(c, p));
                            c = p - c - d;
                            0 < c && a.Ye("ac", c);
                            c = !0;
                            break n
                        }
                        g = null;
                        c = !1
                    }
                }
                return c ?
                    (e.bE(a), 2) : 1
            }

            function b() {
                return 5
            }

            function c(a) {
                g = null;
                k = a.input;
                n = H.getTime()
            }
            var d, e, f, g, h, k = "",
                l, n = H.getTime(),
                p = {
                    R: function (a) {
                        var b = H.F;
                        d = a.get(b.wa, p);
                        e = a.get(b.Ws, p)
                    },
                    ga: function () {
                        d.fc(4, c)
                    },
                    P: function (a) {
                        f = !! a.Ra[H.C.Jz]
                    },
                    I: function () {
                        return H.F.kb
                    },
                    N: function () {
                        return H.C.Jz
                    },
                    K: function () {
                        return {
                            Tc: a,
                            Fa: b
                        }
                    }
                };
            return p
        };
        H.C.Jz = 26;
        H.O.register(H.F.kb, H.C.Jz, H.ZI);
        H.qJ = function () {
            function a(a) {
                var b = e.DONT_CARE;
                if (h) {
                    var d = a.ha(),
                        f = a.Kb().getPosition(),
                        n;
                    n = f;
                    if (n >= d.length) n = -1;
                    else {
                        for (var w = [!0, !0], G = 0, J = 0; J <= n; ++J) w.push(!H.kd(d.charAt(J))), w[1] || !w[2] && !w[0] || ++G, w.shift();
                        n = G
                    }
                    n != k && (k = n, d && d == l && (f = c(d, f), a.Ye("cp", f), g.AF(d), g.bE(a), b = e.Ci));
                    l = d
                }
                return b
            }

            function b() {
                return 4
            }

            function c(a, b) {
                function c(d) {
                    return H.kd(a.charAt(b + d))
                }
                var d = a.length;
                if (b >= d) return d;
                for (d = 0 < b && c(0) && c(-1); 0 < b && c(-1) == d;)--b;
                d && c(1) && ++b;
                return b
            }

            function d() {
                k = -1
            }
            var e =
                R4,
                f, g, h, k, l, n = {
                    R: function (a) {
                        var b = H.F;
                        f = a.get(b.wa, n);
                        g = a.get(b.Ws, n)
                    },
                    ga: function () {
                        f.fc(4, d)
                    },
                    P: function (a) {
                        h = !! a.Ra[H.C.by]
                    },
                    I: function () {
                        return H.F.kb
                    },
                    N: function () {
                        return H.C.by
                    },
                    K: function () {
                        return {
                            Tc: a,
                            Fa: b
                        }
                    }
                };
            return n
        };
        H.C.by = 28;
        H.O.register(H.F.kb, H.C.by, H.qJ);
        H.jJ = function () {
            function a(a) {
                d = null;
                if (a && c) {
                    var b = c.Ha();
                    b && H.jc(b, a) && (d = b.substr(a.length))
                }
            }

            function b(a) {
                d && a.setParameter("gs_ta", d);
                a.yr()
            }
            var c, d, e = {
                    R: function (a) {
                        c = a.get(H.F.Ea, e)
                    },
                    I: function () {
                        return H.F.Ws
                    },
                    N: function () {
                        return H.C.Ws
                    },
                    K: function () {
                        return {
                            AF: a,
                            bE: b
                        }
                    }
                };
            return e
        };
        H.C.Ws = 204;
        H.F.Ws = 256;
        H.O.register(H.F.Ws, H.C.Ws, H.jJ);
        H.kJ = function () {
            function a(a) {
                return H.lJ(e, a)
            }

            function b(a, b) {
                b.render(a.Nb(), a.X(), f)
            }

            function c(a, b, c) {
                c.search(b.X(), 1)
            }

            function d() {
                return 39
            }
            var e, f, g = {
                    qa: function (a, b) {
                        b.addRule(".gsqn_a", "padding:0")
                    },
                    R: function (a) {
                        e = a.get(H.F.Z, g)
                    },
                    P: function (a) {
                        f = a.Nd ? a.Ne : ""
                    },
                    I: function () {
                        return H.F.RENDERER
                    },
                    N: function () {
                        return H.C.VD
                    },
                    K: function () {
                        return {
                            Tb: a,
                            render: b,
                            tb: c,
                            Vb: H.Y,
                            Ub: d
                        }
                    }
                };
            return g
        };
        H.C.VD = 50;
        H.O.register(H.F.RENDERER, H.C.VD, H.kJ);
        H.lJ = function (a, b) {
            var c, d, e, f, g;
            (function () {
                c = H.Ka();
                c.className = "gsqn_a";
                var a = H.Jc();
                c.appendChild(a);
                d = a.insertRow(-1);
                a = d.insertCell(-1);
                a.style.width = "100%";
                e = H.ea("span");
                a.appendChild(e)
            })();
            return {
                za: function () {
                    return c
                },
                I: (0, _.ua)(39),
                hb: (0, _.ua)(!0),
                render: function (c, k, l) {
                    e.innerHTML = c;
                    g = k;
                    l && !f && (f = H.Wg(d), f.onclick = function (c) {
                        a.Td();
                        a.uc(g);
                        b.search(g, 9);
                        return H.Sb(c)
                    });
                    l ? (f.innerHTML = l + " &raquo;", f.style.display = "") : f && (f.style.display = "none")
                }
            }
        };
        H.GD = function () {
            function a() {
                return n ? [H.Zw(k, 0, f, "", g, h, l, null, !1, !0, !0, "", null, b, null)] : []
            }

            function b(a, b) {
                if (b) {
                    var d = {}, f = H.Hh(c, "tbs");
                    if (f) {
                        var g = {};
                        g.tbs = f.value;
                        d.tbs = window.google.Toolbelt.unset("sbi", g).tbs
                    }
                    d.tbm = "isch";
                    H.ff(c, d);
                    e.Ha() && c.submit()
                }
            }
            var c, d, e, f, g, h, k, l, n;
            d = {
                P: function (a) {
                    n = !! a.Rk[H.C.Mw]
                },
                xa: H.Y,
                ga: H.Y,
                I: function () {
                    return H.F.De
                },
                N: function () {
                    return H.C.Mw
                },
                K: function () {
                    return {
                        tx: a
                    }
                },
                Gd: H.Y,
                qa: function (a) {
                    c = a.Qg()
                },
                R: function (a) {
                    e = a.get(H.F.Z, p)
                }
            };
            var p = {
                Uu: function () {
                    return d
                },
                wF: function (a, b, c, d, e) {
                    f = a;
                    g = b;
                    h = c;
                    k = d;
                    l = e
                }
            };
            return p
        };
        H.C.Mw = 183;
        H.XF = function () {
            function a(a) {
                return t && m == a.ha() ? H.Hd(a, m, t, H.Yf, !0, !1, !1, !1) : null
            }

            function b(a) {
                return !!a && 0 <= a.indexOf("**")
            }

            function c() {
                return G
            }

            function d() {
                G = ""
            }

            function e() {
                var a = !s || !l.Ha();
                a != r && (r ? w.removeAttribute("x-webkit-speech") : w.setAttribute("x-webkit-speech", ""), r = a)
            }

            function f(a, b) {
                b = H.escape(b);
                a = H.escape(H.Nc(a, H.Eh));
                for (var c = a.split(" "), d = b.split(" "), e, f = 0; f < d.length; ++f) e = d[f], 0 > c.indexOf(e) && (d[f] = e.bold());
                return d.join(" ").replace(h, " ")
            }

            function g(a) {
                a = a && a.results ?
                    a.results : [];
                var c = Math.min(a.length, 3);
                m = a[0].utterance;
                n.add(6);
                if (b(m)) {
                    t = [];
                    for (var d = 0; d < c; ++d) {
                        var e = a[d].utterance;
                        b(e) || t.push(H.Bd(f(m, e), e, d, 40, null))
                    }
                } else t = null, G = m, p.search(m, 15)
            }
            var h = /<\/b> <b>/gi,
                k, l, n, p, m, t, s, r, w, G = "",
                J = {
                    qa: function (a) {
                        w = a.je()
                    },
                    R: function (a) {
                        var b = H.F;
                        k = a.get(b.wa, J);
                        l = a.get(b.Z, J);
                        n = a.get(b.Ja, J);
                        p = a.get(b.Xa, J)
                    },
                    ga: function (a) {
                        s = a.Fv;
                        e();
                        w.setAttribute("x-webkit-grammar", "builtin:search");
                        "" != a.Od && w.setAttribute("lang", a.Od);
                        (a = window.google.listen) ? a(w, "webkitspeechchange",
                            g) : k.listen(w, "webkitspeechchange", g);
                        s && (k.fc(4, e), k.fc(5, e), k.fc(1, e))
                    },
                    I: function () {
                        return H.F.Og
                    },
                    N: function () {
                        return H.C.Og
                    },
                    K: function () {
                        return {
                            hE: d,
                            yE: c,
                            zE: a,
                            qk: b
                        }
                    }
                };
            return J
        };
        H.C.Og = 90;
        H.OD = (0, _.ka)();
        H.YF = function () {
            function a(a) {
                return H.PD(e, a)
            }

            function b(a, b) {
                b.render(a.Nb(), a.X(), f)
            }

            function c(a, b, c) {
                c.search(b.X(), 1)
            }

            function d() {
                return 40
            }
            var e, f, g = {
                    qa: function (a, b) {
                        b.addRule(".gsq_a", "padding:0")
                    },
                    R: function (a) {
                        e = a.get(H.F.Z, g)
                    },
                    P: function (a) {
                        f = a.Nd ? a.Ne : ""
                    },
                    I: function () {
                        return H.F.RENDERER
                    },
                    N: function () {
                        return H.C.$D
                    },
                    K: function () {
                        return {
                            Tb: a,
                            render: b,
                            tb: c,
                            Vb: H.Y,
                            Ub: d
                        }
                    }
                };
            return g
        };
        H.C.$D = 30;
        H.PD = function (a, b) {
            var c, d, e, f, g;
            (function () {
                c = H.Ka();
                c.className = "gsq_a";
                var a = H.Jc();
                c.appendChild(a);
                d = a.insertRow(-1);
                a = d.insertCell(-1);
                a.style.width = "100%";
                e = H.ea("span");
                a.appendChild(e)
            })();
            return {
                za: function () {
                    return c
                },
                I: (0, _.ua)(40),
                hb: (0, _.ua)(!0),
                render: function (c, k, l) {
                    e.innerHTML = c;
                    g = k;
                    l && !f && (f = H.Wg(d), f.onclick = function (c) {
                        a.Td();
                        a.uc(g);
                        b.search(g, 9);
                        return H.Sb(c)
                    });
                    l ? (f.innerHTML = l + " &raquo;", f.style.display = "") : f && (f.style.display = "none")
                }
            }
        };
        H.ZF = function () {
            function a(a) {
                var b = a.ij();
                return c && "input" == b && c.yE() == a.ha() ? (c.hE(), 3) : 1
            }

            function b() {
                return 22
            }
            var c, d = {
                    R: function (a) {
                        c = a.get(H.F.Og, d)
                    },
                    I: function () {
                        return H.F.kb
                    },
                    N: function () {
                        return H.C.oE
                    },
                    K: function () {
                        return {
                            Tc: a,
                            Fa: b
                        }
                    }
                };
            return d
        };
        H.C.oE = 465;
        H.$F = function () {
            function a() {
                return 1
            }

            function b(a) {
                var b = null;
                c && (b = c.zE(a));
                return b
            }
            var c, d = {
                    I: function () {
                        return H.F.qc
                    },
                    R: function (a) {
                        c = a.get(H.F.Og, d)
                    },
                    N: function () {
                        return H.C.rE
                    },
                    K: function () {
                        return {
                            Fa: a,
                            update: H.Y,
                            get: b,
                            reset: H.Y
                        }
                    }
                };
            return d
        };
        H.C.rE = 100;
        H.QD = function () {
            function a() {
                if (k) {
                    var a = h.Eb(),
                        e = f.Ha();
                    if (H.kd(e) && g.Pq(e) && (a && H.jc(e, a.ha())) && (a = a.U().ka("p"))) {
                        e = f.yd();
                        e != n && (n = e, d.Kc(e));
                        a = a.replace(c, "<span class=gsc_b>$1</span>");
                        d.refresh(a);
                        l || (d.show(), l = !0);
                        return
                    }
                }
                b()
            }

            function b() {
                l && (d.hide(), l = !1)
            }
            var c = /<se>(.*?)<\/se>/g,
                d, e, f, g, h, k, l = !0,
                n, p = {
                    R: function (a) {
                        var b = H.F;
                        e = a.get(b.wa, p);
                        f = a.get(b.Z, p);
                        g = a.get(b.Ta, p);
                        h = a.get(b.Ga, p);
                        a.get(b.ra, p);
                        d = a.get(b.Ze, p)
                    },
                    ga: function () {
                        var c = e.fc;
                        c(S4.qv, b);
                        c(S4.Jk, b);
                        c(S4.Sh, b);
                        c(S4.Th, a);
                        c(S4.Xl, a);
                        c(S4.Kk, a)
                    },
                    P: function (b) {
                        k = !! b.Ra[H.F.Sc];
                        a()
                    },
                    I: function () {
                        return H.F.Sc
                    },
                    N: function () {
                        return H.C.Sc
                    }
                };
            return p
        };
        H.C.Sc = 44;
        H.O.register(H.F.Sc, H.C.Sc, H.QD);
        H.RD = function () {
            function a(a) {
                H.xe(g, a)
            }

            function b() {
                g.style.visibility = ""
            }

            function c() {
                g.style.visibility = "hidden";
                H.xe(g, "")
            }

            function d(a) {
                H.zl(g, a)
            }
            var e, f, g, h, k = {
                    qa: function (a, b) {
                        h = a;
                        a.ue() || b.addRule(".gsc_b", "background:url(data:image/gif;base64,R0lGODlhCgAEAMIEAP9BGP6pl//Wy/7//P///////////////yH5BAEKAAQALAAAAAAKAAQAAAMROCOhK0oA0MIUMmTAZhsWBCYAOw==) repeat-x scroll 0 100% transparent;display:inline-block;padding-bottom:1px")
                    },
                    R: function (a) {
                        e = a.get(H.F.Bb, k)
                    },
                    ga: function (a) {
                        f = e.Jl();
                        var b = h.get("gs_sc");
                        b || (b = H.ii(a.Xc, 2), b.id = h.getId("gs_sc"), b.style.color = "transparent", f.appendChild(b));
                        g = b
                    },
                    I: function () {
                        return H.F.Ze
                    },
                    N: function () {
                        return H.C.Ze
                    },
                    K: function () {
                        return {
                            refresh: a,
                            show: b,
                            hide: c,
                            Kc: d
                        }
                    }
                };
            return k
        };
        H.C.Ze = 39;
        H.O.register(H.F.Ze, H.C.Ze, H.RD);
        H.Us = function () {
            function a() {
                return E
            }

            function b(a) {
                E = a;
                f();
                J && w.ug(a)
            }

            function c() {
                var a = t.Eb();
                if (J && a && a.Fb()) {
                    var c = a.ha();
                    var e = a.rd();
                    if (c && e && e.Dd()) {
                        var a = c.replace(k, " "),
                            f = H.Nc(a, H.Eh).toLowerCase(),
                            f = f.replace(l, "");
                        G && (f = G.Dn(f));
                        var g = e.Fg(),
                            e = (g ? H.unescape(g.replace(n, "")) : e.X()).replace(l, "");
                        H.jc(e, f, !0) && ((f = e.substr(f.length)) && H.Jr(a) && (f = H.trim(f)), c = c + f)
                    } else c = "";
                    b(c)
                } else d()
            }

            function d() {
                E && (E = "", F = !1, u && p.refresh(), w.vg())
            }

            function e(a) {
                if (E) {
                    var b = m.Ha();
                    H.kd(b) && !E.indexOf(b) ||
                        d()
                }
                a.Pb && p.Kc(a.Pb);
                g()
            }

            function f() {
                F = J && !! E && s.Pq(E) && m.br(E);
                u ? F ? p.refresh() : h() : F && g()
            }

            function g() {
                !u && F && (p.refresh(), p.show(), u = !0)
            }

            function h() {
                u && (p.hide(), u = !1)
            }
            var k = /((^|\s)[!"%',:;<>?[\\\]`{|}~]+)|[,\\]+/g,
                l = /^\+/,
                n = /<\/?se>/gi,
                p, m, t, s, r, w, G, J, u = !0,
                E, F, R = {
                    R: function (a) {
                        var b = H.F;
                        p = a.get(b.Cc, R);
                        r = a.get(b.wa, R);
                        G = a.get(b.Ic, R);
                        m = a.get(b.Z, R);
                        s = a.get(b.Ta, R);
                        t = a.get(b.Ga, R);
                        w = a.Zb()
                    },
                    ga: function (a) {
                        var b = r.fc;
                        b(S4.Kk, e);
                        1 == a.zj && b(S4.Xl, c);
                        b(S4.Sh, d);
                        b(S4.Th, c);
                        b(S4.mk, f);
                        b(S4.Jk, h)
                    },
                    P: function (a) {
                        J = !! a.Ra[H.F.Ea];
                        p.Kc(m.yd());
                        c()
                    },
                    I: function () {
                        return H.F.Ea
                    },
                    N: function () {
                        return H.C.Ea
                    },
                    K: function () {
                        return {
                            Ha: a,
                            uc: b,
                            refresh: c,
                            clear: d
                        }
                    }
                };
            return R
        };
        H.C.Ea = 41;
        H.O.register(H.F.Ea, H.C.Ea, H.Us);
        H.Vs = function () {
            function a() {
                var a = e.Ha();
                p ? H.xe(n, H.escape(a)) : n.value != a && (n.value = a)
            }

            function b() {
                n.style.visibility = ""
            }

            function c() {
                n.style.visibility = "hidden"
            }

            function d(a) {
                H.zl(n, a)
            }
            var e, f, g, h, k, l, n, p, m = {
                    qa: function (a) {
                        k = a
                    },
                    R: function (a) {
                        var b = H.F;
                        e = a.get(b.Ea, m);
                        f = a.get(b.Bb, m);
                        g = a.wc()
                    },
                    ga: function (a) {
                        l = f.Jl();
                        h = g.getId();
                        p = 2 == g.zd();
                        var b = (p ? "gs_tad" : "gs_taif") + h,
                            c = k.Fc(b);
                        c ? n = c : (p ? c = H.ii(a.Xc, 1) : (c = H.ea("input", a.Xc), c.disabled = "disabled", c.autocapitalize = c.autocomplete = c.autocorrect = "off",
                            H.Ds(c), H.nj(c), a = c.style, a.position = "absolute", a.zIndex = 1, a.backgroundColor = "transparent", a.outline = "", H.Jd && (a.WebkitTextFillColor = "silver")), c.id = b, c.style.color = "silver", l.appendChild(c), n = c)
                    },
                    I: function () {
                        return H.F.Cc
                    },
                    N: function () {
                        return H.C.Cc
                    },
                    K: function () {
                        return {
                            refresh: a,
                            show: b,
                            hide: c,
                            Kc: d
                        }
                    }
                };
            return m
        };
        H.C.Cc = 51;
        H.O.register(H.F.Cc, H.C.Cc, H.Vs);
        H.Uv = function () {
            function a(a) {
                if (k) {
                    var f = d(a);
                    if (f) {
                        a = {};
                        a[e.$r] = f.Kw;
                        a[e.ak] = f.OB;
                        var f = f.userName,
                            h = "",
                            l = a[e.ak];
                        l && g.test(l) && (h = l + "?sz=23");
                        return [H.Zw(f, 0, h, "", 23, 23, "", null, !0, !0, !0, f, b, c, a)]
                    }
                }
                return []
            }

            function b(a, b) {
                var c = d(b);
                if (c) {
                    var f = a.qB()[e.$r] || "";
                    return c.Kw == f
                }
                return !1
            }

            function c() {
                H.Hl(l, "tbs")
            }

            function d(a) {
                var b = window.google.Toolbelt.parseTbs(a.tbs);
                a = b.ppl_nps;
                var c = b.ppl_ids;
                if (c && a) {
                    a = a.replace(f, " ");
                    var d = "";
                    (b = b.ppl_im) && (d = ["//", b, "/photo.jpg"].join(""));
                    return {
                        Kw: c,
                        userName: a,
                        OB: d
                    }
                }
                return null
            }
            var e = wUa,
                f = /\+/g,
                g = /^\/\/lh\d+\.googleusercontent\.com\//,
                h, k, l, n;
            n = {
                qa: function (a) {
                    l = a.Qg()
                },
                R: function (a) {
                    h = a.get(H.F.ra, p)
                },
                ga: H.Y,
                P: function (a) {
                    k = !! a.Rk[H.C.eq]
                },
                I: function () {
                    return H.F.De
                },
                N: function () {
                    return H.C.eq
                },
                K: function () {
                    return {
                        tx: a
                    }
                },
                Gd: H.Y,
                xa: H.Y
            };
            var p = {
                Uu: function () {
                    return n
                },
                sB: function () {
                    if (h.Pc()) {
                        var a = h.Oc();
                        if (44 == a.I()) {
                            var b = a.X(),
                                c = a.U(),
                                a = {}, d = c.ka(e.$r);
                            if (!d) {
                                var f = c.ka(e.Bu);
                                f && (d = ["-", f].join(""))
                            }
                            window.google.Toolbelt.set("ppl_ids", d ||
                                "", a);
                            window.google.Toolbelt.set("ppl_nps", b, a);
                            if (b = c.ka(e.ak)) b = b.substring(2, b.length - 10), window.google.Toolbelt.set("ppl_im", b, a);
                            return (0, window.decodeURIComponent)(a.tbs)
                        }
                    }
                    return ""
                }
            };
            return p
        };
        H.C.eq = 24;
        H.O.register(H.F.De, H.C.eq, H.Uv);
        H.UA = function () {
            function a() {
                return H.Lu(44)
            }

            function b(a, b) {
                f.render(a.Nb(), a.U(), b, 44)
            }

            function c(a, b, c) {
                c.search(b.X(), 1)
            }

            function d() {
                return !1
            }

            function e() {
                return 44
            }
            var f, g = {
                    R: function (a) {
                        f = a.get(H.F.Df, g)
                    },
                    I: function () {
                        return H.F.RENDERER
                    },
                    N: function () {
                        return H.C.Lw
                    },
                    K: function () {
                        return {
                            Tb: a,
                            render: b,
                            tb: c,
                            Vb: d,
                            Ub: e
                        }
                    }
                };
            return g
        };
        H.C.Lw = 242;
        H.O.register(H.F.RENDERER, H.C.Lw, H.UA);
        H.Lu = function (a) {
            var b, c, d, e;
            (function () {
                b = H.Ka();
                b.className = "gsso_a";
                var a = H.Jc();
                b.appendChild(a);
                var g = a.insertRow(-1),
                    h = g.insertCell(-1);
                h.className = "gsso_b";
                h.rowSpan = 2;
                c = H.ea("img");
                c.className = "gsso_c";
                h.appendChild(c);
                h = g.insertCell(-1);
                h.rowSpan = 2;
                var k = H.Ka("gsso_d");
                h.appendChild(k);
                g = g.insertCell(-1);
                g.className = "gsso_e";
                d = H.ea("span");
                g.appendChild(d);
                h = H.ea("span", "gsso_g");
                h.innerHTML = " &middot; plus.google.com";
                g.appendChild(h);
                g = a.insertRow(-1);
                e = g.insertCell(-1);
                e.className = "gsso_f"
            })();
            return {
                za: function () {
                    return b
                },
                I: function () {
                    return a
                },
                hb: (0, _.ua)(!0),
                render: function (a, b, h, k, l) {
                    c.src = b;
                    d.innerHTML = a;
                    a = [];
                    l && a.push(l);
                    h && a.push(h);
                    k && a.push(k);
                    H.Tl(e, a.join(" \u2022 "))
                }
            }
        };
        H.$y = function () {
            function a(a, c, d, e) {
                if (45 == e) e = vUa;
                else if (44 == e) e = wUa;
                else return;
                var f = "//www.google.com/images/ps_placeholder_25.png",
                    g = c.ka(e.ak);
                g && (f = g + "?sz=36");
                d.render(a, f, c.ka(e.Kt), c.ka(e.Jt), c.ka(e.It))
            }
            return {
                qa: function (a, c) {
                    c.addRule(".gsso_a", "padding:3px 0");
                    c.addRule(".gsso_a td", "line-height:18px");
                    c.addRule(".gsso_b", "width:36px");
                    c.addRule(".gsso_c", "height:36px;vertical-align:middle;width:36px");
                    c.addRule(".gsso_d", "width:7px");
                    c.addRule(".gsso_e", "width:100%");
                    c.addRule(".gsso_f",
                        "color:#666;font-size:13px;padding-bottom:2px");
                    c.addRule(".gsso_g", "color:#093;font-size:13px")
                },
                I: function () {
                    return H.F.Df
                },
                N: function () {
                    return H.C.Df
                },
                K: function () {
                    return {
                        render: a
                    }
                }
            }
        };
        H.C.Df = 244;
        H.O.eh(H.F.Df, H.C.Df, H.$y);
        H.Ny = function () {
            function a() {
                return H.Lu(45)
            }

            function b(a, b) {
                var c = a.U(),
                    d = c.ka("l");
                g.render(d, c, b, 45)
            }

            function c(a, b, c) {
                f(a, b, c)
            }

            function d(a, b, c) {
                f(a, b, c);
                return !0
            }

            function e() {
                return 45
            }

            function f(a, b, c) {
                (a = b.U().ka("k")) ? c.ic(a) : c.search(b.X(), 1)
            }
            var g, h = {
                    R: function (a) {
                        g = a.get(H.F.Df, h)
                    },
                    I: function () {
                        return H.F.RENDERER
                    },
                    N: function () {
                        return H.C.Ut
                    },
                    K: function () {
                        return {
                            Tb: a,
                            render: b,
                            tb: c,
                            Vb: d,
                            Ub: e
                        }
                    }
                };
            return h
        };
        H.C.Ut = 243;
        H.O.register(H.F.RENDERER, H.C.Ut, H.Ny);
        H.Qa = function (a) {
            function b(b) {
                var c = J.G(),
                    e = d(),
                    f = Z != t.gf;
                if (X[1] || H.kj(window.google.kHL)) c.Qi = !0;
                c.vh = F;
                c.Li = W.pq || "";
                c.zf = W.token || "";
                c.Ki = W.stok || "";
                c.fg = W.exp || "";
                c.wi = W.scc || "";
                c.vo = !0;
                c.ye = e ? 1 : 0;
                c.Od = window.google.kHL;
                c.authuser = window.google.authuser;
                c.Mj = f;
                c.Ug = 27;
                W.soff && (c.Ii = !0);
                c.mg = W.agen;
                c.ng = W.cgen;
                var g = W.lyrs,
                    h = g & s.Xb && e,
                    l = g & s.Ea && e,
                    p = g & s.dk && e,
                    T = g & s.vb,
                    va = g & s.sr,
                    V = c.Ra;
                V[r.Ta] = g & s.Xj;
                V[r.Xb] = h;
                V[r.Ea] = l;
                V[r.Sc] = p;
                V[r.vb] = T;
                V[r.lg] = va;
                c.zj = l ? 2 : 0;
                g = P4;
                R && (c.Yi = !0, c.Zg = e ? W.sce : W.scd);
                e && (c.Xi = !0, c.Ri = !0, W.navs || delete c.nb[g.Oi], c.nb[g.Di] = !0);
                W.jsonp ? (c.Hb = 0, c.Pg = W.host, c.gg = !0) : c.Hb = 1;
                (R || f) && (window.google.j && window.google.j.gt) && (e = window.google.j.gt()) && (c.Hb = 2, c.Pj = (0, _.mk)((0, _.hj)(), e));
                a.gk && a.gk(c);
                if (e = W.ovr) f = e, "ent" in f && (S = !! f.ent) && (c.nb[46] = !0), "he" in f && (c.uf = f.he), a.fk && a.fk(f, c);
                k(c);
                e = e || {};
                H.Qa.eb(e, c);
                e = !1;
                a.P && (e = a.P(c));
                if (w && ca) n(), !R || P || b || e ? w.P(c) : d() || w.qh(), a.Ao && a.Ao();
                else {
                    w = G.G(E, u, ja, 0);
                    w.Ef(c);
                    H.Dq(u, w);
                    b = [m.Cg, m.Ad];
                    for (c = 0; e = b[c++];) $[e] = w.Le(u,
                        e);
                    for (b = 0; c = ga[b++];) window.google.msg.listen(c.xj, c.jk, c.Pd);
                    a.Ef && a.Ef()
                }
            }

            function c() {
                return w
            }

            function d() {
                return Z == t.dj
            }

            function e(a, b, c) {
                ga.push({
                    xj: a,
                    jk: b,
                    Pd: c
                })
            }

            function f() {
                return X
            }

            function g(a) {
                var b = w.Ti();
                return a + "&" + w.Ge(b)
            }

            function h(a, b, c, d) {
                null != d && (c[m.Vj] = d);
                H.ff(u, c);
                c = w.Ti(b);
                a = [a, H.wj(b)];
                window.google.msg.send(15, a) && (a = m.Cg, $[a] && ($[a].value = c[a]), a = m.Ad, $[a] && ($[a].value = c[a]), u.onsubmit && !1 == u.onsubmit() || u.submit());
                H.gr();
                null != d && (w.yc(d), H.Hl(u, m.Vj))
            }

            function k(b) {
                function c(a,
                    b, f) {
                    e & a || (d[b] = d[f] = 161)
                }
                var d = {}, e = W.lyrs;
                c(s.Xj, r.Ta, r.Bb);
                c(s.Xb, r.Xb, r.kg);
                c(s.Ea, r.Ea, r.Cc);
                c(s.dk, r.Sc, r.Ze);
                c(s.vb, r.vb, r.Rd);
                a.ek && (d[r.Wd] = [162], a.ek(b, d));
                H.Qa.A(d, W);
                b.Fh = d
            }

            function l() {
                var b = {};
                a.Nl && (b = a.Nl());
                if (S) {
                    var c = m.kf;
                    if (!(c in b)) {
                        var d = w.uk(c);
                        d && (b[c] = d)
                    }
                }
                6 == w.Cr() && (b[m.MA] = "1");
                return b
            }

            function n() {
                var a = m.Cg;
                $[a] && ($[a].value = "");
                a = m.Ad;
                $[a] && ($[a].value = "")
            }

            function p(a) {
                a = a ? t.dj : t.gf;
                a != Z && (Z = a, ca = T = !0, b(!0))
            }
            var m = {
                Cg: "oq",
                Vj: "dq",
                MA: "gs_ivs",
                wr: "tbs",
                Ad: "gs_l",
                kf: "gs_ssp"
            },
                t = {
                    dj: "p",
                    Oz: "i",
                    gf: "b"
                }, s = {
                    Xj: 1,
                    Xb: 2,
                    Ea: 4,
                    dk: 8,
                    vb: 16,
                    sr: 32
                }, r = H.F,
                w, G, J, u, E, F, R, Z = t.gf,
                T = !1,
                ca, P, S, $ = {}, X, W, ga = [],
                ja = {
                    a: f,
                    b: function (a, b) {
                        var c = l();
                        if (m.wr in c) h(a, b, c, "");
                        else if (H.kd(a)) h(a, b, c);
                        else {
                            var d = w.wf();
                            d && (w.yc(d), h(d, b, c, a))
                        }
                    },
                    c: function (a) {
                        window.location = a
                    },
                    d: function (b) {
                        a.ic ? a.ic(b) : (b = g(b), window.google && window.google.nav && window.google.nav.go ? window.google.nav.go(b) : window.location = b)
                    },
                    e: g,
                    f: function (a) {
                        H.ff(u, {});
                        window.google.msg.send(49, [a])
                    },
                    h: function (a) {
                        H.ff(u, {});
                        window.google.msg.send(66, [a])
                    },
                    i: function (a) {
                        window.google.msg.send(50, [a])
                    },
                    j: function (b, c) {
                        a.Cd && a.Cd(b, c);
                        H.Nc(b.ha()) && window.google.msg.send(9, [b.ha(), H.Xq(b.Ba()), b.xd(), c])
                    },
                    k: function (a, b) {
                        var c = b.X();
                        window.google.msg.send(23, [a, c])
                    },
                    l: function () {
                        n()
                    },
                    m: (0, _.ka)(),
                    o: function () {
                        a.Yc && a.Yc();
                        window.google.msg.send(22)
                    },
                    p: function () {
                        a.Zc && a.Zc();
                        window.google.msg.send(11)
                    },
                    r: function (b, c) {
                        a.Rc && a.Rc(b, c);
                        H.Qa.B(b, c)
                    },
                    s: function (a) {
                        window.google.msg.send(54, [a])
                    },
                    t: function () {
                        window.google.msg.send(55)
                    },
                    u: function () {
                        a.Wc &&
                            a.Wc()
                    },
                    w: function (a) {
                        H.ff(u, l());
                        var b = a;
                        H.kd(a) || (b = w.wf() || a);
                        window.google.msg.send(12, [b])
                    },
                    z: function () {
                        window.google.msg.send(74)
                    },
                    aa: function () {
                        window.google.msg.send(75)
                    },
                    ac: function (b, c) {
                        if (a.Ce) return a.Ce(b, c)
                    }
                }, V = {
                    Lc: f,
                    zs: function () {
                        return F
                    },
                    je: function () {
                        return E
                    },
                    io: c,
                    dg: function () {
                        return W
                    },
                    zk: d,
                    xo: function () {
                        return R
                    },
                    Ot: e
                };
            X = H.Lc();
            window.google.ac = {
                a: b,
                gs: c,
                cc: function () {
                    w.Mb()
                }
            };
            G = H.Mk();
            J = H.hp();
            H.Rq(function (c) {
                var d = H.Ml(),
                    e = d.q,
                    f = c.ds;
                ca = u == d && E == e;
                P = F != f;
                u = d;
                E = e;
                F = f;
                W = c;
                c = c.psy || t.gf;
                R = c == t.dj;
                T || (Z = c);
                w || window.google.msg.listen(62, p);
                a.Fn && a.Fn();
                b(!1)
            }, function () {
                if (w) {
                    if (!R) {
                        for (var a = 0, b; b = ga[a++];) window.google.msg.unlisten(b.xj, b.jk);
                        w.xa()
                    }
                    n()
                }
            });
            e(4, function (a) {
                w.yc(a);
                return null
            }, 50);
            return V
        };
        H.Qa.eb = H.Y;
        H.Qa.Cf = function (a) {
            H.Qa.eb = a
        };
        H.Qa.B = H.Y;
        H.Qa.hg = function (a) {
            H.Qa.B = a
        };
        H.Qa.A = H.Y;
        H.Qa.D = function (a) {
            H.Qa.A = a
        };
        H.Cq = function () {
            function a(a, b, c) {
                e(a.getId(), a.ha(), b, c);
                return !0
            }

            function b() {
                return 1
            }

            function c() {
                return t
            }

            function d(a) {
                var b = m[a];
                b && (g(b), delete m[a])
            }

            function e(a, b, c, e) {
                s.$f || f();
                var g = h();
                g && (b = [n, "?", p ? p + "&" : "", c ? c + "&" : "", "q=", (0, window.encodeURIComponent)(b), "&xhr=t"].join(""), g.open("GET", b, !0), g.onreadystatechange = function () {
                        if (4 == g.readyState) {
                            switch (g.status) {
                            case 403:
                                t = 1E3;
                                break;
                            case 302:
                            case 500:
                            case 502:
                            case 503:
                                ++t;
                                break;
                            case 200:
                                e(eval(g.responseText), !1);
                            default:
                                t = 0
                            }
                            d(a)
                        }
                    }, m[a] =
                    g, g.send(null))
            }

            function f() {
                for (var a in m) g(m[a]);
                m = {}
            }

            function g(a) {
                a.onreadystatechange = H.Y;
                var b = a.readyState;
                0 != b && 4 != b && a.abort()
            }

            function h() {
                var a = null;
                H.ub ? a = k("Msxml2") || k("Microsoft") : "undefined" != typeof window.XMLHttpRequest && (a = new window.XMLHttpRequest);
                return a
            }

            function k(a) {
                var b = null;
                try {
                    b = new window.ActiveXObject(a + ".XMLHTTP")
                } catch (c) {}
                return b
            }
            var l, n, p, m = {}, t = 0,
                s, r = {
                    R: function (a) {
                        l = a.get(H.F.Pa, r)
                    },
                    P: function (a) {
                        1 == a.Hb && (s = a, a = l.Sf(), n = a.we, p = a.Mg)
                    },
                    I: function () {
                        return H.F.Ab
                    },
                    N: function () {
                        return H.C.Rh
                    },
                    K: function () {
                        return {
                            dd: a,
                            Dg: d,
                            Mb: H.Y,
                            Oe: b,
                            Pe: c
                        }
                    },
                    xa: function () {
                        f();
                        t = 0
                    }
                };
            return r
        };
        H.C.Rh = 180;
        H.O.register(H.F.Ab, H.C.Rh, H.Cq);
        H.Ns = function () {
            function a(a, b, c, d) {
                c = a.ha();
                b = ["/complete/search?", w ? w + "&" : "", b ? b + "&" : ""].join("");
                var e = [];
                H.xb("xhr", "t", e);
                H.xb("q", c, e, H.Bj);
                b = b + e.join("&");
                if (t.Mj && (b = window.google.msg.send(16, [b, !1, c], b), !b)) return !1;
                J[c] = a;
                G = d;
                r.dd(b);
                return !0
            }

            function b() {
                J = {};
                s && s.Mb(["/complete/search", "/s"])
            }

            function c() {
                return 2
            }

            function d() {
                return 0
            }

            function e() {
                var a = [s.A(), s.B(), s.D()],
                    a = (0, _.nk)(s, a);
                a.D();
                f(a, !0)
            }

            function f(a, b) {
                if (a) {
                    r && r.H();
                    r = a = b ? a : (0, _.mk)(s, a);
                    a.J(l, 10);
                    var c = g(h),
                        d = "/complete/search";
                    a.A(c, d);
                    a.B(k, d);
                    d = "/s";
                    a.B(k, d);
                    (window.google.ucp || !a.M() && !a.Q()) && a.A(c, d)
                }
            }

            function g(a) {
                return function (b, c, d, e, f) {
                    if (!e) {
                        c && (b = c());
                        try {
                            H.rf(b) && (b = eval("(" + b + ")")), a(b, f)
                        } catch (g) {
                            b = {
                                _response: b,
                                _url: d,
                                _isPartial: e,
                                _opt_fromCache: f
                            };
                            try {
                                window.google.ml(g, !1, b)
                            } catch (h) {}
                        }
                    }
                    return !0
                }
            }

            function h(a, b) {
                var c = m.dr(a),
                    d = J[c];
                if (d) {
                    if (b) {
                        var e = a[2];
                        e && (e.j = d.getId())
                    }
                    J[c] = null
                }
                G && G(a)
            }

            function k(a) {
                a = a.substring(a.indexOf("?") + 1).split("&");
                for (var b = [], c = {}, d = 0, e; e = a[d++];) {
                    var f = e.split("=");
                    2 == f.length && (f = f[0], n[f] && !c[f] && ("q" == f && (e = e.toLowerCase().replace(/\+/g, " ")), b.push(e), c[f] = !0))
                }
                b.sort();
                return (0, window.decodeURIComponent)(b.join("&"))
            }

            function l(a, b, c) {
                window.google.msg.send(17, [a, b, c], !1) && e()
            }
            var n = H.Ob("ac client cp dc ds expIds hl pq pws q se tok xhr".split(" ")),
                p, m, t, s, r, w, G, J, u = {
                    R: function (a) {
                        var b = H.F;
                        p = a.get(b.Pa, u);
                        m = a.get(b.yb, u)
                    },
                    ga: function () {
                        s = (0, _.hj)()
                    },
                    P: function (a) {
                        J = {};
                        2 == a.Hb && (t = a, w = p.Sf().Mg, (a = a.Pj) ? r && r.api == a.api || f(a) : e())
                    },
                    I: function () {
                        return H.F.Ab
                    },
                    N: function () {
                        return H.C.$k
                    },
                    K: function () {
                        return {
                            dd: a,
                            Dg: H.Y,
                            Mb: b,
                            Oe: c,
                            Pe: d
                        }
                    }
                };
            return u
        };
        H.C.$k = 19;
        H.O.register(H.F.Ab, H.C.$k, H.Ns);
        H.Jo = function () {
            function a() {
                return 2
            }

            function b(a) {
                if (g) {
                    var b = a.Ba();
                    if (!(b.length >= m.Zg)) {
                        var c = a.wb().Sa();
                        if (b.length) {
                            for (var d = 0, k; k = b[d]; ++d) {
                                if (!h[k.I()]) return;
                                k = k.X();
                                if (!H.jc(k, c, !0)) return
                            }
                            e(a)
                        } else m.Qk || f.test(c) || e(a)
                    }
                }
            }

            function c(a) {
                if (g) {
                    var b, c = a.Sa(),
                        d = Math.min(c.length, n);
                    if (d >= l)
                        for (var e; 0 < d; --d)
                            if (b = k[d])
                                if (e = c.substring(0, d), b = b[e]) {
                                    c = b;
                                    d = c.Ba();
                                    if (d.length) {
                                        b = a.ha();
                                        e = b.toLowerCase();
                                        for (var f = a.Sa(), h = c.U(), t = m.qg || !h.Ae("k"), R = [], Z = void 0, T = void 0, ca = 0, P = 0, S = void 0; S = d[P++];) T =
                                            S.X(), H.jc(T, f, !0) && (Z = t ? p.bold(e, T) : H.escape(T), R.push(H.Bd(Z, T, ca++, S.I(), S.Gc(), S.U())));
                                        a = H.Hd(a, b, R, h, !0, c.Ud(), !0, !1)
                                    } else a = c;
                                    return a
                                }
                }
                return null
            }

            function d() {
                k = {};
                l = Number.MAX_VALUE;
                n = 0
            }

            function e(a) {
                var b = a.wb().Sa(),
                    c = b.length;
                c < l && (l = c);
                c > n && (n = c);
                var d = k[c];
                d || (d = k[c] = {});
                d[b] = a
            }
            var f = /^[!"#$%'()*,\/:;<=>?[\\\]^`{|}~]+$/,
                g = !0,
                h, k, l, n, p, m, t = {
                    R: function (a) {
                        p = a.get(H.F.Db, t)
                    },
                    ga: function () {
                        h = H.Ob([P4.Ke]);
                        d()
                    },
                    P: function (a) {
                        m = a;
                        g = a.mg
                    },
                    I: function () {
                        return H.F.qc
                    },
                    N: function () {
                        return H.C.Cf
                    },
                    K: function () {
                        return {
                            Fa: a,
                            update: b,
                            get: c,
                            reset: d
                        }
                    },
                    xa: function () {
                        g = !1
                    }
                };
            return t
        };
        H.C.Cf = 97;
        H.O.register(H.F.qc, H.C.Cf, H.Jo);
        H.jp = function () {
            function a() {
                return 3
            }

            function b(a) {
                if (e) {
                    var b = a.wb(),
                        c = a.Ba();
                    if (c.length) {
                        var d = b.Sa();
                        n: for (var b = Number.MAX_VALUE, h, k = 0; h = c[k++];) {
                            if (!f[h.I()]) {
                                b = -1;
                                break n
                            }
                            h = h.X();
                            b = Math.min(h.length, b)
                        }
                        if (-1 != b) {
                            var l = c[0].X();
                            if (H.jc(l, d, !0))
                                for (k = d.length + 1; k <= b;) {
                                    d = null;
                                    for (h = 0; l = c[h++];) {
                                        l = l.X();
                                        if (k > l.length) return;
                                        l = l.substr(0, k);
                                        if (!d) d = l;
                                        else if (d != l) return
                                    }
                                    g[d] = a;
                                    ++k
                                }
                        }
                    }
                }
            }

            function c(a) {
                if (e) {
                    var b = g[a.Sa()];
                    if (b) {
                        var c = a.Gi(),
                            d = a.Sa();
                        b.wb().Sa();
                        for (var f = b.U(), l = k || !f.Ae("k"), w = [], G, J, u = b.Ba(), E = 0, F; F = u[E++];) J = F.X(), G = l ? h.bold(c, J) : H.escape(J), w.push(H.Bd(G, J, F.Ya(), F.I(), F.Gc(), F.U()));
                        delete g[d];
                        return H.Hd(a, a.ha(), w, f, !0, b.Ud(), !0, !1)
                    }
                }
                return null
            }

            function d() {
                g = {}
            }
            var e = !0,
                f, g = {}, h, k, l = {
                    R: function (a) {
                        h = a.get(H.F.Db, l)
                    },
                    ga: function () {
                        f = H.Ob([P4.Ke])
                    },
                    P: function (a) {
                        k = a.qg;
                        e = a.ng
                    },
                    I: function () {
                        return H.F.qc
                    },
                    N: function () {
                        return H.C.Oh
                    },
                    K: function () {
                        return {
                            Fa: a,
                            update: b,
                            get: c,
                            reset: d
                        }
                    },
                    xa: function () {
                        e = !1
                    }
                };
            return l
        };
        H.C.Oh = 98;
        H.O.register(H.F.qc, H.C.Oh, H.jp);
        H.Yo = function () {
            function a() {
                return H.Zo()
            }

            function b(a, b) {
                var c = a.U(),
                    d = c.ka(f.Ng),
                    c = c.ka(f.Fj);
                b.render(d, c)
            }

            function c(a, b, c) {
                c.search(b.X(), 1)
            }

            function d(a, b, c) {
                c.search(b.X(), 1);
                return !0
            }

            function e() {
                return 19
            }
            var f = {
                Ng: "a",
                Fj: "b"
            };
            return {
                I: function () {
                    return H.F.RENDERER
                },
                N: function () {
                    return H.C.hg
                },
                K: function () {
                    return {
                        Tb: a,
                        render: b,
                        tb: c,
                        Vb: d,
                        Ub: e
                    }
                }
            }
        };
        H.C.hg = 35;
        H.O.register(H.F.RENDERER, H.C.hg, H.Yo);
        H.Zo = function () {
            var a;
            a = H.Ka();
            return {
                za: function () {
                    return a
                },
                I: (0, _.ua)(19),
                hb: (0, _.ua)(!0),
                render: function (b, c) {
                    a.innerHTML = ["<b>", b, " = ", c, "</b>"].join("")
                }
            }
        };
        H.qy = function () {
            function a(a) {
                return H.sy(h, a)
            }

            function b(a, b) {
                var c = a.U(),
                    d = c.ka(g.ov),
                    e = f(a),
                    c = c.ka(g.Ls);
                b.render(d, e, k, c)
            }

            function c(a) {
                return f(a)
            }

            function d(a, b, c) {
                a = f(b);
                h.uc(a);
                c.search(a, 1)
            }

            function e() {
                return 46
            }

            function f(a) {
                return a.U().ka(g.Os) || a.X()
            }
            var g = {
                IA: "a",
                Ls: "b",
                Os: "c",
                ov: "d",
                SA: "e",
                KA: "f",
                kf: "g",
                ex: "h"
            }, h, k, l = {
                    qa: function (a, b) {
                        b.addRule(".gsen_a", "color:#333")
                    },
                    R: function (a) {
                        h = a.get(H.F.Z, l)
                    },
                    P: function (a) {
                        k = a.Nd ? a.Ne : ""
                    },
                    I: function () {
                        return H.F.RENDERER
                    },
                    N: function () {
                        return H.C.Nt
                    },
                    K: function () {
                        return {
                            Tb: a,
                            render: b,
                            qd: c,
                            tb: d,
                            Vb: H.Y,
                            Ub: e
                        }
                    }
                };
            return l
        };
        H.C.Nt = 377;
        H.O.register(H.F.RENDERER, H.C.Nt, H.qy);
        H.sy = function (a, b) {
            var c, d, e, f, g, h;
            (function () {
                c = H.Ka();
                c.className = "gsen_b";
                var a = H.Jc();
                c.appendChild(a);
                d = a.insertRow(-1);
                a = d.insertCell(-1);
                a.style.width = "100%";
                e = H.ea("span");
                a.appendChild(e);
                f = H.ea("span");
                f.className = "gsen_a";
                a.appendChild(f)
            })();
            return {
                za: function () {
                    return c
                },
                I: (0, _.ua)(46),
                hb: (0, _.ua)(!0),
                render: function (c, l, n, p) {
                    e.innerHTML = c;
                    f.innerHTML = p ? "&nbsp;&ndash; " + p : "";
                    h = l;
                    n && !g && (g = H.Wg(d), g.onclick = function (c) {
                        a.Td();
                        a.uc(h);
                        b.search(h, 9);
                        return H.Sb(c)
                    });
                    n ? (g.innerHTML = n + " &raquo;",
                        g.style.display = "") : g && (g.style.display = "none")
                }
            }
        };
        H.Yp = function () {
            function a(a) {
                return H.Zp(a)
            }

            function b(a, b) {
                var c = a.U(),
                    d = c.ka(h.aj),
                    c = c.ka(h.om),
                    e = a.Nb(),
                    f = e.replace(/HTTPS?:\/\//gi, ""),
                    e = H.sj(e);
                /^HTTPS?:\/\//i.test(e) || (e = (0 < d.indexOf("/url?url=https:") ? "https" : "http") + "://" + e);
                b.render(c, f, e, d)
            }

            function c(a, b) {
                return b
            }

            function d(a, b, c) {
                return g(a, b, c)
            }

            function e(a, b, c) {
                g(a, b, c);
                return !0
            }

            function f() {
                return 5
            }

            function g(a, b, c) {
                b = b.U().ka(h.aj);
                c.ic(b);
                return H.Sb(a)
            }
            var h = {
                aj: "a",
                om: "b"
            };
            return {
                qa: function (a, b) {
                    b.addRule(".gsn_a", "padding-top:4px;padding-bottom:1px");
                    b.addRule(".gsn_b", "display:block;line-height:16px");
                    b.addRule(".gsn_c", "color:green;font-size:13px")
                },
                I: function () {
                    return H.F.RENDERER
                },
                N: function () {
                    return H.C.Wj
                },
                K: function () {
                    return {
                        Tb: a,
                        render: b,
                        qd: c,
                        tb: d,
                        Vb: e,
                        Ub: f
                    }
                }
            }
        };
        H.C.Wj = 32;
        H.O.register(H.F.RENDERER, H.C.Wj, H.Yp);
        H.Zp = function (a) {
            function b(a) {
                return l ? (H.Sb(a), !0) : !1
            }

            function c(b) {
                b = b || window.event;
                l = !1;
                b.which ? l = 2 == b.which : b.button && (l = 4 == b.button);
                f.href = a.vd(k)
            }

            function d(a, b) {
                var c = H.ea("span");
                c.className = a;
                b.appendChild(c);
                return c
            }
            var e, f, g, h, k, l;
            (function () {
                e = H.Ka();
                e.className = "gsn_a";
                e.style.lineHeight = "117%";
                var a = d("gsn_b", e);
                f = H.ea("a");
                a.appendChild(f);
                g = H.ea("br");
                a.appendChild(g);
                h = d("gsn_c", a)
            })();
            return {
                za: function () {
                    return e
                },
                I: (0, _.ua)(5),
                hb: (0, _.ua)(!0),
                render: function (a, d, e, l) {
                    f.innerHTML =
                        a;
                    f.onmousedown = c;
                    f.onclick = b;
                    f.href = e;
                    a ? (f.style.display = "", g.style.display = "") : (f.style.display = "none", g.style.display = "none");
                    h.innerHTML = d;
                    k = l
                }
            }
        };
        H.Oy = function () {
            function a(a) {
                return H.Py(a)
            }

            function b(a, b) {
                var c = a.U(),
                    d = uUa,
                    k = c.ka(d.Hk),
                    c = c.ka(d.Mt),
                    d = a.X();
                b.render(k, c, d)
            }

            function c(a, b, c) {
                c.search(b.X(), 1)
            }

            function d() {
                return 33
            }
            return {
                qa: function (a, b) {
                    b.addRule(".gspr_a", "padding-right:1px")
                },
                I: function () {
                    return H.F.RENDERER
                },
                N: function () {
                    return H.C.Wt
                },
                K: function () {
                    return {
                        Tb: a,
                        render: b,
                        tb: c,
                        Vb: H.Y,
                        Ub: d
                    }
                }
            }
        };
        H.C.Wt = 31;
        H.O.register(H.F.RENDERER, H.C.Wt, H.Oy);
        H.Py = function () {
            var a;
            a = H.Ka();
            a.className = "gspr_a";
            return {
                I: (0, _.ua)(33),
                za: function () {
                    return a
                },
                hb: (0, _.ua)(!0),
                render: function (b, c) {
                    a.innerHTML = c
                }
            }
        };
        H.Vv = function () {
            function a(a) {
                return H.Wv(e, a)
            }

            function b(a, b) {
                b.render(a.Nb(), a.X(), f)
            }

            function c(a, b, c) {
                c.search(b.X(), 1)
            }

            function d() {
                return 0
            }
            var e, f, g = {
                    qa: function (a, b) {
                        b.addRule(".gsq_a", "padding:0")
                    },
                    R: function (a) {
                        e = a.get(H.F.Z, g)
                    },
                    P: function (a) {
                        f = a.Nd ? a.Ne : ""
                    },
                    I: function () {
                        return H.F.RENDERER
                    },
                    N: function () {
                        return H.C.Zt
                    },
                    K: function () {
                        return {
                            Tb: a,
                            render: b,
                            tb: c,
                            Vb: H.Y,
                            Ub: d
                        }
                    }
                };
            return g
        };
        H.C.Zt = 20;
        H.O.register(H.F.RENDERER, H.C.Zt, H.Vv);
        H.Wv = function (a, b) {
            var c, d, e, f, g;
            (function () {
                c = H.Ka();
                c.className = "gsq_a";
                var a = H.Jc();
                c.appendChild(a);
                d = a.insertRow(-1);
                a = d.insertCell(-1);
                a.style.width = "100%";
                e = H.ea("span");
                a.appendChild(e)
            })();
            return {
                za: function () {
                    return c
                },
                I: (0, _.ua)(0),
                hb: (0, _.ua)(!0),
                render: function (c, k, l) {
                    e.innerHTML = c;
                    g = k;
                    l && !f && (f = H.Wg(d), f.onclick = function (c) {
                        a.Td();
                        a.uc(g);
                        b.search(g, 9);
                        return H.Sb(c)
                    });
                    l ? (f.innerHTML = l + " &raquo;", f.style.display = "") : f && (f.style.display = "none")
                }
            }
        };
        H.TA = function () {
            function a() {
                return r
            }

            function b() {
                return H.C.Ts
            }

            function c() {
                return 2
            }

            function d() {
                return E
            }

            function e() {
                return {
                    Kv: s
                }
            }

            function f(a) {
                if (!R) a = window.document.createElement("script"), a.src = ["//www.google.com/textinputassistant/", u, "/", J, "_tia.js"].join(""), window.document.body.appendChild(a), R = !0, p.add(3);
                else if (w.onclick) w.onclick(a)
            }

            function g() {
                m.Kd()
            }

            function h() {
                t.BB()
            }

            function k(a) {
                t.aC(b(), a)
            }

            function l(a) {
                t.cC(b(), a)
            }

            function n(a) {
                E.className = "gsok_a gsst_e " + a
            }
            var p, m, t, s,
                r, w, G, J, u, E, F, R, Z = {
                    qa: function (a, b) {
                        F = a;
                        a.ue() || (b.addRule(".gsok_a", "background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"), b.addRule(".gsok_a img", "border:none;visibility:hidden"))
                    },
                    R: function (a) {
                        var b = H.F;
                        p = a.get(b.Ja, Z);
                        m = a.get(b.ra, Z);
                        t = a.get(b.Sd, Z)
                    },
                    ga: function (a) {
                        r = !! a.mi;
                        G = a.Mr;
                        J = a.Kg;
                        u = a.Pr;
                        s = a.Or;
                        (E = F.get("gs_ok")) ? w = E.firstChild :
                            (w = H.ea("img"), w.src = G + "/tia.png", E = H.ea("span", "gsok_a gsst_e"), E.id = F.getId("gs_ok"), E.appendChild(w));
                        w.ds = g;
                        w.hd = h;
                        w.sc = n;
                        w.sd = k;
                        w.td = l;
                        w.setAttribute("tia_field_name", F.je().name);
                        w.setAttribute("tia_disable_swap", !0)
                    },
                    P: function (a) {
                        a.Tg && (r = !! a.mi);
                        w.setAttribute("tia_property", a.Nr)
                    },
                    I: function () {
                        return H.F.Vc
                    },
                    N: function () {
                        return H.C.Ts
                    },
                    K: function () {
                        return {
                            isEnabled: a,
                            Fr: b,
                            Fa: c,
                            za: d,
                            Dr: e,
                            tb: f
                        }
                    }
                };
            return Z
        };
        H.C.Ts = 78;
        H.O.register(H.F.Vc, H.C.Ts, H.TA);
        H.YA = function () {
            function a() {
                return g
            }

            function b() {
                return H.C.Xs
            }

            function c() {
                return 3
            }

            function d() {
                return h
            }

            function e() {
                return {
                    Kv: l
                }
            }

            function f() {
                window.google.load("qi", function () {
                    window.google.qb.tp()
                })
            }
            var g, h, k, l;
            return {
                qa: function (a, b) {
                    k = a;
                    a.ue() || b.addRule("#qbi.gssi_a", "background:url(data:image/gif;base64,R0lGODlhEgANAOMKAAAAABUVFRoaGisrKzk5OUxMTGRkZLS0tM/Pz9/f3////////////////////////yH5BAEKAA8ALAAAAAASAA0AAART8Ml5Arg3nMkluQIhXMRUYNiwSceAnYAwAkOCGISBJC4mSKMDwpJBHFC/h+xhQAEMSuSo9EFRnSCmEzrDComAgBGbsuF0PHJq9WipnYJB9/UmFyIAOw==) no-repeat center;cursor:pointer;display:inline-block;height:13px;padding:0;width:18px")
                },
                ga: function (a) {
                    g = !! a.ln;
                    l = a.Sr;
                    h = k.get("gs_si");
                    h || (h = H.ea("span"), h.id = k.getId("gs_si"), a = H.ea("span", "gssi_a gsst_e"), a.id = "qbi", h.appendChild(a))
                },
                P: function (a) {
                    a.Tg && (g = !! a.ln)
                },
                I: function () {
                    return H.F.Vc
                },
                N: function () {
                    return H.C.Xs
                },
                K: function () {
                    return {
                        isEnabled: a,
                        Fr: b,
                        Fa: c,
                        za: d,
                        Dr: e,
                        tb: f
                    }
                }
            }
        };
        H.C.Xs = 79;
        H.O.register(H.F.Vc, H.C.Xs, H.YA);
        H.ZA = function () {
            function a() {
                return H.C.Zs
            }

            function b(a) {
                V != a && (ca.dir = V = a, f())
            }

            function c() {
                return ca
            }

            function d(a) {
                (a = S[a]) && a.style && (a.style.display = "")
            }

            function e(a) {
                (a = S[a]) && a.style && (a.style.display = "none")
            }

            function f() {
                $ && (S[$].className = "gsst_a", u.hide(), $ = null)
            }

            function g(a, b) {
                $ = a;
                var c = S[a];
                c.className = "gsst_a gsst_g";
                var d = X.lastChild;
                d != b && (d == W ? X.appendChild(b) : X.replaceChild(b, d));
                u.setPanel(m());
                u.show();
                c = c.clientWidth;
                W.style.width = c + "px";
                W.style.left = "rtl" == V ? "0" : X.clientWidth -
                    c + "px"
            }

            function h(a, b) {
                $ == a ? f() : g(a, b)
            }

            function k(a) {
                var b = lUa;
                a.lh = "rtl" == V ? b.Ng : b.Fj;
                a.yk = !1
            }

            function l() {
                return X
            }

            function n() {
                return T.Pl || ja == V ? ia : null
            }

            function p() {
                f()
            }

            function m() {
                return H.C.Zs
            }

            function t(a, b) {
                return b.Fa() - a.Fa()
            }

            function s() {
                ga != $ && f()
            }

            function r() {
                for (var a, b = 0, c; c = R[b++];)
                    if (c.isEnabled()) {
                        a = !0;
                        var d = H.ea("a", "gsst_a");
                        J(d, c);
                        d.appendChild(c.za());
                        ca.appendChild(d)
                    }
                ca.style.display = a ? "" : "none"
            }

            function w() {
                ga = null
            }

            function G() {
                S = {};
                for (var a = 0, b; b = R[a++];)
                    if (b.isEnabled()) {
                        var c =
                            b.Fr(),
                            d = b.za().parentNode;
                        d.onclick = b.tb;
                        d.onmouseover = function () {
                            ga = c
                        };
                        d.onmouseout = w;
                        S[c] = d;
                        b.Dr && (b = b.Dr(), b.AH && e(c), (b = b.Kv) && !Z.Ce(d, b) && (d.title = b))
                    }
            }

            function J(a, b) {
                a.href = "javascript:void(0)";
                H.Ur(a);
                a.onkeydown = function (a) {
                    a = a || window.event;
                    var c = a.keyCode;
                    if (13 == c || 32 == c) b.tb(a), F.pg(), H.Sb(a)
                }
            }
            var u, E, F, R, Z, T, ca, P, S = {}, $, X, W, ga, ja, V, ia, ha, da = {
                    qa: function (a, b) {
                        P = a;
                        ja = a.ud();
                        a.ue() || (b.addRule(".gsst_a", "display:inline-block"), b.addRule(".gsst_a", "cursor:pointer;padding:0 4px"), b.addRule(".gsst_a:hover",
                            "text-decoration:none!important"), b.addRule(".gsst_b", ["font-size:16px;padding:0 2px;position:relative;", b.prefix("user-select:none;"), "white-space:nowrap"].join("")), b.addRule(".gsst_e", H.Um(0.55)), b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e", H.Um(0.72)), b.addRule(".gsst_a:active .gsst_e", H.Um(1)), b.addRule(".gsst_f", "background:white;text-align:left"), b.addRule(".gsst_g", ["background-color:white;border:1px solid #ccc;border-top-color:#d9d9d9;", b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);"),
                            "margin:-1px -3px;padding:0 6px"
                        ].join("")), b.addRule(".gsst_h", "background-color:white;height:1px;margin-bottom:-1px;position:relative;top:-1px"))
                    },
                    R: function (a) {
                        u = a.get(H.F.Ua, da);
                        E = a.get(H.F.wa, da);
                        F = a.get(H.F.Z, da);
                        R = a.Ia(H.F.Vc, da);
                        Z = a.Zb()
                    },
                    ga: function (a) {
                        ha = a.Tg;
                        R.sort(t);
                        ca = P.get("gs_st");
                        if (!ca) {
                            ca = H.Ka("gsst_b");
                            ca.id = P.getId("gs_st");
                            if (a = a.Ug) ca.style.lineHeight = a + "px";
                            r()
                        }
                        G()
                    },
                    P: function (a) {
                        T = a;
                        (a = a.uf) && (ia = P.Fc(a));
                        if (ha) {
                            a = 0;
                            for (var b; b = R[a++];) {
                                var c = !! S[b.Fr()];
                                if (b.isEnabled() !=
                                    c) {
                                    for (; ca.hasChildNodes();) ca.removeChild(ca.lastChild);
                                    r();
                                    G();
                                    break
                                }
                            }
                        }
                        W = H.Ka("gsst_h");
                        X = H.Ka("gsst_f");
                        X.dir = "ltr";
                        X.appendChild(W);
                        E.fc(13, s)
                    },
                    I: function () {
                        return H.F.Sd
                    },
                    N: a,
                    K: function () {
                        return {
                            Kc: b,
                            za: c,
                            pI: d,
                            qH: e,
                            BB: f,
                            aC: g,
                            cC: h
                        }
                    },
                    Gd: function () {
                        var b = {
                            ok: k,
                            za: l,
                            qf: n,
                            wk: p,
                            $b: H.Y,
                            kh: m
                        };
                        return [{
                            qa: H.Y,
                            R: H.Y,
                            ga: H.Y,
                            P: H.Y,
                            I: function () {
                                return H.F.jf
                            },
                            N: a,
                            K: function () {
                                return b
                            },
                            Gd: H.Y,
                            xa: H.Y
                        }]
                    }
                };
            return da
        };
        H.C.Zs = 174;
        H.O.register(H.F.Sd, H.C.Zs, H.ZA);
        H.Ep = function () {
            function a() {
                var a = window.document.getElementById("gbqf");
                return a && "FORM" == a.tagName ? a : null
            }

            function b(a, b, c) {
                var d = a[b],
                    e = d && d.parentNode;
                null === c ? e && e.removeChild(d) : (e || (e = window.document.getElementById("gbqffd") || window.document.getElementById("tophf") || a, d = window.document.createElement("input"), d.type = "hidden", d.name = b, e.appendChild(d)), d.value = c)
            }
            var c = {
                webhp: 1,
                imghp: 1,
                mobilewebhp: 1
            }, d, e = {};
            H.Ml = function () {
                var b = a();
                if (b) return b;
                for (var c = ["f", "gs"], d = 0; b = c[d++];)
                    if (b = window.document.getElementsByName(b)[0]) return b;
                return null
            };
            H.Mq = function () {
                return !!a()
            };
            H.Rq = function (a, b) {
                window.google.register("sb", {
                    init: a,
                    dispose: b
                })
            };
            H.ik = function () {
                return !(window.google.sn in c)
            };
            H.Lc = function () {
                if (!d) {
                    var a = window.google.browser.engine,
                        b = window.google.browser.product;
                    d = {};
                    d[Q4.IE] = a.IE;
                    d[Q4.GECKO] = a.GECKO;
                    d[Q4.OPERA] = b.OPERA;
                    d[Q4.WEBKIT] = a.WEBKIT;
                    d[Q4.SAFARI] = b.SAFARI;
                    d[Q4.CHROME] = b.CHROME;
                    d[Q4.cj] = b.IPAD || b.IPOD || b.IPHONE;
                    d[Q4.$i] = b.ANDROID_MOBILE || b.ANDROID_TABLET
                }
                return d
            };
            H.ff = function (a, c) {
                for (var d in e) d in c ||
                    (b(a, d, e[d]), delete e[d]);
                for (d in c) {
                    if (!(d in e)) {
                        var k = a[d];
                        e[d] = k && k.parentNode ? k.value : null
                    }
                    b(a, d, c[d])
                }
            };
            H.Hl = function (a, c) {
                b(a, c, null)
            };
            H.gr = function () {
                e = {}
            }
        };
        H.Ep();
        var U4 = {
            nr: "sri-hp",
            Rs: "sri-hp-hide",
            Gj: "sri-serp",
            nk: "sri-serp-hide",
            Wx: "allow-anim"
        }, V4 = {
                Dh: "spchb",
                Ps: "spchta"
            };
        H.rJ = function (a, b, c, d) {
            function e() {
                Aa[na.SD] = 1;
                if (qa == V.Fd)++Aa[na.oJ], t(ha.Fd);
                else if (qa != V.Xv) u(ha.yu, ia.aJ);
                else if (++Aa[na.Ss], qa = V.Yy, qa == V.Yy && L.init()) {
                    window.postMessage({
                        type: "SPEECH_START"
                    }, "*");
                    L.start();
                    k();
                    wa.Td();
                    Ba = wa.Ha();
                    window.google.msg.send(120);
                    window.document.addEventListener("webkitvisibilitychange", F, !1);
                    va && va.onerror && va.onnomatch && va.onend && va.onresult && va.onaudiostart && va.onspeechstart || ca();
                    try {
                        va.start(), qa = V.Ss
                    } catch (a) {
                        if (qa = V.Yy, ca(), qa == V.Yy) try {
                            va.start(), qa = V.Ss
                        } catch (b) {
                            qa =
                                V.Nv, t(ha.yu, ia.BJ), ++Aa[na.yA], E()
                        }
                    }
                } else qa = V.Fd
            }

            function f(a, b, c, d) {
                Pa && c ? ga(da.KI) : qa == V.dw && d ? (t(ha.WA, a, b), ++Aa[na.WA], ja(), e()) : u(ha.LI, a, b)
            }

            function g() {
                return qa != V.Fd
            }

            function h() {
                switch (qa) {
                case V.Xv:
                case V.Fd:
                case V.LA:
                    return !0
                }
                return !1
            }

            function k() {
                H.Lb(pa);
                pa = window.setTimeout(R, 8E3)
            }

            function l() {
                H.Lb(pa);
                pa = window.setTimeout(R, 15E3)
            }

            function n() {
                return 0 < Aa[na.SD] ? Aa : [0]
            }

            function p() {
                Aa = [];
                for (var a in na) Aa[na[a]] = 0
            }

            function m() {
                return c
            }

            function t(a, b, c) {
                var d = "";
                b && (d += "&reason=" +
                    b);
                c && (d += "&data=" + c);
                window.google.log("spch-recog", a + d)
            }

            function s() {
                h() || u(ha.yu, ia.zJ);
                return !0
            }

            function r() {
                ++Aa[na.gJ];
                t(ha.bJ);
                qa = V.Au;
                L.bC("8");
                H.Lb(pa);
                T(8E3)
            }

            function w() {
                ++Aa[na.eJ];
                H.Lb(pa);
                var a = "9";
                switch (qa) {
                case V.Ss:
                    qa = V.zu;
                    a = "2";
                    break;
                case V.$x:
                    qa = V.zu;
                    a = "0";
                    break;
                case V.Wy:
                case V.Yv:
                    qa = V.zu;
                    a = "8";
                    break;
                case V.Au:
                    break;
                default:
                    return
                }
                switch (qa) {
                case V.zu:
                    ++Aa[na.zu], L.bC(a), T(8E3), t(ha.TI, a);
                case V.Au:
                    qa = V.dw;
                    break;
                default:
                    qa = V.dw, E()
                }
            }

            function G(a) {
                switch (a) {
                case "no-speech":
                    return ba =
                        8E3, "0";
                case "aborted":
                    return ba = 3E3, "1";
                case "audio-capture":
                    return ba = 8E3, "2";
                case "network":
                    return ba = 3E3, "3";
                case "not-allowed":
                    return ba = 8E3, "4";
                case "service-not-allowed":
                    return ba = 8E3, "5";
                case "bad-grammar":
                    return ba = 3E3, "6";
                case "language-not-supported":
                    return ba = 3E3, "7";
                default:
                    return ba = 3E3, "9"
                }
            }

            function J(a) {
                k();
                var b = G(a.error);
                if ("1" != b) {
                    ++Aa[na.fJ];
                    var c = "";
                    "9" == b && (c = a.error);
                    t(ha.ERROR, b, c);
                    qa = V.Au;
                    L.bC(b);
                    H.Lb(pa);
                    T(ba)
                }
            }

            function u(a, b, c) {
                ++Aa[na.yA];
                t(a, String(b), c);
                qa = V.Nv;
                E()
            }

            function E() {
                qa != V.XA && (window.google.msg.send(126), "" != Ta && (wa.clear(), "" != Ba && (wa.uc(Ba), fa.search(Ba, 15))));
                qa == V.Nv && (qa = V.dw, va.abort());
                L.stop();
                ja()
            }

            function F() {
                !h() && window.document.webkitHidden && (t(ha.yu, ia.AJ), ++Aa[na.yA], qa = V.Nv, E())
            }

            function R() {
                if ("" != Ha) Pa = Ha, ga(da.JA);
                else switch (qa) {
                case V.Ss:
                case V.$x:
                case V.Wy:
                case V.Yv:
                case V.Au:
                    u(ha.yu, ia.JA)
                }
            }

            function Z() {
                return qa == V.XA
            }

            function T(a) {
                H.Lb(U);
                U = window.setTimeout(E, a)
            }

            function ca() {
                va = new window.webkitSpeechRecognition;
                va.continuous = !1;
                va.interimResults = !0;
                va.lang = Ea;
                va.maxAlternatives = 4;
                va.onerror = J;
                va.onnomatch = r;
                va.onend = w;
                va.onresult = P;
                va.onaudiostart = S;
                va.onspeechstart = $
            }

            function P(a) {
                k();
                switch (qa) {
                case V.Yv:
                case V.Wy:
                    break;
                case V.$x:
                    $();
                    break;
                case V.Ss:
                    $();
                    S();
                    break;
                default:
                    return
                }++Aa[na.hJ];
                var b = a.results;
                if (0 < b.length) {
                    qa = V.Yv;
                    Ha = Ta = "";
                    a = a.resultIndex;
                    if (b[a].isFinal) Ha = b[a][0].transcript, L.OF(Ha, Ha);
                    else {
                        for (var c = 0; c < b.length; c++) Ta += b[c][0].transcript, 0.5 < b[c][0].confidence && (Ha += b[c][0].transcript);
                        L.OF(Ta, Ha)
                    }
                    qa ==
                        V.Yv && (b[a].isFinal || 120 < Ta.length ? (Pa = Ha, ga(da.RI)) : (Y.add(6), Pa = Ta, wa.rg(Pa)))
                }
            }

            function S() {
                ++Aa[na.dJ];
                k();
                qa = V.$x;
                L.zM()
            }

            function $() {
                ++Aa[na.iJ];
                k();
                qa = V.Wy;
                L.RM();
                ya.xf(!1);
                window.google.msg.listen(106, Z, 50)
            }

            function X(a) {
                if (a.source == window) {
                    var b = "";
                    if ("HOTWORD_VOICE_TRIGGER" == a.data.type) b = "voice";
                    else if ("HOTWORD_BUTTON_TRIGGER" == a.data.type) b = "button";
                    else if ("HOTWORD_TRIGGER" == a.data.type) b = "unknown";
                    else return;
                    t(ha.WI, b);
                    e()
                }
            }

            function W(a) {
                var b;
                n: {
                    switch (qa) {
                    case V.Xv:
                    case V.Nv:
                    case V.dw:
                    case V.Au:
                    case V.Fd:
                    case V.LA:
                        b = !1;
                        break n
                    }
                    b = !0
                }
                b ? (a.stopPropagation(), 27 == a.keyCode ? u(ha.yu, ia.Se) : 13 == a.keyCode && Pa && ga(da.OI)) : (b = a.ctrlKey || H.zh && a.metaKey, d && (qa == V.Xv && 190 == a.keyCode && a.shiftKey && b) && e())
            }

            function ga(a) {
                Aa[na.pJ] = a;
                qa = V.XA;
                H.Lb(pa);
                window.google.msg.send(121);
                wa.uc(Pa);
                Y.add(6);
                fa.search(Pa, 15);
                E()
            }

            function ja() {
                H.Lb(pa);
                H.Lb(U);
                ya.xf(!0);
                window.google.msg.unlisten(106, Z, 50);
                window.document.removeEventListener("webkitvisibilitychange", F, !1);
                window.postMessage({
                    type: "SPEECH_RESET"
                }, "*");
                Ba = Ha = Ta = Pa = "";
                qa = V.Xv;
                va.abort()
            }
            var V = {
                Fd: -1,
                Xv: 0,
                LA: 1,
                Yy: 2,
                Ss: 3,
                $x: 4,
                Wy: 5,
                Yv: 6,
                XA: 7,
                Au: 8,
                zu: 9,
                Nv: 10,
                dw: 11
            }, ia = {
                    Se: "0",
                    BJ: "1",
                    zJ: "2",
                    JA: "3",
                    AJ: "4",
                    aJ: "5"
                }, ha = {
                    yu: 0,
                    LI: 1,
                    ERROR: 2,
                    TI: 3,
                    bJ: 4,
                    Fd: 5,
                    WA: 6,
                    WI: 7
                }, da = {
                    NONE: 0,
                    KI: 1,
                    JA: 2,
                    RI: 3,
                    OI: 4
                }, na = {
                    SD: 0,
                    oJ: 1,
                    Ss: 2,
                    fJ: 3,
                    gJ: 4,
                    eJ: 5,
                    hJ: 6,
                    dJ: 7,
                    iJ: 8,
                    zu: 9,
                    yA: 10,
                    pJ: 11,
                    WA: 12
                }, Y, fa, wa, L, ya, va, Ea, Ba, Pa, Ta, Ha, qa, Aa = [],
                pa, U, ba = 0,
                oa = {
                    R: function (a) {
                        var b = H.F;
                        wa = a.get(b.Z, oa);
                        Y = a.get(b.Ja, oa);
                        L = a.get(b.Vw, oa);
                        ya = a.get(b.ra, oa);
                        fa = a.get(b.Xa, oa)
                    },
                    ga: function () {
                        qa = a && "webkitSpeechRecognition" in window.self &&
                            window.webkitSpeechRecognition ? V.LA : V.Fd;
                        Ea = b;
                        qa != V.Fd && (ca(), ja(), window.google.msg.listen(7, s), window.addEventListener("keydown", W, !1));
                        window.addEventListener("message", X, !1)
                    },
                    I: function () {
                        return H.F.Ys
                    },
                    N: function () {
                        return H.C.Ys
                    },
                    K: function () {
                        return {
                            yK: n,
                            Bw: m,
                            ZM: e,
                            tb: f,
                            isEnabled: g,
                            NQ: h,
                            jM: l,
                            kM: k,
                            xc: p
                        }
                    }
                };
            return oa
        };
        H.C.Ys = 447;
        H.F.Ys = 454;
        H.hU = function () {
            function a() {
                return h
            }

            function b() {
                return H.C.VI
            }

            function c() {
                return 1
            }

            function d() {
                return k
            }

            function e() {
                return {
                    Kv: n
                }
            }

            function f() {
                k.hasAttribute("tts") || g.ZM()
            }
            var g, h, k, l, n, p = {
                    qa: function (a, b) {
                        l = a;
                        a.ue() || (b.addRule(".gsri_a", "background: url(data:image/gif;base64,R0lGODlhFQAVAMIEAAMGAkFDQHN1csnLx////////////////yH5BAEKAAQALAAAAAAVABUAAANJSLrc/kQAICCUk1qX827d9DEhMC7lqaQqe7pQYBIsEDzSEHXVoDm+yu6XiwF0Dd8N4qMgBxgkUxYKSDfQieD6mqlQ3i8tLP4kAAA7) no-repeat center;display:inline-block;height:23px;width:17px;"),
                            b.addRule(".gsst_e", "vertical-align:middle;opacity:0.6!important"), b.addRule(".gsst_e:hover", "opacity:0.8!important"), b.addRule(".gsst_e:active", "opacity:1.0!important"))
                    },
                    R: function (a) {
                        g = a.get(H.F.Ys, p)
                    },
                    ga: function (a) {
                        h = a.Jg;
                        k = l.get("gsri_ok");
                        n = g.Bw();
                        k || (k = H.ea("span", "gsri_a gsst_e"), k.id = l.getId("gsri_ok"))
                    },
                    P: function (a) {
                        a.Tg && (h = a.Jg)
                    },
                    I: function () {
                        return H.F.Vc
                    },
                    N: function () {
                        return H.C.VI
                    },
                    K: function () {
                        return {
                            isEnabled: a,
                            Fr: b,
                            Fa: c,
                            za: d,
                            Dr: e,
                            tb: f
                        }
                    }
                };
            return p
        };
        H.C.VI = 441;
        H.O.register(H.F.Vc, H.C.VI, H.hU);
        H.sJ = function () {
            function a() {
                return 23
            }

            function b() {
                return g.yK().join("j").replace(d, "j").replace(e, "")
            }

            function c() {
                g.xc()
            }
            var d = /j0/g,
                e = /j+$/,
                f = H.F,
                g, h = {
                    R: function (a) {
                        g = a.get(f.Ys, h)
                    },
                    I: function () {
                        return f.fh
                    },
                    N: function () {
                        return H.C.UI
                    },
                    K: function () {
                        return {
                            Ya: a,
                            getValue: b,
                            reset: c
                        }
                    }
                };
            return h
        };
        H.C.UI = 471;
        H.tJ = function (a) {
            function b() {
                G || (G++, l())
            }

            function c() {
                G = 0;
                m.removeAttribute("class")
            }

            function d() {
                return !!m && !! t && !! s && !! r
            }

            function e() {
                J || (J++, n())
            }

            function f() {
                J = 0
            }

            function g(a) {
                d() && a.appendChild(w)
            }

            function h() {
                m.className = "pressed"
            }

            function k() {
                m.removeAttribute("class");
                m.onmouseout = null
            }

            function l() {
                if (G) {
                    var a = 0;
                    0.9 == r.style.opacity ? (a = Math.round(1E3 + 400 * Math.random()), r.style.setProperty("-webkit-transition", "opacity " + a / 1E3 + "s ease-out, -webkit-transform " + a / 1E3 + "s ease-out", ""), r.style.opacity =
                        0, r.style.setProperty("-webkit-transform", "scale(1,1)", "")) : (a = Math.round(100 * Math.random()), r.style.setProperty("-webkit-transition", "opacity 0s, -webkit-transform 0s", ""), r.style.setProperty("-webkit-transform", "scale(0.3,0.3)", ""), r.style.opacity = 0.9);
                    window.setTimeout(l, a)
                } else r.style.removeProperty("opacity"), r.style.removeProperty("-webkit-transition"), r.style.removeProperty("-webkit-transform")
            }

            function n() {
                if (J) {
                    var a = 0.5 + 0.55 * Math.random(),
                        b = Math.round(110 + 10 * Math.random());
                    s.style.setProperty("-webkit-transition",
                        "-webkit-transform " + b / 1E3 + "s ease-in-out", "");
                    s.style.setProperty("-webkit-transform", "scale(" + a + ")", "");
                    window.setTimeout(n, b)
                } else s.style.removeProperty("opacity"), s.style.removeProperty("-webkit-transition"), s.style.removeProperty("-webkit-transform")
            }
            var p, m, t, s, r, w, G, J, u, E = {
                    qa: function (a, b) {
                        p = a;
                        if (!a.ue()) {
                            var c = "rtl" == a.ud() ? "left" : "right";
                            b.addRule("#spchm", "display:block;pointer-events:none;height:87px;width:42px;top:47px;left:43px;position:absolute;-webkit-transform:scale(1);z-index:1103");
                            b.addRule("." + U4.nk + " #spchm,." + U4.Gj + " #spchm", "-webkit-transform:scale(.53);left:17px;top:7px");
                            b.addRule("#mrcv", "width:24px;pointer-events:none;height:46px;position:absolute;background-color:#fff;left:25px;border-radius:30px;box-shadow:0px 4px 2px 0 #b6413b");
                            b.addRule("#mwrp", "overflow:hidden;pointer-events:none;width:52px;height:53px;position:absolute;bottom:0;left:11px");
                            b.addRule("#mstm", "width:9px;pointer-events:none;height:14px;position:absolute;background-color:#fff;left:22px;bottom:14px;box-shadow:0 4px 2px 0 #b6413b;z-index:1");
                            b.addRule("#mshl", "width:38px;height:57px;pointer-events:none;position:absolute;border:7px solid #fff;border-radius:28px;bottom:27px;box-shadow:0px 4px 2px 0 #b6413b;z-index:0");
                            b.addRule(".pressed #mrcv", "background-color:#72120e;box-shadow:inset 0 4px 2px 0 #590907");
                            b.addRule(".pressed #mstm", "background-color:#72120e;box-shadow:0 0 #000;z-index:0");
                            b.addRule(".pressed #mshl", "border-color:#72120e;box-shadow:inset 0 -2px 2px 2px #590907;z-index:1");
                            b.addRule("#" + V4.Dh, "background-color:#d2423b;border:1px solid #b33731;border-radius:100%;cursor:pointer;box-shadow:0 4px 6px rgba(0,0,0,.2), inset 0 2px 1px rgba(255,255,255,.15), inset 0 -2px 0px rgba(255,255,255,.1);-webkit-transition:background-color .218s, border .218s, box-shadow .218s;display:inline-block;top:0;bottom:0;left:0;right:0;opacity:0;pointer-events:none;position:absolute;z-index:1101");
                            b.addRule("." + U4.Wx + " #" + V4.Dh, "cursor:auto");
                            b.addRule("#spchk:active #" + V4.Dh, "background-color:#a42c27;border:1px solid #8d1d17;box-shadow:inset 0 2px 1px rgba(0,0,0,.05), inset 0 -1px 1px rgba(255,255,255,.1);-webkit-transition:background-color 0s, border 0s, box-shadow 0s");
                            b.addRule("#spchk:hover #" + V4.Dh, "background-color:#c4352e;border:1px solid #a62e28;box-shadow:0 4px 6px rgba(0,0,0,.2), inset 0 2px 1px rgba(255,255,255,.15), inset 0 -2px 1px rgba(255,255,255,.1);-webkit-transition:background-color .218s, border .218s, box-shadow .218s");
                            b.addRule("#spchk:hover:active #" + V4.Dh, "background-color:#a42c27;border:1px solid #8d1d17;box-shadow:inset 0 2px 1px rgba(0,0,0,.05), inset 0 -1px 1px rgba(255,255,255,.1);-webkit-transition:background-color 0s, border 0s, box-shadow 0s");
                            b.addRule("." + U4.nk + " #" + V4.Dh, "opacity:0;pointer-events:none;top:-83px;left:-83px;position:absolute;-webkit-transition-delay:0");
                            b.addRule("." + U4.Rs + " #" + V4.Dh, "opacity:0;pointer-events:none;position:absolute;-webkit-transition-delay:0");
                            b.addRule("." + U4.nr + " #" +
                                V4.Dh + ", ." + U4.Gj + " #" + V4.Dh, "opacity:1;pointer-events:auto;position:absolute;-webkit-transform:scale(1.0);-webkit-transition-delay:0");
                            b.addRule(".pressed#" + V4.Dh, "opacity:1;pointer-events:auto;box-shadow:inset 0px 0px 13px #8d1d17;background-color:#a42c27");
                            b.addRule("#spchl", "opacity:1;position:absolute;pointer-events:none;width:301px;height:301px;top:-69px;left:-69px;z-index:1050;display:inline-block;-webkit-transform:scale(0.1);background-color:#eee;border-radius:100%;border: 1px solid #dedede;-webkit-transition:opacity .218s");
                            b.addRule("." + U4.nk + " #spchl, ." + U4.Gj + " #spchl", "width:151px;height:151px;left:-29px;top:-29px");
                            b.addRule("#spchp", "opacity:0;pointer-events:none;position:absolute;top:-170px;left:-170px;z-index:1050;display:inline-block;width:501px;height:501px;border-radius:100%;border:2px solid #bababa;-webkit-transition:opacity .218s");
                            b.addRule("." + U4.nk + " #spchp, ." + U4.Gj + " #spchp", "width:251px;height:251px;top:-80px;left:-80px");
                            b.addRule("#spchk", ["float:" + c + ";", "pointer-events:none;position:relative;-webkit-transition:-webkit-transform .218s, opacity .218s ease-in"].join(""));
                            b.addRule("." + U4.Rs + " #spchk", ["height:165px;width:165px;top:-70px;", c + ":-70px;", "-webkit-transform:scale(0.1)"].join(""));
                            b.addRule("." + U4.nr + " #spchk", ["top:-70px;", c + ":-70px;", "height:165px;width:165px;-webkit-transform:scale(1.0)"].join(""));
                            b.addRule("." + U4.nk + " #spchk", ["height:95px;width:95px;", c + ":-31px;", "top:-27px;-webkit-transform:scale(0.1)"].join(""));
                            b.addRule("." + U4.Gj + " #spchk", ["height:95px;width:95px;", c + ":-31px;", "top:-27px;-webkit-transform:scale(1.0)"].join(""))
                        }
                    },
                    R: function (a) {
                        u =
                            a.get(H.F.Ww, E)
                    },
                    ga: function () {
                        if (a) {
                            J = G = 0;
                            var b, c, d, e;
                            w = u.W(p, "div", "spchk");
                            m = u.W(p, "span", V4.Dh);
                            t = u.W(p, "span", "spchm");
                            s = u.W(p, "span", "spchl");
                            r = u.W(p, "span", "spchp");
                            b = u.W(p, "span", "mrcv");
                            c = u.W(p, "div", "mwrp");
                            d = u.W(p, "span", "mstm");
                            e = u.W(p, "span", "mshl");
                            c.appendChild(d);
                            c.appendChild(e);
                            t.appendChild(b);
                            t.appendChild(c);
                            m.appendChild(t);
                            w.appendChild(m);
                            w.appendChild(s);
                            w.appendChild(r);
                            m.addEventListener("mousedown", h, !1);
                            m.addEventListener("mouseup", k, !1)
                        }
                    },
                    I: function () {
                        return H.F.YD
                    },
                    N: function () {
                        return H.C.YD
                    },
                    K: function () {
                        return {
                            QM: b,
                            UM: c,
                            PM: e,
                            TM: f,
                            mv: g,
                            bB: d
                        }
                    }
                };
            return E
        };
        H.C.YD = 448;
        H.F.WD = 457;
        H.uJ = function (a, b) {
            function c() {
                S || n();
                return S
            }

            function d() {
                S && !X && (X = !0, J.DM(), $ || (H.ik() ? (R.className = w.nk, R.className = w.Gj) : (R.className = w.Rs, R.className = w.nr), $ = !0), T.className = "translucent", ja = window.setTimeout(t, 1500), window.addEventListener("mouseup", p, !1))
            }

            function e() {
                window.removeEventListener("mouseup", p, !1);
                k();
                m();
                V = X = !1;
                J.clear()
            }

            function f(a) {
                s();
                J.BM(a);
                k();
                "8" == a && (V = !0)
            }

            function g() {
                X && (s(), J.GM(), u.QM())
            }

            function h() {
                S && X && (H.ik() && (R.style.backgroundColor = "rgba(255, 255, 255, 0.9)"),
                    u.PM(), J.VJ())
            }

            function k() {
                X && (u.UM(), u.TM())
            }

            function l(a, b) {
                X && (s(), J.bN(a, b))
            }

            function n() {
                if (!S) {
                    var a = ga.W(F, "div", "spchaa"),
                        b = ga.W(F, "div", "spchaal");
                    W = ga.W(F, "div", "spchaat");
                    R = ga.W(F, "div", "spch");
                    Z = ga.W(F, "div", "spchc");
                    Z.className = "allow-anim-hide";
                    P = ga.W(F, "div", "spchx");
                    T = ga.W(F, "div", "spcho");
                    null != T && (ca = ga.W(F, "div", "spchg"), S = !! R && !! Z && !! P && !! T && !! ca && J.bB() && u.bB()) && (u.mv(T), J.mv(T), T.appendChild(ca), Z.appendChild(T), a.appendChild(b), a.appendChild(W), Z.appendChild(a), R.appendChild(P),
                        R.appendChild(Z), m(), H.Ll().body.appendChild(R))
                }
            }

            function p(a) {
                if ($ && X) {
                    a = a.target.id;
                    var b = -1,
                        c = "";
                    "spchx" == a ? b = r.CJ : "spch" == a ? b = r.II : a == G.Dh ? b = r.Dh : a == G.Ps ? b = r.Ps : (b = r.yJ, c = a);
                    E.tb(b, c, b == r.Dh && !V, (b == r.Dh || b == r.Ps) && V)
                }
            }

            function m() {
                H.ik() ? R.className = w.nk : R.className = w.Rs;
                s();
                R.removeAttribute("style");
                $ = !1
            }

            function t() {
                W.innerHTML = b.init;
                Z.className = w.Wx;
                E.jM()
            }

            function s() {
                ja && window.clearTimeout(ja);
                Z.className = "allow-anim-hide";
                T.className = "";
                E.kM()
            }
            var r = {
                CJ: "0",
                Dh: "1",
                II: "2",
                $T: "3",
                yJ: "4",
                Ps: "5"
            }, w = U4,
                G = V4,
                J, u, E, F, R, Z, T, ca, P, S, $, X, W, ga, ja, V, ia = {
                    qa: function (a, b) {
                        F = a;
                        if (!a.ue()) {
                            var c = a.ud(),
                                d = "rtl" == c,
                                c = H.Ij(c),
                                e = d ? "left" : "right";
                            b.addRule("#spch", ["background:#fff;position:absolute;display:table;top:0;", c + ":0;", "width:100%;height:100%;z-index:10000;-webkit-transition:visibility 0s linear 0.218s, opacity 0.218s,background-color 0.218s;opacity:0;visibility:hidden;overflow:hidden"].join(""));
                            b.addRule("." + w.nr + "#spch", "opacity:1;-webkit-transition-delay:0s;visibility:visible");
                            b.addRule("." +
                                w.nk + "#spch", "opacity:0;background:rgba(255, 255, 255, 0.0);visibility:hidden");
                            b.addRule("." + w.Gj + "#spch", "opacity:1;background:rgba(255, 255, 255, 0.0);-webkit-transition-delay:0s;visibility:visible");
                            b.addRule("#spchx", ["margin:15px;background:url(data:image/gif;base64,R0lGODlhCwALAKUnAHJycnV1dXd3d3l5eXt7e319fX5+foODg4aGhoeHh4iIiImJiYqKioyMjI2NjY+Pj5GRkZKSkpSUlJWVlZiYmJubm5ycnJ6enrS0tLq6ur29vcXFxcjIyNfX19vb29zc3N3d3d/f3+Hh4eLi4uPj4+fn5////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEKAD8ALAAAAAALAAsAAAZUQFOEYyoWMxahoEEyehSCIULwaHoYAgcRxAhMMJAAZGQEUQoEw0VkPBYAhk3b1JEUCgbKx9hJBCoaEwEOexkHAhMlJiEPAgtIUYpFIQ0DSUNzSCZBADs=) no-repeat center;cursor:pointer;height:11px;opacity:0.6;padding:0;position:absolute;",
                                e + ":0;", "top:0;width:11px;-webkit-transform:scale(1);z-index:1100"
                            ].join(""));
                            b.addRule("#spchx:hover", "opacity:0.8");
                            b.addRule("#spchx:active", "opacity:1.0");
                            b.addRule("#spchg", ["background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAqCAYAAABiHn+gAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRTA1RDEwMzZBNTExMUUyOTNCNERDRTBEODk0RjZFQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRTA1RDEwNDZBNTExMUUyOTNCNERDRTBEODk0RjZFQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNFMDVEMTAxNkE1MTExRTI5M0I0RENFMEQ4OTRGNkVDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNFMDVEMTAyNkE1MTExRTI5M0I0RENFMEQ4OTRGNkVDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+nWQaegAACTxJREFUeNrsXAuUTlUUvv/MGGSQGiKDiUp5RqxJXiORZ2KSkmR5pOWtJZUe9ECPFeWZtxQ9lPJKmEJkoZqxSHmMaEIYb01mBqO9zXeXY8+5/3/v/5hfa9291rfmv/e/d99zzz5n7/3tc/7xLF261HAl5OIhtCcMI5QX331PGEr4JxgPivLzvpsIpQjFCNmE44QjhFzXdvmkKKEnoRbhJKGx8t0hwkBCVrAeZteg1QmdCc0JdxFiNNdwo1IJPxHWEr4lnHPtebkPJuNzI8KDYnZmBfNhvgyaSBhFaAqX8DVhNmEX4SxGXxyhHuEhQgNgEL7/hPA2Ya9rV62cDbbCCIvzJQjzCWsI9xBeh+GeIMwhbCRsJ2whLCKMIFQjtCHshI7ihKcIvxHGEAq79gu96AxamfALoSvhIOFewiuE0zb0rSDUgdFNiSbEEs673R16kS43nrAOszEDLjfNoU6OCb2QLD1NmEAYQrjkdnfBzlB2iV/BmNz53fwwpio1CWMJg11jhmeGjkIGy7KQsCoAvYWRzZ1wuzg8Bo0HuTXlrQD1ZgWYjhcilMHA4EFxKgjvyjpvJkQiHBz8H/LZMvCqB6xyEtOgQ5Us9HdCShgaXBuxtxXhNvFdOmEJYQraZ1diQeo7Eu6GUVXKwDxwFsFpuawSqFxVPCNG6FblDGEcsn2nUprQl9CBUFcJkTmE9YRJhMVqSItAQ7oKsluQEguKlAo++yrhdnRaR7SnImEAYRuSrCI2coPhhH3gxJwb1IeehiD6RdFRS0DPqthoayKSRjbOk4QmhB7ov85AKzAFxlHC834asy/4O+ufS0hAYWcq3q853muhSgmj8KKxiqJfC9CY1VBRqoAY/ppIoNIxAl8gjEZ7B2K0trWgUtfhJdtA96Piur/Aoz/DzCwJQzGnbgnKJoVrseOR4PF95ZUwcCthJmas+fwPcM4f8WDQ8gBeTuhCyBQTbjEGIlPCJISQx82RnCAU/l1AxmQjJuPvHMxMXTZ8CYWJacq5hpjVHs3M/BTG5NH9sBf+vN7sBMgN4NHlNNdOgjG34h41pqfhedtxHIm2tvCzXwbBmMfBNDI116xE+DGFPUQzswPixcUXCsCYHrgR7ryLhBdt3DMcLswUnqHdxTX9jLxVDQOUKdOHzuWYzWrMmiSuaQm9BuLtRY2ef5VrzH6d6KUSZyUcEt7A5+k+ksHV4niA+eBYTTYVamlHuE9x8Xa8whkxS1leUjqNy5Ujle+SbbZlrDjupNA3A1UyU7zFwg2AKZwwNXDYL88ZVxY+Nni5rrHyrocQqoaYBs3WZHChlp7CZdmVWeKY41cjfE5SBidngX/a1JkKV6qK6YrLGnmlT10hRidfiOO6Dr1WJ+X4kIZ2dUWsX4dQkgQPOxK5weUGHhc31gqxMQuL+JLt4F420g5xrgn+tlfOOV22W26hs7qI0xV86NkYgLeriAFkShGFBXBSuB/J0jrMfg4FiyQfjTLyL20l4iVCVa5jSlJMOY5xeP8GdLT0KKqbLOFQ50YLLyXJewPj6oUHKfvFsZPiRZw45lWuRwitUUhg+vO5rwkQpfHVFUFltvhhrPJilBmaDLqkJtt1IjKOFVeyVNV9xaEjAtHJRYxcxdV2QPKRY6HnvEgunXB6j8Y2zwC2JQIu7IguY3IgZUHWeYT+bIEZ6AhJI+5Aqm9XZGwxM19ZN67hQKdMyjKUv2uV82VA9L15H1OmOaSAMqNt7o/7i4BrnSHOP0a406aOaLii1aiS1IOPXyKu4zhwDME7V8SZBAdtlvExzcLdNXWgM9tCJ8sIMSPf1FA9lUOy/Aia5UTSxHPuh7d0bFADJDVHTPfpNnlUDkpQvD3lO1Radhv5d7FlKiMxVUNj7EpRDclmWRWAzmhxvEL5vNnI23lh8vNSmLWJoigxEdkxJyoPgJs6EV7M2CRsMNhfg7JreFd81wjVm2CJ6mo/FN/10HSqHbfGxtyFzwvEoKwhKIc3qap8PouihyHam4jqkpk0rYG34QrRYYQprlJ1tlHQsJL54nigU9ahzkAmpyka4j40BJnuTMETuWLUx+a9rfA3V5D+dI0hXraps7XyebyGyplutAkSv9YoK67FwDFXWoYZgW1l/UgkcoWQ2Zb2x6BZyOIkIeeln/eN4G7yOofiglpGG20j422sFBLGaDLxZwl7hPG7+dAZo8S+zdDrKynjov+XRt7+ZFUig9AvAzTeY73NnCZaxsgDGIXbNMGeY2PbIBqVU/reilFL4lycF1e7AOn9FDE71fJgO5EgcXWpjZd4PA+zLgXFCSeFDpmZsq7rHVCTWM01izG4pVG5mvWekbdubIjMuxd4qjbpSQepfUfEJCbzyxAzhiObLawZobXgqtW0+4RF9WYuKh77lVJeKtx8FXRObSUcxKDx/b0UPnYj616lJDxL0dn1obMS9GyFV5qK2Z/hcFDO1WTWvNG8psX1cgWGn82LAX0xWQopoa6/6LNo48qKz1kUhA6DciaY9vL4+G1LJSjpqnEvBmZXBjK6osj22Mh/IOZsQBVmh4/KE9/THc9pIAbKBXgHXoecbdjbTqpyuT6gADdqaMIy8MWdDgsAcRhwvKWF9yxXFtdwhycZV6+ImJlwIQumMEETQirCuJ007T8N1z9ZSdYMj80fK0WgtFYHrq8URvppuJ2TmGVpQCCbw6LQUSVAfQ4awdnTWxadmoNR7WTXOg/WLphFzdC5p/DOx9DmJsLj5SB5CsYOENZ/C0JDBNq/R1ex8ri/PvMp3VFMKAc3xzPpGyP/KhGHjo9FRnoClbCMgmpshGsvrzIOHJSNOQd5xARDv+S3Cl5sm3Cz/Qqywa5BraWXwsE3ISP3lQEfQgFCXV9NdA0afolAMmLKNAcFg5MYDOosdQ0aZmHXGa8c73N4f4pxZS30iGvQ8EsZcRzvhw6zYJLsGjT8skcTTz0O7mf+WAG0a55r0PDLXuPqnRxcRRpj06iRyI5ZBqGa4xr0GpDeKBqYwrXSlSggWBmWiy68sM8lvf6G9/1HIZEo126WwuusvLLD5UZzXbUFwLOOa868mMGlSa5q1QZP5e02CUZ4fvDlGtSmUbkm3A2G5QUELiOaa6jnYbxkzMofwtlg16C+5RKMZWarvHDAdWzeisqLEkeNa+j/M/0nwADlVRZ96u1VAgAAAABJRU5ErkJggg==) no-repeat center;background-size:100%;opacity:0;",
                                "float:" + e, "height:34px;width:98px;position:relative;pointer-events:none;", c + ":255px;", "top:6px;-webkit-transition:opacity .5s ease-in, left .5s ease-in"
                            ].join(""));
                            b.addRule("." + w.Gj + " #spchg", ["opacity:1;", c + ":270px;", "-webkit-transition:opacity .5s ease-out, left .5s ease-out"].join(""));
                            b.addRule("#spchc", "display:block;height:27px;position:absolute;pointer-events:none;min-width:650px;max-width:655px");
                            b.addRule("." + w.Rs + " #spchc", "margin:auto;margin-top:312px;max-width:572px;min-width:534px;padding:0 223px !important;position:relative;top:0");
                            b.addRule("." + w.nr + " #spchc", "margin:auto;margin-top:312px;max-width:572px;min-width:534px;padding:0 223px !important;position:relative;top:0");
                            d = ["background:#fff;box-shadow:0 2px 6px rgba(0,0,0,0.2);height:27px;margin:0;overflow:hidden;", "padding:" + H.Eg(51, 0, 65, 126, d) + ";", "position:absolute;max-width:100%;min-width:100%"].join("");
                            b.addRule("." + w.nk + " #spchc", d);
                            b.addRule("." + w.Gj + " #spchc", d);
                            b.addRule("#spcho", "height:100%;pointer-events:none;width:100%;-webkit-transition:opacity 0.318s ease-in");
                            b.addRule("." + w.Gj + " #spcho, ." + w.nk + " #spcho", "height:100%;width:572px;-webkit-transition:opacity 0.318s ease-in");
                            b.addRule(".translucent#spcho", "opacity:0.1;-webkit-transition:opacity 0s");
                            b.addRule("#spchaa", "color:#777;font-weight:normal;font-size:24px;line-height:1.2;opacity:0;position:absolute;pointer-events:none;text-align:center;width:500px;-webkit-font-smoothing:antialiased;-webkit-transition:opacity 0.218s ease-in, margin-top 0.4s ease-in");
                            b.addRule(".allow-anim-hide #spchaa", "margin-top:-100px");
                            b.addRule("." + w.Wx + " #spchaa", "opacity:1;margin-top:-300px;-webkit-transition:opacity .5s ease-out 0.218s, margin-top .218s ease-out 0.218s");
                            b.addRule("#spchaal", ["box-shadow:0 1px 0px rgba(66,133,244,1);height:80px;", c + ":0;", "margin:0;opacity:0;pointer-events:none;position:fixed;", e + ":0;", "top:-80px;z-index:10001;-webkit-transition:opacity .218s, box-shadow .218s"].join(""));
                            b.addRule("." + w.Wx + " #spchaal", "animation-timing-function:ease-out;box-shadow:0 1px 80px rgba(66,133,244,1);opacity:1;pointer-events:none;-webkit-animation:allow-alert .75s 0 infinite;-webkit-animation-direction:alternate;-webkit-transition:opacity .218s, box-shadow .218s");
                            b.addRule("@-webkit-keyframes allow-alert", "from {opacity: 1} to {opacity: .35}");
                            b.addRule("#spchaat", ["margin-" + c + ":120px;", "margin-" + e + ":80px;", "white-space:normal;width:350px"].join(""))
                        }
                    },
                    R: function (a) {
                        var b = H.F;
                        E = a.get(b.Ys, ia);
                        J = a.get(b.XD, ia);
                        u = a.get(b.WD, ia);
                        ga = a.get(b.Ww, ia)
                    },
                    ga: function () {
                        V = X = $ = S = !1;
                        a && n()
                    },
                    I: function () {
                        return H.F.Vw
                    },
                    N: function () {
                        return H.C.Vw
                    },
                    K: function () {
                        return {
                            init: c,
                            start: d,
                            stop: e,
                            zM: g,
                            bC: f,
                            RM: h,
                            eb: k,
                            OF: l
                        }
                    }
                };
            return ia
        };
        H.C.Vw = 449;
        H.F.Vw = 455;
        H.vJ = function (a, b) {
            function c(a, b, c) {
                H.Lb(G);
                h();
                c ? (r.innerHTML = a, s.innerHTML = b, r.firstElementChild.id = p.Ps) : (r.innerText = a, s.innerText = b);
                0 == w && (w = H.ik() ? 27 : 32);
                a = 1.2 * w + 1;
                b = 2.4 * w + 1;
                c = 3 * 1.2 * w + 1;
                var d = r.scrollHeight,
                    e = "spcht";
                d > 4.8 * w + 1 ? e += " five-lines" : d > c ? e += " four-lines" : d > b ? e += " three-lines" : d > a && (e += " two-lines");
                r.className = s.className = e
            }

            function d() {
                r.innerText = "";
                s.innerText = "";
                G = window.setTimeout(function () {
                    "" == r.innerText && c(b.dN, "")
                }, 300)
            }

            function e() {
                H.Lb(G);
                c(b.ready, "");
                n()
            }

            function f(a) {
                switch (a) {
                case "8":
                    c(b.OL,
                        "", !0);
                    a = r.firstElementChild;
                    r.removeChild(a);
                    var d = u.W(m, "span", p.Ps);
                    d.innerText = a.innerText;
                    r.appendChild(d);
                    break;
                case "0":
                    c(b.PL, "", !0);
                    break;
                case "2":
                    c(b.NJ, "", !0);
                    break;
                case "3":
                    c(b.NL, "");
                    break;
                case "4":
                case "5":
                    c(b.aM, "", !0);
                    break;
                case "7":
                    c(b.xL, "")
                }
            }

            function g() {
                h();
                H.Lb(G);
                w = 0;
                r.className = "spcht";
                s.className = "spcht"
            }

            function h() {
                H.Lb(J)
            }

            function k(a) {
                a.appendChild(t)
            }

            function l() {
                return !!s && !! r && !! t
            }

            function n() {
                function a() {
                    var f = 0 < d && r.innerText != b.HB.substring(0, d),
                        g = 0 == d && r.innerText !=
                            b.ready;
                    d == b.HB.length || (f || g) || (e += b.HB.substring(d, d + 1), c(e, ""), ++d, J = window.setTimeout(a, 30))
                }
                var d = 0,
                    e = "";
                J = window.setTimeout(a, 2E3)
            }
            var p = V4,
                m, t, s, r, w, G, J, u, E = {
                    qa: function (a, b) {
                        m = a;
                        if (!a.ue()) {
                            var c = H.Ij(a.ud());
                            b.addRule("#spchtc", "pointer-events:none");
                            b.addRule("." + U4.nr + " #spchtc,." + U4.Rs + " #spchtc", "position:absolute");
                            b.addRule("." + U4.nk + " #spchtc,." + U4.Gj + " #spchtc", "position:relative");
                            var d = [c + ":-44px;", "top:-.2em"].join(""),
                                e = ["font-size:27px;", c + ":7px;", "top:.2em;width:490px"].join(""),
                                f = ["margin-" + c + ":0;", "opacity:1;-webkit-transition:opacity .5s ease-out, margin-left .5s ease-out"].join("");
                            b.addRule(".spcht", ["color:#777;font-size:32px;font-weight:normal;line-height:1.2;opacity:0;pointer-events:none;position:absolute;", "text-align:" + c + ";", "width:460px;-webkit-font-smoothing:antialiased;", "-webkit-transition:opacity .1s ease-in, margin-" + c + " .5s", " ease-in, top 0s linear .218s"].join(""));
                            b.addRule("." + U4.Rs + " .spcht", d + ";margin-" + c + ":44px");
                            b.addRule("." + U4.nr + " .spcht", d + ";" +
                                f);
                            b.addRule("." + U4.nk + " .spcht", e + ";margin-" + c + ":32px");
                            b.addRule("." + U4.Gj + " .spcht", e + ";" + f);
                            b.addRule("#spchf", "color:#000;z-index:112");
                            b.addRule("#spchi", "color:#777;z-index:110");
                            b.addRule("#" + p.Ps, "color:#1155cc;cursor:pointer;font-size:18px;font-weight:500;pointer-events:auto;text-decoration:underline");
                            b.addRule(".two-lines.spcht", "top:-.6em;-webkit-transition:top .218s ease-out");
                            b.addRule(".three-lines.spcht", "top:-1.3em;-webkit-transition:top .218s ease-out");
                            b.addRule(".four-lines.spcht",
                                "top:-1.7em;-webkit-transition:top .218s ease-out");
                            b.addRule("." + U4.nr + " .five-lines.spcht", "top:-2.5em;-webkit-transition:top .218s ease-out");
                            b.addRule("." + U4.Gj + " .five-lines.spcht", "font-size:24px;top:-1.7em;-webkit-transition:top .218s ease-out, font-size .218s ease-out")
                        }
                    },
                    R: function (a) {
                        u = a.get(H.F.Ww, E)
                    },
                    ga: function () {
                        a && b && (s = u.W(m, "span", "spchf"), r = u.W(m, "span", "spchi"), t = u.W(m, "div", "spchtc"), t.appendChild(s), t.appendChild(r), r.innerText = "", s.innerText = "", g())
                    },
                    I: function () {
                        return H.F.cD
                    },
                    N: function () {
                        return H.C.cD
                    },
                    K: function () {
                        return {
                            bN: c,
                            DM: d,
                            GM: e,
                            BM: f,
                            clear: g,
                            VJ: h,
                            mv: k,
                            bB: l
                        }
                    }
                };
            return E
        };
        H.C.cD = 450;
        H.F.XD = 456;
        H.wJ = function () {
            function a(a, c, d) {
                a = a.Fc(d);
                a || (a = H.ea(c), a.id = d);
                return a
            }
            return {
                I: function () {
                    return H.F.Wd
                },
                N: function () {
                    return H.C.Ww
                },
                K: function () {
                    return {
                        W: a
                    }
                }
            }
        };
        H.C.Ww = 475;
        H.bp = function () {
            function a(a, c, d, e) {
                a && c && (a = a[d]) && c.Pi(a[0] || a, e)
            }
            H.Pi = a;
            H.Dq = function (b, c) {
                a(b, c, "btnG", 12);
                a(b, c, "btnK", 12);
                a(b, c, "btnI", 7)
            };
            H.Fc = function (a) {
                return window.document.getElementById(a)
            };
            H.Iv = function (a) {
                var c = window.gbar;
                (c = c && c.elc) && c(function () {
                    window.setTimeout(a.Xk, 0)
                })
            }
        };
        H.bp();
        H.Mk = function () {
            function a(a) {
                return {
                    api: a,
                    Ef: a.a,
                    P: a.b,
                    xa: a.c,
                    wx: a.d,
                    Le: a.e,
                    Va: a.f,
                    Ha: a.g,
                    Fb: a.h,
                    Pc: a.i,
                    Ti: a.j,
                    Ge: a.k,
                    ju: a.l,
                    Ax: a.m,
                    Pi: a.n,
                    Mb: a.o,
                    yv: a.p,
                    rg: a.q,
                    Vu: a.r,
                    St: a.s,
                    Vd: a.t,
                    Kh: a.u,
                    focus: a.v,
                    blur: a.w,
                    Ih: a.x,
                    Eb: a.y,
                    yc: a.z,
                    Jh: a.aa,
                    xc: a.ab,
                    search: a.ad,
                    Hv: a.ae,
                    Jv: a.af,
                    $d: a.ag,
                    Oc: a.ah,
                    Xk: a.ai,
                    uh: a.al,
                    isActive: a.am,
                    qh: a.an,
                    Rb: a.ao,
                    wf: a.ap,
                    Hh: a.aq,
                    zd: a.ar,
                    getId: a.as,
                    xv: a.at,
                    setSuggestions: a.au,
                    jv: a.av,
                    $c: a.aw,
                    Lh: a.ax,
                    oe: a.ay,
                    wl: a.az,
                    ke: a.ba,
                    Nw: a.bb,
                    uk: a.bc,
                    qi: a.bd,
                    Cr: a.be,
                    qk: a.bf
                }
            }
            return {
                G: function (b,
                    c, d, e) {
                    try {
                        var f = window.google.sbox(b, c, d, e);
                        return a(f)
                    } catch (g) {
                        return null
                    }
                },
                translate: function (b) {
                    return a(b.api || b)
                }
            }
        };
        H.sq = function () {
            var a = H.C,
                b = H.F,
                c = P4,
                d, e = "hp",
                f, g, h, k, l = {
                    Fn: function () {
                        var a = d.dg(),
                            b = a.msgs;
                        e = a.client;
                        a = !! a.sbih;
                        f = !! b.sbi || a
                    },
                    P: function (c) {
                        var e = d.dg(),
                            g = d.xo(),
                            l = d.zk(),
                            s = 0;
                        H.Mq() && (s = 1);
                        c.We = [s, 0, 0];
                        c.Gg = !g;
                        f && (c.Cs = !0);
                        "i" == d.zs() ? (c.Gg = !1, c.Uf = !1) : H.ik() && (c.Gg = !1);
                        f && (g = e.msgs.sbih, h.wF(e.sbiu, e.sbiw, e.sbih, e.msgs.sbi, g), g && (c.hk = g));
                        c.Ra[b.gb] = l || f;
                        c.Ra[b.gb] && (c.Ra[a.bq] = !0);
                        e = c.hk != k;
                        k = c.hk;
                        c.Rk[a.eq] = l;
                        c.Rk[a.Mw] = f;
                        return e
                    },
                    Ao: function () {
                        f && d.io().yc(d.dg().sbiq)
                    },
                    Ef: function () {
                        var a =
                            d.io();
                        "webhp" != window.google.sn && "imghp" != window.google.sn || a.focus();
                        f && a.yc(d.dg().sbiq);
                        H.Iv(a)
                    },
                    Rc: function (a, b) {
                        H.Mq() && (a.addRule(".gssb_a", "padding:0 10px"), a.addRule(".gssb_c", "z-index:986"), b || a.addRule(".gsib_a", "padding:" + (H.zh && H.Jd || H.ub && !H.Zk ? 6 : 5) + "px 9px 0"))
                    },
                    gk: function (a) {
                        var b = d.zk(),
                            f = d.dg();
                        a.Fe = e;
                        a.Xe = b ? "psy-ab" : e;
                        a.Vi = !1;
                        a.Nd = b && f.fl;
                        a.Rf = a.Nd;
                        a.vf = "lst-t";
                        a.hk = f.hint;
                        a.Ol = !0;
                        a.Uf = !! f.lm;
                        a.Jg = !! f.spch;
                        a.Tg = !0;
                        H.Mq() ? (a.Xc = "gbqfif", a.Bf = "gbqfsf", a.uf = "gbqfqw", a.xs = "gbqfqw") :
                            (a.Xc = "gsfi", a.Bf = "gsfs", a.uf = "sftab");
                        a.nb[c.Cl] = !0;
                        a.nb[c.il] = !0;
                        if ("hp" == e || "serp" == e) a.nb[c.Di] = !0;
                        d.xo() && (a.nb[c.Lk] = !0);
                        b && (a.Hg = !1, a.Lj = 2);
                        "token" in f && (a.nb[c.Ah] = !0);
                        b = f.msgs;
                        a.Sl = b.srch;
                        a.Ne = b.lcky;
                        a.xl = b.lml;
                        a.yl = b.psrl;
                        a.Wk = b.psrc;
                        a.Or = b.oskt;
                        a.Sr = b.sbit;
                        if (b = f.kbl) a.mi = !0, a.Kg = b, a.Mr = "//www.gstatic.com/inputtools/images", a.Nr = "i" == d.zs() ? "images" : "web", "kbv" in f && (a.Pr = f.kbv)
                    },
                    fk: function (b, e) {
                        if ("ms" in b) {
                            var f = b.ms;
                            e.Ra[a.uj] = f;
                            e.nb[c.Ik] = f
                        }
                        "qe" in b && (e.ln = b.qe);
                        "qn" in b && d.zk() &&
                            (f = !! b.qn, e.Ra[a.Jz] = f, (e.Ra[a.by] = f) && (e.nb[c.bm] = !0));
                        "q" in b && (e.Cs = b.q);
                        "tds" in b && (e.du = b.tds)
                    },
                    ek: function (a, c) {
                        g || (g = H.Uv());
                        h || (h = H.GD());
                        c[b.De] = [g.Uu(), h.Uu()];
                        a.Jg && H.OD(c)
                    },
                    Nl: function () {
                        var a = {}, b = g && g.sB();
                        b && (a.tbs = b, a.dq = "");
                        return a
                    },
                    Ce: function (a, b) {
                        if (a) return new _.Sq(a, b), !0
                    }
                };
            (function () {
                d = H.Qa(l);
                d.Ot(64, function () {
                    d.io().Xk()
                }, 50)
            })();
            return l
        };
        H.sq();
        H.Qa.D(function (a, b) {
            var c = b.msgs,
                d = {
                    init: c.srim,
                    xL: c.srlu,
                    NL: c.srne,
                    PL: c.srnv,
                    NJ: c.srae,
                    aM: c.srpe,
                    ready: c.srrm,
                    HB: c.srlm,
                    OL: c.srnt,
                    dN: c.sriw
                }, e = !! b.sre,
                f = H.F,
                c = H.rJ(e, c.sril, c.srtt, !0);
            a[f.Ys] = c;
            c = H.tJ(e);
            a[f.WD] = c;
            c = H.uJ(e, d);
            a[f.Vw] = c;
            d = H.vJ(e, d);
            a[f.XD] = d;
            H.sg(a, f.fh, H.sJ());
            d = H.wJ();
            a[f.Ww] = d
        });
        H.rq = function (a, b, c, d) {
            function e() {
                E.xa()
            }

            function f(a) {
                P.yc(a || "")
            }

            function g() {
                return Y
            }

            function h() {
                return na
            }

            function k() {
                return P.Ha()
            }

            function l() {
                return ia.Oc()
            }

            function n() {
                T.Aa(8)
            }

            function p(a) {
                return X.U(a)
            }

            function m() {
                return wa || !! R && R.Rb()
            }

            function t() {
                return $.Qm()
            }

            function s() {
                if (a)
                    for (var b = a; b = b.parentNode;) {
                        var c = b.dir;
                        if (c) return c
                    }
                return "ltr"
            }

            function r(a) {
                a = H.fj(a);
                a.nb[35] || (a.zf = "");
                var b = a.Kg;
                b ? a.Kg = b.toLowerCase() : a.mi = !1;
                a.Rf && !a.Nd && (a.Rf = !1);
                H.Yk || (a.Jg = !1);
                return a
            }

            function w() {
                var b =
                    H.getWindow(a),
                    c = H.jj(b);
                T.listen(b, "resize", function () {
                    var a = H.jj(b);
                    if (a.Je != c.Je || a.Be != c.Be) c = a, n()
                })
            }

            function G(a) {
                var b = H.F,
                    c = a.Ra,
                    d = c[b.vb],
                    e = c[b.Xb],
                    f = c[b.lg],
                    g = c[b.Sc],
                    h = c[b.Ea],
                    f = e || g || f;
                c[b.Ta] || h || d || f ? (a.Ra[b.Ta] = !0, a.Ra[b.Bb] = !0, f ? (a = H.kj(a.Od), !e || H.dc && (H.zh || a) || H.ub && a ? (Y = 3, c[b.Xb] = !1, c[b.kg] = !1) : Y = 2) : Y = 1) : Y = 0
            }
            var J = {
                Ad: "gs_l",
                kf: "gs_ssp",
                Yl: "oq"
            }, u, E, F, R, Z, T, ca, P, S, $, X, W, ga, ja, V, ia, ha, da, na, Y, fa = !1,
                wa, L = {
                    a: function (c) {
                        if (!fa) {
                            c = r(c);
                            var d = H.Ll(a),
                                e = s(),
                                f = !! d.getElementById("gs_id" +
                                    na),
                                g = ["gssb_c", "gssb_k"];
                            c.vf && g.push(c.vf);
                            g = H.kp(c.On, c.mn, c.Il, na, g);
                            G(c);
                            wa = c.Rb;
                            E = H.ep(u, c.Fh || {}, {
                                ue: function () {
                                    return f
                                },
                                get: function (a) {
                                    return d.getElementById(a + na)
                                },
                                Fc: function (a) {
                                    return d.getElementById(a)
                                },
                                Qg: function () {
                                    return b
                                },
                                ud: function () {
                                    return e
                                },
                                getId: function (a) {
                                    return a + na
                                },
                                je: function () {
                                    return a
                                }
                            }, g, L, c);
                            c = H.F;
                            F = E.get(c.Mh, L);
                            R = E.get(c.gb, L);
                            Z = E.get(c.Ua, L);
                            T = E.get(c.wa, L);
                            ca = E.get(c.Ca, L);
                            P = E.get(c.Z, L);
                            S = E.get(c.ob, L);
                            $ = E.get(c.Ja, L);
                            X = E.get(c.$a, L);
                            W = E.get(c.Qb, L);
                            ga = E.get(c.dm,
                                L);
                            ja = E.get(c.Og, L);
                            V = E.get(c.Ga, L);
                            ia = E.get(c.ra, L);
                            ha = E.get(c.Ea, L);
                            da = E.get(c.Xa, L);
                            w();
                            fa = !0
                        }
                    },
                    b: function (a) {
                        e();
                        a = r(a);
                        G(a);
                        wa = a.Rb;
                        E.P(a)
                    },
                    c: e,
                    d: function () {
                        return b
                    },
                    e: function (a, b) {
                        return H.Le(a, b)
                    },
                    f: function () {
                        return P.Va()
                    },
                    g: k,
                    h: function () {
                        return ia.Fb()
                    },
                    i: function () {
                        return ia.Pc()
                    },
                    j: p,
                    k: function (a, b) {
                        a || (a = X.U(b));
                        return H.Ge(a)
                    },
                    l: function () {
                        return ia.Oa()
                    },
                    m: function () {
                        return ia.Sm()
                    },
                    n: function (a, b) {
                        T.listen(a, "click", function (a) {
                            da.search(k(), b);
                            return H.preventDefault(a)
                        })
                    },
                    o: function () {
                        ca.Mb()
                    },
                    p: function () {
                        ia.Kd()
                    },
                    q: function (a) {
                        P.rg(a || "")
                    },
                    r: function () {
                        return Z.getHeight()
                    },
                    s: function () {
                        P.clear()
                    },
                    t: function (a) {
                        return ca.Vd(a)
                    },
                    u: function () {
                        P.Kh()
                    },
                    v: function () {
                        S.focus()
                    },
                    w: function () {
                        S.blur()
                    },
                    x: function () {
                        return ca.Ih()
                    },
                    y: function () {
                        var a = V.Eb();
                        return a ? H.ej(a.gi()) : null
                    },
                    z: f,
                    aa: function (a) {
                        a = ca.Jh(a, null);
                        return H.ej(a.gi())
                    },
                    ab: function () {
                        X.reset()
                    },
                    ad: function (a, b) {
                        da.search(a, b)
                    },
                    ae: function () {
                        ha && ha.refresh()
                    },
                    af: function (a) {
                        ia.xf(a)
                    },
                    ag: function () {
                        ia.$d()
                    },
                    ah: l,
                    ai: n,
                    al: function () {
                        P.uh()
                    },
                    am: function () {
                        return E && E.isActive()
                    },
                    an: function (a) {
                        R && R.qh(a)
                    },
                    ao: m,
                    ap: function () {
                        return m() && R ? R.wf() : ""
                    },
                    aq: function (a, b) {
                        return H.Hh(a, b)
                    },
                    ar: g,
                    as: h,
                    at: function () {
                        ha && ha.clear()
                    },
                    au: function (a, b) {
                        f(a);
                        ia.isEnabled() && ia.setSuggestions(a, b, !1)
                    },
                    av: function (a) {
                        T.Aa(15, {
                            query: a
                        })
                    },
                    aw: function () {
                        return S.$c()
                    },
                    ax: function (a) {
                        ca.Lh(a)
                    },
                    ay: function (a) {
                        Z.oe(a)
                    },
                    az: function (a) {
                        return !!ga && ga.wl(a)
                    },
                    ba: function () {
                        var a, b = V.Eb();
                        if (b) {
                            var c = b.rd();
                            c && ((a = c.ke()) || (a = b.U().ka("o")))
                        }
                        return a || ""
                    },
                    bb: function (a,
                        b) {
                        return W ? (W.Ak(a, b), !0) : !1
                    },
                    bc: function (a, b) {
                        switch (a) {
                        case J.Yl:
                        case J.Ad:
                            return p(b)[a] || null;
                        case J.kf:
                            var c;
                            n: {
                                if ((c = l()) && 46 == c.I() && (c = c.U().ka("g"))) break n;
                                c = null
                            }
                            return c;
                        default:
                            return null
                        }
                    },
                    bd: function (a) {
                        F && F.qi(a)
                    },
                    be: t,
                    bf: function (a) {
                        return 6 == t() && !! ja && ja.qk(a)
                    },
                    getId: h,
                    zd: g
                };
            na = null == d ? H.O.Tm() : d;
            u = H.$o(c);
            (function (a) {
                var b = u.Lc(),
                    c = /Version\/(\d+)/.exec(a),
                    c = c && c[1];
                c || (c = (c = /(?:Android|Chrome|Firefox|Opera|MSIE)[\s\/](\d+)/.exec(a)) && c[1]);
                a = (0, window.parseInt)(c, 10) || 0;
                H.ub =
                    b[Q4.IE];
                H.Zk = H.ub && 8 >= a;
                H.Bg = H.ub && 7 >= a;
                H.dc = b[Q4.GECKO];
                H.yy = H.dc && 3 >= a;
                H.gd = b[Q4.OPERA];
                H.Jd = b[Q4.WEBKIT];
                H.Hp = b[Q4.SAFARI];
                H.Yk = b[Q4.CHROME];
                H.zy = b[Q4.cj];
                H.Cj = b[Q4.$i]
            })(window.navigator.userAgent);
            (function () {
                var a = window.navigator && (window.navigator.platform || window.navigator.appVersion) || "";
                H.Cu = /Linux/.test(a);
                H.zh = /Mac/.test(a);
                H.Du = /Win/.test(a)
            })();
            return L
        };
        window.google || (window.google = {});
        window.google.sbox = H.rq;
        _.y = H;

        (0, _.Sg)(_.x.G(), "sb_sri");
        (0, _.Wg)(_.x.G(), "sb_sri");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Fj = function () {
            var a = [];
            Gj && a.push("bv." + Gj);
            Hj && Ij && a.push("bs.1");
            Jj && a.push("d." + Jj);
            return 0 < a.length ? "&bvm=" + a.join(",") : ""
        };
        (0, _.Vg)(_.x.G(), "sy1");
        var Hj;
        var Mj;
        var Kj;
        var Jj;
        var Ij;
        var Gj;
        Gj = 0;
        Ij = !1;
        Jj = "";
        Kj = !1;
        _.Lj = !1;
        Mj = !1;
        _.Nj = !1;
        Hj = !1;
        (0, _.vf)("vm", {
            init: function (a) {
                Kj ? "bv" in a && a.bv != Gj && (Ij = !0) : (Kj = !0, "bv" in a && (Gj = a.bv), Ij = !1, "d" in a && (Jj = a.d), "tc" in a && (_.Lj = a.tc), "te" in a && (Mj = a.te), "ts" in a && (_.Nj = a.ts), "tk" in a && (Hj = a.tk))
            }
        });
        (0, _.za)("google.vm.e", function () {
            return Mj ? (0, _.Fj)() : ""
        }, void 0);

        (0, _.Sg)(_.x.G(), "sy1");
        (0, _.Wg)(_.x.G(), "sy1");
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
                    d = !1
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
            a.JU = !0;
            return a
        };
        _.Wj = function () {
            (0, _.Sj)(this);
            this.A = this.B = this.L = !1;
            this.H = !0;
            this.D = !1
        };
        _.Xj = function () {};
        _.Yj = function (a, b) {
            return !!(a.altKey || a.ctrlKey || a.shiftKey || a.metaKey || a.button && 0 != a.button || 1 < b)
        };
        var vba = function (a, b) {
            var c = window.event && (0, _.Sa)(window.event.button) ? window.event.button : void 0;
            return function (d) {
                (0, _.Yj)(d, c) || b.target || ((0, _.Yf)(a), (0, _.Di)(d), d.preventDefault && d.preventDefault(), d.returnValue = !1)
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
                c = "" != G ? !0 : !1;
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
                    else return window.google.log("uxl", "&ei=" + window.google.kEI), !0;
                var P = a.href;
                a.href = ca;
                (this.B || this.A) && this.jt.B(P, ca, a);
                a.onmousedown = ""
            } catch (S) {}
            return !0
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
        (0, _.vf)("cr", {
            init: function () {
                _.Wj.G().init.apply(_.Wj.G(), arguments)
            }
        });
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
        var ck = function () {
            switch (dk) {
            case 1:
                return (0, _.dd)().width;
            case 2:
                return window.innerWidth;
            case 3:
                return Math.round(window.outerWidth / ek);
            default:
                return (0, _.zc)(2)
            }
        };
        var fk = function () {
            switch (dk) {
            case 1:
                return (0, _.dd)().height;
            case 2:
                return window.innerHeight;
            case 3:
                return Math.round(window.outerHeight / ek);
            default:
                return (0, _.zc)(0)
            }
        };
        _.gk = function () {
            hk("biw", ck());
            hk("bih", fk())
        };
        var hk = function (a, b) {
            for (var c = window.document.getElementsByName(a), d = 0, e; e = c[d++];) e.value = b
        };
        var ik = function (a) {
            var b = a.match(/[?&#]biw=[^&#]+/) ? !0 : !1,
                c = a.match(/[?&#]bih=[^&#]+/) ? !0 : !1;
            if (window.google.isr && window.google.isr.prs && b && c) return a;
            b = ck();
            c = fk();
            a = jk(a, "biw", b);
            return a = jk(a, "bih", c)
        };
        var kk = function (a) {
            if (!(window.google.j && window.google.j.init && window.google.j.xmi)) {
                a = a || window.event;
                for (a = a.target || a.srcElement; a && "A" != a.tagName;) a = a.parentNode;
                if (a && a.href) {
                    var b = a.getAttribute("href", 2);
                    wba.test(b) && (a.href = ik(b))
                }
            }
        };
        var jk = function (a, b, c) {
            return a.replace(RegExp("([?&#])" + b + "=([^&#]*)&?", "i"), "$1").replace(/&*$/, "&" + b + "=" + c)
        };
        (0, _.Vg)(_.x.G(), "sy5");
        var wba = /^\/(search|images)\?/,
            dk = 0,
            ek = window.devicePixelRatio || 1;
        (0, _.vf)("cdos", {
                init: function (a) {
                    (0, _.gk)();
                    (0, _.$e)(window, "resize", _.gk);
                    (0, _.Nf)(51, ik);
                    (0, _.$e)(window.document, "click", kk);
                    switch (a.dima) {
                    case "d":
                        dk = 1;
                        break;
                    case "i":
                        dk = 2;
                        break;
                    case "o":
                        dk = 3;
                        break;
                    default:
                        dk = 0
                    }
                    if ("web" == window.google.sn) {
                        var b = ck(),
                            c = fk();
                        b && (c && (b != a.biw || c != a.bih)) && window.google.log("", "", "/client_204?&atyp=i&biw=" + b + "&bih=" + c + "&ei=" + window.google.kEI)
                    }
                },
                dispose: function () {
                    (0, _.af)(window, "resize", _.gk);
                    (0, _.af)(window.document, "click", kk);
                    (0, _.Pf)(51, ik)
                }
            });

        (0, _.Sg)(_.x.G(), "sy5");
        (0, _.Wg)(_.x.G(), "sy5");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        (0, _.Vg)(_.x.G(), "cdos");
        (0, _.Sg)(_.x.G(), "cdos");
        (0, _.Wg)(_.x.G(), "cdos");
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
            agsa: !0,
            biv: !0,
            facrc: !0,
            imgrc: !0,
            imgdii: !0,
            itp: !0,
            lmt: !0,
            mip: !0,
            mis: !0,
            miuv: !0,
            mkp: !0,
            mldd: !0,
            now: !0,
            qm: !0,
            sh: !0,
            psh: !0,
            tts: !0,
            updateac: !0,
            "": !0
        };
        xl = ["facrc", "imgrc", "psh", "tts"];
        _.wl = {
            "": ""
        };
        _.tl = {};
        zl = !1;
        vl = !1;
        El = !1;
        (0, _.vf)("hsm", {
            init: function (a) {
                vl || (a = a.h5h, a = !(!window.history || !window.history.pushState) && a, vl && zl == a || (zl = !! a, (0, _.af)(window, "popstate", Dl), (0, _.af)(window, "hashchange", Cl), zl ? (0, _.$e)(window, "popstate", Dl) : ("undefined" != typeof window.onhashchange || !_.sc.Hc && window.hasOwnProperty("onhashchange")) && (0, _.$e)(window, "hashchange", Cl)));
                vl = !0
            }
        });
        (0, _.za)("google.hs.init", function () {
            El || Al(void 0, !0);
            El = !0
        }, void 0);

        (0, _.Sg)(_.x.G(), "sy11");
        (0, _.Wg)(_.x.G(), "sy11");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var bn = function (a, b, c) {
            var d = RegExp("([?&])" + b + "=.*?(&|$)");
            a = a.replace(/^([^#]*)(#|$)/, function (a, b) {
                return b
            });
            return a.match(d) || "" == c ? a.replace(d, function (a, d, g) {
                return c ? d + b + "=" + c + g : g ? d : ""
            }) : a + "&" + b + "=" + c
        };
        _.cn = function (a) {
            return /^(https?:\/\/[^/]*)?\/(search|images).*\?/.test(a.href)
        };
        _.dn = function (a) {
            return /\/search$/.test(a.action)
        };
        _.en = function (a, b, c, d) {
            var e = window.document.getElementsByTagName("A");
            window.google.base_href && (window.google.base_href = bn(window.google.base_href, a, b));
            for (var f = 0, g; g = e[f++];)
                if (c(g)) {
                    var h = 0 == g.children.length,
                        h = _.sc.Hc && h ? g.innerHTML : void 0;
                    g.href = bn(g.href, a, b);
                    void 0 != h && (g.innerHTML = h)
                }
            for (f = 0; c = window.document.forms[f++];)
                if (d(c)) {
                    for (g = e = 0; h = c.elements[g++];) h.name == a && (e = 1, "" != b ? h.value = b : h.parentNode.removeChild(h));
                    e || "" == b || (e = window.document.createElement("input"), e.type = "hidden", e.value =
                        b, e.name = a, c.appendChild(e))
                }
        };
        _.fn = function (a) {
            if (a = (0, _.Ci)(a)) {
                for (; !(0, _.Vf)(a, "qs");)
                    if (a = a.parentNode, !a || a == window.document.body) return;
                var b = window.document.getElementsByName("q"),
                    c = b && b[0],
                    b = (0, _.v)("tsf-oq");
                c && (b && window.B) && (c = c.value, b = (0, _.Kd)(b), c && c != b && (b = bn(a.href, "q", (0, window.encodeURIComponent)(c)), a.href = bn(b, "prmd", "")))
            }
        };
        _.gn = function () {
            var a = (0, _.v)("gbqf");
            return a && "FORM" == a.tagName ? a : null
        };
        _.hn = function () {
            return (0, _.gn)() || (0, _.v)("tsf")
        };
        (0, _.Vg)(_.x.G(), "sy13");
        (0, _.za)("google.srp.qs", _.fn, void 0);
        (0, _.Sg)(_.x.G(), "sy13");
        (0, _.Wg)(_.x.G(), "sy13");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        (0, _.Vg)(_.x.G(), "sy15");
        (0, _.Sg)(_.x.G(), "sy15");
        (0, _.Wg)(_.x.G(), "sy15");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var jn = function () {
            var a = null;
            try {
                a = window.localStorage || null
            } catch (b) {}
            this.Vg = a
        };
        var kn = function (a, b) {
            this.B = a;
            this.A = b
        };
        var ln = function (a, b) {
            this.FC = a;
            this.QB = b + "::"
        };
        var mn = function (a) {
            this.fF = a;
            this.vP = new _.nf
        };
        var gca = function (a, b, c, d) {
            "Storage mechanism: Storage disabled" != a && "Storage mechanism: Quota exceeded" != a && (a = (0, _.Ra)(a) ? Error(a) : a, c = {
                op: b,
                k: c
            }, "set" == b && (c.v = d), window.google.ml(a, !1, c))
        };
        var nn = function (a, b) {
            var c = b || "__empty__";
            on[a] = on[a] || {};
            var d = on[a],
                e;
            if (!(e = on[a][c])) {
                e = new hca[a];
                var f;
                if (e.Vg) try {
                    e.Vg.setItem("__sak", "1"), e.Vg.removeItem("__sak"), f = !0
                } catch (g) {
                    f = !1
                } else f = !1;
                e = {
                    s1: new mn(new kn(b ? new ln(e, b) : e, gca)),
                    DU: f
                }
            }
            d[c] = e
        };
        _.pn = function (a, b) {
            var c = b || "__empty__";
            nn(a, b);
            return on[a][c].s1
        };
        _.qn = function (a, b) {
            var c = b || "__empty__";
            nn(a, b);
            return on[a][c].DU
        };
        (0, _.db)(jn, _.tf);
        (0, _.Vg)(_.x.G(), "sy14");
        (0, _.db)(kn, _.rf);
        kn.prototype.set = function (a, b) {
            try {
                this.B.set(a, b)
            } catch (c) {
                this.A(c, "set", a, b)
            }
        };
        kn.prototype.get = function (a) {
            try {
                return this.B.get(a)
            } catch (b) {
                this.A(b, "get", a)
            }
        };
        kn.prototype.remove = function (a) {
            try {
                this.B.remove(a)
            } catch (b) {
                this.A(b, "remove", a)
            }
        };
        (0, _.db)(ln, _.sf);
        _.q = ln.prototype;
        _.q.FC = null;
        _.q.QB = "";
        _.q.set = function (a, b) {
            this.FC.set(this.QB + a, b)
        };
        _.q.get = function (a) {
            return this.FC.get(this.QB + a)
        };
        _.q.remove = function (a) {
            this.FC.remove(this.QB + a)
        };
        _.q.nx = function (a) {
            var b = this.FC.nx(!0),
                c = this,
                d = new _.Vb;
            d.next = function () {
                for (var d = b.next(); d.substr(0, c.QB.length) != c.QB;) d = b.next();
                return a ? d.substr(c.QB.length) : c.FC.get(d)
            };
            return d
        };
        _.q = mn.prototype;
        _.q.fF = null;
        _.q.vP = null;
        _.q.set = function (a, b) {
            (0, _.Ma)(b) ? this.fF.set(a, (0, _.mf)(this.vP, b)) : this.fF.remove(a)
        };
        _.q.get = function (a) {
            var b;
            try {
                b = this.fF.get(a)
            } catch (c) {
                return
            }
            if (null !== b) try {
                return (0, _.jf)(b)
            } catch (d) {
                throw "Storage: Invalid value was encountered";
            }
        };
        _.q.remove = function (a) {
            this.fF.remove(a)
        };
        var hca = {
            local: jn,
            session: _.uf
        }, on = {};
        _.rn = null;
        (0, _.Sg)(_.x.G(), "sy14");
        (0, _.Wg)(_.x.G(), "sy14");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        (0, _.Vg)(_.x.G(), "sy18");
        (0, _.Sg)(_.x.G(), "sy18");
        (0, _.Wg)(_.x.G(), "sy18");
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
            (0, _.Zb)(arguments, function (a) {
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
            d = (0, _.xn)(a, d, !0);
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
            for (var c = {}, d = En(a, !0), e = 0; e < d.length; e++) {
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
            window.google.ml(c || Error("jesr"), !1, b)
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
                        for (var d = [], e = En(c, !1), f = 0; f < e.length; f++) d.push(b && (0, _.Ma)(b[e[f]]) ? b[e[f]] : a[e[f]]);
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
        _.q.cN = !1;
        _.q.start = function () {
            this.stop();
            this.cN = !1;
            var a = tn(this),
                b = un(this);
            a && !b && this.A.mozRequestAnimationFrame ? (this.He = (0, _.wh)(this.A, "MozBeforePaint", this.gh), this.A.mozRequestAnimationFrame(null), this.cN = !0) : this.He = a && b ? a.call(this.A, this.gh) : this.A.setTimeout(ica(this.gh), 20)
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
                    is: !0
                },
                p: {
                    is: !0
                },
                pa: {
                    is: !0
                },
                pah: {
                    is: !0
                },
                ph: {
                    is: !0
                },
                phf: {
                    is: !0
                },
                sa: {
                    is: !0
                },
                slp: {
                    is: !0
                },
                spf: {
                    is: !0
                },
                zz: {
                    is: !0
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
        _.Rn = function (a, b) {
            b && (this.Ed = b)
        };
        (0, _.Vg)(_.x.G(), "sy19");
        (0, _.za)("google.j.gwtl", function () {
            return window.top.location
        }, void 0);
        _.Rn.prototype.set = (0, _.la)("Ed");
        _.Rn.prototype.value = (0, _.ma)("Ed");
        _.Sn = (0, _.tg)(new _.Rn("last"));
        _.Tn = (0, _.tg)(new _.Rn("previous"));
        (0, _.Sg)(_.x.G(), "sy19");
        (0, _.Wg)(_.x.G(), "sy19");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Qo = function (a) {
            var b = (0, _.Cn)(a);
            return b ? b : a
        };
        _.Ro = function (a, b) {
            _.So.add("spf", [b]);
            window.google.j.pf = b
        };
        (0, _.Vg)(_.x.G(), "sy23");
        _.So = new _.Kn;
        (0, _.za)("google.j.spf", _.Ro, void 0);
        (0, _.Sg)(_.x.G(), "sy23");
        (0, _.Wg)(_.x.G(), "sy23");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Wn = function (a, b) {
            (0, _.bi)({
                event: a,
                targetElement: b
            })
        };
        _.Xn = function (a, b) {
            return a.toLowerCase() == b.toLowerCase()
        };
        _.Yn = function (a) {
            if (Zn) {
                Zn = !1;
                var b = _.Ca.location;
                if (b) {
                    var c = b.href;
                    if (c && (c = (0, _.$n)((0, _.Yn)(c)[3] || null)) && c != b.hostname) throw Zn = !0, Error();
                }
            }
            return a.match(kca)
        };
        _.$n = function (a) {
            return a && (0, window.decodeURIComponent)(a)
        };
        _.ao = function (a, b, c) {
            if ((0, _.Oa)(b))
                for (var d = 0; d < b.length; d++)(0, _.ao)(a, String(b[d]), c);
            else null != b && c.push("&", a, "" === b ? "" : "=", (0, window.encodeURIComponent)(String(b)))
        };
        var bo = function (a, b, c) {
            Math.max(b.length - (c || 0), 0);
            for (c = c || 0; c < b.length; c += 2)(0, _.ao)(b[c], b[c + 1], a);
            return a
        };
        _.co = function (a, b) {
            var c = 2 == arguments.length ? bo([a], arguments[1], 0) : bo([a], arguments, 1);
            if (c[1]) {
                var d = c[0],
                    e = d.indexOf("#");
                0 <= e && (c.push(d.substr(e)), c[0] = d = d.substr(0, e));
                e = d.indexOf("?");
                0 > e ? c[1] = "?" : e == d.length - 1 && (c[1] = void 0)
            }
            return c.join("")
        };
        (0, _.Vg)(_.x.G(), "sy25");
        var kca = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
            Zn = _.jd;
        (0, _.Sg)(_.x.G(), "sy25");
        (0, _.Wg)(_.x.G(), "sy25");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.eo = function () {
            var a = (0, _.Xf)().pathname;
            return "/images" == a || "/imghp" == a ? "images" : "search"
        };
        _.fo = function () {
            this.id = "";
            this.A = new _.Kn
        };
        var go = function () {
            this.TC = !1;
            this.mA = 0
        };
        var ho = function (a, b, c) {
            if (1 !== c) {
                a = "/" + (0, _.eo)() + "?" + a.replace(/^#/, "").replace(/(^|&)(fp|tch|espv)\=[^&]*/g, "") + "&emsg=NCSR&noj=1&ei=" + window.google.kEI;
                try {
                    (0, _.Hn)("NCSR", b || {})
                } catch (d) {}
                3 != c && 2 == c && (0, _.Qf)(117, [a])
            }
        };
        var io = function () {
            go.call(this);
            this.B = []
        };
        var jo = function () {
            go.call(this);
            this.A = new _.Kn;
            this.D = {}
        };
        var ko = function () {
            go.call(this);
            this.A = new _.Kn;
            this.L = [];
            this.J = [];
            this.B = this.H = ""
        };
        _.lo = function (a, b, c, d) {
            var e = d || {};
            e._c = "je";
            e._ce = a;
            var f = (0, _.Qf)(30, Array.prototype.slice.call(arguments, 0, 2), c, function (a) {
                return 1 != a
            });
            ho(b, e, f)
        };
        _.mo = function (a, b) {
            try {
                var c = (0, _.od)("SCRIPT");
                c.text = a;
                window.jesrScriptTags = window.jesrScriptTags || [];
                window.jesrScriptTags.push(c);
                window.document.body.appendChild(c)
            } catch (d) {
                b ? (0, _.lo)(2, b, 2) : (0, _.Hn)("NSAIST", {}, d)
            }
        };
        var no = function () {
            this.A = {
                c: {},
                s: {},
                u: {}
            };
            this.D = null
        };
        var oo = function (a) {
            a = a.JC("c", "1");
            window.google.j[1] && a.Ez(window.google.j[1])
        };
        var lca = function (a, b) {
            var c = {}, d;
            for (d in a.A[b]) a.A[b][d].TC && 1 == a.A[b][d].mA && (c[d] = 1);
            return c
        };
        var po = function (a) {
            a.iB("u");
            a.iB("s");
            a.iB("c")
        };
        var qo = function (a) {
            null === a.D && (a.D = window.setTimeout((0, _.$a)(a.F0, a), 0))
        };
        _.ro = function () {
            window.gcscript || (window.gcscript = function () {
                if (window.jesrScriptTags)
                    for (; window.jesrScriptTags.length;)(0, _.yd)(window.jesrScriptTags.shift())
            });
            (0, _.mo)("try{window.gcscript()}catch(e){}")
        };
        var so = function (a) {
            no.call(this);
            this.Vg = a
        };
        var to = function (a, b) {
            var c = a.Vg.get(b);
            return (0, _.Oa)(c) ? c : []
        };
        var uo = function (a, b, c) {
            for (var d = {}, e = [], f = c.length - 1; 0 <= f; f--) d[c[f]] || (d[c[f]] = 1, e.push(c[f]));
            e.reverse();
            a.Vg.set(b, e)
        };
        var vo = function () {
            no.call(this);
            this.B = {};
            for (var a in wo) this.B[a] = (0, _.v)(wo[a])
        };
        _.xo = function (a) {
            window.google.j.ss == _.Nn || (a._ss = window.google.j.ss + "," + _.Nn);
            a._lg = ((0, _.Ma)(_.yo) ? (0, _.Ve)() - _.yo : null) || "NA"
        };
        _.zo = function (a) {
            a._wlt = typeof (0, _.Xf)().href;
            a._wl = (0, _.Xf)().href
        };
        _.Ao = function (a) {
            return (0, _.Fb)((0, _.ql)(a), "isch")
        };
        _.Bo = function (a) {
            for (var b = [], c = 0, d = 0, e = 0; - 1 != c && e >= c;) c = a.indexOf("<script", e), -1 != c && (d = a.indexOf(">", c) + 1, e = a.indexOf("\x3c/script>", d), 0 < d && e > d && b.push(a.substring(d, e)));
            return b
        };
        _.Co = function (a) {
            window.google.kEI && (Do = window.google.kEI);
            a.mc && (Eo = 1E3 * a.mc);
            a.ccf && (Fo = a.ccf);
            a.rt && (Go = a.rt + "");
            var b = (0, _.qn)("session", "web");
            !a.dss && b ? (a = (0, _.pn)("session", "web"), _.Qn = new so(a)) : _.Qn = new vo;
            oo(_.Qn)
        };
        _.Ho = function (a, b) {
            return 21 == b || 0 == b || 1 == b || 12 == b || 9 == b ? 2 : 3
        };
        var Io = function (a, b, c) {
            var d = (0, _.Qf)(25, Array.prototype.slice.call(arguments), 3, function (a) {
                return 1 != a
            }),
                e = (0, _.Ra)(c) ? c.replace(/^\/search\?/, "#").replace(/^\/images\?/, "#") : (0, _.Sn)().value();
            ho(e, {
                _c: "te",
                _ce: b
            }, d)
        };
        var Jo = function (a) {
            a = (0, _.$n)((0, _.Yn)(a)[5] || null) || "";
            return 6 < a.length && "/async/" == a.substring(0, 7) ? "/async" : a
        };
        _.Ko = function (a, b, c, d) {
            var e = !0;
            try {
                var f = (0, _.Mf)(),
                    g, h = f.D(!0, b, c),
                    k = f.A(!0, b, c);
                if (window.google.ucp || d) g = [f.J(!0, b, c), k];
                else {
                    g = [];
                    var l = 5,
                        n = f.H(l);
                    a && g.push(n);
                    _.tc.kw && (0, _.Ao)((0, _.Xf)().href) || g.push(h);
                    _.sc.vx || g.push(k);
                    a || g.push(n);
                    _.tc.kw && (0, _.Ao)((0, _.Xf)().href) || g.push(f.B(!0, b, c))
                }
                _.Lo = (0, _.nk)(f, g);
                _.Lo.J(Io);
                _.Lo.ca(Jo);
                e = _.Lo.D()
            } catch (p) {
                return !1
            }
            try {
                !_.Lo.V() && (l = 1, g = [], g.push(h), g.push(f.H(l)), _.Mo = (0, _.nk)(f, g)) && (_.Mo.J(Io), _.Mo.ca(Jo), _.Mo.D() || (_.Mo = null))
            } catch (m) {
                _.Mo =
                    null
            }
            return e
        };
        _.No = function (a) {
            _.Lo && a.register(_.Lo);
            _.Mo && a.register(_.Mo)
        };
        _.Oo = function (a) {
            _.Po.sah = RegExp("^" + a);
            var b = (0, _.eo)();
            window.google.j.xmi ? (_.Po.fa = null, _.Po.jh = RegExp("(^" + a + "|^)/(" + b + ")(\\?|$)")) : (0, _.Ao)((0, _.Xf)().href) ? (_.Po.fa = RegExp("(^" + a + "|^)/(" + b + ")(\\?|$)"), _.Po.jh = RegExp("(^" + a + "|^)/(" + b + ")\\?(.*&)?tbm=isch(&|$)")) : (_.Po.fa = null, _.Po.jh = RegExp("(^" + a + "|^)/(" + b + ")(\\?|$)(?!(.*&)?tbm=isch(&|$))"));
            _.Po.ah = RegExp("(^" + a + "|^https?://www\\.googleadservices\\.com/pagead|^)/aclk\\?");
            _.Po.rh = RegExp("(^" + ("https?://" + (0, _.Xf)().hostname + "(:\\d+)?") + "|^)/url\\?(.*&)?sa=(X|t|U)")
        };
        (0, _.db)(io, go);
        io.prototype.WC = function () {
            for (var a = [], b = 0; b < this.B.length; ++b) {
                var c = this.B[b];
                a.push({
                    id: c.id,
                    cmds: c.A.getAll()
                })
            }
            return {
                pc: a
            }
        };
        io.prototype.Ez = function (a) {
            if ((0, _.Oa)(a.pc)) {
                a = a.pc;
                for (var b = 0; b < a.length; ++b) {
                    var c = a[b],
                        d = new _.fo;
                    d.id = c.id;
                    d.A.tz = c.cmds;
                    this.B.push(d)
                }
            }
        };
        (0, _.db)(jo, go);
        jo.prototype.WC = function () {
            return {
                cmds: this.A.getAll(),
                cgi: this.D
            }
        };
        jo.prototype.Ez = function (a) {
            (0, _.Oa)(a.cmds) && (this.A.tz = a.cmds);
            (0, _.Wa)(a.cgi) && (this.D = a.cgi)
        };
        (0, _.db)(ko, go);
        ko.prototype.WC = function () {
            return {
                cc: this.L,
                co: this.J,
                ogc: this.H,
                ogp: this.B,
                cmds: this.A.getAll()
            }
        };
        ko.prototype.Ez = function (a) {
            (0, _.Oa)(a.cc) && (this.L = a.cc);
            (0, _.Oa)(a.co) && (this.J = a.co);
            (0, _.Ma)(a.ogc) || (0, _.Ma)(a.ogp) ? (this.H = a.ogc + "", this.B = a.ogp + "") : (0, _.Oa)(a.bl) && 2 <= a.bl.length && (this.H = a.bl[0], this.B = a.bl[1]);
            (0, _.Oa)(a.cmds) ? this.A.tz = a.cmds : (0, _.Oa)(a.funcs) && (this.A.tz = a.funcs)
        };
        _.q = no.prototype;
        _.q.getItem = function (a, b) {
            return this.A[a][b]
        };
        _.q.setItem = function (a, b, c) {
            this.A[a][b] = c
        };
        _.q.JC = function (a, b, c, d) {
            var e;
            if ("c" == a) e = new ko;
            else if ("s" == a) e = new jo, this.getItem("s", b) && this.removeItem("u", b);
            else if ("u" == a) e = new io;
            else throw Error("Invalid Prefix");
            (0, _.Ma)(c) && (e.TC = c, (0, _.Ma)(d) && (e.mA = d));
            this.setItem(a, b, e);
            return e
        };
        _.q.removeItem = function (a, b) {
            "s" == a && this.removeItem("u", b);
            delete this.A[a][b]
        };
        _.q.bM = function (a, b) {
            var c = this.getItem(a, b);
            (0, _.Ma)(c) && c.TC && (c.mA = 1, qo(this))
        };
        _.q.rK = function (a) {
            var b = [];
            if (this.A[a])
                for (var c in this.A[a]) b.push(c);
            b.sort();
            return b
        };
        _.q.iB = function (a) {
            this.A[a] = {}
        };
        _.q.F0 = function () {
            try {
                for (var a in this.A) {
                    var b = a;
                    try {
                        this.rM(b)
                    } catch (c) {
                        this.tO("s");
                        try {
                            this.rM(b)
                        } catch (d) {
                            throw (0, _.Hn)("SSAC", {
                                p: b
                            }, d), d;
                        }
                    }
                }
            } catch (e) {
                (0, _.Hn)("SC", {}, e)
            }
            this.D = null
        };
        var Do = "",
            Go = null,
            Fo = 0.5,
            Eo = 4E5,
            wo = {
                c: "wgjc",
                s: "wgjs",
                u: "wgju"
            };
        (0, _.db)(so, no);
        _.q = so.prototype;
        _.q.iB = function (a) {
            so.ja.iB.call(this, a);
            for (var b = to(this, a), c = 0, d; d = b[c++];) this.Vg.remove(a + d);
            uo(this, a, [])
        };
        _.q.getItem = function (a, b) {
            var c = this.A[a][b];
            if (!(0, _.Ma)(c)) return c;
            if (2 == c.mA) {
                var d = this.Vg.get(a + b);
                if (!d) return this.removeItem(a, b), null;
                c.Ez(d);
                c.mA = 0
            }
            return c
        };
        _.q.removeItem = function (a, b) {
            so.ja.removeItem.call(this, a, b);
            for (var c = to(this, a), d = -1, e = 0, f; f = c[e++];)
                if (f == b) {
                    d = e - 1;
                    break
                }
            if (0 <= d) {
                c.splice(d, 1);
                try {
                    uo(this, a, c), this.Vg.remove(a + b)
                } catch (g) {
                    (0, _.Hn)("RCI", {
                        k: c ? c.length : -1
                    }, g)
                }
            }
        };
        _.q.rM = function (a) {
            var b = [],
                c;
            for (c in lca(this, a)) {
                var d = !this.Vg.get(a + c),
                    e = this.getItem(a, c);
                this.Vg.set(a + c, e.WC());
                e.mA = 0;
                d && b.push(c)
            }
            0 < b.length && (c = to(this, a), c = c.concat(b), uo(this, a, c))
        };
        _.q.tO = function (a) {
            var b = to(this, a),
                c = b.splice(1, Math.floor(b.length * Fo));
            uo(this, a, b);
            for (var d, b = 0; d = c[b++];) delete this.A[a][d], this.Vg.remove(a + d);
            if ("s" == a) {
                for (var e = {}, f = !1, b = 0; d = c[b++];) this.A.u[d] && (delete this.A.u[d], this.Vg.remove(a + d), f = e[d] = !0);
                if (f) {
                    a = to(this, "u");
                    c = [];
                    for (b = 0; d = a[b++];) e[d] || c.push(d);
                    uo(this, "u", c)
                }
            }
        };
        _.q.YR = function () {
            var a = !1;
            this.A = {
                c: {},
                s: {},
                u: {}
            };
            var b = this.Vg.get("f");
            (0, _.Ma)(b) && "3" == b || (po(this), this.Vg.set("f", "3"));
            window.google.j.bv && (b = window.google.j.bv + "_" + (window.google.j.u || ""), this.Vg.get("v") != b && (po(this), this.Vg.set("v", b), this.Vg.set("b", Do)));
            null !== Go && (b = this.Vg.get("rt"), !(0, _.Ma)(b) || null === b || b && b != Go) && (this.iB("u"), this.iB("s"), this.Vg.set("rt", Go));
            b = this.Vg.get("b");
            null == b && (b = "");
            if ("" == b || "" == Do || b != Do) this.removeItem("u", "#"), this.Vg.set("b", Do);
            try {
                var b = 0,
                    c;
                for (c in this.A)
                    for (var d = to(this, c), b = b + d.length, e = 0, f; f = d[e++];) this.JC(c, f, !0, 2);
                a = 0 < b
            } catch (g) {
                (0, _.Hn)("RC", {}, g)
            }
            oo(this);
            return a
        };
        (0, _.db)(vo, no);
        _.q = vo.prototype;
        _.q.tO = function (a) {
            for (var b = this.rK(a), b = b.splice(1, Math.floor(b.length * Fo)), c = 0, d; d = b[c++];) this.removeItem(a, d);
            qo(this)
        };
        _.q.WC = function (a) {
            var b = {
                f: "3"
            };
            b.b = Do;
            b[a] = {};
            var c = this.A[a],
                d;
            for (d in c) {
                var e = c[d];
                e.TC && (b[a][d] = e.WC(), e.mA = 0)
            }
            return b
        };
        _.q.rM = function (a) {
            var b;
            n: {
                for (b in this.A[a])
                    if (this.A[a][b].TC && 1 == this.A[a][b].mA) {
                        b = !0;
                        break n
                    }
                b = !1
            }
            if (b) {
                b = this.B[a];
                try {
                    var c = this.WC(a),
                        d = (0, _.lf)(c);
                    d.length <= Eo && (b.value = "(" + d + ")")
                } catch (e) {
                    b.value = "({})", (0, _.Hn)("SS", {}, e)
                }
            }
        };
        _.q.Ez = function (a) {
            for (var b in this.A)
                for (var c in a[b]) this.JC(b, c, !0).Ez(a[b][c])
        };
        _.q.YR = function () {
            var a = !1;
            this.A = {
                c: {},
                s: {},
                u: {}
            };
            try {
                var b = !1,
                    c;
                for (c in this.A) {
                    var d = this.B[c].value,
                        a = a || "" != d,
                        e = eval(d);
                    e && (e.f && "3" == e.f) && (this.Ez(e), "" != (e.b ? e.b : "") && "" != Do && (e.b ? e.b : "") == Do || (b = !0))
                }
                b && this.removeItem("u", "#")
            } catch (f) {
                (0, _.Hn)("RC", {}, f)
            }
            oo(this);
            return a
        };
        (0, _.Vg)(_.x.G(), "sy26");
        (0, _.za)("google.j.gt", function () {
            return _.Lo
        }, void 0);
        (0, _.za)("google.j.te", _.Ho, void 0);
        _.Po = {};
        (0, _.Sg)(_.x.G(), "sy26");
        (0, _.Wg)(_.x.G(), "sy26");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Bq = function () {
            this.A = ""
        };
        _.Cq = function (a, b, c) {
            Dq ? (Eq[a] = Eq[a] || {
                IF: b,
                FG: c
            }, _.Lo.dd(a, !0)) : ((0, _.Hn)("PPUE", {
                u: a
            }), c())
        };
        var Sca = function (a) {
            var b = Eq[a];
            b && (b.IF(), delete Eq[a])
        };
        (0, _.Vg)(_.x.G(), "sy29");
        (0, _.db)(Bq, _.On);
        (0, _.Ia)(Bq);
        Bq.prototype.register = function (a) {
            a.A((0, _.$a)(this.zb, this), "/ajax/pi/mediaad");
            a.A((0, _.$a)(this.zb, this), "/async")
        };
        Bq.prototype.zb = function (a, b, c, d) {
            a = (0, _.Bo)(a);
            0 < a.length && (0, _.mo)(a.join(";"));
            c = c.replace(_.Po.sah, "");
            !d && this.B && this.B(c);
            window.setTimeout(_.ro, 0);
            return !0
        };
        var Dq = !1,
            Fq = "",
            Gq = !1,
            Eq = {};
        (0, _.vf)("jp", {
                init: function (a) {
                    var b = Bq.G();
                    b.B = Sca;
                    if (window.google.j && window.google.j.en && window.google.j.init)(0, _.No)(b), Dq = !0;
                    else {
                        (0, _.Nf)(115, _.xo);
                        (0, _.Nf)(115, _.zo);
                        (0, _.Co)(a);
                        var c = (0, _.Xf)().href.match(/.*?:\/\/[^\/]*/)[0];
                        (0, _.Oo)(c);
                        (0, _.Ko)(a.pi, a.mcr, a.emcrl, a.fdst) ? ((0, _.No)(b), Dq = !0) : (0, _.Hn)("PPUI3", {})
                    }
                }
            });
        (0, _.za)("google.j.ap", function (a, b, c, d) {
                Fq = b;
                Gq = void 0 !== d ? d : !0;
                window.google.j.ss != _.Nn && (Gq && (0, _.Hn)("GJPRB", {}), Gq = !1);
                Gq && _.So.clear()
            }, void 0);
        (0, _.za)("google.j.zp", function () {
                if (Gq) {
                    var a = (0, _.Sn)().value(),
                        a = (0, _.Qo)(a),
                        b = _.Qn,
                        c = b.getItem("u", a);
                    c || (c = b.JC("u", a, !0));
                    for (var d = Fq, e = _.So.getAll(), f = 0; f < c.B.length; ++f)
                        if (c.B[f].id == d) {
                            c.B.splice(f, 1);
                            break
                        }
                    f = new _.fo;
                    f.id = d;
                    f.A.tz = e;
                    c.B.push(f);
                    _.So.clear();
                    b.bM("u", a)
                }
                Fq = ""
            }, void 0);

        (0, _.Sg)(_.x.G(), "sy29");
        (0, _.Wg)(_.x.G(), "sy29");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        (0, _.Vg)(_.x.G(), "jp");
        (0, _.Sg)(_.x.G(), "jp");
        (0, _.Wg)(_.x.G(), "jp");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        (0, _.Vg)(_.x.G(), "vm");
        (0, _.Sg)(_.x.G(), "vm");
        (0, _.Wg)(_.x.G(), "vm");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Xga = function (a, b, c) {
            a = a || "cdr_opt";
            "cdr_opt" == a && c && (0, _.Di)(c);
            b = b || "cdr_min";
            if (a = (0, _.v)(a))
                if (a.className = "tbots", a = (0, _.Qd)(a, "tbt")) {
                    c = 0;
                    for (var d; d = a.childNodes[c++];) "tbos" == d.className && (d.className = "tbotu");
                    (b = (0, _.v)(b)) && b.focus()
                }
            return !1
        };
        _.Yga = function (a) {
            return a.replace(/_/g, "_1").replace(/,/g, "_2").replace(/:/g, "_3")
        };
        _.rv = function (a, b) {
            var c = (0, _.v)(a);
            if (c)
                for (var d in b) {
                    var e = (0, _.Yga)((0, _.v)(d).value),
                        e = e.replace(/^\s+|\s+$/g, "");
                    c.value = c.value.replace(RegExp("(" + b[d] + ":)([^,]*)"), "$1" + e)
                }
            return !0
        };
        (0, _.Vg)(_.x.G(), "sy54");
        (0, _.za)("google.Toolbelt.ctlClk", _.Xga, void 0);
        (0, _.za)("google.Toolbelt.clSbt", function () {
            return (0, _.rv)("ltbs", {
                l_in: "cl_loc"
            })
        }, void 0);
        (0, _.za)("google.Toolbelt.prcSbt", function (a, b) {
            (0, _.rv)("prcbs", {
                prc_max: b,
                prc_min: a
            });
            var c = (0, _.v)("prc_frm");
            if (c) {
                var d = (0, _.hn)();
                d && (c.elements.q.value = d.elements.q.value)
            }
        }, void 0);

        (0, _.Sg)(_.x.G(), "sy54");
        (0, _.Wg)(_.x.G(), "sy54");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        (0, _.Vg)(_.x.G(), "sy56");
        _.sv = {
            qN: ["BC", "AD"],
            yT: ["Before Christ", "Anno Domini"],
            KT: "JFMAMJJASOND".split(""),
            aU: "JFMAMJJASOND".split(""),
            $I: "January February March April May June July August September October November December".split(" "),
            gC: "January February March April May June July August September October November December".split(" "),
            mJ: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            cU: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            ON: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            eU: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            WF: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            dU: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            zN: "SMTWTFS".split(""),
            bU: "SMTWTFS".split(""),
            IN: ["Q1", "Q2", "Q3", "Q4"],
            DN: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
            gN: ["AM", "PM"],
            Lz: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
            bG: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
            nN: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
            SI: 6,
            PN: [5, 6],
            tN: 5
        };

        (0, _.Sg)(_.x.G(), "sy56");
        (0, _.Wg)(_.x.G(), "sy56");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Zga = function (a, b) {
            b ? ((0, _.Sf)(a, "checked"), a.setAttribute("aria-checked", "true")) : ((0, _.Tf)(a, "checked"), a.setAttribute("aria-checked", "false"))
        };
        var $ga = function (a) {
            if ((a = (0, _.Ci)(a)) && "tbotu" == a.className && (a.className = "tbos", a = (0, _.Qd)(a, "tbt")))
                for (var b = 0, c; c = a.childNodes[b++];) "tbots" == c.className && (c.className = "tbou")
        };
        var aha = function (a) {
            var b;
            (0, _.kh)(a, "s") && (b = a.previousSibling);
            var c = null !== a && (0, _.Vf)(a, "checked");
            Zga(a, !c);
            b && !c && Zga(b, !1);
            a.hasAttribute("url") && (b = a.getAttribute("url") + "&ei=" + window.google.getEI(a), (a = (0, _.kh)(a, "ved")) && (b += "&ved=" + a), (0, _.Yf)(b))
        };
        var bha = function (a, b, c) {
            $ga(c);
            return !0
        };
        var cha = function () {
            (0, _.Xga)("cdr_opt", "cdr_min", null)
        };
        var dha = function () {
            return (0, _.rv)("ctbs", {
                cdr_min: "cd_min",
                cdr_max: "cd_max"
            })
        };
        var eha = function (a, b, c) {
            return [[b, "height", a ? c : 0, a ? 0 : c], [b, "opacity", a ? 1 : 0, a ? 0 : 1, null, ""]]
        };
        var fha = function (a) {
            if (!a) return null;
            var b = a.offsetHeight,
                c = (0, _.jg)(a, "overflow", !0);
            a.style.overflow = "hidden";
            return {
                height: b,
                overflow: c
            }
        };
        var gha = function (a, b, c) {
            b ? a.style.height = c.height + "px" : a.style.removeAttribute && a.style.removeAttribute("filter");
            a.style.overflow = c.overflow
        };
        var hha = function () {
            if (!tv) {
                tv = !0;
                var a = (0, _.v)("ms"),
                    b = (0, _.v)("hidden_modes"),
                    c = (0, _.v)("hmp"),
                    d = null !== a && (0, _.Vf)(a, "open");
                a.className = "open";
                var e = fha(b),
                    f = fha(c),
                    g = eha(d, b, e.height);
                f && (g = g.concat(eha(d, c, f.height)));
                (0, _.en)("prmdo", d ? "" : "1", _.cn, _.dn);
                (0, _.Te)(227, g, function () {
                    d && (a.className = "");
                    gha(b, d, e);
                    c && gha(c, d, f);
                    tv = !1;
                    (0, _.Qf)(48)
                })
            }
        };
        var uv = function () {
            (0, _.Yf)((0, _.v)("tbpi").href)
        };
        var iha = function (a) {
            try {
                jha(eval(a))
            } catch (b) {
                uv()
            }
        };
        var kha = function (a) {
            (0, _.za)("mbtb1.insert", iha, void 0);
            var b;
            if (b = (0, _.pi)()) {
                var c = (0, _.Ve)();
                window.google.mcp && (c = window.google.mcp(c));
                b.open("GET", [0 == window.google.base_href.indexOf("/images?") ? window.google.base_href.replace(/^\/images\?/, "/mbd?") : window.google.base_href.replace(/^\/search\?/, "/mbd?"), "&mbtype=29&resnum=1&tbo=1", window.mbtb1.tbm ? "&tbm=" + window.mbtb1.tbm : "", window.mbtb1.tbs ? "&tbs=" + window.mbtb1.tbs : "", "&docid=", window.mbtb1.docid, "&usg=", window.mbtb1.usg, "&ved=", a, "&zx=", c].join(""), !0);
                b.onreadystatechange = function () {
                    if (4 == b.readyState)
                        if (200 == b.status) try {
                            eval(b.responseText)
                        } catch (a) {
                            uv()
                        } else uv()
                };
                b.send(null)
            }
        };
        var jha = function (a) {
            for (var b = 0, c = 0, d, e;
                (d = a[b]) && (e = vv[c]); b++, c++) window.google.Toolbelt.pti[c] ? e.id != d[0] && b-- : (d[2] ? (e.className = "tbos", (0, _.$e)(e, "click", $ga)) : e.className = "tbou", e.id = d[0], e.innerHTML = d[1]);
            (0, _.Qf)(48)
        };
        var lha = function () {
            wv = [];
            vv = [];
            var a = (0, _.v)("tbd");
            if (a) {
                for (var b = a.getElementsByTagName("ul"), c = 0, d; d = b[c++];) {
                    wv.push(d);
                    d = d.getElementsByTagName("li");
                    for (var e = 0, f; f = d[e++];) vv.push(f)
                }
                if (_.sc.Hc)
                    for (a = a.getElementsByTagName("ul"), c = 0; d = a[c]; c++)(0, _.kg)(d)
            }
        };
        var mha = function () {
            var a = (0, _.v)("more_link"),
                a = (0, _.kh)(a, "ved");
            hha();
            window.google.log("", "&ved=" + a + "&ei=" + window.google.kEI)
        };
        var nha = function (a, b) {
            var c = b.ved,
                d = !(0, _.Vf)(window.document.body, "tbo");
            if (d) {
                var e = (0, _.v)("tbd");
                if (!e || !(0, _.lh)(e, "loaded")) {
                    (0, _.jh)(e, "loaded", "1");
                    for (var f = [], g = 0, h = 0, k = window.google.Toolbelt.atg.length; h < k; ++h) {
                        var l = window.google.Toolbelt.atg[h],
                            n = wv[h],
                            n = null != n && (0, _.Vf)(n, "tbpd");
                        f.push('<li><ul class="tbt' + (n ? " tbpd" : "") + '">');
                        for (var p;
                            (p = window.google.Toolbelt.pbt[g]) && p[0] == h; g++) {
                            for (n = 0; n++ < p[1];) f.push("<li>");
                            f.push('<li class="' + vv[g].className + '" id=' + vv[g].id + ">" + vv[g].innerHTML)
                        }
                        for (n =
                            0; n++ < l;) f.push("<li>");
                        f.push("</ul>")
                    }
                    e.innerHTML = f.join("");
                    lha();
                    kha(c)
                }
            }(0, _.en)("tbo", d ? "1" : "", _.cn, _.dn);
            g = d ? 1 : 0;
            e = d ? "" : "none";
            for (f = 0; h = wv[f]; f++)(0, _.Vf)(h, "tbpd") || (0, _.Pe)(h, "marginBottom", g * oha + "px");
            for (f = 0; g = vv[f]; f++) window.google.Toolbelt.pti[f] || (g.style.display = e);
            pha && (e = (0, _.v)("tbpi"), null === e || (0, _.Tf)(e, "pi"));
            d ? (0, _.Sf)(window.document.body, "tbo") : (0, _.Tf)(window.document.body, "tbo");
            (0, _.Qf)(48);
            window.google.log("toolbelt", (d ? "0" : "1") + "&ved=" + c, "", (0, _.v)("tbd"))
        };
        _.xv = function (a, b, c) {
            if (a in yv) c = c || {}, c.tbm = a;
            else {
                c = qha(a, c);
                var d = c.tbs;
                b = (0, window.encodeURIComponent)(b.replace(/_/g, "_1").replace(/,/g, "_2").replace(/:/g, "_3"));
                a = a + ":" + b;
                c.tbs = d ? d + "," + a : a
            }
            return c
        };
        var qha = function (a, b) {
            var c = b || {};
            if (a in yv) {
                var d = b ? b.tbm : (0, _.dg)("tbm");
                d && (d = (0, window.decodeURIComponent)(d));
                d && d != a || (b.tbm = null)
            } else {
                var e = b ? b.tbs : (0, _.dg)("tbs");
                e && (e = (0, window.decodeURIComponent)(e));
                d = null;
                if (e)
                    for (var e = e.split(","), f = 0, g; g = e[f++];) g.match("^" + a + ":") || (d = d ? d + "," + g : g);
                c.tbs = d
            }
            return c
        };
        (0, _.Vg)(_.x.G(), "sy55");
        var tv = !1;
        (0, _.za)("google.srp.toggleModes", hha, void 0);
        var yv;
        var pha;
        var vv;
        var wv;
        var oha;
        _.zv = {};
        yv = {};
        (0, _.vf)("tbui", {
            init: function (a) {
                pha = a.k;
                oha = a.g;
                _.zv = a.t || {};
                yv = a.m || {};
                lha();
                (0, _.ji)("tbt", {
                    tpt: nha
                });
                (0, _.ji)("ms", {
                    clk: mha
                });
                (0, _.ji)("tbt", {
                    hic: cha,
                    tbos: bha,
                    cb: aha,
                    scf: dha
                });
                if (a = a.dfi) _.sv.SI = a.fdow, _.sv.zN = a.nw, _.sv.$I = a.wm, _.sv.gC = a.wm, _.sv.mJ = a.am, _.sv.Lz = a.df
            },
            dispose: function () {
                _.zv = yv = {}
            }
        });
        (0, _.za)("google.Toolbelt.set", _.xv, void 0);
        (0, _.za)("google.Toolbelt.unset", qha, void 0);

        (0, _.Sg)(_.x.G(), "sy55");
        (0, _.Wg)(_.x.G(), "sy55");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var RSa = function (a) {
            return SSa.test(a.className)
        };
        var TSa = function (a) {
            var b = "",
                c;
            for (c in p4) p4[c].style.display = "none";
            a && 0 <= a.yL && (b = a.yL, p4[b] && (p4[b].style.display = "block"), b = "tbpr:idx=" + a.yL);
            return b
        };
        var USa = function (a, b) {
            null == b && (b = {});
            b.yL = a.resultIndex || -1;
            _.If.tbpr = b;
            (0, _.Df)("bbd", _.If)
        };
        (0, _.Vg)(_.x.G(), "sy137");
        var p4 = {}, SSa = /\bl\b/;
        (0, _.vf)("tbpr", {
            init: function () {
                p4 = {};
                for (var a = window.document.getElementsByTagName("h3"), b = 0, c; c = a[b++];)
                    if ("tbpr" == c.className) {
                        var d = Number(c.id.substr(5));
                        for (p4[d] = c; c && "LI" != c.nodeName;) c = c.parentNode;
                        if (c) {
                            c = c.getElementsByTagName("a");
                            for (var e = 0, f = void 0; f = c[e++];)
                                if (RSa(f)) {
                                    f.resultIndex = d;
                                    break
                                }
                        }
                    }(0, _.Lf)(RSa, USa, TSa, "tbpr")
            }
        });

        (0, _.Sg)(_.x.G(), "sy137");
        (0, _.Wg)(_.x.G(), "sy137");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        (0, _.Vg)(_.x.G(), "tbui");
        (0, _.Sg)(_.x.G(), "tbui");
        (0, _.Wg)(_.x.G(), "tbui");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Hr = function (a, b) {
            (0, _.Ii)();
            _.Ki[_.Bj] || (_.Ki[_.Bj] = {});
            _.Ki[_.Bj][a] = b;
            _.Ji.value = (0, _.lf)(_.Ki)
        };
        var Ir = function (a, b, c, d, e) {
            this.He = a;
            this.eK = b;
            this.J = d;
            this.gL = e;
            this.D = "/mbd?jsid=" + a + (b ? "&docid=" + b : "") + "&resnum=" + a.replace(/[^0-9]/, "") + "&mbtype=" + d + "&usg=" + c + "&hl=" + (window.google.kHL || "");
            this.Bc = {};
            this.L = {};
            Jr[a] = {
                open: !1,
                content: this.Bc,
                doc: this.eK,
                sent: !1
            };
            this.H = 0;
            this.B = !0;
            this.us = this.hO = !1;
            this.Hw = this.yt = this.Xg = null
        };
        var Kr = function (a) {
            var b = "",
                c;
            for (c in a.L) b = [b, "&", c, "=", a.L[c]].join("");
            return b
        };
        var Lr = function (a, b) {
            a.xC.style.paddingTop = b + "px";
            a.xC.style.display = a.xC.innerHTML ? "" : "none";
            b > a.H && (a.H = b);
            a.Hw.style.fontSize = b + "px";
            a.Hw.style.fontSize = ""
        };
        var Qda = function (a) {
            window.google.log("manybox", [a.us ? "close" : "open", "&id=", a.He, "&docid=", a.eK, "&mbtype=", a.J, Kr(a)].join(""))
        };
        var Mr = function (a, b) {
            var c = (0, _.pi)();
            if (c) {
                var d = (0, _.Ve)();
                window.google.mcp && (d = window.google.mcp(d));
                c.open("GET", a.D + Kr(a) + "&zx=" + d);
                a.Q = !1;
                c.onreadystatechange = (0, _.$a)(a.mY, a, c, b);
                a.Q = !0;
                c.send(null)
            }
        };
        var Rda = function (a) {
            a.Bc.CB || (Nr && Nr.m_errors && (Nr.m_errors[a.J] ? a.Bc.CB = Nr.m_errors[a.J] : Nr.m_errors["default"] && (a.Bc.CB = Nr.m_errors["default"])), a.$ = a.yt.onclick, a.yt.onclick = (0, _.$a)(function () {
                Or = !1;
                Pr(this);
                Or = !0;
                this.A.parentNode.removeChild(this.A);
                Jr[this.He].sent = this.Bc.CB = this.V = !1;
                this.yt.onclick = this.$
            }, a));
            if (!a.V) {
                a.V = !0;
                var b = (0, _.v)("res");
                a.ca = b && (0, _.mg)(a.Xg) > (0, _.mg)(b) + (0, _.lg)(b);
                a.A = window.document.createElement("div");
                Lr(a, 0);
                a.A.style.position = "absolute";
                a.A.style.paddingTop =
                    a.A.style.paddingBottom = "6px";
                a.A.style.display = "none";
                a.A.className = "med";
                b = window.document.createElement("div");
                a.A.appendChild(b);
                b.className = "std";
                b.innerHTML = a.Bc.CB + (Qr ? "<p><a href=" + a.D + Kr(a) + "&deb=" + window.google.kDEB + ">MBD request</a>" : "");
                a.xC.parentNode.insertBefore(a.A, a.xC);
                a.gh = (0, _.v)("mbcb" + a.He);
                a.gh && a.gh.getAttribute("overlaycontent") && (a.B = !1)
            }
        };
        var Sda = function (a, b) {
            a.A.style.clip = "rect(0px," + (a.Xg.width || "34em") + "," + (b || 1) + "px,0px)"
        };
        var Tda = function (a) {
            a.us = Jr[a.He].open = !0;
            var b = a.gh && a.gh.getAttribute("mbopen");
            b && (eval(b), a.onopen(a.gh))
        };
        var Uda = function (a) {
            var b = a.gh && a.gh.getAttribute("mbpreopen");
            b && (eval(b), a.onpreopen(a.gh))
        };
        var Pr = function (a) {
            a.T = !1;
            if (!a.Xg.va) {
                a.Xg.va = !0;
                var b;
                if (a.us) {
                    if (b = a.gh && a.gh.getAttribute("mbclose")) eval(b), a.onclose(a.gh);
                    b = a.B ? a.M - (0, _.kg)(a.Xg) : 0;
                    a.B && (a.xC.style.display = "none", Lr(a, a.H), a.A.style.position = "absolute")
                } else a.M = (0, _.kg)(a.Xg), Rda(a), Lr(a, 0), a.H = 0, Rr(function (a) {
                    a.Hw.title = ""
                }), Uda(a), a.B && (Sr ? (a.Hw.innerHTML = "&#8722;", (0, _.Sf)(a.Hw, "mbto")) : a.Hw.style.backgroundPosition = Vda, a.DL.innerHTML = a.gL, Sda(a, 1), a.A.style.position = "absolute", a.A.style.display = ""), b = a.B ? a.A.offsetHeight :
                    0;
                a.nO((0, _.kg)(a.Xg), b, _.tc.Fz ? 2 : 1, (0, _.Ve)())
            }
        };
        var Rr = function (a) {
            for (var b in Tr)
                if (Tr[b].He && a(Tr[b])) break
        };
        var Wda = function (a) {
            a && (Nr = a, Sr = Nr.utp, Xda = Nr.nlpp || "-114px -78px", Vda = Nr.nlpm || "-126px -78px", Qr = Nr.db);
            for (a = 0; a < Ur.length; a++) try {
                Ur[a].func()
            } catch (b) {
                delete Tr[Ur[a].id]
            }
            Ur = [];
            Rr(function (a) {
                a.hO || (a.hO = !0, a.Xg = (0, _.v)("mbb" + a.He), a.Xg ? (a.us = !1, a.yt = (0, _.v)("mbl" + a.He), a.yt ? (a.Hw = a.yt.getElementsByTagName("DIV")[0], a.DL = a.yt.getElementsByTagName("A")[0], a.GR = a.DL.innerHTML, a.gL = a.gL || a.GR, a.Hw.title = Nr && Nr.m_tip, a.xC = (0, _.v)("mbf" + a.He), Lr(a, 0), a.yt.onmousedown = (0, _.$a)(a.load, a), a.yt.onclick = (0, _.$a)(a.aQ, a)) : delete Tr[a.He]) : delete Tr[a.He])
            })
        };
        (0, _.Vg)(_.x.G(), "mb");
        var Nr, Xda, Vda, Qr = !1,
            Or = !0,
            Sr = !1;
        _.q = Ir.prototype;
        _.q.append = function (a) {
            for (var b = 0; b < a.length; ++b) {
                var c = a[b].split("=");
                this.L[c[0]] = c[1]
            }
        };
        _.q.mY = function (a, b) {
            if (4 == a.readyState) {
                var c = !1;
                if (200 == a.status) try {
                    eval(a.responseText), c = !0
                } catch (d) {}
                c || this.Uz ? (b ? ((0, _.v)("mbcb" + this.He).parentNode.innerHTML = this.Bc.CB + (Qr ? "<p><a href=" + this.D + Kr(this) + "&deb=" + window.google.kDEB + ">MBD request</a>" : ""), Tda(this)) : this.T && Pr(this), this.Q = !1) : (Jr[this.He].sent = !1, this.Uz = !0, this.D += "&cad=retry", Mr(this, b))
            }
        };
        _.q.load = function () {
            Jr[this.He].sent ? 3 > this.va++ && Qda(this) : (this.Bc.CB ? Qda(this) : Mr(this, !1), Jr[this.He].sent = !0, this.va = 1)
        };
        _.q.aQ = function () {
            Jr[this.He].sent || this.load();
            (this.T = this.Q) || Pr(this)
        };
        _.q.NG = function () {
            var a = window.document.createEvent ? window.document.createEvent("MouseEvents") : window.document.createEventObject();
            this.yt.onmousedown(a);
            this.yt.onclick(a)
        };
        _.q.GY = function (a) {
            this.Bc.CB = a
        };
        _.q.K1 = function () {
            Mr(this, !0)
        };
        _.q.nO = function (a, b, c, d) {
            var e = 0 < b ? 150 : 75,
                f = (0, _.Ve)() - d,
                e = f < e && Or ? f / e * b : 1 < c ? b - 10 : b,
                f = Math.max(this.M, a + e),
                g = f - this.M;
            Sda(this, g);
            this.Xg.style.height = 0 > f ? 0 : g ? f + "px" : "";
            Lr(this, Math.max(0, g - 5));
            Math.abs(e) < Math.abs(b) && this.B ? window.setTimeout((0, _.$a)(this.nO, this, a, b, c - 1, d), 30) : window.setTimeout((0, _.$a)(this.SV, this), 0)
        };
        _.q.SV = function () {
            this.us ? (this.A.style.display = "none", Sr ? (this.Hw.innerHTML = "&#43;", (0, _.Tf)(this.Hw, "mbto")) : this.Hw.style.backgroundPosition = Xda, this.DL.innerHTML = this.GR, this.us = Jr[this.He].open = !1, _.Ji && Hr(Vr, Jr)) : Tda(this);
            this.B && (!_.sc.Hc && this.ca && (this.A.style.width = "100px"), this.A.style.position = this.Xg.style.height = "", Lr(this, 0), (0, _.Qf)(48));
            this.Xg.va = !1;
            _.Ji && Hr(Vr, Jr)
        };
        var Tr = {}, Jr = {}, Ur = [],
            Vr;
        _.Aj.push(function (a) {
            Or = !1;
            Wda();
            Rr(function (b) {
                b.eK == a[b.He].doc ? (b.Bc = a[b.He].content, a[b.He].open != b.us && Pr(b)) : a[b.He].sent = !1
            });
            Jr = a;
            Or = !0;
            _.Ji && Hr(Vr, Jr);
            window.google.ml(Error("mb"), !1, {
                cause: "hist"
            })
        });
        Vr = _.Aj.length - 1;
        (0, _.$e)(window.document, "click", function (a) {
            a = a || window.event;
            for (var b = a.target || a.srcElement; b.parentNode;) {
                if ("A" == b.tagName || b.onclick) return;
                b = b.parentNode
            }
            var c = a.clientX + window.document.body.scrollLeft + window.document.documentElement.scrollLeft,
                d = a.clientY + window.document.body.scrollTop + window.document.documentElement.scrollTop;
            Rr(function (a) {
                var b = (0, _.mg)(a.yt),
                    g = (0, _.se)(a.yt);
                if (c > b - 5 && c < b + (0, _.lg)(a.yt) + 5 && d > g - 5 && d < g + (0, _.kg)(a.yt) + 5) return a.NG(), 1
            })
        });
        (0, _.za)("ManyBox.delayedRegister", function (a) {
            Ur.push(a)
        }, void 0);
        Ir.prototype.append = Ir.prototype.append;
        (0, _.za)("ManyBox.create", function (a, b, c, d, e) {
            return new Ir(a, b, c, d, e)
        }, void 0);
        (0, _.za)("ManyBox.register", function (a, b, c, d, e) {
            return Tr[a] = new Ir(a, b, c, d, e)
        }, void 0);
        Ir.prototype.insert = Ir.prototype.GY;
        Ir.prototype.loadManyboxData = Ir.prototype.load;
        Ir.prototype.toggleManyboxState = Ir.prototype.aQ;
        Ir.prototype.updateManybox = Ir.prototype.K1;
        (0, _.vf)("mb", {
            init: Wda,
            dispose: function () {
                Tr = {};
                Jr = {};
                Ur = []
            }
        });

        (0, _.Sg)(_.x.G(), "mb");
        (0, _.Wg)(_.x.G(), "mb");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Jx = function (a, b) {
            var c = a.x - b.x,
                d = a.y - b.y;
            return Math.sqrt(c * c + d * d)
        };
        _.Kx = function (a, b, c, d, e) {
            var f = !! d;
            a.addEventListener(b, c, f);
            e && ((0, _.Kx)(a, "DOMFocusIn", function (d) {
                d.target && "TEXTAREA" == d.target.tagName && a.removeEventListener(b, c, f)
            }), (0, _.Kx)(a, "DOMFocusOut", function (d) {
                d.target && "TEXTAREA" == d.target.tagName && a.addEventListener(b, c, f)
            }))
        };
        _.Lx = function () {
            return -1 != window.navigator.userAgent.indexOf("Android")
        };
        _.Mx = function (a, b, c, d, e, f, g) {
            _.Nx || _.Ox || (b = (0, _.Px)(b), c = (0, _.Px)(c), d = (0, _.Px)(d));
            f = !! f;
            (0, _.Kx)(a, _.Qx, b, f, g);
            (0, _.Kx)(a, _.Rx, c, f, g);
            (0, _.Kx)(a, _.Sx, d, f, g);
            (0, _.Kx)(a, _.Tx, e, f, g)
        };
        _.Px = function (a) {
            return function (b) {
                b.touches = [];
                b.targetTouches = [];
                b.changedTouches = [];
                b.type != _.Sx && (b.touches[0] = b, b.targetTouches[0] = b);
                b.changedTouches[0] = b;
                a(b)
            }
        };
        _.Ux = function (a) {
            return a.touches || [a]
        };
        _.Vx = function (a) {
            return _.Ox ? [a] : a.changedTouches
        };
        (0, _.Vg)(_.x.G(), "sy59");
        var Mja = /Mac OS X.+Silk\//;
        _.Nx = /iPhone|iPod|iPad/.test(window.navigator.userAgent) || (0, _.Lx)() || Mja.test(window.navigator.userAgent);
        _.Ox = window.navigator.msPointerEnabled;
        _.Qx = _.Nx ? "touchstart" : _.Ox ? "MSPointerDown" : "mousedown";
        _.Rx = _.Nx ? "touchmove" : _.Ox ? "MSPointerMove" : "mousemove";
        _.Sx = _.Nx ? "touchend" : _.Ox ? "MSPointerUp" : "mouseup";
        _.Tx = _.Ox ? "MSPointerCancel" : "touchcancel";

        (0, _.Sg)(_.x.G(), "sy59");
        (0, _.Wg)(_.x.G(), "sy59");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Wx = function (a, b, c, d) {
            return a << 21 | b << 14 | c << 7 | d
        };
        _.Xx = function (a, b, c, d, e) {
            var f = window.pageYOffset;
            if (!(0 > a)) {
                a += b || 0;
                var g = c || 200,
                    h = e || 25,
                    k = d || (0, _.aa)(),
                    l = g / h,
                    n = (0, _.Ve)(),
                    p = function (b) {
                        return function () {
                            if (!(b > l)) {
                                var c = (0, _.Ve)(),
                                    c = Math.min((c - n) / g, 1),
                                    d = f + (a - f) * k(c);
                                window.scrollTo(0, d);
                                1 > c && window.setTimeout(p(b + 1), h)
                            }
                        }
                    };
                window.setTimeout(p(1), h)
            }
        };
        _.Yx = function (a) {
            return new _.Rc(a.clientX, a.clientY)
        };
        var Nja = function (a) {
            if (!(2500 < (0, _.Ve)() - Oja)) {
                var b = (0, _.Yx)(a);
                if (!(1 > b.x && 1 > b.y)) {
                    for (var c = 0; c < Zx.length; c += 2)
                        if (25 > Math.abs(b.x - Zx[c]) && 25 > Math.abs(b.y - Zx[c + 1])) {
                            Zx.splice(c, c + 2);
                            return
                        }
                    a.stopPropagation();
                    a.preventDefault();
                    (a = $x) && a()
                }
            }
        };
        var Pja = function (a) {
            var b = (0, _.Yx)((0, _.Ux)(a)[0]);
            Zx.push(b.x, b.y);
            window.setTimeout(function () {
                for (var a = b.x, d = b.y, e = 0; e < Zx.length; e += 2)
                    if (Zx[e] == a && Zx[e + 1] == d) {
                        Zx.splice(e, e + 2);
                        break
                    }
                $x = void 0
            }, 2500)
        };
        _.Qja = function () {
            if (!(0, _.Ma)(ay)) {
                var a = Rja.exec(window.navigator.userAgent) || [];
                a.shift();
                ay = _.Wx.apply(null, a) >= (0, _.Wx)(6)
            }
            return ay
        };
        _.by = function (a, b, c) {
            $x = c;
            Zx || (window.document.addEventListener("click", Nja, !0), c = Pja, _.Nx || _.Ox || (c = (0, _.Px)(c)), (0, _.Kx)(window.document, _.Qx, c, !0, !0), Zx = []);
            Oja = (0, _.Ve)();
            for (c = 0; c < Zx.length; c += 2)
                if (25 > Math.abs(a - Zx[c]) && 25 > Math.abs(b - Zx[c + 1])) {
                    Zx.splice(c, c + 2);
                    break
                }
        };
        var Rja = /OS (\d)_(\d)(?:_(\d))?/;
        (0, _.Vg)(_.x.G(), "sy60");
        var Zx, Oja, $x, ay;
        (0, _.Sg)(_.x.G(), "sy60");
        (0, _.Wg)(_.x.G(), "sy60");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.cy = function () {
            this.B = [];
            this.A = []
        };
        _.dy = function (a, b, c, d) {
            a.B.length = a.A.length = 0;
            a.B.push(b, d);
            a.A.push(c, d)
        };
        _.ey = function (a, b, c, d) {
            var e = a.B[a.B.length - 2] - b,
                f = a.A[a.A.length - 2] - c,
                g = a.B,
                h = a.D;
            h && (e && 2 < g.length && 0 < h ^ 0 < e) && g.splice(0, g.length - 2);
            g = a.A;
            (h = a.H) && (f && 2 < g.length && 0 < h ^ 0 < f) && g.splice(0, g.length - 2);
            fy(a, a.B, d);
            fy(a, a.A, d);
            a.B.push(b, d);
            a.A.push(c, d);
            a.D = e;
            a.H = f;
            return Sja(a, b, c, d)
        };
        var fy = function (a, b, c) {
            for (; b.length && 250 < c - b[1] || 10 < b.length;) b.splice(0, 2)
        };
        _.gy = function (a, b, c, d) {
            if ((0, _.Ma)(b) && (0, _.Ma)(c) && d) return fy(a, a.B, d), fy(a, a.A, d), Sja(a, b, c, d)
        };
        var Sja = function (a, b, c, d) {
            b = a.B.length ? (b - a.B[0]) / (d - a.B[1]) : 0;
            c = a.A.length ? (c - a.A[0]) / (d - a.A[1]) : 0;
            b = Tja(a, b);
            c = Tja(a, c);
            return new _.Rc(b, c)
        };
        var Tja = function (a, b) {
            var c = Math.abs(b);
            5 < c && (c = 6 > a.A.length ? 1 : 5);
            return c * (0 > b ? -1 : 1)
        };
        (0, _.Vg)(_.x.G(), "sy62");

        (0, _.Sg)(_.x.G(), "sy62");
        (0, _.Wg)(_.x.G(), "sy62");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var hy = function (a) {
            return _.Ox ? a.pointerId : a.identifier
        };
        _.iy = function (a, b, c, d) {
            var e = window.document.createEvent("HTMLEvents");
            e.initEvent(b, !0, !0);
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
                        c = !0;
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
                            }(0, _.Ma)(e) && (f.H && f.va(null), f.B.splice(e, 1), f.A--, f.H = !1)
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
            this.T = this.H = !1
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
                        var f = !0;
                        break
                    }
                f || Wja(this, +d)
            }
            b = (0, _.Vx)(a);
            c = b.length;
            for (e = 0; e < c; e++) d = hy(b[e]), (0, _.Ma)(this.B[d]) && Wja(this, +d);
            c = !0;
            e = this.A.length;
            for (b = 0; b < e; b++)
                if ((d = this.A[b]) && d.A != d.D) {
                    c = !1;
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
            for (var b = !0, c = this.A.length, d = 0; d < c; d++) {
                var e = this.A[d];
                if (e && 0 < e.A) {
                    b = !1;
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
                (0, _.Ma)(this.B[f]) && (this.H.dA(a), d = !0)
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
                                    l.H = !1;
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
        _.fD = function () {
            var a = (0, _.zc)(1),
                b = (0, _.zc)(3);
            return a < b
        };
        var rna = function () {};
        var gD = function () {
            return !(!/^mobilesearchapp/.test((0, _.dg)("client")) && !/^mobilesearchapp/.test((0, _.dg)("source")))
        };
        _.hD = function (a) {
            if (window.addEventListener) {
                for (var b = 0; b < iD.length; b++)
                    if (iD[b] == a) return;
                iD.push(a);
                sna || (jD = window.orientation, kD = window.innerWidth, "orientation" in window && !gD() && window.addEventListener("orientationchange", lD, !1), window.addEventListener("resize", gD() ? tna : lD, !1), sna = !0)
            }
        };
        _.mD = function (a) {
            for (var b = 0; b < iD.length; b++)
                if (iD[b] == a) {
                    iD.splice(b, 1);
                    break
                }
        };
        var lD = function () {
            if (!("orientation" in window && !gD() && window.orientation == jD || window.innerWidth == kD)) {
                var a = new rna( !! (window.orientation % 180));
                jD = window.orientation;
                kD = window.innerWidth;
                for (var b = 0; b < iD.length; b++) window.setTimeout((0, _.ab)(iD[b], a), 0)
            }
        };
        var tna = function () {
            window.setTimeout(lD, 10)
        };
        (0, _.Vg)(_.x.G(), "sy87");
        var jD, kD, iD = [],
            sna = !1;
        (0, _.Sg)(_.x.G(), "sy87");
        (0, _.Wg)(_.x.G(), "sy87");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.lH = function (a) {
            return RegExp("(?:^| +)" + a + "(?:$| +)")
        };
        _.mH = function (a, b, c, d) {
            var e = (0, _.lH)(c),
                f = d || "",
                g = (0, _.lH)(f);
            if (b != e.test(a.className) || d && b == g.test(a.className)) d = a.className.replace(e, " ").replace(g, " "), a.className = d + " " + (b ? c : f)
        };
        (0, _.Vg)(_.x.G(), "sy101");

        (0, _.Sg)(_.x.G(), "sy101");
        (0, _.Wg)(_.x.G(), "sy101");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var nH = function (a, b, c, d) {
            this.fB = a;
            this.vu = b;
            this.B = c;
            this.A = d
        };
        var Osa = function (a) {
            if (a.B) {
                var b = a.A.scrollHeight > a.A.offsetHeight && !(0, _.Vf)(a.B, "cv_disabled");
                a.B.style.display = b ? "block" : "none"
            }
        };
        _.oH = function (a, b) {
            this.vc = b || {};
            this.Za = !! pH(this, "cardClickToSelect", !1);
            this.J = Number(pH(this, "cardWidthPercent", 100));
            this.Re = !! pH(this, "swipeVelocity", !1);
            this.Md = Number(pH(this, "swipeSensitivity", 0.2));
            this.Wa = !! pH(this, "dragScrollEnabled", !0);
            this.Q = !! pH(this, "snapToCard", !0);
            this.V = pH(this, "cardSelectCallback", null);
            this.Uc = pH(this, "swipeStartCallback", null);
            this.Da = !! pH(this, "useWebkitTransform", !0);
            this.T = a;
            this.B = a.getElementsByClassName("cv_slider")[0];
            this.va = null;
            var c = a.getElementsByClassName("cv_navigation");
            0 < c.length && (this.va = c[0]);
            this.Ma = a.getElementsByClassName("cv_more")[0];
            this.A = [];
            this.H = {};
            for (var c = a.getElementsByClassName("cv_card"), d = a.getElementsByClassName("cv_selector"), e = a.getElementsByClassName("cv_card_footer"), f = a.getElementsByClassName("cv_card_content"), g = c.length == d.length, h = c.length == e.length, k = 0; k < c.length; k++) {
                var l = new nH(c[k], g ? d[k] : null, h ? e[k] : null, f[k]);
                this.H[c[k].id] = l;
                l.Oa() && this.A.push(l)
            }
            this.M = !1;
            this.ca = [];
            this.$ = [];
            this.D = this.A[0];
            Osa(this.D);
            Psa(this, this.D);
            for (var n in this.H) this.H[n].vu && (this.H[n].vu.onclick = (0, _.$a)(this.CR, this, this.H[n])), this.Za && (this.H[n].fB.onclick = (0, _.$a)(this.CR, this, this.H[n]));
            Qsa(this);
            this.FR();
            (0, _.hD)((0, _.$a)(this.FR, this));
            this.Gb = new _.ty(this);
            (0, _.vy)(this.Gb, !0);
            this.L = (0, _.uy)(this.Gb, 0, this)
        };
        var pH = function (a, b, c) {
            return b in a.vc ? a.vc[b] : c
        };
        var Rsa = function (a) {
            return 1 - Math.pow(1 - a, 2)
        };
        var qH = function (a, b) {
            if (b) {
                var c = a.Da ? "-webkit-transform" : (0, _.ig)() ? "right" : "left";
                a.B.style.WebkitTransition = c + " 300ms cubic-bezier(0, 0, 0.3, 1)"
            } else a.B.style.WebkitTransition = ""
        };
        var rH = function (a, b, c, d) {
            Osa(b);
            d && (a.M = !0, qH(a, !0));
            a.Q ? (d = a.B.offsetWidth * (a.J / 100), d *= -a.A.indexOf(b), (0, _.ig)() && (d = -d), sH(a, d, "px")) : Ssa(a);
            c && (null === a.T || (0, _.ky)(a.T, 0, 200, Rsa));
            window.setTimeout((0, _.$a)(function () {
                Psa(this, b);
                this.M = !1;
                qH(this, !1);
                if (this.Q) {
                    var a = -this.A.indexOf(b) * this.J;
                    (0, _.ig)() && (a = -a);
                    sH(this, a, "%")
                }
                for (; this.ca.length;) this.ca.shift()();
                this.Ma && (this.Ma.style.display = b == this.A[this.A.length - 1] ? "block" : "none")
            }, a), 300)
        };
        var Ssa = function (a) {
            if ((0, _.ig)()) {
                0 > a.Rr && (qH(a, !0), a.Rr = 0, sH(a, 0));
                var b = tH(a);
                a.Rr > b && (qH(a, !0), a.Rr = b, a.XB = a.Rr / a.B.offsetWidth, sH(a, 100 * a.XB, "%"))
            } else 0 < a.Rr && (qH(a, !0), a.Rr = 0, sH(a, 0)), b = -tH(a), a.Rr < b && (qH(a, !0), a.Rr = b, a.XB = a.Rr / a.B.offsetWidth, sH(a, 100 * a.XB, "%"))
        };
        var Tsa = function (a, b) {
            a.B.style["-webkit-tap-highlight-color"] = b ? "" : "rgba(0,0,0,0)"
        };
        var sH = function (a, b, c) {
            c = c || "px";
            a.Da ? a.B.style.WebkitTransform = "translate3d(" + b + c + ", 0, 0)" : (0, _.ig)() ? a.B.style.right = b + c : a.B.style.left = b + c
        };
        var Qsa = function (a) {
            for (var b = (0, _.ig)(), c = 0; c < a.A.length; c++) {
                var d = a.A[c].fB;
                b ? d.style.right = c * a.J + "%" : d.style.left = c * a.J + "%";
                a.Da && (d.style.WebkitTransform = "translate3d(0,0,0)")
            }
        };
        _.uH = function (a, b) {
            var c = a.H[b];
            (0, _.mH)(c.fB, !1, "cv_hidden");
            c.vu && (0, _.mH)(c.vu, !1, "cv_hidden")
        };
        var Psa = function (a, b) {
            a.D && a.D.vu && a.D.vu.removeAttribute("active");
            a.D = b;
            a.D.vu && b.vu.setAttribute("active", "true")
        };
        var tH = function (a) {
            a = a.B.offsetWidth * a.J / 100 * a.A.length - a.B.offsetWidth;
            0 > a && (a = 0);
            return a
        };
        (0, _.Vg)(_.x.G(), "sy102");
        nH.prototype.Oa = function () {
            return !(0, _.Vf)(this.fB, "cv_hidden")
        };
        _.q = _.oH.prototype;
        _.q.Dz = 0;
        _.q.Rr = 0;
        _.q.XB = 0;
        _.q.AO = null;
        _.q.FR = function () {
            var a = window.orientation;
            this.AO != a && (this.AO = a, (0, _.mH)(this.T, !! (window.orientation % 180), "cv_landscape"))
        };
        _.q.W = (0, _.ma)("B");
        _.q.eA = function () {
            qH(this, !1);
            return !0
        };
        _.q.dA = _.Ga;
        _.q.RC = function (a) {
            if (1 < (0, _.Ux)(a).length) return !1;
            if (a = Math.abs((0, _.ry)(this.L)) > Math.abs((0, _.qy)(this.L))) {
                this.Uc && this.Uc();
                this.M = !0;
                this.Wa && (null === this.T || (0, _.ky)(this.T, 0, 200, Rsa));
                if (this.Q) {
                    var b = this.B.offsetWidth * (this.J / 100);
                    (0, _.ig)() ? this.Dz = this.A.indexOf(this.D) * b : this.Dz = -this.A.indexOf(this.D) * b
                } else this.Dz = this.XB * this.B.offsetWidth;
                Tsa(this, !1)
            }
            return a
        };
        _.q.iA = function () {
            var a = (0, _.ry)(this.L),
                b = this.A.indexOf(this.D);
            if (this.Q)
                if ((0, _.ig)()) {
                    if (0 == b && 0 > a || b == this.A.length - 1 && 0 < a) a /= 2
                } else {
                    if (0 == b && 0 < a || b == this.A.length - 1 && 0 > a) a /= 2
                } else {
                    var c = this.Dz + a;
                    (0, _.ig)() ? 0 > c ? a = -this.Dz + c / 2 : (b = tH(this), c -= b, 0 < c && (a = b - this.Dz + c / 2)) : 0 < c ? a = -this.Dz + c / 2 : (b = tH(this), c = -c - b, 0 < c && (a = -b - this.Dz - c / 2))
                }
            this.Rr = this.Dz + a;
            sH(this, this.Rr)
        };
        _.q.QC = function () {
            var a = this.L.Q,
                b = (0, _.ry)(this.L),
                c = this.B.offsetWidth,
                c = c * this.J / 100,
                d = this.A.indexOf(this.D);
            this.Re ? this.Q ? (c = Math.round(Math.abs(b) / c), a = Math.round(Math.abs(a.x / this.Md)), 0 == a && (a = 1), d = 0 > b ? d + c * a : d - c * a) : (a = a.x / this.Md, d = this.Rr + Math.abs(a) * a, (0, _.ig)() ? this.Rr = Math.min(Math.max(d, 0), tH(this)) : this.Rr = Math.min(Math.max(d, -tH(this)), 0), d = Math.floor(-this.Rr / c + 0.5), qH(this, !0), this.XB = this.Rr / this.B.offsetWidth, sH(this, 100 * this.XB, "%")) : -0.01 > a.x || b < 0.6 * -c ? d++ : (0.01 < a.x || b > 0.6 * c) &&
                d--;
            b = this.A.indexOf(this.D);
            d -= b;
            (0, _.ig)() && (d = -d);
            d = Math.min(Math.max(b + d, 0), this.A.length - 1);
            b = this.A[d];
            b != this.D && (b.vu && (c = b.vu.getAttribute("ved")) && window.google.log("", "&ved=" + (0, window.encodeURIComponent)(c) + "&ei=" + (0, window.encodeURIComponent)(String(d))), this.V && this.V(d));
            for (rH(this, b, !1, !0); this.$.length;) this.$.shift()();
            Tsa(this, !0)
        };
        _.q.ER = function (a) {
            if (this.M) this.ca.push((0, _.$a)(arguments.callee, this, a));
            else {
                this.A = [];
                for (var b = 0; b < a.length; b++) {
                    var c = this.H[a[b]];
                    this.A.push(c);
                    this.B.appendChild(c.fB);
                    this.va && c.vu && this.va.appendChild(c.vu)
                }
                Qsa(this);
                rH(this, this.D, !1, !1)
            }
        };
        _.q.CR = function (a, b) {
            b.preventDefault();
            if (a.vu) {
                var c = a.vu.getAttribute("ved");
                if (c) {
                    var d = this.A.indexOf(a);
                    window.google.log("", "&ved=" + (0, window.encodeURIComponent)(c) + "&ei=" + (0, window.encodeURIComponent)(String(d)))
                }
            }
            this.V ? (d = this.A.indexOf(a), this.V(d)) : this.D == a && this.Za && (c = a.fB ? (0, _.kh)(a.fB, "dest") : "") && (0, _.Yf)(c);
            rH(this, a, this.Wa, !0)
        };
        _.q.isActive = (0, _.ma)("M");
        nH.prototype.ef = (0, _.ma)("A");

        (0, _.Sg)(_.x.G(), "sy102");
        (0, _.Wg)(_.x.G(), "sy102");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var vH = function (a) {
            return window.localStorage ? window.localStorage.getItem(a) : null
        };
        var Usa = function (a) {
            var b = (0, _.v)("cm_gesture_hint");
            null === b || (0, _.Tf)(b, "cm_gesture_hint_active");
            a && window.localStorage && window.localStorage.setItem("FINANCE_HAS_SWIPED", "yes")
        };
        var Vsa = function () {
            if (!window.localStorage) return !1;
            var a = Wsa();
            return !vH("FINANCE_HAS_SWIPED") && 5 > a
        };
        var Xsa = function () {
            Vsa() && Ysa(function () {
                var a = new window.Image;
                a.onload = function () {
                    var a = (0, _.v)("cm_gesture_hint");
                    a.style.backgroundImage = "url(//ssl.gstatic.com/m/images/swipe_promo.png)";
                    (0, _.Vf)(a, "cm_gesture_hint_active") ? (0, _.Tf)(a, "cm_gesture_hint_active") : (0, _.Sf)(a, "cm_gesture_hint_active");
                    window.setTimeout((0, _.ab)(Usa, !1), 6E3);
                    a = (0, _.ab)(Usa, !0);
                    wH.$.push(a);
                    a = String(Wsa() + 1);
                    window.localStorage && window.localStorage.setItem("FINANCE_HINT_COUNT", a)
                };
                a.src = "//ssl.gstatic.com/m/images/swipe_promo.png"
            })
        };
        var Wsa = function () {
            var a = vH("FINANCE_HINT_COUNT");
            return a ? (0, window.parseInt)(a, 10) || 0 : 0
        };
        var Zsa = function (a, b) {
            a[b ? 0 : 1].style.display = "none";
            a[b ? 1 : 0].style.display = "block"
        };
        var $sa = function (a, b, c) {
            var d = (0, _.pi)();
            d.onreadystatechange = function () {
                if (4 == d.readyState) {
                    var a = d.responseText;
                    if (-1 == a.indexOf(")]}',\n")) c();
                    else {
                        var a = a.slice(6),
                            f;
                        try {
                            f = (0, _.kf)(a)
                        } catch (g) {}
                        f && 200 == d.status ? b(f) : c()
                    }
                }
            };
            d.onerror = c;
            d.open("POST", a, !0);
            d.send("")
        };
        var xH = function (a, b) {
            return a.match("\\?") ? a + "&" + b : a + "?" + b
        };
        var ata = function (a) {
            Ysa((0, _.ab)($sa, a, function (a) {
                if (a) {
                    a.css && (0, _.Ee)(a.css);
                    for (var c in a.cards) {
                        var d = a.cards[c];
                        d.content && d.contentId && ((0, _.v)(d.contentId).innerHTML = d.content);
                        d.cardId && (0, _.uH)(wH, d.cardId)
                    }
                    a.cardOrder && wH.ER(a.cardOrder)
                }
            }, _.Ga))
        };
        var Ysa = function (a) {
            function b() {
                window.setTimeout(a, 1E3)
            }
            "loading" == window.document.readyState ? (0, _.$e)(window, "load", b) : b()
        };
        (0, _.Vg)(_.x.G(), "cfm");
        var wH, yH = 0,
            bta = "1d 5d 1M 6M 1Y 5Y max".split(" "),
            cta = 0;
        (0, _.za)("google.fmob.selectChartPeriod", function (a) {
                if (yH != a) {
                    var b = (0, _.v)("fmob_cb_container"),
                        b = b ? b.getElementsByTagName("div") : [];
                    Zsa(b[yH].querySelectorAll(".ksb"), !1);
                    Zsa(b[a].querySelectorAll(".ksb"), !0);
                    var c = (0, _.v)("fmob_chart"),
                        d = c.src.replace(/&p=[^&]*/, "");
                    c.src = d + "&p=" + bta[a + cta];
                    yH = a;
                    c = b[a].getAttribute("data-ved");
                    window.google.log("", "&ved=" + c, "", b[a])
                }
            }, void 0);
        (0, _.vf)("cfm", {
                init: function (a) {
                    yH = 0;
                    cta = "mutual_fund" == a.result_type ? 1 : 0;
                    var b = (0, _.v)("fmob_chart"),
                        c = (0, _.v)("cm_viewer");
                    if (c && b) {
                        wH = new _.oH(c);
                        b = b.src.replace(/&p=[^&]*/, "");
                        if (b = (/[?&]q=([^&]*)/.exec(b) || [null])[1]) {
                            var c = [],
                                d = vH("FINANCE_CIRO_QUOTES");
                            d && (c = d.split(","));
                            d = c.indexOf(b); - 1 != d && c.splice(d, 1);
                            for (c.unshift(b); 7 < c.length;) c.pop();
                            c = c.join(",");
                            window.localStorage && window.localStorage.setItem("FINANCE_CIRO_QUOTES", c);
                            a = a.data_url;
                            a = xH(a, "q=" + (0, window.encodeURIComponent)(b));
                            a = xH(a, "ei=" + window.google.kEI);
                            b = [];
                            (c = vH("FINANCE_CIRO_QUOTES")) && (b = c.split(","));
                            b.length && (a = xH(a, "frq=" + (0, window.encodeURIComponent)(b.join(","))));
                            ata(a)
                        }
                        Xsa()
                    }
                }
            });

        (0, _.Sg)(_.x.G(), "cfm");
        (0, _.Wg)(_.x.G(), "cfm");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Un = function (a) {
            var b = a.getElementsByTagName("SCRIPT");
            a = [];
            for (var c = 0, d = b.length; c < d; c++) {
                var e = b[c].text;
                0 < e.length && a.push(e)
            }
            0 != a.length && (b = (0, _.v)("jjsd"), b || (b = (0, _.od)("DIV"), b.id = "jjsd", (0, _.Me)(b)), c = (0, _.od)("SCRIPT"), c.text = a.join(";"), b.appendChild(c), a = (0, _.od)("SCRIPT"), a.text = '(function(){try{var n=document.getElementById("jjsd");n.parentNode.removeChild(n);}catch(e){}})();', b.appendChild(a))
        };
        _.Vn = function () {
            this.A = ""
        };
        (0, _.Vg)(_.x.G(), "sy21");
        (0, _.db)(_.Vn, _.On);
        (0, _.Ia)(_.Vn);
        _.Vn.prototype.clear = function () {
            this.B && (0, _.Zb)((0, _.$c)(this.B), function (a) {
                a.innerHTML = ""
            })
        };
        _.Vn.prototype.zb = function (a) {
            if (0 == a.indexOf("<pre"))(0, _.v)(this.B).innerHTML += a;
            else {
                var b = (0, _.od)("DIV");
                b.innerHTML = "<br>" + a;
                (0, _.Un)(b)
            }
            return !0
        };

        (0, _.Sg)(_.x.G(), "sy21");
        (0, _.Wg)(_.x.G(), "sy21");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.To = function () {
            try {
                _.So.clear();
                _.So.add("ad", [window.document.title, window.google.kEI, _.Uo, 0, !0, window.document.body.className]);
                var a = _.Qn.getItem("c", _.Uo);
                if (null != a) {
                    for (var b = 0, c; c = a.J[b++];) {
                        var d = (0, _.v)(c);
                        d ? _.So.add("p", [c, d.innerHTML]) : (0, _.Hn)("IS", {
                            container: c
                        }, Error("Missing chrome container"))
                    }
                    if (a.H && a.B) {
                        for (var e = a.B, f = (0, _.v)(a.H).getElementsByTagName("A"), a = {}, b = 0, g; g = f[b++];) 0 == g.id.indexOf(e) && (a[g.id] = g.href);
                        _.So.add("ph", [a])
                    }
                    _.So.add("zz", [!0]);
                    (0, _.Vo)("#", !0, !0)
                } else(0, _.Hn)("IS", {}, Error("Missing chrome item"))
            } catch (h) {
                (0, _.Hn)("IS", {}, h)
            }
        };
        _.Vo = function (a, b, c) {
            var d = (0, _.Qo)(a),
                e = _.Qn,
                f = e.getItem("s", d);
            if (b || !f) f = e.JC("s", d), b = [].concat(_.So.getAll()), f.A.tz = b, f.D = (0, _.vn)(a, !0), _.So.clear();
            c || (f.TC = !0);
            e.bM("s", d)
        };
        _.Uo = "1";
        (0, _.Vg)(_.x.G(), "sy24");
        (0, _.za)("google.j.slp", function (a, b) {
            try {
                _.So.add("slp", [b]);
                var c;
                window.gbar && (c = window.gbar.slp) && c(b)
            } catch (d) {
                (0, _.Hn)("SLP", {
                    id: b
                }, d)
            }
        }, void 0);
        (0, _.Sg)(_.x.G(), "sy24");
        (0, _.Wg)(_.x.G(), "sy24");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.ss = function (a) {
            return null != a
        };
        _.ts = function (a, b) {
            var c;
            if (a instanceof _.ts) this.vB = (0, _.Ma)(b) ? b : a.vB, qea(this, a.WB), c = a.BI, (0, _.us)(this), this.BI = c, c = a.zv(), (0, _.us)(this), this.AG = c, rea(this, a.XH), (0, _.vs)(this, a.getPath()), (0, _.ws)(this, a.A.clone()), (0, _.xs)(this, a.oK);
            else if (a && (c = (0, _.Yn)(String(a)))) {
                this.vB = !! b;
                qea(this, c[1] || "", !0);
                var d = c[2] || "";
                (0, _.us)(this);
                this.BI = d ? (0, window.decodeURIComponent)(d) : "";
                d = c[3] || "";
                (0, _.us)(this);
                this.AG = d ? (0, window.decodeURIComponent)(d) : "";
                rea(this, c[4]);
                (0, _.vs)(this, c[5] || "", !0);
                (0, _.ws)(this, c[6] || "", !0);
                (0, _.xs)(this, c[7] || "", !0)
            } else this.vB = !! b, this.A = new ys(null, null, this.vB)
        };
        var qea = function (a, b, c) {
            (0, _.us)(a);
            a.WB = c ? b ? (0, window.decodeURIComponent)(b) : "" : b;
            a.WB && (a.WB = a.WB.replace(/:$/, ""));
            return a
        };
        var rea = function (a, b) {
            (0, _.us)(a);
            if (b) {
                b = Number(b);
                if ((0, window.isNaN)(b) || 0 > b) throw Error("Bad port number " + b);
                a.XH = b
            } else a.XH = null;
            return a
        };
        _.vs = function (a, b, c) {
            (0, _.us)(a);
            a.FK = c ? b ? (0, window.decodeURIComponent)(b) : "" : b;
            return a
        };
        _.ws = function (a, b, c) {
            (0, _.us)(a);
            b instanceof ys ? (a.A = b, sea(a.A, a.vB)) : (c || (b = zs(b, tea)), a.A = new ys(b, null, a.vB));
            return a
        };
        _.As = function (a, b, c) {
            (0, _.us)(a);
            a.A.set(b, c);
            return a
        };
        _.xs = function (a, b, c) {
            (0, _.us)(a);
            a.oK = c ? b ? (0, window.decodeURIComponent)(b) : "" : b;
            return a
        };
        _.Bs = function (a, b) {
            (0, _.us)(a);
            a.A.remove(b);
            return a
        };
        _.us = function (a) {
            if (a.NY) throw Error("Tried to modify a read-only Uri");
        };
        _.Cs = function (a, b) {
            return a instanceof _.ts ? a.clone() : new _.ts(a, b)
        };
        var zs = function (a, b) {
            return (0, _.Ra)(a) ? (0, window.encodeURI)(a).replace(b, uea) : null
        };
        var uea = function (a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        };
        var ys = function (a, b, c) {
            this.A = a || null;
            this.B = !! c
        };
        var Ds = function (a) {
            if (!a.Ql && (a.Ql = new _.oc, a.Yh = 0, a.A))
                for (var b = a.A.split("&"), c = 0; c < b.length; c++) {
                    var d = b[c].indexOf("="),
                        e = null,
                        f = null;
                    0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
                    e = (0, window.decodeURIComponent)(e.replace(/\+/g, " "));
                    e = Es(a, e);
                    a.add(e, f ? (0, window.decodeURIComponent)(f.replace(/\+/g, " ")) : "")
                }
        };
        var vea = function (a, b) {
            Ds(a);
            b = Es(a, b);
            return (0, _.qc)(a.Ql.Qc, b)
        };
        _.wea = function (a, b, c) {
            a.remove(b);
            0 < c.length && (a.A = null, a.Ql.set(Es(a, b), (0, _.Mb)(c)), a.Yh += c.length)
        };
        var Es = function (a, b) {
            var c = String(b);
            a.B && (c = c.toLowerCase());
            return c
        };
        var sea = function (a, b) {
            b && !a.B && (Ds(a), a.A = null, (0, _.ef)(a.Ql, function (a, b) {
                var e = b.toLowerCase();
                b != e && (this.remove(b), (0, _.wea)(this, e, a))
            }, a));
            a.B = b
        };
        (0, _.Vg)(_.x.G(), "sy35");
        _.q = _.ts.prototype;
        _.q.WB = "";
        _.q.BI = "";
        _.q.AG = "";
        _.q.XH = null;
        _.q.FK = "";
        _.q.oK = "";
        _.q.NY = !1;
        _.q.vB = !1;
        _.q.toString = function () {
            var a = [],
                b = this.WB;
            b && a.push(zs(b, xea), ":");
            if (b = this.zv()) {
                a.push("//");
                var c = this.BI;
                c && a.push(zs(c, xea), "@");
                a.push((0, window.encodeURIComponent)(String(b)));
                b = this.XH;
                null != b && a.push(":", String(b))
            }
            if (b = this.getPath()) this.AG && "/" != b.charAt(0) && a.push("/"), a.push(zs(b, "/" == b.charAt(0) ? yea : zea));
            (b = this.A.toString()) && a.push("?", b);
            (b = this.oK) && a.push("#", zs(b, Aea));
            return a.join("")
        };
        _.q.clone = function () {
            return new _.ts(this)
        };
        _.q.zv = (0, _.ma)("AG");
        _.q.getPath = (0, _.ma)("FK");
        _.q.getQuery = function () {
            return this.A.toString()
        };
        _.q.uk = function (a) {
            return this.A.get(a)
        };
        var xea = /[#\/\?@]/g,
            zea = /[\#\?:]/g,
            yea = /[\#\?]/g,
            tea = /[\#\?@]/g,
            Aea = /#/g;
        _.q = ys.prototype;
        _.q.Ql = null;
        _.q.Yh = null;
        _.q.ys = function () {
            Ds(this);
            return this.Yh
        };
        _.q.add = function (a, b) {
            Ds(this);
            this.A = null;
            a = Es(this, a);
            var c = this.Ql.get(a);
            c || this.Ql.set(a, c = []);
            c.push(b);
            this.Yh++;
            return this
        };
        _.q.remove = function (a) {
            Ds(this);
            a = Es(this, a);
            return (0, _.qc)(this.Ql.Qc, a) ? (this.A = null, this.Yh -= this.Ql.get(a).length, this.Ql.remove(a)) : !1
        };
        _.q.clear = function () {
            this.Ql = this.A = null;
            this.Yh = 0
        };
        _.q.isEmpty = function () {
            Ds(this);
            return 0 == this.Yh
        };
        _.q.qG = function (a) {
            var b = this.ot();
            return (0, _.Fb)(b, a)
        };
        _.q.vw = function () {
            Ds(this);
            for (var a = this.Ql.ot(), b = this.Ql.vw(), c = [], d = 0; d < b.length; d++)
                for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
            return c
        };
        _.q.ot = function (a) {
            Ds(this);
            var b = [];
            if (a) vea(this, a) && (b = (0, _.Lb)(b, this.Ql.get(Es(this, a))));
            else {
                a = this.Ql.ot();
                for (var c = 0; c < a.length; c++) b = (0, _.Lb)(b, a[c])
            }
            return b
        };
        _.q.set = function (a, b) {
            Ds(this);
            this.A = null;
            a = Es(this, a);
            vea(this, a) && (this.Yh -= this.Ql.get(a).length);
            this.Ql.set(a, [b]);
            this.Yh++;
            return this
        };
        _.q.get = function (a, b) {
            var c = a ? this.ot(a) : [];
            return 0 < c.length ? String(c[0]) : b
        };
        _.q.toString = function () {
            if (this.A) return this.A;
            if (!this.Ql) return "";
            for (var a = [], b = this.Ql.vw(), c = 0; c < b.length; c++)
                for (var d = b[c], e = (0, window.encodeURIComponent)(String(d)), d = this.ot(d), f = 0; f < d.length; f++) {
                    var g = e;
                    "" !== d[f] && (g += "=" + (0, window.encodeURIComponent)(String(d[f])));
                    a.push(g)
                }
            return this.A = a.join("&")
        };
        _.q.clone = function () {
            var a = new ys;
            a.A = this.A;
            this.Ql && (a.Ql = this.Ql.clone(), a.Yh = this.Yh);
            return a
        };

        (0, _.Sg)(_.x.G(), "sy35");
        (0, _.Wg)(_.x.G(), "sy35");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.iK = function (a, b) {
            var c = [];
            return (0, _.Jd)(a, b, c, !0) ? c[0] : void 0
        };
        (0, _.Vg)(_.x.G(), "sy107");
        (0, _.Sg)(_.x.G(), "sy107");
        (0, _.Wg)(_.x.G(), "sy107");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.jK = function (a, b) {
            return a.replace(/([?&])tbs=([^&]*)/, "$1tbs=$2," + b)
        };
        _.kK = function (a) {
            return a.replace(/([\uff10-\uff19])/g, function (a) {
                return a.charCodeAt(0) - 65296
            })
        };
        _.lK = function (a) {
            if (a = a()) _.mK ? (0, _.Yf)(a) : window.location.href = a
        };
        (0, _.Vg)(_.x.G(), "sy109");
        _.mK = !1;
        (0, _.Sg)(_.x.G(), "sy109");
        (0, _.Wg)(_.x.G(), "sy109");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.swa = function (a) {
            if (!_.nK) return window.google.ml(Error("no-csl: strobe.util.getChunkIndexForResultIndex"), !1, {
                url: window.google.isr.url
            }), -1;
            for (var b = window.google.isr.layout.getChunkSizeArray(), c = 0, d = 0; d < b.length; d++) {
                if (c + b[d] > a) return d;
                c += b[d]
            }
            window.google.ml(Error("bad-idx: strobe.util.getChunkIndexForResultIndex"), !1, {
                url: window.google.isr.url
            });
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
                for (var b = "{", c = (0, _.dc)(_.rK), d = 0, e; e = c[d]; ++d) 0 < d && (b += ","), b += "[" + e + "," + _.rK[e].ei + "]";
                b += "}";
                window.google.ml(Error("no-cm:" + a + "," + b), !1, {
                    url: window.google.isr.url
                });
                return window.google.kEI
            }
            return b.ei
        };
        (0, _.Vg)(_.x.G(), "sy108");
        _.nK = !1;
        _.oK = !1;
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
        var sK = function () {
            var a = window.document.getElementById("iszlt_sel");
            return a ? a.getElementsByTagName("select")[0] : null
        };
        var uwa = function () {
            var a = sK();
            return a ? a.options[a.selectedIndex].value : ""
        };
        var vwa = function (a) {
            a = a || window.event;
            var b = a.target || a.srcElement;
            if (b && "A" == b.tagName.toUpperCase() && (0, _.Vf)(b, "isrnj")) {
                var b = b.parentNode,
                    c = b.id;
                if ("isz_lt" == c || "isz_ex" == c) {
                    if (b.id && "tbos" != b.className) {
                        for (var d = b.parentNode.childNodes, e, f = 0, g; g = d[f++];)
                            if ("tbos" == g.className) {
                                e = g;
                                break
                            }
                        if ("color-specific" != e.id) {
                            e.className = "tbou";
                            d = e.getElementsByTagName("a")[0];
                            d && "none" != d.style.display || (d = window.document.createElement("a"), d.className = "q isrnj", window.google.isr.url ? d.href = window.google.isr.url :
                                d.href = window.location.href);
                            for (f = 0; g = e.childNodes[f++];)
                                if (3 == g.nodeType) {
                                    d.appendChild(g);
                                    break
                                }
                            e.insertBefore(d, e.firstChild)
                        }
                        e = b.getElementsByTagName("a")[0];
                        b.className = "tbos";
                        b.insertBefore(e.firstChild, b.firstChild)
                    }
                    b = window.document.getElementById("iszlt_sel");
                    e = window.document.getElementById("iszex");
                    b.className = "tbcontrol";
                    e.className = "tbcontrol";
                    "isz_lt" == c ? (b.className = "tbcontrol_vis", sK().focus()) : (e.className = "tbcontrol_vis", window.document.getElementById("iszw").focus())
                }
                a.cancelBubble = !0;
                a.stopPropagation && a.stopPropagation();
                return !1
            }
            return !0
        };
        var wwa = function () {
            function a() {
                (0, _.lK)(function () {
                    var a;
                    a = (0, _.kK)((0, window.decodeURIComponent)(window.document.getElementById("iszw").value));
                    var b = (0, _.kK)((0, window.decodeURIComponent)(window.document.getElementById("iszh").value));
                    if (0 < a || 0 < b) {
                        a = 0 < a ? a : b;
                        var b = 0 < b ? b : a,
                            c = window.document.getElementById("iszex").getElementsByTagName("a")[0].href;
                        a = (0, _.jK)(c, "iszw:" + a + ",iszh:" + b)
                    } else a = null;
                    return a
                })
            }
            _.mK || (window.document.getElementById("tbd").onclick = vwa);
            var b = sK();
            if (b) {
                b.onchange = function () {
                    var a =
                        uwa();
                    a && (0, _.lK)(function () {
                        var b = window.document.getElementById("iszlt_url").href;
                        return (0, _.jK)(b, "islt:" + a)
                    })
                };
                var c;
                if (_.sc.vx && 0 <= window.navigator.platform.indexOf("Linux") && (c = window.document.getElementById("leftnav"))) {
                    var d;
                    b.onmouseover = function () {
                        (0, window.clearTimeout)(d);
                        c.style.overflowY = "auto"
                    };
                    b.onmouseout = function () {
                        d = (0, window.setTimeout)(function () {
                            c.style.overflowY = null
                        }, 50)
                    }
                }
            }
            if (b = window.document.getElementById("iszex")) window.document.getElementById("iszex_btn").onclick = a, b.onkeydown =
                function (b) {
                    13 == (b || window.event).keyCode && a()
            }
        };
        _.tK = function () {
            var a = window.document.getElementById("leftnav");
            if (a) {
                var b = window.document.documentElement.clientHeight - (0, _.se)(a) - (a.firstChild.offsetTop - a.offsetTop);
                a.style.height = Math.max(0, b) + "px"
            }
        };
        _.xwa = function (a) {
            window.document.getElementById("tbd") && (_.mK = a || !1, (0, _.tK)(), (0, _.$e)(window, "resize", _.tK), wwa())
        };
        var uK = function (a, b) {
            _.vK[a] || (_.vK[a] = []);
            _.vK[a].push(b)
        };
        var wK = function (a, b) {
            if (_.vK[a])
                for (var c = 0, d; d = _.vK[a][c++];) d(b)
        };
        var xK = function (a, b, c) {
            var d = (0, _.pi)();
            d && (d.open("GET", a), d.onreadystatechange = function () {
                4 == d.readyState && (200 == d.status ? b(d.responseText) : 0 != d.status || c ? b(null) : xK(a, b, !0))
            }, d.send(null))
        };
        var ywa = function (a) {
            yK = (_.nK = zK = a) ? "rg_di" : "rg_li";
            AK = a ? "div" : "li"
        };
        _.zwa = function (a) {
            _.BK = !! window.document.getElementById("debug_comments");
            (0, _.ji)("isr", {
                smr: Awa
            });
            window.google.j && window.google.j.init && (CK = !0, DK = window.google.j.pf);
            a && a.meta && (EK = a.meta, FK = !! EK.isBillboard, GK = !! EK.showMoreResults, Bwa = EK.numResults, _.oK = !! EK.genChunk, ywa( !! EK.csLayout), HK = EK.bigGulpEnabled || !zK);
            var b = window.document.getElementById("rg").style.height;
            b && (Cwa = b);
            EK.imgrc || Dwa();
            IK(window, "scroll", JK);
            FK && IK(window, _.Rx, JK);
            _.KK || _.BK || (b = _.tc.qw ? "onkeypress" : "onkeydown", _.LK = window.document[b],
                window.document[b] = Ewa);
            _.tc.Eq || _.tc.xt ? (0, _.hD)(_.MK) : _.KK && !FK || IK(window, "resize", _.MK);
            window.google.isr.Hover && window.google.isr.Hover.handleScroll && uK(4, window.google.isr.Hover.handleScroll);
            uK(5, NK);
            CK || IK(window.document, "click", Fwa);
            a && a.baseUrl ? (window.google.isr.url = a.baseUrl, 0 == OK && (OK = PK(window.google.isr.url, "biw", -1), QK = PK(window.google.isr.url, "bih", -1))) : (a = window.location.href.indexOf("#"), window.google.isr.url = 0 <= a ? window.location.href.substring(0, a) : window.location.href, window.google.ml(Error("isr: No base URL"), !1, {
                url: window.location.href
            }));
            zK || (_.oK ? (RK("0"), RK("1"), _.pK["1"] = "0") : (RK("ls"), RK("sbg")));
            FK && 150 <= SK() && JK(null);
            zK || Gwa(7E3, 3E3);
            DK || (window.google.isr.bg_ready ? TK() : window.google.isr.bgd = TK);
            window.google.y.first.push(function () {
                var a = window.document.querySelector("table.gssb_c");
                a || (a = window.document.querySelector("div.gac_od"));
                a && (a.style.position = "absolute")
            });
            !_.UK && CK && (_.UK = !0, _.VK = !1, WK(88, function (a, b) {
                _.VK = "isch" != b
            }), WK(53, Hwa), WK(2, Iwa));
            Jwa(_.oK ? "0" : "ls");
            _.XK = !0;
            _.YK && Kwa()
        };
        var Gwa = function (a, b) {
            _.ZK = window.setTimeout(function () {
                !_.$K && CK && (_.aL = !0, Kwa());
                _.ZK = window.setTimeout(function () {
                    (0, _.yd)((0, _.v)("isr_ld"));
                    window.google.ml(Error("isr:ldtm"), !1, {
                        url: window.google.isr.url,
                        e_bg: bL(),
                        speed: EK.connectionSpeed,
                        is_j: CK,
                        is_pr: DK,
                        bg_r: _.YK,
                        bg_p: _.$K,
                        retry: _.aL
                    })
                }, b)
            }, a)
        };
        var IK = function (a, b, c) {
            (0, _.$e)(a, b, c);
            _.Lwa.push([a, b, c])
        };
        var WK = function (a, b) {
            (0, _.Nf)(a, b);
            _.Mwa.push([a, b])
        };
        var Iwa = function (a) {
            var b = a.target || a.srcElement;
            if (null !== b && (0, _.Vf)(b, "isrnj")) return vwa(a), !1;
            for (a = b; a && a != window.document.body && a != window.document.documentElement && !(0, _.Vf)(a, yK) && !(0, _.Vf)(a, "rg_hv"); a = a.parentNode);
            return !0
        };
        var cL = function () {
            if (!dL) {
                var a = window.document.getElementById("isr_pps");
                if (a) dL = +a.innerHTML;
                else return 1
            }
            return dL
        };
        var eL = function () {
            fL("getPageTagName");
            return "ul"
        };
        var NK = function () {
            var a = Nwa = [];
            if (zK)
                for (var b = window.google.isr.layout.getNumPages(), c = 0, d = 0; d < b; d++) {
                    var e = window.google.isr.layout.getResultsForPage(d),
                        f = e ? e.length : 0,
                        e = {
                            start: c,
                            gF: f
                        }, c = c + f;
                    a.push(e)
                } else if (c = window.document.getElementById("rg"), b = cL(), c)
                    for (d = c.getElementsByTagName(eL()), f = c = 0; f < d.length; f += b) {
                        e = {
                            gF: 0
                        };
                        e.start = c;
                        for (var g = 0; g < b && f + g < d.length; g++) e.gF += +d[f + g].getAttribute("data-cnt");
                        c += e.gF;
                        a.push(e)
                    }
                window.google.isr.Hover &&
                window.google.isr.Hover.initHoverHtml()
        };
        var Owa = function () {
            fL("getAllResultPages");
            var a = window.document.getElementById("rg");
            return a ? a.querySelectorAll(eL() + ".rg_ul") : []
        };
        var TK = function () {
            window.clearTimeout(_.ZK);
            if (zK && !window.google.isr.bg_ready) window.google.ml(Error("isr:inr"), !1, {
                url: window.google.isr.url
            });
            else {
                RK("bg");
                window.google.isr.bg_done = !0;
                _.$K = !1;
                window.google.stb.csi.onBg();
                _.KK || Pwa();
                NK();
                window.setTimeout(function () {
                    wK(5);
                    zK || (window.google.isr.prs || _.KK) || gL()
                }, 0);
                if (_.oK && (Qwa(), !zK)) {
                    var a = Math.ceil(hL() / cL());
                    _.pK[a + ""] = "1"
                }!CK || (window.google.isr.bg_stored || window.location.href.match(/(#q=|#.*&q=)/)) ||
                    (window.google.isr.bg_stored = !0, (0, _.To)());
                a = zK ? window.google.isr.layout.getNumPages() : Owa().length;
                EK.shouldLogBgTimeout && (bL() && 1 == a) && (a = CK ? "j" : "", a = ["&url=", (0, _.Ai)(_.iL.UB), "&type=", a, "&ispfch=", DK, "&speed=", EK.connectionSpeed].join(""), window.google.log("stbbg1p", a));
                _.aL && window.google.ml(Error("isr:bgret"), !1, {
                    url: window.google.isr.url,
                    e_bg: bL(),
                    speed: EK.connectionSpeed,
                    is_j: CK,
                    is_pr: DK,
                    bg_r: _.YK,
                    bg_p: _.$K,
                    retry: _.aL
                })
            }
        };
        var jL = function () {
            try {
                var a = window.JSON.parse(window.sessionStorage.getItem("images-sh")) || {};
                a[window.location.href] = {
                    s: _.kL,
                    l: SK(),
                    p: _.oK && SK() < _.lL
                };
                var b = window.JSON.stringify(a);
                window.sessionStorage.setItem("images-sh", b)
            } catch (c) {}
        };
        var Dwa = function () {
            var a;
            try {
                a = window.JSON.parse(window.sessionStorage.getItem("images-sh"))[window.location.href]
            } catch (b) {}
            if (a) {
                var c = a.l;
                if (_.oK) a.p ? mL(c) : (mL(0), nL(!1));
                else {
                    var d = a.s && !_.KK,
                        e = 0;
                    if (c || d) var f = window.setInterval(function () {
                        d && 1 < hL() && (Rwa(), d = !1);
                        c && c <= window.document.body.clientHeight && (mL(c), c = 0);
                        (!d && !c || 75 <= ++e) && window.clearInterval(f)
                    }, 200)
                }
            }
        };
        var hL = function () {
            fL("getLastPageNumber");
            if (_.oL) return _.oL;
            var a = window.document.getElementById("isr_lp");
            return a ? _.oL = +a.innerHTML : 1
        };
        var bL = function () {
            return +EK.numResults > pL.ls
        };
        var SK = function () {
            return window.pageYOffset || window.document.body.scrollTop || window.document.documentElement.scrollTop || 0
        };
        var qL = function () {
            fL("getVisiblePages");
            var a = [],
                b = SK(),
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
            var b = SK();
            if (_.oK && SK() + QK > sL()) {
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
                if (27 == b && !a.shiftKey && window.google.isr.Hover && window.google.isr.Hover.isActive()) return window.google.isr.Hover.hide(), !1;
                var c = window.google.isr.ircin && window.google.isr.ircin() && window.google.isr.ircv && window.google.isr.ircv();
                if (window.google.isr.Hover && !(c || window.google.isr.util.typeHasFocus("INPUT") || window.google.isr.util.typeHasFocus("SELECT")))
                    if (39 != b && 37 != b || a.shiftKey) {
                        if (38 == b) return window.google.isr.Hover.isActive() ?
                            (window.google.isr.Hover.moveHover(2), tL = "hk") : (rL(-1), tL = "rk"), !1;
                        if (40 == b) return window.google.isr.Hover.isActive() ? (window.google.isr.Hover.moveHover(3), tL = "hk") : (rL(1), tL = "rk"), !1
                    } else return a = (0, _.ig)() ? 37 == b ? 1 : 0 : 37 == b ? 0 : 1, window.google.isr.Hover.moveHover(a), tL = "hk", !1
            }
            return _.LK ? (0, _.LK)(a) : !0
        };
        var mL = function (a) {
            SK() != a ? window.scrollTo(0, a) : uL(null)
        };
        var Hwa = function () {
            window.google.isr.Hover && window.google.isr.Hover.dispose()
        };
        var JK = function (a) {
            var b = window.google.time();
            40 < b - Swa ? (Swa = b, Twa = _.vL) : _.vL = Twa;
            uL(a)
        };
        var uL = function () {
            var a = SK(),
                b = a - _.vL;
            if (0 != b) {
                window.google.time();
                jL();
                _.vL = a;
                var c = {};
                c.sp = a;
                c.sc = b;
                wK(4, c)
            }
        };
        var Pwa = function () {
            var a = window.document.getElementById("smc");
            a && (a.style.display = "none", _.oK || (_.kL || !(GK || pL.ls + pL.bg < Bwa)) || (a.style.display = "block"))
        };
        _.MK = function () {
            window.clearTimeout(_.wL);
            _.wL = window.setTimeout(function () {
                gL()
            }, zK ? 50 : 600)
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
            var c = PK(window.google.isr.url, "biw", -1),
                d = PK(window.google.isr.url, "bih", -1),
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
        var Vwa = function () {
            window.google.isr.ircbr && window.google.isr.ircbr();
            var a = (0, _.se)(window.document.getElementById("images-grid")),
                a = SK() > a,
                b = null;
            if (a) n: {
                for (var b = zL(), b = window.google.isr.layout.getResultsForPage(b[0] || 0), c = SK(), d = 0; d < b.length; ++d) {
                    var e = b[d];
                    if ((0, _.se)(e) + e.offsetHeight > c) {
                        b = e;
                        break n
                    }
                }
                b = null
            }
            Wwa();
            c = +window.document.getElementById("images-grid-inner").offsetWidth;
            Xwa(c);
            window.google.isr.layout.layoutResults(!0);
            window.google.isr.Hover &&
                window.google.isr.Hover.resetResultsArea();
            NK();
            AL();
            a ? (a = b ? (0, _.se)(b) : 0, mL(a)) : BL();
            for (a = 0; a < _.CL.length; ++a) try {
                _.CL[a].call()
            } catch (f) {}
            window.google.isr.ircar && window.google.isr.ircar()
        };
        var gL = function () {
            if (window.google.isr.url && !(FK && window.google.isr.bivv && window.google.isr.bivv())) {
                var a = window.innerWidth || window.document.documentElement.offsetWidth,
                    b = window.innerHeight || window.document.documentElement.offsetHeight,
                    c = zK && !FK ? 0 : 100;
                !window.google.isr.prs && (!window.google.isr.pending_res && (Math.abs(a - OK) > c || Math.abs(b - QK) > c) && 0 < a && 0 < b) && (c = OK, OK = a, QK = b, Ywa || (Ywa = c), window.google.isr.url = yL(window.google.isr.url, !0), zK ? Vwa() : CK ? Uwa() : (window.google.isr.pending_res = 1, window.google.isr.addh &&
                    (window.google.isr.url = xL(window.google.isr.url, "addh", window.google.isr.addh)), Wwa(), Zwa(function () {
                        window.google.isr.pending_res = 0;
                        gL()
                    })))
            }
        };
        var Wwa = function () {
            if (!FK) {
                var a = window.document.getElementById("images-grid");
                a || (a = window.document.getElementById("tbd"));
                for (var b = a.getElementsByTagName("a"), a = 0, c; c = b[a]; a++) c.href && (c.href = yL(c.href))
            }
            if (a = window.document.getElementById("tsf"))
                for (b = a.getElementsByTagName("input"), a = 0; c = b[a]; a++) "biw" == c.name ? c.value = OK : "bih" == c.name && (c.value = QK)
        };
        var PK = function (a, b, c) {
            return (a = a.match(RegExp("[?&]" + b + "=(\\d+)"))) ? +a[1] : c
        };
        var Kwa = function () {
            zK ? window.google.ml(Error("isr:csl_ldbg"), !1, {
                url: window.google.isr.url
            }) : _.XK ? (_.YK = !1, window.google.isr.bg_done || _.$K || (_.$K = !0, _.oK ? $wa(function () {
                DL();
                TK()
            }) : EL(["bg"], TK))) : _.YK = !0
        };
        var Zwa = function (a) {
            fL("handleReloadResults_");
            if (_.oK) axa(a);
            else {
                AL();
                var b = ["ls", "bg"],
                    c = window.document.getElementById("smc");
                _.kL ? b.push("sbg") : c && (c.style.display = "none");
                EL(b, function () {
                    c && Pwa();
                    _.vL = -1;
                    uL(null);
                    a && a();
                    window.google.isr.pending_res = 0
                })
            }
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
                            var c = {};
                            c.rt = a;
                            wK(5, c);
                            delete _.iL.UB;
                            _.oK ? b && b() : d.length ? EL(d, b) : b && b()
                        } else window.google.ml(Error("isr:ordni"), !1, {
                            url: window.location.href
                        })
                    }, 0)
                } else window.google.ml(Error("isr:res_done"), !1, {
                    chunk: a,
                    url: window.location.href
                })
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
                _.kL = !0;
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
            if (a) return /\/im(ages|gres|ghp)\?|\/search\?(.*&)?tbm=isch(&|$)/.test(a.href) && (a.href = yL(a.href)), !0
        };
        var fL = function (a) {
            zK && window.google.ml(Error("csl: " + a), !1, {
                url: window.google.isr.url
            })
        };
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
            zK && (window.google.isr.bg_done || (window.google.ml(Error("is:csl_hasnotrun"), !1, {
                url: window.location.href,
                chunk0: window.google.isr.layout.getChunkSize(0)
            }), window.google.isr.layout.moveAndLayoutNewResults()), b = (a = 0 < window.google.isr.layout.getChunkSize(0)) && !window.google.isr.layout.getChunkSize(1));
            a ? b ? (IL[0] = !0, ML = 1, HK && window.google.log("stbc_mc1",
                "")) : (IL[0] = !0, IL[1] = !0, ML = 2) : (ML = 0, window.google.log("stbc_mc0", ""));
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
                FK && (RL = !0, b.style.height = "auto", QL() ? b.style.paddingBottom = "0px" : b.style.paddingBottom = LL + "px");
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
            if (!b || QL() || 0 <= _.JL || _.PL || window.google.isr.layout && !window.google.isr.bg_done) _.JL > (HK ? 1 : 0) && nL(!0);
            else {
                var c = a.length,
                    d = EK.genPrefetchCutoff ? +EK.genPrefetchCutoff : 1;
                !c || a[c - 1] >= b - d ? UL(DL) : nL(!1)
            }
        };
        var $wa = function (a) {
            _.BK || (HK ? (ML = 1, _.JL = -1, IL = [!0], OL(!1), _.PL = !0, HL = [], UL(a)) : window.google.ml(Error("csl: rcoi"), !1, {
                url: window.location.href
            }))
        };
        var UL = function (a) {
            QL() || (HL.push(ML++), -1 == _.JL && hxa(a))
        };
        var DL = function (a) {
            var b = _.JL;
            if (!(0 > b || (0, _.Ma)(window.google.isr.layout) && !window.google.isr.layout.hasRenderedChunk(b))) {
                GL = window.document.querySelectorAll("ul.rg_ul");
                IL[b] = !0;
                _.oL = 0;
                nL(!1);
                var c = HK ? 10 : 9;
                b >= (EK.genChunkMax ? EK.genChunkMax : c) ? OL(!0) : (c = zK ? window.google.isr.layout.getChunkSize(b) : (c = (0, _.v)("rg_c" + b)) ? c.querySelectorAll("li.rg_li").length : 0, (0 == b && 0 == c || 0 < b && 30 > c) && OL(!0));
                gxa(b) && ((b = (0, _.v)("smc")) && GK && (b.style.display = "block", cxa(), (0, _.$e)(b, "click", ixa)), _.PL = !0);
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
                b > (HK ? 1 : 0) && nL(!0);
                1 == b && HK && window.google.log("stbc_rc1", "");
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
                    window.google.log("stb_ws_c" + b + "_e" + e + "_a" + d + "_l" + f, "")
                }
                c = xL(c, "start", 0 < b ? d : 0);
                c = xL(c, "csl", zK ? 1 : 0);
                xK(c, function (c) {
                    _.VL != b ? bxa(b + "", a, null, null, c) : (nL(!1), _.VL = -1)
                })
            } else _.JL = -1
        };
        var axa = function (a) {
            fL("chunking.reloadResults_");
            AL();
            IL = [];
            HL = [0];
            OL(!1);
            _.lL = 0;
            _.PL = _.BK;
            0 <= _.JL && (_.VL = _.JL, _.JL = -1);
            ML = 1;
            UL(function () {
                mL(0);
                a && a();
                DL();
                window.google.isr.pending_res = 0
            })
        };
        var nL = function (a) {
            var b = (0, _.v)("isr_cld");
            if (b && FK) {
                b.style.top = sL() + "px";
                var c = window.document.querySelectorAll("#isr_cld");
                if (1 < c.length)
                    for (var d = 1; d < c.length; ++d) c[d].parentNode.removeChild(c[d])
            }
            a && SK() + QK - sL() >= LL && SK() > QK ? (b || (b = (0, _.Ne)("div"), b.id = "isr_cld", a = window.innerHeight || window.document.documentElement.offsetHeight, (0, _.v)("leftnav"), a = FK ? sL() : a - LL, c = (0, _.v)("rg").offsetWidth, b.setAttribute("style", ["text-align:center;margin-top:100px;z-index:50;position:", FK ? "absolute;" : "fixed;",
                "top:", a, "px;width:", c, "px"
            ].join("")), a = (0, _.Ne)("img"), a.src = "images/loading.gif", a.width = 80, a.height = 80, b.appendChild(a), (0, _.v)("rg").appendChild(b)), b.style.display = "block") : b && (b.style.display = "none")
        };
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
            _.PL = !1;
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
            if (b - jxa > c) return !0;
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
            d = !1;
            for (c = 0; c < e.length; c++) XL[e[c] + 1] || (XL[e[c] + 1] = b, d = !0);
            var f = [],
                k;
            for (k in XL) {
                g = !1;
                for (c = 0; c < e.length; c++)
                    if (e[c] + 1 == k) {
                        g = !0;
                        break
                    }
                g || f.push(k)
            }
            for (c = 0; c < f.length; c++) delete XL[f[c]],
            delete YL[f[c]];
            k = [];
            for (var l in XL) YL[l] || (1E3 <= b - XL[l] ? k.push(l) : d = !0);
            a && (0 < a.sc ? ZL = "&forward=1" : 0 > a.sc && (ZL = "&forward=0"));
            if (0 < k.length) {
                a = "&iact=ms";
                tL && (a = "&iact=" + tL);
                for (c = 0; c < k.length; c++)
                    if (b = Nwa[k[c] - 1]) b = "/imgevent?ei=" + window.google.isr.chunkid(k[c]) + "&page=" + k[c] + "&start=" + b.start + "&ndsp=" + b.gF + ZL + a, window.google.isr.url && ((l = window.google.isr.url.match(/[?&]e=([^&]+)/)) && (b += "&e=" + l[1]), (l = window.google.isr.url.match(/[?&]expid=(\d+)/)) && (b += "&expid=" + l[1])),
                YL[k[c]] = !0;
                tL = null;
                ZL = ""
            } else d ? ($L && (window.clearTimeout($L), $L = null), $L = window.setTimeout(WL, 1E3)) : tL = null;
            return !0
        };
        var kxa = function () {
            tL = "sw";
            return !0
        };
        _.lxa = function () {
            YL[1] = !0;
            WL();
            _.sc.vx ? window.document.addEventListener("DOMMouseScroll", kxa, !1) : (0, _.$e)(window.document, "mousewheel", kxa);
            uK(4, WL)
        };
        var aM = function () {
            if (!zK) {
                var a = window.document.getElementById("rg").getElementsByTagName("SPAN");
                bM = [];
                for (var b = 0, c; c = a[b]; b++) "rg_ctlv" != c.className && "rg_ctl" != c.className || !c.querySelector(eL() + ".rg_ul") || bM.push(c)
            }
            1 < cM && window.google.stb.csi.updateRowsInfo && window.google.stb.csi.updateRowsInfo()
        };
        var dM = function (a) {
            if ((zK || bM && !(0 > a) && bM[a]) && !(0 > a || eM[a] || zK && 1 < a && 0 == SK())) {
                fM.push(a);
                if (!zK || mxa(a)) eM[a] = !0;
                gM || hM()
            }
        };
        var hM = function () {
            var a = fM.shift();
            (0, _.Ma)(a) ? (gM = !0, (0, _.nxa)(a)) : gM = !1
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
                if (!zK || mxa(a)) iM[a] = !0;
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
            sxa(a, !0, _.mM);
            if (a = a.target || a.srcElement)(0, _.af)(a, "error", pxa), (0, _.$e)(a, "error", txa), (0, _.af)(a, "load", kM), a.setAttribute("src", a.getAttribute("src") + "&reload=on");
            kM()
        };
        var sxa = function (a, b, c) {
            a = b ? "f" : "t";
            0 == c % 5 && 100 > c && window.google.ml(Error("isr:thumb_fail"), !1, {
                second_try: a,
                fail: c,
                total: _.nM
            })
        };
        var txa = function (a) {
            ++_.oM;
            a = a || window.event;
            sxa(a, !1, _.oM);
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
                uxa || (uxa = !0, EK.bgtprefetch || (vxa = !1));
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
        var xxa = function () {
            var a = window.google.time(),
                b = a - yxa;
            if (!(15 > b)) {
                var c = SK(),
                    d = c - zxa;
                yxa = a;
                zxa = c;
                Axa++;
                a = Math.abs(d / b); - 1 != rM && (window.clearTimeout(rM), rM = -1);
                if (window.google.stb.csi.onScl) {
                    var b = zK ? zL() : qL(),
                        c = (0, _.se)(window.document.getElementById("images-grid")),
                        d = SK() + c,
                        e = d + QK;
                    FK && (d -= c);
                    window.google.stb.csi.onScl(b, d, e)
                }
                1 < a || 3 >= Axa ? rM = window.setTimeout(function () {
                    BL()
                }, 250) : BL()
            }
        };
        var sM = function () {
            fL("thumbnails.renderBigGulp_");
            if ((0, _.Ma)(window.google.isr.bg_done) && window.document.getElementById("images-grid")) {
                -1 == _.pM && (0 == _.nM && EK.shouldLogBgTimeout && bL()) && (_.pM = window.setTimeout(function () {
                    window.google.log("stbbgt", "&speed=" + EK.connectionSpeed)
                }, 1E4));
                1 == cM && (aM(), !zK && window.google.isr.Hover && window.google.isr.Hover.loadDataForScreen(0));
                var a = zK ? window.google.isr.layout.getNumPages() : bM.length;
                cM >= a ? (window.google.stb.csi.updateRowsInfo && window.google.stb.csi.updateRowsInfo(),
                    _.oK || (window.document.getElementById("rg").style.height = "auto"), BL()) : (oxa(cM++), window.setTimeout(sM, 40))
            } else window.setTimeout(sM, 100)
        };
        var oxa = function (a) {
            zK || (1 > a || tM[a]) || (bM[a].className = "rg_ctlv", tM[a] = !0)
        };
        _.Bxa = function () {
            AL();
            jM = 0;
            var a = window.document.getElementById("rg");
            if (a && 0 != a.childNodes.length) {
                wxa = 128 < (window.google.stb.csi.getBandwidth ? window.google.stb.csi.getBandwidth() : 0) ? 2 : 1;
                if (bM.length || zK && window.google.isr.layout.getNumPages()) zK || (iM[0] = !0, eM[0] = !0), uK(4, xxa), cM = 1, zK || sM();
                BL();
                uK(5, function () {
                    aM();
                    gM = !1;
                    BL()
                })
            }
        };
        var AL = function () {
            aM();
            iM = [];
            eM = [];
            fM = [];
            zK || (iM[0] = !0, eM[0] = !0);
            gM = !1;
            tM = [];
            window.clearTimeout(_.pM)
        };
        var mxa = function (a) {
            var b = window.google.isr.layout.getNumPages();
            return a < b - 1 ? !0 : a == b - 1 ? QL() : !1
        };
        var zL = function () {
            var a = [],
                b = SK(),
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
        _.BK = !1;
        _.LK = null;
        OK = 0;
        QK = 0;
        _.wL = -1;
        _.vL = 0;
        Swa = 0;
        Twa = 0;
        _.oL = 0;
        _.kL = !1;
        pL = {};
        _.KK = (_.tc.Oq || _.tc.Fq) && _.sc.Yr;
        CK = !1;
        DK = !1;
        _.iL.UB = "";
        _.XK = !1;
        _.YK = !1;
        _.$K = !1;
        _.aL = !1;
        _.UK = !1;
        FK = !1;
        _.Lwa = [];
        _.Mwa = [];
        Cwa = "auto";
        Nwa = [];
        _.VK = !1;
        EK = {};
        _.ZK = -1;
        yK = "rg_li";
        AK = "li";
        HK = !0;
        HL = [];
        LL = 300;
        IL = [];
        _.JL = -1;
        ML = 1;
        exa = !1;
        RL = !1;
        TL = "";
        _.VL = -1;
        GL = [];
        _.PL = !1;
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
        gM = !1;
        eM = [];
        uxa = !1;
        vxa = !0;
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
        (0, _.za)("google.isr.gsd", SK, void 0);
        (0, _.za)("google.isr.st", mL, void 0);
        (0, _.za)("google.isr.sor", rL, void 0);
        (0, _.za)("google.isr.imgevent", function (a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                c.page && (c = c.page, XL[c] && (YL[c] = !0))
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
                DL(!1);
                a()
            }) : KL.push(a)
        }, void 0);
        (0, _.za)("google.isr.aacl", QL, void 0);
        (0, _.za)("google.isr.frs", function () {
            gL()
        }, void 0);

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
            _.oK && (0 <= _.JL && (_.VL = _.JL, _.JL = -1), _.PL = !0, _.lL = 0);
            window.clearTimeout(_.ZK); - 1 != _.wL && (window.clearTimeout(_.wL), _.wL = -1);
            for (var a = (0, _.v)("topstuff"), b = 0; a && b < a.childNodes.length; ++b)(0, _.Pe)(a.childNodes[b], "display", "none");
            if (a = window.document.getElementById("rg")) b = window.document.createElement("div"), b.id = a.id, a.parentNode.replaceChild(b, a);
            _.oL = 0;
            _.kL = !1;
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
            (_.tc.Eq || _.tc.xt) && (0, _.mD)(_.MK);
            if (_.VK)
                for (_.UK = !1; a = _.Mwa.pop();)(0, _.Pf)(a[0], a[1]);
            _.KK || _.BK || (window.document[_.tc.qw ? "onkeypress" : "onkeydown"] = _.LK);
            window.google.stb.csi.reinitialize();
            _.XK = _.aL = _.$K = _.YK = !1;
            (0, _.af)(window, "resize", _.tK);
            for (var c in _.vK) "object" == typeof _.vK[c] && delete _.vK[c]
        };
        (0, _.Vg)(_.x.G(), "jstr");
        (0, _.za)("google.isr.jsr.strobe_jesr_dispose_", KAa, void 0);
        (0, _.vf)("jstr", {
            init: function (a) {
                var b = window.document.getElementById("cnt");
                if (b) {
                    var c = b.parentNode;
                    c && ("tphdr" == c.id && c.parentNode) && c.parentNode.appendChild(b)
                }(0, _.xwa)(!0);
                (0, _.zwa)(a);
                (0, _.lxa)();
                (0, _.Bxa)()
            },
            dispose: KAa
        });

        (0, _.Sg)(_.x.G(), "jstr");
        (0, _.Wg)(_.x.G(), "jstr");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.PC = function (a, b, c, d, e) {
            a = "kpbv:" + a.getAttribute("data-ved") + "&ei=" + window.google.getEI(a);
            b && b.hasAttribute("data-ved") && (a += "&ved=" + b.getAttribute("data-ved"));
            c && (a += "&comm=" + (0, window.encodeURIComponent)(c));
            d && (a += "&urlref=" + (0, window.encodeURIComponent)(d));
            window.google.log(e || "kr", a)
        };
        _.QC = function (a) {
            a in _.RC || (_.RC[a] = 1);
            _.SC[a] = !1
        };
        _.nna = function (a) {
            a in _.RC && (delete _.RC[a], delete _.SC[a])
        };
        _.TC = function (a, b) {
            a in _.RC && (_.SC[a] = b)
        };
        _.UC = function (a) {
            (0, _.VC)(1, a || "kr")
        };
        _.WC = function (a, b, c, d, e) {
            e = e || "kr";
            e in _.XC[0] || (_.XC[0][e] = {}, _.XC[1][e] = {}, _.XC[2][e] = {});
            _.XC[0][e][a] = b;
            _.XC[1][e][a] = c;
            _.XC[2][e][a] = d
        };
        _.ona = function (a, b) {
            var c = b || "kr";
            c in _.XC[0] && a in _.XC[0][c] && (_.XC[0][c][a] = null, _.XC[1][c][a] = null, _.XC[2][c][a] = null)
        };
        _.VC = function (a, b) {
            if (!_.YC[b] || _.YC[b] != a) {
                var c = _.XC[a];
                if (c[b]) {
                    for (var d in c[b])
                        if (c[b][d]) c[b][d]();
                        (0, _.pna)(a, b);
                    _.YC[b] = a
                }
            }
        };
        _.pna = function (a, b) {
            switch (a) {
            case 0:
                window.google.log(b, "toBase");
                break;
            case 2:
                window.google.log(b, "toReporting")
            }
        };
        (0, _.Vg)(_.x.G(), "sy85");
        _.YC = {};
        _.XC = [{}, {}, {}];
        _.RC = {};
        _.SC = {};
        (0, _.Sg)(_.x.G(), "sy85");
        (0, _.Wg)(_.x.G(), "sy85");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var QBa = function (a, b, c) {
            var d = _.XC[a];
            if (d[b]) {
                if (d[b][c]) d[b][c]();
                _.YC[b] && _.YC[b] == a || ((0, _.pna)(a, b), _.YC[b] = a)
            }
        };
        var RBa = function (a) {
            a = a || "kr";
            for (var b in _.RC)(0, _.ah)(b, (0, _.ab)(QBa, 2, a, b))
        };
        var SBa = function () {
            2 == _.YC.kr ? (0, _.VC)(0, "kr") : RBa()
        };
        _.yR = function () {
            (0, _.VC)(0, "kr");
            (0, _.ji)("kno", {
                repr: SBa
            })
        };
        _.zR = function (a) {
            AR.push(a);
            return AR.length - 1
        };
        _.BR = function (a, b) {
            CR[a] = b;
            var c = ["1"],
                c = c.concat(CR),
                c = (0, _.lf)(c);
            (0, _.ul)("psh", (0, window.encodeURIComponent)(c), !0)
        };
        var TBa = function (a) {
            if (!a) return -1;
            var b = (0, _.Qd)(a, "kno-ft");
            if (!b) return -1;
            for (var b = (0, _.$c)("kno-f", b), c = 0; c < b.length; c++)
                if (b[c] == a) return c;
            return -1
        };
        var UBa = function (a) {
            var b = a.parentNode,
                c = b.parentNode;
            b.removeChild(a);
            b.className = "kno-fvo";
            (0, _.Hi)(a);
            a = TBa(c); - 1 != a && (c = (0, _.Qd)(c, "knop")) && (c = c.getAttribute("data-ved"), b = DR[c] || [], b.push(a), DR[c] = b, (0, _.BR)(VBa, DR))
        };
        var WBa = function () {
            var a = (0, _.ad)("kno-ibrg");
            if (a) {
                var b = (0, _.$c)("img-brk", a);
                if (b) {
                    var c = (0, _.ad)("img-brk-ls", a);
                    if (c) return a = (0, _.Pc)(b, function (a) {
                        return a != c
                    }), [c, a]
                }
            }
        };
        _.XBa = function () {
            var a = WBa();
            if (a && a[0])
                for (var b = (0, _.Yc)("li", void 0, a[0]), a = a[1], c = b.length, d = a.length, e = 0; e < c; e++) {
                    var f = b[e],
                        g;
                    n: {
                        if ((g = (0, _.jj)(f)) && 0 != g.length)
                            for (var h = 0; h < g.length; h++) {
                                var k = g[h];
                                if ((0, _.gb)(k, "iukp")) {
                                    g = k;
                                    break n
                                }
                            }
                        g = null
                    }
                    h = (0, _.Yc)("a", void 0, f)[0];
                    f = (0, _.ad)("krable", f);
                    h = h && h.href;
                    for (k = 0; k < d; k++) {
                        var l = (0, _.ad)(g, a[k]);
                        if (l) {
                            var n = (0, _.Yc)("a", void 0, l)[0];
                            n && (h && (n.href = h), (l = (0, _.ad)("krable", l)) && l.setAttribute("data-ved", f.getAttribute("data-ved")))
                        }
                    }
                }
        };
        _.ER = function () {
            (0, _.Tf)(window.document.querySelector(".kno-asl"), "kno-asl-more")
        };
        _.YBa = function (a) {
            FR = a;
            DR = {};
            (0, _.QC)("rk");
            (0, _.XBa)();
            if (null != FR && !(1 > FR.length)) {
                a = FR[0].querySelector(".kno-fb");
                var b = window.document.querySelector(".klfb"),
                    c = window.document.querySelector(".answer_slist_collection");
                null != a && (null == b && null == c) && (a.style.display = "")
            }
            null !== FR && (0 < FR.length && (0, _.Vf)(FR[0], "kno-fb-on")) && RBa();
            (0, _.ji)("kp", {
                sm: UBa
            });
            (0, _.ji)("kp", {
                rm: _.ER
            });
            (0, _.yR)()
        };
        (0, _.Vg)(_.x.G(), "sy118");
        var AR = [],
            CR = [];
        (0, _.sl)("psh", function (a, b) {
                if (b && a) {
                    var c;
                    n: {
                        c = a;
                        try {
                            c = (0, window.decodeURIComponent)(c);
                            var d = (0, _.jf)(c) || []
                        } catch (e) {
                            c = !1;
                            break n
                        }
                        c = "1" == d[0]
                    }
                    c && (a = (0, window.decodeURIComponent)(a));
                    CR = (0, _.jf)(a) || [];
                    c && CR.shift();
                    for (var f in CR)
                        if (CR[f]) AR[f](CR[f])
                }
            });
        var DR, FR, VBa = (0, _.zR)(function (a) {
                var b = window.document.querySelectorAll(".knop");
                if (b)
                    for (var c = 0; c < b.length; ++c) {
                        var d = b[c],
                            e = d.getAttribute("data-ved"),
                            e = a[e] || [];
                        if ((d = d.querySelector(".kno-ft")) && (d = d.querySelectorAll(".kno-f")) && !(1 > d.length))
                            for (var f = 0; f < e.length; f++) {
                                var g = e[f];
                                g >= d.length || (g = d[g].querySelector(".kno-fm")) && UBa(g)
                            }
                    }
            });

        (0, _.Sg)(_.x.G(), "sy118");
        (0, _.Wg)(_.x.G(), "sy118");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var GR = function (a, b) {
            return Math.round(a * b) + "px"
        };
        var ZBa = function (a) {
            for (var b = 0; b < a.length; ++b) {
                var c = a[b],
                    d = $Ba(HR[b]),
                    e = b,
                    f = IR ? d : d.querySelector("div"),
                    g = f.querySelector("img");
                f.style.height = c.eW;
                f.style.width = c.fW;
                g.style.height = c.FQ;
                g.style.width = c.GQ;
                IR ? (d = f.querySelector("a"), d.style.height = c.FQ, d.style.width = c.GQ) : (g.style.marginLeft = c.BY, g.style.marginRight = c.CY, d.style.width = c.EU);
                JR[e] = c;
                (0, _.BR)(KR, JR)
            }
        };
        var $Ba = function (a) {
            return IR ? a.querySelector(".img-kc-m") : a.querySelector(".kno-bigt")
        };
        var aCa = function (a) {
            var b = LR[a];
            LR[a] = !b;
            b && window.google.log("kp", "expand");
            var c = HR[a],
                d = HR[a];
            null != d && (b ? (0, _.Sf)(d, "kno-exp") : (0, _.Tf)(d, "kno-exp"), MR[a] = d.className, (0, _.BR)(NR, MR));
            c = $Ba(c);
            if (b && c && OR) {
                var e = OR / (0, _.lg)(c);
                if (!(0, _.Vf)(c, "kno-fixt") && 1 != e) {
                    b = IR ? c : c.querySelector("div");
                    d = b.querySelector("img");
                    if (IR) {
                        var e = b.querySelector("a"),
                            f = PR / (0, _.kg)(b),
                            g = OR / (0, _.lg)(b);
                        b.style.height = PR + "px";
                        b.style.width = OR + "px";
                        d.style.height = GR((0, _.kg)(d), f);
                        d.style.width = GR((0, _.lg)(d), g);
                        e.style.height =
                            d.style.height;
                        e.style.width = d.style.width
                    } else b.style.height = GR((0, _.kg)(b), e), b.style.width = GR((0, _.lg)(b), e), d.style.height = GR((0, _.kg)(d), e), d.style.width = GR((0, _.lg)(d), e), d.style.marginLeft = GR(+(0, _.jg)(d, "margin-left"), e), d.style.marginRight = GR(+(0, _.jg)(d, "margin-right"), e), c.style.width = GR((0, _.lg)(c), e);
                    JR[a] = {
                        EU: c.style.width,
                        eW: b.style.height,
                        fW: b.style.width,
                        FQ: d.style.height,
                        GQ: d.style.width,
                        BY: d.style.marginLeft,
                        CY: d.style.marginRight
                    };
                    (0, _.BR)(KR, JR)
                }
            }
            return !1
        };
        var bCa = function (a) {
            for (var b = [], c = window.document.querySelectorAll(".knop"), d = 0; d < c.length && d < a.length; ++d) {
                var e = c[d];
                null != a[d] && (e.className = a[d]);
                b[d] = e.className
            }
            MR = b;
            (0, _.BR)(NR, MR)
        };
        var cCa = function (a) {
            this.B = a.querySelector(".scrt-ts");
            this.D = a.querySelector(".scrt-bs");
            this.A = a.querySelector(".scrt-ic");
            this.B && (this.D && this.A) && (a = [this.A, "scroll", (0, _.$a)(this.H, this)], _.$e.apply(null, a), QR.push(a), this.H())
        };
        var RR = function (a, b) {
            for (var c = [], d = 0; d < a; ++d) c.push(b);
            return c
        };
        var PR, IR, KR, JR, SR, NR, MR, HR, LR, TR, OR;
        (0, _.Vg)(_.x.G(), "kp");
        var QR = [];
        cCa.prototype.H = function () {
            var a = (0, _.kg)(this.B);
            this.B.style.opacity = this.A.scrollTop / a;
            this.D.style.opacity = (this.A.scrollHeight - this.A.scrollTop - (0, _.kg)(this.A)) / a
        };
        (0, _.vf)("kp", {
            init: function (a) {
                OR = a.expanded_thumbnail_width;
                PR = a.expanded_thumbnail_height;
                IR = a.use_top_media_styles;
                a = (HR = window.document.querySelectorAll(".knop")) ? HR.length : 0;
                LR = RR(a, !1);
                JR = RR(a, null);
                TR = RR(a, null);
                SR = RR(a, null);
                MR = RR(a, "");
                if (HR && 0 < HR.length)
                    for ((0, _.YBa)(HR), a = 0; a < HR.length; a++) {
                        var b = HR[a],
                            c = a;
                        MR[c] = b.className;
                        LR[c] = (0, _.Vf)(b, "kno-sm");
                        b = b.querySelector(".kno-ec");
                        if (TR[c] = b)
                            if (b = b.querySelector(".kno-bt")) {
                                var d = (0, _.ab)(aCa, c);
                                SR[c] = d;
                                (0, _.$e)(b, "click", d)
                            }
                    } else(0, _.yR)();
                NR = (0, _.zR)(bCa);
                KR = (0, _.zR)(ZBa);
                c = window.document.querySelectorAll(".scrt");
                for (a = 0; b = c[a++];) new cCa(b)
            },
            dispose: function () {
                if (null != TR)
                    for (var a = 0; a < TR.length; a++) {
                        var b = TR[a];
                        if (null != b && (b = b.querySelector(".kno-bt"))) {
                            var c = SR[a];
                            null != c && (0, _.af)(b, "click", c)
                        }
                    }
                if (null != QR)
                    for (a = 0; a < QR.length; a++) b = QR[a], null != b && _.af.apply(null, b)
            }
        });

        (0, _.Sg)(_.x.G(), "kp");
        (0, _.Wg)(_.x.G(), "kp");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Ru = function (a) {
            this.a = a.a;
            this.A = a.bb;
            this.id = a.id;
            var b = {};
            if ("c" in a) try {
                b = eval("(0," + a.c + ")")
            } catch (c) {}
            if (b && b["9"]) {
                if (window.google.LU.fmap_xc) {
                    a = window.google.LU.fmap_xc[b["9"].index];
                    for (var d in a) b[d] = a[d]
                }
                "r" == b["9"].index.substr(0, 1) ? (this.isMarker = !0, d = b["9"].index.substr(1), this.markerElement = window.document.querySelector(".lumi" + d)) : b.isMarker && (this.isMarker = !0);
                if ("bluepin" == b["9"].index.substr(0, 7)) {
                    d = b["9"].index.substr(7);
                    d = window.document.querySelectorAll(".luadpini" + d);
                    a = 0;
                    for (var e; e = d[a]; a++) 0 < e.offsetHeight && (this.markerElement = e)
                }
            }
            this.extendedContent = b
        };
        var Su = function (a) {
            return _.sc.Hc ? window.document.documentElement["client" + a] : window["inner" + a]
        };
        var oga = function () {
            if (_.Tu)
                for (var a in Uu) _.Tu.style[a] = Uu[a]
        };
        var pga = function () {
            var a = (0, _.v)("lu_pinned_rhs-placeholder");
            a && a.parentNode.removeChild(a)
        };
        _.Vu = function () {
            if (Wu) {
                var a = window.document.body.scrollTop + window.document.documentElement.scrollTop;
                if (!Xu && a >= Yu) {
                    if (_.Tu && "none" != _.Tu.style.display) {
                        Zu.ol = (0, _.re)(_.Tu);
                        Zu.iw = (0, _.lg)(_.Tu);
                        Zu.f0 = _.Tu.offsetWidth;
                        Zu.uZ = _.Tu.offsetHeight;
                        for (var a = 0, b; b = qga[a++];) Uu[b] = _.Tu.style[b];
                        _.Tu && ("absolute" != (0, _.jg)(_.Tu, "position", !0) && (a = window.document.createElement("div"), a.id = _.Tu.id + "-placeholder", _.sc.Hc ? a.style.styleFloat = (0, _.jg)(_.Tu, "styleFloat", !0) : a.style.cssFloat = (0, _.jg)(_.Tu, "float", !0), a.style.width = Zu.f0 + "px", a.style.height = Zu.uZ + "px", a.style.marginTop = (0, _.jg)(_.Tu, "margin-top", !0), a.style.marginBottom = (0, _.jg)(_.Tu, "margin-bottom", !0), a.style.marginLeft = (0, _.jg)(_.Tu, "margin-left", !0), a.style.marginRight = (0, _.jg)(_.Tu, "margin-right", !0), _.Tu.parentNode.insertBefore(a, _.Tu.nextSibling)), _.Tu.style.margin = 0, _.Tu.style.zIndex = 101, _.Tu.style.width = Zu.iw + "px", _.Tu.style.top = 0, _.Tu.style.position = "fixed", _.Tu.style.paddingTop = $u + "px", _.Tu.style.backgroundColor = "#fff");
                        Xu = !0
                    }
                } else Xu &&
                    a < Yu && (pga(), oga(), Xu = !1);
                var a = window.pageXOffset || window.document.body.scrollLeft || window.document.documentElement.scrollLeft,
                    c = (b = (0, _.ig)()) ? "marginRight" : "marginLeft";
                b && (a = Math.abs(a));
                _.Tu && (_.Tu.style[c] = Xu ? -a + "px" : "0")
            }
        };
        var rga = function () {
            if (!_.Tu || !(0, _.v)("rhs_block")) return !1;
            var a = (0, _.v)("mbEnd");
            if (!a) return !1;
            var b = a.getElementsByTagName("li");
            if (!b || 0 == b.length) return !1;
            var a = Su("Height"),
                c = (0, _.kg)(_.Tu),
                b = 2 * (b[0].offsetHeight + 12) + c + (0, _.se)(_.Tu);
            return a < b
        };
        _.av = function () {
            if (!_.bv)
                if (Xu && (pga(), oga(), Xu = !1), rga()) Wu = !1;
                else {
                    Wu = !0;
                    var a = (0, _.v)("lu_pinned_rhs");
                    Yu = (0, _.se)(a);
                    Yu -= $u;
                    (0, _.Vu)()
                }
        };
        var sga = function () {
            _.Tu && (this.m = (0, _.kg)(_.Tu), this.h = Su("Height"), this.w = Su("Width"))
        };
        var tga = function () {
            if (_.Tu) {
                var a = new sga;
                if (_.sc.Hc ? a.m != cv.m || a.h != cv.h || a.w != cv.w : a.h != cv.h)(0, _.av)(), cv = a
            }
        };
        var uga = function () {
            var a = window.document.getElementById("hdtb");
            a && ($u = (0, _.kg)(a) + 6, (0, _.av)())
        };
        _.vga = function () {
            if (_.$e && _.kg) {
                _.Tu = (0, _.v)("lu_pinned_rhs");
                var a = window.document.getElementById("hdtb");
                a && "fixed" == (0, _.jg)(a, "position", !0) && (0, _.Nf)(101, uga);
                Uu = {};
                Zu = {};
                cv = new sga;
                (0, _.$e)(window, "scroll", _.Vu);
                _.sc.Hc ? _.dv = window.setInterval(tga, 200) : (0, _.$e)(window, "resize", _.av);
                (0, _.av)()
            } else window.setTimeout(function () {
                (0, _.vga)()
            }, 100)
        };
        _.wga = function (a) {
            this.D = 0;
            this.A = [];
            this.H = !1;
            this.Hj = window.document.createElement("div");
            var b = this.Hj.style;
            b.position = "fixed";
            b.WebkitTransitionProperty = "left, top";
            b.MozTransitionDuration = ".1s, .1s";
            b.MozTransitionProperty = "left, top";
            b.WebkitTransitionDuration = ".1s, .1s";
            b.zIndex = 102;
            this.B = window.document.createElement("div");
            this.B.className = "lu_map_tooltip";
            b = this.B.style;
            b.position = "absolute";
            var c = " " + (!_.sc.Hc || (0, _.xc)("9") ? "rgba(0,0,0,0.2)" : "#999999");
            b.border = "1px solid" + c;
            b.D = "2px";
            b.padding = "6px 12px";
            b.lineHeight = "1.2";
            b.fontSize = "85%";
            b.backgroundColor = "white";
            b.whiteSpace = "nowrap";
            b.A = "0 2px 4px" + c;
            b.WebkitBoxShadow = "0 2px 4px" + c;
            b.eb = "0 2px 4px" + c;
            a ? b.right = 0 : b.left = 0;
            this.Hj.appendChild(this.B);
            (0, _.ev)(this);
            (0, _.Me)(this.Hj)
        };
        _.ev = function (a) {
            a.Hj.style.display = "none"
        };
        (0, _.Vg)(_.x.G(), "sy50");
        _.q = _.Ru.prototype;
        _.q.isMarker = !1;
        _.q.height = function () {
            return this.A[3] - this.A[1] + 1
        };
        _.q.width = function () {
            return this.A[2] - this.A[0] + 1
        };
        _.q.top = function () {
            return this.a[1] - this.height() + 1
        };
        _.q.left = function () {
            return this.a[0] + this.A[0] + 1
        };
        _.q.contains = function (a, b) {
            var c = a - this.a[0],
                d = b - this.a[1];
            return c >= this.A[0] && d >= this.A[1] && c <= this.A[2] && d <= this.A[3]
        };
        _.Ru.prototype.extendedContent = _.Ru.prototype.extendedContent;
        (0, _.za)("google.LU.Feature", _.Ru, void 0);
        var Zu;
        var Uu;
        var qga;
        var Wu;
        var $u;
        var cv;
        var Xu;
        var Yu;
        $u = 6;
        Wu = !0;
        qga = "left margin paddingTop position top width zIndex".split(" ");
        Uu = {};
        Zu = {};
        _.bv = !1;
        (0, _.za)("google.LU.hideLocalRhsContent", function () {
            _.Tu && (_.Tu.style.display = "none", _.bv = !0)
        }, void 0);
        (0, _.za)("google.LU.showLocalRhsContent", function () {
            _.Tu && (_.Tu.style.display = "block", _.bv = !1, (0, _.Vu)())
        }, void 0);
        (0, _.za)("google.LU.Tooltip", _.wga, void 0);
        (0, _.Sg)(_.x.G(), "sy50");
        (0, _.Wg)(_.x.G(), "sy50");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var xga = function (a) {
            a.B && ((0, _.af)(a.H, "mouseover", a.B), (0, _.af)(a.H, "mousemove", a.B), a.B = null)
        };
        var yga = function (a) {
            a.L = (0, _.Ve)();
            a.D = window.document.createElement("SCRIPT");
            a.D.src = a.M;
            (0, _.Me)(a.D)
        };
        var zga = function (a, b) {
            for (var c = 0, d; d = b[c++];)
                if (d == a) return !0;
            return !1
        };
        var fv = function (a) {
            return a.extendedContent && a.extendedContent["1"]
        };
        var Aga = function (a) {
            a.D && (a.D.parentNode.removeChild(a.D), delete a.D)
        };
        var Bga = function (a) {
            a.B = function () {
                xga(a);
                a.A || yga(a)
            };
            (0, _.$e)(a.H, "mouseover", a.B);
            (0, _.$e)(a.H, "mousemove", a.B)
        };
        var Cga = function (a, b) {
            if (b.src != a.J) {
                var c = b.cloneNode(!0);
                (0, _.Pe)(c, "position", "absolute");
                c.onload = function () {
                    (0, _.vd)(c, b);
                    (0, _.Te)(100, [
                        [c, "opacity", 0, 1, null, ""]
                    ], function () {
                        b.src = a.J;
                        (0, _.yd)(c)
                    })
                };
                c.src = a.J
            }
        };
        var Dga = function (a) {
            this.A = null;
            this.B = [];
            this.H = [];
            this.D = !1;
            var b;
            if (a) {
                b = 0;
                for (var c; b < a.length; ++b)
                    if (c = a[b].features)
                        for (var d = 0, e; e = c[d]; ++d) e = new _.Ru(e), this.B.push(e), e.extendedContent["9"] && (this.H[e.id] = e);
                b = 0 < this.B.length
            } else b = !1;
            b && (this.A = a[0].rectangle) && 4 == this.A.length && (this.D = !0)
        };
        var Ega = function (a) {
            for (var b = [], c = 0, d; d = a[c++];) d.token && b.push(d.token);
            return b
        };
        var Fga = function (a) {
            for (var b = [], c = 0, d; d = a[c++];) d.token && b.push(d.id);
            return b.join("_")
        };
        var Gga = function (a, b) {
            for (var c = !1, d = 0, e; e = a.A[d];) zga(e, b) ? d++ : (a.A.splice(d, 1), c = !0);
            for (var d = 0, f; f = b[d++];)
                if (!zga(f, a.A)) {
                    e = a;
                    var g = fv(f);
                    if (g) {
                        if ("undefined" == typeof g.star_rating) e.A.push(f);
                        else {
                            for (var h = void 0, h = 0; h < e.A.length && (!(g = fv(e.A[h])) || "undefined" != typeof g.star_rating); ++h);
                            e.A.splice(h, 0, f)
                        }
                        e = !0
                    } else e = !1;
                    e && (c = !0)
                }
            return c
        };
        var gv = function (a, b, c, d, e, f) {
            this.L = 0;
            this.A = null;
            this.H = f;
            e = e.join(",");
            this.J = a + e + c;
            var g = "loadFeaturemap_" + Math.floor((0, _.Ve)() / 100) % 864 + "_" + d,
                h = this;
            (0, _.cb)("google.LU." + g, function (a) {
                    delete window.google.LU[g];
                    Aga(h);
                    h.A = new Dga(a);
                    window.google.log("lu_featuremap", (0, _.Ve)() - h.L + "")
                });
            this.M = [b, e, c, "&callback=google.LU.", g].join("")
        };
        var Hga = function (a) {
            var b = Ega(a.D),
                c = Fga(a.D),
                d = a.va[c];
            d || (d = new gv(a.Md, a.vc, a.Za, c, b, null), a.va[c] = d);
            d != a.B && (a.B.xa(), d.P(a.A), a.B = d)
        };
        var Iga = function (a, b) {
            if ("IMG" == b.tagName) return b.src;
            var c = /url\(([\'\"]?)(.*)\1\)/.exec(b.style.background);
            return !c || 3 > c.length ? "" : c[2]
        };
        var Jga = function (a, b) {
            for (var c = [], d = 0, e; e = b[d++];) e.isMarker && c.push(e);
            return 0 < c.length && c || b
        };
        var Kga = function (a, b) {
            for (var c = a.T, d = 0, e; e = a.D[d++];)(e = (e = e.featuresCallback) && e(b)) && (c = e);
            return c
        };
        var Lga = function (a, b, c) {
            Gga(a, b) && (a.D++, (0, window.setTimeout)(function () {
                a.D--;
                if (0 == a.D)
                    if (a.A.length) {
                        for (var b = [], e = 0, f; 5 > e && (f = a.A[e++]);) {
                            var g = fv(f);
                            if (g.title) {
                                1 != a.A.length && b.push('<div style="min-height: 16px">');
                                b.push("<b>", g.title, "</b> ");
                                var h = g.star_rating,
                                    g = g.review_count,
                                    k = b;
                                if ("undefined" != typeof h && "undefined" != typeof g) {
                                    k.push('<div style="display: inline-block; vertical-align: -2px">');
                                    for (var l = 0; 5 > l; ++l) {
                                        var n;
                                        0.75 < h ? (n = "rsw-starred", h -= 1) : 0.25 < h ? (n = "rsw-half-starred", h -=
                                            0.5) : n = "rsw-unstarred";
                                        k.push('<div style="float: none; display: inline-block" class="', n, '"></div>')
                                    }
                                    k.push("</div>");
                                    k.push("<span dir=", (0, _.ig)() ? "dir=rtl" : "", "> (", g, ") </span>")
                                }
                                1 != a.A.length && b.push("</div>")
                            }
                        }
                        1 == a.A.length && (a.H ? (e = a.A[0], (e = (e = e.extendedContent && e.extendedContent["14"]) && e.known_for_terms) && 0 != e.length && (b.push('<div style="color: #222; min-width: 150px;', 'white-space: normal; margin-top: 8px">'), b.push(e.join(" \u00b7 ")), b.push("</div>"))) : (e = (f = fv(a.A[0])) && f.snippet,
                            f = f && f.snippet_attribution, e && f && (b.push('<div style="min-width: 150px; white-space: normal">', e, "</div>"), b.push('<div style="color: #666">', f, "</div>"))));
                        a.B.innerHTML = b.join("");
                        a.Hj.style.left = c.x + "px";
                        a.Hj.style.top = c.y + "px";
                        a.Hj.style.display = ""
                    } else(0, _.ev)(a)
            }, 200))
        };
        var Mga = function (a, b, c, d) {
            var e = 0,
                f = !1,
                g = null;
            return function () {
                var h = (0, _.Ve)();
                f ? g = Array.prototype.slice.call(arguments, 0) : h - e >= c ? (e = h, b.apply(a, arguments)) : d && (h = c - (h - e), f = !0, g = Array.prototype.slice.call(arguments, 0), (0, window.setTimeout)(function () {
                    f = !1;
                    e = (0, _.Ve)();
                    b.apply(a, g)
                }, h))
            }
        };
        var hv = function (a) {
            this.M = a;
            this.D = [];
            this.va = {};
            this.Q = 0;
            this.L = this.ca = null;
            this.V = this.Da = !1;
            this.$ = null;
            if (this.A = (0, _.v)("lu_map")) {
                for (this.J = this.A; this.J && "A" != this.J.tagName;) this.J = this.J.parentNode;
                if (this.M.SO && ((0, _.v)("lu_pinned_rhs"), this.Wa = (a = (0, _.v)("center_col")) && a.parentNode || (0, _.v)("images-grid"), this.J && this.Wa && (this.T = this.J.href, this.Gb = -1 != this.T.search(/&iwloc=|&cid=0,0,/), a = Iga(this, this.A)))) {
                    var b = a.indexOf(",") + 1;
                    this.Md = a.substring(0, b);
                    var c = a.indexOf("data=") + 5;
                    this.vc =
                        a.substring(0, c) + this.M.SO + ",";
                    c = a.indexOf("&");
                    this.Za = -1 == c ? "" : a.substring(c);
                    a = a.substring(b).split("&")[0].split(",")[0];
                    this.Q = 0;
                    this.Ma = {
                        id: this.Q++,
                        token: a,
                        featuresCallback: null
                    };
                    this.Uc = {
                        id: this.Q++,
                        featuresCallback: null
                    };
                    this.Re = {
                        id: this.Q++,
                        featuresCallback: null
                    };
                    this.M.WM || (this.L = new _.wga(!(0, _.ig)()), this.L.H = this.M.WY);
                    this.H = {
                        x: 0,
                        y: 0
                    };
                    var d = this;
                    this.$ = Mga(null, function () {
                            if (d.B && d.B.A && d.B.A.D) {
                                d.xh = d.A.offsetHeight;
                                var a;
                                if (_.sc.Hc) {
                                    a = d.A.getBoundingClientRect();
                                    var b = d.A.ownerDocument;
                                    a.left -= b.documentElement.clientLeft + b.body.clientLeft;
                                    a.top -= b.documentElement.clientTop + b.body.clientTop;
                                    a = {
                                        x: d.H.x - a.left,
                                        y: d.H.y - a.top
                                    }
                                } else a = window.document.body.scrollTop + window.document.documentElement.scrollTop, a = {
                                    x: d.H.x + (window.document.body.scrollLeft + window.document.documentElement.scrollLeft) - (0, _.re)(d.A),
                                    y: d.H.y + a - (0, _.se)(d.A)
                                };
                                var c, b = (d.B.A.A[3] - d.B.A.A[1]) / d.xh;
                                c = {
                                    x: a.x * b,
                                    y: a.y * b
                                };
                                a = d.B.A;
                                b = c.x;
                                c = c.y;
                                for (var h = [], k = 0, l; l = a.B[k]; ++k) l.contains(b, c) && h.push(l);
                                d.J.href = Kga(d, h)
                            }
                        },
                        100, !0);
                    this.Ma.featuresCallback = function (a) {
                        n: {
                            a = Jga(d, a);
                            for (var b = 0, c; c = a[b++];)
                                if ("0" == c.id) {
                                    a = null;
                                    break n
                                }
                            d.M.WM || d.L.A.length && (a = d.L.A);
                            if (0 == a.length || d.Gb) a = d.T;
                            else {
                                for (var h = [], b = 0; c = a[b++];) h.push(c.id);
                                a = h.length ? d.T + "&iwloc=cids:" + h.join(",") : null
                            }
                        }
                        return a
                    };
                    this.Uc.featuresCallback = function (a) {
                        if (d.M.XU) {
                            for (var b = null, c = 0, h; h = a[c++];)
                                if (h.markerElement) {
                                    b = h.markerElement;
                                    break
                                }
                            d.ca != b && (null === d.ca || (0, _.Tf)(d.ca, "luhovm"), null === b || (0, _.Sf)(b, "luhovm"), d.ca = b)
                        }
                    };
                    this.Re.featuresCallback =
                        function (a) {
                            if (!d.M.WM) {
                                a = Jga(d, a);
                                var b = {
                                    x: 6 * ((0, _.ig)() ? 1 : -1),
                                    y: 12
                                };
                                Lga(d.L, a, {
                                    x: d.H.x + b.x,
                                    y: d.H.y + b.y
                                })
                            }
                    };
                    this.D = [this.Uc, this.Re, this.Ma];
                    this.Mi = this.D.length;
                    this.D = this.D.concat(this.M.dE);
                    a = Fga(this.D);
                    b = Ega(this.D);
                    this.B = new gv(this.Md, this.vc, this.Za, a, b, this.M.RO ? this.Wa : null);
                    this.Da = !! this.B;
                    this.va[a] = this.B;
                    this.B.P(this.A)
                }
            }
        };
        var Nga = function (a) {
            var b = null;
            null != a && (b = a.querySelector(".lupin") || a.querySelector(".lucir") || a.querySelector(".luadpin") || null);
            iv != b && (null === iv || (0, _.Tf)(iv, "luhovm"), null === b || (0, _.Sf)(b, "luhovm"), iv = b);
            jv()
        };
        var Oga = function (a) {
            for (var b = {}, c = 3; 5 >= c; c++)
                if (b[c] = a.querySelector(".rhsmap" + c + "col"), b[c]) b[c].column_count = c;
                else return null;
            return b
        };
        var Pga = function (a, b, c) {
            a = a.cloneNode(!0);
            var d;
            b.hasAttribute("data-mh") && (d = b.getAttribute("data-mh"));
            c = b.hasAttribute("data-mw") ? b.getAttribute("data-mw") : 88 * c - 16;
            var e = a.getElementsByTagName("IMG")[0];
            e.id = "";
            kv.ES || (e.width = c, void 0 !== d && (e.height = d));
            e.onload = function () {
                e.style.display = "block";
                delete e.onload
            };
            e.style.display = "none";
            var f = e.src.split("&")[0] + "&w=" + c;
            void 0 !== d && (f += "&h=" + d);
            e.src = f;
            kv.ES || (e.parentNode.style.width = c + "px", void 0 !== d && (e.parentNode.style.height = d + "px"));
            b.appendChild(a);
            return a
        };
        var Qga = function (a) {
            if (!a) return null;
            var b, c = 0,
                d;
            for (d in a)
                if (d = Number(d), 0 < a[d].offsetHeight) {
                    b = a[d];
                    c = d;
                    break
                }
            if (!b) return null;
            if (!b.firstChild) {
                var e;
                for (d in a)
                    if (d = Number(d), a[d].firstChild) {
                        e = a[d];
                        break
                    }
                Pga(e.firstChild, b, c)
            }
            return {
                element: b,
                gW: c
            }
        };
        var jv = function () {
            var a;
            a = (a = window.document.querySelector("#nycprv")) && 0 != a.offsetHeight ? !! Qga(Oga(a)) : !1;
            var b = Rga(),
                c = Sga();
            return a || b || c
        };
        var Rga = function () {
            var a = (0, _.v)("rhs_block");
            if (!a || 0 == a.offsetHeight) return !1;
            var b = Qga(Oga(a));
            if (!b) return !1;
            a = b.element;
            b = b.gW;
            if (lv == b && mv[lv]) return mv[lv].P(), !0;
            a = a.getElementsByTagName("IMG")[0];
            a.id || ((0, _.v)("lu_map").id = "", a.id = "lu_map");
            mv[lv] && mv[lv].xa();
            mv[b] || (mv[b] = new hv(kv));
            lv = b;
            mv[lv].P();
            return !0
        };
        var Sga = function () {
            for (var a = !1, b = 0; b < Tga.length; b++) {
                var c = (0, _.v)(Tga[b]);
                if (c) {
                    for (var a = !0, d = [], e, f = 3; 5 >= f; f++) {
                        var g = c.querySelector(".luib-" + f);
                        if (!g) return !1;
                        g = g.querySelector(".thumb");
                        if (!g) return !1;
                        d.push(g);
                        0 < g.offsetHeight && (e = g)
                    }
                    if (!e) return !1;
                    var g = (0, window.parseInt)(e.style.width, 10),
                        h = (0, window.parseInt)(e.style.height, 10),
                        f = e.querySelector("img");
                    if (!f || !f.src) {
                        for (var k, l, f = 0; f < d.length; f++) {
                            var n = d[f].querySelector("img");
                            if (n && n.src) {
                                k = (0, _.Ne)("div", d[f].innerHTML);
                                l = n;
                                break
                            }
                        }
                        if (!l) return !1;
                        d = k.querySelector("img");
                        f = "1" == c.getAttribute("data-crop");
                        f || (d.width = g, d.height = h, n = (0, _.Cs)(l.src), (0, _.As)(n, "w", (0, window.parseInt)(g, 10)), (0, _.As)(n, "h", (0, window.parseInt)(h, 10)), d.src = n.toString());
                        e.innerHTML = k.innerHTML;
                        f && (d = e.querySelector("img"), (0, _.Fe)(c) ? d.style.marginRight = (g - d.width) / 2 + "px" : d.style.marginLeft = (g - d.width) / 2 + "px", d.style.marginTop = (h - d.height) / 2 + "px")
                    }
                }
            }
            return a
        };
        _.nv = function (a) {
            var b = !1,
                c;
            for (c in mv) {
                if (!mv[Number(c)].addMapConfig(a)) return !1;
                b = !0
            }
            b && kv.dE.push(a);
            return b
        };
        _.Uga = function (a) {
            for (var b in mv) mv[Number(b)].deleteMapConfig(a);
            for (b = 0; b < kv.dE.length; ++b)
                if (kv.dE[b].id == a.id) {
                    kv.dE.splice(b, 1);
                    break
                }
        };
        gv.prototype.P = function (a) {
            Cga(this, a);
            this.A || (this.H ? Bga(this) : yga(this))
        };
        gv.prototype.xa = function () {
            Aga(this);
            xga(this)
        };
        hv.prototype.P = function () {
            if (this.A && !this.V && this.Da) {
                this.V = !0;
                var a = this.A,
                    b = this;
                a.B = function (a) {
                    a = a || window.event;
                    b.H.x = a.clientX;
                    b.H.y = a.clientY;
                    b.$()
                };
                (0, _.$e)(a, "mousemove", a.B);
                a.M = function () {
                    b.$()
                };
                (0, _.$e)(window, "scroll", a.M);
                a.H = function () {
                    b.H.x = b.H.y = 0;
                    (0, _.ev)(b.L)
                };
                (0, _.$e)(window, "pagehide", a.H);
                a.D = function () {
                    b.H.x = b.H.y = 0;
                    b.J.href = Kga(b, [])
                };
                (0, _.$e)(a, "mouseout", a.D)
            }
        };
        hv.prototype.xa = function () {
            if (this.A && this.V) {
                this.V = !1;
                var a = this.A;
                a.B && ((0, _.af)(a, "mousemove", a.B), delete a.B);
                a.M && ((0, _.af)(window, "scroll", a.M), delete a.M);
                a.H && ((0, _.af)(window, "pagehide", a.H), delete a.H);
                a.D && ((0, _.af)(a, "mouseout", a.D), delete a.D)
            }
        };
        hv.prototype.addMapConfig = function (a) {
            if (!this.Da) return !1;
            a.id || (a.id = this.Q++);
            this.D.push(a);
            Hga(this);
            return !0
        };
        hv.prototype.deleteMapConfig = function (a) {
            if (!(a.id < this.Mi))
                for (var b = 0; b < this.D.length; ++b)
                    if (this.D[b].id == a.id) {
                        this.D.splice(b, 1);
                        Hga(this);
                        break
                    }
        };
        (0, _.Vg)(_.x.G(), "sy52");
        var Tga = ["luibli", "luibbri"],
            mv = {}, lv = -1,
            ov = null,
            iv = null,
            kv = {};
        (0, _.vf)("lu", {
                init: function (a) {
                    "webhp" != window.google.sn && (0, _.v)("lu_map") && (kv = {
                        WM: a.no_tt,
                        XU: a.cm_hov,
                        dE: [],
                        RO: !0,
                        WY: a.tt_kft,
                        ES: a.tm,
                        SO: a.fm
                    }, (0, _.v)("lu_pinned_rhs") && (_.sc.Hc && 0 == (0, _.wc)("7", _.uc) || _.tc.Oq || (0, _.v)("aerhs") || (0, _.v)("pplicrhs") || (0, _.vga)()), jv() ? (ov = Mga(null, jv, 100, !0), (0, _.Nf)(60, ov)) : (mv[3] || (mv[3] = new hv(kv)), lv = 3, mv[3].P()), kv.RO = !1, (0, _.Nf)(59, Nga))
                },
                dispose: function () {
                    ov && ((0, _.Pf)(60, ov), ov = null);
                    (0, _.Pf)(59, Nga);
                    for (var a in mv)
                        if (mv[Number(a)]) {
                            var b = mv[Number(a)];
                            b.xa();
                            b.A = null;
                            b.J = null;
                            b.Wa = null;
                            b.T = "";
                            b.Za = "";
                            b.Gb = !1;
                            b.B && b.B.xa();
                            b.B = null;
                            b.D.length = 0;
                            b.va = {};
                            b.Ma = null;
                            b.Q = 0;
                            b.Da = !1;
                            if (b.L) {
                                var c = b.L;
                                c.Hj && c.Hj.parentElement && c.Hj.parentElement.removeChild(c.Hj);
                                b.L = null
                            }
                            b.H = null;
                            b.$ = null
                        }
                    mv = {};
                    lv = -1;
                    iv = null;
                    _.Tu && ((0, _.af)(window, "scroll", _.Vu), _.sc.Hc || (0, _.af)(window, "resize", _.av), _.dv && window.clearInterval(_.dv), _.Tu = null, _.bv = !1);
                    kv = {};
                    window.google.LU.fmap_xc = null
                }
            });
        (0, _.za)("google.LU.addMapConfig", _.nv, void 0);
        (0, _.za)("google.LU.deleteMapConfig", _.Uga, void 0);
        (0, _.za)("google.LU.getCurrentMapImageUrl", function () {
                return mv[lv].A ? Iga(mv[lv], mv[lv].A) : ""
            }, void 0);
        (0, _.za)("google.LU.getCurrentMapAnchorUrl", function () {
                return mv[lv].J ? mv[lv].J.href : ""
            }, void 0);

        (0, _.Sg)(_.x.G(), "sy52");
        (0, _.Wg)(_.x.G(), "sy52");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        (0, _.Vg)(_.x.G(), "lu");
        (0, _.Sg)(_.x.G(), "lu");
        (0, _.Wg)(_.x.G(), "lu");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.sD = function (a) {
            this.xh = a || {};
            this.Md = this.L = null;
            this.Md = (0, _.v)("imap");
            this.L = (0, _.v)("imap_container");
            if (!this.Md || !this.L) throw Error("gws.localUniversal.interactiveMap: Map containers not found! Aborting map constructor.");
            this.Gs = tD(this, "tablet", !1);
            this.T = tD(this, "desktop", !1);
            this.Mi = !this.Gs && !this.T;
            this.id = tD(this, "id", "imap");
            this.Co = tD(this, "isManagedByModule", !0);
            this.$ = this.va = this.A = null;
            this.Gt = (0, window.parseInt)(tD(this, "mmstart", 0), 10);
            this.Ms = tD(this, "mmoptimized", !1);
            this.Wa =
                tD(this, "mmselect", !1);
            this.H = this.ca = null;
            this.Za = (0, window.parseFloat)(tD(this, "dlat", 0));
            this.Ma = (0, window.parseFloat)(tD(this, "dlng", 0));
            this.M = null;
            this.ML = !1;
            this.Gb = this.D = this.height = this.width = this.vc = -1;
            this.B = [];
            this.Uc = [];
            this.Da = [];
            this.V = this.J = null;
            this.Re = !1;
            this.mr = 0.3;
            this.Wa ? (this.ca = tD(this, "iw", null), this.Gs && (this.$ = new uD({
                pins: "//www.google.com/images/map_pins_A_Z_retina.png",
                shadow: "//www.google.com/images/map_pin_shadow_retina.png",
                spriteHeight: 1214,
                spriteWidth: 53,
                max: 26,
                verticalOffset: 45,
                horizontalOffset: 29,
                height: 42,
                width: 24,
                shadowHeight: 27,
                shadowWidth: 50
            }))) : this.$ = new uD({
                pins: "//www.google.com/images/red_pins2.png",
                shadow: "//maps.gstatic.com/intl/en_us/mapfiles/marker_mini_shadow.png",
                spriteHeight: 385,
                spriteWidth: 19,
                max: 10,
                verticalOffset: 35,
                horizontalOffset: 0,
                height: 28,
                width: 19,
                shadowHeight: 20,
                shadowWidth: 22
            });
            vD[this.id] = this
        };
        var uD = function (a) {
            this.Yb = a
        };
        var wD = function (a, b) {
            this.nF = a.nF;
            this.latLng = a.latLng;
            this.Un = a.Un;
            this.infoWindow = a.infoWindow;
            this.kL = a.kL;
            this.rA = a.rA;
            this.sH = a.sH;
            this.rA.setZIndex(999999 - 100 * this.rA.getPosition().lat());
            this.MF = a.MF;
            b ? this.select() : this.Qu()
        };
        var xD = function () {};
        var Ana = function () {
            window.google.maps && !yD && (yD = !0, xD = function (a, b) {
                window.google.maps.OverlayView.call(this);
                this.Qc = a;
                this.cM = this.Qc.B[b];
                this.u1 = this.Qc.$ ? this.Qc.$.getHeight() + xD.eb : 0;
                zD(this.Qc, this.Qc.A, "click", (0, _.$a)(function () {
                    var a = this.Qc;
                    a.H && a.H.hide()
                }, this))
            }, xD.prototype = new window.google.maps.OverlayView, xD.A = null, xD.eb = 85, xD.B = function () {
                xD.A || this.IU();
                var a = xD.A;
                try {
                    var b = this.cM.rA,
                        c = this.getProjection().fromLatLngToDivPixel(b.getPosition());
                    if (this.Qc.Gs) a.style.left = c.x + "px",
                    a.style.top = c.y - this.u1 + "px";
                    else {
                        var d = this.getProjection().fromLatLngToContainerPixel(b.getPosition()),
                            b = !1,
                            e = this.Qc.width / 3,
                            f = d.x > e && d.x < this.Qc.width - e,
                            g = d.x >= this.Qc.width - e;
                        d.y > this.Qc.height - 75 ? (a.style.top = c.y + "px", a.A.style.top = "-" + (f ? 89 : 62) + "px", b = !0) : (a.style.top = c.y + 5 + "px", a.A.style.top = "0");
                        f ? (a.style.left = c.x + "px", a.A.style.left = "-50%") : g ? (a.style.left = c.x + "px", a.A.style.left = "-110%") : (a.style.left = c.x + (b ? 14 : 10) + "px", a.A.style.left = "0")
                    }
                } catch (h) {
                    window.google.ml(h, !1, {
                        cause: "local interactive map: fromLatLngToDivPixel returned null"
                    })
                }
                this.Qc.ML &&
                    (this.Qc.ML = !1, AD(this.Qc));
                a.A.innerHTML = this.cM.kL;
                this.getPanes().floatPane.appendChild(a)
            }, xD.prototype.draw = xD.B, xD.prototype.IU = function () {
                var a = (0, _.od)("DIV");
                a.setAttribute("id", "iw");
                a.style.position = "absolute";
                xD.A = a;
                var b = (0, _.od)("DIV");
                b.style.position = "relative";
                b.style.left = this.Qc.Gs ? "-50%" : "0";
                b.style.webkitBoxShadow = "0 0 5px rgba(0,0,0,.5)";
                b.style.padding = this.Qc.Gs ? "13px 15px" : "8px 8px 0";
                b.style.backgroundColor = "#fff";
                b.style.fontWeight = "bold";
                a.appendChild(b);
                a.A = b;
                if (this.Qc.Gs) {
                    b =
                        (0, _.od)("DIV");
                    b.style.position = "relative";
                    b.style.top = "100%";
                    b.style.left = "-12px";
                    b.style.width = 0;
                    b.style.height = 0;
                    b.style.borderLeft = "12px solid transparent";
                    b.style.borderRight = "12px solid transparent";
                    b.style.borderTop = "12px solid #c6c6c6";
                    var c = (0, _.od)("DIV");
                    c.style.position = "absolute";
                    c.style.left = "-10px";
                    c.style.top = "-12px";
                    c.style.width = 0;
                    c.style.height = 0;
                    c.style.borderLeft = "10px solid transparent";
                    c.style.borderRight = "10px solid transparent";
                    c.style.borderTop = "10px solid #fff";
                    b.appendChild(c);
                    a.appendChild(b)
                }
            }, xD.prototype.A = function () {
                return null != this.getMap()
            }, xD.prototype.hide = function () {
                this.A() && (this.setMap(null), this.Qc.vc = -1)
            }, xD.prototype.show = function () {
                if (!this.A()) {
                    var a = xD.A;
                    a && (a.style.display = "block");
                    this.setMap(this.Qc.A);
                    this.Qc.vc = this.cM.nF
                }
            }, xD.prototype.onRemove = function () {
                var a = xD.A;
                a && (a.style.display = "none", a.parentNode.removeChild(a))
            })
        };
        var Bna = function (a, b) {
            0 != a.B.length && (a.ca && -1 != b) && (a.H = new xD(a, b), a.H.show())
        };
        var tD = function (a, b, c) {
            return b in a.xh ? a.xh[b] : c
        };
        _.BD = function (a, b, c) {
            b && a.width == b && c && a.height == c || (b && (a.width = b), c && (a.height = c), a.Mi && (-1 == a.width && (a.width = window.document.documentElement.clientWidth, a.width > window.document.documentElement.clientHeight && (a.width *= tD(a, "lwp", 1))), -1 == a.height && (a.height = Math.floor(a.width * tD(a, "heightratio", 0.75)))), a.L.style.width = a.width + "px", a.L.style.height = a.height + "px", a.A && window.google.maps.event.trigger(a.A, "resize"), a.QS())
        };
        var Cna = function () {
            (0, _.$b)(vD, function (a) {
                a.Mi && (0, _.BD)(a)
            })
        };
        var Dna = function () {
            if ((0, _.v)("lu_imap_script")) Ena();
            else {
                var a = (0, _.od)("script");
                a.setAttribute("id", "lu_imap_script");
                a.src = "//maps.google.com/maps/api/js?v=3.12&sensor=false&client=google-mobile-search&callback=google.LU.imap.mc";
                (0, _.td)(window.document.body, a)
            }
        };
        var Ena = function () {
            window.google.maps && (CD && CD.vr && (window.google.maps.visualRefresh = !0), Ana(), (0, _.hD)(Cna), (0, _.$b)(vD, function (a) {
                Fna(a)
            }))
        };
        var Fna = function (a) {
            var b = {
                position: a.T ? window.google.maps.ControlPosition.RIGHT_TOP : window.google.maps.ControlPosition.LEFT_BOTTOM,
                style: window.google.maps.ZoomControlStyle.SMALL
            }, c = {
                    position: window.google.maps.ControlPosition.LEFT_TOP
                }, d = null;
            tD(a, "noicons", !1) && (d = [{
                featureType: "poi",
                stylers: [{
                    visibility: "off"
                }]
            }]);
            b = {
                hideLegalNotices: !0,
                reportErrorControl: !1,
                mapTypeControl: tD(a, "mapTypeControl", !0),
                mapTypeControlOptions: c,
                mapTypeId: window.google.maps.MapTypeId.ROADMAP,
                maxZoom: tD(a, "maxzoom", 18),
                zoomControl: tD(a, "showzoom", !1),
                zoomControlOptions: b,
                streetViewControl: !1,
                panControl: !1,
                rotateControl: !1,
                scaleControl: !1,
                useStaticMap: !1,
                styles: d
            };
            c = tD(a, "minzoom", -1); - 1 < c && (b.minZoom = c);
            a.va = new window.google.maps.OverlayView;
            a.va.draw = (0, _.ka)();
            a.A = new window.google.maps.Map(a.Md, b);
            a.va.setMap(a.A);
            zD(a, a.A, "mapdataproviders_changed", (0, _.$a)(a.QS, a));
            if (a.Gs || a.T && tD(a, "nav", !1)) {
                var e = zD(a, a.A, "idle", function () {
                    window.google.maps.event.removeListener(e);
                    zD(a, a.A, "idle", (0, _.$a)(a.dY, a))
                });
                zD(a, a.A, "mousedown", function () {
                    a.ZJ();
                    a.Re = !0
                });
                zD(a, a.A, "mouseup", function () {
                    a.Re = !1
                });
                zD(a, a.A, "zoom_changed", (0, _.$a)(a.ZJ, a));
                zD(a, a.A, "bounds_changed", (0, _.$a)(a.fS, a))
            }
            Gna(a);
            Hna(a)
        };
        var Gna = function (a, b, c, d) {
            b = b || tD(a, "plat", []);
            c = c || tD(a, "plng", []);
            d = d || tD(a, "pcb", []);
            for (var e = 0; e < b.length; e++) {
                var f = new window.google.maps.LatLng(b[e], c[e]),
                    g = Ina(a, e, f, !0),
                    h = Ina(a, e, f, !1);
                a.Wa && Jna(a, e, h, g);
                a.B[e] = new wD({
                    nF: e,
                    latLng: f,
                    Un: d[e] ? d[e] : (0, _.ka)(),
                    rA: g,
                    MF: h,
                    sH: a.Gs,
                    kL: a.ca ? a.ca[e] : null
                }, -1 == a.D && !a.T || a.D == e)
            }
            a.M || (a.M = a.Za && a.Ma ? new window.google.maps.Marker({
                position: new window.google.maps.LatLng(a.Za, a.Ma),
                map: a.A,
                icon: "//ssl.gstatic.com/m/app/buzz/bluedot_l.png"
            }) : null); - 1 ==
                a.D ? a.H && a.H.hide() : a.vc != a.D && Bna(a, a.D)
        };
        var Ina = function (a, b, c, d) {
            c = {
                position: c,
                map: a.A,
                optimized: a.Ms
            };
            if (a.T) d || (c.icon = new window.google.maps.MarkerImage("//www.google.com/images/red_measle.png", new window.google.maps.Size(7, 7), new window.google.maps.Point(0, 0), null, new window.google.maps.Size(7, 7)), c.shape = {
                type: "circle",
                coords: [3.5, 3.5, 3.5]
            });
            else {
                var e = a.$,
                    f = 0;
                d = d ? 0 : e.Yb.horizontalOffset;
                a = b + a.Gt;
                a %= e.xK();
                a++;
                f = e.Yb.verticalOffset * a;
                c.icon = new window.google.maps.MarkerImage(e.Yb.pins, new window.google.maps.Size(e.getWidth(), e.getHeight()),
                    new window.google.maps.Point(d, f), null, new window.google.maps.Size(e.Yb.spriteWidth, e.Yb.spriteHeight));
                c.shadow = new window.google.maps.MarkerImage(e.Yb.shadow, new window.google.maps.Size(e.Yb.shadowWidth, e.Yb.shadowHeight), null, new window.google.maps.Point(7, 2 + e.Yb.shadowHeight), new window.google.maps.Size(e.Yb.shadowWidth, e.Yb.shadowHeight))
            }
            return new window.google.maps.Marker(c)
        };
        var Jna = function (a, b, c, d) {
            function e() {
                (0, _.DD)(a, b);
                a.B[b].Un && a.B[b].Un()
            }
            if (a.Gs) zD(a, c, "click", e), zD(a, d, "click", e);
            else {
                var f = null,
                    g = function (b, c, d) {
                        zD(a, b, c, function () {
                            f && (window.clearTimeout(f), f = null);
                            d && d()
                        })
                    }, h = function () {
                        f = window.setTimeout(function () {
                            f = null;
                            (0, _.DD)(a, b)
                        }, 250)
                    };
                g(c, "mouseover", h);
                g(d, "mouseover", h);
                g(c, "click", e);
                g(d, "click", e);
                h = function () {
                    f = window.setTimeout(function () {
                        f = null;
                        a.D == b && (0, _.DD)(a, -1)
                    }, 100)
                };
                g(d, "mouseout", h);
                g(c, "mouseout", h)
            }
        };
        var Kna = function (a, b) {
            for (var c = 0; c < a.B.length; c++) c != b && a.B[c].Qu();
            a.M && a.M.setMap && (a.M.setMap(null), a.M = null)
        };
        _.DD = function (a, b) {
            if (0 != a.B.length && a.Wa) {
                var c = a.D; - 1 == b ? a.H && a.H.hide() : Bna(a, b);
                if (c != b)
                    if (a.D = b, -1 != c && -1 == b)
                        if (a.Gs)
                            for (c = 0; c < a.B.length; c++) a.B[c].select();
                        else Kna(a);
                        else -1 != b && (-1 == c && a.Gs ? Kna(a, b) : (a.B[b].select(), -1 != c && a.B[c].Qu()), a.Gs && AD(a))
            }
        };
        var AD = function (a) {
            if (a.A) {
                var b = a.B[a.D].latLng;
                if (a.ca) {
                    var c = a.va.getProjection();
                    c ? (b = c.fromLatLngToContainerPixel(b), b.y -= 50, b = c.fromContainerPixelToLatLng(b)) : a.ML = !0
                }
                a.A.panTo(b)
            }
        };
        var Hna = function (a) {
            var b;
            if (!(b = !a.T)) {
                (0, _.bg)();
                var c = (0, _.eg)("fll");
                b = (0, _.eg)("fz");
                if (c && b) {
                    var d;
                    var e = c.indexOf(","); - 1 == e ? d = null : (d = (0, window.parseFloat)(c), c = (0, window.parseFloat)(c.substring(e + 1)), d = (0, window.isNaN)(d) || (0, window.isNaN)(c) ? null : new window.google.maps.LatLng(d, c));
                    b = (0, window.parseInt)(b, 10);
                    !d || (0, window.isNaN)(b) ? b = !1 : (a.A.setCenter(d), a.A.setZoom(b), b = !0)
                } else b = !1;
                b = !b
            }
            if (b) {
                b = new window.google.maps.LatLngBounds;
                Lna(a, b);
                a.Za && a.Ma && b.extend(new window.google.maps.LatLng(a.Za,
                    a.Ma));
                if (a.Q && (2 == a.Q.length || 4 == a.Q.length))
                    for (d = 0; d < a.Q.length; d += 2) b.extend(new window.google.maps.LatLng(a.Q[d], a.Q[d + 1]));
                a.A.fitBounds(b);
                a.Gs && -1 != a.D && AD(a)
            }
        };
        var Mna = function (a, b) {
            (0, _.Zb)(a.B, function (a) {
                b.extend(a.latLng)
            })
        };
        var Lna = function (a, b) {
            var c = -1 != a.D ? a.D : a.Gb; - 1 == c || a.T ? Mna(a, b) : (c = Nna(a, a.B[c].latLng, 7), (0, _.Zb)(c, function (a) {
                b.extend(a.latLng)
            }))
        };
        var Nna = function (a, b, c) {
            for (var d = [], e, f, g = 0; g < a.B.length; g++) e = a.B[g].latLng, f = e.equals(b) ? 0 : ED(b, e), d.push({
                latLng: e,
                distance: f
            });
            d.sort(function (a, b) {
                return (0, _.Ub)(a.distance, b.distance)
            });
            return d.slice(0, c)
        };
        var ED = function (a, b) {
            var c = 0.017453292519943295 * a.lat(),
                d = 0.017453292519943295 * a.lng(),
                e = 0.017453292519943295 * b.lat(),
                d = (0.017453292519943295 * b.lng() - d) * Math.cos((c + e) / 2),
                c = e - c;
            return 6371 * Math.sqrt(d * d + c * c)
        };
        var Ona = function (a, b, c, d, e) {
            (0, _.Zb)(a.Da, function (a) {
                window.google.maps.event.removeListener(a)
            });
            a.Da = [];
            (0, _.Zb)(a.B, function (a) {
                a.MF.setMap(null);
                a.rA.setMap(null)
            });
            a.B = [];
            a.D = -1;
            a.ca = e;
            Gna(a, b, c, d)
        };
        var Pna = function (a, b) {
            var c = (0, _.$c)("lu_map_show");
            (0, _.Zb)(c, function (a) {
                a.style.display = b ? "none" : "inline-block"
            });
            c = (0, _.$c)("imap_show");
            (0, _.Zb)(c, function (a) {
                a.style.display = b ? "inline-block" : "none"
            });
            a.L.style.visibility = b ? "inherit" : "hidden";
            a.L.style.display = b ? "block" : "none";
            a.Ks && (a.Ks.style.display = b ? "block" : "none")
        };
        var Qna = function (a) {
            Pna(a, !0);
            (0, _.BD)(a);
            var b = [a.L];
            a.Gs && (b = b.concat(tD(a, "pve", [])));
            (0, _.Hi)(null, b)
        };
        var zD = function (a, b, c, d) {
            c = window.google.maps.event.addListener(b, c, d);
            b == a.A ? a.Uc.push(c) : a.Da.push(c);
            return c
        };
        var Rna = function (a) {
            vD.imap.hide();
            (a = (0, _.ti)(a)) && window.google.log("imap", "&ved=" + a + "&ei=" + window.google.kEI)
        };
        var Sna = function (a) {
            a = a.offsetWidth;
            (null == vD.imap ? new _.sD(CD) : vD.imap).show({
                width: a
            })
        };
        (0, _.Vg)(_.x.G(), "sy89");
        var Tna = !1,
            CD = null,
            vD = {};
        uD.prototype.xK = function () {
            return this.Yb.max
        };
        uD.prototype.getHeight = function () {
            return this.Yb.height
        };
        uD.prototype.getWidth = function () {
            return this.Yb.width
        };
        wD.prototype.select = function () {
            this.rA.setVisible(!0);
            this.sH && this.MF.setVisible(!1)
        };
        wD.prototype.Qu = function () {
            this.rA.setVisible(!1);
            this.sH && this.MF.setVisible(!0)
        };
        var yD = !1;
        _.q = _.sD.prototype;
        _.q.fS = function (a) {
            if (a || !this.J) a = this.A.getBounds(), this.J = {
                center: this.A.getCenter(),
                zoom: this.A.getZoom(),
                tV: ED(a.getSouthWest(), a.getNorthEast()),
                span: a.toSpan()
            }
        };
        _.q.show = function (a) {
            if (a.reshow) this.A || ((0, _.BD)(this), Dna()), Qna(this);
            else if (this.Q = a.les, a.refreshPlaces) Ona(this, a.plat, a.plng, a.pcb, a.iw);
            else {
                var b = "width" in a ? a.width : -1;
                0 < b && (this.width = b);
                b = "height" in a ? a.height : -1;
                0 < b && (this.height = b);
                this.Gb = "centerPlaceIndex" in a ? a.centerPlaceIndex : -1;
                a = "placeIndex" in a ? a.placeIndex : -1;
                this.A ? (0, _.DD)(this, a) : this.D = a;
                this.A || ((0, _.BD)(this), Dna());
                Qna(this);
                this.A && (-1 != this.Gb || this.Q) && Hna(this)
            }
        };
        _.q.ZJ = function () {
            this.V && (window.clearTimeout(this.V), this.V = null)
        };
        _.q.dY = function () {
            function a() {
                b.V = null;
                if (b.Re) b.V = window.setTimeout(a, 500);
                else n: {
                    var c = b.A.getCenter();
                    if (b.Gs || b.J && b.A.getZoom() == b.J.zoom)
                        if (c = ED(c, b.J.center) / b.J.tV, b.Gs || c < b.mr) {
                            (c = (0, _.v)("lx_imap_pan")) && (c = (0, _.ti)(c)) && window.google.log("imap", "&ved=" + c + "&ei=" + window.google.kEI);
                            break n
                        }
                    var c = (0, _.dg)("oll"),
                        d = (0, _.dg)("ospn"),
                        e = b.J;
                    !e || c && d || (c = e.center.lat() + "," + e.center.lng(), d = e.span.lat() + "," + e.span.lng());
                    b.fS(!0);
                    (e = tD(b, "nav", null)) && e((0, _.v)("lx_imap_search"), {
                        map: {
                            oll: c,
                            ospn: d
                        }
                    })
                }
            }
            this.ZJ();
            var b = this;
            this.V = window.setTimeout(a, 500)
        };
        _.q.QS = function () {
            if (this.A) {
                if (!this.kk) {
                    var a = (0, _.od)("DIV");
                    a.style.bottom = "2px";
                    a.style.color = "#111";
                    a.style.fontSize = "10px";
                    a.style.fontFamily = "helvetica, arial, sans-serif";
                    a.style.position = "absolute";
                    a.style.zIndex = 101;
                    a.style[(0, _.ig)() ? "right" : "left"] = "4px";
                    this.kk = a;
                    this.L.appendChild(a)
                }
                if (a = this.A.get("mapDataProviders")) this.kk.innerHTML = a
            }
        };
        _.q.hide = function () {
            Pna(this, !1)
        };
        _.q.dispose = function () {
            (0, _.mD)(Cna);
            (0, _.Zb)((0, _.Lb)(this.Uc, this.Da), function (a) {
                window.google.maps.event.removeListener(a)
            });
            this.Uc = [];
            this.Da = [];
            this.M = this.J = this.va = this.A = null;
            xD.A = null;
            yD = !1;
            this.$ = null;
            (0, _.hc)(vD, this.id)
        };
        (0, _.vf)("imap", {
            init: function (a) {
                if (!Tna) {
                    try {
                        (0, _.Ee)(".imap_container{overflow:hidden;visibility:hidden}.imap{background:no-repeat center url(/images/jfk_load.gif);border-radius:5px;display:inline-block;height:100%;width:100%;z-index:100}.imcb{box-shadow:0 1px 2px rgba(0,0,0,.1);color:#666;display:inline-block;font-family:Verdana;font-size:14px;height:26px;line-height:26px;min-height:26px;min-width:26px;padding:0;position:absolute;right:4px;top:2px;width:26px;z-index:101}")
                    } catch (b) {
                        window.google.ml(b, !1);
                        return
                    }
                    Tna = !0
                }(0, _.ji)("imap", {
                    cbc: Rna,
                    ms: Sna
                });
                CD = a
            },
            dispose: function () {
                (0, _.$b)(vD, function (a) {
                    a.Co && a.dispose()
                })
            }
        });
        (0, _.za)("google.LU.imap.mc", Ena, void 0);

        (0, _.Sg)(_.x.G(), "sy89");
        (0, _.Wg)(_.x.G(), "sy89");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        (0, _.Vg)(_.x.G(), "imap");
        (0, _.Sg)(_.x.G(), "imap");
        (0, _.Wg)(_.x.G(), "imap");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Us = function (a) {
            return new _.Zd(a.top, a.left + a.width, a.top + a.height, a.left)
        };
        _.bfa = function (a, b) {
            return b.y < a.top ? b.y - a.top : b.y > a.bottom ? b.y - a.bottom : 0
        };
        _.cfa = function (a, b) {
            return b.x < a.left ? b.x - a.left : b.x > a.right ? b.x - a.right : 0
        };
        _.Vs = function (a, b) {
            var c = 0,
                d = null == b;
            if (null != a) {
                if (a && (0, _.th)(a)) return a.removeAllListeners(b);
                var e = (0, _.Xa)(a);
                if (_.Ah[e])
                    for (var e = _.Ah[e], f = e.length - 1; 0 <= f; f--) {
                        var g = e[f];
                        if (d || b == g.type)(0, _.Hh)(g), c++
                    }
            } else(0, _.$b)(_.Ch, function (a) {
                (0, _.Hh)(a);
                c++
            });
            return c
        };
        _.Ws = function (a, b) {
            var c = (0, _.cfa)(a, b),
                d = (0, _.bfa)(a, b);
            return Math.sqrt(c * c + d * d)
        };
        _.Xs = function (a) {
            switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
            }
        };
        (0, _.Vg)(_.x.G(), "sy38");

        (0, _.Sg)(_.x.G(), "sy38");
        (0, _.Wg)(_.x.G(), "sy38");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var rha = function () {
            if (Av()) {
                var a = (0, _.v)("lst-ib");
                (0, _.$e)(a, "focus", Bv);
                (0, _.$e)(a, "blur", sha);
                a == (0, _.Rd)(window.document) && Bv()
            }
            Cv = [];
            (a = (0, _.v)("abar_ps_on")) && Cv.push(new _.Sq(a, (0, _.Vf)(a, "disabled") ? Dv.msgs.sPersD : Dv.msgs.sPers));
            (a = (0, _.v)("abar_ps_off")) && Cv.push(new _.Sq(a, (0, _.Vf)(a, "disabled") ? Dv.msgs.hPersD : Dv.msgs.hPers));
            (0, _.ji)("ab", {
                cc: tha,
                hbke: uha,
                hdke: vha,
                hdhne: wha,
                hdhue: xha,
                go: yha,
                mskpe: zha,
                roi: Aha,
                roid: Bha,
                tdd: Ev,
                tei: Cha
            }, !0)
        };
        var Dha = function () {
            if (Dv.ab.on) {
                (0, _.Nf)(41, Eha);
                (0, _.Nf)(37, function (a) {
                    a && (a = (0, _.v)("appbar")) && (a.style.visibility = "hidden")
                });
                (0, _.v)("pocs");
                var a = Dv.exp.spt;
                a && (Fv += a)
            }
        };
        var Av = function () {
            return (0, _.v)("sftab") || (0, _.v)("lst-ib")
        };
        var Bv = function () {
            var a = Av();
            a && (0, _.Sf)(a, "lst-d-f")
        };
        var sha = function () {
            var a = Av();
            a && (0, _.Tf)(a, "lst-d-f")
        };
        var Fha = function (a) {
            this.element = a;
            this.A = [];
            this.B = null;
            "ab_opt" == this.element.id && 0 == this.element.childNodes.length && window.gbar.aomc(this.element);
            a = (0, _.$c)("ab_dropdownitem", this.element);
            for (var b = 0, c; c = a[b]; b++)(0, _.Vf)(c, "disabled") || this.A.push(c)
        };
        var Gv = function (a, b) {
            Gha(a, null == a.B ? b ? 0 : a.A.length - 1 : (a.B + (b ? 1 : a.A.length - 1)) % a.A.length)
        };
        var Gha = function (a, b) {
            var c = a.A[b];
            c && (Hv(a), (0, _.Sf)(c, "selected"), c.setAttribute("aria-selected", "true"), c = c.querySelector("a, .action-menu-button") || c, c.setAttribute("tabindex", "0"), c.focus(), a.B = b)
        };
        var Hv = function (a) {
            var b = a.A[a.B];
            b && ((0, _.Tf)(b, "selected"), b.setAttribute("aria-selected", "false"), (b.querySelector("a, .action-menu-button") || b).setAttribute("tabindex", "-1"), a.element.focus(), a.B = null)
        };
        var Ev = function (a) {
            var b = (a = (0, _.Qd)(a, "ab_button")) && Iv != a;
            Jv && Kv();
            a && b && Hha(a)
        };
        var tha = function (a) {
            window.google.ac && window.google.ac.UU && window.google.ac.UU();
            window.google.j && window.google.j.init || (0, _.Yf)(a.href);
            return !0
        };
        var yha = function (a, b, c) {
            32 == c.keyCode && (0, _.Yf)(a.href)
        };
        var Aha = function (a) {
            Ev(a);
            window.google.isr.Hover && window.google.isr.Hover.roi(!0)
        };
        var Bha = function () {
            window.google.isr.Hover && window.google.isr.Hover.roi(!1)
        };
        var Cha = function (a) {
            (0, _.Ce)((0, _.v)("ufp"), "block");
            Ev(a)
        };
        var Hha = function (a, b) {
            var c;
            if (void 0 == Lv[a.id]) {
                var d = (0, _.Qd)(a, "ab_ctl");
                c = null;
                d && (d = (0, _.ad)("ab_dropdown", d)) && (c = new Fha(d));
                Lv[a.id] = c
            }
            if (c = Lv[a.id])(0, _.Sf)(a, "selected"), a.setAttribute("aria-expanded", "true"), Iv = a, c.element.style.visibility = "inherit", Jv = c, c = a.id.indexOf("am-b"), a.id && -1 != c && (c = (0, _.Gd)(a)) && (0, _.Vf)(c, "action-menu") && (c = (0, _.ad)("action-menu-panel", c)) && (0, _.Hi)(a, [c], [], "", "&id=" + a.id), (0, _.$e)(window.document, "click", Kv), (0, _.$e)(window.document, "keydown", Iha), b && Gv(Jv, !0)
        };
        var Kv = function () {
            Jv && ((0, _.af)(window.document, "click", Kv), (0, _.af)(window.document, "keydown", Iha), Hv(Jv), Jv.element.style.visibility = "hidden", Jv = null);
            Iv && ((0, _.Tf)(Iv, "selected"), Iv.setAttribute("aria-expanded", "false"), Iv = null)
        };
        var Iha = function (a) {
            27 == a.keyCode && Kv()
        };
        var uha = function (a, b, c) {
            if (9 == c.keyCode) Kv();
            else if (27 == c.keyCode) {
                if (Jv) return Kv(), Mv(c)
            } else {
                if (38 == c.keyCode || 40 == c.keyCode) return Jv ? Gv(Jv, 40 == c.keyCode) : Hha(a, !0), Mv(c);
                if (37 == c.keyCode || 39 == c.keyCode) return Mv(c)
            }
            return !0
        };
        var wha = function (a, b, c) {
            Jv && ((a = (0, _.Qd)((0, _.Ci)(c), "ab_dropdownitem")) ? Jv.DF(a) : Hv(Jv))
        };
        var xha = function () {
            Jv && Hv(Jv)
        };
        var vha = function (a, b, c) {
            if (Jv)
                if (9 == c.keyCode) Kv();
                else {
                    if (27 == c.keyCode) return a = Iv, Kv(), a.focus(), Mv(c);
                    if (38 == c.keyCode) return Gv(Jv, !1), Mv(c);
                    if (40 == c.keyCode) return Gv(Jv, !0), Mv(c);
                    if (32 == c.keyCode || 37 == c.keyCode || 39 == c.keyCode) return Mv(c)
                }
            return !0
        };
        var Mv = function (a) {
            (0, _.Di)(a);
            a.preventDefault && a.preventDefault();
            return a.returnValue = !1
        };
        var zha = function (a) {
            return _.tc.qw ? (37 != a.keyCode && 38 != a.keyCode && 39 != a.keyCode && 40 != a.keyCode || Mv(a), !1) : !0
        };
        var Eha = function (a) {
            var b = (0, _.v)("rcnt"),
                c = (0, _.hn)();
            if (c && b) {
                var d = (0, window.parseInt)((0, _.ee)(c, "top"), 10),
                    e = Av(),
                    e = e ? e.offsetHeight : c.offsetHeight,
                    b = (0, _.se)(b);
                if (a != Jha || d != Kha || e != Lha || b != Mha) Jha = a, Kha = d, Lha = e, Mha = b, d = 0, a && !_.zv.isch && (c = (0, _.se)(c) + e, a += Fv, d = Math.max(0, a - b + c)), Nv = d;
                (a = (0, _.v)("center_col")) && a.style.paddingTop != Nv + "px" && (a.style.paddingTop = Nv + "px")
            }
            return !1
        };
        var Nha = function () {
            (Oha = Boolean( !! (0, _.gn)() && window.gbar && window.gbar.elc && window.gbar.elr)) && window.gbar.elc(function () {
                Dv.elastic.js && Pha(window.gbar.elr().mo);
                (0, _.Qf)(71)
            })
        };
        var Qha = function () {
            Dv.elastic && Dv.elastic.js && ((0, _.$e)(window, "resize", Ov), Ov());
            var a = window.document.querySelector("div.lhshdr");
            a && Pv.push(a);
            (a = (0, _.v)("tbbcc")) && Pv.push(a);
            Qv();
            (0, _.$e)(window, "scroll", Qv);
            _.tc.Hc && !(0, _.yc)("9") && (0, _.$e)(window, "resize", Qv)
        };
        var Pha = function (a) {
            var b = (0, _.v)("cnt"),
                c = (0, _.v)("searchform");
            "lg" == a ? (b && (0, _.Sf)(b, "big"), c && (0, _.Sf)(c, "big"), b && (0, _.Tf)(b, "mdm"), c && (0, _.Tf)(c, "mdm")) : ("md" == a ? (b && (0, _.Sf)(b, "mdm"), c && (0, _.Sf)(c, "mdm")) : (b && (0, _.Tf)(b, "mdm"), c && (0, _.Tf)(c, "mdm")), b && (0, _.Tf)(b, "big"), c && (0, _.Tf)(c, "big"))
        };
        var Ov = function () {
            var a = window.document.body.offsetWidth;
            Oha || Pha(1250 <= a ? "lg" : "sm");
            Dv.elastic.rhsOn && (Rha((0, _.v)("rhs_block")), Rha(Rv))
        };
        var Sha = function () {
            var a = window.document.body.offsetWidth;
            return a >= Dv.elastic.rhs5Col ? 5 : a >= Dv.elastic.rhs4Col || Dv.elastic.tiny && a >= Dv.elastic.tinyMd && a < Dv.elastic.tinyHi ? 4 : 3
        };
        var Rha = function (a) {
            if (a) {
                var b = Sha();
                5 <= b ? ((0, _.Tf)(a, "rhstc3"), (0, _.Tf)(a, "rhstc4"), (0, _.Sf)(a, "rhstc5")) : 4 == b ? ((0, _.Tf)(a, "rhstc3"), (0, _.Tf)(a, "rhstc5"), (0, _.Sf)(a, "rhstc4")) : ((0, _.Tf)(a, "rhstc4"), (0, _.Tf)(a, "rhstc5"), (0, _.Sf)(a, "rhstc3"))
            }
        };
        var Qv = function () {
            var a = window.pageXOffset || window.document.body.scrollLeft || window.document.documentElement.scrollLeft,
                b = (0, _.ig)(),
                c = b ? "marginRight" : "marginLeft",
                d = b ? "right" : "left";
            b && (a = Math.abs(a));
            for (var b = 0, e; e = Pv[b]; b++) "fixed" == (0, _.jg)(e, "position", !0) && ("tbbcc" == e.id ? e.style[c] = -a + "px" : e.style[d] = -a + "px")
        };
        var Sv = function (a) {
            return null != a && (0, _.Vf)(a, "vsta")
        };
        var Tv = function (a) {
            return a && a.getAttribute ? (a = a.getAttribute("data-extra")) ? -1 != a.indexOf("ludocid=") : !1 : !1
        };
        var Tha = function (a, b, c, d, e) {
            d = ["s" + c, "c" + d];
            b = b.ev() && !Uv(b) ? "w" : Uv(b) ? b.ev() ? "y" : "np" : "p";
            d.push("x:" + b);
            Sv(a) && d.push("ad");
            Tv(a) && d.push("lr");
            e = e ? "&dur=" + e : "";
            b = "";
            window.google.j && (window.google.j.pf && (3 == c || 5 == c || 7 == c)) && (b = "&sqi=6");
            c = d.join(",") + "&oi=vsnip" + e + b;
            for (d = 0; e = a.childNodes[d]; d++)
                if (e.hasAttribute && e.hasAttribute("data-ved")) {
                    b = 0;
                    for (var f; f = e.childNodes[b]; b++)
                        if (f.hasAttribute && f.hasAttribute("data-ved")) {
                            (0, _.Hi)(e, [f], [], "", c);
                            return
                        }
                }
            if (d = a.getAttribute("pved")) e = a.getAttribute("bved"), (0, _.Gi)(d, a, [e], [a], [], "", c)
        };
        var Vv = function (a, b) {
            var c = {};
            if (b) {
                var d = (0, _.ui)(b);
                d && (c.ved = d);
                b.hasAttribute("pved") && (c.ved = b.getAttribute("pved"));
                Sv(b) && (c.ad = !0);
                Tv(b) && (c.lr = !0)
            }
            window.google.ml(a, !1, c)
        };
        var Wv = function (a) {
            return null !== a && (0, _.Vf)(a, "vsta") ? 1 : 0
        };
        var Xv = function (a) {
            if (a.hasAttribute("rawurl")) return a.getAttribute("rawurl");
            var b = "";
            if (1 == Wv(a)) var b = (b = Yv(a)) ? b.getAttribute("href") : "",
            c = b.match(Uha);
            else b = "", b = a.hasAttribute("url") ? a.getAttribute("url") : (b = Vha(a)) ? b.getAttribute("href") : "", c = b.match(Wha) || b.match(Xha);
            c && (b = (0, window.decodeURIComponent)(c[1]));
            a.setAttribute("rawurl", b);
            return b
        };
        var Zv = function (a) {
            var b = Xv(a) + "|" + (a.getAttribute("sig") || "") + "|" + (a.getAttribute("data-extra") || "");
            Dv && (Dv.elastic && Dv.elastic.rhsOn && Tv(a)) && (b += "|" + Sha());
            return b
        };
        var Yha = function (a) {
            for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c), b %= 4294967296;
            return b
        };
        var Vha = function (a) {
            for (var b = a.querySelectorAll("a.l"), c = 0, d; d = b[c]; c++)
                if (Zha(d)) return d;
            Vv(Error("(manhattan) No result link"), a);
            return null
        };
        var Yv = function (a) {
            var b = a.querySelector("h3");
            if (b && (b = b.querySelector("a"), Zha(b))) return b;
            Vv(Error("(manhattan) No ad link"), a);
            return null
        };
        var Zha = function (a) {
            if (!a) return !1;
            a = a.getAttribute("href");
            return null != a && 0 < a.length && "#" != a
        };
        var $v = function (a) {
            return (0, _.Qd)(a, "vsc")
        };
        var aw = function (a) {
            var b = Zv(a),
                c = bw[b];
            c || (c = new cw(a), bw[b] = c);
            return c
        };
        var cw = function (a, b, c) {
            this.result = a;
            this.Ni = b || 0;
            this.data = c || null;
            this.source = this.A = null;
            this.B = !1
        };
        var Uv = function (a) {
            return 1 == a.Ni || 4 == a.Ni
        };
        var dw = function (a, b, c) {
            a.Ni = b;
            a.data = c || a.data
        };
        var $ha = function () {
            this.t = {
                start: (0, _.Ve)()
            }
        };
        var ew = function (a, b) {
            var c = aw(a);
            if (c && c.A) {
                var d = c.A;
                if (d.name && !c.B) {
                    c.B = !0;
                    d.t.ol = (0, _.Ve)();
                    for (var c = {}, e = 0, f; f = aia[e++];) f in window.google.kCSI && (c[f] = window.google.kCSI[f]);
                    1 == Wv(a) && (d.name = "ads,ads_" + d.name);
                    e = window.google.sn;
                    window.google.sn = b;
                    try {
                        window.google.report && window.google.report(d, c)
                    } finally {
                        window.google.sn = e
                    }
                }
            }
        };
        var bia = function (a, b, c, d, e, f) {
            this.A = a;
            this.B = b;
            this.D = c;
            this.H = d;
            this.L = e || !1;
            this.RZ = f || null;
            this.EQ = this.qA = null
        };
        var cia = function (a) {
            this.H = a;
            this.D = 0;
            this.A = {};
            this.B = []
        };
        var dia = function (a, b) {
            !a.A[b.A] && 0 > eia(a, b) && (a.B.push(b), fia(a))
        };
        var fia = function (a) {
            for (; a.D < a.H && 0 < a.B.length;) {
                var b = a.B.shift();
                gia(a, b)
            }
        };
        var gia = function (a, b) {
            if (!a.A[b.A]) {
                var c = eia(a, b);
                0 <= c && a.B.splice(c, 1);
                b.L ? hia(a, b) : iia(b);
                a.A[b.A] = b;
                a.D++
            }
        };
        var hia = function (a, b) {
            var c = (0, _.Ne)("img");
            c.onload = function () {
                var c = b.A,
                    e = a.A[c];
                if (e) {
                    var f = {};
                    f.img = e.EQ;
                    f.url = c;
                    e.RZ(f)
                }
            };
            c.onerror = b.D;
            c.src = b.B;
            b.EQ = c
        };
        var iia = function (a) {
            var b = (0, _.Ne)("script");
            b.src = a.B;
            _.tc.Hc || (b.onerror = a.D);
            b.onreadystatechange = function () {
                a.H && a.H(b)
            };
            window.setTimeout(function () {
                (0, _.Me)(b)
            }, 0);
            a.qA = b
        };
        var eia = function (a, b) {
            for (var c = 0; c < a.B.length; c++)
                if (a.B[c].A == b.A) return c;
            return -1
        };
        var fw = function (a, b) {
            var c = a.A[b];
            c && (c.qA && jia(a, c.qA), delete a.A[b], a.D--, fia(a))
        };
        var jia = function (a, b) {
            window.setTimeout(function () {
                try {
                    (0, _.yd)(b), _.sc.Hc && !(0, _.xc)("9") && (b.src = "about:blank")
                } catch (a) {}
            }, 0)
        };
        var kia = function (a, b, c) {
            function d(f) {
                null != e && window.clearTimeout(e);
                var g = (0, _.Ci)(f);
                e = window.setTimeout(function () {
                    a(g) && (gw = !1, (0, _.af)(window.document, "mousemove", d), b(g))
                }, c)
            }
            var e = null;
            gw || (gw = !0, (0, _.$e)(window.document, "mousemove", d))
        };
        var lia = function (a, b) {
            if (!hw() && !gw) {
                (0, _.Sf)(window.document.body, "vsh");
                var c = iw(a),
                    d = $v(c);
                jw(c) && kw == d || (null === kw || (0, _.Tf)(kw, "vsdth"), kw = null);
                jw(c) && !lw && (null === d || (0, _.Sf)(d, "vsdth"), kw = d);
                if (mw != c)
                    if (mw = c, jw(c)) lw || mia(c, d);
                    else if (nw()) {
                    var e;
                    if (!(e = c == window.document || c == window.document.documentElement) && (e = Dv.exp.lru) && !(e = "images-grid-inner" == c.id)) {
                        n: {
                            e = 0;
                            for (var f; f = c.childNodes[e]; e++)
                                if (Tv(f)) {
                                    e = !0;
                                    break n
                                }
                            e = !1
                        }
                        e = e || (0, _.Vf)(c, "intrlu")
                    }
                    e || ow(c) || null === c || (0, _.Vf)(c, "vspib") || (0, _.Vf)(c, "lacl") ||
                        nia(c, pw) || oia(c) ? d && ((0, _.Vf)(d, "vsc") && !(0, _.Vf)(d, "laol") && !(0, _.Vf)(d, "vso")) && pia(c, d, b ? 0 : Dv.time.hSwitch) : qia(c, b ? 0 : Dv.time.hOff)
                } else ow(c) && ria()
            }
        };
        var qia = function (a, b) {
            qw(function () {
                mw == a && !hw() && sia()
            }, b)
        };
        var pia = function (a, b, c) {
            qw(function () {
                mw == a && !hw() && rw(b, 3)
            }, c)
        };
        var ria = function () {
            kia((0, _.ua)(!0), function (a) {
                var b = iw(a);
                ow(b) && !jw(b) ? rw($v(b), 3) : tia(a)
            }, Dv.time.hOn)
        };
        var mia = function (a, b) {
            sw = !1;
            var c = Dv.time.hOn,
                c = nw() ? Dv.time.hSwitch : null !== a && (0, _.Vf)(a, "vspii") ? Dv.time.hOn : tw(a) ? Dv.time.hTitle : Dv.time.hUnit;
            qw(function () {
                if (!sw && mw == a && !hw()) {
                    var c = 3;
                    tw(a) ? c = 5 : uw(a) && (c = 7);
                    rw(b, c);
                    kia(uia(a), tia, Dv.time.hOff)
                }
            }, c)
        };
        var uia = function (a) {
            return function (b) {
                return iw(b) == a ? !1 : !0
            }
        };
        var tia = function (a) {
            vw();
            lia({
                target: a
            }, !0)
        };
        var via = function (a) {
            2 != a.button && (lw = !0, tw(iw(a)) && (sw = !0, a.preventDefault ? a.preventDefault() : a.returnValue && (a.returnValue = !1)))
        };
        var iw = function (a) {
            a = a.parentNode ? a : (0, _.Ci)(a);
            var b = a.parentNode;
            return b && b != window.document && ow(b) ? b : a
        };
        var jw = function (a) {
            return tw(a) || uw(a) || null !== a && (0, _.Vf)(a, "vspii") && ww(a, function (a) {
                return null !== a && (0, _.Vf)(a, "mslg")
            })
        };
        var ow = function (a) {
            return tw(a) || uw(a) || null !== a && (0, _.Vf)(a, "vspii")
        };
        var tw = function (a) {
            if (!Dv.exp.rt && !Dv.exp.lrt) return !1;
            var b = $v(a);
            if (!b) return !1;
            var c = null !== a && (0, _.Vf)(a, "l"),
                b = c && Tv(b);
            a = "pa1" == a.id || "pa2" == a.id || "pa3" == a.id || "1" == a.id;
            return Dv.exp.rt ? c || a : Dv.exp.lrt && b ? !0 : !1
        };
        var uw = function (a) {
            var b = $v(a);
            return !b || ww(a, function (a) {
                return null !== a && (0, _.Vf)(a, "vspib")
            }) ? !1 : Dv.exp.lru && Tv(b) ? !0 : !1
        };
        var qw = function (a, b) {
            window.clearTimeout(xw);
            xw = window.setTimeout(a, Math.max(0, b))
        };
        var ww = function (a, b) {
            for (; a && a != window.document.body;) {
                if (b(a)) return !0;
                a = a.parentNode
            }
            return !1
        };
        var nia = function (a, b) {
            return ww(a, function (a) {
                return -1 != (0, _.Gb)(b, a)
            })
        };
        var oia = function (a) {
            return ww(a, function (a) {
                return "nyc" == a.id
            })
        };
        _.wia = function (a) {
            pw.push(a)
        };
        _.xia = function (a) {
            a = (0, _.Gb)(pw, a); - 1 != a && pw.splice(a, 1)
        };
        var vw = function () {
            mw = null;
            window.clearTimeout(xw);
            xw = -1
        };
        var yia = function (a, b, c, d) {
            hw = a;
            nw = b;
            rw = c;
            sia = d;
            (0, _.$e)(window.document, "mouseover", lia);
            (0, _.$e)(window.document, "mousedown", via);
            (0, _.$e)(window.document, "mouseup", function () {
                lw = !1
            })
        };
        var zia = function (a) {
            a = Aia(a);
            yw && a ? zw(a) : Aw();
            return !0
        };
        var Aia = function (a) {
            if (!a) return null;
            for (var b = a;
                "center_col" != b.id;)
                if (b = b.parentNode, !b) return null;
            if ((0, _.Vf)(a, "vsc")) return a;
            a = a.childNodes;
            for (var b = 0, c; c = a[b++];)
                if ((0, _.Fd)(c) && (0, _.Vf)(c, "vsc")) return c;
            return null
        };
        var Bia = function (a, b, c) {
            yw = !1;
            Bw = a;
            zw = b;
            Aw = c;
            _.Nf.apply(null, Cia)
        };
        var Dia = function (a, b, c) {
            this.A = a;
            this.H = c;
            this.J = 0;
            this.B = b + 1;
            this.D = b - 1
        };
        var Cw = function (a, b, c) {
            for (var d = 0, e; e = Eia[d]; d++) a.removeAttribute(e);
            if (b.hasAttribute("url")) a.href = b.getAttribute("url");
            else {
                d = null;
                if (1 == Wv(b)) {
                    var f = Yv(b);
                    f && (d = f.getAttribute("href"), b = b.getAttribute("ived"), d && b && (d = (0, _.fg)("ved", d, b)))
                } else(f = Vha(b)) && (d = f.getAttribute("href")); if (d)
                    for (a.href = d, d = 0; e = Eia[d]; d++)(c = f.getAttribute(e)) && a.setAttribute(e, c);
                else a.href = c || "javascript:void(0)"
            }
        };
        var Fia = function (a, b, c) {
            this.result = a;
            this.time = b;
            this.source = c
        };
        var Gia = function (a, b) {
            var c = new $ha,
                d = aw(a);
            b && a && (Dw && Tha(Dw.result, aw(Dw.result), Dw.source, 9, (0, _.Ve)() - Dw.time), Dw = new Fia(a, (0, _.Ve)(), b));
            a.hasAttribute("sig") ? Ew(d.data) && !d.data.retry ? (d.source = b, d.A = c, c.name = "pf", Fw(a, d, b)) : (Gw(a, 4, c, b), window.clearTimeout(Hw), Hw = window.setTimeout(function () {
                Hia(a)
            }, Dv.time.loading)) : Fw(a, Iia, b);
            Jia(a)
        };
        var Fw = function (a, b) {
            a == Iw && window.clearTimeout(Hw);
            Ew(b.data) ? dw(b, 2, b.data) : (dw(b, 1, Dv.msgs.noPreview), b.A && (b.A.name = "e"));
            Iw == a && (Jw(a, b), Kw && (Tv(a) ? ew(a, "lrd") : ew(a, "vsnip")))
        };
        var Jw = function (a, b) {
            if (Iw == a) {
                Lw = !0;
                a && a.getAttribute("data-extra") && (Lw = !1);
                var c = Rv;
                null === c || (0, _.Tf)(c, "vspbv");
                b.ev() ? (Mw.src || (Mw.src = "/images/nycli1.gif"), (0, _.Pe)(Mw, "display", "inline")) : null === Mw || (0, _.Pe)(Mw, "display", "none");
                Uv(b) && b.data ? (null === Nw || (0, _.Pe)(Nw, "display", "block"), Nw.innerHTML = b.data) : null === Nw || (0, _.Pe)(Nw, "display", "none");
                if (2 == b.Ni) {
                    if (Ow(b.data)) {
                        var c = b.data,
                            d = Pw;
                        null === d || (0, _.Pe)(d, "display", "block");
                        Pw.innerHTML = '<a id=vsia style="display:block"></a>';
                        d = Pw.firstChild;
                        if (c && c.ssegs && 0 < c.ssegs.length) {
                            Cw(d, a, c.url);
                            d.style.maxWidth = c.dim[0] + 2 + "px";
                            for (var e = 0; e < c.ssegs.length; e++) {
                                var f = (0, _.Ne)("img.vsi");
                                f.src = c.ssegs[e];
                                f.style.maxWidth = c.dim[0] + "px";
                                c["ssegs-heights"] && c["ssegs-heights"][e] && (f.style.maxHeight = c["ssegs-heights"][e] + "px");
                                (0, _.Pe)(f, "display", "block");
                                (0, _.Pe)(f, "height", "auto");
                                d.appendChild(f)
                            }
                            Qw();
                            c && (c.tbts && 0 < c.tbts.length) && Rw(c, d)
                        } else if (c && c.shards && 0 < c.shards.length) {
                            e = (c.dim && c.dim[0] || Dv.kfe.vsW || 400) + 2;
                            Cw(d, a, c.url);
                            d.style.maxWidth =
                                e + "px";
                            for (var f = 0, g; g = c.shards[f]; f++) {
                                var h = (0, _.Ne)("div.vssrd");
                                h.style.maxWidth = e + "px";
                                d.appendChild(h);
                                var k = (0, _.Ne)("div.vssrdi");
                                h.appendChild(k);
                                for (var l = 0; l < g.imgs.length; l++) {
                                    var n = (0, _.Ne)("img.vsi");
                                    k.appendChild(n);
                                    n.src = g.imgs[l];
                                    (0, _.Pe)(n, "display", "block");
                                    (0, _.Pe)(n, "height", "auto")
                                }
                                g.top ? k.style.borderTopWidth = "1px" : (h.style.marginTop = "4px", k.style.borderTopWidth = "0", Sw(h, !0));
                                g.bot ? k.style.borderBottomWidth = "1px" : (k.style.borderBottomWidth = "0", Sw(h, !1))
                            }(0, _.Pe)(d, "display",
                                "block");
                            Kia(c, d);
                            Qw();
                            Rw(c, d)
                        }
                    } else b.data.html && Lia(b.data);
                    Mia(Pw)
                } else null === Pw || (0, _.Pe)(Pw, "display", "none")
            }
        };
        var Lia = function (a) {
            Tw = !1;
            Pw.innerHTML = a.html + "<script>google.nyc.notifyRanScripts();\x3c/script>";
            if (!Tw) {
                a = Pw.getElementsByTagName("script");
                for (var b = 0; b < a.length; b++) try {
                    eval(a[b].innerHTML)
                } catch (c) {
                    break
                }
            }
            Tw = !1;
            (0, _.Pe)(Pw, "display", "block")
        };
        var Jia = function (a) {
            if (Dv.ajax.prefetchTotal && !(0 >= Dv.ajax.prefetchTotal)) {
                Uw.B = [];
                var b = (0, _.v)("center_col"),
                    b = b ? b.querySelectorAll("div.vsc") : [],
                    c = -1;
                a && (c = (0, _.Gb)(b, a));
                for (a = new Dia(b, c, Dv.ajax.prefetchTotal); 0 < a.H && (a.B < a.A.length || 0 <= a.D);) {
                    if (c = b = a.next()) c = aw(b), c = !(Ew(c.data) && !c.data.retry);
                    c && Gw(b, 2, null)
                }
            }
        };
        var Gw = function (a, b, c, d) {
            4 <= b && (!Dv.progressive || !Dv.progressive.enabled || a.getAttribute("blobref")) && (b = 3);
            var e = Nia(a, b),
                f = Oia(a, e, b);
            if (f) {
                var g = aw(a);
                g.A = c || g.A;
                g.source = d || g.source;
                var h;
                h = a && a.getAttribute("data-extra") ? function () {
                    fw(Uw, e);
                    a.removeAttribute("data-extra");
                    Gw(a, 3)
                } : function () {
                    Fw(a, g, g.source);
                    fw(Uw, e)
                };
                c = new bia(e, f, h, function (a) {
                    window.setTimeout(function () {
                        try {
                            "function" != typeof eval(e) || "complete" != a.readyState && "loaded" != a.readyState || h()
                        } catch (b) {}
                    }, 0)
                });
                c.J = 4 == b;
                3 <= b ? gia(Uw,
                    c) : dia(Uw, c)
            }
        };
        var Oia = function (a, b, c) {
            var d = Xv(a);
            if (!d) return null;
            var e = a.getAttribute("data-extra");
            if (e) {
                c = Dv.ajax.gwsHost;
                var f = Dv.ajax.requestPrefix,
                    g = Dv.ajax.q,
                    h = Dv.ajax.hl,
                    k = Dv.ajax.gl,
                    l = a.getAttribute("sig"); - 1 != e.indexOf("sig=") && (l = "");
                var n = (0, _.zc)(2),
                    p = (0, _.zc)(0);
                a = a.getAttribute("bved");
                return [c ? "//" + c : "", f, "rdu=", (0, window.encodeURIComponent)(d), "&rdj=", (0, window.encodeURIComponent)(b), Pia(), g ? "&q=" + (0, window.encodeURIComponent)(g) : "", h ? "&hl=" + (0, window.encodeURIComponent)(h) : "", k ? "&gl=" + (0, window.encodeURIComponent)(k) :
                    "", l ? "&sig=" + (0, window.encodeURIComponent)(l) : "", "&", e, window.google.kEI ? "&ei=" + window.google.kEI : "", a ? "&vet=" + a : "", 0 < p && 0 < n ? "&bih=" + p + "&biw=" + n : ""].join("")
            }
            e = Dv.kfe.kfeHost;
            if (d = a.getAttribute("sig"))
                if (f = Dv.kfe.clientId, 1 == Wv(a) && (f = Dv.kfe.adsClientId), f = "&c=" + f, g = Xv(a)) {
                    b = [e ? "//" + e : "", Dv.kfe.kfeUrlPrefix, f, "&d=", (0, window.encodeURIComponent)(g), "&b=", 2 <= c ? 1 : 0, "&j=", b];
                    Dv.kfe.expi && (b.push("&expi="), b.push((0, window.encodeURIComponent)(Dv.kfe.expi)));
                    if (e = a.hasAttribute("ma") ? a.getAttribute("ma") :
                        null) b.push("&ma="), b.push(e);
                    4 == c && (b.push("&q="), b.push(Dv.progressive.quality), b.push("&t="), b.push(Dv.progressive.timeout));
                    b.push("&a=");
                    b.push((0, window.encodeURIComponent)(d));
                    if (a = a.getAttribute("blobref")) b.push("&bl="), b.push(a);
                    a = b.join("")
                } else a = null;
                else a = null;
            return a
        };
        var Nia = function (a, b) {
            var c = "j_" + window.google.kEI + "_" + Yha(Zv(a)) + "_" + b,
                c = c.replace(Qia, "_"),
                d = "google.nyc.c." + c;
            Vw[c] = function (b) {
                var f;
                (f = bw[Zv(a)]) ? ((b ? Ew(b) ? b.retry ? -2 : !1 == b.retry ? -1 : 1 : -10 : -100) >= (f.data ? Ew(f.data) ? f.data.retry ? -2 : !1 == f.data.retry ? -1 : 1 : -10 : -100) && (f.data = b), Ew(f.data) ? dw(f, 2, f.data) : dw(f, 1, Dv.msgs.noPreview)) : f = null;
                if (f) {
                    if (f.A) {
                        var g = f.A,
                            h = b.s;
                        !h && b.html && (h = "gws");
                        g.name = g.name || h
                    }
                    b = (g = Uw.A[d]) && g.J && (!b.quality || b.quality < Dv.progressive.replaceQuality);
                    !Ow(f.data) && b || Fw(f.result,
                        f, f.source);
                    fw(Uw, d);
                    b && Gw(f.result, 3)
                }
                delete Vw[c]
            };
            return d
        };
        var Pia = function () {
            if (null == Ww) {
                for (var a = [], b = 0, c; c = Ria[b]; ++b) {
                    var d = (0, _.dg)(c);
                    d && (d = (0, window.encodeURIComponent)((0, window.decodeURIComponent)(d)), a.push("&", c, "=", d))
                }
                Ww = a.join("")
            }
            return Ww
        };
        var Hia = function (a) {
            var b = aw(a);
            Jw(a, b);
            Hw = window.setTimeout(function () {
                2 == b.Ni || dw(b, 4, Dv.msgs.loading);
                Jw(a, b)
            }, Dv.time.timeout)
        };
        var Ew = function (a) {
            return null != a && (Ow(a) || !! a.html)
        };
        var Ow = function (a) {
            if (!a) return !1;
            var b = null != a.ssegs && 0 < a.ssegs.length && 0 < a.ssegs[0].length && null != a.dim && 2 == a.dim.length;
            return b = b || null != a.shards && 0 < a.shards.length && null != a.shards[0].imgs && 0 < a.shards[0].imgs.length
        };
        var Xw = function (a) {
            var b = Iw;
            if (b) {
                var c = aw(b);
                a && (Dw && Tha(b, c, Dw.source, a, (0, _.Ve)() - Dw.time), Dw = null);
                Kw && (c && !c.B && c.A && (c.ev() || Uv(c))) && (c.A.name = "y", Tv(b) ? ew(b, "lrd") : ew(b, "vsnip"))
            }
        };
        var Yw = function (a, b) {
            this.A = a;
            this.y1 = b
        };
        var Zw = function (a) {
            this.top = a.t;
            this.bottom = a.b;
            this.left = a.l;
            this.right = a.r;
            this.height = a.h;
            this.width = a.w;
            this.A = a.c
        };
        var $w = function (a) {
            return new Yw(a.top, a.bottom)
        };
        var Sia = function (a, b) {
            this.D = a.dim && a.dim[0] || Dv.kfe.vsW || 400;
            this.B = (0, _.lg)(ax);
            this.B -= 2;
            this.B = Math.min(this.D, this.B);
            this.scale = this.B / this.D;
            var c = (0, _.kg)(ax),
                c = c - b.offsetTop,
                c = c / this.scale;
            this.A = this.YE = a.dim && a.dim[1] || 0;
            this.H = [];
            if (0 == this.YE && a.shards && 0 < a.shards.length)
                for (var d = 0, e; e = a.shards[d]; d++) {
                    for (var f = 0, g = 0; g < e.heights.length; g++) f += e.heights[g];
                    e = e.top ? 1 : 4;
                    e /= this.scale;
                    80 < c - e - this.A && (this.A += f, this.A += e);
                    this.YE += f;
                    this.H.push(f)
                }
            this.A = Math.min(this.A, c);
            this.A *= this.scale
        };
        var Kia = function (a, b) {
            var c = new Sia(a, b),
                d = b.querySelectorAll("div.vssrd");
            if (d.length == a.shards.length)
                for (var e = c.A, f = 0, g; g = a.shards[f]; f++) {
                    var h = d[f];
                    if (0 >= Math.round(e)) h.style.display = "none";
                    else {
                        h.style.display = "block";
                        if (!h.querySelector("div.vssrdi")) {
                            Vv(Error("(manhattan) Lost shard divs"));
                            break
                        }
                        var e = e - (g.top ? 1 : 4),
                            k = c.H[f] * c.scale;
                        if (g.bot && 0 <= Math.round(e - k)) {
                            h.style.height = "auto";
                            var l = h.querySelector(".vstbtm");
                            l && (l.style.display = "none")
                        } else(l = h.querySelector(".vstbtm")) ? l.style.display =
                            "block" : Sw(h, !1), e < k ? (g = Math.round(e) + (g.top ? 1 : 0), h.style.height = g + "px") : h.style.height = "auto";
                        e -= k
                    }
                }
        };
        var Sw = function (a, b) {
            for (var c = "vstd " + (b ? "vsttop" : "vstbtm"), d = "vsti ", d = d + (b ? "vstitop" : "vstibtm"), c = (0, _.Ne)("div." + c), e = 0; 3 > e; e++) {
                var f = (0, _.Ne)("div." + d);
                c.appendChild(f)
            }
            a.appendChild(c)
        };
        var Qw = function () {
            for (var a = bx ? bx.querySelectorAll(".vsb") : [], b = 0, c; c = a[b]; b++)(0, _.yd)(c)
        };
        var Rw = function (a, b) {
            if (a.ssegs && 0 < a.ssegs.length)
                for (var c = a.dim[0], d = a.dim[1], e = (0, _.lg)(bx) / c || 1, f = Math.min(e, 1) * d, g = Math.min(e, 1) * c, f = Tia(f, g, b), g = b.querySelectorAll("img.vsi"), g = g[g.length - 1], h = a.tbts, d = new Yw(0, 1 < e ? d : Math.floor(d * e)), k = h.length - 1; 0 <= k; k--) cx(f, h[k], g, c, e, d);
            else if (a.shards && 0 < a.shards.length) {
                for (var c = new Sia(a, b), e = (0, _.lg)(bx) / c.D || 1, d = b.querySelectorAll("div.vssrd"), d = d[d.length - 1], h = c.A, f = Tia(c.A, c.B, b), k = 1.5 > e, l = c.H, n = c.scale, g = [], p = 0, m = 0, t; t = a.shards[m]; m++) {
                    if (t.tbts)
                        for (var s =
                            0; s < t.tbts.length; s++) {
                            var r = t.tbts[s];
                            if (!k || (Dv.kfe.fewTbts ? r.lt || r.em : 1)) {
                                var w = {};
                                w.txt = r.txt;
                                w.box = Uia(r.box, p);
                                r.txtBox && (w.txtBox = Uia(r.txtBox, p));
                                "dir" in r && (w.dir = r.dir);
                                g.push(w)
                            }
                        }
                    p += l[m] + 4 / n
                }
                if (0 != g.length) {
                    l = new Yw(0, h);
                    n = 0;
                    if (k && g[0].box && (150 > g[0].box.t || g[0].txtBox && 150 > g[0].txtBox.t)) {
                        k = Math.max(Math.floor(g[0].box.t * c.scale) - 2, 0);
                        l.A = k;
                        cx(f, g[0], d, c.D, e, l);
                        if (k = b.querySelector(".vstbt")) l.A = k.offsetTop + k.offsetHeight, l.y1 = h;
                        n++
                    }
                    for (h = g.length - 1; h >= n; h--) cx(f, g[h], d, c.D, e, l)
                }
            }
        };
        var Tia = function (a, b, c) {
            if (_.sc.Hc && !(0, _.yc)("9")) return null;
            var d = c.querySelector("canvas.vstbc");
            if (null != d) d.getContext("2d").clearRect(0, 0, d.width, d.height);
            else if (d = (0, _.Ne)("canvas.vstbc"), !d.getContext) return null;
            (0, _.Pe)(d, "left", "-5px");
            d.setAttribute("height", a);
            d.setAttribute("width", b + 10);
            c.appendChild(d);
            return d.getContext("2d")
        };
        var cx = function (a, b, c, d, e, f) {
            if (b.txt && b.box && null != b.box.t && null != b.box.l && null != b.box.h && null != b.box.w) {
                var g = !! (b.txtBox && b.txtBox.t < b.box.t),
                    h = (0, _.Ne)("div.vsb vstbb");
                (0, _.wd)(h, c);
                var k, l = Via(b.box, e);
                k = {
                    t: l.t - 2,
                    b: l.t + l.h + 2,
                    l: l.l - 2,
                    r: l.l + l.w + 2
                };
                null !== h && ((0, _.Pe)(h, "top", k.t + "px"), (0, _.Pe)(h, "left", k.l + "px"), (0, _.Pe)(h, "height", l.h + "px"), (0, _.Pe)(h, "width", l.w + "px"), (0, _.Pe)(h, "borderWidth", "2px"));
                k = new Zw(k);
                var n = b.txt,
                    p = b.dir,
                    l = (0, _.Ne)("div.vsb vstbt");
                (0, _.Pe)(l, "direction", p || "inherit");
                l.innerHTML = n;
                (0, _.wd)(l, c);
                if (1.5 > e) {
                    if (c = Wia(l, b.txtBox, e, k, d, g), f.contains($w(c)) && f.contains($w(k)) || (c = Wia(l, b.txtBox, e, k, d, !g)), f.contains($w(c)) && f.contains($w(k))) {
                        h = k.top < c.top ? k : c;
                        d = k.top < c.top ? c : k;
                        dx(a, "rgba(0, 0, 0, 0.1)", [{
                                x: h.left,
                                y: h.top
                            }, {
                                x: h.right,
                                y: h.top
                            },
                            h.right > d.right ? {
                                x: h.right,
                                y: h.bottom
                            } : {
                                x: d.right,
                                y: d.top
                            }, {
                                x: d.right,
                                y: d.bottom
                            }, {
                                x: d.left,
                                y: d.bottom
                            },
                            h.left < d.left ? {
                                x: h.left,
                                y: h.bottom
                            } : {
                                x: d.left,
                                y: d.top
                            }
                        ]);
                        f.y1 = Math.min(c.top, k.top);
                        return
                    }
                } else if (b = f.y1, c = d + 4, e = (0, _.lg)(bx) -
                    d - 30, null !== l && ((0, _.ig)() ? ((0, _.Pe)(l, "right", c + "px"), (0, _.Pe)(l, "borderRightWidth", "2px")) : ((0, _.Pe)(l, "left", c + "px"), (0, _.Pe)(l, "borderLeftWidth", "2px")), (0, _.Pe)(l, "width", e + "px"), (0, _.Pe)(l, "padding", "10px")), e = (k.top + k.bottom) / 2, n = l.offsetHeight, g = Math.floor(e + n / 2), g > b && (g = b), b = g - n, (0, _.Pe)(l, "top", b + "px"), c = new Zw({
                        t: b,
                        b: g,
                        l: c,
                        c: Math.floor(e)
                    }), (k = f.contains($w(c)) && f.contains($w(k))) && !(k = !a) && (g = c, k = g.A, k > g.bottom || k < g.top || !a ? k = !1 : (b = Math.floor(Math.max(k - 5, g.top)), e = Math.floor(Math.min(k +
                        5, g.bottom)), (0, _.ig)() ? (d = -g.left + d + 2, dx(a, "#dd4b39", [{
                        x: 2,
                        y: k
                    }, {
                        x: d,
                        y: b
                    }, {
                        x: d,
                        y: e
                    }])) : dx(a, "#dd4b39", [{
                        x: d,
                        y: k
                    }, {
                        x: g.left,
                        y: b
                    }, {
                        x: g.left,
                        y: e
                    }]), k = !0)), k) {
                    f.y1 = c.top - 4;
                    return
                }(0, _.yd)(h);
                (0, _.yd)(l)
            }
        };
        var Uia = function (a, b) {
            var c = {};
            c.t = a.t + b;
            c.l = a.l;
            c.h = a.h;
            c.w = a.w;
            return c
        };
        var Via = function (a, b) {
            if (!a || 1 <= b) return a;
            var c = {};
            a.t && (c.t = Math.floor(b * a.t));
            if (a.l || 0 == a.l) c.l = Math.floor(b * a.l);
            a.w && (c.w = Math.floor(b * a.w));
            a.h && (c.h = Math.floor(b * a.h));
            return c
        };
        var Wia = function (a, b, c, d, e, f) {
            var g = Via(b, c);
            b && b.l < e && -5 <= b.l && b.w && b.w < e || (g = {
                l: -5,
                w: (1 < c ? e : Math.floor(e * c)) + 10
            });
            null !== a && ((0, _.Pe)(a, "borderWidth", "0"), (0, _.Pe)(a, "padding", "10px"), (0, _.Pe)(a, "left", g.l + "px"), (0, _.Pe)(a, "width", g.w - 20 + "px"));
            b = a.offsetHeight;
            d = f ? d.top - b : d.bottom - 2;
            (0, _.Pe)(a, "top", d + "px");
            (0, _.Pe)(a, f ? "borderBottomWidth" : "borderTopWidth", "2px");
            return new Zw({
                t: d,
                b: d + b + 2,
                l: g.l,
                r: g.l + g.w
            })
        };
        var dx = function (a, b, c) {
            if (a) {
                a.beginPath();
                var d = c[0];
                a.moveTo(d.x + 5, d.y);
                for (var e = 1; e < c.length; e++) d = c[e], a.lineTo(d.x + 5, d.y);
                a.closePath();
                a.fillStyle = b;
                a.fill()
            }
        };
        var Xia = function () {
            var a = (0, _.ig)() ? "right" : "left",
                b = (0, _.ig)() ? "left" : "right",
                c = "transition";
            _.sc.Yr ? c = "-webkit-transition" : _.sc.vx && (c = "-moz-transition");
            var d = "border";
            _.sc.Yr ? d = "-webkit-border" : _.sc.vx && (d = "-moz-border");
            var e = Dv.css.adpc,
                f = Dv.css.adpbc,
                g = Dv.css.showTopNav ? "z-index:102;" : "",
                h = "#nycntg{margin:" + ((0, _.ig)() ? "6px 0 10px 25px" : "6px 25px 10px 0") + "}",
                k = Dv.css.showTopNav ? "38px" : "22px",
                k = (0, _.ig)() ? "overflow:hidden;padding:" + k + " 31px 10px 16px" : "padding:" + k + " 16px 10px 31px",
                h = h + ("#nycp{background-color:#fafafa;border-" +
                    a + ":1px solid #ebebeb;bottom:0;" + a + ":0;margin-" + a + ":33px;min-width:240px;position:absolute;" + b + ":0;top:0;visibility:hidden;" + g + k + "}.nyc_open #nycp{visibility:visible}#nycf{display:none;height:1px;" + a + ":0;min-width:940px;position:absolute;visibility:hidden;z-index:-1}.nyc_open #nycf{display:block}.nyc_opening #nycp,.nyc_opening #nycprv{display:block;visibility:hidden!important}");
            (0, _.ig)() || (h += "#nyccur{background:#fafafa;height:100%;" + a + ":33px;opacity:0;position:absolute;top:0;width:0;z-index:120}#nyccur.wipeRight{border-" +
                    b + ":1px solid #e8e8e8;opacity:1;" + c + ":width 0.08s ease-in;width:100%}#nyccur.fadeOut{opacity:0;" + c + ":opacity 0.08s linear;width:100%}#nyccur.fadeIn{opacity:1;" + c + ":opacity 0.08s linear;width:100%}#nyccur.wipeLeft{border-" + b + ":1px solid #eee;opacity:1;" + c + ":width 0.08s ease-out;width:0}");
            Dv.css && Dv.css.hIconsLarge && (g = "border-radius:2px;cursor:default;height:100%;position:relative;background-color:#f5f5f5;background-image:linear-gradient(top,#f5f5f5,#f1f1f1);border:1px solid #dcdcdc;visibility:hidden;",
                _.sc.Yr ? g += "-webkit-border-radius:2px;-webkit-user-select:none;background-image:-webkit-gradient(linear,left top,left bottom,from(#f5f5f5),to(#f1f1f1));background-image:-webkit-linear-gradient(top,#f5f5f5,#f1f1f1)" : _.sc.vx ? g += "-moz-border-radius:2px;-moz-user-select:none;background-image:-moz-linear-gradient(top,#f5f5f5,#f1f1f1)" : _.sc.opera ? g += "background-image:-o-linear-gradient(top,#f5f5f5,#f1f1f1)" : _.sc.Hc && (g += "-ms-filter:\"progid:DXImageTransform.Microsoft.gradient(startColorStr='#f5f5f5',EndColorStr='#f1f1f1')\";background-image:-ms-linear-gradient(top,#f5f5f5,#f1f1f1)"),
                h += ".vspii{" + g + "}.vspib:focus .vspii{outline:#ccc solid thin;visibility:visible}.vsh .vspib:focus .vspii{outline:none;visibility:hidden}.vsh .vsc:hover .vspii,.vsh .vsc:hover .vspib:focus .vspii,.vsh .vspii:hover,.vsh .vspib:focus .vspii:hover,.vso .vspii,.vso .vspib:focus .vspii{outline:none;visibility:visible}.nyc_opening .vspii,.nyc_open .vspii{background-color:#fafafa;background-image:none;border-color:#e6e6e6" + (_.sc.Hc ? ';-ms-filter:""' : "") + "}.vsta .vspii,.vsta .vspii:hover{background-color:" +
                e + ";background-image:none;border-color:" + f + (_.sc.Hc ? ';-ms-filter:""' : "") + "}.vsca .vspii,.vsca .vspii:hover{background-color:#fafafa;border-color:#ccc}");
            h += ".vstd{line-height:0;overflow:hidden;position:absolute;white-space:nowrap;width:100%}.vstbtm{bottom:0}.vsttop{top:0}.vssrd{display:block;overflow:hidden;position:relative}.vssrdi{border-color:#bbb;border-style:solid;border-width:0 1px 0 1px}.vsta #nyccur,.vsta #nycp{background-color:" + e + ";border-color:" + f + "}.vsca #nyccur,.vsca #nycp{background-color:#fafafa;border-color:#ccc}.nyc_open .vspib,.nyc_opening .vspib{padding-" +
                b + ":0;" + c + ":padding-" + b + " .2s ease}.nyc_open .vspib .vspii,.nyc_opening .vspib .vspii{" + d + "-top-" + b + "-radius:0;" + d + "-bottom-" + b + "-radius:0;border-" + b + ":none}.nyc_open #nycxh{cursor:pointer;" + Yia(0.7) + ";padding:15px;position:absolute;" + b + ":1px;top:12px}.nyc_open #nycxh:hover{" + Yia(1) + "}#nycx{display:none}.nyc_open #nycx{border:none;cursor:pointer;display:block;padding:0}#nyc #nycprv #vsia{position:relative;text-decoration:none}#nycntg h3 .esw{display:none}#nyc .vshid{display:inline}#nyc #nycntg .vshid a{white-space:nowrap}#nycntg a:link{border:0;text-decoration:none}#nycntg a:hover{text-decoration:underline}#vsi,.vsi{border:none;width:100%}div.vsta{display:block}.vstbb{border:0 solid #dd4b39;position:absolute}.vstbt{background-color:#202020;border:0 solid #dd4b39;color:#fff;font-size:12px;line-height:15px;max-width:400px;opacity:0.9;position:absolute}.vstbc{position:absolute;top:0}a .vstb em,a .vstb b{text-decoration:none}";
            Dv.exp.lru && (h += ".vslru.vso:before{border:1px solid #ebebeb;border-" + b + ":none;bottom:-8px;top:-7px;" + a + ":-7px;" + b + ':-9px;content:"";position:absolute;z-index:-1}.vslru div.vspib{bottom:-6px;top:-7px}.vslru div.vspib .vspii{border-radius:0}.vscl.vso.vslru:before,.vscl.vslru div.vspib{top:-4px}');
            ex = window.document.createElement("style");
            ex.setAttribute("type", "text/css");
            (0, _.Me)(ex);
            _.sc.Hc && !(0, _.yc)("9") ? ex.styleSheet.cssText = h : ex.appendChild(window.document.createTextNode(h))
        };
        var Yia = function (a) {
            return "opacity:" + a + (_.sc.Hc ? ";filter:alpha(opacity=" + 100 * a + ")" : "")
        };
        var fx = function (a, b) {
            gx && a == Iw || (hx = (0, _.Ve)(), Iw && ((0, _.Tf)(Iw, "vso"), Xw()), Iw = a, null === Iw || (0, _.Sf)(Iw, "vso"), null !== Rv && (null !== a && (0, _.Vf)(a, "vsta") ? ((0, _.Sf)(Rv, "vsta"), (0, _.Vf)(a, "vsca") ? (0, _.Sf)(Rv, "vsca") : (0, _.Tf)(Rv, "vsca")) : ((0, _.Tf)(Rv, "vsta"), (0, _.Tf)(Rv, "vsca"))), null !== a && (Zia(a), Dv.exp.larhsp && $ia(a)), gx || (gx = !0, ix(Rv), (0, _.Sf)(window.document.body, "nyc_opening"), aja([80, jx("wipeRight"), 80, bja, jx("fadeOut"), 80, jx("")])), kx = cja().top, lx(), Gia(a, b), (0, _.Vf)(window.document.body, "vsh") ||
                null === (0, _.Rd)(window.document) || !(0, _.Vf)((0, _.Rd)(window.document), "vspib") || $v((0, _.Rd)(window.document)) != a ? mx = !1 : (window.setTimeout(function () {
                    (0, _.v)("nycx").focus()
                }, 160), mx = !0), (0, _.Qf)(59, [a]), Mia(Rv))
        };
        var $ia = function (a) {
            var b = (0, _.v)("nycpp");
            ix(b);
            var c = (0, _.v)("nyclad");
            if (c && (c.innerHTML = "", Sv(a) && (a = (a = Yv(a)) ? a.getAttribute("href") : "")) && (a = a.replace(/ved=[^&]+&/, ""), a = dja[a])) {
                var d = window.document.createElement("div");
                d.innerHTML = a;
                c.appendChild(d);
                nx(b)
            }
        };
        var Zia = function (a) {
            var b = (0, _.v)("nycntg");
            if (b)
                if (Tv(a)) b.innerHTML = "";
                else {
                    var c = a.querySelector("h3") || a.querySelector("h4") || a.querySelector("a.l"),
                        d = a.querySelector("cite"),
                        e = a.querySelector(".vshid"),
                        f = "";
                    c && (f = "A" == c.nodeName.toUpperCase() ? f + ("<h3 class=r>" + ox(c) + "</h3>") : f + ox(c));
                    f += "<div>";
                    d && (f += ox(d));
                    e && (d && e.innerHTML && (f += "&nbsp;- "), f += ox(e));
                    f += "</div>";
                    Sv(a) && !a.hasAttribute("sig") && (f = "");
                    b.innerHTML = f;
                    if (1 == Wv(a) && (c = a.getAttribute("hved"), c || (a = a.querySelector('[data-vetype="hved"]')) &&
                        (c = a.getAttribute("data-ved")), c))
                        for (b = b.querySelectorAll("a"), a = 0; a < b.length; a++)(d = b[a].getAttribute("href")) && b[a].setAttribute("href", (0, _.fg)("ved", d, c))
                }
        };
        var ox = function (a) {
            if (a.outerHTML) return a.outerHTML;
            var b = (a.ownerDocument || a.document).createElement("div");
            b.appendChild(a.cloneNode(!0));
            return b.innerHTML
        };
        var eja = function (a) {
            if (400 < (0, _.Ve)() - hx)
                if ((a = (0, _.Ci)(a)) && ((0, _.Vf)(a, "vspib") || (0, _.Vf)(a, "vspii") || (0, _.Vf)(a, "vspiic")))
                    if (gx) px(1);
                    else {
                        var b = $v(a);
                        b && (mw = a, fx(b, 1))
                    } else a && (a == Rv && gx) && px(8)
        };
        var fja = function (a) {
            400 < (0, _.Ve)() - hx && (gx && a == Iw ? px(2) : fx(a, 2))
        };
        var bja = function () {
            window.google.LU && window.google.LU.hideLocalRhsContent && window.google.LU.hideLocalRhsContent();
            (0, _.Sf)(window.document.body, "nyc_open");
            (0, _.Tf)(window.document.body, "nyc_opening")
        };
        var px = function (a) {
            gx && (hx = (0, _.Ve)(), gx = !1, Xw(a), 4 != a && (yw = !1), vw(), Iw && (!(0, _.Vf)(window.document.body, "vsh") && mx && (a = Iw.querySelector("div.vspib")) && a.focus(), (0, _.Tf)(Iw, "vso")), Iw = null, aja([jx("fadeIn"), 80, gja, jx("wipeLeft"), 80, jx(""),
                function () {
                    nx(Rv);
                    _.tc.Hc && !(0, _.yc)("9") && Qv()
                }
            ]))
        };
        var gja = function () {
            (0, _.Tf)(window.document.body, "nyc_open");
            window.google.LU && window.google.LU.showLocalRhsContent && window.google.LU.showLocalRhsContent();
            (0, _.Qf)(59, [null])
        };
        var aja = function (a, b) {
            function c(a, e) {
                for (; e < a.length; e++) {
                    var f = a[e];
                    if ("number" == typeof f) {
                        f = window.setTimeout(function () {
                            c(a, e + 1)
                        }, f);
                        b ? hja = f : qx = f;
                        break
                    }
                    "function" == typeof f && f()
                }
            }
            window.clearTimeout(b ? hja : qx);
            c(a, 0)
        };
        var jx = function (a) {
            "none" == rx.style.display && ix(rx);
            return function () {
                rx.className = a;
                !a && nx(rx)
            }
        };
        var nx = function (a) {
            a && (0, _.Pe)(a, "display", "none")
        };
        var ix = function (a, b) {
            a && (0, _.Pe)(a, "display", b || "block")
        };
        var ija = function (a) {
            if (!a.querySelector("div.vspib")) {
                a = a.querySelectorAll("div.vsc");
                for (var b = 0, c; c = a[b]; b++)
                    if (!Dv.exp.kvs || Tv(c)) {
                        var d = "vspiic";
                        c.hasAttribute("icon-classes") && (d = c.getAttribute("icon-classes"));
                        d = (0, _.Ne)("div.vspib", '<div class="vspii"><div class="' + d + '"></div></div>');
                        d.setAttribute("aria-label", Dv.msgs.details);
                        d.setAttribute("role", "button");
                        d.setAttribute("tabindex", "0");
                        for (var e = c.childNodes, f = null, g = 0, h; h = e[g]; g++)
                            if ((0, _.Fd)(h) && !h.hasAttribute("data-ved")) {
                                f = h.nextSibling;
                                break
                            }
                        c.insertBefore(d, f);
                        Dv.exp.lru && Tv(c) && (0, _.Sf)(c, "vslru")
                    }
            }
        };
        var jja = function () {
            var a = Dv,
                b;
            for (b in sx) {
                a[b] = a[b] || {};
                for (var c in sx[b]) c in a[b] || (a[b][c] = sx[b][c])
            }
        };
        var kja = function () {
            (0, _.v)("nyc") == Rv && (lx(), (0, _.Qf)(60))
        };
        var lja = function () {
            var a = (0, _.v)("botabar");
            return window.extab && !! a && (0, _.De)(a)
        };
        var mja = function () {
            var a = (0, _.ad)("gssb_c");
            return !!a && (0, _.De)(a)
        };
        var lx = function () {
            var a = Dv.exp.tnav;
            if (a) {
                var b = "hdtb";
                Dv.exp.esp && mja() && (b = "omni_suggest");
                lja() && (b = "appbar");
                tx = (0, _.v)(b)
            }
            var c = a && !tx;
            c && (tx = (0, _.v)("appbar"));
            if (tx && Rv && gx) {
                var b = cja(),
                    d = (0, _.se)(tx);
                c || (d += (0, _.kg)(tx));
                var e = void 0 === kx ? 0 : b.top - kx,
                    f = window.document.documentElement.clientHeight,
                    g = 0,
                    h = !0;
                if (!Lw) {
                    var k = Pw;
                    k && (g = (0, _.se)(k) + (0, _.kg)(k) - (0, _.se)(Rv), h = f >= g)
                }
                k = (0, _.ig)() ? "right" : "left";
                if (b.top >= d) Rv.style.position = "fixed", Rv.style.top = h || 0 > e ? "0" : -Math.min(b.top - d, e, g - f) + "px",
                Rv.style[k] = -Math.abs(b.left) + "px";
                else {
                    Rv.style.position = "absolute";
                    a && (d = c ? 0 : (0, _.kg)(tx), (0, _.gn)() || (d += (0, _.se)(tx)));
                    var h = Dv.exp.esp,
                        l = mja();
                    if (h && (!lja() || !l)) {
                        var n = (0, _.v)("main");
                        n && (d -= (0, _.se)(n))
                    }
                    "appbar" != tx.id || (c || h && l) || (c = (0, _.v)("hdtb")) && (d += (0, _.kg)(c));
                    0 < e && !a && (d = Math.max(d, kx));
                    Rv.style.top = d + "px";
                    Rv.style[k] = "0";
                    Rv.style.height = Math.max(0, f + b.top - d, g) + "px";
                    Rv.style.bottom = "auto"
                }
                b = Iw;
                a = Pw;
                a.firstChild && "A" == a.firstChild.nodeName.toUpperCase() && b && (b = aw(b)) && b.data && (b = b.data,
                    b.shards && 0 < b.shards.length && Kia(b, Pw.firstChild), Qw(), Rw(b, a.firstChild))
            }
        };
        var cja = function () {
            return {
                top: window.document.body.scrollTop || window.document.documentElement.scrollTop || window.pageYOffset || 0,
                left: window.document.body.scrollLeft || window.document.documentElement.scrollLeft || window.pageXOffset || 0
            }
        };
        var nja = function () {
            if (ux && Dv.elastic.tiny) {
                var a = (0, _.v)("cnt"),
                    b = (0, _.v)("searchform");
                "ut" == window.gbar.elr().mo ? (a && ((0, _.Sf)(a, "tmlo"), (0, _.Tf)(a, "tmhi")), b && ((0, _.Sf)(b, "tmlo"), (0, _.Tf)(b, "tmhi"))) : "ty" == window.gbar.elr().mo ? (a && ((0, _.Sf)(a, "tmhi"), (0, _.Tf)(a, "tmlo")), b && ((0, _.Sf)(b, "tmhi"), (0, _.Tf)(b, "tmlo"))) : (a = (0, _.v)("cnt"), b = (0, _.v)("searchform"), a && ((0, _.Tf)(a, "tmlo"), (0, _.Tf)(a, "tmhi")), b && ((0, _.Tf)(b, "tmlo"), (0, _.Tf)(b, "tmhi")))
            }
        };
        var oja = function () {
            Xw(2)
        };
        var Mia = function (a) {
            a = a ? a.getElementsByTagName("a") : [];
            for (var b = 0; b < a.length; b++)(0, _.$e)(a[b], "click", oja)
        };
        var pja = function (a, b) {
            var c = (0, _.v)(b);
            if (c) {
                var c = c.querySelectorAll(".vsta"),
                    d = /[&?]ai=([^&]+)/;
                if (c)
                    for (var e = 0; e < c.length; e++) {
                        var f = Yv(c[e]);
                        (f = d.exec(f)) && 2 == f.length && (f = a[f[1]]) && (c[e].setAttribute("data-extra", f.d), f.i && c[e].setAttribute("icon-classes", f.i))
                    }
            }
        };
        _.qja = function (a) {
            a = $v(a);
            if (!a) return null;
            fx(a, 6);
            return a
        };
        _.rja = function () {
            px(10)
        };
        var hja, kx, qx, tx, rx, Rv, vx;
        (0, _.Vg)(_.x.G(), "sy53");
        var Dv = null;
        var Jha, Kha, Lha, Mha, Nv, Lv = {}, Jv = null,
            Iv = null,
            Cv = [],
            Fv = 7;
        Fha.prototype.DF = function (a) {
            for (var b = 0, c; c = this.A[b]; b++)
                if (a == c) {
                    b != this.B && Gha(this, b);
                    break
                }
        };
        var Oha = !1,
            Pv = [];
        var Wha = /^\/url.*[?&]url=([^&]+)/,
            Xha = /^\/url.*[?&]q=([^&]+)/,
            Uha = /(?:(?:\/aclk)|(?:\/d\/AdPreview\/adclick.html)).*[?&]adurl=([^&]+)/;
        var bw, Iia = new cw(null, 1);
        cw.prototype.ev = function () {
            return 0 == this.Ni || 4 == this.Ni
        };
        var aia = ["e", "ei"];
        cia.prototype.clear = function () {
            for (var a in this.A) {
                var b = this.A[a];
                b.qA && jia(this, b.qA)
            }
            this.H = this.H;
            this.D = 0;
            this.A = {};
            this.B = []
        };
        var gw = !1;
        var xw = -1,
            nw = null,
            hw = null,
            rw = null,
            sia = null,
            mw = null,
            kw = null,
            lw = !1,
            sw = !1,
            pw = [];
        var yw = !1,
            Bw = null,
            zw = null,
            Aw = null,
            Cia = [35,
                function (a) {
                    Bw() && (yw = !0);
                    return zia(a)
                },
                34,
                function (a, b) {
                    yw = b;
                    return zia(a)
                }
            ];
        Dia.prototype.next = function () {
            if (!(0 < this.H && (this.B < this.A.length || 0 <= this.D))) return Vv(Error("(visual-snippets) !hasNext()")), null;
            var a = this.J;
            this.J = (a + 1) % 3;
            switch (a) {
            case 0:
            case 1:
                if (this.B < this.A.length) return --this.H, this.A[this.B++];
            case 2:
                return 0 <= this.D ? (--this.H, this.A[this.D--]) : this.next()
            }
            return null
        };
        var ax, bx, Ww, Lw, Uw, Hw, Mw, Nw, Pw, Kw, Dw, Ria = "authuser deb e esrch expid expflags plugin uideb".split(" "),
            Qia = /\W/g,
            Vw = {}, Eia = ["onmousedown", "onmouseup", "onclick"],
            Tw = !1;
        (0, _.za)("google.nyc.c", Vw, void 0);
        Yw.prototype.isEmpty = function () {
            return this.A >= this.y1
        };
        Yw.prototype.contains = function (a) {
            return a.isEmpty() || this.A <= a.A && this.y1 >= a.y1
        };
        var ex = null;
        var sja = !1,
            Iw = null,
            gx = !1,
            hx = 0,
            wx = 0,
            mx = !1,
            sx = {
                ab: {
                    on: !1
                },
                ajax: {
                    gwsHost: "",
                    requestPrefix: "/ajax/rd?",
                    maxPrefetchConnections: 2,
                    prefetchTotal: 5
                },
                css: {
                    adpc: "#fffbf2",
                    adpbc: "#fec"
                },
                elastic: {
                    js: !1,
                    rhsOn: !1,
                    rhs4Col: 1068,
                    rhs5Col: 1156,
                    tiny: !1,
                    tinyLo: 847,
                    tinyMd: 924,
                    tinyHi: 980
                },
                kfe: {
                    fewTbts: !0
                },
                logging: {
                    csiFraction: 0.05
                },
                msgs: {
                    sPers: "Show personal results",
                    hPers: "Hide personal results",
                    sPersD: "Showing personal results",
                    hPersD: "Hiding personal results"
                },
                time: {
                    hOn: 300,
                    hOff: 50,
                    hSwitch: 200,
                    hTitle: 1200,
                    hUnit: 1500,
                    loading: 100,
                    timeout: 2500
                },
                exp: {
                    larhsp: !1,
                    rt: !1,
                    lrt: !1,
                    lur: !1,
                    tnav: !1,
                    esp: !1,
                    kvs: !1,
                    plcs: !1
                }
            }, dja = {}, ux = !1;
        (0, _.vf)("m", {
                init: function (a) {
                    vx = (0, _.v)("center_col");
                    Rv = (0, _.v)("nyc");
                    rx = (0, _.v)("nyccur");
                    tx = (0, _.v)("appbar") || window.document.querySelector("div.sfbgg");
                    wx = hx = 0;
                    if (Dv = a) jja(), Rv && (Dv.exp.tnav && (tx = (0, _.v)("hdtb")), vx && ija(vx), Dv && (Kw = Math.random() < Dv.logging.csiFraction), bw = {}, bx = (0, _.v)("nycpp"), ax = (0, _.v)("nycp"), Ww = Dw = null, Uw = Uw || new cia(Dv.ajax.maxPrefetchConnections), Pw = (0, _.v)("nycprv"), Mw = (0, _.v)("nycli"), Nw = (0, _.v)("nycm"), lx(), (a = (0, _.v)("nycx")) && (0, _.$e)(a, "click", function () {
                            px(5)
                        }),
                        Dv.exp.plcs || yia(function () {
                            return 300 > (0, _.Ve)() - wx
                        }, function () {
                            return gx
                        }, function (a, c) {
                            fx(a, c)
                        }, function () {
                            px(3)
                        }), (0, _.$e)(window.document, "click", eja), Bia(function () {
                            return gx
                        }, function (a) {
                            Dv.exp.kvs && !Tv(a) || fx(a, 4)
                        }, function () {
                            px(4)
                        })), Xia(), sja || ((0, _.$e)(window, "resize", kja), (0, _.$e)(window, "scroll", lx), (0, _.$e)(window.document, "keydown", function (a) {
                        a = a || window.event;
                        wx = (0, _.Ve)();
                        (0, _.Tf)(window.document.body, "vsh");
                        13 == a.keyCode ? (a = (0, _.Ci)(a)) && (0, _.Vf)(a, "vspib") && (a = $v(a)) && fx(a, 4) :
                            27 == a.keyCode && px(6)
                    }), (0, _.Nf)(49, function () {
                        px(7);
                        return !0
                    }), (0, _.Nf)(125, fja), Dha(), Nha(), window.google.video = window.google.nyc.video), sja = !0, rha(), Qha(), (0, _.v)("foot"), (0, _.v)("rhs"), (ux = Boolean( !! (0, _.gn)() && window.gbar && window.gbar.elc && window.gbar.elr)) && window.gbar.elc(function () {
                        nja()
                    }), Dv.elastic.tiny && ux && nja()
                },
                dispose: function () {
                    if (Dv) {
                        ex && ((0, _.yd)(ex), ex = null);
                        Pv = [];
                        Dv.elastic && Dv.elastic.js && (0, _.af)(window, "resize", Ov);
                        (0, _.af)(window, "scroll", Qv);
                        _.tc.Hc && !(0, _.yc)("9") && (0, _.af)(window,
                            "resize", Qv);
                        if (Av()) {
                            var a = (0, _.v)("lst-ib");
                            (0, _.af)(a, "focus", Bv);
                            (0, _.af)(a, "blur", sha)
                        }
                        Jv && Kv();
                        Lv = {};
                        for (a = 0; a < Cv.length; a++) Cv[a].destroy();
                        Cv = [];
                        (0, _.li)("ab", "cc hbke hdke hdhne hdhue go mskpe roi roid tdd tei tne".split(" "));
                        bx = ax = null;
                        Uw && Uw.clear();
                        Aw = zw = Bw = Dw = Nw = Mw = Pw = Ww = null;
                        _.Pf.apply(null, Cia);
                        vw();
                        (0, _.af)(window.document, "click", eja);
                        window.clearTimeout(qx)
                    }
                    Rv = vx = Iw = null;
                    gx = !1;
                    tx = rx = null;
                    wx = hx = 0
                }
            });
        (0, _.za)("google.nyc.closePanelViaLinkClick", _.rja, void 0);
        (0, _.za)("google.nyc.openPanelViaLinkClick", _.qja, void 0);
        (0, _.za)("google.nyc.addHoverStateLockingElement", _.wia, void 0);
        (0, _.za)("google.nyc.removeHoverStateLockingElement", _.xia, void 0);
        (0, _.za)("google.nyc.notifyRanScripts", function () {
                Tw = !0
            }, void 0);
        (0, _.za)("google.nyc.registerAds", function (a) {
                pja(a, "tads");
                pja(a, "tadsb")
            }, void 0);
        (0, _.za)("google.nyc.setImageAnchorHrefForCurrentResult", function (a) {
                a = window.document.querySelector(a);
                null != Iw && Cw(a, Iw)
            }, void 0);

        (0, _.Sg)(_.x.G(), "sy53");
        (0, _.Wg)(_.x.G(), "sy53");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        (0, _.Vg)(_.x.G(), "m");
        (0, _.Sg)(_.x.G(), "m");
        (0, _.Wg)(_.x.G(), "m");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.wy = function (a) {
            return window.document.defaultView.getComputedStyle(a, null)
        };
        (0, _.Vg)(_.x.G(), "sy64");
        var Xja;
        _.xy = _.Jc ? "-ms-" : _.Wd ? "-moz-" : _.Xd ? "-o-" : "-webkit-";
        Xja = _.Jc ? "ms" : _.Wd ? "Moz" : _.Xd ? "O" : "webkit";
        _.yy = _.xy + "transform";
        _.zy = Xja + "Transform";
        _.Yja = Xja + "Transition";
        (0, _.Sg)(_.x.G(), "sy64");
        (0, _.Wg)(_.x.G(), "sy64");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Ay = function (a, b, c, d) {
            a.style[_.Yja] = (c || _.yy) + " " + b + "ms " + (d || "ease-in-out")
        };
        _.By = function (a) {
            a.style[_.Yja] = ""
        };
        _.Cy = function (a, b, c, d, e, f, g, h) {
            b = "translate3d(" + b + "px," + c + "px," + (d || 0) + "px)";
            e && (b += " rotate(" + e + "deg)");
            (0, _.Ma)(f) && (b += " scale3d(" + f + "," + f + ",1)");
            a.style[_.zy] = b;
            g && (a.style[_.zy + "OriginX"] = g + "px");
            h && (a.style[_.zy + "OriginY"] = h + "px")
        };
        (0, _.Vg)(_.x.G(), "sy65");
        _.Zja = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix("");
        _.$ja = _.jd ? "webkitTransitionEnd" : "transitionend";
        (0, _.Sg)(_.x.G(), "sy65");
        (0, _.Wg)(_.x.G(), "sy65");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var aka = function (a, b, c) {
            a.style.left = b + "px";
            a.style.top = c + "px"
        };
        var Dy = function (a) {
            a = (0, _.wy)(a)[_.zy];
            return "undefined" != typeof window.WebKitCSSMatrix ? new window.WebKitCSSMatrix(a) : "undefined" != typeof window.MSCSSMatrix ? new window.MSCSSMatrix(a) : "undefined" != typeof window.CSSMatrix ? new window.CSSMatrix(a) : {}
        };
        var bka = function (a, b, c, d) {
            if (1E-6 >= Math.abs(b - 0)) return cka;
            1E-6 >= Math.abs(a - b) ? a = [0, 0] : (b = (d - c * b) / (a - b), a = [b, b * a]);
            a = [a[0] / c, a[1] / d];
            c = a[0] * Ey;
            d = a[1] * Ey;
            return [c, d, c + Fy, d + Fy]
        };
        var dka = function () {
            this.$ = (0, _.$a)(this.Z1, this);
            this.J = this.L = 0
        };
        var eka = function (a, b, c, d, e) {
            a = 1.25 * b * Gy;
            Math.abs(a) < Hy && (c < d ? (a = (d - c) * Iy, a = Math.max(a, Jy)) : c > e && (a = (c - e) * Iy, a = -Math.max(a, Jy)));
            return a
        };
        var fka = function (a, b, c, d, e, f, g) {
            if (e) {
                e *= 0.97;
                if (b < c) var h = c - b;
                else b > d && (h = d - b);
                h ? 0 > h * e ? (f = 2 == f ? 0 : 1, e += h * gka) : (f = 2, e = 0 < h ? Math.max(h * Iy, Jy) : Math.min(h * Iy, -Jy)) : f = 0;
                g ? (a.B.y = e, a.L = f) : (a.B.x = e, a.J = f)
            }
        };
        var hka = function () {
            this.A = []
        };
        var ika = function (a) {
            var b = a.A,
                c = b.shift(),
                d = b.shift(),
                e = b.shift(),
                b = b.shift();
            a.jt.nR(c, d, e, b)
        };
        var jka = function () {};
        var kka = function (a) {
            this.A = a;
            this.B = [];
            this.H = (0, _.$a)(this.IZ, this)
        };
        _.Ky = function (a, b, c, d, e, f, g, h) {
            this.la = a;
            this.Ma = a.parentNode;
            this.la.addEventListener(_.$ja, (0, _.$a)(this.W1, this), !1);
            this.Za = new _.ty(this);
            (0, _.vy)(this.Za, f);
            this.H = (0, _.uy)(this.Za, 0, this);
            var k;
            switch (_.lka.A) {
            case 0:
                k = new dka;
                break;
            case 1:
                k = new hka
            }
            k.pS(this);
            this.Jw = k;
            this.Da = !! b;
            this.Md = !! c;
            this.Uc = d;
            this.M = e || 1;
            this.B = Ly.clone();
            this.L = Ly.clone();
            this.$ = Ly.clone();
            this.A = Ly.clone();
            this.Re = 1 == this.M ? _.Cy : aka;
            2 != this.M || (0, _.ge)(this.la);
            (0, _.My)(this, (0, _.Ma)(g) ? g : this.B.x, (0, _.Ma)(h) ?
                h : this.B.y);
            this.Wa = []
        };
        var Ny = function (a) {
            var b = (0, _.Qc)(a.A.x, a.D.x, a.B.x),
                c = (0, _.Qc)(a.A.y, a.D.y, a.B.y);
            a.A.x == b && a.A.y == c || (0, _.My)(a, b, c)
        };
        _.My = function (a, b, c) {
            a.A.x = b;
            a.A.y = c;
            a.Re(a.la, b, c);
            (0, _.iy)(a.la, _.Oy, a)
        };
        var mka = function (a, b, c) {
            a.Jw.stop();
            (0, _.My)(a, b, c)
        };
        var Py = function (a) {
            return a.Md && a.J.width < a.T.width
        };
        var nka = function (a, b, c, d) {
            b < c ? b -= (b - c) / 2 : b > d && (b -= (b - d) / 2);
            return b
        };
        var Qy = function (a, b, c, d, e) {
            a.Q = 0 < c;
            (0, _.Ay)(b, c, d, e)
        };
        var Ry = function (a) {
            Qy(a, a.la, 0);
            (0, _.iy)(a.la, _.Sy, a);
            a.va = !1
        };
        (0, _.Vg)(_.x.G(), "sy63");
        var Fy = 1 / 3,
            Ey = 2 / 3,
            cka = [Fy, Ey, Ey, 1];
        var gka = 7 / 60,
            Iy = 7 / 60,
            Gy = 1E3 / 60,
            Hy = 0.25 * Gy,
            Jy = 0.01 * Gy;
        _.q = dka.prototype;
        _.q.AK = (0, _.ua)(0);
        _.q.start = function (a, b, c, d) {
            this.Q = b;
            this.M = c;
            this.A = d.clone();
            this.H = d.clone();
            b = eka(this, a.x, this.A.x, this.Q.x, this.M.x);
            if (0 > b * a.x || !a.x && b) this.J = 2;
            c = eka(this, a.y, this.A.y, this.Q.y, this.M.y);
            if (0 > c * a.y || !a.y && c) this.L = 2;
            this.B = new _.Rc(b, c);
            if (Math.abs(this.B.y) >= Hy || Math.abs(this.B.x) >= Hy || this.J || this.L) {
                a = [];
                for (b = (0, _.Ve)();;) {
                    do this.A.y += this.B.y, this.A.x += this.B.x, this.V = Math.round(this.A.y), this.T = Math.round(this.A.x), fka(this, this.A.x, this.Q.x, this.M.x, this.B.x, this.J, !1), fka(this, this.A.y,
                        this.Q.y, this.M.y, this.B.y, this.L, !0), b += Gy; while (this.V == this.H.y && this.T == this.H.x && (Math.abs(this.B.y) >= Jy || Math.abs(this.B.x) >= Jy));
                    if (0 == this.J && 0 == this.L && this.V == this.H.y && this.T == this.H.x) break;
                    a.push(b, this.T, this.V);
                    this.H.y = this.V;
                    this.H.x = this.T
                }
                this.D = a;
                if (this.D.length) return this.ca = window.setTimeout(this.$, this.D[0] - (0, _.Ve)()), this.va = !0
            }
        };
        _.q.WS = _.Ga;
        _.q.stop = function () {
            this.va = !1;
            this.D = [];
            window.clearTimeout(this.ca);
            Ry(this.jt)
        };
        _.q.FI = (0, _.ma)("va");
        _.q.pS = (0, _.la)("jt");
        _.q.Z1 = function () {
            if (this.D.length) {
                var a = this.D.splice(0, 3);
                this.jt.nR(a[1], a[2]);
                this.D.length ? (a = this.D[0] - (0, _.Ve)(), this.ca = window.setTimeout(this.$, a)) : this.stop()
            }
        };
        _.q = hka.prototype;
        _.q.cG = -5E-4;
        _.q.AK = (0, _.ua)(1);
        _.q.start = function (a, b, c, d) {
            var e = Math.abs(a.y) >= Math.abs(a.x),
                f = e ? a.y : a.x;
            a = e ? b.y : b.x;
            var g = e ? c.y : c.x,
                h = e ? d.y : d.x;
            b = (0, _.Qc)(e ? d.x : d.y, e ? b.x : b.y, e ? c.x : c.y);
            if (h < a || h > g) a = h < a ? a : g, this.A.push(e ? b : a, e ? a : b, 500, "ease-out");
            else if (0.25 <= Math.abs(f)) {
                d = (c = 0 > f) ? -this.cG : this.cG;
                var k = c ? a - h : g - h,
                    l = f;
                if (k) {
                    var l = f * f,
                        n = 2 * d,
                        p = -l / n;
                    Math.abs(p) < Math.abs(k) ? (k = p, l = 0) : (l = Math.sqrt(l + n * k), l *= 0 > f ? -1 : 1);
                    d = (l - f) / d;
                    this.J = l;
                    this.B = d;
                    this.H = k;
                    f = "cubic-bezier(" + bka(f, this.J, this.B, this.H).join(",") + ")";
                    h = h + this.H;
                    this.A.push(e ?
                        b : h, e ? h : b, this.B, f);
                    l = this.J
                }
                0 != l && (a = c ? a : g, h = 50 * l, g = a + h, this.B = 2 * h / (l + 0), f = "cubic-bezier(" + bka(l, 0, this.B, h).join(",") + ")", this.A.push(e ? b : g, e ? g : b, this.B, f), this.A.push(e ? b : a, e ? a : b, 500, "ease-out"))
            }
            if (this.A.length) return this.D = !0, ika(this), !0
        };
        _.q.WS = function () {
            this.D && (this.A.length ? ika(this) : (this.D = !1, Ry(this.jt)))
        };
        _.q.stop = function () {
            this.D = !1;
            this.A = [];
            Ry(this.jt)
        };
        _.q.FI = (0, _.ma)("D");
        _.q.pS = (0, _.la)("jt");
        _.lka = new jka;
        jka.prototype.A = 1;
        _.q = kka.prototype;
        _.q.initialize = function () {
            var a = this.A.W();
            this.J = a;
            (0, _.Kx)(a, _.Oy, (0, _.$a)(this.XS, this));
            1 == this.A.Jw.AK() && ((0, _.Kx)(a, oka, (0, _.$a)(this.JZ, this)), (0, _.Kx)(a, _.Sy, (0, _.$a)(this.V1, this)))
        };
        _.q.addListener = function (a) {
            this.B.push(a)
        };
        _.q.JZ = function () {
            window.clearInterval(this.D);
            this.D = window.setInterval(this.H, 30)
        };
        _.q.XS = function () {
            if (1 != this.A.Jw.AK() || !this.A.Jw.FI())
                for (var a = this.A.A.x, b = this.A.A.y, c = 0; c < this.B.length; c++) this.B[c].SH(a, b, void 0)
        };
        _.q.V1 = function (a) {
            window.clearInterval(this.D);
            this.XS(a)
        };
        _.q.IZ = function () {
            for (var a = Dy(this.J), b = a.m41, a = a.m42, c = 0; c < this.B.length; c++) this.B[c].SH(b, a, !0)
        };
        var Ly;
        var oka;
        var pka;
        _.Ty = (0, _.jy)("scroller:scroll_start");
        _.Sy = (0, _.jy)("scroller:scroll_end");
        pka = (0, _.jy)("scroller:drag_end");
        _.Oy = (0, _.jy)("scroller:content_moved");
        oka = (0, _.jy)("scroller:decel_start");
        Ly = new _.Rc(0, 0);
        _.q = _.Ky.prototype;
        _.q.HJ = !0;
        _.q.reset = function () {
            this.stop();
            this.H.reset();
            Qy(this, this.la, 0);
            this.RB();
            (0, _.My)(this, (0, _.Fe)(window.document.body) ? this.D.x : this.B.x, this.B.y)
        };
        _.q.RB = function () {
            this.J = new _.Sc(this.Ma.offsetWidth, this.Ma.offsetHeight);
            this.T = new _.Sc(this.Mi || this.la.scrollWidth, this.xh || this.la.scrollHeight);
            var a = new _.Sc(Math.max(this.J.width, this.T.width), Math.max(this.J.height, this.T.height)),
                b = (0, _.Fe)(window.document.body),
                c;
            b ? (c = a.width - this.J.width, c = this.L.x ? Math.min(c, this.L.x) : c) : c = Ly.x - this.L.x;
            this.B = new _.Rc(c, Ly.y - this.L.y);
            this.D = new _.Rc(b ? this.$.x : Math.min(this.J.width - a.width + this.$.x, this.B.x), Math.min(this.J.height - a.height + this.$.y,
                this.B.y));
            Ny(this)
        };
        _.q.qx = function (a, b, c, d) {
            c && 1 == this.M && Qy(this, this.la, c, _.yy, d);
            (0, _.My)(this, a, b)
        };
        _.q.W1 = function (a) {
            a.target == this.la && (this.Q = !1, this.Jw.WS())
        };
        _.q.stop = function () {
            if (this.Jw.FI())
                if (2 == this.M) this.Jw.stop();
                else {
                    var a = Dy(this.la);
                    if (this.Q) {
                        this.A.x = a.m41;
                        this.A.y = a.m42;
                        this.V = !0;
                        var b = this;
                        window.setTimeout(function () {
                            var c = Dy(b.la);
                            Qy(b, b.la, 0);
                            window.setTimeout(function () {
                                b.V = !1
                            }, 0);
                            var d = c.m41 + 2 * (c.m41 - a.m41),
                                c = c.m42 + 2 * (c.m42 - a.m42),
                                d = (0, _.Qc)(d, b.D.x, b.B.x),
                                c = (0, _.Qc)(c, b.D.y, b.B.y);
                            mka(b, d, c)
                        }, 0)
                    } else mka(this, a.m41, a.m42)
                }
        };
        _.q.eA = function (a) {
            if (this.H.H) return !0;
            this.RB();
            this.Jw.FI() ? (a.preventDefault(), this.Gb || a.stopPropagation(), this.stop()) : Qy(this, this.la, 0);
            this.vc = this.A.clone();
            Ny(this);
            return !0
        };
        _.q.dA = (0, _.ka)();
        _.q.RC = function (a) {
            var b = Math.abs((0, _.qy)(this.H)) > Math.abs((0, _.ry)(this.H));
            if (this.kk && !b || !this.Da && (!Py(this) || b)) return !1;
            for (var b = 0, c; c = this.Wa[b]; ++b)
                if (!c.B(this, a)) return !1;
            for (b = 0; c = this.Wa[b]; ++b) c.A(this, a);
            return !0
        };
        _.q.iA = function (a) {
            this.HJ || a.stopPropagation();
            var b = (0, _.ry)(this.H);
            a = (0, _.qy)(this.H);
            if (!this.V) {
                var c = this.vc,
                    b = c.x + b,
                    b = Py(this) ? nka(this, b, this.D.x, this.B.x) : 0;
                a = c.y + a;
                a = this.Da ? nka(this, a, this.D.y, this.B.y) : 0;
                this.va || (this.va = !0, (0, _.iy)(this.la, _.Ty, this));
                (0, _.My)(this, b, a)
            }
        };
        _.q.QC = function () {
            var a = this.H.Q;
            (0, _.iy)(this.la, pka, this);
            if (a && this.Uc && !this.Q) {
                var b;
                Py(this) || (a.x = 0);
                this.Da || (a.y = 0);
                b = this.Jw.start(a, this.D, this.B, this.A)
            }
            b ? (0, _.iy)(this.la, oka, this) : (Ny(this), (0, _.iy)(this.la, _.Sy, this), this.va = !1)
        };
        _.q.W = (0, _.ma)("la");
        _.q.nR = _.Ky.prototype.qx;
        _.q.cE = function (a) {
            this.ca || (this.ca = new kka(this), this.ca.initialize());
            this.ca.addListener(a)
        };

        (0, _.Sg)(_.x.G(), "sy63");
        (0, _.Wg)(_.x.G(), "sy63");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var fN = function (a, b, c) {
            this.type = a;
            this.A = b;
            this.target = c
        };
        _.gN = function (a, b, c, d) {
            fN.call(this, 1, a, b);
            this.x = c;
            this.y = d
        };
        _.hN = function (a, b, c, d, e, f, g, h, k, l) {
            fN.call(this, 3, a, b);
            this.direction = c;
            this.touches = d;
            this.B = e;
            this.x = g;
            this.y = h;
            this.velocityX = k;
            this.velocityY = l
        };
        var Eya = function (a, b, c) {
            this.target = a;
            this.type = b;
            this.Un = c
        };
        _.iN = function (a, b, c) {
            (0, _.$e)(a, b, c);
            return new Eya(a, b, c)
        };
        _.jN = function (a, b) {
            var c = "gt" + Fya++;
            kN.set(c, b);
            "_GTL_" in a || (a._GTL_ = []);
            a._GTL_.push(c);
            return c
        };
        _.lN = function (a) {
            var b = kN.get(a);
            if (b && b.length) {
                for (var c, d = null, e = 0; e < b.length; e++) c = b[e], c instanceof Eya ? ((0, _.af)(c.target, c.type, c.Un), d = c.target) : c();
                kN.remove(a);
                d && "_GTL_" in d && (0, _.Ib)(d._GTL_, a)
            }
        };
        _.mN = function () {};
        _.nN = function (a) {
            return !a || 0 == a.x && 0 == a.y ? 0 : Math.abs(a.x) > Math.abs(a.y) ? 0 < a.x ? 6 : 4 : 0 < a.y ? 5 : 3
        };
        _.oN = function (a, b) {
            return 0 == b || 2 >= b && a % 2 == b % 2 ? !0 : a == b
        };
        _.pN = function () {
            (0, _.Sj)(this)
        };
        _.qN = function (a) {
            return a.jt
        };
        _.rN = function (a, b) {
            return (0, _.qN)(_.pN.G()).D(a, b)
        };
        (0, _.Vg)(_.x.G(), "sy111");
        (0, _.db)(_.gN, fN);
        (0, _.db)(_.hN, fN);
        var kN = new _.oc,
            Fya = 0;
        (0, _.db)(_.mN, _.Oj);
        _.mN.prototype.D = (0, _.Rj)();
        _.mN.prototype.B = (0, _.Rj)();
        (0, _.Pj)(_.mN, _.pN);
        (0, _.Ia)(_.pN);
        var uN = function () {};
        (0, _.db)(uN, _.mN);
        (0, _.Qj)(uN, _.mN);
        uN.prototype.D = function (a, b) {
            var c = [(0, _.iN)(a, "click", function (c) {
                b(new _.gN(c, a, c.screenX, c.screenY))
            }), (0, _.iN)(a, "keydown", function (c) {
                var e = c.which || c.keyCode || c.key,
                    f = a.tagName.toUpperCase();
                "TEXTAREA" == f || ("BUTTON" == f || "INPUT" == f || a.isContentEditable) || (c.ctrlKey || (c.shiftKey || c.altKey || c.metaKey) || 13 != e && 32 != e && 3 != e) || (32 == e && c.preventDefault(), b(c))
            })];
            return (0, _.jN)(a, c)
        };
        uN.prototype.B = function (a, b, c, d, e, f, g) {
            function h(b) {
                if ((0, _.oN)(r, n)) {
                    (0, _.af)(a, "mousemove", k);
                    (0, _.af)(a, "mouseup", h);
                    (0, _.af)(a, "mouseout", h);
                    var c = (0, _.gy)(w, t, s, b.timeStamp);
                    d && d(new _.hN(b, a, r, 1, p, m, b.screenX, b.screenY, c.x, c.y));
                    g || (0, _.by)(p, m)
                }
            }

            function k(c) {
                if (G) {
                    t = c.screenX;
                    s = c.screenY;
                    var d = (0, _.ey)(w, t, s, c.timeStamp);
                    r = (0, _.nN)(d);
                    (0, _.oN)(r, n) && b(new _.hN(c, a, r, 1, p, m, t, s, d.x, d.y))
                }
            }

            function l(a) {
                G = a
            }
            var n = e || 0,
                p, m, t, s, r, w = new _.cy,
                G = !1;
            e = [(0, _.iN)(a, "mousedown", function (b) {
                p = t = b.screenX;
                m = s = b.screenY;
                (0, _.dy)(w, p, m, b.timeStamp);
                c && c(new _.hN(b, a, 0, 1, p, m, t, s, 0, 0));
                (0, _.$e)(a, "mousemove", k);
                (0, _.$e)(a, "mouseup", h);
                (0, _.$e)(a, "mouseout", h)
            }), (0, _.iN)(window.document.body, "mousedown", (0, _.ab)(l, !0)), (0, _.iN)(window.document.body, "mouseup", (0, _.ab)(l, !1))];
            return (0, _.jN)(a, e)
        };

        (0, _.Sg)(_.x.G(), "sy111");
        (0, _.Wg)(_.x.G(), "sy111");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.qOa = function () {
            for (var a = 0; a < _.Y0.length; a++) _.Y0[a].B()
        };
        (0, _.Vg)(_.x.G(), "sy134");
        _.Y0 = [];
        (0, _.Sg)(_.x.G(), "sy134");
        (0, _.Wg)(_.x.G(), "sy134");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Z0 = function (a, b, c, d) {
            this.D = a;
            this.Bc = b;
            this.J = !! c;
            this.gh = d ? d : null;
            this.A = null;
            this.H = (0, _.rN)(this.D, (0, _.$a)(this.M, this));
            (0, _.Nf)(93, (0, _.$a)(this.B, this));
            _.Y0.push(this)
        };
        var $0 = function (a, b, c) {
            this.D = a;
            this.Bc = b;
            this.H = (0, _.v)("hdtb_rst");
            c && (this.gh = c);
            this.A = (0, _.v)("appbar");
            this.J = [];
            a = this.Bc.querySelectorAll("div.hdtb-mn-hd");
            b = this.Bc.querySelectorAll("ul.hdtbU");
            c = a.length;
            for (var d = 0; d < c; d++) {
                var e = a[d],
                    f = b[d];
                e && f && this.J.push(new Z0(e, f, !1, rOa))
            }(0, _.rN)(this.D, (0, _.$a)(this.M, this));
            this.H && (0, _.rN)(this.H, (0, _.$a)(this.L, this));
            (0, _.Nf)(102, (0, _.$a)(this.B, this));
            this.B();
            a1(this);
            b1(this, c1(this))
        };
        var rOa = function (a, b) {
            var c = window.document.body || window.document.documentElement,
                d = (0, _.Fe)(c),
                e = d ? "right" : "left",
                f = {
                    x: (0, _.re)(a),
                    y: (0, _.me)(a).y
                }, g = (0, _.re)((0, _.ad)("hdtb-mn-cont")) - (0, _.re)((0, _.v)("images-grid")),
                h = f.x - 15 - g,
                k = (0, _.ze)(a);
            d && (h = (0, _.ze)(c).width - f.x - k.width - 15 + g);
            c = k.height + f.y + "px";
            k = k.width + 30 + 30 + "px";
            b.style[e] = h + "px";
            (0, _.ae)(b, {
                top: c,
                "min-width": k
            })
        };
        var sOa = function (a) {
            for (var b = a.J.length, c = 0; c < b; ++c) a.J[c].B()
        };
        var tOa = function (a) {
            a.gh && a.gh();
            b1(a, !0);
            (0, _.Tf)(a.Bc, "hdtb-td-c");
            (0, _.Tf)(a.Bc, "hdtb-td-h");
            window.setTimeout((0, _.$a)(function () {
                (0, _.Sf)(this.Bc, "hdtb-td-o");
                this.A && (0, _.Sf)(this.A, "hdtb-ab-o");
                this.B();
                a1(this)
            }, a), 0)
        };
        var uOa = function (a, b) {
            b1(a, !1);
            sOa(a, b);
            window.setTimeout((0, _.$a)(function () {
                (0, _.Tf)(this.Bc, "hdtb-td-o");
                (0, _.Sf)(this.Bc, "hdtb-td-c");
                this.A && (0, _.Tf)(this.A, "hdtb-ab-o");
                this.B();
                a1(this)
            }, a), 0)
        };
        var c1 = function (a) {
            return "hdtb-td-o" == a.Bc.className
        };
        var a1 = function (a) {
            var b = (0, _.v)("epbar"),
                c = (0, _.v)("slim_appbar");
            c && (!(0, _.De)(c) && b) && (b.style.marginTop = c1(a) ? 10 + a.Bc.offsetHeight + "px" : "10px")
        };
        var b1 = function (a, b) {
            (0, _.Rf)(a.D, "hdtb-tl-sel", b)
        };
        var vOa = function (a, b) {
            var c = window.document.body || window.document.documentElement,
                d = (0, _.Fe)(c),
                e = d ? "right" : "left",
                f = (0, _.re)(a);
            d && (f = (0, _.ze)(c).width - f - (0, _.ze)(a).width);
            b.style[e] = f + "px"
        };
        var wOa = function () {
            !d1 && xOa && yOa()
        };
        var yOa = function () {
            var a = (0, _.$c)("hdtb-mn-cont")[0];
            d1 = new _.Ky(a, !1, !0, !0, 1, !0);
            d1.HJ = !0;
            d1.Gb = !0;
            d1.RB();
            var a = (0, _.$c)("hdtb-msel", a)[0],
                b = 0;
            a && (b = window.document.body || window.document.documentElement, b = (0, _.Fe)(b) ? Math.min((0, _.re)(a) - (0, _.re)(b), d1.B.x) : Math.max(-(0, _.re)(a), d1.D.x));
            d1.qx(b, 0);
            (0, _.$e)(window.document, "orientationChange", d1.RB)
        };
        Z0.prototype.B = function () {
            (0, _.Tf)(this.Bc, "hdtb-mn-o");
            (0, _.Sf)(this.Bc, "hdtb-mn-c");
            this.A && (0, _.af)(window.document.body, "click", this.A)
        };
        Z0.prototype.M = function (a) {
            var b = (0, _.Vf)(this.Bc, "hdtb-mn-c");
            this.J && (0, _.Hi)(this.D, [this.D], [b]);
            b ? ((0, _.Qf)(93), (0, _.Di)(a.A || a), this.gh && this.gh(this.D, this.Bc), (0, _.Tf)(this.Bc, "hdtb-mn-c"), (0, _.Sf)(this.Bc, "hdtb-mn-o"), this.A = (0, _.$a)(this.L, this), (0, _.$e)(window.document.body, "click", this.A)) : this.B()
        };
        Z0.prototype.L = function (a) {
            (0, _.Hd)(this.Bc, (0, _.Ci)(a.A || a)) || this.B()
        };
        Z0.prototype.dispose = function () {
            (0, _.lN)(this.H);
            this.H = "";
            this.A && ((0, _.af)(window.document.body, "click", this.A), this.A = null)
        };
        var xOa, d1;
        (0, _.Vg)(_.x.G(), "tnv");
        $0.prototype.M = function (a) {
            var b = !c1(this);
            (0, _.Hi)(this.D, [this.Bc], [b]);
            b ? tOa(this, a) : uOa(this, a);
            (0, _.qOa)()
        };
        $0.prototype.L = function () {
            (0, _.Yf)(this.H.getAttribute("data-url"))
        };
        $0.prototype.B = function () {
            var a = (0, _.v)("botabar");
            a && (0, _.De)(a) && ((0, _.ze)(a), a.style.marginTop = c1(this) ? this.Bc.offsetHeight + "px" : 0);
            this.A && (0, _.Rf)(this.A, "hdtb-ab-o", c1(this))
        };
        (0, _.vf)("tnv", {
            init: function (a) {
                var b = (0, _.v)("hdtb_more"),
                    c = (0, _.v)("hdtb_more_mn");
                b && c && new Z0(b, c, !0, vOa);
                b = (0, _.v)("hdtb_tls");
                c = (0, _.v)("images-grid");
                b && c && new $0(b, c, wOa);
                (xOa = a.t) && (null !== c && (0, _.Vf)(c, "hdtb-td-o")) && yOa();
                if (b = (0, _.v)("hdtbSum")) {
                    a = 4;
                    b = b.childNodes;
                    for (c = 0; c < b.length; ++c) a += b[c].clientWidth;
                    b = (0, _.v)("top_nav");
                    null !== b && (c = (0, _.ee)(b, "minWidth") || (b.currentStyle ? b.currentStyle.minWidth : null), (0, window.isFinite)(c) && (c = String(c)), c = (0, _.Ra)(c) ? /^\s*-?0x/i.test(c) ? (0, window.parseInt)(c, 16) : (0, window.parseInt)(c, 10) : window.NaN, !c || a > c) && (b.style.minWidth = a + "px")
                }
            },
            dispose: function () {
                for (var a = 0; a < _.Y0.length; a++) _.Y0[a].dispose();
                _.Y0 = []
            }
        });


        (0, _.Sg)(_.x.G(), "tnv");
        (0, _.Wg)(_.x.G(), "tnv");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Fl = function (a, b) {
            a instanceof Array ? Gl(this, a) : b ? Gl(this, [(0, _.re)(a), (0, _.se)(a), a.offsetWidth, a.offsetHeight]) : Gl(this, [a.offsetLeft, a.offsetTop, a.offsetWidth, a.offsetHeight])
        };
        var Gl = function (a, b) {
            a.left = b[0];
            a.top = b[1];
            a.width = b[2];
            a.height = b[3];
            a.right = a.left + a.width;
            a.bottom = a.top + a.height
        };
        var Hl = function (a, b) {
            a.left = b;
            a.right = a.left + a.width
        };
        var Il = function (a, b) {
            a.top = b;
            a.bottom = a.top + a.height
        };
        var Jl = function (a, b) {
            a.height = b;
            a.bottom = a.top + a.height
        };
        var Kl = function (a, b, c) {
            return Math.min(b - a.left, a.right - b, c - a.top, a.bottom - c)
        };
        var Ll = function (a, b) {
            Hl(a, Math.max(a.left, b.left));
            var c = Math.min(a.right, b.right);
            a.right = c;
            a.left = a.right - a.width;
            Il(a, Math.max(a.top, b.top));
            c = Math.min(a.bottom, b.bottom);
            a.bottom = c;
            a.top = a.bottom - a.height
        };
        var Ml = function (a) {
            var b = window.pageYOffset || window.document.body.scrollTop || window.document.documentElement.scrollTop || 0;
            Hl(a, a.left - (window.pageXOffset || window.document.body.scrollLeft || window.document.documentElement.scrollLeft || 0));
            Il(a, a.top - b)
        };
        var Nl = function (a, b) {
            Hl(b, Math.round((a.width - b.width) / 2) + a.left);
            Il(b, Math.round((a.height - b.height) / 2) + a.top)
        };
        var Ol = function (a, b, c) {
            b.setAttribute("style", ["left:", a.left, "px;top:", a.top, "px;width:", a.width, "px;", c ? "height:" + a.height + "px" : ""].join(""))
        };
        var Pl = function (a, b) {
            b.setAttribute("style", ["width:", a.width, "px;height:", a.height, "px"].join(""))
        };
        var Ql = function () {
            this.B = this.A = this.y = this.x = this.t = window.NaN
        };
        var Rl = function (a, b) {
            return (0, window.isNaN)(a) ? b : 0.6 * b + 0.4 * a
        };
        var Sl = function () {
            this.B = null;
            this.H = {};
            this.D = 0;
            this.L = [];
            this.Q = (0, _.$a)(this.V, this);
            (0, _.$e)(window.document, "mousemove", this.Q)
        };
        var Tl = function (a, b, c) {
            a.L.push({
                time: b,
                Xz: c
            })
        };
        var $ba = function (a, b) {
            a.A = b;
            a.M = !0;
            a.J = 0;
            a.T = 0.25 * Math.min(b.width, b.height);
            aca(a)
        };
        var aca = function (a) {
            a.D || (a.B = new Ql, a.D = window.setTimeout(function () {
                Ul(a)
            }, 30))
        };
        var Ul = function (a) {
            var b = (0, _.Ve)(),
                c = a.H.x,
                d = a.H.y,
                e = b - a.B.t;
            a.B.update(b, c, d, (c - a.B.x) / e, (d - a.B.y) / e);
            a.M && bca(a, e) && a.clear();
            a.D && (a.D = window.setTimeout(function () {
                Ul(a)
            }, 30))
        };
        var bca = function (a, b) {
            if (!b) return !1;
            var c;
            c = a.B;
            var d = c.x;
            c.A && (d += 3E3 * c.A);
            var e = c.y;
            c.B && (e += 3E3 * c.B);
            c = {
                x: d,
                y: e
            };
            c = Kl(a.A, c.x, c.y);
            d = Kl(a.A, a.B.x, a.B.y);
            if (0 > c || 0 > d) a.J = 0;
            else {
                d < a.T && (b *= Math.max(d / a.T, 0.25));
                a.J += b;
                c = !1;
                for (d = 0; e = a.L[d++];) e.time && a.J >= e.time && (e.Xz(), e.time = 0), e.time && (c = !0);
                if (!c) return !0
            }
            return !1
        };
        _.Vl = function (a, b, c) {
            if (Wl[a]) return !1;
            var d = (0, _.$c)(a);
            if (!d || 0 == d.length) return !1;
            Xl.push(a);
            Wl[a] = {
                render: b,
                log: c,
                tU: null
            };
            Yl(a, "mouseover", Zl);
            _.sc.Hc && (Yl(a, "click", $l), Yl(a, "mousedown", am));
            return !0
        };
        var Zl = function (a) {
            if (!bm) {
                a || (a = window.event);
                a = a.target || a.srcElement;
                var b = cm(a, Xl);
                if (b && (dm = b.className, !a || "A" == a.tagName || "IMG" == a.tagName) && (a = cm(a, "uh_r"))) {
                    window.clearTimeout(em);
                    var c = fm(a);
                    c.docid != gm.targetDocId && (hm(), em = window.setTimeout(function () {
                        im(c)
                    }, 0))
                }
            }
        };
        var cm = function (a, b) {
            function c(a) {
                return (0, _.Fd)(a) && (0, _.Vf)(a, b)
            }

            function d(a) {
                return (0, _.Fd)(a) && (0, _.Ig)(b, function (b) {
                    return (0, _.Vf)(a, b)
                })
            }
            var e = (0, _.Oa)(b) ? d : c;
            return (0, _.Pd)(a, e, !0, 7)
        };
        _.jm = function (a, b) {
            var c = (0, _.v)(a);
            return c ? cm(c, b) : null
        };
        var im = function (a) {
            var b = a.docid;
            (0, _.jm)(b, "uh_rl");
            gm.resultInfo && hm();
            var c = (0, _.v)(b),
                c = c ? c.getElementsByTagName("img") : [],
                d = 0 < c.length ? c[0] : null;
            c && "ri_of" == d.className || (gm.resultInfo = a, gm.targetDocId = b, gm.startTime = (0, _.Ve)(), cca(), (0, _.$e)(window.document, "mousemove", km), Tl(lm, 25, function () {
                var a = Wl[dm];
                a && a.render(gm)
            }), Tl(lm, 130, function () {
                dca()
            }), $ba(lm, mm))
        };
        var fm = function (a) {
            var b = {}, c = a.getElementsByTagName("a")[0];
            a = new Fl(a, !0);
            Il(a, a.top + Math.max(c.offsetTop, 0));
            Hl(a, a.left + Math.max(c.offsetLeft, 0));
            var d = Math.min(a.width, c.offsetWidth);
            a.width = d;
            a.right = a.left + a.width;
            Jl(a, Math.min(a.height, c.offsetHeight));
            b.rect = a;
            b.DY = new Fl(c, !0);
            b.docid = c.id;
            return b
        };
        var nm = function () {
            (0, _.v)("uh_h") && (om = new Fl([12, 12, window.document.documentElement.clientWidth - 12 - 16, window.document.documentElement.clientHeight - 12 - 12]))
        };
        var eca = function () {
            var a = (0, _.Rd)(window.document);
            pm != a ? pm = a : hm()
        };
        var qm = function (a) {
            a || (a = window.event);
            rm(a);
            sm.target ? tm() : hm();
            return !0
        };
        var um = function (a) {
            lm.clear();
            a.button != (_.sc.Hc ? 1 : 0) && rm(a)
        };
        var Yl = function (a, b, c) {
            if (a = (0, _.$c)(a))
                for (var d = 0; d < a.length; ++d)(0, _.$e)(a[d], b, c)
        };
        var $l = function (a) {
            a || (a = window.event);
            vm(a) && (gm.targetDocId || wm(a), qm(a))
        };
        var am = function (a) {
            a || (a = window.event);
            vm(a) && (gm.targetDocId || wm(a), um(a))
        };
        var vm = function (a) {
            a = a.target || a.srcElement;
            return !(!a || !cm(a, "uh_r")) && "IMG" == a.tagName
        };
        var rm = function () {
            var a = (0, _.jm)(gm.targetDocId, "uh_rl");
            if (a) {
                if (null != gm.startTime) {
                    var b = (0, _.Ve)() - gm.startTime;
                    xm(a, "dur", b);
                    gm.startTime = null
                }
                sm.href = a.href
            }
        };
        var xm = function (a, b, c) {
            var d = a.href.match(/^(.*)\?(.*?)(#.*)?$/);
            if (d) {
                for (var e = d[2].split("&"), f = b + "=", g = d[3] || "", h = 0; h < e.length; h++)
                    if (0 == e[h].indexOf(f)) {
                        e[h] = b + "=" + c;
                        a.href = d[1] + "?" + e.join("&") + g;
                        return
                    }
                a.href = d[1] + "?" + d[2] + "&" + b + "=" + c + g
            } else d = a.href.match(/^([^#]*)(#.*)?$/), g = d[2] || "", a.href = d[1] + "?" + b + "=" + c + g
        };
        var ym = function () {
            if (!gm.element) return !0;
            var a = -1;
            null != gm.startTime && (a = (0, _.Ve)() - gm.startTime);
            for (var b = gm.element.getElementsByTagName("a"), c = 0, d; d = b[c]; c++) null != gm.startTime && xm(d, "dur", a);
            gm.startTime = null;
            return !0
        };
        var km = function (a) {
            a || (a = window.event);
            (zm ? mm : gm.rect).contains(a.clientX, a.clientY) || hm()
        };
        var hm = function () {
            (0, _.af)(window.document, "mousemove", km);
            window.clearTimeout(em);
            window.clearTimeout(Am);
            lm && lm.clear();
            gm.element && ("uh_hv" == gm.element.className && null != gm.startTime && Wl[dm].log(gm), (0, _.af)(gm.element, "mousedown", ym), gm.element.onmouseout = null, gm.element.className = "uh_h", gm.element = null);
            Bm();
            mm = null;
            gm.targetDocId = "";
            gm.startTime = null;
            gm.resultInfo = null;
            gm.image = null
        };
        var cca = function () {
            var a = gm.resultInfo.rect.clone();
            Ml(a);
            Ol(a, Cm, !0);
            Cm.className = "v";
            mm = _.sc.Hc ? new Fl([a.left - 5, a.top - 5, a.width + 10, a.height + 10]) : new Fl(Cm);
            Cm.onmouseout = function () {
                hm()
            };
            zm = !0
        };
        var Bm = function () {
            Cm && (Cm.onmouseout = null, Cm.className = "");
            zm = !1
        };
        var dca = function () {
            if (gm.element && gm.image || Wl[dm].render(gm)) {
                (0, _.$e)(gm.element, "mousedown", ym);
                gm.element.style.overflow = "hidden";
                var a = +gm.image.getAttribute("data-width"),
                    b = +gm.image.getAttribute("data-height"),
                    c = gm.image.style;
                c.width = c.height = gm.element.style.height = "";
                gm.element.className = "uh_hp";
                var d = Math.max(a, _.Dm),
                    c = gm.element.offsetHeight + 1,
                    e = gm.resultInfo.DY,
                    f = new Fl([0, 0, e.width, e.height]),
                    d = new Fl([0, 0, d, b]),
                    a = new Fl([0, 0, a, b]);
                Nl(e, f);
                Nl(e, d);
                Jl(d, c);
                Ml(f);
                Ml(d);
                Ll(f, om);
                Ll(d, om);
                gm.rect = _.sc.Hc ? new Fl([d.left - 10, d.top - 10, d.width + 20, d.height + 20]) : d.clone();
                Bm();
                Em(f, d, a, (0, _.Ve)());
                gm.element.onmouseout = function (a) {
                    a || (a = window.event);
                    var b = a.target || a.srcElement;
                    if (b == this) {
                        for (a = a.relatedTarget ? a.relatedTarget : a.toElement; a && a != b && "BODY" != a.nodeName;) a = a.parentNode;
                        a != b && hm()
                    }
                };
                _.sc.Hc || (a = (0, _.jm)(gm.targetDocId, "uh_r"), b = (0, _.jm)(gm.targetDocId, "image-grid"), a && b && ((a = a.nextSibling) ? b.insertBefore(gm.element, a) : b.appendChild(gm.element)));
                gm.element.className = "uh_hv"
            }
        };
        var Em = function (a, b, c, d) {
            var e;
            if (_.sc.Hc) e = 1;
            else {
                e = ((0, _.Ve)() - d) / 100;
                var f = +gm.image.getAttribute("data-width"),
                    g = +gm.image.getAttribute("data-height"),
                    h = (0, _.v)(gm.targetDocId);
                h && (f == h.width && g == h.height) && (e = 1)
            }
            1 > e ? (e = 0.5 > e ? 2 * e * e : 1 - 2 * (e - 1) * (e - 1), Ol(Fm(a, b, e), gm.element, !0), Pl(Fm(a, c, e), gm.image), Am = window.setTimeout(function () {
                Em(a, b, c, d)
            }, 5)) : (Ol(b, gm.element, !1), Pl(c, gm.image), _.sc.Hc || (gm.rect = new Fl(gm.element)), gm.startTime = (0, _.Ve)(), gm.element.style.overflow = "")
        };
        var Fm = function (a, b, c) {
            return new Fl([+(Math.round(b.left - a.left) * c + a.left).toFixed(0), +(Math.round(b.top - a.top) * c + a.top).toFixed(0), +(Math.round(b.width - a.width) * c + a.width).toFixed(0), +(Math.round(b.height - a.height) * c + a.height).toFixed(0)])
        };
        var Gm = function () {
            (0, _.v)("uh_h") && tm()
        };
        var Hm = function (a) {
            27 == a.which && hm()
        };
        var tm = function () {
            bm = Im.s = !0;
            hm();
            (0, _.$e)(window.document, "mousemove", Jm)
        };
        var Jm = function (a) {
            (0, _.af)(window.document, "mousemove", Jm);
            n: {
                Im.s = !1;
                for (var b in Im)
                    if (Im[b]) break n;
                bm = !1
            }
            bm || (a || (a = window.event), wm(a))
        };
        var wm = function (a) {
            var b = a.target || a.srcElement;
            null === b || (b = cm(b, Xl));
            b && (dm = b.className, b = a.target || a.srcElement, null === b || (b = cm(b, "uh_r")), b && im(fm(b)))
        };
        _.Km = function (a) {
            dm == a && (dm = "");
            var b = (0, _.Gb)(Xl, a); - 1 != b && Xl.splice(b, 1);
            if (b = (0, _.$c)(a))
                for (var c = 0; b && c < b.length; ++c)(0, _.af)(b[c], "mouseover", Zl);
            if (_.sc.Hc)
                for (b = (0, _.$c)(a); b && c < b.length; ++c)(0, _.af)(b[c], "mousedown", am), (0, _.af)(b[c], "click", $l);
            delete Wl[a]
        };
        (0, _.Vg)(_.x.G(), "sy12");
        Fl.prototype.clone = function () {
            return new Fl([this.left, this.top, this.width, this.height])
        };
        Fl.prototype.contains = function (a, b) {
            return 0 <= Kl(this, a, b)
        };
        Ql.prototype.update = function (a, b, c, d, e) {
            this.t = Rl(this.t, a);
            this.x = Rl(this.x, b);
            this.y = Rl(this.y, c);
            this.A = Rl(this.A, d);
            this.B = Rl(this.B, e)
        };
        Sl.prototype.dispose = function () {
            (0, _.af)(window.document, "mousemove", this.Q)
        };
        Sl.prototype.clear = function () {
            this.M && (this.D && (window.clearTimeout(this.D), this.D = 0), this.M = !1, this.L = [])
        };
        Sl.prototype.V = function (a) {
            a || (a = window.event);
            this.H.x = a.clientX;
            this.H.y = a.clientY
        };
        var pm;
        var em;
        var Am;
        var mm;
        var sm;
        var Cm;
        var zm;
        var om;
        var Im;
        var bm;
        var gm;
        var lm;
        var dm;
        var Xl;
        var Wl;
        _.Dm = 160;
        Wl = {};
        Xl = [];
        dm = "";
        lm = null;
        gm = {
            element: null,
            image: null,
            rect: null,
            Ma: null,
            Wa: "",
            startTime: null
        };
        bm = !1;
        Im = {};
        om = null;
        zm = !1;
        Cm = null;
        sm = null;
        mm = null;
        Am = 0;
        em = 0;
        pm = null;
        (0, _.vf)("hv", {
            init: function () {
                (0, _.v)("uh_h") && (_.Dm = 160, (0, _.$e)(_.sc.Hc ? window : window.document, "scroll", Gm), (0, _.$e)(window.document, "keydown", function (a) {
                    Hm(a)
                }), (0, _.$e)(window, "resize", nm), _.sc.Hc ? (pm = (0, _.Rd)(window.document), (0, _.$e)(window.document, "focusout", function () {
                    var a = (0, _.Rd)(window.document);
                    pm != a ? pm = a : hm()
                })) : window.onblur = function () {
                    hm()
                }, nm(), Cm = (0, _.v)("uh_hp"), (sm = (0, _.v)("uh_hpl")) && !_.sc.Hc && ((0, _.$e)(sm, "click", qm), (0, _.$e)(sm, "mousedown", um)), lm = new Sl)
            },
            dispose: function () {
                lm &&
                    lm.dispose();
                (0, _.af)(window.document, "mousemove", km);
                gm.element && (0, _.af)(gm.element, "mousedown", ym);
                for (var a in Wl)(0, _.Km)(a);
                (0, _.af)(_.sc.Hc ? window : window.document, "scroll", Gm);
                (0, _.af)(window.document, "keydown", Hm);
                _.sc.Hc && (0, _.af)(window.document, "focusout", eca);
                (0, _.af)(window.document, "mousemove", Jm);
                (0, _.af)(window, "resize", nm)
            }
        });

        (0, _.Sg)(_.x.G(), "sy12");
        (0, _.Wg)(_.x.G(), "sy12");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        (0, _.Vg)(_.x.G(), "hv");
        (0, _.Sg)(_.x.G(), "hv");
        (0, _.Wg)(_.x.G(), "hv");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Tca = function () {
            var a = (0, _.v)("lc-input");
            if (a.value != window.google.loc.m4) return !1;
            var b = (0, _.Ne)("div", a.value);
            b.setAttribute("class", a.getAttribute("class"));
            b.style.cssText = a.style.cssText;
            b.style.visibility = "hidden";
            b.style.position = "absolute";
            b.style.width = "auto";
            b.style.whiteSpace = "nowrap";
            a.parentNode.appendChild(b);
            a = b.offsetWidth > a.offsetWidth;
            (0, _.yd)(b);
            return a
        };
        var Tq = function () {
            Uq = !1;
            var a = (0, _.v)("lc-input");
            a && (Vq = new _.Sq(a, window.google.loc.m4, 1, Tca));
            (0, _.ji)("loc", {
                dloc: Wq,
                ead: Xq,
                elc: Yq,
                stt: Uca,
                htt: Vca
            })
        };
        var Wca = function () {
            Vq && (Vq.destroy(), Vq = null)
        };
        var Zq = function (a, b, c) {
            var d = (0, _.v)("set_location_section");
            "" != a.innerHTML && (d.style.height = d.offsetHeight - a.offsetHeight - 4 + "px");
            var e = d.offsetHeight,
                f = "";
            c && (f = "color:#c11;");
            a.innerHTML = '<div style="' + f + 'margin-top:3px">' + b + "</div>";
            a.style.display = "block";
            d.offsetHeight == e && (d.style.height = d.offsetHeight + a.offsetHeight + 4 + "px")
        };
        var Xca = function () {
            var a = {
                q: (0, _.dg)("q"),
                changed_loc: 1
            };
            (0, _.$f)(a)
        };
        var Yca = function (a, b) {
            var c = (0, _.v)("error_section"),
                d = (0, _.pi)();
            d.onreadystatechange = function () {
                if (4 == d.readyState)
                    if (200 != d.status || d.responseText) 200 == d.status && d.responseText ? d.responseText.match("\n") ? Zq(c, d.responseText.split("\n")[0], !0) : Zq(c, d.responseText, !1) : Zq(c, window.google.loc.m3, !0);
                    else {
                        c.innerHTML = "";
                        try {
                            var a = (0, _.Mf)();
                            a && a.Mb()
                        } catch (e) {
                            window.google.log("location_widget_make_uul_request", "&err=" + e, "", b)
                        }
                        Xca()
                    }
            };
            var e = "/uul?muul=4_18" + a + "&usg=" + (0, window.encodeURIComponent)(window.google.loc.s) +
                "&hl=" + window.google.kHL,
                f = (0, _.dg)("host");
            f && (e += "&host=" + f);
            d.open("GET", e, !0);
            d.send(null)
        };
        var Xq = function (a) {
            window.google.log("location_widget_enable_autodetect", "", "", a);
            Yca("&uulo=2", a)
        };
        var Zca = function (a) {
            if (!a) return null;
            var b = a.offsetHeight,
                c = (0, _.jg)(a, "overflow", !0);
            a.style.overflow = "hidden";
            return {
                Be: b,
                ZL: c
            }
        };
        var Yq = function () {
            if (!Uq) {
                Uq = !0;
                var a = (0, _.v)("lc"),
                    b = (0, _.v)("set_location_section");
                a.className = "lco";
                var c = Zca(b);
                (0, _.Te)(227, [
                    [b, "height", 0, c.Be],
                    [b, "opacity", 0, 1, null, ""]
                ], function () {
                    window.google.log("location_widget", "&open=1", "", a);
                    b.style.removeAttribute && b.style.removeAttribute("filter");
                    b.style.overflow = c.ZL;
                    b.style.height = ""
                })
            }
        };
        var Uca = function () {
            var a = (0, _.v)("lc-input");
            "" == a.value && (a.value = window.google.loc.m4, a.style.color = "#666666")
        };
        var Vca = function () {
            var a = (0, _.v)("lc-input");
            a.value == window.google.loc.m4 && (a.value = "", a.style.color = "#000000")
        };
        var Wq = function () {
            var a = (0, _.v)("error_section");
            window.google.devloc ? window.google.devloc.pnlic(Xca, function () {
                Zq(a, window.google.loc.m5, !0)
            }) : Zq(a, window.google.loc.m5, !0)
        };
        (0, _.Vg)(_.x.G(), "lc");
        var Vq, Uq = !1;
        (0, _.za)("google.loc.init", Tq, void 0);
        (0, _.za)("google.loc.dispose", Wca, void 0);
        (0, _.za)("google.loc.devloc", Wq, void 0);
        (0, _.za)("google.loc.submit", function () {
            var a = (0, _.v)("lc-input"),
                b = a.value;
            b ? (window.google.log("location_widget_change_location", "", "", a), Yca("&luul=" + (0, window.encodeURIComponent)(b) + "&uulo=1", a)) : Xq(a);
            return !1
        }, void 0);
        (0, _.za)("google.loc.enableAutoDetect", Xq, void 0);
        (0, _.za)("google.loc.expandLocationChange", Yq, void 0);
        (0, _.za)("google.loc.b", Uca, void 0);
        (0, _.za)("google.loc.f", Vca, void 0);
        (0, _.vf)("lc", {
            init: Tq,
            dispose: Wca
        });

        (0, _.Sg)(_.x.G(), "lc");
        (0, _.Wg)(_.x.G(), "lc");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        (0, _.Vg)(_.x.G(), "ob");
        (0, _.Sg)(_.x.G(), "ob");
        (0, _.Wg)(_.x.G(), "ob");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Yr = function (a, b, c) {
            c ? (0, _.Lc)(a, b) : (0, _.Nc)(a, b)
        };
        _.Zr = function (a) {
            this.T = a;
            this.L = {}
        };
        (0, _.Vg)(_.x.G(), "sy32");
        (0, _.db)(_.Zr, _.ng);
        var cea = [];
        _.q = _.Zr.prototype;
        _.q.listen = function (a, b, c, d, e) {
            (0, _.Oa)(b) || (cea[0] = b, b = cea);
            for (var f = 0; f < b.length; f++) {
                var g = (0, _.wh)(a, b[f], c || this, d || !1, e || this.T || this);
                this.L[g.key] = g
            }
            return this
        };
        _.q.MC = function (a, b, c, d, e) {
            if ((0, _.Oa)(b))
                for (var f = 0; f < b.length; f++) this.MC(a, b[f], c, d, e);
            else a = (0, _.Eh)(a, b, c || this, d, e || this.T || this), this.L[a.key] = a;
            return this
        };
        _.q.unlisten = function (a, b, c, d, e) {
            if ((0, _.Oa)(b))
                for (var f = 0; f < b.length; f++) this.unlisten(a, b[f], c, d, e);
            else {
                n: if (c = c || this, e = e || this.T || this, d = !! d, c = (0, _.xh)(c), (0, _.th)(a)) a = a.L[b], b = -1, a && (b = (0, _.Qh)(a, c, d, e)), c = -1 < b ? a[b] : null;
                else {
                    if (a = (0, _.Gh)(a, b, d))
                        for (b = 0; b < a.length; b++)
                            if (!a[b].Kx && a[b].nu == c && a[b].capture == d && a[b].gA == e) {
                                c = a[b];
                                break n
                            }
                    c = null
                }
                c && ((0, _.Hh)(c), delete this.L[c.key])
            }
            return this
        };
        _.q.removeAll = function () {
            (0, _.$b)(this.L, _.Hh);
            this.L = {}
        };
        _.q.La = function () {
            _.Zr.ja.La.call(this);
            this.removeAll()
        };
        _.q.handleEvent = function () {
            throw Error("EventHandler.handleEvent not implemented");
        };

        (0, _.Sg)(_.x.G(), "sy32");
        (0, _.Wg)(_.x.G(), "sy32");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var bt = function (a, b) {
            if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
            var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
            return c in kfa ? kfa[c] : (0, _.Ie)(a, c, "left", "pixelLeft")
        };
        _.ct = function (a) {
            if (_.Jc) {
                var b = bt(a, "borderLeft"),
                    c = bt(a, "borderRight"),
                    d = bt(a, "borderTop");
                a = bt(a, "borderBottom");
                return new _.Zd(d, c, a, b)
            }
            b = (0, _.ee)(a, "borderLeftWidth");
            c = (0, _.ee)(a, "borderRightWidth");
            d = (0, _.ee)(a, "borderTopWidth");
            a = (0, _.ee)(a, "borderBottomWidth");
            return new _.Zd((0, window.parseFloat)(d), (0, window.parseFloat)(c), (0, window.parseFloat)(a), (0, window.parseFloat)(b))
        };
        _.dt = function (a) {
            return (0, _.Ke)(a, "padding")
        };
        _.et = function (a) {
            var b = (0, _.Fe)(a);
            return b && _.Wd ? -a.scrollLeft : !b || _.Jc && (0, _.Ec)("8") || "visible" == (0, _.fe)(a, "overflowX") ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft
        };
        _.ft = function (a) {
            var b = a.offsetLeft,
                c = a.offsetParent;
            c || "fixed" != (0, _.ge)(a) || (c = (0, _.Wc)(a).documentElement);
            if (!c) return b;
            if (_.Wd) var d = (0, _.ct)(c),
            b = b + d.left;
            else(0, _.Ic)(8) && (d = (0, _.ct)(c), b -= d.left);
            return (0, _.Fe)(c) ? c.clientWidth - (b + a.offsetWidth) : b
        };
        _.gt = function (a, b) {
            b = Math.max(b, 0);
            (0, _.Fe)(a) ? _.Wd ? a.scrollLeft = -b : _.Jc && (0, _.Ec)("8") ? a.scrollLeft = b : a.scrollLeft = a.scrollWidth - b - a.clientWidth : a.scrollLeft = b
        };
        var kfa = {
            thin: 2,
            medium: 4,
            thick: 6
        };
        (0, _.Vg)(_.x.G(), "sy41");

        (0, _.Sg)(_.x.G(), "sy41");
        (0, _.Wg)(_.x.G(), "sy41");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var wN = function (a) {
            (0, _.Rf)(_.xN, "prsa", a)
        };
        _.yN = function () {
            if ("none" != zN.style.display) return (0, _.ze)(zN).width;
            var a = (0, _.Le)(AN);
            return Math.max(0, BN ? -a.right : -a.left)
        };
        _.CN = function () {
            return Math.max(0, (0, _.ze)(AN).width - (0, _.ze)(DN).width)
        };
        _.EN = function () {
            var a = _.xN.offsetWidth - 40;
            return a > (0, _.CN)() - (0, _.yN)() ? _.xN.offsetWidth + 48 : a
        };
        _.FN = function (a) {
            var b = _.xN;
            a = -Math.round(a);
            BN ? (b.style.right = a + "px", b.style.left = "") : (b.style.left = a + "px", b.style.right = "")
        };
        var Hya = function () {
            null !== GN && (0, window.clearTimeout)(GN);
            GN = window.setTimeout(function () {
                GN = null;
                (0, _.HN)()
            }, 100)
        };
        _.HN = function () {
            var a = (0, _.EN)() - (0, _.CN)(),
                b = -(0, _.yN)(),
                c = -(0, _.ft)(_.xN);
            if (c > a) {
                var d = Math.max(a, b);
                c != d && (wN(!1), (0, window.setTimeout)(function () {
                    wN(!0)
                }, 1), (0, _.FN)(d), c = d)
            }(0, _.Rf)(zN, "prpe", c > b);
            (0, _.Rf)(DN, "prpe", c < a);
            c > b && "block" != zN.style.display && (zN.style.display = "block")
        };
        var Iya = function (a, b) {
            var c = (0, _.EN)() - (0, _.CN)(),
                d = -(0, _.yN)(),
                e = -(0, _.ft)(_.xN),
                f = (0, _.CN)() * Jya + (0, _.yN)(),
                c = Math.max(d, Math.min(c, e + (a ? 1 : -1) * f));
            e != c && ((0, _.FN)(c), (0, _.HN)());
            b && window.google.log("facetpaddle", "&ei=" + window.google.kEI + "&ved=" + b.getAttribute("data-ved") + "&iact=" + (a ? "frpr" : "frpl"))
        };
        (0, _.Vg)(_.x.G(), "sy112");
        var BN;
        var AN;
        var DN;
        var zN;
        var GN;
        var JN;
        var Jya;
        Jya = 2 / 3;
        _.IN = !0;
        JN = null;
        GN = null;
        zN = null;
        DN = null;
        _.xN = null;
        AN = null;
        BN = !1;
        (0, _.Af)("prw", {
            init: function () {
                zN = (0, _.ad)("prpl");
                DN = (0, _.ad)("prpr");
                _.xN = (0, _.ad)("prs");
                AN = (0, _.ad)("prc");
                BN = (0, _.Fe)(window.document.body);
                _.IN = null === zN || null === DN || null === _.xN || null === AN;
                _.IN || (zN.style.display = "none", wN(!1), (0, _.FN)(-(0, _.yN)()), JN = new _.Zr, JN.listen(zN, "click", (0, _.ab)(Iya, !1, zN)), JN.listen(DN, "click", (0, _.ab)(Iya, !0, DN)), JN.listen(window, "resize", Hya), window.setTimeout(function () {
                    wN(!0);
                    JN.listen(_.xN, ["webkitTransitionEnd", "transitionend"], _.HN);
                    (0, _.HN)()
                }, 0))
            },
            dispose: function () {
                JN && JN.dispose();
                _.IN = !0
            }
        });

        (0, _.Sg)(_.x.G(), "sy112");
        (0, _.Wg)(_.x.G(), "sy112");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        (0, _.Vg)(_.x.G(), "prw");
        (0, _.Sg)(_.x.G(), "prw");
        (0, _.Wg)(_.x.G(), "prw");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Y3 = function (a) {
            this.B = [];
            (0, _.gh)(this, a, "", -1, [2, 3])
        };
        var bSa = function (a) {
            this.B = [];
            (0, _.gh)(this, a, "", -1, [3])
        };
        var Z3 = function (a) {
            this.B = [];
            (0, _.gh)(this, a, "", -1, [1, 2])
        };
        var cSa = function (a, b) {
            var c = b.A[1],
                d = b.A[2],
                e = b.A[3];
            return function () {
                for (var b = a[c], g = 0; g < d.length && b; ++g) {
                    var h;
                    (h = b[d[g]]) || (h = d[g] + 1, 0 == b.length ? h = null : (b = b[b.length - 1], h = (0, _.Wa)(b) && !(0, _.Oa)(b) ? b[h] || null : null));
                    b = h;
                    if (!b) break;
                    h = e[g]; - 1 < h && (b = b[h])
                }
                return b || null
            }
        };
        var dSa = function () {
            this.Qc = {}
        };
        var eSa = function (a, b) {
            this.B = b;
            this.A = null
        };
        var fSa = function (a) {
            this.B = a;
            this.A = [];
            this.D = []
        };
        var gSa = function (a) {
            this.B = [];
            (0, _.gh)(this, a, "", -1, [0])
        };
        var $3 = function (a) {
            this.B = new fSa(a);
            this.M = a;
            this.D = [];
            this.J = [];
            this.A = []
        };
        var hSa = function (a, b) {
            var c = b.A[0],
                d = b.A[1],
                e = b.A[2] || "",
                f = _.xj[c];
            if (!f) return !1;
            var g = _.yj[c];
            if (!g) return !1;
            a.D.push(d);
            for (var h = new dSa, k = (0, _.ih)(b, Y3, 3), l = 0; l < k.length; ++l) {
                var n = k[l].getName();
                h.Qc[n] = cSa(a.M, k[l])
            }
            try {
                var p = new g(h),
                    m = new f(p),
                    t = new eSa(a.B, e);
                _.fi[d] = m;
                m.fM = {
                    nZ: p,
                    d4: d,
                    e4: t,
                    rootElement: null,
                    a4: e
                };
                var s = iSa[c];
                s && e && (0, _.Zb)(s, function (a) {
                    this.J.push(new a(t, p))
                }, a)
            } catch (r) {}
            return !0
        };
        (0, _.db)(Y3, _.fh);
        Y3.prototype.getName = function () {
            return this.A[0]
        };
        (0, _.db)(bSa, _.fh);
        (0, _.db)(Z3, _.fh);
        Z3.prototype.getId = function () {
            return this.A[0]
        };
        dSa.prototype.A = function (a, b) {
            var c = this.Qc[b]();
            return c ? new a(c) : null
        };
        eSa.prototype.Zz = function () {
            return this.A || (this.A = (0, _.$c)(this.B))
        };
        var iSa = {};
        (0, _.db)(gSa, _.fh);
        (0, _.db)($3, _.ng);
        $3.prototype.La = function () {
            (0, _.Zb)(this.D, function (a) {
                var b = _.fi[a];
                delete _.fi[a];
                b && ((0, _.rg)(b), b.fM = null)
            }, this)
        };
        $3.prototype.H = function () {
            for (var a = this.B, b = a.D.length = 0; b < a.A.length; b++) a.A[b].A(a.B);
            for (b = 0; b < a.A.length; b++) a.A[b].B(a.B)
        };
        $3.prototype.L = function () {
            for (var a = this.A.length - 1; 0 <= a; --a) hSa(this, this.A[a]) && (0, _.Jb)(this.A, a)
        };
        (0, _.Vg)(_.x.G(), "r");
        (0, _.Af)("r", {
            init: function () {
                var a = (0, _.Fa)("google.react.m"),
                    b = (0, _.Fa)("google.react.c"),
                    c = (0, _.Fa)("google.react.g");
                (0, _.rg)(_.zj);
                _.zj = new $3(a || {});
                a = new gSa(b);
                a = (0, _.ih)(a, Z3, 0);
                if (0 != a.length)
                    for (a = (0, _.ih)(a[0], bSa, 1), b = 0; b < a.length; ++b) {
                        var d = _.zj,
                            e = a[b];
                        hSa(d, e) || d.A.push(e)
                    }
                c = c || [];
                for (a = 0; a < c.length - 1; a += 2);
            }
        });

        (0, _.Sg)(_.x.G(), "r");
        (0, _.Wg)(_.x.G(), "r");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var zSa = function (a) {
            a.checked = !0
        };
        var ASa = function (a) {
            a.form.q.value ? a.checked = !0 : window.top.location.pathname = "/doodles/"
        };
        var BSa = function (a, b) {
            var c = (0, _.ld)("SCRIPT", {
                src: b.js
            });
            (0, _.Me)(c)
        };
        (0, _.Vg)(_.x.G(), "sf");
        (0, _.vf)("sf", {
            init: function () {
                (0, _.ji)("sf", {
                    chk: zSa,
                    lck: ASa,
                    tia: BSa
                })
            }
        });
        (0, _.Sg)(_.x.G(), "sf");
        (0, _.Wg)(_.x.G(), "sf");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var nra = function () {
            var a = OF || window;
            a.iframes.setHandler("shareboxDialog", {
                onOpen: function (b) {
                    var c = (0, _.v)("googleShareboxIframeDiv");
                    c.style.background = "";
                    c.style.opacity = "";
                    c.style.filter = "";
                    (0, _.yd)(a.document.getElementById("googleShareboxLoadingSpinner"));
                    return b.openInto(b.getOpenParams().element, {
                        "class": "abc",
                        scrolling: "auto",
                        width: "100%",
                        height: "100%",
                        allowtransparency: "true"
                    })
                },
                onReady: function (a) {
                    window.setTimeout(function () {
                        ora = a;
                        PF && a.setPrefill(PF);
                        a.setParamBag(pra);
                        QF && QF({})
                    }, 0)
                },
                onClose: function (b, c) {
                    c && (c.loggedOut && RF && RF(), c.footerCallback && SF && SF());
                    (0, _.qra)(b, a.document.getElementById("googleShareboxIframeDiv"));
                    TF && TF(c)
                }
            })
        };
        var rra = function () {
            ora || ((0, _.yd)((OF || window).document.getElementById("googleShareboxIframeDiv")), UF = !1, VF && VF({}))
        };
        var sra = function (a, b) {
            if (!UF) {
                PF = a;
                b && (QF = b.onShareOpened, TF = b.onShareClosed, VF = b.onShareTimedOut, RF = b.onNotLoggedInForGooglePlus, SF = b.footerCallback, WF = b.sessionIndex, XF = b.socialHost, OF = b.window, b.window = null, YF = b.spinnerPath, ZF = b.spinnerWidth, $F = b.spinnerHeight, pra = b);
                var c = OF || window;
                WF = WF || "0";
                XF = XF || "https://plus.google.com";
                YF = YF || "//ssl.gstatic.com/docs/documents/share/images/spinner-1.gif";
                ZF = ZF || "16px";
                $F = $F || "16px";
                nra();
                UF = !0;
                var d = c.document.createElement("div");
                d.setAttribute("id", "googleShareboxIframeDiv");
                d.style.position = "fixed";
                d.style.width = "100%";
                d.style.height = "100%";
                d.style.left = "0px";
                d.style.top = "0px";
                d.style.zIndex = 5001;
                d.style.opacity = "0.75";
                d.style.filter = "alpha(opacity=75)";
                d.style.background = "#FFF";
                c.document.body.appendChild(d);
                var e = c.document.createElement("img");
                e.setAttribute("id", "googleShareboxLoadingSpinner");
                e.setAttribute("src", YF);
                e.style.position = "absolute";
                e.style.width = ZF;
                e.style.height = $F;
                e.style.left = "50%";
                e.style.top = "50%";
                d.appendChild(e);
                d = XF + "/u/" + WF + "/_/sharebox/dialog";
                e = {};
                e.claimedOrigin = c.document.location.protocol + "//" + c.document.location.host;
                var f = !1;
                b && ("games" == b.apiMode && (e.mode = b.apiMode), b.hl && (e.hl = b.hl), b.sourceForLogging && (e.source = b.sourceForLogging), b.dialogTitle && (e.dialogTitle = b.dialogTitle), b.shareButtonText && (e.shareButtonText = b.shareButtonText), b.showIcons && (e.showIcons = "true"), b.segments ? e.segments = c.JSON.stringify(b.segments) : b.editorText && (e.editorText = b.editorText), b.editorHelperText && (e.editorHelperText = b.editorHelperText), b.birthday &&
                    (e.birthday = b.birthday), b.birthdayName && (e.birthdayName = b.birthdayName), b.recipients && (e.rcpt = b.recipients.join(",")), f = !! b.updateMetadata);
                var g = null;
                if (!f) {
                    var h;
                    a && (a.items && 1 == a.items.length && a.items[0].properties) && (f = a.items[0].properties, null === f.description && delete f.description, null === f.image && delete f.image, null === f.name && delete f.name, null === f.url && delete f.url, f.description || (f.image || f.name) || (!f.url || !f.url[0]) || (h = f.url[0]));
                    h && (e.url = h, g = "url");
                    a && !h && (a.items && 0 != a.items.length ||
                        delete a.items, null === a.errorMsg && delete a.errorMsg, a.items && 0 < a.items.length && (a.items[0].type = "//schema.org/Thing"), h = c.gadgets.json.stringify(a), e.md = h, g = "md")
                }
                g && (e.prm = g);
                e.sts = (0, _.Ve)().toString(36);
                750 > window.document.documentElement.clientHeight && (e.susp = !0);
                window.document.documentMode && (e.hostiemode = window.document.documentMode);
                h = c.iframes.open(d, {
                    style: "shareboxDialog",
                    element: "googleShareboxIframeDiv",
                    allowPost: !0
                }, e, {});
                tra = c.document.getElementById("googleShareboxIframeDiv").getElementsByTagName("googleShareboxIframeDiv")[0];
                h.getIframeEl().style.zIndex = 5002;
                window.setTimeout(rra, 15E3)
            }
        };
        _.qra = function (a, b) {
            var c = a || tra;
            c && c.remove && c.remove();
            (c = b || (0, _.v)("googleShareboxIframeDiv")) && (0, _.yd)(c);
            UF = !1
        };
        _.ura = function (a, b) {
            window.iframes ? sra(a, b) : window.gbar && window.gbar.lGC && window.gbar.lGC(function () {
                sra(a, b)
            })
        };
        (0, _.Vg)(_.x.G(), "sy95");
        var tra, OF, ora, PF, pra, QF, RF, SF, TF, VF, WF, XF, YF, ZF, $F, UF = !1;
        (0, _.Sg)(_.x.G(), "sy95");
        (0, _.Wg)(_.x.G(), "sy95");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var pNa = function (a) {
            return function (b) {
                if (b.shareOccurred) {
                    b = (0, _.v)(a);
                    var c = b.parentNode,
                        d = window.document.createElement("text");
                    c.insertBefore(d, b);
                    d.innerHTML = "Sent thanks!";
                    c.removeChild(b)
                }
            }
        };
        var qNa = function (a, b) {
            var c = (0, _.jf)(b.segments);
            (0, _.ura)({
                items: [{
                    properties: {
                        url: [b.url],
                        name: [b.name],
                        description: [b.desc]
                    }
                }]
            }, {
                dialogTitle: b.title,
                segments: c,
                onShareClosed: pNa(b.tyid),
                sourceForLogging: "sharebox:google:thank_you"
            })
        };
        (0, _.Vg)(_.x.G(), "sfa");
        (0, _.vf)("sfa", {
            init: function () {
                (0, _.ji)("sfa", {
                    ssl: qNa
                })
            }
        });
        (0, _.Sg)(_.x.G(), "sfa");
        (0, _.Wg)(_.x.G(), "sfa");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        (0, _.Vg)(_.x.G(), "tbpr");
        (0, _.Sg)(_.x.G(), "tbpr");
        (0, _.Wg)(_.x.G(), "tbpr");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        (0, _.Vg)(_.x.G(), "hsm");
        (0, _.Sg)(_.x.G(), "hsm");
        (0, _.Wg)(_.x.G(), "hsm");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.rk = function (a) {
            (0, _.Ra)(a) && (a = (0, _.v)(a));
            return a ? "none" != (0, _.jg)(a, "display", !0) && "hidden" != (0, _.jg)(a, "visibility", !0) && 0 < a.offsetHeight : void 0
        };
        (0, _.Vg)(_.x.G(), "sy9");
        (0, _.Sg)(_.x.G(), "sy9");
        (0, _.Wg)(_.x.G(), "sy9");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var sk = function (a) {
            a = (0, _.v)(a);
            if ((0, _.rk)(a)) {
                var b = (0, _.jg)(a, "margin-top", !1) || 0,
                    c = (0, _.jg)(a, "margin-bottom", !1) || 0;
                return a.offsetHeight + b + c
            }
            return 0
        };
        var tk = function (a, b, c) {
            var d = a.t[b],
                e = a.t.start;
            if (d && (e || c)) return uk && (d = a.t[b][0]), void 0 != c ? e = c : uk && (e = e[0]), vk ? d > e ? d - e : e - d : d - e
        };
        var Mba = function (a, b, c) {
            var d = "";
            if (wk && (window[xk].pt && (d += "&srt=" + window[xk].pt, delete window[xk].pt), yk)) try {
                window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
            } catch (e) {}
            if (zk) {
                var f = (0, _.v)("csi");
                if (f) {
                    var g;
                    void 0 != window[xk]._bfr ? g = window[xk]._bfr : (g = f.value, window[xk]._bfr = g, f.value = 1);
                    if (Ak) {
                        if (g) return ""
                    } else g && (d +=
                        "&bfr=1")
                }
            }
            Bk && (f = window.chrome) && (f = f.loadTimes) && (f().wasFetchedViaSpdy && (d += "&p=s"), f().wasNpnNegotiated && (d += "&npn=1"), f().wasAlternateProtocolAvailable && (d += "&apa=1"));
            a.oV && (d += "&" + a.oV);
            Ck && window.parent != window && (d += "&wif=1");
            if ("undefined" != typeof window.navigator && window.navigator && window.navigator.connection) {
                f = window.navigator.connection;
                g = f.type;
                for (var h in f)
                    if ("type" != h && f[h] == g) {
                        d += "&conn=" + h;
                        break
                    }
            }
            f = a.t;
            g = f.start;
            h = [];
            var k = !1;
            if (uk) var l = [];
            for (var n in f)
                if ("jsrt" == n && (k = !0),
                    "start" != n) {
                    if (uk) {
                        if (0 == n.indexOf("_")) continue;
                        var p = f[n][1];
                        if (p) {
                            f[p] && l.push(n + "." + tk(a, n, f[p][0]));
                            continue
                        }
                    }
                    g && h.push(n + "." + tk(a, n))
                }
            if (!k) {
                var p = [],
                    m = window.performance && window.performance.timing;
                m && (k = m.navigationStart, k || (k = m.fetchStart), k && g && p.push("wsrt." + (g - k)), m.connectEnd && m.connectStart && p.push("cst." + (m.connectEnd - m.connectStart)), m.domainLookupEnd && m.domainLookupStart && p.push("dnst." + (m.domainLookupEnd - m.domainLookupStart)), m.redirectEnd && m.redirectStart && p.push("rdxt." + (m.redirectEnd -
                    m.redirectStart)), m.responseEnd && m.requestStart && p.push("rqst." + (m.responseEnd - m.requestStart)), m.responseEnd && m.responseStart && p.push("rspt." + (m.responseEnd - m.responseStart)));
                (k = p.join(",")) && h.push(k)
            }
            if ((k = window.google.timers.session) && k.t && g)
                for (n in k.t) "start" != n && h.push(n + "." + (g - k.t[n]));
            delete f.start;
            if (b)
                for (var t in b) d += "&" + t + "=" + b[t];
            (b = c) || (b = "https:" == window.document.location.protocol ? Dk : Ek);
            return [b, "?v=3", "&s=" + (window[xk].sn || Fk) + "&action=", a.name, uk && l.length ? "&it=" + l.join(",") :
                "", "", d, "&rt=", h.join(",")].join("")
        };
        var Gk = function (a, b, c) {
            a = Mba(a, b, c);
            if (!a) return "";
            return a
        };
        var Hk = function (a, b, c) {
            if ("prerender" == window.document.webkitVisibilityState) {
                var d = !1,
                    e = function () {
                        if (!d) {
                            b ? b.prerender = "1" : b = {
                                prerender: "1"
                            };
                            var f;
                            "prerender" == window.document.webkitVisibilityState ? f = !1 : (Gk(a, b, c), f = !0);
                            f && (d = !0, window.document.removeEventListener("webkitvisibilitychange", e, !1))
                        }
                    };
                window.document.addEventListener("webkitvisibilitychange", e, !1);
                return ""
            }
            return Gk(a, b, c)
        };
        _.Ik = function (a, b) {
            void 0 === a && (a = !0);
            if (!a || window.google.timers.load.t && window.google.timers.load.t.xjs && window.google.timers.load.t.ol) {
                var c = (0, _.jc)(b || window.google.kCSI);
                window.google.browser.engine.IE && (c.dM = window.document.documentMode);
                c.atyp = "csi";
                if (Jk && c) {
                    var d = sk("tvcap"),
                        e = sk("tads"),
                        f = sk("mbEnd"),
                        g = sk("tadsb"),
                        h = [];
                    d && h.push("tv." + d);
                    e && h.push("t." + e);
                    f && h.push("r." + f);
                    g && h.push("b." + g);
                    c.adh = h.join(",")
                }
                if (Kk && 0 != Lk.length && !Mk) {
                    if (!Mk) {
                        d = Lk.split(",");
                        for (e = 0; e < d.length; e++) d[e] =
                            String.fromCharCode((0, window.parseInt)(d[e], 10));
                        Nk = Boolean((0, _.v)(d.join("")));
                        Mk = !0
                    }
                    c.dck = Nk ? "1" : "0"
                }
                Hk(window.google.timers.load, c)
            }
        };
        var Nba = function (a) {
            if (window[xk].VR <= (a || 1)) return !1;
            for (var b in window[xk].QJ) return !1;
            return !0
        };
        (0, _.Vg)(_.x.G(), "sy8");
        var wk = !0,
            yk = !1,
            Fk = "GWS",
            xk = "google",
            Ek = "/csi",
            Dk = "/csi",
            Jk = !1,
            Lk = "",
            Kk = !1,
            zk = !0,
            Ak = !0,
            uk = !1,
            vk = !0,
            Ok = !1,
            Ck = !0,
            Bk = !0;
        (0, _.vf)("csi", {
                csi: function (a) {
                    a.csbu && (Dk = a.csbu);
                    a.cbu && (Ek = a.cbu);
                    a.ert && (uk = a.ert);
                    a.esd && (Bk = a.esd);
                    a.fpt && (vk = a.fpt);
                    a.ibd && (zk = a.ibd);
                    a.ifr && (Ok = a.ifr);
                    a.itpt && (wk = a.itpt);
                    a.itptt && (yk = a.itptt);
                    a.iwi && (Ck = a.iwi);
                    a.nsp && (xk = a.nsp);
                    a.sn && (Fk = a.sn);
                    a.srb && (Ak = a.srb);
                    a.acsi && (Jk = a.acsi);
                    a.dck && (Kk = a.dck);
                    a.dckid && (Lk = a.dckid)
                }
            });
        (0, _.Bf)("csi");
        var Nk = !1,
            Mk = !1;
        window[xk] && (window[xk].QJ = {}, window[xk].VR = 1);
        (0, _.za)(xk + ".report", Hk, void 0);
        (0, _.za)(xk + ".csiReport", _.Ik, void 0);
        Ok && (0, _.za)(xk + ".reportDone", Nba, void 0);
        (0, _.Sg)(_.x.G(), "sy8");
        (0, _.Wg)(_.x.G(), "sy8");
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
            _ahl: !0,
            _csm: 0,
            _dape: !1,
            _en: !1,
            _hnp: !1,
            _ipp: !1,
            _sb: !0,
            _scl: !0,
            _hm: !1,
            _h5h: !1,
            _h5l: void 0,
            _tlh: !1
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
            if ((0, _.ap)("q", a)) return !0;
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
            return (0, _.xn)(a, c, !1)
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
                } else b ? op(a, !0) : a.indexOf("#") || op(a)
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
            return window.google.psy && window.google.psy.q ? !1 : yp ? !0 : (a = (0, _.dg)("redir", a)) ? (yp = !0, window.location.replace((0, window.decodeURIComponent)(a)), !0) : !1
        };
        var zp = function (a, b) {
            var c = b || window.google.j.gwtl();
            if (_.tc.Hc) {
                window.history.back();
                try {
                    c.replace(a), (0, _.Qf)(43, [a, !0])
                } catch (d) {
                    (0, _.Hn)("SL", {
                        h5h: _.Yo._h5h,
                        r: !0,
                        v: a
                    }, d)
                }
            } else try {
                c.href = a, (0, _.Qf)(43, [a])
            } catch (e) {
                (0, _.Hn)("SL", {
                    h5h: _.Yo._h5h,
                    r: !1,
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
            return (_.Yo._h5h ? (0, _.Xf)().href == _.Yo._h5l : "#" == (0, _.Xo)((0, _.cg)())) || "/search" != (0, _.Xf)().pathname || Ip ? "" : (Ip = !0, "&sei=" + Cca)
        };
        var Dca = function () {
            if ((0, _.qn)("session", "web") && "/search" == (0, _.Xf)().pathname) {
                for (var a = (0, _.pn)("session", "web"), b = a.get("bpk"), b = (0, _.Oa)(b) ? b : [], c = 0; c < b.length; c++)
                    if (b[c] == window.google.kEI) {
                        Ip = !0;
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
            } else _.Yo._scl = !0
        };
        var Fca = function (a, b, c) {
            a[b] ? a.__handler || (a.__handler = a[b], a[b] = function (b) {
                return !1 != a.__handler(b) && c(b, a)
            }) : a.__handler = a[b] = (0, _.$a)(c, a)
        };
        var Lp = function (a, b) {
            a && (_.tc.Hc ? a.styleSheet && (a.styleSheet.cssText = b) : a.textContent = b)
        };
        var Mp = function () {
            return "webkitVisibilityState" in window.document && window.document.webkitHidden
        };
        var Np = function () {
            Mp() || (Op = window.google.time(), (0, _.af)(window.document, "webkitvisibilitychange", Np))
        };
        var Pp = function () {
            (0, _.Wo)((0, _.Sn)()) || (window.google.sn = "web");
            window.google.timers && !window.google.timers.load.t && (window.google.rph && window.google.rph(), window.google.timers.load.t = {
                start: window.google.time()
            })
        };
        var Qp = function () {
            if (Rp && (!(0, _.Ao)((0, _.Xf)().href) || window.google.isr.csi_done) && window.google.timers && window.google.timers.load.t && window.google.timers.load.e) {
                window.google.timers.load.t.iml = window.google.time();
                window.google.timers.load.e.imn = Sp;
                1 < Tp && (window.google.timers.load.e.alm = Tp - 1);
                var a = window.google.timers.load.t,
                    b = Op; - 1 == b ? (a.hjsrt = a.jsrt, a.himl = a.iml, a.jsrt = a.start, a.iml = a.start) : a.jsrt < b && (a.hjsrt = a.jsrt, a.himl = a.iml, b < a.start ? a.jsrt = b : (a.jsrt = a.start, a.iml = a.iml + a.start - b));
                (0, _.Ik)(!1,
                        window.google.timers.load.e);
                window.google.dph && window.google.dph();
                Tp = 0
            }
        };
        var Up = function (a, b) {
            if (b || window.google.j.ss == _.Nn && ++Vp == Sp) Rp = !0, Qp();
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
        var Xp = function () {
            window.google.timers && (window.google.timers.load.t = null, window.google.timers.load.e = null)
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
                if (!(0, _.Qf)(6, [b, a, c])) return !1;
                (0, _.Qf)(118, [a, b]);
                var e = (0, _.v)(b);
                c = Ap(c);
                try {
                    if (e.innerHTML = c, 0 < Bp && (0, _.Qf)(79, [])) {
                        if (0 != e.getElementsByTagName("SCRIPT").length && (rp && (a != rp && kp) && (window.clearTimeout(kp), kp = 0, jp = []), rp = a, jp.push(e), 1 == jp.length && (kp = window.setTimeout(ip, Bp)), !bq)) {
                            var f = (0, _.$a)(sca, null, Bp);
                            (0, _.$e)(window, "keypress", f);
                            bq = !0
                        }
                    } else(0, _.Un)(e)
                } catch (g) {
                    var h = e.cloneNode(!1);
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
            if (!(0, _.Qf)(18, [b])) return !1
        };
        var Hca = function (a, b) {
            if (("sdb" == b || "taw" == b) && cq) {
                window.document.body.style.height = window.document.body.offsetHeight + 4 + "px";
                try {
                    (0, _.Qf)(129, [], !1, !0) || (0, _.xp)(void 0, a)
                } catch (c) {}(0, _.Qf)(103, [a]) && window.scroll(0, 0);
                cq = !1
            }
        };
        var Ica = function (a, b) {
            if ("main" == b) {
                var c = (0, _.bp)(a);
                null !== c && (c = (0, _.Qf)(4, [c, !0], c, null), null === c || Dp(c))
            }
        };
        var dq = function () {
            (0, _.Sj)(this)
        };
        _.eq = function () {};
        _.fq = function (a, b, c) {
            _.yo = (0, _.Ve)();
            gq = hq = cq = !1;
            Xp();
            "#" != a && -1 == a.indexOf("&fp=") && (a += "&fp=" + _.Uo, (0, _.vp)(a, !0));
            (0, _.Qf)(65, [(0, _.Sn)().value(), a]);
            (0, _.Sn)().set(a);
            try {
                _.Yo._scl = !1;
                var d = a.substr(1),
                    e = (0, _.Qo)(a);
                if (e in _.Qn.A.s && (0, _.Ma)(_.Qn.getItem("s", e)) && !b) c ? window.setTimeout(function () {
                    Kp(a)
                }, c) : Kp(a);
                else if ("#" != a) {
                    var f = "/" + (0, _.eo)() + "?" + d;
                    (f = (0, _.Qf)(5, [f, b], f)) ? ((0, _.Qf)(53), cq = !0, uca(f, _.Yo._dape, b, c)) : _.Yo._scl = !0
                } else(0, _.Qf)(53), (0, _.Xf)().reload()
            } catch (g) {
                (0, _.Hn)("GO", {
                    s: a
                }, g)
            }
        };
        var iq = function (a, b, c) {
            var d = (0, _.Ra)(a);
            if (!_.Yo._en || !(0, _.Qf)(70, [a, d])) return !0;
            !d && a.q && a.q.blur();
            a = (0, _.wp)(a);
            if (!a || "#" == a) return !0;
            if (!(0, _.ep)(a)) return !1;
            !_.sc.Yr && (0, _.Qf)(24, [a]) && (0, _.vp)(a);
            var d = (0, _.ap)("tbm", a),
                e = (0, _.ap)("tbm", (0, _.Tn)().value());
            d != e && (0, _.Qf)(88, [e, d]);
            (0, _.Tn)().set(a);
            _.Yo._hnp = !0;
            _.Qn.removeItem("s", (0, _.Qo)(a));
            (0, _.yd)((0, _.v)("jjsd"));
            window.google._bfr = void 0;
            (0, _.v)("csi").value = "";
            (0, _.fq)(a, b, c);
            return !1
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
        _.kq = function () {
            for (var a = window.document.getElementsByTagName("FORM"), b = 0, c; c = a[b++];) {
                var d;
                if (d = !_.Po.jh.test(c.action)) {
                    n: if (d = c, window.google.j.xmi) d = !0;
                    else {
                        var e = _.Po.fa;
                        if (e && e.test(d.action)) {
                            d = d.getElementsByTagName("INPUT");
                            for (var e = 0, f = void 0; f = d[e]; ++e)
                                if ("tbm" == f.name && "isch" == f.value) {
                                    d = !0;
                                    break n
                                }
                        }
                        d = !1
                    }
                    d = !d
                }
                d || /\bnj\b/.test(c.className) || Fca(c, "onsubmit", Lca)
            }
        };
        var lq = function () {
            this.J = 0;
            this.Bc = "";
            this.B = this.D = this.H = !1;
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
        var oq = function (a) {
            pq && a ? pq = !1 : ((0, _.Bf)("dispose"), (0, _.Qf)(89, []), a || (pq = !0))
        };
        var qq = function (a, b, c) {
            a && "#" != a || (0, _.Xf)().href.replace(/#.*/, "") == _.Yo._h5l || "/search" == (0, _.Xf)().pathname || "/images" == (0, _.Xf)().pathname ? rq(b ? 1 : 0, c, a || (0, _.lp)()) : (0, _.Xf)().replace((0, _.Xf)().href)
        };
        var Nca = function (a) {
            var b = (0, _.lp)();
            qq("#" == b ? "#" : a && a.state, !1, !1)
        };
        var sq = function () {
            var a = (0, _.Xo)((0, _.cg)());
            return (0, _.ep)(a) ? ((0, _.vp)((0, _.Xf)().href.match(/#.*/)[0], !0), !0) : !1
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
        var rq = function (a, b, c) {
            a = 1 === a;
            c = c || (0, _.Zo)().value();
            tq || ("#" == c || (0, _.ep)(c)) || ((0, _.Hn)("BF", {
                o: a,
                f: b,
                s: c
            }), tq = !0);
            var d = (0, _.Qo)(c),
                e = (0, _.Qo)((0, _.Sn)().value());
            if (_.Yo._scl && d != e && _.Po.sah.test((0, _.Xf)().href)) {
                d = !(d in _.Qn.A.s && (0, _.Ma)(_.Qn.getItem("s", d)));
                _.Yo._hnp = d;
                _.Yo._sb && (d = (0, _.hn)()) && d.q.blur();
                try {
                    a && "#" != c && b && (c = Fp(c, "fp", qp()), -1 == c.indexOf("&fp=") && (c += "&fp=1"), c = pp(c), -1 == c.indexOf("&cad=") && (c += "&cad=b"), -1 < c.indexOf("&cad=b") && (c = c.replace(/[?&]sei=[^&]+/g, ""), c += Hp()),
                        _.Qn.removeItem("s", (0, _.Qo)(c)), (0, _.vp)(c, !0))
                } catch (f) {}
                if ((0, _.Qf)(7, [c])) {
                    if (a && (window.google.y && window.google.y.first) && (window.google.y.first = [], a = (0, _.v)((0, _.cp)()), window.google.sn in uq)) {
                        a && (a.style.display = "none");
                        var g;
                        window.gbar && (g = window.gbar.gpcr) && g()
                    }(0, _.fq)(c)
                } else(0, _.Sn)().set(c)
            }
        };
        var Rca = function (a) {
            return !/&rct=j/.test(a) && _.Po.jh.test(a) && !iq(a, !0)
        };
        _.vq = function (a) {
            window.google.j.init = !1;
            if (null != a)
                if (Gp("_h5h", (0, _.mca)() && a.h5h), _.Yo._ahl = a.ahipiou, (0, _.Nf)(115, Gca), (0, _.Nf)(115, qca), (0, _.Nf)(115, _.xo), (0, _.Nf)(115, _.zo), (0, _.Nf)(117, zp), _.Yo._h5h && !window.google.j.psc) window.onpopstate = function () {
                    window.google.j.psc = !0;
                    (0, _.vq)(window.google.pmc.j)
                };
                else {
                    var b = window.google.j.en && window.google.j[1] && window.encodeURIComponent;
                    if (_.Yo._en = b) {
                        (0, _.Co)(a);
                        Bca(a.tct);
                        Dca();
                        var b = a.pi,
                            c = a.mcr,
                            d = a.emcrl,
                            e = a.fdst;
                        _.Yo._hm = !! a.hme;
                        (0, _.Nf)(25, _.Ho);
                        b = (0, _.Ko)(b, c, d, e);
                        _.Yo._en = b
                    }
                    if (b)
                        for ((0, _.No)(nq.G()), c = a.dl, d = a.dlid, c && d && (e = _.Vn.G(), e.A = c, e.B = d, (0, _.No)(e)), c = _.Qn.getItem("c", "1").J, d = 0; d < c.length; d++) b &= !! (0, _.v)(c[d]), _.Yo._en = b;
                    try {
                        if (b) {
                            nca((0, _.Sn)());
                            (0, _.Tn)().set((0, _.$o)());
                            _.yo = (0, _.Ve)();
                            tp();
                            sp();
                            window.google.j.xmi = a.icmt;
                            var f = (0, _.Xf)().href.match(/.*?:\/\/[^\/]*/)[0];
                            (0, _.Oo)(f);
                            (0, _.kq)();
                            var g = dq.G();
                            (0, _.$e)(window.document, "click", (0, _.$a)(g.A, g, iq), !0);
                            _.tc.Hc && (0, _.$e)(window.document, "mousedown", (0, _.$a)(g.B, g), !0);
                            _.Yo._h5h && (_.Yo._h5l = a.h5l);
                            _.Yo._dape = a.dape;
                            _.Yo._tlh = a.tlh;
                            (_.Yo._h5h && (0, _.Xf)().href != _.Yo._h5l || !_.Yo._h5h && "#" != (0, _.Xo)((0, _.cg)())) && (0, _.xp)();
                            Aca(a.cspd);
                            var h = !_.Qn.YR();
                            window.wgji && window.wgji();
                            (0, _.To)();
                            _.sc.vx && window.addEventListener("pageshow", Jca, !1);
                            (_.tc.Fz || _.tc.Fq) && window.addEventListener("pagehide", Kca, !1);
                            vca();
                            (0, _.Nf)(32, Rca);
                            (0, _.Nf)(131, wca);
                            (0, _.Nf)(118, Hca);
                            (0, _.Nf)(119, Ica);
                            Mp() && (Op = -1, (0, _.$e)(window.document, "webkitvisibilitychange", Np));
                            rca() || (window.google.log("jbh",
                                "h=" + (0, window.encodeURIComponent)((0, _.Xf)().hash).substr(0, 40)), (0, _.Xf)().hash = "");
                            _.Yo._h5h ? (sq(), qq(void 0, !0, h), window.onpopstate = Nca, window.onhashchange = Oca) : _.Yo._hm ? ((0, _.Bl)("", !0), rq(1, h), (0, _.sl)("", Qca)) : (rq(1, h), window.onhashchange = Pca);
                            (0, _.Wo)((0, _.Sn)()) && (window.document.body.style.display = "", window.document.body.style.visibility = "", wq = !0);
                            window.google.j.init = !0;
                            Eca((0, _.Sn)().value())
                        } else 0 != window.google.j.en && (0, _.Hn)("INIT1", {}), window._gjp && window._gjuc && window._gjp()
                    } catch (k) {
                        (0, _.Hn)("INIT2", {}, k), _.Yo._en = !1, window._gjp && window._gjuc && window._gjp()
                    }
                }
        };
        var jp = [],
            kp, rp, Ep = null,
            jq, hq = !1,
            gq = !1,
            yp = !1,
            zca = /[\s\n\r]*(\x3cscript[\s\S]*?\x3e)/ig,
            bq, Bp, xq = !1;
        (0, _.Vg)(_.x.G(), "sy20");
        var yq, Cca = window.google.kEI,
            Ip = !1;
        (0, _.za)("google.j.bvch", function (a, b) {
                if ((0, _.Qf)(26)) {
                    var c = a.indexOf("?") + 1;
                    1 <= c && (a = a.substr(0, c) + a.substr(c).replace(/(^|&|#)(fp|bav|bvm)\=[^&]*/g, "") + "&cad=cbv&sei=" + b);
                    tp();
                    sp();
                    yq = a
                } else tp(), sp()
            }, void 0);
        var Sp, Vp, Op = 0,
            Rp = !1,
            Tp = 0,
            uq = {
                webhp: 1,
                imghp: 1,
                mobilewebhp: 1
            };
        (0, _.za)("google.j.mscr", Qp, void 0);
        var Yp = {}, Zp = "";
        var cq = !1;
        (0, _.za)("google.j.p", aq, void 0);
        (0, _.za)("google.j.pa", function (a, b, c) {
            try {
                _.So.add("pa", [b, c, 0]);
                var d = (0, _.v)(b),
                    e = (0, _.od)("DIV");
                c = Ap(c);
                e.innerHTML = c;
                var f = (0, _.od)("DIV"),
                    g = e.getElementsByTagName("SCRIPT");
                for (a = 0; a < g.length; a++) f.appendChild(g[a]);
                for (var h; h = e.firstChild;) d.appendChild(h);
                (0, _.Un)(f)
            } catch (k) {
                (0, _.Hn)("PA", {
                    id: b
                }, k)
            }
            Yp[Zp] = 22
        }, void 0);
        (0, _.za)("google.j.pah", function (a, b) {
            var c, d;
            try {
                for (c in _.So.add("pah", [b]), b) {
                    d = b[c];
                    var e = (0, _.v)(c);
                    if (e) {
                        if (!e.orighref) {
                            var f = e.href.indexOf("?");
                            e.orighref = 0 <= f ? e.href.substr(0, f + 1) : e.href
                        }
                        e.href = e.orighref + d
                    }
                }
            } catch (g) {
                (0, _.Hn)("PAH", {
                    id: c,
                    suffix: d
                }, g)
            }
        }, void 0);
        (0, _.za)("google.j.ph", function (a, b, c) {
            var d, e, f;
            try {
                for (d in _.So.add("ph", [b, c]), b)
                    if ((e = (0, _.v)(d)) || !c) f = b[d], e.href = f
            } catch (g) {
                (0, _.Hn)("PH", {
                    id: d,
                    href: f
                }, g)
            }
        }, void 0);
        (0, _.za)("google.j.sa", function (a, b, c) {
            try {
                _.So.add("sa", [b, c]);
                var d = (0, _.v)(b);
                $p(d, c)
            } catch (e) {
                (0, _.Hn)("SA", {
                    id: b,
                    elt: d,
                    attbs: (0, _.lf)(c)
                }, e)
            }
        }, void 0);
        (0, _.za)("google.j.pds", function (a, b) {
            _.So.add("pds", [a, b]);
            var c = (0, _.v)(a);
            c || (c = (0, _.od)("STYLE"), c.type = "text/css", c.id = a, window.document.body.appendChild(c));
            Lp(c, b)
        }, void 0);
        (0, _.za)("google.j.pcs", function (a, b, c, d, e) {
            _.Uo != c && (e || (e = [a, b, c, !0, !0, ""], c = _.Qn.getItem("c", c), null != c && c.A.add("pcs", e)), d && (a = (0, _.v)(a), Lp(a, b)))
        }, void 0);
        (0, _.za)("google.j.pc", function (a, b, c, d, e) {
            if (_.Uo != c) {
                try {
                    if (!e) {
                        e = [a, b, c, !0, !0, ""];
                        var f = _.Qn.getItem("c", c);
                        null != f && f.A.add("pc", e)
                    }
                    d && (aq((0, _.Sn)().value(), a, b, !0), (0, _.Qf)(81, [a]))
                } catch (g) {
                    (0, _.Hn)("PC", {
                        c: a,
                        f: c
                    }, g)
                }
                Yp[Zp] = 11
            }
        }, void 0);
        (0, _.za)("google.j.phf", function (a, b) {
            try {
                var c = b.tbs;
                c && 0 <= c.indexOf("ppl_id") && (b.tbs = c.replace(/\+/g, " "));
                _.So.add("phf", [b]);
                if ((0, _.gn)()) {
                    var d;
                    window.gbar && (d = window.gbar.qfhi) && d(b)
                } else if ((0, _.v)("tophf")) {
                    var c = "",
                        e;
                    for (e in b) c += '<input type=hidden name="' + e + '" value="' + b[e] + '">';
                    aq(a, "tophf", c, !0)
                }
            } catch (f) {
                (0, _.Hn)("PHF", {
                    fields: b
                }, f)
            }
        }, void 0);
        (0, _.za)("google.j.xx", function (a, b) {
            try {
                xq = !0, (0, _.xp)(), aq((0, _.Sn)().value(), "sdb", ""), aq((0, _.Sn)().value(), (0, _.eo)(), b)
            } catch (c) {
                (0, _.Hn)("_xx", {}, c)
            }
        }, void 0);
        var zq;
        (0, _.Ia)(dq);
        dq.prototype.B = function () {
            window.event && (0, _.Sa)(window.event.button) && (zq = window.event.button)
        };
        dq.prototype.A = function (a, b) {
            return this.jt.B(a, b)
        };
        (0, _.Pj)(_.eq, dq);
        _.eq.prototype.HL = (0, _.Vj)(function (a, b, c) {
            (a = (0, _.Yj)(a, zq)) && (b && !/(\\?|&)cad=/.test(c.href)) && (c.href += "&cad=rja");
            return a
        });
        _.eq.prototype.B = (0, _.Vj)(function (a, b) {
            if (!_.Yo._en) return !0;
            b = b || window.event;
            if (!(0, _.Qf)(2, [b])) return b.preventDefault && b.preventDefault(), b.cancelBubble = !0, !1;
            var c = (0, _.Od)(b.target || b.srcElement, "A");
            if (!c) return !0;
            var d = c.getAttribute("href", 2),
                e = (0, _.Qf)(33, [d], d);
            d != e && (c.href = e);
            d = !1;
            if (!window.google.njr) {
                e = "";
                if (_.Po.rh.test(c.href) || _.Po.ah.test(c.href) && /(\\?|&)adurl=/.test(c.href) && !/(\\?|&)q=/.test(c.href)) /(\\?|&)rct=j/.test(c.href) || (e += "&rct=j"), /(\\?|&)q=/.test(c.href) || (e +=
                    "&q=" + (0, window.encodeURIComponent)((0, _.ap)("q") || (0, _.ap)("as_q") || jq), e = e.substring(0, 1948 - c.href.length)), d = !0;
                var f = _.Yo._csm;
                _.Po.jh.test(c.href) && (f && 2 == f) && (e += "&psj=1");
                e && (f = c.href.indexOf("&ei="), 0 <= f ? c.href = c.href.substr(0, f) + e + c.href.substr(f) : c.href += e)
            }
            if (this.HL(b, d, c)) return !0;
            if (c.target) {
                if (!(0, _.Qf)(99, [b, c.href])) return !1;
                d && !/(\\?|&)cad=/.test(c.href) && (c.href += "&cad=rjt");
                return !0
            }
            if (_.Po.jh.test(c.href) && !/\bnj\b/.test(c.className) && "#" != c.getAttribute("href")) return d = (0, _.xb)((0, _.Qe)(c,
                "data-jatdrcr")), c = a(c.href, !1, d), !1 === c && (b.preventDefault && b.preventDefault(), b.cancelBubble = !0), c;
            if ((0, _.Qf)(57, [b, c.href]) && /&rct=j/.test(c.href) && "_top" != c.target) try {
                return (0, _.Yf)(c.href), b.preventDefault && b.preventDefault(), b.cancelBubble = !0, !1
            } catch (g) {
                return !0
            }
        });
        lq.prototype.CE = (0, _.ma)("J");
        mq.prototype.reset = function () {
            this.A = {}
        };
        (0, _.db)(nq, _.On);
        (0, _.Ia)(nq);
        nq.prototype.zb = function (a, b, c, d, e, f, g, h, k) {
            if (xca(c) || (0, _.Ao)(c) && -1 != c.indexOf("&ijn=")) return !0;
            var l = this.B.A[c];
            if (l && l.CE() < f) return !0;
            b = !1;
            l || (b = !0, l = Mca(this.B, c, f), (0, _.Qf)(129, [], !1, !0) ? up(_.Jn.G()) : up(_.In.G()));
            d || (this.B.A[c] = null);
            l.Bc += a;
            a = l.Bc;
            if (!(0, _.Qf)(1, [c, d, b, e, k])) return _.Yo._scl = !0, d || '"NCSR"' != a ? !0 : ((0, _.lo)(7, (0, _.Sn)().value() + "&sei=" + h, 2, {
                url: c
            }), !1);
            _.Yo._hnp = !0;
            (0, _.Sn)().set("#" + c.substring(c.indexOf("?") + 1));
            l.H || (l.H = !0, tp(), Xp());
            f && (_.yo = f);
            Gp("_ipp", 0 < c.indexOf("&pf="));
            f = (0, _.Bo)(a);
            k = [];
            Zp = c;
            for (b = 0; b < f.length; ++b) {
                g = f[b];
                l.D || (l.D = !0, g = g.replace(/location.href/gi, '"' + c + '"'));
                if (!l.B)
                    if (/var je=google.j;/.test(g)) l.B = !0;
                    else if (!l.A) {
                    var n = a.match(/jesr_eventid='(.*?)';/);
                    n && (l.A = n[1])
                }
                k.push(g)
            }
            if (0 < k.length) {
                var p = k.join(";"),
                    m = (0, _.Sn)().value();
                _.Mn.execute(function () {
                    (0, _.mo)(p, m)
                })
            }
            if (d) l.Bc = yca(a);
            else {
                if ('"NCSR"' == a) return (0, _.lo)(7, (0, _.Sn)().value() + "&sei=" + h, 2, {
                    url: c
                }), !1;
                _.Mn.execute((0, _.$a)(function () {
                    if (l.B) {
                        var a;
                        yq ? (a = yq, yq = "", zp(a), a = !0) : a = !1;
                        a ? a = !1 : 0 != (Yp[c] || 0) ? ((0, _.lo)(8, (0, _.$o)(), 2), a = !1) : a = !0;
                        if (!a) return
                    } else a = l.A, (0, _.lo)(6, (0, _.Sn)().value() + (a ? "&sei=" + a : ""), 2, {
                        url: c
                    });
                    window.setTimeout(_.ro, 0);
                    window.postMessage && window.postMessage("jrc", "*");
                    (0, _.Qf)(0, [c, e])
                }, this))
            }
            return !0
        };
        var wq = !1,
            pq = window.google.j ? window.google.j.b : !1;
        (0, _.za)("google.j.xi", function () {
                if (window.google.y.first) {
                    for (var a = 0, b; b = window.google.y.first[a]; ++a) b();
                    window.google.y.first = []
                }
                window.google.x = function (a, b) {
                    b && b.apply(a);
                    return !1
                };
                Ep = null;
                wq = !0
            }, void 0);
        var tq = !1;
        (0, _.za)("google.j.ac", function (a, b, c, d, e, f) {
            _.Uo != b && (d || _.Qn.JC("c", b, !0).Ez(a), c && (gq = hq = !0, Pp(), f || oq(!1)), Yp[Zp] = 10)
        }, void 0);
        (0, _.za)("google.j.ad", function (a, b, c, d, e, f, g) {
            var h = !1;
            xq = !1;
            _.So.clear();
            _.So.add("ad", [b, c, d, 0, !0, g]);
            f || Pp();
            oq(!0);
            wq && window.google.y.x && (window.google.x = window.google.y.x);
            b = (0, _.Qf)(21, [b], b, "");
            try {
                if (b && (window.document.title = b, _.sc.Yr)) {
                    var k = (0, _.Qf)(112);
                    (0, _.Qf)(24, [(0, _.Sn)().value()]) && (0, _.vp)((0, _.Sn)().value(), !k)
                }
            } catch (l) {}
            window.google.kEI = c;
            e && (window.google.kCSI = e);
            _.Uo != d ? (b = _.Qn.getItem("c", d)) ? (h = {
                ss: 0
            }, c = (0, _.Gn)("ac", [{},
                d, !0, !0, (0, _.Sn)().value(), !0
            ]), c.n = "ac", (0, _.Ln)(c,
                h), hq = !1, (b = b.A.getAll()) && Cp(b, h), d = (0, _.Gn)("zc", [{},
                d, !0, !0, (0, _.Sn)().value()
            ]), d.n = "zc", (0, _.Ln)(d, h), d = !0) : (d = (0, _.ap)("fp", a) || "1", (0, _.Hn)("CM", {
                fp: d
            }), "1" != d ? (0, _.fq)(Fp(a, "fp", "1")) : (0, _.lo)(0, a, 2), d = !1) : d = !0;
            h = d;
            jq = (d = (0, _.ap)("q", a)) ? d : (0, _.ep)(a) ? "" : jq;
            (0, _.dp)(window.google.sn in uq ? "hp" : "srp");
            g && (0, _.kj)(window.document.body, g.split(" "));
            (0, _.Ro)(a, _.Yo._ipp);
            Yp[Zp] = 20;
            return h
        }, void 0);
        (0, _.za)("google.j.xmi", !1, void 0);
        (0, _.za)("google.j.zc", function (a, b, c, d) {
            if (_.Uo != b) {
                if (!d) {
                    d = _.Qn;
                    var e = d.getItem("c", b);
                    null != e && e.Ez(a);
                    d.bM("c", b)
                }
                c && (_.Uo = b, window.document.body.style.display = "", window.document.body.style.visibility = "");
                (0, _.Qf)(42, [b]);
                Yp[Zp] = 12
            }
        }, void 0);
        (0, _.za)("google.j.zz", function (a, b) {
            _.So.add("zz", [!0, xq]);
            window.document.body.style.height = "";
            b || window.google.timers && window.google.timers.load.t && (window.google.timers.load.t.prt = window.google.time());
            var c = (0, _.Qf)(19, [(0, _.Sn)().value()], (0, _.Sn)().value());
            n: {
                try {
                    var d = (0, _.bp)();
                    null === d && (d = jq);
                    if (null === d) break n;
                    d = (0, _.Qf)(4, [d], d, null);
                    null === d || Dp(d)
                } catch (e) {
                    (0, _.Hn)("PQ", {}, e)
                }(0, _.kq)()
            }
            b || window.google.timers && window.google.timers.load.t && (window.google.timers.load.t.pprt = window.google.time());
            b || (0, _.Vo)(c);
            _.Yo._scl = !0;
            sp();
            if (!xq && (!b && window.google.timers && window.google.timers.load.t) && (window.google.timers.load.t.ol = window.google.time(), window.google.timers.load.t.jsrt = _.yo, _.Yo._hnp)) {
                var c = hq,
                    d = gq,
                    f = _.Yo._ipp;
                try {
                    ++Tp;
                    var g = window.document.getElementsByTagName("IMG");
                    Sp = g.length;
                    Vp = 0;
                    Rp = !1;
                    for (var h = 0, k; h < Sp; ++h) {
                        var l = k = g[h],
                            n = Up;
                        (0, _.af)(l, "load", n);
                        (0, _.af)(l, "error", n);
                        !k.complete && (0, _.Ra)(k.src) && k.src ? (l = k, n = Up, (0, _.$e)(l, "load", n), (0, _.$e)(l, "error", n)) : ++Vp
                    }
                    g = "n";
                    c ? g = "r" :
                        d && (g = "c");
                    window.google.timers.load.e = {
                        ei: window.google.kEI,
                        e: window.google.kEXPI,
                        cr: g,
                        imp: Sp - Vp
                    };
                    f && (window.google.timers.load.e.pf = 1);
                    var p = _.Lo.ll();
                    if (p && (window.google.timers.load.e.pfa = Wp(p[0]), window.google.timers.load.e.pfm = Wp(p[1]), 3 <= p.length)) {
                        for (d = c = g = 0; d < p[2].length; ++d) {
                            var m = p[2][d];
                            m > c && (c = m);
                            g += m
                        }
                        g = Math.round(g / p[2].length);
                        window.google.timers.load.e.pmd = "max." + c + ",avg." + g + "," + p[2].join(",")
                    }
                    Vp == Sp && Up(null, !0)
                } catch (t) {
                    (0, _.Hn)("SCSI", {
                        n: Sp,
                        i: h,
                        s: k ? (0, _.Ra)(k.src) ? k.src.substr(0, 40) : 1 : 0,
                        c: k ? k.complete : 0
                    }, t)
                }
            }
            xq = !1;
            _.Yo._hnp = !1;
            Yp[Zp] = 0
        }, void 0);

        (0, _.Sg)(_.x.G(), "sy20");
        (0, _.Wg)(_.x.G(), "sy20");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        (0, _.Vg)(_.x.G(), "j");
        (0, _.vq)(window.google.pmc.j);
        (0, _.Sg)(_.x.G(), "j");
        (0, _.Wg)(_.x.G(), "j");
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
            return !1
        }, void 0);
        window.google.pml = 1;

        (0, _.Sg)(_.x.G(), "pcc");
        (0, _.Wg)(_.x.G(), "pcc");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        (0, _.Vg)(_.x.G(), "csi");
        if (window.google.timers && window.google.timers.load.t) {
            window.google.timers.load.t.xjsee = (0, _.Ve)();
            var Pk = (0, _.dg)("qsubts");
            if (Pk && Pk.match("^[0-9]+$")) {
                var Qk = (0, window.parseInt)(Pk, 10),
                    Oba = (0, _.Ve)();
                Qk <= Oba && window.google.tick("load", "qsubts", Qk)
            }
            var Pba = window.google.sn;
            window.setTimeout(function () {
                if (window.google.timers.load.t) {
                    var a = window.google.sn;
                    window.google.sn = Pba;
                    window.google.timers.load.t.xjs = (0, _.Ve)();
                    try {
                        if (window.external)
                            for (var b = "ist_rc ist_rn ist_nr ist_cdts ist_dp ist_rrx ist_rxr ist_rs ist_sr".split(" "), c = 0, d; d = b[c++];) {
                                var e = window.external[d];
                                if (e) window.google.kCSI[d] = e;
                                else break
                            }
                    } catch (f) {}(0, _.Ik)();
                    window.google.sn = a
                }
            }, 0)
        };

        (0, _.Sg)(_.x.G(), "csi");
        (0, _.Wg)(_.x.G(), "csi");
    } catch (e) {
        _._DumpException(e)
    }
})(_);
