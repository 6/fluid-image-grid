(function () {
    var isat_ = false;
    var isbb_ = false;
    var cdr_ = true;
    var ssr_ = false;
    var eei_ = '0tPVUYelBY_nigKpx4D4Cg';
    var b = isat_,
        e = isbb_,
        g = cdr_,
        h = ssr_,
        k = eei_;

    function l(a) {
        var c = "inner" + a,
            d = "offset" + a;
        if (b) {
            if ("width" == a.toLowerCase()) return document.documentElement.offsetWidth;
            a = 1;
            window.screen.width && (a = window.screen.height / window.screen.width);
            0 < a && a < Number.MAX_VALUE || (a = 1);
            return Math.round(document.documentElement.offsetWidth * a)
        }
        return window[c] ? window[c] : document.documentElement && document.documentElement[d] ? document.documentElement[d] : 0
    }

    function m(a, c, d) {
        var f = a.indexOf("#"),
            w = 0 <= f ? a.substr(f) : "";
        a = 0 <= f ? a.substr(0, f) : a;
        a = a.replace(RegExp("([?&])" + c + "=([^&]*)&?", "i"), "$1");
        a = a.replace(/[?&]$/, "");
        a += (a.match(/\?/) ? "&" : "?") + c + "=" + d;
        return a + w
    }

    function n(a) {
        return (a = RegExp("[?&#]" + a + "=([^&#]*)", "i").exec(p.search)) && 1 < a.length ? a[1] : ""
    }
    var p = window.location,
        q = !1,
        r = p.href,
        s = +n("biw"),
        t = +n("bih"),
        u = l("Width"),
        v = l("Height");
    g && (0 >= s || 0 >= t || isNaN(s) || isNaN(t) || (b || e) && (10 < Math.abs(u - s) || 10 < Math.abs(v - t))) && (0 < u && 0 < v ? (q = !0, r = m(r, "biw", u), r = m(r, "bih", v), r = m(r, "sei", k)) : google.ml(Error("baddim"), !1, {
        w: u,
        h: v
    }));
    h && (q = !0, r = m(r.replace(/\/images\?/, "/search?"), "tbm", "isch"));
    q && p.replace(r);
})();
(function () {
    window.google = {
        kEI: "0tPVUYelBY_nigKpx4D4Cg",
        getEI: function (a) {
            for (var b; a && (!a.getAttribute || !(b = a.getAttribute("eid")));) a = a.parentNode;
            return b || google.kEI
        },
        https: function () {
            return "https:" == window.location.protocol
        },
        kEXPI: "17259,17427,4000116,4002855,4003242,4003281,4003881,4004205,4004320,4004334,4004844,4004949,4004953,4005610,4005865,4005875,4006038,4006426,4006442,4006466,4006727,4007055,4007080,4007117,4007158,4007173,4007229,4007244,4007472,4007533,4007566,4007605,4007638,4007661,4007668,4007762,4007779,4007798,4007804,4007819,4007874,4007892,4007917,4007943,4008028,4008079,4008133,4008170,4008191,4008338,4008396,4008409",
        kCSI: {
            e: "isch,17259,17427,4000116,4002855,4003242,4003281,4003881,4004205,4004320,4004334,4004844,4004949,4004953,4005610,4005865,4005875,4006038,4006426,4006442,4006466,4006727,4007055,4007080,4007117,4007158,4007173,4007229,4007244,4007472,4007533,4007566,4007605,4007638,4007661,4007668,4007762,4007779,4007798,4007804,4007819,4007874,4007892,4007917,4007943,4008028,4008079,4008133,4008170,4008191,4008338,4008396,4008409",
            ei: "0tPVUYelBY_nigKpx4D4Cg"
        },
        authuser: 0,
        ml: function () {},
        kHL: "en",
        time: function () {
            return (new Date).getTime()
        },
        log: function (a, b, c, l, k) {
            var d = new Image,
                f = google.lc,
                e = google.li,
                g = "",
                h = "gen_204";
            k && (h =
                k);
            d.onerror = d.onload = d.onabort = function () {
                delete f[e]
            };
            f[e] = d;
            c || -1 != b.search("&ei=") || (g = "&ei=" + google.getEI(l));
            c = c || "/" + h + "?atyp=i&ct=" + a + "&cad=" + b + g + "&zx=" + google.time();
            a = /^http:/i;
            a.test(c) && google.https() ? (google.ml(Error("GLMM"), !1, {
                src: c
            }), delete f[e]) : (d.src = c, google.li = e + 1)
        },
        lc: [],
        li: 0,
        j: {
            en: 1,
            b: !! location.hash && !! location.hash.match("[#&]((q|fp)=|tbs=simg|tbs=sbi)"),
            bv: 20,
            cf: "",
            pm: "",
            u: "c9c918f0"
        },
        Toolbelt: {},
        y: {},
        x: function (a, b) {
            google.y[a.id] = [a, b];
            return !1
        },
        load: function (a, b) {
            google.x({
                id: a + m++
            }, function () {
                google.load(a, b)
            })
        }
    };
    var m = 0;
    window.onpopstate = function () {
        google.j.psc = 1
    };
})();
google.arwt = function (a) {
    a.href = document.getElementById(a.id.substring(1)).href;
    return !0
};

