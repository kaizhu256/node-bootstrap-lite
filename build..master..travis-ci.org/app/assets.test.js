/* istanbul instrument in package bootstrap_lite */
/* jslint-utility2 */
/*jslint
    bitwise: true,
    browser: true,
    maxerr: 4,
    maxlen: 100,
    node: true,
    nomen: true,
    regexp: true,
    stupid: true
*/
(function () {
    'use strict';
    var local;



    // run shared js-env code - init-before
    (function () {
        // init local
        local = {};
        // init isBrowser
        local.isBrowser = typeof window === "object" &&
            typeof window.XMLHttpRequest === "function" &&
            window.document &&
            typeof window.document.querySelectorAll === "function";
        // init global
        local.global = local.isBrowser
            ? window
            : global;
        // re-init local
        local = local.global.local = (local.global.utility2 ||
            require('utility2')).requireReadme();
        // init test
        local.testRunInit(local);
    }());



    // run shared js-env code - function
    (function () {
        local.testCase_buildApp_default = function (options, onError) {
        /*
         * this function will test buildApp's default handling-behavior
         */
            if (local.isBrowser) {
                onError(null, options);
                return;
            }
            local.testCase_buildReadme_default(options, local.onErrorThrow);
            local.testCase_buildLib_default(options, local.onErrorThrow);
            local.testCase_buildTest_default(options, local.onErrorThrow);
            options = { assetsList: [{
                file: '/assets.bootstrap-v3.3.7.rollup.min.css',
                url: '/assets.bootstrap-v3.3.7.rollup.min.css'
            }, {
                file: '/assets.bootstrap-v3.3.7.rollup.min.js',
                url: '/assets.bootstrap-v3.3.7.rollup.min.js'
            }] };
            local.buildApp(options, onError);
        };

        local.testCase_buildReadme_default = function (options, onError) {
        /*
         * this function will test buildReadme's default handling-behavior
         */
            if (local.isBrowser) {
                onError(null, options);
                return;
            }
            local.buildReadme({ customize: function (options) {
                // search-and-replace - customize dataTo
                [
                    new RegExp('\\n {8}\\/\\* jslint-ignore-begin \\*\\/\\n' +
                        ' {8}local.assetsDict\\[\'\\/assets.index.template.html\'\\] = \'\\\\\\n' +
                        '[\\S\\s]*?\\n {8}\\/\\* jslint-ignore-end \\*\\/\\n')
                ].forEach(function (rgx) {
                    options.dataFrom.replace(rgx, function (match0) {
                        options.dataTo = options.dataTo.replace(rgx, match0);
                    });
                });
            }}, onError);
        };
    }());
}());
