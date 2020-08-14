WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:footer-analytics', location = '/js/confluence-dashboard/utils/footer-analytics.js' */
define("confluence-dashboard/utils/footer-analytics",["jquery","ajs","confluence/meta"],function(e,a,t){"use strict";var n=i(e).default,o=i(a).default,c=i(t).default;function i(e){return e&&e.__esModule?e:{default:e}}o.toInit(function(){var e=c.get("page-id"),a=n("body").hasClass("dashboard");n("#footer").on("click","a",function(){o.trigger("analytics",{name:"confluence.footer.item.click",data:{pageId:e,isDashboard:a}})})})}),require(["confluence-dashboard/utils/footer-analytics"]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.mxgraph.confluence.plugins.diagramly:drawio-blueprint-resources-admin', location = 'js/DiagramlyBlueprintInit.js' */
AJS.toInit(function(){if(Confluence&&Confluence.Blueprint&&Confluence.Blueprint.register){Confluence.Blueprint.register("com.mxgraph.confluence.plugins.diagramly:drawio-blueprint-item",function(b,c,a){window.location=Confluence.getContextPath()+"/pages/createpage.action?spaceKey="+encodeURIComponent(c)+"&newSpaceKey="+encodeURIComponent(c)+(b.getParentPageId()?"&fromPageId="+b.getParentPageId():"")+"&diagramlyBlueprint=1"})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'gliffy/amd/AlmondNoConflictPrefix.js' */
// This was copied from Atlassian's almond-noconflict-pre.js
window.__require = window.require;
window.__requirejs = window.requirejs;
window.__define = window.define;
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'thirdparty/almond.js' */
/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                //Lop off the last part of baseParts, so that . matches the
                //"directory" and not name of the baseName's module. For instance,
                //baseName of "one/two/three", maps to "one/two/three.js", but we
                //want the directory, "one/two" for this normalization.
                name = baseParts.slice(0, baseParts.length - 1).concat(name);

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                    part = name[i];
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                    hasProp(waiting, depName) ||
                    hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                    cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'gliffy/amd/AlmondNoConflictPostfix.js' */
// This was copied from Atlassian's almond-noconflict-post.js

if (window.__require) {
    window.require = window.__require;
    window.requirejs = window.__requirejs;
    window.define = window.__define;
} else {
    // Patch our own version of Almond.
    //
    // If "define.amd" is truthy, some 3rd-party libs (e.g. jQuery, spin.js)
    // automatically register themselves via define(). We don't want that,
    // we'll take care of calling define() for each lib.
    delete window.define.amd;
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'gliffy/amd/ApexModuleManager.js' */
/**
 * Simple mechanism for automatic AMD apex module (such as DOM controllers) instantiation.
 * May not be necessary after integrating RequireJS optimizer.
 *
 * define() passes through all arguments to AMD loader, storing away the ID for instantiation later. So far, all apex
 * classes have only had to add the line "require("gliffy/amd/apexModuleManager")." before the standard AMD define()
 * call.
 *
 * Example use:
 *      <this file toward beginning of batch.js>
 *
 *      require("gliffy/amd/apexModuleManager").
 *      define("my/new/class/id", ...)
 *      define("my/new/class2/id", ...)
 *      ....
 *
 *      ;(function($, apexModuleManager) {
 *          // Wait for DOM to be loaded before instantiating apex modules.
 *          $(function () {
 *              apexModuleManager.instantiateAll();
 *              apexModuleManager.reset();
 *          });
 *      })(require('jquery'), require('gliffy/amd/apexModuleManager'));

 *     <end of batch.js>
 */
define("gliffy/amd/apexModuleManager", function() {
    var apexModuleIds = [];

    return {
        reset: function() {
            apexModuleIds = [];
        },
        define: function() {
            // pass the arguments directly to define(), but register the first argument as module ID.
            apexModuleIds.push(arguments[0]);
            window.define.apply(window, arguments);
        },
        instantiateAll: function() {
            apexModuleIds.forEach(function(apexModuleId) {
                require(apexModuleId);
            });
        }
    };

});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'gliffy/confluence/AlmondRegistrations.js' */
// You can't just bind it directly to jQuery because it is a function, which causes define to try to use it as a
// factory method.

// Remove definition to force libraries to not register themselves with AMD. This is because we need to handle registration ourselves due to Almond's name requirement.
delete define.amd;

define('jquery', [], function() {
    return jQuery;
});

define('underscore', [], function() {
    return _;
});

define('selectize', [], function () {
    return Selectize;
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/Util.js' */
define("gliffy/util", [
], function() {
    "use strict";

    // similar to Java String.format().
    //   Examples:
    //      $.format('{1} is first, {0} is second! {0} {2}', 'B', 'A') === 'A is first, B is second! B undefined';

    return {
        format: function (format) {
            var args = Array.prototype.slice.call(arguments, 1);
            return format.replace(/{(\d+)}/g, function (match, number) {
                return (typeof args[number] != 'undefined') ? args[number] : "undefined";
            });
        },
        htmlDecode: function(input) {
            var e = document.createElement('div');
            e.innerHTML = input;
            return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
        }
    };
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/Url.js' */
/**
 * URL utility functions.
 */
define("gliffy/url", {
    buildPath: function (pathElementArray) {
        return pathElementArray.reduce(function (result, value) {
            if (value == null) {
                return result;
            } else if (result) {
                return result + "/" + encodeURIComponent(value);
            }
            return encodeURIComponent(value);
        }, "");
    },
    buildQuery: function (queryMap) {
        return _.reduce(queryMap, function (result, value, key) {
            if (value == null) {
                return result;
            } else if (result) {
                return result + "&" + encodeURIComponent(key) + "=" + encodeURIComponent(value);
            }
            return encodeURIComponent(key) + "=" + encodeURIComponent(value);
        }, "");
    },
    buildPathAndQuery: function (pathElements, queryMap) {
        var elements = [this.buildPath(pathElements)];

        if((typeof queryMap !== "undefined") && Object.keys(queryMap).length > 0) {
            elements.push(this.buildQuery(queryMap))
        }
        return elements.join("?");
    },
    buildRootedPathAndQuery: function (rootPath, pathElements, queryMap) {
        return rootPath + "/" + this.buildPathAndQuery(pathElements, queryMap);
    },
    "parse": function(url) {
        var regex = /^(?:([a-z]*):)?(?:\/\/)?(?:([^:@]*)(?::([^@]*))?@)?([0-9a-z-._]+)?(?::([0-9]*))?(\/[^?#]*)?(?:\?([^#]*))?(?:#(.*))?$/i;
        var md = url.match(regex) || [];

        var r = {
            "url":    url,
            "scheme": md[1],
            "user":   md[2],
            "pass":   md[3],
            "host":   md[4],
            "port":   md[5] && +md[5],
            "path":   md[6],
            "query":  md[7],
            "hash":   md[8]
        };

        // parse query params
        r.queryParams = {};

        var queryTokens = r.query.split("&");
        for(var tokenIndex = 0; tokenIndex < queryTokens.length; tokenIndex++) {
            var subTokens = queryTokens[tokenIndex].split("=");
            r.queryParams[decodeURIComponent(subTokens[0])] = decodeURIComponent(subTokens[1]);
        }
        return r;
    }
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/controls/alert/Alert.soy' */
// This file was automatically generated from Alert.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace gliffySoy.controls.alert.
 */

if (typeof gliffySoy == 'undefined') { var gliffySoy = {}; }
if (typeof gliffySoy.controls == 'undefined') { gliffySoy.controls = {}; }
if (typeof gliffySoy.controls.alert == 'undefined') { gliffySoy.controls.alert = {}; }


gliffySoy.controls.alert.CompleteAlert = function(opt_data, opt_ignored) {
  return '<div id="gliffy-alert-save-as-complete" class="alert alert-success gliffy-alert"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>' + soy.$$escapeHtml(opt_data.diagramName) + '</strong>&nbsp;' + soy.$$escapeHtml('successfully saved to page') + '&nbsp;<a class="gliffy-alert-link" href="' + soy.$$escapeHtml(opt_data.linkUrl) + '" target="_blank"><img class="page-icon"/><strong>&nbsp;' + soy.$$escapeHtml(opt_data.pageName) + '</strong></a><br/>' + soy.$$escapeHtml('in space') + '&nbsp;<strong>' + soy.$$escapeHtml(opt_data.spaceName) + '</strong></div>';
};
if (goog.DEBUG) {
  gliffySoy.controls.alert.CompleteAlert.soyTemplateName = 'gliffySoy.controls.alert.CompleteAlert';
}


gliffySoy.controls.alert.ErrorAlert = function(opt_data, opt_ignored) {
  return '<div id="gliffy-alert-save-as-error" class="alert alert-error gliffy-alert"><a href="#" class="close" data-dismiss="alert">&times;</a>' + soy.$$filterNoAutoescape(opt_data.errorDetail) + '</div>';
};
if (goog.DEBUG) {
  gliffySoy.controls.alert.ErrorAlert.soyTemplateName = 'gliffySoy.controls.alert.ErrorAlert';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/ObjectValidatorFactory.js' */
/**
 * Utility class for validating an object's values. Useful for constructors.
 */
define("gliffy/objectValidatorFactory", [
    'jquery',
    'underscore',
    'gliffy/util'
    ], function ($, _, util) {
        "use strict";
        var ObjectValidator = function (parameters) {
            // parameters:
            //   keyToPredicateMap
            //       key - the key of the value to pass through predicate (i.e. predicate.func(object[key]))
            //       predicate
            //           func - a function that takes a value and returns a boolean.
            //           failureMessage - the message to display when func(object[key]) == false.
            //
            //   description - string description of the object displayed upon failures.
            //

            var fail = function (key, value, failureMessage) {
                throw new Error(util.format("{0} {1} value ({2}) failed predicate: {3}", parameters.description, key, $.isFunction(value) ? "[function]" : value, failureMessage));
            };

            if (!_.isString(parameters.description)) {
                parameters.description = "ObjectValidator construction parameters";
                fail("description", parameters.description, "Expected value to be a string.");
            }

            if (typeof parameters.keyToPredicateMap === 'undefined') {
                parameters.description = "ObjectValidator construction parameters";
                fail("keyToPredicateMap", parameters.keyToPredicateMap, "Expected value to be defined.");
            }

            $.each(parameters.keyToPredicateMap, function (key, predicate) {
                if (!_.isFunction(predicate.func)) {
                    fail("keyToPredicateMap " + key + ".func", predicate.func, "Expected value to be a function.");
                }
                if (!_.isString(predicate.failureMessage)) {
                    fail("keyToPredicateMap " + key + ".failureMessage", predicate.failureMessage, "Expected value to be a string.");
                }
            });

            this._ = {
                keyToPredicateMap: parameters.keyToPredicateMap,
                fail: fail
            };
        };

        ObjectValidator.prototype.validate = function (value) {
            var self = this;
            if (value == null) {
                throw new Error("ObjectValidator.validate() requires non-null input.");
            }
            $.each(self._.keyToPredicateMap, function (key, predicate) {
                if (!predicate.func(value[key])) {
                    self._.fail(key, value[key], predicate.description);
                }
            });
        }

        return {
            create: function(parameters) {
                return new ObjectValidator(parameters);
            },
            predicates: {
                isString: {
                    func: _.isString,
                    failureMessage: "Expected value to be a string."
                },
                isNumber: {
                    func: _.isNumber,
                    failureMessage: "Expected value to be a number."
                },
                isFunction: {
                    func: _.isFunction,
                    failureMessage: "Expected value to be a function."
                },
                isArray: {
                    func: _.isArray,
                    failureMessage: "Expected value to be an array."
                },
                isTruthy: {
                    func: function (value) {
                        return value == true; // coercion intentional
                    },
                    failureMessage: "Expected value to be truthy."
                },
                isFalsey: {
                    func: function (value) {
                        return value == false; // coercion intentional
                    },
                    failureMessage: "Expected value to be falsey."
                },
                isDefinedAndNotNull: {
                    func: function (value) {
                        return value != null; // coercion intentional, to include undefined.
                    },
                    failureMessage: "Expected value to be defined and not null."
                },
                containsAnyKey: {
                    func: function (value) {
                        return Object.keys(value).length > 0;
                    },
                    failureMessage: "Expected value to contain at least one key."
                }
            }
        };
    }
);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/confluence/PageFacade.js' */
define("gliffy/confluence/pageFacade", [
    "jquery",
    "gliffy/confluence/rest/webRequestPromiseFactory"
], function($, webRequestPromiseFactory) {
    "use strict";

    var unpinPageViewMacroDiagramVersion = function (diagramReference) {
        // get current page content, remove version from appropriate element, update to server, then refresh browser
        var getPageContent = webRequestPromiseFactory.buildGetPageContentPromise(AJS.params.pageId);

        var removeVersionAndPutPageContent = function(page) {
            var bodyStorageHtml = page.body.storage.value;
            // Wrap data in a new div so it can be used with jquery (http://stackoverflow.com/questions/12808770/parsing-of-html-string-using-jquery).
            var wrappedBodyNodes = $('<div/>').append(bodyStorageHtml);

            // remove parameters with empty names
            var emptyParameterNodesToRemove = wrappedBodyNodes.find("ac\\:parameter[ac\\:name='']");
            emptyParameterNodesToRemove.remove();

            // find all the paragraphs that have the same diagram name and version number...
            var matchingParagraphNodes = wrappedBodyNodes.find("p:has(ac\\:parameter[ac\\:name='version'])p:has(ac\\:parameter[ac\\:name='name'])").filter(function () {
                var versionMatches = $(this).find("ac\\:parameter[ac\\:name='version']").text() === diagramReference.version.toString();
                var nameMatches = $(this).find("ac\\:parameter[ac\\:name='name']").text() === diagramReference.name;
                var parameterElement = $(this).find("ac\\:parameter[ac\\:name='pageid']");
                var pageIdMatches = ((parameterElement.length === 0) && (AJS.params.pageId === diagramReference.ownerPageId))
                    || (parameterElement.text() === diagramReference.ownerPageId.toString());
                return versionMatches && nameMatches && pageIdMatches;
            });

            // ... and remove their version elements.
            var versionNodesToRemove = matchingParagraphNodes.find("ac\\:parameter[ac\\:name='version']");
            versionNodesToRemove.remove();

            // prepare page update
            page.body.storage.value = wrappedBodyNodes.html();
            page.version.number = page.version.number + 1;

            // GCONF-1956: Resolve ancestors
            if (page.ancestors) {
                // If page.ancestors is empty, remove it. If there is more than one ancestor, use the last one
                if (page.ancestors.length === 0) {
                    delete page.ancestors;
                } else if (page.ancestors.length > 1) {
                    page.ancestors = [page.ancestors.pop()];
                }
            }
            return webRequestPromiseFactory.buildPutPageContentPromise(AJS.params.pageId, page);
        };

        var reloadBrowserPage = function() {
            window.location.reload();
        };

        $.when(getPageContent).then(removeVersionAndPutPageContent).then(reloadBrowserPage);
    };

    // Since this will be deprecated soon, I am not going to bother abstracting these into the WebRequestPromiseFactory
    var unpinPageViewMacroDiagramVersionWithJsonRpcApi = function (diagramReference) {
        var baseApiUrl = AJS.format("{0}/rpc/json-rpc/confluenceservice-v2", AJS.Confluence.getContextPath());
        var getPageUrl = baseApiUrl + "/getPage";
        var getPageParameters = [AJS.params.pageId];

        $.ajax({
            type : "POST", // must use POST with json-rpc API
            url : getPageUrl,
            contentType: "application/json",
            data: JSON.stringify(getPageParameters),
            success : function(result) {
                var bodyHtml = result.content;

                // Wrap data in a new div so it can be used with jquery (http://stackoverflow.com/questions/12808770/parsing-of-html-string-using-jquery).
                var wrappedBodyNodes = $('<div/>').append(bodyHtml);

                // remove parameters with empty names
                var emptyParameterNodesToRemove = wrappedBodyNodes.find("ac\\:parameter[ac\\:name='']");
                emptyParameterNodesToRemove.remove();

                // find all the paragraphs that have the same diagram name and version number...
                var matchingParagraphNodes = wrappedBodyNodes.find("p:has(ac\\:parameter[ac\\:name='version'])p:has(ac\\:parameter[ac\\:name='name'])").filter(function () {
                    var versionMatches = $(this).find("ac\\:parameter[ac\\:name='version']").text() === String(diagramReference.version);
                    var nameMatches = $(this).find("ac\\:parameter[ac\\:name='name']").text() === diagramReference.name;
                    var parameterElement = $(this).find("ac\\:parameter[ac\\:name='pageid']");
                    var pageIdMatches = ((parameterElement.length === 0) && (AJS.params.pageId === diagramReference.ownerPageId))
                        || (parameterElement.text() === diagramReference.ownerPageId.toString());
                    return versionMatches && nameMatches && pageIdMatches;
                });

                // ... and remove their version elements.
                var versionNodesToRemove = matchingParagraphNodes.find("ac\\:parameter[ac\\:name='version']");
                versionNodesToRemove.remove();

                var updatePageData = {
                    "jsonrpc": "2.0",
                    "method": "updatePage",
                    "params": [
                        {
                            "id": result.id,
                            "space": result.space,
                            "title": result.title,
                            "parentId" : result.parentId,
                            "version": result.version,
                            "content": wrappedBodyNodes.html()
                        },
                        {
                            "versionComment": "Unpinned macro version",
                            "minorEdit": false
                        }
                    ],
                    "id": AJS.params.pageId
                };

                // update via server
                $.ajax({
                    type: "POST",
                    contentType: "application/json",
                    url: baseApiUrl,
                    data: JSON.stringify(updatePageData),
                    success: function () {
                        window.location.reload();
                    }
                });
            }
        });
    };

    var unpinPageEditMacroDiagramVersion = function (diagramReference) {

        if(AJS.Rte && typeof AJS.Rte.getEditor === 'function' && AJS.Rte.getEditor()) {

            // modify the macro to no longer be pinned
            var macroNodeQuery = AJS.format('.editor-inline-macro[data-macro-parameters*="name={0}"]', diagramReference.name);
            var macroNodes = AJS.Rte.getEditor().dom.select(macroNodeQuery);
            AJS.$.each(macroNodes, function (index, macroNode) {
                var diagramReference = getDiagramReference($(macroNode));
                // removing version sets to unpinned and displays nicely in macro chrome
                diagramReference.version = undefined;
                addDiagramReference(diagramReference, macroNode);
            });
        }
    };

    var getMacroParams = function(diagramReference) {
        // clone diagramReference and modify to
        var macroParams = $.extend(true, {}, diagramReference);
        // strip default values
        if(macroParams.ownerPageId !== AJS.params.pageId) {
            macroParams.pageid = macroParams.ownerPageId;
        }
        delete macroParams.ownerPageId;
        if(macroParams.version === 0) {
            delete macroParams.version;
        }
        if(macroParams.size === 'O' || macroParams.size === 'L') {
            delete macroParams.size;
        }
        if(!macroParams.border) {
            delete macroParams.border;
        }
        if(macroParams.chrome === 'full') {
            delete macroParams.chrome;
        }
        if(!!macroParams.html5) {
            delete macroParams.html5;
        }
        return macroParams;
    };

    var getDiagramReferenceFromMacroParams = function(macroParams) {
        return {
            ownerPageId: macroParams['pageid'] || AJS.params.pageId,
            name: macroParams['name'],
            version: macroParams['version'],
            size: macroParams['size'],
            border: macroParams['border'],
            chrome: macroParams['chrome'],
            html5: macroParams['html5'],
            pagePin: macroParams['pagePin']
        }
    };

    var getDiagramReferenceFromMacroContainer = function($macroContainer) {
        return {
            ownerPageId: $macroContainer.data('ceoid') || AJS.params.pageId,
            name: $macroContainer.data('filename'),
            version: $macroContainer.data('version'),
            size: $macroContainer.data('size'),
            border: $macroContainer.data('border'),
            chrome: $macroContainer.data('chrome'),
            html5: $macroContainer.data('html5'),
            diagramAttachmentId: $macroContainer.data('attachmentid')
        };
    };

    var addDiagramReference = function(diagramReference, nodeToReplace) {
        if(AJS.Rte && typeof AJS.Rte.getEditor === 'function' && AJS.Rte.getEditor()) {
            var deferred, params = {
                contentId: Confluence.Editor.getContentId(),
                macro: {
                    name: "gliffy",
                    params: getMacroParams(diagramReference),
                    defaultParameterValue: "",
                    body: ""
                }
            };

            //GCONF-2360
            //if ($.browser.msie && AJS.$.Deferred) {
            //    //remove this once https://jira.atlassian.com/browse/CONF-28418 is fixed
            //    tinymce.confluence.NodeUtils.replaceNode = replaceNode;
            //}

            AJS.Rte.BookmarkManager.restoreBookmark();
            deferred = tinymce.confluence.MacroUtils.insertMacro(params, nodeToReplace);

            if (deferred && deferred.then) {
                deferred.then(function () {
                    if ($.browser.msie) {
                        //remove this once https://jira.atlassian.com/browse/CONF-28418 is fixed
                        tinymce.confluence.NodeUtils.replaceNode = originalReplaceNodeFunction;
                    }
                }, function () {
                    if ($.browser.msie) {
                        //remove this once https://jira.atlassian.com/browse/CONF-28418 is fixed
                        tinymce.confluence.NodeUtils.replaceNode = originalReplaceNodeFunction;
                    }
                });
            }

            //AJS.log("insert gliffy macro");
            fixEditorFocus();
            return deferred;
        } else {
            // TODO: GCONF-2181
            throw "addDiagramReference not yet implemented for non-RTE";
        }
    };

    var getDiagramReference = function($macroContainer) {
        if(AJS.Rte && typeof AJS.Rte.getEditor === 'function' && AJS.Rte.getEditor()) {
            var macroParams = {};
            // Look for data from jQuery node.
            var macroParamsString = $macroContainer.data && $macroContainer.data("macro-parameters");
            // If none, look for data from RTE DOM node.
            macroParamsString = macroParamsString || ($macroContainer.dataset && $macroContainer.dataset.macroParameters);
            // If string found, parse into params object (KEY1=Value1|KEY2=Value2|KEY3=Value|...)
            if (macroParamsString) {
                $.each(macroParamsString.split("|"), function (idx, item) {
                    var param = item.split("=");
                    macroParams[param[0]] = param[1];
                });
            }

            return getDiagramReferenceFromMacroParams(macroParams);
        } else {
            return getDiagramReferenceFromMacroContainer($macroContainer);
        }
    };

    var fixEditorFocus = function () {
        //remove this if chrome+mac gets rid of focus issue.
        if (AJS.Rte && typeof AJS.Rte.getEditorFrame === 'function' && AJS.Rte.getEditorFrame()) {
            $(AJS.Rte.getEditorFrame()).focus();
        }

        // GCONF-1941: fix editor focus. Perhaps AJS.Rte.getEditorFrame may not be set?
        var gliffyEditorIFrame = $("#gliffy-editor")[0];
        if(gliffyEditorIFrame) {
            gliffyEditorIFrame.contentWindow.focus();
        }
    };

    //var updateDiagramReferences = function() {
    //    if(AJS.Rte && AJS.Rte.getEditor()) {
    //
    //        //find all matching macros in the editor iframe
    //        var macros = $(AJS.Rte.getEditor().dom.select('.editor-inline-macro')).filter(function(index, element) {
    //            return $(element).data("macro-name") === 'gliffy';
    //        });
    //
    //        macros.each(function (index, element) {
    //            var $macroContainer = $(element);
    //            var diagramReference = getDiagramReference($macroContainer);
    //            var dataJson = $.toJSON({
    //                contentId : Confluence.Editor.getContentId(),
    //                macro : {
    //                    name : 'gliffy',
    //                    params : {
    //                        pageid: diagramReference.ownerPageId,
    //                        name: diagramReference.name,
    //                        version: diagramReference.version
    //                    },
    //                    body : "", defaultParameterValue : ""
    //                }
    //            });
    //
    //            $.ajax({
    //                type : "POST",
    //                contentType : "application/json; charset=utf-8",
    //                url : Confluence.getContextPath() + "/rest/tinymce/1/macro/placeholder",
    //                data : dataJson,
    //                dataType : "text",
    //                success : function (macroplaceholder) {
    //                    $macroContainer.after(macroplaceholder);
    //                    $macroContainer.remove();
    //                }
    //            });
    //        });
    //
    //    }
    //};

    //remove this once https://jira.atlassian.com/browse/CONF-28418 is fixed
    var originalReplaceNodeFunction = (AJS.Rte && typeof AJS.Rte.getEditor === 'function' && AJS.Rte.getEditor()) ? tinymce.confluence.NodeUtils.replaceNode : null;

    return {
        unpinDiagramReferenceVersion: function(diagramReference) {
            if(AJS.Rte && typeof AJS.Rte.getEditor === 'function' && AJS.Rte.getEditor()) {
                unpinPageEditMacroDiagramVersion(diagramReference);
            } else {
                var versionComponents = AJS.version.split('.');
                var useJsonRpcApi = !(parseInt(versionComponents[0]) >= 5 && parseInt(versionComponents[1]) >= 4);

                if (useJsonRpcApi) {
                    unpinPageViewMacroDiagramVersionWithJsonRpcApi(diagramReference);
                } else {
                    unpinPageViewMacroDiagramVersion(diagramReference);
                }
            }
        },

        //updateDiagramReferences: updateDiagramReferences,

        addDiagramReference: addDiagramReference,

        getDiagramReference: getDiagramReference,

        getDiagramReferences: function() {
            var diagramReferences = [];
            var $macroContainers;

            if(AJS.Rte && typeof AJS.Rte.getEditor === 'function' && AJS.Rte.getEditor()) {
                $macroContainers = $("iframe").contents().find(".editor-inline-macro[data-macro-name='gliffy']");
            } else {
                $macroContainers = $(".gliffy-container");
            }

            $macroContainers.each(function (index, macroContainer) {
                diagramReferences.push(getDiagramReference($(macroContainer)));
            });
            return diagramReferences;
        }
    };
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/confluence/rest/UrlFactory.js' */
define("gliffy/confluence/rest/urlFactory", [
    "gliffy/url"
], function(url) {
    "use strict";

    //GCONF-2677: following line sets the Confluence base url based on browser location instead of Confluence base URL.
    var confluenceBaseUrl = window.location.protocol + "//" + window.location.host + AJS.contextPath();

    var rootGliffyApiUrl = confluenceBaseUrl + "/rest/gliffy/1.0";

    return {
        buildPrependDiagramToPageUrl: function(parameters) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "diagrams",
                    "saveas",
                    parameters.sourcePageId,
                    parameters.sourceDiagramName
                ],
                {
                    sourceDiagramVersion: parameters.sourceDiagramVersion,
                    targetPageId: parameters.targetPageId,
                    space: parameters.targetSpaceKey,
                    targetDiagramName: parameters.targetDiagramName,
                    targetPageTitle: parameters.targetPageTitle,
                    includeAlertLinkUrlParams: parameters.includeAlertLinkUrlParams
                }
            );
        },

        buildGetSpacesUrl: function (startIndex, countLimit) {
            // Works only on 5.5+, but is Confluence native and probably faster
            //return $.ajax(GLIFFY.baseConfluenceUrl + "/rest/api/space?start=" + startIndex + "&limit=" + countLimit);

            // Works on 5.1+
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "spaces"
                ],
                {
                    start: startIndex,
                    limit: countLimit
                }
            );
        },

        buildSpaceSearchUrl: function (searchString, startIndex, countLimit, page) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "spaces"
                ],
                {
                    searchTerm: searchString,
                    start: startIndex,
                    limit: countLimit,
                    page: page
                }
            );
            return rootGliffyApiUrl + "/" + pathAndQuery;
        },

        // Works only on 5.5+
        //var buildPageSearchUrl = function(searchString, spaceKeys, startIndex, countLimit) {
        //    var cql = "type=page ";
        //
        //    if(spaceKeys) {
        //        cql += "and (";
        //        spaceKeys.forEach(function(key, index) {
        //            if(index > 0) {
        //                cql += " or ";
        //            }
        //            cql += 'space=' + key;
        //        });
        //        cql += ") ";
        //    }
        //
        //    if(searchString) {
        //        cql += 'and title ~'"' + searchString + '"';
        //    }
        //
        //    var url = rootConfluenceApiUrl + "/rest/api/content/search?cql=" + encodeURIComponent(cql);
        //    url += "&start=" + startIndex + "&limit=" + countLimit + "&expand=space";
        //
        //    return url;
        //}

        buildPageSearchUrl: function (searchString, spaceKeys, startIndex, countLimit) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "page",
                    "search"
                ],
                {
                    searchTerm: searchString || "",
                    start: startIndex,
                    limit: countLimit,
                    expand: 'space',
                    spaceKeys: spaceKeys && spaceKeys.join(",")
                }
            );
        },

        // We must pass in the rootGliffyAPI separately from what's configured above, since
        // AJS.params.baseUrl and GLIFFY.baseConfluenceUrl are not always set when this is called
        buildPageEditPermissionUrl: function(gliffyAPIRootServiceURL, pageId) {
            return AJS.format("{0}/ceo/{1}/permission", gliffyAPIRootServiceURL, pageId);
        },

        buildGetDiagramsInPageUrl: function (pageId) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "page",
                    pageId,
                    "diagrams"
                ]
            );
        },

        buildPageWithTitleExistsInSpaceUrl: function (pageTitle, spaceKey) {
            return confluenceBaseUrl + '/rest/api/content?' + 'spaceKey=' + spaceKey +
                    '&title=' + encodeURIComponent(pageTitle);
        },

        buildUnlinkDiagramUrl: function(parameters) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "diagrams",
                    "unlink",
                    parameters.sourcePageId,
                    parameters.sourceDiagramName
                ],
                {
                    sourceDiagramVersion: parameters.sourceDiagramVersion,
                    targetPageId: parameters.targetPageId,
                    targetDiagramName: parameters.targetDiagramName
                }
            );
        },

        buildPageContentUrl: function(pageId) {
            return AJS.format("{0}/rest/api/content/{1}?expand=body.storage,version,space,ancestors", confluenceBaseUrl, pageId);
        },

        buildEditDiagramPermissionUrl: function(ownerPageId, diagramName) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "ceo",
                    ownerPageId,
                    "diagrams",
                    diagramName,
                    "permission"
                ]
            );
        },

        buildCreateAttachmentPermissionUrl: function(ownerPageId) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "ceo",
                    ownerPageId,
                    "permission"
                ]
            );
        },

        buildPropertyUrl: function(propertyId) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "properties",
                    propertyId
                ]
            );
        },

        buildDiagramPreviewImageUrl: function(ownerPageId, diagramName, diagramVersion) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "diagrams",
                    "preview"
                ],
                {
                    name: diagramName,
                    pageId: ownerPageId,
                    version: diagramVersion
                }
            );
        },

        buildDiagramThumbnailImageUrl: function(ownerPageId, diagramName, diagramVersion) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "diagrams",
                    "thumbnail"
                ],
                {
                    name: diagramName,
                    pageId: ownerPageId,
                    version: diagramVersion
                }
            );
        },

        buildGetDiagramVersionsUrl: function(ownerPageId, diagramName) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "diagrams",
                    "allVersionInformation"
                ],
                {
                    pageId: ownerPageId,
                    name: diagramName
                }
            );
        },

        buildCreateEmbedLinkUrl: function () {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "embeddedDiagrams"
                ]
            );
        },

        buildDeactivateEmbedLinkUrl: function () {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "embeddedDiagrams",
                    "deactivate"
                ]
            );
        }
    };
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/confluence/rest/WebRequestPromiseFactory.js' */
/**
 * Central place for creating promises in order to abstract URLs from controller code, as well as providing a means for
 * asynchronous mocks/testing.
 *
 * NOTE: /confluence/rest/api/* are only present in Confluence 5.5+
 */
