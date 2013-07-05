if (!google.xjs) {
    window._ = window._ || {};
    window._._DumpException = function (e) {
        throw e
    };
    if (google.timers && google.timers.load.t) {
        google.timers.load.t.xjsls = new Date().getTime();
    }
    google.xjs = 1;
}

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
    "j": {
        "ahipiou": true,
        "cspd": 0,
        "hme": true,
        "icmt": false,
        "mcr": 5,
        "tct": " \\u3000?"
    }
};
