/*
example.js

this script will run web-demo of bootstrap-lite

instruction
    1. save this script as example.js
    2. run shell-command:
        $ npm install kaizhu256/node-bootstrap-lite#alpha &&             PORT=8081 node example.js

    3. open browser to http://127.0.0.1:8081 and play with web-demo
    4. edit this script to suit your needs
*/


/* istanbul instrument in package bootstrap */
// assets.utility2.header.js - start
/* jslint utility2:true */
/* istanbul ignore next */
// run shared js-env code - init-local
(function () {
    "use strict";
    let consoleError;
    let local;
    // init debugInline
    if (!globalThis.debugInline) {
        consoleError = console.error;
        globalThis.debugInline = function (...argList) {
        /*
         * this function will both print <argList> to stderr
         * and return <argList>[0]
         */
            consoleError("\n\ndebugInline");
            consoleError(...argList);
            consoleError("\n");
            return argList[0];
        };
    }
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
        local.isBrowser && typeof globalThis.importScripts === "function"
    );
    // init function
    local.assertJsonEqual = function (aa, bb) {
    /*
     * this function will assert JSON.stringify(<aa>) === JSON.stringify(<bb>)
     */
        let objectDeepCopyWithKeysSorted;
        objectDeepCopyWithKeysSorted = function (obj) {
        /*
         * this function will recursively deep-copy <obj> with keys sorted
         */
            let sorted;
            if (typeof obj !== "object" || !obj) {
                return obj;
            }
            // recursively deep-copy list with child-keys sorted
            if (Array.isArray(obj)) {
                return obj.map(objectDeepCopyWithKeysSorted);
            }
            // recursively deep-copy obj with keys sorted
            sorted = {};
            Object.keys(obj).sort().forEach(function (key) {
                sorted[key] = objectDeepCopyWithKeysSorted(obj[key]);
            });
            return sorted;
        };
        aa = JSON.stringify(objectDeepCopyWithKeysSorted(aa));
        bb = JSON.stringify(objectDeepCopyWithKeysSorted(bb));
        if (aa !== bb) {
            throw new Error(JSON.stringify(aa) + " !== " + JSON.stringify(bb));
        }
    };
    local.assertOrThrow = function (passed, msg) {
    /*
     * this function will throw <msg> if <passed> is falsy
     */
        if (passed) {
            return;
        }
        throw (
            (
                msg
                && typeof msg.message === "string"
                && typeof msg.stack === "string"
            )
            // if msg is err, then leave as is
            ? msg
            : new Error(
                typeof msg === "string"
                // if msg is string, then leave as is
                ? msg
                // else JSON.stringify(msg)
                : JSON.stringify(msg, undefined, 4)
            )
        );
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
            if (arg !== undefined && arg !== null && arg !== "") {
                return arg;
            }
            ii += 1;
        }
        return arg;
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
    local.objectAssignDefault = function (tgt = {}, src = {}, depth = 0) {
    /*
     * this function will if items from <tgt> are null, undefined, or "",
     * then overwrite them with items from <src>
     */
        let recurse;
        recurse = function (tgt, src, depth) {
            Object.entries(src).forEach(function ([
                key, bb
            ]) {
                let aa;
                aa = tgt[key];
                if (aa === undefined || aa === null || aa === "") {
                    tgt[key] = bb;
                    return;
                }
                if (
                    depth !== 0
                    && typeof aa === "object" && aa && !Array.isArray(aa)
                    && typeof bb === "object" && bb && !Array.isArray(bb)
                ) {
                    recurse(aa, bb, depth - 1);
                }
            });
        };
        recurse(tgt, src, depth | 0);
        return tgt;
    };
    // bug-workaround - throw unhandledRejections in node-process
    if (
        typeof process === "object" && process
        && typeof process.on === "function"
        && process.unhandledRejections !== "strict"
    ) {
        process.unhandledRejections = "strict";
        process.on("unhandledRejection", function (err) {
            throw err;
        });
    }
}());
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


