WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.editor-loader:background-loading-editor', location = 'jscripts/editor-loader.js' */
define("confluence-editor-loader/editor-loader","jquery confluence/legacy wrm/context-path confluence/dark-features confluence/api/logger confluence/meta confluence/template-renderer confluence/aui-overrides ajs wrm window".split(" "),function(d,h,n,o,e,i,p,q,f,r,s){var b,c={_listening:false,_queuedHandlers:[],_watchHandler:function(){h.Editor.UI.toggleWatchPage(false)},_unwatchHandler:function(){h.Editor.UI.toggleWatchPage(true)},_createQueueAdder:function(a){return function(){c._listening&&c._queuedHandlers.push(a)}},
bind:function(){f.bind("watchpage.pageoperation",this._createQueueAdder(this._watchHandler));f.bind("unwatchpage.pageoperation",this._createQueueAdder(this._unwatchHandler))},setListening:function(a){this._listening=a},applyHandlers:function(){for(var a=this._queuedHandlers.pop();a;){a();a=this._queuedHandlers.pop()}}};c.setListening(true);c.bind();var l=function(){var a=d("#editor-preload-container");a.length||(a=d('<div id="editor-preload-container" style="display: none;"></div>'));return a},g,
m={getPreloadContainer:l,getEditorPreloadMarkup:function(){if(g)return g;h.debugTime("confluence.editor.preload");var a=n()+"/plugins/editor-loader/editor.action";return g=d.get(a,{parentPageId:i.get("parent-page-id"),pageId:i.get("page-id"),spaceKey:i.get("space-key"),atl_after_login_redirect:s.location.pathname,timeout:m.loadingTimeout})},resourcesLoaded:function(){return b&&b.state()==="resolved"},loadingTimeout:12E3,isEditorActive:function(){var a=d("#editor-preload-container");return a.length&&
a.is(":visible")},load:function(a,c){function g(){var a=[o.isEnabled("frontend.editor.v4")?"wrc!editor-v4":"wrc!editor-v3","wrc!editor","wrc!macro-browser","wrc!fullpage-editor"];return r.require(a).fail(function(a){e.logError("Failed to load editor resources",a)})}var k;if(b){b.fail(function(){c?c.call(this,arguments):e.log("EditorLoader: loadGuard - previous load failed.")});b.done(function(){a?b.done(function(){setTimeout(a,0)}):e.log("EditorLoader: loadGuard - editor is already loaded.")});k=
true}else k=void 0;if(!k){b=new d.Deferred;a&&b.done(a);c&&b.fail(c);var f=l();d("body").append(f);var j=new d.Deferred;i.get("page-id")?this.getEditorPreloadMarkup().always(function(a,b,c){if(b==="success"||b==="notmodified"){f.append(a);a=p.renderTemplate("dynamic-editor-metadata");d("head").append(a);q.metaToParams();e.debug("EditorLoader: Finished loading the editor template.");j.resolve();h.debugTimeEnd("confluence.editor.preload")}else j.reject("Error loading the Editor template: "+c.status+
" - "+c.statusText)}):j.resolve();j.pipe(g).done(function(){e.debug("EditorLoader: Finished loading the editor.");b.resolve()}).fail(function(){b.reject(arguments)})}},getEditorForm:function(){if(this.isEditorActive()){var a=require("tinymce");return d(a.activeEditor.getContainer()).closest("form")}return null}};return m});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor-loader/editor-loader","AJS.Confluence.EditorLoader");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.editor-loader:background-loading-editor', location = 'jscripts/block-and-buffer-keys.js' */
define("confluence-editor-loader/block-and-buffer-keys",[],function(){return{block:function(e){var d=[],f=function(a){a.preventDefault();a.stopPropagation();var c=a.which;c||(c=a.charCode?a.charCode:a.keyCode);13!==c&&48>c||d.push(c);a.preventDefault()};e.keypress(f);return function(){e.unbind("keypress",f);for(var a="",c=0;c<d.length;c++){var b;b=d[c];65535<b?(b-=65536,b=String.fromCharCode(55296+(b>>10),56320+(b&1023))):b=String.fromCharCode(b);a+=b}return a}}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor-loader/block-and-buffer-keys","AJS.Confluence.BlockAndBuffer");
}catch(e){WRMCB(e)};