define("gliffy/confluence/rest/webRequestPromiseFactory", [
        "jquery",
        "gliffy/confluence/rest/urlFactory"
    ], function($, urlFactory) {
        "use strict";


        return {
            /**
             * AJAX response spec
             *   pageTitle: the title of the page that was modified
             *   spaceName: the name of the space containing the page that was modified
             *   targetPageUrl: a URL that links to the page that was modified. This URL is relative to the base Confluence URL.
             */
            buildPrependDiagramToPagePromise: function (parameters) {

                var postUrl = urlFactory.buildPrependDiagramToPageUrl(parameters);

                /**
                 * GCONF-2306: Save-as operation (from the Gliffy editor). If we have access to the Gliffy editor stage, then send the diagram
                 * content directly from the stage. This ensures that any unsaved changes made to the stage will be properly transferred during
                 * the save-as operation. If we do not have access to the editor, then the POST url has sufficient parameters to copy the attachment.
                 */
                if (window.GLIFFY && window.GLIFFY.Mouse && window.GLIFFY.Mouse.editor) {

                    var gliffyEditor = window.GLIFFY.Mouse.editor;
                    var diagramObject = gliffyEditor.getDocumentManager().getActiveDocument().toObject(); // diagram content from the editor stage
                    var gliffyEditorStage = gliffyEditor.getDocumentManager().getActiveStage();

                    // Show a spinner while we export the image
                    if (window.GLIFFY.Spinner) {
                        window.GLIFFY.Spinner.show($('body'));
                    }

                    // Get image data from the Editor stage
                    return gliffyEditor.getDocumentManager().getImageData(gliffyEditorStage, "image/png", function(imageDataUrl, deferred) {
                        diagramObject.image = imageDataUrl;
                        deferred.resolve(diagramObject);
                    }, false, 1).then(function() {
                        return gliffyEditor.getDocumentManager().getHTMLData(gliffyEditorStage)
                    }).then(function(html) {
                        diagramObject.html = html;
                        // Then return a promise that makes a POST request to the server, containing the diagram and image data url
                        return $.ajax({
                            type: "POST",
                            contentType: "application/json",
                            data: JSON.stringify(diagramObject),
                            url: postUrl
                        });
                    });
                } else {
                    /**
                     * Copy-to operation (from the Confluence macro viewer): the Gliffy editor is not available.
                     * Do not send raw diagram and image data to the REST endpoint, and instead use the attachment pointers to copy the attachments.
                     */
                    return $.post(postUrl);
                }
            },

            /**
             * AJAX directly returned by Atlassian REST interface
             */
            buildGetSpacesPromise: function (startIndex, countLimit) {
                return $.get(urlFactory.buildGetSpacesUrl(startIndex, countLimit));
            },

            /**
             * AJAX directly returned by Atlassian REST interface
             */
            buildSpaceSearchPromise: function (searchString, startIndex, countLimit, page) {
                return $.get(urlFactory.buildSpaceSearchUrl(searchString, startIndex, countLimit, page));
            },

            /**
             * AJAX directly returned by Atlassian REST interface
             */
            buildPageSearchPromise: function (searchString, spaceKeys, startIndex, countLimit) {
                return $.get(urlFactory.buildPageSearchUrl(searchString, spaceKeys, startIndex, countLimit));
            },

            /**
             * AJAX response spec
             *   array of
             *     id: the diagram id
             *     title: the title of the diagram
             *     fileName: the filename of the diagram
             */
            buildGetDiagramsInPagePromise: function (pageId) {
                return $.get(urlFactory.buildGetDiagramsInPageUrl(pageId));
            },

            /**
             * AJAX response spec
             *   exists: boolean
             */
            buildPageWithTitleExistsInSpacePromise: function (pageTitle, spaceKey) {
                return $.get(urlFactory.buildPageWithTitleExistsInSpaceUrl(pageTitle, spaceKey));
            },

            buildUnlinkDiagramPromise: function(parameters) {
                return $.post(urlFactory.buildUnlinkDiagramUrl(parameters));
            },

            buildGetPageContentPromise: function(pageId) {
                return $.ajax(urlFactory.buildPageContentUrl(pageId));
            },

            buildPutPageContentPromise: function(pageId, pageContent) {
                return $.ajax({
                    type: "PUT",
                    contentType: "application/json; charset=utf-8",
                    url: urlFactory.buildPageContentUrl(pageId),
                    data: JSON.stringify(pageContent),
                    dataType: "text",
                    processData: false
                });
            },

            buildGetEditPagePermissionPromise: function(gliffyAPIRootServiceURL, pageId) {
                return $.ajax({
                    type: 'GET',
                    url: urlFactory.buildPageEditPermissionUrl(gliffyAPIRootServiceURL, pageId),
                    dataType: "json",
                    cache: false
                });
            },

            buildGetEditDiagramPermissionPromise: function(pageId, diagramName) {
                return $.ajax({
                    type: 'GET',
                    url: urlFactory.buildEditDiagramPermissionUrl(pageId, diagramName),
                    dataType:"json",
                    cache:false
                });
            },

            buildGetCreateAttachmentPermissionPromise: function(pageId) {
                return $.ajax({
                    type: 'GET',
                    url: urlFactory.buildCreateAttachmentPermissionUrl(pageId),
                    dataType:"json",
                    cache:false
                });
            },

            buildGetPropertyValuePromise: function(propertyId) {
                var deferred = new $.Deferred();
                $.get(urlFactory.buildPropertyUrl(propertyId)).then(function(response) {
                    deferred.resolve(response[propertyId]);
                });
                return deferred;
            },

            buildGetDiagramVersionsPromise: function(ownerPageId, diagramName) {
                return $.get(urlFactory.buildGetDiagramVersionsUrl(ownerPageId, diagramName));
            }
        };
    }
);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/controls/imageselection/ImageSelectionControl.soy' */
// This file was automatically generated from ImageSelectionControl.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace gliffySoy.widget.image.
 */

