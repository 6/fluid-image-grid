(function () {
    window.google = {
        time: function () {
            return (new Date).getTime()
        },
        y: {}
    };

    google.pmc = {
        "jstr": {
            "baseUrl": "/search?q=san+francisco\u0026biw=1162\u0026bih=370\u0026tbm=isch",
            "meta": {
                "bgtprefetch": "1",
                "bgtprefetchlp": 0,
                "bigGulpEnabled": false,
                "connectionSpeed": "fast",
                "csLayout": true,
                "genChunk": "1",
                "genChunkMax": 9,
                "genMoreResultsChunkCutoff": 3,
                "genPrefetchCutoff": 1,
                "imgrc": true,
                "mpfStart": 1,
                "nTbnsPending": 8,
                "numResults": 1230,
                "pageAgeLimitMillis": 172800000,
                "shouldLogBgTimeout": false,
                "showMoreResults": "1"
            }
        },
        "j": {}
    };
})();

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
})();
