WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:rss-feed-builder', location = '/includes/js/advancedrss.js' */
define("confluence/advancedrss",["jquery"],function(a){return function(){var b=a("#advanced_opt_link");b.click(function(){var c=a("#advanced_opt");c.is(":visible")?(c.fadeOut(),b.show()):(c.fadeIn(),b.hide());return!1})}});require("confluence/module-exporter").safeRequire("confluence/advancedrss",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};