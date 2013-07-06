(function () {
    var e = {};
    e.stb_bg = !0;
    e.stb_fi = !0, e.stb_li = !0, e.stb_lii = !0, e.stb_tb = !0;
    e.stb_csl_0 = !0;
    e.stb_csl_1 = !0;
    var g = !1;
    g = !0;
    google.stb || (google.stb = {});
    google.isr || (google.isr = {});
    google.stb.csi = {
        data: {},
        setFirstPageSize: function (a) {
            n = a;
            var b = n;
            if (!p) {
                for (var d = 0, c = !0, f = 0; f < b; f++) q[f] ? (t++, c && q[f] != Number.MAX_VALUE && (d = Math.max(d, q[f]))) : c = !1;
                c && (p = !0, u("stb_li", d), v())
            }
            if (a) {
                for (a = 0; a < w.length; a++) w[a]();
                w = []
            }
        },
        setNumInlined: function (a) {
            if (y = a, !z)
                if (0 == a) z = !0, google.timers.load.t && e.stb_lii && (google.timers.load.t.stb_lii = null), v();
                else {
                    for (var b = 0, d = !0, c = 0; c < a; c++) {
                        if (!q[c]) {
                            d = !1;
                            break
                        }
                        A++;
                        q[c] != Number.MAX_VALUE && (b = Math.max(b, q[c]))
                    }
                    d && (z = !0, u("stb_lii", b), v())
                }
        },
        onTb: function () {
            u("stb_tb", B());
        },
        onBg: function () {
            u("stb_bg",
                B()), v();
        },
        startLSI: function () {
            u("stb_lsi_s", B());
        },
        endLSI: function (a) {
            var b = B() - this.data.stb_lsi_s;
            1E3 < b && 1E4 < a && (u("stb_lsi_sz", a, !0), u("stb_lsi_t", b, !0));
        },
        getBandwidth: function () {
            var a = 0;
            this.data.stb_lsi_t && (a = Math.floor(this.data.stb_lsi_sz / this.data.stb_lsi_t));
            return a
        },
        onScl: function (a, b, d) {},
        updateRowsInfo: function () {},
        startChunk0Layout: function () {
            u("stb_csl_0_s", B())
        },
        endChunk0Layout: function () {
            var a =
                B() - this.data.stb_csl_0_s;
            !a || 0 > a || u("stb_csl_0", a, !0)
        },
        startChunk1Layout: function () {
            u("stb_csl_1_s", B())
        },
        endChunk1Layout: function () {
            var a = B() - this.data.stb_csl_1_s;
            !a || 0 > a || u("stb_csl_1", a, !0)
        },
        startChunk3Layout: function () {
            u("stb_csl_3_s", B())
        },
        endChunk3Layout: function () {
            var a = B() - this.data.stb_csl_3_s;
            if (a && !(0 > a)) {
                var b = {};
                b.stb_csl_3 = a;
                J(b)
            }
        },
        reinitialize: function () {
            K = M = A = t = y = n = 0;
            z = p = N = !1;
            q = {};
            w = [];
            O = 0
        }
    };
    var B = function () {
        return (new Date).getTime()
    }, u = function (a, b, d) {
            google.stb.csi.data[a] = b;
            google.timers.load.t && e[a] && (d && (b += google.timers.load.t.start), google.timers.load.t[a] = b)
        }, J = function (a) {
            var b = 1,
                d = {
                    t: {
                        start: b
                    }
                }, c;
            for (c in a) d.t[c] = a[c] + b;
            google.x({
                id: "scsi"
            }, function () {
                google.report(d, google.kCSI)
            })
        }, v = function () {
            O++;
            var a = g ? 3 == O : 2 == O;
            a && (google.isr.csi_done = !0, google.j && google.j.mscr && google.j.mscr())
        }, D = 100,
        C = 0,
        O = 0;
    var N = !1,
        p = !1,
        z = !1,
        t = 0,
        A = 0,
        M = 0,
        K = 0,
        n = 0,
        y = 0,
        q = {}, w = [],
        P = function () {
            if (n) return n;
            var a = document.getElementById("rg");
            return a && (a = a.getElementsByTagName("ul")[0]) ? n = a.getElementsByTagName("li").length : 0
        }, l = function () {
            var a = B();
            N ? ++t == P() && (p = !0, u("stb_li", a), v()) : (N = !0, u("stb_fi", a), t = 1)
        }, k = function (a, b) {
            if (!p || !z) {
                for (var d = a; d && "rg_di" != d.className;) d = d.parentNode;
                if (d) {
                    var c = b ? b : "none" == d.style.display ? Number.MAX_VALUE : B();
                    N || c == Number.MAX_VALUE || (N = !0, u("stb_fi", c));
                    if (d.hasAttribute("data-ri")) {
                        d =
                            d.getAttribute("data-ri");
                        q[d] = c;
                        if (!p && n && d < n)
                            if (++t == n) {
                                var f = c == Number.MAX_VALUE ? M : Math.max(M, c);
                                p = !0;
                                u("stb_li", f);
                                v()
                            } else c != Number.MAX_VALUE && c > M && (M = c);
                            !z && (y && d < y) && (++A == y ? (f = c == Number.MAX_VALUE ? K : c, z = !0, u("stb_lii", f), v()) : c != Number.MAX_VALUE && (K = c))
                    } else if(!n) {
                        w.push(function () {
                            k(a, c)
                        })
                    }
                }
            }
        };
})();
