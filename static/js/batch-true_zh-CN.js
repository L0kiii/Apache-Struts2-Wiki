WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'soy/pagetree.soy' */
// This file was automatically generated from pagetree.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Pagetree.Macro.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Pagetree == 'undefined') { Confluence.Templates.Pagetree = {}; }
if (typeof Confluence.Templates.Pagetree.Macro == 'undefined') { Confluence.Templates.Pagetree.Macro = {}; }


Confluence.Templates.Pagetree.Macro.loadingIndicator = function(opt_data, opt_ignored) {
  return '<div class="plugin_pagetree_children_loading_wrapper"><div class="spinner"/><span class="plugin_pagetree_children_loading">' + soy.$$escapeHtml('Loading...') + '</span></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Pagetree.Macro.loadingIndicator.soyTemplateName = 'Confluence.Templates.Pagetree.Macro.loadingIndicator';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'com/atlassian/confluence/plugins/pagetree/resource/javascript/pagetree.js' */
(function(){var a=function(j){this.$=j;var f=this.$;var y=999;var z=true;var i=false;var u={};var c={};var k=function(I,E,J,D,B){var G=I.dataset.expanded==="true";if(E==undefined||E==null){E=!G}if(J==undefined||J==null){J=0}var F=I.getAttribute("data-children-loaded")==="true";if(G!==E){var C=I.getAttribute("data-page-id")+"-"+I.getAttribute("data-tree-id");var H=f("#children"+C);if(F){if(E==z){I.classList.remove("aui-iconfont-chevron-right");I.classList.add("aui-iconfont-chevron-down");I.setAttribute("data-expanded",true);I.setAttribute("aria-expanded",true)}else{I.classList.remove("aui-iconfont-chevron-down");I.classList.add("aui-iconfont-chevron-right");I.setAttribute("data-expanded",false);I.setAttribute("aria-expanded",false)}if(E==z){if(B==false){H.slideDown(300)}else{H.removeClass("plugin-pagetree-hide-children");H.animate({opacity:1})}}else{if(B==false){H.slideUp(300)}else{H.animate({opacity:0},{complete:function(){H.addClass("plugin-pagetree-hide-children")}})}}if(D){p(C)}}else{h(I,C,new Array(),J,"",D,B,true)}}if(D){p(C)}};var g=function(D,C,B){x(D,z,C,B)};var v=function(D,C,B){x(D,i,C,B)};var x=function(G,E,D,C){e(G);var F=f("#"+G);var B=F.find('a.plugin_pagetree_childtoggle[data-type="toggle"]');B.each(function(H){k(this,E,y,H==B.length-1,C)});D.preventDefault();D.stopPropagation()};var s=function(B){if(!B||B==undefined){return null}if(B.indexOf("plusminus")!=-1){return B.substring("plusminus".length)}if(B.indexOf("children")!=-1){return B.substring("children".length)}return null};var b=function(B){if(!B||B==undefined){return null}return o(B)[1]};var o=function(B){if(!B||B==undefined){return null}return B.split("-")};var e=function(C){var B=b(C);f("div.plugin_pagetree").each(function(D){if(D==B){f(this).find("span.plugin_pagetree_status").removeClass("hidden");f(this).find("div.plugin_pagetree_expandcollapse").addClass("hidden")}})};var p=function(C){var B=b(C);f("div.plugin_pagetree").each(function(D){if(D==B){f(this).find("span.plugin_pagetree_status").addClass("hidden");f(this).find("div.plugin_pagetree_expandcollapse").removeClass("hidden")}})};var d=function(G,E,L,I,H,D,C,J,F,K){var B=u[G];if(E=="Orphan"){B+="&hasRoot=false&spaceKey="+H}else{B+="&hasRoot=true&pageId="+E}B+="&treeId="+G+"&startDepth="+I+"&mobile="+C;f.each(L,function(){B+="&ancestors="+this});if(J){B+="&loadMore=true"}if(F!=null){B+="&elementsAfter="+F}if(K!=null){B+="&elementsBefore="+K}B+="&treePageId="+D;if(C==false){B=(AJS.params.serverUrl||"")+B}return B};var n=function(D){var C=D;var B=null;f("div.plugin_pagetree").each(function(E){if(E==C){B=f(this)}});return B};var m=function(B){var C=B.children("fieldset");var D=new Object();if(C.length>0){C.children("input").each(function(){D[this.name]=this.value})}return D};var l=function(B){var D=B.children("fieldset");var E=new Array();if(D.length>0){var C=D.children("fieldset");if(C.length>0){C.children("input").each(function(){E.push(this.value)})}}return E};var r=function(B){var C=f(document.createElement("div"));C.html(B);return C.find("ul[id^='child_ul']").length};var h=function(F,J,B,U,K,E,C,S,G,O,L,H){var Q=J;var I=E;var R=o(J);var M=R[0];var D=R[1];var V=f("#children"+J);var P=m(n(D));var T=false;function W(){if(O||L){F.innerHTML="Loading..."}else{var X=Confluence.Templates.Pagetree.Macro.loadingIndicator();V.find(".plugin_pagetree_children_loading_wrapper .spinner").spin("small");if(L){V.html(X+V.html())}else{V.append(X)}}}var N=0;if(typeof H!=="undefined"&&H){N=f("#"+H).offset().top}if(S){setTimeout(function(){if(!T){W()}},250)}else{W()}f.ajax({type:"GET",url:d(D,M,B,U,P.spaceKey,P.treePageId,C,G,O,L),dataType:"text",success:function(Y){if(r(Y)){f(".plugin_pagetree_children_loading_wrapper").remove();if(L!=null){var X=V.html();V.html(Y+X)}else{V.append(Y)}T=true;if(typeof H!=="undefined"){var Z=f("#"+H).offset().top-N;document.getElementsByClassName("acs-side-bar")[0].scrollTop=document.getElementsByClassName("acs-side-bar")[0].scrollTop+Z}if(V.children().length&&V.hasClass("hidden")){V.removeClass("hidden")}f("#plusminus"+Q).addClass("aui-iconfont-chevron-down").removeClass("aui-iconfont-chevron-right");f("#childrenspan"+c[parseInt(D)]+"-"+D).addClass("plugin_pagetree_current");if(I){p(Q)}if(typeof F!=="undefined"){F.setAttribute("data-children-loaded",true);F.setAttribute("data-expanded",true);F.setAttribute("aria-expanded",true)}if(O){f("#children"+J+" > ul > .page-tree-load-more-link-after").remove()}if(L){f("#children"+J+" > ul > .page-tree-load-more-link-before").remove()}q(V);if(AJS.PageGadget&&AJS.PageGadget.contentsUpdated){AJS.PageGadget.contentsUpdated()}}else{window.location=P.loginUrl}AJS.trigger("pagetree-children-loaded")},error:function(X){if(X.status=="403"){V.text(P["i18n-pagetree.error.permission"])}else{V.text(P["i18n-pagetree.error.general"])}}})};var q=function(B){f("div.plugin_pagetree_children_container:empty",B).addClass("hidden")};function t(F){var E=F.target;var D=E.getAttribute("data-type");var C=F.currentTarget.getAttribute("data-mobile")==="true";if(D==="toggle"){F.preventDefault();F.stopPropagation();k(F.target,null,null,null,C)}else{if(D==="load-all-after"){var I=E.getAttribute("data-last-rendered-id");var H=E.getAttribute("data-page-id")+"-"+E.getAttribute("data-tree-id");h(F.target,H,new Array(),null,"","",C,false,true,I,null)}else{if(D==="load-all-before"){var B=E.getAttribute("data-first-rendered-id");var H=E.getAttribute("data-page-id")+"-"+E.getAttribute("data-tree-id");var G="childrenspan"+B+"-"+E.getAttribute("data-tree-id");h(F.target,H,new Array(),null,"","",C,false,false,null,B,G)}else{return}}}F.preventDefault();F.stopPropagation()}var w=function(B,G,I){B[0].addEventListener("click",t,{passive:false});var E=m(B);var H=E.noRoot=="true";var D=H?"Orphan-"+G:E.rootPageId+"-"+G;var C=E.mobile=="true";if(C){B[0].setAttribute("data-mobile",C)}u[G]=E.treeRequestId;if(C==false){c[G]=AJS.params.pageId}else{c[G]=f("div.content-container").parent().attr("data-content-id")}B.children("fieldset").each(function(){var J=f(this);J.children("input[treeId]").attr("value",G);J.children("input[rootPage]").attr("value",D)});if(H){B.find("div.plugin_pagetree_children").attr("id","childrenOrphan-"+G);B.find("a.plugin_pagetree_expandall").click(function(J){g("childrenOrphan-"+G,J,C);return false});B.find("a.plugin_pagetree_collapseall").click(function(J){v("childrenOrphan-"+G,J,C);return false})}else{B.find("div.plugin_pagetree_children").attr("id","children"+D);B.find("a.plugin_pagetree_expandall").click(function(J){g("children"+D,J,C);return false});B.find("a.plugin_pagetree_collapseall").click(function(J){v("children"+D,J,C);return false})}var F=l(B);h(undefined,D,F,E.startDepth,E.spaceKey,"",C,false,I,null,null)};this.initPageTrees=function(B){f("div.plugin_pagetree").each(function(C){w(f(this),C,B)});A()};var A=function(){var B=self.placeFocus;if(B){self.placeFocus=function(){var C=f("form[name='pagetreesearchform']");C.attr("name","inlinecommentform");B();C.attr("name","pagetreesearchform")}}};f(".open-flyout-to-search").bind("click",function(B){if(f(".fly-out-open").length){setTimeout(function(){ConfluenceMobile.flyout.hide()},400)}else{setTimeout(function(){ConfluenceMobile.flyout.show()},400)}B.stopPropagation();B.preventDefault()})};Confluence=Confluence||{};Confluence.Plugins=Confluence.Plugins||{};Confluence.Plugins.PagetreeMacro={bind:function(b){var c=new a(b);c.initPageTrees(false)}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'com/atlassian/confluence/plugins/pagetree/resource/javascript/pagetree-desktop.js' */
AJS.toInit(function(a){Confluence.Plugins.PagetreeMacro.bind(a)});
}catch(e){WRMCB(e)};
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
if(Confluence.KeyboardShortcuts){Confluence.KeyboardShortcuts.Editor.push({context:"editor.actions",descKey:"Insert Jira Issue/Filter"+":",keys:[["Ctrl+Shift+J"]]})};
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
            description: "Mention"
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
c.always(g.bind(this.hide,this));b&&c.fail(function(){a.messages.error(".confluence-page-loading-errors",{body:b})})},showUntilDialogVisible:function(b,d){var f=this,e=d||"An error has occurred connecting to the server. Please try again.",g=c(".aui-dialog:visible"),h=c(".aui-dialog2:visible");!g.length&&!h.length&&f.show();b.always(f.hide).fail(function(){a.messages.error(".confluence-page-loading-errors",{body:e})});a.bind("show.dialog",function i(){a.unbind("show.dialog",i);f.hide()});if(null!=a.dialog2&&void 0!=a.dialog2)a.dialog2.on("show",
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
define("confluence/page-permissions-deferred-loader","confluence/dark-features confluence/legacy ajs confluence/page-loading-indicator jquery wrm".split(" "),function(a,b,c,d,e,f){var g=d(e("body"));return function(a){var b=f.require("wr!com.atlassian.confluence.plugins.confluence-page-restrictions-dialog:dialog-resources",function(){c.trigger("deferred.page.permissions")});g.showUntilDialogVisible(b,"There was an error loading the page restrictions. Please try again later.");a.preventDefault()}});
require("confluence/module-exporter").safeRequire("confluence/page-permissions-deferred-loader",function(a){var b=require("ajs");b.toInit(function(c){c("body").on("click","#rte-button-restrictions,#action-page-permissions-link",a);b.bind("system-content-metadata.open-restrictions-dialog",a)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:navigator-context', location = '/includes/js/api/navigator-context.js' */
define("confluence/api/navigator-context",["confluence/meta","document"],function(g,b){var h=function(a){a=d(a);return"undefined"!==typeof a&&0!==a},d=function(a){a=g.get(a);if(!isNaN(a))return Number(a)},i=function(){return!!b.querySelector(".page.view")||!!b.querySelector(".blogpost.view")},e=function(){return!!b.querySelector(".page.edit")||!!b.querySelector(".blogpost.edit")},f=function(){return g.get("content-type")},c=function(){return d("page-id")};return{getCurrent:function(){return e()&&
0===c()&&h("draft-id")?{target:"contentcreate",context:{contentId:d("draft-id"),contentType:f()}}:e()&&!i()&&0!==c()?{target:"contentedit",context:{contentId:c(),contentType:f()}}:!e()&&i()&&h("page-id")?{target:"contentview",context:{contentId:c(),contentType:f()}}:{target:"unknown",context:{}}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-hierarchy-plugin:confluence-copy-page-hierarchy-plugin-loader', location = 'js/loader.js' */
/**
 * Async resources loader for copy-page-hierarchy resources.
 */
require([
    'ajs',
    'wrm',
    'confluence/legacy'
], function (AJS, WRM, Confluence) {
    var COPY_CONTEXT = 'confluence-copy-page-hierarchy';
    var DELETE_CONTEXT = 'confluence-delete-page-hierarchy';

    AJS.toInit(function ($) {
        var $toolsCopyLink = $('#action-copy-page-link');
        var $operationsCopyLink = $('#copyPageLink');
        var $toolsDeleteLink = $('#action-remove-content-link');

        _loadResourcesAsync($toolsCopyLink, COPY_CONTEXT);
        _loadResourcesAsync($operationsCopyLink, COPY_CONTEXT);
        _loadResourcesAsync($toolsDeleteLink, DELETE_CONTEXT);
        _checkInProgressDeleteFlow($toolsDeleteLink);
    });

    /**
     * Loads the require resources for either copy or delete
     * @param {jQuery} $button The button that loads the resources
     * @param {string} context The WRM resource context to load
     * @returns {undefined}
     * @private
     */
    function _loadResourcesAsync($button, context) {
        if ($button.length) {
            $button.off('click');
            $button.on('click', function (e) {
                e.preventDefault();
                _loadResources($button, context);
            });
        }
    }

    /**
     * Function handler to run when the delete or copy button is clicked
     * @param {jQuery} $button The button that loads the resources
     * @param {string} context The WRM resource context to load
     * @returns {undefined}
     * @private
     */
    function _loadResources($button, context) {
        var $body = $('body');
        $button.off('click');

        var loadingIndicator = Confluence.PageLoadingIndicator($body);
        loadingIndicator.show();

        AJS.debug('Loading ' + context + ' resources...');
        WRM.require(['wrc!' + context], function () {
            loadingIndicator.hide();
            $button.addClass('confluencePageHierarchy');
            AJS.debug('Loaded ' + context + ' resources.');
        });
    }

    /**
     * Checks to see if there is a flow in progress based on url parameters
     * and loads the resources if the flow is in progress.
     * @param {jQuery} $toolsDeleteLink The Delete button, if present
     * @returns {undefined}
     * @private
     */
    function _checkInProgressDeleteFlow($toolsDeleteLink) {
        var hash = window.location.hash;
        if (hash.indexOf('delete-complete') === 1) {
            _loadResources($toolsDeleteLink, DELETE_CONTEXT);
        }
    }
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api', location = 'probe.js' */
!function(){var n,t,e,r,i,o,u,a,c,s,f,l,h,d,y,p,v,m,w;n=function(){return window}(),t=function(n){return!(!n.performance||!n.performance.now)}(n),e=[],r=function(n){return function(t){n.unshift({addReporter:t})}}(e),i=function(n){return function(t){for(;n.length;)t(n.splice(0,1)[0]);n.unshift=t,n.push=t}}(e),o=function(n,t){return function(e){n.push({end:{key:e.key,timestamp:t.performance.now()}})}}(e,n),u=function(n){return n.document}(n),a=function(n){return n.Promise}(n),c=function(){function n(){this._={}}var t=function(e){var r=e[0],i=e[1];i instanceof n?e.length>=3?Object.keys(i._).forEach(function(n){t([r,i._[n],n].concat(e.slice(2)))}):Object.keys(i._).forEach(function(n){t([r,i._[n],n])}):Array.isArray(i)&&r.apply(null,[i].concat(e.slice(2)))};n.prototype.forEach=function(n){t([n,this])},n.prototype.add=function(){for(var t=this,e=null,r=null,i=0;i<arguments.length;i++){if(r=arguments[i],i===arguments.length-1&&Array.isArray(t)){t.push(r);break}i<arguments.length-2&&!t._.hasOwnProperty(r)?t._[r]=new n:i!==arguments.length-2||t._.hasOwnProperty(r)||(t._[r]=[]),t=t._[r],e=r}};var e=function(n,t){if(0!==n.length){var r=n.pop(),i=r[0],o=r[1];i===t?e(n,i):o._.hasOwnProperty(t)&&delete o._[t],0===Object.keys(o).length&&e(n,i)}};return n.prototype.remove=function(){for(var n,t=!1,r=null,i=this,o=[[r,i]],u=null,a=0;a<arguments.length;a++)if(u=arguments[a],Array.isArray(i))n=i.indexOf(u),n>-1&&(i.splice(n,1),0===i.length&&o.length>1&&e(o,r),t=!0);else{if(!i._.hasOwnProperty(u))break;a===arguments.length-1&&(delete i._[u],0===Object.keys(i).length&&o.length>1&&e(o,r),t=!0),r=u,i=i._[u],o.push([r,i])}return t},n.prototype.get=function(n){return this._.hasOwnProperty(n)?this._[n]:[]},n}(),s=function(n,t,e,r){function i(n){return!n||null==n||"null"===n||"undefined"===n}function o(t,e,r){l||(c.observe(n,{attributes:!0,childList:!0,subtree:!0}),l=!0),s.add(t,e,r)}function u(t,e){var r=n.querySelectorAll(t);return r.length&&(i(e)||Array.prototype.every.call(r,function(n){return!n.querySelector(e)}))}function a(n,e){var r;n.forEach||(n=[n]),!i(e)&&Array.isArray(e)&&(e=e.join(", "));var a=new t(function(i,a){var c=[],f=[];n.forEach(function(n){var r,i;u(n,e)||(r=new t(function(t){o(n,e,t),i=function(){s.remove(n,e,t)},f.push(i)}),c.push(r))});var l=function(){f.forEach(function(n){n()})};t.all(c).then(l).then(i,a),r=function(){l(),a()}});return a.dismiss=r,a}var c,s,f=r.MutationObserver,l=!1;return f&&t?(s=new e,c=new f(function(){s.forEach(function(n,t,e){u(e,t)&&(n.forEach(function(n){n()}),s.remove(e,t))})}),a):void 0}(u,a,c,n),f=function(n){return!!n}(s),l=function(n){function t(){c(),n.body.classList.add(u)}function e(){function e(){n.body.classList.remove(u),n.removeEventListener(i,s),n.removeEventListener(o,c),r=null}if(r)return r;var c,s,f=!1;return r=new Promise(function(e,r){"visible"!==n.visibilityState?r():(s=function(){f=!0},c=function(n){n.animationName===a&&(f?r():e())},n.addEventListener(i,s),n.addEventListener(o,c),t())}),r.then(e,e),r}var r,i="visibilitychange",o="animationend",u="browser-metrics-visibility-test",a="browser-metrics-visibility-animation",c=function(){var t=n.createElement("style"),e=["."+u+" {","-webkit-animation-duration: 0.001s;","animation-duration: 0.001s;","-webkit-animation-name: "+a+";","animation-name: "+a+";","-webkit-animation-iteration-count: 1;","animation-iteration-count: 1;","}","@keyframes "+a+" {}","@-webkit-keyframes "+a+" {","from {}","to {}","}"].join("\n");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(n.createTextNode(e)),n.head.appendChild(t),c=function(){}};return e}(u),h=function(n,t,e,r,i){function o(n){return Array.isArray(n)||(n=[n]),n.map(function(n){return"string"==typeof n?{selector:n,hasNone:null}:n})}function u(n){return Array.isArray(n)||"string"==typeof n}function a(n){return u(n)&&(n={rules:n}),n.rules=o(n.rules),n.requirePaint="undefined"==typeof n.requirePaint?!1:n.requirePaint,n}return function(i,o){if(n){i=a(i);var u=function(){},c=new e(function(n,r){var o=[],a=i.rules.map(function(n){var e=new t(n.selector,n.hasNone);return o.push(function(){e.dismiss()}),e});u=function(){o.forEach(function(n){n()}),r()},e.all(a).then(function(n){}).then(n,r)});return c.cancel=u,i.requirePaint&&(c=c.then(r)),"function"==typeof o&&c.then(o),c}}}(f,s,a,l,n),d=function(n,t){function e(){return r}var r=!1;return n.addEventListener("DOMContentLoaded",function(){t.setTimeout(function(){r=!0})}),e}(u,n),y=function(n,t,e,r,i,o,u){function a(){c=null}var c;return function(o){var s="isInitial"in o?o.isInitial:i()===!1,f="threshold"in o?o.threshold:1e3,l="reporters"in o?o.reporters:[];r.push({start:{key:o.key,isInitial:s,threshold:f,timestamp:s?0:u.performance.now(),reporters:Array.isArray(l)?l:[l]}}),c&&(c.cancel(),a()),o.ready&&e&&(c=n(o.ready),c.then(function(){t({key:o.key})}).then(a,a))}}(h,o,f,e,d,a,n),p=function(n){return function(t){n.push({subscribe:t})}}(e),v=function(){return window}(),m=function(n){return n.performance}(v),w=function(n,t,e,r,i,o,u){var a=function(){};return u?{start:n?i:a,end:n?r:a,addReporter:n?t:a,delegateTo:n?e:a,subscribe:n?o:a}:void 0}(t,r,i,o,y,p,m),window["browser-metrics"]=w,window.define&&window.define("internal/browser-metrics",function(){return w})}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api', location = 'internal/browser-metrics-aa-beacon.js' */
!function(){var e={};e=function(e){function n(e,n){Object.keys(n).forEach(function(r){e[r]=n[r]})}Object.defineProperty(e,"__esModule",{value:!0});var r,t=[],o=[];return e.addUrlCleaner=function(e){o.push(e)},e.cleanUrl=function(e){return o.reduce(function(n,r){var t=r(e);return t.length>n.length?t:n},"")},e.addReportMarshaller=function(e){t.push(e)},e.setEventQueue=function(e){r=e},e.beacon=function(e){var o={};t.forEach(function(r){var t=r(e);"object"==typeof t&&n(o,t)});var a={name:"browser.metrics.navigation",properties:o};(r||AJS.EventQueue).push(a)},e}(e),window["browser-metrics-aa-beacon"]=e,window.define&&window.define("internal/browser-metrics-aa-beacon",function(){return e})}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api', location = 'loader.js' */
!function(){var n={},r={};r=function(n,r,i){function e(){t===u&&o&&(o(),o=null)}Object.defineProperty(n,"__esModule",{value:!0});var t=0,u=0,o=null,c={install:function(n){t+=1,n(function(){u+=1,e()})}};return r["browser-metrics-plugin"]=c,i.require(["wrc!browser-metrics-plugin.contrib"],function(){r.require(["internal/browser-metrics-plugin/collector"],function(n){o=function(){n.install()},e()})}),n}(r,n=window,n.WRM)}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:space', location = '/js/space.js' */
require(["internal/browser-metrics","jquery"],function(b,c){function a(){var d=window.location.pathname.substring(AJS.Meta.get("context-path").length).split(";",1)[0];if(d==="/display/"+AJS.Meta.get("space-key")||d==="/spaces/"+AJS.Meta.get("space-key")){b.start({key:"confluence.space.view",ready:".space",isInitial:true})}}c(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics.js' */
(function(){var a=window.BrowserMetrics||{};a.isFunction=function(b){return !!(b&&b.constructor&&b.call&&b.apply)};a.isEnabled=function(){if(a.enabled===undefined){a.enabled=true}return a.enabled};window.BrowserMetrics=a}());(function(){var b=window.BrowserMetrics||{};if(b.isEnabled()){var f=5;var e=12000;var c=function(g){return Math.round(g)};var a=function(g){return Math.round(g*100)/100};var d=function(k){var h=(function(){var n=/^(\w+):\/\/([^\/]*)(.*)$/;return function(p){var o=p.match(n);if(!o){return{path:p}}return{scheme:o[1],host:o[2],path:o[3]}}}());var i=(function(){var n=["secureConnectionStart","requestStart","responseStart","responseEnd","domContentLoadedEventStart","domContentLoadedEventEnd","loadEventEnd"];return function(o){if(k.performance){var s=k.performance.timing;var p=s.navigationStart;if(p){for(var r=0;r<n.length;++r){var q=n[r];var t=s[q];if(t){o(q,t-p)}}}}}}());var g=(function(){var o=[{key:"LOGIN",pattern:/^\/login.*/i},{key:"J-DASH",pattern:/^\/secure\/dashboard\.jspa.*/i},{key:"J-ISSUE",pattern:/^\/browse\/\w+\-\w+.*/i},{key:"J-NAV",pattern:/^\/issues.*/i},{key:"J-RAPID",pattern:/secure\/rapidboard\.jspa/i},{key:"SD-AGENT",pattern:/^(\/\w+)?\/servicedesk\/agent\/.*/i},{key:"SD-CUSTOMER",pattern:/^(\/\w+)?\/servicedesk\/customer\/.*/i},{key:"C-DASH",pattern:/^\/wiki(\/)?(\?.*|#.*)?$/i},{key:"C-DASH",pattern:/^\/wiki\/dashboard\.action.*$/i},{key:"C-SPACE",pattern:/^\/wiki\/display\/\w+(\?.*|#.*)?$/i},{key:"C-PAGE",pattern:/^\/wiki\/display\/\w+\/.*/i},{key:"C-PAGE",pattern:/^\/wiki\/pages\/viewpage\.action.*/i},{key:"C-BLOG",pattern:/^\/wiki\/display\/~\w+\/\d+\/\d+\/\d+\/.*/i},{key:"C-EDITOR",pattern:/^\/wiki\/pages\/editpage\.action.*/i},{key:"C-CREATE",pattern:/^\/wiki\/pages\/createpage\.action.*/i}];return function n(){var r=h(k.location.href).path;for(var p=0;p<o.length;++p){var q=o[p];if(r.match(q.pattern)){return q.key}}return null}}());function j(){var n=g();if(n){i(function(p,r){var o="browser.metrics."+p,q={version:f,page:n,value:r>e?"x":Math.ceil((r)/100),rawValue:c(r)};AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent(o,q):AJS.trigger("analyticsEvent",{name:o,data:q})})}}function m(){try{j()}catch(n){if(window.console){window.console.log("Error reporting browser metrics: "+n)}}}function l(){if(k.performance.timing.loadEventEnd){m()}else{setTimeout(l,1000)}}if(k.performance&&k.performance.timing){l()}};if(!window.ATL_PERF){window.ATL_PERF={}}window.ATL_PERF.initPageLoad=d}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics-events.js' */
(function(){var b=window.BrowserMetrics||{};if(b.isEnabled()){var e=5;var d=12000;var a=function(f){return Math.round(f*100)/100};var c=function(g){var l={};function h(){return g.performance&&g.performance.now?g.performance.now():new Date().getTime()}function n(o){return o===Object(o)}function k(o){if(n(o)){return o.eventName+"."+o.eventType}else{return o}}function m(o){if(n(o)){return o.eventName}else{return o}}function j(o){if(n(o)){return o.eventType}else{return""}}function f(o){var p=k(o);l[p]=h()}function i(r,u){var v=k(r);if(!l[v]){throw ("Error logging browser metrics event end: no start event for key '"+v+"'")}var t=h()-l[v];l[v]=null;var o=m(r),q=j(r);var p="browser.metrics.e."+o+(u?"."+u:""),s={version:e,value:t>d?"x":Math.ceil((t)/100),rawValue:a(t),eventType:q};g.AJS.Analytics?g.AJS.Analytics.triggerPrivacyPolicySafeEvent(p,s):g.AJS.trigger("analyticsEvent",{name:p,data:s})}return{start:f,end:i}};if(!window.ATL_PERF){window.ATL_PERF={}}window.ATL_PERF.initEvents=c}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics-init.js' */
(function(){var a=window.BrowserMetrics||{};if(a.isEnabled()){if(Math.random()<0.1){window.ATL_PERF&&window.ATL_PERF.initPageLoad&&window.ATL_PERF.initPageLoad(window)}window.ATL_PERF&&window.ATL_PERF.initEvents&&(function(){window.BrowserMetrics=window.ATL_PERF.initEvents(window)}())}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.e6408ec84b', location = 'aui.chunk.258be89123b8852587ad--7607c431a215b2574ee6.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.splitchunk.e6408ec84b"],{OEua:function(e,t,u){"use strict";var n,i;Object.defineProperty(t,"__esModule",{value:!0});var a=0;function d(e){if(n=a+++"",i=e?e+n:"aui-uid-"+n,document.getElementById(i)){if(i=i+"-"+(new Date).getTime(),document.getElementById(i))throw new Error('Timestamped fallback ID "'+i+'" exists.');return i}return i}(0,function(e){return e&&e.__esModule?e:{default:e}}(u("KloK")).default)("id",d),t.default=d,e.exports=t.default}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.component.tabs', location = 'aui.chunk.ca774fd091c22a290b29--1b94153f9e069b46e941.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.component.tabs"],{iI8Q:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.TabItemEl=a.TabPaneEl=a.TabContainerEl=void 0,e("gjsO");var i=function(t){if(t&&t.__esModule)return t;var a={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(a[e]=t[e]);return a.default=t,a}(e("JFi+")),n=d(e("i1dL")),r=d(e("+x/D")),s=d(e("x6hj")),u=d(e("KloK")),o=d(e("rdX0")),l=d(e("4dFR"));function d(t){return t&&t.__esModule?t:{default:t}}var c=window.skateTemplateHtml,f="_internal-aui-tabs-",p='.aui-tabs.horizontal-tabs[data-aui-responsive]:not([data-aui-responsive="false"]), aui-tabs[responsive]:not([responsive="false"])';function b(t){var a=(0,r.default)(t),e=String(a.attr("href")||"").trim();return 0===e.indexOf("#")?e.substr(1):null}function h(t){var a=b(t);return a?document.getElementById(a):null}var v={totalTabsWidth:function(t,a){var e=this.totalVisibleTabWidth(t),i=0;return a.find("li").each(function(t,a){i+=parseInt(a.getAttribute("data-aui-tab-width"))}),e+i},totalVisibleTabWidth:function(t){var a=0;return t.each(function(t,e){a+=(0,r.default)(e).outerWidth()}),a},removeResponsiveDropdown:function(t,a){t.remove(),a.remove()},createResponsiveDropdownTrigger:function(t,a){var e='<li class="menu-item aui-tabs-responsive-trigger-item">\n            <a\n                class="aui-dropdown2-trigger aui-tabs-responsive-trigger aui-dropdown2-trigger-arrowless"\n                id="aui-tabs-responsive-trigger-'+a+'"\n                aria-haspopup="true"\n                aria-controls="aui-tabs-responsive-dropdown-'+a+'"\n                href="#aui-tabs-responsive-dropdown-'+a+'">...</a>\n            </li>';return t.append(e),t.find(".aui-tabs-responsive-trigger-item")},createResponsiveDropdown:function(t,a){var e='<div class="aui-dropdown2 aui-style-default aui-tabs-responsive-dropdown" id="aui-tabs-responsive-dropdown-'+a+'"><ul></ul></div>';return t.append(e),t.find("#aui-tabs-responsive-dropdown-"+a)},findNewVisibleTabs:function(t,a,e){function i(t,a,e){return t+a<=e}for(var n=0,s=0;i(n,e,a)&&s<t.length;s++){n+=(0,r.default)(t[s]).outerWidth(!0)}return t.slice(0,s-1)},moveVisibleTabs:function(t,a,e){for(var i=e.find("a").attr("aria-controls"),n=(0,r.default)("#"+i),s=this.findNewVisibleTabs(t,a.outerWidth(),e.parent().outerWidth(!0)),u=s.length-1,o=t.length-1;o>=u;o--){var l=(0,r.default)(t[o]);this.moveTabToResponsiveDropdown(l,n,e)}return(0,r.default)(s)},moveTabToResponsiveDropdown:function(t,a,e){var i=t.find("a");t.attr("data-aui-tab-width",t.outerWidth(!0)),i.addClass("aui-dropdown2-radio aui-tabs-responsive-item"),t.hasClass("active-tab")&&(i.addClass("aui-dropdown2-checked"),e.addClass("active-tab")),a.find("ul").prepend(t)},moveInvisibleTabs:function(t,a,e){function i(t){return t>0}for(var n=0;i(a)&&n<t.length;n++){var s=(0,r.default)(t[n]),u=parseInt(s.attr("data-aui-tab-width"),10);u<a&&this.moveTabOutOfDropdown(s,e),a-=u}},moveTabOutOfDropdown:function(t,a){t.find("a").hasClass("aui-dropdown2-checked")&&(t.addClass("active-tab"),a.removeClass("active-tab")),t.children("a").removeClass("aui-dropdown2-radio aui-tabs-responsive-item aui-dropdown2-checked"),a.before(t)}};function m(t){var a=(0,r.default)(t);if(!a.hasClass("aui-tabs-responsive-trigger")){var e=h(a);if(e){var n=(0,r.default)(e);n.addClass("active-pane").attr("aria-hidden","false").siblings(".tabs-pane").removeClass("active-pane").attr("aria-hidden","true");var s=a.parents(".aui-tabs").find(".aui-tabs-responsive-trigger-item a").attr("aria-controls"),u=(0,r.default)(document.getElementById(s));if(u.find("li a").attr("aria-checked",!1).removeClass("checked aui-dropdown2-checked"),u.find("li").removeClass("active-tab"),a.parent("li.menu-item").addClass("active-tab").siblings(".menu-item").removeClass("active-tab"),a.hasClass("aui-tabs-responsive-item")){var o=n.parent(".aui-tabs").find("li.menu-item:not(.aui-tabs-responsive-trigger-item)");o.removeClass("active-tab"),o.find("a").removeClass("checked").removeAttr("aria-checked")}a.hasClass("aui-tabs-responsive-item")&&n.parent(".aui-tabs").find("li.menu-item.aui-tabs-responsive-trigger-item").addClass("active-tab"),a.closest(".tabs-menu").find("a").attr("aria-selected","false"),a.attr("aria-selected","true"),a.trigger("tabSelect",{tab:a,pane:n})}else i.error("Cannot switch to tab panel because it does not exist. Check whether the tab link href is correct.",t)}}function g(t){return void 0!==t.attr("data-aui-persist")&&"false"!==t.attr("data-aui-persist")}function w(t){var a=t.attr("id"),e=t.attr("data-aui-persist");return f+(a||"")+(e&&"true"!==e?"-"+e:"")}function k(t){A.change((0,r.default)(t.target).closest("a")),t&&t.preventDefault()}function C(t){t.forEach(function(t,a){!function(t,a){var e=(0,r.default)(t),i=e.find(".tabs-menu").first(),n=i.find("li:not(.aui-tabs-responsive-trigger-item)"),s=i.find(".aui-tabs-responsive-trigger").parent(),u=s.find("a"),o=u.attr("aria-controls"),l=(0,r.default)(document.getElementById(o)).attr("aria-checked",!1),d=l.length>0,c=v.totalTabsWidth(n,l)>e.outerWidth();if(!d&&c&&(s=v.createResponsiveDropdownTrigger(i,a),l=v.createResponsiveDropdown(e,a)),u.attr("aria-controls","aui-tabs-responsive-dropdown-"+a),u.attr("id","aui-tabs-responsive-trigger-"+a),u.attr("href","#aui-tabs-responsive-trigger-"+a),l.attr("id","aui-tabs-responsive-dropdown-"+a),c){var f=v.moveVisibleTabs(n.toArray(),e,s),p=v.totalVisibleTabWidth(f),b=e.outerWidth()-p-s.outerWidth(!0);if(b>0){var h=l.find("li");v.moveInvisibleTabs(h.toArray(),b,s)}e.hasClass("aui-tabs-disabled")||l.on("click","a",k),i.is(":visible")&&i.hide().show()}d&&!c&&(l.find("li").each(function(){v.moveTabOutOfDropdown((0,r.default)(this),s)}),v.removeResponsiveDropdown(l,s))}(t,a)})}function T(){var t=(0,n.default)(C,200),a=(0,r.default)(p).toArray();C(a),(0,r.default)(window).on("resize",function(){t(a)})}function y(t){var a=(0,r.default)(t);if(t.setAttribute("role","application"),!a.data("aui-tab-events-bound")){var e=a.children("ul.tabs-menu");e.attr("role","tablist"),e.children("li").attr("role","presentation"),e.find("> .menu-item a").each(function(){!function(t){var a=(0,r.default)(t),e=h(a);b(t)||i.error('A tab link must use an anchor link (e.g., <a href="#a-valid-id"></a>) to work correctly.',t),e?((0,s.default)(a),a.attr("role","tab"),(0,r.default)(e).attr("aria-labelledby",a.attr("id")),a.parent().hasClass("active-tab")?a.attr("aria-selected","true"):a.attr("aria-selected","false")):i.warn("A tab panel could not be found with the tab link's configured href. Check whether the tab link href is correct.",t)}(this)}),e.on("click","a",k),a.data("aui-tab-events-bound",!0),function(t){[].slice.call(t.querySelectorAll(".tabs-pane")).forEach(O)}(t)}}function _(){var t=(0,r.default)(".aui-tabs:not(.aui-tabs-disabled)");t.each(function(){y(this)}),function(t){for(var a=0,e=t.length;a<e;a++){var n=t.eq(a),r=t.get(a);if(g(n)&&window.localStorage)if(n.attr("id")){var s=window.localStorage.getItem(w(n));if(s){var u=r.querySelector('a[href$="'+s+'"]');u&&m(u)}}else i.warn("A tab group must specify an id attribute if it specifies data-aui-persist.")}}(t)}function O(t){t.setAttribute("role","tabpanel"),t.setAttribute("aria-hidden",(0,r.default)(t).hasClass("active-pane")?"false":"true")}var A={setup:function(){T(),_(),(0,r.default)(".aui-tabs.vertical-tabs").find("a").each(function(){var t=(0,r.default)(this);t.attr("title")||(0,o.default)(t)&&t.attr("title",t.text())})},change:function(t){var a=(0,r.default)(t),e=a.closest(".aui-tabs");m(a),g(e)&&window.localStorage&&function(t){var a=t.closest(".aui-tabs");if(a.attr("id")){var e=b(t);e&&window.localStorage.setItem(w(a),"#"+e)}else i.warn("A tab group must specify an id attribute if it specifies data-aui-persist.")}(a)}};(0,r.default)(A.setup);var D=(0,l.default)("aui-tabs",{created:function(t){(0,r.default)(t).addClass("aui-tabs horizontal-tabs"),l.default.init(t),y(t)},template:c('<ul class="tabs-menu">','<content select="li[is=aui-tabs-tab]"></content>',"</ul>",'<content select="aui-tabs-pane"></content>'),prototype:{select:function(t){var a=(0,r.default)(function(t){return t.querySelectorAll("aui-tabs-pane")}(this)).index(t);return a>-1&&A.change(function(t){return t.querySelectorAll("li[is=aui-tabs-tab]")}(this)[a].children[0]),this}}}),W=(0,l.default)("aui-tabs-tab",{extends:"li",created:function(t){(0,r.default)(t).addClass("menu-item")},template:c('<a href="#">',"<strong>","<content></content>","</strong>","</a>")}),x=(0,l.default)("aui-tabs-pane",{attached:function(t){var a=(0,r.default)(function(t){return(0,r.default)(t).closest("aui-tabs").get(0)}(t)),e=(0,r.default)(t),i=a.find("aui-tabs-pane").index(e),n=new W,s=(0,r.default)(n);e.addClass("tabs-pane"),n.firstChild.setAttribute("href","#"+t.id),c.wrap(n).textContent=e.attr("title"),0===i&&e.addClass("active-pane"),e.hasClass("active-pane")&&s.addClass("active-tab"),e.siblings("ul").append(n)},template:c("<content></content>")});(0,u.default)("tabs",A),a.default=A,a.TabContainerEl=D,a.TabPaneEl=x,a.TabItemEl=W},lHh5:function(t,a,e){},rdX0:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=n(e("+x/D"));function n(t){return t&&t.__esModule?t:{default:t}}function r(t){return(t=(0,i.default)(t)).prop("scrollWidth")>t.prop("clientWidth")}(0,n(e("KloK")).default)("isClipped",r),a.default=r,t.exports=a.default},"sJ+f":function(t,a,e){"use strict";e("FStl"),e("Q0fs"),e("lHh5")},x6hj:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s(e("+x/D")),n=s(e("KloK")),r=s(e("OEua"));function s(t){return t&&t.__esModule?t:{default:t}}function u(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=(0,i.default)(t),n=a||!1;e.each(function(){var t=(0,i.default)(this);t.attr("id")||t.attr("id",(0,r.default)(n))})}(0,n.default)("_addID",u),a.default=u,t.exports=a.default},zCVu:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("iI8Q");Object.keys(i).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(a,t,{enumerable:!0,get:function(){return i[t]}})}),e("sJ+f"),e("XHZH")}},[["zCVu","runtime","aui.splitchunk.vendors--e54c7c7304","aui.splitchunk.vendors--b47d4b691d","aui.splitchunk.vendors--9c48cc20a9","aui.splitchunk.vendors--084821f40b","aui.splitchunk.vendors--d2297af84a","aui.splitchunk.172ffb6da7","aui.splitchunk.b0831cc7d0","aui.splitchunk.572a8bf5cd","aui.splitchunk.087aba7911","aui.splitchunk.fbd1a5ab27","aui.splitchunk.54d3f16c20","aui.splitchunk.e54c7c7304","aui.splitchunk.1659111a3c","aui.splitchunk.f5828f5ab9","aui.splitchunk.fb15cffa72","aui.splitchunk.56dfb54d0c","aui.splitchunk.f673ef53ac","aui.splitchunk.8659b532c1","aui.splitchunk.9c48cc20a9","aui.splitchunk.792781e698","aui.splitchunk.d0110a864f","aui.splitchunk.afa5039e04","aui.splitchunk.bff3715233","aui.splitchunk.c750721820","aui.splitchunk.6d6f245ed3","aui.splitchunk.382c9b559f","aui.splitchunk.ed86a19e01","aui.splitchunk.084821f40b","aui.splitchunk.5b8c290363","aui.splitchunk.baa83dbaf9","aui.splitchunk.36cd9d521c","aui.splitchunk.def7f73e47","aui.splitchunk.4248e12b20","aui.splitchunk.e6408ec84b","aui.splitchunk.b548966f06"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:select-all-row', location = '/includes/js/select-all-row.js' */
define("confluence/select-all-row",["backbone","ajs"],function(c,a){return c.View.extend({allChecked:!1,uncheckedCheckboxes:function(){return this.$el.find('input[type="checkbox"]:not(:checked)')},checkedCheckboxes:function(){return this.$el.find('input[type="checkbox"]:checked')},checkboxes:function(){return this.$el.find('input[type="checkbox"]')},toggle:function(){this.allChecked?(this.checkedCheckboxes().prop("checked",!1),this.allChecked=!1):(this.uncheckedCheckboxes().prop("checked",!0),this.allChecked=
!0);this.render()},initialize:function(a){var b=this;this.$selectAllElement=this.$el.find(a.selectAllSelector||".row-selector");this.$selectAllElement.on("click",function(a){b.toggle.call(b,a)});0===this.uncheckedCheckboxes().length&&(this.allChecked=!0);this.render()},render:function(){this.allChecked?this.$selectAllElement.text("Deselect All"):this.$selectAllElement.text("Select All")},checkboxChanged:function(){this.checkedCheckboxes().length===this.checkboxes().length?
(this.uncheckedCheckboxes().prop("checked",!0),this.allChecked=!0):(this.$selectAllElement.prop("checked",!1),this.allChecked=!1);this.render()},events:{'change input[type="checkbox"]':"checkboxChanged"}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:space-permissions-table', location = '/includes/js/space-permissions-table.js' */
define("confluence/space-permissions-table",["backbone","confluence/select-all-row"],function(b,f){return b.View.extend({isSpacePermissionChange:function(a){var b=this,d=!1;a.each(function(a,c){var e=b.$el.find("input[name='"+c.name.replace("checkbox","initial")+"']");if(c.checked&&0===e.length||!c.checked&&"on"===e.val())return d=!0,!1});return d},permissionChanged:function(){return this.isSpacePermissionChange(this.$el.find('input[type="checkbox"][name^="confluence_checkbox"]'))},initialize:function(){this.$el.find("tr.space-permission-row").toArray().forEach(function(a){new f({el:a,
selectAllSelector:".row-selector"})})}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:space-permissions-form', location = '/includes/js/space-permissions-form.js' */
define("confluence/space-permissions-form",["backbone","jquery","ajs","confluence/space-permissions-table"],function(c,d,a,b){return c.View.extend({initialize:function(){this.groupPermissionsTable=new b({el:this.$el.find("#gPermissionsTable")});this.userPermissionsTable=new b({el:this.$el.find("#uPermissionsTable")});this.anonymousPermissionsTable=new b({el:this.$el.find("#aPermissionsTable")})},events:{'click input[name="save"]':"submit"},submit:function(){this.$el.find('input[name="save"]').prop("disabled",
!0);this.anonymousPermissionsTable.permissionChanged()&&a.trigger("analyticsEvent",{name:"confluence.space.permission.change.anonymous",data:{}});this.groupPermissionsTable.permissionChanged()&&a.trigger("analyticsEvent",{name:"confluence.space.permission.change.group",data:{}});this.userPermissionsTable.permissionChanged()&&a.trigger("analyticsEvent",{name:"confluence.space.permission.change.user",data:{}});this.$el.submit()}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:space-admin', location = '/includes/soy/space-details.soy' */
// This file was automatically generated from space-details.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.SpaceDetails.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.SpaceDetails == 'undefined') { Confluence.Templates.SpaceDetails = {}; }


Confluence.Templates.SpaceDetails.watchButton = function(opt_data, opt_ignored) {
  return '<span>' + aui.icons.icon({icon: opt_data.watch ? 'unwatch' : 'watch', useIconFont: true}) + ' ' + soy.$$escapeHtml(opt_data.text) + '</span>';
};
if (goog.DEBUG) {
  Confluence.Templates.SpaceDetails.watchButton.soyTemplateName = 'Confluence.Templates.SpaceDetails.watchButton';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:space-admin', location = '/includes/js/space-permissions-any-user-permission-dialog.js' */
define("confluence/space-permissions-any-user-permission-dialog",["jquery","ajs"],function(b,c){return{create:function(){var a=new c.ConfluenceDialog({id:"edit-any-user-view-permission-dialog",width:500,height:300});a.addHeader(b(".any-user-perm-dialog-title").text());a.addPanel("Panel 1",b(".any-user-perm-dialog-contents").html());a.addSubmit("Disable",function(){b("form[name='disableanyuserpermission']").submit();a.hide()});a.addCancel("Cancel",
function(){a.hide()});return a}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:space-admin', location = '/includes/js/space-permissions-page.js' */
define("confluence/space-permissions-page",["jquery","confluence/space-permissions-form","confluence/space-permissions-any-user-permission-dialog"],function(c,f,g){var a={},b=null;a.updateField=function(a,d){if(""!==d){var b=c("#"+a),e=b.val();b.val(""===e?d:e+", "+d)}};a.updateGroupsField=function(b){a.updateField("groups-to-add-autocomplete",b)};a.updateUsersField=function(b){a.updateField("users-to-add-autocomplete",b)};a.initialize=function(){c('form[name="editspacepermissions"],form[name="editdefaultspacepermissions"]').each(function(b,
a){new f({el:a})});c("#edit-any-user-perm").click(function(){b=b||g.create();b.show()})};return a});require("confluence/module-exporter").exportModuleAsGlobal("confluence/space-permissions-page","Confluence.SpacePermissions",function(c){require("ajs").toInit(c.initialize)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:space-admin', location = '/includes/js/recover-space-permissions.js' */
define("confluence/recover-space-permissions",["jquery","confluence/meta","ajs","confluence/api/logger"],function(c,d,a,f){return function(){var g=c("#space-permissions-table .recover-permissions-link"),h=d.get("remote-user");g.on("click",function(d){var e=c(this).data("space-key"),b=new a.Dialog({width:400,height:210,id:"recover-permissions-dialog",closeOnOutsideClick:!0});b.addHeader("Recover Permissions");b.addPanel("message","<p>"+
"Are you sure you want to grant yourself space admin permission for this space? This action will be logged."+"</p>","recover-permissions-panel-body");b.addButton("OK",function(b){a.safe.ajax({type:"POST",url:a.contextPath()+"/admin/permissions/grantspacepermissions.action",data:{spaceKey:e}}).done(function(){location.reload()}).fail(function(){f.log("Space Permissions: Failed to recover space permissions for "+h+" to the "+e+" space.")}).always(function(){b.remove()})});b.addLink("Cancel",
function(a){a.remove()},"#");b.show();d.preventDefault()})}});require("confluence/module-exporter").safeRequire("confluence/recover-space-permissions",function(c){require("ajs").toInit(c)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:space-admin', location = '/includes/js/space-details.js' */
define("confluence/space-details",["document","ajs","jquery","confluence/templates","confluence/message-controller"],function(d,b,m,i,f){return{"interface":{setUsersToAddTextField:function(c){var b=d.forms.convertspace.usersToAdd;""!==c&&(b.value=""===b.value?c:b.value+", "+c)}},initialiser:function(c){function d(a,j,e,h,k,g,l){c.ajax({url:b.contextPath()+(!g||""===g?"/spaces/":g)+e+"?"+c.param({contentType:j,key:b.Meta.get("space-key"),atl_token:b.Meta.get("atl-token")}),dataType:l,success:function(){!0===
h?a.removeClass("stop-watching").addClass("watch"):a.removeClass("watch").addClass("stop-watching");a.html(i.SpaceDetails.watchButton({watch:h,text:k}))},error:function(a){f.showError(f.parseError(a),f.Location.FLAG)}})}c(".spacetools-nav-secondary").on("click",".menu-item a",function(){var a=c(this).parent(),d=a.attr("data-web-item-key"),a=a.attr("data-web-section-key"),e=b.contextPath()||"/";c.cookie("confluence.last-web-item-clicked",a+"/"+d,{path:e})});c(".spacetools-nav").on("click","li a",function(){var a=
c(this).parent(),d=a.attr("data-web-section-key"),a=a.attr("data-first-web-item-key"),e=b.contextPath()||"/";c.cookie("confluence.last-web-item-clicked",d+"/"+a,{path:e})});c(".content-navigation.pages-collector").on("click","a.watch",function(a){a.preventDefault();d(c(this),"","addspacenotification.action",!1,"Stop Watching this Space");b.trigger("analytics",{name:"watch-space"})});c(".content-navigation.pages-collector").on("click","a.stop-watching",function(a){a.preventDefault();
d(c(this),"","removespacenotification.action",!0,"Watch this Space");b.trigger("analytics",{name:"unwatch-space"})});c(".content-navigation.view-blogposts").on("click","a.watch",function(a){a.preventDefault();d(c(this),"blogpost","addspacenotificationajax.action",!1,"Stop watching this Blog","/users/","json");b.trigger("analytics",{name:"watch-blogs"})});c(".content-navigation.view-blogposts").on("click","a.stop-watching",function(a){a.preventDefault();d(c(this),
"blogpost","removespacenotificationajax.action",!0,"Watch this Blog","/users/","json");b.trigger("analytics",{name:"unwatch-blogs"})})}}});require("confluence/module-exporter").safeRequire("confluence/space-details",function(d){var b=require("ajs");b.Confluence.SpaceDetails=d.interface;b.toInit(d.initialiser)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:space-admin', location = '/includes/js/edit-space.js' */
define("confluence/edit-space",["jquery","confluence/legacy"],function(a,b){return function(){b.Binder.autocompletePage(a(".edit-space-details"))}});require("confluence/module-exporter").safeRequire("confluence/edit-space",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.synchrony-interop:synchrony-status-banner-loader', location = '/js/synchrony-down-banner-loader.js' */
'use strict';require(["ajs","wrm"],function(b,a){b.toInit(function(){!0===a.data.claim("com.atlassian.confluence.plugins.synchrony-interop:synchrony-status-banner-loader.synchrony-status")&&a.require("wrc!synchrony-interop-down-banner")})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'templates/recently.soy' */
// This file was automatically generated from recently.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RY.Templates.
 */

if (typeof RY == 'undefined') { var RY = {}; }
if (typeof RY.Templates == 'undefined') { RY.Templates = {}; }


RY.Templates.body = function(opt_data, opt_ignored) {
  return '<div id="recently-viewed" class="aui-group"><div class="aui-item"><div class="top"><div class="filter"><form class="aui"><input class="filter-input text" type="text" placeholder="' + soy.$$escapeHtmlAttribute('Filter') + '"></form></div></div><div class="pages"></div></div></div>';
};
if (goog.DEBUG) {
  RY.Templates.body.soyTemplateName = 'RY.Templates.body';
}


RY.Templates.pageCollection = function(opt_data, opt_ignored) {
  return '<div class="groups"></div><div class="empty"></div>';
};
if (goog.DEBUG) {
  RY.Templates.pageCollection.soyTemplateName = 'RY.Templates.pageCollection';
}


RY.Templates.pageGroup = function(opt_data, opt_ignored) {
  return '<h3>' + soy.$$escapeHtml(opt_data.title) + '</h3><ul/>';
};
if (goog.DEBUG) {
  RY.Templates.pageGroup.soyTemplateName = 'RY.Templates.pageGroup';
}


RY.Templates.pageItem = function(opt_data, opt_ignored) {
  return '<a href=' + soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)) + '><div class="page-icon"><span class="aui-icon content-type-' + soy.$$escapeHtmlAttribute(opt_data.type) + '">' + soy.$$escapeHtml(opt_data.type) + '</span></div><div class="page-title"><span class="ellipsis" href=' + soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)) + '>' + soy.$$escapeHtml(opt_data.title) + ' - ' + soy.$$escapeHtml(opt_data.space) + '</span></div></a>';
};
if (goog.DEBUG) {
  RY.Templates.pageItem.soyTemplateName = 'RY.Templates.pageItem';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/util.js' */
var RY=RY||{};(function(){var b=new Date();var c=new Date(b).getTime();var a=new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime();var d=new Date(b.getFullYear(),b.getMonth(),b.getDate()-1).getTime();RY.util=RY.Util={analytics:{trackDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-dialog-open"})},trackPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-page-open"})}},quote:function(e){return(e).replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},diffInDays:function(g,f){var e=1000*60*60*24;return Math.floor((g-f)/e)},daysSince:function(e){if(e>=a){return 0}else{if(e>=d){return 1}else{return RY.util.diffInDays(c,e)}}},wait:function(h,j,f){var i,k,e;var g=function(){k=setTimeout(function(){h.apply(f,e)},j)};return function(){e=arguments;var l=new Date();if(i&&l-i<j){clearTimeout(k)}g();i=l}}}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-storage.js' */
var RY=RY||{};RY.RecentPageStorage=function(h){var f="com.atlassian.confluence.plugins.recently.viewed.pages.v1";var d=100;var c={};var b=function(){var i=function(k,l){if(k==="lastSeen"&&_.isString(l)){return new Date(l).getTime()}else{return l}};try{c=JSON.parse(h.getItem(f),i)||{}}catch(j){c={}}return c};var g=function(){var i=_.values(c);var k=i.length-d;if(k>0){var j=_.sortBy(i,function(l){return l.lastSeen});_.times(k,function(){var l=j.shift();delete c[l.id]})}};var e=function(){g();try{h.setItem(f,JSON.stringify(c))}catch(i){}};this.addCurrentPage=function(i){if(!(i.id&&i.title)){return}b();a(i);e()};var a=function(i){var j=c[i.id];if(!j){c[i.id]=j={}}j=_.extend(j,i);j.lastSeen=new Date().getTime();j.count=j.count+1||1};this.getPages=function(){return _.values(b())}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/filter.js' */
var RY=RY||{};RY.FilterView=Backbone.View.extend({className:"filter",events:{"input .filter-input":"onInput","keyup .filter-input":"onInput","keydown .filter-input":"onKeydown"},initialize:function(){_.bindAll(this,"render","onInput","onKeydown","search");this.navigationEvents=this.options.navigationEvents;this.onInput=RY.util.wait(this.onInput,100,this)},render:function(){this.$input=this.$(".filter-input");return this},onInput:function(a){if(a&&_.contains([37,38,39,40],a.which)){return}this.search()},onKeydown:function(a){switch(a.which){case 13:this.navigationEvents.trigger("select");a.preventDefault();a.stopPropagation();break;case 38:this.navigationEvents.trigger("previous");a.preventDefault();break;case 40:this.navigationEvents.trigger("next");a.preventDefault();break}},search:function(){var a=this.$input.val();this.collection.search(a)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-model.js' */
var RY=RY||{};(function(){var a;if(typeof ConfluenceMobile!="undefined"){a=ConfluenceMobile.AppData.get("confluence-context-path")}else{a=AJS.contextPath()}RY.Page=Backbone.Model.extend({href:function(){return a+this.get("url")},daysSinceLastSeen:function(){return RY.util.daysSince(this.get("lastSeen"))}});RY.PageCollection=Backbone.Collection.extend({model:RY.Page,url:a+"/rest/recentlyviewed/1.0/recent?includeTrashedContent=true",search:function(c){var b;if(this._queryLength(c)===0){b=this.models}else{var d=c.match(/[^\s-]+/g);b=this.filter(function(g){var h=g.get("title");var f=g.get("space");var e=(h+f).toLowerCase();return _.all(d,function(i){return e.indexOf(i.toLowerCase())!==-1})})}this.trigger("filter",b,c);return b},_queryLength:function(b){if(!String.prototype.trim){return AJS.$.trim(b).length}return b.trim().length},comparator:function(b){return -(b.get("lastSeen"))}})})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page.js' */
var RY=RY||{};RY.PageView=Backbone.View.extend({tagName:"li",className:"ry-page",template:RY.Templates.pageItem,initialize:function(){_.bindAll(this,"hide","show","render")},hide:function(){this.$el.hide().removeClass("shown")},show:function(){this.$el.show().addClass("shown")},render:function(){var a=this.model.toJSON();a.href=this.model.href();this.$el.html(this.template(a));return this}});RY.PageGroupView=Backbone.View.extend({className:"group",template:RY.Templates.pageGroup,initialize:function(){_.bindAll(this,"hide","hideAll","show","showBorder","showPages","add","render");this.title=this.options.title;this.modelViews={}},hide:function(){this.$el.hide()},hideAll:function(){this.$el.removeClass("border").hide();_.invoke(_.values(this.modelViews),"hide")},show:function(){this.$el.show()},showBorder:function(){this.$el.addClass("border")},showPages:function(a){var c=this;var b=false;_.each(a,function(e){var d=c.modelViews[e.cid];if(d){b=true;d.show()}});if(b){this.show()}return b},add:function(b){var a=new RY.PageView({model:b});this.modelViews[b.cid]=a;this.$list.append(a.render().el)},render:function(){this.$el.html(this.template({title:this.title}));this.$list=this.$("ul");return this}});RY.PageNavigator=function(a,e,c){var g=null;function f(){return a.find("li.shown")}function b(i){pageItems=f();var h=pageItems.index(pageItems.filter(".highlight"));if(g){g.removeClass("highlight")}i+=h;if(i<0){i=pageItems.length-1}if(i>=pageItems.length){i=0}g=pageItems.eq(i);g.addClass("highlight")}function d(){if(!g.length){return}var k=e;var l=k.children();var j=k.height();var i=g.outerHeight(true);var h=g.position().top;if(h<0){if(f().index(g)===0){k.scrollTop(0);return}k.scrollTop(g.offset().top-l.offset().top)}else{if(h>j){k.scrollTop(g.offset().top-l.offset().top-j+i)}}}c.on("select",function(){if(g&&g.is(":visible")){RY.util.analytics.trackPageOpen();var h=g.find(".page-title span").attr("href");window.location=h}},this);c.on("previous",function(){b(-1);d()},this);c.on("next",function(){b(1);d()},this)};RY.PageCollectionView=Backbone.View.extend({template:RY.Templates.pageCollection,events:{"click .page-title a":RY.util.analytics.trackPageOpen},initialize:function(){_.bindAll(this,"checkEmpty","filter","_groupForPage","addOne","showEmptyMessage","clearEmptyMessage","addAll","render");this.modelViews={};this.collection.on("reset",this.addAll,this);this.collection.on("add",this.addOne,this);this.collection.on("filter",this.filter,this)},checkEmpty:function(a,e){var f=this.collection.isEmpty();var b=a.length===0;if(f||b){var c;if(f){c="Sorry mate, looks like you haven\u0027t visited any pages yet."}else{var d=AJS.contextPath()+"/dosearchsite.action?queryString="+encodeURIComponent(e);c="We didn\u0027t find any matching pages in your history."+" "+AJS.format("\u003ca href=\u0022{0}\u0022\u003eClick here\u003c/a\u003e to search for this term instead.",d)}this.showEmptyMessage(c)}else{this.clearEmptyMessage()}},filter:function(b,d){d=d||"";this.checkEmpty(b,d);var a=[this.$today,this.$yesterday,this.$older];_.invoke(a,"hideAll");var c=[];_.each(a,function(f){var e=f.showPages(b);if(e){c.push(f)}});if(c.length>1){c.pop();_.invoke(c,"showBorder")}},_groupForPage:function(a){var b=a.daysSinceLastSeen();if(b===0){return this.$today}else{if(b===1){return this.$yesterday}else{return this.$older}}},addOne:function(a){var b=this._groupForPage(a);b.add(a)},showEmptyMessage:function(a){this.$(".empty").html(AJS.$("<p>").html(a))},clearEmptyMessage:function(){this.$(".empty").html("")},addAll:function(){this.collection.each(this.addOne)},render:function(){this.$el.html(this.template());this.$today=new RY.PageGroupView({title:"Today"});this.$yesterday=new RY.PageGroupView({title:"Yesterday"});this.$older=new RY.PageGroupView({title:"Older"});var a=this.$(".groups");a.append(this.$today.render().el);a.append(this.$yesterday.render().el);a.append(this.$older.render().el);_.invoke([this.$today,this.$yesterday,this.$older],"hideAll");return this}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/main.js' */
var RY=RY||{};AJS.toInit(function(a){a("#view-user-history-link").unbind("click");a("#view-user-history-link").click(function(g){g.preventDefault();var c=new AJS.Dialog({width:600,height:500,id:"recently-viewed-dialog",closeOnOutsideClick:true});var f=a(RY.Templates.body());c.addHeader("Recently viewed pages");c.addPanel("SinglePanel",f);c.addLink("Close",function(e){e.hide()});var d=a("<div>",{"class":"dialog-tip"}).text("Hint: type \u0022g\u0022 and then \u0022r\u0022 anywhere to quickly open this menu");c.popup.element.find(".dialog-button-panel").append(d);var i=new RY.PageCollection();var b=new RY.PageCollectionView({collection:i});f.find(".pages").html(b.render().el);c.gotoPanel(0);c.show();var h=a("#recently-viewed-dialog").spin("large");i.fetch({success:function(){h.spinStop();var j=_.extend({},Backbone.Events);var k=new RY.PageNavigator(b.$el,f.parent(),j);var e=new RY.FilterView({collection:i,el:f.find(".filter"),navigationEvents:j}).render();e.search()}});RY.util.analytics.trackDialogOpen()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugin.jslibs:skate-0.12.6', location = 'libs/skate/0.12.6/skate-0.12.6.js' */
(function e(g,c,j){function h(a,k){if(!c[a]){if(!g[a]){var d="function"==typeof require&&require;if(!k&&d)return d(a,!0);if(f)return f(a,!0);d=Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d;}d=c[a]={exports:{}};g[a][0].call(d.exports,function(c){var f=g[a][1][c];return h(f?f:c)},d,d.exports,e,g,c,j)}return c[a].exports}for(var f="function"==typeof require&&require,d=0;d<j.length;d++)h(j[d]);return h})({1:[function(b,g,c){Object.defineProperty(c,"__esModule",{value:!0});"use strict";
c.ATTR_IGNORE="data-skate-ignore";c.types={ANY:"act",ATTR:"a",CLASS:"c",NOATTR:"ct",NOCLASS:"at",NOTAG:"ac",TAG:"t"}},{}],2:[function(b,g){g.exports={get:function(c,b){if(c.__SKATE_DATA)return c.__SKATE_DATA[b]},set:function(c,b,h){c.__SKATE_DATA||(c.__SKATE_DATA={});c.__SKATE_DATA[b]=h;return c}}},{}],3:[function(b,g){function c(c){for(var f=c.length,b=0;b<f;b++){var i=c[b],o=i.addedNodes,i=i.removedNodes;o&&(o.length&&!p(o[0].parentNode))&&d(o);i&&i.length&&a(i)}}var j=function(c){return c&&c.__esModule?
c["default"]:c},h=j(b("./globals")),f=b("./lifecycle"),d=f.initElements,a=f.removeElements,k=j(b("./mutation-observer")),p=b("./utils").getClosestIgnoredElement;g.exports={register:function(a){a&&(k.fixIe(),this.unregister());h.observer||(a=new k(c),a.observe(document,{childList:!0,subtree:!0}),h.observer=a);return this},unregister:function(){h.observer&&(h.observer.disconnect(),h.observer=void 0);return this}}},{"./globals":4,"./lifecycle":5,"./mutation-observer":6,"./utils":9}],4:[function(b,g){window.__skate||
(window.__skate={observer:void 0,registry:{}});g.exports=window.__skate},{}],5:[function(b,g,c){function j(o,c,a){if(k.get(o,c.id+":lifecycle:"+a))return!0;k.set(o,c.id+":lifecycle:"+a,!0);return!1}function h(c,a){if(!j(c,a,"created")){m(c,a.prototype,!0);a.template&&a.template(c);var b=function(a,b){return function(f){if(!b)return a(c,f,c);for(var d=f.target;d&&d!==document&&d!==c.parentNode;){if(i.call(d,b))return a(c,f,d);d=d.parentNode}}};"object"===typeof a.events&&l(a.events,function(a,d){var f,
i;i=d.split(" ");f=i.shift();i=i.join(" ");c.addEventListener(f,b(a,i),!!i&&("blur"===f||"focus"===f))});var f=function(i,f,d,b){var k;a.attributes&&a.attributes[f]&&"function"===typeof a.attributes[f][i]?k=a.attributes[f][i]:a.attributes&&"function"===typeof a.attributes[f]?k=a.attributes[f]:"function"===typeof a.attributes&&(k=a.attributes);k&&k(c,{type:i,name:f,newValue:d,oldValue:b})},d,k=c.attributes,h=[],g=k.length;(new p(function(a){a.forEach(function(a){var c,i=a.attributeName,d=k[i];d&&null===
a.oldValue?c="created":d&&null!==a.oldValue?c="updated":d||(c="removed");f(c,i,d?d.value||d.nodeValue:void 0,a.oldValue)})})).observe(c,{attributes:!0,attributeOldValue:!0});for(d=0;d<g;d++)h.push(k[d]);for(d=0;d<g;d++){var n=h[d];f("created",n.nodeName,n.value||n.nodeValue)}a.created&&a.created(c)}}function f(c){for(var i=c.length,d=0;d<i;d++){var b=c[d];if(!(1!==b.nodeType||b.attributes[a])){for(var k=n.getForElement(b),g=k.length,m=0;m<g;m++){var l=b,p=k[m];h(l,p);j(l,p,"attached")||(l.removeAttribute(p.unresolvedAttribute),
l.setAttribute(p.resolvedAttribute,""),p.attached&&p.attached(l))}b=b.childNodes;b.length&&f(b)}}}function d(a){for(var c=a.length,i=0;i<c;i++){var f=a[i];if(1===f.nodeType){d(f.childNodes);for(var b=n.getForElement(f),g=b.length,j=0;j<g;j++){var h=f,m=b[j];m.detached&&m.detached(h);k.set(h,m.id+":lifecycle:attached",!1)}}}}g=function(a){return a&&a.__esModule?a["default"]:a};Object.defineProperty(c,"__esModule",{value:!0});"use strict";var a=b("./constants").ATTR_IGNORE,k=g(b("./data")),p=g(b("./mutation-observer")),
n=g(b("./registry")),b=b("./utils"),m=b.inherit,l=b.objEach,b=window.HTMLElement.prototype,i=b.matches||b.msMatchesSelector||b.webkitMatchesSelector||b.mozMatchesSelector||b.oMatchesSelector;c.triggerCreated=h;c.initElements=f;c.removeElements=d},{"./constants":1,"./data":2,"./mutation-observer":6,"./registry":7,"./utils":9}],6:[function(b,g){function c(a,c){return{addedNodes:null,attributeName:null,attributeNamespace:null,nextSibling:null,oldValue:null,previousSibling:null,removedNodes:null,target:a,
type:c||"childList"}}function j(a,c){var f=a.childNodes;if(f)for(var d=f.length,b=0;b<d;b++){var k=f[b];c(k);j(k,c)}}function h(a){if(n&&!m)return new n(a);this.callback=a;this.elements=[]}var f=b("./utils"),d=f.debounce,a=f.objEach,k=window.HTMLElement.prototype,p=window.HTMLElement.prototype.contains,n=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver,m=!1,l=-1<window.navigator.userAgent.indexOf("Trident");h.fixIe=function(){if(l&&!m){var a=Object.getOwnPropertyDescriptor(k,
"innerHTML");Object.defineProperty(k,"innerHTML",{get:function(){return a.get.call(this)},set:function(c){j(this,function(a){var c=document.createEvent("MutationEvent");c.initMutationEvent("DOMNodeRemoved",!0,!1,null,null,null,null,null);a.dispatchEvent(c)});a.set.call(this,c)}});m=!0}};Object.defineProperty(h,"isFixingIe",{get:function(){return m}});h.prototype={observe:function(a,f){function b(a){h.push(a);n()}var k=this,j,g,h=[],l=[],n=d(function(){for(var b=h.length,d=0;d<b;d++){var n=h[d],r=
n.target;if(r){var n=n.type,q=r.parentNode;if(f.childList&&(f.subtree||q===a)){var s=m&&"DOMNodeRemoved"===n,t=j&&(1!==j.nodeType?!1:j.contains?j.contains(r):p.call(j,r));if(s||!t){if(!g||g.target!==q)l.push(g=c(q));"DOMNodeInserted"===n?(g.addedNodes||(g.addedNodes=[]),g.addedNodes.push(r)):(g.removedNodes||(g.removedNodes=[]),g.removedNodes.push(r));j=r}}}}k.callback(l);h=[];l=[];g=j=void 0}),t={},q=[],u=d(function(){var a=q.length;k.callback(q);q.splice(0,a)}),s={target:a,options:f,insertHandler:b,
removeHandler:b,attributeHandler:function(d){var b=d.target;if(f.attributes&&(f.subtree||b===a)){var k=d.attrName,g=d.prevValue,d=d.newValue,b=c(b,"attributes");b.attributeName=k;f.attributeOldValue&&(b.oldValue=t[k]||g||null);q.push(b);f.attributeOldValue&&(t[k]=d);u()}}};this.elements.push(s);f.childList&&(a.addEventListener("DOMNodeInserted",s.insertHandler),a.addEventListener("DOMNodeRemoved",s.removeHandler));f.attributes&&a.addEventListener("DOMAttrModified",s.attributeHandler);return this},
disconnect:function(){a(this.elements,function(a){a.target.removeEventListener("DOMNodeInserted",a.insertHandler);a.target.removeEventListener("DOMNodeRemoved",a.removeHandler);a.target.removeEventListener("DOMAttrModified",a.attributeHandler)});this.elements=[];return this}};g.exports=h},{"./utils":9}],7:[function(b,g){function c(a,c){return d(j.registry,a)&&-1<j.registry[a].type.indexOf(c)}var j,h=b("./globals");j=h&&h.__esModule?h["default"]:h;var f=b("./constants.js").types,d=b("./utils").hasOwn;
g.exports={clear:function(){j.registry={};return this},getForElement:function(a){var d=a.attributes,b=d.length,g=[],h=d.is,l=h&&(h.value||h.nodeValue),h=a.tagName.toLowerCase(),i=l||h,o;c(i,f.TAG)&&(i=j.registry[i],o=i["extends"],l?h===o&&g.push(i):o||g.push(i));for(l=0;l<b;l++)i=d[l].nodeName,c(i,f.ATTR)&&(i=j.registry[i],o=i["extends"],(!o||h===o)&&g.push(i));(d=a.classList)?a=d:(a=a.attributes,a=a["class"]&&a["class"].nodeValue.split(/\s+/)||[]);d=a.length;for(b=0;b<d;b++)i=a[b],c(i,f.CLASS)&&
(i=j.registry[i],o=i["extends"],(!o||h===o)&&g.push(i));return g},has:function(a){return d(j.registry,a)},set:function(a,c){if(this.has(a))throw Error('A definition of type "'+c.type+'" with the ID of "'+a+'" already exists.');j.registry[a]=c;return this},remove:function(a){this.has(a)&&delete j.registry[a];return this}}},{"./constants.js":1,"./globals":4,"./utils":9}],8:[function(b,g){function c(a,b){b=n(b||{},c.defaults);b.id=a;if(k.has(b.id))throw Error('A definition of type "'+b.type+'" with the ID of "'+
a+'" already exists.');k.set(b.id,b);i();h.register(b.remove);if(-1<b.type.indexOf(m.TAG)){var f=b,g=function(){var a;a=f["extends"];var b=f.id;a?(a=document.createElement(a),a.setAttribute("is",b)):a=document.createElement(b);f.prototype=g.prototype;d(a,f);return a};g.prototype=f.prototype;return g}}var j=function(a){return a&&a.__esModule?a["default"]:a},h=j(b("./document-observer")),f=b("./lifecycle"),d=f.triggerCreated,a=f.initElements,k=j(b("./registry")),p=b("./utils"),f=p.debounce,n=p.inherit,
j=j(b("./version")),m=b("./constants").types,l=!!document.attachEvent,i=f(function(){var b=function(){a(document.getElementsByTagName("html"))},c;c=l?"complete"===document.readyState:"interactive"===document.readyState||"complete"===document.readyState;c?b():l?window.addEventListener("load",b):document.addEventListener("DOMContentLoaded",b)});c.init=function(b){if(b)return"string"===typeof b&&(b=document.querySelectorAll(b)),a("undefined"===typeof b.length?[b]:b),b};c.types=m;c.version=j;c.defaults=
{attributes:void 0,events:void 0,"extends":"",id:"",prototype:{},resolvedAttribute:"resolved",template:void 0,type:m.ANY,unresolvedAttribute:"unresolved"};var o=window.skate;c.noConflict=function(){window.skate=o;return this};window.skate=c;g.exports=c},{"./constants":1,"./document-observer":3,"./lifecycle":5,"./registry":7,"./utils":9,"./version":10}],9:[function(b,g,c){function j(b,c){return Object.prototype.hasOwnProperty.call(b,c)}c.hasOwn=j;c.debounce=function(b){var c=!1;return function(){c||
(c=!0,setTimeout(function(){c=!1;b()},1))}};c.getClosestIgnoredElement=function(b){for(;b&&b!==document&&!(b instanceof DocumentFragment);){if(b.hasAttribute(h))return b;b=b.parentNode}};c.inherit=function(b,c,a){for(var g=Object.getOwnPropertyNames(c),h=g.length,j=0;j<h;j++){var m=g[j];if(a||void 0===b[m]){var l=Object.getOwnPropertyDescriptor(c,m);l.get||l.set||!l.writable||!l.enumerable||!l.configurable?Object.defineProperty(b,m,l):b[m]=c[m]}}return b};c.objEach=function(b,c){for(var a in b)j(b,
a)&&c(b[a],a)};Object.defineProperty(c,"__esModule",{value:!0});"use strict";var h=b("./constants").ATTR_IGNORE},{"./constants":1}],10:[function(b,g){g.exports="0.12.6"},{}]},{},[8]);(function(b){var g=b.skate.noConflict();define("atlassian/libs/skate-0.12.6",[],function(){return g})})(window);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:skate', location = '/includes/js/amd/shim/skate-amd.js' */
define("skate",["atlassian/libs/skate-0.12.6"],function(a){return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:persistable', location = 'js/persistable.js' */
define("confluence/persistable",["skate","confluence/storage-manager"],function(f,g){var d=g("confluence","userSettings");return f("data-persist",{type:f.types.ATTRIBUTE,created:function(b){if(!b.name)throw'Missing attribute "name"';var c=b.getAttribute("data-persist"),a=b.getAttribute("data-persist-scope"),a=a?b.name+"."+a.replace(/\./g,"-"):b.name,a=d.getItem(a),e=b.getAttribute("data-default-value");if(/value|checked/.test(c))a=a||e||null,null!==a&&("checked"===c&&(a="true"===a),b[c]=a);else throw"Persistable only works with 'value' or 'checked' attributes!";
},events:{change:function(b){var c=b.getAttribute("data-persist"),a=b.getAttribute("data-persist-scope"),a=a?b.name+"."+a.replace(/\./g,"-"):b.name,e=b.getAttribute("data-default-value");String(b[c])===e?d.removeItem(a):d.setItem(a,b[c],2592E3)}}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-quicknav:quicknav-resources', location = 'js/quick-nav.js' */
'use strict';define("confluence-quicknav/quick-nav",["jquery","confluence/api/logger"],function(b,l){var f=[],d,g=function(a){return function(e){a.closest("form").find(".quick-nav-drop-down").append(e)}},h=function(a){"undefined"!==typeof a?f.push(a):l.log("WARN: Attempted to add a dropdown post-process function that was undefined.")},m=function(a){b("a",a).each(function(){var a=b(this),c=a.find("span").data("properties");(c=c?c.spaceName:null)&&!a.is(".content-type-spacedesc")&&(a.after(a.clone().attr("class",
"space-name").html(c)),a.parent().addClass("with-space-name"))})};return{addDropDownPostProcess:h,setMakeParams:function(a){d=a},init:function(){var a=b("#quick-search-query"),e=g(a),c=b("#space-blog-quick-search-query"),k=b("#confluence-space-key");a.quicksearch("/rest/quicknav/1/search",null,{dropdownPlacement:e,dropdownPostprocess:function(a){b.each(f,function(c,b){b&&b(a)})},makeParams:function(a){return d?d(a):{query:a}},ajsDropDownOptions:{className:"quick-search-dropdown"}});h(m);c.length&&
k.length&&c.quicksearch("/rest/quicknav/1/search?type\x3dblogpost\x26spaceKey\x3d"+b("\x3ci\x3e\x3c/i\x3e").html(k.attr("content")).text(),null,{dropdownPlacement:g(c)})}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quicknav/quick-nav","Confluence.QuickNav");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'de.griffel.confluence.plugins.plant-uml:plantuml-resources', location = 'soy/wizard-templates.soy' */
// This file was automatically generated from wizard-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace plantuml.wizard.
 */

if (typeof plantuml == 'undefined') { var plantuml = {}; }
if (typeof plantuml.wizard == 'undefined') { plantuml.wizard = {}; }


plantuml.wizard.page1FormUml = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml('Type') + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_activity_diagram_simple">' + soy.$$escapeHtml('Activity Diagram') + '</option><option value="plantuml_template_class_diagram_simple">' + soy.$$escapeHtml('Class Diagram') + '</option><option value="plantuml_template_component_diagram_simple">' + soy.$$escapeHtml('Component Diagram') + '</option><option value="plantuml_template_state_diagram_simple">' + soy.$$escapeHtml('State Diagram') + '</option><option value="plantuml_template_sequence_diagram_simple">' + soy.$$escapeHtml('Sequence Diagram') + '</option><option value="plantuml_template_usecase_diagram_simple">' + soy.$$escapeHtml('Use Case Diagram') + '</option></select><p><a href="' + soy.$$escapeHtml('http://plantuml.sourceforge.net/classes.html') + '" class="external-link">' + soy.$$escapeHtml('UML Documentation') + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormUml.soyTemplateName = 'plantuml.wizard.page1FormUml';
}


plantuml.wizard.page1FormGraphviz = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml('Type') + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_graphviz_diagram_simple">' + soy.$$escapeHtml('Graphviz') + '</option><option value="plantuml_template_flowchart_diagram_simple">' + soy.$$escapeHtml('Flowchart') + '</option></select><p><a href="' + soy.$$escapeHtml('http://www.graphviz.org/Documentation.php') + '" class="external-link">' + soy.$$escapeHtml('Graphviz Documentation') + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormGraphviz.soyTemplateName = 'plantuml.wizard.page1FormGraphviz';
}


plantuml.wizard.page1FormDitaa = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml('Type') + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_ditaa_diagram_simple">' + soy.$$escapeHtml('DITAA') + '</option></select><p><a href="' + soy.$$escapeHtml('http://ditaa.sourceforge.net/') + '" class="external-link">' + soy.$$escapeHtml('DITAA Documentation') + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormDitaa.soyTemplateName = 'plantuml.wizard.page1FormDitaa';
}


plantuml.wizard.page1FormJcckit = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml('Type') + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_jcckit_diagram_simple">' + soy.$$escapeHtml('JCCKit') + '</option></select><p><a href="' + soy.$$escapeHtml('http://plantuml.sourceforge.net/jcckit.html') + '" class="external-link">' + soy.$$escapeHtml('JCCKit Documentation') + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormJcckit.soyTemplateName = 'plantuml.wizard.page1FormJcckit';
}


plantuml.wizard.page1FormPlantuml = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml('Function') + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_plantuml_spacegraph">' + soy.$$escapeHtml('Spacegraph') + '</option><option value="plantuml_template_plantuml_version">' + soy.$$escapeHtml('PlantUML Version Info') + '</option><option value="plantuml_template_plantuml_xearth">' + soy.$$escapeHtml('XEarth') + '</option></select><p><a href="' + soy.$$escapeHtml('plantuml.blueprint.wizard.plantumlxearth.documentation_url') + '" class="external-link">' + soy.$$escapeHtml('plantuml.blueprint.wizard.plantumlxearth.documentation') + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormPlantuml.soyTemplateName = 'plantuml.wizard.page1FormPlantuml';
}


plantuml.wizard.page1FormSalt = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml('Type') + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_salt_diagram_simple">' + soy.$$escapeHtml('Salt') + '</option></select><p><a href="' + soy.$$escapeHtml('http://plantuml.sourceforge.net/salt.html') + '" class="external-link">' + soy.$$escapeHtml('Salt Documentation') + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormSalt.soyTemplateName = 'plantuml.wizard.page1FormSalt';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'templates/anchor.soy' */
// This file was automatically generated from anchor.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace MyWork.Templates.Anchor.
 */

if (typeof MyWork == 'undefined') { var MyWork = {}; }
if (typeof MyWork.Templates == 'undefined') { MyWork.Templates = {}; }
if (typeof MyWork.Templates.Anchor == 'undefined') { MyWork.Templates.Anchor = {}; }


MyWork.Templates.Anchor.tasksFeatureDiscovery = function(opt_data, opt_ignored) {
  return '<p>' + soy.$$escapeHtml('See the tasks assigned to you, or created by you, in the Tasks tab of your profile.') + '</p><ul class="mw-tasks-discovery-controls"><li><a id="mw-tasks-discovery-view" href="' + soy.$$escapeHtml(opt_data.tasksUrl) + '" class="aui-button aui-style"><p>' + soy.$$escapeHtml('View Tasks') + '</p></a></li><li><a id="mw-tasks-discovery-dismiss" href="#">' + soy.$$escapeHtml('Dismiss') + '</a></li></ul>';
};
if (goog.DEBUG) {
  MyWork.Templates.Anchor.tasksFeatureDiscovery.soyTemplateName = 'MyWork.Templates.Anchor.tasksFeatureDiscovery';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'js/miniview-anchor.js' */
var MW=MW||{$:jQuery};MW.MV={};AJS.toInit(function(){if(AJS.Meta&&!AJS.Meta.get("remote-user")){return}MW.MV.AnchorManager=function(){var l=contextPath,h=l+"/plugins/servlet/notifications-miniview",p=0,e=/[?&]show-miniview/.test(window.location.search);function r(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var s="[\\?\\#&]"+t+"=([^&#]*)";var v=new RegExp(s);var u=v.exec(window.location.search);if(u!==null){return decodeURIComponent(u[1].replace(/\+/g," "))}}var o=r("show-miniview");if(o){h+="#notification/"+o}function q(){var s="badge-i aui-icon aui-icon-small aui-iconfont-notification";MW.$("#notifications-anchor").html('<div class="'+s+'"></div><span class="badge-w"><span class="badge"></span></span>').attr("title","Open Notifications")}function f(u){var t=false,s;return function(){if(t){return s}t=true;s=u.apply(this,arguments);return s}}var n=f(function(){MW.Dialog.getOptions().closeOthers=false;MW.Dialog.preload=true;MW.Dialog.show();MW.Dialog.hide();MW.Dialog.getOptions().closeOthers=true});function k(s){return s<=9?s:"9+"}function j(s){var t=MW.$("#notifications-anchor"),u=t.find(".badge"),v=t.find(".aui-icon");u.html(k(s));p=s;if(s>0){t.addClass("unread").removeClass("read");if(t.is(":visible")&&!e){n()}}else{t.addClass("read").removeClass("unread")}}function m(){c("notifications",h);d()}function d(){MW.$(document).keydown(function(s){if(AJS.InlineDialog.current&&s.which==27&&!MW.$(s.target).is(":input")){AJS.InlineDialog.current.hide()}})}function i(){MW.$("#header-menu-bar").find(".ajs-drop-down").each(function(){this.hide()})}function c(x,v){var w;var u=function(){w=this};var s=function(){if(this.preload!==true){var y=JSON.stringify({markAllRead:true});MW.$("#"+x+"-miniview-iframe")[0].contentWindow.postMessage(y,"*")}};if(!window.addEventListener){window.attachEvent("onmessage",t)}else{window.addEventListener("message",t,false)}function t(A){function B(C){return C===location.protocol+"//"+location.host}if("escKey"===A.data){w.hide();MW.$("#notifications-anchor").focus();document.activeElement.blur()}else{if("getParentConfig"===A.data&&B(A.origin)){var z=JSON.stringify({parentConfig:{parentUrl:location.href,preload:MW.Dialog.preload,unread:p}}),y=MW.$("#"+x+"-miniview-iframe")[0].contentWindow;y.postMessage(z,"*");if(MW.Dialog.preload){MW.Dialog.preload=false}else{y.focus()}}}}MW.Dialog=AJS.InlineDialog(MW.$("#"+x+"-anchor"),x+"-miniview",function(B,z,C){if(MW.$(B).children().length===0){MW.$(B).append(MW.$('<iframe id="'+x+'-miniview-iframe" src="'+v+'" frameborder="0"></iframe>'))}else{var A=JSON.stringify({unread:p}),y=MW.$("#"+x+"-miniview-iframe")[0].contentWindow;y.postMessage(A,"*");setTimeout(function(){y.focus()},100)}i();C()},{width:500,height:520,hideDelay:null,initCallback:u,hideCallback:s,noBind:true});MW.Tasks=(function(){var A=300;var z=20;var B=16;var G;var D=$("#user-menu-link");var C=$("#user-menu-link-content");var y=C.find("#view-mytasks-link");var E=function(J,H,K){var I=MyWork.Templates.Anchor.tasksFeatureDiscovery({tasksUrl:AJS.contextPath()+"/plugins/inlinetasks/mytasks.action"});J.html(I);J.find("#mw-tasks-discovery-dismiss").click(function(){G.hide()});K()};var F=function(){MW.Dialog.hide();var J=function(){return C.is(":visible")};if(!J()){D.trigger("aui-button-invoke")}var H=function(){G.hide()};C.one("aui-dropdown2-hide",H);G=AJS.InlineDialog(y,"my-tasks-discovery",E,{hideCallback:function(){G.unbind("click focusin mousedown",I);C.unbind("aui-dropdown2-hide",H);if(J()){D.trigger("aui-button-invoke")}MW.$("#inline-dialog-my-tasks-discovery").remove()},gravity:"w",useLiveEvents:true,width:A,noBind:true});C.find(".user-item.active").removeClass("active");y.addClass("active");y.focus();var I=function(K){K.stopPropagation()};G.on("click focusin mousedown",I);G.show()};return{closeAndDiscoverMyTasks:F}})();MW.$("#"+x+"-anchor").click(function(y){y.preventDefault();if(MW.$("#"+x+"-miniview-iframe").is(":visible")){MW.Dialog.hide()}else{MW.Dialog.show()}});if(e){MW.$("#"+x+"-anchor").click()}}function g(){q();m()}return{setupAnchors:g,updateNotificationCount:j}}();MW.MV.AnchorManager.setupAnchors();var b=new MW.AnchorUtil(MW.$,contextPath,MW.MV.AnchorManager.updateNotificationCount);b.setupAnchors();MW.$("#notifications-anchor").click(function(){AJS.trigger("analytics",{name:"mywork.host.button.clicked.notifications",data:{}});MW.MV.AnchorManager.updateNotificationCount(0)});var a=function(){if(document.hidden){b.stopRequests(true)}else{b.startRequests()}};document.addEventListener("visibilitychange",a,false);if(typeof document.hidden==="undefined"){MW.$(window).focus(function(){b.startRequests()})}MW.$("body").click(function(){b.startRequests()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'js/util/anchor-util.js' */
MW.AnchorUtil=function(d,k,e){var f=30000,i=f,s,p=k+"/rest/mywork/latest/status/notification/count";var r=new Date().getTime();var b=5*60*1000;var t=1000*60*5;var h=1.25;var c=0;function q(u){window.clearInterval(s);s=undefined;if(u===true){i=f}}function o(){return(new Date().getTime()-r)<t}function m(){if(!o()||!s){l()}r=new Date().getTime()}function l(){if(s){clearTimeout(s)}s=setTimeout(function(){g()},c=n(c))}function a(w,u){var v=w*1000;b=u*1000||b;if(v&&v!=i){i=v;m()}}function n(u){return Math.min(o()?i:u*h,b)}function g(u){MW.$.getJSON(p+((u)?"?pageid="+u:""),function(w){a(w.timeout,w.maxTimeout);var v=w.count;e(v)});l()}function j(){var u=AJS&&AJS.Meta&&AJS.Meta.get&&(AJS.Meta.get("content-type")==="page"||AJS.Meta.get("content-type")==="blogpost");if(u){g(AJS.Meta.get("page-id"))}else{g()}m()}return{setupAnchors:j,startRequests:m,stopRequests:q,updateAnchors:g}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:common-template-resources', location = 'com/atlassian/confluence/plugins/blueprint/common/soy/common-templates.soy' */
// This file was automatically generated from common-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Blueprints.Common.Index.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Common == 'undefined') { Confluence.Blueprints.Common = {}; }
if (typeof Confluence.Blueprints.Common.Index == 'undefined') { Confluence.Blueprints.Common.Index = {}; }


Confluence.Blueprints.Common.Index.detailsSummaryMacro = function(opt_data, opt_ignored) {
  return '<ac:macro ac:name="detailssummary"><ac:parameter ac:name="label">' + soy.$$escapeHtml(opt_data.label) + '</ac:parameter><ac:parameter ac:name="spaces">' + soy.$$escapeHtml(opt_data.spaces) + '</ac:parameter><ac:parameter ac:name="firstcolumn">' + soy.$$escapeHtml(opt_data.firstcolumn) + '</ac:parameter><ac:parameter ac:name="headings">' + soy.$$escapeHtml(opt_data.headings) + '</ac:parameter><ac:parameter ac:name="blankTitle">' + soy.$$escapeHtml(opt_data.blankTitle) + '</ac:parameter><ac:parameter ac:name="blankDescription">' + soy.$$escapeHtml(opt_data.blankDescription) + '</ac:parameter><ac:parameter ac:name="contentBlueprintId">' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '</ac:parameter><ac:parameter ac:name="blueprintModuleCompleteKey">' + soy.$$escapeHtml(opt_data.blueprintModuleCompleteKey) + '</ac:parameter><ac:parameter ac:name="createButtonLabel">' + soy.$$escapeHtml(opt_data.createButtonLabel) + '</ac:parameter></ac:macro>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Common.Index.detailsSummaryMacro.soyTemplateName = 'Confluence.Blueprints.Common.Index.detailsSummaryMacro';
}


Confluence.Blueprints.Common.Index.createFromTemplateMacro = function(opt_data, opt_ignored) {
  return '<ac:macro ac:name="create-from-template"><ac:parameter ac:name="blueprintModuleCompleteKey">' + soy.$$escapeHtml(opt_data.moduleKey) + '</ac:parameter><ac:parameter ac:name="buttonLabel">' + soy.$$escapeHtml(opt_data.buttonLabel) + '</ac:parameter><ac:parameter ac:name="spaceKey">' + soy.$$escapeHtml(opt_data.spaceKey) + '</ac:parameter><ac:parameter ac:name="templateName">' + soy.$$escapeHtml(opt_data.templateName) + '</ac:parameter></ac:macro>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Common.Index.createFromTemplateMacro.soyTemplateName = 'Confluence.Blueprints.Common.Index.createFromTemplateMacro';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/how-to.soy' */
// This file was automatically generated from how-to.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Blueprints.Meeting.Notes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Meeting == 'undefined') { Confluence.Blueprints.Meeting = {}; }
if (typeof Confluence.Blueprints.Meeting.Notes == 'undefined') { Confluence.Blueprints.Meeting.Notes = {}; }


Confluence.Blueprints.Meeting.Notes.howTo = function(opt_data, opt_ignored) {
  return '<h1>' + soy.$$escapeHtml('With meeting notes you can...') + '</h1><ol class="howto-steps"><li class="howto-step"><div><h3>' + soy.$$escapeHtml('Crowd-source your agenda') + '</h3><p>' + soy.$$escapeHtml('Distribute an agenda and keep meetings focused.') + '</p></div></li><li class="howto-step"><div><h3>' + soy.$$escapeHtml('Capture meeting minutes') + '</h3><p>' + soy.$$escapeHtml('Take notes and make them available to everyone.') + '</p></div></li><li class="howto-step"><div><h3>' + soy.$$escapeHtml('Create and assign tasks') + '</h3><p>' + soy.$$escapeHtml('Assign action items for attendees to work on afterward.') + '</p></div></li></ol>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Meeting.Notes.howTo.soyTemplateName = 'Confluence.Blueprints.Meeting.Notes.howTo';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/user-mention.soy' */
// This file was automatically generated from user-mention.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Meeting.Notes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Meeting == 'undefined') { Confluence.Templates.Meeting = {}; }
if (typeof Confluence.Templates.Meeting.Notes == 'undefined') { Confluence.Templates.Meeting.Notes = {}; }


Confluence.Templates.Meeting.Notes.userMention = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + ((opt_data.userkey) ? '<li><p><ac:link><ri:user ri:userkey="' + soy.$$escapeHtml(opt_data.userkey) + '" /></ac:link></p></li><li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml('@mention a person to add them as an attendee and they will be notified.') + '</ac:placeholder></p></li>' : '<li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml('@mention a person to add them as an attendee and they will be notified.') + '</ac:placeholder></p></li>');
};
if (goog.DEBUG) {
  Confluence.Templates.Meeting.Notes.userMention.soyTemplateName = 'Confluence.Templates.Meeting.Notes.userMention';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.troubleshooting.plugin-confluence:atst-common', location = 'js/ajs-amd.js' */
define('troubleshooting/ajs', [], function () {
    'use strict';

    return AJS;
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.troubleshooting.plugin-confluence:atst-healthcheck-sensors', location = 'js/sensors.js' */
require([
    'troubleshooting/sensors/page-protocols',
    'troubleshooting/ajs'
], function(
    protocolSensor,
    AJS
) {
    var sensors = [protocolSensor];

    AJS.toInit(function() {

        function hash(str) {
            var hash = 0;
            for (var i = 0; i < str.length; ++i) {
                hash = 31 * hash + str.charCodeAt(i);
                hash |= 0; // this reduces the number to 32bits and prevents Infinity
            }
            return hash;
        }

        //this handles cases when the user disabled access to local storage
        var localStorageWrapper = {
            getWithDefaultOnError: function(sensorName, defaultValue) {
                try {
                    return window.localStorage.getItem(sensorName) || "0";
                } catch (e) {
                    return defaultValue;
                }
            },
            setItemQuietly: function (key, value) {
                try {
                    window.localStorage.setItem(key, value);
                } catch (ignored) {
                }
            }
        };

        // Iterate through each sensor and ingest any data it has for us...
        // but only if it's actually working properly in this client.
        sensors.forEach(function(sensor) {
            if (!sensor.isWorking()) {
                return
            }

            var sensorData = {};
            var newData = sensor.getData();
            for (var key in newData) {
                if (newData.hasOwnProperty(key)) {
                    sensorData[key] = newData[key];
                }
            }

            var sensorName = 'atst.healthcheck.sensors.' + sensor.getName();
            var currentHash = hash(JSON.stringify(sensorData)).toString(36);
            var previousHash = localStorageWrapper.getWithDefaultOnError(sensorName, currentHash);
            if (previousHash===currentHash && Math.random()>0.01) {
                return;
            }
            // What's one more analytics event to the world? A drop in the data ocean.
            AJS.trigger('analytics', {
                name: sensorName,
                data: sensorData
            });
            localStorageWrapper.setItemQuietly(sensorName, currentHash);
        });

    });
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.troubleshooting.plugin-confluence:atst-healthcheck-sensors', location = 'js/sensors/page-protocols.js' */
define('troubleshooting/sensors/page-protocols', ['troubleshooting/ajs'], function(AJS) {
    var baseUrl = AJS.contextPath();
    var hasPerfData = window.performance && typeof window.performance.getEntriesByType === 'function';

    // WARNING: This is a rough assumption based on how the WRM works.
    // Consuming this from the WRM would be a better option, but meh.
    // See: https://bitbucket.org/atlassian/atlassian-plugins-webresource/src/master/atlassian-plugins-webresource/src/main/java/com/atlassian/plugin/webresource/WebResourceUrlProviderImpl.java
    // See also: https://stash.atlassian.com/projects/CP/repos/static-assets-url/browse/src/main/resources/ui/health-checks/health-checks.js
    var WRM_STATIC_ASSET_REGEX = new RegExp(baseUrl + '/s/.+?/_/');

    function isStaticResource(resource) {
        return WRM_STATIC_ASSET_REGEX.test(resource.name);
    }

    function getNextHopData(resource) {
        return (resource && resource.nextHopProtocol) || 'unknown';
    }

    function unique(elem, pos, arr) {
        return arr.indexOf(elem) === pos;
    }

    return {
        isWorking: function() {
            return hasPerfData;
        },
        getName: function() {
          return 'page-protocols';
        },
        getData: function() {
            var resources = window.performance.getEntriesByType('resource');
            var navigation = window.performance.getEntriesByType('navigation');
            var resourceProtocols = resources
                .filter(isStaticResource)
                .map(getNextHopData)
                .filter(unique)
                .sort();
            if (!resourceProtocols.length) {
                resourceProtocols.push('unknown');
            }
            return {
                resourceProtocols: resourceProtocols,
                navigationProtocol: getNextHopData(navigation[0]),
                userAgent: navigator.getUserAgent && "use-js-client-hints" || navigator.userAgent
            };
        }
    }
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/store-1.3.1.js' */
(function(){var l={},h=window,k=h.document,c="localStorage",n="globalStorage",d="__storejs__",g;l.disabled=false;l.set=function(e,o){};l.get=function(e){};l.remove=function(e){};l.clear=function(){};l.transact=function(e,o){var p=l.get(e);if(typeof p=="undefined"){p={}}o(p);l.set(e,p)};l.serialize=function(e){return JSON.stringify(e)};l.deserialize=function(e){if(typeof e!="string"){return undefined}return JSON.parse(e)};function b(){try{return(c in h&&h[c])}catch(e){return false}}function m(){try{return(n in h&&h[n]&&h[n][h.location.hostname])}catch(e){return false}}if(b()){g=h[c];l.set=function(e,o){if(o===undefined){return l.remove(e)}g.setItem(e,l.serialize(o))};l.get=function(e){return l.deserialize(g.getItem(e))};l.remove=function(e){g.removeItem(e)};l.clear=function(){g.clear()}}else{if(m()){g=h[n][h.location.hostname];l.set=function(e,o){if(o===undefined){return l.remove(e)}g[e]=l.serialize(o)};l.get=function(e){return l.deserialize(g[e]&&g[e].value)};l.remove=function(e){delete g[e]};l.clear=function(){for(var e in g){delete g[e]}}}else{if(k.documentElement.addBehavior){var j,f;try{f=new ActiveXObject("htmlfile");f.open();f.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></frame>');f.close();j=f.w.frames[0].document;g=j.createElement("div")}catch(i){g=k.createElement("div");j=k.body}function a(e){return function(){var p=Array.prototype.slice.call(arguments,0);p.unshift(g);j.appendChild(g);g.addBehavior("#default#userData");g.load(c);var o=e.apply(l,p);j.removeChild(g);return o}}l.set=a(function(p,e,o){if(o===undefined){return l.remove(e)}p.setAttribute(e,l.serialize(o));p.save(c)});l.get=a(function(o,e){return l.deserialize(o.getAttribute(e))});l.remove=a(function(o,e){o.removeAttribute(e);o.save(c)});l.clear=a(function(q){var o=q.XMLDocument.documentElement.attributes;q.load(c);for(var p=0,e;e=o[p];p++){q.removeAttribute(e.name)}q.save(c)})}}}try{l.set(d,d);if(l.get(d)!=d){l.disabled=true}l.remove(d)}catch(i){l.disabled=true}if(typeof module!="undefined"){module.exports=l}else{if(typeof define==="function"&&define.amd){define(l)}else{this.store=l}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/page-visibility.js' */
define("atlassian/analytics/page-visibility",function(){var a=(document.hidden!==undefined);var b={supported:a,isHidden:function(){return a?document.hidden:false}};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/user-activity-xhr-header.js' */
define("atlassian/analytics/user-activity-xhr-header",["atlassian/analytics/page-visibility"],function(c){var e="x-atlassian-mau-ignore";var d=XMLHttpRequest.prototype.send;var a=window.fetch;var b=false;return{install:function(){if(!b&&c.supported){XMLHttpRequest.prototype.send=function(){if(c.isHidden()){this.setRequestHeader(e,c.isHidden())}d.apply(this,arguments)};if(a){window.fetch=function(f,i){var g=i||{};var h=g.headers;if(c.isHidden()){g.headers=(h)?new Headers(h):new Headers();g.headers.append(e,c.isHidden())}return a.call(this,f,g)}}b=true}},uninstall:function(){if(b){XMLHttpRequest.prototype.send=d;if(a){window.fetch=a}}b=false}}});require("atlassian/analytics/user-activity-xhr-header").install();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/atlassian-analytics.js' */
(function(d){var q=AJS.$.ajax;var l="atlassian-analytics";var j=typeof AJS.contextPath==="function"?AJS.contextPath():"";var p=null;var m=null;var g=null;var r="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(z){var y=Math.random()*16|0,x=z=="x"?y:(y&3|8);return x.toString(16)});var t=function(){var x="unknown";if(document.body.id=="jira"){x="jira"}else{if(document.body.id=="com-atlassian-confluence"){x="confluence"}}m=l+"."+x;g=m+".lock"};var f=function(){if(store.get(g)){return false}store.set(g,r);return(store.get(g)===r)};var u=function(){store.set(g,null)};var i=function(){var y=[],A,B,x,z;if(AJS.EventQueue.length==0){return}y=store.get(m)||y;for(x=0,z=AJS.EventQueue.length;x<z;++x){B=AJS.EventQueue[x];if(B.name){A={name:B.name,properties:B.properties,time:B.time||0};y.push(A)}}AJS.EventQueue.length=0;store.set(m,y)};var v=0;var a=function(x){return Math.min(5000*Math.pow(2,x),5*60*1000)};var e=0;var h=function(){var A;function y(){setTimeout(h,a(v=0))}function x(){setTimeout(h,a(++v))}if(!f()){++e;if(e<20){return y()}}else{e=0}try{i();A=store.get(m);if(!A||!A.length){return y()}store.remove(m);if(!o(A)){return y()}var B=new Date().getTime();for(var z=0;z<A.length;z++){if(A[z].time>0){A[z].timeDelta=A[z].time-B}else{A[z].timeDelta=z-A.length}delete A[z].time}p=q({type:"POST",url:j+"/rest/analytics/1.0/publish/bulk",data:JSON.stringify(A),contentType:"application/json",dataType:"json"});p.fail(function(){AJS.EventQueue.concat(A);i();x()});p.done(function(){y()})}finally{u()}};var o=function(z){for(var y=z.length-1;y>=0;y--){var B="";var A=z[y];var x=A.properties;if(typeof A.name==="undefined"){B="you must provide a name for the event."}else{if(typeof x!=="undefined"&&x!==null){if(x.constructor!==Object){B="properties must be an object with key value pairs."}else{b(x)}}}if(B!==""){AJS.log("WARN: Invalid analytics event detected and ignored, "+B+"\nEvent: "+JSON.stringify(A));z.splice(y,1)}}return z.length};var b=function(z){for(var y in z){if(z.hasOwnProperty(y)){var x=z[y];if(c(x)&&k(x)){}else{if(c(x)&&x.toString){z[y]=x.toString()}else{z[y]=""}}}}};function c(x){return typeof x!=="undefined"&&x!==null}function k(x){return typeof x==="number"||typeof x==="string"||typeof x==="boolean"}var n=function(){if(p&&!(p.state()==="resolved"||p.state()==="rejected")){p.abort()}};AJS.EventQueue=AJS.EventQueue||[];var s=Array.prototype.push;AJS.EventQueue.push=function(x){x.time=new Date().getTime();s.call(AJS.EventQueue,x)};AJS.toInit(function(){t();setTimeout(h,500);w()});d(window).unload(function(){n();i()});AJS.Analytics={triggerPrivacyPolicySafeEvent:function(x,y){AJS.log("WARN: 'triggerPrivacyPolicySafeEvent' has been deprecated");AJS.EventQueue.push({name:x,properties:y})}};AJS.bind("analytics",function(x,y){AJS.EventQueue.push({name:y.name,properties:y.data})});AJS.bind("analyticsEvent",function(x,y){AJS.EventQueue.push({name:y.name,properties:y.data})});var w=function(){if(window.location.pathname.indexOf("/secure/admin/ViewApplicationProperties")>-1){AJS.$("[data-property-id='analytics-enabled']").remove()}else{if(window.location.pathname.indexOf("/secure/admin/EditApplicationProperties")>-1){var y=AJS.$(":contains(Enable Atlassian analytics)");if(y.size()>0){var x=y[y.size()-2];if(x){x.remove()}}}}}}(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:policy-update-init', location = 'js/policy-update-init.js' */
AJS.toInit(function(){var a=WRM.data.claim("com.atlassian.analytics.analytics-client:policy-update-init.policy-update-data-provider");if(a){WRM.require("wrc!com.atlassian.analytics.analytics-client:policy-update")}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:programmatic-analytics-init', location = 'js/programmatic-analytics-init.js' */
(function(){var a=WRM.data.claim("com.atlassian.analytics.analytics-client:programmatic-analytics-init.programmatic-analytics-data-provider");if(a){WRM.require("wrc!com.atlassian.analytics.analytics-client:programmatic-analytics")}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:application-header-administration-cog-resource', location = 'header/cog.js' */
var NavLinks=(function(a){a.ApplicationHeader=function(b){b.Cog=(function(){var c=function(){var d=AJS.$("#system-admin-menu-content");if(d.length>0){return d}var e=AJS.$("#admin-menu-link-content");if(e.length>0){return e}return AJS.$("#bamboo\\.global\\.header-admin\\.menu")};return{getDropdown:c}}());return b}(a.ApplicationHeader||{});return a}(NavLinks||{}));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts-resources', location = 'adminshortcuts/adminshortcuts.soy' */
// This file was automatically generated from adminshortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.adminshortcuts.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.adminshortcuts == 'undefined') { navlinks.templates.adminshortcuts = {}; }


navlinks.templates.adminshortcuts.section = function(opt_data, opt_ignored) {
  var param5 = '<ul class="aui-list-truncate">';
  var linkList7 = opt_data.links;
  var linkListLen7 = linkList7.length;
  for (var linkIndex7 = 0; linkIndex7 < linkListLen7; linkIndex7++) {
    var linkData7 = linkList7[linkIndex7];
    param5 += '<li><a href="' + soy.$$escapeHtml(linkData7.link) + '">' + soy.$$escapeHtml(linkData7.label) + '</a></li>';
  }
  param5 += '</ul>';
  var output = '' + aui.dropdown2.section({id: 'nl-remote-admin-section', label: 'Other applications', content: param5});
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.adminshortcuts.section.soyTemplateName = 'navlinks.templates.adminshortcuts.section';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts-resources', location = 'adminshortcuts/adminnavlinks.js' */
var NavLinks=(function(a){a.AdminShortcuts=(function(){var c=function(){return AJS.$.ajax({url:AJS.contextPath()+"/rest/menu/latest/admin",cache:false,dataType:"json"})};var b=function(){AJS.$("#nl-remote-admin-section").on("click","a",function(){NL.trackEvent("remoteAdminItemSelected",NL.getCurrentApplication(),$(this).attr("href"))})};return{render:function(){c().done(function(e){e=_.reject(e,function(f){return f.local===true});if(e.length){var d=navlinks.templates.adminshortcuts.section({links:e});a.ApplicationHeader.Cog.getDropdown().append(d);b()}})}}}());return a}(NavLinks||{}));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts', location = 'adminshortcuts/adminshortcuts-cdn.js' */
AJS.toInit(function(){if(AJS.DarkFeatures&&AJS.DarkFeatures.isEnabled("rotp.admin.shortcuts")){NavLinks.AdminShortcuts.render()}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.vendors--02a4084a95', location = 'aui.chunk.44a84b38d918ac48f23e--0bb7ce9e7417a425cdd3.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.splitchunk.vendors--02a4084a95"],{M4tZ:function(E,n,o){var i,u,A;u=[o("oDIA"),o("O+lX")],void 0===(A="function"==typeof(i=function(E){return E.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}})?i.apply(n,u):i)||(E.exports=A)}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_jquery.ui.keycode', location = 'aui.chunk.d175379a9b4e384fcbc6--5bd6af766d5f5cd45e54.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["jquery.ui.keycode"],{wrJm:function(u,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i("M4tZ"),e.default="jquery",u.exports=e.default}},[["wrJm","runtime","aui.splitchunk.vendors--20a97d6a33","aui.splitchunk.vendors--02a4084a95","aui.splitchunk.172ffb6da7"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.soy' */
// This file was automatically generated from projectshortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.projectshortcuts.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.projectshortcuts == 'undefined') { navlinks.templates.projectshortcuts = {}; }


navlinks.templates.projectshortcuts.dialogContent = function(opt_data, opt_ignored) {
  return '' + ((opt_data.localShortcuts && opt_data.localShortcuts.length > 0) ? navlinks.templates.projectshortcuts.dialogContentShortcuts({shortcuts: opt_data.localShortcuts, listClass: 'projectshortcut-links'}) : '') + ((opt_data.remoteShortcuts != null) ? (opt_data.remoteShortcuts.length > 0) ? '<h2 class="projectshortcuts-heading">Related Links</h2>' + navlinks.templates.projectshortcuts.dialogContentShortcuts(soy.$$augmentMap(opt_data.remoteShortcuts, {shortcuts: opt_data.remoteShortcuts, listClass: 'projectshortcut-links'})) : '' : navlinks.templates.projectshortcuts.dialogLoading(null));
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContent.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContent';
}


navlinks.templates.projectshortcuts.headingWrapper = function(opt_data, opt_ignored) {
  return '<div class="project-dialog-header-wrapper"><div class="project-header"><img class="project-img" src="' + soy.$$escapeHtml(opt_data.logoUrl) + '"><h2 class="dialog-title">' + soy.$$escapeHtml(opt_data.title) + '</h2></div><div class="project-content-wrapper">' + soy.$$filterNoAutoescape(opt_data.contentHtml) + '</div></div>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.headingWrapper.soyTemplateName = 'navlinks.templates.projectshortcuts.headingWrapper';
}


navlinks.templates.projectshortcuts.dialogContentShortcuts = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<ul' + ((opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '') + '>';
  var shortcutList35 = opt_data.shortcuts;
  var shortcutListLen35 = shortcutList35.length;
  for (var shortcutIndex35 = 0; shortcutIndex35 < shortcutListLen35; shortcutIndex35++) {
    var shortcutData35 = shortcutList35[shortcutIndex35];
    output += '<li' + ((shortcutIndex35 == shortcutListLen35 - 1) ? ' class="last"' : '') + '>' + navlinks.templates.projectshortcuts.dialogContentShortcut(shortcutData35) + '</li>';
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContentShortcuts.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContentShortcuts';
}


navlinks.templates.projectshortcuts.dialogContentShortcut = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.link) + '"' + ((opt_data.tooltip) ? ' title="' + soy.$$escapeHtml(opt_data.tooltip) + '"' : '') + '>' + soy.$$escapeHtml(opt_data.label) + '</a>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContentShortcut.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContentShortcut';
}


navlinks.templates.projectshortcuts.dialogLoading = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div class="projectshortcuts-loading">' + ((opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '') + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogLoading.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogLoading';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.js' */
(function(e,g){var i,k={},m="key",b="name",j="entity-type";function f(s){var n=e(this),o=n.data(m),q=n.data(b),p=n.data(j);if(typeof o==="undefined"){return}s.preventDefault();i=new AJS.Dialog({width:600,keypressListener:function(u){if(u.which==jQuery.ui.keyCode.ESCAPE){i.remove()}},id:"project-shortcuts-dialog"}).addCancel("Close",function(){i.remove()}).addPanel("",navlinks.templates.projectshortcuts.headingWrapper({title:q,logoUrl:h(),contentHtml:navlinks.templates.projectshortcuts.dialogLoading({text:"Retrieving links…"})})).show();c(i);if(!k[o]){k[o]={entity:{title:q},localShortcuts:null,remoteShortcuts:null};d(AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+o,{entityType:p}).done(t);d(AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+o,{entityType:p}).done(r).fail(function(){var u=i.getCurrentPanel().body.find(".project-content-wrapper");u.find(".projectshortcuts-loading").remove();AJS.messages.error(u,{body:"Could not retrieve remote project shortcuts",closeable:false});c(i)})}else{l(k[o])}function t(u){k[o].localShortcuts=u.shortcuts;l(k[o])}function r(u){k[o].remoteShortcuts=u.shortcuts;l(k[o])}}function h(){return e(".project-shortcut-dialog-trigger img").attr("src")}function l(n){if(n.localShortcuts){i.getCurrentPanel().html(navlinks.templates.projectshortcuts.headingWrapper({title:n.entity.title,logoUrl:h(),contentHtml:navlinks.templates.projectshortcuts.dialogContent(n)}));c(i)}}function a(p){var o=210;if(!p||p.length<=o){return p}var n=o;while(n>0&&p.charAt(n)!=" "){n--}if(n==0){n=o}p=p.substring(0,n);if(p.length>=n){p=p+"..."}return p}function c(n){var q=n.popup.element,p=q.find(".dialog-panel-body"),o=q.find(".dialog-components");p.height("auto");q.height(o.outerHeight()-1);e(".aui-shadow").remove()}function d(n,o){return e.ajax({url:n,cache:false,data:o,dataType:"json"})}e(document).on("click",".project-shortcut-dialog-trigger",f)}(jQuery,window.NL=(window.NL||{})));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:atlassian-ui-popup-display-controller', location = 'popups/DisplayController.js' */
AJS.Popups=AJS.Popups||{};AJS.Popups.DisplayController=function(){var c=[];var a=false;var b=false;AJS.toInit(function(){setTimeout(function(){AJS.Popups.DisplayController.render()},0)});return{request:function(d){c.push(d);if(a&&b===false){this.render()}},render:function(){c.sort(function(e,d){return e.weight-d.weight});a=true;if(c.length!==0){b=true;c[0].show()}}}}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.page.iconography', location = 'aui.chunk.bdafbba768eff22233fc--8f22190d7e95afd6cbd1.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.page.iconography"],[],[["rSV2","runtime","aui.splitchunk.b0831cc7d0","aui.splitchunk.336ae4f9e7","aui.splitchunk.56dfb54d0c","aui.splitchunk.908fe798b4"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jira-issues-view-mode-resources', location = 'jira/jira-issues-view-mode/main.js' */
require(["ajs","jquery"],function(b,d){var a="wr!confluence.extra.jira:jira-issues-view-mode-async-resource";var c=function(){var e=d(".wiki-content [data-jira-key][data-client-id]");if(e.length==0){return false}WRM.require(a,function(){require(["confluence/jim/jira/jira-issues-view-mode/lazy-loading","confluence/jim/jira/jira-issues-view-mode/fix-ui"],function(g,f){g.init(e).done(function(){f.fixBreakIconInOldConf()})})})};b.toInit(c);b.bind("ic-jim-async-supported",c)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:amd-support', location = 'amd/confluence-shim.js' */
define("confluence/jim/confluence-shim",function(){return window.Confluence});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:amd-support', location = 'amd/amd-exporter.js' */
define("confluence/jim/amd/module-exporter",[],function(){var a={};a.namespace=function(f,g,e){var h=f.split(".");var c=e||window;var d;var j=h.length-1;for(d=0;d<j;d++){var b=c[h[d]];c=(b!=null)?b:c[h[d]]={}}if(c[h[d]]){if(window.console&&window.console.warn){window.console.warn('Value of "'+f+'" was overridden')}}c[h[d]]=g||c[h[d]]||{};return c[h[d]]};a.safeRequire=function(c,b){if(define&&define.amd===undefined){var d=require(c);if(b){b(d)}}};a.exportModuleAsGlobal=function(c,d,b){a.safeRequire(c,function(e){a.namespace(d,e);if(b){b(e)}})};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:querystring', location = '/includes/js/api/querystring.js' */
define("confluence/api/querystring",[],function(){return{stringify:function(a){var b="",c;for(c in a)for(var d=0;d<a[c].length;d++)b+="&"+c,a[c][d]&&(b+="="+a[c][d]);return b.substring(1)},parse:function(a){var b={};if(a){"?"===a.substr(0,1)&&(a=a.substr(1));for(var a=a.split("&"),c=0;c<a.length;c++){var d=a[c].split("=");b[d[0]]||(b[d[0]]=[]);b[d[0]].push(a[c].substring(d[0].length+1))}}return b}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:url', location = '/includes/js/api/url.js' */
define("confluence/api/url",["confluence/api/querystring","jquery"],function(d,e){var g=/([^?|#]+)[?]?([^#]*)[#]?(.*)/,f=["source","urlPath","queryParams","anchor"];return{parse:function(a){var b={};if(a=g.exec(a)){for(var c=0;c<f.length;c++)b[f[c]]=a[c];b.queryParams=d.parse(b.queryParams)}return b},format:function(a){return e.isEmptyObject(a)?"":(!a.urlPath?"":a.urlPath)+(e.isEmptyObject(a.queryParams)?"":"?"+d.stringify(a.queryParams))+(!a.anchor?"":"#"+a.anchor)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:analytics-support', location = '/includes/js/analytics-support.js' */
define("confluence/analytics-support","jquery ajs confluence/meta window document confluence/api/url".split(" "),function(j,o,l,k,m,h){var b={},n;b.setAnalyticsSource=function(a,d){if(typeof n==="undefined"){var c=j._data(k,"events");n=c&&c.analytics&&c.analytics.length>0}n&&a.attr("href",function(a,c){var b=encodeURIComponent(d),g=h.parse(c);if(!j.isEmptyObject(g))g.queryParams.src=[b];return h.format(g)})};b.srcRemovedUrl=function(a){a=h.parse(a);delete a.queryParams.src;for(var d=Object.keys(a.queryParams),
c=0;c<d.length;c++){var b=d[c],f=b.split(".");f.length===3&&f[0]==="src"&&delete a.queryParams[b];b==="jwt"&&delete a.queryParams[b]}return h.format(a)};b.srcParamValues=function(a){return(a=h.parse(a).queryParams)&&a.src?a.src:[]};b.srcAttrParamValues=function(a){for(var a=h.parse(a).queryParams,b={},c=Object.keys(a),e=0;e<c.length;e++){var f=c[e],i=f.split(".");if(i.length===3&&i[0]==="src"){var g=i[1],i=i[2];b[g]=b[g]||{};b[g][i]=decodeURIComponent(a[f][0])}}return b};b.extractAnalyticsData=function(a){for(var d=
[],c=b.srcParamValues(a),a=b.srcAttrParamValues(a),e=0;e<c.length;e++){var f=c[e];d.push({src:f,attr:a[f]||{}})}return d};b.publish=function(a,b){o.trigger("analytics",{name:a,data:b||{}})};b.init=function(){var a=b.extractAnalyticsData(m.URL),d={userKey:l.get("remote-user-key"),pageID:l.get("page-id"),draftID:l.get("draft-id")};if(a.length>0){for(var c=0;c<a.length;c++){var e=a[c],f=j.extend({},d,e.attr);b.publish("confluence.viewpage.src."+e.src,f)}if(k.history&&k.history.replaceState){a=b.srcRemovedUrl(m.URL);
m.URL!==a&&k.history.replaceState(null,"",a)}}else b.publish("confluence.viewpage.src.empty",d)};return b});require("confluence/module-exporter").exportModuleAsGlobal("confluence/analytics-support","AJS.Confluence.Analytics",function(j){require("ajs").toInit(j.init)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:lodash-amd', location = 'applinks/internal/lib/lodash-amd-global.js' */
define("applinks/lib/lodash",function(){if(!window._){throw"lodash not found"}return window._});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/lib-version.js' */
define("applinks/lib/version",["applinks/lib/lodash"],function(c){function d(f,g){if(c.isUndefined(f)){return 0}else{if(typeof f!=="number"||isNaN(f)){throw new Error(g+": expected a number, was: <"+f+">")}else{return Math.floor(f)}}}function a(f,g){if(!f||!(f instanceof e)){throw new Error(g+": expected a Version object, was: <"+f+">")}return f}function b(f,g){return f>g?1:f==g?0:-1}function e(g,h,f){this.major=d(g,"major");this.minor=d(h,"minor");this.bugfix=d(f,"bugfix")}e.parse=function(g,h){h=h||"versionString";if(!g){throw new Error(h+": expected a non-empty string")}var f=g.split(".");if(f.length!==3){throw new Error(h+": expected <major>.<minor>.<bugfix> string, was: <"+g+">")}return new e(parseInt(f[0]),parseInt(f[1]),parseInt(f[2]))};e.comparator=function(g,f){return a(g,"versionOne").compareTo(a(f,"versionTwo"))};e.prototype.compareTo=function(h){a(h,"that");var f=b(this.major,h.major);if(f!=0){return f}var g=b(this.minor,h.minor);if(g!=0){return g}return b(this.bugfix,h.bugfix)};e.prototype.greaterThan=function(f){return this.compareTo(f)>0};e.prototype.greaterThanOrEqual=function(f){return this.compareTo(f)>=0};e.prototype.lessThan=function(f){return this.compareTo(f)<0};e.prototype.lessThanOrEqual=function(f){return this.compareTo(f)<=0};e.prototype.equals=function(f){return this.compareTo(f)==0};e.prototype.toMinor=function(){return new e(this.major,this.minor)};e.prototype.toMajor=function(){return new e(this.major)};e.prototype.toString=function(){return this.major+"."+this.minor+"."+this.bugfix};return e});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/aui-version-details.js' */
define("applinks/lib/aui-version-details",["applinks/lib/version"],function(f){var e=new f(5,9,13);var d=new f(5,8);var c=new f(5,9);function a(g){if(g.lessThan(e)||g.lessThan(c)){throw new Error("AUI version "+g+" is too low, you need to upgrade AUI to "+e+" for Applinks to work")}}function b(g){var h=f.parse(g.version,"AUI version");a(h);g.versionDetails=h;g.versionDetails.is58=h.toMinor().equals(d);g.versionDetails.is59=h.toMinor().equals(c);return g}return{addVersionDetails:b}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/console-amd.js' */
define("applinks/lib/console",function(){return window.console});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/jquery-amd.js' */
define("applinks/lib/jquery",function(){return window.jQuery});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/aui-amd.js' */
define("applinks/lib/aui",["applinks/lib/window","applinks/lib/aui-version-details"],function(b,c){var a=b.AJS;if(!a){throw new Error("window.AJS not defined, cannot load AUI")}return c.addVersionDetails(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/wrm-amd.js' */
define("applinks/lib/wrm",function(){return window.WRM});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/skate-amd.js' */
define("applinks/lib/skate",function(){return window.skate});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/window-amd.js' */
define("applinks/lib/window",function(){return window});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/spi-amd.js' */
define("applinks/lib/spi",function(){return{get:function(){return AppLinks.SPI}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/applinks-creation-amd.js' */
define("applinks/lib/creation",function(){return{get:function(){return AppLinks.Creation}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/docs.js' */
define("applinks/common/docs",["applinks/lib/jquery","applinks/lib/aui","applinks/common/help-paths"],function(c,b,a){return{createDocLink:function(d,f,e){if(!e){e=""}else{e=" "+e}return c("<a/>",{"class":"ual-help-link help-link"+e,href:this.getDocHref(d,f),target:"_blank","data-help-link-key":d,text:"Help",title:"Help"})},getDocHref:function(e,f){var d=a.getFullPath(e);if(f){d+="#"+a.getPath(f)}return d}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/help-paths.js' */
define("applinks/common/help-paths",["applinks/lib/console","applinks/lib/wrm","applinks/lib/lodash","applinks/common/modules","applinks/common/preconditions"],function(b,a,g,e,d){var f=g.memoize(function(){var j=a.data.claim(e.dataFqn(e.COMMON_EXPORTED,"applinks-help-paths"));if(!j.entries){b.warn("Help paths not found, all help links are likely to be broken.")}return j.entries||{}});var i=function(j,m){d.nonEmptyString(j,"key");var l=f()[j]||j;if(m){d.nonEmptyString(m,"sectionKey");var k=l.replace(/\+/g,"");l+="#"+k+"-"+m}return l};function c(j,k){return j.indexOf(k,j.length-k.length)!==-1}function h(j,k){return c(j,k)?j:j+k}return{getPath:i,getFullPath:function(j,l){var k=this.baseUrl();return h(k,"/")+this.getPath(j,l)},baseUrl:g.partial(i,"applinks.docs.root")}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/events.js' */
define("applinks/common/events",["applinks/lib/jquery","applinks/lib/lodash","applinks/lib/window","applinks/common/preconditions"],function(e,b,d,f){var c="applinks.event.";function a(g){return c+f.nonEmptyString(g,"eventId")}return{PREREADY:a("preready"),READY:a("ready"),APPLINKS_LOADED:a("loaded"),APPLINKS_UPDATED:a("updated"),NEW_APPLINK_CREATED:a("created"),ORPHANED_UPGRADE:a("orphaned.upgrade"),V3_ONBOARDING_FINISHED:a("v3-onboarding-finished"),Legacy:{MESSAGE_BOX_DISPLAYED:a("message-box-displayed")},applinksEvent:a,on:function(h,i,g){var j=g?b.bind(i,g):i;e(d.document).on(h,j)},off:function(g,h){e(d.document).off(g,h)},trigger:function(g,h){e(d.document).trigger(g,h)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/i18n.js' */
define("applinks/common/i18n",["applinks/lib/lodash","applinks/lib/jquery","applinks/lib/wrm","applinks/common/modules","applinks/common/preconditions","applinks/common/products"],function(e,g,c,f,h,b){var a=e.memoize(function(){var i=c.data.claim(f.dataFqn(f.COMMON_EXPORTED,"entity-types"));return h.hasValue(i,"entity-types","Entity Types data not found")});var d=e.memoize(function(){var i=c.data.claim(f.dataFqn(f.COMMON_EXPORTED,"authentication-types"));return h.hasValue(i,"authentication-types","Authentication Types data not found")});return{getApplicationTypeName:function(i){return b.getTypeName(i)},getEntityTypeName:function(i){return a().singular[i]||i},getPluralizedEntityTypeName:function(i){return a().plural[i]||i},getAuthenticationTypeName:function(i){return d()[i]||i}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/modules.js' */
define("applinks/common/modules",function(){return{PLUGIN_KEY:"com.atlassian.applinks.applinks-plugin",COMMON_EXPORTED:"applinks-common-exported",COMMON:"applinks-common",fqn:function(a){return this.PLUGIN_KEY+":"+a},dataFqn:function(a,b){return this.fqn(a)+"."+b}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/preconditions.js' */
define("applinks/common/preconditions",["applinks/lib/lodash"],function(c){function f(i,j,h){return d(c.isString(i)&&!c.isEmpty(i),h,b(j,": expected a non-empty string, was: <"+i+">"),i)}function g(i,j,h){return d(c.isFunction(i),h,b(j,": expected a function, was: "+i),i)}function a(i,j,h){return d(c.isArray(i),h,b(j,": expected an array, was: "+i),i)}function e(i,j,h){return d(i,h,b(j,": expected a value"),i)}function d(l,i,h,k){var j=i?i:h;if(!l){throw new Error(j)}return k||l}function b(i,h){return(i||"[unspecified]")+h}return{checkArgument:c.partial(d,c,c,"",c),nonEmptyString:f,isArray:a,isFunction:g,hasValue:e}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/products.js' */
define("applinks/common/products",["applinks/lib/lodash","applinks/lib/wrm","applinks/common/modules","applinks/common/preconditions"],function(c,b,d,f){var a=c.memoize(function(){var g=b.data.claim(d.dataFqn(d.COMMON_EXPORTED,"applinks-types"));return f.hasValue(g,"types","Application Types data not found")});function e(g){return a()[g]||g}return{BAMBOO:"bamboo",BITBUCKET:"stash",CONFLUENCE:"confluence",FECRU:"fecru",JIRA:"jira",REFAPP:"refapp",STASH:"stash",getTypeName:e}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.core', location = 'aui.chunk.bcc4a9ceb5e493d06f24--5f9f540fcdddcfc7c28c.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.core"],[],[["7KGX","runtime","aui.splitchunk.172ffb6da7","aui.splitchunk.087aba7911","aui.splitchunk.fbd1a5ab27","aui.splitchunk.1659111a3c","aui.splitchunk.792781e698","aui.splitchunk.8771ceac91","aui.splitchunk.e7c127e2cc","aui.splitchunk.7873ba9060","aui.splitchunk.0fc208f3fe","aui.splitchunk.2a34183e72"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/non-amd/rest-service.js' */
(function(a,e,d){var f=AJS.$;AppLinks=f.extend(window.AppLinks||{},{Event:{NAMESPACE:"applinks"},I18n:a,Docs:e});AppLinks.Event=f.extend(window.AppLinks.Event,d);if(AJS.AppLinksInitialisationBinder){AppLinks.initialisationBinder=AJS.AppLinksInitialisationBinder}else{AppLinks.initialisationBinder=function(h){AJS.toInit(h)}}function b(k){var h=k.responseText;var j;try{j=JSON.parse(h)}catch(i){console&&console.error&&console.error("invalid JSON response",h,k)}return j||{}}var g=new RegExp("rest/applinks(?:.*?)/(\\d\\.\\d|\\d)/");function c(h){var i=g.exec(h);return i&&i.length===2?i[1]:false}AppLinks.initialisationBinder(function(){AppLinks=f.extend(window.AppLinks||{},{failure:function(j){if(j.status==401){window.location.reload()}else{var h=AppLinks.parseError(j);var i=f(".page-error");if(i.length>0){i.html(h).fadeIn("slow")}else{alert("REST request failed: "+h)}}},jsonRequest:function(i,k,l,m,h,j){if(l){l=JSON.stringify(l)}f(".page-error").fadeOut("fast");if(!h){h=AppLinks.failure}return jQuery.ajax({url:i,type:k,data:l,dataType:"json",contentType:"application/json; charset=utf-8",beforeSend:j,cache:false,success:m,error:h,jsonp:false})},xmlRequest:function(i,k,l,m,h,j){if(l){l=JSON.stringify(l)}f(".page-error").fadeOut("fast");if(!h){h=AppLinks.failure}return jQuery.ajax({url:i,type:k,data:l,dataType:"xml",contentType:"application/xml; charset=utf-8",beforeSend:j,cache:false,success:m,error:h})},parseError:function(j){var h=b(j);var i=h&&h.message;if(i){return f.isArray(i)?i.join(" "):i}if(j){return j.statusText?j.statusText:j}return"An unknown error occurred. Check the console logs for details."},put:function(i,k,l,h,j){return AppLinks.jsonRequest(i,"PUT",k,l,h,j)},post:function(i,k,l,h,j){return AppLinks.jsonRequest(i,"POST",k,l,h,j)},update:function(k,m,i,j){var h=AppLinks.self_link(k);var l=c(h)==="1.0"?AppLinks.put:AppLinks.post;l(h,k,m,i,j)},get:function(i,k,h,j){return AppLinks.jsonRequest(i,"GET",null,k,h,j)},getXml:function(i,k,h,j){return AppLinks.xmlRequest(i,"GET",null,k,h,j)},self_link:function(k){for(var h=0,l=k.link.length;h<l;h++){var j=k.link[h];if(j.rel=="self"){return j.href}}throw"No self-link found"},del:function(l,k,i,j){var h;if(typeof(l)=="string"){h=l}else{h=AppLinks.self_link(l)}return AppLinks.jsonRequest(h,"DELETE",null,k,i,j)},SPI:f.extend({},{API_VERSION:"1.0",REST_RESOURCE_URL:AJS.contextPath()+"/rest/applinks/",BASE_URL:AJS.contextPath()+"/rest/applinks/1.0",OAUTH_REST_RESOURCE_URL:AJS.contextPath()+"/rest/applinks-oauth/",OAUTH_BASE_URL:AJS.contextPath()+"/rest/applinks-oauth/1.0",setApiVersion:function(h){AppLinks.SPI.API_VERSION=h;AppLinks.SPI.setBaseUrl(AppLinks.SPI.REST_RESOURCE_URL+AppLinks.SPI.API_VERSION)},setBaseUrl:function(h){AppLinks.SPI.BASE_URL=h},setOAuthBaseUrl:function(h){AppLinks.SPI.OAUTH_BASE_URL=h},getRemoteRestBaseUrl:function(h){return h+"/rest/applinks/"+AppLinks.SPI.API_VERSION},getRemotePluginServletBaseUrl:function(h){return h+"/plugins/servlet"},getAllLinks:function(j,i){var h=AppLinks.SPI.BASE_URL+"/applicationlink";return AppLinks.get(h,j,i)},getAllLinksWithAuthInfo:function(j,i){var h=AppLinks.SPI.BASE_URL+"/listApplicationlinks";return AppLinks.get(h,j,i)},getApplicationLinkState:function(k,j,i){var h=AppLinks.SPI.BASE_URL+"/listApplicationlinkstates/id/"+k;return AppLinks.get(h,j,i)},getLinksOfType:function(j,k,i){var h=AppLinks.SPI.BASE_URL+"/applicationlink/type/"+j;return AppLinks.get(h,k,i)},tryToFetchManifest:function(j,k,i){var h=AppLinks.SPI.BASE_URL+"/applicationlinkForm/manifest.json?url="+encodeURIComponent(j);return AppLinks.get(h,k,i,function(l){l.setRequestHeader("X-Atlassian-Token","no-check")})},getManifestFor:function(k,j,i){var h=AppLinks.SPI.BASE_URL+"/manifest/"+k+".json";return AppLinks.get(h,j,i)},getLocalManifest:function(j,i){var h=AppLinks.SPI.BASE_URL+"/manifest.json";return AppLinks.get(h,j,i)},getRemoteManifest:function(j,k,i){var h=AppLinks.SPI.getRemoteRestBaseUrl(j)+"/manifest.json";return AppLinks.get(h,k,i)},getRemoteOAuthConsumerInfo:function(j,k,i){var h=AppLinks.SPI.getRemotePluginServletBaseUrl(j)+"/oauth/consumer-info";return AppLinks.getXml(h,k,i)},getApplinkStatus:function(k,j,i){var h=AppLinks.SPI.BASE_URL+"/status/"+k;return AppLinks.get(h,j,i)},createStaticUrlAppLink:function(k,j,i){var h=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createStaticUrlAppLink?typeId="+k;return AppLinks.post(h,null,j,i)},createLink:function(o,m,q,i,n,p,k,r,j){var h=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createAppLink";var l={applicationLink:o,username:m,password:q,createTwoWayLink:i,customRpcURL:n,rpcUrl:p,configFormValues:k};return AppLinks.post(h,l,r,j)},createLinkWithOrphanedTrust:function(o,m,r,i,n,p,k,q,s,j){var h=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createAppLink";var l={applicationLink:o,username:m,password:r,createTwoWayLink:i,customRpcURL:n,rpcUrl:p,configFormValues:k,orphanedTrust:q};return AppLinks.post(h,l,s,j)},verifyTwoWayLinkDetails:function(h,n,o,k,m,j){var i=AppLinks.SPI.BASE_URL+"/applicationlinkForm/details";var l={username:o,password:k,remoteUrl:h,rpcUrl:n};return AppLinks.post(i,l,m,j)},getApplicationLinkInfo:function(j,k,i){var h=AppLinks.SPI.BASE_URL+"/applicationlinkInfo/id/"+j;return AppLinks.get(h,k,i)},deleteLink:function(l,h,k,j){var i=AppLinks.SPI.BASE_URL+"/applicationlink/"+l.id;if(h){i+="?reciprocate=true"}return AppLinks.del(i,k,j)},makePrimary:function(j,i){var h=AppLinks.SPI.BASE_URL+"/applicationlink/primary/"+j.id;return AppLinks.post(h,null,i)},relocate:function(m,k,h,l,j){var i=AppLinks.SPI.BASE_URL+"/relocateApplicationlink/"+m.id+"?newUrl="+encodeURIComponent(k)+"&nowarning="+(h?"true":"false");return AppLinks.post(i,null,l,j)},legacyUpgrade:function(k,j,i){var h=AppLinks.SPI.BASE_URL+"/upgrade/legacy/"+k.id;return AppLinks.post(h,null,j,i)},ualUpgrade:function(l,h,k,j){var i=AppLinks.SPI.BASE_URL+"/upgrade/ual/"+l.id;return AppLinks.post(i,h,k,j)},getEntityTypesForApplicationType:function(k,j,i){var h=AppLinks.SPI.BASE_URL+"/type/entity/"+k;return AppLinks.get(h,j,i)},getLocalEntitiesWithLinksToApplication:function(h,k,j){var i=AppLinks.SPI.BASE_URL+"/entitylink/localEntitiesWithLinksTo/"+h+".json";return AppLinks.get(i,k,j)},getEntityLinksForApplication:function(h,k,j){var i=AppLinks.SPI.BASE_URL+"/entities/"+h+".json";AppLinks.get(i,k,j)},getEntityLinksForApplicationUsingAnonymousAccess:function(h,k,j){var i=AppLinks.SPI.BASE_URL+"/entities/anonymous/"+h+".json";return AppLinks.get(i,k,j)},createNonUalEntityLink:function(q,l,i,k,o,j,p,n){var h=AppLinks.SPI.BASE_URL+"/entitylink/"+q+"/"+l+"?reciprocate=false";var m={applicationId:i,typeId:k,key:o,name:j,isPrimary:false};return AppLinks.put(h,m,p,n)},createEntityLink:function(m,l,i,h,n,k){var j=AppLinks.SPI.BASE_URL+"/entitylink/"+m+"/"+l+"?reciprocate=";j+=(h?"true":"false");return AppLinks.put(j,i,n,k)},getConfiguredEntityLinks:function(k,j,l,i){var h=AppLinks.SPI.BASE_URL+"/entitylink/primaryLinks/"+k+"/"+j+".json";return AppLinks.get(h,l,i)},deleteEntityLink:function(m,l,i,h,n,k){var j=AppLinks.SPI.BASE_URL+"/entitylink/"+m+"/"+l+"?typeId="+i.typeId+"&key="+i.key+"&applicationId="+i.applicationId+"&reciprocate="+h;return AppLinks.del(j,n,k)},makePrimaryEntityLink:function(l,k,h,m,j){var i=AppLinks.SPI.BASE_URL+"/entitylink/primary/"+l+"/"+k+"?typeId="+h.typeId+"&key="+h.key+"&applicationId="+h.applicationId;return AppLinks.post(i,null,m,j)},canDeleteAppLink:function(k,j,i){var h=AppLinks.SPI.BASE_URL+"/permission/reciprocate-application-delete/"+k;return AppLinks.get(h,j,i)},canDeleteEntityLink:function(l,k,h,m,j){var i=AppLinks.SPI.BASE_URL+"/permission/reciprocate-entity-delete/"+h.applicationId+"/"+l+"/"+k+"/"+h.typeId+"/"+h.key;return AppLinks.get(i,m,j)},canCreateReciprocateEntityLink:function(k,j,i){var h=AppLinks.SPI.BASE_URL+"/permission/reciprocate-entity-create/"+k;return AppLinks.get(h,j,i)},processPermissionCode:function(i){var h={noPermission:function(){},missing:function(){},credentialsRequired:function(j){},authenticationFailed:function(j){},noAuthentication:function(j){},noAuthenticationConfigured:function(){},noConnection:function(){},allowed:function(){},unrecognisedCode:function(j){},updateView:function(l,k,j){}};if(!i){i={}}i=f.extend(h,i);return function(k){var j=k.code;if(j=="NO_PERMISSION"){i.noPermission()}else{if(j=="MISSING"){i.missing()}else{if(j=="CREDENTIALS_REQUIRED"){i.credentialsRequired(k.url)}else{if(j=="AUTHENTICATION_FAILED"){i.authenticationFailed(k.url)}else{if(j=="NO_AUTHENTICATION"){i.noAuthentication(k.url)}else{if(j=="NO_AUTHENTICATION_CONFIGURED"){i.noAuthenticationConfigured()}else{if(j=="NO_CONNECTION"){i.noConnection()}else{if(j=="ALLOWED"){i.allowed()}else{i.unrecognisedCode(k.code)}}}}}}}}}},addAuthenticationTrigger:function(j,h,i){if(!i){i={}}if(typeof i.onSuccess=="undefined"){i.onSuccess=function(){location.reload()}}if(typeof i.onFailure=="undefined"){i.onFailure=function(){return true}}f(j).off("click.applinks");f(j).on("click.applinks",function(){if(i.before){i.before()}AppLinks.authenticateRemoteCredentials(h,i.onSuccess,i.onFailure)})},deleteOrphanedTrust:function(l,j,k,i){var h=AppLinks.SPI.BASE_URL+"/orphaned-trust/"+j+"/"+l;return AppLinks.del(h,k,i)},getOrphanedTrust:function(j,i){var h=AppLinks.SPI.BASE_URL+"/orphaned-trust/";return AppLinks.get(h,j,i)},showCreateEntityLinkSuggestion:function(){return true},getApplicationLink:function(k,j,i){var h=AppLinks.SPI.BASE_URL+"/applicationlink/"+k;return AppLinks.get(h,j,i)},createApplicationLink:function(k,i,n,o,h,p,l){var j=AppLinks.SPI.BASE_URL+"/applicationlink";var m={id:k,name:i,rpcUrl:n,displayUrl:o,typeId:h};return AppLinks.put(j,m,p,l)},createConsumer:function(j,s,i,r,n,q,l,u,m,p,t,k){var h=AppLinks.SPI.OAUTH_BASE_URL+"/applicationlink/"+j+"/authentication/consumer";var o={key:s,name:i,description:r,sharedSecret:n,publicKey:q,outgoing:p,twoLOAllowed:l,executingTwoLOUser:u,twoLOImpersonationAllowed:m};return AppLinks.put(h,o,t,k)},createConsumerAutoConfigure:function(o,n,k,h,m,j){var i=AppLinks.SPI.OAUTH_BASE_URL+"/applicationlink/"+o+"/authentication/consumer?autoConfigure=true";var l={twoLOAllowed:n,executingTwoLOUser:k,twoLOImpersonationAllowed:h};return AppLinks.put(i,l,m,j)},registerProvider:function(n,m,j,l,i){var h=AppLinks.SPI.BASE_URL+"/applicationlink/"+n+"/authentication/provider";var k={config:j,provider:m};return AppLinks.put(h,k,l,i)},enableFeature:function(j,k,i){var h=AppLinks.SPI.BASE_URL+"/features/"+j;return AppLinks.put(h,{},k,i)},disableFeature:function(j,k,i){var h=AppLinks.SPI.BASE_URL+"/features/"+j;return AppLinks.del(h,k,i)}},(window.AppLinks&&window.AppLinks.SPI)||{})});AppLinks.UI={showInfoBox:function(h){f(".aui-message.aui-message-success").remove();AppLinks.UI.createMessage("success",h,"page-info")},hideInfoBox:function(){f(".aui-message.aui-message-success").remove()},showErrorBox:function(h){AppLinks.UI.createMessage("error",h,"page-error")},hideErrorBox:function(){f(".aui-message.aui-message-error").remove()},showWarningBox:function(i){if(f.isArray(i)&&i.length>0){var h=f("<ul></ul>");f(i).each(function(k){h.append(f("<li/>",{text:i[k]}))});var j=f('<div class="page-warning"></div>').append(h);AppLinks.UI.createMessage("warning",j.html(),"page-warning")}else{AppLinks.UI.createMessage("warning",i,"page-warning")}},hideWarningBox:function(){f(".aui-message.aui-message-warning").remove()},shortenString:function(i,h){if(i.length>h){i=i.substring(0,h)+"..."}return i},createMessage:function(i,j,h){var k=f('<div class="'+h+'">');k.html(j);AJS.messages[i](".applinks-message-bar",{title:"",body:k.wrap("<div></div>").parent().html(),closeable:true});f(document).trigger(AppLinks.Event.Legacy.MESSAGE_BOX_DISPLAYED)},displayValidationErrorMessages:function(h,j,i){if(f.isArray(i)){f(i).each(function(m,l){var n=f('<div class="error applinks-error">');n.text(l);f(j).find("."+h).append(n)})}else{if(typeof i!="undefined"){var k=f('<div class="error applinks-error">');k.text(i.toString());f(j).find("."+h).append(k)}}},displayValidationError:function(h,i,j){return function(n){if(n.status==401){window.location.reload();return}f(".applinks-error").remove();f(".loading").remove();var m=b(n);var l=m.message;if(typeof m.fields=="undefined"){AppLinks.UI.displayValidationErrorMessages(h,i,l)}else{var k=m.fields;f(k).each(function(o){var p=f('<div class="error applinks-error" id="'+k[o]+'-error">');p.text(l[o]);if(f(i).find("."+k[o]).length>0){p.insertAfter(f(i).find("."+k[o]))}else{p.insertAfter(f(i).find("."+h).append(p))}})}f(i).find("."+h).addClass("fully-populated-errors");if(j){j()}}},addProtocolToURL:function(h){var k=f.trim(h);var j=k.toLowerCase();var i=false;if(j.length>=7){if(j.substring(0,7).indexOf("http")!=-1){i=true}}if(!i){k="http://"+k}return k},prettyJoin:function(i,l,k){if(!k){k="and"}var h=i.length;var j="";f.each(i,function(m,n){if(m==(h-1)&&h>1){j+=" "+k+"  "+l(n)}else{j+=l(n);if(m+2<h){j+=", "}}});return j},showLoadingIcon:function(h){f('<span class="loading">&nbsp;</span>').insertAfter(h)},hideLoadingIcon:function(h){f(h).next(".loading").remove()},findUrl:function(k){var j=undefined;var l=k.toLowerCase();var i=l.indexOf("http:");if(i==-1){i=l.indexOf("https:")}if(i>-1){var h=l.indexOf(" ",i);if(h==-1){h=l.length}j=k.substring(i,h)}return j},findApplicationType:function(h){h=h.toLowerCase();if(h.indexOf("jira")!=-1){return"jira"}else{if(h.indexOf("fisheye")!=-1){return"fecru"}else{if(h.indexOf("confluence")!=-1){return"confluence"}else{if(h.indexOf("refapp")!=-1){return"refapp"}else{return undefined}}}}},escapeSelector:function(h){return h.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g,"\\$1")},sanitiseHTML:function(h){var i={"<":"&lt;",'"':"&quot;","&":"&amp;"};return h.replace(/[<"&]/g,function(j){return i[j]})},refreshOrphanedTrust:function(){var h=function(i){f("tr.orphaned-trust-row").each(function(){var n=f(this);var o=n.attr("data-id");var l=n.attr("data-type");var k=false;for(var j=0;j<i.orphanedTrust.length;j++){var m=i.orphanedTrust[j];if(o==m.id&&l==m.type){k=true;break}}if(!k){n.remove();if(i.orphanedTrust.length==0){f(".orphaned-trust-warning").hide()}}})};AppLinks.SPI.getOrphanedTrust(h)},removeCssClass:function(h,i){f(h).removeClass(function(k,m){var l=m.split(" ");var j="";f.each(l,function(n,o){if(o.indexOf(i)!=-1){j=o}});return j})}};(function(){var h=f({});f.each(["bind","unbind","trigger"],function(j,k){AppLinks.UI[k]=function(){return h[k].apply(h,arguments)}})})();f(document).trigger(AppLinks.Event.PREREADY);f(document).trigger(AppLinks.Event.READY)})})(require("applinks/common/i18n"),require("applinks/common/docs"),require("applinks/common/events"));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/non-amd/autocomplete.js' */
AJS.$(document).bind(AppLinks.Event.READY,function(){AppLinks.autoComplete={cacheManager:function(c){var a={},b=[],c=c||30;return{get:function(d){return a[d]},put:function(d,e){a[d]=e;b.push(d);if(b.length>c){delete a[b.shift()]}},clear:function(){a={};b=[]}}}};(function(d){var c=function(f){AJS.log("InputDrivenDropDown: truncating text");var h=f.$.closest(".aui-dropdown").width(),g=20;d("a span:not(.icon)",f.$).each(function(){var j=d(this),i=d("<var></var>").html("&#8230;"),l=i.width(),k=false;j.wrapInner(d("<em>"));d("em",j).each(function(){var m=d(this);m.show();if(this.offsetLeft+this.offsetWidth>h){var t=this.childNodes,s=false;for(var o=t.length-1;o>=0;o--){var p=t[o],n=1,r=(p.nodeType==3)?"nodeValue":"innerHTML",q=p[r];do{if(n<=q.length){p[r]=q.substr(0,q.length-n++)}else{break}}while(this.offsetLeft+this.offsetWidth+l>h-g);if(n<=q.length){s=true;break}}if(s){k=true}else{m.hide()}}});if(k){j.append(i);this.elpss=i}})};var b=function(f,l){if(!l.length||!l[0]){return}AJS.log("InputDrivenDropDown: highlighting tokens");for(var h=0,j=l.length;h<j;h++){var g=l[h];l[h]=g?g.replace(/[\.\*\+\?\|\(\)\[\]{}\\]/g,"\\$"):""}var k=new RegExp("("+l.join("|")+")","gi");d("li a:not(.dropdown-prevent-highlight) span",f.$).each(function(){var m=d(this),i=m.html().replace(k,"<strong>$1</strong>");m.html(i)})};var e=function(j,g){var i=j.options,h=j.dd;if(h){h.hide();h.$.remove()}i.ajsDropDownOptions=i.ajsDropDownOptions||{};if(i.ajsDropDownOptions&&!i.ajsDropDownOptions.alignment){i.ajsDropDownOptions.alignment="left"}i.ajsDropDownOptions.selectionHandler=i.ajsDropDownOptions.selectionHandler||function(l,k){if(l.type!="click"){l.preventDefault();d("a",k).click();document.location=d("a",k).attr("href")}};i.ajsDropDownOptions.displayHandler=function(k){return AJS.escapeHtml(k.name)};var f=j.dd=new AJS.dropDown(g.matrix,i.ajsDropDownOptions)[0];if(i.ajsDropDownOptions&&i.ajsDropDownOptions.className){f.$.addClass(i.ajsDropDownOptions.className)}if(i.dropdownPlacement){i.dropdownPlacement(f.$)}else{AJS.log("No dropdownPlacement function specified. Appending dropdown to the body.");d("body").append(f.$)}b(f,g.queryTokens||[g.query]);c(f);if(i.dropdownPostprocess){i.dropdownPostprocess(f.$)}f.show(j._effect);if(typeof i.onShow=="function"){i.onShow.call(f,f.$)}return f};function a(g,f){this._effect="appear";this._timer=null;this.id=g;this.options=f;this.inactive=false;this.busy=false;this.cacheManager=AppLinks.autoComplete.cacheManager()}a.prototype.clearCache=function(){this.cacheManager.clear()};a.prototype.change=function(h,g){var f=this;if(h!=f._value||g){f._value=h;f.busy=false;clearTimeout(f._timer);if(g||(/\S{0,}/).test(h)){var i=f.cacheManager.get(h);if(i){e(f,i)}else{f.busy=true;f._timer=setTimeout(function(){f.options.getDataAndRunCallback.call(f,h,f.show)},200)}}else{f.dd&&f.dd.hide()}}};a.prototype.dropDownLength=function(){return this.dd.links?this.dd.links.length:0};a.prototype.dropDownItem=function(f){return this.dropDownLength()>f?this.dd.links[f]:null};a.prototype.hide=function(){this.dd&&this.dd.hide()};a.prototype.remove=function(){var f=this.dd;if(f){this.hide();f.$.remove()}this.inactive=true;this.options.onDeath&&this.options.onDeath()};a.prototype.show=function(g,i,h){if(this.inactive){AJS.log("Quick search abandoned before server response received, ignoring. "+this);return}var f={matrix:g,query:i,queryTokens:h};this.cacheManager.put(i,f);e(this,f);this.busy=false};AppLinks.inputDrivenDropdown=function(f){return new a("inputdriven-dropdown",f)}})(jQuery)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'js/fecru-compatibility.js' */
if(jQuery!=undefined&&AJS!=undefined){jQuery=AJS.$};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:feature-oauth-dance', location = 'applinks/internal/feature/oauth/oauth-callback.js' */
define("applinks/feature/oauth-callback",["applinks/lib/window","applinks/lib/lodash","applinks/common/preconditions"],function(c,a,d){function b(e){d.nonEmptyString(e,"url");this._url=e}b.prototype.source=function(e){d.hasValue(e,"source");this._source=e;return this};b.prototype.onSuccess=function(e){d.isFunction(e,"onSuccess");this._onSuccess=e;return this};b.prototype.onFailure=function(e){d.isFunction(e,"onFailure");this._onFailure=e;return this};b.prototype.success=function(){this.oauthWindow.close();if(this._onSuccess){this._onSuccess(this._source)}delete c.oauthCallback};b.prototype.failure=function(){this.oauthWindow.close();if(this._onFailure){this._onFailure(this._source)}delete c.oauthCallback};b.prototype.open=function(){c.oauthCallback=this;this.oauthWindow=c.open(this._url,"com_atlassian_applinks_authentication")};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:feature-oauth-dance', location = 'applinks/internal/feature/oauth/oauth-dance.js' */
define("applinks/feature/oauth-dance",["applinks/lib/console","applinks/lib/jquery","applinks/lib/lodash","applinks/lib/window","applinks/common/events","applinks/common/preconditions","applinks/feature/oauth-callback"],function(a,f,c,e,b,h,d){function g(j,i){this._scope=j||e.document;this._selector=i}g.prototype.onSuccess=function(i){h.isFunction(i,"onSuccess");this._onSuccess=i;return this};g.prototype.onFailure=function(i){h.isFunction(i,"onFailure");this._onFailure=i;return this};g.prototype.defaultSuccess=function(){return this.onSuccess(function(){e.location.reload()})};g.prototype.defaultFailure=function(){return this.onFailure(function(){return true})};g.prototype.initialize=function(){var i=this;if(this._selector){f(this._scope).on("click",this._selector,function(j){j.preventDefault();i._open(f(this))})}else{f(this._scope).on("click",function(j){j.preventDefault();i._open(f(this))})}};g.prototype.start=function(){var j=f(this._scope);var i=this._selector?j.find(this._selector):j;this._open(i)};g.prototype._open=function(i){if(i.length!==1){a.warn("Could not trigger OAuth dance, the source is not a single HTML element: "+i);return}var j=i.attr("data-authorisation-uri");if(j){this._onSuccess||this.defaultSuccess();this._onFailure||this.defaultFailure();new d(j).source(i).onSuccess(this._onSuccess).onFailure(this._onFailure).open()}else{a.warn("Could not trigger OAuth dance, data-authorisation-uri missing for: "+i)}};return g});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-oauth-ui', location = 'js/oauth-dialog.js' */
(function(c,a,b){AppLinks.authenticateRemoteCredentials=function(d,f,e){c(".applinks-error").remove();new b(d).onSuccess(f).onFailure(e).open()}})(require("applinks/lib/jquery"),require("applinks/common/events"),require("applinks/feature/oauth-callback"));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:common', location = 'util/retry-caller.js' */
define("confluence/jim/util/retry-caller",["ajs","jquery","underscore"],function(b,d,c){var a=function(g,p){p=p||{};var h=p.args;var j=(typeof p.tester==="function")?p.tester:function(){return true};var i=p.delays||[0.1,0.3,0.5,0.7,1];var l=i.length;var e=p.name||"";var k=d.Deferred(),o=k.promise();var f=p.context||k;var n=0;var m=function(){if(n===l){return k.rejectWith(f,[f,"exceed-maximum-called-times",""])}var r=i[n++];var q=function(){d.when(g.apply(f,h)).then(function(){k.notify.apply(f,arguments);if(j.apply(f,arguments)){m()}else{k.resolveWith(f,arguments)}},function(){k.rejectWith(f,arguments)})};c.delay(q,r)};m();return o};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:common', location = 'util/common.js' */
AJS.JiraIssues={Remote:{}};var appLinksI18n={entries:{}};jQuery(document).ready(function(){AJS.JiraIssues=jQuery.extend(AJS.JiraIssues||{},{bindOAuthLink:function(c,f){var e={onSuccess:function(){f()},onFailure:function(){}};var d=c.attr("href");c.click(function(g){AppLinks.authenticateRemoteCredentials(d,e.onSuccess,e.onFailure);g.preventDefault()})},getOAuthRealm:function(f){var d=f.getResponseHeader("WWW-Authenticate")||"";var c=/OAuth realm\=\"([^\"]+)\"/;var e=c.exec(d);if(e){return e[1]}else{return null}}});jQuery("a.static-oauth-init").each(function(){AJS.JiraIssues.bindOAuthLink(jQuery(this),function(){window.location.reload()})});jQuery("a.anonymous-init").each(function(f,e){var c=encodeURIComponent(window.location.pathname.replace(Confluence.getContextPath(),""));var d=Confluence.getContextPath()+"/login.action?os_destination="+c;AJS.$(e).attr("href",d)});var a=function(j){var e=AJS.JiraIssues.Remote[j];var h="";for(var g=0;g<e.length;g++){h=h+(e[g].key+(g<e.length-1?",":""))}var d=function(l){var i="issuekey in ("+l+")";var m="/sr/jira.issueviews:searchrequest-xml/temp/SearchRequest.xml?jqlQuery="+encodeURIComponent(i)+"&returnMax=true";var k=contextPath+"/plugins/servlet/issue-retriever?appId="+j+"&url="+encodeURIComponent(m)+"&columns=summary&columns=type&columns=resolution&columns=status";return k};var f=function(k){var i=AJS.$("item",k);i.each(function(){var u=AJS.$("link",this).text();var v=AJS.$("key",this).text();var r=AJS.$("summary",this).text();var s=AJS.$("type",this);var m=AJS.$("resolution",this);var w=m.attr("id")!="-1";var o=AJS.$("status",this);var n=AJS.$(".unknown-jira-issue."+v);for(var p=0;p<n.length;p++){var t=AJS.$("<a style=\"background-image: url('"+s.attr("iconUrl")+'\')" href="'+u+'"></a>');t.text(v);var l=AJS.$('<span class="jira-status"></span>');l.text(o.text().toUpperCase());var q=AJS.$('<span class="jira-issue'+(w?" resolved":"")+'" ></span>');q.append(t);q.append(document.createTextNode(" - "+r+" - "));q.append(l);AJS.$(n[p]).replaceWith(q)}})};var c=d(h);AJS.$.ajax({url:c,success:f,error:function(l){if(l.status==401){var k=AJS.JiraIssues.getOAuthRealm(l);if(k){var i={};AJS.$(e).each(function(){if(!i[this.key]){i[this.key]=true;var m=AJS.$('<span class="oauth-msg"> - <a class="oauth-init" href="'+k+'">'+"Authenticate"+"</a> "+"to see issue details"+"</span>");AJS.$(".unknown-jira-issue."+this.key).addClass("single-issue-oauth").append(m)}});AJS.JiraIssues.bindOAuthLink(AJS.$(".single-issue-oauth a.oauth-init"),function(){window.location.reload()})}}else{if(l.status==400&&e.length>1){AJS.$(e).each(function(){var m=this.key;var n=d(m);AJS.$.ajax({url:n,success:f,error:function(p){var o=AJS.$(".unknown-jira-issue."+m);o.removeClass("single-issue-oauth");AJS.$(".oauth-msg",o).remove();o.addClass("jira-error")}})})}}}})};AJS.$(".unknown-jira-issue").each(function(e,f){var d=AJS.$(f);var g=d.attr("data-app-link");var c=d.attr("data-key");AJS.JiraIssues.Remote[g]=AJS.JiraIssues.Remote[g]||[];AJS.JiraIssues.Remote[g].push({key:c})});for(var b in AJS.JiraIssues.Remote){a(b)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:web-resources', location = 'templates/extra/jira/jiraIssues.js' */
jQuery(document).ready(function(){var a=jQuery.extend(window.JiraIssues||{},{ADG_ENABLED:AJS.Meta.getNumber("build-number")>=4000,ADG_FONT_SIZE_OVER_FLEXIGRID_FONT_SIZE_RATIO:14/11,fixMenusShowingUnderWidgetInIE:function(){if(jQuery.browser.msie){jQuery("ul.ajs-menu-bar li.ajs-menu-item").each(function(){jQuery(this).hover(function(){jQuery("div.ajs-drop-down",jQuery(this)).parents().each(function(){var c=jQuery(this);var b=c.css("position");if(b&&b!="auto"){c.addClass("ajs-menu-bar-z-index-fix-for-ie")}})},function(){jQuery("div.ajs-drop-down",jQuery(this)).parents().removeClass("ajs-menu-bar-z-index-fix-for-ie")})})}},onSuccessFunction:function(d){if(!jQuery("fieldset input[name='height']",d).length){var b=jQuery(".bDiv table[id^='jiraissues_table']",d)[0];var e=b.grid;var c=b.clientHeight+jQuery(".hDiv",d)[0].clientHeight;jQuery(".bDiv",d).css("height",c+"px");e.options.height=c;e.fixHeight(c)}},onErrorFunction:function(h,c,b,n,f){var o=jQuery("#"+c);var g=b+": ";if(n.status=="200"){g+=f}else{g+=n.responseText}var i=n.getResponseHeader("WWW-Authenticate")||"";if(n.status=="401"&&i.indexOf("OAuth")!=-1){var m=/OAuth realm\=\"([^\"]+)\"/;var e=m.exec(i);if(e){o.empty();a.bigMessageFunction(c,'<a class="oauth-init" href="'+e[1]+'">'+"Authenticate"+"</a> "+"to retrieve your issues"+"</span>");jQuery(".bmDiv",h).css({"z-index":2});var j={onSuccess:function(){window.location.reload()},onFailure:function(){}};var l=jQuery(".oauth-init",o.parent());var d=l.attr("href");l.click(function(p){AppLinks.authenticateRemoteCredentials(d,j.onSuccess,j.onFailure);p.preventDefault()});AJS.$(".gBlock").remove()}}else{if(n.status=="400"){a.bigMessageFunction(c,"The Jira server was not able to process the search. This may indicate a problem with the syntax of this macro. Alternatively, if this table is requesting specific issue keys, you may not have permission to view one of these issues.")}else{var k=jQuery("iframe.jiraissues_errorMsgSandbox",h);k.load(function(){var r=this.contentWindow||this.contentDocument;var q=jQuery((r.document?r.document:r).body);jQuery("a",q).each(function(){this.target="_top"});jQuery(".pPageStat",h).empty().text(q.text());var p=jQuery("div.bmDiv",h)[0];k.removeClass("hidden");k.css({height:p.clientHeight+"px",width:p.clientWidth+"px"})});k[0].src=jQuery("fieldset input[name='retrieverUrlHtml']",h).val();a.bigMessageFunction(c,k)}}jQuery(h).find(".pReload").removeClass("loading");o[0].grid.loading=false;jQuery(h).find(".pButton").each(function(){jQuery(this).removeClass("pBtnOver");jQuery(this).css({cursor:"default",opacity:"0.3"})});jQuery(h).find("span.pcontrol input").attr("readonly","true")},onReloadFunction:function(b,d,c){jQuery(".bmDiv",d).remove();jQuery(".bmDistance",d).remove();c.onSubmit=function(){a.reloadOnSubmitFunction(b,c);return true}},reloadOnSubmitFunction:function(b,c){c.params=[{name:"useCache",value:false}];c.onSubmit=function(){a.onSubmitFunction(b,c);return true}},onSubmitFunction:function(b,c){c.params=[{name:"useCache",value:b}]},showTrustWarningsFunction:function(d,c){var b=jQuery(d).children(".trusted_warnings");if(c.trustedMessage){b.find("td:last").html(c.trustedMessage);b.css("display","block")}else{b.css("display","none")}},preProcessFunction:function(e,b,d,c,f){if(d){a.showTrustWarningsFunction(e,c)}if(c.total==0){jQuery(".pPageStat",e).html(f);a.bigMessageFunction(b,f);jQuery(".pReload",e).removeClass("loading");return}},bigMessageFunction:function(e,f){var d=jQuery("<div></div>");var b=jQuery("<div></div>");d.addClass("bmDistance");b.addClass("bmDiv");if(typeof f=="string"){b.html("<p><strong>"+f+"</strong></p>")}else{f.appendTo(b)}var c=jQuery("#"+e);c.after(b).after(d)},getParamsFrom:function(c){var b={};c.children("input").each(function(){b[jQuery(this).attr("name")]=jQuery(this).attr("value")});return b},initializeColumnWidth:function(f,p){var d={},m=function(i){return a.ADG_ENABLED?Math.round(i*a.ADG_FONT_SIZE_OVER_FLEXIGRID_FONT_SIZE_RATIO):i};if(!(p&&p.length)){return d}var h=37,n=11,k=f.width()-(h+(p.length*n)),j=false,q=false,o=0,c=m(140);for(var l=0,e=p.length;l<e;l++){var g=p[l].name;switch(g){case"summary":j=true;o++;break;case"description":q=true;o++;break;case"type":o++;d[g]=30;k-=30;break;case"priority":o++;d[g]=50;k-=50;break;case"status":o++;d[g]=m(100);k-=m(100);break;case"key":o++;d[g]=m(90);k-=m(90);break;case"comments":case"attachments":case"version":case"component":case"resolution":o++;d[g]=m(80);k-=m(80);break;default:d[g]=c}}if(j||q){k-=(c*(p.length-o));var b=250;if(j&&q){d.summary=Math.max(k/2,b);d.description=Math.max(k/2,b)}else{if(j){d.summary=Math.max(k,b)}else{d.description=Math.max(k,b)}}}else{if(!j&&!q&&(p.length>o)){c=k/(p.length-o);for(l=0;l<e;l++){if(!{resolution:true,key:true,type:true,priority:true,status:true}[p[l]]){d[p[l]]=c}}}}return d}});a.fixMenusShowingUnderWidgetInIE();jQuery(".jiraissues_table").each(function(f,j){var k=jQuery(j),h=k.children("fieldset"),e=a.getParamsFrom(h),c="jiraissues_table_"+f;k.append('<table id="'+c+'" style="display:none"></table>');k.css("width",e.width);var d=[];h.children(".columns").each(function(l){var m=jQuery(this).hasClass("nowrap");d[l]={display:this.name,name:this.value,nowrap:m,sortable:true,align:"left"}});var b=a.initializeColumnWidth(k,d);jQuery.each(d,function(l,m){m.width=b[m.name]});var g=jQuery("<div></div>");jQuery("<a></a>").attr({rel:"nofollow",href:e.clickableUrl}).text(e.title).appendTo(g);jQuery("#"+c).flexigrid({url:e.retrieverUrlHtml,method:"GET",dataType:"json",colModel:d,sortname:e.sortField,sortorder:e.sortOrder,usepager:true,title:g.html(),page:parseInt(e.requestedPage,10),useRp:false,rp:parseInt(e.resultsPerPage,10),showTableToggleBtn:true,height:(function(){return e.height?parseInt(e.height,10):480})(),onSuccess:function(){a.onSuccessFunction(j)},onSubmit:function(){a.onSubmitFunction(e.useCache,this);return true},preProcess:function(i){a.preProcessFunction(j,c,e.showTrustWarnings,i,e.nomsg);return i},onError:function(m,l,i){a.onErrorFunction(j,c,e.jiraissuesError,m,l,i)},onReload:function(){a.onReloadFunction(e.useCache,j,this);return true},errormsg:e.errormsg,pagestat:e.pagestat,procmsg:e.procmsg,nomsg:e.nomsg})});jQuery(".jiraissues_count").each(function(b,d){var c=jQuery(d);jQuery.ajax({cache:false,type:"GET",url:c.find(".url").text(),data:{useCache:c.find(".use-cache").text(),rp:c.find(".rp").text(),showCount:"true"},success:function(f){var e=c.find(".result");if(f==1){e.text(AJS.format("{0} issue",f))}else{e.text(AJS.format("{0} issues",f))}e.removeClass("hidden");jQuery(".calculating, .error, .data",c).remove()},error:function(h){var f=jQuery(".error",c).removeClass("hidden"),g=h.getResponseHeader("WWW-Authenticate")||"",j=false;if(h.status===401&&g.indexOf("OAuth")!=-1){var e=/OAuth realm\=\"([^\"]+)\"/,i=e.exec(g);if(i){f.empty().append(AJS.$("<a/>",{href:i[1],"class":"oauth-init"}).text("Authenticate").click(function(){AppLinks.authenticateRemoteCredentials(i[1],function(){window.location.reload()},function(){});return false})).append(AJS.$("<span/>",{text:" "+"to retrieve your issues"}));j=true}}if(!j){f.text(AJS.format(f.text(),h.status))}jQuery(".calculating, .result, .data",c).remove()}})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'js/space-menu.js' */
AJS.toInit(function(a){var c=a(Confluence.Templates.BrowseSpaces.spacesLink());a("#space-directory-link").replaceWith(a(c));var b=function(d){var e=a("#space-menu-link-content");e.html(d.template);if(AJS&&AJS.Confluence&&AJS.Confluence.Analytics&&AJS.Confluence.Analytics.setAnalyticsSource){AJS.Confluence.Analytics.setAnalyticsSource(e.find("a"),"spacemenu")}a("#create-space-header").click(function(){AJS.trigger("analytics",{name:"create-space-from-header"});Confluence.SpaceBlueprint.Dialog.launch();return false})};a("#space-menu-link-content").on("aui-dropdown2-show",function(){AJS.trigger("analytics",{name:"open-space-menu"});if(!a("#space-menu-link-content .aui-dropdown2-section")||!a("#space-menu-link-content .aui-dropdown2-section").length){a.ajax({url:Confluence.getContextPath()+"/rest/ia/1.0/spacesmenu",type:"GET",dataType:"json",cache:false,success:b})}return false})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'soy/space-menu.soy' */
// This file was automatically generated from space-menu.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.BrowseSpaces.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.BrowseSpaces == 'undefined') { Confluence.Templates.BrowseSpaces = {}; }


Confluence.Templates.BrowseSpaces.spacesLink = function(opt_data, opt_ignored) {
  return '' + aui.dropdown2.trigger({menu: {id: 'space-menu-link-content'}, id: 'space-menu-link', tagName: 'a', extraClasses: 'aui-nav-link', title: 'Spaces', showIcon: false, text: 'Spaces'}) + aui.dropdown2.contents({id: 'space-menu-link-content', extraClasses: 'aui-style-default aui-dropdown2-in-header'});
};
if (goog.DEBUG) {
  Confluence.Templates.BrowseSpaces.spacesLink.soyTemplateName = 'Confluence.Templates.BrowseSpaces.spacesLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:space-ia-analytics', location = 'js/space-ia-analytics.js' */
(function(b){var c=AJS.Confluence.Analytics.setAnalyticsSource;function d(){var h=b(".acs-side-bar");var g=h.find("a:not(.external_link a, #acs-configure-link)");c(g,"sidebar");var f=h.find("[data-collapsed-tooltip='"+AJS.I18n.getText("Pages")+"']");c(f,"sidebar-pages");var j=h.find("[data-collapsed-tooltip='"+AJS.I18n.getText("Blog")+"']");c(j,"sidebar-blogs");var e=h.find(".quick-links-section li:not(.external_link) a");c(e,"spaceshortcut");var i=h.find(".ia-secondary-container a:not(.more-children-link)");if(h.find(".ia-secondary-container").data("tree-type")=="pages"){c(i,"contextnavchildmode")}else{if(h.find(".ia-secondary-container").data("tree-type")=="page-tree"){c(i,"contextnavpagetreemode")}else{c(i,"contextnav")}}}function a(e){return function(){AJS.trigger("analytics",{name:"space-ia-nav",data:{linkType:e}})}}AJS.toInit(function(e){e(".acs-side-bar").find(".ia-secondary-container .more-children-link").click(a("context-nav.more-children"));AJS.bind("sidebar.exit-configure-mode",d);AJS.bind("sidebar.flyout-triggered",function(g,f){a("flyout-triggered."+f.flyout)()});AJS.bind("pagetree-children-loaded",d);d()})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-feature-discovery-plugin:confluence-feature-discovery-plugin-resources', location = '/js/confluence-feature-discovery-plugin.js' */
(function(f){Confluence.FeatureDiscovery={};var c,e=false,i=3;var d="com.atlassian.confluence.plugins.confluence-feature-discovery-plugin";var g=d+":confluence-feature-discovery-plugin-resources.test-mode";var a=WRM.data.claim(g);function j(k){if(c===undefined){c=JSON.parse(AJS.Meta.get("discovered-plugin-features")||"{}")}if(k){return c[k]||[]}return c}function b(m,o){var n=j(m);for(var l=0,k=n.length;l<k;l++){if(n[l]===o){return true}}return false}function h(n,p){var l="com.atlassian.webdriver.discovery="+n+":"+p;var k=document.cookie.split(";");for(var m=0;m<k.length;m++){var o=k[m];while(o.charAt(0)===" "){o=o.substring(1)}if(o.indexOf(l)!==-1){return true}}return false}Confluence.FeatureDiscovery.forPlugin=function(m,l){var p=Confluence.storageManager("feature-discovery."+m);l=l||i;function o(r){var q=parseInt(p.getItem(r),10);return isNaN(q)?0:q}function n(r,q){return p.setItem(r,q)}function k(q){return p.removeItem(q)}return{addDiscoveryView:function(q){n(q,o(q)+1)},shouldShow:function(r,q){if(q===true&&a&&!h(m,r)){return false}if(e||b(m,r)){return false}if(o(r)>=l){this.markDiscovered(r);return false}e=true;return true},markDiscovered:function(r,q){if(b(m,r)){return}AJS.safeAjax({url:AJS.contextPath()+"/rest/feature-discovery/1.0/discovered/"+m+"/"+r,type:"POST",data:{},success:function(){j(m).unshift(r);k(r);AJS.trigger("feature-discovered",{pluginKey:m,featureKey:r});if(q&&f.isFunction(q)){q()}}})},listDiscovered:function(){return j(m).slice(0)}}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'aptis.plugins.deleteAllComments:resources', location = 'js/askUser.js' */
AJS.toInit(function(){AJS.$("#deleteAllComments").click(function(){AJS.$("#deleteSelectedCommentsContainer").hide(250)});AJS.$("#deleteSelectedComments").click(function(){AJS.$("#deleteSelectedCommentsContainer").show(250)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources', location = '/js/confluence-license-banner.js' */
require(["ajs","jquery"],function(a,b){a.toInit(function(){var d=WRM.data.claim("com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources.license-details");if(!d){a.warn("Unable to claim my required data");return}var c={destroyBanner:function(){b("#license-banner").slideUp(function(){b("#license-banner").remove()})},remindMeLater:function(){b.ajax({type:"POST",dataType:"json",contentType:"application/json; charset=utf-8",data:JSON.stringify({atl_token:a.Meta.get("atl-token")}),url:a.contextPath()+"/rest/licensebanner/1.0/reminder/later"});c.destroyBanner()},remindMeNever:function(){b.ajax({type:"POST",dataType:"json",contentType:"application/json; charset=utf-8",data:JSON.stringify({atl_token:a.Meta.get("atl-token")}),url:a.contextPath()+"/rest/licensebanner/1.0/reminder/never"});c.destroyBanner()},createBanner:function(g){var e;if(g.showLicenseExpiryBanner){e=Confluence.Templates.LicenseBanner.expiryBanner({days:g.daysBeforeLicenseExpiry,mac:g.renewUrl,sales:g.salesUrl})}else{if(g.showMaintenanceExpiryBanner){e=Confluence.Templates.LicenseBanner.maintenanceBanner({days:g.daysBeforeMaintenanceExpiry,mac:g.renewUrl,sales:g.salesUrl})}}if(e){var f=b(e);b("#full-height-container").prepend(f);b("#license-banner-later").click(function(h){h.preventDefault();c.remindMeLater()});b("#license-banner-never").click(function(h){h.preventDefault();c.remindMeNever()});f.find(".icon-close").click(function(h){h.preventDefault();c.remindMeLater()})}}};c.createBanner(d)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources', location = 'soy/confluence-license-banner.soy' */
// This file was automatically generated from confluence-license-banner.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.LicenseBanner.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LicenseBanner == 'undefined') { Confluence.Templates.LicenseBanner = {}; }


Confluence.Templates.LicenseBanner.wrapper = function(opt_data, opt_ignored) {
  return '<div>' + soy.$$filterNoAutoescape(opt_data.contentHTML) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LicenseBanner.wrapper.soyTemplateName = 'Confluence.Templates.LicenseBanner.wrapper';
}


Confluence.Templates.LicenseBanner.expiryBanner = function(opt_data, opt_ignored) {
  var output = '';
  var renewTag__soy8 = '<a id="license-banner-my-link" target="_blank" href="' + soy.$$escapeHtml(opt_data.mac) + '">';
  var end__soy12 = '</a>';
  var mailTag__soy14 = '<a id="license-banner-sales-link" target="_blank" href="' + soy.$$escapeHtml(opt_data.sales) + '">';
  output += Confluence.Templates.LicenseBanner.wrapper({contentHTML: '' + aui.message.warning({content: '<div id="license-banner-content" data-days="' + soy.$$escapeHtml(opt_data.days) + '" data-subscription="true">' + ((opt_data.days < 0) ? soy.$$filterNoAutoescape(AJS.format('Your subscription has expired. This site is now read-only. To keep using Confluence, {0}renew online{1} or {2}contact us{3}.',renewTag__soy8,end__soy12,mailTag__soy14,end__soy12)) : (opt_data.days == 0) ? soy.$$filterNoAutoescape(AJS.format('Your subscription will expire today and your site will become read-only. To keep using Confluence, {0}renew online{1} or {2}contact us{3}.',renewTag__soy8,end__soy12,mailTag__soy14,end__soy12)) : soy.$$filterNoAutoescape(AJS.format('Your subscription will expire in {0,choice,1#{0} day|1\x3c{0} days}. Your site will become read-only after the expiry. To keep using Confluence, {1}renew online{2} or {3}contact us{4}.',opt_data.days,renewTag__soy8,end__soy12,mailTag__soy14,end__soy12))) + '</div>', isCloseable: opt_data.days > 7, id: 'license-banner'})});
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.LicenseBanner.expiryBanner.soyTemplateName = 'Confluence.Templates.LicenseBanner.expiryBanner';
}


Confluence.Templates.LicenseBanner.maintenanceBanner = function(opt_data, opt_ignored) {
  var output = '';
  var renewTag__soy39 = '<a id="license-banner-my-link" target="_blank" href="' + soy.$$escapeHtml(opt_data.mac) + '">';
  var end__soy43 = '</a>';
  var later__soy45 = '<a href="#" id="license-banner-later">';
  var never__soy47 = '<a href="#" id="license-banner-never">';
  output += Confluence.Templates.LicenseBanner.wrapper({contentHTML: '' + aui.message.warning({content: '<div id="license-banner-content" data-days="' + soy.$$escapeHtml(opt_data.days) + '" data-subscription="false">' + ((opt_data.days < 0) ? soy.$$filterNoAutoescape(AJS.format('You no longer have access Support and Updates. {0}Renew online{1}, {2}remind me later{3} or {4}never remind me again{5}.',renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43)) : (opt_data.days == 0) ? soy.$$filterNoAutoescape(AJS.format('You will lose access to Support and Updates today. {0}Renew online{1}, {2}remind me later{3} or {4}never remind me again{5}.',renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43)) : soy.$$filterNoAutoescape(AJS.format('You will lose access to Support and Updates in {0,choice,1#{0} day|1\x3c{0} days}. {1}Renew online{2}, {3}remind me later{4} or {5}never remind me again{6}.',opt_data.days,renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43))) + '</div>', id: 'license-banner'})});
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.LicenseBanner.maintenanceBanner.soyTemplateName = 'Confluence.Templates.LicenseBanner.maintenanceBanner';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.adaptavist.confluence.contentFormattingMacros:clickable-resources', location = 'js/clickable.js' */
jQuery(function($) {
    $(".clickable").live("click", function(event) {
        // Ensure we don't override any normal links or nested clickables within the clickable element
        if ($(event.target).closest("a[href]").length === 0 && $(event.target).closest(".clickable").length === 1) {
            // Use the href from the clickable element or the first nested link
            var href = $(this).attr("href") || $('a[href]:first', this).attr("href");
            if (href) {
                location.href = href;
            }
        }
    });
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.adaptavist.confluence.contentFormattingMacros:alert-resources', location = 'js/alert.js' */
AJS.toInit(function () {

    AJS.$(".adaptavist-alert").each(function () {

        var title = $(this).attr('title');
        var type = $(this).attr('type').toLowerCase();
        var content = $(this).attr('contentBody');

        require('aui/flag')({
            type: type,
            title: title,
            body: content
        });
    });

});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.adaptavist.confluence.contentFormattingMacros:rollover-resource', location = 'js/rollover.js' */
AJS.toInit(function () {

    var allRolloverMacros = AJS.$('.rollover-parameters');

    AJS.$.each(allRolloverMacros, function (index, macro) {
        var targetID = macro.getAttribute('targetid');
        var normalClass = macro.getAttribute('normal-class');
        var overClass = macro.getAttribute('over-class');

        var targetElement = AJS.$('#' + targetID);
        var link = allRolloverMacros[index].getAttribute("rollover-link");

        if (targetID != null) {
            targetElement.addClass(normalClass);
            if (!(overClass === "${overClass}")) {
                targetElement.hover(
                    function () {
                        AJS.$(this).removeClass(normalClass);
                        AJS.$(this).addClass(overClass);
                    }, function () {
                        AJS.$(this).removeClass(overClass);
                        AJS.$(this).addClass(normalClass);
                    }
                );
            }

            if (!(link === "${link}")) {
                targetElement.html('<a class="external-link rolloverLink" rel="nofollow" href="" >' + targetElement.text() + '</a>');
                targetElement.children().attr('href', link);
            }
        }
    });
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.pattern.multi-step-progress', location = 'aui.chunk.3c3b8c0ef0f18c99173f--32af67f67526f8cbfed4.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.pattern.multi-step-progress"],{LOci:function(i,u,c){},qc5q:function(i,u,c){"use strict";c("FStl"),c("Q0fs"),c("nqD9"),c("LOci")}},[["qc5q","runtime","aui.splitchunk.b0831cc7d0","aui.splitchunk.572a8bf5cd","aui.splitchunk.d49cf794d2"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.adaptavist.confluence.contentFormattingMacros:cfm-blueprint-wizard', location = 'soy/blueprint/wizard-page1.soy' */
// This file was automatically generated from wizard-page1.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace CFM.Blueprints.
 */

if (typeof CFM == 'undefined') { var CFM = {}; }
if (typeof CFM.Blueprints == 'undefined') { CFM.Blueprints = {}; }


CFM.Blueprints.cfmBlueprintWizardPage1 = function(opt_data, opt_ignored) {
  return '<div class="aui-group"><div class="aui-item wizard-page-left"><form name="cfm-wizard-page-one" action="#" method="post" class="aui"><fieldset><div class="cfm-wizard-description">' + soy.$$escapeHtml('This wizard provides the ability to quick start a page that uses selected Content Formatting macros.') + '</div><div class="cfm-page-title-padding"><label for="text-input">Page title<span class="aui-icon icon-required cfm-req">required</span></label><input class="text medium-field" type="text" id="cfm-page-title" name="title" title="title"></input></div><div><label for="cfm-blueprints-dropdown" class="blueprints-label-padding">Templates</label><!-- Trigger --><a href="#cfm-blueprints-dropdown-trigger" aria-owns="cfm-blueprints-dropdown" aria-haspopup="true" class="aui-button aui-style-default aui-dropdown2-trigger cfm-blueprints-dropdown-text">Selection</a><!-- Dropdown --><div id="cfm-blueprints-dropdown" class="aui-style-default aui-dropdown2"><div class="aui-dropdown2-section"><ul><li class="cfm-blueprint-selected"><a href="#1mpj">Multi-Page Journey</a></li><li class="cfm-blueprint-selected"><a href="#2shp">Space Home Page</a></li><li class="cfm-blueprint-selected"><a href="#3f">Finance</a></li><li class="cfm-blueprint-selected"><a href="#4a">Academic</a></li><li class="cfm-blueprint-selected"><a href="#5b">Blog</a></li><li class="cfm-blueprint-selected"><a href="#6sr">Software Requirements</a></li></ul></div></div></div><div class="cfm-blueprint-description">' + soy.$$escapeHtml('Start by entering a page Title and selecting a template from the dropdown.') + '</div></fieldset></form></div><div class="cfm-vertical-line"></div><div class="aui-item"><div class="cfm-blueprints-picture">&nbsp;</div></div></div>';
};
if (goog.DEBUG) {
  CFM.Blueprints.cfmBlueprintWizardPage1.soyTemplateName = 'CFM.Blueprints.cfmBlueprintWizardPage1';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.adaptavist.confluence.contentFormattingMacros:cfm-wizard-resources', location = 'soy/blueprint/wizard-page1.soy' */
// This file was automatically generated from wizard-page1.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace CFM.Blueprints.
 */

if (typeof CFM == 'undefined') { var CFM = {}; }
if (typeof CFM.Blueprints == 'undefined') { CFM.Blueprints = {}; }


CFM.Blueprints.cfmBlueprintWizardPage1 = function(opt_data, opt_ignored) {
  return '<div class="aui-group"><div class="aui-item wizard-page-left"><form name="cfm-wizard-page-one" action="#" method="post" class="aui"><fieldset><div class="cfm-wizard-description">' + soy.$$escapeHtml('This wizard provides the ability to quick start a page that uses selected Content Formatting macros.') + '</div><div class="cfm-page-title-padding"><label for="text-input">Page title<span class="aui-icon icon-required cfm-req">required</span></label><input class="text medium-field" type="text" id="cfm-page-title" name="title" title="title"></input></div><div><label for="cfm-blueprints-dropdown" class="blueprints-label-padding">Templates</label><!-- Trigger --><a href="#cfm-blueprints-dropdown-trigger" aria-owns="cfm-blueprints-dropdown" aria-haspopup="true" class="aui-button aui-style-default aui-dropdown2-trigger cfm-blueprints-dropdown-text">Selection</a><!-- Dropdown --><div id="cfm-blueprints-dropdown" class="aui-style-default aui-dropdown2"><div class="aui-dropdown2-section"><ul><li class="cfm-blueprint-selected"><a href="#1mpj">Multi-Page Journey</a></li><li class="cfm-blueprint-selected"><a href="#2shp">Space Home Page</a></li><li class="cfm-blueprint-selected"><a href="#3f">Finance</a></li><li class="cfm-blueprint-selected"><a href="#4a">Academic</a></li><li class="cfm-blueprint-selected"><a href="#5b">Blog</a></li><li class="cfm-blueprint-selected"><a href="#6sr">Software Requirements</a></li></ul></div></div></div><div class="cfm-blueprint-description">' + soy.$$escapeHtml('Start by entering a page Title and selecting a template from the dropdown.') + '</div></fieldset></form></div><div class="cfm-vertical-line"></div><div class="aui-item"><div class="cfm-blueprints-picture">&nbsp;</div></div></div>';
};
if (goog.DEBUG) {
  CFM.Blueprints.cfmBlueprintWizardPage1.soyTemplateName = 'CFM.Blueprints.cfmBlueprintWizardPage1';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.adaptavist.confluence.contentFormattingMacros:cfm-wizard-resources', location = 'soy/blueprint/wizard-page2.soy' */
// This file was automatically generated from wizard-page2.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace CFM.Blueprints.
 */

if (typeof CFM == 'undefined') { var CFM = {}; }
if (typeof CFM.Blueprints == 'undefined') { CFM.Blueprints = {}; }


CFM.Blueprints.cfmBlueprintWizardPage2 = function(opt_data, opt_ignored) {
  return '<div class="aui-group cfm-dialog-no-scroll"><div class="aui-item"><form name="cfm-wizard-page-two" action="#" method="post" class="aui"><fieldset class="rows"><div class="cfm-wizard-description">' + soy.$$escapeHtml('Please add the additional page or pages required for the Multi-Page Journey template.') + '</div><div class="aui-group"><div class="aui-item create-button-rows"><div class="cfm-wizard-page-two-validation"></div><table class="aui" id="cfm-wizard-dataTable"><thead><tr><th>Page Title</th><th>Actions</th></tr></thead><tbody><tr id="groupRow0"><td class="cfm-input-field"><input id="cfm-page-title-input-0" class="text buttonInputLabel" type="text" value="" required="required" tabindex="10"/></td><td class="cfm-actions"><input type="button" class="aui-button cfmAddPageTitleRowInput" value="+" data-row-index="0" tabindex="10"/><input type="button" class="aui-button cfmRemovePageTitleRowInput" data-row-index="0" value="-" tabindex="10" disabled/></td></tr></tbody></table></div></div></fieldset></form></div></div>';
};
if (goog.DEBUG) {
  CFM.Blueprints.cfmBlueprintWizardPage2.soyTemplateName = 'CFM.Blueprints.cfmBlueprintWizardPage2';
}


CFM.Blueprints.addPageTitleRow = function(opt_data, opt_ignored) {
  return '<tr id="groupRow' + soy.$$escapeHtml(opt_data.rowIndex) + '"><td class="cfm-input-field"><input id="cfm-page-title-input-' + soy.$$escapeHtml(opt_data.rowIndex) + '" class="text buttonInputLabel" type="text" value="" required="required" tabindex="10"/></td><td class="cfm-actions"><input type="button" class="aui-button cfmAddPageTitleRowInput" value="+" data-row-index="' + soy.$$escapeHtml(opt_data.rowIndex) + '" tabindex="10"/><input type="button" class="aui-button cfmRemovePageTitleRowInput" data-row-index="' + soy.$$escapeHtml(opt_data.rowIndex) + '" value="-" tabindex="10"/></td></tr>';
};
if (goog.DEBUG) {
  CFM.Blueprints.addPageTitleRow.soyTemplateName = 'CFM.Blueprints.addPageTitleRow';
}


CFM.Blueprints.addDuplicateValidationMessage = function(opt_data, opt_ignored) {
  return '<div class="cfm-invalid-page-title">' + soy.$$escapeHtml('Each title must be unique') + '</div>';
};
if (goog.DEBUG) {
  CFM.Blueprints.addDuplicateValidationMessage.soyTemplateName = 'CFM.Blueprints.addDuplicateValidationMessage';
}


CFM.Blueprints.addExistsValidationMessage = function(opt_data, opt_ignored) {
  return '<div class="cfm-invalid-page-title">' + soy.$$escapeHtml('A page with this title already exists') + '</div>';
};
if (goog.DEBUG) {
  CFM.Blueprints.addExistsValidationMessage.soyTemplateName = 'CFM.Blueprints.addExistsValidationMessage';
}


CFM.Blueprints.addEmptyValidationMessage = function(opt_data, opt_ignored) {
  return '<div class="cfm-invalid-page-title">' + soy.$$escapeHtml('This field can not be empty') + '</div>';
};
if (goog.DEBUG) {
  CFM.Blueprints.addEmptyValidationMessage.soyTemplateName = 'CFM.Blueprints.addEmptyValidationMessage';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.adaptavist.confluence.contentFormattingMacros:cfm-wizard-resources', location = 'soy/blueprint/wizard-page3.soy' */
// This file was automatically generated from wizard-page3.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace CFM.Blueprints.
 */

if (typeof CFM == 'undefined') { var CFM = {}; }
if (typeof CFM.Blueprints == 'undefined') { CFM.Blueprints = {}; }


CFM.Blueprints.cfmBlueprintWizardPage3 = function(opt_data, opt_ignored) {
  return '<div class="aui-group cfm-wizard-page-two"><div class="cfm-wizard-description">' + soy.$$escapeHtml('You finished the wizard setup successfully. Click create to get started with your template.') + '</div></div><div class="aui-item"><div class="cfm-blueprints-picture-complete">&nbsp;</div></div>';
};
if (goog.DEBUG) {
  CFM.Blueprints.cfmBlueprintWizardPage3.soyTemplateName = 'CFM.Blueprints.cfmBlueprintWizardPage3';
}


CFM.Blueprints.docoLink = function(opt_data, opt_ignored) {
  return '<a class="add-remove-customise-templates-trigger button-panel-link" href="https://www.adaptavist.com/doco/display/CFP/Templates" tabindex="-1">' + soy.$$escapeHtml('Documentation') + '</a>';
};
if (goog.DEBUG) {
  CFM.Blueprints.docoLink.soyTemplateName = 'CFM.Blueprints.docoLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.adaptavist.confluence.contentFormattingMacros:cfm-wizard-resources', location = 'js/blueprint-wizard.js' */
AJS.toInit(function ($) {

    var selectedBlueprint;
    var pageTwoData = {};
    var rowIndex = 1;
    var stepTwoTitles = [];

    function handleWizardPage1Submit(e, state) {
        var pageOneValidationElement = $('.cfm-blueprint-description');
        if (!state.pageData.title) {
            pageOneValidationElement.text("Please enter a unique page title");
            addValidationStyling(pageOneValidationElement);
            return false;
        }

        if (doesPageExist(state.pageData.title, state.wizardData.spaceKey)) {
            pageOneValidationElement.text("Page title already exists, please enter a unique title");
            addValidationStyling(pageOneValidationElement);
            return false;
        }

        if (!selectedBlueprint) {
            pageOneValidationElement.text("Please select a template from the dropdown");
            addValidationStyling(pageOneValidationElement);
            return false;
        }

        state.pageData.userSelectedBlueprint = selectedBlueprint;
        if (selectedBlueprint === 'Multi-Page Journey') {
            state.nextPageId = 'cfmBlueprintWizardPage2';
        } else {
            state.nextPageId = 'cfmBlueprintWizardPage3';
        }
        return true;
    }

    function handleWizardPage2Submit(e, state) {
        pageTwoData = {};
        stepTwoTitles = [];
        var success = true;
        var allPageTitles = [];
        resetValidation();
        $('#cfm-wizard-dataTable > tbody > tr').each(function (index) {
            allPageTitles.push($('#cfm-page-title').val());
            var pageTwoValidationElement;
            var pageTitle = $(this).find('.cfm-input-field > input').val();
            var pageIndex = 'page' + index;
            pageTwoData[pageIndex] = pageTitle;
            stepTwoTitles.push(pageTitle);

            //check if user provided same title twice
            if ($.inArray($(this).find('.buttonInputLabel').val(), allPageTitles) !== -1 && pageTitle || state.wizardData.pages.cfmBlueprintWizardPage1.title === pageTitle) {
                //add error text
                var pageTitleDuplicateValidationMessage = CFM.Blueprints.addDuplicateValidationMessage();
                $(this).find('.cfm-input-field').append(pageTitleDuplicateValidationMessage);
                //style the error message
                pageTwoValidationElement = $(this).find($('.cfm-invalid-page-title'));
                addValidationStyling(pageTwoValidationElement);
                success = false;
            } else {
                allPageTitles.push($(this).find('.buttonInputLabel').val());
            }

            if (doesPageExist(pageTitle, state.wizardData.spaceKey)) {
                if ($(this).find('.buttonInputLabel').val()) {
                    //show page title already exists message
                    var pageTitleExistsValidationMessage = CFM.Blueprints.addExistsValidationMessage();
                    $(this).find('.cfm-input-field').append(pageTitleExistsValidationMessage);
                    pageTwoValidationElement = $(this).find($('.cfm-invalid-page-title'));
                } else {
                    //show field empty message
                    var pageTitleEmptyValidationMessage = CFM.Blueprints.addEmptyValidationMessage();
                    $(this).find('.cfm-input-field').append(pageTitleEmptyValidationMessage);
                    pageTwoValidationElement = $(this).find($('.cfm-invalid-page-title'));
                }

                addValidationStyling(pageTwoValidationElement);
                $(this).find(pageTwoValidationElement).addClass('blueprint-validation');

                success = false;
            }
        });

        var errorMessages = $('.cfm-invalid-page-title');
        if ($(errorMessages).size() > 0) {
            errorMessages[0].scrollIntoView(false);
        }
        state.wizardData.pageTwoNewPageTitles = pageTwoData;
        return success;
    }

    function handleWizardPage3Submit(e, state) {
        //subsumes the normal blueprint wizard and use an action to complete the specified tasks
        if (state.wizardData.pages.cfmBlueprintWizardPage1.userSelectedBlueprint === "Blog") {
            $('#create-dialog').find('.button-panel-cancel-link').click();
            var blogPayload = {
                "title": state.wizardData.pages.cfmBlueprintWizardPage1.title,
                "space": state.wizardData.spaceKey
            };
            createBlog(blogPayload);
            e.preventDefault();
        } else if (state.wizardData.pages.cfmBlueprintWizardPage1.userSelectedBlueprint === "Multi-Page Journey") {
            $('#create-dialog').find('.button-panel-cancel-link').click();
            var journeyPayload = {
                "stepOnePageTitle": state.wizardData.pages.cfmBlueprintWizardPage1.title,
                "space": state.wizardData.spaceKey,
                "parentPageId": state.wizardData.parentPageId,
                "stepTwoPageTitles": stepTwoTitles
            };
            createJourneyPages(journeyPayload);
            e.preventDefault();
        } else {
            return true;
        }
    }

    function createBlog(blogPayload) {
        $.ajax({
            type: 'POST',
            async: false,
            url: AJS.params.baseUrl + '/cfm/blueprint/create/blog/cfm-create-blog.action',
            data: blogPayload
        }).success(function () {
            window.location.href = AJS.params.baseUrl + '/pages/viewrecentblogposts.action?key=' + blogPayload.space;
        }).error(function () {
            var failMessage = "Failed to call Content Formatting blueprint create blog action";
            console.log(failMessage);
        });
    }

    function createJourneyPages(journeyPayload) {
        $.ajax({
            type: 'POST',
            async: false,
            url: AJS.params.baseUrl + '/cfm/blueprint/create/journeypages/cfm-create-multi-page-journey-pages.action',
            data: journeyPayload
        }).success(function () {
            window.location.href = AJS.params.baseUrl + '/display/' + journeyPayload.space + '/' + journeyPayload.stepOnePageTitle;
        }).error(function () {
            var failMessage = "Failed to call Content Formatting blueprint create journey pages action";
            console.log(failMessage);
        });
    }

    function handleWizardPage1Input(e, state) {
        $('.dialog-button-panel').append(CFM.Blueprints.docoLink());
        $('.cfm-blueprints-picture').prop('class', 'cfm-blueprints-picture');
        var descriptionElement = $('.cfm-blueprint-description');
        //handle dropdown blueprint selection
        $('.cfm-blueprint-selected').on('click', function (event) {
            descriptionElement.removeClass('blueprint-validation');
            selectedBlueprint = event.target.text;
            $('.cfm-blueprints-dropdown-text').text(selectedBlueprint);
            descriptionElement.text(getBlueprintDescriptionAndUpdateImage('page1', selectedBlueprint));
        });
        //handle page title change
        $('#cfm-page-title').on('change', function () {
            descriptionElement.removeClass('blueprint-validation');
            descriptionElement.text(getBlueprintDescriptionAndUpdateImage('page1', selectedBlueprint));
        });
        //close dropdown if cancel button is clicked while dropdown open
        $('.dialog-button-panel .button-panel-link.button-panel-cancel-link').on('click', function () {
            $('#cfm-blueprints-dropdown').remove();
        });
    }

    function createKeyCodeRange(start, end) {
        var keyCodeArray = [];
        for (var i = start; i <= end; i++) {
            keyCodeArray.push(i);
        }
        return keyCodeArray;
    }

    function handleWizardPage2Input(e, state) {
        $('.dialog-button-panel').append(CFM.Blueprints.docoLink());
        var table = $('#cfm-wizard-dataTable');
        var keyCodeArray = createKeyCodeRange(48, 90);
        keyCodeArray.push(13);
        keyCodeArray.push(32);

        //add page title table row
        table.on('keypress click', '.cfmAddPageTitleRowInput', function (event) {
            if ($.inArray(event.which, keyCodeArray) === -1) {
                var tableRow = $('#cfm-wizard-dataTable > tbody > tr');
                var newRow = CFM.Blueprints.addPageTitleRow({rowIndex: rowIndex});
                rowIndex++;
                //add new table row on appropriate index
                tableRow.eq($.inArray($(event.target).parent().parent()[0], tableRow)).after(newRow);
                //make first row 'remove button' clickable
                $('#groupRow' + $('#cfm-wizard-dataTable tbody tr .cfmAddPageTitleRowInput')[0].getAttribute('data-row-index') + ' .cfm-actions .cfmRemovePageTitleRowInput').removeAttr('disabled');
            } else {
                event.preventDefault();
            }
        });

        //remove page title table row
        table.on('keypress click', '.cfmRemovePageTitleRowInput', function (event) {
            if (event.which !== 13 && event.which !== 32) {
                var rowIndex = event.target.getAttribute('data-row-index');
                $('#groupRow' + rowIndex).remove();
                //make first row 'remove button' disabled
                if ($('#cfm-wizard-dataTable tbody tr').length === 1) {
                    $('#groupRow' + $('#cfm-wizard-dataTable tbody tr .cfmAddPageTitleRowInput')[0].getAttribute('data-row-index') + ' .cfm-actions .cfmRemovePageTitleRowInput').prop('disabled', true);
                }
            } else {
                event.preventDefault();
            }
        });
    }

    function handleWizardPage3Input(e, state) {
        $('.dialog-button-panel').append(CFM.Blueprints.docoLink());
        $('.cfm-blueprint-description').text(getBlueprintDescriptionAndUpdateImage('page3', selectedBlueprint));
    }

    //displays the appropriate description message and image based on the selected blueprint and wizard dialog step.
    function getBlueprintDescriptionAndUpdateImage(dialogPage, selectedBlueprint) {
        var description;
        switch (selectedBlueprint) {
            case "Multi-Page Journey":
                description = "Create several pages that a user can follow from start to finish.";
                updateBlueprintImage(dialogPage, 'multi-page-journey');
                break;
            case "Space Home Page":
                description = "Design a new Space Home Page.";
                updateBlueprintImage(dialogPage, 'space-home-page');
                break;
            case "Finance":
                description = "This template displays financial performance data.";
                updateBlueprintImage(dialogPage, 'finance');
                break;
            case "Blog":
                description = "Get started with a blog.";
                updateBlueprintImage(dialogPage, 'blog');
                break;
            case "Software Requirements":
                description = "Create a software requirements document.";
                updateBlueprintImage(dialogPage, 'software-requirements');
                break;
            case "Academic":
                description = "Use mathematical formulae and cite works.";
                updateBlueprintImage(dialogPage, 'academic');
                break;
            default:
                description = "Start by entering a page Title and selecting a template from the dropdown.";
        }
        return description;
    }

    function updateBlueprintImage(dialogPage, selectedBlueprint) {
        var blueprintPictureElement = $('.cfm-blueprints-picture');
        var blueprintPictureElementComplete = $('.cfm-blueprints-picture-complete');
        if (dialogPage === 'page1') {
            blueprintPictureElement.prop('class', 'cfm-blueprints-picture');
            blueprintPictureElement.addClass(dialogPage).addClass(selectedBlueprint);
        } else {
            blueprintPictureElementComplete.prop('class', 'cfm-blueprints-picture-complete');
            blueprintPictureElementComplete.addClass(dialogPage).addClass(selectedBlueprint);
        }
    }

    function doesPageExist(pageTitle, spaceKey) {
        var success = false;
        $.ajax({
            type: 'GET',
            async: false,
            url: AJS.params.baseUrl + '/rest/api/content?spaceKey=' + spaceKey + '&title=' + pageTitle,
            dataType: 'json'
        }).success(function (json) {
            if (json.size > 0) {
                success = true;
            } else {
                success = false;
            }
        });
        return success;
    }

    function addValidationStyling(element) {
        element.addClass('blueprint-validation');
        element.addClass('validation-error');

        //shake error message
        setTimeout(function () {
            element.removeClass('validation-error');
        }, 100);
    }

    function resetValidation() {
        $('.cfm-invalid-page-title').remove();
    }

    //reset some elements when navigating backwards to page 1
    function handleWizardPage1PreRender() {
        selectedBlueprint = false;
    }

    Confluence.Blueprint.setWizard('com.adaptavist.confluence.contentFormattingMacros:cfm-blueprint-item', function (wizard) {
        wizard.on('submit.cfmBlueprintWizardPage1', handleWizardPage1Submit);
        wizard.on('submit.cfmBlueprintWizardPage2', handleWizardPage2Submit);
        wizard.on('submit.cfmBlueprintWizardPage3', handleWizardPage3Submit);
        wizard.on('pre-render.cfmBlueprintWizardPage1', handleWizardPage1PreRender);
        wizard.on('post-render.cfmBlueprintWizardPage1', handleWizardPage1Input);
        wizard.on('post-render.cfmBlueprintWizardPage2', handleWizardPage2Input);
        wizard.on('post-render.cfmBlueprintWizardPage3', handleWizardPage3Input);
    });
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher.soy' */
// This file was automatically generated from appswitcher.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.appswitcher.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher == 'undefined') { navlinks.templates.appswitcher = {}; }


navlinks.templates.appswitcher.linkSection = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.list.length > 0) {
    output += '<div class="aui-nav-heading sidebar-section-header">' + soy.$$escapeHtml(opt_data.title) + '</div><ul class="aui-nav nav-links">';
    var linkList8 = opt_data.list;
    var linkListLen8 = linkList8.length;
    for (var linkIndex8 = 0; linkIndex8 < linkListLen8; linkIndex8++) {
      var linkData8 = linkList8[linkIndex8];
      output += navlinks.templates.appswitcher.applicationsItem(linkData8);
    }
    output += '</ul>';
  }
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.linkSection.soyTemplateName = 'navlinks.templates.appswitcher.linkSection';
}


navlinks.templates.appswitcher.applicationsItem = function(opt_data, opt_ignored) {
  return '<li class="nav-link"><a href="' + soy.$$escapeHtml(opt_data.link) + '" ' + ((opt_data.self) ? 'class="checked"' : '') + ' title="' + soy.$$escapeHtml(opt_data.link) + '"><span class="nav-link-label">' + soy.$$escapeHtml(opt_data.label) + '</span></a></li>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.applicationsItem.soyTemplateName = 'navlinks.templates.appswitcher.applicationsItem';
}


navlinks.templates.appswitcher.shortcutsItem = function(opt_data, opt_ignored) {
  return '<li class="nav-link"><a href="' + soy.$$escapeHtml(opt_data.link) + '" ' + ((opt_data.self) ? 'class="checked"' : '') + ' title="' + soy.$$escapeHtml(opt_data.link) + '"><span class="nav-link-label">' + soy.$$escapeHtml(opt_data.label) + '</span>' + ((opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '') + '</a></li>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.shortcutsItem.soyTemplateName = 'navlinks.templates.appswitcher.shortcutsItem';
}


navlinks.templates.appswitcher.error = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-error">' + soy.$$filterNoAutoescape('Something went wrong, please \x3cspan class\x3d\x22app-switcher-retry\x22\x3etry again\x3c/span\x3e.') + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.error.soyTemplateName = 'navlinks.templates.appswitcher.error';
}


navlinks.templates.appswitcher.sidebarContents = function(opt_data, opt_ignored) {
  return '<div class="aui-page-panel-nav"><nav class="aui-navgroup aui-navgroup-vertical"><div class="app-switcher-section app-switcher-applications"><div class="aui-nav-heading">' + soy.$$escapeHtml('Application Links') + '</div><div class="app-switcher-loading">' + soy.$$filterNoAutoescape('Loading\x26hellip;') + '</div></div><div class="app-switcher-section app-switcher-shortcuts"><div class="aui-nav-heading">' + soy.$$escapeHtml('Shortcuts') + '</div><div class="app-switcher-loading">' + soy.$$filterNoAutoescape('Loading\x26hellip;') + '</div></div></nav></div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.sidebarContents.soyTemplateName = 'navlinks.templates.appswitcher.sidebarContents';
}


navlinks.templates.appswitcher.trigger = function(opt_data, opt_ignored) {
  return '<span class="aui-icon aui-icon-small aui-iconfont-appswitcher">' + soy.$$escapeHtml('Linked Applications') + '</span>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.trigger.soyTemplateName = 'navlinks.templates.appswitcher.trigger';
}


navlinks.templates.appswitcher.projectHeaderSection = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-title">' + aui.avatar.avatar({size: 'large', avatarImageUrl: opt_data.avatarUrl, isProject: true, title: opt_data.name}) + '<div class="sidebar-project-name">' + soy.$$escapeHtml(opt_data.name) + '</div></div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.projectHeaderSection.soyTemplateName = 'navlinks.templates.appswitcher.projectHeaderSection';
}


navlinks.templates.appswitcher.cogDropdown = function(opt_data, opt_ignored) {
  var output = '';
  var dropdownList__soy74 = '' + navlinks.templates.appswitcher.dropdownList({list: opt_data.links});
  output += aui.dropdown2.dropdown2({menu: {id: opt_data.id, content: dropdownList__soy74, extraClasses: 'aui-style-default sidebar-customize-section'}, trigger: {showIcon: false, content: '<span class="aui-icon aui-icon-small aui-iconfont-configure"></span>', container: '#app-switcher'}});
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.cogDropdown.soyTemplateName = 'navlinks.templates.appswitcher.cogDropdown';
}


navlinks.templates.appswitcher.dropdownList = function(opt_data, opt_ignored) {
  var output = '<ul class="sidebar-admin-links">';
  var linkList82 = opt_data.list;
  var linkListLen82 = linkList82.length;
  for (var linkIndex82 = 0; linkIndex82 < linkListLen82; linkIndex82++) {
    var linkData82 = linkList82[linkIndex82];
    output += '<li class="nav-link"><a href="' + soy.$$escapeHtml(linkData82.href) + '" title="' + soy.$$escapeHtml(linkData82.title) + '"><span class="nav-link-label">' + soy.$$escapeHtml(linkData82.label) + '</span></a></li>';
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.dropdownList.soyTemplateName = 'navlinks.templates.appswitcher.dropdownList';
}


navlinks.templates.appswitcher.switcher = function(opt_data, opt_ignored) {
  var output = '';
  if (true) {
    if (AJS.DarkFeatures.isEnabled('rotp.sidebar')) {
      var sidebarContents__soy97 = '' + navlinks.templates.appswitcher.sidebarContents(null);
      var triggerContent__soy99 = '' + navlinks.templates.appswitcher.trigger(null);
      output += navlinks.templates.appswitcher.sidebar({sidebar: {id: 'app-switcher', content: sidebarContents__soy97}, trigger: {showIcon: false, content: triggerContent__soy99}});
    } else {
      output += navlinks.templates.appswitcher_old.switcher(null);
    }
  }
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.switcher.soyTemplateName = 'navlinks.templates.appswitcher.switcher';
}


navlinks.templates.appswitcher.sidebar = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.sidebar.id) + '" class="sidebar-trigger app-switcher-trigger" aria-owns="' + soy.$$escapeHtml(opt_data.sidebar.id) + '" aria-haspopup="true" data-is-user-admin="' + soy.$$escapeHtml(false) + '" data-is-sidebar="true" >' + soy.$$filterNoAutoescape(opt_data.trigger.content) + '</a><div id=' + soy.$$escapeHtml(opt_data.sidebar.id) + ' class="app-switcher-sidebar aui-style-default sidebar-offscreen">' + soy.$$filterNoAutoescape(opt_data.sidebar.content) + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.sidebar.soyTemplateName = 'navlinks.templates.appswitcher.sidebar';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher.js' */
(function(e,a){var d="is-user-admin";var c="#app-switcher";a.SideBar=function(f){var g=this;this.$sidebar=null;f=e.extend({sidebarContents:null},f);this.getLinks=function(){return e.ajax({url:AJS.contextPath()+"/rest/menu/latest/appswitcher",cache:false,dataType:"json"}).done(this.updateAppLinks).fail(this.showAppSwitcherError)};this.populateProjectHeader=function(i,h){g.getSidebar().find(".app-switcher-shortcuts .aui-nav-heading").after(navlinks.templates.appswitcher.projectHeaderSection({avatarUrl:h,name:i}))};this.getProjectData=function(){var h=e(".project-shortcut-dialog-trigger"),i=h.data("key"),j=h.data("entity-type");if(h.size()==0||!i||!j){e(".app-switcher-shortcuts").remove();return}var l,k;k=e.ajax({url:AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+i,cache:false,data:{entityType:j},dataType:"json"});l=e.ajax({url:AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+i,cache:false,data:{entityType:j},dataType:"json"});e.when(k,l).then(function(n,m){g.updateProjectShortcuts(n,m,{key:i,entityType:j,name:h.data("name"),avatarUrl:h.find("img").prop("src")})},g.showProjectShortcutsError)};this.getSidebar=function(){if(!this.$sidebar){this.$sidebar=e(f.sidebarContents)}return this.$sidebar};this.addApplicationsCog=function(){e(".app-switcher-applications .aui-nav-heading").before(navlinks.templates.appswitcher.cogDropdown({id:"sidebar-applications-admin-dropdown",links:[{href:AJS.contextPath()+"/plugins/servlet/customize-application-navigator",label:"Customize navigator",title:"Add new entries, hide existing or restrict who sees what"},{href:AJS.contextPath()+"/plugins/servlet/applinks/listApplicationLinks",label:"Manage application links",title:"Link to more Atlassian applications"}]}))};this.addProjectShortcutsCog=function(h,j){var i=[{href:AJS.contextPath()+"/plugins/servlet/custom-content-links-admin?entityKey="+h,label:"Customize shortcuts",title:""}];if(g.entityMappings[j]){i.push({href:g.generateEntityLinksUrl(h,g.entityMappings[j]),label:"Manage product links",title:""})}g.getSidebar().find(".app-switcher-shortcuts .aui-nav-heading").before(navlinks.templates.appswitcher.cogDropdown({id:"sidebar-project-shortcuts-admin-dropdown",links:i}))};this.updateAppLinks=function(h){e(function(){g.getSidebar().find(".app-switcher-applications").html(navlinks.templates.appswitcher.linkSection({title:"Application Links",list:h}));if(g.getSidebar().data(d)){g.addApplicationsCog()}g.bindAnalyticsHandlers(g.getSidebar(),h)})};this.updateProjectShortcuts=function(k,i,j){var l=k[0].shortcuts,h=i[0].shortcuts;g.getSidebar().find(".app-switcher-shortcuts").html(navlinks.templates.appswitcher.linkSection({title:"Shortcuts",list:l.concat(h)}));if(g.getSidebar().data(d)){g.addProjectShortcutsCog(j.key,j.entityType)}g.populateProjectHeader(j.name,j.avatarUrl);g.bindAnalyticsHandlers(g.getSidebar(),data)};this.entityMappings={"confluence.space":"com.atlassian.applinks.api.application.confluence.ConfluenceSpaceEntityType","jira.project":"com.atlassian.applinks.api.application.jira.JiraProjectEntityType","bamboo.project":"com.atlassian.applinks.api.application.bamboo.BambooProjectEntityType","stash.project":"com.atlassian.applinks.api.application.stash.StashProjectEntityType"};this.generateEntityLinksUrl=function(h,i){if(i===g.entityMappings["confluence.space"]){return AJS.contextPath()+"/spaces/listentitylinks.action?typeId="+i+"&key="+h}else{return AJS.contextPath()+"/plugins/servlet/applinks/listEntityLinks/"+i+"/"+h}};this.showAppSwitcherError=function(){e(function(){var h=g.getSidebar();h.find(".app-switcher-applications .app-switcher-loading").replaceWith(navlinks.templates.appswitcher.error());h.off(".appswitcher").on("click.appswitcher",".app-switcher-retry",e.proxy(g.retryLoading,g))})};this.showProjectShortcutsError=function(){e(function(){var h=g.getSidebar();h.find(".app-switcher-shortcuts .app-switcher-loading").replaceWith(navlinks.templates.appswitcher.error());h.off(".appswitcher").on("click.appswitcher",".app-switcher-retry",e.proxy(g.retryLoading,g))})};this.retryLoading=function(h){this.getSidebar().html(navlinks.templates.appswitcher.sidebarContents());this.getLinks();this.getProjectData();h&&h.stopPropagation()};this.bindAnalyticsHandlers=function(h,i){};this.getLinks();e(this.getProjectData);this.toggleSidebar=function(j){var k=g.getSidebar(),i=e("body"),h=e(window.document);if(!i.hasClass("app-switcher-open")){var m=e("#header");k.css("left",-k.width());k.parent("body").length||k.appendTo("body");b({data:k});k.animate({left:0},300);function l(n){var p=n.target&&e(n.target),o=n.keyCode;if(n.originalEvent===j.originalEvent){return}if(p&&!o&&!(p.closest(k).length||p.closest(m).length)&&j.which==1&&!(n.shiftKey||n.ctrlKey||n.metaKey)){g.toggleSidebar()}else{if(o===27){g.toggleSidebar()}}}h.on("click.appSwitcher",l);h.on("keydown.appSwitcher",l);h.on("scroll.appSwitcher",k,b)}else{h.off(".appSwitcher")}i.toggleClass("app-switcher-open")};e("#header").on("click",".app-switcher-trigger",this.toggleSidebar)};function b(h){var f=e(document).scrollTop(),i=e("#header"),g=(i.height()+i.offset().top)-f;if(g>=0){h.data.css({top:g,position:"fixed"})}else{h.data.css({top:0,left:0,position:"fixed"})}}e(function(){if(e(c).data("is-sidebar")===true){new a.SideBar({sidebarContents:c})}})}(jQuery,window.NL=(window.NL||{})));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher_old.js' */
var APPSWITCHER_TRIGGER_CLICK="appswitcher.trigger.click";var APPSWITCHER_DROPDOWN_SHOW="appswitcher.dropdown.show";var APPSWITCHER_DROPDOWN_DISPLAY_ERROR="appswitcher.dropdown.display.error";var APPSWITCHER_APP_LINK_CLICK="appswitcher.app.link.click";var APPSWITCHER_CONFIGURE_LINK_CLICK="appswitcher.configure.link.click";(function(c,f){var b="isAppSuggestionAvailable";var d="isSiteAdminUser";var e="isUserAdmin";var a="#app-switcher";f.AppSwitcher=function(j){var l=AJS.contextPath()+"/plugins/servlet/customize-application-navigator";var k="unified.usermanagement";var m=this;this.$dropdown=null;j=c.extend({dropdownContents:null},j);this.getLinks=function(){return c.ajax({url:AJS.contextPath()+"/rest/menu/latest/appswitcher",cache:false,dataType:"json"}).done(this.updateDropdown).fail(this.showError)};this.getDropdown=function(){if(!this.$dropdown){this.$dropdown=c(j.dropdownContents);this.envData=this.$dropdown.data("environment")}return this.$dropdown};this.updateDropdown=function(n){c(function(){m.getDropdown().html(navlinks.templates.appswitcher_old.applications({apps:n,showAdminLink:m.envData[e],adminLink:l}));m.bindAnalyticsHandlers();if(m.envData[b]===true){m.handleSuggestionApps(n)}})};this.bindAnalyticsHandlers=function(){c(".app-switcher-trigger").on("click",function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_TRIGGER_CLICK})});c("#app-switcher").on("aui-dropdown2-show",function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_DROPDOWN_SHOW})});c("#app-switcher .nav-link").on("click",function(){var p="custom";var q=c(this).find("a");var o=q.attr("href");var n=window.location.hostname;if(o&&o.indexOf("bitbucket.org")>-1){p="bitbucket-cloud"}else{if(o.indexOf(n+"/wiki")>-1){p="confluence"}else{if(o.indexOf(n+"/build")>-1){p="bamboo"}else{if(o.indexOf(n)>-1){p="jira"}}}}AJS.trigger("analyticsEvent",{name:APPSWITCHER_APP_LINK_CLICK,data:{product:p}})});c(".nav-link-edit-wrapper").on("click",function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_CONFIGURE_LINK_CLICK})})};this.isBillingSystemEnabled=function(){return(this.envData[d]===true)&&AJS.DarkFeatures.isEnabled(k)};this.handleSuggestionApps=function(q){var r=_.map(q,function(s){return s.applicationType.toLowerCase()});var o=c("<div id='app-switcher-suggestion-apps' class='aui-dropdown2-section'/>");o.html(navlinks.templates.appswitcher_old.suggestionApps);var p=o.find(".suggestion-apps");var n=false;_.each(g,function(s){if(!_.contains(r,s.appName)){n=true;p.append(navlinks.templates.appswitcher_old.suggestionApp({suggestionApp:s,isBillingSystemEnabled:m.isBillingSystemEnabled()}))}});if(!n){return}c("#app-switcher").append(o);c(".app-discovery-suggestion-app").click(function(){var t=c(this).find("a");var s;if(m.envData[d]===true){s="appswitcher.discovery.siteadmin.select.inproduct."}else{s="appswitcher.discovery.user.select."}s=s+t.attr("id").toLowerCase();AJS.trigger("analytics",{name:s})});c(".app-discovery-suggestion-app").hover(function(){c(this).find("a").removeClass("active").removeClass("aui-dropdown2-active")});c(".app-discovery-cancel-button").click(function(){AJS.trigger("analytics",{name:"appswitcher.discovery.nothanks.button.click"});i(h,"true");o.remove()})};this.showError=function(){c(function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_DROPDOWN_DISPLAY_ERROR});m.getDropdown().html(navlinks.templates.appswitcher_old.error()).off(".appswitcher").on("click.appswitcher",".app-switcher-retry",c.proxy(m.retryLoading,m))})};this.retryLoading=function(n){this.getDropdown().html(navlinks.templates.appswitcher_old.loading());this.getLinks();n&&n.stopPropagation()};this.getLinks()};var h="key-no-thanks";var g=[{appName:"jira",appDesc:"Issue & Project Tracking Software",discoveryUrl:"https://www.atlassian.com/software/jira",billingSystemDiscoveryUrl:"/admin/billing/addapplication"},{appName:"confluence",appDesc:"Collaboration and content sharing",discoveryUrl:"https://www.atlassian.com/software/confluence",billingSystemDiscoveryUrl:"/admin/billing/addapplication?product=confluence.ondemand"},{appName:"bamboo",appDesc:"Continuous integration",discoveryUrl:"https://www.atlassian.com/software/bamboo",billingSystemDiscoveryUrl:"/admin/billing/addapplication?product=bamboo.ondemand"}];var i=function(j,k){c.ajax({url:AJS.contextPath()+"/rest/menu/latest/userdata/",type:"PUT",contentType:"application/json",data:JSON.stringify({key:j,value:k})})};c(function(){if(c(a).data("is-switcher")===true){new f.AppSwitcher({dropdownContents:a})}})}(jQuery,window.NL=(window.NL||{})));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher_old.soy' */
// This file was automatically generated from appswitcher_old.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.appswitcher_old.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher_old == 'undefined') { navlinks.templates.appswitcher_old = {}; }


navlinks.templates.appswitcher_old.applications = function(opt_data, opt_ignored) {
  return '' + navlinks.templates.appswitcher_old.applicationsSection({list: opt_data.apps, listClass: 'nav-links', showDescription: opt_data.showDescription}) + ((opt_data.custom) ? navlinks.templates.appswitcher_old.applicationsSection({list: opt_data.custom, showDescription: opt_data.showDescription}) : '') + ((opt_data.showAdminLink) ? navlinks.templates.appswitcher_old.adminSection(opt_data) : '');
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.applications.soyTemplateName = 'navlinks.templates.appswitcher_old.applications';
}


navlinks.templates.appswitcher_old.applicationsSection = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.list.length > 0) {
    var param19 = '<ul' + ((opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '') + '>';
    var linkList27 = opt_data.list;
    var linkListLen27 = linkList27.length;
    for (var linkIndex27 = 0; linkIndex27 < linkListLen27; linkIndex27++) {
      var linkData27 = linkList27[linkIndex27];
      param19 += navlinks.templates.appswitcher_old.applicationsItem(soy.$$augmentMap(linkData27, {showDescription: opt_data.showDescription}));
    }
    param19 += '</ul>';
    output += aui.dropdown2.section({content: param19});
  }
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.applicationsSection.soyTemplateName = 'navlinks.templates.appswitcher_old.applicationsSection';
}


navlinks.templates.appswitcher_old.applicationsItem = function(opt_data, opt_ignored) {
  return '<li class="nav-link' + ((opt_data.self) ? ' nav-link-local' : '') + '"><a href="' + soy.$$escapeHtml(opt_data.link) + '" class="aui-dropdown2-radio ' + ((opt_data.self) ? 'aui-dropdown2-checked' : '') + '" title="' + soy.$$escapeHtml(opt_data.link) + '"><span class="nav-link-label">' + soy.$$escapeHtml(opt_data.label) + '</span>' + ((opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '') + '</a></li>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.applicationsItem.soyTemplateName = 'navlinks.templates.appswitcher_old.applicationsItem';
}


navlinks.templates.appswitcher_old.adminSection = function(opt_data, opt_ignored) {
  return '' + aui.dropdown2.section({content: '<ul class="nav-links"><li><a class="nav-link-edit-wrapper" href="' + soy.$$escapeHtml(opt_data.adminLink) + '"><span class="nav-link-edit">' + soy.$$filterNoAutoescape('Configure\x26hellip;') + '</span></a></li></ul>'});
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.adminSection.soyTemplateName = 'navlinks.templates.appswitcher_old.adminSection';
}


navlinks.templates.appswitcher_old.error = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-error">' + soy.$$filterNoAutoescape('Something went wrong, please \x3cspan class\x3d\x22app-switcher-retry\x22\x3etry again\x3c/span\x3e.') + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.error.soyTemplateName = 'navlinks.templates.appswitcher_old.error';
}


navlinks.templates.appswitcher_old.loading = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-loading">' + soy.$$filterNoAutoescape('Loading\x26hellip;') + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.loading.soyTemplateName = 'navlinks.templates.appswitcher_old.loading';
}


navlinks.templates.appswitcher_old.trigger = function(opt_data, opt_ignored) {
  return '<span class="aui-icon aui-icon-small aui-iconfont-appswitcher">' + soy.$$escapeHtml('Linked Applications') + '</span>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.trigger.soyTemplateName = 'navlinks.templates.appswitcher_old.trigger';
}


navlinks.templates.appswitcher_old.switcher = function(opt_data, opt_ignored) {
  var output = '';
  if (true) {
    var loadingContent__soy81 = '' + navlinks.templates.appswitcher_old.loading(null);
    var triggerContent__soy83 = '' + navlinks.templates.appswitcher_old.trigger(null);
    output += aui.dropdown2.dropdown2({menu: {id: 'app-switcher', content: loadingContent__soy81, extraClasses: 'aui-style-default', extraAttributes: {'data-environment': {}, 'data-is-switcher': 'true'}}, trigger: {showIcon: false, content: triggerContent__soy83, extraClasses: 'app-switcher-trigger', extraAttributes: {href: '#app-switcher'}}});
  }
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.switcher.soyTemplateName = 'navlinks.templates.appswitcher_old.switcher';
}


navlinks.templates.appswitcher_old.suggestionApp = function(opt_data, opt_ignored) {
  var output = '';
  var href__soy89 = opt_data.isBillingSystemEnabled == true ? opt_data.suggestionApp.billingSystemDiscoveryUrl : opt_data.suggestionApp.discoveryUrl;
  output += '<li class="app-discovery-suggestion-app"><a id="' + soy.$$escapeHtml(opt_data.suggestionApp.appName) + '" href="' + soy.$$escapeHtml(href__soy89) + '" class="app-discovery-link aui-icon-container app-discovery-' + soy.$$escapeHtml(opt_data.suggestionApp.appName) + '-product-icon" title="' + soy.$$escapeHtml(href__soy89) + '" target="_blank"/><div class="app-discovery-small">' + soy.$$escapeHtml(opt_data.suggestionApp.appDesc) + '</div></li>';
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.suggestionApp.soyTemplateName = 'navlinks.templates.appswitcher_old.suggestionApp';
}


navlinks.templates.appswitcher_old.suggestionApps = function(opt_data, opt_ignored) {
  return '<ul class=\'nav-links suggestion-apps\'><li><span class=\'app-discovery-suggest-title nav-link-label\'><h6>' + soy.$$escapeHtml('Try other Atlassian apps') + '</h6></span></li></ul><div class=\'buttons-container app-discovery-suggest-apps-buttons\'><div class=\'buttons\'><button class=\'aui-button aui-button-link app-discovery-cancel-button\' name=\'cancel\' accesskey=\'c\' href=\'#\'>' + soy.$$escapeHtml('Don\x27t show this again') + '</button></div></div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.suggestionApps.soyTemplateName = 'navlinks.templates.appswitcher_old.suggestionApps';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:common-header-resources', location = '/includes/js/header-user-menu.js' */
define("confluence/header-user-menu",["jquery","confluence/meta","underscore"],function(a,c,b){function d(){var b=c.get("current-user-avatar-uri-reference");a("#user-menu-link").find(".aui-avatar-inner img").attr("src",b)}return function(){b.defer(d)}});require("confluence/module-exporter").safeRequire("confluence/header-user-menu",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:general-analytics-bindings', location = '/includes/js/analytics-bindings.js' */
define("confluence/analytics-bindings",["jquery","confluence/analytics-support"],function(b,d){return function(){function e(a,c){b(a).on("click",".view-historical-version-trigger",function(){d.publish("confluence.page.view-historical.from-"+(c||"unknown"))})}function f(a,c){b(a).on("click",".restore-historical-version-trigger",function(){d.publish("confluence.page.restore-historical.from-"+(c||"unknown"))})}function g(a,c){b("#header .aui-header-secondary "+a).on("click",function(){var a=b(this).hasClass("aui-dropdown2-active")?
"expanded":"collapsed";d.publish("confluence.header.dropdown."+c,{state:a})})}e("#page-history-warning","navigation");e("#page-history-container","history");e(".diff-menu","diff");f("#page-history-warning","navigation");f("#page-history-container","history");g("#admin-menu-link","administration");g("#user-menu-link","profile")}});require("confluence/module-exporter").safeRequire("confluence/analytics-bindings",function(b){require("ajs").toInit(b)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-search-ui-plugin:search-ui-client-templates', location = 'soy/search-ui-client-templates.soy' */
// This file was automatically generated from search-ui-client-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.SearchUI.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.SearchUI == 'undefined') { Confluence.Templates.SearchUI = {}; }


Confluence.Templates.SearchUI.helpUrl = function(opt_data, opt_ignored) {
  return '' + soy.$$escapeHtml("https:\/\/docs.atlassian.com\/confluence\/docs-75\/Search");
};
if (goog.DEBUG) {
  Confluence.Templates.SearchUI.helpUrl.soyTemplateName = 'Confluence.Templates.SearchUI.helpUrl';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-search-ui-plugin:confluence-search-ui-plugin-resources', location = '/js/confluence-search-ui-analytics-support.js' */
'use strict';

/**
 * Utility functions for publishing new search ui analytics
 * @module confluence/searchui/analytics-support
 */
define('confluence/search-ui/analytics-support', ['window', 'document', 'confluence/api/event', 'confluence/api/url'], function (window, document, eventApi, url) {
    "use strict";

    var SEARCH_UI_LEAVE_CONTENT_FROM_SEARCH_RESULT = 'confluence-search-ui-leave-content-from-new-search';
    var SEARCH_UI_EDIT_CONTENT_FROM_SEARCH_RESULT = 'confluence-search-ui-edit-content-from-new-search';
    /**
     * trigger analytic
     * @since 6.13.0
     * @public
     * @param name the analytic name
     * @param data the analytic data
     */
    function triggerAnalytic(name, data) {
        data = data || {};
        eventApi.trigger('analytics', { name: name, data: data });
    }

    /**
     * @param urlString
     * @returns {*} return array of searchId
     */
    function extractAnalyticsData(urlString) {
        var params = url.parse(urlString).queryParams;
        return params && params.searchId ? params.searchId : [];
    }

    /**
     * trigger period analytic event when beforeunload event happen
     * @param searchId searchId
     * @param period the period in millisecond
     */
    function triggerPeriodEventViewContentFromSearch(searchId, period) {
        triggerAnalytic(SEARCH_UI_LEAVE_CONTENT_FROM_SEARCH_RESULT, { searchId: searchId, period: period });
    }

    /**
     * trigger period analytic event when enter editor init.rte
     * @param searchId searchId
     * @param period the period in millisecond
     */
    function triggerPeriodEvenEditContentFromSearch(searchId, period) {
        triggerAnalytic(SEARCH_UI_EDIT_CONTENT_FROM_SEARCH_RESULT, { searchId: searchId, period: period });
    }

    /**
     * Remove
     * @param urlString
     * @returns {*}
     */
    function removeSearchIdUrl(urlString) {
        var parsedUrl = url.parse(urlString);
        delete parsedUrl.queryParams.searchId;
        return url.format(parsedUrl);
    }

    /**
     * Clean analytic parameter
     */
    function replaceStateAfterCleaningUpAnalyticsParameters() {
        var cleanUrl = removeSearchIdUrl(document.URL);
        if (document.URL !== cleanUrl) {
            window.history.replaceState(null, '', cleanUrl);
        }
    }

    /**
     * Init analytic for period
     * @since 6.13
     * @public
     */
    function initAnalytic() {
        var analyticsData = extractAnalyticsData(document.URL);
        var searchId = analyticsData[0];
        if (!searchId) {
            return;
        }

        var currentDate = new Date();
        window.addEventListener('beforeunload', function () {
            var currentTriggerTime = new Date();
            var period = currentTriggerTime.getTime() - currentDate.getTime();
            triggerPeriodEventViewContentFromSearch(searchId, period);
        });
        eventApi.bind('init.rte', function () {
            var currentTriggerTime = new Date();
            var period = currentTriggerTime.getTime() - currentDate.getTime();
            triggerPeriodEvenEditContentFromSearch(searchId, period);
        });
        // Check if browser supports HTML5 replaceState()
        if (window.history && window.history.replaceState) {
            replaceStateAfterCleaningUpAnalyticsParameters();
        }
    }

    return {
        init: initAnalytic
    };
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-search-ui-plugin:confluence-search-ui-plugin-resources', location = '/js/confluence-search-ui-plugin.js' */
require(['ajs', 'wrm', 'document', 'confluence/api/logger', 'confluence/meta', 'confluence/api/constants', 'confluence/search-ui/analytics-support'],
    function (ajs, wrm, document, logger, meta, constants, analyticsSupport) {
        const events = ['click', 'focus'];
        var searchUI;
        var searchInput;
        var spinner;
        var tooltip;
        var isTooltipShown = false;
        var isLoading = false;

        function toggleIcon() {
            searchUI.classList.toggle("hide-icon");
        }

        function startLoading() {
            isLoading = true;
            toggleIcon();
            spinner.style.display = 'block';
        }

        function stopLoading() {
            isLoading = false;
            toggleIcon();
            spinner.style.display = 'none';
        }

        function unregisterHandlers() {
            events.forEach(function (event) {
                searchInput.removeEventListener(event, lazyLoad);
            });
        }

        function showTooltip() {
            if (!isTooltipShown) {
                tooltip.style.display = 'block';
                isTooltipShown = true;
            }
        }

        function hideTooltip() {
            if (isTooltipShown) {
                tooltip.style.display = 'none';
                isTooltipShown = false;
            }
        }

        function handleClickAndFocusEvent(event) {
            showTooltip();
            event.stopPropagation();
        }

        function handleInputEvent(event) {
            if (event.target.value) {
                showTooltip();
            } else {
                hideTooltip();
            }
        }

        function handleKeyDownEvent(event) {
            const ENTER_KEY_CODE = 13;
            if (event.keyCode === ENTER_KEY_CODE) {
                const searchTerm = event.target.value;
                const cql = searchTerm ? '?cql=&queryString=' + encodeURIComponent(searchTerm) : '';
                window.location.href = constants.CONTEXT_PATH + '/dosearchsite.action' + cql;
            }
        }

        function handleDocumentClick(event) {
            if (searchUI.contains(event.target)) {
                showTooltip();
            } else {
                hideTooltip();
            }
        }

        function lazyLoad() {
            if (isLoading) return;

            startLoading();
            wrm
                .require(['wrc!confluence-search-ui-plugin-main'])
                .done(function () {
                    require(['confluence-search-ui-plugin-main'], function (SearchUI) {
                        SearchUI.init();
                        unregisterHandlers();
                        stopLoading();
                    });
                })
                .fail(function () {
                    stopLoading();
                    logger.error('fail to load confluence-search-ui-plugin-main');
                });
        }

        ajs.toInit(function () {
            searchUI = document.getElementById('search-ui');
            // login screen doesn't have navigation search
            if (!searchUI) {
                logger.log('no search-ui element found');
                return;
            }

            analyticsSupport.init();
            searchInput = searchUI.querySelector('#quick-search-query');
            spinner = searchUI.querySelector('aui-spinner');
            tooltip = searchUI.querySelector('[role=alert]');

            if (!meta.get('global-settings-quick-search-enabled')) {
                searchInput.addEventListener('keydown', handleKeyDownEvent);
                searchInput.addEventListener('input', handleInputEvent);

                events.forEach(function (event) {
                    searchInput.addEventListener(event, handleClickAndFocusEvent);
                });

                document.addEventListener('click', handleDocumentClick);
            } else {
                events.forEach(function (event) {
                    searchInput.addEventListener(event, lazyLoad);
                });
            }
        });
    });

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources', location = '/soy/dialog-wizard.soy' */
// This file was automatically generated from dialog-wizard.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.DialogWizard.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.DialogWizard == 'undefined') { Confluence.Templates.DialogWizard = {}; }


Confluence.Templates.DialogWizard.pageContainer = function(opt_data, opt_ignored) {
  return '<div class="dialog-wizard-page-wrapper"><div class="dialog-wizard-page-main"></div><div class="dialog-wizard-page-description">' + ((opt_data.descriptionHeaderLink && opt_data.descriptionHeader) ? '<h3><a href=\'' + soy.$$escapeHtml(opt_data.descriptionHeaderLink) + '\' target=\'_blank\'>' + soy.$$escapeHtml(opt_data.descriptionHeader) + '</a></h3>' : (opt_data.descriptionHeader) ? '<h3>' + soy.$$escapeHtml(opt_data.descriptionHeader) + '</h3>' : '') + '<p>' + soy.$$escapeHtml(opt_data.descriptionContent) + '</p></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.DialogWizard.pageContainer.soyTemplateName = 'Confluence.Templates.DialogWizard.pageContainer';
}


Confluence.Templates.DialogWizard.waitIcon = function(opt_data, opt_ignored) {
  return '<img class="wait-icon" src="' + soy.$$escapeHtml("/confluence") + '/images/icons/wait.gif">';
};
if (goog.DEBUG) {
  Confluence.Templates.DialogWizard.waitIcon.soyTemplateName = 'Confluence.Templates.DialogWizard.waitIcon';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources', location = '/js/dialog-wizard.js' */
(function($){var FormStateControl=require("confluence/form-state-control");function findNextPageId(pageId,pages){var thisPageIdIndex=-1;_.each(pages,function(element,index){if(element.id==pageId){thisPageIdIndex=index;return}});return pages[thisPageIdIndex+1].id}Confluence.DialogWizard=function(dialog,finalAction){function newPage(config,pageId,soyRenderContext,wizardData,wizard){var wizardPage=_.find(config.wizard.pages,function(page){return page.id==pageId});wizard.trigger("pre-render."+pageId,{soyRenderContext:soyRenderContext,wizardData:wizardData});try{var soyTemplateFunction=eval(wizardPage.templateKey);var $soyRender=$(soyTemplateFunction(soyRenderContext))}catch(e){throw Error("wizard points to a non-existent Soy template '"+wizardPage.templateKey+"'. Check your web-resources or server logs.")}$soyRender.find("a, area, button, input, object, select, textarea").attr("tabindex","10");var $panelContent;if(wizardPage.descriptionContent){$panelContent=$(Confluence.Templates.DialogWizard.pageContainer({descriptionHeaderLink:wizardPage.descriptionHeaderLink,descriptionHeader:wizardPage.descriptionHeader,descriptionContent:wizardPage.descriptionContent}));$panelContent.addClass("with-description").find(".dialog-wizard-page-main").append($soyRender)}else{$panelContent=$soyRender}var dialogPageId=pageId;if(dialog.id=="create-dialog"){dialogPageId="create-dialog-"+pageId}var page=dialog.addPage(dialogPageId).page[dialog.curpage];page.addHeader(wizardPage.title).addPanel("SinglePanel",$panelContent,"singlePanel");page.element.find("form").submit(function(){return false});if(wizardPage.descriptionContent){page.element.find(".dialog-panel-body").css({padding:0})}Confluence.Binder.autocompleteMultiUser($soyRender);Confluence.Binder.placeholder($soyRender);function nextCallback(ev){$soyRender.find(".placeholded").val("");var pageData={};var formArray=$soyRender.parent().find("form").serializeArray();_.each(formArray,function(item){pageData[item.name]=item.value});var e=$.Event("submit."+pageId);var state={$container:$soyRender,wizardData:wizardData,pageData:pageData};var validationDeferred=$.Deferred();validationDeferred.done(function(){wizardData.pages[pageId]=pageData;var nextPageId;if(state.nextPageId){nextPageId=state.nextPageId}else{nextPageId=!wizardPage.last&&findNextPageId(pageId,config.wizard.pages)}if(!state.nextPageId&&wizardPage.last){doFinalAction(ev,state,wizardData,finalAction,wizard);FormStateControl.disableElement(dialog.popup.element.find(":input,a").filter(":visible"));buttons.prepend(Confluence.Templates.DialogWizard.waitIcon())}else{newPage(config,nextPageId,soyRenderContext,wizardData,wizard)}});validationDeferred.fail(function(){AJS.log("dialog aborted by on-submit callback on page: "+pageId)});state.validationDeferred=validationDeferred;wizard.trigger(e,state);if(state.async){return}if(e.isDefaultPrevented()){validationDeferred.reject();return}validationDeferred.resolve()}var buttons=dialog.addFullButtonPanel(page,nextCallback,null,wizardPage.last);buttons.find(".button-panel-back").click(function(){delete wizardData.pages[pageId]});buttons.find(".aui-button-primary").attr("tabindex","10");$soyRender.find("input, select, textarea").eq(0).focus();wizard.trigger("post-render."+pageId,{$container:$soyRender,wizardData:wizardData})}function doFinalAction(ev,state,wizardData,finalAction,wizard){if(state.finalUrl){if(ev.type==="click"&&ev.which===2){window.open(state.finalUrl)}else{window.location=state.finalUrl}}else{_.each(wizardData.pages,function(pageData){_.extend(wizardData,pageData)});delete wizardData.pages;finalAction(ev,wizardData,null,wizard)}return{success:function(callback){callback()}}}return{newPage:newPage,doFinalAction:doFinalAction}}})(AJS.$);
}catch(e){WRMCB(e)};