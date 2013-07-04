(function () {
    var f = this,
        g = function (a, c) {
            var b = a.split("."),
                d = f;
            b[0] in d || !d.execScript || d.execScript("var " + b[0]);
            for (var e; b.length && (e = b.shift());) b.length || void 0 === c ? d = d[e] ? d[e] : d[e] = {} : d[e] = c
        }, h = function (a, c) {
            function b() {}
            b.prototype = c.prototype;
            a.d = c.prototype;
            a.prototype = new b
        };
    var m = function (a) {
        Error.captureStackTrace ? Error.captureStackTrace(this, m) : this.stack = Error().stack || "";
        a && (this.message = String(a))
    };
    h(m, Error);
    var aa = function (a, c) {
        for (var b = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < b.length;) d += b.shift() + e.shift();
        return d + b.join("%s")
    };
    var q = function (a, c) {
        c.unshift(a);
        m.call(this, aa.apply(null, c));
        c.shift()
    };
    h(q, m);
    var r = function (a, c, b) {
        if (!a) {
            var d = Array.prototype.slice.call(arguments, 2),
                e = "Assertion failed";
            if (c) var e = e + (": " + c),
            k = d;
            throw new q("" + e, k || []);
        }
    };
    var s = Array.prototype,
        ba = s.indexOf ? function (a, c, b) {
            r(null != a.length);
            return s.indexOf.call(a, c, b)
        } : function (a, c, b) {
            b = null == b ? 0 : 0 > b ? Math.max(0, a.length + b) : b;
            if ("string" == typeof a) return "string" == typeof c && 1 == c.length ? a.indexOf(c, b) : -1;
            for (; b < a.length; b++)
                if (b in a && a[b] === c) return b;
            return -1
        };
    var t, u, v, w, x = function () {
            return f.navigator ? f.navigator.userAgent : null
        };
    w = v = u = t = !1;
    var z;
    if (z = x()) {
        var ca = f.navigator;
        t = 0 == z.indexOf("Opera");
        u = !t && -1 != z.indexOf("MSIE");
        v = !t && -1 != z.indexOf("WebKit");
        w = !t && !v && "Gecko" == ca.product
    }
    var A = u,
        B = w,
        da = v,
        C = function () {
            var a = f.document;
            return a ? a.documentMode : void 0
        }, D;
    r: {
        var E = "",
            F;
        if (t && f.opera) var G = f.opera.version,
        E = "function" == typeof G ? G() : G;
        else if (B ? F = /rv\:([^\);]+)(\)|;)/ : A ? F = /MSIE\s+([^\);]+)(\)|;)/ : da && (F = /WebKit\/(\S+)/), F) var H = F.exec(x()),
        E = H ? H[1] : "";
        if (A) {
            var I = C();
            if (I > parseFloat(E)) {
                D = String(I);
                break r
            }
        }
        D = E
    }
    var J = D,
        K = {}, L = function (a) {
            if (!K[a]) {
                for (var c = 0, b = String(J).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(b.length, d.length), k = 0; 0 == c && k < e; k++) {
                    var l = b[k] || "",
                        y = d[k] || "",
                        fa = RegExp("(\\d*)(\\D*)", "g"),
                        ga = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var n = fa.exec(l) || ["", "", ""],
                            p = ga.exec(y) || ["", "", ""];
                        if (0 == n[0].length && 0 == p[0].length) break;
                        c = ((0 == n[1].length ? 0 : parseInt(n[1], 10)) < (0 == p[1].length ? 0 : parseInt(p[1], 10)) ? -1 : (0 == n[1].length ? 0 : parseInt(n[1], 10)) > (0 == p[1].length ? 0 : parseInt(p[1], 10)) ? 1 : 0) || ((0 == n[2].length) < (0 == p[2].length) ? -1 : (0 == n[2].length) > (0 == p[2].length) ? 1 : 0) || (n[2] < p[2] ? -1 : n[2] > p[2] ? 1 : 0)
                    } while (0 == c)
                }
                K[a] = 0 <= c
            }
        }, M = f.document,
        ea = M && A ? C() || ("CSS1Compat" == M.compatMode ? parseInt(J, 10) : 5) : void 0;
    if (B || A) {
        var N;
        if (N = A) N = A && 9 <= ea;
        N || B && L("1.9.1")
    }
    A && L("9");
    var O = function (a) {
        if (void 0 != a.nextElementSibling) a = a.nextElementSibling;
        else
            for (a = a.nextSibling; a && 1 != a.nodeType;) a = a.nextSibling;
        return a
    };
    var P = !! f.DOMTokenList,
        ha = P ? function (a) {
            return a.classList
        } : function (a) {
            a = a.className;
            return "string" == typeof a && a.match(/\S+/g) || []
        }, Q = P ? function (a, c) {
            r( !! a.classList);
            return a.classList.contains(c)
        } : function (a, c) {
            var b = ha(a);
            return 0 <= ba(b, c)
        };
    var R = function (a) {
        if (!google.isr.layout) return null;
        var c = 0,
            b = google.isr.layout.getChunkSizeArray();
        if (2 <= b.length && 100 > b[0] && b[0] + b[1] > a) return {
            resultIndex: a,
            chunkIndex: 0,
            chunkStart: 0
        };
        for (var d = 0; d < b.length; d++) {
            if (c + b[d] > a) return {
                resultIndex: a - c,
                chunkIndex: d,
                chunkStart: c
            };
            c += b[d]
        }
        return null
    };
    g("google.isr.chunk.getChunkIndex", function (a) {
        return (a = R(a)) ? a.chunkIndex : -1
    });
    g("google.isr.chunk.getInfo", R);
    var S = null;
    g("google.isr.metadata.convert", function (a) {
        var c;
        c = S ? S : S = {
            0: "lu",
            1: "it",
            2: "id",
            3: "seu",
            4: "tw",
            5: "th",
            6: "s",
            7: "nv",
            8: "vd",
            9: "is",
            10: "ity",
            11: "isu",
            12: "mu",
            13: "mm",
            14: "ihu",
            15: "su",
            21: "tu",
            22: "pt",
            23: "kc",
            24: "si",
            25: "sm",
            26: "fn",
            27: "du",
            28: "msu",
            29: "msm",
            30: "so",
            31: "imi",
            33: "md",
            34: "fd"
        };
        var b = {}, d;
        for (d in a) {
            var e = c[d];
            e && (b[e] = a[d])
        }
        return b
    });
    var T = function () {
        return !!google.isr.layout
    }, U = function (a, c, b, d) {
            a = "1t:" + a; - 1 < c && (a += ",r:" + c); - 1 < b && (a += ",s:" + b); - 1 < d && (a += ",i:" + d);
            return a
        }, V = function (a) {
            return google.style && google.style.getPageOffsetTop ? google.style.getPageOffsetTop(a) : 0
        };
    g("google.isr.util.getResultOffsetTop", function (a) {
        return a.offsetTop
    });
    g("google.isr.util.getResultPageOffsetTop", V);
    g("google.isr.util.populateResultInfo", function (a) {
        var c = {};
        c.result = a;
        c.resultIndex = +a.getAttribute("data-ri") || 0;
        c.resultImg = a.getElementsByTagName("img")[0];
        return c
    });
    g("google.isr.util.typeHasFocus", function (a) {
        var c = document.activeElement;
        return c && c.nodeName == a
    });
    g("google.isr.util.useClientsideLayout", T);
    g("google.isr.util.vedString", U);
    g("google.isr.util.vedStringForInfo", function (a, c) {
        if (!T()) return null;
        var b = "i" + c,
            d = -1;
        a.result.hasAttribute(b) && "" != a.result.getAttribute(b) && (d = +a.result.getAttribute(b));
        b = R(a.resultIndex);
        return U(c, b.resultIndex, b.chunkStart, d)
    });
    var W = [],
        X = !0,
        Y = function () {
            var a = document.getElementById("res"),
                c = [];
            a && (W = [], c = T() ? google.isr.layout.getResults() : a.getElementsByTagName("li"));
            r: {
                for (var a = c, c = -1, b = 0, d = T() ? "rg_di" : "rg_li", e = T() ? "rg_dii" : "rg_lii", k = 0; k < a.length; k++) {
                    var l = a[k];
                    if (Q(l, d) || Q(l, e)) {
                        if (l.offsetTop != c) {
                            var y = V(l);
                            if (b >= y) {
                                a = !1;
                                break r
                            }
                            c = l.offsetTop;
                            b = y;
                            W.push(l)
                        }
                        l.c = W.length - 1;
                        l.a = b
                    }
                }
                a = !0
            }
            X = !a
        }, $ = function (a) {
            a = Z(a);
            0 < a && a--;
            return W[a]
        }, ia = function (a) {
            a = Z(a);
            a < W.length - 1 && a++;
            return W[a]
        }, Z = function (a) {
            X && Y();
            if ("number" !=
                typeof a) return Q(a.parentNode, "rg_bb_i") ? 0 : a.c;
            for (var c = 0, b = W.length; c < b;) {
                var d = c + Math.floor((b - c) / 2),
                    e = W[d],
                    e = 0 == d ? 0 : e.a;
                if (e <= a && (d + 1 >= b || W[d + 1].a > a)) return d;
                e < a ? c = d + 1 : b = d
            }
            return c
        };
    g("google.isr.page.invalidateResultsRows", function () {
        X = !0
    });
    g("google.isr.page.findRowAt", function (a) {
        a = Z(a);
        return W[a]
    });
    g("google.isr.page.findRowAbove", $);
    g("google.isr.page.findRowBelow", ia);
    g("google.isr.page.findVerticalSibling", function (a, c) {
        var b = 1 == c ? ia(a) : $(a);
        if (b.offsetTop == a.offsetTop) return a;
        var d = a.offsetLeft + a.offsetWidth / 2;
        if ("rtl" == document.body.dir || "rtl" == document.dir)
            for (; b && (!Q(b, "rg_di") && !Q(b, "rg_dii") || b.offsetLeft > d);) b = O(b);
        else
            for (; b && (!Q(b, "rg_di") && !Q(b, "rg_dii") || b.offsetLeft + b.offsetWidth < d);) b = O(b);
        return b
    });
    g("google.isr.page.findLastResultInRow", function (a) {
        X && Y();
        a = Z(a);
        for (var c = W[a], b = O(c); b; b = O(b)) {
            var d = Q(b, "rg_bb_c") || Q(b, "rg_pd");
            if (d || Q(b, "rg_di") || Q(b, "rg_dii"))
                if (d || b.c == a) c = b;
                else break
        }
        return c
    });
})();
