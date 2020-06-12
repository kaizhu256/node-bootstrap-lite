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
local.assetsDict["/assets.index.template.html"] = '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<!-- "assets.utility2.template.html" -->\n<title>{{env.npm_package_name}} ({{env.npm_package_version}})</title>\n<link href="assets.bootstrap.css" rel="stylesheet">\n<style>\n/* https://github.com/twbs/bootstrap/blob/v3.4.1/docs/examples/dashboard/dashboard.css */\n/*\n * Base structure\n */\n/* Move down content because we have a fixed navbar that is 50px tall */\nbody {\n    padding-top: 50px;\n}\n/*\n * Global add-ons\n */\n.sub-header {\n    padding-bottom: 10px;\n    border-bottom: 1px solid #eee;\n}\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n    border: 0;\n}\n/*\n * Sidebar\n */\n/* Hide for mobile, show later */\n.sidebar {\n    display: none;\n}\n@media (min-width: 768px) {\n    .sidebar {\n        position: fixed;\n        top: 51px;\n        bottom: 0;\n        left: 0;\n        z-index: 1000;\n        display: block;\n        padding: 20px;\n        overflow-x: hidden;\n        overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n        background-color: #f5f5f5;\n        border-right: 1px solid #eee;\n    }\n}\n/* Sidebar navigation */\n.nav-sidebar {\n    margin-right: -21px; /* 20px padding + 1px border */\n    margin-bottom: 20px;\n    margin-left: -20px;\n}\n.nav-sidebar > li > a {\n    padding-right: 20px;\n    padding-left: 20px;\n}\n.nav-sidebar > .active > a,\n.nav-sidebar > .active > a:hover,\n.nav-sidebar > .active > a:focus {\n    color: #fff;\n    background-color: #428bca;\n}\n/*\n * Main content\n */\n.main {\n    padding: 20px;\n}\n@media (min-width: 768px) {\n    .main {\n        padding-right: 40px;\n        padding-left: 40px;\n    }\n}\n.main .page-header {\n    margin-top: 0;\n}\n/*\n * Placeholder dashboard ideas\n */\n.placeholders {\n    margin-bottom: 30px;\n    text-align: center;\n}\n.placeholders h4 {\n    margin-bottom: 0;\n}\n.placeholder {\n    margin-bottom: 20px;\n}\n.placeholder img {\n    display: inline-block;\n    border-radius: 50%;\n}\n.theme-dropdown .dropdown-menu {\n    position: static;\n    display: block;\n    margin-bottom: 20px;\n}\n.theme-showcase > p > .btn {\n    margin: 5px 0;\n}\n/* https://github.com/twbs/bootstrap/blob/v3.4.1/docs/examples/theme/theme.css */\n.theme-showcase .navbar .container {\n    width: auto;\n}\n</style>\n</head>\n<body>\n<!-- https://github.com/twbs/bootstrap/blob/v3.4.1/docs/examples/dashboard/index.html -->\n<nav class="navbar navbar-inverse navbar-fixed-top">\n    <div class="container-fluid">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand" href="#">Project name</a>\n        </div>\n        <div id="navbar" class="navbar-collapse collapse">\n            <ul class="nav navbar-nav navbar-right">\n                <li><a href="#">Dashboard</a></li>\n                <li><a href="#">Settings</a></li>\n                <li><a href="#">Profile</a></li>\n                <li><a href="#">Help</a></li>\n            </ul>\n            <form class="navbar-form navbar-right">\n                <input type="text" class="form-control" placeholder="Search...">\n            </form>\n        </div>\n    </div>\n</nav>\n<div class="container-fluid">\n    <div class="row">\n        <div class="col-sm-3 col-md-2 sidebar">\n            <ul class="nav nav-sidebar">\n                <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>\n                <li><a href="#">Reports</a></li>\n                <li><a href="#">Analytics</a></li>\n                <li><a href="#">Export</a></li>\n            </ul>\n            <ul class="nav nav-sidebar">\n                <li><a href="">Nav item</a></li>\n                <li><a href="">Nav item again</a></li>\n                <li><a href="">One more nav</a></li>\n                <li><a href="">Another nav item</a></li>\n                <li><a href="">More navigation</a></li>\n            </ul>\n            <ul class="nav nav-sidebar">\n                <li><a href="">Nav item again</a></li>\n                <li><a href="">One more nav</a></li>\n                <li><a href="">Another nav item</a></li>\n            </ul>\n        </div>\n        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">\n<!-- https://github.com/twbs/bootstrap/blob/v3.4.1/docs/examples/theme/index.html -->\n<!-- Main jumbotron for a primary marketing message or call to action -->\n<div class="jumbotron">\n    <h1>\n    <!-- utility2-comment\n        <a\n            {{#if env.npm_package_homepage}}\n            href="{{env.npm_package_homepage}}"\n            {{/if env.npm_package_homepage}}\n            target="_blank"\n        >\n    utility2-comment -->\n            {{env.npm_package_name}} ({{env.npm_package_version}})\n    <!-- utility2-comment\n        </a>\n    utility2-comment -->\n    </h1>\n    <p>{{env.npm_package_description}}</p>\n    <!-- utility2-comment\n    utility2-comment -->\n</div>\n\n\n<!-- https://github.com/DataTables/DataTables/blob/1.10.20/examples/basic_init/zero_configuration.html -->\n<h1>DataTables</h1>\n<table id="example" class="display" style="width:100%">\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Position</th>\n            <th>Office</th>\n            <th>Age</th>\n            <th>Start date</th>\n            <th>Salary</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Tiger Nixon</td>\n            <td>System Architect</td>\n            <td>Edinburgh</td>\n            <td>61</td>\n            <td>2011/04/25</td>\n            <td>$320,800</td>\n        </tr>\n        <tr>\n            <td>Garrett Winters</td>\n            <td>Accountant</td>\n            <td>Tokyo</td>\n            <td>63</td>\n            <td>2011/07/25</td>\n            <td>$170,750</td>\n        </tr>\n        <tr>\n            <td>Ashton Cox</td>\n            <td>Junior Technical Author</td>\n            <td>San Francisco</td>\n            <td>66</td>\n            <td>2009/01/12</td>\n            <td>$86,000</td>\n        </tr>\n        <tr>\n            <td>Cedric Kelly</td>\n            <td>Senior Javascript Developer</td>\n            <td>Edinburgh</td>\n            <td>22</td>\n            <td>2012/03/29</td>\n            <td>$433,060</td>\n        </tr>\n        <tr>\n            <td>Airi Satou</td>\n            <td>Accountant</td>\n            <td>Tokyo</td>\n            <td>33</td>\n            <td>2008/11/28</td>\n            <td>$162,700</td>\n        </tr>\n        <tr>\n            <td>Brielle Williamson</td>\n            <td>Integration Specialist</td>\n            <td>New York</td>\n            <td>61</td>\n            <td>2012/12/02</td>\n            <td>$372,000</td>\n        </tr>\n        <tr>\n            <td>Herrod Chandler</td>\n            <td>Sales Assistant</td>\n            <td>San Francisco</td>\n            <td>59</td>\n            <td>2012/08/06</td>\n            <td>$137,500</td>\n        </tr>\n        <tr>\n            <td>Rhona Davidson</td>\n            <td>Integration Specialist</td>\n            <td>Tokyo</td>\n            <td>55</td>\n            <td>2010/10/14</td>\n            <td>$327,900</td>\n        </tr>\n        <tr>\n            <td>Colleen Hurst</td>\n            <td>Javascript Developer</td>\n            <td>San Francisco</td>\n            <td>39</td>\n            <td>2009/09/15</td>\n            <td>$205,500</td>\n        </tr>\n        <tr>\n            <td>Sonya Frost</td>\n            <td>Software Engineer</td>\n            <td>Edinburgh</td>\n            <td>23</td>\n            <td>2008/12/13</td>\n            <td>$103,600</td>\n        </tr>\n        <tr>\n            <td>Jena Gaines</td>\n            <td>Office Manager</td>\n            <td>London</td>\n            <td>30</td>\n            <td>2008/12/19</td>\n            <td>$90,560</td>\n        </tr>\n        <tr>\n            <td>Quinn Flynn</td>\n            <td>Support Lead</td>\n            <td>Edinburgh</td>\n            <td>22</td>\n            <td>2013/03/03</td>\n            <td>$342,000</td>\n        </tr>\n        <tr>\n            <td>Charde Marshall</td>\n            <td>Regional Director</td>\n            <td>San Francisco</td>\n            <td>36</td>\n            <td>2008/10/16</td>\n            <td>$470,600</td>\n        </tr>\n        <tr>\n            <td>Haley Kennedy</td>\n            <td>Senior Marketing Designer</td>\n            <td>London</td>\n            <td>43</td>\n            <td>2012/12/18</td>\n            <td>$313,500</td>\n        </tr>\n        <tr>\n            <td>Tatyana Fitzpatrick</td>\n            <td>Regional Director</td>\n            <td>London</td>\n            <td>19</td>\n            <td>2010/03/17</td>\n            <td>$385,750</td>\n        </tr>\n        <tr>\n            <td>Michael Silva</td>\n            <td>Marketing Designer</td>\n            <td>London</td>\n            <td>66</td>\n            <td>2012/11/27</td>\n            <td>$198,500</td>\n        </tr>\n        <tr>\n            <td>Paul Byrd</td>\n            <td>Chief Financial Officer (CFO)</td>\n            <td>New York</td>\n            <td>64</td>\n            <td>2010/06/09</td>\n            <td>$725,000</td>\n        </tr>\n        <tr>\n            <td>Gloria Little</td>\n            <td>Systems Administrator</td>\n            <td>New York</td>\n            <td>59</td>\n            <td>2009/04/10</td>\n            <td>$237,500</td>\n        </tr>\n        <tr>\n            <td>Bradley Greer</td>\n            <td>Software Engineer</td>\n            <td>London</td>\n            <td>41</td>\n            <td>2012/10/13</td>\n            <td>$132,000</td>\n        </tr>\n        <tr>\n            <td>Dai Rios</td>\n            <td>Personnel Lead</td>\n            <td>Edinburgh</td>\n            <td>35</td>\n            <td>2012/09/26</td>\n            <td>$217,500</td>\n        </tr>\n        <tr>\n            <td>Jenette Caldwell</td>\n            <td>Development Lead</td>\n            <td>New York</td>\n            <td>30</td>\n            <td>2011/09/03</td>\n            <td>$345,000</td>\n        </tr>\n        <tr>\n            <td>Yuri Berry</td>\n            <td>Chief Marketing Officer (CMO)</td>\n            <td>New York</td>\n            <td>40</td>\n            <td>2009/06/25</td>\n            <td>$675,000</td>\n        </tr>\n        <tr>\n            <td>Caesar Vance</td>\n            <td>Pre-Sales Support</td>\n            <td>New York</td>\n            <td>21</td>\n            <td>2011/12/12</td>\n            <td>$106,450</td>\n        </tr>\n        <tr>\n            <td>Doris Wilder</td>\n            <td>Sales Assistant</td>\n            <td>Sidney</td>\n            <td>23</td>\n            <td>2010/09/20</td>\n            <td>$85,600</td>\n        </tr>\n        <tr>\n            <td>Angelica Ramos</td>\n            <td>Chief Executive Officer (CEO)</td>\n            <td>London</td>\n            <td>47</td>\n            <td>2009/10/09</td>\n            <td>$1,200,000</td>\n        </tr>\n        <tr>\n            <td>Gavin Joyce</td>\n            <td>Developer</td>\n            <td>Edinburgh</td>\n            <td>42</td>\n            <td>2010/12/22</td>\n            <td>$92,575</td>\n        </tr>\n        <tr>\n            <td>Jennifer Chang</td>\n            <td>Regional Director</td>\n            <td>Singapore</td>\n            <td>28</td>\n            <td>2010/11/14</td>\n            <td>$357,650</td>\n        </tr>\n        <tr>\n            <td>Brenden Wagner</td>\n            <td>Software Engineer</td>\n            <td>San Francisco</td>\n            <td>28</td>\n            <td>2011/06/07</td>\n            <td>$206,850</td>\n        </tr>\n        <tr>\n            <td>Fiona Green</td>\n            <td>Chief Operating Officer (COO)</td>\n            <td>San Francisco</td>\n            <td>48</td>\n            <td>2010/03/11</td>\n            <td>$850,000</td>\n        </tr>\n        <tr>\n            <td>Shou Itou</td>\n            <td>Regional Marketing</td>\n            <td>Tokyo</td>\n            <td>20</td>\n            <td>2011/08/14</td>\n            <td>$163,000</td>\n        </tr>\n        <tr>\n            <td>Michelle House</td>\n            <td>Integration Specialist</td>\n            <td>Sidney</td>\n            <td>37</td>\n            <td>2011/06/02</td>\n            <td>$95,400</td>\n        </tr>\n        <tr>\n            <td>Suki Burks</td>\n            <td>Developer</td>\n            <td>London</td>\n            <td>53</td>\n            <td>2009/10/22</td>\n            <td>$114,500</td>\n        </tr>\n        <tr>\n            <td>Prescott Bartlett</td>\n            <td>Technical Author</td>\n            <td>London</td>\n            <td>27</td>\n            <td>2011/05/07</td>\n            <td>$145,000</td>\n        </tr>\n        <tr>\n            <td>Gavin Cortez</td>\n            <td>Team Leader</td>\n            <td>San Francisco</td>\n            <td>22</td>\n            <td>2008/10/26</td>\n            <td>$235,500</td>\n        </tr>\n        <tr>\n            <td>Martena Mccray</td>\n            <td>Post-Sales support</td>\n            <td>Edinburgh</td>\n            <td>46</td>\n            <td>2011/03/09</td>\n            <td>$324,050</td>\n        </tr>\n        <tr>\n            <td>Unity Butler</td>\n            <td>Marketing Designer</td>\n            <td>San Francisco</td>\n            <td>47</td>\n            <td>2009/12/09</td>\n            <td>$85,675</td>\n        </tr>\n        <tr>\n            <td>Howard Hatfield</td>\n            <td>Office Manager</td>\n            <td>San Francisco</td>\n            <td>51</td>\n            <td>2008/12/16</td>\n            <td>$164,500</td>\n        </tr>\n        <tr>\n            <td>Hope Fuentes</td>\n            <td>Secretary</td>\n            <td>San Francisco</td>\n            <td>41</td>\n            <td>2010/02/12</td>\n            <td>$109,850</td>\n        </tr>\n        <tr>\n            <td>Vivian Harrell</td>\n            <td>Financial Controller</td>\n            <td>San Francisco</td>\n            <td>62</td>\n            <td>2009/02/14</td>\n            <td>$452,500</td>\n        </tr>\n        <tr>\n            <td>Timothy Mooney</td>\n            <td>Office Manager</td>\n            <td>London</td>\n            <td>37</td>\n            <td>2008/12/11</td>\n            <td>$136,200</td>\n        </tr>\n        <tr>\n            <td>Jackson Bradshaw</td>\n            <td>Director</td>\n            <td>New York</td>\n            <td>65</td>\n            <td>2008/09/26</td>\n            <td>$645,750</td>\n        </tr>\n        <tr>\n            <td>Olivia Liang</td>\n            <td>Support Engineer</td>\n            <td>Singapore</td>\n            <td>64</td>\n            <td>2011/02/03</td>\n            <td>$234,500</td>\n        </tr>\n        <tr>\n            <td>Bruno Nash</td>\n            <td>Software Engineer</td>\n            <td>London</td>\n            <td>38</td>\n            <td>2011/05/03</td>\n            <td>$163,500</td>\n        </tr>\n        <tr>\n            <td>Sakura Yamamoto</td>\n            <td>Support Engineer</td>\n            <td>Tokyo</td>\n            <td>37</td>\n            <td>2009/08/19</td>\n            <td>$139,575</td>\n        </tr>\n        <tr>\n            <td>Thor Walton</td>\n            <td>Developer</td>\n            <td>New York</td>\n            <td>61</td>\n            <td>2013/08/11</td>\n            <td>$98,540</td>\n        </tr>\n        <tr>\n            <td>Finn Camacho</td>\n            <td>Support Engineer</td>\n            <td>San Francisco</td>\n            <td>47</td>\n            <td>2009/07/07</td>\n            <td>$87,500</td>\n        </tr>\n        <tr>\n            <td>Serge Baldwin</td>\n            <td>Data Coordinator</td>\n            <td>Singapore</td>\n            <td>64</td>\n            <td>2012/04/09</td>\n            <td>$138,575</td>\n        </tr>\n        <tr>\n            <td>Zenaida Frank</td>\n            <td>Software Engineer</td>\n            <td>New York</td>\n            <td>63</td>\n            <td>2010/01/04</td>\n            <td>$125,250</td>\n        </tr>\n        <tr>\n            <td>Zorita Serrano</td>\n            <td>Software Engineer</td>\n            <td>San Francisco</td>\n            <td>56</td>\n            <td>2012/06/01</td>\n            <td>$115,000</td>\n        </tr>\n        <tr>\n            <td>Jennifer Acosta</td>\n            <td>Junior Javascript Developer</td>\n            <td>Edinburgh</td>\n            <td>43</td>\n            <td>2013/02/01</td>\n            <td>$75,650</td>\n        </tr>\n        <tr>\n            <td>Cara Stevens</td>\n            <td>Sales Assistant</td>\n            <td>New York</td>\n            <td>46</td>\n            <td>2011/12/06</td>\n            <td>$145,600</td>\n        </tr>\n        <tr>\n            <td>Hermione Butler</td>\n            <td>Regional Director</td>\n            <td>London</td>\n            <td>47</td>\n            <td>2011/03/21</td>\n            <td>$356,250</td>\n        </tr>\n        <tr>\n            <td>Lael Greer</td>\n            <td>Systems Administrator</td>\n            <td>London</td>\n            <td>21</td>\n            <td>2009/02/27</td>\n            <td>$103,500</td>\n        </tr>\n        <tr>\n            <td>Jonas Alexander</td>\n            <td>Developer</td>\n            <td>San Francisco</td>\n            <td>30</td>\n            <td>2010/07/14</td>\n            <td>$86,500</td>\n        </tr>\n        <tr>\n            <td>Shad Decker</td>\n            <td>Regional Director</td>\n            <td>Edinburgh</td>\n            <td>51</td>\n            <td>2008/11/13</td>\n            <td>$183,000</td>\n        </tr>\n        <tr>\n            <td>Michael Bruce</td>\n            <td>Javascript Developer</td>\n            <td>Singapore</td>\n            <td>29</td>\n            <td>2011/06/27</td>\n            <td>$183,000</td>\n        </tr>\n        <tr>\n            <td>Donna Snider</td>\n            <td>Customer Support</td>\n            <td>New York</td>\n            <td>27</td>\n            <td>2011/01/25</td>\n            <td>$112,000</td>\n        </tr>\n    </tbody>\n    <tfoot>\n        <tr>\n            <th>Name</th>\n            <th>Position</th>\n            <th>Office</th>\n            <th>Age</th>\n            <th>Start date</th>\n            <th>Salary</th>\n        </tr>\n    </tfoot>\n</table>\n<br>\n<br>\n<br>\n<!-- https://github.com/chartjs/Chart.js/blob/v2.9.3/samples/charts/line/basic.html -->\n<h1>Chart.js</h1>\n<div style="width:100%;">\n    <canvas id="canvas"></canvas>\n</div>\n<br>\n<br>\n<button id="randomizeData">Randomize Data</button>\n<button id="addDataset">Add Dataset</button>\n<button id="removeDataset">Remove Dataset</button>\n<button id="addData">Add Data</button>\n<button id="removeData">Remove Data</button>\n<br>\n<br>\n<br>\n<!-- https://github.com/twbs/bootstrap/blob/v3.4.1/docs/examples/dashboard/index.html -->\n<h1 class="page-header">Dashboard</h1>\n<span class="glyphicon glyphicon-glass" aria-hidden="true"></span>\n<div class="row placeholders">\n    <div class="col-xs-6 col-sm-3 placeholder">\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">\n        <h4>Label</h4>\n        <span class="text-muted">Something else</span>\n    </div>\n    <div class="col-xs-6 col-sm-3 placeholder">\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">\n        <h4>Label</h4>\n        <span class="text-muted">Something else</span>\n    </div>\n    <div class="col-xs-6 col-sm-3 placeholder">\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">\n        <h4>Label</h4>\n        <span class="text-muted">Something else</span>\n    </div>\n    <div class="col-xs-6 col-sm-3 placeholder">\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">\n        <h4>Label</h4>\n        <span class="text-muted">Something else</span>\n    </div>\n</div>\n<h2 class="sub-header">Section title</h2>\n<div class="table-responsive">\n    <table class="table table-striped">\n        <thead>\n            <tr>\n                <th>#</th>\n                <th>Header</th>\n                <th>Header</th>\n                <th>Header</th>\n                <th>Header</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>1,001</td>\n                <td>Lorem</td>\n                <td>ipsum</td>\n                <td>dolor</td>\n                <td>sit</td>\n            </tr>\n            <tr>\n                <td>1,002</td>\n                <td>amet</td>\n                <td>consectetur</td>\n                <td>adipiscing</td>\n                <td>elit</td>\n            </tr>\n            <tr>\n                <td>1,003</td>\n                <td>Integer</td>\n                <td>nec</td>\n                <td>odio</td>\n                <td>Praesent</td>\n            </tr>\n            <tr>\n                <td>1,003</td>\n                <td>libero</td>\n                <td>Sed</td>\n                <td>cursus</td>\n                <td>ante</td>\n            </tr>\n            <tr>\n                <td>1,004</td>\n                <td>dapibus</td>\n                <td>diam</td>\n                <td>Sed</td>\n                <td>nisi</td>\n            </tr>\n            <tr>\n                <td>1,005</td>\n                <td>Nulla</td>\n                <td>quis</td>\n                <td>sem</td>\n                <td>at</td>\n            </tr>\n            <tr>\n                <td>1,006</td>\n                <td>nibh</td>\n                <td>elementum</td>\n                <td>imperdiet</td>\n                <td>Duis</td>\n            </tr>\n            <tr>\n                <td>1,007</td>\n                <td>sagittis</td>\n                <td>ipsum</td>\n                <td>Praesent</td>\n                <td>mauris</td>\n            </tr>\n            <tr>\n                <td>1,008</td>\n                <td>Fusce</td>\n                <td>nec</td>\n                <td>tellus</td>\n                <td>sed</td>\n            </tr>\n            <tr>\n                <td>1,009</td>\n                <td>augue</td>\n                <td>semper</td>\n                <td>porta</td>\n                <td>Mauris</td>\n            </tr>\n            <tr>\n                <td>1,010</td>\n                <td>massa</td>\n                <td>Vestibulum</td>\n                <td>lacinia</td>\n                <td>arcu</td>\n            </tr>\n            <tr>\n                <td>1,011</td>\n                <td>eget</td>\n                <td>nulla</td>\n                <td>Class</td>\n                <td>aptent</td>\n            </tr>\n            <tr>\n                <td>1,012</td>\n                <td>taciti</td>\n                <td>sociosqu</td>\n                <td>ad</td>\n                <td>litora</td>\n            </tr>\n            <tr>\n                <td>1,013</td>\n                <td>torquent</td>\n                <td>per</td>\n                <td>conubia</td>\n                <td>nostra</td>\n            </tr>\n            <tr>\n                <td>1,014</td>\n                <td>per</td>\n                <td>inceptos</td>\n                <td>himenaeos</td>\n                <td>Curabitur</td>\n            </tr>\n            <tr>\n                <td>1,015</td>\n                <td>sodales</td>\n                <td>ligula</td>\n                <td>in</td>\n                <td>libero</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n<!-- https://raw.githubusercontent.com/twbs/bootstrap/v3.4.1/docs/examples/theme/index.html -->\n<!-- Main jumbotron for a primary marketing message or call to action -->\n<div class="jumbotron">\n    <h1>Theme example</h1>\n    <p>This is a template showcasing the optional theme stylesheet included in Bootstrap. Use it as a starting point to create something more unique by building on or modifying it.</p>\n</div>\n<div class="page-header">\n    <h1>Buttons</h1>\n</div>\n<p>\n    <button type="button" class="btn btn-lg btn-default">Default</button>\n    <button type="button" class="btn btn-lg btn-primary">Primary</button>\n    <button type="button" class="btn btn-lg btn-success">Success</button>\n    <button type="button" class="btn btn-lg btn-info">Info</button>\n    <button type="button" class="btn btn-lg btn-warning">Warning</button>\n    <button type="button" class="btn btn-lg btn-danger">Danger</button>\n    <button type="button" class="btn btn-lg btn-link">Link</button>\n</p>\n<p>\n    <button type="button" class="btn btn-default">Default</button>\n    <button type="button" class="btn btn-primary">Primary</button>\n    <button type="button" class="btn btn-success">Success</button>\n    <button type="button" class="btn btn-info">Info</button>\n    <button type="button" class="btn btn-warning">Warning</button>\n    <button type="button" class="btn btn-danger">Danger</button>\n    <button type="button" class="btn btn-link">Link</button>\n</p>\n<p>\n    <button type="button" class="btn btn-sm btn-default">Default</button>\n    <button type="button" class="btn btn-sm btn-primary">Primary</button>\n    <button type="button" class="btn btn-sm btn-success">Success</button>\n    <button type="button" class="btn btn-sm btn-info">Info</button>\n    <button type="button" class="btn btn-sm btn-warning">Warning</button>\n    <button type="button" class="btn btn-sm btn-danger">Danger</button>\n    <button type="button" class="btn btn-sm btn-link">Link</button>\n</p>\n<p>\n    <button type="button" class="btn btn-xs btn-default">Default</button>\n    <button type="button" class="btn btn-xs btn-primary">Primary</button>\n    <button type="button" class="btn btn-xs btn-success">Success</button>\n    <button type="button" class="btn btn-xs btn-info">Info</button>\n    <button type="button" class="btn btn-xs btn-warning">Warning</button>\n    <button type="button" class="btn btn-xs btn-danger">Danger</button>\n    <button type="button" class="btn btn-xs btn-link">Link</button>\n</p>\n<div class="page-header">\n    <h1>Tables</h1>\n</div>\n<div class="row">\n    <div class="col-md-6">\n        <table class="table">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>First Name</th>\n                    <th>Last Name</th>\n                    <th>Username</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>1</td>\n                    <td>Mark</td>\n                    <td>Otto</td>\n                    <td>@mdo</td>\n                </tr>\n                <tr>\n                    <td>2</td>\n                    <td>Jacob</td>\n                    <td>Thornton</td>\n                    <td>@fat</td>\n                </tr>\n                <tr>\n                    <td>3</td>\n                    <td>Larry</td>\n                    <td>the Bird</td>\n                    <td>@twitter</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class="col-md-6">\n        <table class="table table-striped">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>First Name</th>\n                    <th>Last Name</th>\n                    <th>Username</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>1</td>\n                    <td>Mark</td>\n                    <td>Otto</td>\n                    <td>@mdo</td>\n                </tr>\n                <tr>\n                    <td>2</td>\n                    <td>Jacob</td>\n                    <td>Thornton</td>\n                    <td>@fat</td>\n                </tr>\n                <tr>\n                    <td>3</td>\n                    <td>Larry</td>\n                    <td>the Bird</td>\n                    <td>@twitter</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n<div class="row">\n    <div class="col-md-6">\n        <table class="table table-bordered">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>First Name</th>\n                    <th>Last Name</th>\n                    <th>Username</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td rowspan="2">1</td>\n                    <td>Mark</td>\n                    <td>Otto</td>\n                    <td>@mdo</td>\n                </tr>\n                <tr>\n                    <td>Mark</td>\n                    <td>Otto</td>\n                    <td>@TwBootstrap</td>\n                </tr>\n                <tr>\n                    <td>2</td>\n                    <td>Jacob</td>\n                    <td>Thornton</td>\n                    <td>@fat</td>\n                </tr>\n                <tr>\n                    <td>3</td>\n                    <td colspan="2">Larry the Bird</td>\n                    <td>@twitter</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class="col-md-6">\n        <table class="table table-condensed">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>First Name</th>\n                    <th>Last Name</th>\n                    <th>Username</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>1</td>\n                    <td>Mark</td>\n                    <td>Otto</td>\n                    <td>@mdo</td>\n                </tr>\n                <tr>\n                    <td>2</td>\n                    <td>Jacob</td>\n                    <td>Thornton</td>\n                    <td>@fat</td>\n                </tr>\n                <tr>\n                    <td>3</td>\n                    <td colspan="2">Larry the Bird</td>\n                    <td>@twitter</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n<div class="page-header">\n    <h1>Thumbnails</h1>\n</div>\n<img data-src="holder.js/200x200" class="img-thumbnail" alt="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera">\n<div class="page-header">\n    <h1>Labels</h1>\n</div>\n<h1>\n    <span class="label label-default">Default</span>\n    <span class="label label-primary">Primary</span>\n    <span class="label label-success">Success</span>\n    <span class="label label-info">Info</span>\n    <span class="label label-warning">Warning</span>\n    <span class="label label-danger">Danger</span>\n</h1>\n<h2>\n    <span class="label label-default">Default</span>\n    <span class="label label-primary">Primary</span>\n    <span class="label label-success">Success</span>\n    <span class="label label-info">Info</span>\n    <span class="label label-warning">Warning</span>\n    <span class="label label-danger">Danger</span>\n</h2>\n<h3>\n    <span class="label label-default">Default</span>\n    <span class="label label-primary">Primary</span>\n    <span class="label label-success">Success</span>\n    <span class="label label-info">Info</span>\n    <span class="label label-warning">Warning</span>\n    <span class="label label-danger">Danger</span>\n</h3>\n<h4>\n    <span class="label label-default">Default</span>\n    <span class="label label-primary">Primary</span>\n    <span class="label label-success">Success</span>\n    <span class="label label-info">Info</span>\n    <span class="label label-warning">Warning</span>\n    <span class="label label-danger">Danger</span>\n</h4>\n<h5>\n    <span class="label label-default">Default</span>\n    <span class="label label-primary">Primary</span>\n    <span class="label label-success">Success</span>\n    <span class="label label-info">Info</span>\n    <span class="label label-warning">Warning</span>\n    <span class="label label-danger">Danger</span>\n</h5>\n<h6>\n    <span class="label label-default">Default</span>\n    <span class="label label-primary">Primary</span>\n    <span class="label label-success">Success</span>\n    <span class="label label-info">Info</span>\n    <span class="label label-warning">Warning</span>\n    <span class="label label-danger">Danger</span>\n</h6>\n<p>\n    <span class="label label-default">Default</span>\n    <span class="label label-primary">Primary</span>\n    <span class="label label-success">Success</span>\n    <span class="label label-info">Info</span>\n    <span class="label label-warning">Warning</span>\n    <span class="label label-danger">Danger</span>\n</p>\n<div class="page-header">\n    <h1>Badges</h1>\n</div>\n<p>\n    <a href="#">Inbox <span class="badge">42</span></a>\n</p>\n<ul class="nav nav-pills" role="tablist">\n    <li role="presentation" class="active"><a href="#">Home <span class="badge">42</span></a></li>\n    <li role="presentation"><a href="#">Profile</a></li>\n    <li role="presentation"><a href="#">Messages <span class="badge">3</span></a></li>\n</ul>\n<div class="page-header">\n    <h1>Dropdown menus</h1>\n</div>\n<div class="dropdown theme-dropdown clearfix">\n    <a id="dropdownMenu1" href="#" class="sr-only dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>\n    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">\n        <li class="active"><a href="#">Action</a></li>\n        <li><a href="#">Another action</a></li>\n        <li><a href="#">Something else here</a></li>\n        <li role="separator" class="divider"></li>\n        <li><a href="#">Separated link</a></li>\n    </ul>\n</div>\n<div class="page-header">\n    <h1>Navs</h1>\n</div>\n<ul class="nav nav-tabs" role="tablist">\n    <li role="presentation" class="active"><a href="#">Home</a></li>\n    <li role="presentation"><a href="#">Profile</a></li>\n    <li role="presentation"><a href="#">Messages</a></li>\n</ul>\n<ul class="nav nav-pills" role="tablist">\n    <li role="presentation" class="active"><a href="#">Home</a></li>\n    <li role="presentation"><a href="#">Profile</a></li>\n    <li role="presentation"><a href="#">Messages</a></li>\n</ul>\n<div class="page-header">\n    <h1>Navbars</h1>\n</div>\n<nav class="navbar navbar-default">\n    <div class="container">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand" href="#">Project name</a>\n        </div>\n        <div class="navbar-collapse collapse">\n            <ul class="nav navbar-nav">\n                <li class="active"><a href="#">Home</a></li>\n                <li><a href="#">About</a></li>\n                <li><a href="#">Contact</a></li>\n                <li class="dropdown">\n                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>\n                    <ul class="dropdown-menu">\n                        <li><a href="#">Action</a></li>\n                        <li><a href="#">Another action</a></li>\n                        <li><a href="#">Something else here</a></li>\n                        <li role="separator" class="divider"></li>\n                        <li class="dropdown-header">Nav header</li>\n                        <li><a href="#">Separated link</a></li>\n                        <li><a href="#">One more separated link</a></li>\n                    </ul>\n                </li>\n            </ul>\n        </div><!--/.nav-collapse -->\n    </div>\n</nav>\n<nav class="navbar navbar-inverse">\n    <div class="container">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand" href="#">Project name</a>\n        </div>\n        <div class="navbar-collapse collapse">\n            <ul class="nav navbar-nav">\n                <li class="active"><a href="#">Home</a></li>\n                <li><a href="#">About</a></li>\n                <li><a href="#">Contact</a></li>\n                <li class="dropdown">\n                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>\n                    <ul class="dropdown-menu">\n                        <li><a href="#">Action</a></li>\n                        <li><a href="#">Another action</a></li>\n                        <li><a href="#">Something else here</a></li>\n                        <li role="separator" class="divider"></li>\n                        <li class="dropdown-header">Nav header</li>\n                        <li><a href="#">Separated link</a></li>\n                        <li><a href="#">One more separated link</a></li>\n                    </ul>\n                </li>\n            </ul>\n        </div><!--/.nav-collapse -->\n    </div>\n</nav>\n<div class="page-header">\n    <h1>Alerts</h1>\n</div>\n<div class="alert alert-success" role="alert">\n    <strong>Well done!</strong> You successfully read this important alert message.\n</div>\n<div class="alert alert-info" role="alert">\n    <strong>Heads up!</strong> This alert needs your attention, but it\'s not super important.\n</div>\n<div class="alert alert-warning" role="alert">\n    <strong>Warning!</strong> Best check yo self, you\'re not looking too good.\n</div>\n<div class="alert alert-danger" role="alert">\n    <strong>Oh snap!</strong> Change a few things up and try submitting again.\n</div>\n<div class="page-header">\n    <h1>Progress bars</h1>\n</div>\n<div class="progress">\n    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div>\n</div>\n<div class="progress">\n    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"><span class="sr-only">40% Complete (success)</span></div>\n</div>\n<div class="progress">\n    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"><span class="sr-only">20% Complete</span></div>\n</div>\n<div class="progress">\n    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"><span class="sr-only">60% Complete (warning)</span></div>\n</div>\n<div class="progress">\n    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"><span class="sr-only">80% Complete (danger)</span></div>\n</div>\n<div class="progress">\n    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"><span class="sr-only">60% Complete</span></div>\n</div>\n<div class="progress">\n    <div class="progress-bar progress-bar-success" style="width: 35%"><span class="sr-only">35% Complete (success)</span></div>\n    <div class="progress-bar progress-bar-warning" style="width: 20%"><span class="sr-only">20% Complete (warning)</span></div>\n    <div class="progress-bar progress-bar-danger" style="width: 10%"><span class="sr-only">10% Complete (danger)</span></div>\n</div>\n<div class="page-header">\n    <h1>List groups</h1>\n</div>\n<div class="row">\n    <div class="col-sm-4">\n        <ul class="list-group">\n            <li class="list-group-item">Cras justo odio</li>\n            <li class="list-group-item">Dapibus ac facilisis in</li>\n            <li class="list-group-item">Morbi leo risus</li>\n            <li class="list-group-item">Porta ac consectetur ac</li>\n            <li class="list-group-item">Vestibulum at eros</li>\n        </ul>\n    </div><!-- /.col-sm-4 -->\n    <div class="col-sm-4">\n        <div class="list-group">\n            <a href="#" class="list-group-item active">\n                Cras justo odio\n            </a>\n            <a href="#" class="list-group-item">Dapibus ac facilisis in</a>\n            <a href="#" class="list-group-item">Morbi leo risus</a>\n            <a href="#" class="list-group-item">Porta ac consectetur ac</a>\n            <a href="#" class="list-group-item">Vestibulum at eros</a>\n        </div>\n    </div><!-- /.col-sm-4 -->\n    <div class="col-sm-4">\n        <div class="list-group">\n            <a href="#" class="list-group-item active">\n                <h4 class="list-group-item-heading">List group item heading</h4>\n                <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n            </a>\n            <a href="#" class="list-group-item">\n                <h4 class="list-group-item-heading">List group item heading</h4>\n                <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n            </a>\n            <a href="#" class="list-group-item">\n                <h4 class="list-group-item-heading">List group item heading</h4>\n                <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n            </a>\n        </div>\n    </div><!-- /.col-sm-4 -->\n</div>\n<div class="page-header">\n    <h1>Panels</h1>\n</div>\n<div class="row">\n    <div class="col-sm-4">\n        <div class="panel panel-default">\n            <div class="panel-heading">\n                <h3 class="panel-title">Panel title</h3>\n            </div>\n            <div class="panel-body">\n                Panel content\n            </div>\n        </div>\n        <div class="panel panel-primary">\n            <div class="panel-heading">\n                <h3 class="panel-title">Panel title</h3>\n            </div>\n            <div class="panel-body">\n                Panel content\n            </div>\n        </div>\n    </div><!-- /.col-sm-4 -->\n    <div class="col-sm-4">\n        <div class="panel panel-success">\n            <div class="panel-heading">\n                <h3 class="panel-title">Panel title</h3>\n            </div>\n            <div class="panel-body">\n                Panel content\n            </div>\n        </div>\n        <div class="panel panel-info">\n            <div class="panel-heading">\n                <h3 class="panel-title">Panel title</h3>\n            </div>\n            <div class="panel-body">\n                Panel content\n            </div>\n        </div>\n    </div><!-- /.col-sm-4 -->\n    <div class="col-sm-4">\n        <div class="panel panel-warning">\n            <div class="panel-heading">\n                <h3 class="panel-title">Panel title</h3>\n            </div>\n            <div class="panel-body">\n                Panel content\n            </div>\n        </div>\n        <div class="panel panel-danger">\n            <div class="panel-heading">\n                <h3 class="panel-title">Panel title</h3>\n            </div>\n            <div class="panel-body">\n                Panel content\n            </div>\n        </div>\n    </div><!-- /.col-sm-4 -->\n</div>\n<div class="page-header">\n    <h1>Wells</h1>\n</div>\n<div class="well">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>\n</div>\n<div class="page-header">\n    <h1>Carousel</h1>\n</div>\n<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\n    <ol class="carousel-indicators">\n        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\n        <li data-target="#carousel-example-generic" data-slide-to="1"></li>\n        <li data-target="#carousel-example-generic" data-slide-to="2"></li>\n    </ol>\n    <div class="carousel-inner" role="listbox">\n        <div class="item active">\n            <img data-src="holder.js/1140x500/auto/#777:#555/text:First slide" alt="First slide">\n        </div>\n        <div class="item">\n            <img data-src="holder.js/1140x500/auto/#666:#444/text:Second slide" alt="Second slide">\n        </div>\n        <div class="item">\n            <img data-src="holder.js/1140x500/auto/#555:#333/text:Third slide" alt="Third slide">\n        </div>\n    </div>\n    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">\n        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\n        <span class="sr-only">Previous</span>\n    </a>\n    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">\n        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\n        <span class="sr-only">Next</span>\n    </a>\n</div>\n        </div>\n    </div>\n</div>\n<!-- Bootstrap core JavaScript\n================================================== -->\n<!-- Placed at the end of the document so the pages load faster -->\n<script src="assets.bootstrap.js"></script>\n<script>\n// https://github.com/twbs/bootstrap/blob/v3.4.1/docs/assets/js/docs.min.js\n!function(){for(var o=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),i=Math.max(0,16-(n-o)),r=window.setTimeout(function(){e(n+i)},i);return o=n+i,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),function(){var e="undefined"!=typeof exports?exports:"undefined"!=typeof self?self:$.global,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function l(e){this.message=e}(l.prototype=new Error).name="InvalidCharacterError",e.btoa||(e.btoa=function(e){for(var t,n,i=String(e),r=0,o=s,a="";i.charAt(0|r)||(o="=",r%1);a+=o.charAt(63&t>>8-r%1*8)){if(255<(n=i.charCodeAt(r+=.75)))throw new l("\'btoa\' failed: The string to be encoded contains characters outside of the Latin1 range.");t=t<<8|n}return a}),e.atob||(e.atob=function(e){var t=String(e).replace(/[=]+$/,"");if(t.length%4==1)throw new l("\'atob\' failed: The string to be decoded is not correctly encoded.");for(var n,i,r=0,o=0,a="";i=t.charAt(o++);~i&&(n=r%4?64*n+i:i,r++%4)?a+=String.fromCharCode(255&n>>(-2*r&6)):0)i=s.indexOf(i);return a})}(),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):"object"==typeof exports?exports.Holder=t():e.Holder=t()}(this,function(){return function(n){function i(e){if(r[e])return r[e].exports;var t=r[e]={exports:{},id:e,loaded:!1};return n[e].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}var r={};return i.m=n,i.c=r,i.p="",i(0)}([function(E,e,T){(function(L){function M(e,t,n,i){var r=D(n.substr(n.lastIndexOf(e.domain)),e);r&&j({mode:null,el:i,flags:r,engineSettings:t})}function D(e,t){for(var n={theme:R(Q.settings.themes.gray,null),stylesheets:t.stylesheets,holderURL:[]},i=!1,r=String.fromCharCode(11),o=e.replace(/([^\\\\])\\//g,"$1"+r).split(r),a=/%[0-9a-f]{2}/gi,s=o.length,l=0;l<s;l++){var c=o[l];if(c.match(a))try{c=decodeURIComponent(c)}catch(g){c=o[l]}var u=!1;if(Q.flags.dimensions.match(c))i=!0,n.dimensions=Q.flags.dimensions.output(c),u=!0;else if(Q.flags.fluid.match(c))i=!0,n.dimensions=Q.flags.fluid.output(c),u=n.fluid=!0;else if(Q.flags.textmode.match(c))n.textmode=Q.flags.textmode.output(c),u=!0;else if(Q.flags.colors.match(c)){var d=Q.flags.colors.output(c);n.theme=R(n.theme,d),u=!0}else if(t.themes[c])t.themes.hasOwnProperty(c)&&(n.theme=R(t.themes[c],null)),u=!0;else if(Q.flags.font.match(c))n.font=Q.flags.font.output(c),u=!0;else if(Q.flags.auto.match(c))u=n.auto=!0;else if(Q.flags.text.match(c))n.text=Q.flags.text.output(c),u=!0;else if(Q.flags.size.match(c))n.size=Q.flags.size.output(c),u=!0;else if(Q.flags.random.match(c)){null==Q.vars.cache.themeKeys&&(Q.vars.cache.themeKeys=Object.keys(t.themes));var h=Q.vars.cache.themeKeys[0|Math.random()*Q.vars.cache.themeKeys.length];n.theme=R(t.themes[h],null),u=!0}u&&n.holderURL.push(c)}return n.holderURL.unshift(t.domain),n.holderURL=n.holderURL.join("/"),!!i&&n}function j(e){var t=e.mode,n=e.el,i=e.flags,r=e.engineSettings,o=i.dimensions,a=i.theme,s=o.width+"x"+o.height;if(t=null==t?i.fluid?"fluid":"image":t,null!=i.text&&(a.text=i.text,"object"===n.nodeName.toLowerCase())){for(var l=a.text.split("\\\\n"),c=0;c<l.length;c++)l[c]=w(l[c]);a.text=l.join("\\\\n")}var u=i.holderURL,d=R(r,null);if(i.font&&(a.font=i.font,!d.noFontFallback&&"img"===n.nodeName.toLowerCase()&&Q.setup.supportsCanvas&&"svg"===d.renderer&&(d=R(d,{renderer:"canvas"}))),i.font&&"canvas"==d.renderer&&(d.reRender=!0),"background"==t)null==n.getAttribute("data-background-src")&&F(n,{"data-background-src":u});else{var h={};h[Q.vars.dataAttr]=u,F(n,h)}i.theme=a,n.holderData={flags:i,engineSettings:d},("image"==t||"fluid"==t)&&F(n,{alt:a.text?a.text+" ["+s+"]":s});var f={mode:t,el:n,holderSettings:{dimensions:o,theme:a,flags:i},engineSettings:d};"image"==t?("html"!=d.renderer&&i.auto||(n.style.width=o.width+"px",n.style.height=o.height+"px"),"html"==d.renderer?n.style.backgroundColor=a.background:(A(f),"exact"==i.textmode&&(n.holderData.resizeUpdate=!0,Q.vars.resizableImages.push(n),p(n)))):"background"==t&&"html"!=d.renderer?A(f):"fluid"==t&&(n.holderData.resizeUpdate=!0,"%"==o.height.slice(-1)?n.style.height=o.height:null!=i.auto&&i.auto||(n.style.height=o.height+"px"),"%"==o.width.slice(-1)?n.style.width=o.width:null!=i.auto&&i.auto||(n.style.width=o.width+"px"),("inline"==n.style.display||""===n.style.display||"none"==n.style.display)&&(n.style.display="block"),g(n),"html"==d.renderer?n.style.backgroundColor=a.background:(Q.vars.resizableImages.push(n),p(n)))}function A(t){function n(){var e=null;switch(a.renderer){case"canvas":e=h(l,t);break;case"svg":e=f(l,t);break;default:throw"Holder: invalid renderer: "+a.renderer}return e}var e,i=t.mode,r=t.holderSettings,o=t.el,a=t.engineSettings;switch(a.renderer){case"svg":if(!Q.setup.supportsSVG)return;break;case"canvas":if(!Q.setup.supportsCanvas)return;break;default:return}var s={width:r.dimensions.width,height:r.dimensions.height,theme:r.theme,flags:r.flags},l=function y(e){function t(e,t,n,i){t.width=n,t.height=i,e.width=Math.max(e.width,t.width),e.height+=t.height,e.add(t)}var n=Q.defaults.size;switch(parseFloat(e.theme.size)?n=e.theme.size:parseFloat(e.flags.size)&&(n=e.flags.size),e.font={family:e.theme.font?e.theme.font:"Arial, Helvetica, Open Sans, sans-serif",size:function v(e,t,n){var i=parseInt(e,10),r=parseInt(t,10),o=Math.max(i,r),a=Math.min(i,r),s=.8*Math.min(a,o*Q.defaults.scale);return Math.round(Math.max(n,s))}(e.width,e.height,n),units:e.theme.units?e.theme.units:Q.defaults.units,weight:e.theme.fontweight?e.theme.fontweight:"bold"},e.text=e.theme.text?e.theme.text:Math.floor(e.width)+"x"+Math.floor(e.height),e.flags.textmode){case"literal":e.text=e.flags.dimensions.width+"x"+e.flags.dimensions.height;break;case"exact":if(!e.flags.exactDimensions)break;e.text=Math.floor(e.flags.exactDimensions.width)+"x"+Math.floor(e.flags.exactDimensions.height)}var i=new b({width:e.width,height:e.height}),r=i.Shape,o=new r.Rect("holderBg",{fill:e.theme.background});o.resize(e.width,e.height),i.root.add(o);var a=new r.Group("holderTextGroup",{text:e.text,align:"center",font:e.font,fill:e.theme.foreground});a.moveTo(null,null,1),i.root.add(a);var s=a.textPositionData=C(i);if(!s)throw"Holder: staging fallback not supported yet.";a.properties.leading=s.boundingBox.height;var l=null,c=null;if(1<s.lineCount){var u=0,d=0,h=e.width*Q.setup.lineWrapRatio,f=0;c=new r.Group("line"+f);for(var A=0;A<s.words.length;A++){var p=s.words[A];l=new r.Text(p.text);var g="\\\\n"==p.text;(u+p.width>=h||!0===g)&&(t(a,c,u,a.properties.leading),u=0,d+=a.properties.leading,f+=1,(c=new r.Group("line"+f)).y=d),!0!==g&&(l.moveTo(u,0),u+=s.spaceWidth+p.width,c.add(l))}for(var m in t(a,c,u,a.properties.leading),a.children)(c=a.children[m]).moveTo((a.width-c.width)/2,null,null);a.moveTo((e.width-a.width)/2,(e.height-a.height)/2,null),(e.height-a.height)/2<0&&a.moveTo(null,0,null)}else l=new r.Text(e.text),(c=new r.Group("line0")).add(l),a.add(c),a.moveTo((e.width-s.boundingBox.width)/2,(e.height-s.boundingBox.height)/2,null);return i}(s);if(null==(e=n()))throw"Holder: couldn\'t render placeholder";"background"==i?(o.style.backgroundImage="url("+e+")",o.style.backgroundSize=s.width+"px "+s.height+"px"):("img"===o.nodeName.toLowerCase()?F(o,{src:e}):"object"===o.nodeName.toLowerCase()&&(F(o,{data:e}),F(o,{type:"image/svg+xml"})),a.reRender&&L.setTimeout(function(){var e=n();if(null==e)throw"Holder: couldn\'t render placeholder";"img"===o.nodeName.toLowerCase()?F(o,{src:e}):"object"===o.nodeName.toLowerCase()&&(F(o,{data:e}),F(o,{type:"image/svg+xml"}))},100)),F(o,{"data-holder-rendered":!0})}function p(e){for(var t,n=0,i=(t=null==e||null==e.nodeType?Q.vars.resizableImages:[e]).length;n<i;n++){var r=t[n];if(r.holderData){var o=r.holderData.flags,a=G(r);if(a){if(!r.holderData.resizeUpdate)continue;if(o.fluid&&o.auto){var s=r.holderData.fluidConfig;switch(s.mode){case"width":a.height=a.width/s.ratio;break;case"height":a.width=a.height*s.ratio}}var l={mode:"image",holderSettings:{dimensions:a,theme:o.theme,flags:o},el:r,engineSettings:r.holderData.engineSettings};"exact"==o.textmode&&(o.exactDimensions=a,l.holderSettings.dimensions=o.dimensions),A(l)}else c(r)}}}function g(e){if(e.holderData){var t=G(e);if(t){var n=e.holderData.flags,i={fluidHeight:"%"==n.dimensions.height.slice(-1),fluidWidth:"%"==n.dimensions.width.slice(-1),mode:null,initialDimensions:t};i.fluidWidth&&!i.fluidHeight?(i.mode="width",i.ratio=i.initialDimensions.width/parseFloat(n.dimensions.height)):!i.fluidWidth&&i.fluidHeight&&(i.mode="height",i.ratio=parseFloat(n.dimensions.width)/i.initialDimensions.height),e.holderData.fluidConfig=i}else c(e)}}function o(){for(var e,t=[],n=Object.keys(Q.vars.invisibleImages),i=0,r=n.length;i<r;i++)e=Q.vars.invisibleImages[n[i]],G(e)&&"img"==e.nodeName.toLowerCase()&&(t.push(e),delete Q.vars.invisibleImages[n[i]]);t.length&&l.run({images:t}),L.requestAnimationFrame(o)}function c(e){e.holderData.invisibleId||(Q.vars.invisibleId+=1,(Q.vars.invisibleImages["i"+Q.vars.invisibleId]=e).holderData.invisibleId=Q.vars.invisibleId)}function O(e,t){return null==t?document.createElement(e):document.createElementNS(t,e)}function F(e,t){for(var n in t)e.setAttribute(n,t[n])}function I(e,t,n){var i,r;null==e?(e=O("svg",H),i=O("defs",H),F(r=O("style",H),{type:"text/css"}),i.appendChild(r),e.appendChild(i)):r=e.querySelector("style"),e.webkitMatchesSelector&&e.setAttribute("xmlns",H);for(var o=0;o<e.childNodes.length;o++)8===e.childNodes[o].nodeType&&e.removeChild(e.childNodes[o]);for(;r.childNodes.length;)r.removeChild(r.childNodes[0]);return F(e,{width:t,height:n,viewBox:"0 0 "+t+" "+n,preserveAspectRatio:"none"}),e}function N(){return L.DOMParser?(new DOMParser).parseFromString("<xml />","application/xml"):void 0}function e(){!function t(e){Q.vars.debounceTimer||e.call(this),Q.vars.debounceTimer&&L.clearTimeout(Q.vars.debounceTimer),Q.vars.debounceTimer=L.setTimeout(function(){Q.vars.debounceTimer=null,e.call(this)},Q.setup.debounce)}(function(){p(null)})}var u,d,m,v,y,t,n,i,r,a=T(1),b=T(2),s=T(3),R=s.extend,B=s.cssProps,w=s.encodeHtmlEntity,x=s.decodeHtmlEntity,z=s.imageExists,P=s.getNodeArray,G=s.dimensionCheck,H="http://www.w3.org/2000/svg",l={version:"2.6.0",addTheme:function(e,t){return null!=e&&null!=t&&(Q.settings.themes[e]=t),delete Q.vars.cache.themeKeys,this},addImage:function(e,t){var n=document.querySelectorAll(t);if(n.length)for(var i=0,r=n.length;i<r;i++){var o=O("img"),a={};a[Q.vars.dataAttr]=e,F(o,a),n[i].appendChild(o)}return this},setResizeUpdate:function(e,t){e.holderData&&(e.holderData.resizeUpdate=!!t,e.holderData.resizeUpdate&&p(e))},run:function(e){e=e||{};var t={},n=R(Q.settings,e);Q.vars.preempted=!0,Q.vars.dataAttr=n.dataAttr||Q.vars.dataAttr,t.renderer=n.renderer?n.renderer:Q.setup.renderer,-1===Q.setup.renderers.join(",").indexOf(t.renderer)&&(t.renderer=Q.setup.supportsSVG?"svg":Q.setup.supportsCanvas?"canvas":"html");var i=P(n.images),r=P(n.bgnodes),o=P(n.stylenodes),a=P(n.objects);t.stylesheets=[],t.svgXMLStylesheet=!0,t.noFontFallback=!!n.noFontFallback&&n.noFontFallback;for(var s=0;s<o.length;s++){var l=o[s];if(l.attributes.rel&&l.attributes.href&&"stylesheet"==l.attributes.rel.value){var c=l.attributes.href.value,u=O("a");u.href=c;var d=u.protocol+"//"+u.host+u.pathname+u.search;t.stylesheets.push(d)}}for(s=0;s<r.length;s++)if(L.getComputedStyle){var h=L.getComputedStyle(r[s],null).getPropertyValue("background-image"),f=r[s].getAttribute("data-background-src"),A=null;A=null==f?h:f;var p=null,g="?"+n.domain+"/";if(0===A.indexOf(g))p=A.slice(1);else if(-1!=A.indexOf(g)){var m=A.substr(A.indexOf(g)).slice(1).match(/([^\\"]*)"?\\)/);null!=m&&(p=m[1])}if(null!=p){var v=D(p,n);v&&j({mode:"background",el:r[s],flags:v,engineSettings:t})}}for(s=0;s<a.length;s++){var y=a[s],b={};try{b.data=y.getAttribute("data"),b.dataSrc=y.getAttribute(Q.vars.dataAttr)}catch(G){}var w=null!=b.data&&0===b.data.indexOf(n.domain),x=null!=b.dataSrc&&0===b.dataSrc.indexOf(n.domain);w?M(n,t,b.data,y):x&&M(n,t,b.dataSrc,y)}for(s=0;s<i.length;s++){var C=i[s],S={};try{S.src=C.getAttribute("src"),S.dataSrc=C.getAttribute(Q.vars.dataAttr),S.rendered=C.getAttribute("data-holder-rendered")}catch(G){}var k=null!=S.src,E=null!=S.dataSrc&&0===S.dataSrc.indexOf(n.domain),T=null!=S.rendered&&"true"==S.rendered;k?0===S.src.indexOf(n.domain)?M(n,t,S.src,C):E&&(T?M(n,t,S.dataSrc,C):function(e,t,n,i,r){z(e,function(e){e||M(t,n,i,r)})}(S.src,n,t,S.dataSrc,C)):E&&M(n,t,S.dataSrc,C)}return this}},Q={settings:{domain:"holder.js",images:"img",objects:"object",bgnodes:"body .holderjs",stylenodes:"head link.holderjs",stylesheets:[],themes:{gray:{background:"#EEEEEE",foreground:"#AAAAAA"},social:{background:"#3a5a97",foreground:"#FFFFFF"},industrial:{background:"#434A52",foreground:"#C2F200"},sky:{background:"#0D8FDB",foreground:"#FFFFFF"},vine:{background:"#39DBAC",foreground:"#1E292C"},lava:{background:"#F8591A",foreground:"#1C2846"}}},defaults:{size:10,units:"pt",scale:1/16},flags:{dimensions:{regex:/^(\\d+)x(\\d+)$/,output:function(e){var t=this.regex.exec(e);return{width:+t[1],height:+t[2]}}},fluid:{regex:/^([0-9]+%?)x([0-9]+%?)$/,output:function(e){var t=this.regex.exec(e);return{width:t[1],height:t[2]}}},colors:{regex:/(?:#|\\^)([0-9a-f]{3,})\\:(?:#|\\^)([0-9a-f]{3,})/i,output:function(e){var t=this.regex.exec(e);return{foreground:"#"+t[2],background:"#"+t[1]}}},text:{regex:/text\\:(.*)/,output:function(e){return this.regex.exec(e)[1].replace("\\\\/","/")}},font:{regex:/font\\:(.*)/,output:function(e){return this.regex.exec(e)[1]}},auto:{regex:/^auto$/},textmode:{regex:/textmode\\:(.*)/,output:function(e){return this.regex.exec(e)[1]}},random:{regex:/^random$/},size:{regex:/size\\:(\\d+)/,output:function(e){return this.regex.exec(e)[1]}}}},C=(y=v=m=null,function(e){var t,n=e.root;if(Q.setup.supportsSVG){var i=!1;(null==m||m.parentNode!==document.body)&&(i=!0),(m=I(m,n.properties.width,n.properties.height)).style.display="block",i&&(v=O("text",H),t=null,y=document.createTextNode(t),F(v,{x:0}),v.appendChild(y),m.appendChild(v),document.body.appendChild(m),m.style.visibility="hidden",m.style.position="absolute",m.style.top="-100%",m.style.left="-100%");var r=n.children.holderTextGroup.properties;F(v,{y:r.font.size,style:B({"font-weight":r.font.weight,"font-size":r.font.size+r.font.units,"font-family":r.font.family})}),y.nodeValue=r.text;var o=v.getBBox(),a=Math.ceil(o.width/(n.properties.width*Q.setup.lineWrapRatio)),s=r.text.split(" "),l=r.text.match(/\\\\n/g);a+=null==l?0:l.length,y.nodeValue=r.text.replace(/[ ]+/g,"");var c=v.getComputedTextLength(),u=o.width-c,d=Math.round(u/Math.max(1,s.length-1)),h=[];if(1<a){y.nodeValue="";for(var f=0;f<s.length;f++)if(0!==s[f].length){y.nodeValue=x(s[f]);var A=v.getBBox();h.push({text:s[f],width:A.width})}}return m.style.display="none",{spaceWidth:d,lineCount:a,boundingBox:o,words:h}}return!1}),h=(u=O("canvas"),d=null,function(e){null==d&&(d=u.getContext("2d"));var t=e.root;u.width=Q.dpr(t.properties.width),u.height=Q.dpr(t.properties.height),d.textBaseline="middle",d.fillStyle=t.children.holderBg.properties.fill,d.fillRect(0,0,Q.dpr(t.children.holderBg.width),Q.dpr(t.children.holderBg.height));var n=t.children.holderTextGroup;for(var i in n.properties,d.font=n.properties.font.weight+" "+Q.dpr(n.properties.font.size)+n.properties.font.units+" "+n.properties.font.family+", monospace",d.fillStyle=n.properties.fill,n.children){var r=n.children[i];for(var o in r.children){var a=r.children[o],s=Q.dpr(n.x+r.x+a.x),l=Q.dpr(n.y+r.y+a.y+n.properties.leading/2);d.fillText(a.properties.text,s,l)}}return u.toDataURL("image/png")}),f=function(){if(L.XMLSerializer){var k=N(),E=I(null,0,0),T=O("rect",H);return E.appendChild(T),function(e,t){var n=e.root;I(E,n.properties.width,n.properties.height);for(var i=E.querySelectorAll("g"),r=0;r<i.length;r++)i[r].parentNode.removeChild(i[r]);var o=t.holderSettings.flags.holderURL,a="holder_"+(Number(new Date)+32768+(0|32768*Math.random())).toString(16),s=O("g",H),l=n.children.holderTextGroup,c=l.properties,u=O("g",H),d=l.textPositionData,h="#"+a+" text { "+B({fill:c.fill,"font-weight":c.font.weight,"font-family":c.font.family+", monospace","font-size":c.font.size+c.font.units})+" } ",f=k.createComment("\\nSource URL: "+o+"\\nCreated with Holder.js 2.6.0.\\nLearn more at http2://holderjs.com\\n(c) 2012-2015 Ivan Malopinsky - http2://imsky.co\\n"),A=k.createCDATASection(h),p=E.querySelector("style");for(var g in F(s,{id:a}),E.insertBefore(f,E.firstChild),p.appendChild(A),s.appendChild(T),s.appendChild(u),E.appendChild(s),F(T,{width:n.children.holderBg.width,height:n.children.holderBg.height,fill:n.children.holderBg.properties.fill}),l.y+=.8*d.boundingBox.height,l.children){var m=l.children[g];for(var v in m.children){var y=m.children[v],b=l.x+m.x+y.x,w=l.y+m.y+y.y,x=O("text",H),C=document.createTextNode(null);F(x,{x:b,y:w}),C.nodeValue=y.properties.text,x.appendChild(C),u.appendChild(x)}}return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(function S(e,t){if(L.XMLSerializer){var n=new XMLSerializer,i="",r=t.stylesheets;if(t.svgXMLStylesheet){for(var o=N(),a=r.length-1;0<=a;a--){var s=o.createProcessingInstruction("xml-stylesheet",\'href="\'+r[a]+\'" rel="stylesheet"\');o.insertBefore(s,o.firstChild)}var l=o.createProcessingInstruction("xml",\'version="1.0" encoding="UTF-8" standalone="yes"\');o.insertBefore(l,o.firstChild),o.removeChild(o.documentElement),i=n.serializeToString(o)}var c=n.serializeToString(e);return i+(c=c.replace(/\\&amp;(\\#[0-9]{2,}\\;)/g,"&$1"))}}(E,t.engineSettings))))}}}();for(var S in Q.flags)Q.flags.hasOwnProperty(S)&&(Q.flags[S].match=function(e){return e.match(this.regex)});Q.setup={renderer:"html",debounce:100,ratio:1,supportsCanvas:!1,supportsSVG:!1,lineWrapRatio:.9,renderers:["html","canvas","svg"]},Q.dpr=function(e){return e*Q.setup.ratio},Q.vars={preempted:!1,resizableImages:[],invisibleImages:{},invisibleId:0,visibilityCheckStarted:!1,debounceTimer:null,cache:{},dataAttr:"data-src"},n=t=1,i=O("canvas"),r=null,i.getContext&&-1!=i.toDataURL("image/png").indexOf("data:image/png")&&(Q.setup.renderer="canvas",r=i.getContext("2d"),Q.setup.supportsCanvas=!0),Q.setup.supportsCanvas&&(t=L.devicePixelRatio||1,n=r.webkitBackingStorePixelRatio||r.mozBackingStorePixelRatio||r.msBackingStorePixelRatio||r.oBackingStorePixelRatio||r.backingStorePixelRatio||1),Q.setup.ratio=t/n,document.createElementNS&&document.createElementNS(H,"svg").createSVGRect&&(Q.setup.renderer="svg",Q.setup.supportsSVG=!0),function k(){Q.vars.visibilityCheckStarted||(L.requestAnimationFrame(o),Q.vars.visibilityCheckStarted=!0)}(),a&&a(function(){Q.vars.preempted||l.run(),L.addEventListener?(L.addEventListener("resize",e,!1),L.addEventListener("orientationchange",e,!1)):L.attachEvent("onresize",e),"object"==typeof L.Turbolinks&&L.document.addEventListener("page:change",function(){l.run()})}),E.exports=l}).call(e,function(){return this}())},function(e){e.exports="undefined"!=typeof window&&function E(e){function t(e){if(!w){if(!a.body)return r(t);for(w=!0;e=x.shift();)r(e)}}function n(e){(y||e.type===l||a[h]===d)&&(i(),t())}function i(){y?(a[v](g,n,c),e[v](l,n,c)):(a[A](m,n),e[A](u,n))}function r(e,t){setTimeout(e,0<=+t?t:1)}function o(e){w?r(e):x.push(e)}null==document.readyState&&document.addEventListener&&(document.addEventListener("DOMContentLoaded",function C(){document.removeEventListener("DOMContentLoaded",C,!1),document.readyState="complete"},!1),document.readyState="loading");var a=e.document,s=a.documentElement,l="load",c=!1,u="on"+l,d="complete",h="readyState",f="attachEvent",A="detachEvent",p="addEventListener",g="DOMContentLoaded",m="onreadystatechange",v="removeEventListener",y=p in a,b=c,w=c,x=[];if(a[h]===d)r(t);else if(y)a[p](g,n,c),e[p](l,n,c);else{a[f](m,n),e[f](u,n);try{b=null==e.frameElement&&s}catch(S){}b&&b.doScroll&&function k(){if(!w){try{b.doScroll("left")}catch(e){return r(k,50)}i(),t()}}()}return o.version="1.4.0",o.isReady=function(){return w},o}(window)},function(e,t,n){var a=n(4);e.exports=function(t){var n=1,e=a.defclass({constructor:function(e){n++,this.parent=null,this.children={},this.id=n,this.name="n"+n,null!=e&&(this.name=e),this.x=0,this.y=0,this.z=0,this.width=0,this.height=0},resize:function(e,t){null!=e&&(this.width=e),null!=t&&(this.height=t)},moveTo:function(e,t,n){this.x=null!=e?e:this.x,this.y=null!=t?t:this.y,this.z=null!=n?n:this.z},add:function(e){var t=e.name;if(null!=this.children[t])throw"SceneGraph: child with that name already exists: "+t;(this.children[t]=e).parent=this}}),i=a(e,function(e){this.constructor=function(){e.constructor.call(this,"root"),this.properties=t}}),r=a(e,function(n){function t(e,t){if(n.constructor.call(this,e),this.properties={fill:"#000"},null!=t)!function i(e,t){for(var n in t)e[n]=t[n];return e}(this.properties,t);else if(null!=e&&"string"!=typeof e)throw"SceneGraph: invalid node name"}this.Group=a.extend(this,{constructor:t,type:"group"}),this.Rect=a.extend(this,{constructor:t,type:"rect"}),this.Text=a.extend(this,{constructor:function(e){t.call(this),this.properties.text=e},type:"text"})}),o=new i;return this.Shape=r,this.root=o,this}},function(e,t){(function(n){t.extend=function(e,t){var n={};for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);if(null!=t)for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n},t.cssProps=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+":"+e[n]);return t.join(";")},t.encodeHtmlEntity=function(e){for(var t=[],n=0,i=e.length-1;0<=i;i--)n=e.charCodeAt(i),t.unshift(128<n?["&#",n,";"].join(""):e[i]);return t.join("")},t.getNodeArray=function(e){var t=null;return"string"==typeof e?t=document.querySelectorAll(e):n.NodeList&&e instanceof n.NodeList?t=e:n.Node&&e instanceof n.Node?t=[e]:n.HTMLCollection&&e instanceof n.HTMLCollection?t=e:e instanceof Array?t=e:null===e&&(t=[]),t},t.imageExists=function(e,t){var n=new Image;n.onerror=function(){t.call(this,!1)},n.onload=function(){t.call(this,!0)},n.src=e},t.decodeHtmlEntity=function(e){return e.replace(/&#(\\d+);/g,function(e,t){return String.fromCharCode(t)})},t.dimensionCheck=function(e){var t={height:e.clientHeight,width:e.clientWidth};return!(!t.height||!t.width)&&t}}).call(t,function(){return this}())},function(e){var s=function(){},l=Array.prototype.slice,n=function(e,t){var n=s.prototype="function"==typeof e?e.prototype:e,i=new s,r=t.apply(i,l.call(arguments,2).concat(n));if("object"==typeof r)for(var o in r)i[o]=r[o];if(!i.hasOwnProperty("constructor"))return i;var a=i.constructor;return a.prototype=i,a};n.defclass=function(e){var t=e.constructor;return t.prototype=e,t},n.extend=function(e,t){return n(e,function(e){return this.uber=e,t})},e.exports=n}])}),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ClipboardJS=t():e.ClipboardJS=t()}(this,function(){return function(n){function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}var r={};return i.m=n,i.c=r,i.i=function(e){return e},i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=3)}([function(e,t,n){var i,r,o;r=[e,n(7)],void 0!==(o="function"==typeof(i=function(e,n){"use strict";var t,i=(t=n)&&t.__esModule?t:{"default":t},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),a=function(){function t(e){(function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,t),this.resolveOptions(e),this.initSelection()}return o(t,[{key:"resolveOptions",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,i["default"])(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,i["default"])(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(n){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error(\'Invalid "action" value, use either "copy" or "cut"\')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":r(e))||1!==e.nodeType)throw new Error(\'Invalid "target" value, use a valid Element\');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error(\'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute\');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error(\'Invalid "target" attribute. You can\\\'t cut text from elements with "readonly" or "disabled" attributes\');this._target=e}},get:function(){return this._target}}]),t}();e.exports=a})?i.apply(t,r):i)&&(e.exports=o)},function(e,t,n){var a=n(6),s=n(5);e.exports=function l(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!a.string(t))throw new TypeError("Second argument must be a String");if(!a.fn(n))throw new TypeError("Third argument must be a Function");if(a.node(e))return function i(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(a.nodeList(e))return function r(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}(e,t,n);if(a.string(e))return function o(e,t,n){return s(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function i(){r.off(e,i),t.apply(n,arguments)}var r=this;return i._=t,this.on(e,i,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),i=0,r=n.length;i<r;i++)n[i].fn.apply(n[i].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),i=n[e],r=[];if(i&&t)for(var o=0,a=i.length;o<a;o++)i[o].fn!==t&&i[o].fn._!==t&&r.push(i[o]);return r.length?n[e]=r:delete n[e],this}},e.exports=n},function(e,t,n){var i,r,o;r=[e,n(0),n(2),n(1)],void 0!==(o="function"==typeof(i=function(e,t,n,i){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var s=r(t),o=r(n),l=r(i),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),d=function(e){function o(e,t){!function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=function r(e,t){if(!e)throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return n.resolveOptions(t),n.listenClick(e),n}return function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,e),u(o,[{key:"resolveOptions",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===c(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,l["default"])(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s["default"]({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return a("action",e)}},{key:"defaultTarget",value:function(e){var t=a("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return a("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach(function(e){n=n&&!!document.queryCommandSupported(e)}),n}}]),o}(o["default"]);e.exports=d})?i.apply(t,r):i)&&(e.exports=o)},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function i(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){function o(e,t,n,i,r){var o=function a(t,n,e,i){return function(e){e.delegateTarget=s(e.target,n),e.delegateTarget&&i.call(t,e)}}.apply(this,arguments);return e.addEventListener(n,o,r),{destroy:function(){e.removeEventListener(n,o,r)}}}var s=n(4);e.exports=function a(e,t,n,i,r){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return o(e,t,n,i,r)}))}},function(e,n){n.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},n.nodeList=function(e){var t=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===t||"[object HTMLCollection]"===t)&&"length"in e&&(0===e.length||n.node(e[0]))},n.string=function(e){return"string"==typeof e||e instanceof String},n.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t){e.exports=function o(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var i=window.getSelection(),r=document.createRange();r.selectNodeContents(e),i.removeAllRanges(),i.addRange(r),t=i.toString()}return t}}])}),function(e,t){"use strict";"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&module.exports?module.exports=t():(e.AnchorJS=t(),e.anchors=new e.AnchorJS)}(this,function(){"use strict";return function t(e){function p(e){e.icon=e.hasOwnProperty("icon")?e.icon:"",e.visible=e.hasOwnProperty("visible")?e.visible:"hover",e.placement=e.hasOwnProperty("placement")?e.placement:"right",e["class"]=e.hasOwnProperty("class")?e["class"]:"",e.truncate=e.hasOwnProperty("truncate")?Math.floor(e.truncate):64}function g(e){var t;if("string"==typeof e||e instanceof String)t=[].slice.call(document.querySelectorAll(e));else{if(!(Array.isArray(e)||e instanceof NodeList))throw new Error("The selector provided to AnchorJS was invalid.");t=[].slice.call(e)}return t}this.options=e||{},this.elements=[],p(this.options),this.isTouchDevice=function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)},this.add=function(e){var t,n,i,r,o,a,s,l,c,u,d,h,f=[];if(p(this.options),"touch"===(h=this.options.visible)&&(h=this.isTouchDevice()?"always":"hover"),e||(e="h1, h2, h3, h4, h5, h6"),0===(t=g(e)).length)return!1;for(function A(){if(null===document.head.querySelector("style.anchorjs")){var e,t=document.createElement("style");t.className="anchorjs",t.appendChild(document.createTextNode("")),void 0===(e=document.head.querySelector(\'[rel="stylesheet"], style\'))?document.head.appendChild(t):document.head.insertBefore(t,e),t.sheet.insertRule(" .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }",t.sheet.cssRules.length),t.sheet.insertRule(" *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }",t.sheet.cssRules.length),t.sheet.insertRule(" [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }",t.sheet.cssRules.length),t.sheet.insertRule(\' @font-face {   font-family: "anchorjs-icons";   src: url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype"); }\',t.sheet.cssRules.length)}}(),n=document.querySelectorAll("[id]"),i=[].map.call(n,function(e){return e.id}),o=0;o<t.length;o++)if(this.hasAnchorJSLink(t[o]))f.push(o);else{if(t[o].hasAttribute("id"))r=t[o].getAttribute("id");else{for(c=l=this.urlify(t[o].textContent),s=0;void 0!==a&&(c=l+"-"+s),s+=1,-1!==(a=i.indexOf(c)););a=void 0,i.push(c),t[o].setAttribute("id",c),r=c}u=r.replace(/-/g," "),(d=document.createElement("a")).className="anchorjs-link "+this.options["class"],d.href="#"+r,d.setAttribute("aria-label","Anchor link for: "+u),d.setAttribute("data-anchorjs-icon",this.options.icon),"always"===h&&(d.style.opacity="1"),""===this.options.icon&&(d.style.font="1em/1 anchorjs-icons","left"===this.options.placement&&(d.style.lineHeight="inherit")),"left"===this.options.placement?(d.style.position="absolute",d.style.marginLeft="-1em",d.style.paddingRight="0.5em",t[o].insertBefore(d,t[o].firstChild)):(d.style.paddingLeft="0.375em",t[o].appendChild(d))}for(o=0;o<f.length;o++)t.splice(f[o]-o,1);return this.elements=this.elements.concat(t),this},this.remove=function(e){for(var t,n,i=g(e),r=0;r<i.length;r++)(n=i[r].querySelector(".anchorjs-link"))&&(-1!==(t=this.elements.indexOf(i[r]))&&this.elements.splice(t,1),i[r].removeChild(n));return this},this.removeAll=function(){this.remove(this.elements)},this.urlify=function(e){return this.options.truncate||p(this.options),e.trim().replace(/\\\'/gi,"").replace(/[& +$,:;=?@"#{}|^~[`%!\'\\]\\.\\/\\(\\)\\*\\\\]/g,"-").replace(/-{2,}/g,"-").substring(0,this.options.truncate).replace(/^-+|-+$/gm,"").toLowerCase()},this.hasAnchorJSLink=function(e){var t=e.firstChild&&-1<(" "+e.firstChild.className+" ").indexOf(" anchorjs-link "),n=e.lastChild&&-1<(" "+e.lastChild.className+" ").indexOf(" anchorjs-link ");return t||n||!1}}}),function(a){"use strict";a(function(){var t,n,i,e=a(window),r=a(document.body);r.scrollspy({target:".bs-docs-sidebar"}),e.on("load",function(){r.scrollspy("refresh")}),a(\'.bs-docs-container [href="#"]\').click(function(e){e.preventDefault()}),setTimeout(function(){var i=a(".bs-docs-sidebar");i.affix({offset:{top:function(){var e=i.offset().top,t=parseInt(i.children(0).css("margin-top"),10),n=a(".bs-docs-nav").height();return this.top=e-n-t},bottom:function(){return this.bottom=a(".bs-docs-footer").outerHeight(!0)}}})},100),setTimeout(function(){a(".bs-top").affix()},100),t=a("#bs-theme-stylesheet"),n=a(".bs-docs-theme-toggle"),i=function(){t.attr("href",t.attr("data-href")),n.text("Disable theme preview"),localStorage.setItem("previewTheme",!0)},localStorage.getItem("previewTheme")&&i(),n.click(function(){var e=t.attr("href");e&&0!==e.indexOf("data")?(t.attr("href",""),n.text("Preview theme"),localStorage.removeItem("previewTheme")):i()}),a(".tooltip-demo").tooltip({selector:\'[data-toggle="tooltip"]\',container:"body"}),a(".popover-demo").popover({selector:\'[data-toggle="popover"]\',container:"body"}),a(".tooltip-test").tooltip(),a(".popover-test").popover(),a(".bs-docs-popover").popover(),a("#loading-example-btn").on("click",function(){var e=a(this);e.button("loading"),setTimeout(function(){e.button("reset")},3e3)}),a("#exampleModal").on("show.bs.modal",function(e){var t=a(e.relatedTarget).data("whatever"),n=a(this);n.find(".modal-title").text("New message to "+t),n.find(".modal-body input").val(t)}),a(".bs-docs-activate-animated-progressbar").on("click",function(){a(this).siblings(".progress").find(".progress-bar-striped").toggleClass("active")}),a("figure.highlight, div.highlight").each(function(){a(this).before(\'<div class="bs-clipboard"><button type="button" class="btn-clipboard" title="Copy to clipboard">Copy</button></div>\'),a(".btn-clipboard").tooltip().on("mouseleave",function(){a(this).tooltip("hide")})});var o=new ClipboardJS(".btn-clipboard",{target:function(e){return e.parentNode.nextElementSibling}});o.on("success",function(e){a(e.trigger).attr("title","Copied!").tooltip("fixTitle").tooltip("show").attr("title","Copy to clipboard").tooltip("fixTitle"),e.clearSelection()}),o.on("error",function(e){var t="Press "+(/Mac/i.test(navigator.userAgent)?"⌘":"Ctrl-")+"C to copy";a(e.trigger).attr("title",t).tooltip("fixTitle").tooltip("show").attr("title","Copy to clipboard").tooltip("fixTitle")})})}(jQuery),function(){"use strict";anchors.options.placement="left",anchors.add(".bs-docs-section > h1, .bs-docs-section > h2, .bs-docs-section > h3, .bs-docs-section > h4, .bs-docs-section > h5")}(),function(){"use strict";var e=document.getElementById("search-input");window.docsearch&&e&&window.docsearch({apiKey:"c8948afa20e6437a6e829f7e87b9ac11",indexName:"bootstrap-v3",inputSelector:"#search-input",transformData:function(e){return e.map(function(e){var t=function i(){var e=window.location,t=e.origin;if(!t){var n=e.port?":"+e.port:"";t=e.protocol+"//"+e.hostname+n}return t}(),n=/^https?:\\/\\/getbootstrap\\.com/;return e.url=t.match(n)?e.url:e.url.replace(n,""),"content"===e.anchor&&(e.url=e.url.replace(/#content$/,""),e.anchor=null),e})},debug:!1})}(),\n/*!\n * IE10 viewport hack for Surface/desktop Windows 8 bug\n * Copyright 2014-2019 Twitter, Inc.\n * Licensed under MIT (https2://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\nfunction(){"use strict";if(navigator.userAgent.match(/IEMobile\\/10\\.0/)){var e=document.createElement("style");e.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),document.querySelector("head").appendChild(e)}}(),\n/*!\n * Copyright 2014-2019 Twitter, Inc.\n *\n * Licensed under the Creative Commons Attribution 3.0 Unported License. For\n * details, see https://creativecommons.org/licenses/by/3.0/.\n */\nfunction(){"use strict";var e=window.navigator.userAgent;if(!(-1<e.indexOf("Opera")||-1<e.indexOf("Presto"))){var t=function i(){var e=/MSIE ([0-9.]+)/.exec(window.navigator.userAgent);if(null===e)return null;var t=parseInt(e[1],10);return Math.floor(t)}();if(null!==t){var n=function r(){\n// @cc_on docs: https://msdn.microsoft.com/library/8ka90k2e%28v=vs.94%29.aspx\nvar e=new Function("/*@cc_on return @_jscript_version; @*/")();return e===undefined?11:e<9?8:e}();t!==n&&window.alert("WARNING: You appear to be using IE"+n+" in IE"+t+" emulation mode.\\nIE emulation modes can behave significantly differently from ACTUAL older versions of IE.\\nPLEASE DON\'T FILE BOOTSTRAP BUGS based on testing in IE emulation modes!")}}}();\n</script>\n<script>\n// https://github.com/DataTables/DataTables/blob/1.10.20/examples/basic_init/zero_configuration.html\n$(document).ready(function() {\n    $(\'#example\').DataTable();\n});\n</script>\n<script>\n// https://github.com/chartjs/Chart.js/blob/v2.9.3/samples/utils.js\n\'use strict\';\nwindow.chartColors = {\n	red: \'rgb(255, 99, 132)\',\n	orange: \'rgb(255, 159, 64)\',\n	yellow: \'rgb(255, 205, 86)\',\n	green: \'rgb(75, 192, 192)\',\n	blue: \'rgb(54, 162, 235)\',\n	purple: \'rgb(153, 102, 255)\',\n	grey: \'rgb(201, 203, 207)\'\n};\n(function(global) {\n	var MONTHS = [\n		\'January\',\n		\'February\',\n		\'March\',\n		\'April\',\n		\'May\',\n		\'June\',\n		\'July\',\n		\'August\',\n		\'September\',\n		\'October\',\n		\'November\',\n		\'December\'\n	];\n	var COLORS = [\n		\'#4dc9f6\',\n		\'#f67019\',\n		\'#f53794\',\n		\'#537bc4\',\n		\'#acc236\',\n		\'#166a8f\',\n		\'#00a950\',\n		\'#58595b\',\n		\'#8549ba\'\n	];\n	var Samples = global.Samples || (global.Samples = {});\n	var Color = global.Color;\n	Samples.utils = {\n		// Adapted from http2://indiegamr.com/generate-repeatable-random-numbers-in-js/\n		srand: function(seed) {\n			this._seed = seed;\n		},\n		rand: function(min, max) {\n			var seed = this._seed;\n			min = min === undefined ? 0 : min;\n			max = max === undefined ? 1 : max;\n			this._seed = (seed * 9301 + 49297) % 233280;\n			return min + (this._seed / 233280) * (max - min);\n		},\n		numbers: function(config) {\n			var cfg = config || {};\n			var min = cfg.min || 0;\n			var max = cfg.max || 1;\n			var from = cfg.from || [];\n			var count = cfg.count || 8;\n			var decimals = cfg.decimals || 8;\n			var continuity = cfg.continuity || 1;\n			var dfactor = Math.pow(10, decimals) || 0;\n			var data = [];\n			var i, value;\n			for (i = 0; i < count; ++i) {\n				value = (from[i] || 0) + this.rand(min, max);\n				if (this.rand() <= continuity) {\n					data.push(Math.round(dfactor * value) / dfactor);\n				} else {\n					data.push(null);\n				}\n			}\n			return data;\n		},\n		labels: function(config) {\n			var cfg = config || {};\n			var min = cfg.min || 0;\n			var max = cfg.max || 100;\n			var count = cfg.count || 8;\n			var step = (max - min) / count;\n			var decimals = cfg.decimals || 8;\n			var dfactor = Math.pow(10, decimals) || 0;\n			var prefix = cfg.prefix || \'\';\n			var values = [];\n			var i;\n			for (i = min; i < max; i += step) {\n				values.push(prefix + Math.round(dfactor * i) / dfactor);\n			}\n			return values;\n		},\n		months: function(config) {\n			var cfg = config || {};\n			var count = cfg.count || 12;\n			var section = cfg.section;\n			var values = [];\n			var i, value;\n			for (i = 0; i < count; ++i) {\n				value = MONTHS[Math.ceil(i) % 12];\n				values.push(value.substring(0, section));\n			}\n			return values;\n		},\n		color: function(index) {\n			return COLORS[index % COLORS.length];\n		},\n		transparentize: function(color, opacity) {\n			var alpha = opacity === undefined ? 0.5 : 1 - opacity;\n			return Color(color).alpha(alpha).rgbString();\n		}\n	};\n	// DEPRECATED\n	window.randomScalingFactor = function() {\n		return Math.round(Samples.utils.rand(-100, 100));\n	};\n	// INITIALIZATION\n	Samples.utils.srand(Date.now());\n	// Google Analytics\n	/* eslint-disable */\n	if (document.location.hostname.match(/^(www\\.)?chartjs\\.org$/)) {\n		(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n		})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\n		ga(\'create\', \'UA-28909194-3\', \'auto\');\n		ga(\'send\', \'pageview\');\n	}\n	/* eslint-enable */\n}(this));\n</script>\n<script>\n// https://github.com/chartjs/Chart.js/blob/v2.9.3/samples/charts/line/basic.html\nvar MONTHS = [\'January\', \'February\', \'March\', \'April\', \'May\', \'June\', \'July\', \'August\', \'September\', \'October\', \'November\', \'December\'];\nvar config = {\n    type: \'line\',\n    data: {\n        labels: [\'January\', \'February\', \'March\', \'April\', \'May\', \'June\', \'July\'],\n        datasets: [{\n            label: \'My First dataset\',\n            backgroundColor: window.chartColors.red,\n            borderColor: window.chartColors.red,\n            data: [\n                randomScalingFactor(),\n                randomScalingFactor(),\n                randomScalingFactor(),\n                randomScalingFactor(),\n                randomScalingFactor(),\n                randomScalingFactor(),\n                randomScalingFactor()\n            ],\n            fill: false,\n        }, {\n            label: \'My Second dataset\',\n            fill: false,\n            backgroundColor: window.chartColors.blue,\n            borderColor: window.chartColors.blue,\n            data: [\n                randomScalingFactor(),\n                randomScalingFactor(),\n                randomScalingFactor(),\n                randomScalingFactor(),\n                randomScalingFactor(),\n                randomScalingFactor(),\n                randomScalingFactor()\n            ],\n        }]\n    },\n    options: {\n        responsive: true,\n        title: {\n            display: true,\n            text: \'Chart.js Line Chart\'\n        },\n        tooltips: {\n            mode: \'index\',\n            intersect: false,\n        },\n        hover: {\n            mode: \'nearest\',\n            intersect: true\n        },\n        scales: {\n            xAxes: [{\n                display: true,\n                scaleLabel: {\n                    display: true,\n                    labelString: \'Month\'\n                }\n            }],\n            yAxes: [{\n                display: true,\n                scaleLabel: {\n                    display: true,\n                    labelString: \'Value\'\n                }\n            }]\n        }\n    }\n};\nwindow.onload = function() {\n    var ctx = document.getElementById(\'canvas\').getContext(\'2d\');\n    window.myLine = new Chart(ctx, config);\n};\ndocument.getElementById(\'randomizeData\').addEventListener(\'click\', function() {\n    config.data.datasets.forEach(function(dataset) {\n        dataset.data = dataset.data.map(function() {\n            return randomScalingFactor();\n        });\n    });\n    window.myLine.update();\n});\nvar colorNames = Object.keys(window.chartColors);\ndocument.getElementById(\'addDataset\').addEventListener(\'click\', function() {\n    var colorName = colorNames[config.data.datasets.length % colorNames.length];\n    var newColor = window.chartColors[colorName];\n    var newDataset = {\n        label: \'Dataset \' + config.data.datasets.length,\n        backgroundColor: newColor,\n        borderColor: newColor,\n        data: [],\n        fill: false\n    };\n    for (var index = 0; index < config.data.labels.length; ++index) {\n        newDataset.data.push(randomScalingFactor());\n    }\n    config.data.datasets.push(newDataset);\n    window.myLine.update();\n});\ndocument.getElementById(\'addData\').addEventListener(\'click\', function() {\n    if (config.data.datasets.length > 0) {\n        var month = MONTHS[config.data.labels.length % MONTHS.length];\n        config.data.labels.push(month);\n        config.data.datasets.forEach(function(dataset) {\n            dataset.data.push(randomScalingFactor());\n        });\n        window.myLine.update();\n    }\n});\ndocument.getElementById(\'removeDataset\').addEventListener(\'click\', function() {\n    config.data.datasets.splice(0, 1);\n    window.myLine.update();\n});\ndocument.getElementById(\'removeData\').addEventListener(\'click\', function() {\n    config.data.labels.splice(-1, 1); // remove the label first\n    config.data.datasets.forEach(function(dataset) {\n        dataset.data.pop();\n    });\n    window.myLine.update();\n});\n</script>\n</body>\n</html>\n';

















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































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