(function () {
    'use strict';
    var c = this,
        g = Date.now || function () {
            return +new Date
        };
    var m = function (d, k) {
        return function (a) {
            a || (a = window.event);
            return k.call(d, a)
        }
    }, t = "undefined" != typeof navigator && /Macintosh /.test(navigator.userAgent),
        u = "undefined" != typeof navigator && !/Opera/.test(navigator.userAgent) && /WebKit/.test(navigator.userAgent),
        v = "undefined" != typeof navigator && !/Opera|WebKit/.test(navigator.userAgent) && /Gecko/.test(navigator.product),
        x = v ? "keypress" : "keydown";
    var y = function () {
        this.g = [];
        this.a = [];
        this.e = {};
        this.d = null;
        this.c = []
    }, z = "undefined" != typeof navigator && /iPhone|iPad|iPod/.test(navigator.userAgent),
        A = /\s*;\s*/,
        B = function (d, k) {
            return function (a) {
                var b;
                i: {
                    b = k;
                    if ("click" == b && (t && a.metaKey || !t && a.ctrlKey || 2 == a.which || null == a.which && 4 == a.button || a.shiftKey)) b = "clickmod";
                    else {
                        var e = a.which || a.keyCode || a.key,
                            f;
                        if (f = a.type == x) {
                            f = a.srcElement || a.target;
                            var n = f.tagName.toUpperCase();
                            f = !("TEXTAREA" == n || "BUTTON" == n || "INPUT" == n || "A" == n || f.isContentEditable) && !(a.ctrlKey || a.shiftKey || a.altKey || a.metaKey) && (13 == e || 32 == e || u && 3 == e)
                        }
                        f &&
                            (b = "clickkey")
                    }
                    for (f = e = a.srcElement || a.target; f && f != this; f = f.parentNode) {
                        var n = f,
                            l;
                        var h = n;
                        l = b;
                        var p = h.__jsaction;
                        if (!p) {
                            p = {};
                            h.__jsaction = p;
                            var r = null;
                            "getAttribute" in h && (r = h.getAttribute("jsaction"));
                            if (h = r)
                                for (var h = h.split(A), r = 0, P = h ? h.length : 0; r < P; r++) {
                                    var q = h[r];
                                    if (q) {
                                        var w = q.indexOf(":"),
                                            H = -1 != w,
                                            Q = H ? q.substr(0, w).replace(/^\s+/, "").replace(/\s+$/, "") : "click",
                                            q = H ? q.substr(w + 1).replace(/^\s+/, "").replace(/\s+$/, "") : q;
                                        p[Q] = q
                                    }
                                }
                        }
                        h = void 0;
                        "clickkey" == l ? l = "click" : "click" == l && (h = p.click || p.clickonly);
                        l = (h = h || p[l]) ? {
                            h: l,
                            action: h
                        } : void 0;
                        if (l) {
                            b = {
                                eventType: l.h,
                                event: a,
                                targetElement: e,
                                action: l.action,
                                actionElement: n
                            };
                            break i
                        }
                    }
                    b = null
                }
                if (b)
                    if (a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0, "A" == b.actionElement.tagName && "click" == k && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), d.d) d.d(b);
                    else {
                        var s;
                        if ((e = c.document) && !e.createEvent && e.createEventObject) try {
                            s = e.createEventObject(a)
                        } catch (U) {
                            s = a
                        } else s = a;
                        v && (s.timeStamp = g());
                        b.event = s;
                        d.c.push(b)
                    }
            }
        }, C = function (d, k) {
            return function (a) {
                var b = d,
                    e = k,
                    f = !1;
                if (a.addEventListener) {
                    if ("focus" == b || "blur" == b) f = !0;
                    a.addEventListener(b, e, f)
                } else a.attachEvent && ("focus" == b ? b = "focusin" : "blur" == b && (b = "focusout"), e = m(a, e), a.attachEvent("on" + b, e));
                return {
                    h: b,
                    i: e,
                    capture: f
                }
            }
        }, D = function (d, k) {
            if (!d.e.hasOwnProperty(k)) {
                var a = B(d, k),
                    b = C(k, a);
                d.e[k] = a;
                d.g.push(b);
                for (a = 0; a < d.a.length; ++a) {
                    var e = d.a[a];
                    e.c.push(b.call(null, e.a))
                }
                "click" == k && D(d, x)
            }
        };
    y.prototype.i = function (d) {
        return this.e[d]
    };
    var F = function () {
        this.a = E;
        this.c = []
    };
    var G = new y,
        E = window.document.documentElement,
        I;
    i: {
        for (var J = 0; J < G.a.length; J++) {
            for (var K = G.a[J].a, L = E; K != L && L.parentNode;) L = L.parentNode;
            if (K == L) {
                I = !0;
                break i
            }
        }
        I = !1
    }
    if (!I) {
        z && (E.style.cursor = "pointer");
        for (var M = new F, N = 0; N < G.g.length; ++N) M.c.push(G.g[N].call(null, M.a));
        G.a.push(M)
    }
    D(G, "click");
    D(G, "focus");
    D(G, "focusin");
    D(G, "blur");
    D(G, "focusout");
    D(G, "change");
    D(G, "keydown");
    D(G, "keypress");
    D(G, "mousedown");
    D(G, "mouseout");
    D(G, "mouseover");
    D(G, "mouseup");
    D(G, "touchstart");
    D(G, "touchmove");
    D(G, "touchend");
    var O = function (d) {
        G.d = d;
        G.c && (0 < G.c.length && d(G.c), G.c = null)
    }, R = ["google", "jsad"],
        S = c;
    R[0] in S || !S.execScript || S.execScript("var " + R[0]);
    for (var T; R.length && (T = R.shift());) R.length || void 0 === O ? S = S[T] ? S[T] : S[T] = {} : S[T] = O;
}).call(window);

(function () {
    google.sn = "images";
    google.timers = {};
    google.startTick = function (a, b) {
        google.timers[a] = {
            t: {
                start: google.time()
            },
            bfr: !! b
        }
    };
    google.tick = function (a, b, g) {
        google.timers[a] || google.startTick(a);
        google.timers[a].t[b] = g || google.time()
    };
    google.startTick("load", !0);
    try {
        google.pt = window.chrome && window.chrome.csi && Math.floor(window.chrome.csi().pageT);
    } catch (d) {}
})();


var _gjwl = location;

function _gjuc() {
    var a = _gjwl.href.indexOf("#");
    return 0 <= a && (a = _gjwl.href.substring(a + 1), / ( ^ | & ) q = /.test(a) && -1 == a.indexOf("#") && !/ ( ^ | & ) cad = h($ | & ) /.test(a)) ? (_gjwl.replace("/search?" + a.replace(/(^|&)fp=[^&]*/g, "") + "&cad=h"), 1) : 0
}

function _gjp() {
    window._gjwl.hash && window._gjuc() || setTimeout(_gjp, 500)
};

