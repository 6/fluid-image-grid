(function () {
    var p, ba = function (a) {
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
        }, t = function (a, b) {
            s.prototype[a] = b
        }, u = function (a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.p = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        }, ia = function (a, b, c) {
            this.c = c;
            this.d = b;
            this.a = a
        };
    ia.prototype.h = function (a) {
        if (1 == a.length) return ka(a[0], this.d, this.c, !0);
        if (2 == a.length) return this.e(a, this.d, this.c, !0, !0);
        if (3 == a.length) {
            var b = this.d,
                c = this.c,
                d = Math.floor(Math.min(0.6 * c, a[0].height)),
                c = c - d - this.a,
                d = ka(a[0], b, d, !1);
            a = ta(this, a.slice(1), b, c, !0);
            return {
                g: [d.g[0], a.g[0], a.g[1]],
                v: d.v + this.a + a.v
            }
        }
        if (4 == a.length) {
            var b = this.d,
                c = this.c,
                e = Math.floor(Math.min(Math.min(c / 2), Math.min(a[0].height, a[1].height))),
                d = Math.min(c - e - this.a, Math.min(a[2].height, a[3].height));
            e + d + this.a < c && (e =
                Math.min(c - d - this.a, e));
            c = ta(this, a.slice(0, 2), b, e, !1);
            a = ta(this, a.slice(2), b, d, !0, c.g[0].width);
            return {
                g: [c.g[0], c.g[1], a.g[0], a.g[1]],
                v: c.v + this.a + a.v
            }
        }
        throw Error("Box Layout is currently only for four or fewer results.");
    };
    var ka = function (a, b, c, d) {
        a = Math.min(c, a.height);
        return {
            g: [{
                width: b,
                height: a,
                B: d,
                C: !0
            }],
            v: a
        }
    };
    ia.prototype.e = function (a, b, c, d, e) {
        var f = [],
            g = 1 / E(a[0]),
            h = Math.floor(Math.min(c * g / (g + 1 / E(a[1])), 0.6 * c)),
            h = Math.max(h, 0.4 * c),
            g = Math.min(h, a[0].height);
        a = Math.min(c - h - this.a, a[1].height);
        f.push({
            width: b,
            height: g,
            B: !1,
            C: e
        });
        f.push({
            width: b,
            height: a,
            B: d,
            C: e
        });
        return {
            g: f,
            v: g + this.a + a
        }
    };
    var ta = function (a, b, c, d, e, f) {
        var g = [ua(b[0], d), ua(b[1], d)],
            h = g[0] + g[1] + a.a + 0 - c;
        if (0 < h && 1 > E(b[0]) ^ 1 > E(b[1])) {
            var k = 1 > E(b[0]) ? 1 : 0,
                l = Math.min(h, Math.floor(g[k] / 2));
            g[k] -= l;
            h -= l
        }
        0 < h ? (k = Math.floor(h * g[0] / (g[0] + g[1])), g[0] -= k, g[1] -= h - k) : 0 > h && (k = Math.ceil(h / 2), g[0] -= k, g[1] = c - g[0] - a.a - 0);
        if (f) {
            i: {
                var h = g[0],
                    l = h - f,
                    n = Math.abs(l);
                if (!(20 <= n) && l) {
                    var r = f - 20,
                        v = f + 20,
                        k = [];
                    f < c / 3 ? k = [v, f] : f > 2 * c / 3 ? k = [r, f] : 10 > n ? (k = [f], 0 > l ? k.push(r, v) : k.push(v, r)) : k = 0 > l ? [r, f, v] : [v, f, r];
                    for (f = 0; f < k.length; f++)
                        if (k[f] <= b[0].width && c - k[f] -
                            a.a <= b[1].width) {
                            b = k[f];
                            break i
                        }
                }
                b = h
            }
            g[0] = b;
            g[1] = c - g[0] - a.a - 0
        }
        a = [];
        a.push({
            width: g[0],
            height: d,
            B: e,
            C: !1
        });
        a.push({
            width: g[1],
            height: d,
            B: e,
            C: !0
        });
        return {
            g: a,
            v: d
        }
    }, ua = function (a, b) {
            var c = a.width,
                d = Math.min(c, Math.floor(E(a) * b)) * b;
            return Math.min(c, Math.floor(Math.sqrt((d + c * b) / 2 * E(a))))
        }, xa = function (a, b, c, d, e, f, g, h, k) {
            var l = [];
            if (!a.length) return l;
            var n = b - c,
                r = [],
                v = 0;
            if (0 > n)
                for (c = 0; c < a.length; c++) {
                    var m = a[c],
                        q = Q(E(m), d, f, m.width, g),
                        m = q / E(m) * (va(m) - E(m));
                    if (0 < m) throw Error("thinnest AR > AR");
                    m + q < f &&
                        (m = f - q);
                    r[c] = m;
                    v += m
                } else if (!k)
                    for (c = 0; c < a.length; c++) {
                        m = a[c];
                        m = Q(wa(m), d, f, m.width, g) - Q(E(m), d, f, m.width, g);
                        if (0 > m) throw Error("widest AR < AR");
                        r[c] = m;
                        v += m
                    }
                for (c = m = 0; c < a.length; c++) q = k || 0 == v ? 0 : n * r[c] / v, q = Math.round(Math.max(f, Q(E(a[c]), d, f, a[c].width, g) + q)), m += q + e, l.push(q);
            if (!k)
                if (b = b - m - (h || 0), l[l.length - 1] + b < f)
                    for (c = l.length - 1; - 1 < c && (a = Math.max(b, f - l[c]), l[c] += a, b -= a, 0 != b); c--);
                else a[a.length - 1].s && 0 < b || (l[l.length - 1] += b);
            return l
        }, Q = function (a, b, c, d, e) {
            a = Math.min(a, e || Number.MAX_VALUE);
            return Math.max(Math.min(b *
                a, d), c)
        }, ya = function (a, b, c, d) {
            ia.call(this, a, b, c);
            this.k = void 0 !== d ? d : 1
        };
    u(ya, ia);
    ya.prototype.h = function (a) {
        var b;
        if (a.length)
            if (1 == a.length) a = ka(a[0], this.d, this.c, !0);
            else if (2 == a.length) a = this.e(a, this.d, this.c);
        else {
            var c = this.d,
                d = this.c,
                e = za(a.length, this.k),
                f = La(a.slice(0, e), d, this.a, e == a.length);
            1 == e && (f = Math.min(f, Math.floor(0.75 * c)));
            b = Math.min(Math.floor(c / 2), Math.floor(d / 3));
            b = Math.floor(0.9 * b);
            for (var g = a.length - e, h = 0, k = e; k < a.length; k++) h += E(a[k]);
            h /= g;
            1 > h && (b = Math.floor(b * h));
            var k = h = 0,
                l = 2;
            do {
                var h = Math.floor(g / l),
                    f = Math.min(c - h * b, f),
                    f = Math.max(b, f),
                    n = c - f,
                    k = Math.round((n +
                        this.a) / h) - this.a;
                k < b && (k = Math.round((n + this.a) / h) - this.a);
                n = h * (k + this.a) - this.a;
                f = c - n
            } while (k < b && l < g && f > b && l++);
            b = a.slice(0, e);
            var n = e == a.length,
                r = {
                    width: f,
                    height: d,
                    Q: b.length
                }, c = [],
                v = d - 0,
                m = [],
                q = 0;
            n && (f += this.a);
            for (var w = 0; w < b.length; w++) {
                var F = Ma(b[w], v);
                m.push(F);
                q += F;
                q += this.a
            }
            f = m = xa(b, f, q, v, this.a, 0);
            for (m = 0; m < b.length; m++) q = m == b.length - 1, c.push({
                width: f[m],
                height: v,
                B: !0,
                C: n && q
            });
            b = [r];
            n = a.length;
            0 != g % l && (n -= l + g % l);
            for (g = 0; e < n; e += l) g++, r = g == h, r = Na(this, a.slice(e, e + l), k + (r ? 0 : this.a), d, r), c.push.apply(c, r.g), b.push(r.D[0]);
            n < a.length && (r = Na(this, a.slice(e), k, d, !0), c.push.apply(c, r.g), b.push(r.D[0]));
            a = {
                g: c,
                D: b
            }
        } else a = {
            g: []
        };
        return a
    };
    var Ma = function (a, b) {
        return Q(E(a), b, 0, a.width, void 0)
    }, za = function (a, b) {
            var c;
            return c = Math.max(0, Math.min(void 0 !== b ? b : 1, a - 2))
        };
    ya.prototype.e = function (a, b, c) {
        return ta(this, a, b, c, !0)
    };
    var Na = function (a, b, c, d, e) {
        var f = b.length,
            g = Math.round((d + a.a) / f) - a.a,
            h = d - (f - 1) * (a.a + g);
        d = {
            width: c,
            height: d,
            Q: f
        };
        for (var f = [], k = 0; k < b.length; k++) {
            var l = k == b.length - 1;
            f.push({
                width: c - (e ? 0 : a.a),
                height: l ? h : g,
                B: l,
                C: e
            })
        }
        return {
            g: f,
            D: [d]
        }
    }, La = function (a, b, c, d) {
            for (var e = 0, f = 0; f < a.length; ++f) e += Ma(a[f], b), e += c;
            d && (e -= c);
            return e
        }, Oa = function (a, b) {
            for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
            return d + c.join("%s")
        }, Pa = function (a) {
            return String(a).replace(/\-([a-z])/g, function (a, c) {
                return c.toUpperCase()
            })
        }, Qa, T, jb = function () {
            T = {};
            var a = document.getElementById("images-grid");
            if (a)
                for (var b = 0; b < a.attributes.length; ++b) {
                    var c = a.attributes[b];
                    c.specified && 0 == c.name.indexOf("data-") && (T[c.name] = c.value)
                }
        }, kb = function (a, b) {
            T || jb();
            return T.hasOwnProperty(a) ? parseFloat(T[a]) : b
        }, lb = kb("data-mrw", 80),
        mb = kb("data-isuf", 0),
        U = function (a, b) {
            return a ? RegExp("(\\s|^)" + b + "(\\s|$)").test(a.className) : !1
        }, nb = function (a) {
            return window.JSON ? window.JSON.parse(a) : eval("(" + a + ")")
        }, ob =
            function (a) {
                if (a = a.getAttribute("data-meta")) return nb(a);
                google.ml(Error("csl:no_box_meta"), !1, {
                    url: window.location.href
                });
                return {}
        }, pb = function (a, b) {
            var c = a.parentNode,
                d = a.nextSibling,
                e = a.style,
                f = e.display,
                g = e.visibility,
                h = e.position;
            e.display = "inline";
            e.visibility = "hidden";
            e.position = "absolute";
            document.documentElement.appendChild(a);
            var k = b.call();
            e.display = f;
            e.visibility = g;
            e.position = h;
            c ? c.insertBefore(a, d) : document.documentElement.removeChild(a);
            return k
        }, qb = function (a, b, c, d) {
            var e = "",
                f = "",
                g = !1;
            if (c < b && (a = a.getElementsByTagName("div")) && a.length)
                for (var h = 0, k; k = a[h]; ++h)
                    if ("rg_anbg" == k.className) {
                        c < lb && (f = (b - lb) / 2 + "px", g = !0);
                        break
                    }
            g || (e = d + "px");
            return {
                P: e,
                r: f
            }
        }, Z = function (a, b) {
            if (void 0 === Qa) {
                var c = google.ua || window.navigator.userAgent;
                Qa = !(!c || -1 == c.indexOf("WebKit") || 0 == c.indexOf("Opera"))
            }
            if (Qa)
                for (var d in b) c = Pa(d), a.style[c] = b[d];
            else {
                c = [];
                for (d in b) c.push(d + ":" + b[d]);
                a.setAttribute("style", c.join(";"))
            }
        }, rb = function (a, b, c) {
            this.a = a;
            this.c = "1" == b.bc;
            this.e = parseInt(b.ct, 10) ||
                0;
            this.h = parseInt(b.cb, 10) || 0;
            this.d = parseInt(b.cl, 10) || 0;
            this.k = parseInt(b.cr, 10) || 0;
            this.n = "1" == b.sc;
            this.width = b.tw;
            this.height = b.th;
            this.A = c || null;
            this.s = 1 == b.ps
        }, sb = kb("data-eca", 0.1),
        E = function (a) {
            return a.width / a.height
        }, va = function (a) {
            if (a.c) return E(a);
            var b = (a.d + a.k) / 100;
            a.n || (b = Math.min(1, b + sb));
            return (a.width - a.width * b) / a.height
        }, wa = function (a) {
            if (a.c) return E(a);
            var b = (a.e + a.h) / 100;
            a.n || (b = Math.min(1, b + sb));
            return a.width / (a.height - a.height * b)
        }, tb = function (a, b) {
            return 0 == a.e && 0 == a.h ? Math.floor(0.5 * b) : Math.round(b * (a.e / (a.e + a.h)))
        }, ub = function (a, b) {
            return 0 == a.d && 0 == a.k ? Math.floor(b / 2) : Math.round(b * (a.d / (a.d + a.k)))
        }, wb = function (a) {
            this.d = a;
            this.a = null;
            this.c = [];
            this.e = this.k = !1;
            this.h = 1;
            a = this.d.childNodes;
            for (var b = 0, c; c = a[b]; b++)
                if (U(c, "rg_bb_i")) {
                    this.a = c;
                    break
                }
            if (this.a)
                for (b = a = this.a.firstChild; b; b = a)
                    if (a = b.nextSibling, U(b, "rg_di")) this.c.push(vb(b));
                    else if (U(b, "rg_bb_layout")) {
                for (; b.hasChildNodes();) c = b.firstChild, U(c, "rg_di") && this.c.push(vb(c)), this.a.insertBefore(c, a);
                this.a.removeChild(b)
            }
            this.k = (a = ob(this.d)) && "2" == a.fl;
            this.e = a && "1" == a.hz
        }, vb = function (a) {
            var b;
            i: {
                b = a.getElementsByTagName("div");
                for (var c = 0, d; d = b[c]; c++)
                    if ("rg_meta" == d.className) {
                        b = nb(d.innerText || d.textContent || d.innerHTML);
                        break i
                    }
                b = null
            }
            if (!b) throw Error("No metadata for image.");
            return new xb(a, b)
        }, yb = function (a, b, c) {
            var d;
            d = a.c;
            b = b - c - 2;
            a = a.h;
            if (d.length)
                if (1 == d.length) d = Math.floor(Ma(d[0], b));
                else if (2 == d.length) d = Math.floor(Ma(d[0], b) + Ma(d[1], b) + 1);
            else {
                a = za(d.length, a);
                c = La(d.slice(0, a), b, 1, a == d.length);
                for (var e = Math.floor((d.length - a) / 2), f = 0, g = a; g < d.length; g++) f += E(d[g]);
                f /= d.length - a;
                d = Math.floor(c + (b - 1) * e * f / 2 + 1 * e - 1)
            } else d = 0;
            return d + 2
        }, zb = function (a, b) {
            for (var c = a.d.childNodes, d = 0, e; e = c[d]; d++)
                if ("rg_bb_label" == e.className) return c = a.d, U(a.d.parentElement, "rg_bb_c") && (c = a.d.parentNode), pb(c, function () {
                    return b ? e.offsetWidth : e.offsetHeight
                });
            return 0
        }, Wb = function (a, b, c) {
            var d = a.e,
                e = zb(a, d),
                f;
            (f = document.documentElement.getAttribute("dir")) || (f = document.body.getAttribute("dir"));
            f = "rtl" == f;
            d ? b -= e : c -= e;
            c = c - 0 - 2;
            d = b - 2;
            b = null;
            b = a.k ? new ya(1, d, c, a.h) : new ia(1, d, c);
            b = b.h(a.c);
            a.a.style.width = d + "px";
            for (d = e = 0; b.D && d < b.D.length; d++)
                if (1 < b.D.length) {
                    var g = b.D[d],
                        h = document.createElement("div");
                    h.className = "rg_bb_layout";
                    h.style.width = g.width + "px";
                    h.style.height = g.height + "px";
                    g.fa && (h.style.cssFloat = g.fa, h.style.color = "white");
                    h.style.display = "inline-block";
                    a.a.appendChild(h);
                    for (var k = 0; k < g.Q; k++, e++) h.appendChild(a.c[e].a)
                }
            e = [];
            for (d = 0; d < b.g.length; d++) {
                var g = b.g[d],
                    k = a.c[d],
                    h = k.a,
                    l = k,
                    k = g.width,
                    n = g.height,
                    r = l.a,
                    v = r.getElementsByTagName("img")[0],
                    m = l.width,
                    q = l.height,
                    m = k / n,
                    w = E(l);
                !l.c && w < m || l.c && w > m ? (m = Math.min(l.width, Math.floor(k)), q = Math.round(m / w)) : (q = Math.min(l.height, Math.floor(n)), m = Math.round(q * w));
                var F = 0,
                    aa = 0,
                    ja = Math.round((k - m) / 2),
                    w = Math.round((n - q) / 2);
                0 > ja && (F = -1 * ub(l, m - k), ja = 0);
                0 > w && (aa = -1 * tb(l, q - n), w = 0);
                Z(r, {
                    width: k + "px",
                    height: n + "px"
                });
                Z(v, {
                    width: m + "px",
                    height: q + "px",
                    "padding-left": ja + "px",
                    "margin-left": F + "px",
                    "margin-top": aa + "px"
                });
                if (l = r.getElementsByTagName("a")[0]) v =
                    Math.min(m, k), n = Math.min(q, n), k = qb(r, k, m, ja), Z(l, {
                        width: v + "px",
                        height: n + "px",
                        left: k.P,
                        right: k.r,
                        top: w + "px"
                    });
                g.C || (f ? h.style.marginLeft = "1px" : h.style.marginRight = "1px");
                g.B || (h.style.marginBottom = "1px");
                e.push(h)
            }
            f = (c - b.v) / 2;
            0 < f && (a.a.style.paddingTop = 0 + Math.ceil(f) + "px", a.a.style.paddingBottom = Math.floor(f) + "px");
            return e
        }, xb = function (a, b) {
            rb.call(this, a, b);
            this.width = b.hw || b.tw;
            this.height = b.hh || b.th
        };
    u(xb, rb);
    var Yb = function (a, b) {
        var c = Xb;
        this.d = a;
        this.a = c;
        this.e = !! b;
        this.c = lb || 0
    }, Zb = function (a) {
            Error.captureStackTrace ? Error.captureStackTrace(this, Zb) : this.stack = Error().stack || "";
            a && (this.message = String(a))
        };
    u(Zb, Error);
    Zb.prototype.name = "CustomError";
    var $b = function (a, b) {
        b.unshift(a);
        Zb.call(this, Oa.apply(null, b));
        b.shift()
    };
    u($b, Zb);
    $b.prototype.name = "AssertionError";
    var ac = function (a, b, c) {
        if (!a) {
            var d = Array.prototype.slice.call(arguments, 2),
                e = "Assertion failed";
            if (b) var e = e + (": " + b),
            f = d;
            throw new $b("" + e, f || []);
        }
    }, bc = function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c],
                    e, f;
                (f = "array" == ba(d)) || (e = ba(d), f = (e = "array" == e || "object" == e && "number" == typeof d.length) && Object.prototype.hasOwnProperty.call(d, "callee"));
                if (f) a.push.apply(a, d);
                else if (e) {
                    f = a.length;
                    for (var g = d.length, h = 0; h < g; h++) a[f + h] = d[h]
                } else a.push(d)
            }
        }, cc = function () {}, ec = function (a) {
            var b =
                dc;
            if (a.p) ac(a.prototype instanceof b, "delegate is not a subclass of the delegate base");
            else {
                for (var c in a.prototype)
                    if (a.prototype.hasOwnProperty(c)) throw Error("delegate registered after defining methods. you should extend your delegate base explicitly immediately after defining your delegate class");
                u(a, b)
            }
            ac(!b.N, "delegate registered after first delegator instantiation");
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
                        if (c.hasOwnProperty(e) && "function" == ba(c[e]) && c[e] !== a) {
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
                    d = !1
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
                    d = void 0
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
    cc.prototype.A = function (a) {
        if (this.d)
            for (var b = 0; b < this.d.length; ++b)
                if (this.d[b] instanceof a) return this.d[b];
        return null
    };
    var jc = function () {
        var a = function () {};
        a.Y = !0;
        return a
    }, kc = function () {
            var a = function () {};
            a.ga = !0;
            return a
        }, lc = function () {
            var a = function () {};
            a.Z = !0;
            return a
        }, mc = function (a) {
            return this.l.A(a)
        }, s = function () {
            if (!this.l) {
                for (var a = this.constructor; a && !a.w;) a = a.p && a.p.constructor;
                ac(a, "trying to create delegate for non-delegating class: did you forget to use fava.delegate.Delegate.setBase?");
                a.w.N || (a.w.N = hc(a));
                this.l = new a.w.N(this);
                this.A ? ac(this.A == mc, "conflicting definitions of findDelegate") : this.A =
                    mc
            }
            this.d = new nc;
            this.a = [];
            this.R = [];
            this.U = [];
            this.n = [];
            this.h = kb("data-th", 140);
            this.V = !1;
            this.l.initialize(this.h)
        }, Xb = kb("data-ma", 12);
    kb("data-mrw", 80);
    T || jb();
    var oc = T.hasOwnProperty("data-bge") ? "true" == T["data-bge"] : !0;
    s.prototype.F = !1;
    s.prototype.H = !1;
    s.prototype.qa = 0;
    s.prototype.getResults = function () {
        return this.U
    };
    t("getResults", s.prototype.getResults);
    s.prototype.ka = function () {
        return this.l.ca()
    };
    t("getNumPages", s.prototype.ka);
    s.prototype.la = function (a) {
        return this.l.da(a)
    };
    t("getResultsForPage", s.prototype.la);
    s.prototype.k = function (a) {
        this.s = this.a.length ? a ? 3 : this.H ? 2 : 1 : 0;
        this.c = document.getElementById("rg");
        switch (this.s) {
        case 0:
            this.l.L();
            this.l.K();
            this.l.T();
            pc(this);
            google.stb.csi.setNumInlined(qc(this));
            rc(this);
            break;
        case 1:
            this.l.M(this.e);
            this.l.S(this.s, this.d, this.e);
            break;
        case 2:
            sc(this);
            this.l.M(this.e);
            rc(this);
            this.H = !1;
            break;
        case 3:
            sc(this);
            rc(this);
            break;
        default:
            throw Error("Unexpected layout state: " + this.s);
        }
    };
    t("layoutResults", s.prototype.k);
    s.prototype.oa = function () {
        var a = document.getElementById("rg"),
            b = document.querySelectorAll("div.rg_add_chunk");
        if (a && 0 != b.length) {
            for (var c, d = 0; c = b[d]; ++d) {
                var e = c.getAttribute("data-cei");
                e || google.ml(Error("stb_nocei"), !1);
                if (e && !this.R[e]) {
                    this.R[e] = !0;
                    var f = 1 == this.a.length && 100 > this.a[0],
                        g = 3 == this.a.length;
                    f ? google.stb.csi.startChunk1Layout() : g && google.stb.csi.startChunk3Layout();
                    for (this.e = document.createDocumentFragment(); 0 < c.childNodes.length;) this.e.appendChild(c.childNodes[0]);
                    this.k();
                    a.appendChild(this.e);
                    this.e = null
                }
                c.parentNode.removeChild(c);
                f ? google.stb.csi.endChunk1Layout() : g && google.stb.csi.endChunk3Layout()
            }
            tc(this)
        } else 1 == this.a.length && 20 >= this.a[0] && this.O()
    };
    t("moveAndLayoutNewResults", s.prototype.oa);
    var tc = function (a) {
        for (var b = 0; b < a.n.length; ++b) try {
            a.n[b]()
        } catch (c) {}
    };
    s.prototype.O = function () {
        this.F = !0;
        this.l.ba()
    };
    t("setAllResultsLoaded", s.prototype.O);
    s.prototype.J = function () {
        return this.F
    };
    t("areAllResultsLoaded", s.prototype.J);
    s.prototype.ja = function (a) {
        return this.a[a] || 0
    };
    t("getChunkSize", s.prototype.ja);
    s.prototype.ma = function (a) {
        return void 0 !== this.a[a]
    };
    t("hasRenderedChunk", s.prototype.ma);
    s.prototype.X = function () {
        return this.a
    };
    t("getChunkSizeArray", s.prototype.X);
    var sc = function (a) {
        a.l.K();
        a.U = [];
        pc(a);
        a.l.aa()
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
        }, kd = function (a, b) {
            var c = b.length;
            if (0 < c) {
                var d = a.a.length;
                !oc && 1 == d && 100 > a.a[0] ? (a.a[0] += c, a.V = !0, 100 < a.a[0] && google.ml(Error("csl:xl_chunk"), !1, {
                    url: window.location.href,
                    size: a.a[0]
                })) : (b[0].setAttribute("data-ci", d), a.a.push(c))
            }
            jd(a) && (a.F = !0);
            return c
        }, jd = function (a) {
            if (!a.a.length) return !1;
            if (oc || !a.V) switch (a.a.length) {
            case 1:
                return 20 > a.a[0];
            case 2:
                return 80 > a.a[1];
            default:
                return 100 > a.a[a.a.length - 1]
            } else return 100 > a.a[a.a.length -
                1]
        }, ld = function (a) {
            google.stb.csi.setFirstPageSize(a)
        }, qc = function (a) {
            a = a.c.getElementsByTagName("img");
            for (var b = 0, c;
                (c = a[b]) && !(c.hasAttribute("data-src") || c.hasAttribute("src") && 0 != c.getAttribute("src").indexOf("data:")); b++);
            return b
        };
    s.prototype.ia = function (a) {
        this.n.push(a)
    };
    t("addNewResultsListener", s.prototype.ia);
    s.prototype.pa = function (a) {
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
    t("removeNewResultsListener", s.prototype.pa);
    var nc = function () {}, dc = function (a) {
            this.a = a
        }, md = dc,
        nd = s;
    md.p ? ac(md.prototype instanceof cc, "delegate base class is not a subclass of fava.delegate.Delegate") : u(md, cc);
    ac(!nd.w, "delegator already has a delegate base set");
    nd.w = md;
    var od = nd;
    do od = od.p && od.p.constructor; while (od && !od.w);
    if (od && od.w !== md.p.constructor) throw Error("delegate base must derive from superclass delegate base");
    p = dc.prototype;
    p.initialize = lc();
    p.ca = jc();
    p.da = jc();
    p.ba = lc();
    p.L = lc();
    p.K = lc();
    p.T = kc();
    p.M = kc();
    p.W = kc();
    p.S = kc();
    p.aa = lc();
    var pd = function (a) {
        this.a = a
    };
    u(pd, dc);
    ec(pd);
    pd.prototype.L = function () {
        var a = document.getElementById("ifb");
        if (a) {
            var b = parseInt(document.getElementById("ifbc").getAttribute("data-h"), 10) - 8,
                c = a.parentNode,
                d = a.nextSibling;
            c.removeChild(a);
            for (var e = a.querySelectorAll("div.rg_fb"), f = 0, g; g = e[f]; f++) {
                var h = new wb(g),
                    k = Math.max(1, h.c.length - 2);
                h.h = k;
                k = yb(h, b, 30);
                Z(g, {
                    width: k - 2 + "px",
                    height: b - 2 + "px"
                });
                Wb(h, k, b)
            }
            document.getElementById("ifbc").style.display = "";
            document.getElementById("ifbd").style.display = "";
            c.insertBefore(a, d)
        }
    };
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
    p.ba = function () {
        this.h && this.h.length && (this.a.k(), tc(this.a))
    };
    p.L = function () {
        for (var a = [document.getElementById("search"), document.getElementById("rhscol")], b = 0; b < a.length; b++)
            if (a[b])
                for (var c = a[b].childNodes, d = 0, e; e = c[d]; d++)(U(e, "rg_bb_c") || U(e, "rg_bb")) && this.e.appendChild(e)
    };
    p.K = function () {
        for (var a = 0, b; b = this.e.childNodes[a]; a++)
            if (U(b, "rgsh") || U(b, "rg_pd")) this.e.removeChild(b), a--;
            else if (U(b, "rg_bb")) {
            b = b.getElementsByTagName("div");
            for (var c = 0, d; d = b[c]; c++)
                if (U(d, "rg_bb_i")) {
                    b = d;
                    for (d = c = b.firstChild; d; d = c)
                        if (c = d.nextSibling, U(d, "rg_bb_layout")) {
                            for (; d.hasChildNodes();) b.insertBefore(d.firstChild, c);
                            b.removeChild(d)
                        }
                    break
                }
        }
    };
    p.T = function () {
        for (var a = this.a.X(), b = 0, c = this.e.childNodes, d = 0, e; e = c[d]; d++)
            if (U(e, "rg_di")) uc(this.a, e), e.hasAttribute("data-ci") && (a.push(b), b = 0), b++;
            else if (U(e, "rg_bb_c") || U(e, "rg_bb")) {
            e = e.querySelectorAll("div.rg_di");
            for (var f = 0, g; g = e[f]; f++) uc(this.a, g), g.hasAttribute("data-ci") && (a.push(b), b = 0), b++
        }
        0 < b && (a.push(b), jd(this.a) && this.a.O())
    };
    p.M = function (a) {
        if (a) {
            for (var b = [], c = 0, d; d = a.childNodes[c]; c++)
                if (U(d, "rg_bb")) {
                    d = d.querySelectorAll("div.rg_di");
                    for (var e = 0, f; f = d[e]; e++) uc(this.a, f), b.push(f)
                } else uc(this.a, d), b.push(d);
            kd(this.a, b) && google.isr.Hover && window.setTimeout(function () {
                google.isr.Hover.loadDataFromResults(b)
            }, 0)
        }
    };
    p.W = function (a, b, c) {
        for (var d = [], e = [], f = this.e.childNodes, g = 0, h; h = f[g]; g++) U(h, "rg_di") || U(h, "rg_bb") ? d.push(h) : U(h, "rg_bb_c") && e.push(h);
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
                if (U(aa, "rg_bb")) {
                    var ja = ob(aa),
                        V = new td(aa, ja);
                    if (!V.width) {
                        var xd = V,
                            Ab;
                        var Aa = V.c,
                            L = V.a * a.k + (V.a - 1) * Xb;
                        if (Aa.k) Ab = 2 * L;
                        else {
                            L -= 2;
                            Aa.e || (L -= 41);
                            var Ra = void 0,
                                y = Aa.c,
                                Ba = 0,
                                Ca = Math.ceil((L - 1) / 2),
                                Da = Math.floor((L - 1) / 2),
                                Sa = 0.6 * (L - 1),
                                Ta = L - 1 - Sa,
                                M = ua;
                            switch (y.length) {
                            case 1:
                                Ba = M(y[0], L);
                                break;
                            case 2:
                                1 > E(y[0]) && 1 <= E(y[1]) ? (Ca = Sa, Da = Ta) : 1 <= E(y[0]) && 1 > E(y[1]) &&
                                    (Ca = Ta, Da = Sa);
                                Ba = Math.min(M(y[0], Ca), M(y[1], Da));
                                break;
                            case 3:
                                Ba = Math.min(M(y[0], Sa), M(y[1], Ta) + M(y[2], Ta));
                                break;
                            case 4:
                                Ba = Math.min(M(y[0], Ca) + M(y[1], Ca), M(y[2], Da) + M(y[3], Da));
                                break;
                            default:
                                throw Error("Box Layout is currently only for four or fewer results.");
                            }
                            Ra = Ba;
                            Aa.e && (Ra += zb(Aa, !0));
                            Ab = Math.min(Ra + 0 + 2, 400)
                        }
                        xd.width = Ab
                    }
                    w.push(V);
                    m += V.a;
                    q = Math.min(q, V.width)
                }
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
                Wa = void 0,
                Cb = void 0;
            if (U(Va, "rg_bb")) Cb = new wb(Va), Wa = {
                tw: yb(Cb, wc.h, 13),
                th: wc.h,
                bc: 0,
                ct: 10,
                cb: 0,
                cr: 4,
                cl: 0,
                sc: 0,
                ps: 1
            };
            else
                for (var Cd = Va.getElementsByTagName("div"), xc = 0, Ea = void 0; Ea = Cd[xc]; xc++)
                    if ("rg_meta" == Ea.className) {
                        Wa = nb(Ea.innerText || Ea.textContent || Ea.innerHTML);
                        break
                    } if (!Wa) throw google.ml(Error("csl:no_meta"), !1, {
                url: window.location.href
            }), Error("No metadata for image.");
            Ad[Bd] = new rb(Va, Wa, Cb)
        }
        if (c.a) {
            4 * a.k > c.a && (a.k = Math.floor(c.a / 4), a.a.h = a.k);
            for (var Xa = new qd(a.k, !a.a.J()), N = h, Db = c.a, N = N || [], la = [0, 0], Eb = [], G = 0; G < N.length; G++) {
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
                            Gd = Q(E(fa), $a, I.c, fa.width, 2),
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
                            Mb = Mb + E(fa);
                        Gb++;
                        if (Fa > ea) break
                    }
                    if (0 == Ga && !Jb) break;
                    W[P] = {
                        count: Ga,
                        width: Fa + Jb,
                        height: $a,
                        G: void 0
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
                for (var Gc = !1, oa = 0; oa < da.length; oa++) na[oa] != da[oa].G && (na[oa] = da[oa].G, Gc = !0);
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
            for (var Qb = [], Mc = !1, G = 0; G < N.length; G++)
                if (ca = N[G]) {
                    for (var ga = 0, O = 0; O < ca.a; O++) pa[O] ? ga += pa[O] : (ga += Xa.d, Mc = !0, la[O]--);
                    ga += Xa.a * (ca.a - 1);
                    Qb[G] = ga
                }
            for (var ha = [], Md = 0, R = 0; R < X.length; R++) {
                var Ia = X[R];
                0 < la[0] && (Ia++, la[0]--, 0 == R && (Ia++, ha.push({
                    I: !0,
                    width: N[0].width,
                    height: Qb[0]
                })), ha.push({
                    padding: !0,
                    width: N[0].width,
                    height: pa[R]
                }));
                for (G = 0; G < X[R]; G++) ha.push(Jc[Md++]);
                0 < la[1] && (Ia++, la[1]--, 0 == R && (Ia++, ha.push({
                    I: !0,
                    width: N[1].width,
                    height: Qb[1]
                })), ha.push({
                    padding: !0,
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
                for (var Nd = J, qa = 0; qa < X[Ja]; qa++) {
                    var C = ha[cb + qa];
                    C.I || C.padding || Nd++
                }
                for (qa = 0; qa < X[Ja]; qa++) {
                    C = ha[cb];
                    if (C.I) {
                        var Oc = 0 < cb,
                            db = Oc ? h[1] : h[0],
                            S = db.d;
                        S.style.position = "absolute";
                        S.style.top = "0";
                        U(S, "rg_bb_end") || U(S, "rg_bb_start") || (S.className += Oc ? " rg_bb_end" : " rg_bb_start");
                        S.style.width = C.width + "px";
                        S.style.height = C.height + "px";
                        for (var Rb = db.c.length, Od = (C.height -
                                (Rb - 1) * Xb) / Rb, Sb = 0; Sb < Rb; Sb++) {
                            var Pc = db.c[Sb],
                                Pd = Wb(Pc.c, db.width, Od);
                            Pc.d.style.marginRight = "0";
                            for (var Qc = 0, Rc; Rc = Pd[Qc]; Qc++) z.g.push(Rc)
                        }
                        e[J] && a.e.insertBefore(S, e[J])
                    } else if (C.padding) {
                        var Ka = document.createElement("div");
                        Ka.className = "rg_pd";
                        Ka.style.width = C.width + "px";
                        Ka.style.height = C.height + "px";
                        e[J] ? e[J].parentNode.insertBefore(Ka, e[J]) : a.e.appendChild(Ka)
                    } else {
                        var ra = Bb[J];
                        if (ra.A) {
                            var Qd = a,
                                Sc = ra,
                                Tc = C.width,
                                Uc = C.height,
                                Vc = z,
                                Wc = Sc.a;
                            Wc.style.width = Tc - 2 + "px";
                            Wc.style.height = Uc - 2 + "px";
                            var Xc =
                                Wb(Sc.A, Tc, Uc);
                            Vc.g.push.apply(Vc.g, Xc);
                            Array.prototype.push.apply(Qd.a.getResults(), Xc)
                        } else {
                            var A = ra,
                                B = C.width,
                                K = C.height,
                                eb = A.a,
                                Rd = eb.getElementsByTagName("img")[0],
                                Yc = K,
                                Zc = K,
                                x = A.width,
                                D = A.height;
                            if (A.width > B || A.height > K) {
                                var $c = B / K,
                                    fb = Math.min(wa(A), Math.max($c, va(A)));
                                if (E(A) > fb) var ad = Math.min(A.height, B / fb),
                                x = ad * E(A), D = ad;
                                else var bd = Math.min(A.width, fb > $c ? B : K * fb),
                                x = bd, D = bd / E(A)
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
                            Vb = -1 * ub(A, x - B), fd = -Sd - Vb;
                            else x < B && (cd = (B - x) / 2); if (D > K) gd = -1 * tb(A, D - K);
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
                            a.a.getResults().push(ra.a)
                        }
                        ra.a.style.display = "inline-block";
                        J++
                    }
                    cb++
                }
            }
            a.h = [];
            for (var ib = J; ib < e.length; ib++) e[ib].style.display = "none", a.h.push(e[ib]);
            a.a.J() && (1 == a.c.length && 3 != b) && ld(a.c[0].g.length)
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
    google.stb.csi.startChunk0Layout();
    var vd = new s;
    vd.k();
    google.stb.csi.endChunk0Layout();
    var wd = ["google", "isr", "layout"],
        $ = this;
    wd[0] in $ || !$.execScript || $.execScript("var " + wd[0]);
    for (var yd; wd.length && (yd = wd.shift());) wd.length || void 0 === vd ? $ = $[yd] ? $[yd] : $[yd] = {} : $[yd] = vd;
})();