if (typeof gliffySoy == 'undefined') { var gliffySoy = {}; }
if (typeof gliffySoy.widget == 'undefined') { gliffySoy.widget = {}; }
if (typeof gliffySoy.widget.image == 'undefined') { gliffySoy.widget.image = {}; }


gliffySoy.widget.image.gliffyImageSelectionWidget = function(opt_data, opt_ignored) {
  return '<div class="gliffy-image-selection"><div class="gliffy-image-selection-inner-panel" title="' + soy.$$escapeHtml(opt_data.labelText) + '"><div class="gliffy-image-selection-spinner"/><div><img class="gliffy-image-selection-image" src="' + soy.$$escapeHtml(opt_data.imageUrl) + '"/><div class="gliffy-image-selection-icon gliffy-image-selection-zoom"><img/></div></div></div><div class="gliffy-image-selection-label">' + soy.$$escapeHtml(opt_data.labelText) + '</div></div>';
};
if (goog.DEBUG) {
  gliffySoy.widget.image.gliffyImageSelectionWidget.soyTemplateName = 'gliffySoy.widget.image.gliffyImageSelectionWidget';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/controls/imageselection/ImageSelectionControlFactory.js' */
define("gliffy/controls/imageselection/imageSelectionControlFactory", [
        "jquery",
        "gliffy/objectValidatorFactory"
    ], function ($, objectValidatorFactory) {
        "use strict";
        var ImageSelectionControl = function (parameters) {
            var self = this;

            objectValidatorFactory.create({
                description: "ListTable constructor parameters",
                keyToPredicateMap: {
                    "parent": objectValidatorFactory.predicates.isDefinedAndNotNull,
                    "labelText": objectValidatorFactory.predicates.isString,
                    "imageUrl": objectValidatorFactory.predicates.isString
                }
            }).validate(parameters);

            var parameters = $.extend({
                isSelected: false
            }, parameters);

            var html = gliffySoy.widget.image.gliffyImageSelectionWidget(parameters);
            var domRoot = $(html).appendTo(parameters.parent);

            domRoot.on('click', function(event) {
                self.setIsSelected(true);
            });

            //GCONF-2013 fancybox is deprecated, use image previewer but fall back to
            //fancy box if it is not available
            var previewImage = domRoot.find(".gliffy-image-selection-image");
            var zoomButton = domRoot.find(".gliffy-image-selection-zoom");

            if (previewImage.previewer) {
                zoomButton.previewer({
                    src: previewImage.attr('src'),
                    type: 'image/png',
                    zindex: 10000
                });
            } else {
                zoomButton.on('click', function (event) {
                    var content = previewImage.clone();
                    // modify style
                    content.removeClass('gliffy-image-selection-image');
                    content.addClass('gliffy-image-selection-fancybox-image');
                    $.fancybox({
                        orig: previewImage,
                        content: content,
                        showCloseButton: true,
                        hideOnOverlayClick: true,
                        hideOnContentClick: true
                    });
                });
            }

            this._ = {
                domRoot: domRoot,
                labelText: parameters.labelText,
                imageUrl: parameters.imageUrl,
                isSelected: !parameters.isSelected, // set as opposite so that setIsSelected() below will trigger events
                selectionChangedListeners: [],
            };

            this.setIsSelected(parameters.isSelected);
        };

        ImageSelectionControl.prototype.getIsSelected = function () {
            return this._.isSelected;
        };

        ImageSelectionControl.prototype.setIsSelected = function (isSelected) {
            if(this._.isSelected === isSelected) {
                return;
            }

            this._.isSelected = isSelected;
            if(isSelected) {
                this._.domRoot.addClass("gliffy-image-selected");
            } else {
                this._.domRoot.removeClass("gliffy-image-selected");
            }

            var self = this;
            this._.selectionChangedListeners.forEach(function (listener) {
                listener({
                    source:self,
                    isSelected:isSelected
                });
            });
        };

        ImageSelectionControl.prototype.getDomRoot = function () {
            return this._.domRoot;
        };

        ImageSelectionControl.prototype.addSelectionChangedListener = function (listener) {
            this._.selectionChangedListeners.push(listener);
        };

        return {
            create: function(parameters) {
                return new ImageSelectionControl(parameters);
            }
        };
    }
);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/confluence/versionselection/VersionSelectionDialog.soy' */
// This file was automatically generated from VersionSelectionDialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace gliffySoy.dialog.version.
 */

if (typeof gliffySoy == 'undefined') { var gliffySoy = {}; }
if (typeof gliffySoy.dialog == 'undefined') { gliffySoy.dialog = {}; }
if (typeof gliffySoy.dialog.version == 'undefined') { gliffySoy.dialog.version = {}; }


gliffySoy.dialog.version.versionSelectionDialogBody = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui top-label"><div class="gliffy-version-dialog-panel"><div class="gliffy-version-dialog-description">' + soy.$$escapeHtml(opt_data.promptText) + '</div><div class="gliffy-image-selection-widget-area"/></div></form>';
};
if (goog.DEBUG) {
  gliffySoy.dialog.version.versionSelectionDialogBody.soyTemplateName = 'gliffySoy.dialog.version.versionSelectionDialogBody';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/confluence/versionselection/VersionSelectionDialogFactory.js' */
/**
 * Save As/CopyTo dialog common logic.
 */
define("gliffy/confluence/versionselection/versionSelectionDialogFactory",
    [
        "jquery",
        "gliffy/controls/imageselection/imageSelectionControlFactory",
        "gliffy/objectValidatorFactory"
    ],
    function($, imageSelectionControlFactory, objectValidatorFactory) {
        "use strict";

        // GCONF-1922: Add diagram thumbnails to pinned version dialogs.
        //
        // PARAMETERS:
        //   parameters
        //   - headerText: Text to display in header area of dialog.
        //   - promptText: Text to display above image selection widgets.
        //   - attachmentVersion: The number of the pinned version.
        //   - diagramName: the name of the diagram (included in macro).
        //   - ownerPageId: ID of page that diagram is contained within.
        //   - referencePageId: ID of page that diagram reference is contained within.
        //   - pinnedIsDefault: true if pinned version should be default selection, false if latest version should be default selection.
        //   - onComplete: A callback that gets executed up dialog dismissal.
        //      * Argument pinnedVersionWasSelected: true if pinned version selected, false if latest version is selected.
        var VersionSelectionDialog = function (parameters) {
            var self = this;
            var parameters = $.extend({
                onCancel: function () {
                    // intentionally empty
                }
            }, parameters);
            objectValidatorFactory.create({
                description: "VersionSelectionDialog constructor parameters",
                keyToPredicateMap: {
                    "headerText": objectValidatorFactory.predicates.isString,
                    "promptText": objectValidatorFactory.predicates.isString,
                    "attachmentVersion": objectValidatorFactory.predicates.isNumber,
                    "diagramName": objectValidatorFactory.predicates.isString,
                    "ownerPageId": objectValidatorFactory.predicates.isDefinedAndNotNull,
                    "referencePageId": objectValidatorFactory.predicates.isDefinedAndNotNull,
                    "pinnedIsDefault": objectValidatorFactory.predicates.isDefinedAndNotNull,
                    "onComplete": objectValidatorFactory.predicates.isFunction
                }
            }).validate(parameters);

            this._ = {
                hasBeenShown: false,
                parameters: parameters,
                pinnedVersionIsSelected: parameters.pinnedIsDefault,
                buildDom: function () {
                    var bodyHtml = gliffySoy.dialog.version.versionSelectionDialogBody({
                        promptText: parameters.promptText
                    });

                    var dom = $(bodyHtml);

                    var widgetArea = dom.find(".gliffy-image-selection-widget-area");
                    var pinnedVersionControl = imageSelectionControlFactory.create({
                        parent: widgetArea,
                        labelText: AJS.format("Version {0}", parameters.attachmentVersion),
                        imageUrl: AJS.format('{0}/download/attachments/{1}/{2}.png?api=v2&version={3}&modificationDate=0', self._.parameters.contextPath, self._.parameters.ownerPageId, encodeURIComponent(self._.parameters.diagramName), self._.parameters.attachmentVersion),
                        isSelected: parameters.pinnedIsDefault
                    });

                    var latestVersionControl = imageSelectionControlFactory.create({
                        parent: widgetArea,
                        labelText: "Latest",
                        imageUrl: AJS.format('{0}/download/attachments/{1}/{2}.png?api=v2&timestamp={3}&version={4}',
                                                self._.parameters.contextPath,
                                                self._.parameters.ownerPageId,
                                                encodeURIComponent(self._.parameters.diagramName),
                                                new Date().getTime(),
                                                self._.parameters.pagePin || 0),
                        isSelected: !parameters.pinnedIsDefault
                    });

                    pinnedVersionControl.getDomRoot().addClass("left");
                    latestVersionControl.getDomRoot().addClass("right");

                    pinnedVersionControl.addSelectionChangedListener(function(event) {
                        if(event.isSelected) {
                            latestVersionControl.setIsSelected(false);
                            self._.pinnedVersionIsSelected = true;
                        }
                    });

                    latestVersionControl.addSelectionChangedListener(function(event) {
                        if(event.isSelected) {
                            pinnedVersionControl.setIsSelected(false);
                            self._.pinnedVersionIsSelected = false;
                        }
                    });

                    return dom;
                }
            }
        };

        VersionSelectionDialog.prototype.show = function () {
            var self = this;
            if (self._.hasBeenShown) {
                throw new Error("versionSelectionDialogFactory can be shown only once per instance lifetime.");
            }

            var dialog = new AJS.Dialog({
                width: 600,
                height: 380,
                closeOnOutsideClick: false
            });
            dialog.addHeader(self._.parameters.headerText);
            dialog.addPanel("", self._.buildDom(), "panel-body");

            dialog.addLink("Cancel", function (dialog) {
                dialog.remove();
            }, 'aui-button gliffy-dialog-cancel');

            dialog.addButton("Select", function (dialog) {
                dialog.remove();
                self._.parameters.onComplete(self._.pinnedVersionIsSelected);
            });
            dialog.show();
            self._.hasBeenShown = true;
        };

        return {
            create: function(parameters) {
                return new VersionSelectionDialog(parameters);
            }
        }
    }
);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/confluence/versionselection/VersionSelectionDialogController.js' */
define("gliffy/confluence/versionselection/versionSelectionDialogController",
    [
        "jquery",
        "gliffy/objectValidatorFactory",
        "gliffy/confluence/versionselection/versionSelectionDialogFactory"
    ],
    function($, objectValidatorFactory, versionSelectionDialogFactory) {
        "use strict";

        return {
            // Creates a diagram which asks the user whether to unpin the recently edited diagram.
            //
            // PARAMETERS:
            //   options
            //   - attachmentVersion: The number of the pinned version.
            //   - diagramName: the name of the diagram (included in macro).
            //   - ownerPageId: ID of page that diagram is contained within.
            //   - referencePageId: ID of page that diagram reference is contained within.
            //   - onComplete: A callback that gets executed up dialog dismissal.
            //      * Argument pinnedVersionWasSelected: true if pinned version selected, false if latest version is selected.

            showUnpinMacroDiagramVersionDialog: function (parameters) {
                versionSelectionDialogFactory.create($.extend({
                    headerText: "Select Diagram Version to Display",
                    promptText: AJS.format("Version {0} is currently pinned to this page. Which version would you like to display?", parameters.attachmentVersion),
                    pinnedIsDefault: false
                }, parameters)).show();
            },

            showSelectVersionToEditDialog: function (parameters) {
                versionSelectionDialogFactory.create($.extend({
                    headerText: "Select Diagram Version to Edit",
                    promptText: AJS.format("Version {0} is currently pinned to this page. Which version you would like to edit?", parameters.attachmentVersion),
                    pinnedIsDefault: true
                }, parameters)).show();
            }
        };

    }
);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/confluence/versionselection/VersionSelectionController.js' */
/**
 * Responsible for attaching to events and handling local storage "cookie" checks
 */

// Register as apex module so this module can be instantiated after everybody is registered.
require("gliffy/amd/apexModuleManager").
define("gliffy/confluence/versionselection/versionSelectionController", [
    "jquery",
    "gliffy/url",
    "gliffy/confluence/pageFacade",
    "gliffy/confluence/versionselection/versionSelectionDialogController"
], function($, url, pageFacade, versionSelectionDialogController) {
    "use strict";

    // check for edited pinned version local storage "cookie"
    var checkForEdit = function () {
        var diagramEditedDataString = window.localStorage.getItem("com.gliffy.confluence.diagram.edited");
        if (diagramEditedDataString) {
            window.localStorage.removeItem("com.gliffy.confluence.diagram.edited");
            var data = JSON.parse(diagramEditedDataString);
            if (data) {
                // Execute only when there is an element that matches the data.referencePageId parameter.
                var parsedUrlParameters = url.parse(data.url).queryParams;
                var attachmentVersion = 0;
                if (parsedUrlParameters.originalAttachmentVersion) {
                    attachmentVersion = parseInt(parsedUrlParameters.originalAttachmentVersion);
                } else if (parsedUrlParameters.attachmentVersion) {
                    attachmentVersion = parseInt(parsedUrlParameters.attachmentVersion);
                }

                var diagramReferencesThatMatch = pageFacade.getDiagramReferences().filter(function (diagramReference) {
                    // TODO: GCONF-2181 This will probably have issues with linked diagrams.
                    return (diagramReference.name === parsedUrlParameters.name);
                });
                var isPinned = parsedUrlParameters.isPinned === "true" ? true : false;
                if (attachmentVersion > 0 && isPinned && (parsedUrlParameters.inline === "true" || diagramReferencesThatMatch.length > 0)) {
                    var diagramReference = {
                        ownerPageId: parsedUrlParameters.ceoid,
                        name: parsedUrlParameters.name,
                        version: attachmentVersion
                    };

                    versionSelectionDialogController.showUnpinMacroDiagramVersionDialog({
                        ownerPageId: diagramReference.ownerPageId,
                        diagramName: diagramReference.name,
                        attachmentVersion: diagramReference.version,
                        referencePageId: AJS.params.pageId,
                        contextPath: AJS.Confluence.getContextPath(),
                        onComplete: function (pinnedVersionWasSelected) {
                            if (!pinnedVersionWasSelected) {
                                pageFacade.unpinDiagramReferenceVersion(diagramReference);
                            }
                        }
                    });
                }
            }
        }
    }

    AJS.bind("gliffy.confluence.inlineEditorClosed", function () {
        checkForEdit();
    });

    $(function () {
        checkForEdit();
    });
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/confluence/editor/EditorLauncher.js' */
define("gliffy/confluence/editor/editorLauncher",
    [
        "jquery",
        "gliffy/objectValidatorFactory",
        "gliffy/confluence/versionselection/versionSelectionDialogController"
    ],
    function($, objectValidatorFactory, versionSelectionDialogController) {
        "use strict";

        var determineWhetherToDisplayInitialDialog = function(contextPath, diagramName, ownerPageId, attachmentVersion, callback) {
            if (attachmentVersion && attachmentVersion > 0) {
                $.ajax({
                    url: contextPath + '/rest/gliffy/1.0/diagrams/allVersionInformation',
                    type: 'GET',
                    data: {
                        name: diagramName,
                        pageId: ownerPageId
                    },
                    success: function (response) {
                        callback(response.numRevisions !== parseInt(attachmentVersion));
                    },
                    error: function (response) {
                        callback(false);
                    }
                });
            } else {
                callback(false);
            }
        }

        //url: linkUrl,
        //    attachmentVersion: attachmentVersion,
        //    ownerPageId: parsedUrlParameters.ceoid,
        //    referencePageId: parsedUrlParameters.pageId,
        //    diagramName: parsedUrlParameters.name
        return {
            launchEditorFromViewPage: function (parameters) {
                parameters = $.extend({
                    contextPath: AJS.Confluence.getContextPath()
                }, parameters);

                window.open(parameters.url, '_self');
            },
            launchEditorFromEditPage: function(parameters) {
                parameters = $.extend({
                    contextPath: AJS.Confluence.getContextPath()
                }, parameters);
                parameters.isPinned = (parameters.attachmentVersion) ? true : false;
                parameters.attachmentVersion = parameters.attachmentVersion;
                AJS.trigger("gliffy.confluence.launchInlineEditor", [parameters]);
            }
        };
    }
);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-spinner', location = 'gliffy/GliffySpinner.js' */
/*
    Wrapper to implement spinners in confluence plugin.  Supports the Raphael spinner, and falls back to
    a spinjs spinner if Raphael spinner is not supported.  The spinjs fallback was added because the Editor
    appears to have compatability issues with the Atlassian spinners when running under earlier versions of confluence.
    This feature may be removable when supportfor Confluence 5.1.5 is depricated.

    use:

        //create a spinner object
        var spinner = new GliffySpinner([element to insert the spinner into], [optiond])

        options can be the following:
            inline: boolean. If true the spinner is added into the normal layout.  If false, the spinner is superimposed
                    and centered over the container element
            color: color of the spinner lines.
            radius: radius of the spinner
            other: If this is a spinjs spinner, this following option are also available.  The defaults are set to
                   resemble an Atlassian spinner as mush as possible.
 */


define("GliffySpinner", [
    "thirdparty/spinjs"
], function(SpinJs) {
        "use strict";

        var getZIndex = function(el) {
            var zIndex;
            var i=0;
            do {
                zIndex = $(el).css('z-index');
                el = $(el).parent()[0];
                i++;
            } while (isNaN(zIndex) && el.tagName);
            if (isNaN(zIndex)) {
                zIndex = 0;
            }
            return zIndex;
        };

        var GliffySpinner = function (parent, options) {

            options = options || {};
            options.radius = options.radius || 20;
            options.color = options.color || '#000';

            $(parent).prepend('<span></span>');
            this.container= $(parent).find('span').get(0);
            $(this.container)
                .addClass('gliffy-spinner-container');
            if (options.inline) {
                $(this.container).css('position', 'relative');
                this.inline = true;
            } else {
                var zIndex = getZIndex(parent);
                $(this.container)
                    .css('position', 'absolute')
                    .css('z-index', zIndex+1);
            }
            var r = options.radius;
            options.length = 0.5*r;
            options.radius = 0.5*r;
            options.lines = 12;
            options.corners = 1.0;
            options.width = 0.4*options.length;
            var gliffySpinner = SpinJs();
            var spinner = new gliffySpinner.Spinner(options).spin();
            this.container.appendChild(spinner.el);
            if (!options.inline) {
                $(this.container)
                    .css('left', $(parent).width() / 2 - $(this.container).width() / 2)
                    .css('top', $(parent).height() / 2 - $(this.container).height() / 2);
            }
            $(this.container).hide();

            //function to start/display the spinner
            this.start = function() {

                if ($(this.container).parent().css('position') === 'static') {
                    //absolutely positioned elements are positioned relatively to the nearest POSITIONED ancestor
                    //so make relative if static, position will remain unchanged it
                    if (!this.inline) {
                        $(this.container).parent().css('position', 'relative');
                        this.positioned = true;
                    }
                }
                $(this.container).show();
            };

            //function to stop the spinner
            this.stop = function() {

                if (this.positioned) {
                    $(parent).parent().css('position', 'static');
                    this.positioned = false;
                }
                $(this.container).hide();
            };
        };

        return GliffySpinner;
    });
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-spinner', location = 'thirdparty/spin.js' */
/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 * http://spin.js.org/
 *
 * Example:
 var opts = {
      lines: 12,            // The number of lines to draw
    , length: 7,            // The length of each line
    , width: 5,             // The line thickness
    , radius: 10            // The radius of the inner circle
    , scale: 1.0            // Scales overall size of the spinner
    , corners: 1            // Roundness (0..1)
    , color: '#000'         // #rgb or #rrggbb
    , opacity: 1/4          // Opacity of the lines
    , rotate: 0             // Rotation offset
    , direction: 1          // 1: clockwise, -1: counterclockwise
    , speed: 1              // Rounds per second
    , trail: 100            // Afterglow percentage
    , fps: 20               // Frames per second when using setTimeout()
    , zIndex: 2e9           // Use a high z-index by default
    , className: 'spinner'  // CSS class to assign to the element
    , top: '50%'            // center vertically
    , left: '50%'           // center horizontally
    , shadow: false         // Whether to render a shadow
    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
    , position: 'absolute'  // Element positioning
    }
 var target = document.getElementById('foo')
 var spinner = new Spinner(opts).spin(target)
 */

//modified for almond - Jan Revis@Gliffy
define('thirdparty/spinjs', [

], function() {

    return function() {
        var spinner = new Object();
        (function (root, factory) {

            /* CommonJS */
            if (typeof exports == 'object') module.exports = factory()

            /* AMD module */
            else if (typeof define == 'function' && define.amd) define(factory)

            /* Browser global */
            else root.Spinner = factory()
        }(spinner, function () {
            "use strict";

            var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
                , animations = {} /* Animation rules keyed by their name */
                , useCssAnimations /* Whether to use CSS animations or setTimeout */
                , sheet
            /* A stylesheet to hold the @keyframe or VML rules. */

            /**
             * Utility function to create elements. If no tag name is given,
             * a DIV is created. Optionally properties can be passed.
             */
            function createEl(tag, prop) {
                var el = document.createElement(tag || 'div')
                    , n

                for (n in prop) el[n] = prop[n]
                return el
            }

            /**
             * Appends children and returns the parent.
             */
            function ins(parent /* child1, child2, ...*/) {
                for (var i = 1, n = arguments.length; i < n; i++) {
                    parent.appendChild(arguments[i])
                }

                return parent
            }

            /**
             * Creates an opacity keyframe animation rule and returns its name.
             * Since most mobile Webkits have timing issues with animation-delay,
             * we create separate rules for each line/segment.
             */
            function addAnimation(alpha, trail, i, lines) {
                var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
                    , start = 0.01 + i / lines * 100
                    , z = Math.max(1 - (1 - alpha) / trail * (100 - start), alpha)
                    , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
                    , pre = prefix && '-' + prefix + '-' || ''

                if (!animations[name]) {
                    sheet.insertRule(
                        '@' + pre + 'keyframes ' + name + '{' +
                        '0%{opacity:' + z + '}' +
                        start + '%{opacity:' + alpha + '}' +
                        (start + 0.01) + '%{opacity:1}' +
                        (start + trail) % 100 + '%{opacity:' + alpha + '}' +
                        '100%{opacity:' + z + '}' +
                        '}', sheet.cssRules.length)

                    animations[name] = 1
                }

                return name
            }

            /**
             * Tries various vendor prefixes and returns the first supported property.
             */
            function vendor(el, prop) {
                var s = el.style
                    , pp
                    , i

                prop = prop.charAt(0).toUpperCase() + prop.slice(1)
                if (s[prop] !== undefined) return prop
                for (i = 0; i < prefixes.length; i++) {
                    pp = prefixes[i] + prop
                    if (s[pp] !== undefined) return pp
                }
            }

            /**
             * Sets multiple style properties at once.
             */
            function css(el, prop) {
                for (var n in prop) {
                    el.style[vendor(el, n) || n] = prop[n]
                }

                return el
            }

            /**
             * Fills in default values.
             */
            function merge(obj) {
                for (var i = 1; i < arguments.length; i++) {
                    var def = arguments[i]
                    for (var n in def) {
                        if (obj[n] === undefined) obj[n] = def[n]
                    }
                }
                return obj
            }

            /**
             * Returns the line color from the given string or array.
             */
            function getColor(color, idx) {
                return typeof color == 'string' ? color : color[idx % color.length]
            }

            // Built-in defaults

            var defaults = {
                lines: 12             // The number of lines to draw
                , length: 7             // The length of each line
                , width: 5              // The line thickness
                , radius: 10            // The radius of the inner circle
                , scale: 1.0            // Scales overall size of the spinner
                , corners: 1            // Roundness (0..1)
                , color: '#000'         // #rgb or #rrggbb
                , opacity: 1 / 4          // Opacity of the lines
                , rotate: 0             // Rotation offset
                , direction: 1          // 1: clockwise, -1: counterclockwise
                , speed: 1              // Rounds per second
                , trail: 100            // Afterglow percentage
                , fps: 20               // Frames per second when using setTimeout()
                , zIndex: 2e9           // Use a high z-index by default
                , className: 'spinner'  // CSS class to assign to the element
                , top: '50%'            // center vertically
                , left: '50%'           // center horizontally
                , shadow: false         // Whether to render a shadow
                , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
                , position: 'absolute'  // Element positioning
            }

            /** The constructor */
            function Spinner(o) {
                this.opts = merge(o || {}, Spinner.defaults, defaults)
            }

            // Global defaults that override the built-ins:
            Spinner.defaults = {}

            merge(Spinner.prototype, {
                /**
                 * Adds the spinner to the given target element. If this instance is already
                 * spinning, it is automatically removed from its previous target by calling
                 * stop() internally.
                 */
                spin: function (target) {
                    this.stop()

                    var self = this
                        , o = self.opts
                        , el = self.el = createEl(null, {className: o.className})

                    css(el, {
                        position: o.position
                        , width: 0
                        , zIndex: o.zIndex
                        , left: o.left
                        , top: o.top
                    })

                    if (target) {
                        target.insertBefore(el, target.firstChild || null)
                    }

                    el.setAttribute('role', 'progressbar')
                    self.lines(el, self.opts)

                    if (!useCssAnimations) {
                        // No CSS animation support, use setTimeout() instead
                        var i = 0
                            , start = (o.lines - 1) * (1 - o.direction) / 2
                            , alpha
                            , fps = o.fps
                            , f = fps / o.speed
                            , ostep = (1 - o.opacity) / (f * o.trail / 100)
                            , astep = f / o.lines

                            ;
                        (function anim() {
                            i++
                            for (var j = 0; j < o.lines; j++) {
                                alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

                                self.opacity(el, j * o.direction + start, alpha, o)
                            }
                            self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
                        })()
                    }
                    return self
                }

                /**
                 * Stops and removes the Spinner.
                 */
                , stop: function () {
                    var el = this.el
                    if (el) {
                        clearTimeout(this.timeout)
                        if (el.parentNode) el.parentNode.removeChild(el)
                        this.el = undefined
                    }
                    return this
                }

                /**
                 * Internal method that draws the individual lines. Will be overwritten
                 * in VML fallback mode below.
                 */
                , lines: function (el, o) {
                    var i = 0
                        , start = (o.lines - 1) * (1 - o.direction) / 2
                        , seg

                    function fill(color, shadow) {
                        return css(createEl(), {
                            position: 'absolute'
                            ,
                            width: o.scale * (o.length + o.width) + 'px'
                            ,
                            height: o.scale * o.width + 'px'
                            ,
                            background: color
                            ,
                            boxShadow: shadow
                            ,
                            transformOrigin: 'left'
                            ,
                            transform: 'rotate(' + ~~(360 / o.lines * i + o.rotate) + 'deg) translate(' + o.scale * o.radius + 'px' + ',0)'
                            ,
                            borderRadius: (o.corners * o.scale * o.width >> 1) + 'px'
                        })
                    }

                    for (; i < o.lines; i++) {
                        seg = css(createEl(), {
                            position: 'absolute'
                            ,
                            top: 1 + ~(o.scale * o.width / 2) + 'px'
                            ,
                            transform: o.hwaccel ? 'translate3d(0,0,0)' : ''
                            ,
                            opacity: o.opacity
                            ,
                            animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
                        })

                        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px #000'), {top: '2px'}))
                        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
                    }
                    return el
                }

                /**
                 * Internal method that adjusts the opacity of a single line.
                 * Will be overwritten in VML fallback mode below.
                 */
                , opacity: function (el, i, val) {
                    if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
                }

            })


            function initVML() {

                /* Utility function to create a VML tag */
                function vml(tag, attr) {
                    return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
                }

                // No CSS transforms but VML support, add a CSS rule for VML elements:
                sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

                Spinner.prototype.lines = function (el, o) {
                    var r = o.scale * (o.length + o.width)
                        , s = o.scale * 2 * r

                    function grp() {
                        return css(
                            vml('group', {
                                coordsize: s + ' ' + s
                                , coordorigin: -r + ' ' + -r
                            })
                            , {width: s, height: s}
                        )
                    }

                    var margin = -(o.width + o.length) * o.scale * 2 + 'px'
                        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
                        , i

                    function seg(i, dx, filter) {
                        ins(
                            g
                            , ins(
                                css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx})
                                , ins(
                                    css(
                                        vml('roundrect', {arcsize: o.corners})
                                        , {
                                            width: r
                                            , height: o.scale * o.width
                                            , left: o.scale * o.radius
                                            , top: -o.scale * o.width >> 1
                                            , filter: filter
                                        }
                                    )
                                    , vml('fill', {color: getColor(o.color, i), opacity: o.opacity})
                                    , vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
                                )
                            )
                        )
                    }

                    if (o.shadow)
                        for (i = 1; i <= o.lines; i++) {
                            seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
                        }

                    for (i = 1; i <= o.lines; i++) seg(i)
                    return ins(el, g)
                }

                Spinner.prototype.opacity = function (el, i, val, o) {
                    var c = el.firstChild
                    o = o.shadow && o.lines || 0
                    if (c && i + o < c.childNodes.length) {
                        c = c.childNodes[i + o];
                        c = c && c.firstChild;
                        c = c && c.firstChild
                        if (c) c.opacity = val
                    }
                }
            }

            if (typeof document !== 'undefined') {
                sheet = (function () {
                    var el = createEl('style', {type: 'text/css'})
                    ins(document.getElementsByTagName('head')[0], el)
                    return el.sheet || el.styleSheet
                }());

                var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

                if (!vendor(probe, 'transform') && probe.adj) initVML()
                else useCssAnimations = vendor(probe, 'animation')
            }

            return Spinner

        }));
        return spinner;
    }
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = 'js/gliffy-on-confluence-init.js' */
AJS.toInit(function() {

    // Replaces Gliffy attachments with our icon and text
    AJS.$('table.attachments tr').each(function(trIndex, trElement) {
        AJS.$(trElement).find("td.attachment-actions a").each(function(aIndex, aElement) {
            if (AJS.$(aElement).attr("href").indexOf("/plugins/gliffy/view") != -1) {
                AJS.$(trElement).find("td.filename-column span")
                        .removeClass("icon-file-xml icon-file-unknown")
                        .addClass("gliffy-document-icon")
                        .attr("title", "Gliffy File")
                        .text("Gliffy File");
            }
        });
    });
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = 'js/gliffy-blueprint-registration.js' */
AJS.toInit(function() {

    //moved from gliffy-on-confluence-init.js so we can include this in both the global and admin web contexts
    if (Confluence && Confluence.Blueprint && Confluence.Blueprint.register){

        //direct to gliffy blank page
        Confluence.Blueprint.register('com.gliffy.integration.confluence:gliffy-blueprint-item-main', function(createDialog, spaceKey, createFunction){
            window.location = Confluence.getContextPath() + "/pages/createpage.action?showGliffyMacro=true&fromCreateDialog=true" +
                "&spaceKey=" + encodeURIComponent(spaceKey) +
                "&newSpaceKey=" + encodeURIComponent(spaceKey) +
                (createDialog.getParentPageId() ? '&fromPageId=' + createDialog.getParentPageId() : '');
        });

        //direct to a template
        var registerTemplate = function(type){
            Confluence.Blueprint.register('com.gliffy.integration.confluence:gliffy-blueprint-item-'+type, function(createDialog, spaceKey, createFunction){
                window.location = Confluence.getContextPath() + "/pages/createpage.action?showGliffyMacro=true&createDiagramType=" + type +
                    "&spaceKey=" + encodeURIComponent(spaceKey) +
                    "&newSpaceKey=" + encodeURIComponent(spaceKey) +
                    (createDialog.getParentPageId() ? '&fromPageId=' + createDialog.getParentPageId() : '');
            });
        };
        var templateCategories = ['org', 'network', 'software'];
        for (var i=0; i<templateCategories.length; i++){
            registerTemplate(templateCategories[i]);
        }



        //To pack dialog
        Confluence.Blueprint.register('com.gliffy.integration.confluence:gliffy-blueprint-item-pack', function(createDialog, spaceKey, createFunction){

            var page = createDialog.addPage("myplugin-step-2"),
                createHandler = function () {
                    // Called when the user clicks the Submit button
                    var title = $('#my-title').val();
                    var myName = $('#my-text-field').val();
                    createFunction(title, { myName: myName });
                };

            //todo: AJS.I18n.getText() doesn't have our keys yet, so need to figure out a solution to localize this
            var html = '<div class="template-select-container-body"><ol class="templates" tabindex="100"><li class="template selected"data-item-module-complete-key="com.gliffy.integration.confluence:gliffy-blueprint-item-main"><imgclass="template-preview"src="/confluence/s/en_GB-1988229788/4103/31cc10c48352e244f00edd8fa27d95566a28e0c5.1/0.0-SNAPSHOT/_/download/resources/com.gliffy.integration.confluence:gliffy-blueprint-item-main/icon"><div class="template-meta"><div class="template-name" title="Gliffy Diagram">Corporate Org Chart</div><div class="template-description" title="Add a blank page with a Gliffy Diagram.">Add a page with a Corporate Org Chart</div></div></li><li class="template"data-item-module-complete-key="com.gliffy.integration.confluence:gliffy-blueprint-item-pack"><imgclass="template-preview"src="/confluence/s/en_GB-1988229788/4103/31cc10c48352e244f00edd8fa27d95566a28e0c5.1/0.0-SNAPSHOT/_/download/resources/com.gliffy.integration.confluence:gliffy-blueprint-item-pack/icon"><div class="template-meta"><div class="template-name" title="Gliffy Human Resources Pack">Reimbursement Process</div><div class="template-description" title="Choose from a list of diagrams relating to Human Resources.">Add a page with that shows a Reimbursement Process in your organization</div></div></li><li class="template"data-item-module-complete-key="com.gliffy.integration.confluence:gliffy-blueprint-item-pack"><imgclass="template-preview"src="/confluence/s/en_GB-1988229788/4103/31cc10c48352e244f00edd8fa27d95566a28e0c5.1/0.0-SNAPSHOT/_/download/resources/com.gliffy.integration.confluence:gliffy-blueprint-item-pack/icon"><div class="template-meta"><div class="template-name" title="Gliffy Human Resources Pack">Termination Process</div><div class="template-description" title="Choose from a list of diagrams relating to Human Resources.">Shows you how to fire the guy who had ten too many tequila shots at the last company party.</div></div></li></ol></div>';
            page.addHeader("Gliffy Human Resources Pack")
                .addPanel("SinglePanel", html, "singlePanel")
                .addButton("Previous", function (dialog) {
                    dialog.prevPage();
                    dialog.page.pop(); // remove this page / step when we move back.
                }, "")
                .addButton("Create", createHandler, "aui-button-primary create-dialog-create-button")
                .addLink("Close", function (dialog) {
                    dialog.remove();
                }, "");
            page.getPanel(0).setPadding(0);
            /* focus first text field */
            $("#my-title").focus();
            /* submit form if user hits enter inside any text field */
            $("#myplugin-form").submit(function () {
                createHandler(createDialog);
                return false;
            });
            return false;
    //            window.location = Confluence.getContextPath() + "/pages/createpage.action?showGliffyMacro=true" +
    //                "&spaceKey=" + encodeURIComponent(spaceKey) +
    //                "&newSpaceKey=" + encodeURIComponent(spaceKey);

        });
    }

});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = 'js/gliffy-footer.js' */
AJS.toInit(function() {

    // AJS.template is not available until 3.0
    if (AJS.version >= "3.0") {
        // Adds markup to the global footer
        var poweredByNode = AJS.$("#poweredby:visible");
        if (poweredByNode.length > 0) {
            poweredByNode.before(AJS.template.load("gliffy-webpanel-footer"));
        }
    }

});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = 'gliffy/confluence/ContextFinalizer.js' */
/**
 * Exists to require, and therefore execute, application-level bits like DOM controllers.
 * This must be included as the final resource of the web-resource definition
 */
;(function($, apexModuleManager) {
    // Wait for DOM to be loaded before instantiating apex modules.
    $(function () {
        apexModuleManager.instantiateAll();
        apexModuleManager.reset();
    });
})(require('jquery'), require('gliffy/amd/apexModuleManager'));


}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:help-dialog-extension', location = '/jira/help-dialog.js' */
if(Confluence.KeyboardShortcuts){Confluence.KeyboardShortcuts.Editor.push({context:"editor.actions",descKey:"\u63d2\u5165Jira\u95ee\u9898/\u8fc7\u6ee4\u5668"+":",keys:[["Ctrl+Shift+J"]]})};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-mentions-plugin:help-dialog-extension', location = 'js/help-dialog.js' */
AJS.toInit(function($) {
    // Add the shortcut to the shortcuts dialog
    Confluence.KeyboardShortcuts && Confluence.KeyboardShortcuts.Autoformat.push(
        {
            action: "@",
            context: "autoformat.autocomplete",
            description: "\u63d0\u5230"
        });
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.component.dialog2', location = 'aui.chunk.8dfc581e537092369347--79cee1339050bf73f760.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.component.dialog2"],{"0+IH":function(i,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.dialog2=void 0;var t=a("p4ys");Object.defineProperty(e,"dialog2",{enumerable:!0,get:function(){return function(i){return i&&i.__esModule?i:{default:i}}(t).default}}),a("AehQ"),a("ZO0i")},ZO0i:function(i,e,a){},p4ys:function(i,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=s(a("+x/D")),u=s(a("TmQU")),n=s(a("KloK")),o=s(a("jEnx")),l=s(a("6RZY")),d=s(a("+ay7"));function s(i){return i&&i.__esModule?i:{default:i}}var f={"aui-focus":"false","aui-blanketed":"true"};var c='\n        <section role="dialog" class="aui-layer aui-dialog2 aui-dialog2-medium" aria-hidden="true">\n            <header class="aui-dialog2-header">\n                <h2 class="aui-dialog2-header-main"></h2>\n                <a class="aui-dialog2-header-close">\n                    <span class="aui-icon aui-icon-small aui-iconfont-close-dialog">Close</span>\n                </a>\n            </header>\n            <div class="aui-dialog2-content"></div>\n            <footer class="aui-dialog2-footer"></footer>\n        </section>';function r(i){this.$el=i?(0,t.default)(i):(0,t.default)(c),function(i){t.default.each(f,function(e,a){var t="data-"+e;i[0].hasAttribute(t)||i.attr(t,a)})}(this.$el)}r.prototype.on=function(i,e){return(0,o.default)(this.$el).on(i,e),this},r.prototype.off=function(i,e){return(0,o.default)(this.$el).off(i,e),this},r.prototype.show=function(){return(0,o.default)(this.$el).show(),this},r.prototype.hide=function(){return(0,o.default)(this.$el).hide(),this},r.prototype.remove=function(){return(0,o.default)(this.$el).remove(),this},r.prototype.isVisible=function(){return(0,o.default)(this.$el).isVisible()};var h=(0,l.default)("dialog2",r);h.on=function(i,e){return o.default.on(i,".aui-dialog2",e),this},h.off=function(i,e){return o.default.off(i,".aui-dialog2",e),this},(0,t.default)(document).on("click keydown",".aui-dialog2-header-close",function(i){("click"===i.type||i.keyCode===d.default.ENTER||i.keyCode===d.default.SPACE)&&(i.preventDefault(),h((0,t.default)(i.target).closest(".aui-dialog2")).hide())}),h.on("show",function(i,e){e.find(".aui-dialog2-header-close").attr("tabindex",0);var a;[".aui-dialog2-content",".aui-dialog2-footer",".aui-dialog2-header"].some(function(i){return(a=e.find(i).find(":aui-tabbable")).length}),a&&a.first().focus()}),h.on("hide",function(i,e){var a=(0,o.default)(e);e.data("aui-remove-on-hide")&&a.remove()}),(0,u.default)("aui/dialog2",h),(0,n.default)("dialog2",h),e.default=h,i.exports=e.default}},[["0+IH","runtime","aui.splitchunk.vendors--e54c7c7304","aui.splitchunk.172ffb6da7","aui.splitchunk.b0831cc7d0","aui.splitchunk.087aba7911","aui.splitchunk.fbd1a5ab27","aui.splitchunk.54d3f16c20","aui.splitchunk.e54c7c7304","aui.splitchunk.f5828f5ab9","aui.splitchunk.fb15cffa72","aui.splitchunk.f673ef53ac","aui.splitchunk.8659b532c1","aui.splitchunk.d0110a864f","aui.splitchunk.afa5039e04","aui.splitchunk.bff3715233","aui.splitchunk.c750721820","aui.splitchunk.6d6f245ed3","aui.splitchunk.5b8c290363"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = '/includes/js/page-loading-indicator.js' */
define("confluence/page-loading-indicator",["jquery","underscore","ajs","confluence/templates"],function(c,g,a,h){return function(b){function d(){return c(".confluence-page-loading-blanket",b)}function e(){return c(".confluence-loading-indicator",b)}return{show:function(){0===d().length&&c(b).append(h.pageLoadingIndicator());d().show();e().spin({lines:12,length:8,width:4,radius:10,trail:60,speed:1.5,color:"#F0F0F0"})},hide:function(){e().stop();d().hide()},showUntilResolved:function(c,b){this.show();
c.always(g.bind(this.hide,this));b&&c.fail(function(){a.messages.error(".confluence-page-loading-errors",{body:b})})},showUntilDialogVisible:function(b,d){var f=this,e=d||"\u8fde\u63a5\u5230\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5\u3002",g=c(".aui-dialog:visible"),h=c(".aui-dialog2:visible");!g.length&&!h.length&&f.show();b.always(f.hide).fail(function(){a.messages.error(".confluence-page-loading-errors",{body:e})});a.bind("show.dialog",function i(){a.unbind("show.dialog",i);f.hide()});if(null!=a.dialog2&&void 0!=a.dialog2)a.dialog2.on("show",
function j(){a.dialog2.off("show",j);f.hide()})},destroy:function(){b.remove(".confluence-page-loading-blanket")}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/page-loading-indicator","Confluence.PageLoadingIndicator");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = '/includes/soy/page-loading-indicator.soy' */
// This file was automatically generated from page-loading-indicator.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }


Confluence.Templates.pageLoadingIndicator = function(opt_data, opt_ignored) {
  return '<div class="confluence-page-loading-errors"></div><div class="confluence-page-loading-blanket aui-blanket" aria-hidden="false"><div class="confluence-loading-indicator"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.pageLoadingIndicator.soyTemplateName = 'Confluence.Templates.pageLoadingIndicator';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:deferred-loaders', location = '/includes/js/deferred-dialog-loader.js' */
define("confluence/deferred-dialog-loader",["underscore","jquery","ajs","confluence/page-loading-indicator","confluence/api/event"],function(c,d,i,j,b){return function(){var k=j(d("body")),e,g=!1,h=!1,f=function(){g&&h&&e&&(b.trigger(e),e=void 0)};b.bind("page.move.dialog.ready",function(){g=!0;f()});b.bind("blogpost.move.dialog.ready",function(){h=!0;f()});c.each({movePageDialogTools:{resource:"confluence.web.resources:page-move-resources",selector:"#action-move-page-dialog-link",event:"deferred.page-move.tools-menu"},
movePageDialogEditor:{resource:"confluence.web.resources:page-move-resources",selector:"#rte-button-location",event:"deferred.page-move.editor"},moveBlogDialogTools:{resource:"confluence.web.resources:page-move-resources",selector:"#action-move-blogpost-dialog-link",event:"deferred.blog-move.tools-menu"},availableGadgetsHelp:{resource:"com.atlassian.confluence.plugins.gadgets:gadget-directory-resources",selector:"#gadget-directory-link",event:"deferred.available-gadgets.help-menu"},aboutConfluenceHelp:{resource:"confluence.web.resources:about",
selector:"#confluence-about-link",event:"deferred.about-confluence.help-menu"}},function(a){d("body").on("click",a.selector,function(c){var d=a.resource+".requested",f=WRM.require("wr!"+a.resource,function(){"confluence.web.resources:page-move-resources"!==a.resource?b.trigger(a.event):g&&h?b.trigger(a.event):e=a.event});k.showUntilDialogVisible(f);i.Analytics?i.Analytics.triggerPrivacyPolicySafeEvent(d):b.trigger("analyticsEvent",{name:d});c.preventDefault()})})}});
require("confluence/module-exporter").safeRequire("confluence/deferred-dialog-loader",function(c){require("ajs").toInit(c)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:deferred-loaders', location = '/includes/js/page-permissions-deferred-loader.js' */
define("confluence/page-permissions-deferred-loader","confluence/dark-features confluence/legacy ajs confluence/page-loading-indicator jquery wrm".split(" "),function(a,b,c,d,e,f){var g=d(e("body"));return function(a){var b=f.require("wr!com.atlassian.confluence.plugins.confluence-page-restrictions-dialog:dialog-resources",function(){c.trigger("deferred.page.permissions")});g.showUntilDialogVisible(b,"\u88c5\u8f7d\u9875\u9762\u9650\u5236\u65f6\u51fa\u9519\uff0c\u8bf7\u91cd\u65b0\u5c1d\u8bd5\u3002");a.preventDefault()}});
require("confluence/module-exporter").safeRequire("confluence/page-permissions-deferred-loader",function(a){var b=require("ajs");b.toInit(function(c){c("body").on("click","#rte-button-restrictions,#action-page-permissions-link",a);b.bind("system-content-metadata.open-restrictions-dialog",a)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:navigator-context', location = '/includes/js/api/navigator-context.js' */
define("confluence/api/navigator-context",["confluence/meta","document"],function(g,b){var h=function(a){a=d(a);return"undefined"!==typeof a&&0!==a},d=function(a){a=g.get(a);if(!isNaN(a))return Number(a)},i=function(){return!!b.querySelector(".page.view")||!!b.querySelector(".blogpost.view")},e=function(){return!!b.querySelector(".page.edit")||!!b.querySelector(".blogpost.edit")},f=function(){return g.get("content-type")},c=function(){return d("page-id")};return{getCurrent:function(){return e()&&
0===c()&&h("draft-id")?{target:"contentcreate",context:{contentId:d("draft-id"),contentType:f()}}:e()&&!i()&&0!==c()?{target:"contentedit",context:{contentId:c(),contentType:f()}}:!e()&&i()&&h("page-id")?{target:"contentview",context:{contentId:c(),contentType:f()}}:{target:"unknown",context:{}}}}});
}catch(e){WRMCB(e)};