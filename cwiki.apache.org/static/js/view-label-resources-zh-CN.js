WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-labels:view-label-resources', location = 'com/atlassian/confluence/plugins/labels/pages/view-label.js' */
define("confluence-labels/labels/pages/view-label",["jquery"],function(a){return function(){a("#view-all-content-with-label").click(function(){return!1})}});require("confluence/module-exporter").safeRequire("confluence-labels/labels/pages/view-label",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};