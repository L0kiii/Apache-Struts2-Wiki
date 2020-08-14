WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:signup', location = '/includes/js/signup.js' */
define("confluence/signup",["ajs","jquery"],function(c,d){return function(){var b,e,c=function(){var a=e.val().match(/[^@]+/);return a?a[0].replace(/[\\,+<>'"\s]/g,"").toLowerCase():""},g=function(){if(!b.data("custom")){var a=c();b.val(a)}},h=function(){var a=b[0];if(a.setSelectionRange){var c=b.val().length;a.setSelectionRange(0,c)}else a.createTextRange&&(a=a.createTextRange(),a.execCommand("SelectAll"),a.select())},f=function(){var a=b.val();a&&a!==c()?b.data("custom",a):b.removeData("custom")};
return{load:function(){b=d("#username");e=d("#email");f();return this},bindEvents:function(){e.bind("keyup paste blur",g);b.bind("blur",f);b.bind("focus",h);d('form[name="signupform"]').bind("reset",function(){b.removeData("custom")});return this}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/signup","Confluence.SignUpForm",function(c){require("ajs").toInit(function(){c().load().bindEvents()})});
}catch(e){WRMCB(e)};