function g(c) {
    var d = "undefined",
        a = "1";
    if (c && c.getElementById)
        if (typeof XMLHttpRequest != d) a = "2";
        else if (typeof ActiveXObject != d) {
        var b, e, f = "MSXML2.XMLHTTP",
            h = [f + ".6.0", f + ".3.0", f, "Microsoft.XMLHTTP"];
        for (b = 0, e; e = h[b++];) try {
            new ActiveXObject(e);
            a = "2"
        } catch (i) {}
    }
    return a
};
window.maybeRedirectForGBV = function (c, d, a) {
    var b = g(c);
    if (b != a) d.href = "http://images.google.com/search?site=&tbm=isch&source=hp&biw=1162&bih=370&q=san+francisco&oq=san+francisco&gs_l=img.3..0l10.2214.3841.0.4129.13.6.0.7.7.0.128.489.3j3.6.0...0.0.0..1ac.1.17.img.F7GtA6F4ZLA&sei=0tPVUYelBY_nigKpx4D4Cg&gbv=" + b
};
maybeRedirectForGBV(document, location, "2");
window.rwt = function (a, g, h, m, n, i, c, o, j, d) {
    return true
};
(function () {
    try {
        var e = !0,
            h = null,
            k = !1;
        var ba = function (a, b, c, d) {
            d = d || {};
            d._sn = ["cfg", b, c].join(".");
            window.gbar.logger.ml(a, d)
        };
        var n = window.gbar = window.gbar || {}, q = window.gbar.i = window.gbar.i || {}, ca;

        function _tvn(a, b) {
            var c = parseInt(a, 10);
            return isNaN(c) ? b : c
        }

        function _tvf(a, b) {
            var c = parseFloat(a);
            return isNaN(c) ? b : c
        }

        function _tvv(a) {
            return !!a
        }

        function r(a, b, c) {
            (c || n)[a] = b
        }
        n.bv = {
            n: _tvn("2", 0),
            r: "r_qf.",
            f: ".36.40.65.70.",
            e: "17259,3700092",
            m: _tvn("2", 1)
        };

        function da(a, b, c) {
            var d = "on" + b;
            if (a.addEventListener) a.addEventListener(b, c, k);
            else if (a.attachEvent) a.attachEvent(d, c);
            else {
                var g = a[d];
                a[d] = function () {
                    var a = g.apply(this, arguments),
                        b = c.apply(this, arguments);
                    return void 0 == a ? b : void 0 == b ? a : b && a
                }
            }
        }
        var ea = function (a) {
            return function () {
                return n.bv.m == a
            }
        }, fa = ea(1),
            ga = ea(2);
        r("sb", fa);
        r("kn", ga);
        q.a = _tvv;
        q.b = _tvf;
        q.c = _tvn;
        q.i = ba;
        var t = window.gbar.i.i;
        var u = function () {}, v = function () {}, w = function (a) {
                var b = new Image,
                    c = ha;
                b.onerror = b.onload = b.onabort = function () {
                    try {
                        delete ia[c]
                    } catch (a) {}
                };
                ia[c] = b;
                b.src = a;
                ha = c + 1
            }, ia = [],
            ha = 0;
        r("logger", {
            il: v,
            ml: u,
            log: w
        });
        var x = window.gbar.logger;
        var y = {}, ja = {}, z = [],
            ka = q.b("0.1", 0.1),
            la = q.a("1", e),
            ma = function (a, b) {
                z.push([a, b])
            }, na = function (a, b) {
                y[a] = b
            }, oa = function (a) {
                return a in y
            }, A = {}, C = function (a, b) {
                A[a] || (A[a] = []);
                A[a].push(b)
            }, D = function (a) {
                C("m", a)
            }, pa = function (a, b) {
                var c = document.createElement("script");
                c.src = a;
                c.async = la;
                Math.random() < ka && (c.onerror = function () {
                    c.onerror = h;
                    u(Error("Bundle load failed: name=" + (b || "UNK") + " url=" + a))
                });
                (document.getElementById("xjsc") || document.body).appendChild(c)
            },
            G = function (a) {
                for (var b = 0, c;
                    (c = z[b]) && c[0] != a; ++b);
                c && (!c[1].l && !c[1].s) && (c[1].s = e, E(2, a), c[1].url && pa(c[1].url, a), c[1].libs && F && F(c[1].libs))
            }, qa = function (a) {
                C("gc", a)
            }, H = h,
            ra = function (a) {
                H = a
            }, E = function (a, b, c) {
                if (H) {
                    a = {
                        t: a,
                        b: b
                    };
                    if (c)
                        for (var d in c) a[d] = c[d];
                    try {
                        H(a)
                    } catch (g) {}
                }
            };
        r("mdc", y);
        r("mdi", ja);
        r("bnc", z);
        r("qGC", qa);
        r("qm", D);
        r("qd", A);
        r("lb", G);
        r("mcf", na);
        r("bcf", ma);
        r("aq", C);
        r("mdd", "");
        r("has", oa);
        r("trh", ra);
        r("tev", E);
        if (q.a("1")) {
            var I = q.a("1"),
                sa = q.a(""),
                ta = q.a(""),
                ua = window.gapi = {}, va = function (a, b) {
                    var c = function () {
                        n.dgl(a, b)
                    };
                    I ? D(c) : (C("gl", c), G("gl"))
                }, wa = {}, xa = function (a) {
                    a = a.split(":");
                    for (var b;
                        (b = a.pop()) && wa[b];);
                    return !b
                }, F = function (a) {
                    function b() {
                        for (var b = a.split(":"), d = 0, g; g = b[d]; ++d) wa[g] = 1;
                        for (b = 0; d = z[b]; ++b) d = d[1], (g = d.libs) && (!d.l && d.i && xa(g)) && d.i()
                    }
                    n.dgl(a, b)
                }, J = window.___jsl = {};
            J.h = "m;/_/scs/abc-static/_/js/k=gapi.gapi.en.aBqw11eoBzM.O/m=__features__/am=EA/rt=j/d=1/rs=AItRSTMkiisOVRW5P7l3Ig59NtxV0JdMMA";
            J.ms = "https://apis.google.com";
            J.m = "";
            J.l = [];
            I || z.push(["gl", {
                url: "//ssl.gstatic.com/gb/js/abc/glm_e7bb39a7e1a24581ff4f8d199678b1b9.js"
            }]);
            var ya = {
                pu: sa,
                sh: "",
                si: ta
            };
            y.gl = ya;
            r("load", va, ua);
            r("dgl", va);
            r("agl", xa);
            q.o = I
        };
        var za = q.b("0.1", 0.001),
            Aa = 0;

        function _mlToken(a, b) {
            try {
                if (1 > Aa) {
                    Aa++;
                    var c, d = a,
                        g = b || {}, f = encodeURIComponent,
                        m = "es_plusone_gc_20130619.0_p0",
                        l = ["//www.google.com/gen_204?atyp=i&zx=", (new Date).getTime(), "&jexpid=", f("37102"), "&srcpg=", f("prop=2"), "&jsr=", Math.round(1 / za), "&ogev=", f("0tPVUYfdBeKJiwKK54HgBw"), "&ogf=", n.bv.f, "&ogrp=", f("1"), "&ogv=", f("1372717546.1372341082"), m ? "&oggv=" + f(m) : "", "&ogd=", f("com"), "&ogl=", f("en")];
                    g._sn && (g._sn = "og." + g._sn);
                    for (var p in g) l.push("&"),
                    l.push(f(p)), l.push("="), l.push(f(g[p]));
                    l.push("&emsg=");
                    l.push(f(d.name + ":" + d.message));
                    var s = l.join("");
                    Ba(s) && (s = s.substr(0, 2E3));
                    c = s;
                    var B = window.gbar.logger._aem(a, c);
                    w(B)
                }
            } catch (Y) {}
        }
        var Ba = function (a) {
            return 2E3 <= a.length
        }, Da = function (a, b) {
                return b
            };

        function Ga(a) {
            u = a;
            r("_itl", Ba, x);
            r("_aem", Da, x);
            r("ml", u, x);
            a = {};
            y.er = a
        }
        q.a("") ? Ga(function (a) {
            throw a;
        }) : q.a("1") && Math.random() < za && Ga(_mlToken);
        var _E = "left",
            L = function (a, b) {
                var c = a.className;
                K(a, b) || (a.className += ("" != c ? " " : "") + b)
            }, M = function (a, b) {
                var c = a.className,
                    d = RegExp("\\s?\\b" + b + "\\b");
                c && c.match(d) && (a.className = c.replace(d, ""))
            }, K = function (a, b) {
                var c = RegExp("\\b" + b + "\\b"),
                    d = a.className;
                return !(!d || !d.match(c))
            }, Ha = function (a, b) {
                K(a, b) ? M(a, b) : L(a, b)
            };
        r("ca", L);
        r("cr", M);
        r("cc", K);
        q.k = L;
        q.l = M;
        q.m = K;
        q.n = Ha;
        var Ia = ["gb_71", "gb_155"],
            N;

        function Ja(a) {
            N = a
        }

        function Ka(a) {
            var b = N && !a.href.match(/.*\/accounts\/ClearSID[?]/) && encodeURIComponent(N());
            b && (a.href = a.href.replace(/([?&]continue=)[^&]*/, "$1" + b))
        }

        function La(a) {
            window.gApplication && (a.href = window.gApplication.getTabUrl(a.href))
        }

        function Ma(a) {
            try {
                var b = (document.forms[0].q || "").value;
                b && (a.href = a.href.replace(/([?&])q=[^&]*|$/, function (a, c) {
                    return (c || "&") + "q=" + encodeURIComponent(b)
                }))
            } catch (c) {
                t(c, "sb", "pq")
            }
        }
        var Na = function () {
            for (var a = [], b = 0, c; c = Ia[b]; ++b)(c = document.getElementById(c)) && a.push(c);
            return a
        }, Oa = function () {
                var a = Na();
                return 0 < a.length ? a[0] : h
            }, Pa = function () {
                return document.getElementById("gb_70")
            }, O = {}, P = {}, Qa = {}, Q = {}, R = void 0,
            Va = function (a, b) {
                try {
                    var c = document.getElementById("gb");
                    L(c, "gbpdjs");
                    S();
                    Ra(document.getElementById("gb")) && L(c, "gbrtl");
                    if (b && b.getAttribute) {
                        var d = b.getAttribute("aria-owns");
                        if (d.length) {
                            var g = document.getElementById(d);
                            if (g) {
                                var f = b.parentNode;
                                if (R == d) R = void 0,
                                M(f, "gbto");
                                else {
                                    if (R) {
                                        var m = document.getElementById(R);
                                        if (m && m.getAttribute) {
                                            var l = m.getAttribute("aria-owner");
                                            if (l.length) {
                                                var p = document.getElementById(l);
                                                p && p.parentNode && M(p.parentNode, "gbto")
                                            }
                                        }
                                    }
                                    Sa(g) && Ta(g);
                                    R = d;
                                    L(f, "gbto")
                                }
                            }
                        }
                    }
                    D(function () {
                        n.tg(a, b, e)
                    });
                    Ua(a)
                } catch (s) {
                    t(s, "sb", "tg")
                }
            }, Wa = function (a) {
                D(function () {
                    n.close(a)
                })
            }, Xa = function (a) {
                D(function () {
                    n.rdd(a)
                })
            }, Ra = function (a) {
                var b, c = "direction",
                    d = document.defaultView;
                d && d.getComputedStyle ? (a = d.getComputedStyle(a, "")) && (b = a[c]) : b = a.currentStyle ?
                    a.currentStyle[c] : a.style[c];
                return "rtl" == b
            }, Za = function (a, b, c) {
                if (a) try {
                    var d = document.getElementById("gbd5");
                    if (d) {
                        var g = d.firstChild,
                            f = g.firstChild,
                            m = document.createElement("li");
                        m.className = b + " gbmtc";
                        m.id = c;
                        a.className = "gbmt";
                        m.appendChild(a);
                        if (f.hasChildNodes()) {
                            c = [
                                ["gbkc"],
                                ["gbf", "gbe", "gbn"],
                                ["gbkp"],
                                ["gbnd"]
                            ];
                            for (var d = 0, l = f.childNodes.length, g = k, p = -1, s = 0, B; B = c[s]; s++) {
                                for (var Y = 0, $; $ = B[Y]; Y++) {
                                    for (; d < l && K(f.childNodes[d], $);) d++;
                                    if ($ == b) {
                                        f.insertBefore(m, f.childNodes[d] || h);
                                        g = e;
                                        break
                                    }
                                }
                                if (g) {
                                    if (d +
                                        1 < f.childNodes.length) {
                                        var Ca = f.childNodes[d + 1];
                                        !K(Ca.firstChild, "gbmh") && !Ya(Ca, B) && (p = d + 1)
                                    } else if (0 <= d - 1) {
                                        var Ea = f.childNodes[d - 1];
                                        !K(Ea.firstChild, "gbmh") && !Ya(Ea, B) && (p = d)
                                    }
                                    break
                                }
                                0 < d && d + 1 < l && d++
                            }
                            if (0 <= p) {
                                var aa = document.createElement("li"),
                                    Fa = document.createElement("div");
                                aa.className = "gbmtc";
                                Fa.className = "gbmt gbmh";
                                aa.appendChild(Fa);
                                f.insertBefore(aa, f.childNodes[p])
                            }
                            n.addHover && n.addHover(a)
                        } else f.appendChild(m)
                    }
                } catch (xb) {
                    t(xb, "sb", "al")
                }
            }, Ya = function (a, b) {
                for (var c = b.length, d = 0; d < c; d++)
                    if (K(a,
                        b[d])) return e;
                return k
            }, $a = function (a, b, c) {
                Za(a, b, c)
            }, ab = function (a, b) {
                Za(a, "gbe", b)
            }, bb = function () {
                D(function () {
                    n.pcm && n.pcm()
                })
            }, cb = function () {
                D(function () {
                    n.pca && n.pca()
                })
            }, db = function (a, b, c, d, g, f, m, l, p, s) {
                D(function () {
                    n.paa && n.paa(a, b, c, d, g, f, m, l, p, s)
                })
            }, eb = function (a, b) {
                O[a] || (O[a] = []);
                O[a].push(b)
            }, fb = function (a, b) {
                P[a] || (P[a] = []);
                P[a].push(b)
            }, gb = function (a, b) {
                Qa[a] = b
            }, hb = function (a, b) {
                Q[a] || (Q[a] = []);
                Q[a].push(b)
            }, Ua = function (a) {
                a.preventDefault && a.preventDefault();
                a.returnValue = k;
                a.cancelBubble =
                    e
            }, ib = h,
            Ta = function (a, b) {
                S();
                if (a) {
                    jb(a, "Opening&hellip;");
                    T(a, e);
                    var c = "undefined" != typeof b ? b : 1E4,
                        d = function () {
                            kb(a)
                        };
                    ib = window.setTimeout(d, c)
                }
            }, lb = function (a) {
                S();
                a && (T(a, k), jb(a, ""))
            }, kb = function (a) {
                try {
                    S();
                    var b = a || document.getElementById(R);
                    b && (jb(b, "This service is currently unavailable.%1$sPlease try again later.", "%1$s"), T(b, e))
                } catch (c) {
                    t(c, "sb", "sdhe")
                }
            }, jb = function (a, b, c) {
                if (a && b) {
                    var d = Sa(a);
                    if (d) {
                        if (c) {
                            d.innerHTML = "";
                            b = b.split(c);
                            c = 0;
                            for (var g; g = b[c]; c++) {
                                var f = document.createElement("div");
                                f.innerHTML = g;
                                d.appendChild(f)
                            }
                        } else d.innerHTML = b;
                        T(a, e)
                    }
                }
            }, T = function (a, b) {
                var c = void 0 !== b ? b : e;
                c ? L(a, "gbmsgo") : M(a, "gbmsgo")
            }, Sa = function (a) {
                for (var b = 0, c; c = a.childNodes[b]; b++)
                    if (K(c, "gbmsg")) return c
            }, S = function () {
                ib && window.clearTimeout(ib)
            }, mb = function (a) {
                var b = "inner" + a;
                a = "offset" + a;
                return window[b] ? window[b] : document.documentElement && document.documentElement[a] ? document.documentElement[a] : 0
            }, nb = function () {
                return k
            }, ob = function () {
                return !!R
            };
        r("so", Oa);
        r("sos", Na);
        r("si", Pa);
        r("tg", Va);
        r("close", Wa);
        r("rdd", Xa);
        r("addLink", $a);
        r("addExtraLink", ab);
        r("pcm", bb);
        r("pca", cb);
        r("paa", db);
        r("ddld", Ta);
        r("ddrd", lb);
        r("dderr", kb);
        r("rtl", Ra);
        r("op", ob);
        r("bh", O);
        r("abh", eb);
        r("dh", P);
        r("adh", fb);
        r("ch", Q);
        r("ach", hb);
        r("eh", Qa);
        r("aeh", gb);
        ca = q.a("") ? La : Ma;
        r("qs", ca);
        r("setContinueCb", Ja);
        r("pc", Ka);
        r("bsy", nb);
        q.d = Ua;
        q.j = mb;
        var pb = {};
        y.base = pb;
        n.sg = {
            c: "1"
        };
        r("wg", {
            rg: {}
        });
        var qb = {
            tiw: q.c("15000", 0),
            tie: q.c("30000", 0)
        };
        y.wg = qb;
        var rb = {
            thi: q.c("10000", 0),
            thp: q.c("180000", 0),
            tho: q.c("5000", 0),
            tet: q.b("0.5", 0)
        };
        y.wm = rb;
        if (q.a("1")) {
            var sb = q.a("");
            z.push(["gc", {
                auto: sb,
                url: "//ssl.gstatic.com/gb/js/abc/gci_91f30755d6a6b787dcc2a4062e6e9824.js",
                libs: "googleapis.client:plusone"
            }]);
            var tb = {
                version: "gci_91f30755d6a6b787dcc2a4062e6e9824.js",
                index: "",
                lang: "en"
            };
            y.gc = tb;
            var ub = function (a) {
                window.googleapis && window.iframes ? a && a() : (a && qa(a), G("gc"))
            };
            r("lGC", ub);
            q.a("1") && r("lPWF", ub)
        };
        window.__PVT = "";
        if (q.a("1") && q.a("1")) {
            var vb = function (a) {
                ub(function () {
                    C("pw", a);
                    G("pw")
                })
            };
            r("lPW", vb);
            z.push(["pw", {
                url: "//ssl.gstatic.com/gb/js/abc/pwm_45f73e4df07a0e388b0fa1f3d30e7280.js"
            }]);
            var wb = [],
                yb = function (a) {
                    wb[0] = a
                }, zb = function (a, b) {
                    var c = b || {};
                    c._sn = "pw";
                    u(a, c)
                }, Ab = {
                    signed: wb,
                    elog: zb,
                    base: "https://plusone.google.com/u/0",
                    loadTime: (new Date).getTime()
                };
            y.pw = Ab;
            var Bb = function (a, b) {
                for (var c = b.split("."), d = function () {
                            var b = arguments;
                            a(function () {
                                for (var a = n, d = 0, f = c.length - 1; d < f; ++d) a = a[c[d]];
                                a[c[d]].apply(a, b)
                            })
                        }, g = n, f = 0, m = c.length - 1; f <
                    m; ++f) g = g[c[f]] = g[c[f]] || {};
                return g[c[f]] = d
            };
            Bb(vb, "pw.clk");
            Bb(vb, "pw.hvr");
            r("su", yb, n.pw)
        };
        var Cb = [1, 2, 3, 4, 5, 6, 9, 10, 11, 13, 14, 28, 29, 30, 34, 35, 37, 38, 39, 40, 41, 42, 43, 500];
        var Db = q.b("0.001", 1E-4),
            Eb = q.b("1.0", 1),
            Fb = k,
            Gb = k;
        if (q.a("1")) {
            var Hb = Math.random();
            Hb <= Db && (Fb = e);
            Hb <= Eb && (Gb = e)
        }
        var U = h;

        function Ib() {
            var a = 0,
                b = function (b, d) {
                    q.a(d) && (a |= b)
                };
            b(1, "");
            b(2, "");
            b(4, "");
            b(8, "");
            return a
        }

        function Jb(a, b) {
            var c = Db,
                d = Fb,
                g;
            g = a;
            if (!U) {
                U = {};
                for (var f = 0; f < Cb.length; f++) {
                    var m = Cb[f];
                    U[m] = e
                }
            }
            if (g = !! U[g]) c = Eb, d = Gb;
            if (d) {
                d = encodeURIComponent;
                g = "es_plusone_gc_20130619.0_p0";
                n.rp ? (f = n.rp(), f = "-1" != f ? f : "1") : f = "1";
                c = ["//www.google.com/gen_204?atyp=i&zx=", (new Date).getTime(), "&oge=", a, "&ogex=", d("37102"), "&ogev=", d("0tPVUYfdBeKJiwKK54HgBw"), "&ogf=", n.bv.f, "&ogp=", d("2"), "&ogrp=", d(f), "&ogsr=", Math.round(1 / c), "&ogv=", d("1372717546.1372341082"),
                    g ? "&oggv=" + d(g) : "", "&ogd=", d("com"), "&ogl=", d("en"), "&ogus=", Ib()
                ];
                if (b) {
                    "ogw" in b && (c.push("&ogw=" + b.ogw), delete b.ogw);
                    var l;
                    g = b;
                    f = [];
                    for (l in g) 0 != f.length && f.push(","), f.push(Kb(l)), f.push("."), f.push(Kb(g[l]));
                    l = f.join("");
                    "" != l && (c.push("&ogad="), c.push(d(l)))
                }
                w(c.join(""))
            }
        }

        function Kb(a) {
            "number" == typeof a && (a += "");
            return "string" == typeof a ? a.replace(".", "%2E").replace(",", "%2C") : a
        }
        v = Jb;
        r("il", v, x);
        var Lb = {};
        y.il = Lb;
        var Mb = function (a, b, c, d, g, f, m, l, p, s) {
            D(function () {
                n.paa(a, b, c, d, g, f, m, l, p, s)
            })
        }, Nb = function () {
                D(function () {
                    n.prm()
                })
            }, Ob = function (a) {
                D(function () {
                    n.spn(a)
                })
            }, Pb = function (a) {
                D(function () {
                    n.sps(a)
                })
            }, Qb = function (a) {
                D(function () {
                    n.spp(a)
                })
            }, Rb = {
                "27": "//ssl.gstatic.com/gb/images/silhouette_27.png",
                "27": "//ssl.gstatic.com/gb/images/silhouette_27.png",
                "27": "//ssl.gstatic.com/gb/images/silhouette_27.png"
            }, Sb = function (a) {
                return (a = Rb[a]) || "//ssl.gstatic.com/gb/images/silhouette_27.png"
            },
            Tb = function () {
                D(function () {
                    n.spd()
                })
            };
        r("spn", Ob);
        r("spp", Qb);
        r("sps", Pb);
        r("spd", Tb);
        r("paa", Mb);
        r("prm", Nb);
        eb("gbd4", Nb);
        if (q.a("")) {
            var Ub = {
                d: q.a(""),
                e: "",
                sanw: q.a(""),
                p: "//ssl.gstatic.com/gb/images/silhouette_96.png",
                cp: "1",
                xp: q.a("1"),
                mg: "%1$s (delegated)",
                md: "%1$s (default)",
                mh: "220",
                s: "1",
                pp: Sb,
                ppl: q.a(""),
                ppa: q.a(""),
                ppm: "Google+ page"
            };
            y.prf = Ub
        };
        var V, Vb, W, Wb, X = 0,
            Xb = function (a, b, c) {
                if (a.indexOf) return a.indexOf(b, c);
                if (Array.indexOf) return Array.indexOf(a, b, c);
                for (c = c == h ? 0 : 0 > c ? Math.max(0, a.length + c) : c; c < a.length; c++)
                    if (c in a && a[c] === b) return c;
                return -1
            }, Z = function (a, b) {
                return -1 == Xb(a, X) ? (t(Error(X + "_" + b), "up", "caa"), k) : e
            }, Zb = function (a, b) {
                Z([1, 2], "r") && (V[a] = V[a] || [], V[a].push(b), 2 == X && window.setTimeout(function () {
                    b(Yb(a))
                }, 0))
            }, $b = function (a, b, c) {
                if (Z([1], "nap") && c) {
                    for (var d = 0; d < c.length; d++) Vb[c[d]] = e;
                    n.up.spl(a, b, "nap", c)
                }
            }, ac = function (a,
                b, c) {
                if (Z([1], "aop") && c) {
                    if (W)
                        for (var d in W) W[d] = W[d] && -1 != Xb(c, d);
                    else {
                        W = {};
                        for (d = 0; d < c.length; d++) W[c[d]] = e
                    }
                    n.up.spl(a, b, "aop", c)
                }
            }, bc = function () {
                try {
                    if (X = 2, !Wb) {
                        Wb = e;
                        for (var a in V)
                            for (var b = V[a], c = 0; c < b.length; c++) try {
                                b[c](Yb(a))
                            } catch (d) {
                                t(d, "up", "tp")
                            }
                    }
                } catch (g) {
                    t(g, "up", "mtp")
                }
            }, Yb = function (a) {
                if (Z([2], "ssp")) {
                    var b = !Vb[a];
                    W && (b = b && !! W[a]);
                    return b
                }
            };
        Wb = k;
        V = {};
        Vb = {};
        W = h;
        var X = 1,
            cc = function (a) {
                var b = e;
                try {
                    b = !a.cookie
                } catch (c) {}
                return b
            }, dc = function () {
                try {
                    return !!window.localStorage && "object" == typeof window.localStorage
                } catch (a) {
                    return k
                }
            }, ec = function (a) {
                return a && a.style && a.style.g && "undefined" != typeof a.load
            }, fc = function (a, b, c, d) {
                try {
                    cc(document) || (d || (b = "og-up-" + b), dc() ? window.localStorage.setItem(b, c) : ec(a) && (a.setAttribute(b, c), a.save(a.id)))
                } catch (g) {
                    g.code != DOMException.QUOTA_EXCEEDED_ERR && t(g, "up", "spd")
                }
            }, gc = function (a, b, c) {
                try {
                    if (cc(document)) return "";
                    c ||
                        (b = "og-up-" + b);
                    if (dc()) return window.localStorage.getItem(b);
                    if (ec(a)) return a.load(a.id), a.getAttribute(b)
                } catch (d) {
                    d.code != DOMException.QUOTA_EXCEEDED_ERR && t(d, "up", "gpd")
                }
                return ""
            }, hc = function (a, b, c) {
                a.addEventListener ? a.addEventListener(b, c, k) : a.attachEvent && a.attachEvent("on" + b, c)
            }, ic = function (a) {
                for (var b = 0, c; c = a[b]; b++) {
                    var d = n.up;
                    c = c in d && d[c];
                    if (!c) return k
                }
                return e
            };
        r("up", {
            r: Zb,
            nap: $b,
            aop: ac,
            tp: bc,
            ssp: Yb,
            spd: fc,
            gpd: gc,
            aeh: hc,
            aal: ic
        });
        var jc = function (a, b) {
            a[b] = function (c) {
                var d = arguments;
                n.qm(function () {
                    a[b].apply(this, d)
                })
            }
        };
        jc(n.up, "sl");
        jc(n.up, "si");
        jc(n.up, "spl");
        n.mcf("up", {
            sp: q.b("0.01", 1),
            tld: "com",
            prid: "2"
        });

        function kc() {
            function a() {
                for (var b;
                    (b = f[m++]) && !("m" == b[0] || b[1].auto););
                b && (E(2, b[0]), b[1].url && pa(b[1].url, b[0]), b[1].libs && F && F(b[1].libs));
                m < f.length && setTimeout(a, 0)
            }

            function b() {
                0 < g-- ? setTimeout(b, 0) : a()
            }
            var c = q.a("1"),
                d = q.a(""),
                g = 3,
                f = z,
                m = 0,
                l = window.gbarOnReady;
            if (l) try {
                l()
            } catch (p) {
                t(p, "ml", "or")
            }
            d ? r("ldb", a) : c ? da(window, "load", b) : b()
        }
        r("rdl", kc);
    } catch (e) {
        window.gbar && gbar.logger && gbar.logger.ml(e, {
            "_sn": "cfg.init"
        });
    }
})();
(function () {
    try {
        var b = window.gbar;
        var d = function (a, c) {
            b[a] = function () {
                return window.navigator && window.navigator.userAgent ? c(window.navigator.userAgent) : !1
            }
        }, e = function (a) {
                return !(/AppleWebKit\/.+(?:Version\/[35]\.|Chrome\/[01]\.)/.test(a) || -1 != a.indexOf("Firefox/3.5."))
            };
        d("bs_w", e);
    } catch (e) {
        window.gbar && gbar.logger && gbar.logger.ml(e, {
            "_sn": "cfg.init"
        });
    }
})();
(function () {
    try {
        var a = window.gbar;
        a.mcf("sf", {});
    } catch (e) {
        window.gbar && gbar.logger && gbar.logger.ml(e, {
            "_sn": "cfg.init"
        });
    }
})();
(function () {
    try {
        var aa = window.gbar.i.i;
        var a = window.gbar;
        var e = a.i;
        var k, n;
        var u = function (b, d) {
            aa(b, "es", d)
        }, v = function (b) {
                return document.getElementById(b)
            }, w = function (b, d) {
                var f = Array.prototype.slice.call(arguments, 1);
                return function () {
                    var c = Array.prototype.slice.call(arguments);
                    c.unshift.apply(c, f);
                    return b.apply(this, c)
                }
            }, x = void 0,
            y = void 0,
            ba = e.c("840"),
            ca = e.c("640");
        e.c("840");
        var ia = e.c("640"),
            ja = e.c("590"),
            ka = e.c("1514"),
            la = e.c("1474");
        e.c("1474");
        var ma = e.c("1252"),
            na = e.c("1060"),
            oa = e.c("995"),
            pa = e.c("851"),
            A = {}, B = {}, C = {}, D = {}, E = {}, F = {}, G = {};
        A.h = e.c("102");
        A.m = e.c("44");
        A.f = e.c("126");
        B.h = e.c("102");
        B.m = e.c("44");
        B.f = e.c("126");
        C.h = e.c("102");
        C.m = e.c("44");
        C.f = e.c("126");
        D.h = e.c("102");
        D.m = e.c("28");
        D.f = e.c("126");
        E.h = e.c("102");
        E.m = e.c("16");
        E.f = e.c("126");
        F.h = e.c("102");
        F.m = e.c("16");
        F.f = e.c("126");
        G.h = e.c("102");
        G.m = e.c("12");
        G.f = e.c("126");
        var H = e.c("16"),
            J = e.c("572"),
            qa = e.c("434"),
            ra = e.c("319"),
            sa = e.c("572"),
            ta = e.c("572"),
            ua = e.c("572"),
            va = e.c("434"),
            wa = e.c("319"),
            xa = e.c("126"),
            ya = e.c("126"),
            za = e.c("126"),
            Aa = e.c("126"),
            Ba = e.c("126"),
            Ca = e.c("126"),
            Da = e.c("126"),
            Ea = e.c("15"),
            Fa = e.c("15"),
            K = e.c("15"),
            Ga = e.c("15"),
            Ha = e.c("6"),
            Ia = e.c("6"),
            Ja = e.c("6"),
            Ka = e.c("44"),
            La = e.c("44"),
            Ma = e.c("44"),
            Na = e.c("28"),
            Oa = e.c("16"),
            Pa = e.c("16"),
            Qa = e.c("12"),
            Ra = e.c("30"),
            Sa = e.c("236"),
            Ta = e.c("304"),
            Ua = e.c("35");
        e.a("1");
        var Va = e.c("980"),
            Wa = "gb gbq gbu gbzw gbpr gbq2 gbqf gbqff gbq3 gbq4 gbq1 gbqlw gbql gbx1 gbx2 gbx3 gbx4 gbg1 gbg3 gbg4 gbd1 gbd3 gbd4 gbs gbwc gbprc".split(" "),
            M = ["gbzw"],
            Q = e.a(""),
            Xa = e.a(""),
            R = [],
            U = !0,
            W = function (b) {
                try {
                    a.close();
                    var d = e.c("27");
                    "xxl" == b ? (V("gbexxl"), d = e.c("27")) : "xl" == b ? (V("gbexl"), d = e.c("27")) : "lg" == b ? (V(""), d =
                        e.c("27")) : "md" == b ? (V("gbem"), d = e.c("27")) : "sm" == b ? V("gbes") : "ty" == b ? V("gbet") : "ut" == b && V("gbeu");
                    if (window.opera) {
                        var f = M.length;
                        for (b = 0; b < f; b++) {
                            var c = v(M[b]);
                            if (c) {
                                var q = c.style.display;
                                c.style.display = "none";
                                b += 0 * c.clientHeight;
                                c.style.display = q
                            }
                        }
                    }
                    a.sps(d)
                } catch (r) {
                    u(r, "stem")
                }
            }, Ya = w(W, "xxl"),
            Za = w(W, "xl"),
            $a = w(W, "lg"),
            ab = w(W, "md"),
            bb = w(W, "sm"),
            cb = w(W, "ty"),
            db = w(W, "ut"),
            Y = function (b) {
                try {
                    W(b);
                    var d = e.j("Height"),
                        f = e.j("Width"),
                        c = C;
                    switch (b) {
                    case "ut":
                        c = G;
                        break;
                    case "ty":
                        c = F;
                        break;
                    case "sm":
                        c = E;
                        break;
                    case "md":
                        c = D;
                        break;
                    case "lg":
                        c = C;
                        break;
                    case "xl":
                        c = B;
                        break;
                    case "xxl":
                        c = A
                    }
                    eb(d, f, b, c);
                    X()
                } catch (q) {
                    u(q, "seme")
                }
            }, fb = function (b) {
                try {
                    R.push(b)
                } catch (d) {
                    u(d, "roec")
                }
            }, gb = function () {
                if (U) try {
                    for (var b = 0, d; d = R[b]; ++b) d(k)
                } catch (f) {
                    u(f, "eoec")
                }
            }, hb = function (b) {
                try {
                    return U = b
                } catch (d) {
                    u(d, "ear")
                }
            }, ib = function () {
                var b = e.j("Height"),
                    d = e.j("Width"),
                    f = C,
                    c = "lg";
                if (d < pa && Q) c = "ut", f = G;
                else if (d < oa && Q) c = "ty", f = F;
                else if (d < na || b < ja) c = "sm",
                f = E;
                else if (d < ma || b < ia) c = "md", f = D;
                Xa && (d > la && b > ca && (c = "xl", f = B), d > ka && b > ba && (c = "xxl", f = A));
                eb(b, d, c, f);
                return c
            }, X = function () {
                try {
                    var b = v("gbx1");
                    if (b) {
                        var d = a.rtl(v("gb")),
                            f = b.clientWidth,
                            b = f <= Va,
                            c = v("gb_70"),
                            q = v("gbg4"),
                            r = v("gbg6") || q;
                        if (!x)
                            if (c) x = c.clientWidth;
                            else if (r) x = r.clientWidth;
                        else return; if (!y) {
                            var s = v("gbg3");
                            s && (y = s.clientWidth)
                        }
                        var N = k.mo,
                            t, m, l;
                        switch (N) {
                        case "xxl":
                            t = Ka;
                            m = Ea;
                            l = xa;
                            break;
                        case "xl":
                            t = La;
                            m = Fa;
                            l = ya;
                            break;
                        case "md":
                            t = Na;
                            m = Ga;
                            l = Aa;
                            break;
                        case "sm":
                            t = Oa - H;
                            m = Ha;
                            l = Ba;
                            break;
                        case "ty":
                            t =
                                Pa - H;
                            m = Ia;
                            l = Ca;
                            break;
                        case "ut":
                            t = Qa - H;
                            m = Ja;
                            l = Da;
                            break;
                        default:
                            t = Ma, m = K, l = za
                        }
                        var p = a.snw && a.snw();
                        p && (l += p + m);
                        var p = x,
                            z = v("gbg1");
                        z && (p += z.clientWidth + m);
                        (s = v("gbg3")) && (p += y + m);
                        var S = v("gbgs4dn");
                        q && !S && (p += q.clientWidth + m);
                        var da = v("gbd4"),
                            T = v("gb_71");
                        T && !da && (p += T.clientWidth + m + K);
                        p = Math.min(Ta, p);
                        l += t;
                        var O = v("gbqfbw"),
                            I = v("gbq4");
                        I && (l += I.offsetWidth);
                        O && (O.style.display = "", l += O.clientWidth + Ra);
                        var I = f - l,
                            ea = v("gbqf"),
                            fa = v("gbqff"),
                            h = a.gpcc && a.gpcc();
                        if (ea && fa && !h) {
                            h = f - p - l;
                            switch (N) {
                            case "ut":
                                h =
                                    Math.min(h, wa);
                                h = Math.max(h, ra);
                                break;
                            case "ty":
                                h = Math.min(h, va);
                                h = Math.max(h, qa);
                                break;
                            case "xl":
                                h = Math.min(h, ua);
                                h = Math.max(h, J);
                                break;
                            case "xxl":
                                h = Math.min(h, ta);
                                h = Math.max(h, J);
                                break;
                            default:
                                h = Math.min(h, sa), h = Math.max(h, J)
                            }
                            ea.style.maxWidth = h + "px";
                            fa.style.maxWidth = h + "px";
                            I -= h
                        }
                        var g = v("gbgs3");
                        if (g) {
                            var N = I <= Sa,
                                ga = a.cc(g, "gbsbc");
                            N && !ga ? (a.ca(g, "gbsbc"), a.close()) : !N && ga && (a.cr(g, "gbsbc"), a.close())
                        }
                        g = I;
                        z && (z.style.display = "", g -= z.clientWidth + m);
                        s && (s.style.display = "", g -= s.clientWidth + m);
                        q && !S && (g -= q.clientWidth + m);
                        T && !da && (g -= T.clientWidth + m + K);
                        var q = S ? 0 : Ua,
                            P = S || v("gbi4t");
                        if (P && !c) {
                            g > q ? (P.style.display = "", P.style.maxWidth = g + "px") : P.style.display = "none";
                            r && (r.style.width = g < x && g > q ? g + "px" : "");
                            var ha = v("gbgs4d"),
                                r = "left";
                            x > g ^ d && (r = "right");
                            P.style.textAlign = r;
                            ha && (ha.style.textAlign = r)
                        }
                        s && 0 > g && (g += s.clientWidth, s.style.display = "none");
                        z && 0 > g && (g += z.clientWidth, z.style.display = "none");
                        if (O && (0 > g || c && g < c.clientWidth)) O.style.display = "none";
                        var c = d ? "right" : "left",
                            d = d ? "left" : "right",
                            L = v("gbu"),
                            lb = "" != L.style[c];
                        b ? (L.style[c] = f - L.clientWidth - t + "px", L.style[d] = "auto") : (L.style[c] = "", L.style[d] = "");
                        b != lb && a.swsc && a.swsc(b)
                    }
                } catch (mb) {
                    u(mb, "cb")
                }
            }, eb = function (b, d, f, c) {
                k = {};
                k.mo = f;
                k.vh = b;
                k.vw = d;
                k.es = c;
                f != n && (gb(), e.f && e.f())
            }, jb = function (b) {
                A.h += b;
                B.h += b;
                C.h += b;
                D.h += b;
                E.h += b;
                F.h += b;
                G.h += b
            }, kb = function () {
                return k
            }, nb = function () {
                try {
                    if (!0 == U) {
                        var b = n;
                        n = ib();
                        if (b != n) switch (n) {
                        case "ut":
                            db();
                            break;
                        case "ty":
                            cb();
                            break;
                        case "sm":
                            bb();
                            break;
                        case "md":
                            ab();
                            break;
                        case "xl":
                            Za();
                            break;
                        case "xxl":
                            Ya();
                            break;
                        default:
                            $a()
                        }
                    }
                    X();
                    var d = v("gb");
                    if (d) {
                        var f = d.style.opacity;
                        d.style.opacity = ".99";
                        for (b = 0; 1 > b; b++) b += 0 * d.offsetWidth;
                        d.style.opacity = f
                    }
                } catch (c) {
                    u(c, "sem")
                }
            }, V = function (b) {
                var d = v("gb");
                d && Z(d, "gbexxli gbexli  gbemi gbesi gbeti gbeui".split(" "));
                for (var d = [], f = 0, c; c = Wa[f]; f++)
                    if (c = v(c)) {
                        switch (b) {
                        case "gbexxl":
                            Z(c, "gbexl  gbem gbes gbet gbeu".split(" "));
                            a.ca(c, b);
                            break;
                        case "gbexl":
                            Z(c, "gbexxl  gbem gbes gbet gbeu".split(" "));
                            a.ca(c, b);
                            break;
                        case "":
                            Z(c, "gbexxl gbexl gbem gbes gbet gbeu".split(" "));
                            a.ca(c, b);
                            break;
                        case "gbem":
                            Z(c, "gbexxl gbexl  gbes gbet gbeu".split(" "));
                            a.ca(c, b);
                            break;
                        case "gbes":
                            Z(c, "gbexxl gbexl  gbem gbet gbeu".split(" "));
                            a.ca(c, b);
                            break;
                        case "gbet":
                            Z(c, "gbexxl gbexl  gbem gbes gbeu".split(" "));
                            a.ca(c, b);
                            break;
                        case "gbeu":
                            Z(c, "gbexxl gbexl  gbem gbes gbet".split(" ")), a.ca(c, b)
                        }
                        d.push(c)
                    }
                return d
            }, Z = function (b, d) {
                for (var f = 0, c = d.length; f < c; ++f) d[f] && a.cr(b, d[f])
            }, ob = function () {
                try {
                    if (!0 == U) switch (ib()) {
                    case "ut":
                        $("gbeui");
                        break;
                    case "ty":
                        $("gbeti");
                        break;
                    case "sm":
                        $("gbesi");
                        break;
                    case "md":
                        $("gbemi");
                        break;
                    case "xl":
                        $("gbexli");
                        break;
                    case "xxl":
                        $("gbexxli");
                        break;
                    default:
                        $("")
                    }
                    X()
                } catch (b) {
                    u(b, "semol")
                }
            }, $ = function (b) {
                var d = v("gb");
                d && a.ca(d, b)
            };
        a.eli = ob;
        a.elg = nb;
        a.elxxl = w(Y, "xxl");
        a.elxl = w(Y, "xl");
        a.ell = w(Y, "lg");
        a.elm = w(Y, "md");
        a.els = w(Y, "sm");
        a.elr = kb;
        a.elc = fb;
        a.elx = gb;
        a.elh = jb;
        a.ela = hb;
        a.elp = X;
        a.upel = w(Y, "lg");
        a.upes = w(Y, "md");
        a.upet = w(Y, "sm");
        ob();
        nb();
        a.mcf("el", {});
    } catch (e) {
        window.gbar && gbar.logger && gbar.logger.ml(e, {
            "_sn": "cfg.init"
        });
    }
})();
(function () {
    try {
        var a = window.gbar;
        var d = function () {
            return document.getElementById("gbqfqw")
        }, h = function () {
                return document.getElementById("gbqfq")
            }, k = function () {
                return document.getElementById("gbqf")
            }, l = function () {
                return document.getElementById("gbqfb")
            }, n = function (b) {
                var c = document.getElementById("gbqfaa");
                c.appendChild(b);
                m()
            }, p = function (b) {
                var c = document.getElementById("gbqfab");
                c.appendChild(b);
                m()
            }, m = function () {
                var b = document.getElementById("gbqfqwb");
                if (b) {
                    var c = document.getElementById("gbqfaa"),
                        e = document.getElementById("gbqfab");
                    if (c || e) {
                        var f = "left",
                            g = "right";
                        a.rtl(document.getElementById("gb")) && (f = "right", g = "left");
                        c && (b.style[f] = c.offsetWidth + "px");
                        e && (b.style[g] = e.offsetWidth + "px")
                    }
                }
            }, q = function (b) {
                a.qm(function () {
                    a.qfhi(b)
                })
            };
        a.qfgw = d;
        a.qfgq = h;
        a.qfgf = k;
        a.qfas = n;
        a.qfae = p;
        a.qfau = m;
        a.qfhi = q;
        a.qfsb = l;
    } catch (e) {
        window.gbar && gbar.logger && gbar.logger.ml(e, {
            "_sn": "cfg.init"
        });
    }
})();
(function () {
    try {
        var c = window.gbar.i.i;
        var e = window.gbar;
        var f = "gbq1 gbq2 gbpr gbqfbwa gbx1 gbx2".split(" "),
            h = function (b) {
                var a = document.getElementById("gbqld");
                if (a && (a.style.display = b ? "none" : "block", a = document.getElementById("gbql"))) a.style.display = b ? "block" : "none"
            }, k = function () {
                try {
                    for (var b = 0, a; a = f[b]; b++) {
                        var d = document.getElementById(a);
                        d && e.ca(d, "gbqfh")
                    }
                    e.elp && e.elp();
                    h(!0)
                } catch (g) {
                    c(g, "gas", "ahcc")
                }
            }, l = function () {
                try {
                    for (var b = 0, a; a = f[b]; b++) {
                        var d = document.getElementById(a);
                        d && e.cr(d, "gbqfh")
                    }
                    e.elp && e.elp();
                    h(!1)
                } catch (g) {
                    c(g, "gas", "rhcc")
                }
            },
            m = function () {
                try {
                    var b = document.getElementById(f[0]);
                    return b && e.cc(b, "gbqfh")
                } catch (a) {
                    c(a, "gas", "ih")
                }
            };
        e.gpca = k;
        e.gpcr = l;
        e.gpcc = m;
    } catch (e) {
        window.gbar && gbar.logger && gbar.logger.ml(e, {
            "_sn": "cfg.init"
        });
    }
})();
(function () {
    try {
        var b = window.gbar.i.i;
        var c = window.gbar;
        var f = function (d) {
            try {
                var a = document.getElementById("gbom");
                a && d.appendChild(a.cloneNode(!0))
            } catch (e) {
                b(e, "omas", "aomc")
            }
        };
        c.aomc = f;
    } catch (e) {
        window.gbar && gbar.logger && gbar.logger.ml(e, {
            "_sn": "cfg.init"
        });
    }
})();
(function () {
    try {
        var a = window.gbar;
        a.mcf("pm", {
            p: ""
        });
    } catch (e) {
        window.gbar && gbar.logger && gbar.logger.ml(e, {
            "_sn": "cfg.init"
        });
    }
})();
(function () {
    try {
        var a = window.gbar;
        a.mcf("mm", {
            s: "1"
        });
    } catch (e) {
        window.gbar && gbar.logger && gbar.logger.ml(e, {
            "_sn": "cfg.init"
        });
    }
})();
(function () {
    try {
        var d = window.gbar.i.i;
        var e = window.gbar;
        var f = e.i;
        var g = f.c("2", 0),
            h = /\bgbmt\b/,
            k = function (a) {
                try {
                    var b = document.getElementById("gb_" + g),
                        c = document.getElementById("gb_" + a);
                    b && f.l(b, h.test(b.className) ? "gbm0l" : "gbz0l");
                    c && f.k(c, h.test(c.className) ? "gbm0l" : "gbz0l")
                } catch (l) {
                    d(l, "sj", "ssp")
                }
                g = a
            }, m = e.qs,
            n = function (a) {
                var b;
                b = a.href;
                var c = window.location.href.match(/.*?:\/\/[^\/]*/)[0],
                    c = RegExp("^" + c + "/search\\?");
                if ((b = c.test(b)) && !/(^|\\?|&)ei=/.test(a.href))
                    if ((b = window.google) && b.kEXPI) a.href += "&ei=" + b.kEI
            }, p = function (a) {
                m(a);
                n(a)
            }, q = function () {
                if (window.google && window.google.sn) {
                    var a = /.*hp$/;
                    return a.test(window.google.sn) ? "" : "1"
                }
                return "-1"
            };
        e.rp = q;
        e.slp = k;
        e.qs = p;
        e.qsi = n;
    } catch (e) {
        window.gbar && gbar.logger && gbar.logger.ml(e, {
            "_sn": "cfg.init"
        });
    }
})();
(function () {
    try {
        window.gbar.rdl();
    } catch (e) {
        window.gbar && gbar.logger && gbar.logger.ml(e, {
            "_sn": "cfg.init"
        });
    }
})();
(window['gbar'] = window['gbar'] || {})._CONFIG = [];
