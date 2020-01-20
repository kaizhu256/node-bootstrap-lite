







































































































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
    || globalThis.utility2_moduleExports
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
// init assetsDict
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
<link href="assets.bootstrap.css" rel="stylesheet">\n\
<style>\n\
/* https://github.com/twbs/bootstrap/blob/v3.4.1/docs/examples/dashboard/dashboard.css */\n\
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
.theme-dropdown .dropdown-menu {\n\
    position: static;\n\
    display: block;\n\
    margin-bottom: 20px;\n\
}\n\
.theme-showcase > p > .btn {\n\
    margin: 5px 0;\n\
}\n\
/* https://github.com/twbs/bootstrap/blob/v3.4.1/docs/examples/theme/theme.css */\n\
.theme-showcase .navbar .container {\n\
    width: auto;\n\
}\n\
</style>\n\
</head>\n\
<body>\n\
<!-- https://github.com/twbs/bootstrap/blob/v3.4.1/docs/examples/dashboard/index.html -->\n\
<nav class="navbar navbar-inverse navbar-fixed-top">\n\
    <div class="container-fluid">\n\
        <div class="navbar-header">\n\
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n\
                <span class="sr-only">Toggle navigation</span>\n\
                <span class="icon-bar"></span>\n\
                <span class="icon-bar"></span>\n\
                <span class="icon-bar"></span>\n\
            </button>\n\
            <a class="navbar-brand" href="#">Project name</a>\n\
        </div>\n\
        <div id="navbar" class="navbar-collapse collapse">\n\
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
        <div class="col-sm-3 col-md-2 sidebar">\n\
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
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">\n\
<!-- https://github.com/twbs/bootstrap/blob/v3.4.1/docs/examples/theme/index.html -->\n\
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
<div class="row placeholders">\n\
    <div class="col-xs-6 col-sm-3 placeholder">\n\
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">\n\
        <h4>Label</h4>\n\
        <span class="text-muted">Something else</span>\n\
    </div>\n\
    <div class="col-xs-6 col-sm-3 placeholder">\n\
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">\n\
        <h4>Label</h4>\n\
        <span class="text-muted">Something else</span>\n\
    </div>\n\
    <div class="col-xs-6 col-sm-3 placeholder">\n\
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">\n\
        <h4>Label</h4>\n\
        <span class="text-muted">Something else</span>\n\
    </div>\n\
    <div class="col-xs-6 col-sm-3 placeholder">\n\
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
    <button type="button" class="btn btn-lg btn-default">Default</button>\n\
    <button type="button" class="btn btn-lg btn-primary">Primary</button>\n\
    <button type="button" class="btn btn-lg btn-success">Success</button>\n\
    <button type="button" class="btn btn-lg btn-info">Info</button>\n\
    <button type="button" class="btn btn-lg btn-warning">Warning</button>\n\
    <button type="button" class="btn btn-lg btn-danger">Danger</button>\n\
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
    <button type="button" class="btn btn-sm btn-default">Default</button>\n\
    <button type="button" class="btn btn-sm btn-primary">Primary</button>\n\
    <button type="button" class="btn btn-sm btn-success">Success</button>\n\
    <button type="button" class="btn btn-sm btn-info">Info</button>\n\
    <button type="button" class="btn btn-sm btn-warning">Warning</button>\n\
    <button type="button" class="btn btn-sm btn-danger">Danger</button>\n\
    <button type="button" class="btn btn-sm btn-link">Link</button>\n\
</p>\n\
<p>\n\
    <button type="button" class="btn btn-xs btn-default">Default</button>\n\
    <button type="button" class="btn btn-xs btn-primary">Primary</button>\n\
    <button type="button" class="btn btn-xs btn-success">Success</button>\n\
    <button type="button" class="btn btn-xs btn-info">Info</button>\n\
    <button type="button" class="btn btn-xs btn-warning">Warning</button>\n\
    <button type="button" class="btn btn-xs btn-danger">Danger</button>\n\
    <button type="button" class="btn btn-xs btn-link">Link</button>\n\
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
<img src="#" data-src="holder.js/200x200" class="img-thumbnail" alt="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera">\n\
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
<div class="dropdown theme-dropdown clearfix">\n\
    <a id="dropdownMenu1" href="#" class="sr-only dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>\n\
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
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">\n\
                <span class="sr-only">Toggle navigation</span>\n\
                <span class="icon-bar"></span>\n\
                <span class="icon-bar"></span>\n\
                <span class="icon-bar"></span>\n\
            </button>\n\
            <a class="navbar-brand" href="#">Project name</a>\n\
        </div>\n\
        <div class="navbar-collapse collapse">\n\
            <ul class="nav navbar-nav">\n\
                <li class="active"><a href="#">Home</a></li>\n\
                <li><a href="#">About</a></li>\n\
                <li><a href="#">Contact</a></li>\n\
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
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">\n\
                <span class="sr-only">Toggle navigation</span>\n\
                <span class="icon-bar"></span>\n\
                <span class="icon-bar"></span>\n\
                <span class="icon-bar"></span>\n\
            </button>\n\
            <a class="navbar-brand" href="#">Project name</a>\n\
        </div>\n\
        <div class="navbar-collapse collapse">\n\
            <ul class="nav navbar-nav">\n\
                <li class="active"><a href="#">Home</a></li>\n\
                <li><a href="#">About</a></li>\n\
                <li><a href="#">Contact</a></li>\n\
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
            <a href="#" class="list-group-item active">\n\
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
            <a href="#" class="list-group-item active">\n\
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
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>\n\
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>\n\
    </ol>\n\
    <div class="carousel-inner" role="listbox">\n\
        <div class="item active">\n\
            <img src="#" data-src="holder.js/1140x500/auto/#777:#555/text:First slide" alt="First slide">\n\
        </div>\n\
        <div class="item">\n\
            <img src="#" data-src="holder.js/1140x500/auto/#666:#444/text:Second slide" alt="Second slide">\n\
        </div>\n\
        <div class="item">\n\
            <img src="#" data-src="holder.js/1140x500/auto/#555:#333/text:Third slide" alt="Third slide">\n\
        </div>\n\
    </div>\n\
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">\n\
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\n\
        <span class="sr-only">Previous</span>\n\
    </a>\n\
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">\n\
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\n\
        <span class="sr-only">Next</span>\n\
    </a>\n\
</div>\n\
        </div>\n\
    </div>\n\
</div>\n\
<!-- Bootstrap core JavaScript\n\
================================================== -->\n\
<!-- Placed at the end of the document so the pages load faster -->\n\
<script src="assets.bootstrap.js"></script>\n\
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