/* istanbul ignore next */
// run node js-env code - init-test
(function () {
if (local.isBrowser) {
    return;
}
// init exports
module.exports = local;
// init assetsDict
local.assetsDict = local.assetsDict || {};
/* jslint ignore:start */
local.assetsDict["/assets.index.template.html"] = '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<!-- "assets.utility2.template.html" -->\n<title>{{env.npm_package_name}} ({{env.npm_package_version}})</title>\n<link href="assets.bootstrap.css" rel="stylesheet">\n<style>\n/* https://github.com/twbs/bootstrap/blob/v3.4.1/docs/examples/dashboard/dashboard.css */\n/*\n * Base structure\n */\n/* Move down content because we have a fixed navbar that is 50px tall */\nbody {\n    padding-top: 50px;\n}\n/*\n * Global add-ons\n */\n.sub-header {\n    padding-bottom: 10px;\n    border-bottom: 1px solid #eee;\n}\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n    border: 0;\n}\n/*\n * Sidebar\n */\n/* Hide for mobile, show later */\n.sidebar {\n    display: none;\n}\n@media (min-width: 768px) {\n    .sidebar {\n        position: fixed;\n        top: 51px;\n        bottom: 0;\n        left: 0;\n        z-index: 1000;\n        display: block;\n        padding: 20px;\n        overflow-x: hidden;\n        overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n        background-color: #f5f5f5;\n        border-right: 1px solid #eee;\n    }\n}\n/* Sidebar navigation */\n.nav-sidebar {\n    margin-right: -21px; /* 20px padding + 1px border */\n    margin-bottom: 20px;\n    margin-left: -20px;\n}\n.nav-sidebar > li > a {\n    padding-right: 20px;\n    padding-left: 20px;\n}\n.nav-sidebar > .active > a,\n.nav-sidebar > .active > a:hover,\n.nav-sidebar > .active > a:focus {\n    color: #fff;\n    background-color: #428bca;\n}\n/*\n * Main content\n */\n.main {\n    padding: 20px;\n}\n@media (min-width: 768px) {\n    .main {\n        padding-right: 40px;\n        padding-left: 40px;\n    }\n}\n.main .page-header {\n    margin-top: 0;\n}\n/*\n * Placeholder dashboard ideas\n */\n.placeholders {\n    margin-bottom: 30px;\n    text-align: center;\n}\n.placeholders h4 {\n    margin-bottom: 0;\n}\n.placeholder {\n    margin-bottom: 20px;\n}\n.placeholder img {\n    display: inline-block;\n    border-radius: 50%;\n}\n.theme-dropdown .dropdown-menu {\n    position: static;\n    display: block;\n    margin-bottom: 20px;\n}\n.theme-showcase > p > .btn {\n    margin: 5px 0;\n}\n/* https://github.com/twbs/bootstrap/blob/v3.4.1/docs/examples/theme/theme.css */\n.theme-showcase .navbar .container {\n    width: auto;\n}\n</style>\n</head>\n<body>\n<!-- https://github.com/twbs/bootstrap/blob/v3.4.1/docs/examples/dashboard/index.html -->\n<nav class="navbar navbar-inverse navbar-fixed-top">\n    <div class="container-fluid">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand" href="#">Project name</a>\n        </div>\n        <div id="navbar" class="navbar-collapse collapse">\n            <ul class="nav navbar-nav navbar-right">\n                <li><a href="#">Dashboard</a></li>\n                <li><a href="#">Settings</a></li>\n                <li><a href="#">Profile</a></li>\n                <li><a href="#">Help</a></li>\n            </ul>\n            <form class="navbar-form navbar-right">\n                <input type="text" class="form-control" placeholder="Search...">\n            </form>\n        </div>\n    </div>\n</nav>\n<div class="container-fluid">\n    <div class="row">\n        <div class="col-sm-3 col-md-2 sidebar">\n            <ul class="nav nav-sidebar">\n                <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>\n                <li><a href="#">Reports</a></li>\n                <li><a href="#">Analytics</a></li>\n                <li><a href="#">Export</a></li>\n            </ul>\n            <ul class="nav nav-sidebar">\n                <li><a href="">Nav item</a></li>\n                <li><a href="">Nav item again</a></li>\n                <li><a href="">One more nav</a></li>\n                <li><a href="">Another nav item</a></li>\n                <li><a href="">More navigation</a></li>\n            </ul>\n            <ul class="nav nav-sidebar">\n                <li><a href="">Nav item again</a></li>\n                <li><a href="">One more nav</a></li>\n                <li><a href="">Another nav item</a></li>\n            </ul>\n        </div>\n        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">\n<!-- https://github.com/twbs/bootstrap/blob/v3.4.1/docs/examples/theme/index.html -->\n<!-- Main jumbotron for a primary marketing message or call to action -->\n<div class="jumbotron">\n    <h1>\n    <!-- utility2-comment\n        <a\n            {{#if env.npm_package_homepage}}\n            href="{{env.npm_package_homepage}}"\n            {{/if env.npm_package_homepage}}\n            target="_blank"\n        >\n    utility2-comment -->\n            {{env.npm_package_name}} ({{env.npm_package_version}})\n    <!-- utility2-comment\n        </a>\n    utility2-comment -->\n    </h1>\n    <p>{{env.npm_package_description}}</p>\n    <!-- utility2-comment\n    utility2-comment -->\n</div>\n\n\n<h1>DataTables</h1>\n<!-- https://github.com/DataTables/DataTables/blob/1.10.20/examples/basic_init/zero_configuration.html -->\n<table id="example" class="display" style="width:100%">\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Position</th>\n            <th>Office</th>\n            <th>Age</th>\n            <th>Start date</th>\n            <th>Salary</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Tiger Nixon</td>\n            <td>System Architect</td>\n            <td>Edinburgh</td>\n            <td>61</td>\n            <td>2011/04/25</td>\n            <td>$320,800</td>\n        </tr>\n        <tr>\n            <td>Garrett Winters</td>\n            <td>Accountant</td>\n            <td>Tokyo</td>\n            <td>63</td>\n            <td>2011/07/25</td>\n            <td>$170,750</td>\n        </tr>\n        <tr>\n            <td>Ashton Cox</td>\n            <td>Junior Technical Author</td>\n            <td>San Francisco</td>\n            <td>66</td>\n            <td>2009/01/12</td>\n            <td>$86,000</td>\n        </tr>\n        <tr>\n            <td>Cedric Kelly</td>\n            <td>Senior Javascript Developer</td>\n            <td>Edinburgh</td>\n            <td>22</td>\n            <td>2012/03/29</td>\n            <td>$433,060</td>\n        </tr>\n        <tr>\n            <td>Airi Satou</td>\n            <td>Accountant</td>\n            <td>Tokyo</td>\n            <td>33</td>\n            <td>2008/11/28</td>\n            <td>$162,700</td>\n        </tr>\n        <tr>\n            <td>Brielle Williamson</td>\n            <td>Integration Specialist</td>\n            <td>New York</td>\n            <td>61</td>\n            <td>2012/12/02</td>\n            <td>$372,000</td>\n        </tr>\n        <tr>\n            <td>Herrod Chandler</td>\n            <td>Sales Assistant</td>\n            <td>San Francisco</td>\n            <td>59</td>\n            <td>2012/08/06</td>\n            <td>$137,500</td>\n        </tr>\n        <tr>\n            <td>Rhona Davidson</td>\n            <td>Integration Specialist</td>\n            <td>Tokyo</td>\n            <td>55</td>\n            <td>2010/10/14</td>\n            <td>$327,900</td>\n        </tr>\n        <tr>\n            <td>Colleen Hurst</td>\n            <td>Javascript Developer</td>\n            <td>San Francisco</td>\n            <td>39</td>\n            <td>2009/09/15</td>\n            <td>$205,500</td>\n        </tr>\n        <tr>\n            <td>Sonya Frost</td>\n            <td>Software Engineer</td>\n            <td>Edinburgh</td>\n            <td>23</td>\n            <td>2008/12/13</td>\n            <td>$103,600</td>\n        </tr>\n        <tr>\n            <td>Jena Gaines</td>\n            <td>Office Manager</td>\n            <td>London</td>\n            <td>30</td>\n            <td>2008/12/19</td>\n            <td>$90,560</td>\n        </tr>\n        <tr>\n            <td>Quinn Flynn</td>\n            <td>Support Lead</td>\n            <td>Edinburgh</td>\n            <td>22</td>\n            <td>2013/03/03</td>\n            <td>$342,000</td>\n        </tr>\n        <tr>\n            <td>Charde Marshall</td>\n            <td>Regional Director</td>\n            <td>San Francisco</td>\n            <td>36</td>\n            <td>2008/10/16</td>\n            <td>$470,600</td>\n        </tr>\n        <tr>\n            <td>Haley Kennedy</td>\n            <td>Senior Marketing Designer</td>\n            <td>London</td>\n            <td>43</td>\n            <td>2012/12/18</td>\n            <td>$313,500</td>\n        </tr>\n        <tr>\n            <td>Tatyana Fitzpatrick</td>\n            <td>Regional Director</td>\n            <td>London</td>\n            <td>19</td>\n            <td>2010/03/17</td>\n            <td>$385,750</td>\n        </tr>\n        <tr>\n            <td>Michael Silva</td>\n            <td>Marketing Designer</td>\n            <td>London</td>\n            <td>66</td>\n            <td>2012/11/27</td>\n            <td>$198,500</td>\n        </tr>\n        <tr>\n            <td>Paul Byrd</td>\n            <td>Chief Financial Officer (CFO)</td>\n            <td>New York</td>\n            <td>64</td>\n            <td>2010/06/09</td>\n            <td>$725,000</td>\n        </tr>\n        <tr>\n            <td>Gloria Little</td>\n            <td>Systems Administrator</td>\n            <td>New York</td>\n            <td>59</td>\n            <td>2009/04/10</td>\n            <td>$237,500</td>\n        </tr>\n        <tr>\n            <td>Bradley Greer</td>\n            <td>Software Engineer</td>\n            <td>London</td>\n            <td>41</td>\n            <td>2012/10/13</td>\n            <td>$132,000</td>\n        </tr>\n        <tr>\n            <td>Dai Rios</td>\n            <td>Personnel Lead</td>\n            <td>Edinburgh</td>\n            <td>35</td>\n            <td>2012/09/26</td>\n            <td>$217,500</td>\n        </tr>\n        <tr>\n            <td>Jenette Caldwell</td>\n            <td>Development Lead</td>\n            <td>New York</td>\n            <td>30</td>\n            <td>2011/09/03</td>\n            <td>$345,000</td>\n        </tr>\n        <tr>\n            <td>Yuri Berry</td>\n            <td>Chief Marketing Officer (CMO)</td>\n            <td>New York</td>\n            <td>40</td>\n            <td>2009/06/25</td>\n            <td>$675,000</td>\n        </tr>\n        <tr>\n            <td>Caesar Vance</td>\n            <td>Pre-Sales Support</td>\n            <td>New York</td>\n            <td>21</td>\n            <td>2011/12/12</td>\n            <td>$106,450</td>\n        </tr>\n        <tr>\n            <td>Doris Wilder</td>\n            <td>Sales Assistant</td>\n            <td>Sidney</td>\n            <td>23</td>\n            <td>2010/09/20</td>\n            <td>$85,600</td>\n        </tr>\n        <tr>\n            <td>Angelica Ramos</td>\n            <td>Chief Executive Officer (CEO)</td>\n            <td>London</td>\n            <td>47</td>\n            <td>2009/10/09</td>\n            <td>$1,200,000</td>\n        </tr>\n        <tr>\n            <td>Gavin Joyce</td>\n            <td>Developer</td>\n            <td>Edinburgh</td>\n            <td>42</td>\n            <td>2010/12/22</td>\n            <td>$92,575</td>\n        </tr>\n        <tr>\n            <td>Jennifer Chang</td>\n            <td>Regional Director</td>\n            <td>Singapore</td>\n            <td>28</td>\n            <td>2010/11/14</td>\n            <td>$357,650</td>\n        </tr>\n        <tr>\n            <td>Brenden Wagner</td>\n            <td>Software Engineer</td>\n            <td>San Francisco</td>\n            <td>28</td>\n            <td>2011/06/07</td>\n            <td>$206,850</td>\n        </tr>\n        <tr>\n            <td>Fiona Green</td>\n            <td>Chief Operating Officer (COO)</td>\n            <td>San Francisco</td>\n            <td>48</td>\n            <td>2010/03/11</td>\n            <td>$850,000</td>\n        </tr>\n        <tr>\n            <td>Shou Itou</td>\n            <td>Regional Marketing</td>\n            <td>Tokyo</td>\n            <td>20</td>\n            <td>2011/08/14</td>\n            <td>$163,000</td>\n        </tr>\n        <tr>\n            <td>Michelle House</td>\n            <td>Integration Specialist</td>\n            <td>Sidney</td>\n            <td>37</td>\n            <td>2011/06/02</td>\n            <td>$95,400</td>\n        </tr>\n        <tr>\n            <td>Suki Burks</td>\n            <td>Developer</td>\n            <td>London</td>\n            <td>53</td>\n            <td>2009/10/22</td>\n            <td>$114,500</td>\n        </tr>\n        <tr>\n            <td>Prescott Bartlett</td>\n            <td>Technical Author</td>\n            <td>London</td>\n            <td>27</td>\n            <td>2011/05/07</td>\n            <td>$145,000</td>\n        </tr>\n        <tr>\n            <td>Gavin Cortez</td>\n            <td>Team Leader</td>\n            <td>San Francisco</td>\n            <td>22</td>\n            <td>2008/10/26</td>\n            <td>$235,500</td>\n        </tr>\n        <tr>\n            <td>Martena Mccray</td>\n            <td>Post-Sales support</td>\n            <td>Edinburgh</td>\n            <td>46</td>\n            <td>2011/03/09</td>\n            <td>$324,050</td>\n        </tr>\n        <tr>\n            <td>Unity Butler</td>\n            <td>Marketing Designer</td>\n            <td>San Francisco</td>\n            <td>47</td>\n            <td>2009/12/09</td>\n            <td>$85,675</td>\n        </tr>\n        <tr>\n            <td>Howard Hatfield</td>\n            <td>Office Manager</td>\n            <td>San Francisco</td>\n            <td>51</td>\n            <td>2008/12/16</td>\n            <td>$164,500</td>\n        </tr>\n        <tr>\n            <td>Hope Fuentes</td>\n            <td>Secretary</td>\n            <td>San Francisco</td>\n            <td>41</td>\n            <td>2010/02/12</td>\n            <td>$109,850</td>\n        </tr>\n        <tr>\n            <td>Vivian Harrell</td>\n            <td>Financial Controller</td>\n            <td>San Francisco</td>\n            <td>62</td>\n            <td>2009/02/14</td>\n            <td>$452,500</td>\n        </tr>\n        <tr>\n            <td>Timothy Mooney</td>\n            <td>Office Manager</td>\n            <td>London</td>\n            <td>37</td>\n            <td>2008/12/11</td>\n            <td>$136,200</td>\n        </tr>\n        <tr>\n            <td>Jackson Bradshaw</td>\n            <td>Director</td>\n            <td>New York</td>\n            <td>65</td>\n            <td>2008/09/26</td>\n            <td>$645,750</td>\n        </tr>\n        <tr>\n            <td>Olivia Liang</td>\n            <td>Support Engineer</td>\n            <td>Singapore</td>\n            <td>64</td>\n            <td>2011/02/03</td>\n            <td>$234,500</td>\n        </tr>\n        <tr>\n            <td>Bruno Nash</td>\n            <td>Software Engineer</td>\n            <td>London</td>\n            <td>38</td>\n            <td>2011/05/03</td>\n            <td>$163,500</td>\n        </tr>\n        <tr>\n            <td>Sakura Yamamoto</td>\n            <td>Support Engineer</td>\n            <td>Tokyo</td>\n            <td>37</td>\n            <td>2009/08/19</td>\n            <td>$139,575</td>\n        </tr>\n        <tr>\n            <td>Thor Walton</td>\n            <td>Developer</td>\n            <td>New York</td>\n            <td>61</td>\n            <td>2013/08/11</td>\n            <td>$98,540</td>\n        </tr>\n        <tr>\n            <td>Finn Camacho</td>\n            <td>Support Engineer</td>\n            <td>San Francisco</td>\n            <td>47</td>\n            <td>2009/07/07</td>\n            <td>$87,500</td>\n        </tr>\n        <tr>\n            <td>Serge Baldwin</td>\n            <td>Data Coordinator</td>\n            <td>Singapore</td>\n            <td>64</td>\n            <td>2012/04/09</td>\n            <td>$138,575</td>\n        </tr>\n        <tr>\n            <td>Zenaida Frank</td>\n            <td>Software Engineer</td>\n            <td>New York</td>\n            <td>63</td>\n            <td>2010/01/04</td>\n            <td>$125,250</td>\n        </tr>\n        <tr>\n            <td>Zorita Serrano</td>\n            <td>Software Engineer</td>\n            <td>San Francisco</td>\n            <td>56</td>\n            <td>2012/06/01</td>\n            <td>$115,000</td>\n        </tr>\n        <tr>\n            <td>Jennifer Acosta</td>\n            <td>Junior Javascript Developer</td>\n            <td>Edinburgh</td>\n            <td>43</td>\n            <td>2013/02/01</td>\n            <td>$75,650</td>\n        </tr>\n        <tr>\n            <td>Cara Stevens</td>\n            <td>Sales Assistant</td>\n            <td>New York</td>\n            <td>46</td>\n            <td>2011/12/06</td>\n            <td>$145,600</td>\n        </tr>\n        <tr>\n            <td>Hermione Butler</td>\n            <td>Regional Director</td>\n            <td>London</td>\n            <td>47</td>\n            <td>2011/03/21</td>\n            <td>$356,250</td>\n        </tr>\n        <tr>\n            <td>Lael Greer</td>\n            <td>Systems Administrator</td>\n            <td>London</td>\n            <td>21</td>\n            <td>2009/02/27</td>\n            <td>$103,500</td>\n        </tr>\n        <tr>\n            <td>Jonas Alexander</td>\n            <td>Developer</td>\n            <td>San Francisco</td>\n            <td>30</td>\n            <td>2010/07/14</td>\n            <td>$86,500</td>\n        </tr>\n        <tr>\n            <td>Shad Decker</td>\n            <td>Regional Director</td>\n            <td>Edinburgh</td>\n            <td>51</td>\n            <td>2008/11/13</td>\n            <td>$183,000</td>\n        </tr>\n        <tr>\n            <td>Michael Bruce</td>\n            <td>Javascript Developer</td>\n            <td>Singapore</td>\n            <td>29</td>\n            <td>2011/06/27</td>\n            <td>$183,000</td>\n        </tr>\n        <tr>\n            <td>Donna Snider</td>\n            <td>Customer Support</td>\n            <td>New York</td>\n            <td>27</td>\n            <td>2011/01/25</td>\n            <td>$112,000</td>\n        </tr>\n    </tbody>\n    <tfoot>\n        <tr>\n            <th>Name</th>\n            <th>Position</th>\n            <th>Office</th>\n            <th>Age</th>\n            <th>Start date</th>\n            <th>Salary</th>\n        </tr>\n    </tfoot>\n</table>\n<br>\n<br>\n<br>\n<h1>Chart.js</h1>\n<!-- https://github.com/chartjs/Chart.js/blob/v2.9.3/samples/charts/line/basic.html -->\n<div style="width:100%;">\n    <canvas id="canvas"></canvas>\n</div>\n<br>\n<br>\n<button id="randomizeData">Randomize Data</button>\n<button id="addDataset">Add Dataset</button>\n<button id="removeDataset">Remove Dataset</button>\n<button id="addData">Add Data</button>\n<button id="removeData">Remove Data</button>\n<br>\n<br>\n<br>\n<h1 class="page-header">Dashboard</h1>\n<div class="row placeholders">\n    <div class="col-xs-6 col-sm-3 placeholder">\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">\n        <h4>Label</h4>\n        <span class="text-muted">Something else</span>\n    </div>\n    <div class="col-xs-6 col-sm-3 placeholder">\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">\n        <h4>Label</h4>\n        <span class="text-muted">Something else</span>\n    </div>\n    <div class="col-xs-6 col-sm-3 placeholder">\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">\n        <h4>Label</h4>\n        <span class="text-muted">Something else</span>\n    </div>\n    <div class="col-xs-6 col-sm-3 placeholder">\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">\n        <h4>Label</h4>\n        <span class="text-muted">Something else</span>\n    </div>\n</div>\n<h2 class="sub-header">Section title</h2>\n<div class="table-responsive">\n    <table class="table table-striped">\n        <thead>\n            <tr>\n                <th>#</th>\n                <th>Header</th>\n                <th>Header</th>\n                <th>Header</th>\n                <th>Header</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>1,001</td>\n                <td>Lorem</td>\n                <td>ipsum</td>\n                <td>dolor</td>\n                <td>sit</td>\n            </tr>\n            <tr>\n                <td>1,002</td>\n                <td>amet</td>\n                <td>consectetur</td>\n                <td>adipiscing</td>\n                <td>elit</td>\n            </tr>\n            <tr>\n                <td>1,003</td>\n                <td>Integer</td>\n                <td>nec</td>\n                <td>odio</td>\n                <td>Praesent</td>\n            </tr>\n            <tr>\n                <td>1,003</td>\n                <td>libero</td>\n                <td>Sed</td>\n                <td>cursus</td>\n                <td>ante</td>\n            </tr>\n            <tr>\n                <td>1,004</td>\n                <td>dapibus</td>\n                <td>diam</td>\n                <td>Sed</td>\n                <td>nisi</td>\n            </tr>\n            <tr>\n                <td>1,005</td>\n                <td>Nulla</td>\n                <td>quis</td>\n                <td>sem</td>\n                <td>at</td>\n            </tr>\n            <tr>\n                <td>1,006</td>\n                <td>nibh</td>\n                <td>elementum</td>\n                <td>imperdiet</td>\n                <td>Duis</td>\n            </tr>\n            <tr>\n                <td>1,007</td>\n                <td>sagittis</td>\n                <td>ipsum</td>\n                <td>Praesent</td>\n                <td>mauris</td>\n            </tr>\n            <tr>\n                <td>1,008</td>\n                <td>Fusce</td>\n                <td>nec</td>\n                <td>tellus</td>\n                <td>sed</td>\n            </tr>\n            <tr>\n                <td>1,009</td>\n                <td>augue</td>\n                <td>semper</td>\n                <td>porta</td>\n                <td>Mauris</td>\n            </tr>\n            <tr>\n                <td>1,010</td>\n                <td>massa</td>\n                <td>Vestibulum</td>\n                <td>lacinia</td>\n                <td>arcu</td>\n            </tr>\n            <tr>\n                <td>1,011</td>\n                <td>eget</td>\n                <td>nulla</td>\n                <td>Class</td>\n                <td>aptent</td>\n            </tr>\n            <tr>\n                <td>1,012</td>\n                <td>taciti</td>\n                <td>sociosqu</td>\n                <td>ad</td>\n                <td>litora</td>\n            </tr>\n            <tr>\n                <td>1,013</td>\n                <td>torquent</td>\n                <td>per</td>\n                <td>conubia</td>\n                <td>nostra</td>\n            </tr>\n            <tr>\n                <td>1,014</td>\n                <td>per</td>\n                <td>inceptos</td>\n                <td>himenaeos</td>\n                <td>Curabitur</td>\n            </tr>\n            <tr>\n                <td>1,015</td>\n                <td>sodales</td>\n                <td>ligula</td>\n                <td>in</td>\n                <td>libero</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n<div class="page-header">\n    <h1>Buttons</h1>\n</div>\n<p>\n    <button type="button" class="btn btn-lg btn-default">Default</button>\n    <button type="button" class="btn btn-lg btn-primary">Primary</button>\n    <button type="button" class="btn btn-lg btn-success">Success</button>\n    <button type="button" class="btn btn-lg btn-info">Info</button>\n    <button type="button" class="btn btn-lg btn-warning">Warning</button>\n    <button type="button" class="btn btn-lg btn-danger">Danger</button>\n    <button type="button" class="btn btn-lg btn-link">Link</button>\n</p>\n<p>\n    <button type="button" class="btn btn-default">Default</button>\n    <button type="button" class="btn btn-primary">Primary</button>\n    <button type="button" class="btn btn-success">Success</button>\n    <button type="button" class="btn btn-info">Info</button>\n    <button type="button" class="btn btn-warning">Warning</button>\n    <button type="button" class="btn btn-danger">Danger</button>\n    <button type="button" class="btn btn-link">Link</button>\n</p>\n<p>\n    <button type="button" class="btn btn-sm btn-default">Default</button>\n    <button type="button" class="btn btn-sm btn-primary">Primary</button>\n    <button type="button" class="btn btn-sm btn-success">Success</button>\n    <button type="button" class="btn btn-sm btn-info">Info</button>\n    <button type="button" class="btn btn-sm btn-warning">Warning</button>\n    <button type="button" class="btn btn-sm btn-danger">Danger</button>\n    <button type="button" class="btn btn-sm btn-link">Link</button>\n</p>\n<p>\n    <button type="button" class="btn btn-xs btn-default">Default</button>\n    <button type="button" class="btn btn-xs btn-primary">Primary</button>\n    <button type="button" class="btn btn-xs btn-success">Success</button>\n    <button type="button" class="btn btn-xs btn-info">Info</button>\n    <button type="button" class="btn btn-xs btn-warning">Warning</button>\n    <button type="button" class="btn btn-xs btn-danger">Danger</button>\n    <button type="button" class="btn btn-xs btn-link">Link</button>\n</p>\n<div class="page-header">\n    <h1>Tables</h1>\n</div>\n<div class="row">\n    <div class="col-md-6">\n        <table class="table">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>First Name</th>\n                    <th>Last Name</th>\n                    <th>Username</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>1</td>\n                    <td>Mark</td>\n                    <td>Otto</td>\n                    <td>@mdo</td>\n                </tr>\n                <tr>\n                    <td>2</td>\n                    <td>Jacob</td>\n                    <td>Thornton</td>\n                    <td>@fat</td>\n                </tr>\n                <tr>\n                    <td>3</td>\n                    <td>Larry</td>\n                    <td>the Bird</td>\n                    <td>@twitter</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class="col-md-6">\n        <table class="table table-striped">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>First Name</th>\n                    <th>Last Name</th>\n                    <th>Username</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>1</td>\n                    <td>Mark</td>\n                    <td>Otto</td>\n                    <td>@mdo</td>\n                </tr>\n                <tr>\n                    <td>2</td>\n                    <td>Jacob</td>\n                    <td>Thornton</td>\n                    <td>@fat</td>\n                </tr>\n                <tr>\n                    <td>3</td>\n                    <td>Larry</td>\n                    <td>the Bird</td>\n                    <td>@twitter</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n<div class="row">\n    <div class="col-md-6">\n        <table class="table table-bordered">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>First Name</th>\n                    <th>Last Name</th>\n                    <th>Username</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td rowspan="2">1</td>\n                    <td>Mark</td>\n                    <td>Otto</td>\n                    <td>@mdo</td>\n                </tr>\n                <tr>\n                    <td>Mark</td>\n                    <td>Otto</td>\n                    <td>@TwBootstrap</td>\n                </tr>\n                <tr>\n                    <td>2</td>\n                    <td>Jacob</td>\n                    <td>Thornton</td>\n                    <td>@fat</td>\n                </tr>\n                <tr>\n                    <td>3</td>\n                    <td colspan="2">Larry the Bird</td>\n                    <td>@twitter</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class="col-md-6">\n        <table class="table table-condensed">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>First Name</th>\n                    <th>Last Name</th>\n                    <th>Username</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>1</td>\n                    <td>Mark</td>\n                    <td>Otto</td>\n                    <td>@mdo</td>\n                </tr>\n                <tr>\n                    <td>2</td>\n                    <td>Jacob</td>\n                    <td>Thornton</td>\n                    <td>@fat</td>\n                </tr>\n                <tr>\n                    <td>3</td>\n                    <td colspan="2">Larry the Bird</td>\n                    <td>@twitter</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n<div class="page-header">\n    <h1>Thumbnails</h1>\n</div>\n<img src="#" data-src="holder.js/200x200" class="img-thumbnail" alt="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera">\n<div class="page-header">\n    <h1>Labels</h1>\n</div>\n<h1>\n    <span class="label label-default">Default</span>\n    <span class="label label-primary">Primary</span>\n    <span class="label label-success">Success</span>\n    <span class="label label-info">Info</span>\n    <span class="label label-warning">Warning</span>\n    <span class="label label-danger">Danger</span>\n</h1>\n<h2>\n    <span class="label label-default">Default</span>\n    <span class="label label-primary">Primary</span>\n    <span class="label label-success">Success</span>\n    <span class="label label-info">Info</span>\n    <span class="label label-warning">Warning</span>\n    <span class="label label-danger">Danger</span>\n</h2>\n<h3>\n    <span class="label label-default">Default</span>\n    <span class="label label-primary">Primary</span>\n    <span class="label label-success">Success</span>\n    <span class="label label-info">Info</span>\n    <span class="label label-warning">Warning</span>\n    <span class="label label-danger">Danger</span>\n</h3>\n<h4>\n    <span class="label label-default">Default</span>\n    <span class="label label-primary">Primary</span>\n    <span class="label label-success">Success</span>\n    <span class="label label-info">Info</span>\n    <span class="label label-warning">Warning</span>\n    <span class="label label-danger">Danger</span>\n</h4>\n<h5>\n    <span class="label label-default">Default</span>\n    <span class="label label-primary">Primary</span>\n    <span class="label label-success">Success</span>\n    <span class="label label-info">Info</span>\n    <span class="label label-warning">Warning</span>\n    <span class="label label-danger">Danger</span>\n</h5>\n<h6>\n    <span class="label label-default">Default</span>\n    <span class="label label-primary">Primary</span>\n    <span class="label label-success">Success</span>\n    <span class="label label-info">Info</span>\n    <span class="label label-warning">Warning</span>\n    <span class="label label-danger">Danger</span>\n</h6>\n<p>\n    <span class="label label-default">Default</span>\n    <span class="label label-primary">Primary</span>\n    <span class="label label-success">Success</span>\n    <span class="label label-info">Info</span>\n    <span class="label label-warning">Warning</span>\n    <span class="label label-danger">Danger</span>\n</p>\n<div class="page-header">\n    <h1>Badges</h1>\n</div>\n<p>\n    <a href="#">Inbox <span class="badge">42</span></a>\n</p>\n<ul class="nav nav-pills" role="tablist">\n    <li role="presentation" class="active"><a href="#">Home <span class="badge">42</span></a></li>\n    <li role="presentation"><a href="#">Profile</a></li>\n    <li role="presentation"><a href="#">Messages <span class="badge">3</span></a></li>\n</ul>\n<div class="page-header">\n    <h1>Dropdown menus</h1>\n</div>\n<div class="dropdown theme-dropdown clearfix">\n    <a id="dropdownMenu1" href="#" class="sr-only dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>\n    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">\n        <li class="active"><a href="#">Action</a></li>\n        <li><a href="#">Another action</a></li>\n        <li><a href="#">Something else here</a></li>\n        <li role="separator" class="divider"></li>\n        <li><a href="#">Separated link</a></li>\n    </ul>\n</div>\n<div class="page-header">\n    <h1>Navs</h1>\n</div>\n<ul class="nav nav-tabs" role="tablist">\n    <li role="presentation" class="active"><a href="#">Home</a></li>\n    <li role="presentation"><a href="#">Profile</a></li>\n    <li role="presentation"><a href="#">Messages</a></li>\n</ul>\n<ul class="nav nav-pills" role="tablist">\n    <li role="presentation" class="active"><a href="#">Home</a></li>\n    <li role="presentation"><a href="#">Profile</a></li>\n    <li role="presentation"><a href="#">Messages</a></li>\n</ul>\n<div class="page-header">\n    <h1>Navbars</h1>\n</div>\n<nav class="navbar navbar-default">\n    <div class="container">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand" href="#">Project name</a>\n        </div>\n        <div class="navbar-collapse collapse">\n            <ul class="nav navbar-nav">\n                <li class="active"><a href="#">Home</a></li>\n                <li><a href="#">About</a></li>\n                <li><a href="#">Contact</a></li>\n                <li class="dropdown">\n                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>\n                    <ul class="dropdown-menu">\n                        <li><a href="#">Action</a></li>\n                        <li><a href="#">Another action</a></li>\n                        <li><a href="#">Something else here</a></li>\n                        <li role="separator" class="divider"></li>\n                        <li class="dropdown-header">Nav header</li>\n                        <li><a href="#">Separated link</a></li>\n                        <li><a href="#">One more separated link</a></li>\n                    </ul>\n                </li>\n            </ul>\n        </div><!--/.nav-collapse -->\n    </div>\n</nav>\n<nav class="navbar navbar-inverse">\n    <div class="container">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand" href="#">Project name</a>\n        </div>\n        <div class="navbar-collapse collapse">\n            <ul class="nav navbar-nav">\n                <li class="active"><a href="#">Home</a></li>\n                <li><a href="#">About</a></li>\n                <li><a href="#">Contact</a></li>\n                <li class="dropdown">\n                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>\n                    <ul class="dropdown-menu">\n                        <li><a href="#">Action</a></li>\n                        <li><a href="#">Another action</a></li>\n                        <li><a href="#">Something else here</a></li>\n                        <li role="separator" class="divider"></li>\n                        <li class="dropdown-header">Nav header</li>\n                        <li><a href="#">Separated link</a></li>\n                        <li><a href="#">One more separated link</a></li>\n                    </ul>\n                </li>\n            </ul>\n        </div><!--/.nav-collapse -->\n    </div>\n</nav>\n<div class="page-header">\n    <h1>Alerts</h1>\n</div>\n<div class="alert alert-success" role="alert">\n    <strong>Well done!</strong> You successfully read this important alert message.\n</div>\n<div class="alert alert-info" role="alert">\n    <strong>Heads up!</strong> This alert needs your attention, but it\'s not super important.\n</div>\n<div class="alert alert-warning" role="alert">\n    <strong>Warning!</strong> Best check yo self, you\'re not looking too good.\n</div>\n<div class="alert alert-danger" role="alert">\n    <strong>Oh snap!</strong> Change a few things up and try submitting again.\n</div>\n<div class="page-header">\n    <h1>Progress bars</h1>\n</div>\n<div class="progress">\n    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div>\n</div>\n<div class="progress">\n    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"><span class="sr-only">40% Complete (success)</span></div>\n</div>\n<div class="progress">\n    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"><span class="sr-only">20% Complete</span></div>\n</div>\n<div class="progress">\n    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"><span class="sr-only">60% Complete (warning)</span></div>\n</div>\n<div class="progress">\n    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"><span class="sr-only">80% Complete (danger)</span></div>\n</div>\n<div class="progress">\n    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"><span class="sr-only">60% Complete</span></div>\n</div>\n<div class="progress">\n    <div class="progress-bar progress-bar-success" style="width: 35%"><span class="sr-only">35% Complete (success)</span></div>\n    <div class="progress-bar progress-bar-warning" style="width: 20%"><span class="sr-only">20% Complete (warning)</span></div>\n    <div class="progress-bar progress-bar-danger" style="width: 10%"><span class="sr-only">10% Complete (danger)</span></div>\n</div>\n<div class="page-header">\n    <h1>List groups</h1>\n</div>\n<div class="row">\n    <div class="col-sm-4">\n        <ul class="list-group">\n            <li class="list-group-item">Cras justo odio</li>\n            <li class="list-group-item">Dapibus ac facilisis in</li>\n            <li class="list-group-item">Morbi leo risus</li>\n            <li class="list-group-item">Porta ac consectetur ac</li>\n            <li class="list-group-item">Vestibulum at eros</li>\n        </ul>\n    </div><!-- /.col-sm-4 -->\n    <div class="col-sm-4">\n        <div class="list-group">\n            <a href="#" class="list-group-item active">\n                Cras justo odio\n            </a>\n            <a href="#" class="list-group-item">Dapibus ac facilisis in</a>\n            <a href="#" class="list-group-item">Morbi leo risus</a>\n            <a href="#" class="list-group-item">Porta ac consectetur ac</a>\n            <a href="#" class="list-group-item">Vestibulum at eros</a>\n        </div>\n    </div><!-- /.col-sm-4 -->\n    <div class="col-sm-4">\n        <div class="list-group">\n            <a href="#" class="list-group-item active">\n                <h4 class="list-group-item-heading">List group item heading</h4>\n                <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n            </a>\n            <a href="#" class="list-group-item">\n                <h4 class="list-group-item-heading">List group item heading</h4>\n                <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n            </a>\n            <a href="#" class="list-group-item">\n                <h4 class="list-group-item-heading">List group item heading</h4>\n                <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n            </a>\n        </div>\n    </div><!-- /.col-sm-4 -->\n</div>\n<div class="page-header">\n    <h1>Panels</h1>\n</div>\n<div class="row">\n    <div class="col-sm-4">\n        <div class="panel panel-default">\n            <div class="panel-heading">\n                <h3 class="panel-title">Panel title</h3>\n            </div>\n            <div class="panel-body">\n                Panel content\n            </div>\n        </div>\n        <div class="panel panel-primary">\n            <div class="panel-heading">\n                <h3 class="panel-title">Panel title</h3>\n            </div>\n            <div class="panel-body">\n                Panel content\n            </div>\n        </div>\n    </div><!-- /.col-sm-4 -->\n    <div class="col-sm-4">\n        <div class="panel panel-success">\n            <div class="panel-heading">\n                <h3 class="panel-title">Panel title</h3>\n            </div>\n            <div class="panel-body">\n                Panel content\n            </div>\n        </div>\n        <div class="panel panel-info">\n            <div class="panel-heading">\n                <h3 class="panel-title">Panel title</h3>\n            </div>\n            <div class="panel-body">\n                Panel content\n            </div>\n        </div>\n    </div><!-- /.col-sm-4 -->\n    <div class="col-sm-4">\n        <div class="panel panel-warning">\n            <div class="panel-heading">\n                <h3 class="panel-title">Panel title</h3>\n            </div>\n            <div class="panel-body">\n                Panel content\n            </div>\n        </div>\n        <div class="panel panel-danger">\n            <div class="panel-heading">\n                <h3 class="panel-title">Panel title</h3>\n            </div>\n            <div class="panel-body">\n                Panel content\n            </div>\n        </div>\n    </div><!-- /.col-sm-4 -->\n</div>\n<div class="page-header">\n    <h1>Wells</h1>\n</div>\n<div class="well">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>\n</div>\n<div class="page-header">\n    <h1>Carousel</h1>\n</div>\n<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\n    <ol class="carousel-indicators">\n        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\n        <li data-target="#carousel-example-generic" data-slide-to="1"></li>\n        <li data-target="#carousel-example-generic" data-slide-to="2"></li>\n    </ol>\n    <div class="carousel-inner" role="listbox">\n        <div class="item active">\n            <img src="#" data-src="holder.js/1140x500/auto/#777:#555/text:First slide" alt="First slide">\n        </div>\n        <div class="item">\n            <img src="#" data-src="holder.js/1140x500/auto/#666:#444/text:Second slide" alt="Second slide">\n        </div>\n        <div class="item">\n            <img src="#" data-src="holder.js/1140x500/auto/#555:#333/text:Third slide" alt="Third slide">\n        </div>\n    </div>\n    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">\n        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\n        <span class="sr-only">Previous</span>\n    </a>\n    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">\n        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\n        <span class="sr-only">Next</span>\n    </a>\n</div>\n        </div>\n    </div>\n</div>\n<!-- Bootstrap core JavaScript\n================================================== -->\n<!-- Placed at the end of the document so the pages load faster -->\n<script src="assets.bootstrap.js"></script>\n<script>\n// https://github.com/DataTables/DataTables/blob/1.10.20/examples/basic_init/zero_configuration.html\n$(document).ready(function() {\n    $(\'#example\').DataTable();\n});\n</script>\n<script>\n// https://github.com/chartjs/Chart.js/blob/v2.9.3/samples/utils.js\n\'use strict\';\nwindow.chartColors = {\n	red: \'rgb(255, 99, 132)\',\n	orange: \'rgb(255, 159, 64)\',\n	yellow: \'rgb(255, 205, 86)\',\n	green: \'rgb(75, 192, 192)\',\n	blue: \'rgb(54, 162, 235)\',\n	purple: \'rgb(153, 102, 255)\',\n	grey: \'rgb(201, 203, 207)\'\n};\n(function(global) {\n	var MONTHS = [\n		\'January\',\n		\'February\',\n		\'March\',\n		\'April\',\n		\'May\',\n		\'June\',\n		\'July\',\n		\'August\',\n		\'September\',\n		\'October\',\n		\'November\',\n		\'December\'\n	];\n	var COLORS = [\n		\'#4dc9f6\',\n		\'#f67019\',\n		\'#f53794\',\n		\'#537bc4\',\n		\'#acc236\',\n		\'#166a8f\',\n		\'#00a950\',\n		\'#58595b\',\n		\'#8549ba\'\n	];\n	var Samples = global.Samples || (global.Samples = {});\n	var Color = global.Color;\n	Samples.utils = {\n		// Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/\n		srand: function(seed) {\n			this._seed = seed;\n		},\n		rand: function(min, max) {\n			var seed = this._seed;\n			min = min === undefined ? 0 : min;\n			max = max === undefined ? 1 : max;\n			this._seed = (seed * 9301 + 49297) % 233280;\n			return min + (this._seed / 233280) * (max - min);\n		},\n		numbers: function(config) {\n			var cfg = config || {};\n			var min = cfg.min || 0;\n			var max = cfg.max || 1;\n			var from = cfg.from || [];\n			var count = cfg.count || 8;\n			var decimals = cfg.decimals || 8;\n			var continuity = cfg.continuity || 1;\n			var dfactor = Math.pow(10, decimals) || 0;\n			var data = [];\n			var i, value;\n			for (i = 0; i < count; ++i) {\n				value = (from[i] || 0) + this.rand(min, max);\n				if (this.rand() <= continuity) {\n					data.push(Math.round(dfactor * value) / dfactor);\n				} else {\n					data.push(null);\n				}\n			}\n			return data;\n		},\n		labels: function(config) {\n			var cfg = config || {};\n			var min = cfg.min || 0;\n			var max = cfg.max || 100;\n			var count = cfg.count || 8;\n			var step = (max - min) / count;\n			var decimals = cfg.decimals || 8;\n			var dfactor = Math.pow(10, decimals) || 0;\n			var prefix = cfg.prefix || \'\';\n			var values = [];\n			var i;\n			for (i = min; i < max; i += step) {\n				values.push(prefix + Math.round(dfactor * i) / dfactor);\n			}\n			return values;\n		},\n		months: function(config) {\n			var cfg = config || {};\n			var count = cfg.count || 12;\n			var section = cfg.section;\n			var values = [];\n			var i, value;\n			for (i = 0; i < count; ++i) {\n				value = MONTHS[Math.ceil(i) % 12];\n				values.push(value.substring(0, section));\n			}\n			return values;\n		},\n		color: function(index) {\n			return COLORS[index % COLORS.length];\n		},\n		transparentize: function(color, opacity) {\n			var alpha = opacity === undefined ? 0.5 : 1 - opacity;\n			return Color(color).alpha(alpha).rgbString();\n		}\n	};\n	// DEPRECATED\n	window.randomScalingFactor = function() {\n		return Math.round(Samples.utils.rand(-100, 100));\n	};\n	// INITIALIZATION\n	Samples.utils.srand(Date.now());\n	// Google Analytics\n	/* eslint-disable */\n	if (document.location.hostname.match(/^(www\\.)?chartjs\\.org$/)) {\n		(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n		})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\n		ga(\'create\', \'UA-28909194-3\', \'auto\');\n		ga(\'send\', \'pageview\');\n	}\n	/* eslint-enable */\n}(this));\n</script>\n<script>\n// https://github.com/chartjs/Chart.js/blob/v2.9.3/samples/charts/line/basic.html\nvar MONTHS = [\'January\', \'February\', \'March\', \'April\', \'May\', \'June\', \'July\', \'August\', \'September\', \'October\', \'November\', \'December\'];\nvar config = {\n    type: \'line\',\n    data: {\n        labels: [\'January\', \'February\', \'March\', \'April\', \'May\', \'June\', \'July\'],\n        datasets: [{\n            label: \'My First dataset\',\n            backgroundColor: window.chartColors.red,\n            borderColor: window.chartColors.red,\n            data: [\n                randomScalingFactor(),\n                randomScalingFactor(),\n                randomScalingFactor(),\n                randomScalingFactor(),\n                randomScalingFactor(),\n                randomScalingFactor(),\n                randomScalingFactor()\n            ],\n            fill: false,\n        }, {\n            label: \'My Second dataset\',\n            fill: false,\n            backgroundColor: window.chartColors.blue,\n            borderColor: window.chartColors.blue,\n            data: [\n                randomScalingFactor(),\n                randomScalingFactor(),\n                randomScalingFactor(),\n                randomScalingFactor(),\n                randomScalingFactor(),\n                randomScalingFactor(),\n                randomScalingFactor()\n            ],\n        }]\n    },\n    options: {\n        responsive: true,\n        title: {\n            display: true,\n            text: \'Chart.js Line Chart\'\n        },\n        tooltips: {\n            mode: \'index\',\n            intersect: false,\n        },\n        hover: {\n            mode: \'nearest\',\n            intersect: true\n        },\n        scales: {\n            xAxes: [{\n                display: true,\n                scaleLabel: {\n                    display: true,\n                    labelString: \'Month\'\n                }\n            }],\n            yAxes: [{\n                display: true,\n                scaleLabel: {\n                    display: true,\n                    labelString: \'Value\'\n                }\n            }]\n        }\n    }\n};\nwindow.onload = function() {\n    var ctx = document.getElementById(\'canvas\').getContext(\'2d\');\n    window.myLine = new Chart(ctx, config);\n};\ndocument.getElementById(\'randomizeData\').addEventListener(\'click\', function() {\n    config.data.datasets.forEach(function(dataset) {\n        dataset.data = dataset.data.map(function() {\n            return randomScalingFactor();\n        });\n    });\n    window.myLine.update();\n});\nvar colorNames = Object.keys(window.chartColors);\ndocument.getElementById(\'addDataset\').addEventListener(\'click\', function() {\n    var colorName = colorNames[config.data.datasets.length % colorNames.length];\n    var newColor = window.chartColors[colorName];\n    var newDataset = {\n        label: \'Dataset \' + config.data.datasets.length,\n        backgroundColor: newColor,\n        borderColor: newColor,\n        data: [],\n        fill: false\n    };\n    for (var index = 0; index < config.data.labels.length; ++index) {\n        newDataset.data.push(randomScalingFactor());\n    }\n    config.data.datasets.push(newDataset);\n    window.myLine.update();\n});\ndocument.getElementById(\'addData\').addEventListener(\'click\', function() {\n    if (config.data.datasets.length > 0) {\n        var month = MONTHS[config.data.labels.length % MONTHS.length];\n        config.data.labels.push(month);\n        config.data.datasets.forEach(function(dataset) {\n            dataset.data.push(randomScalingFactor());\n        });\n        window.myLine.update();\n    }\n});\ndocument.getElementById(\'removeDataset\').addEventListener(\'click\', function() {\n    config.data.datasets.splice(0, 1);\n    window.myLine.update();\n});\ndocument.getElementById(\'removeData\').addEventListener(\'click\', function() {\n    config.data.labels.splice(-1, 1); // remove the label first\n    config.data.datasets.forEach(function(dataset) {\n        dataset.data.pop();\n    });\n    window.myLine.update();\n});\n</script>\n</body>\n</html>\n';






















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































/* jslint ignore:end */
local.assetsDict["/assets.bootstrap.js"] = (
    local.assetsDict["/assets.bootstrap.js"]
    || require("fs").readFileSync(
        require("path").resolve(local.__dirname + "/lib.bootstrap.js"),
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
    || require("fs").readFileSync(__filename, "utf8")
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
require("http").createServer(function (req, res) {
    let data;
    data = local.assetsDict[require("url").parse(req.url).pathname];
    if (data !== undefined) {
        res.end(data);
        return;
    }
    res.statusCode = 404;
    res.end();
}).listen(process.env.PORT);
}());
}());
