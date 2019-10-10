# bootstrap-lite
this zero-dependency package will provide 1) a rolled-up css (includes glyphicons and theme), and 2) a rolled-up js (includes jquery) of twitter-bootstrap (v3.4.0), with a working web-demo

# live web demo
- [https://kaizhu256.github.io/node-bootstrap-lite/build..beta..travis-ci.org/app](https://kaizhu256.github.io/node-bootstrap-lite/build..beta..travis-ci.org/app)

[![screenshot](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.deployGithub.browser.%252Fnode-bootstrap-lite%252Fbuild%252Fapp.png)](https://kaizhu256.github.io/node-bootstrap-lite/build..beta..travis-ci.org/app/)



[![travis-ci.org build-status](https://api.travis-ci.org/kaizhu256/node-bootstrap-lite.svg)](https://travis-ci.org/kaizhu256/node-bootstrap-lite) [![coverage](https://kaizhu256.github.io/node-bootstrap-lite/build/coverage.badge.svg)](https://kaizhu256.github.io/node-bootstrap-lite/build/coverage.html/index.html)

[![NPM](https://nodei.co/npm/bootstrap-lite.png?downloads=true)](https://www.npmjs.com/package/bootstrap-lite)

[![build commit status](https://kaizhu256.github.io/node-bootstrap-lite/build/build.badge.svg)](https://travis-ci.org/kaizhu256/node-bootstrap-lite)

| git-branch : | [master](https://github.com/kaizhu256/node-bootstrap-lite/tree/master) | [beta](https://github.com/kaizhu256/node-bootstrap-lite/tree/beta) | [alpha](https://github.com/kaizhu256/node-bootstrap-lite/tree/alpha)|
|--:|:--|:--|:--|
| test-server-github : | [![github.com test-server](https://kaizhu256.github.io/node-bootstrap-lite/GitHub-Mark-32px.png)](https://kaizhu256.github.io/node-bootstrap-lite/build..master..travis-ci.org/app) | [![github.com test-server](https://kaizhu256.github.io/node-bootstrap-lite/GitHub-Mark-32px.png)](https://kaizhu256.github.io/node-bootstrap-lite/build..beta..travis-ci.org/app) | [![github.com test-server](https://kaizhu256.github.io/node-bootstrap-lite/GitHub-Mark-32px.png)](https://kaizhu256.github.io/node-bootstrap-lite/build..alpha..travis-ci.org/app)|
| test-report : | [![test-report](https://kaizhu256.github.io/node-bootstrap-lite/build..master..travis-ci.org/test-report.badge.svg)](https://kaizhu256.github.io/node-bootstrap-lite/build..master..travis-ci.org/test-report.html) | [![test-report](https://kaizhu256.github.io/node-bootstrap-lite/build..beta..travis-ci.org/test-report.badge.svg)](https://kaizhu256.github.io/node-bootstrap-lite/build..beta..travis-ci.org/test-report.html) | [![test-report](https://kaizhu256.github.io/node-bootstrap-lite/build..alpha..travis-ci.org/test-report.badge.svg)](https://kaizhu256.github.io/node-bootstrap-lite/build..alpha..travis-ci.org/test-report.html)|
| coverage : | [![coverage](https://kaizhu256.github.io/node-bootstrap-lite/build..master..travis-ci.org/coverage.badge.svg)](https://kaizhu256.github.io/node-bootstrap-lite/build..master..travis-ci.org/coverage.html/index.html) | [![coverage](https://kaizhu256.github.io/node-bootstrap-lite/build..beta..travis-ci.org/coverage.badge.svg)](https://kaizhu256.github.io/node-bootstrap-lite/build..beta..travis-ci.org/coverage.html/index.html) | [![coverage](https://kaizhu256.github.io/node-bootstrap-lite/build..alpha..travis-ci.org/coverage.badge.svg)](https://kaizhu256.github.io/node-bootstrap-lite/build..alpha..travis-ci.org/coverage.html/index.html)|
| build-artifacts : | [![build-artifacts](https://kaizhu256.github.io/node-bootstrap-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-bootstrap-lite/tree/gh-pages/build..master..travis-ci.org) | [![build-artifacts](https://kaizhu256.github.io/node-bootstrap-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-bootstrap-lite/tree/gh-pages/build..beta..travis-ci.org) | [![build-artifacts](https://kaizhu256.github.io/node-bootstrap-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-bootstrap-lite/tree/gh-pages/build..alpha..travis-ci.org)|

[![npmPackageListing](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.npmPackageListing.svg)](https://github.com/kaizhu256/node-bootstrap-lite)

![npmPackageDependencyTree](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.npmPackageDependencyTree.svg)



# table of contents
1. [cdn download](#cdn-download)
1. [documentation](#documentation)
1. [quickstart standalone app](#quickstart-standalone-app)
1. [quickstart example.js](#quickstart-examplejs)
1. [extra screenshots](#extra-screenshots)
1. [package.json](#packagejson)
1. [changelog of last 50 commits](#changelog-of-last-50-commits)
1. [internal build script](#internal-build-script)
1. [misc](#misc)



# cdn download
- [https://kaizhu256.github.io/node-bootstrap-lite/build..beta..travis-ci.org/app/assets.bootstrap-v3.4.0.rollup.min.css](https://kaizhu256.github.io/node-bootstrap-lite/build..beta..travis-ci.org/app/assets.bootstrap-v3.4.0.rollup.min.css)
- [https://kaizhu256.github.io/node-bootstrap-lite/build..beta..travis-ci.org/app/assets.bootstrap-v3.4.0.rollup.min.js](https://kaizhu256.github.io/node-bootstrap-lite/build..beta..travis-ci.org/app/assets.bootstrap-v3.4.0.rollup.min.js)



# documentation
#### api doc
- [https://kaizhu256.github.io/node-bootstrap-lite/build..beta..travis-ci.org/apidoc.html](https://kaizhu256.github.io/node-bootstrap-lite/build..beta..travis-ci.org/apidoc.html)

[![apidoc](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fapidoc.html.png)](https://kaizhu256.github.io/node-bootstrap-lite/build..beta..travis-ci.org/apidoc.html)

#### cli help
![screenshot](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.npmPackageCliHelp.svg)

#### todo
- improve apidoc with jquery-plugin documentation
- none

#### changelog 2019.8.24
- npm publish 2019.8.24
- add assets for jquery.datatables-v1.10.19, chartjs-v2.8.0, tinymce-v5.0.16
- update to bootstrap v3.4.1
- jslint - remove ternary-operator/newline comment preceding bra
- update build
- none

#### this package requires
- darwin or linux os



# quickstart standalone app
#### to run this example, follow instruction in script below
- [assets.app.js](https://kaizhu256.github.io/node-bootstrap-lite/build..beta..travis-ci.org/app/assets.app.js)
```shell
# example.sh

# this shell script will download and run a web-demo of bootstrap-lite as a standalone app

# 1. download standalone app
curl -O https://kaizhu256.github.io/node-bootstrap-lite/build..beta..travis-ci.org/app/assets.app.js
# 2. run standalone app
PORT=8081 node ./assets.app.js
# 3. open a browser to http://127.0.0.1:8081 and play with web-demo
# 4. edit file assets.app.js to suit your needs
```

#### output from browser
[![screenshot](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.testExampleSh.browser.%252F.png)](https://kaizhu256.github.io/node-bootstrap-lite/build/app/assets.example.html)

#### output from shell
![screenshot](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.testExampleSh.svg)



# quickstart example.js
[![screenshot](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.testExampleJs.browser.%252F.png)](https://kaizhu256.github.io/node-bootstrap-lite/build/app/assets.example.html)

#### to run this example, follow instruction in script below
- [example.js](https://kaizhu256.github.io/node-bootstrap-lite/build..beta..travis-ci.org/example.js)
```javascript
/*
example.js

this script will run a web-demo of bootstrap-lite

instruction
    1. save this script as example.js
    2. run shell-command:
        $ npm install bootstrap-lite && \
            PORT=8081 node example.js
    3. open a browser to http://127.0.0.1:8081 and play with web-demo
    4. edit this script to suit your needs
*/



// assets.utility2.header.js - start
/* istanbul ignore next */
/* jslint utility2:true */
(function (globalThis) {
    "use strict";
    let ArrayPrototypeFlat;
    let TextXxcoder;
    let consoleError;
    let debugName;
    let local;
    debugName = "debug" + String("Inline");
    // init globalThis
    globalThis.globalThis = globalThis.globalThis || globalThis;
    // init debug_inline
    if (!globalThis[debugName]) {
        consoleError = console.error;
        globalThis[debugName] = function (...argList) {
        /*
         * this function will both print <argList> to stderr
         * and return <argList>[0]
         */
            consoleError("\n\n" + debugName);
            consoleError.apply(console, argList);
            consoleError("\n");
            // return arg0 for inspection
            return argList[0];
        };
    }
    // polyfill
    ArrayPrototypeFlat = function (depth) {
    /*
     * this function will polyfill Array.prototype.flat
     * https://github.com/jonathantneal/array-flat-polyfill
     */
        depth = (
            globalThis.isNaN(depth)
            ? 1
            : Number(depth)
        );
        if (!depth) {
            return Array.prototype.slice.call(this);
        }
        return Array.prototype.reduce.call(this, function (acc, cur) {
            if (Array.isArray(cur)) {
                // recurse
                acc.push.apply(acc, ArrayPrototypeFlat.call(cur, depth - 1));
            } else {
                acc.push(cur);
            }
            return acc;
        }, []);
    };
    Array.prototype.flat = Array.prototype.flat || ArrayPrototypeFlat;
    Array.prototype.flatMap = Array.prototype.flatMap || function flatMap(
        ...argList
    ) {
    /*
     * this function will polyfill Array.prototype.flatMap
     * https://github.com/jonathantneal/array-flat-polyfill
     */
        return this.map(...argList).flat();
    };
    String.prototype.trimEnd = (
        String.prototype.trimEnd || String.prototype.trimRight
    );
    String.prototype.trimStart = (
        String.prototype.trimStart || String.prototype.trimLeft
    );
    (function () {
        try {
            globalThis.TextDecoder = (
                globalThis.TextDecoder || require("util").TextDecoder
            );
            globalThis.TextEncoder = (
                globalThis.TextEncoder || require("util").TextEncoder
            );
        } catch (ignore) {}
    }());
    TextXxcoder = function () {
    /*
     * this function will polyfill TextDecoder/TextEncoder
     * https://gist.github.com/Yaffle/5458286
     */
        return;
    };
    TextXxcoder.prototype.decode = function (octets) {
    /*
     * this function will polyfill TextDecoder.prototype.decode
     * https://gist.github.com/Yaffle/5458286
     */
        let bytesNeeded;
        let codePoint;
        let ii;
        let kk;
        let octet;
        let string;
        string = "";
        ii = 0;
        while (ii < octets.length) {
            octet = octets[ii];
            bytesNeeded = 0;
            codePoint = 0;
            if (octet <= 0x7F) {
                bytesNeeded = 0;
                codePoint = octet & 0xFF;
            } else if (octet <= 0xDF) {
                bytesNeeded = 1;
                codePoint = octet & 0x1F;
            } else if (octet <= 0xEF) {
                bytesNeeded = 2;
                codePoint = octet & 0x0F;
            } else if (octet <= 0xF4) {
                bytesNeeded = 3;
                codePoint = octet & 0x07;
            }
            if (octets.length - ii - bytesNeeded > 0) {
                kk = 0;
                while (kk < bytesNeeded) {
                    octet = octets[ii + kk + 1];
                    codePoint = (codePoint << 6) | (octet & 0x3F);
                    kk += 1;
                }
            } else {
                codePoint = 0xFFFD;
                bytesNeeded = octets.length - ii;
            }
            string += String.fromCodePoint(codePoint);
            ii += bytesNeeded + 1;
        }
        return string;
    };
    TextXxcoder.prototype.encode = function (string) {
    /*
     * this function will polyfill TextEncoder.prototype.encode
     * https://gist.github.com/Yaffle/5458286
     */
        let bits;
        let cc;
        let codePoint;
        let ii;
        let length;
        let octets;
        octets = [];
        length = string.length;
        ii = 0;
        while (ii < length) {
            codePoint = string.codePointAt(ii);
            cc = 0;
            bits = 0;
            if (codePoint <= 0x0000007F) {
                cc = 0;
                bits = 0x00;
            } else if (codePoint <= 0x000007FF) {
                cc = 6;
                bits = 0xC0;
            } else if (codePoint <= 0x0000FFFF) {
                cc = 12;
                bits = 0xE0;
            } else if (codePoint <= 0x001FFFFF) {
                cc = 18;
                bits = 0xF0;
            }
            octets.push(bits | (codePoint >> cc));
            cc -= 6;
            while (cc >= 0) {
                octets.push(0x80 | ((codePoint >> cc) & 0x3F));
                cc -= 6;
            }
            ii += (
                codePoint >= 0x10000
                ? 2
                : 1
            );
        }
        return octets;
    };
    globalThis.TextDecoder = globalThis.TextDecoder || TextXxcoder;
    globalThis.TextEncoder = globalThis.TextEncoder || TextXxcoder;
    // init local
    local = {};
    local.local = local;
    globalThis.globalLocal = local;
    // init isBrowser
    local.isBrowser = (
        typeof globalThis.XMLHttpRequest === "function"
        && globalThis.navigator
        && typeof globalThis.navigator.userAgent === "string"
    );
    // init isWebWorker
    local.isWebWorker = (
        local.isBrowser && typeof globalThis.importScript === "function"
    );
    // init function
    local.assertOrThrow = function (passed, message) {
    /*
     * this function will throw err.<message> if <passed> is falsy
     */
        let err;
        if (passed) {
            return;
        }
        err = (
            (
                message
                && typeof message.message === "string"
                && typeof message.stack === "string"
            )
            // if message is errObj, then leave as is
            ? message
            : new Error(
                typeof message === "string"
                // if message is a string, then leave as is
                ? message
                // else JSON.stringify message
                : JSON.stringify(message, undefined, 4)
            )
        );
        throw err;
    };
    local.coalesce = function (...argList) {
    /*
     * this function will coalesce null, undefined, or "" in <argList>
     */
        let arg;
        let ii;
        ii = 0;
        while (ii < argList.length) {
            arg = argList[ii];
            if (arg !== null && arg !== undefined && arg !== "") {
                break;
            }
            ii += 1;
        }
        return arg;
    };
    local.fsRmrfSync = function (dir) {
    /*
     * this function will sync "rm -rf" <dir>
     */
        let child_process;
        try {
            child_process = require("child_process");
        } catch (ignore) {
            return;
        }
        child_process.spawnSync("rm", [
            "-rf", dir
        ], {
            stdio: [
                "ignore", 1, 2
            ]
        });
    };
    local.fsWriteFileWithMkdirpSync = function (file, data) {
    /*
     * this function will sync write <data> to <file> with "mkdir -p"
     */
        let fs;
        try {
            fs = require("fs");
        } catch (ignore) {
            return;
        }
        // try to write file
        try {
            fs.writeFileSync(file, data);
        } catch (ignore) {
            // mkdir -p
            require("child_process").spawnSync(
                "mkdir",
                [
                    "-p", require("path").dirname(file)
                ],
                {
                    stdio: [
                        "ignore", 1, 2
                    ]
                }
            );
            // rewrite file
            fs.writeFileSync(file, data);
        }
    };
    local.functionOrNop = function (fnc) {
    /*
     * this function will if <fnc> exists,
     * return <fnc>,
     * else return <nop>
     */
        return fnc || local.nop;
    };
    local.identity = function (val) {
    /*
     * this function will return <val>
     */
        return val;
    };
    local.nop = function () {
    /*
     * this function will do nothing
     */
        return;
    };
    local.objectAssignDefault = function (target, source) {
    /*
     * this function will if items from <target> are null, undefined, or "",
     * then overwrite them with items from <source>
     */
        target = target || {};
        Object.keys(source || {}).forEach(function (key) {
            if (
                target[key] === null
                || target[key] === undefined
                || target[key] === ""
            ) {
                target[key] = target[key] || source[key];
            }
        });
        return target;
    };
    local.querySelector = function (selectors) {
    /*
     * this function will return first dom-elem that match <selectors>
     */
        return (
            typeof document === "object" && document
            && typeof document.querySelector === "function"
            && document.querySelector(selectors)
        ) || {};
    };
    local.querySelectorAll = function (selectors) {
    /*
     * this function will return dom-elem-list that match <selectors>
     */
        return (
            typeof document === "object" && document
            && typeof document.querySelectorAll === "function"
            && Array.from(document.querySelectorAll(selectors))
        ) || [];
    };
    // require builtin
    if (!local.isBrowser) {
        local.assert = require("assert");
        local.buffer = require("buffer");
        local.child_process = require("child_process");
        local.cluster = require("cluster");
        local.crypto = require("crypto");
        local.dgram = require("dgram");
        local.dns = require("dns");
        local.domain = require("domain");
        local.events = require("events");
        local.fs = require("fs");
        local.http = require("http");
        local.https = require("https");
        local.net = require("net");
        local.os = require("os");
        local.path = require("path");
        local.querystring = require("querystring");
        local.readline = require("readline");
        local.repl = require("repl");
        local.stream = require("stream");
        local.string_decoder = require("string_decoder");
        local.timers = require("timers");
        local.tls = require("tls");
        local.tty = require("tty");
        local.url = require("url");
        local.util = require("util");
        local.vm = require("vm");
        local.zlib = require("zlib");
    }
}((typeof globalThis === "object" && globalThis) || (function () {
    return Function("return this")(); // jslint ignore:line
}())));
// assets.utility2.header.js - end



/* jslint utility2:true */
(function (local) {
"use strict";



// run shared js-env code - init-before
(function () {
// init local
local = (
    globalThis.utility2_rollup
    || globalThis.utility2_bootstrap
    || require("bootstrap-lite")
);
// init exports
globalThis.local = local;
}());



/* istanbul ignore next */
// run browser js-env code - init-test
(function () {
if (!local.isBrowser) {
    return;
}
}());



// run node js-env code - init-test
(function () {
if (local.isBrowser) {
    return;
}
// init exports
module.exports = local;
// init assets
local.assetsDict = local.assetsDict || {};
[
    "assets.swgg.swagger.json",
    "assets.swgg.swagger.server.json"
].forEach(function (file) {
    file = "/" + file;
    local.assetsDict[file] = local.assetsDict[file] || "";
    if (local.fs.existsSync(local.__dirname + file)) {
        local.assetsDict[file] = local.fs.readFileSync(
            local.__dirname + file,
            "utf8"
        );
    }
});
/* jslint ignore:start */
local.assetsDict["/assets.index.template.html"] = '\
<!doctype html>\n\
<html lang="en">\n\
<head>\n\
<meta charset="utf-8">\n\
<meta name="viewport" content="width=device-width, initial-scale=1">\n\
<!-- "assets.utility2.template.html" -->\n\
<title>{{env.npm_package_name}} ({{env.npm_package_version}})</title>\n\
<link href="assets.bootstrap-v3.4.0.rollup.min.css" rel="stylesheet">\n\
<style>\n\
/*\n\
  * Base structure\n\
  */\n\
/* Move down content because we have a fixed navbar that is 50px tall */\n\
body {\n\
    padding-top: 50px;\n\
}\n\
/*\n\
  * Global add-ons\n\
  */\n\
.sub-header {\n\
    padding-bottom: 10px;\n\
    border-bottom: 1px solid #eee;\n\
}\n\
/*\n\
  * Top navigation\n\
  * Hide default border to remove 1px line.\n\
  */\n\
.navbar-fixed-top {\n\
    border: 0;\n\
}\n\
/*\n\
  * Sidebar\n\
  */\n\
/* Hide for mobile, show later */\n\
.sidebar {\n\
    display: none;\n\
}\n\
@media (min-width: 768px) {\n\
    .sidebar {\n\
        position: fixed;\n\
        top: 51px;\n\
        bottom: 0;\n\
        left: 0;\n\
        z-index: 1000;\n\
        display: block;\n\
        padding: 20px;\n\
        overflow-x: hidden;\n\
        overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n\
        background-color: #f5f5f5;\n\
        border-right: 1px solid #eee;\n\
    }\n\
}\n\
/* Sidebar navigation */\n\
.nav-sidebar {\n\
    margin-right: -21px; /* 20px padding + 1px border */\n\
    margin-bottom: 20px;\n\
    margin-left: -20px;\n\
}\n\
.nav-sidebar > li > a {\n\
    padding-right: 20px;\n\
    padding-left: 20px;\n\
}\n\
.nav-sidebar > .active > a,\n\
.nav-sidebar > .active > a:hover,\n\
.nav-sidebar > .active > a:focus {\n\
    color: #fff;\n\
    background-color: #428bca;\n\
}\n\
/*\n\
  * Main content\n\
  */\n\
.main {\n\
    padding: 20px;\n\
}\n\
@media (min-width: 768px) {\n\
    .main {\n\
        padding-right: 40px;\n\
        padding-left: 40px;\n\
    }\n\
}\n\
.main .page-header {\n\
    margin-top: 0;\n\
}\n\
/*\n\
  * Placeholder dashboard ideas\n\
  */\n\
.placeholders {\n\
    margin-bottom: 30px;\n\
    text-align: center;\n\
}\n\
.placeholders h4 {\n\
    margin-bottom: 0;\n\
}\n\
.placeholder {\n\
    margin-bottom: 20px;\n\
}\n\
.placeholder img {\n\
    display: inline-block;\n\
    border-radius: 50%;\n\
}\n\
</style>\n\
</head>\n\
<!-- http://getbootstrap.com/docs/3.3/examples/dashboard/ -->\n\
<body>\n\
<nav class="navbar navbar-fixed-top navbar-inverse">\n\
    <div class="container-fluid">\n\
        <div class="navbar-header">\n\
            <button type="button" class="collapsed navbar-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n\
                <span class="sr-only">Toggle navigation</span>\n\
                <span class="icon-bar"></span>\n\
                <span class="icon-bar"></span>\n\
                <span class="icon-bar"></span>\n\
            </button>\n\
            <a class="navbar-brand" href="#">Project name</a>\n\
        </div>\n\
        <div id="navbar" class="collapse navbar-collapse">\n\
            <ul class="nav navbar-nav navbar-right">\n\
                <li><a href="#">Dashboard</a></li>\n\
                <li><a href="#">Settings</a></li>\n\
                <li><a href="#">Profile</a></li>\n\
                <li><a href="#">Help</a></li>\n\
            </ul>\n\
            <form class="navbar-form navbar-right">\n\
                <input type="text" class="form-control" placeholder="Search...">\n\
            </form>\n\
        </div>\n\
    </div>\n\
</nav>\n\
<div class="container-fluid">\n\
    <div class="row">\n\
        <div class="col-md-2 col-sm-3 sidebar">\n\
            <ul class="nav nav-sidebar">\n\
                <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>\n\
                <li><a href="#">Reports</a></li>\n\
                <li><a href="#">Analytics</a></li>\n\
                <li><a href="#">Export</a></li>\n\
            </ul>\n\
            <ul class="nav nav-sidebar">\n\
                <li><a href="">Nav item</a></li>\n\
                <li><a href="">Nav item again</a></li>\n\
                <li><a href="">One more nav</a></li>\n\
                <li><a href="">Another nav item</a></li>\n\
                <li><a href="">More navigation</a></li>\n\
            </ul>\n\
            <ul class="nav nav-sidebar">\n\
                <li><a href="">Nav item again</a></li>\n\
                <li><a href="">One more nav</a></li>\n\
                <li><a href="">Another nav item</a></li>\n\
            </ul>\n\
        </div>\n\
        <div class="col-md-10 col-md-offset-2 col-sm-9 col-sm-offset-3 main">\n\
\n\
\n\
\n\
<!-- Main jumbotron for a primary marketing message or call to action -->\n\
<div class="jumbotron">\n\
    <h1>\n\
    <!-- utility2-comment\n\
        <a\n\
            {{#if env.npm_package_homepage}}\n\
            href="{{env.npm_package_homepage}}"\n\
            {{/if env.npm_package_homepage}}\n\
            target="_blank"\n\
        >\n\
    utility2-comment -->\n\
            {{env.npm_package_name}} ({{env.npm_package_version}})\n\
    <!-- utility2-comment\n\
        </a>\n\
    utility2-comment -->\n\
    </h1>\n\
    <p>{{env.npm_package_description}}</p>\n\
    <!-- utility2-comment\n\
    utility2-comment -->\n\
</div>\n\
<h1 class="page-header">Dashboard</h1>\n\
<div class="placeholders row">\n\
    <div class="col-sm-3 col-xs-6 placeholder">\n\
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">\n\
        <h4>Label</h4>\n\
        <span class="text-muted">Something else</span>\n\
    </div>\n\
    <div class="col-sm-3 col-xs-6 placeholder">\n\
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">\n\
        <h4>Label</h4>\n\
        <span class="text-muted">Something else</span>\n\
    </div>\n\
    <div class="col-sm-3 col-xs-6 placeholder">\n\
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">\n\
        <h4>Label</h4>\n\
        <span class="text-muted">Something else</span>\n\
    </div>\n\
    <div class="col-sm-3 col-xs-6 placeholder">\n\
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">\n\
        <h4>Label</h4>\n\
        <span class="text-muted">Something else</span>\n\
    </div>\n\
</div>\n\
<h2 class="sub-header">Section title</h2>\n\
<div class="table-responsive">\n\
    <table class="table table-striped">\n\
        <thead>\n\
            <tr>\n\
                <th>#</th>\n\
                <th>Header</th>\n\
                <th>Header</th>\n\
                <th>Header</th>\n\
                <th>Header</th>\n\
            </tr>\n\
        </thead>\n\
        <tbody>\n\
            <tr>\n\
                <td>1,001</td>\n\
                <td>Lorem</td>\n\
                <td>ipsum</td>\n\
                <td>dolor</td>\n\
                <td>sit</td>\n\
            </tr>\n\
            <tr>\n\
                <td>1,002</td>\n\
                <td>amet</td>\n\
                <td>consectetur</td>\n\
                <td>adipiscing</td>\n\
                <td>elit</td>\n\
            </tr>\n\
            <tr>\n\
                <td>1,003</td>\n\
                <td>Integer</td>\n\
                <td>nec</td>\n\
                <td>odio</td>\n\
                <td>Praesent</td>\n\
            </tr>\n\
            <tr>\n\
                <td>1,003</td>\n\
                <td>libero</td>\n\
                <td>Sed</td>\n\
                <td>cursus</td>\n\
                <td>ante</td>\n\
            </tr>\n\
            <tr>\n\
                <td>1,004</td>\n\
                <td>dapibus</td>\n\
                <td>diam</td>\n\
                <td>Sed</td>\n\
                <td>nisi</td>\n\
            </tr>\n\
            <tr>\n\
                <td>1,005</td>\n\
                <td>Nulla</td>\n\
                <td>quis</td>\n\
                <td>sem</td>\n\
                <td>at</td>\n\
            </tr>\n\
            <tr>\n\
                <td>1,006</td>\n\
                <td>nibh</td>\n\
                <td>elementum</td>\n\
                <td>imperdiet</td>\n\
                <td>Duis</td>\n\
            </tr>\n\
            <tr>\n\
                <td>1,007</td>\n\
                <td>sagittis</td>\n\
                <td>ipsum</td>\n\
                <td>Praesent</td>\n\
                <td>mauris</td>\n\
            </tr>\n\
            <tr>\n\
                <td>1,008</td>\n\
                <td>Fusce</td>\n\
                <td>nec</td>\n\
                <td>tellus</td>\n\
                <td>sed</td>\n\
            </tr>\n\
            <tr>\n\
                <td>1,009</td>\n\
                <td>augue</td>\n\
                <td>semper</td>\n\
                <td>porta</td>\n\
                <td>Mauris</td>\n\
            </tr>\n\
            <tr>\n\
                <td>1,010</td>\n\
                <td>massa</td>\n\
                <td>Vestibulum</td>\n\
                <td>lacinia</td>\n\
                <td>arcu</td>\n\
            </tr>\n\
            <tr>\n\
                <td>1,011</td>\n\
                <td>eget</td>\n\
                <td>nulla</td>\n\
                <td>Class</td>\n\
                <td>aptent</td>\n\
            </tr>\n\
            <tr>\n\
                <td>1,012</td>\n\
                <td>taciti</td>\n\
                <td>sociosqu</td>\n\
                <td>ad</td>\n\
                <td>litora</td>\n\
            </tr>\n\
            <tr>\n\
                <td>1,013</td>\n\
                <td>torquent</td>\n\
                <td>per</td>\n\
                <td>conubia</td>\n\
                <td>nostra</td>\n\
            </tr>\n\
            <tr>\n\
                <td>1,014</td>\n\
                <td>per</td>\n\
                <td>inceptos</td>\n\
                <td>himenaeos</td>\n\
                <td>Curabitur</td>\n\
            </tr>\n\
            <tr>\n\
                <td>1,015</td>\n\
                <td>sodales</td>\n\
                <td>ligula</td>\n\
                <td>in</td>\n\
                <td>libero</td>\n\
            </tr>\n\
        </tbody>\n\
    </table>\n\
</div>\n\
<div class="page-header">\n\
    <h1>Buttons</h1>\n\
</div>\n\
<p>\n\
    <button type="button" class="btn btn-default btn-lg">Default</button>\n\
    <button type="button" class="btn btn-lg btn-primary">Primary</button>\n\
    <button type="button" class="btn btn-lg btn-success">Success</button>\n\
    <button type="button" class="btn btn-info btn-lg">Info</button>\n\
    <button type="button" class="btn btn-lg btn-warning">Warning</button>\n\
    <button type="button" class="btn btn-danger btn-lg">Danger</button>\n\
    <button type="button" class="btn btn-lg btn-link">Link</button>\n\
</p>\n\
<p>\n\
    <button type="button" class="btn btn-default">Default</button>\n\
    <button type="button" class="btn btn-primary">Primary</button>\n\
    <button type="button" class="btn btn-success">Success</button>\n\
    <button type="button" class="btn btn-info">Info</button>\n\
    <button type="button" class="btn btn-warning">Warning</button>\n\
    <button type="button" class="btn btn-danger">Danger</button>\n\
    <button type="button" class="btn btn-link">Link</button>\n\
</p>\n\
<p>\n\
    <button type="button" class="btn btn-default btn-sm">Default</button>\n\
    <button type="button" class="btn btn-primary btn-sm">Primary</button>\n\
    <button type="button" class="btn btn-sm btn-success">Success</button>\n\
    <button type="button" class="btn btn-info btn-sm">Info</button>\n\
    <button type="button" class="btn btn-sm btn-warning">Warning</button>\n\
    <button type="button" class="btn btn-danger btn-sm">Danger</button>\n\
    <button type="button" class="btn btn-link btn-sm">Link</button>\n\
</p>\n\
<p>\n\
    <button type="button" class="btn btn-default btn-xs">Default</button>\n\
    <button type="button" class="btn btn-primary btn-xs">Primary</button>\n\
    <button type="button" class="btn btn-success btn-xs">Success</button>\n\
    <button type="button" class="btn btn-info btn-xs">Info</button>\n\
    <button type="button" class="btn btn-warning btn-xs">Warning</button>\n\
    <button type="button" class="btn btn-danger btn-xs">Danger</button>\n\
    <button type="button" class="btn btn-link btn-xs">Link</button>\n\
</p>\n\
<div class="page-header">\n\
    <h1>Tables</h1>\n\
</div>\n\
<div class="row">\n\
    <div class="col-md-6">\n\
        <table class="table">\n\
            <thead>\n\
                <tr>\n\
                    <th>#</th>\n\
                    <th>First Name</th>\n\
                    <th>Last Name</th>\n\
                    <th>Username</th>\n\
                </tr>\n\
            </thead>\n\
            <tbody>\n\
                <tr>\n\
                    <td>1</td>\n\
                    <td>Mark</td>\n\
                    <td>Otto</td>\n\
                    <td>@mdo</td>\n\
                </tr>\n\
                <tr>\n\
                    <td>2</td>\n\
                    <td>Jacob</td>\n\
                    <td>Thornton</td>\n\
                    <td>@fat</td>\n\
                </tr>\n\
                <tr>\n\
                    <td>3</td>\n\
                    <td>Larry</td>\n\
                    <td>the Bird</td>\n\
                    <td>@twitter</td>\n\
                </tr>\n\
            </tbody>\n\
        </table>\n\
    </div>\n\
    <div class="col-md-6">\n\
        <table class="table table-striped">\n\
            <thead>\n\
                <tr>\n\
                    <th>#</th>\n\
                    <th>First Name</th>\n\
                    <th>Last Name</th>\n\
                    <th>Username</th>\n\
                </tr>\n\
            </thead>\n\
            <tbody>\n\
                <tr>\n\
                    <td>1</td>\n\
                    <td>Mark</td>\n\
                    <td>Otto</td>\n\
                    <td>@mdo</td>\n\
                </tr>\n\
                <tr>\n\
                    <td>2</td>\n\
                    <td>Jacob</td>\n\
                    <td>Thornton</td>\n\
                    <td>@fat</td>\n\
                </tr>\n\
                <tr>\n\
                    <td>3</td>\n\
                    <td>Larry</td>\n\
                    <td>the Bird</td>\n\
                    <td>@twitter</td>\n\
                </tr>\n\
            </tbody>\n\
        </table>\n\
    </div>\n\
</div>\n\
<div class="row">\n\
    <div class="col-md-6">\n\
        <table class="table table-bordered">\n\
            <thead>\n\
                <tr>\n\
                    <th>#</th>\n\
                    <th>First Name</th>\n\
                    <th>Last Name</th>\n\
                    <th>Username</th>\n\
                </tr>\n\
            </thead>\n\
            <tbody>\n\
                <tr>\n\
                    <td rowspan="2">1</td>\n\
                    <td>Mark</td>\n\
                    <td>Otto</td>\n\
                    <td>@mdo</td>\n\
                </tr>\n\
                <tr>\n\
                    <td>Mark</td>\n\
                    <td>Otto</td>\n\
                    <td>@TwBootstrap</td>\n\
                </tr>\n\
                <tr>\n\
                    <td>2</td>\n\
                    <td>Jacob</td>\n\
                    <td>Thornton</td>\n\
                    <td>@fat</td>\n\
                </tr>\n\
                <tr>\n\
                    <td>3</td>\n\
                    <td colspan="2">Larry the Bird</td>\n\
                    <td>@twitter</td>\n\
                </tr>\n\
            </tbody>\n\
        </table>\n\
    </div>\n\
    <div class="col-md-6">\n\
        <table class="table table-condensed">\n\
            <thead>\n\
                <tr>\n\
                    <th>#</th>\n\
                    <th>First Name</th>\n\
                    <th>Last Name</th>\n\
                    <th>Username</th>\n\
                </tr>\n\
            </thead>\n\
            <tbody>\n\
                <tr>\n\
                    <td>1</td>\n\
                    <td>Mark</td>\n\
                    <td>Otto</td>\n\
                    <td>@mdo</td>\n\
                </tr>\n\
                <tr>\n\
                    <td>2</td>\n\
                    <td>Jacob</td>\n\
                    <td>Thornton</td>\n\
                    <td>@fat</td>\n\
                </tr>\n\
                <tr>\n\
                    <td>3</td>\n\
                    <td colspan="2">Larry the Bird</td>\n\
                    <td>@twitter</td>\n\
                </tr>\n\
            </tbody>\n\
        </table>\n\
    </div>\n\
</div>\n\
<div class="page-header">\n\
    <h1>Thumbnails</h1>\n\
</div>\n\
<img data-src="holder.js/200x200" class="img-thumbnail" alt="200x200" style="width: 200px; height: 200px;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzIwMHgyMDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNjUzMTZiODJmOSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE2NTMxNmI4MmY5Ij48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9Ijc0LjA0Njg3NSIgeT0iMTA0LjM5Njg3NSI+MjAweDIwMDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==" data-holder-rendered="true">\n\
<div class="page-header">\n\
    <h1>Labels</h1>\n\
</div>\n\
<h1>\n\
    <span class="label label-default">Default</span>\n\
    <span class="label label-primary">Primary</span>\n\
    <span class="label label-success">Success</span>\n\
    <span class="label label-info">Info</span>\n\
    <span class="label label-warning">Warning</span>\n\
    <span class="label label-danger">Danger</span>\n\
</h1>\n\
<h2>\n\
    <span class="label label-default">Default</span>\n\
    <span class="label label-primary">Primary</span>\n\
    <span class="label label-success">Success</span>\n\
    <span class="label label-info">Info</span>\n\
    <span class="label label-warning">Warning</span>\n\
    <span class="label label-danger">Danger</span>\n\
</h2>\n\
<h3>\n\
    <span class="label label-default">Default</span>\n\
    <span class="label label-primary">Primary</span>\n\
    <span class="label label-success">Success</span>\n\
    <span class="label label-info">Info</span>\n\
    <span class="label label-warning">Warning</span>\n\
    <span class="label label-danger">Danger</span>\n\
</h3>\n\
<h4>\n\
    <span class="label label-default">Default</span>\n\
    <span class="label label-primary">Primary</span>\n\
    <span class="label label-success">Success</span>\n\
    <span class="label label-info">Info</span>\n\
    <span class="label label-warning">Warning</span>\n\
    <span class="label label-danger">Danger</span>\n\
</h4>\n\
<h5>\n\
    <span class="label label-default">Default</span>\n\
    <span class="label label-primary">Primary</span>\n\
    <span class="label label-success">Success</span>\n\
    <span class="label label-info">Info</span>\n\
    <span class="label label-warning">Warning</span>\n\
    <span class="label label-danger">Danger</span>\n\
</h5>\n\
<h6>\n\
    <span class="label label-default">Default</span>\n\
    <span class="label label-primary">Primary</span>\n\
    <span class="label label-success">Success</span>\n\
    <span class="label label-info">Info</span>\n\
    <span class="label label-warning">Warning</span>\n\
    <span class="label label-danger">Danger</span>\n\
</h6>\n\
<p>\n\
    <span class="label label-default">Default</span>\n\
    <span class="label label-primary">Primary</span>\n\
    <span class="label label-success">Success</span>\n\
    <span class="label label-info">Info</span>\n\
    <span class="label label-warning">Warning</span>\n\
    <span class="label label-danger">Danger</span>\n\
</p>\n\
<div class="page-header">\n\
    <h1>Badges</h1>\n\
</div>\n\
<p>\n\
    <a href="#">Inbox <span class="badge">42</span></a>\n\
</p>\n\
<ul class="nav nav-pills" role="tablist">\n\
    <li role="presentation" class="active"><a href="#">Home <span class="badge">42</span></a></li>\n\
    <li role="presentation"><a href="#">Profile</a></li>\n\
    <li role="presentation"><a href="#">Messages <span class="badge">3</span></a></li>\n\
</ul>\n\
<div class="page-header">\n\
    <h1>Dropdown menus</h1>\n\
</div>\n\
<div class="clearfix dropdown theme-dropdown">\n\
    <a id="dropdownMenu1" href="#" class="dropdown-toggle sr-only" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>\n\
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">\n\
        <li class="active"><a href="#">Action</a></li>\n\
        <li><a href="#">Another action</a></li>\n\
        <li><a href="#">Something else here</a></li>\n\
        <li role="separator" class="divider"></li>\n\
        <li><a href="#">Separated link</a></li>\n\
    </ul>\n\
</div>\n\
<div class="page-header">\n\
    <h1>Navs</h1>\n\
</div>\n\
<ul class="nav nav-tabs" role="tablist">\n\
    <li role="presentation" class="active"><a href="#">Home</a></li>\n\
    <li role="presentation"><a href="#">Profile</a></li>\n\
    <li role="presentation"><a href="#">Messages</a></li>\n\
</ul>\n\
<ul class="nav nav-pills" role="tablist">\n\
    <li role="presentation" class="active"><a href="#">Home</a></li>\n\
    <li role="presentation"><a href="#">Profile</a></li>\n\
    <li role="presentation"><a href="#">Messages</a></li>\n\
</ul>\n\
<div class="page-header">\n\
    <h1>Navbars</h1>\n\
</div>\n\
<nav class="navbar navbar-default">\n\
    <div class="container">\n\
        <div class="navbar-header">\n\
            <button type="button" class="collapsed navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n\
                <span class="sr-only">Toggle navigation</span>\n\
                <span class="icon-bar"></span>\n\
                <span class="icon-bar"></span>\n\
                <span class="icon-bar"></span>\n\
            </button>\n\
            <a class="navbar-brand" href="#">Project name</a>\n\
        </div>\n\
        <div class="collapse navbar-collapse">\n\
            <ul class="nav navbar-nav">\n\
                <li class="active"><a href="#">Home</a></li>\n\
                <li><a href="#about">About</a></li>\n\
                <li><a href="#contact">Contact</a></li>\n\
                <li class="dropdown">\n\
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>\n\
                    <ul class="dropdown-menu">\n\
                        <li><a href="#">Action</a></li>\n\
                        <li><a href="#">Another action</a></li>\n\
                        <li><a href="#">Something else here</a></li>\n\
                        <li role="separator" class="divider"></li>\n\
                        <li class="dropdown-header">Nav header</li>\n\
                        <li><a href="#">Separated link</a></li>\n\
                        <li><a href="#">One more separated link</a></li>\n\
                    </ul>\n\
                </li>\n\
            </ul>\n\
        </div><!--/.nav-collapse -->\n\
    </div>\n\
</nav>\n\
<nav class="navbar navbar-inverse">\n\
    <div class="container">\n\
        <div class="navbar-header">\n\
            <button type="button" class="collapsed navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n\
                <span class="sr-only">Toggle navigation</span>\n\
                <span class="icon-bar"></span>\n\
                <span class="icon-bar"></span>\n\
                <span class="icon-bar"></span>\n\
            </button>\n\
            <a class="navbar-brand" href="#">Project name</a>\n\
        </div>\n\
        <div class="collapse navbar-collapse">\n\
            <ul class="nav navbar-nav">\n\
                <li class="active"><a href="#">Home</a></li>\n\
                <li><a href="#about">About</a></li>\n\
                <li><a href="#contact">Contact</a></li>\n\
                <li class="dropdown">\n\
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>\n\
                    <ul class="dropdown-menu">\n\
                        <li><a href="#">Action</a></li>\n\
                        <li><a href="#">Another action</a></li>\n\
                        <li><a href="#">Something else here</a></li>\n\
                        <li role="separator" class="divider"></li>\n\
                        <li class="dropdown-header">Nav header</li>\n\
                        <li><a href="#">Separated link</a></li>\n\
                        <li><a href="#">One more separated link</a></li>\n\
                    </ul>\n\
                </li>\n\
            </ul>\n\
        </div><!--/.nav-collapse -->\n\
    </div>\n\
</nav>\n\
<div class="page-header">\n\
    <h1>Alerts</h1>\n\
</div>\n\
<div class="alert alert-success" role="alert">\n\
    <strong>Well done!</strong> You successfully read this important alert message.\n\
</div>\n\
<div class="alert alert-info" role="alert">\n\
    <strong>Heads up!</strong> This alert needs your attention, but it\'s not super important.\n\
</div>\n\
<div class="alert alert-warning" role="alert">\n\
    <strong>Warning!</strong> Best check yo self, you\'re not looking too good.\n\
</div>\n\
<div class="alert alert-danger" role="alert">\n\
    <strong>Oh snap!</strong> Change a few things up and try submitting again.\n\
</div>\n\
<div class="page-header">\n\
    <h1>Progress bars</h1>\n\
</div>\n\
<div class="progress">\n\
    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div>\n\
</div>\n\
<div class="progress">\n\
    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"><span class="sr-only">40% Complete (success)</span></div>\n\
</div>\n\
<div class="progress">\n\
    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"><span class="sr-only">20% Complete</span></div>\n\
</div>\n\
<div class="progress">\n\
    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"><span class="sr-only">60% Complete (warning)</span></div>\n\
</div>\n\
<div class="progress">\n\
    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"><span class="sr-only">80% Complete (danger)</span></div>\n\
</div>\n\
<div class="progress">\n\
    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"><span class="sr-only">60% Complete</span></div>\n\
</div>\n\
<div class="progress">\n\
    <div class="progress-bar progress-bar-success" style="width: 35%"><span class="sr-only">35% Complete (success)</span></div>\n\
    <div class="progress-bar progress-bar-warning" style="width: 20%"><span class="sr-only">20% Complete (warning)</span></div>\n\
    <div class="progress-bar progress-bar-danger" style="width: 10%"><span class="sr-only">10% Complete (danger)</span></div>\n\
</div>\n\
<div class="page-header">\n\
    <h1>List groups</h1>\n\
</div>\n\
<div class="row">\n\
    <div class="col-sm-4">\n\
        <ul class="list-group">\n\
            <li class="list-group-item">Cras justo odio</li>\n\
            <li class="list-group-item">Dapibus ac facilisis in</li>\n\
            <li class="list-group-item">Morbi leo risus</li>\n\
            <li class="list-group-item">Porta ac consectetur ac</li>\n\
            <li class="list-group-item">Vestibulum at eros</li>\n\
        </ul>\n\
    </div><!-- /.col-sm-4 -->\n\
    <div class="col-sm-4">\n\
        <div class="list-group">\n\
            <a href="#" class="active list-group-item">\n\
                Cras justo odio\n\
            </a>\n\
            <a href="#" class="list-group-item">Dapibus ac facilisis in</a>\n\
            <a href="#" class="list-group-item">Morbi leo risus</a>\n\
            <a href="#" class="list-group-item">Porta ac consectetur ac</a>\n\
            <a href="#" class="list-group-item">Vestibulum at eros</a>\n\
        </div>\n\
    </div><!-- /.col-sm-4 -->\n\
    <div class="col-sm-4">\n\
        <div class="list-group">\n\
            <a href="#" class="active list-group-item">\n\
                <h4 class="list-group-item-heading">List group item heading</h4>\n\
                <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n\
            </a>\n\
            <a href="#" class="list-group-item">\n\
                <h4 class="list-group-item-heading">List group item heading</h4>\n\
                <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n\
            </a>\n\
            <a href="#" class="list-group-item">\n\
                <h4 class="list-group-item-heading">List group item heading</h4>\n\
                <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n\
            </a>\n\
        </div>\n\
    </div><!-- /.col-sm-4 -->\n\
</div>\n\
<div class="page-header">\n\
    <h1>Panels</h1>\n\
</div>\n\
<div class="row">\n\
    <div class="col-sm-4">\n\
        <div class="panel panel-default">\n\
            <div class="panel-heading">\n\
                <h3 class="panel-title">Panel title</h3>\n\
            </div>\n\
            <div class="panel-body">\n\
                Panel content\n\
            </div>\n\
        </div>\n\
        <div class="panel panel-primary">\n\
            <div class="panel-heading">\n\
                <h3 class="panel-title">Panel title</h3>\n\
            </div>\n\
            <div class="panel-body">\n\
                Panel content\n\
            </div>\n\
        </div>\n\
    </div><!-- /.col-sm-4 -->\n\
    <div class="col-sm-4">\n\
        <div class="panel panel-success">\n\
            <div class="panel-heading">\n\
                <h3 class="panel-title">Panel title</h3>\n\
            </div>\n\
            <div class="panel-body">\n\
                Panel content\n\
            </div>\n\
        </div>\n\
        <div class="panel panel-info">\n\
            <div class="panel-heading">\n\
                <h3 class="panel-title">Panel title</h3>\n\
            </div>\n\
            <div class="panel-body">\n\
                Panel content\n\
            </div>\n\
        </div>\n\
    </div><!-- /.col-sm-4 -->\n\
    <div class="col-sm-4">\n\
        <div class="panel panel-warning">\n\
            <div class="panel-heading">\n\
                <h3 class="panel-title">Panel title</h3>\n\
            </div>\n\
            <div class="panel-body">\n\
                Panel content\n\
            </div>\n\
        </div>\n\
        <div class="panel panel-danger">\n\
            <div class="panel-heading">\n\
                <h3 class="panel-title">Panel title</h3>\n\
            </div>\n\
            <div class="panel-body">\n\
                Panel content\n\
            </div>\n\
        </div>\n\
    </div><!-- /.col-sm-4 -->\n\
</div>\n\
<div class="page-header">\n\
    <h1>Wells</h1>\n\
</div>\n\
<div class="well">\n\
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>\n\
</div>\n\
<div class="page-header">\n\
    <h1>Carousel</h1>\n\
</div>\n\
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\n\
    <ol class="carousel-indicators">\n\
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\n\
        <li data-target="#carousel-example-generic" data-slide-to="1" class=""></li>\n\
        <li data-target="#carousel-example-generic" data-slide-to="2" class=""></li>\n\
    </ol>\n\
    <div class="carousel-inner" role="listbox">\n\
        <div class="active item">\n\
            <img data-src="holder.js/1140x500/auto/#777:#555/text:First slide" alt="First slide [1140x500]" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTE0MCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxMTQwIDUwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvMTE0MHg1MDAvYXV0by8jNzc3OiM1NTUvdGV4dDpGaXJzdCBzbGlkZQpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNi4wLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsjaG9sZGVyXzE2NTMwY2ZjZGFlIHRleHQgeyBmaWxsOiM1NTU7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtmb250LXNpemU6NTdwdCB9IF1dPjwvc3R5bGU+PC9kZWZzPjxnIGlkPSJob2xkZXJfMTY1MzBjZmNkYWUiPjxyZWN0IHdpZHRoPSIxMTQwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzc3NyIvPjxnPjx0ZXh0IHg9IjM5MC41MDc4MTI1IiB5PSIyNzUuMzk2ODc1Ij5GaXJzdCBzbGlkZTwvdGV4dD48L2c+PC9nPjwvc3ZnPg==" data-holder-rendered="true">\n\
        </div>\n\
        <div class="item">\n\
            <img data-src="holder.js/1140x500/auto/#666:#444/text:Second slide" alt="Second slide [1140x500]" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTE0MCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxMTQwIDUwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvMTE0MHg1MDAvYXV0by8jNjY2OiM0NDQvdGV4dDpTZWNvbmQgc2xpZGUKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNjUzMGNmNzAxOSB0ZXh0IHsgZmlsbDojNDQ0O2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjU3cHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE2NTMwY2Y3MDE5Ij48cmVjdCB3aWR0aD0iMTE0MCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiM2NjYiLz48Zz48dGV4dCB4PSIzMzUuNjAxNTYyNSIgeT0iMjc1LjM5Njg3NSI+U2Vjb25kIHNsaWRlPC90ZXh0PjwvZz48L2c+PC9zdmc+" data-holder-rendered="true">\n\
        </div>\n\
        <div class="item">\n\
            <img data-src="holder.js/1140x500/auto/#555:#333/text:Third slide" alt="Third slide [1140x500]" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTE0MCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxMTQwIDUwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvMTE0MHg1MDAvYXV0by8jNTU1OiMzMzMvdGV4dDpUaGlyZCBzbGlkZQpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNi4wLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsjaG9sZGVyXzE2NTMwY2ZjYzFjIHRleHQgeyBmaWxsOiMzMzM7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtmb250LXNpemU6NTdwdCB9IF1dPjwvc3R5bGU+PC9kZWZzPjxnIGlkPSJob2xkZXJfMTY1MzBjZmNjMWMiPjxyZWN0IHdpZHRoPSIxMTQwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzU1NSIvPjxnPjx0ZXh0IHg9IjM3Ny44NjcxODc1IiB5PSIyNzUuMzk2ODc1Ij5UaGlyZCBzbGlkZTwvdGV4dD48L2c+PC9nPjwvc3ZnPg==" data-holder-rendered="true">\n\
        </div>\n\
    </div>\n\
    <a class="carousel-control left" href="#carousel-example-generic" role="button" data-slide="prev">\n\
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\n\
        <span class="sr-only">Previous</span>\n\
    </a>\n\
    <a class="carousel-control right" href="#carousel-example-generic" role="button" data-slide="next">\n\
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\n\
        <span class="sr-only">Next</span>\n\
    </a>\n\
</div>\n\
\n\
\n\
\n\
        </div>\n\
    </div>\n\
</div>\n\
<!-- Bootstrap core JavaScript\n\
================================================== -->\n\
<!-- Placed at the end of the document so the pages load faster -->\n\
<script src="assets.bootstrap-v3.4.0.rollup.min.js"></script>\n\
</body>\n\
</html>\n\
';
/* jslint ignore:end */
local.assetsDict["/assets.bootstrap.js"] = (
    local.assetsDict["/assets.bootstrap.js"]
    || local.fs.readFileSync(
        local.__dirname + "/lib.bootstrap.js",
        "utf8"
    ).replace((
        /^#!\//
    ), "// ")
);
/* validateLineSortedReset */
local.assetsDict["/"] = local.assetsDict[
    "/assets.index.template.html"
].replace((
    /\{\{env\.(\w+?)\}\}/g
), function (match0, match1) {
    switch (match1) {
    case "npm_package_description":
        return "the greatest app in the world!";
    case "npm_package_name":
        return "bootstrap-lite";
    case "npm_package_nameLib":
        return "bootstrap";
    case "npm_package_version":
        return "0.0.1";
    default:
        return match0;
    }
});
local.assetsDict["/assets.example.html"] = local.assetsDict["/"];
// init cli
if (module !== require.main || globalThis.utility2_rollup) {
    return;
}
local.assetsDict["/assets.example.js"] = (
    local.assetsDict["/assets.example.js"]
    || local.fs.readFileSync(__filename, "utf8")
);
local.assetsDict["/favicon.ico"] = local.assetsDict["/favicon.ico"] || "";
local.assetsDict["/index.html"] = local.assetsDict["/"];
// if $npm_config_timeout_exit exists,
// then exit this process after $npm_config_timeout_exit ms
if (Number(process.env.npm_config_timeout_exit)) {
    setTimeout(process.exit, Number(process.env.npm_config_timeout_exit));
}
// start server
if (globalThis.utility2_serverHttp1) {
    return;
}
process.env.PORT = process.env.PORT || "8081";
console.error("http-server listening on port " + process.env.PORT);
local.http.createServer(function (req, res) {
    req.urlParsed = local.url.parse(req.url);
    if (local.assetsDict[req.urlParsed.pathname] !== undefined) {
        res.end(local.assetsDict[req.urlParsed.pathname]);
        return;
    }
    res.statusCode = 404;
    res.end();
}).listen(process.env.PORT);
}());
}());
```

#### output from browser
[![screenshot](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.testExampleJs.browser.%252F.png)](https://kaizhu256.github.io/node-bootstrap-lite/build/app/assets.example.html)

#### output from shell
![screenshot](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.testExampleJs.svg)



# extra screenshots
1. [https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fapidoc.html.png](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fapidoc.html.png)
[![screenshot](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fapidoc.html.png)](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fapidoc.html.png)

1. [https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fcoverage.lib.html.png](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fcoverage.lib.html.png)
[![screenshot](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fcoverage.lib.html.png)](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fcoverage.lib.html.png)

1. [https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Ftest-report.html.png](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Ftest-report.html.png)
[![screenshot](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Ftest-report.html.png)](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Ftest-report.html.png)

1. [https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.deployGithub.browser.%252Fnode-bootstrap-lite%252Fbuild%252Fapp%252Fassets.swgg.html.png](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.deployGithub.browser.%252Fnode-bootstrap-lite%252Fbuild%252Fapp%252Fassets.swgg.html.png)
[![screenshot](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.deployGithub.browser.%252Fnode-bootstrap-lite%252Fbuild%252Fapp%252Fassets.swgg.html.png)](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.deployGithub.browser.%252Fnode-bootstrap-lite%252Fbuild%252Fapp%252Fassets.swgg.html.png)

1. [https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.deployGithub.browser.%252Fnode-bootstrap-lite%252Fbuild%252Fapp.png](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.deployGithub.browser.%252Fnode-bootstrap-lite%252Fbuild%252Fapp.png)
[![screenshot](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.deployGithub.browser.%252Fnode-bootstrap-lite%252Fbuild%252Fapp.png)](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.deployGithub.browser.%252Fnode-bootstrap-lite%252Fbuild%252Fapp.png)

1. [https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.deployGithubTest.browser.%252Fnode-bootstrap-lite%252Fbuild%252Fapp.png](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.deployGithubTest.browser.%252Fnode-bootstrap-lite%252Fbuild%252Fapp.png)
[![screenshot](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.deployGithubTest.browser.%252Fnode-bootstrap-lite%252Fbuild%252Fapp.png)](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.deployGithubTest.browser.%252Fnode-bootstrap-lite%252Fbuild%252Fapp.png)



1. [https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.npmTest.browser.%252F.png](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.npmTest.browser.%252F.png)
[![screenshot](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.npmTest.browser.%252F.png)](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.npmTest.browser.%252F.png)

1. [https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.testExampleJs.browser.%252F.png](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.testExampleJs.browser.%252F.png)
[![screenshot](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.testExampleJs.browser.%252F.png)](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.testExampleJs.browser.%252F.png)

1. [https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.testExampleSh.browser.%252F.png](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.testExampleSh.browser.%252F.png)
[![screenshot](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.testExampleSh.browser.%252F.png)](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.testExampleSh.browser.%252F.png)



# package.json
```json
{
    "assetsList": "assets.bootstrap-v3.4.0.rollup.min.css assets.bootstrap-v3.4.0.rollup.min.js",
    "author": "kai zhu <kaizhu256@gmail.com>",
    "description": "this zero-dependency package will provide 1) a rolled-up css (includes glyphicons and theme), and 2) a rolled-up js (includes jquery) of twitter-bootstrap (v3.4.0), with a working web-demo",
    "devDependencies": {
        "electron-lite": "kaizhu256/node-electron-lite#alpha",
        "utility2": "kaizhu256/node-utility2#alpha"
    },
    "engines": {
        "node": ">=10.0"
    },
    "homepage": "https://github.com/kaizhu256/node-bootstrap-lite",
    "keywords": [],
    "license": "MIT",
    "main": "lib.bootstrap.js",
    "name": "bootstrap-lite",
    "nameAliasPublish": "bootstrap-classic bootstrap3-lite",
    "nameLib": "bootstrap",
    "nameOriginal": "bootstrap-lite",
    "os": [
        "darwin",
        "linux"
    ],
    "repository": {
        "type": "git",
        "url": "https://github.com/kaizhu256/node-bootstrap-lite.git"
    },
    "scripts": {
        "build-ci": "./npm_scripts.sh",
        "env": "env",
        "eval": "./npm_scripts.sh",
        "heroku-postbuild": "./npm_scripts.sh",
        "postinstall": "./npm_scripts.sh",
        "start": "./npm_scripts.sh",
        "test": "./npm_scripts.sh",
        "utility2": "./npm_scripts.sh"
    },
    "version": "2019.8.24"
}
```



# changelog of last 50 commits
[![screenshot](https://kaizhu256.github.io/node-bootstrap-lite/build/screenshot.gitLog.svg)](https://github.com/kaizhu256/node-bootstrap-lite/commits)



# internal build script
- build_ci.sh
```shell
# build_ci.sh

# this shell script will run the build for this package

shBuildCiAfter () {(set -e
    # shDeployCustom
    shDeployGithub
    # shDeployHeroku
    shReadmeTest example.sh
)}

shBuildCiBefore () {(set -e
    shNpmTestPublished
    shReadmeTest example.js
)}

# run shBuildCi
eval "$(utility2 source)"
shBuildCi
```



# misc
- this package was created with [utility2](https://github.com/kaizhu256/node-utility2)
