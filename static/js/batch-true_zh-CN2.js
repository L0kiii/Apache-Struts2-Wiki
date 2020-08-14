WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipchat-presence-resources', location = 'presence/presence.soy' */
// This file was automatically generated from presence.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.HipChat.Presence.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.HipChat == 'undefined') { Confluence.Templates.HipChat = {}; }
if (typeof Confluence.Templates.HipChat.Presence == 'undefined') { Confluence.Templates.HipChat.Presence = {}; }


Confluence.Templates.HipChat.Presence.badge = function(opt_data, opt_ignored) {
  return '<span class="hipchat-status aui-icon aui-icon-small hipchat-icon-' + soy.$$escapeHtml(opt_data.statusCode) + '" data-status="' + soy.$$escapeHtml(opt_data.statusCode) + '" title="' + soy.$$escapeHtml(opt_data.statusMessage) + '">' + soy.$$escapeHtml(opt_data.statusMessage) + '</span>';
};
if (goog.DEBUG) {
  Confluence.Templates.HipChat.Presence.badge.soyTemplateName = 'Confluence.Templates.HipChat.Presence.badge';
}


Confluence.Templates.HipChat.Presence.chatBar = function(opt_data, opt_ignored) {
  return '<div class="hipchat-chatbar aui-buttons"><button class="aui-button hipchat-chat" title="' + soy.$$escapeHtml('Unable to start chat as this user is not known in Hipchat.') + '" aria-disabled="true"><span><span class="aui-icon aui-icon-small hipchat-icon-chat">' + soy.$$escapeHtml('Chat') + '</span></span></button><button class="aui-button hipchat-voice" title="' + soy.$$escapeHtml('Unable to start voice calls as this user is not known in Hipchat.') + '" aria-disabled="true" data-call-type="voice"><span><span class="aui-icon aui-icon-small hipchat-icon-voice">' + soy.$$escapeHtml('Voice') + '</span></span></button><button class="aui-button hipchat-video" title="' + soy.$$escapeHtml('Unable to start video calls as this user is not known in Hipchat.') + '" aria-disabled="true" data-call-type="video"><span><span class="aui-icon aui-icon-small hipchat-icon-video">' + soy.$$escapeHtml('Video') + '</span></span></button></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.HipChat.Presence.chatBar.soyTemplateName = 'Confluence.Templates.HipChat.Presence.chatBar';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipchat-presence-resources', location = 'presence/presence.js' */
(function(d){var f=AJS.DarkFeatures.isEnabled("hipchat.chatbar");var a={hipChatCall:function(g,h){if(!g){return}return"hipchat://hipchat.com/user/"+encodeURI(g)+(h?"?call="+encodeURI(h):"")}};var c=AJS.contextPath()+"/rest/hipchat/integration/1.0/users/";var b=function(g){return function(j){var i=d(this);var h=i.attr("data-user-id");var k=i.attr("data-caller-id");if(!k){return}var l=i.attr("data-call-type");if(!g&&l){return}window.location.replace(a.hipChatCall(k,l));AJS.trigger("analyticsEvent",{name:"hipchat.chatbar."+(l||"chat"),data:{userId:h}});j.preventDefault()}};var e=function(g){return function(i){if(!i||!i.presence){return}var j=i.userId;var h=i.hipChatUserId;var k;var m;var l=d(g).find(".hipchat-chatbar .aui-button");l.attr("data-user-id",j);l.attr("data-caller-id",h);l.click(b(i.presence.is_online));if(i.presence.is_online){if(i.presence.show==="xa"||i.presence.show==="away"){k="away";m="Away"}else{if(i.presence.show==="dnd"){k="dnd";m="Do not disturb"}else{k="available";m="Available"}}l.filter(".hipchat-chat").attr("title","Start chat with this user in Hipchat.").removeAttr("aria-disabled");l.filter(".hipchat-voice").attr("title","Start a voice call with this user in Hipchat.").removeAttr("aria-disabled");l.filter(".hipchat-video").attr("title","Start a video call with this user in Hipchat.").removeAttr("aria-disabled")}else{k="offline";m="Offline";l.filter(".hipchat-chat").attr("title","Start chat with this user in Hipchat.").removeAttr("aria-disabled");l.filter(".hipchat-voice").attr("title","Unable to start voice calls as this user is not known in Hipchat.");l.filter(".hipchat-video").attr("title","Unable to start video calls as this user is not known in Hipchat.")}if(i.presence.status){m+=" ("+i.presence.status+")"}d("div.values",g).append(Confluence.Templates.HipChat.Presence.badge({statusCode:k,statusMessage:m}));AJS.trigger("analyticsEvent",{name:"hipchat.presence.user.found",data:{userId:i.userId}})}};d(document).bind("ajaxComplete",function(i,g,h){if(/userinfopopup\.action/.test(h.url)){d.each(d(".vcard"),function(n,p){var m=d(p);var k=m.closest(".contents");var l=k.find(".profile-macro").first();var o=k.find(".actions").first();if(l.hasClass("hipchat-status-applied")||!o.length){return}l.addClass("hipchat-status-applied");if(f){o.addClass("hipchat-chatbar-support");o.append(Confluence.Templates.HipChat.Presence.chatBar());o.find(".ajs-menu-bar").addClass("aui-buttons");o.find(".ajs-button > a").addClass("aui-button");o.find(".user-popup-more").addClass("aui-button");o.find(".user-popup-more > span > span").addClass("aui-icon aui-icon-small aui-iconfont-more").text("")}var q=d(".userLogoLink",m).attr("data-username");var j=c+encodeURIComponent(q);d.getJSON(j,e(k)).fail(function(t){if(t.status===404){try{var r=JSON.parse(t.responseText);if(r.userId){AJS.trigger("analyticsEvent",{name:"hipchat.presence.user.unknown",data:{userId:r.userId}})}}catch(s){}}})})}})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.5b7fdbd666', location = 'aui.chunk.0bce7a740d241a802120--042bad697916b10ec4e5.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.splitchunk.5b7fdbd666"],{fVKi:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(r("JFi+"));n.default=function(t){function n(n){return u(function(){return t.hasAttribute(n)},n+" wasn't defined")}function r(r){if(!n(r))return!1;var e=t.getAttribute(r);return u(function(){return document.getElementById(e)},'an element with id set to "'+e+'" was not found')}function u(n,r){return!!n()||(t?e.error(r,t):e.error(r),!1)}return{attributeExists:n,refersTo:r,satisfiesRules:u,ariaControls:function(){return r("aria-controls")},ariaOwns:function(){return r("aria-owns")}}},t.exports=n.default}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.8a641c03a4', location = 'aui.chunk.a489803c7ae78857ce6b--c120e25ca7023b0ad30c.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.splitchunk.8a641c03a4"],{kdZR:function(t,e,u){"use strict";function n(t){return null!==t}function l(t,e,u){u?t.setAttribute(e,""):t.removeAttribute(e)}function i(t,e){var u=function(t){return t.toLowerCase()===e.toLowerCase()},n=null===e,l=!n&&!t.values.filter(u).length;return n?t.hasOwnProperty("missingDefault")?t.missingDefault:null:l?t.hasOwnProperty("invalidDefault")?t.invalidDefault:t.hasOwnProperty("missingDefault")?t.missingDefault:null:t.values.length?t.values.filter(u)[0]:null}function a(t,e,u){t.setAttribute(e.attribute,u)}Object.defineProperty(e,"__esModule",{value:!0}),e.computeBooleanValue=n,e.setBooleanAttribute=l,e.computeEnumValue=i,e.setEnumAttribute=a,e.default={computeBooleanValue:n,setBooleanAttribute:l,computeEnumValue:i,setEnumAttribute:a}}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.e6408ec84b', location = 'aui.chunk.258be89123b8852587ad--7607c431a215b2574ee6.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.splitchunk.e6408ec84b"],{OEua:function(e,t,u){"use strict";var n,i;Object.defineProperty(t,"__esModule",{value:!0});var a=0;function d(e){if(n=a+++"",i=e?e+n:"aui-uid-"+n,document.getElementById(i)){if(i=i+"-"+(new Date).getTime(),document.getElementById(i))throw new Error('Timestamped fallback ID "'+i+'" exists.');return i}return i}(0,function(e){return e&&e.__esModule?e:{default:e}}(u("KloK")).default)("id",d),t.default=d,e.exports=t.default}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.d727dd207f', location = 'aui.chunk.10cebad55090d670d7cc--d338139d594464edd443.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.splitchunk.d727dd207f"],{VtiI:function(i,n,s){"use strict";s("FStl"),s("Q0fs"),s("nqD9"),s("NjKm")}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.543254b237', location = 'aui.chunk.6ff2ffb94d3aa983eaf4--5bf0288117d4302e487b.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.splitchunk.543254b237"],{P3bb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=m(n("+x/D")),u=m(n("vbuG")),o=m(n("TmQU")),a=m(n("kdZR")),s=m(n("fVKi")),r=m(n("KloK")),l=n("jEnx"),d=m(l),f=m(n("4dFR")),c=m(n("TK3y")),p=n("/soZ"),g=n("I7um");function m(e){return e&&e.__esModule?e:{default:e}}function v(e,t){(0,p.doIfTrigger)(e,function(n){n.setAttribute("aria-expanded","false"),t.setAttribute("aria-expanded",e.open)}),(0,p.setTrigger)(e,t)}function h(e,t){e._auiAlignment?(e._auiAlignment.changeTarget(t),e._auiAlignment.enable(),e._auiAlignment.scheduleUpdate()):(e._auiAlignment=new u.default(e,t,{overflowContainer:"viewport"===e.getAttribute("contained-by")?"viewport":"window"}),e._auiAlignment.enable())}var b={click:function(e,t){e.open&&!(0,d.default)(e).isPersistent()?e.open=!1:(v(e,t.currentTarget),e.open=!0)},mouseenter:function(e,t){var n=t.currentTarget;n&&(v(e,n),h(e,n)),e.open||(e.open=!0),e._clearMouseleaveTimeout&&e._clearMouseleaveTimeout()},mouseleave:function(e){if(e.open&&!(0,d.default)(e).isPersistent()){e._clearMouseleaveTimeout&&e._clearMouseleaveTimeout();var t=setTimeout(function(){(0,c.default)(e).get("mouse-inside")||(e.open=!1)},1e3);e._clearMouseleaveTimeout=function(){clearTimeout(t),e._clearMouseleaveTimeout=null}}},focus:function(e,t){e.open||(v(e,t.currentTarget),e.open=!0)},blur:function(e){!(0,d.default)(e).isPersistent()&&e.open&&(e.open=!1)}};function A(e){var t=e.target;(0,c.default)(t).set("mouse-inside",!0),t.message({type:"mouseenter"})}function T(e){var t=e.target;(0,c.default)(t).set("mouse-inside",!1),t.message({type:"mouseleave"})}function _(e){(0,c.default)(e).set("mouse-inside",void 0),e.removeEventListener("mouseenter",A),e.removeEventListener("mouseleave",T),"hover"===e.respondsTo&&((0,c.default)(e).set("mouse-inside",!1),e.addEventListener("mouseenter",A),e.addEventListener("mouseleave",T))}function w(e,t){return e+".nested-layer-"+t}function y(e){!function(e){(0,i.default)(document).off(w("aui-layer-hide",e)).off(w("aui-layer-show",e)).off(w("select2-opening",e)).off(w("select2-close",e))}(e.id),function(e){e._auiAlignment&&e._auiAlignment.disable()}(e)}function E(e){(0,d.default)(e).show(),(0,d.default)(e).isVisible()?((0,i.default)(e).on(l.EVENT_PREFIX+"-hide",function(){return y(e)}),function(e){var t=(0,i.default)(e),n=e.id,u=function(e){return t.find((0,p.getTrigger)(e.target)).length<1};(0,i.default)(document).on(w("aui-layer-show",n),function(e){u(e)||t.attr("persistent","")}).on(w("aui-layer-hide",n),function(e){u(e)||t.removeAttr("persistent")}).on(w("select2-opening",n),function(){t.attr("persistent","")}).on(w("select2-close",n),function(){t.removeAttr("persistent")})}(e),(0,p.doIfTrigger)(e,function(t){h(e,t),t.setAttribute("aria-expanded","true")})):e.open=!1}function V(e){var t=!e.hasAttribute("aria-hidden"),n=e.hasAttribute("open");(t||e.open!==n)&&(n?((0,c.default)(e).set("is-processing-show",!0),E(e),(0,c.default)(e).set("is-processing-show",!1)):function(e){(0,d.default)(e).hide(),(0,d.default)(e).isVisible()?e.open=!0:(y(e),(0,p.doIfTrigger)(e,function(e){e.setAttribute("aria-expanded","false")})),(0,p.setTrigger)(e,null)}(e))}var x={attribute:"responds-to",values:["toggle","hover"],missingDefault:"toggle",invalidDefault:"toggle"},I=(0,f.default)("aui-inline-dialog",{prototype:{get open(){return(0,d.default)(this).isVisible()},set open(e){a.default.setBooleanAttribute(this,"open",e),V(this)},get persistent(){return this.hasAttribute("persistent")},set persistent(e){a.default.setBooleanAttribute(this,"persistent",e)},get respondsTo(){var e=x.attribute;return a.default.computeEnumValue(x,this.getAttribute(e))},set respondsTo(e){var t=this.respondsTo;a.default.setEnumAttribute(this,x,e),t!==this.respondsTo&&_(this)},message:function(e){return function(e,t){var n={toggle:["click"],hover:["mouseenter","mouseleave","focus","blur"]}[e.respondsTo];n&&n.indexOf(t.type)>-1&&b[t.type](e,t)}(this,e),this}},created:function(e){(0,c.default)(e).set("is-processing-show",!1)},attributes:{"aria-hidden":function(e,t){"true"===t.newValue&&(0,p.doIfTrigger)(e,function(e){e.setAttribute("aria-expanded","false")}),a.default.setBooleanAttribute(e,"open","false"===t.newValue)},open:function(e){document.body.contains(e)&&V(e)},"responds-to":function(e,t){a.default.computeEnumValue(x,t.oldValue)!==a.default.computeEnumValue(x,t.newValue)&&_(e)}},attached:function(e){(0,s.default)(e).attributeExists("id"),e.hasAttribute("open")&&(0,c.default)(e).get("is-processing-show")||V(e),_(e),(0,p.doIfTrigger)(e,function(t){t.setAttribute("aria-expanded",e.open)}),(0,p.forEachTrigger)(e,function(e){e.setAttribute("aria-haspopup","true")})},detached:function(e){(0,g.ifGone)(e).then(function(){!function(e){e._auiAlignment&&(e._auiAlignment.destroy(),delete e._auiAlignment)}(e),(0,p.forEachTrigger)(e,function(e){e.removeAttribute("aria-haspopup"),e.removeAttribute("aria-expanded")})})},template:function(e){var t=(0,i.default)('<div class="aui-inline-dialog-contents"></div>').append(e.childNodes);(0,i.default)(e).addClass("aui-layer").html(t)}});(0,o.default)("aui/inline-dialog2",I),(0,r.default)("InlineDialog2",I),t.default=I,e.exports=t.default},Rvtc:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InlineDialogEl=void 0;var i=n("P3bb");Object.defineProperty(t,"InlineDialogEl",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(i).default}}),n("AehQ"),n("THZ5"),n("VtiI")}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.036a05e5ff', location = 'aui.chunk.fe2aa6b961c51bfa53ae--2f924c293d2003883ef7.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.splitchunk.036a05e5ff"],{"C/C5":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NavigationEl=void 0;var i=o(a("HH5i")),n=o(a("+x/D")),r=o(a("4dFR")),l=o(a("KloK")),s=o(a("6RZY"));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){if(this.$el=(0,n.default)(e).closest(".aui-nav"),this.$el.length>1)return this.$el.map(function(e,t){return new u(t)})[0];if(this.$el.data("aui-navigation"))return this.$el.data("aui-navigation");this.$el.data("aui-navigation",this),this.$treeParent=this.$el.parent("li[aria-expanded]"),this.$subtreeToggleIcon=this.$treeParent.children(".aui-nav-subtree-toggle").children("span.aui-icon"),this.hideMoreItems(),this.$el.children("li:has(.aui-nav-selected)").addClass("aui-nav-child-selected");var t=this.$el.children(".aui-nav-selected");return t.parents(".aui-nav > [aria-expanded=false]").add(t.filter("[aria-expanded=false]")).each(function(){d((0,n.default)(this).children(".aui-nav")).expand()}),this.$el.find("> li[aria-expanded] > .aui-nav-subtree-toggle").on("click",function(){d((0,n.default)(this).siblings(".aui-nav")).toggle()}),this}u.prototype.isNested=function(){return 1===this.$treeParent.length},u.prototype.isCollapsed=function(){return"false"===this.$treeParent.attr("aria-expanded")},u.prototype.expand=function(){return this.$treeParent.attr("aria-expanded","true"),this.$subtreeToggleIcon.removeClass("aui-iconfont-collapsed").addClass("aui-iconfont-expanded"),this.hideMoreItems(),this},u.prototype.collapse=function(){return this.$treeParent.attr("aria-expanded","false"),this.$subtreeToggleIcon.removeClass("aui-iconfont-expanded").addClass("aui-iconfont-collapsed"),this},u.prototype.toggle=function(){return this.isCollapsed()?this.expand():this.collapse(),this},u.prototype.hideMoreItems=function(){if(this.$el.is(".aui-nav:not([aria-expanded=false]) [data-more]")){var e=this.$el.attr("data-more")||i.default.getText("aui.words.moreitem"),t=Math.abs(parseInt(this.$el.attr("data-more-limit")))||5,a=this.$el.children("li"),r=a.length<=t+1,l=a.filter(".aui-nav-selected").length,s=a.filter(".aui-nav-more").length;if(r||l||s)return this;(0,n.default)("<li>",{class:"aui-nav-more","aria-hidden":"true"}).append((0,n.default)("<a>",{href:"#",class:"aui-nav-item",text:e,click:function(e){e.preventDefault(),(0,n.default)(this).parent().remove()}})).insertAfter(a.eq(t-1))}return this};var d=(0,s.default)("navigation",u),h=(0,r.default)("aui-nav",{type:r.default.type.CLASSNAME,attached:function(e){new u(e)},detached:function(e){(0,n.default)(e).removeData()}});(0,l.default)("navigation",d),t.default=d,t.NavigationEl=h},"eC/R":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NavigationEl=t.navigation=void 0;var i=a("C/C5");Object.defineProperty(t,"navigation",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(i).default}}),Object.defineProperty(t,"NavigationEl",{enumerable:!0,get:function(){return i.NavigationEl}}),a("pDZt")}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.a2b2c71491', location = 'aui.chunk.b8bb0af8b162a0ad7812--7a47976f73537f698e9b.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.splitchunk.a2b2c71491"],{IxCr:function(n,i,u){"use strict";u("FStl"),u("Q0fs"),u("nqD9"),u("LJmc")},LJmc:function(n,i,u){}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.component.sidebar', location = 'aui.chunk.815d3d76eb25749155fb--98cd4fa7b98dbad25334.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.component.sidebar"],{"5njU":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(i("+x/D"));function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return(0,o.default)(e).clone().removeAttr("id")}(0,n(i("KloK")).default)("clone",a),t.default=a,e.exports=t.default},"6wVx":function(e,t,i){},Wzva:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=g(i("+x/D"));i("XphB"),i("C/C5");var n=g(i("HH5i")),a=g(i("5njU")),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(i("bPPT")),r=g(i("KloK")),u=g(i("h2ur")),l=g(i("kV0L")),d=g(i("+ay7")),p=g(i("XxUV")),c=g(i("4dFR")),f=g(i("OEua")),h=g(i("6RZY")),v=g(i("mMNQ"));function g(e){return e&&e.__esModule?e:{default:e}}function b(e){return e.offset().top}function m(e){this.$el=(0,o.default)(e),this.$el.length&&(this.$body=(0,o.default)("body"),this.$wrapper=this.$el.children(".aui-sidebar-wrapper"),this.$body.addClass("aui-page-sidebar"),this._previousScrollTop=null,this._previousViewportHeight=null,this._previousViewportWidth=null,this._previousOffsetTop=null,this.submenus=new _,function(e){if(!(0,o.default)(".aui-sidebar").length)return;(function(e){e.$el.on("mouseenter mouseleave click focus",e.collapsedTriggersSelector,function(t){var i=(0,o.default)(t.target);T(e,i)})})(e),u.default&&(0,p.default)("only screen and (max-device-width:1024px)")&&(0,o.default)("body").addClass("aui-page-sidebar-touch");var t=null,i=function(){null===t&&(t=requestAnimationFrame(function(){e.reflow(),t=null}))};(0,o.default)(window).on("scroll resize",i),i(),e.isAnimated()&&e.$el.on("transitionend webkitTransitionEnd",function(){e.$el.trigger(o.default.Event(y+(e.isCollapsed()?"collapse-end":"expand-end")))});e.$el.on("click",".aui-sidebar-toggle",function(t){t.preventDefault(),e.toggle()}),(0,o.default)(".aui-page-panel").on("click",function(){!e.isCollapsed()&&e.isViewportNarrow()&&e.collapse()});var a=function(t){(function(e){return!(e.which!==d.default.LEFT_SQUARE_BRACKET||e.shiftKey||e.ctrlKey||e.metaKey||(0,l.default)(e.target))})(t)&&e.toggle()};function s(e){return e.keyCode===d.default.TAB&&!e.shiftKey&&!e.altKey}(0,o.default)(document).on("keypress",a),e._remove=function(){this._removeAllTooltips(),(0,o.default)(this.inlineDialogSelector).remove(),this.$el.off(),this.$el.remove(),(0,o.default)(document).off("keypress",a),(0,o.default)(window).off("scroll resize",i)},e.$el.on("touchend",function(t){e.isCollapsed()&&(e.expand(),t.preventDefault())}),e.$el.on("mouseenter focus",e.collapsedTriggersSelector,function(){if(e.isCollapsed()){var t=(0,o.default)(this);$(t)||D(t)}}),e.$el.on("click blur mouseleave",e.collapsedTriggersSelector,function(){e.isCollapsed()&&P((0,o.default)(this))}),e.$el.on("mouseenter focus",e.toggleSelector,function(){var t=(0,o.default)(this);e.isCollapsed()?t.data("tooltip",n.default.getText("aui.sidebar.expand.tooltip")):t.data("tooltip",n.default.getText("aui.sidebar.collapse.tooltip")),D(t)}),e.$el.on("click blur mouseleave",e.toggleSelector,function(){P((0,o.default)(this))}),e.$el.on("keydown",e.collapsedTriggersSelector,function(t){if(e.isCollapsed()){var i=t.target,n=x(i);if(!n)return;var a=(0,o.default)(n);s(t)&&n.open&&(t.preventDefault(),function(e){e.attr("persistent",""),e.find(":aui-tabbable").first().focus(),setTimeout(function(){e.removeAttr("persistent")},100)}(a),a.on("keydown",function(e){((function(e){return e.keyCode===d.default.TAB&&e.shiftKey})(e)&&function(e,t){return e===t.find(":aui-tabbable")[0]}(e.target,a)||s(e)&&function(e,t){return e===t.find(":aui-tabbable").last()[0]}(e.target,a))&&(i.focus(),(0,o.default)(this).off("keydown"),S())}))}})}(this),function(e){(0,o.default)(e.collapsedTriggersSelector).each(function(){var t=(0,o.default)(this);T(e,t)})}(this))}var y="_aui-internal-sidebar-";function w(e){return o.default.map(e.split(" "),function(e){return y+e}).join(" ")}function k(){return document.querySelectorAll(m.prototype.inlineDialogSelector)}function _(){this.inlineDialog=null}function C(e){return e.is("a")?e.next(".aui-nav"):e.children(".aui-nav, hr")}function x(e){var t=e.getAttribute("aria-controls");return document.getElementById(t)}function $(e){return 0!==C(e).length}function S(){var e=k();Array.prototype.forEach.call(e,function(e){e.open=!1})}function T(e,t){if(!t.data("_aui-sidebar-submenu-constructed")&&(t.data("_aui-sidebar-submenu-constructed",!0),$(t))){var i=document.createElement("aui-inline-dialog"),n=(0,f.default)("sidebar-submenu");return t.attr("aria-controls",n),t.attr("data-aui-trigger",""),c.default.init(t),i.setAttribute("id",n),i.setAttribute("alignment","right top"),i.setAttribute("aria-hidden","true"),i.setAttribute("contained-by","viewport"),e.isCollapsed()&&i.setAttribute("responds-to","hover"),(0,o.default)(i).addClass(m.prototype.inlineDialogClass),document.body.appendChild(i),c.default.init(i),function(e,t,i){i.addEventListener("aui-layer-show",function(n){if(e.isCollapsed()){if(!function(e){return"AUI-INLINE-DIALOG"!==e.target.tagName}(n)&&!function(e){return!e.target.classList.contains("aui-sidebar-submenu-dialog")}(n)){var s=o.default.Event("aui-sidebar-submenu-before-show");t.trigger(s,i),s.isDefaultPrevented()?n.preventDefault():function(e,t){e.addClass("active"),t.innerHTML=V;var i=e.is("a")?e.text():e.children(".aui-nav-heading").text(),n=(0,o.default)(t).find(".aui-navgroup-inner");n.children(".aui-nav-heading").attr("title",i).children("strong").text(i),function(e){var t=(0,a.default)(e);(0,v.default)(t,f.default),t.hasClass("aui-expander-content")&&(t.find(".aui-expander-cutoff").remove(),t.removeClass("aui-expander-content"));return t}(C(e)).appendTo(n)}(t,i)}}else n.preventDefault()}),i.addEventListener("aui-layer-hide",function(){!function(e){e.removeClass("active")}(t)})}(e,t,i),i}}m.prototype.on=function(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1),i=w(e);return this.$el.on.apply(this.$el,[i].concat(t)),this},m.prototype.off=function(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1),i=w(e);return this.$el.off.apply(this.$el,[i].concat(t)),this},m.prototype.setHeight=function(e,t,i){var o=Math.max(0,i-e);return this.$wrapper.height(t-o),this},m.prototype.setTopPosition=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.pageYOffset;return this.$wrapper.toggleClass("aui-is-docked",e>b(this.$el)),this},m.prototype.setPosition=s.fn(m.prototype.setTopPosition,"Sidebar.setPosition",{removeInVersion:"9.0.0",sinceVersion:"7.6.1",alternativeName:"Sidebar.setTopPosition"}),m.prototype.setLeftPosition=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.pageXOffset;return this.$wrapper.hasClass("aui-is-docked")&&this.$wrapper.css({left:-e}),this},m.prototype.setCollapsedState=function(e){var t={collapsed:{},expanded:{}};t.collapsed.narrow={narrow:o.default.noop,wide:function(t){t._expand(e,!0)}},t.collapsed.wide={narrow:o.default.noop,wide:o.default.noop},t.expanded.narrow={narrow:o.default.noop,wide:function(e){e.$body.removeClass("aui-sidebar-collapsed"),e.$el.removeClass("aui-sidebar-fly-out")}},t.expanded.wide={narrow:function(e){e._collapse(!0)},wide:o.default.noop};var i=this.isCollapsed()?"collapsed":"expanded",n=this.isViewportNarrow(this._previousViewportWidth)?"narrow":"wide",a=this.isViewportNarrow(e)?"narrow":"wide";return t[i][n][a](this),this},m.prototype._collapse=function(e){if(this.isCollapsed())return this;var t=o.default.Event(y+"collapse-start",{isResponsive:e});return this.$el.trigger(t),t.isDefaultPrevented()?this:(this.$body.addClass("aui-sidebar-collapsed"),this.$el.attr("aria-expanded","false"),this.$el.removeClass("aui-sidebar-fly-out"),this.$el.find(this.submenuTriggersSelector).attr("tabindex",0),(0,o.default)(this.inlineDialogSelector).attr("responds-to","hover"),this.isAnimated()||this.$el.trigger(o.default.Event(y+"collapse-end",{isResponsive:e})),this)},m.prototype.collapse=function(){return this._collapse(!1)},m.prototype._expand=function(e,t){var i=o.default.Event(y+"expand-start",{isResponsive:t});if(this.$el.trigger(i),i.isDefaultPrevented())return this;var n=this.isViewportNarrow(e);return this.$el.attr("aria-expanded","true"),this.$body.toggleClass("aui-sidebar-collapsed",n),this.$el.toggleClass("aui-sidebar-fly-out",n),this.$el.find(this.submenuTriggersSelector).removeAttr("tabindex"),(0,o.default)(this.inlineDialogSelector).removeAttr("responds-to"),this.isAnimated()||this.$el.trigger(o.default.Event(y+"expand-end",{isResponsive:t})),this},m.prototype.expand=function(){return this.isCollapsed()&&this._expand(this._previousViewportWidth,!1),this},m.prototype.isAnimated=function(){return this.$el.hasClass("aui-is-animated")},m.prototype.isCollapsed=function(){return"false"===this.$el.attr("aria-expanded")},m.prototype.isViewportNarrow=function(e){return(e=void 0===e?this._previousViewportWidth:e)<1240},m.prototype._removeAllTooltips=function(){(0,o.default)(this.tooltipSelector).remove()},m.prototype.responsiveReflow=function(e,t){if(e){if(!this.isCollapsed()&&this.isViewportNarrow(t)){var i=this.isAnimated();i&&this.$el.removeClass("aui-is-animated"),this.collapse(),i&&(this.$el[0].offsetHeight,this.$el.addClass("aui-is-animated"))}}else t!==this._previousViewportWidth&&this.setCollapsedState(t)},m.prototype.reflow=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.pageYOffset,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.documentElement.clientHeight,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.innerWidth,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:document.documentElement.scrollHeight,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:window.pageXOffset,a=b(this.$el),s=null===this._previousViewportWidth;if(e!==this._previousScrollTop||t!==this._previousViewportHeight||a!==this._previousOffsetTop){this.isCollapsed()&&!s&&e!==this._previousScrollTop&&this._removeAllTooltips();var r=this.$body.hasClass("aui-page-sidebar-touch"),u=e!==this._previousScrollTop&&(e<0||e+t>o);r||!s&&u||(this.setHeight(e,t,a),this.setTopPosition(e))}if(n!==this._previousScrollLeft&&this.setLeftPosition(n),"false"!==this.$el.attr("data-aui-responsive"))this.responsiveReflow(s,i);else{var l=!this.isCollapsed()&&this.isViewportNarrow(i);this.$el.toggleClass("aui-sidebar-fly-out",l)}return this._previousScrollTop=e,this._previousViewportHeight=t,this._previousViewportWidth=i,this._previousOffsetTop=a,this._previousScrollLeft=n,this},m.prototype.toggle=function(){return this.isCollapsed()?(this.expand(),this._removeAllTooltips()):this.collapse(),this},m.prototype.submenuTriggersSelector=".aui-sidebar-group:not(.aui-sidebar-group-tier-one)",m.prototype.collapsedTriggersSelector=[m.prototype.submenuTriggersSelector,".aui-sidebar-group.aui-sidebar-group-tier-one > .aui-nav > li > a",".aui-sidebar-footer > .aui-sidebar-settings-button"].join(", "),m.prototype.toggleSelector=".aui-sidebar-footer > .aui-sidebar-toggle",m.prototype.tooltipSelector=".aui-sidebar-section-tooltip",m.prototype.inlineDialogClass="aui-sidebar-submenu-dialog",m.prototype.inlineDialogSelector="."+m.prototype.inlineDialogClass,_.prototype.submenu=function(e){return M(),C(e)},_.prototype.hasSubmenu=function(e){return M(),$(e)},_.prototype.submenuHeadingHeight=function(){return M(),34},_.prototype.isShowing=function(){return M(),m.prototype.isSubmenuVisible()},_.prototype.show=function(e,t){M(),function(e){x(e).open=!0}(t)},_.prototype.hide=function(){M(),S()},_.prototype.inlineDialogShowHandler=function(){M()},_.prototype.inlineDialogHideHandler=function(){M()},_.prototype.moveSubmenuToInlineDialog=function(){M()},_.prototype.restoreSubmenu=function(){M()},m.prototype.getVisibleSubmenus=function(){return Array.prototype.filter.call(k(),function(e){return e.open})},m.prototype.isSubmenuVisible=function(){return this.getVisibleSubmenus().length>0};var V='<div class="aui-inline-dialog-contents"><div class="aui-sidebar-submenu" ><div class="aui-navgroup aui-navgroup-vertical"><div class="aui-navgroup-inner"><div class="aui-nav-heading"><strong></strong></div></div></div></div></div>';var A={trigger:"manual",gravity:"w",className:"aui-sidebar-section-tooltip",title:function(){var e=(0,o.default)(this);return e.is("a")?e.attr("title")||e.find(".aui-nav-item-label").text()||e.data("tooltip"):e.children(".aui-nav").attr("title")||e.children(".aui-nav-heading").text()}};function D(e){e.tooltip(A).tooltip("show");var t=e.data("tipsy")&&e.data("tipsy").$tip;t&&t.css({opacity:""}).addClass("tooltip-shown")}function P(e){var t=e.data("tipsy")&&e.data("tipsy").$tip;if(t){var i=t.css("transition-duration");if(i){var o=i.indexOf("ms")>=0?parseInt(i.substring(0,i.length-2),10):1e3*parseInt(i.substring(0,i.length-1),10);setTimeout(function(){t.hasClass("tooltip-shown")&&(e.tooltip("hide"),t.removeClass("tooltip-shown"))},o)}else t.removeClass("tooltip-shown")}}var E=(0,h.default)("sidebar",m);(0,o.default)(function(){E(".aui-sidebar")});var M=s.getMessageLogger("Sidebar.submenus",{removeInVersion:"9.0.0",sinceVersion:"5.8.0"});(0,r.default)("sidebar",E),t.default=E,e.exports=t.default},XxUV:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(window.matchMedia)return window.matchMedia(e).matches;var t=document.createElement("style");t.type="text/css",t.id="testMedia",t.innerText="@media "+e+" { #testMedia { width: 1px; } }",document.head.appendChild(t);var i="1px"===window.getComputedStyle(t,null).width;return t.parentNode.removeChild(t),i},e.exports=t.default},h2ur:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=window.DocumentTouch,n="ontouchstart"in window||o&&document instanceof o;t.default=n,e.exports=t.default},kV0L:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"value"in e||e.isContentEditable},e.exports=t.default},mMNQ:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var i=(0,o.default)("<div></div>");i.append(e),i.find("[id]").each(function(e,o){var a=t(o.id+"-");!function(e,t,i){n(e,t,i,"aria-controls"),n(e,t,i,"aria-owns")}(i,o.id,a),o.id=a})};var o=function(e){return e&&e.__esModule?e:{default:e}}(i("+x/D"));function n(e,t,i,o){e.find("["+o+"]").attr(o,function(e,o){return t===o?i:void 0})}e.exports=t.default},pju7:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sidebar=void 0;var o=i("Wzva");Object.defineProperty(t,"sidebar",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(o).default}}),i("FStl"),i("Q0fs"),i("rSV2"),i("nqD9"),i("iQXk"),i("IxCr"),i("S3ao"),i("YQ7q"),i("pDZt"),i("eC/R"),i("Rvtc"),i("Nu/Z"),i("6wVx")}},[["pju7","runtime","aui.splitchunk.vendors--e54c7c7304","aui.splitchunk.vendors--b47d4b691d","aui.splitchunk.vendors--084821f40b","aui.splitchunk.vendors--be1eb78c1a","aui.splitchunk.vendors--23f50a6f00","aui.splitchunk.172ffb6da7","aui.splitchunk.b0831cc7d0","aui.splitchunk.572a8bf5cd","aui.splitchunk.087aba7911","aui.splitchunk.fbd1a5ab27","aui.splitchunk.d49cf794d2","aui.splitchunk.54d3f16c20","aui.splitchunk.e54c7c7304","aui.splitchunk.336ae4f9e7","aui.splitchunk.1659111a3c","aui.splitchunk.f5828f5ab9","aui.splitchunk.fb15cffa72","aui.splitchunk.56dfb54d0c","aui.splitchunk.f673ef53ac","aui.splitchunk.8659b532c1","aui.splitchunk.908fe798b4","aui.splitchunk.792781e698","aui.splitchunk.d0110a864f","aui.splitchunk.afa5039e04","aui.splitchunk.bff3715233","aui.splitchunk.c750721820","aui.splitchunk.6d6f245ed3","aui.splitchunk.ed80e00f15","aui.splitchunk.382c9b559f","aui.splitchunk.084821f40b","aui.splitchunk.5b8c290363","aui.splitchunk.baa83dbaf9","aui.splitchunk.b2ecdd4179","aui.splitchunk.36cd9d521c","aui.splitchunk.be1eb78c1a","aui.splitchunk.d925afe2c0","aui.splitchunk.b652d2668a","aui.splitchunk.5b7fdbd666","aui.splitchunk.8a641c03a4","aui.splitchunk.23f50a6f00","aui.splitchunk.e6408ec84b","aui.splitchunk.d727dd207f","aui.splitchunk.543254b237","aui.splitchunk.141abf7fb1","aui.splitchunk.036a05e5ff","aui.splitchunk.a2b2c71491"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.pattern.help', location = 'aui.chunk.97b0b8778b1dab612048--f0ebc3ce920a8bb3519d.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.pattern.help"],{EoRc:function(i,u,n){},H4sa:function(i,u,n){"use strict";n("FStl"),n("Q0fs"),n("nqD9"),n("0FWE"),n("VtiI"),n("EoRc")}},[["H4sa","runtime","aui.splitchunk.vendors--7da3927366","aui.splitchunk.b0831cc7d0","aui.splitchunk.572a8bf5cd","aui.splitchunk.d49cf794d2","aui.splitchunk.d925afe2c0","aui.splitchunk.d727dd207f","aui.splitchunk.7da3927366"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.dashboard:old-dashboard-resource-loader', location = 'com/atlassian/confluence/plugins/macros/dashboard/js/dashboard-resource-loader.js' */
'use strict';define("confluence-dashboard-macros/dashboard-resource-loader",["jquery","wrm"],function(a,c){var b=[];return function(){(a("#recent-updates .tabs-menu").length||a(".spaceList").length)&&b.push("wr!confluence.macros.dashboard:dashboard-macros-resources");a("#spaces-tab-link").length&&b.push("wr!confluence.macros.dashboard:dashboard-global-entity-resources");0!==b.length&&c.require(b).done(function(){-1<b.indexOf("wr!confluence.macros.dashboard:dashboard-macros-resources")&&require("confluence-dashboard-macros/dashboard-macros")(a);
-1<b.indexOf("wr!confluence.macros.dashboard:dashboard-global-entity-resources")&&require("confluence-dashboard-macros/entity-tabs")})}});require("confluence/module-exporter").safeRequire("confluence-dashboard-macros/dashboard-resource-loader",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:blueprint-selector', location = 'templates/extra/jira/blueprint-selector.js' */
(function(){if(!Confluence.Blueprint.Selector){return}var a={decisions:"com.atlassian.confluence.plugins.confluence-business-blueprints:decisions-blueprint-item","meeting-notes":"com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-item",requirements:"com.atlassian.confluence.plugins.confluence-software-blueprints:requirements-item",retrospectives:"com.atlassian.confluence.plugins.confluence-software-blueprints:retrospectives-item","blank-pages":"com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blank-page"};Confluence.Blueprint.Selector.registerSelector(function(b){if(b.issueKey&&b.agileMode==="plan"){return"com.atlassian.confluence.plugins.confluence-software-blueprints:requirements-item"}if(b.sprintId&&b.agileMode==="plan"){return"com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-item"}if(b.sprintId&&b.agileMode==="report"){return"com.atlassian.confluence.plugins.confluence-software-blueprints:retrospectives-item"}b.blueprintShortKey=b.blueprintShortKey||"";return a[b.blueprintShortKey]})})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-easyuser-admin:easyuser', location = 'js/easyuser.js' */
define("confluence/easyuser",["jquery","ajs"],function(b,d){var i,e,h,f,j,k,c={init:function(){i=b("#easyuser-send-invites-form");e=b("#reset-invite-token");h=b("#invite-link");f=b("#inviteEmail");j=b("#invite-user-errors");k=i.find('input[type="submit"]');d.MessageHandler.closeOnNew(!0);e.click(function(){e.prop("disabled",!0);c._postJson({url:"/rest/easyuser/latest/refreshToken",data:null,success:function(a){h.attr("href",a.signupUrl).text(a.signupUrl);c._msg("The invitation URL has been reset. Users will be unable to sign up with the old one.");
j.find(".aui-message-success").first().append(b("<a>").prop("href","#").text("Restore previous URL.").prop("id","undo-reset-token").click(c._undoTokenReset))},error:function(a,g,b){c._errorMsg("There was an error generating a new invitation URL.",status,b)},loadingMessage:"Saving your changes..."}).always(function(){e.removeProp("disabled")});return!1});f.click(function(){f.prop("disabled",!0);var a=f.prop("checked");c._postJson({url:"/rest/easyuser/latest/sendEmailOnInvite",
data:b.toJSON(a),success:function(a){a=a?"Administrators will now receive emails when users sign up.":"Administrators will no longer receive emails when users sign up.";c._msg(a)},error:function(a,b,e){c._errorMsg("There was an error updating when sign up emails will be sent.",status,e)},loadingMessage:"Saving your changes..."}).always(function(){f.removeProp("disabled")})});k.click(function(){var a=b("#invite-user-email-content").val(),g=b.trim(b("#recipient-list").val());if(!g)return c._errorMsg("You need to specify at least one email address to send an invitation."),
!1;g=g.split(",");c._postJson({url:"/rest/easyuser/latest/sendUserInvites",data:b.toJSON({emailMessage:a,recipientList:g}),success:c._sendInvitationsSuccessHandler,error:function(a,b,g){c._errorMsg("There was an error sending your invitations.",status,g)},loadingMessage:"Sending email invitations..."});return!1})},_sendInvitationsSuccessHandler:function(a){var b=a.sentAddresses.length&&'<span id="sent-invitations-count">'+a.sentAddresses.length+"</span>";(a=a.failedAddresses.length&&
'<span id="failed-invitations">'+d.escapeHtml(a.failedAddresses.join(", "))+"</span>")?b?c._errorMsg(d.format("Successfully sent {0} invitation(s), but some supplied email addresses were invalid: {1}.",b,a)):c._errorMsg(d.format("Failed to send invitation emails, no valid email addresses found: {0}.",a)):c._msg(d.format("Successfully sent {0} invitation(s).",b))},_msg:function(a,c){var e=b("#invite-user-errors");d.MessageHandler.message(e,a,c)},_errorMsg:function(a,c,e){var f=b("#invite-user-errors");d.MessageHandler.error(f,a);c&&d.log(a+": [statusText = "+c+"], [error = "+
e+"]")},_postJson:function(a){c._msg(a.loadingMessage,"info");return b.ajax({url:d.contextPath()+a.url,type:"POST",dataType:"json",data:a.data,contentType:"application/json",success:a.success,error:a.error,statusCode:{401:function(){c._errorMsg("Your session has timed out. Please refresh this page and try again.")}}})},_undoTokenReset:function(){e.prop("disabled",!0);c._postJson({url:"/rest/easyuser/latest/undoTokenReset",data:null,success:function(a){a=a.signupUrl;h.attr("href",a).text(a);c._msg("The invitation URL has been restored to its previous value.")},
error:function(a,b,e){c._errorMsg("The previous invitation URL could not be restored.",status,e)},loadingMessage:"Saving your changes..."}).always(function(){e.removeProp("disabled")})}};return c});require("confluence/module-exporter").safeRequire("confluence/easyuser",function(b){require("ajs").toInit(b.init)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-easyuser-admin:easyuser', location = 'js/easyusersignupsettings.js' */
define("confluence/easyusersignupsettings",["jquery","ajs","confluence/form-state-control"],function(a,c,f){return function(){var i=a("#easyuser-forms-container"),h=a("#signup-user-errors"),e=a("#save"),b=a('input[name="signupMode"]'),j=a("#domains-signup-container"),g=a("#domains-signup"),o=a("#isSignupEnabled"),k=a("#restrictedModesBorder-container"),l=a("#configure-smtp-msg-signup"),m=a("#signupMode-restricted");l.length&&c.MessageHandler.message(h,l.html(),"warning");var n=function(){var a=g.val();
!a||/^\s*$/.test(a)?e.prop("disabled",!0):e.prop("disabled",!1)};a("#easyuser-signup-domains-form").submit(function(){var d=a("input:radio[name=signupMode]:checked").val(),b=a("#notifyAdmin").prop("checked");a("#isSignupEnabled").prop("checked")||(d="private");"restricted"!=d&&g.val("");var f=g.val(),b={enabled:"public"===d,domains:f,notifyAdmin:b};e.prop("disabled",!0);a.ajax({url:c.contextPath()+"/rest/easyuser/latest/signup/setSignupSettings",type:"POST",dataType:"json",contentType:"application/json",
processData:!1,data:a.toJSON(b),success:function(){e.prop("disabled",!1);c.MessageHandler.message(h,"Successfully saved signup settings.");i.toggleClass("private-signup","private"===d||"restricted"===d);i.toggleClass("public-signup","public"===d)},error:function(a,b,d){e.removeProp("disabled");c.log("Saving sign up settings errors: [statusText = '"+b+"'], [error = '"+d+"']");c.MessageHandler.message(h,"There was an error saving the signup settings.","error")},statusCode:{401:function(){c.MessageHandler.message($messageContainer,
"Your session has timed out. Please refresh this page and try again.","error")}}});return!1});b.change(function(){var b=this.value;a("input:radio[name=signupMode]").prop("checked",!1);a(this).prop("checked",!0);"restricted"===b?(n(),j.show(),g.focus()):(j.hide(),e.prop("disabled",!1))});g.keyup(function(){n()});o.change(function(){!0===this.checked?(k.css({opacity:1}),f.enableElement(b),m.data("ajs-capable")||f.disableElement(m)):(b.change(),f.disableElement(b),e.prop("disabled",!1),k.css({opacity:0.5}))})}});
require("confluence/module-exporter").safeRequire("confluence/easyusersignupsettings",function(a){require("ajs").toInit(a)});
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
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:util', location = 'js/util/is-boolean.js' */
define("confluence-browser-metrics/util/is-boolean",[],function(){return function(a){return typeof a==="boolean"}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:util', location = 'js/util/is-number.js' */
define("confluence-browser-metrics/util/is-number",[],function(){return function(a){return typeof a==="number"}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:util', location = 'js/util/is-string.js' */
define("confluence-browser-metrics/util/is-string",[],function(){return function(a){return typeof a==="string"}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:spa-transitions', location = '/js/reporters/spa-transitions-reporter.js' */
define("confluence-browser-metrics/reporters/spa-transitions-reporter",["jquery","ajs","confluence/storage-manager"],function(c,i,l){var d=c.Deferred();var m="page-page";var k="dashboard-page";var a=l("confluence","spa-transition");i.toInit(function(){c(document).on("click","a",g);var o=null;if(a.doesContain(m)){o=m}else{if(a.doesContain(k)){o=k}}if(o){d.resolve({"confluence-spa-transition":o});a.removeItem(o)}else{d.resolve({})}});function g(p){var o=c(this).attr("href");if(o&&e(p)&&b(o)){a.setItemQuietly(h()?k:m,true,300)}return true}function e(o){return o.which===1&&!o.metaKey&&!o.ctrlKey&&!o.shiftKey}function b(o){return(o.indexOf("/display/")!==-1||j(o)||o.indexOf("/viewpage.action")!==-1)&&(o.indexOf("~")===-1||n(o))}function n(o){return(o.indexOf("/",o.indexOf("~")+1)!==-1)&&o.slice(-1)!=="/"}function j(o){return/spaces\/(.*)\/pages\/(.*)/.test(o)}function h(){return c("body").hasClass("dashboard")}var f=function(o){if(o.isInitial){return d.promise()}else{return{}}};return f});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:spa-transitions', location = '/js/marshallers/spa-transitions-marshaller.js' */
define("confluence-browser-metrics/marshallers/spa-transitions-marshaller",["confluence-browser-metrics/util/is-string"],function(a){function c(d){return a(d["confluence-spa-transition"])}var b=function(d){if(c(d)){return{"confluence-spa-transition":d["confluence-spa-transition"]}}};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:dashboard', location = '/js/dashboard.js' */
require(["internal/browser-metrics","confluence-browser-metrics/reporters/spa-transitions-reporter","jquery","confluence/api/event"],function(b,f,d,c){(function e(){var g="confluence.spa.navigation.performance";c.bind(g,function(h,i){if(i.isStartEvent){b.start({key:g,isInitial:false,reporters:function(){return{transitionTo:i.transitionTo}}})}else{b.end({key:g,isInitial:false})}})}());function a(){var i=d("#confluence-ui.confluence-dashboard").length;if(i){return}var g=d("body.dashboard").length;var h=".confluence-dashboard .list-container li:not(.loading-view)";var j=!d(".confluence-dashboard").length;if(j){h=".dashboard"}if(g){b.start({key:"confluence.dashboard.view",ready:h,isInitial:true})}}d(a)});
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
/* module-key = 'confluence.web.resources:fancy-box', location = '/includes/fancybox/jquery.fancybox-1.3.4.js' */
(function(a){var n,s,t,e,z,l,A,i,w,x,q=0,d={},o=[],p=0,b={},j=[],C=null,m=new Image,F=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,Q=/[^\.]\.(swf)\s*$/i,G,H=1,v=0,u="",r,g,k=!1,y=a.extend(a("<div/>")[0],{prop:0}),I=a.browser.msie&&7>a.browser.version&&!window.XMLHttpRequest,J=function(){s.hide();m.onerror=m.onload=null;C&&C.abort();n.empty()},K=function(){!1===d.onError(o,q,d)?(s.hide(),k=!1):(d.titleShow=!1,d.width="auto",d.height="auto",n.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'),
B())},E=function(){var c=o[q],b,f,e,g,j,i;J();d=a.extend({},a.fn.fancybox.defaults,"undefined"==typeof a(c).data("fancybox")?d:a(c).data("fancybox"));i=d.onStart(o,q,d);if(!1===i)k=!1;else{"object"==typeof i&&(d=a.extend(d,i));e=d.title||(c.nodeName?a(c).attr("title"):c.title)||"";d.orig=a(c).is("img")&&a(c);c.nodeName&&!d.orig&&(d.orig=a(c).children("img:first").length?a(c).children("img:first"):a(c));""===e&&(d.orig&&d.titleFromAlt)&&(e=d.orig.attr("alt"));b=d.href||(c.nodeName?a(c).attr("href"):
c.href)||null;if(/^(?:javascript)/i.test(b)||"#"==b)b=null;d.type?(f=d.type,b||(b=d.content)):d.content?f="html":d.dataAttr?(f="dataAttribute",b=d.orig.attr("data-"+d.dataAttr)):b&&(f=b.match(F)?"image":b.match(Q)?"swf":a(c).hasClass("iframe")?"iframe":0===b.indexOf("#")?"inline":"ajax");if(f)switch("inline"==f&&(c=b.substr(b.indexOf("#")),f=0<a(c).length?"inline":"ajax"),d.type=f,d.href=b,d.title=e,d.autoDimensions&&("html"==d.type||"inline"==d.type||"ajax"==d.type?(d.width="auto",d.height="auto"):
d.autoDimensions=!1),d.modal&&(d.overlayShow=!0,d.hideOnOverlayClick=!1,d.hideOnContentClick=!1,d.enableEscapeButton=!1,d.showCloseButton=!1),d.padding=parseInt(d.padding,10),d.margin=parseInt(d.margin,10),n.css("padding",d.padding+d.margin),a(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){a(this).replaceWith(l.children())}),f){case "html":n.html(d.content);B();break;case "inline":if(!0===a(c).parent().is("#fancybox-content")){k=!1;break}a('<div class="fancybox-inline-tmp" />').hide().insertBefore(a(c)).bind("fancybox-cleanup",
function(){a(this).replaceWith(l.children())}).bind("fancybox-cancel",function(){a(this).replaceWith(n.children())});a(c).appendTo(n);B();break;case "image":case "dataAttribute":k=!1;a.fancybox.showActivity();m=new Image;m.onerror=function(){K()};m.onload=function(){k=true;m.onerror=m.onload=null;d.width=m.width;d.height=m.height;a("<img />").attr({id:"fancybox-img",src:m.src,alt:d.title}).appendTo(n);L()};m.src=b;break;case "swf":d.scrolling="no";g='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+
d.width+'" height="'+d.height+'"><param name="movie" value="'+b+'"></param>';j="";a.each(d.swf,function(a,c){g=g+('<param name="'+a+'" value="'+c+'"></param>');j=j+(" "+a+'="'+c+'"')});g+='<embed src="'+b+'" type="application/x-shockwave-flash" width="'+d.width+'" height="'+d.height+'"'+j+"></embed></object>";n.html(g);B();break;case "ajax":k=!1;a.fancybox.showActivity();d.ajax.win=d.ajax.success;C=a.ajax(a.extend({},d.ajax,{url:b,data:d.ajax.data||{},error:function(a){a.status>0&&K()},success:function(a,
c,f){if((typeof f=="object"?f:C).status==200){if(typeof d.ajax.win=="function"){i=d.ajax.win(b,a,c,f);if(i===false){s.hide();return}if(typeof i=="string"||typeof i=="object")a=i}n.html(a);B()}}}));break;case "iframe":L()}else K()}},B=function(){var c=d.width,b=d.height,c=-1<c.toString().indexOf("%")?parseInt((a(window).width()-2*d.margin)*parseFloat(c)/100,10)+"px":"auto"==c?"auto":c+"px",b=-1<b.toString().indexOf("%")?parseInt((a(window).height()-2*d.margin)*parseFloat(b)/100,10)+"px":"auto"==b?
"auto":b+"px";n.wrapInner('<div style="width:'+c+";height:"+b+";overflow: "+("auto"==d.scrolling?"auto":"yes"==d.scrolling?"scroll":"hidden")+';position:relative;"></div>');d.width=n.width();d.height=n.height();L()},L=function(){var c,h;s.hide();if(e.is(":visible")&&!1===b.onCleanup(j,p,b))a.event.trigger("fancybox-cancel"),k=!1;else{k=!0;a(l.add(t)).unbind();a(window).unbind("resize.fb scroll.fb");a(document).unbind("keydown.fb");e.is(":visible")&&"outside"!==b.titlePosition&&e.css("height",e.height());
j=o;p=q;b=d;if(b.overlayShow){if(t.css({"background-color":b.overlayColor,opacity:b.overlayOpacity,cursor:b.hideOnOverlayClick?"pointer":"auto",height:a(document).height()}),!t.is(":visible")){if(I)a("select:not(#fancybox-tmp select)").filter(function(){return"hidden"!==this.style.visibility}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"});t.show()}}else t.hide();c=M();var f={},D=b.autoScale,m=2*b.padding;f.width=-1<b.width.toString().indexOf("%")?parseInt(c[0]*
parseFloat(b.width)/100,10):b.width+m;f.height=-1<b.height.toString().indexOf("%")?parseInt(c[1]*parseFloat(b.height)/100,10):b.height+m;if(D&&(f.width>c[0]||f.height>c[1]))if("image"==d.type||"dataAttribute"==d.type||"swf"==d.type){if(D=b.width/b.height,f.width>c[0]&&(f.width=c[0],f.height=parseInt((f.width-m)/D+m,10)),f.height>c[1])f.height=c[1],f.width=parseInt((f.height-m)*D+m,10)}else f.width=Math.min(f.width,c[0]),f.height=Math.min(f.height,c[1]);f.top=parseInt(Math.max(c[3]-20,c[3]+0.5*(c[1]-
f.height-40)),10);f.left=parseInt(Math.max(c[2]-20,c[2]+0.5*(c[0]-f.width-40)),10);g=f;u=b.title||"";v=0;i.empty().removeAttr("style").removeClass();if(!1!==b.titleShow&&(u=a.isFunction(b.titleFormat)?b.titleFormat(u,j,p,b):u&&u.length?"float"==b.titlePosition?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+u+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+
b.titlePosition+'">'+u+"</div>":!1)&&""!==u)switch(i.addClass("fancybox-title-"+b.titlePosition).html(u).appendTo("body").show(),b.titlePosition){case "inside":i.css({width:g.width-2*b.padding,marginLeft:b.padding,marginRight:b.padding});v=i.outerHeight(!0);i.appendTo(z);g.height+=v;break;case "over":i.css({marginLeft:b.padding,width:g.width-2*b.padding,bottom:b.padding}).appendTo(z);break;case "float":i.css("left",-1*parseInt((i.width()-g.width-40)/2,10)).appendTo(e);break;default:i.css({width:g.width-
2*b.padding,paddingLeft:b.padding,paddingRight:b.padding}).appendTo(e)}i.hide();e.is(":visible")?(a(A.add(w).add(x)).hide(),c=e.position(),r={top:c.top,left:c.left,width:e.width(),height:e.height()},h=r.width==g.width&&r.height==g.height,l.fadeTo(b.changeFade,0.3,function(){var c=function(){l.html(n.contents()).fadeTo(b.changeFade,1,N)};a.event.trigger("fancybox-change");l.empty().removeAttr("filter").css({"border-width":b.padding,width:g.width-2*b.padding,height:d.autoDimensions?"auto":g.height-
v-2*b.padding});h?c():(y.prop=0,a(y).animate({prop:1},{duration:b.changeSpeed,easing:b.easingChange,step:O,complete:c}))})):(e.removeAttr("style"),l.css("border-width",b.padding),"elastic"==b.transitionIn?(r=P(),l.html(n.contents()),e.show(),b.opacity&&(g.opacity=0),y.prop=0,a(y).animate({prop:1},{duration:b.speedIn,easing:b.easingIn,step:O,complete:N})):("inside"==b.titlePosition&&0<v&&i.show(),l.css({width:g.width-2*b.padding,height:d.autoDimensions?"auto":g.height-v-2*b.padding}).html(n.contents()),
e.css(g).fadeIn("none"==b.transitionIn?0:b.speedIn,N)))}},N=function(){a.support.opacity||(l.get(0).style.removeAttribute("filter"),e.get(0).style.removeAttribute("filter"));d.autoDimensions&&l.css("height","auto");e.css("height","auto");u&&u.length&&i.show();b.showCloseButton&&A.show();(b.enableEscapeButton||b.enableKeyboardNav)&&a(document).bind("keydown.fb",function(c){if(c.keyCode==27&&b.enableEscapeButton){c.preventDefault();a.fancybox.close()}else if((c.keyCode==37||c.keyCode==39)&&b.enableKeyboardNav&&
c.target.tagName!=="INPUT"&&c.target.tagName!=="TEXTAREA"&&c.target.tagName!=="SELECT"){c.preventDefault();a.fancybox[c.keyCode==37?"prev":"next"]()}});b.showNavArrows?((b.cyclic&&1<j.length||0!==p)&&w.show(),(b.cyclic&&1<j.length||p!=j.length-1)&&x.show()):(w.hide(),x.hide());b.hideOnContentClick&&l.bind("click",a.fancybox.close);b.hideOnOverlayClick&&t.bind("click",a.fancybox.close);a(window).bind("resize.fb",a.fancybox.resize);b.centerOnScroll&&a(window).bind("scroll.fb",a.fancybox.center);"iframe"==
b.type&&a('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(a.browser.msie?'allowtransparency="true""':"")+' scrolling="'+d.scrolling+'" src="'+b.href+'"></iframe>').appendTo(l);e.show();k=!1;a.fancybox.center();b.onComplete(j,p,b);var c,h;j.length-1>p&&(c=j[p+1].href,"undefined"!==typeof c&&c.match(F)&&(h=new Image,h.src=c));0<p&&(c=j[p-1].href,"undefined"!==typeof c&&c.match(F)&&(h=new Image,h.src=c))},O=function(a){var d={width:parseInt(r.width+
(g.width-r.width)*a,10),height:parseInt(r.height+(g.height-r.height)*a,10),top:parseInt(r.top+(g.top-r.top)*a,10),left:parseInt(r.left+(g.left-r.left)*a,10)};"undefined"!==typeof g.opacity&&(d.opacity=0.5>a?0.5:a);e.css(d);l.css({width:d.width-2*b.padding,height:d.height-v*a-2*b.padding})},M=function(){return[a(window).width()-2*b.margin,a(window).height()-2*b.margin,a(document).scrollLeft()+b.margin,a(document).scrollTop()+b.margin]},P=function(){var c=d.orig?a(d.orig):!1,h={};c&&c.length?(h=c.offset(),
h.top+=parseInt(c.css("paddingTop"),10)||0,h.left+=parseInt(c.css("paddingLeft"),10)||0,h.top+=parseInt(c.css("border-top-width"),10)||0,h.left+=parseInt(c.css("border-left-width"),10)||0,h.width=c.width(),h.height=c.height(),h={width:h.width+2*b.padding,height:h.height+2*b.padding,top:h.top-b.padding-20,left:h.left-b.padding-20}):(c=M(),h={width:2*b.padding,height:2*b.padding,top:parseInt(c[3]+0.5*c[1],10),left:parseInt(c[2]+0.5*c[0],10)});return h},R=function(){s.is(":visible")?(a("div",s).css("top",
-40*H+"px"),H=(H+1)%12):clearInterval(G)};a.fn.fancybox=function(c){AJS&&AJS.log("fancybox is deprecated, please use the previewer instead. E.g. $imageLink.previewer({ src: srcOfImage }); ");if(!a(this).length)return this;a(this).data("fancybox",a.extend({},c,a.metadata?a(this).metadata():{})).unbind("click.fb").bind("click.fb",function(c){c.preventDefault();k||(k=!0,a(this).blur(),o=[],q=0,c=a(this).attr("rel")||"",!c||""==c||"nofollow"===c?o.push(this):(o=a("a[rel="+c+"], area[rel="+c+"]"),q=o.index(this)),
E())});return this};a.fancybox=function(c,b){var d;if(!k){k=!0;d="undefined"!==typeof b?b:{};o=[];q=parseInt(d.index,10)||0;if(a.isArray(c)){for(var e=0,g=c.length;e<g;e++)"object"==typeof c[e]?a(c[e]).data("fancybox",a.extend({},d,c[e])):c[e]=a({}).data("fancybox",a.extend({content:c[e]},d));o=jQuery.merge(o,c)}else"object"==typeof c?a(c).data("fancybox",a.extend({},d,c)):c=a({}).data("fancybox",a.extend({content:c},d)),o.push(c);if(q>o.length||0>q)q=0;E()}};a.fancybox.showActivity=function(){clearInterval(G);
s.show();G=setInterval(R,66)};a.fancybox.hideActivity=function(){s.hide()};a.fancybox.next=function(){return a.fancybox.pos(p+1)};a.fancybox.prev=function(){return a.fancybox.pos(p-1)};a.fancybox.pos=function(a){k||(a=parseInt(a,10),o=j,-1<a&&a<j.length?(q=a,E()):b.cyclic&&1<j.length&&(q=a>=j.length?0:j.length-1,E()))};a.fancybox.cancel=function(){k||(k=!0,a.event.trigger("fancybox-cancel"),J(),d.onCancel(o,q,d),k=!1)};a.fancybox.close=function(){function c(){t.fadeOut("fast");i.empty().hide();e.hide();
a.event.trigger("fancybox-cleanup");l.empty();b.onClosed(j,p,b);j=d=[];p=q=0;b=d={};k=!1}if(!k&&!e.is(":hidden"))if(k=!0,b&&!1===b.onCleanup(j,p,b))k=!1;else if(J(),a(A.add(w).add(x)).hide(),a(l.add(t)).unbind(),a(window).unbind("resize.fb scroll.fb"),a(document).unbind("keydown.fb"),l.find("iframe").attr("src",I&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank"),"inside"!==b.titlePosition&&i.empty(),e.stop(),"elastic"==b.transitionOut){r=P();var h=e.position();g={top:h.top,
left:h.left,width:e.width(),height:e.height()};b.opacity&&(g.opacity=1);i.empty().hide();y.prop=1;a(y).animate({prop:0},{duration:b.speedOut,easing:b.easingOut,step:O,complete:c})}else e.fadeOut("none"==b.transitionOut?0:b.speedOut,c)};a.fancybox.resize=function(){t.is(":visible")&&t.css("height",a(document).height());a.fancybox.center(!0)};a.fancybox.center=function(a){var d,f;if(!k&&(f=!0===a?1:0,d=M(),f||!(e.width()>d[0]||e.height()>d[1])))e.stop().animate({top:""+parseInt(Math.max(d[3]-20,d[3]+
0.5*(d[1]-l.height()-40)-b.padding),10),left:""+parseInt(Math.max(d[2]-20,d[2]+0.5*(d[0]-l.width()-40)-b.padding),10)},"number"==typeof a?a:200)};a.fancybox.init=function(){a("#fancybox-wrap").length||(a("body").append(n=a('<div id="fancybox-tmp"></div>'),s=a('<div id="fancybox-loading"><div></div></div>'),t=a('<div id="fancybox-overlay"></div>'),e=a('<div id="fancybox-wrap"></div>')),z=a('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(e),
z.append(l=a('<div id="fancybox-content"></div>'),A=a('<a id="fancybox-close"></a>'),i=a('<div id="fancybox-title"></div>'),w=a('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),x=a('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')),A.click(a.fancybox.close),s.click(a.fancybox.cancel),w.click(function(c){c.preventDefault();a.fancybox.prev()}),x.click(function(c){c.preventDefault();a.fancybox.next()}),
a.fn.mousewheel&&e.bind("mousewheel.fb",function(c,b){if(k)c.preventDefault();else if(0==a(c.target).get(0).clientHeight||a(c.target).get(0).scrollHeight===a(c.target).get(0).clientHeight)c.preventDefault(),a.fancybox[0<b?"prev":"next"]()}),a.support.opacity||e.addClass("fancybox-ie"),I&&(s.addClass("fancybox-ie6"),e.addClass("fancybox-ie6"),a('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(z)))};
a.fn.fancybox.defaults={padding:10,margin:40,opacity:!1,modal:!1,cyclic:!1,scrolling:"auto",width:560,height:340,autoScale:!0,autoDimensions:!0,centerOnScroll:!1,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:!0,hideOnContentClick:!1,overlayShow:!0,overlayOpacity:0.7,overlayColor:"#777",titleShow:!0,titlePosition:"float",titleFormat:null,titleFromAlt:!1,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:!0,
showNavArrows:!0,enableEscapeButton:!0,enableKeyboardNav:!0,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}};a(document).ready(function(){a.fancybox.init()})})(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.getting-started:getting-started-resources', location = 'com/atlassian/confluence/plugins/gettingstarted/soy/getting-started.soy' */
// This file was automatically generated from getting-started.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.GettingStarted.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.GettingStarted == 'undefined') { Confluence.Templates.GettingStarted = {}; }


Confluence.Templates.GettingStarted.popularTabEmpty = function(opt_data, opt_ignored) {
  return '<div class="gettingstarted"><div class="main-banner">' + soy.$$filterNoAutoescape('Welcome, looks like you\x26#8217;re new here') + '</div><div class="sub-banner">' + soy.$$escapeHtml('Take a short tour below or get started on the left.') + '</div><div class="movie-container"><div class="movie-container-inner"><a href="' + soy.$$escapeHtml("//www.atlassian.com/software/confluence/videos/75.html") + '" class="movie-link"><span class="play" class="light"></span></a></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.GettingStarted.popularTabEmpty.soyTemplateName = 'Confluence.Templates.GettingStarted.popularTabEmpty';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.getting-started:getting-started-resources', location = 'com/atlassian/confluence/plugins/gettingstarted/js/getting-started.js' */
'use strict';define("confluence-getting-started/getting-started",["jquery","ajs","confluence/legacy"],function(a,b,c){return function(){function d(e){e.html(c.Templates.GettingStarted.popularTabEmpty());a(".gettingstarted .movie-link").hover(function(){a(".gettingstarted .play").removeClass("light").addClass("dark")},function(){a(".gettingstarted .play").removeClass("dark").addClass("light")}).fancybox({type:"iframe",width:560,height:315,padding:0,scrolling:"no"})}b.bind("dashboard-recentupdates-popular.no-updates",
function(a,b){d(b.container)})}});require("confluence/module-exporter").safeRequire("confluence-getting-started/getting-started",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.pattern.page-layout', location = 'aui.chunk.fb7a85ccf7906c89b7d0--3dfd2e2b3f24966f0bb6.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.pattern.page-layout"],[],[["0FWE","runtime","aui.splitchunk.vendors--7da3927366","aui.splitchunk.b0831cc7d0","aui.splitchunk.572a8bf5cd","aui.splitchunk.d49cf794d2","aui.splitchunk.7da3927366"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.component.inline-dialog2', location = 'aui.chunk.337a5e8e72c173fc3405--a3d251a4920e1ac5c95a.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.component.inline-dialog2"],[],[["Rvtc","runtime","aui.splitchunk.vendors--e54c7c7304","aui.splitchunk.vendors--b47d4b691d","aui.splitchunk.vendors--084821f40b","aui.splitchunk.172ffb6da7","aui.splitchunk.b0831cc7d0","aui.splitchunk.572a8bf5cd","aui.splitchunk.087aba7911","aui.splitchunk.fbd1a5ab27","aui.splitchunk.d49cf794d2","aui.splitchunk.54d3f16c20","aui.splitchunk.e54c7c7304","aui.splitchunk.1659111a3c","aui.splitchunk.f5828f5ab9","aui.splitchunk.fb15cffa72","aui.splitchunk.f673ef53ac","aui.splitchunk.8659b532c1","aui.splitchunk.d0110a864f","aui.splitchunk.afa5039e04","aui.splitchunk.bff3715233","aui.splitchunk.c750721820","aui.splitchunk.6d6f245ed3","aui.splitchunk.084821f40b","aui.splitchunk.5b8c290363","aui.splitchunk.baa83dbaf9","aui.splitchunk.36cd9d521c","aui.splitchunk.d925afe2c0","aui.splitchunk.5b7fdbd666","aui.splitchunk.8a641c03a4","aui.splitchunk.d727dd207f","aui.splitchunk.543254b237"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/user.soy' */
// This file was automatically generated from user.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.User.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.User == 'undefined') { Confluence.Templates.User = {}; }


Confluence.Templates.User.userLinkUrl = function(opt_data, opt_ignored) {
  return soy.$$escapeHtml("/confluence") + '/display/~' + soy.$$escapeUri(opt_data.username);
};
if (goog.DEBUG) {
  Confluence.Templates.User.userLinkUrl.soyTemplateName = 'Confluence.Templates.User.userLinkUrl';
}


Confluence.Templates.User.logo = function(opt_data, opt_ignored) {
  return '' + ((opt_data.profilePictureInfo['default'] && opt_data.username == opt_data.currentUsername) ? '<a ' + ((opt_data.canView) ? ' ' + ((! opt_data.disableUserHover) ? 'class="userLogoLink"' : '') + ' data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : '') + ' href="' + soy.$$escapeHtml("/confluence") + '/users/profile/editmyprofilepicture.action" title="' + soy.$$escapeHtml('Add a picture of yourself') + '"><img class="userLogo logo defaultLogo" src="' + soy.$$escapeHtml("/confluence/s/962fig/8501/fded9f91818631c3677be93247bf5ae6723a1c8d/_") + '/images/icons/profilepics/add_profile_pic.svg" alt="' + soy.$$escapeHtml('User icon') + ': ' + soy.$$escapeHtml('Add a picture of yourself') + '"></a>' : (opt_data.profilePictureInfo.anonymous) ? '<img class="userLogo logo anonymous" src="' + soy.$$escapeHtml("/confluence/s/962fig/8501/fded9f91818631c3677be93247bf5ae6723a1c8d/_") + '/images/icons/profilepics/anonymous.svg" alt="' + soy.$$escapeHtml('User icon') + ': ' + soy.$$escapeHtml('Anonymous') + '" title="' + soy.$$escapeHtml('Anonymous') + '">' : (opt_data.canView) ? '<a ' + ((! opt_data.disableUserHover) ? 'class="userLogoLink"' : '') + ' data-username="' + soy.$$escapeHtml(opt_data.username) + '" href="' + Confluence.Templates.User.userLinkUrl(opt_data) + '"><img class="userLogo logo" src="' + soy.$$escapeHtml(opt_data.profilePictureInfo.uriReference) + '" alt="' + soy.$$escapeHtml('User icon') + ': ' + soy.$$escapeHtml(opt_data.username) + '" title="' + soy.$$escapeHtml(opt_data.username) + '"></a>' : '<img class="userLogo logo anonymous" src="' + soy.$$escapeHtml("/confluence/s/962fig/8501/fded9f91818631c3677be93247bf5ae6723a1c8d/_") + '/images/icons/profilepics/anonymous.svg" alt="' + soy.$$escapeHtml('User icon') + ': ' + soy.$$escapeHtml(opt_data.username) + '" title="' + soy.$$escapeHtml(opt_data.username) + '">');
};
if (goog.DEBUG) {
  Confluence.Templates.User.logo.soyTemplateName = 'Confluence.Templates.User.logo';
}


Confluence.Templates.User.usernameLink = function(opt_data, opt_ignored) {
  return '' + ((opt_data.username && opt_data.username != '') ? '<a href="' + Confluence.Templates.User.userLinkUrl(opt_data) + '"' + ((opt_data.canView) ? 'class="url fn confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : 'class="url fn"') + '>' + ((opt_data.fullName && opt_data.fullName != '') ? soy.$$escapeHtml(opt_data.fullName) : soy.$$escapeHtml(opt_data.username)) + '</a>' : soy.$$escapeHtml('Anonymous'));
};
if (goog.DEBUG) {
  Confluence.Templates.User.usernameLink.soyTemplateName = 'Confluence.Templates.User.usernameLink';
}


Confluence.Templates.User.fullNameOrAnonymous = function(opt_data, opt_ignored) {
  return '' + ((opt_data.user && opt_data.user.fullName) ? soy.$$escapeHtml(opt_data.user.fullName) : soy.$$escapeHtml('Anonymous'));
};
if (goog.DEBUG) {
  Confluence.Templates.User.fullNameOrAnonymous.soyTemplateName = 'Confluence.Templates.User.fullNameOrAnonymous';
}


Confluence.Templates.User.usernameOrAnonymous = function(opt_data, opt_ignored) {
  return '' + ((opt_data.user && opt_data.user.name) ? soy.$$escapeHtml(opt_data.user.name) : soy.$$escapeHtml('Anonymous'));
};
if (goog.DEBUG) {
  Confluence.Templates.User.usernameOrAnonymous.soyTemplateName = 'Confluence.Templates.User.usernameOrAnonymous';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/icons.soy' */
// This file was automatically generated from icons.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Icons.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Icons == 'undefined') { Confluence.Templates.Icons = {}; }


Confluence.Templates.Icons.contentIcon = function(opt_data, opt_ignored) {
  return '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon ' + soy.$$escapeHtml(opt_data.iconCss) + '" title="' + soy.$$escapeHtml(opt_data.iconTitle) + '">' + soy.$$escapeHtml(opt_data.iconTitle) + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Icons.contentIcon.soyTemplateName = 'Confluence.Templates.Icons.contentIcon';
}


Confluence.Templates.Icons.contentIconFont = function(opt_data, opt_ignored) {
  return '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" title="' + soy.$$escapeHtml(opt_data.iconTitle) + '"><span class="aui-icon ' + soy.$$escapeHtml(opt_data.iconCss) + '">' + soy.$$escapeHtml(opt_data.iconTitle) + '</span></a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Icons.contentIconFont.soyTemplateName = 'Confluence.Templates.Icons.contentIconFont';
}


Confluence.Templates.Icons.iconSpan = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<span class="icon' + ((opt_data.type) ? ' aui-icon aui-icon-small aui-iconfont-' + soy.$$escapeHtml(opt_data.type) : '') + ' ' + ((opt_data.additionalClasses) ? soy.$$escapeHtml(opt_data.additionalClasses) : '') + '">' + ((opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '') + '</span>';
};
if (goog.DEBUG) {
  Confluence.Templates.Icons.iconSpan.soyTemplateName = 'Confluence.Templates.Icons.iconSpan';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/captcha.soy' */
// This file was automatically generated from captcha.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Captcha.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Captcha == 'undefined') { Confluence.Templates.Captcha = {}; }


Confluence.Templates.Captcha.form = function(opt_data, opt_ignored) {
  var output = '<div class="captcha field-group"><label id="captcha-response-label" for="captcha-response"><span class="assistive">' + soy.$$escapeHtml('If you are unable to use this CAPTCHA please \x3ca href\x3d\x22administrators.action\x22 tabindex\x3d\x225\x22\x3econtact your administrator\x3c/a\x3e for assistance.') + '</span></label>' + Confluence.Templates.Captcha.image(opt_data) + '<input type="text" id="captcha-response" name="captchaResponse" value="" class="text" placeholder="' + soy.$$escapeHtml('Type the word above') + '">';
  if (opt_data.captchaErrors && opt_data.captchaErrors.length) {
    var errorList13 = opt_data.captchaErrors;
    var errorListLen13 = errorList13.length;
    for (var errorIndex13 = 0; errorIndex13 < errorListLen13; errorIndex13++) {
      var errorData13 = errorList13[errorIndex13];
      output += aui.message.warning({content: errorData13});
    }
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Captcha.form.soyTemplateName = 'Confluence.Templates.Captcha.form';
}


Confluence.Templates.Captcha.image = function(opt_data, opt_ignored) {
  return '<img src="' + soy.$$escapeHtml("/confluence") + '/jcaptcha?id=' + soy.$$escapeHtml(opt_data.captchaId) + '" class="captcha-image" alt="' + soy.$$escapeHtml('CAPTCHA image') + '"><input type="hidden" name="captchaId" value="' + soy.$$escapeHtml(opt_data.captchaId) + '" placeholder="' + soy.$$escapeHtml('Type the word above') + '">';
};
if (goog.DEBUG) {
  Confluence.Templates.Captcha.image.soyTemplateName = 'Confluence.Templates.Captcha.image';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/notifications.soy' */
// This file was automatically generated from notifications.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Notifications.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Notifications == 'undefined') { Confluence.Templates.Notifications = {}; }


Confluence.Templates.Notifications.notLoggedIn = function(opt_data, opt_ignored) {
  return '' + ((! opt_data.isUserAuthenticated) ? '<div id="anonymous-warning" class="aui-message aui-message-warning closeable">' + soy.$$filterNoAutoescape('You are not logged in. Any changes you make will be marked as \x3cspan class\x3d\x22smalltext\x22\x3eanonymous\x3c/span\x3e.') + ((! opt_data.isExternalUserManagementEnabled) ? ' ' + soy.$$filterNoAutoescape(AJS.format('You may want to \x3ca href\x3d\x22{0}\x22\x3eLog In\x3c/a\x3e if you already have an account.',opt_data.loginURL)) : '') + '</div>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.Notifications.notLoggedIn.soyTemplateName = 'Confluence.Templates.Notifications.notLoggedIn';
}


Confluence.Templates.Notifications.actionErrors = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.actionErrors.length > 0) {
    output += '<div class="aui-message aui-message-error ' + ((opt_data.closeable) ? 'closeable' : '') + '"><p class="title">' + soy.$$escapeHtml('The following error(s) occurred:') + '</p><ul>';
    var errorHtmlList24 = opt_data.actionErrors;
    var errorHtmlListLen24 = errorHtmlList24.length;
    for (var errorHtmlIndex24 = 0; errorHtmlIndex24 < errorHtmlListLen24; errorHtmlIndex24++) {
      var errorHtmlData24 = errorHtmlList24[errorHtmlIndex24];
      output += '<li>' + soy.$$filterNoAutoescape(errorHtmlData24) + '</li>';
    }
    output += '</ul></div>';
  }
  output += '<div id="action-messages"></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Notifications.actionErrors.soyTemplateName = 'Confluence.Templates.Notifications.actionErrors';
}

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
/* module-key = 'confluence.web.resources:marionette', location = '/includes/js/third-party/marionette.js' */
(function(o,f){define("marionette",["backbone","underscore"],function(d,s){return o.Marionette=o.Mn=f(o,d,s)})})(this,function(o,f,d){var s=f.ChildViewContainer,l=d,t=function(a){this._views={};this._indexByModel={};this._indexByCustom={};this._updateLength();l.each(a,this.add,this)};l.extend(t.prototype,{add:function(a,b){var e=a.cid;this._views[e]=a;a.model&&(this._indexByModel[a.model.cid]=e);b&&(this._indexByCustom[b]=e);this._updateLength();return this},findByModel:function(a){return this.findByModelCid(a.cid)},
findByModelCid:function(a){return this.findByCid(this._indexByModel[a])},findByCustom:function(a){return this.findByCid(this._indexByCustom[a])},findByIndex:function(a){return l.values(this._views)[a]},findByCid:function(a){return this._views[a]},remove:function(a){var b=a.cid;a.model&&delete this._indexByModel[a.model.cid];l.any(this._indexByCustom,function(a,c){if(a===b)return delete this._indexByCustom[c],!0},this);delete this._views[b];this._updateLength();return this},call:function(a){this.apply(a,
l.tail(arguments))},apply:function(a,b){l.each(this._views,function(e){l.isFunction(e[a])&&e[a].apply(e,b||[])})},_updateLength:function(){this.length=l.size(this._views)}});l.each("forEach each map find detect filter select reject every all some any include contains invoke toArray first initial rest last without isEmpty pluck reduce".split(" "),function(a){t.prototype[a]=function(){var b=[l.values(this._views)].concat(l.toArray(arguments));return l[a].apply(l,b)}});f.ChildViewContainer=t;f.ChildViewContainer.VERSION=
"0.1.7";f.ChildViewContainer.noConflict=function(){f.ChildViewContainer=s;return this};var j=d,y=f.Wreqr,m=f.Wreqr={};f.Wreqr.VERSION="1.3.3";f.Wreqr.noConflict=function(){f.Wreqr=y;return this};var h=function(a){this.options=a;this._wreqrHandlers={};j.isFunction(this.initialize)&&this.initialize(a)};h.extend=f.Model.extend;j.extend(h.prototype,f.Events,{setHandlers:function(a){j.each(a,function(a,e){var c=null;j.isObject(a)&&!j.isFunction(a)&&(c=a.context,a=a.callback);this.setHandler(e,a,c)},this)},
setHandler:function(a,b,e){this._wreqrHandlers[a]={callback:b,context:e};this.trigger("handler:add",a,b,e)},hasHandler:function(a){return!!this._wreqrHandlers[a]},getHandler:function(a){var b=this._wreqrHandlers[a];if(b)return function(){return b.callback.apply(b.context,arguments)}},removeHandler:function(a){delete this._wreqrHandlers[a]},removeAllHandlers:function(){this._wreqrHandlers={}}});m.Handlers=h;h=function(a){this.options=a;this._commands={};j.isFunction(this.initialize)&&this.initialize(a)};
j.extend(h.prototype,f.Events,{getCommands:function(a){var b=this._commands[a];b||(b={command:a,instances:[]},this._commands[a]=b);return b},addCommand:function(a,b){this.getCommands(a).instances.push(b)},clearCommands:function(a){this.getCommands(a).instances=[]}});m.CommandStorage=h;h=m.Handlers.extend({storageType:m.CommandStorage,constructor:function(a){this.options=a||{};this._initializeStorage(this.options);this.on("handler:add",this._executeCommands,this);m.Handlers.prototype.constructor.apply(this,
arguments)},execute:function(a){var a=arguments[0],b=j.rest(arguments);this.hasHandler(a)?this.getHandler(a).apply(this,b):this.storage.addCommand(a,b)},_executeCommands:function(a,b,e){var c=this.storage.getCommands(a);j.each(c.instances,function(a){b.apply(e,a)});this.storage.clearCommands(a)},_initializeStorage:function(a){a=a.storageType||this.storageType;this.storage=j.isFunction(a)?new a:a}});m.Commands=h;h=m.Handlers.extend({request:function(a){if(this.hasHandler(a))return this.getHandler(a).apply(this,
j.rest(arguments))}});m.RequestResponse=h;h=function(){};h.extend=f.Model.extend;j.extend(h.prototype,f.Events);m.EventAggregator=h;h=function(a){this.vent=new f.Wreqr.EventAggregator;this.reqres=new f.Wreqr.RequestResponse;this.commands=new f.Wreqr.Commands;this.channelName=a};j.extend(h.prototype,{reset:function(){this.vent.off();this.vent.stopListening();this.reqres.removeAllHandlers();this.commands.removeAllHandlers();return this},connectEvents:function(a,b){this._connect("vent",a,b);return this},
connectCommands:function(a,b){this._connect("commands",a,b);return this},connectRequests:function(a,b){this._connect("reqres",a,b);return this},_connect:function(a,b,e){if(b){var e=e||this,c="vent"===a?"on":"setHandler";j.each(b,function(b,d){this[a][c](d,j.bind(b,e))},this)}}});m.Channel=h;h=function(){this._channels={};this.vent={};this.commands={};this.reqres={};this._proxyMethods()};j.extend(h.prototype,{channel:function(a){if(!a)throw Error("Channel must receive a name");return this._getChannel(a)},
_getChannel:function(a){var b=this._channels[a];b||(b=new m.Channel(a),this._channels[a]=b);return b},_proxyMethods:function(){j.each(["vent","commands","reqres"],function(a){j.each(z[a],function(b){var e=this;this[a][b]=function(c){var d=e._getChannel(c)[a];return d[b].apply(d,j.rest(arguments))}},this)},this)}});var z={vent:"on off trigger once stopListening listenTo listenToOnce".split(" "),commands:["execute","setHandler","setHandlers","removeHandler","removeAllHandlers"],reqres:["request","setHandler",
"setHandlers","removeHandler","removeAllHandlers"]},h=new h;m.radio=h;var A=o.Marionette,B=o.Mn,c=f.Marionette={};c.VERSION="2.4.2";c.noConflict=function(){o.Marionette=A;o.Mn=B;return this};f.Marionette=c;c.Deferred=f.$.Deferred;c.extend=f.Model.extend;c.isNodeAttached=function(a){return f.$.contains(document.documentElement,a)};c.mergeOptions=function(a,b){a&&d.extend(this,d.pick(a,b))};c.getOption=function(a,b){if(a&&b)return a.options&&void 0!==a.options[b]?a.options[b]:a[b]};c.proxyGetOption=
function(a){return c.getOption(this,a)};c._getValue=function(a,b,e){d.isFunction(a)&&(a=e?a.apply(b,e):a.call(b));return a};c.normalizeMethods=function(a){return d.reduce(a,function(a,e,c){d.isFunction(e)||(e=this[e]);e&&(a[c]=e);return a},{},this)};c.normalizeUIString=function(a,b){return a.replace(/@ui\.[a-zA-Z_$0-9]*/g,function(a){return b[a.slice(4)]})};c.normalizeUIKeys=function(a,b){return d.reduce(a,function(a,d,g){g=c.normalizeUIString(g,b);a[g]=d;return a},{})};c.normalizeUIValues=function(a,
b,e){d.each(a,function(i,g){d.isString(i)?a[g]=c.normalizeUIString(i,b):d.isObject(i)&&d.isArray(e)&&(d.extend(i,c.normalizeUIValues(d.pick(i,e),b)),d.each(e,function(a){var e=i[a];d.isString(e)&&(i[a]=c.normalizeUIString(e,b))}))});return a};c.actAsCollection=function(a,b){d.each("forEach each map find detect filter select reject every all some any include contains invoke toArray first initial rest last without isEmpty pluck".split(" "),function(e){a[e]=function(){var a=[d.values(d.result(this,b))].concat(d.toArray(arguments));
return d[e].apply(d,a)}})};var q=c.deprecate=function(a,b){d.isObject(a)&&(a=a.prev+" is going to be removed in the future. Please use "+a.next+" instead."+(a.url?" See: "+a.url:""));if((void 0===b||!b)&&!q._cache[a])q._warn("Deprecation warning: "+a),q._cache[a]=!0};q._warn="undefined"!==typeof console&&(console.warn||console.log)||function(){};q._cache={};var C=function(a,b,e){return e.toUpperCase()},D=/(^|:)(\w)/gi;c._triggerMethod=function(a,b,e){var c=3>arguments.length;c&&(e=b,b=e[0]);var g=
"on"+b.replace(D,C),g=a[g],f;d.isFunction(g)&&(f=g.apply(a,c?d.rest(e):e));d.isFunction(a.trigger)&&(1<c+e.length?a.trigger.apply(a,c?e:[b].concat(d.drop(e,0))):a.trigger(b));return f};c.triggerMethod=function(a){return c._triggerMethod(this,arguments)};c.triggerMethodOn=function(a){return(d.isFunction(a.triggerMethod)?a.triggerMethod:c.triggerMethod).apply(a,d.rest(arguments))};c.MonitorDOMRefresh=function(a){function b(){a._isShown&&a._isRendered&&c.isNodeAttached(a.el)&&d.isFunction(a.triggerMethod)&&
a.triggerMethod("dom:refresh")}a.on({show:function(){a._isShown=!0;b()},render:function(){a._isRendered=!0;b()}})};var n=c,E=function(a,b,e,c){c=c.split(/\s+/);d.each(c,function(c){var d=a[c];if(!d)throw new n.Error('Method "'+c+'" was configured as an event handler, but does not exist.');a.listenTo(b,e,d)})},F=function(a,b,e,c){a.listenTo(b,e,c)},G=function(a,b,e,c){c=c.split(/\s+/);d.each(c,function(c){a.stopListening(b,e,a[c])})},H=function(a,b,e,c){a.stopListening(b,e,c)},u=function(a,b,e,c,g){if(b&&
e){if(!d.isObject(e))throw new n.Error({message:"Bindings must be an object or function.",url:"marionette.functions.html#marionettebindentityevents"});e=n._getValue(e,a);d.each(e,function(e,f){d.isFunction(e)?c(a,b,f,e):g(a,b,f,e)})}};n.bindEntityEvents=function(a,b,e){u(a,b,e,F,E)};n.unbindEntityEvents=function(a,b,e){u(a,b,e,H,G)};n.proxyBindEntityEvents=function(a,b){return n.bindEntityEvents(this,a,b)};n.proxyUnbindEntityEvents=function(a,b){return n.unbindEntityEvents(this,a,b)};var v="description fileName lineNumber name message number".split(" ");
c.Error=c.extend.call(Error,{urlRoot:"http://marionettejs.com/docs/v"+c.VERSION+"/",constructor:function(a,b){d.isObject(a)?(b=a,a=b.message):b||(b={});var e=Error.call(this,a);d.extend(this,d.pick(e,v),d.pick(b,v));this.captureStackTrace();b.url&&(this.url=this.urlRoot+b.url)},captureStackTrace:function(){Error.captureStackTrace&&Error.captureStackTrace(this,c.Error)},toString:function(){return this.name+": "+this.message+(this.url?" See: "+this.url:"")}});c.Error.extend=c.extend;c.Callbacks=function(){this._deferred=
c.Deferred();this._callbacks=[]};d.extend(c.Callbacks.prototype,{add:function(a,b){var e=d.result(this._deferred,"promise");this._callbacks.push({cb:a,ctx:b});e.then(function(e){b&&(e.context=b);a.call(e.context,e.options)})},run:function(a,b){this._deferred.resolve({options:a,context:b})},reset:function(){var a=this._callbacks;this._deferred=c.Deferred();this._callbacks=[];d.each(a,function(a){this.add(a.cb,a.ctx)},this)}});c.Controller=function(a){this.options=a||{};d.isFunction(this.initialize)&&
this.initialize(this.options)};c.Controller.extend=c.extend;d.extend(c.Controller.prototype,f.Events,{destroy:function(){c._triggerMethod(this,"before:destroy",arguments);c._triggerMethod(this,"destroy",arguments);this.stopListening();this.off();return this},triggerMethod:c.triggerMethod,mergeOptions:c.mergeOptions,getOption:c.proxyGetOption});c.Object=function(a){this.options=d.extend({},d.result(this,"options"),a);this.initialize.apply(this,arguments)};c.Object.extend=c.extend;d.extend(c.Object.prototype,
f.Events,{initialize:function(){},destroy:function(){this.triggerMethod("before:destroy");this.triggerMethod("destroy");this.stopListening();return this},triggerMethod:c.triggerMethod,mergeOptions:c.mergeOptions,getOption:c.proxyGetOption,bindEntityEvents:c.proxyBindEntityEvents,unbindEntityEvents:c.proxyUnbindEntityEvents});c.Region=c.Object.extend({constructor:function(a){this.options=a||{};this.el=this.getOption("el");this.el=this.el instanceof f.$?this.el[0]:this.el;if(!this.el)throw new c.Error({name:"NoElError",
message:'An "el" must be specified for a region.'});this.$el=this.getEl(this.el);c.Object.call(this,a)},show:function(a,b){if(this._ensureElement()){this._ensureViewIsIntact(a);var e=b||{},i=a!==this.currentView,g=!!e.preventDestroy,f=!!e.forceShow,h=!!this.currentView,g=i&&!g,i=i||f;h&&this.triggerMethod("before:swapOut",this.currentView,this,b);this.currentView&&delete this.currentView._parent;g?this.empty():h&&i&&this.currentView.off("destroy",this.empty,this);i&&(a.once("destroy",this.empty,this),
a.render(),a._parent=this,h&&this.triggerMethod("before:swap",a,this,b),this.triggerMethod("before:show",a,this,b),c.triggerMethodOn(a,"before:show",a,this,b),h&&this.triggerMethod("swapOut",this.currentView,this,b),i=c.isNodeAttached(this.el),f=[],e=d.extend({triggerBeforeAttach:this.triggerBeforeAttach,triggerAttach:this.triggerAttach},e),i&&e.triggerBeforeAttach&&(f=this._displayedViews(a),this._triggerAttach(f,"before:")),this.attachHtml(a),this.currentView=a,i&&e.triggerAttach&&(f=this._displayedViews(a),
this._triggerAttach(f)),h&&this.triggerMethod("swap",a,this,b),this.triggerMethod("show",a,this,b),c.triggerMethodOn(a,"show",a,this,b));return this}},triggerBeforeAttach:!0,triggerAttach:!0,_triggerAttach:function(a,b){var e=(b||"")+"attach";d.each(a,function(a){c.triggerMethodOn(a,e,a,this)},this)},_displayedViews:function(a){return d.union([a],d.result(a,"_getNestedViews")||[])},_ensureElement:function(){d.isObject(this.el)||(this.$el=this.getEl(this.el),this.el=this.$el[0]);if(!this.$el||0===
this.$el.length){if(this.getOption("allowMissingEl"))return!1;throw new c.Error('An "el" '+this.$el.selector+" must exist in DOM");}return!0},_ensureViewIsIntact:function(a){if(!a)throw new c.Error({name:"ViewNotValid",message:"The view passed is undefined and therefore invalid. You must pass a view instance to show."});if(a.isDestroyed)throw new c.Error({name:"ViewDestroyedError",message:'View (cid: "'+a.cid+'") has already been destroyed and cannot be used.'});},getEl:function(a){return f.$(a,c._getValue(this.options.parentEl,
this))},attachHtml:function(a){this.$el.contents().detach();this.el.appendChild(a.el)},empty:function(a){var b=this.currentView,a=c._getValue(a,"preventDestroy",this);if(b)return b.off("destroy",this.empty,this),this.triggerMethod("before:empty",b),a||this._destroyView(),this.triggerMethod("empty",b),delete this.currentView,a&&this.$el.contents().detach(),this},_destroyView:function(){var a=this.currentView;a.destroy&&!a.isDestroyed?a.destroy():a.remove&&(a.remove(),a.isDestroyed=!0)},attachView:function(a){this.currentView=
a;return this},hasView:function(){return!!this.currentView},reset:function(){this.empty();this.$el&&(this.el=this.$el.selector);delete this.$el;return this}},{buildRegion:function(a,b){if(d.isString(a))return this._buildRegionFromSelector(a,b);if(a.selector||a.el||a.regionClass)return this._buildRegionFromObject(a,b);if(d.isFunction(a))return this._buildRegionFromRegionClass(a);throw new c.Error({message:"Improper region configuration type.",url:"marionette.region.html#region-configuration-types"});
},_buildRegionFromSelector:function(a,b){return new b({el:a})},_buildRegionFromObject:function(a,b){var e=a.regionClass||b,c=d.omit(a,"selector","regionClass");a.selector&&!c.el&&(c.el=a.selector);return new e(c)},_buildRegionFromRegionClass:function(a){return new a}});c.RegionManager=c.Controller.extend({constructor:function(a){this._regions={};this.length=0;c.Controller.call(this,a);this.addRegions(this.getOption("regions"))},addRegions:function(a,b){a=c._getValue(a,this,arguments);return d.reduce(a,
function(a,c,g){d.isString(c)&&(c={selector:c});c.selector&&(c=d.defaults({},c,b));a[g]=this.addRegion(g,c);return a},{},this)},addRegion:function(a,b){var e;e=b instanceof c.Region?b:c.Region.buildRegion(b,c.Region);this.triggerMethod("before:add:region",a,e);e._parent=this;this._store(a,e);this.triggerMethod("add:region",a,e);return e},get:function(a){return this._regions[a]},getRegions:function(){return d.clone(this._regions)},removeRegion:function(a){var b=this._regions[a];this._remove(a,b);return b},
removeRegions:function(){var a=this.getRegions();d.each(this._regions,function(a,e){this._remove(e,a)},this);return a},emptyRegions:function(){var a=this.getRegions();d.invoke(a,"empty");return a},destroy:function(){this.removeRegions();return c.Controller.prototype.destroy.apply(this,arguments)},_store:function(a,b){this._regions[a]||this.length++;this._regions[a]=b},_remove:function(a,b){this.triggerMethod("before:remove:region",a,b);b.empty();b.stopListening();delete b._parent;delete this._regions[a];
this.length--;this.triggerMethod("remove:region",a,b)}});c.actAsCollection(c.RegionManager.prototype,"_regions");c.TemplateCache=function(a){this.templateId=a};d.extend(c.TemplateCache,{templateCaches:{},get:function(a,b){var e=this.templateCaches[a];e||(e=new c.TemplateCache(a),this.templateCaches[a]=e);return e.load(b)},clear:function(){var a,b=d.toArray(arguments),e=b.length;if(0<e)for(a=0;a<e;a++)delete this.templateCaches[b[a]];else this.templateCaches={}}});d.extend(c.TemplateCache.prototype,
{load:function(a){if(this.compiledTemplate)return this.compiledTemplate;var b=this.loadTemplate(this.templateId,a);return this.compiledTemplate=this.compileTemplate(b,a)},loadTemplate:function(a){var b=f.$(a).html();if(!b||0===b.length)throw new c.Error({name:"NoTemplateError",message:'Could not find template: "'+a+'"'});return b},compileTemplate:function(a,b){return d.template(a,b)}});c.Renderer={render:function(a,b){if(!a)throw new c.Error({name:"TemplateNotFoundError",message:"Cannot render the template since its false, null or undefined."});
return(d.isFunction(a)?a:c.TemplateCache.get(a))(b)}};c.View=f.View.extend({isDestroyed:!1,constructor:function(a){d.bindAll(this,"render");a=c._getValue(a,this);this.options=d.extend({},d.result(this,"options"),a);this._behaviors=c.Behaviors(this);f.View.call(this,this.options);c.MonitorDOMRefresh(this)},getTemplate:function(){return this.getOption("template")},serializeModel:function(a){return a.toJSON.apply(a,d.rest(arguments))},mixinTemplateHelpers:function(a){var a=a||{},b=this.getOption("templateHelpers"),
b=c._getValue(b,this);return d.extend(a,b)},normalizeUIKeys:function(a){var b=d.result(this,"_uiBindings");return c.normalizeUIKeys(a,b||d.result(this,"ui"))},normalizeUIValues:function(a,b){var e=d.result(this,"ui"),i=d.result(this,"_uiBindings");return c.normalizeUIValues(a,i||e,b)},configureTriggers:function(){if(this.triggers){var a=this.normalizeUIKeys(d.result(this,"triggers"));return d.reduce(a,function(a,e,c){a[c]=this._buildViewTrigger(e);return a},{},this)}},delegateEvents:function(a){this._delegateDOMEvents(a);
this.bindEntityEvents(this.model,this.getOption("modelEvents"));this.bindEntityEvents(this.collection,this.getOption("collectionEvents"));d.each(this._behaviors,function(a){a.bindEntityEvents(this.model,a.getOption("modelEvents"));a.bindEntityEvents(this.collection,a.getOption("collectionEvents"))},this);return this},_delegateDOMEvents:function(a){var b=c._getValue(a||this.events,this),b=this.normalizeUIKeys(b);d.isUndefined(a)&&(this.events=b);var a={},e=d.result(this,"behaviorEvents")||{},i=this.configureTriggers(),
g=d.result(this,"behaviorTriggers")||{};d.extend(a,e,b,i,g);f.View.prototype.delegateEvents.call(this,a)},undelegateEvents:function(){f.View.prototype.undelegateEvents.apply(this,arguments);this.unbindEntityEvents(this.model,this.getOption("modelEvents"));this.unbindEntityEvents(this.collection,this.getOption("collectionEvents"));d.each(this._behaviors,function(a){a.unbindEntityEvents(this.model,a.getOption("modelEvents"));a.unbindEntityEvents(this.collection,a.getOption("collectionEvents"))},this);
return this},_ensureViewIsIntact:function(){if(this.isDestroyed)throw new c.Error({name:"ViewDestroyedError",message:'View (cid: "'+this.cid+'") has already been destroyed and cannot be used.'});},destroy:function(){if(this.isDestroyed)return this;var a=d.toArray(arguments);this.triggerMethod.apply(this,["before:destroy"].concat(a));this.isDestroyed=!0;this.triggerMethod.apply(this,["destroy"].concat(a));this.unbindUIElements();this.isRendered=!1;this.remove();d.invoke(this._behaviors,"destroy",a);
return this},bindUIElements:function(){this._bindUIElements();d.invoke(this._behaviors,this._bindUIElements)},_bindUIElements:function(){if(this.ui){this._uiBindings||(this._uiBindings=this.ui);var a=d.result(this,"_uiBindings");this.ui={};d.each(a,function(a,e){this.ui[e]=this.$(a)},this)}},unbindUIElements:function(){this._unbindUIElements();d.invoke(this._behaviors,this._unbindUIElements)},_unbindUIElements:function(){this.ui&&this._uiBindings&&(d.each(this.ui,function(a,b){delete this.ui[b]},
this),this.ui=this._uiBindings,delete this._uiBindings)},_buildViewTrigger:function(a){var b=d.isObject(a),e=d.defaults({},b?a:{},{preventDefault:!0,stopPropagation:!0}),c=b?e.event:a;return function(a){a&&(a.preventDefault&&e.preventDefault&&a.preventDefault(),a.stopPropagation&&e.stopPropagation&&a.stopPropagation());this.triggerMethod(c,{view:this,model:this.model,collection:this.collection})}},setElement:function(){var a=f.View.prototype.setElement.apply(this,arguments);d.invoke(this._behaviors,
"proxyViewProperties",this);return a},triggerMethod:function(){var a=c._triggerMethod(this,arguments);this._triggerEventOnBehaviors(arguments);this._triggerEventOnParentLayout(arguments[0],d.rest(arguments));return a},_triggerEventOnBehaviors:function(a){for(var b=c._triggerMethod,e=this._behaviors,d=0,g=e&&e.length;d<g;d++)b(e[d],a)},_triggerEventOnParentLayout:function(a,b){var e=this._parentLayoutView();if(e){var i=c.getOption(e,"childViewEventPrefix")+":"+a;c._triggerMethod(e,[i,this].concat(b));
i=c.getOption(e,"childEvents");(i=e.normalizeMethods(i))&&d.isFunction(i[a])&&i[a].apply(e,[this].concat(b))}},_getImmediateChildren:function(){return[]},_getNestedViews:function(){var a=this._getImmediateChildren();return!a.length?a:d.reduce(a,function(a,e){return!e._getNestedViews?a:a.concat(e._getNestedViews())},a)},_getAncestors:function(){for(var a=[],b=this._parent;b;)a.push(b),b=b._parent;return a},_parentLayoutView:function(){var a=this._getAncestors();return d.find(a,function(a){return a instanceof
c.LayoutView})},normalizeMethods:c.normalizeMethods,mergeOptions:c.mergeOptions,getOption:c.proxyGetOption,bindEntityEvents:c.proxyBindEntityEvents,unbindEntityEvents:c.proxyUnbindEntityEvents});c.ItemView=c.View.extend({constructor:function(){c.View.apply(this,arguments)},serializeData:function(){if(!this.model&&!this.collection)return{};var a=[this.model||this.collection];arguments.length&&a.push.apply(a,arguments);return this.model?this.serializeModel.apply(this,a):{items:this.serializeCollection.apply(this,
a)}},serializeCollection:function(a){return a.toJSON.apply(a,d.rest(arguments))},render:function(){this._ensureViewIsIntact();this.triggerMethod("before:render",this);this._renderTemplate();this.isRendered=!0;this.bindUIElements();this.triggerMethod("render",this);return this},_renderTemplate:function(){var a=this.getTemplate();if(!1!==a){if(!a)throw new c.Error({name:"UndefinedTemplateError",message:"Cannot render the template since it is null or undefined."});var b=this.mixinTemplateHelpers(this.serializeData()),
a=c.Renderer.render(a,b,this);this.attachElContent(a);return this}},attachElContent:function(a){this.$el.html(a);return this}});c.CollectionView=c.View.extend({childViewEventPrefix:"childview",sort:!0,constructor:function(a){this.once("render",this._initialEvents);this._initChildViewStorage();c.View.apply(this,arguments);this.on({"before:show":this._onBeforeShowCalled,show:this._onShowCalled,"before:attach":this._onBeforeAttachCalled,attach:this._onAttachCalled});this.initRenderBuffer()},initRenderBuffer:function(){this._bufferedChildren=
[]},startBuffering:function(){this.initRenderBuffer();this.isBuffering=!0},endBuffering:function(){var a=this._isShown&&c.isNodeAttached(this.el),b;this.isBuffering=!1;this._isShown&&this._triggerMethodMany(this._bufferedChildren,this,"before:show");a&&this._triggerBeforeAttach&&(b=this._getNestedViews(),this._triggerMethodMany(b,this,"before:attach"));this.attachBuffer(this,this._createBuffer());a&&this._triggerAttach&&(b=this._getNestedViews(),this._triggerMethodMany(b,this,"attach"));this._isShown&&
this._triggerMethodMany(this._bufferedChildren,this,"show");this.initRenderBuffer()},_triggerMethodMany:function(a,b,e){var i=d.drop(arguments,3);d.each(a,function(a){c.triggerMethodOn.apply(a,[a,e,a,b].concat(i))})},_initialEvents:function(){this.collection&&(this.listenTo(this.collection,"add",this._onCollectionAdd),this.listenTo(this.collection,"remove",this._onCollectionRemove),this.listenTo(this.collection,"reset",this.render),this.getOption("sort")&&this.listenTo(this.collection,"sort",this._sortViews))},
_onCollectionAdd:function(a,b,e){b=void 0!==e.at?e.at:d.indexOf(this._filteredSortedModels(),a);this._shouldAddChild(a,b)&&(this.destroyEmptyView(),e=this.getChildView(a),this.addChild(a,e,b))},_onCollectionRemove:function(a){a=this.children.findByModel(a);this.removeChildView(a);this.checkEmpty()},_onBeforeShowCalled:function(){this._triggerBeforeAttach=this._triggerAttach=!1;this.children.each(function(a){c.triggerMethodOn(a,"before:show",a)})},_onShowCalled:function(){this.children.each(function(a){c.triggerMethodOn(a,
"show",a)})},_onBeforeAttachCalled:function(){this._triggerBeforeAttach=!0},_onAttachCalled:function(){this._triggerAttach=!0},render:function(){this._ensureViewIsIntact();this.triggerMethod("before:render",this);this._renderChildren();this.isRendered=!0;this.triggerMethod("render",this);return this},reorder:function(){var a=this.children,b=this._filteredSortedModels();d.find(b,function(b){return!a.findByModel(b)})?this.render():(b=d.map(b,function(b,c){var d=a.findByModel(b);d._index=c;return d.el}),
this.triggerMethod("before:reorder"),this._appendReorderedChildren(b),this.triggerMethod("reorder"))},resortView:function(){c.getOption(this,"reorderOnSort")?this.reorder():this.render()},_sortViews:function(){var a=this._filteredSortedModels();d.find(a,function(a,e){var c=this.children.findByModel(a);return!c||c._index!==e},this)&&this.resortView()},_emptyViewIndex:-1,_appendReorderedChildren:function(a){this.$el.append(a)},_renderChildren:function(){this.destroyEmptyView();this.destroyChildren({checkEmpty:!1});
this.isEmpty(this.collection)?this.showEmptyView():(this.triggerMethod("before:render:collection",this),this.startBuffering(),this.showCollection(),this.endBuffering(),this.triggerMethod("render:collection",this),this.children.isEmpty()&&this.showEmptyView())},showCollection:function(){var a,b=this._filteredSortedModels();d.each(b,function(b,c){a=this.getChildView(b);this.addChild(b,a,c)},this)},_filteredSortedModels:function(){var a;a=(a=this.getViewComparator())?d.isString(a)||1===a.length?this.collection.sortBy(a,
this):d.clone(this.collection.models).sort(d.bind(a,this)):this.collection.models;this.getOption("filter")&&(a=d.filter(a,function(a,c){return this._shouldAddChild(a,c)},this));return a},showEmptyView:function(){var a=this.getEmptyView();if(a&&!this._showingEmptyView){this.triggerMethod("before:render:empty");this._showingEmptyView=!0;var b=new f.Model;this.addEmptyView(b,a);this.triggerMethod("render:empty")}},destroyEmptyView:function(){this._showingEmptyView&&(this.triggerMethod("before:remove:empty"),
this.destroyChildren(),delete this._showingEmptyView,this.triggerMethod("remove:empty"))},getEmptyView:function(){return this.getOption("emptyView")},addEmptyView:function(a,b){var e=this._isShown&&!this.isBuffering&&c.isNodeAttached(this.el),i,g=this.getOption("emptyViewOptions")||this.getOption("childViewOptions");d.isFunction(g)&&(g=g.call(this,a,this._emptyViewIndex));g=this.buildChildView(a,b,g);g._parent=this;this.proxyChildEvents(g);this._isShown&&c.triggerMethodOn(g,"before:show",g);this.children.add(g);
e&&this._triggerBeforeAttach&&(i=[g].concat(g._getNestedViews()),g.once("render",function(){this._triggerMethodMany(i,this,"before:attach")},this));this.renderChildView(g,this._emptyViewIndex);e&&this._triggerAttach&&(i=[g].concat(g._getNestedViews()),this._triggerMethodMany(i,this,"attach"));this._isShown&&c.triggerMethodOn(g,"show",g)},getChildView:function(){var a=this.getOption("childView");if(!a)throw new c.Error({name:"NoChildViewError",message:'A "childView" must be specified'});return a},
addChild:function(a,b,e){var d=this.getOption("childViewOptions"),d=c._getValue(d,this,[a,e]),a=this.buildChildView(a,b,d);this._updateIndices(a,!0,e);this.triggerMethod("before:add:child",a);this._addChildView(a,e);this.triggerMethod("add:child",a);a._parent=this;return a},_updateIndices:function(a,b,c){this.getOption("sort")&&(b&&(a._index=c),this.children.each(function(c){if(c._index>=a._index)c._index=c._index+(b?1:-1)}))},_addChildView:function(a,b){var e=this._isShown&&!this.isBuffering&&c.isNodeAttached(this.el),
d;this.proxyChildEvents(a);this._isShown&&!this.isBuffering&&c.triggerMethodOn(a,"before:show",a);this.children.add(a);e&&this._triggerBeforeAttach&&(d=[a].concat(a._getNestedViews()),a.once("render",function(){this._triggerMethodMany(d,this,"before:attach")},this));this.renderChildView(a,b);e&&this._triggerAttach&&(d=[a].concat(a._getNestedViews()),this._triggerMethodMany(d,this,"attach"));this._isShown&&!this.isBuffering&&c.triggerMethodOn(a,"show",a)},renderChildView:function(a,b){a.render();this.attachHtml(this,
a,b);return a},buildChildView:function(a,b,c){a=d.extend({model:a},c);return new b(a)},removeChildView:function(a){a&&(this.triggerMethod("before:remove:child",a),a.destroy?a.destroy():a.remove&&a.remove(),delete a._parent,this.stopListening(a),this.children.remove(a),this.triggerMethod("remove:child",a),this._updateIndices(a,!1));return a},isEmpty:function(){return!this.collection||0===this.collection.length},checkEmpty:function(){this.isEmpty(this.collection)&&this.showEmptyView()},attachBuffer:function(a,
b){a.$el.append(b)},_createBuffer:function(){var a=document.createDocumentFragment();d.each(this._bufferedChildren,function(b){a.appendChild(b.el)});return a},attachHtml:function(a,b,c){a.isBuffering?a._bufferedChildren.splice(c,0,b):a._insertBefore(b,c)||a._insertAfter(b)},_insertBefore:function(a,b){var c;this.getOption("sort")&&b<this.children.length-1&&(c=this.children.find(function(a){return a._index===b+1}));return c?(c.$el.before(a.el),!0):!1},_insertAfter:function(a){this.$el.append(a.el)},
_initChildViewStorage:function(){this.children=new f.ChildViewContainer},destroy:function(){if(this.isDestroyed)return this;this.triggerMethod("before:destroy:collection");this.destroyChildren({checkEmpty:!1});this.triggerMethod("destroy:collection");return c.View.prototype.destroy.apply(this,arguments)},destroyChildren:function(a){var a=a||{},b=!0,c=this.children.map(d.identity);d.isUndefined(a.checkEmpty)||(b=a.checkEmpty);this.children.each(this.removeChildView,this);b&&this.checkEmpty();return c},
_shouldAddChild:function(a,b){var c=this.getOption("filter");return!d.isFunction(c)||c.call(this,a,b,this.collection)},proxyChildEvents:function(a){var b=this.getOption("childViewEventPrefix");this.listenTo(a,"all",function(){var c=d.toArray(arguments),i=c[0],g=this.normalizeMethods(d.result(this,"childEvents"));c[0]=b+":"+i;c.splice(1,0,a);"undefined"!==typeof g&&d.isFunction(g[i])&&g[i].apply(this,c.slice(1));this.triggerMethod.apply(this,c)})},_getImmediateChildren:function(){return d.values(this.children._views)},
getViewComparator:function(){return this.getOption("viewComparator")}});c.CompositeView=c.CollectionView.extend({constructor:function(){c.CollectionView.apply(this,arguments)},_initialEvents:function(){this.collection&&(this.listenTo(this.collection,"add",this._onCollectionAdd),this.listenTo(this.collection,"remove",this._onCollectionRemove),this.listenTo(this.collection,"reset",this._renderChildren),this.getOption("sort")&&this.listenTo(this.collection,"sort",this._sortViews))},getChildView:function(){return this.getOption("childView")||
this.constructor},serializeData:function(){var a={};this.model&&(a=d.partial(this.serializeModel,this.model).apply(this,arguments));return a},render:function(){this._ensureViewIsIntact();this._isRendering=!0;this.resetChildViewContainer();this.triggerMethod("before:render",this);this._renderTemplate();this._renderChildren();this._isRendering=!1;this.isRendered=!0;this.triggerMethod("render",this);return this},_renderChildren:function(){(this.isRendered||this._isRendering)&&c.CollectionView.prototype._renderChildren.call(this)},
_renderTemplate:function(){var a={},a=this.serializeData(),a=this.mixinTemplateHelpers(a);this.triggerMethod("before:render:template");var b=this.getTemplate(),a=c.Renderer.render(b,a,this);this.attachElContent(a);this.bindUIElements();this.triggerMethod("render:template")},attachElContent:function(a){this.$el.html(a);return this},attachBuffer:function(a,b){this.getChildViewContainer(a).append(b)},_insertAfter:function(a){this.getChildViewContainer(this,a).append(a.el)},_appendReorderedChildren:function(a){this.getChildViewContainer(this).append(a)},
getChildViewContainer:function(a){if(a.$childViewContainer)return a.$childViewContainer;var b;if(b=c.getOption(a,"childViewContainer")){if(b=c._getValue(b,a),b="@"===b.charAt(0)&&a.ui?a.ui[b.substr(4)]:a.$(b),0>=b.length)throw new c.Error({name:"ChildViewContainerMissingError",message:'The specified "childViewContainer" was not found: '+a.childViewContainer});}else b=a.$el;return a.$childViewContainer=b},resetChildViewContainer:function(){this.$childViewContainer&&(this.$childViewContainer=void 0)}});
c.LayoutView=c.ItemView.extend({regionClass:c.Region,options:{destroyImmediate:!1},childViewEventPrefix:"childview",constructor:function(a){a=a||{};this._firstRender=!0;this._initializeRegions(a);c.ItemView.call(this,a)},render:function(){this._ensureViewIsIntact();this._firstRender?this._firstRender=!1:this._reInitializeRegions();return c.ItemView.prototype.render.apply(this,arguments)},destroy:function(){if(this.isDestroyed)return this;!0===this.getOption("destroyImmediate")&&this.$el.remove();
this.regionManager.destroy();return c.ItemView.prototype.destroy.apply(this,arguments)},showChildView:function(a,b){return this.getRegion(a).show(b)},getChildView:function(a){return this.getRegion(a).currentView},addRegion:function(a,b){var c={};c[a]=b;return this._buildRegions(c)[a]},addRegions:function(a){this.regions=d.extend({},this.regions,a);return this._buildRegions(a)},removeRegion:function(a){delete this.regions[a];return this.regionManager.removeRegion(a)},getRegion:function(a){return this.regionManager.get(a)},
getRegions:function(){return this.regionManager.getRegions()},_buildRegions:function(a){var b={regionClass:this.getOption("regionClass"),parentEl:d.partial(d.result,this,"el")};return this.regionManager.addRegions(a,b)},_initializeRegions:function(a){var b;this._initRegionManager();b=c._getValue(this.regions,this,[a])||{};var e=this.getOption.call(a,"regions"),e=c._getValue(e,this,[a]);d.extend(b,e);b=this.normalizeUIValues(b,["selector","el"]);this.addRegions(b)},_reInitializeRegions:function(){this.regionManager.invoke("reset")},
getRegionManager:function(){return new c.RegionManager},_initRegionManager:function(){this.regionManager=this.getRegionManager();this.regionManager._parent=this;this.listenTo(this.regionManager,"before:add:region",function(a){this.triggerMethod("before:add:region",a)});this.listenTo(this.regionManager,"add:region",function(a,b){this[a]=b;this.triggerMethod("add:region",a,b)});this.listenTo(this.regionManager,"before:remove:region",function(a){this.triggerMethod("before:remove:region",a)});this.listenTo(this.regionManager,
"remove:region",function(a,b){delete this[a];this.triggerMethod("remove:region",a,b)})},_getImmediateChildren:function(){return d.chain(this.regionManager.getRegions()).pluck("currentView").compact().value()}});c.Behavior=c.Object.extend({constructor:function(a,b){this.view=b;this.defaults=d.result(this,"defaults")||{};this.options=d.extend({},this.defaults,a);this.ui=d.extend({},d.result(b,"ui"),d.result(this,"ui"));c.Object.apply(this,arguments)},$:function(){return this.view.$.apply(this.view,
arguments)},destroy:function(){this.stopListening();return this},proxyViewProperties:function(a){this.$el=a.$el;this.el=a.el}});var r=h=c,k=d,p=function(a,b){if(!k.isObject(a.behaviors))return{};b=p.parseBehaviors(a,b||k.result(a,"behaviors"));p.wrap(a,b,k.keys(w));return b},x=function(a,b){this._view=a;this._behaviors=b;this._triggers={}},I=/^(\S+)\s*(.*)$/,w={behaviorTriggers:function(a,b){return(new x(this,b)).buildBehaviorTriggers()},behaviorEvents:function(a,b){var c={};k.each(b,function(a,b){var d=
{},f=k.clone(k.result(a,"events"))||{},f=r.normalizeUIKeys(f,a._uiBindings||a.ui),h=0;k.each(f,function(c,e){var f=e.match(I),f=f[1]+"."+[this.cid,b,h++," "].join("")+f[2],j=k.isFunction(c)?c:a[c];d[f]=k.bind(j,a)},this);c=k.extend(c,d)},this);return c}};k.extend(p,{behaviorsLookup:function(){throw new r.Error({message:"You must define where your behaviors are stored.",url:"marionette.behaviors.html#behaviorslookup"});},getBehaviorClass:function(a,b){return a.behaviorClass?a.behaviorClass:r._getValue(p.behaviorsLookup,
this,[a,b])[b]},parseBehaviors:function(a,b){return k.chain(b).map(function(b,c){var d=new (p.getBehaviorClass(b,c))(b,a),f=p.parseBehaviors(a,k.result(d,"behaviors"));return[d].concat(f)}).flatten().value()},wrap:function(a,b,c){k.each(c,function(c){a[c]=k.partial(w[c],a[c],b)})}});k.extend(x.prototype,{buildBehaviorTriggers:function(){k.each(this._behaviors,this._buildTriggerHandlersForBehavior,this);return this._triggers},_buildTriggerHandlersForBehavior:function(a,b){var c=k.clone(k.result(a,
"triggers"))||{},c=r.normalizeUIKeys(c,a._uiBindings||a.ui);k.each(c,k.bind(this._setHandlerForBehavior,this,a,b))},_setHandlerForBehavior:function(a,b,c,d){a=d.replace(/^\S+/,function(a){return a+".behaviortriggers"+b});this._triggers[a]=this._view._buildViewTrigger(c)}});h.Behaviors=p;c.AppRouter=f.Router.extend({constructor:function(a){this.options=a||{};f.Router.apply(this,arguments);var b=this.getOption("appRoutes"),c=this._getController();this.processAppRoutes(c,b);this.on("route",this._processOnRoute,
this)},appRoute:function(a,b){var c=this._getController();this._addAppRoute(c,a,b)},_processOnRoute:function(a,b){if(d.isFunction(this.onRoute)){var c=d.invert(this.getOption("appRoutes"))[a];this.onRoute(a,c,b)}},processAppRoutes:function(a,b){if(b){var c=d.keys(b).reverse();d.each(c,function(c){this._addAppRoute(a,c,b[c])},this)}},_getController:function(){return this.getOption("controller")},_addAppRoute:function(a,b,e){var f=a[e];if(!f)throw new c.Error('Method "'+e+'" was not found on the controller');
this.route(b,e,d.bind(f,a))},mergeOptions:c.mergeOptions,getOption:c.proxyGetOption,triggerMethod:c.triggerMethod,bindEntityEvents:c.proxyBindEntityEvents,unbindEntityEvents:c.proxyUnbindEntityEvents});c.Application=c.Object.extend({constructor:function(a){this._initializeRegions(a);this._initCallbacks=new c.Callbacks;this.submodules={};d.extend(this,a);this._initChannel();c.Object.call(this,a)},execute:function(){this.commands.execute.apply(this.commands,arguments)},request:function(){return this.reqres.request.apply(this.reqres,
arguments)},addInitializer:function(a){this._initCallbacks.add(a)},start:function(a){this.triggerMethod("before:start",a);this._initCallbacks.run(a,this);this.triggerMethod("start",a)},addRegions:function(a){return this._regionManager.addRegions(a)},emptyRegions:function(){return this._regionManager.emptyRegions()},removeRegion:function(a){return this._regionManager.removeRegion(a)},getRegion:function(a){return this._regionManager.get(a)},getRegions:function(){return this._regionManager.getRegions()},
module:function(a,b){var e=c.Module.getClass(b),f=d.toArray(arguments);f.unshift(this);return e.create.apply(e,f)},getRegionManager:function(){return new c.RegionManager},_initializeRegions:function(a){var b=d.isFunction(this.regions)?this.regions(a):this.regions||{};this._initRegionManager();var e=c.getOption(a,"regions");d.isFunction(e)&&(e=e.call(this,a));d.extend(b,e);this.addRegions(b);return this},_initRegionManager:function(){this._regionManager=this.getRegionManager();this._regionManager._parent=
this;this.listenTo(this._regionManager,"before:add:region",function(){c._triggerMethod(this,"before:add:region",arguments)});this.listenTo(this._regionManager,"add:region",function(a,b){this[a]=b;c._triggerMethod(this,"add:region",arguments)});this.listenTo(this._regionManager,"before:remove:region",function(){c._triggerMethod(this,"before:remove:region",arguments)});this.listenTo(this._regionManager,"remove:region",function(a){delete this[a];c._triggerMethod(this,"remove:region",arguments)})},_initChannel:function(){this.channelName=
d.result(this,"channelName")||"global";this.channel=d.result(this,"channel")||f.Wreqr.radio.channel(this.channelName);this.vent=d.result(this,"vent")||this.channel.vent;this.commands=d.result(this,"commands")||this.channel.commands;this.reqres=d.result(this,"reqres")||this.channel.reqres}});c.Module=function(a,b,c){this.moduleName=a;this.options=d.extend({},this.options,c);this.initialize=c.initialize||this.initialize;this.submodules={};this._setupInitializersAndFinalizers();this.app=b;d.isFunction(this.initialize)&&
this.initialize(a,b,this.options)};c.Module.extend=c.extend;d.extend(c.Module.prototype,f.Events,{startWithParent:!0,initialize:function(){},addInitializer:function(a){this._initializerCallbacks.add(a)},addFinalizer:function(a){this._finalizerCallbacks.add(a)},start:function(a){this._isInitialized||(d.each(this.submodules,function(b){b.startWithParent&&b.start(a)}),this.triggerMethod("before:start",a),this._initializerCallbacks.run(a,this),this._isInitialized=!0,this.triggerMethod("start",a))},stop:function(){this._isInitialized&&
(this._isInitialized=!1,this.triggerMethod("before:stop"),d.invoke(this.submodules,"stop"),this._finalizerCallbacks.run(void 0,this),this._initializerCallbacks.reset(),this._finalizerCallbacks.reset(),this.triggerMethod("stop"))},addDefinition:function(a,b){this._runModuleDefinition(a,b)},_runModuleDefinition:function(a,b){if(a){var e=d.flatten([this,this.app,f,c,f.$,d,b]);a.apply(this,e)}},_setupInitializersAndFinalizers:function(){this._initializerCallbacks=new c.Callbacks;this._finalizerCallbacks=
new c.Callbacks},triggerMethod:c.triggerMethod});d.extend(c.Module,{create:function(a,b,c){var f=a,g=d.drop(arguments,3),b=b.split("."),h=[];h[b.length-1]=c;d.each(b,function(b,d){var j=f;f=this._getModule(j,b,a,c);this._addModuleDefinition(j,f,h[d],g)},this);return f},_getModule:function(a,b,c,f){var g=d.extend({},f),f=this.getClass(f),h=a[b];h||(h=new f(b,c,g),a[b]=h,a.submodules[b]=h);return h},getClass:function(a){var b=c.Module;return!a?b:a.prototype instanceof b?a:a.moduleClass||b},_addModuleDefinition:function(a,
b,c,d){var f=this._getDefine(c),c=this._getStartWithParent(c,b);f&&b.addDefinition(f,d);this._addStartWithParent(a,b,c)},_getStartWithParent:function(a,b){var e;return d.isFunction(a)&&a.prototype instanceof c.Module?(e=b.constructor.prototype.startWithParent,d.isUndefined(e)?!0:e):d.isObject(a)?(e=a.startWithParent,d.isUndefined(e)?!0:e):!0},_getDefine:function(a){return d.isFunction(a)&&!(a.prototype instanceof c.Module)?a:d.isObject(a)?a.define:null},_addStartWithParent:function(a,b,c){b.startWithParent=
b.startWithParent&&c;b.startWithParent&&!b.startWithParentIsConfigured&&(b.startWithParentIsConfigured=!0,a.addInitializer(function(a){b.startWithParent&&b.start(a)}))}});return c});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-feature-discovery-plugin:confluence-feature-discovery-plugin-resources', location = '/js/confluence-feature-discovery-plugin.js' */
(function(f){Confluence.FeatureDiscovery={};var c,e=false,i=3;var d="com.atlassian.confluence.plugins.confluence-feature-discovery-plugin";var g=d+":confluence-feature-discovery-plugin-resources.test-mode";var a=WRM.data.claim(g);function j(k){if(c===undefined){c=JSON.parse(AJS.Meta.get("discovered-plugin-features")||"{}")}if(k){return c[k]||[]}return c}function b(m,o){var n=j(m);for(var l=0,k=n.length;l<k;l++){if(n[l]===o){return true}}return false}function h(n,p){var l="com.atlassian.webdriver.discovery="+n+":"+p;var k=document.cookie.split(";");for(var m=0;m<k.length;m++){var o=k[m];while(o.charAt(0)===" "){o=o.substring(1)}if(o.indexOf(l)!==-1){return true}}return false}Confluence.FeatureDiscovery.forPlugin=function(m,l){var p=Confluence.storageManager("feature-discovery."+m);l=l||i;function o(r){var q=parseInt(p.getItem(r),10);return isNaN(q)?0:q}function n(r,q){return p.setItem(r,q)}function k(q){return p.removeItem(q)}return{addDiscoveryView:function(q){n(q,o(q)+1)},shouldShow:function(r,q){if(q===true&&a&&!h(m,r)){return false}if(e||b(m,r)){return false}if(o(r)>=l){this.markDiscovered(r);return false}e=true;return true},markDiscovered:function(r,q){if(b(m,r)){return}AJS.safeAjax({url:AJS.contextPath()+"/rest/feature-discovery/1.0/discovered/"+m+"/"+r,type:"POST",data:{},success:function(){j(m).unshift(r);k(r);AJS.trigger("feature-discovered",{pluginKey:m,featureKey:r});if(q&&f.isFunction(q)){q()}}})},listDiscovered:function(){return j(m).slice(0)}}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:confluence-dashboard-resources', location = '/templates/core/content/content-template.soy' */
// This file was automatically generated from content-template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DashboardTemplates.Content.
 */

if (typeof DashboardTemplates == 'undefined') { var DashboardTemplates = {}; }
if (typeof DashboardTemplates.Content == 'undefined') { DashboardTemplates.Content = {}; }


DashboardTemplates.Content.groupHeader = function(opt_data, opt_ignored) {
  return '<h6 data-spy="affix" data-offset-top="20">' + soy.$$escapeHtml(opt_data.groupTitle) + '</h6>';
};
if (goog.DEBUG) {
  DashboardTemplates.Content.groupHeader.soyTemplateName = 'DashboardTemplates.Content.groupHeader';
}


DashboardTemplates.Content.groupedListWithFilter = function(opt_data, opt_ignored) {
  return '<header class="content-header content-header-' + soy.$$escapeHtml(opt_data.contentType) + '"><h1 class="list-title">' + soy.$$escapeHtml(opt_data.title) + '</h1><form action="" class="aui aui-group aui-group-split content-filter"><div class="aui-item"><input type="text" class="text" name="filter" placeholder="' + soy.$$escapeHtml('Filter') + '" maxlength="40" /></div></form></header><ul class="list-container list-container-' + soy.$$escapeHtml(opt_data.contentType) + '" data-filter-string=""></ul><div class="spinner-container"></div>';
};
if (goog.DEBUG) {
  DashboardTemplates.Content.groupedListWithFilter.soyTemplateName = 'DashboardTemplates.Content.groupedListWithFilter';
}


DashboardTemplates.Content.streamList = function(opt_data, opt_ignored) {
  return '<header class="content-header content-header-' + soy.$$escapeHtml(opt_data.contentType) + '"><h1 class="list-title">' + soy.$$escapeHtml(opt_data.title) + '</h1></header><ul class="list-container list-container-' + soy.$$escapeHtml(opt_data.contentType) + '"></ul><div class="spinner-container"></div>';
};
if (goog.DEBUG) {
  DashboardTemplates.Content.streamList.soyTemplateName = 'DashboardTemplates.Content.streamList';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:confluence-dashboard-resources', location = '/templates/core/shared/templates/default-templates.soy' */
// This file was automatically generated from default-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DashboardTemplates.Default.
 */

if (typeof DashboardTemplates == 'undefined') { var DashboardTemplates = {}; }
if (typeof DashboardTemplates.Default == 'undefined') { DashboardTemplates.Default = {}; }


DashboardTemplates.Default.listItem = function(opt_data, opt_ignored) {
  return '<a class="item-title" href="' + soy.$$escapeHtml(opt_data.url) + '"><div class="item-icon"><span class="aui-icon aui-icon-large aui-iconfont-' + soy.$$escapeHtml(opt_data.icon) + '">' + ((opt_data.icon == 'page') ? soy.$$escapeHtml('Page') : soy.$$escapeHtml('Blog Post')) + '</span></div></a><div class="item-content"><p class="title-wrapper"><a class="item-title" href="' + soy.$$escapeHtml(opt_data.url) + '">' + soy.$$escapeHtml(opt_data.title) + '</a></p>' + ((opt_data.date) ? '<span class="last-modified">' + soy.$$escapeHtml(opt_data.date) + '</span>' : '') + '</div>';
};
if (goog.DEBUG) {
  DashboardTemplates.Default.listItem.soyTemplateName = 'DashboardTemplates.Default.listItem';
}


DashboardTemplates.Default.loading = function(opt_data, opt_ignored) {
  return '<div class="spinner-container empty-state-loading"></div>';
};
if (goog.DEBUG) {
  DashboardTemplates.Default.loading.soyTemplateName = 'DashboardTemplates.Default.loading';
}


DashboardTemplates.Default.noMatches = function(opt_data, opt_ignored) {
  return '' + DashboardTemplates.Default.blank({cssClass: 'no-matches', content: '<h6 class="blank-slate-title-text">' + soy.$$escapeHtml('We can\x27t find anything for') + '</h6><h6 class="blank-slate-filter-text"> \'' + soy.$$escapeHtml(opt_data.filter) + '\'</h6><p>' + soy.$$filterNoAutoescape('') + '</p>'});
};
if (goog.DEBUG) {
  DashboardTemplates.Default.noMatches.soyTemplateName = 'DashboardTemplates.Default.noMatches';
}


DashboardTemplates.Default.blank = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div class="' + ((opt_data.cssClass) ? ' ' + soy.$$escapeHtml(opt_data.cssClass) + ' ' : '') + ' blank-slate"><div class="blank-slate-content"><div class="blank-slate-image-container"><div class="blank-slate-image" id="blank-slate-image"></div></div><div class="blank-slate-text">' + ((opt_data.title) ? '<h6 class="blank-slate-title-text">' + soy.$$escapeHtml(opt_data.title) + '</h6>' : '') + soy.$$filterNoAutoescape(opt_data.content) + '</div></div></div>';
};
if (goog.DEBUG) {
  DashboardTemplates.Default.blank.soyTemplateName = 'DashboardTemplates.Default.blank';
}


DashboardTemplates.Default.empty = function(opt_data, opt_ignored) {
  return '';
};
if (goog.DEBUG) {
  DashboardTemplates.Default.empty.soyTemplateName = 'DashboardTemplates.Default.empty';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:confluence-dashboard-resources', location = '/templates/core/web-fragments/web-fragments-template.soy' */
// This file was automatically generated from web-fragments-template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DashboardTemplates.WebFragments.
 */

if (typeof DashboardTemplates == 'undefined') { var DashboardTemplates = {}; }
if (typeof DashboardTemplates.WebFragments == 'undefined') { DashboardTemplates.WebFragments = {}; }


DashboardTemplates.WebFragments.webItem = function(opt_data, opt_ignored) {
  return '<a href="/' + soy.$$escapeHtml(opt_data.url) + '" class="aui-nav-item nav-item-' + soy.$$escapeHtml(opt_data.key) + '" title="' + soy.$$escapeHtml(opt_data.label) + '"><span class="aui-icon aui-icon-small ' + soy.$$escapeHtml(opt_data.icon) + '"></span><span class="aui-nav-item-label">' + soy.$$escapeHtml(opt_data.label) + '</span></a>';
};
if (goog.DEBUG) {
  DashboardTemplates.WebFragments.webItem.soyTemplateName = 'DashboardTemplates.WebFragments.webItem';
}


DashboardTemplates.WebFragments.webPanel = function(opt_data, opt_ignored) {
  return '';
};
if (goog.DEBUG) {
  DashboardTemplates.WebFragments.webPanel.soyTemplateName = 'DashboardTemplates.WebFragments.webPanel';
}


DashboardTemplates.WebFragments.section = function(opt_data, opt_ignored) {
  return '';
};
if (goog.DEBUG) {
  DashboardTemplates.WebFragments.section.soyTemplateName = 'DashboardTemplates.WebFragments.section';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:confluence-dashboard-resources', location = '/templates/modules/group/group-template.soy' */
// This file was automatically generated from group-template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DashboardTemplates.Groups.
 */

if (typeof DashboardTemplates == 'undefined') { var DashboardTemplates = {}; }
if (typeof DashboardTemplates.Groups == 'undefined') { DashboardTemplates.Groups = {}; }


DashboardTemplates.Groups.group = function(opt_data, opt_ignored) {
  return '<h6 class="sticky-header period-' + soy.$$escapeHtml(opt_data.periodKey) + '">' + soy.$$escapeHtml(opt_data.title) + '</h6><ul class="group-container period-' + soy.$$escapeHtml(opt_data.periodKey) + '"></ul>';
};
if (goog.DEBUG) {
  DashboardTemplates.Groups.group.soyTemplateName = 'DashboardTemplates.Groups.group';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:confluence-dashboard-resources', location = '/templates/modules/list-item/list-template.soy' */
// This file was automatically generated from list-template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DashboardTemplates.Lists.
 */

if (typeof DashboardTemplates == 'undefined') { var DashboardTemplates = {}; }
if (typeof DashboardTemplates.Lists == 'undefined') { DashboardTemplates.Lists = {}; }


DashboardTemplates.Lists.group = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml(opt_data.groupTitle) + '</h2><div class="group-container"></div>';
};
if (goog.DEBUG) {
  DashboardTemplates.Lists.group.soyTemplateName = 'DashboardTemplates.Lists.group';
}


DashboardTemplates.Lists.item = function(opt_data, opt_ignored) {
  var output = '<div class="item-block"' + ((opt_data.virtuallyDeleted) ? ' class="removed" ' : '') + (((opt_data.pageStatus == 'draft' || opt_data.pageStatus == 'unpublished') && opt_data.isCollabEditingEnabled) ? ' data-contains-lozenge="true" ' : '') + '>';
  var itemTitle__soy15 = '' + ((! opt_data.title || opt_data.title == '') ? soy.$$filterNoAutoescape('Untitled') : soy.$$filterNoAutoescape(opt_data.title));
  output += '<a href="' + soy.$$escapeHtml(opt_data.url) + '" class="item-clickable"><div class="item-icon" href="' + soy.$$escapeHtml(opt_data.url) + '"><span class="aui-icon content-type-' + soy.$$escapeHtml(opt_data.icon) + '">' + ((opt_data.icon == 'page') ? soy.$$escapeHtml('Page') : soy.$$escapeHtml('Blog Post')) + '</span></div><div class="item-content" ' + ((opt_data.draftDiscovery == true) ? ' aria-controls="draft-discovery-dialog" ' : '') + '>' + (((opt_data.pageStatus == 'draft' || opt_data.pageStatus == 'unpublished') && opt_data.isCollabEditingEnabled) ? '<div class="item-status ' + soy.$$escapeHtml(opt_data.pageStatus) + '"><span class="aui-lozenge ' + soy.$$escapeHtml(opt_data.pageStatus) + ' tooltip" data-type="' + soy.$$escapeHtml(opt_data.pageStatus) + '"' + ((opt_data.pageStatus == 'draft' && opt_data.contentType == 'page') ? 'title="' + soy.$$escapeHtml('This page hasn\x27t been published yet') + '"' : (opt_data.pageStatus == 'draft' && opt_data.contentType == 'blogpost') ? 'title="' + soy.$$escapeHtml('This blog post hasn\x27t been published yet') + '"' : (opt_data.contentType == 'page') ? 'title="' + soy.$$escapeHtml('This page has changes that haven\x27t been published') + '"' : 'title="' + soy.$$escapeHtml('This blog post has changes that haven\x27t been published') + '"') + '>' + ((opt_data.pageStatus == 'draft') ? soy.$$escapeHtml('Draft') : soy.$$escapeHtml('Unpublished changes')) + '</span></div>' + ((opt_data.draftDiscovery == true) ? DashboardTemplates.Lists.draftDiscoveryDialog(null) : '') : '') + '<div class="item-text"><span class="item-title">' + soy.$$escapeHtml(itemTitle__soy15) + '</span></div></div></a>' + ((opt_data.removable) ? DashboardTemplates.Lists.actionRemove(opt_data) : '') + '</div>';
  return output;
};
if (goog.DEBUG) {
  DashboardTemplates.Lists.item.soyTemplateName = 'DashboardTemplates.Lists.item';
}


DashboardTemplates.Lists.actionRemove = function(opt_data, opt_ignored) {
  return '<div class="item-actions">' + ((opt_data.virtuallyDeleted) ? DashboardTemplates.Lists.undo(null) : DashboardTemplates.Lists.remove(null)) + '</div>';
};
if (goog.DEBUG) {
  DashboardTemplates.Lists.actionRemove.soyTemplateName = 'DashboardTemplates.Lists.actionRemove';
}


DashboardTemplates.Lists.remove = function(opt_data, opt_ignored) {
  return '<button title="Remove" class="top-tooltip remove aui-icon aui-icon-small aui-iconfont-remove-label"></button>';
};
if (goog.DEBUG) {
  DashboardTemplates.Lists.remove.soyTemplateName = 'DashboardTemplates.Lists.remove';
}


DashboardTemplates.Lists.undo = function(opt_data, opt_ignored) {
  return '<button title="Undo" class="top-tooltip undo-remove aui-icon aui-icon-small aui-iconfont-undo"></button>';
};
if (goog.DEBUG) {
  DashboardTemplates.Lists.undo.soyTemplateName = 'DashboardTemplates.Lists.undo';
}


DashboardTemplates.Lists.draftDiscoveryDialog = function(opt_data, opt_ignored) {
  return '<aui-inline-dialog id="draft-discovery-dialog" alignment="right top" open><h6>' + soy.$$escapeHtml('Didn\x27t Publish?') + '</h6><p>' + soy.$$escapeHtml('We\x27ve dropped your draft into Recently worked on. Find, edit, and publish it when you\x27re ready.') + '</p><p><button id="draft-discovery-button" class="aui-button">' + soy.$$escapeHtml('Ok, got it!') + '</button></p></aui-inline-dialog>';
};
if (goog.DEBUG) {
  DashboardTemplates.Lists.draftDiscoveryDialog.soyTemplateName = 'DashboardTemplates.Lists.draftDiscoveryDialog';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:confluence-dashboard-resources', location = '/templates/modules/nav/nav-template.soy' */
// This file was automatically generated from nav-template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DashboardTemplates.Nav.
 */

if (typeof DashboardTemplates == 'undefined') { var DashboardTemplates = {}; }
if (typeof DashboardTemplates.Nav == 'undefined') { DashboardTemplates.Nav = {}; }


DashboardTemplates.Nav.item = function(opt_data, opt_ignored) {
  return '<a href="#' + soy.$$escapeHtml(opt_data.url) + '" class="aui-nav-item nav-item-' + soy.$$escapeHtml(opt_data.key) + '" title="' + soy.$$escapeHtml(opt_data.label) + '"><span class="aui-icon ' + soy.$$escapeHtml(opt_data.icon) + '"></span><span class="aui-nav-item-label">' + soy.$$escapeHtml(opt_data.label) + '</span></a>';
};
if (goog.DEBUG) {
  DashboardTemplates.Nav.item.soyTemplateName = 'DashboardTemplates.Nav.item';
}


DashboardTemplates.Nav.container = function(opt_data, opt_ignored) {
  return '<div class="aui-nav-heading"><strong class="title-nav-group">' + soy.$$escapeHtml(opt_data.title) + '</strong>' + ((opt_data.anchorName && opt_data.anchorLink && opt_data.anchorTitle) ? '<a class="all-spaces-link" href= ' + soy.$$escapeHtml(opt_data.anchorLink) + ' title="' + soy.$$escapeHtml(opt_data.anchorTitle) + '">' + soy.$$escapeHtml(opt_data.anchorName) + '</a>' : '') + '</div><ul class="aui-nav nav-items default-list-view"></ul>';
};
if (goog.DEBUG) {
  DashboardTemplates.Nav.container.soyTemplateName = 'DashboardTemplates.Nav.container';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:confluence-dashboard-resources', location = '/templates/modules/nav-spaces/nav-spaces-template.soy' */
// This file was automatically generated from nav-spaces-template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DashboardTemplates.NavSpaces.
 */

if (typeof DashboardTemplates == 'undefined') { var DashboardTemplates = {}; }
if (typeof DashboardTemplates.NavSpaces == 'undefined') { DashboardTemplates.NavSpaces = {}; }


DashboardTemplates.NavSpaces.space = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.url) + '" class="aui-nav-item" title="' + soy.$$escapeHtml(opt_data.name) + '"><span class="aui-avatar aui-avatar-small aui-avatar-project"><span class="aui-avatar-inner"><img src="' + soy.$$escapeHtml(opt_data.logo) + '" alt="' + soy.$$escapeHtml(opt_data.name) + '"></span></span><span class="aui-nav-item-label">' + soy.$$escapeHtml(opt_data.name) + '</span></a>' + ((! opt_data.isAnonymousUser) ? (opt_data.virtuallyDeleted) ? '<button title="' + soy.$$escapeHtml('Add to My Spaces') + '" class="undo-remove toggle-favourite aui-icon aui-icon-small aui-iconfont-unstar"></button>' : '<button title="' + soy.$$escapeHtml('Remove from My Spaces') + '" class="remove toggle-favourite aui-icon aui-icon-small aui-iconfont-star"></button>' : '');
};
if (goog.DEBUG) {
  DashboardTemplates.NavSpaces.space.soyTemplateName = 'DashboardTemplates.NavSpaces.space';
}


DashboardTemplates.NavSpaces.mySpacesBlank = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.callToActionLink) + '" class="aui-nav-item nav-item-spaces" title="' + soy.$$escapeHtml(opt_data.callToActionText) + '"><span class="aui-icon aui-icon-small content-type-spaces"></span><span class="aui-nav-item-label">' + soy.$$escapeHtml(opt_data.callToActionText) + '</span></a><p><small>' + soy.$$escapeHtml(opt_data.text) + '</small></p><p><a href="' + soy.$$escapeHtml(opt_data.callToActionLink) + '">' + soy.$$escapeHtml(opt_data.callToActionText) + '</a></p>';
};
if (goog.DEBUG) {
  DashboardTemplates.NavSpaces.mySpacesBlank.soyTemplateName = 'DashboardTemplates.NavSpaces.mySpacesBlank';
}


DashboardTemplates.NavSpaces.allSpacesBlank = function(opt_data, opt_ignored) {
  return '<p><small>' + soy.$$escapeHtml('nav.controller.all.spaces.blank') + '</small></p>';
};
if (goog.DEBUG) {
  DashboardTemplates.NavSpaces.allSpacesBlank.soyTemplateName = 'DashboardTemplates.NavSpaces.allSpacesBlank';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:confluence-dashboard-resources', location = '/templates/modules/stream-item/stream-item-template.soy' */
// This file was automatically generated from stream-item-template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DashboardTemplates.Stream.
 */

if (typeof DashboardTemplates == 'undefined') { var DashboardTemplates = {}; }
if (typeof DashboardTemplates.Stream == 'undefined') { DashboardTemplates.Stream = {}; }


DashboardTemplates.Stream.item = function(opt_data, opt_ignored) {
  var output = '<div class="update-item-profile"><span class="aui-avatar aui-avatar-large"><span class="aui-avatar-inner">' + Confluence.Templates.User.logo({canView: opt_data.canViewProfile, currentUsername: opt_data.currentUsername, username: '' + ((opt_data.modifier) ? soy.$$filterNoAutoescape(opt_data.modifier.name) : ''), profilePictureInfo: opt_data.profilePictureInfo}) + '</span></span></div><div class="update-items"><h4>' + Confluence.Templates.User.usernameLink({canView: opt_data.canViewProfile, username: '' + ((opt_data.modifier) ? soy.$$filterNoAutoescape(opt_data.modifier.name) : ''), fullName: '' + ((opt_data.modifier) ? soy.$$filterNoAutoescape(opt_data.modifier.fullName) : '')}) + '</h4><ul>';
  var changeItemList27 = opt_data.recentUpdates;
  var changeItemListLen27 = changeItemList27.length;
  for (var changeItemIndex27 = 0; changeItemIndex27 < changeItemListLen27; changeItemIndex27++) {
    var changeItemData27 = changeItemList27[changeItemIndex27];
    output += '<li class="update-item">' + DashboardTemplates.Stream.updateItem({changeItem: changeItemData27, changeSetNumber: 0, changeItemNumber: changeItemIndex27}) + '</li>';
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  DashboardTemplates.Stream.item.soyTemplateName = 'DashboardTemplates.Stream.item';
}


DashboardTemplates.Stream.updateItem = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.changeItem.urlPath) + '" title="' + soy.$$escapeHtml(opt_data.changeItem.title) + '"><div class="update-item-icons">' + ((opt_data.changeItem.thumbnailable) ? '<span id="twixie-' + soy.$$escapeHtml(opt_data.changeSetNumber) + soy.$$escapeHtml(opt_data.changeItemNumber) + '" data-thumbnail-id="' + soy.$$escapeHtml(opt_data.changeSetNumber) + soy.$$escapeHtml(opt_data.changeItemNumber) + '" class="update-item-arrow icon icon-section-closed"></span>' : '<span class="update-item-arrow"></span>') + '<span class="aui-icon ' + soy.$$escapeHtml(opt_data.changeItem.iconCss) + '">' + soy.$$escapeHtml(opt_data.changeItem.friendlyContentType) + '</span></div><div class="update-item-content"><span class="update-item-title">' + soy.$$escapeHtml(opt_data.changeItem.title) + '</span>' + ((opt_data.changeItem.summary) ? '<p class="update-item-summary text-wrapped">' + soy.$$escapeHtml(opt_data.changeItem.summary) + '</p>' : '') + '<div class="update-item-date-wrapper"><time datetime="" class="update-item-date">' + soy.$$escapeHtml(opt_data.changeItem.updateDescription) + ((opt_data.changeItem.viewChangesLink) ? '&nbsp;(<a href="' + soy.$$escapeHtml(opt_data.changeItem.viewChangesLink) + '">' + soy.$$escapeHtml('view change') + '</a>)' : '') + '</time></div>' + ((opt_data.changeItem.thumbnailable) ? '<div class="update-item-thumbnail-container"><span><img id="thumbnail-' + soy.$$escapeHtml(opt_data.changeSetNumber) + soy.$$escapeHtml(opt_data.changeItemNumber) + '" class="thumbnail" src="' + soy.$$escapeHtml(opt_data.changeItem.thumbnailUrl) + '" width="' + soy.$$escapeHtml(opt_data.changeItem.thumbnailWidth) + '" height="' + soy.$$escapeHtml(opt_data.changeItem.thumbnailHeight) + '" style="display: none" /></span></div>' : '') + '</div></a>';
};
if (goog.DEBUG) {
  DashboardTemplates.Stream.updateItem.soyTemplateName = 'DashboardTemplates.Stream.updateItem';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:confluence-dashboard-resources', location = 'js/confluence-dashboard.js' */
define("confluence-dashboard/utils/event-manager",["module","exports","backbone","marionette"],function(e,t,o,n){"use strict";var i,a=o.Wreqr;((i=n)&&i.__esModule?i:{default:i}).default;var r=a.radio.channel("global");t.default={EventManager:r.vent,Commands:r.commands,ReqRes:r.reqres},e.exports=t.default}),define("confluence-dashboard/behaviors/aui-sidebar-resizable",["module","exports","marionette","../utils/event-manager","jquery","ajs","confluence/storage-manager"],function(e,t,o,n,i,a,r){"use strict";var s=o.Behavior,l=n.EventManager,c=f(i).default,u=f(a).default,d=f(r).default;function f(e){return e&&e.__esModule?e:{default:e}}var h="width",p=130;t.default=s.extend({ui:{resizeHandle:".aui-sidebar-handle"},events:{"mousedown @ui.resizeHandle":"onResizeStart","mouseup @ui.resizeHandle":"onResizeEnd"},dragging:!1,initialize:function(){this.EXPANDED_SIZE=280,this.sidebarSettings=d("confluence","sidebar"),this.listenTo(this.view,"sidebar-attached",this.createAuiSidebar,this),this.listenTo(l,"window:resize",this.resetSidebar,this)},createAuiSidebar:function(){var e=this;this.AUISidebar=u.sidebar(this.view.$el.selector),this.AUISidebar.on("expand-start.sidebar",function(){return e.onExpand()}),this.AUISidebar.on("collapse-start.sidebar",function(){return e.onCollapse()}),this.$footer=c("#footer, #studio-footer"),this.currentWidth=parseInt(this.sidebarSettings.getItem(h)),this.setInitialState()},resetSidebar:function(){var e=c("body").hasClass("aui-sidebar-collapsed"),t=this.AUISidebar.$el.hasClass("aui-sidebar-fly-out");e&&!t?this.AUISidebar.collapse():this.isFlyOut()||this.AUISidebar.isCollapsed()||this.setPanelWidth(this.EXPANDED_SIZE,this.EXPANDED_SIZE)},setInitialState:function(){this.currentWidth?(this.currentWidth>p&&(this.EXPANDED_SIZE=this.currentWidth),this.adjustSize()):this.currentWidth=280},onBeforeDestroy:function(){this.AUISidebar.off(".sidebar")},triggerToggleSidebar:function(e){l.trigger("sidebar:"+e)},isFlyOut:function(){return window.innerWidth<1240},onExpand:function(){this.triggerToggleSidebar("expand"),this.setPanelWidth(this.EXPANDED_SIZE,this.EXPANDED_SIZE),this.persistSidebarSize()},onCollapse:function(){this.EXPANDED_SIZE=this.currentWidth<p?280:this.currentWidth,this.triggerToggleSidebar("collapse"),this.setPanelWidth(55,"inherit"),this.persistSidebarSize()},onResizeStart:function(e){var o=this;e.preventDefault(),this.AUISidebar.$body.on("mousemove.sidebar",function(e){var t=e.pageX;o.dragging=!0,p<t&&(o.EXPANDED_SIZE=t),o.adjustSize(),55<t&&t<640&&o.setPanelWidth(t)}),this.AUISidebar.$body.one("mouseup.sidebar",function(){return o.onResizeEnd()})},onResizeEnd:function(){this.AUISidebar.$body.off(".sidebar"),this.dragging?(this.adjustSize(),this.persistSidebarSize(),this.dragging=!1):this.AUISidebar.toggle()},setPanelWidth:function(e,t){var o=e+"px",n=o;this.isFlyOut()&&(n="55px"),this.AUISidebar.$wrapper.css({width:o,maxWidth:t||o}),this.AUISidebar.$el.siblings(".aui-page-panel").css({paddingLeft:n}),this.$footer.css("padding-left",n),this.currentWidth=e},persistSidebarSize:function(){this.sidebarSettings.setItemQuietly(h,this.currentWidth)},_collapse:function(){this.AUISidebar.isCollapsed()?this.onCollapse():this.AUISidebar.collapse()},_expand:function(){this.AUISidebar.isCollapsed()?this.AUISidebar.expand():this.onExpand()},adjustSize:function(){this.currentWidth<p?this._collapse():this._expand()}}),e.exports=t.default}),define("configuration",["ajs","confluence/meta"],function(e,t){var o=e.contextPath(),n="com.atlassian.confluence.plugins.confluence-dashboard";return{apiLimit:20,visibleItemLimit:200,pluginKey:n,staticResourceUrl:t.get("static-resource-url-prefix")+"/download/resources/"+n+":confluence-dashboard-resources",backboneHistoryConfig:{pushState:!1,root:o+"/dashboard.action",silent:!1},DARK_FEATURES:{USER_DISABLED_DASHBOARD_DARK_FEATURE:"simple.dashboard.disabled",RECOMMENDED_FOR_YOU_DARK_FEATURE:"recommended.for.you"},endpoints:{ALL_UPDATES:o+"/rest/dashboardmacros/1.0/updates",POPULAR_STREAM:o+"/rest/popular/1/stream/content?days=7&pageSize=20",RECOMMENDED_STREAM:o+"/rest/recommender/1.0/stream/content",RECENTLY_VIEWED:o+"/rest/api/content/search",RECENTLY_WORKED:o+"/rest/api/content/search",STARRED:o+"/rest/api/content/search",FAVOURITE_SPACES:o+"/rest/experimental/search?cql=type=space and space.type=favourite order by favourite desc&expand=space.icon&limit=100",ALL_SPACES:o+"/rest/experimental/search?cql=type = space&expand=space.icon",TOGGLE_FAVOURITE_SPACE:function(e){return o+"/rest/experimental/relation/user/current/favourite/toSpace/"+e},WEB_ITEMS:function(e){return t.get("static-resource-url-prefix")+"/download/resources/com.atlassian.confluence.plugins.confluence-dashboard:confluence-dashboard-nav-items/api/web-items/"+e+".json"},ADD_FAVOURITE:o+"/json/addfavourite.action",REMOVE_FAVOURITE:o+"/json/removefavourite.action",FEATURE_DISCOVERY:o+"/rest/feature-discovery/latest/discovered"},sections:{webItems:{sidebar:{MY_WORK:"my-work",DISCOVER:"discover",MY_SPACES:"my-spaces",MY_TEAM:"my-team"}}},URLS:{LOGIN_PAGE:o+"/login.action"}}}),define("confluence-dashboard/utils/dark-features",["module","exports","confluence/dark-features","confluence/api/ajax","ajs","jquery"],function(e,t,o,n,i,a){"use strict";var r=u(o).default,s=u(n).default,l=u(i).default,c=u(a).default;function u(e){return e&&e.__esModule?e:{default:e}}var d=l.contextPath();function f(e,t,o){return s.ajax({type:{enable:"PUT",disable:"DELETE"}[e],contentType:"application/json",url:d+"/rest/feature/1/"+t+"/"+o,data:{}})}t.default=c.extend(r,{remotely:{user:{enable:function(e){return r.enable(e),f("enable","user",e)},disable:function(e){return r.disable(e),f("disable","user",e)}}}}),e.exports=t.default}),define("confluence-dashboard/modules/nav/nav-definitions",["module","exports","ajs","../../utils/dark-features","configuration"],function(e,t,o,n,i){"use strict";var a=s(o).default,r=s(n).default;function s(e){return e&&e.__esModule?e:{default:e}}var l=i.DARK_FEATURES.RECOMMENDED_FOR_YOU_DARK_FEATURE,c=[{key:"recently-worked",url:"recently-worked",label:"Recently worked on",icon:"confluence-icon-recently-worked-on",controllerModule:"confluence-dashboard/modules/recently-worked/recently-worked-controller",controllerMethod:"recentWorked",spa:!0},{key:"recently-viewed",url:"recently-viewed",label:"Recently visited",icon:"confluence-icon-recently-viewed",controllerModule:"confluence-dashboard/modules/recently-viewed/recently-viewed-controller",controllerMethod:"recentViewed",spa:!0},{key:"starred",url:"starred",label:"Saved for later",icon:"confluence-icon-starred",controllerModule:"confluence-dashboard/modules/starred/starred-controller",controllerMethod:"starred",spa:!0}],u=[{key:"all-updates",url:"all-updates",icon:"confluence-icon-all-updates",label:"All updates",controllerModule:"confluence-dashboard/modules/all-updates/all-updates-controller",controllerMethod:"allUpdates",spa:!0},{key:"popular-stream",url:"popular",icon:"confluence-icon-popular",label:"Popular",controllerModule:"confluence-dashboard/modules/popular-stream/popular-stream-controller",controllerMethod:"popularStream",spa:!0}];r.isEnabled(l)&&u.push({key:"recommended-stream",url:"recommended",icon:"confluence-icon-recommended",label:"Recommended for you",controllerModule:"confluence-dashboard/modules/recommended-stream/recommended-stream-controller",controllerMethod:"recommendedStream",spa:!0}),t.default={MY_WORK:c,DISCOVER:u},e.exports=t.default}),define("confluence-dashboard/soy-templates",["module","exports"],function(e,t){"use strict";t.default=window.DashboardTemplates,e.exports=t.default}),define("confluence-dashboard/behaviors/tooltips",["module","exports","marionette"],function(e,t,o){"use strict";var n=o.Behavior;t.default=n.extend({defaults:{selector:".tooltip",configs:{gravity:"s"}},onRender:function(){this.$(this.options.selector).tooltip(this.options.configs)},onBeforeDestroy:function(){this.$(this.options.selector).tooltip("hide")}}),e.exports=t.default}),define("confluence-dashboard/behaviors/tooltips.js",function(){}),define("confluence-dashboard/modules/nav/nav-item-view",["module","exports","marionette","confluence-dashboard/soy-templates","../../utils/event-manager","backbone","../../behaviors/tooltips"],function(e,t,o,n,i,a,r){"use strict";var s=o.ItemView,l=f(n).default,c=i.EventManager,u=f(a).default,d=f(r).default;function f(e){return e&&e.__esModule?e:{default:e}}t.default=s.extend({tagName:"li",template:l.Nav.item,behaviors:{tooltip:{behaviorClass:d,selector:".aui-nav-item",configs:{gravity:"w"}}},modelEvents:{"change selected":"render"},events:{"click a":"onClick"},onClick:function(){this.model.set("selected",!0)},initialize:function(){this.onChangeRoute(),this.listenTo(c,"onRoute",this.onChangeRoute)},onChangeRoute:function(){this.model.set("selected",this.model.get("url")===u.history.fragment)},onBeforeRender:function(){this.$el.attr({class:"nav-item-container-"+this.model.get("key")+" "+(this.model.get("selected")?"aui-nav-selected":"")})}}),e.exports=t.default}),define("confluence-dashboard/core/shared/base-collection",["module","exports","backbone"],function(e,t,o){"use strict";var n=o.Collection;t.default=n.extend({groupMethod:function(){throw"groupMethod method missing - check this collection !!!"},safeFetch:function(e){return this.filterXHR&&/[1-3]/.test(this.filterXHR.readyState)&&(this.filterXHR.abort(),this.filterXHR=null),this.filterXHR=this.fetch(e),this.filterXHR},sync:function(e,t,o){return o.cache||(o.cache=!1),n.prototype.sync.apply(this,arguments)}}),e.exports=t.default}),define("confluence-dashboard/core/shared/base-collection.js",function(){}),define("confluence-dashboard/core/web-fragments/web-item/web-item-collection",["module","exports","../../shared/base-collection","backbone","configuration"],function(e,t,o,n,i){"use strict";var a,r=((a=o)&&a.__esModule?a:{default:a}).default,s=n.Model,l=i.endpoints;var c=s.extend({defaults:{weight:1,urlWithoutContextPath:!0}});t.default=r.extend({model:c,setContainer:function(e){this.container=e},url:function(){return l.WEB_ITEMS(this.container)},extractUrls:function(){return this.invoke("pick",["url","key"])}}),e.exports=t.default}),define("confluence-dashboard/core/web-fragments/web-item/web-item-views",["module","exports","marionette","confluence-dashboard/soy-templates","./web-item-collection"],function(e,t,o,n,i){"use strict";var a=o.CollectionView,r=o.CompositeView,s=o.ItemView,l=u(n).default,c=u(i).default;function u(e){return e&&e.__esModule?e:{default:e}}var d=s.extend({tagName:"li",template:l.WebFragments.webItem}),f=a.extend({tagName:"ul",childView:d,initialize:function(e){if(!e.container)throw"A container should be defined for a web item";this.collection=new c}}),h=r.extend({childView:d,initialize:function(e){if(!e.container)throw"A container should be defined for a web item";this.collection=new c}});t.default={WebItemView:d,WebItemCollectionView:f,WebItemCompositeView:h},e.exports=t.default}),define("confluence-dashboard/modules/nav/nav-composite-view",["module","exports","confluence-dashboard/soy-templates","./nav-item-view","../../core/web-fragments/web-item/web-item-views"],function(e,t,o,n,i){"use strict";var a=l(o).default,r=l(n).default,s=i.WebItemCompositeView;function l(e){return e&&e.__esModule?e:{default:e}}t.default=s.extend({template:a.Nav.container,childViewContainer:".nav-items",className:"backbone-view",childView:r}),e.exports=t.default}),define("confluence-dashboard/core/shared/base-controller",["module","exports","marionette","underscore"],function(e,t,o,n){"use strict";var i,a=o.Object,r=((i=n)&&i.__esModule?i:{default:i}).default;t.default=a.extend({initialize:function(){this.wrapActions()},actionsToFilter:[],beforeAction:function(){},afterAction:function(){},wrapActions:function(){var o=this;this.actionsToFilter.forEach(function(e){if(!o[e]||!r.isFunction(o[e]))throw"Method '"+e+"' not found!";var t=o[e];o[e]=function(){!1!==this.beforeAction.apply(this,arguments)&&(t.apply(this,arguments),this.afterAction.apply(this,arguments))}})}}),e.exports=t.default}),define("confluence-dashboard/modules/nav/nav-controller",["module","exports","configuration","./nav-definitions","../../utils/event-manager","./nav-composite-view","../../core/shared/base-controller","ajs","jquery"],function(e,t,o,n,i,a,r,s,l){"use strict";var c=o.sections,u=n.DISCOVER,d=n.MY_WORK,f=i.Commands,h=g(a).default,p=g(r).default,m=g(s).default,v=g(l).default;function g(e){return e&&e.__esModule?e:{default:e}}t.default=p.extend({createDiscoverView:function(){var e=this.createDefaultNavContainer({container:c.webItems.sidebar.DISCOVER,templateHelpers:{title:"Discover"}});e.collection.add(u);return e.on("dom:refresh",function(){v("body").animate({scrollTop:0})}),e},createMyWorkView:function(){var e=this.createDefaultNavContainer({container:c.webItems.sidebar.MY_WORK,templateHelpers:{title:"My Work"}});return e.collection.add(d),e},createDefaultNavContainer:function(e){var t=new h(e);return this.listenTo(t.collection,"add",this.bootstrapWebItem,this),t.collection.setContainer(e.container),t},bootstrapWebItem:function(e){f.execute("app:setupWebItem",e.toJSON())}}),e.exports=t.default}),define("confluence-dashboard/modules/nav-spaces/nav-spaces-collection",["module","exports","../../core/shared/base-collection","backbone","configuration","ajs"],function(e,t,o,n,i,a){"use strict";var r=c(o).default,s=n.Model,l=(n.Collection,i.endpoints);function c(e){return e&&e.__esModule?e:{default:e}}var u=c(a).default.contextPath(),d=s.extend({idAttribute:"key",url:function(){return l.TOGGLE_FAVOURITE_SPACE(this.get("key"))},parse:function(e){return e.url=u+e.url,e.logo=u+e.space.icon.path,e.name=e.title,e.key=e.space.key,e}}),f=r.extend({url:l.FAVOURITE_SPACES,model:d,parse:function(e){return e.results}}),h=f.extend({url:l.ALL_SPACES});t.default={FavouriteSpacesCollection:f,AllSpacesCollection:h},e.exports=t.default}),define("confluence-dashboard/core/shared/base-composite-view",["module","exports","marionette","configuration"],function(e,t,o,n){"use strict";var i=o.CompositeView;n.staticResourceUrl;t.default=i.extend({fetched:!1,collectionEvents:{sync:"onCollectionSync"},getOption:function(e){return"emptyViewOptions"===e?this.selectEmptyViewOptions():i.prototype.getOption.call(this,e)},isFiltered:function(){return!1},onCollectionSync:function(){var e=!this.fetched;this.fetched=!0,!e&&0!==this.collection.length||this._renderChildren()},getEmptyView:function(){var e=this.selectEmptyViewType(),t=this.getOption(e);if(!t)throw"Missing "+e;return t},selectEmptyViewType:function(){return this.fetched?this.isFiltered()?"noMatchesView":"emptyView":"loadingView"},selectEmptyViewOptions:function(){var e=this.selectEmptyViewType();return i.prototype.getOption.call(this,e+"Options")}}),e.exports=t.default}),define("confluence-dashboard/core/shared/base-composite-view.js",function(){}),define("confluence-dashboard/core/shared/loading-view",["module","exports","marionette","confluence-dashboard/soy-templates"],function(e,t,o,n){"use strict";var i,a=o.ItemView,r=((i=n)&&i.__esModule?i:{default:i}).default;t.default=a.extend({tagName:"li",className:"empty-view loading-view",getTemplate:function(){return r.Default.loading}}),e.exports=t.default}),define("confluence-dashboard/core/shared/loading-view.js",function(){}),define("confluence-dashboard/utils/analytics",["module","exports","ajs","backbone"],function(e,t,o,n){"use strict";var i=r(o).default,a=r(n).default;function r(e){return e&&e.__esModule?e:{default:e}}t.default={publish:function(e,t){var o=1<arguments.length&&void 0!==t?t:{},n="confluence.spa."+e;o.currentSection=a.history.fragment,i.trigger("analytics",{name:n,data:o})}},e.exports=t.default}),define("confluence-dashboard/behaviors/undo-remove",["module","exports","marionette","jquery","../utils/analytics"],function(e,t,o,n,i){"use strict";var a=o.Behavior,r=l(n).default,s=l(i).default;function l(e){return e&&e.__esModule?e:{default:e}}var c=r(window),u="beforeunload.remove";t.default=a.extend({defaults:{timeToDestroy:3e3},ui:{remove:".remove",undo:".undo-remove"},events:{"click @ui.remove":"virtualRemove","click @ui.undo":"undoVirtualRemove"},modelEvents:{"change:virtuallyDeleted":"onVirtualDelete"},onVirtualDelete:function(){this.view.render()},virtualRemove:function(){var e=this;this.view.model.set("virtuallyDeleted",!0),this.timeout=setTimeout(function(){e.sendRemove()},this.options.timeToDestroy),this.bindToUnload(),s.publish(this.options.eventNamespace+".remove-favourite.clicked")},undoVirtualRemove:function(){clearTimeout(this.timeout),this.unbindFromUnload(),this.view.model.set("virtuallyDeleted",!1),s.publish(this.options.eventNamespace+".remove-favourite.undo")},bindToUnload:function(){var e=this,t=this.view.model.get("id");c.on(u+"."+t,function(){e.sendRemove()})},unbindFromUnload:function(){var e=this.view.model.get("id");c.off(u+"."+e)},sendRemove:function(){this.view.model.destroy(),this.unbindFromUnload()}}),e.exports=t.default}),define("confluence-dashboard/utils/conditions",["module","exports","confluence/meta","ajs"],function(e,t,o,n){"use strict";var i=r(o).default,a=r(n).default;function r(e){return e&&e.__esModule?e:{default:e}}t.default={canShowDashboard:function(){var e=document.querySelector(".confluence-dashboard");return e||a.log("Simplify dashboard disabled.",{simplifyDashboardPresent:e}),e},isAnonymousUser:function(){return!i.get("remote-user")}},e.exports=t.default}),define("confluence-dashboard/modules/nav-spaces/nav-spaces-item-view",["module","exports","marionette","../../behaviors/undo-remove","../../behaviors/tooltips","confluence-dashboard/soy-templates","../../utils/conditions"],function(e,t,o,n,i,a,r){"use strict";var s=o.ItemView,l=f(n).default,c=f(i).default,u=f(a).default,d=f(r).default;function f(e){return e&&e.__esModule?e:{default:e}}t.default=s.extend({template:u.NavSpaces.space,tagName:"li",className:"item",templateHelpers:function(){return{isAnonymousUser:d.isAnonymousUser()}},behaviors:{undoRemove:{behaviorClass:l,eventNamespace:"global-sidebar.spaces-menu"},tooltip:{behaviorClass:c,selector:".aui-nav-item",configs:{gravity:"w"}}}}),e.exports=t.default}),define("confluence-dashboard/core/shared/no-content-view",["module","exports","marionette","confluence-dashboard/soy-templates","../../utils/analytics","confluence/legacy","confluence/meta"],function(e,t,o,n,i,a,r){"use strict";var s=o.ItemView,l=f(n).default,c=f(i).default,u=f(a).default,d=f(r).default;function f(e){return e&&e.__esModule?e:{default:e}}t.default=s.extend({tagName:"li",className:"empty-view no-content-view",template:l.Default.blank,templateHelpers:function(){return{userCanCreateContent:d.getBoolean("user-can-create-content")}},events:{"click a":"onActionClick","click .create-page":"openCreatePage"},openCreatePage:function(){u.Blueprint.loadDialogAndOpenTemplate({})},onActionClick:function(){c.publish("blank-experience.action.clicked")}}),e.exports=t.default}),define("confluence-dashboard/core/shared/no-content-view.js",function(){}),define("confluence-dashboard/modules/nav-spaces/nav-spaces-empty-view",["module","exports","confluence-dashboard/soy-templates","../../core/shared/no-content-view","ajs"],function(e,t,o,n,i){"use strict";var a=l(o).default,r=l(n).default,s=l(i).default;function l(e){return e&&e.__esModule?e:{default:e}}t.default=r.extend({tagName:"li",template:a.NavSpaces.mySpacesBlank,className:"nav-space-blank",templateHelpers:{text:"Keep your most useful spaces at hand. Hit the star icon beside any space to make it appear here.",callToActionText:"Find spaces",callToActionLink:s.contextPath()+"/spacedirectory/view.action"}}),e.exports=t.default}),define("confluence-dashboard/behaviors/analytics-tracking",["module","exports","marionette","../utils/analytics","backbone","underscore"],function(e,t,o,n,i,a){"use strict";var r=o.Behavior,s=l(n).default;l(i).default,l(a).default;function l(e){return e&&e.__esModule?e:{default:e}}t.default=r.extend({defaults:{prefix:""},events:{"click a":"trackItemClick"},trackItemClick:function(){var e="item.clicked";this.options.prefix&&(e=this.options.prefix+"."+e),s.publish(e)}}),e.exports=t.default}),define("confluence-dashboard/modules/nav-spaces/nav-spaces-composite-view",["module","exports","../../core/shared/base-composite-view","../../core/shared/loading-view","confluence-dashboard/soy-templates","./nav-spaces-item-view","./nav-spaces-empty-view","../../behaviors/analytics-tracking","../../utils/analytics"],function(e,t,o,n,i,a,r,s,l){"use strict";var c=v(o).default,u=v(n).default,d=v(i).default,f=v(a).default,h=v(r).default,p=v(s).default,m=v(l).default;function v(e){return e&&e.__esModule?e:{default:e}}t.default=c.extend({template:d.Nav.container,childViewContainer:".nav-items",childView:f,emptyView:h,loadingView:u,className:"aui-navgroup-inner",behaviors:{analyticsTracking:{behaviorClass:p,prefix:"global-sidebar.spaces-menu"}},events:{"click .all-spaces-link":"onSpaceDirectoryClick"},onSpaceDirectoryClick:function(){m.publish("space-directory.clicked")}}),e.exports=t.default}),define("confluence-dashboard/modules/nav-spaces/nav-spaces-controller",["module","exports","configuration","./nav-spaces-collection","./nav-spaces-composite-view","../../core/shared/base-controller","ajs"],function(e,t,o,n,i,a,r){"use strict";var s=o.sections,l=n.AllSpacesCollection,c=n.FavouriteSpacesCollection,u=h(i).default,d=h(a).default,f=h(r).default;function h(e){return e&&e.__esModule?e:{default:e}}t.default=d.extend({createAllSpacesView:function(){return new u({container:s.webItems.sidebar.MY_SPACES,collection:new l,templateHelpers:{title:"Spaces",anchorName:"All",anchorLink:f.contextPath()+"/spacedirectory/view.action",anchorTitle:"Space directory"}})},createMySpacesView:function(){var e=new u({container:s.webItems.sidebar.MY_SPACES,collection:new c,templateHelpers:{title:"My Spaces",anchorName:"All",anchorLink:f.contextPath()+"/spacedirectory/view.action",anchorTitle:"Space directory"}});return e.collection.fetch(),e}}),e.exports=t.default}),define("confluence-dashboard/modules/sidebar/sidebar-view",["module","exports","marionette","ajs","../../behaviors/aui-sidebar-resizable","../nav/nav-controller","../nav-spaces/nav-spaces-controller","../../utils/conditions"],function(e,t,o,n,i,a,r,s){"use strict";var l=o.LayoutView,c=p(n).default,u=p(i).default,d=p(a).default,f=p(r).default,h=p(s).default;function p(e){return e&&e.__esModule?e:{default:e}}t.default=l.extend({template:!1,el:".aui-sidebar",regions:{"sidebar-discover":"#sidebar-discover","sidebar-my-work":"#sidebar-my-work","sidebar-spaces":"#sidebar-spaces"},behaviors:{AuiSidebarResizable:{behaviorClass:u}},initialize:function(){this.setNavContent(),this.trigger("sidebar-attached")},setNavContent:function(){var e=this,t=new d,o=new f;if(this.getRegion("sidebar-discover").show(t.createDiscoverView()),h.isAnonymousUser()){var n=o.createAllSpacesView();n.collection.fetch().then(function(){0<n.collection.length&&e.getRegion("sidebar-spaces").show(n)})}else this.getRegion("sidebar-my-work").show(t.createMyWorkView()),this.getRegion("sidebar-spaces").show(o.createMySpacesView())},expand:function(){c.sidebar(this.el).expand()},collapse:function(){c.sidebar(this.el).collapse()}}),e.exports=t.default}),define("confluence-dashboard/modules/welcome-message/welcome-message-view",["module","exports","marionette","jquery","../../utils/analytics"],function(e,t,o,n,i){"use strict";var a=o.ItemView,r=(s(n).default,s(i).default);function s(e){return e&&e.__esModule?e:{default:e}}var l="welcome-message-highlight";t.default=a.extend({el:".welcome-message",template:!1,events:{"mouseenter a.welcome-message-edit-button":"highlightOn","mouseleave a.welcome-message-edit-button":"highlightOff","click a.welcome-message-edit-button":"onEditButtonClick"},highlightOn:function(){this.$el.addClass(l)},highlightOff:function(){this.$el.removeClass(l)},onEditButtonClick:function(){r.publish("edit-welcome-message.clicked")}}),e.exports=t.default}),define("confluence-dashboard/core/main/main-router",["module","exports","marionette","../../utils/event-manager","backbone","confluence/storage-manager","underscore","jquery","../../utils/analytics"],function(e,t,o,n,i,a,r,s,l){"use strict";var c=o.AppRouter,u=n.EventManager,d=v(i).default,f=v(a).default,h=v(r).default,p=v(s).default,m=v(l).default;function v(e){return e&&e.__esModule?e:{default:e}}var g=f("dashboard","route"),b=h.debounce(function(e){m.publish("view",{previousSection:e})},100);t.default=c.extend({initialize:function(){this.listenTo(d.history,"route",this.onRoute)},onRoute:function(){b(g.getItem("last"));var e=d.history.fragment;g.setItemQuietly("last",e),u.trigger("onRoute",e)},appRoutes:{"":"index"},controller:{index:function(){var e="all-updates";g.doesContain("last")&&(e=g.getItem("last")),m.publish("root-loaded",{redirectedTo:e}),d.history.navigate(e,{trigger:!0,replace:!0})}},handleClicks:function(e){var t=p(e.currentTarget).attr("href"),o=window.location.protocol+"//";if(t.slice(o.length)!==o){var n="global-sidebar.clicked.using-meta";e.ctrlKey||e.metaKey||(e.preventDefault(),d.history.fragment===t.slice(1)?d.history.loadUrl():this.navigate(t,!0),n="global-sidebar.clicked"),m.publish(n)}}}),e.exports=t.default}),define("confluence-dashboard/core/content/content-factory",["module","exports"],function(e,t){"use strict";t.default=function(e){if(!e)throw"Missing options!";var t=e.name,o=e.scope,n=e.routes,i=e.controllerModule;if(!i)throw"Missing controller module!";if(!n)throw"Missing route definitions!";var a=require(i);if(!a)throw"Controller not found!";return new a({name:t,scope:o||"/",routes:n})},e.exports=t.default}),define("confluence-dashboard/core/main/main-controller",["module","exports","./main-router","../../utils/event-manager","backbone","../shared/base-controller","../content/content-factory"],function(e,t,o,n,i,a,r){"use strict";var s=f(o).default,l=n.Commands,c=f(i).default,u=f(a).default,d=f(r).default;function f(e){return e&&e.__esModule?e:{default:e}}t.default=u.extend({initialize:function(){this.router=new s,this.on("navigate",this.onNavigate,this),l.setHandler("app:setupWebItem",this.setupWebItem,this)},onNavigate:function(e){this.router.navigate(e,!0)},setupWebItem:function(e){if(!e)throw"No web item data";if(e.spa){if(!e.url)throw"Web Item missing an url";if(!e.controllerMethod)throw"Web Item missing its controller method";if(!e.controllerModule)throw"Web Item missing controller";var t=(o={},n=e.url,i=e.controllerMethod,n in o?Object.defineProperty(o,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[n]=i,o);this.webItemController=d({name:e.key,scope:e.scope,routes:t,controllerModule:e.controllerModule}),e.url===c.history.fragment&&c.history.loadUrl()}var o,n,i}}),e.exports=t.default}),define("confluence-dashboard/core/content/content-region-animation",["module","exports","marionette","jquery"],function(e,t,o,n){"use strict";var i,a=o.Region,r=((i=n)&&i.__esModule?i:{default:i}).default;r.extend(r.easing,{def:"easeOutQuad",easeOutQuad:function(e,t,o,n,i){return-n*(t/=i)*(t-2)+o}});var s={easing:"easeOutQuad",duration:200,queue:!1};t.default=a.extend({in:function(e){e.css({position:"relative",top:"15px",opacity:0}).animate({top:0,opacity:1},s)},out:function(e){var t=r.Deferred();return e.animate({opacity:0},r.extend({},s,{complete:function(){t.resolve()}})),t.promise()},show:function(){var e=this,t=this,o=arguments;this.currentView?function(){var e=r.Deferred(),t=r("#header").height(),o=document.documentElement;if(t<(window.pageYOffset||o.scrollTop)-(o.clientTop||0)){var n=r.extend({},s,{complete:function(){e.resolve()}});r("html, body").animate({scrollTop:t},n)}else e.resolve();return e.promise()}().then(function(){e.out(e.$el.find(e.options.selectorToAnimate)).then(function(){a.prototype.show.apply(t,o),e.in(e.$el.find(e.options.selectorToAnimate))})}):(a.prototype.show.apply(this,arguments),this.in(this.$el.find(this.options.selectorToAnimate)))}}),e.exports=t.default}),define("confluence-dashboard/core/main/main-app",["module","exports","marionette","../../utils/event-manager","../../modules/sidebar/sidebar-view","../../modules/welcome-message/welcome-message-view","./main-controller","../content/content-region-animation","underscore","jquery"],function(e,t,o,n,i,a,r,s,l,c){"use strict";var u=o.Application,d=n.ReqRes,f=n.EventManager,h=n.Commands,p=w(i).default,m=w(a).default,v=w(r).default,g=w(s).default,b=w(l).default;function w(e){return e&&e.__esModule?e:{default:e}}var y=(0,w(c).default)(window);t.default=u.extend({el:".PageContent",isStarted:!1,regions:{page:".confluence-dashboard",content:{el:".content-body",selectorToAnimate:".list-container",regionClass:g},dialogs:".dialogs","right-sidebar":".content-sidebar","welcome-message":".welcome-message-wrapper"},initialize:function(){this.controller=new v,this.router=this.controller.router,d.setHandler("app",this.getApp,this),h.setHandler("main-app:swapContent",this.swapContent,this),h.setHandler("main-app:showDialog",this.showDialog,this),y.on("scroll.window.main-layout",this.triggerWindowScroll),y.on("resize.window.main-layout",b.debounce(this.triggerWindowResize.bind(this),16))},getApp:function(){return this},onStart:function(){this.isStarted=!0,this.attachServerRenderedViews(),this.attachWelcomeMessage()},onBeforeDestroy:function(){y.off("scroll.window.main-layout"),y.off("resize.window.main-layout")},triggerWindowScroll:function(){f.trigger("window:scroll",window)},triggerWindowResize:function(){f.trigger("window:resize",window)},expandSidebar:function(){this.sidebarView&&this.sidebarView.expand()},swapContent:function(e){this.getRegion("content").show(e)},showDialog:function(e){this.getRegion("dialogs").show(e)},attachServerRenderedViews:function(){this.sidebarView=new p,this.getRegion("page").attachView(this.sidebarView)},attachWelcomeMessage:function(){this.getRegion("welcome-message").attachView(new m)}}),e.exports=t.default}),define("confluence-dashboard/utils/single-flag",["module","exports","confluence/flag","underscore","jquery"],function(e,t,o,n,i){"use strict";var a=l(o).default,r=l(n).default,s=l(i).default;function l(e){return e&&e.__esModule?e:{default:e}}var c={currentFlag:null,closePreviousFlags:function(){c.currentFlag&&(c.currentFlag.flag.close(),c.currentFlag=null)},shouldShow:function(e){if(!c.currentFlag||!c.currentFlag.flag)return!0;var t="false"===s(c.currentFlag.flag).attr("aria-hidden"),o=r.isEqual(c.currentFlag.options,e);return!t||!o},create:function(e){var t=r.extend({type:"error",close:"auto",persistent:!1,stack:"dashboard"},e);if(this.shouldShow(t)){c.closePreviousFlags();var o=a(t);c.currentFlag={flag:o,options:t},t.callback&&r.isFunction(t.callback)&&t.callback()}}};t.default=c,e.exports=t.default}),define("confluence-dashboard/utils/navigation",["module","exports","window"],function(e,t,o){"use strict";var n,i=((n=o)&&n.__esModule?n:{default:n}).default;t.default={redirect:function(e){i.location.href=e}},e.exports=t.default}),define("confluence-dashboard/utils/error-handlers",["module","exports","backbone","jquery","ajs","./analytics","./single-flag","./navigation","configuration"],function(e,t,o,n,i,a,r,s,l){"use strict";var c=v(o).default,u=v(n).default,d=v(i).default,f=v(a).default,h=v(r).default,p=v(s).default,m=l.URLS;function v(e){return e&&e.__esModule?e:{default:e}}function g(){h.create(E.NOT_FOUND),f.publish("error-handler.not-found")}function b(){h.create(E.SERVER_ERROR),f.publish("error-handler.server-error")}function w(e){if(0===e.status)b();else if(/(401|403)/.test(e.status)){h.create(E.SESSION_EXPIRED),f.publish("error-handler.session.expired");var t=window.location.pathname.replace(_,"");p.redirect(m.LOGIN_PAGE+"?os_destination="+t)}}function y(){h.create(E.OFFLINE),f.publish("error-handler.connection.lost"),x.one("online."+S,function(){h.create(E.ONLINE),f.publish("error-handler.connection.recovered")})}var x=u(window),_=d.contextPath(),S="dashboard-error-handler",E={NOT_FOUND:{type:"error",title:"Aww shoot, we can\u0027t find that page.",close:"auto"},SERVER_ERROR:{type:"error",title:"Something\u0027s gone wrong.",body:"Try again later.",close:"auto"},SESSION_EXPIRED:{type:"error",title:"Looks like we lost your session.",body:"We\u0027ll hold on tighter next time, promise.",close:"never"},OFFLINE:{type:"error",title:"Looks like you\u0027ve lost your connection.",body:"We\u0027ll just wait here while you reconnect.",close:"never"},ONLINE:{type:"success",title:"Connected again",body:'<button class="aui-button aui-button-link btn-reload-content">'+"Reload the content"+"</button>",close:"auto",callback:function(){u(h.currentFlag).on("click",".btn-reload-content",function(){h.closePreviousFlags(),c.history.loadUrl()})}}},k=c.ajax;t.default={interceptBackboneErrors:function(){c.ajax=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return e.statusCode=u.extend({401:w,403:w,404:g,400:b,500:b},e.statusCode||{}),c.$.ajax.call(c.$,e)}},interceptConnectionErrors:function(){x.on("offline."+S,y)},stopIntercepting:function(){x.off("."+S),c.ajax=k}},e.exports=t.default}),define("confluence-dashboard/app",["module","exports","backbone","jquery","./core/main/main-app","./utils/error-handlers","./utils/analytics","configuration"],function(e,t,o,n,i,a,r,s){"use strict";var l=p(o).default,c=p(n).default,u=p(i).default,d=p(a).default,f=p(r).default,h=s.backboneHistoryConfig;function p(e){return e&&e.__esModule?e:{default:e}}var m=new u;m.on("before:start",function(){d.interceptBackboneErrors(),d.interceptConnectionErrors(),l.history.start(h)}),m.on("start",function(){c(document).on("click",".confluence-dashboard .aui-sidebar-body .spa a",m.router.handleClicks.bind(m.router)),f.publish("rendered")}),t.default=m,e.exports=t.default}),define("confluence-dashboard/index",["./app","./utils/conditions","ajs"],function(e,t,o){"use strict";var n=a(e).default,i=a(t).default;function a(e){return e&&e.__esModule?e:{default:e}}a(o).default.toInit(function(){i.canShowDashboard()&&n.start()})}),define("confluence-dashboard/core/shared/no-matches-view",["module","exports","marionette","confluence-dashboard/soy-templates"],function(e,t,o,n){"use strict";var i,a=o.ItemView,r=((i=n)&&i.__esModule?i:{default:i}).default;t.default=a.extend({tagName:"li",className:"empty-view no-matches-view",template:r.Default.noMatches}),e.exports=t.default}),define("confluence-dashboard/core/shared/no-matches-view.js",function(){}),define("confluence-dashboard/core/shared/cql-base-collection",["module","exports","./base-collection","jquery","ajs","underscore"],function(e,t,o,n,i,a){"use strict";var r=u(o).default,c=u(n).default,s=u(i).default,l=u(a).default;function u(e){return e&&e.__esModule?e:{default:e}}var d=s.contextPath();t.default=r.extend({url:function(){return this.buildUrlFromParams()},buildUrlFromParams:function(e){if(!this.apiParams)throw"apiParams attribute missing";var t=this.getApiParams(e),o=t.url,n=t.params,i=t.expansions,a=t.cqlcontext,r=t.cql,s=t.cqlOrder,l=[];if(!o)throw"CqlBaseCollection:buildUrlFromParams: missing URL!";return n&&l.push(c.param(n)),i&&l.push("expand="+i.join(",")),a&&l.push("cqlcontext="+encodeURI(a)),r&&(e&&e.cqlQuery&&(r+=" "+e.cqlQuery),s&&(r+=" order by "+s),l.push("cql="+r)),l.length&&(o=o+"?"+l.join("&")),o},getApiParams:function(e){return l.isFunction(this.apiParams)?this.apiParams(e):this.apiParams},parse:function(e,t){return this.parseNext(e,t),e.results},parseNext:function(e){e._links&&e._links.next?(this.hasNext=!0,this.nextUrl=d+e._links.next):(this.hasNext=!1,this.nextUrl=null)},loadMore:function(){if(this.hasNext)return this.safeFetch({url:this.nextUrl,remove:!1,loadingMore:!0});var e=c.Deferred();return e.reject(),e.promise()},search:function(e){var t=this.buildUrlFromParams({cqlQuery:"and title ~ '"+e.query+"*'",isFiltered:!0});return this.safeFetch({url:t,isFiltered:!0})}}),e.exports=t.default}),define("confluence-dashboard/core/shared/cql-base-collection.js",function(){}),define("confluence-dashboard/core/shared/base-collection-with-function",["module","exports","./cql-base-collection","configuration","underscore"],function(e,t,o,n,i){"use strict";var a=c(o).default,r=n.apiLimit,s=n.visibleItemLimit,l=c(i).default;function c(e){return e&&e.__esModule?e:{default:e}}t.default=a.extend({pageOffset:0,sync:function(e,t,o){return o.loadingMore||(this.pageOffset=0),a.prototype.sync.apply(this,arguments)},parseNext:function(e,t){this.pageOffset+=e.results.length,this.hasNext=!(t&&t.isFiltered)&&0<e.results.length&&0<this.getPageLimit(t),this.nextUrl=this.hasNext?this.buildUrlFromParams(t):null},getPageOffset:function(e){return e&&e.isFiltered?0:this.pageOffset},getPageLimit:function(e){return e&&e.isFiltered?s:l.min([r,s-this.getPageOffset(e)])}}),e.exports=t.default}),define("confluence-dashboard/core/shared/base-collection-with-function.js",function(){}),define("confluence-dashboard/core/shared/base-dialog",["module","exports","marionette","ajs"],function(e,t,o,n){"use strict";var i,a=o.ItemView,r=((i=n)&&i.__esModule?i:{default:i}).default;t.default=a.extend({tagName:"section",className:"aui-layer aui-dialog2 aui-dialog2-medium confluence-dialog-no-chrome confluence-dialog-centered",attributes:{"aria-hidden":!0},openDialog:function(){var e=this;this.initDialog(),this.dialog.on("show",function(){return e.delegateEvents()}),this.dialog.on("hide",function(){return e.destroy()}),this.dialog.show()},closeDialog:function(){this.dialog&&this.dialog.hide()},onRender:function(){this.initDialog()},initDialog:function(){this.dialog||(this.dialog=r.dialog2(this.el))}}),e.exports=t.default}),define("confluence-dashboard/core/shared/base-dialog.js",function(){}),define("confluence-dashboard/core/shared/scope-router",["module","exports","marionette","backbone","underscore"],function(e,t,o,n,i){"use strict";var a=o.AppRouter,r=l(n).default,s=l(i).default;function l(e){return e&&e.__esModule?e:{default:e}}r.History.prototype.route=function(e,t){var o=String(e),n=s.findWhere(this.handlers,{name:o});n?n.callback=t:this.handlers.unshift({name:o,route:e,callback:t})},t.default=a.extend({initialize:function(){var o=this.options.scope||this.scope,e=this.options.scopedRoutes||this.scopedRoutes;if(!o)throw"Scope router requires a scope!";if(!e)throw"Scope router requires a scopedRoutes object!";if(!this.controller&&!this.options.controller)throw"Scope router requires a controller!";"/"===o?o="":o+="/";var n={};s.each(e,function(e,t){n[""+o+t]=e}),this.scope=o,this.appRoutes=n}}),e.exports=t.default}),define("confluence-dashboard/core/shared/scope-router.js",function(){}),define("confluence-dashboard/core/content/content-as-grouped-list-view",["module","exports","../shared/base-composite-view","confluence-dashboard/soy-templates","../../utils/event-manager","../../behaviors/stickable/stickable","../../behaviors/infinite-loading","../../behaviors/filterable","../../behaviors/progress-indicator","../../behaviors/analytics-tracking","../shared/no-content-view","../shared/loading-view","../shared/no-matches-view","../../modules/group/group-composite-view","../../modules/group/group-collection","../../modules/list-item/list-item-view"],function(e,t,o,n,i,a,r,s,l,c,u,d,f,h,p,m){"use strict";var v=D(o).default,g=D(n).default,b=(i.EventManager,D(a).default),w=D(r).default,y=D(s).default,x=D(l).default,_=D(c).default,S=D(u).default,E=D(d).default,k=D(f).default,T=D(h).default,M=D(p).default,C=D(m).default;function D(e){return e&&e.__esModule?e:{default:e}}t.default=v.extend({template:g.Content.groupedListWithFilter,childViewContainer:".list-container",childView:T,childViewOptions:{childView:C},emptyView:S,loadingView:E,noMatchesView:k,noMatchesViewOptions:{templateHelpers:function(){return{filter:this._parent.getFilterString()}}},ui:{filter:"[name=filter]"},behaviors:{stickMainHeader:{behaviorClass:b,element:".content-header",autoRun:!0},infiniteLoading:{behaviorClass:w,target:".list-container"},progressIndicator:{behaviorClass:x,dataSource:"collection",container:".spinner-container:first",size:"medium"},filterable:{behaviorClass:y},analyticsTracking:{behaviorClass:_}},events:{"submit .content-filter":"onFilterSubmit"},initialize:function(){var e=this.collection;this.collection=new M([],{collectionToGroup:e})},isFiltered:function(){return 0<this.getFilterString().length},getFilterString:function(){return this.ui.filter.val()},onFilterSubmit:function(e){e.preventDefault()}}),e.exports=t.default}),define("confluence-dashboard/core/content/content-as-grouped-list-view.js",function(){}),define("confluence-dashboard/behaviors/stickable/stickable",["module","exports","marionette","../../utils/event-manager","underscore"],function(e,t,o,n,i){"use strict";var a,r=o.Behavior,s=n.EventManager,l=((a=i)&&a.__esModule?a:{default:a}).default;t.default=r.extend({defaults:{offset:0,gap:0,autoRun:!1},onRender:function(){var e=this.options;if(!e.element)throw"Behavior:Stickable: Missing `element` attribute";this.$target=this.view.$el.find(e.element),this.target=this.$target[0],this.listenTo(s,"window:resize",this.onResize,this),this.listenTo(s,"window:scroll",this.stick,this),this.listenTo(s,"list:change",this.stick,this),e.autoRun&&l.defer(this.stick.bind(this)),this.view.$el.addClass("stickable")},stick:function(){var e=this.options,t=e.gap,o=e.offset,n=document.documentElement,i=(window.pageYOffset||n.scrollTop)-(n.clientTop||0),a=this.view.$el.offset().top,r=a+this.view.$el.outerHeight(),s=i+o+t;if(a<=s&&s<=r){var l=this.target.clientWidth;this.clone||(this.clone=this.$target.clone(),this.$target.before(this.clone),this.$target.addClass("stick").css({width:l+"px"})),s>=r-this.$target.outerHeight()?this.$target.removeClass("stick").addClass("stuck"):this.$target.removeClass("stuck").addClass("stick").css({top:o+"px",width:l+"px"})}else this.removeClone()},onResize:function(){if(this.clone){var e=this.clone.width();this.$target.css({width:e+"px"})}},removeClone:function(){this.clone&&(this.$target.removeClass("stick").removeClass("stuck"),this.$target.css({width:"100%"}),this.clone.remove(),this.clone=null)},onBeforeDestroy:function(){this.removeClone()}}),e.exports=t.default}),define("confluence-dashboard/behaviors/stickable/stickable.js",function(){}),define("confluence-dashboard/behaviors/infinite-loading",["module","exports","marionette","../utils/event-manager","jquery","underscore"],function(e,t,o,n,i,a){"use strict";var r=o.Behavior,s=n.EventManager,l=(n.Commands,u(i).default),c=u(a).default;function u(e){return e&&e.__esModule?e:{default:e}}t.default=r.extend({defaults:{offset:50},initialize:function(){this.listenToOnce(this.view,"render:collection",this.setup)},setup:function(){var e=this;this.view.collection.loadMore&&(this.$target=l(this.options.target,this.$el),this.$window=l(window),this.loading=!1,this.listenTo(s,"window:scroll",this.checkPosition,this),this.listenTo(this.view.collection,"sync",this.checkPosition),c.defer(function(){return e.checkPosition()}))},checkPosition:function(){var e=this;if(!this.loading){var t=this.$window.scrollTop()+this.$window.height(),o=this.$target.height();this.$target.offset().top+o-this.options.offset<t&&this.loadMore().then(function(){return e.checkPosition()})}},loadMore:function(){var e=this;return this.loading=!0,this.view.collection.loadMore().always(function(){e.loading=!1})}}),e.exports=t.default}),define("confluence-dashboard/behaviors/infinite-loading.js",function(){}),define("confluence-dashboard/utils/strings",["module","exports","jquery"],function(e,t,o){"use strict";var n,i=((n=o)&&n.__esModule?n:{default:n}).default;var a=/[\+\-&\|!\(\)\{}\[\]\^~\*\?\\\/:"']/g;t.default={normalizeForCQL:function(e){return i.trim(e.replace(a," "))}},e.exports=t.default}),define("confluence-dashboard/behaviors/filterable",["module","exports","marionette","../utils/event-manager","underscore","jquery","ajs","../utils/analytics","../utils/strings"],function(e,t,o,n,i,a,r,s,l){"use strict";var c=o.Behavior,u=(n.EventManager,p(i).default),d=(p(a).default,p(r).default),f=p(s).default,h=l.normalizeForCQL;function p(e){return e&&e.__esModule?e:{default:e}}t.default=c.extend({ui:{filter:"[name=filter]"},events:{"input @ui.filter":"doFilter"},initialize:function(){this.view.options.collection&&this.view.options.collection.search||console.warn("Behavior:Filterable: The collection is missing or not implementing a search method"),this.doFilter=u.debounce(this.doFilter,400)},onShow:function(){var e=this;this.listenTo(this.view.collection,"sync",this.updateFilterString),this.listenTo(this.view.collection,"error",function(){return e.view.collection.reset([])})},updateFilterString:function(){this.view.$el.find(".list-container").attr("data-filter-string",this.view.getFilterString()),this.fixAuiSidebar()},fixAuiSidebar:function(){d.sidebar(".aui-sidebar").setPosition()},doFilter:function(){var e=this.ui.filter.val();e=h(e);var t=this.view;if(e.length){if(e===this.lastQuery)return;this.lastQuery=e,t.collection.search({query:e}),f.publish("filter.submit")}else t.collection.safeFetch(),f.publish("filter.clear"),this.lastQuery=null}}),e.exports=t.default}),define("confluence-dashboard/behaviors/filterable.js",function(){}),define("confluence-dashboard/behaviors/progress-indicator",["module","exports","marionette","ajs"],function(e,t,o,n){"use strict";var i,a=o.Behavior,r=((i=n)&&i.__esModule?i:{default:i}).default;t.default=a.extend({defaults:{size:"small",dataSource:"collection"},dataEvents:{request:"onRequest",sync:"spinStop",error:"spinStop"},initialize:function(){if(!this.options.dataSource)throw"Behavior:ProgressIndicator: A dataSource should be defined. Use 'collection' or 'model'";this[this.options.dataSource+"Events"]=this.dataEvents},onAttach:function(){this.options.autoRun&&this.spin()},onRequest:function(e,t,o){"POST"!==o.type&&"DELETE"!==o.type&&this.spin()},spin:function(){var e=this;this.view._isShown?(this.$el.addClass("loading"),this._currentSpinDelay=setTimeout(function(){r.$(e.options.container,e.view.el).spin({size:e.options.size,zIndex:2e3})},200)):this.listenToOnce(this.view,"show",this.spin,this)},spinStop:function(){this._currentSpinDelay&&(clearTimeout(this._currentSpinDelay),this._currentSpinDelay=null),this.view._isShown||this.stopListening(this.view,"show",this.spin,this),this.options.autoRun=!1,this.$el.removeClass("loading"),r.$(this.options.container,this.view.el).spinStop()}}),e.exports=t.default}),define("confluence-dashboard/behaviors/progress-indicator.js",function(){}),define("confluence-dashboard/modules/group/group-composite-view",["module","exports","marionette","confluence-dashboard/soy-templates","../../utils/event-manager","../../behaviors/stickable/stickable"],function(e,t,o,n,i,a){"use strict";var r=o.CompositeView,s=c(n).default,l=(i.EventManager,c(a).default);function c(e){return e&&e.__esModule?e:{default:e}}t.default=r.extend({template:s.Groups.group,childViewContainer:".group-container",tagName:"li",className:"group-wrapper",behaviors:{stickSubHeaders:{behaviorClass:l,element:".sticky-header",autoRun:!0,offset:75}},initialize:function(){this.collection=this.model.get("items")},onRenderCollection:function(){this.trigger("group:rendered")}}),e.exports=t.default}),define("confluence-dashboard/modules/group/group-composite-view.js",function(){}),define("confluence-dashboard/utils/date-utils",["module","exports","underscore","ajs"],function(e,t,o,n){"use strict";var i=r(o).default,a=r(n).default;function r(e){return e&&e.__esModule?e:{default:e}}function s(){return new Date}function l(e){return new Date(e).toDateString()}var c={today:"Today",yesterday:"Yesterday",lastSevenDays:"In the last week",lastThirtyDays:"In the last month",older:"More than a month ago"},u={today:function(e){return l(e)===s().toDateString()},yesterday:function(e){var t=l(e),o=s();return o.setDate(o.getDate()-1),t===o.toDateString()},lastSevenDays:function(e){var t=s(),o=s().setDate(t.getDate()-7),n=new Date(e);return o<=n&&n<=t},lastThirtyDays:function(e){var t=s(),o=s().setDate(t.getDate()-30),n=new Date(e);return o<=n&&n<=t},getPeriod:function(o){var e=i.pick(u,"today","yesterday","lastSevenDays","lastThirtyDays"),t=i.find(e,function(e,t){return e(o)});return t?i.invert(e)[t]:"older"},getPeriodTitle:function(e){return c[e]},getPeriodOrder:function(e){return i.keys(c).indexOf(e)},compareTimestamps:function(e,t){return Math.max(-1,Math.min(1,e-t))},toISODate:function(e){var t=e.getDate();t=t<=9?"0"+t:t;var o=e.getMonth()+1;o=o<=9?"0"+o:o;var n=(new Date).getTimezoneOffset(),i=Math.abs(Math.floor(n/60));i=i<=9?"0"+i:i;var a=Math.abs(n%60),r=(n<0?"+":"-")+i+":"+(a=a<=9?"0"+a:a);return e.getFullYear()+"-"+o+"-"+t+"T00:00:00"+r}};t.default=u,e.exports=t.default}),define("confluence-dashboard/utils/date-utils.js",function(){}),define("confluence-dashboard/modules/group/group-collection",["module","exports","../../core/shared/base-collection","backbone","underscore","../../utils/date-utils"],function(e,t,o,n,i,a){"use strict";var r=u(o).default,s=(n.Model,n.Collection),l=u(i).default,c=u(a).default;function u(e){return e&&e.__esModule?e:{default:e}}t.default=r.extend({idAttribute:"periodKey",comparator:"periodOrder",methodsToProxy:["url","fetch","safeFetch","loadMore","search"],initialize:function(e,t){if(!t.collectionToGroup)throw"Grouped Collection requires a collection to group";if(!t.collectionToGroup.groupMethod)throw"The target collection should implement a groupMethod";this.collectionToGroup=t.collectionToGroup,this.proxyMethods(),this.proxyEvents()},proxyMethods:function(){var t=this;this.methodsToProxy.forEach(function(e){t[e]=function(){return t.collectionToGroup[e].apply(t.collectionToGroup,arguments)}})},proxyEvents:function(){this.listenTo(this.collectionToGroup,"request",this._request),this.listenTo(this.collectionToGroup,"sync",this._sync),this.listenTo(this.collectionToGroup,"remove",this._remove),this.listenTo(this.collectionToGroup,"add",this._add),this.listenTo(this.collectionToGroup,"error",this._error)},_request:function(e,t,o){this.trigger("request",this,t,o)},_sync:function(e,t,o){this._group(),this.trigger("sync",this,t,o)},_remove:function(t){var e=this.filter(function(e){return-1!==e.get("items").indexOf(t)});if(e.length){var o=e[0].get("items");o.remove(t),o.length||e[0].destroy()}},_add:function(){l.debounce(this._group,50)},_error:function(){this.trigger("error")},_group:function(){var n=this,i={},e=this.collectionToGroup.groupBy(this.collectionToGroup.groupMethod);l.each(e,function(e,t){var o=c.getPeriod(t);i[o]=i[o]||[],i[o]=i[o].concat(e)}),l.each(i,function(e,t){var o=n.findWhere({periodKey:t});o?o.get("items").set(i[t],{remove:!1}):n.add({periodKey:t,periodOrder:c.getPeriodOrder(t),title:c.getPeriodTitle(t),items:new s(i[t],{comparator:n.collectionToGroup.comparator})})})}}),e.exports=t.default}),define("confluence-dashboard/modules/group/group-collection.js",function(){}),define("confluence-dashboard/modules/list-item/list-item-view",["module","exports","marionette","../../behaviors/tooltips","confluence-dashboard/soy-templates","ajs","confluence/meta"],function(e,t,o,n,i,a,r){"use strict";var s=o.ItemView,l=f(n).default,c=f(i).default,u=f(a).default,d=f(r).default;function f(e){return e&&e.__esModule?e:{default:e}}t.default=s.extend({template:c.Lists.item,className:"item",tagName:"li",templateHelpers:function(){var e=void 0,t=this.model.get("metadata").currentuser;e=t.hasOwnProperty("lastcontributed")?t.lastcontributed.status:"current";var o=d.get("enabled-dark-features");return{isCollabEditingEnabled:void 0!==o&&-1===o.indexOf("site-wide.shared-drafts.disable"),contentType:this.model.get("type"),pageStatus:e}},behaviors:{tooltip:{behaviorClass:l,selector:".aui-lozenge.aui-lozenge-subtle"}},events:{"click a":"onClick"},ui:{lozenge:".aui-lozenge"},onClick:function(){1===this.ui.lozenge.length&&u.trigger("analytics",{name:"confluence.drafts.referrer",data:{referrerPage:"recentlyWorkedOn",lozengeType:"unpublished"===this.ui.lozenge[0].getAttribute("data-type")?"Unpublished changes":"Draft"}})}}),e.exports=t.default}),define("confluence-dashboard/modules/list-item/list-item-view.js",function(){}),define("confluence-dashboard/utils/feature-discovery",["module","exports","confluence/legacy","confluence/storage-manager"],function(e,t,o,n){"use strict";var i,a=o.FeatureDiscovery;var r=(0,((i=n)&&i.__esModule?i:{default:i}).default)("dashboard","feature-discovery");t.default={forPlugin:function(e){var o=a.forPlugin(e);return o.canShow=function(t){return!r.getItem(t)&&!o.listDiscovered().some(function(e){return e===t})},o.markDiscoveredSafe=function(e,t){r.setItemQuietly(e,!0,86400),o.markDiscovered(e,t)},o}},e.exports=t.default}),define("confluence-dashboard/modules/list-item/list-item-discovery-view",["module","exports","./list-item-view","configuration","../../utils/feature-discovery","jquery"],function(e,t,o,n,i,a){"use strict";var r=u(o).default,s=n.pluginKey,l=u(i).default,c=u(a).default;function u(e){return e&&e.__esModule?e:{default:e}}var d="recently-worked-on-drafts",f=(-1<document.referrer.indexOf("resumedraft.action")||-1<document.referrer.indexOf("createpage.action"))&&l.forPlugin(s).canShow(d);t.default=r.extend({initialize:function(){this.draftDiscovery=!0===f&&this.model.collection.findWhere({status:"draft"})===this.model},templateHelpers:function(){var e=r.prototype.templateHelpers.call(this);return e.draftDiscovery=this.draftDiscovery,e},onBeforeRender:function(){!1!==this.draftDiscovery&&c(document).on("click","#draft-discovery-button",function(){l.forPlugin(s).markDiscovered(d),c("#draft-discovery-dialog").remove()})},onDestroy:function(){c("#draft-discovery-dialog").remove()}}),e.exports=t.default}),define("confluence-dashboard/modules/list-item/list-item-discovery-view.js",function(){}),define("confluence-dashboard/core/content/content-as-grouped-list-discovery-view",["module","exports","./content-as-grouped-list-view","../../modules/list-item/list-item-discovery-view"],function(e,t,o,n){"use strict";var i=r(o).default,a=r(n).default;function r(e){return e&&e.__esModule?e:{default:e}}t.default=i.extend({childViewOptions:{childView:a}}),e.exports=t.default}),define("confluence-dashboard/core/content/content-as-stream-view",["module","exports","../shared/base-composite-view","confluence-dashboard/soy-templates","../../behaviors/stickable/stickable","../../behaviors/infinite-loading","../../behaviors/progress-indicator","../../behaviors/analytics-tracking","../shared/no-content-view","../shared/loading-view","../shared/no-matches-view","../../modules/stream-item/stream-item-view"],function(e,t,o,n,i,a,r,s,l,c,u,d){"use strict";var f=_(o).default,h=_(n).default,p=_(i).default,m=_(a).default,v=_(r).default,g=_(s).default,b=_(l).default,w=_(c).default,y=_(u).default,x=_(d).default;function _(e){return e&&e.__esModule?e:{default:e}}t.default=f.extend({template:h.Content.streamList,childViewContainer:".list-container",emptyView:b,loadingView:w,noMatchesView:y,childView:x,behaviors:{stickMainHeader:{behaviorClass:p,element:".content-header",autoRun:!0},progressIndicator:{behaviorClass:v,dataSource:"collection",container:".spinner-container:first",size:"medium"},infiniteLoading:{behaviorClass:m,target:".list-container"},analyticsTracking:{behaviorClass:g}}}),e.exports=t.default}),define("confluence-dashboard/core/content/content-as-stream-view.js",function(){}),define("confluence-dashboard/core/content/content-controller",["module","exports","../../utils/event-manager","../shared/scope-router","../shared/base-controller"],function(e,t,o,n,i){"use strict";var a=o.Commands,r=l(n).default,s=l(i).default;function l(e){return e&&e.__esModule?e:{default:e}}t.default=s.extend({beforeAction:function(){},afterAction:function(){a.execute("main-app:swapContent",this.view)},initialize:function(e){if(!e||!e.routes)throw"ContentController is missing its route";this.wrapActions(),this.router=new r({scopedRoutes:e.routes,scope:e.scope||"/",controller:this})}}),e.exports=t.default}),define("confluence-dashboard/core/content/content-controller.js",function(){}),define("confluence-dashboard/behaviors/list-item-animated",["module","exports","marionette","../utils/event-manager","jquery"],function(e,t,o,n,i){"use strict";var a,r=o.View,s=o.Behavior,l=n.EventManager,c=((a=i)&&a.__esModule?a:{default:a}).default;t.default=s.extend({initialize:function(){this.overrideViewDestroyMethod()},onRender:function(){this.$el.addClass("animated show")},overrideViewDestroyMethod:function(){var n=this;this.view.destroy=function(){var e=this,t=arguments;if(this.isDestroyed)return this;var o=r.prototype.destroy;n.onBeforeDestroyWithAnimation().then(function(){return o.apply(e,t)}).fail(function(){return o.apply(e,t)})},this.view.destroy.bind(this.view)},onBeforeDestroyWithAnimation:function(){var e=this,t=c.Deferred();return this.view.$el.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){t.resolve(),l.trigger("list:change",e.view)}),this.view.$el.removeClass("show").addClass("removing"),setTimeout(function(){"resolved"===!t.state()&&t.reject("time-out")},1e4),t.promise()}}),e.exports=t.default}),define("confluence-dashboard/behaviors/list-item-animated.js",function(){}),define("confluence-dashboard/modules/stream-item/stream-item-view",["module","exports","marionette","confluence-dashboard/soy-templates","confluence/hover-user"],function(e,t,o,n,i){"use strict";var a=o.ItemView,r=l(n).default,s=l(i).default;function l(e){return e&&e.__esModule?e:{default:e}}t.default=a.extend({template:r.Stream.item,tagName:"li",className:"grouping",onDomRefresh:function(){s()}}),e.exports=t.default}),define("confluence-dashboard/modules/stream-item/stream-item-view.js",function(){}),define("confluence-dashboard/utils/ensure-component",["module","exports","jquery"],function(e,t,o){"use strict";var n,i=((n=o)&&n.__esModule?n:{default:n}).default;function a(e){return i(e).hasClass("__skate")||e.hasAttribute("resolved")}t.default=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:200,o=i.Deferred();return a(e)?o.resolve():function e(t){t.condition()?t.callback():setTimeout(function(){e(t)},t.interval)}({interval:t,condition:function(){return a(e)},callback:function(){o.resolve()}}),o.promise()},e.exports=t.default}),define("confluence-dashboard/utils/module-starter",["module","exports","./event-manager"],function(e,t,o){"use strict";var n=o.ReqRes;t.default={register:function(e){var t=n.request("app");if(!e||"function"!=typeof e)throw"ModuleStarter.register needs a function as callback";if(!t)throw"ModuleStarter is being called before the app is available, please review your dependencies";t.isStarted?e():t.on("start",e)}},e.exports=t.default}),define("confluence-dashboard",function(){}),require(["confluence-dashboard/index"]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:navigation-webitems-resources', location = '/templates/modules/all-updates/all-updates-template.soy' */
// This file was automatically generated from all-updates-template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DashboardTemplates.AllUpdates.
 */

if (typeof DashboardTemplates == 'undefined') { var DashboardTemplates = {}; }
if (typeof DashboardTemplates.AllUpdates == 'undefined') { DashboardTemplates.AllUpdates = {}; }


DashboardTemplates.AllUpdates.blank = function(opt_data, opt_ignored) {
  return '' + DashboardTemplates.Default.blank({cssClass: 'all-updates', title: 'There\x27s not much happening... Yet', content: '<p>' + soy.$$filterNoAutoescape('Keep up to date with everything that\x27s happening in this site. New pages, files, edits and comments will all appear here.') + '</p><p>' + soy.$$filterNoAutoescape('Time to create the next big thing.') + '</p>'});
};
if (goog.DEBUG) {
  DashboardTemplates.AllUpdates.blank.soyTemplateName = 'DashboardTemplates.AllUpdates.blank';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:navigation-webitems-resources', location = '/templates/modules/popular-stream/popular-stream-template.soy' */
// This file was automatically generated from popular-stream-template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DashboardTemplates.PopularStream.
 */

if (typeof DashboardTemplates == 'undefined') { var DashboardTemplates = {}; }
if (typeof DashboardTemplates.PopularStream == 'undefined') { DashboardTemplates.PopularStream = {}; }


DashboardTemplates.PopularStream.compactStreamItem = function(opt_data, opt_ignored) {
  var output = '<a href="' + soy.$$escapeHtml(opt_data.url) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"><div class="avatar-container"><span class="aui-avatar aui-avatar-large"><span class="aui-avatar-inner"><img src="' + soy.$$escapeHtml(opt_data.author.avatarUrl) + '" alt="' + soy.$$escapeHtml(opt_data.author.fullName) + '" /></span></span><div class="stream-icon-container"><span class="' + soy.$$escapeHtml(opt_data.iconCssClass) + '"></span></div></div><div class="stream-item-body-container"><div class="compact-stream-item-layout"><div class="stream-heading-container"><span class="stream-item-heading">' + soy.$$escapeHtml(opt_data.title) + '</span></div>';
  var countItemList16 = opt_data.counts;
  var countItemListLen16 = countItemList16.length;
  for (var countItemIndex16 = 0; countItemIndex16 < countItemListLen16; countItemIndex16++) {
    var countItemData16 = countItemList16[countItemIndex16];
    output += '<div class="count-container valign-middle-container"><span class="count-icon ' + soy.$$escapeHtml(countItemData16.cssClass) + '"></span><span class="count">' + soy.$$escapeHtml(countItemData16.count) + '</span></div>';
  }
  output += '</div><div class="flush-with-heading-container"><div class="stream-item-meta"><ol class="middot-list user-info"><li>' + ((opt_data.author.anonymous) ? '<span class="anonymous-user">' + soy.$$escapeHtml(opt_data.author.fullName) + '</span>' : (opt_data.author.unknownUser) ? '<span class="unknown-user">' + soy.$$escapeHtml(opt_data.author.fullName) + '</span>' : '<span data-username="' + soy.$$escapeHtml(opt_data.author.userName) + '">' + soy.$$escapeHtml(opt_data.author.fullName) + '</span>') + '</li></ol><time datetime="" class="stream-item-date">' + soy.$$escapeHtml(opt_data.friendlyDate) + '</span></div>' + ((opt_data.imageUris && opt_data.imageUris.length > 0) ? '<div class="thumbnails thumbnail-layout"><div><img src="' + soy.$$escapeHtml(opt_data.imageUris[0]) + '"></div></div>' : '') + ((opt_data.excerpt) ? '<div class="excerpt">' + soy.$$filterNoAutoescape(opt_data.excerpt) + '</div>' : '') + '</div></div></a>';
  return output;
};
if (goog.DEBUG) {
  DashboardTemplates.PopularStream.compactStreamItem.soyTemplateName = 'DashboardTemplates.PopularStream.compactStreamItem';
}


DashboardTemplates.PopularStream.blank = function(opt_data, opt_ignored) {
  return '' + DashboardTemplates.Default.blank({cssClass: 'popular-stream', image: opt_data.image, title: 'There\x27s not much happening... Yet', content: '<p>' + soy.$$filterNoAutoescape('Things are pretty quiet right now, but once your team starts creating, the most popular pages and files will appear here.') + '</p><p>' + soy.$$filterNoAutoescape('Let\x27s get this party started!') + '</p>' + ((opt_data.userCanCreateContent) ? '<a class="aui-style aui-button aui-button-primary create-page">' + soy.$$escapeHtml('Create Page') + '</a>' : '')});
};
if (goog.DEBUG) {
  DashboardTemplates.PopularStream.blank.soyTemplateName = 'DashboardTemplates.PopularStream.blank';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:navigation-webitems-resources', location = '/templates/modules/recently-viewed/recently-viewed-template.soy' */
// This file was automatically generated from recently-viewed-template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DashboardTemplates.RecentViewed.
 */

if (typeof DashboardTemplates == 'undefined') { var DashboardTemplates = {}; }
if (typeof DashboardTemplates.RecentViewed == 'undefined') { DashboardTemplates.RecentViewed = {}; }


DashboardTemplates.RecentViewed.blank = function(opt_data, opt_ignored) {
  return '' + DashboardTemplates.Default.blank({cssClass: 'recently-viewed', title: 'Time to make history', content: '<p>' + soy.$$filterNoAutoescape('You haven\x27t visited any pages yet, but when you do, we\x27ll drop them here so you can get back to them fast.') + '</p><p>' + soy.$$filterNoAutoescape('Head over to a \x3cb\x3espace\x3c/b\x3e now and have a look around.') + '</p>'});
};
if (goog.DEBUG) {
  DashboardTemplates.RecentViewed.blank.soyTemplateName = 'DashboardTemplates.RecentViewed.blank';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:navigation-webitems-resources', location = '/templates/modules/recently-worked/recently-worked-template.soy' */
// This file was automatically generated from recently-worked-template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DashboardTemplates.RecentWorked.
 */

if (typeof DashboardTemplates == 'undefined') { var DashboardTemplates = {}; }
if (typeof DashboardTemplates.RecentWorked == 'undefined') { DashboardTemplates.RecentWorked = {}; }


DashboardTemplates.RecentWorked.blank = function(opt_data, opt_ignored) {
  return '' + DashboardTemplates.Default.blank({cssClass: 'recently-worked', title: 'Finish that masterpiece', content: '<p>' + soy.$$filterNoAutoescape('You haven\x27t created or edited anything yet, but when you do, we\x27ll drop it here so it\x27s easy to pick up where you left off.') + '</p><p>' + soy.$$filterNoAutoescape('Now, go and create your greatest work.') + '</p>' + ((opt_data.userCanCreateContent) ? '<a class="aui-style aui-button aui-button-primary create-page">' + soy.$$escapeHtml('Create Page') + '</a>' : '')});
};
if (goog.DEBUG) {
  DashboardTemplates.RecentWorked.blank.soyTemplateName = 'DashboardTemplates.RecentWorked.blank';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:navigation-webitems-resources', location = '/templates/modules/starred/starred-template.soy' */
// This file was automatically generated from starred-template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DashboardTemplates.Starred.
 */

if (typeof DashboardTemplates == 'undefined') { var DashboardTemplates = {}; }
if (typeof DashboardTemplates.Starred == 'undefined') { DashboardTemplates.Starred = {}; }


DashboardTemplates.Starred.blank = function(opt_data, opt_ignored) {
  return '' + DashboardTemplates.Default.blank({cssClass: 'starred', title: 'Nothing to see here... Yet', content: '<p>' + soy.$$filterNoAutoescape('Hit \x3cb\x3eSave for later\x3c/b\x3e on any page, and we\x27ll drop it here, so it\x27s easy for you to get back to later.') + '</p><p>' + soy.$$filterNoAutoescape('So simple!') + '</p>'});
};
if (goog.DEBUG) {
  DashboardTemplates.Starred.blank.soyTemplateName = 'DashboardTemplates.Starred.blank';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:navigation-webitems-resources', location = '/js/confluence-dashboard/modules/all-updates/all-updates-controller.js' */
define("confluence-dashboard/modules/all-updates/all-updates-collection",["module","exports","backbone","../../core/shared/base-collection","configuration"],function(e,t,l,a,o){"use strict";var n=u(l).default,s=u(a).default,c=o.endpoints;function u(e){return e&&e.__esModule?e:{default:e}}t.default=s.extend({url:c.ALL_UPDATES,sync:function(e,t,l){if("read"===e)return l.data={maxResults:40,tab:"all",showProfilePic:!0,labels:"",spaces:"",users:"",types:"",category:"",spaceKey:""},n.sync.call(this,e,t,l);console.log("Method not implemented for all updates",e)},parse:function(e){return e.changeSets}}),e.exports=t.default}),define("confluence-dashboard/modules/all-updates/all-updates-controller",["module","exports","./all-updates-collection","confluence-dashboard/core/content/content-controller","confluence-dashboard/core/content/content-as-stream-view","confluence-dashboard/soy-templates","configuration","ajs"],function(e,t,l,a,o,n,s,c){"use strict";var u=p(l).default,d=p(a).default,r=p(o).default,i=p(n).default,f=(s.staticResourceUrl,p(c).default);function p(e){return e&&e.__esModule?e:{default:e}}t.default=d.extend({actionsToFilter:["allUpdates"],allUpdates:function(){this.view=new r({collection:new u,templateHelpers:{title:"All updates",contentType:this.options.name},emptyViewOptions:{template:i.AllUpdates.blank}}),this.view.collection.fetch()}}),e.exports=t.default});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:navigation-webitems-resources', location = '/js/confluence-dashboard/modules/popular-stream/popular-stream-controller.js' */
define("confluence-dashboard/modules/popular-stream/popular-stream-collection",["module","exports","../../core/shared/cql-base-collection","backbone","configuration"],function(e,t,a,o,n){"use strict";var l,r=((l=a)&&l.__esModule?l:{default:l}).default,s=(o.Collection,n.endpoints);t.default=r.extend({url:s.POPULAR_STREAM,parse:function(e,t){return this.parseNext(e,t),e.streamItems},parseNext:function(e){e.nextPageOffset?(this.hasNext=!0,this.nextUrl=s.POPULAR_STREAM+"&nextPageOffset="+e.nextPageOffset):(this.hasNext=!1,this.nextUrl=null)}}),e.exports=t.default}),define("confluence-dashboard/modules/popular-stream/popular-stream-view",["module","exports","marionette","confluence-dashboard/soy-templates","confluence/hover-user"],function(e,t,a,o,n){"use strict";var l=a.ItemView,r=u(o).default,s=u(n).default;function u(e){return e&&e.__esModule?e:{default:e}}t.default=l.extend({template:r.PopularStream.compactStreamItem,tagName:"li",className:function(){return"stream-item stream-item-layout "+this.model.get("contentCssClass")},onDomRefresh:function(){s()}}),e.exports=t.default}),define("confluence-dashboard/modules/popular-stream/popular-stream-controller",["module","exports","./popular-stream-collection","./popular-stream-view","confluence-dashboard/core/content/content-as-stream-view","confluence-dashboard/core/content/content-controller","confluence-dashboard/soy-templates","ajs"],function(e,t,a,o,n,l,r,s){"use strict";var u=m(a).default,c=m(o).default,i=m(n).default,d=m(l).default,f=m(r).default,p=m(s).default;function m(e){return e&&e.__esModule?e:{default:e}}t.default=d.extend({actionsToFilter:["popularStream"],popularStream:function(){this.view=new i({collection:new u,templateHelpers:{title:"Popular",contentType:this.options.name},childView:c,emptyViewOptions:{template:f.PopularStream.blank}}),this.view.collection.fetch()}}),e.exports=t.default});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:navigation-webitems-resources', location = '/js/confluence-dashboard/modules/recently-viewed/recently-viewed-controller.js' */
define("confluence-dashboard/modules/recently-viewed/recently-viewed-collection",["module","exports","backbone","configuration","confluence-dashboard/utils/date-utils","../../core/shared/base-collection-with-function","underscore","ajs"],function(e,t,n,a,o,r,c,l){"use strict";var i=n.Model,d=a.endpoints,s=p(o).default,u=p(r).default,f=p(c).default;function p(e){return e&&e.__esModule?e:{default:e}}var m=p(l).default.contextPath(),w=i.extend({parse:function(e){var t=e.metadata.currentuser.viewed.lastSeen,n=new Date(t),a=n.getTime();return f.extend(e,{url:m+e._links.webui,date:t,timestamp:a,lastSeenISO:s.toISODate(n),icon:"page"===e.type?"page":"blogpost"}),e}});t.default=u.extend({model:w,comparator:function(e,t){return-s.compareTimestamps(e.get("timestamp"),t.get("timestamp"))},apiParams:function(e){return{url:d.RECENTLY_VIEWED,expansions:["container","metadata.currentuser.viewed","metadata.currentuser.lastcontributed"],cql:"id in recentlyViewedContent("+this.getPageLimit(e)+", "+this.getPageOffset(e)+")",cqlcontext:'{"contentStatuses":["current","draft"]}'}},groupMethod:function(e){return e.get("lastSeenISO")}}),e.exports=t.default}),define("confluence-dashboard/modules/recently-viewed/recently-viewed-controller",["module","exports","./recently-viewed-collection","confluence-dashboard/core/content/content-as-grouped-list-view","confluence-dashboard/core/content/content-controller","confluence-dashboard/soy-templates","configuration","ajs"],function(e,t,n,a,o,r,c,l){"use strict";var i=p(n).default,d=p(a).default,s=p(o).default,u=p(r).default,f=(c.staticResourceUrl,p(l).default);function p(e){return e&&e.__esModule?e:{default:e}}t.default=s.extend({actionsToFilter:["recentViewed"],recentViewed:function(){this.view=new d({collection:new i,templateHelpers:{title:"Recently visited",contentType:this.options.name},emptyViewOptions:{template:u.RecentViewed.blank},className:"default-list-view starred-list"}),this.view.collection.fetch()}}),e.exports=t.default});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:navigation-webitems-resources', location = '/js/confluence-dashboard/modules/recently-worked/recently-worked-controller.js' */
define("confluence-dashboard/modules/recently-worked/recently-worked-collection",["module","exports","backbone","configuration","confluence-dashboard/utils/date-utils","../../core/shared/base-collection-with-function","underscore","ajs"],function(e,t,n,a,r,o,d,l){"use strict";var s=n.Model,i=(a.apiLimit,a.endpoints),c=m(r).default,u=m(o).default,f=m(d).default;function m(e){return e&&e.__esModule?e:{default:e}}var p=m(l).default.contextPath(),g=s.extend({parse:function(e){var t=e.metadata.currentuser.lastcontributed&&e.metadata.currentuser.lastcontributed.when||null,n=e.metadata.currentuser.lastmodified&&e.metadata.currentuser.lastmodified.version&&e.metadata.currentuser.lastmodified.version.when||null,a=new Date(t||0),r=new Date(n||0),o=r<a?a:r,d=r<a?t:n,l=o.getTime();return f.extend(e,{url:"draft"===e.status?p+e._links.edit:p+e._links.webui,date:d,timestamp:l,lastContributedISO:c.toISODate(o),friendlyDate:"Updated "+d,updated:d,icon:"page"===e.type?"page":"blogpost"}),e}});t.default=u.extend({model:g,comparator:function(e,t){return-c.compareTimestamps(e.get("timestamp"),t.get("timestamp"))},apiParams:function(e){var t={url:i.RECENTLY_WORKED,expansions:["container","metadata.currentuser.lastcontributed","metadata.currentuser.lastmodified"],cql:"type in (page,blogpost) and id in recentlyModifiedPagesAndBlogPostsByUser(currentUser(), "+this.getPageOffset(e)+", "+this.getPageLimit(e)+")",cqlcontext:'{"contentStatuses":["current","draft"]}'};return t},groupMethod:function(e){return e.get("lastContributedISO")}}),e.exports=t.default}),define("confluence-dashboard/modules/recently-worked/recently-worked-controller",["module","exports","./recently-worked-collection","../../core/content/content-as-grouped-list-discovery-view","confluence-dashboard/core/content/content-controller","confluence-dashboard/soy-templates","ajs"],function(e,t,n,a,r,o,d){"use strict";var l=f(n).default,s=f(a).default,i=f(r).default,c=f(o).default,u=f(d).default;function f(e){return e&&e.__esModule?e:{default:e}}t.default=i.extend({actionsToFilter:["recentWorked"],recentWorked:function(){this.view=new s({collection:new l,templateHelpers:{title:"Recently worked on",contentType:this.options.name},emptyViewOptions:{template:c.RecentWorked.blank},className:"default-list-view starred-list"}),this.view.collection.fetch()}}),e.exports=t.default});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:navigation-webitems-resources', location = '/js/confluence-dashboard/modules/starred/starred-controller.js' */
define("confluence-dashboard/modules/starred/starred-collection",["module","exports","backbone","configuration","confluence-dashboard/utils/date-utils","../../core/shared/cql-base-collection","ajs","confluence/meta","jquery","underscore"],function(e,t,a,r,o,l,n,s,d,u){"use strict";var i=a.Model,c=r.endpoints,f=r.apiLimit,p=x(o).default,m=x(l).default,v=x(n).default,h=x(s).default,b=x(d).default,y=x(u).default;function x(e){return e&&e.__esModule?e:{default:e}}var w=v.contextPath(),_=i.extend({url:c.ADD_FAVOURITE,url_destroy:c.REMOVE_FAVOURITE,defaults:{virtuallyDeleted:!1},parse:function(e){e.entityId=e.id,e.url=w+e._links.webui,e.icon="page"===e.type?"page":"blogpost";var t=e.metadata.currentuser.favourited.favouritedDate;return e.favouritedDateISO=p.toISODate(new Date(t)),e},destroy:function(){return i.prototype.destroy.call(this,{dataType:"json",data:b.param({entityId:this.get("entityId"),atl_token:h.get("atl-token")}),url:this.url_destroy,type:"POST"})}});t.default=m.extend({apiParams:{url:c.STARRED,params:{limit:f},expansions:["metadata.currentuser.favourited","metadata.currentuser.lastcontributed"],cql:"favourite=currentUser()",cqlOrder:"favourite desc",cqlcontext:'{"contentStatuses":["current","draft"]}'},model:_,groupMethod:function(e){return e.get("favouritedDateISO")},parse:function(e,t){return e.results=y.reject(e.results,function(e){return!e.metadata.currentuser.favourited}),m.prototype.parse.apply(this,arguments)}}),e.exports=t.default}),define("confluence-dashboard/modules/starred/starred-item-view",["module","exports","underscore","../list-item/list-item-view","../../behaviors/undo-remove","../../behaviors/list-item-animated","../../behaviors/tooltips"],function(e,t,a,r,o,l,n){"use strict";var s=f(a).default,d=f(r).default,u=f(o).default,i=f(l).default,c=f(n).default;function f(e){return e&&e.__esModule?e:{default:e}}t.default=d.extend({templateHelpers:s.extend({removable:!0},d.prototype.templateHelpers),ui:{tooltips:".top-tooltip"},behaviors:{undoRemove:{behaviorClass:u,eventNamespace:"favourites"},tooltip:{behaviorClass:c,selector:".top-tooltip"},animated:{behaviorClass:i}}}),e.exports=t.default}),define("confluence-dashboard/modules/starred/starred-controller",["module","exports","confluence-dashboard/core/content/content-as-grouped-list-view","confluence-dashboard/core/content/content-controller","./starred-collection","./starred-item-view","confluence-dashboard/soy-templates","configuration","ajs"],function(e,t,a,r,o,l,n,s,d){"use strict";var u=v(a).default,i=v(r).default,c=v(o).default,f=v(l).default,p=v(n).default,m=(s.staticResourceUrl,v(d).default);function v(e){return e&&e.__esModule?e:{default:e}}t.default=i.extend({actionsToFilter:["starred"],starred:function(){this.view=new u({collection:new c,templateHelpers:{title:"Saved for later",contentType:this.options.name},childViewOptions:{childView:f},emptyViewOptions:{template:p.Starred.blank},className:"default-list-view starred-list"}),this.view.collection.fetch()}}),e.exports=t.default});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:navigation-webitems-resources', location = '/templates/modules/recommended-stream/recommended-stream-template.soy' */
// This file was automatically generated from recommended-stream-template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DashboardTemplates.RecommendedStream.
 */

if (typeof DashboardTemplates == 'undefined') { var DashboardTemplates = {}; }
if (typeof DashboardTemplates.RecommendedStream == 'undefined') { DashboardTemplates.RecommendedStream = {}; }


DashboardTemplates.RecommendedStream.compactStreamItem = function(opt_data, opt_ignored) {
  var output = '<div class="avatar-container">' + ((! opt_data.author.anonymous) ? '<a class="confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.author.userName) + '" href="' + soy.$$escapeHtml(opt_data.author.url) + '">' : '') + '<img class="avatar userLogo logo" src="' + soy.$$escapeHtml(opt_data.author.avatarUrl) + '"><div class="stream-icon-container"><span class="aui-icon aui-icon-small content-type-page"></span></div>' + ((! opt_data.author.anonymous) ? '</a>' : '') + '</div><div class="stream-item-body-container"><div class="compact-stream-item-layout"><div class="stream-heading-container"><span class="stream-item-heading"><a class="stream-item-heading-link visitable" href="' + soy.$$escapeHtml(opt_data.url) + '">' + soy.$$escapeHtml(opt_data.title) + '</a></span></div><div class="count-container valign-middle-container"><a href="" class="delete-button"><span class="aui-icon aui-icon-small aui-iconfont-delete">ignore</span></a></div>';
  var countItemList22 = opt_data.counts;
  var countItemListLen22 = countItemList22.length;
  for (var countItemIndex22 = 0; countItemIndex22 < countItemListLen22; countItemIndex22++) {
    var countItemData22 = countItemList22[countItemIndex22];
    output += '<div class="count-container valign-middle-container"><span class="' + soy.$$escapeHtml(countItemData22.cssClass) + '"></span><span class="count">' + soy.$$escapeHtml(countItemData22.count) + '</span></div>';
  }
  output += '</div><div class="flush-with-heading-container"><div class="stream-item-meta">';
  var viewerList30 = opt_data.viewers;
  var viewerListLen30 = viewerList30.length;
  for (var viewerIndex30 = 0; viewerIndex30 < viewerListLen30; viewerIndex30++) {
    var viewerData30 = viewerList30[viewerIndex30];
    output += '<span class="viewer-image"><a class="confluence-userlink" data-username="' + soy.$$escapeHtml(viewerData30.userName) + '" href="' + soy.$$escapeHtml(viewerData30.url) + '"><img class="avatar userLogo logo smaller" src="' + soy.$$escapeHtml(viewerData30.avatarUrl) + '" alt="' + soy.$$escapeHtml(viewerData30.fullName) + '"/></a></span>';
  }
  output += '<ol class="middot-list"><li>' + ((opt_data.author.anonymous) ? '<span class="anonymous-user">' + soy.$$escapeHtml(opt_data.author.fullName) + '</span>' : (opt_data.author.unknownUser) ? '<span class="unknown-user">' + soy.$$escapeHtml(opt_data.author.fullName) + '</span>' : '<a class="confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.author.userName) + '" href="' + soy.$$escapeHtml(opt_data.author.url) + '">' + soy.$$escapeHtml(opt_data.author.fullName) + '</a>') + '</li></ol><time datetime="" class="stream-item-date">' + soy.$$escapeHtml(opt_data.friendlyDate) + '</time></div></div></div>';
  return output;
};
if (goog.DEBUG) {
  DashboardTemplates.RecommendedStream.compactStreamItem.soyTemplateName = 'DashboardTemplates.RecommendedStream.compactStreamItem';
}


DashboardTemplates.RecommendedStream.blank = function(opt_data, opt_ignored) {
  return '' + DashboardTemplates.Default.blank({cssClass: 'popular-stream', image: opt_data.image, title: 'There\x27s not much happening... Yet', content: '<p>' + soy.$$filterNoAutoescape('Things are pretty quiet right now, but once your team starts creating, the most popular pages and files will appear here.') + '</p><p>' + soy.$$filterNoAutoescape('Let\x27s get this party started!') + '</p>' + ((opt_data.userCanCreateContent) ? '<a class="aui-style aui-button aui-button-primary create-page">' + soy.$$escapeHtml('Create Page') + '</a>' : '')});
};
if (goog.DEBUG) {
  DashboardTemplates.RecommendedStream.blank.soyTemplateName = 'DashboardTemplates.RecommendedStream.blank';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:navigation-webitems-resources', location = '/js/confluence-dashboard/modules/recommended-stream/recommended-stream-controller.js' */
define("confluence-dashboard/modules/recommended-stream/recommended-stream-collection",["module","exports","underscore","../../core/shared/cql-base-collection","backbone","configuration"],function(e,t,o,n,d,l){"use strict";var a=c(o).default,m=c(n).default,r=(d.Collection,d.Model),s=l.endpoints;function c(e){return e&&e.__esModule?e:{default:e}}var i=r.extend({destroy:function(){return r.prototype.destroy.call(this,{dataType:"json",url:s.RECOMMENDED_STREAM+"/"+this.get("id"),type:"DELETE"})}});t.default=m.extend({url:s.RECOMMENDED_STREAM,model:i,parse:function(t,e){return this.parseNext(t,e),a.map(t.streamItems,function(e){return e.model=t.model,e})},parseNext:function(e){e.nextPageOffset?(this.hasNext=!0,this.nextUrl=s.RECOMMENDED_STREAM+"?nextPageOffset="+e.nextPageOffset):(this.hasNext=!1,this.nextUrl=null)}}),e.exports=t.default}),define("confluence-dashboard/modules/recommended-stream/recommended-stream-view",["module","exports","marionette","confluence-dashboard/soy-templates","confluence/hover-user","../../utils/analytics","configuration"],function(e,t,o,n,d,l,a){"use strict";var m=o.ItemView,r=i(n).default,s=i(d).default,c=i(l).default;a.endpoints;function i(e){return e&&e.__esModule?e:{default:e}}t.default=m.extend({template:r.RecommendedStream.compactStreamItem,tagName:"li",events:{"click a.stream-item-heading-link":"onItemClick","mousedown a.stream-item-heading-link":"onItemClick","click a.delete-button":"onItemDelete"},className:function(){return"stream-item stream-item-layout "+this.model.get("contentCssClass")},onDomRefresh:function(){s()},onItemClick:function(){c.publish("recommended.item.clicked",{model:this.model.get("model")||"",id:this.model.get("id")})},onItemDelete:function(e){this.model.destroy(),c.publish("recommended.item.deleted",{model:this.model.get("model")||"",id:this.model.get("id")}),e.preventDefault()}}),e.exports=t.default}),define("confluence-dashboard/modules/recommended-stream/recommended-stream-controller",["module","exports","./recommended-stream-collection","./recommended-stream-view","confluence-dashboard/core/content/content-as-stream-view","confluence-dashboard/core/content/content-controller","confluence-dashboard/soy-templates"],function(e,t,o,n,d,l,a){"use strict";var m=u(o).default,r=u(n).default,s=u(d).default,c=u(l).default,i=u(a).default;function u(e){return e&&e.__esModule?e:{default:e}}t.default=c.extend({actionsToFilter:["recommendedStream"],recommendedStream:function(){this.view=new s({collection:new m,templateHelpers:{title:"Recommended for you",contentType:this.options.name},childView:r,emptyViewOptions:{template:i.RecommendedStream.blank}}),this.view.collection.fetch()}}),e.exports=t.default});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:onboarding-dialog', location = '/templates/modules/onboarding/onboarding-template.soy' */
// This file was automatically generated from onboarding-template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DashboardTemplates.Onboarding.
 */

if (typeof DashboardTemplates == 'undefined') { var DashboardTemplates = {}; }
if (typeof DashboardTemplates.Onboarding == 'undefined') { DashboardTemplates.Onboarding = {}; }


DashboardTemplates.Onboarding.newSimplifyOnboarding = function(opt_data, opt_ignored) {
  return '' + DashboardTemplates.Onboarding.chromelessDialog(soy.$$augmentMap(opt_data, {id: 'simplify-onboarding', content: '<h3>' + soy.$$escapeHtml('Welcome to Confluence') + '</h3><p>' + soy.$$filterNoAutoescape('In Confluence you can create content, share knowledge, and collaborate with your team \u2014 to keep work moving forward.') + '</p>', actions: '<button class="aui-button aui-button-primary show-onboarding">' + soy.$$escapeHtml('Let\x27s go') + '</button>'}));
};
if (goog.DEBUG) {
  DashboardTemplates.Onboarding.newSimplifyOnboarding.soyTemplateName = 'DashboardTemplates.Onboarding.newSimplifyOnboarding';
}


DashboardTemplates.Onboarding.chromelessDialog = function(opt_data, opt_ignored) {
  return '<!-- Main dialog content --><div class="aui-dialog2-content"><div class="dialog-image-container"><div class="onboarding-image"></div></div><div class="dialog-content-container">' + soy.$$filterNoAutoescape(opt_data.content) + '</div></div><footer class="aui-dialog2-footer"><div class="aui-dialog2-footer-actions">' + soy.$$filterNoAutoescape(opt_data.actions) + '</div></footer>';
};
if (goog.DEBUG) {
  DashboardTemplates.Onboarding.chromelessDialog.soyTemplateName = 'DashboardTemplates.Onboarding.chromelessDialog';
}


DashboardTemplates.Onboarding.tooltipBaseContent = function(opt_data, opt_ignored) {
  return '<h6>' + soy.$$escapeHtml(opt_data.title) + '</h6><p>' + soy.$$escapeHtml(opt_data.content) + '</p><footer class="tip-footer">' + soy.$$filterNoAutoescape(opt_data.actions) + ((opt_data.page) ? '<span class="onboarding-page-info">' + soy.$$escapeHtml(opt_data.page) + '</span>' : '') + '</footer>';
};
if (goog.DEBUG) {
  DashboardTemplates.Onboarding.tooltipBaseContent.soyTemplateName = 'DashboardTemplates.Onboarding.tooltipBaseContent';
}


DashboardTemplates.Onboarding.tooltipBase = function(opt_data, opt_ignored) {
  return '<button aria-controls="' + soy.$$escapeHtml(opt_data.id) + '" data-aui-trigger class="onboarding-hotspot"></button><aui-inline-dialog id="' + soy.$$escapeHtml(opt_data.id) + '" class="onboarding-tooltips aui-help onboarding-inline-dialog" alignment="left top" responds-to="toggle" aria-hidden="true">' + DashboardTemplates.Onboarding.tooltipBaseContent(opt_data) + '</aui-inline-dialog>';
};
if (goog.DEBUG) {
  DashboardTemplates.Onboarding.tooltipBase.soyTemplateName = 'DashboardTemplates.Onboarding.tooltipBase';
}


DashboardTemplates.Onboarding.tooltipStep1 = function(opt_data, opt_ignored) {
  return '' + DashboardTemplates.Onboarding.tooltipBase(soy.$$augmentMap(opt_data, {actions: '<button class="aui-button btn-next">' + soy.$$escapeHtml('Next') + '</button><button class="aui-button aui-button-link btn-skip">' + soy.$$escapeHtml('Skip tips') + '</button>', page: '1/2'}));
};
if (goog.DEBUG) {
  DashboardTemplates.Onboarding.tooltipStep1.soyTemplateName = 'DashboardTemplates.Onboarding.tooltipStep1';
}


DashboardTemplates.Onboarding.tooltipStep2 = function(opt_data, opt_ignored) {
  return '' + DashboardTemplates.Onboarding.tooltipBase(soy.$$augmentMap(opt_data, {actions: '<button class="aui-button btn-skip">' + soy.$$escapeHtml('Got it!') + '</button>', page: '2/2'}));
};
if (goog.DEBUG) {
  DashboardTemplates.Onboarding.tooltipStep2.soyTemplateName = 'DashboardTemplates.Onboarding.tooltipStep2';
}


DashboardTemplates.Onboarding.existingUserStep1 = function(opt_data, opt_ignored) {
  return '' + DashboardTemplates.Onboarding.tooltipStep1(soy.$$augmentMap(opt_data, {title: 'Discover more with the sidebar', content: 'Find new pages and get back to your recent work from your slick new sidebar.'}));
};
if (goog.DEBUG) {
  DashboardTemplates.Onboarding.existingUserStep1.soyTemplateName = 'DashboardTemplates.Onboarding.existingUserStep1';
}


DashboardTemplates.Onboarding.existingUserStep2 = function(opt_data, opt_ignored) {
  return '' + DashboardTemplates.Onboarding.tooltipStep2(soy.$$augmentMap(opt_data, {title: 'Favorite spaces at your fingertips', content: 'Jump straight to your favorite spaces or visit the list of all spaces.'}));
};
if (goog.DEBUG) {
  DashboardTemplates.Onboarding.existingUserStep2.soyTemplateName = 'DashboardTemplates.Onboarding.existingUserStep2';
}


DashboardTemplates.Onboarding.newUserStep1 = function(opt_data, opt_ignored) {
  return '' + DashboardTemplates.Onboarding.tooltipStep1(soy.$$augmentMap(opt_data, {title: 'Discover more with the sidebar', content: 'Find new pages and get back to your recent work from the sidebar.'}));
};
if (goog.DEBUG) {
  DashboardTemplates.Onboarding.newUserStep1.soyTemplateName = 'DashboardTemplates.Onboarding.newUserStep1';
}


DashboardTemplates.Onboarding.newUserStep2 = function(opt_data, opt_ignored) {
  return '' + DashboardTemplates.Onboarding.tooltipStep2(soy.$$augmentMap(opt_data, {title: 'Favorite spaces at your fingertips', content: 'Jump straight to your favorite spaces or visit the list of all spaces.'}));
};
if (goog.DEBUG) {
  DashboardTemplates.Onboarding.newUserStep2.soyTemplateName = 'DashboardTemplates.Onboarding.newUserStep2';
}


DashboardTemplates.Onboarding.transitionSavedForLater = function(opt_data, opt_ignored) {
  return '' + DashboardTemplates.Onboarding.tooltipBase(soy.$$augmentMap(opt_data, {actions: '<button class="aui-button btn-skip">' + soy.$$escapeHtml('Got it!') + '</button>', title: 'Goodbye Favorites, hello Saved for later', content: '' + soy.$$filterNoAutoescape('Your favorite pages now appear under their new name - Saved for later.')}));
};
if (goog.DEBUG) {
  DashboardTemplates.Onboarding.transitionSavedForLater.soyTemplateName = 'DashboardTemplates.Onboarding.transitionSavedForLater';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:onboarding-dialog', location = '/js/confluence-dashboard/modules/onboarding/onboarding-controller.js' */
define("confluence-dashboard/modules/onboarding/onboarding-view",["module","exports","../../core/shared/base-dialog","confluence-dashboard/soy-templates","configuration","../../utils/feature-discovery","underscore"],function(e,o,i,n,a,r,t){"use strict";var s=f(i).default,u=f(n).default,d=a.pluginKey,l=(a.staticResourceUrl,f(r).default),c=f(t).default;function f(e){return e&&e.__esModule?e:{default:e}}o.default=s.extend({className:"aui-layer aui-dialog2 aui-dialog2-medium confluence-dialog-no-chrome confluence-dialog-centered simple-onboarding",attributes:{id:"dashboard-onboarding-dialog","aria-hidden":!0},ui:{btnShow:".show-onboarding",btnSkip:".skip-onboarding"},events:{"click @ui.btnShow":"showOnboarding","click @ui.btnSkip":"skipOnboarding"},initialize:function(){this.featureDiscovery=l.forPlugin(d),this.featureDiscovery.canShow("dialog")?this.openDialog():this.remove()},onDestroy:function(){this.markAsSkipOnBoarding(),this.featureDiscovery=null},serializeData:function(){return{fullUsername:this.options.currentUserFullName}},getTemplate:function(){return u.Onboarding.newSimplifyOnboarding},showOnboarding:function(){this.featureDiscovery.markDiscoveredSafe("dialog"),this.closeDialog(),this.options.onConfirm&&c.isFunction(this.options.onConfirm)&&this.options.onConfirm()},markAsSkipOnBoarding:function(){this.featureDiscovery&&(this.featureDiscovery.markDiscoveredSafe("dialog"),this.featureDiscovery.markDiscoveredSafe("tips"))},skipOnboarding:function(){this.markAsSkipOnBoarding(),this.closeDialog()}}),e.exports=o.default}),define("confluence-dashboard/modules/onboarding/onboarding-controller",["../../utils/event-manager","./onboarding-view","../../utils/module-starter","confluence/meta","../../utils/conditions","ajs","configuration","../../utils/feature-discovery"],function(e,o,i,n,a,r,t,s){"use strict";var u=e.Commands,d=b(o).default,l=b(i).default,c=b(n).default,f=b(a).default,g=b(r).default,h=t.pluginKey,m=b(s).default;function b(e){return e&&e.__esModule?e:{default:e}}function p(){var e=c.getBoolean("is-confluence-admin"),o=c.getBoolean("is-new-user"),i=c.getBoolean("show-dashboard-onboarding-dialog"),n=(c.getBoolean("show-dashboard-onboarding-tips"),c.get("current-user-fullname")),a={isNew:o};if(i&&!e){var r=new d({currentUserFullName:n,isNewUser:o,isAdmin:e,onConfirm:function(){showTips(a)}});u.execute("main-app:showDialog",r)}o&&m.forPlugin(h).markDiscovered("transition-saved-for-later")}g.toInit(function(){f.canShowDashboard()&&l.register(p)})}),require(["confluence-dashboard/modules/onboarding/onboarding-controller"]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:opt-out', location = '/templates/modules/opt-out/opt-out-template.soy' */
// This file was automatically generated from opt-out-template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DashboardTemplates.OptOut.
 */

if (typeof DashboardTemplates == 'undefined') { var DashboardTemplates = {}; }
if (typeof DashboardTemplates.OptOut == 'undefined') { DashboardTemplates.OptOut = {}; }


DashboardTemplates.OptOut.sidebarButtonContent = function(opt_data, opt_ignored) {
  return '<p>' + soy.$$escapeHtml('Didn\x27t like the new dashboard? Help us understand why.') + '</p><div class="field-group"><textarea class="textarea" rows="6" name="feedback" placeholder="' + soy.$$escapeHtml('Feedback') + '"></textarea></div><footer class="tip-footer"><button class="aui-button btn-send-feedback">' + soy.$$escapeHtml('Switch dashboard') + '</button></footer>';
};
if (goog.DEBUG) {
  DashboardTemplates.OptOut.sidebarButtonContent.soyTemplateName = 'DashboardTemplates.OptOut.sidebarButtonContent';
}


DashboardTemplates.OptOut.sidebarButton = function(opt_data, opt_ignored) {
  return '<button class="aui-button aui-button-subtle" data-aui-trigger aria-controls="opt-out-dialog">' + soy.$$escapeHtml('Give me the old dashboard') + '</button><aui-inline-dialog id="opt-out-dialog" class="opt-out-dialog onboarding-inline-dialog"  alignment="top left" responds-to="toggle" aria-hidden="true"><form class="aui">' + DashboardTemplates.OptOut.sidebarButtonContent(null) + '</form></aui-inline-dialog>';
};
if (goog.DEBUG) {
  DashboardTemplates.OptOut.sidebarButton.soyTemplateName = 'DashboardTemplates.OptOut.sidebarButton';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:opt-out', location = '/js/confluence-dashboard/modules/opt-out/opt-out-controller.js' */
define("confluence-dashboard/modules/opt-out/opt-out-action-view",["module","exports","../../utils/event-manager","marionette","configuration","confluence-dashboard/soy-templates","../../utils/dark-features","ajs","jquery","window","../../utils/ensure-component","../../utils/analytics"],function(e,t,n,o,i,a,l,u,s,d,r,c){"use strict";var f=n.EventManager,h=o.ItemView,b=i.DARK_FEATURES,p=A(a).default,D=A(l).default,g=A(u).default,m=A(s).default,v=A(d).default,w=A(r).default,_=A(c).default;function A(e){return e&&e.__esModule?e:{default:e}}var E=b.USER_DISABLED_DASHBOARD_DARK_FEATURE;t.default=h.extend({template:p.OptOut.sidebarButton,className:"sidebar-opt-out",initialize:function(){v.require(["aui/inline-dialog2"])},shouldShow:function(){return!1},addTo:function(e){var t=this;m(e).append(this.render().el);var n=this.$(".opt-out-dialog");w(n[0]).then(function(){n.find(".btn-send-feedback").on("click",t.sendFeedback.bind(t))}),this.listenTo(f,"sidebar:collapse",this.closeInlineDialog.bind(this)),this.listenTo(f,"window:scroll",this.closeInlineDialog.bind(this)),this.inlineDialog=n},closeInlineDialog:function(){var e=this;this.inlineDialog.length&&w(this.inlineDialog[0]).then(function(){e.inlineDialog.open=!1})},sendFeedback:function(e){var t=this;e.preventDefault(),D.remotely.user.enable(E).then(function(){return t.onDisableDashboard()})},onDisableDashboard:function(){var e=this.inlineDialog.find("[name=feedback]").val();_.publish("opt-out.confirm",{message:e}),v.location=g.contextPath()}}),e.exports=t.default}),define("confluence-dashboard/modules/opt-out/opt-out-controller",["./opt-out-action-view","../../utils/module-starter","../../utils/conditions","ajs"],function(e,t,n,o){"use strict";var i=s(e).default,a=s(t).default,l=s(n).default,u=s(o).default;function s(e){return e&&e.__esModule?e:{default:e}}function d(){var e=new i({});e.shouldShow()&&e.addTo(".aui-sidebar-footer")}u.toInit(function(){l.canShowDashboard()&&a.register(d)})}),require(["confluence-dashboard/modules/opt-out/opt-out-controller"]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:buttons-web-items', location = '/js/confluence-dashboard/modules/buttons-web-items/buttons-web-items-controller.js' */
define("confluence-dashboard/modules/buttons-web-items/buttons-web-items-view",["module","exports","backbone","jquery","ajs","aui/templates"],function(t,e,o,n,i,s){"use strict";var u=o.View,r=h(n).default,d=h(i).default,a=h(s).default;function h(t){return t&&t.__esModule?t:{default:t}}e.default=u.extend({el:".aui-buttons",initialize:function(t){var e=this;this.$buttonGroup=t.target,this.buttons=this.getButtons(!!t.hideLastElementsFirst&&t.hideLastElementsFirst),this.totalButtonWidth=0,this.buttons.forEach(function(t){return e.totalButtonWidth+=t.outerWidth}),this.moreMenuWidth=0,this.lastButtonVisibleIndex=this.buttons.length-1,this.handleResize(),r(window).on("resize.aui-responsive-header",d.debounce(function(){e.handleResize()},100))},getAvailableWidth:function(){return this.$buttonGroup.parent().width()},getButtons:function(i){var s=[];return this.$buttonGroup.find(".aui-button").each(function(t,e){var o=r(e),n={$element:o,outerWidth:o.outerWidth(!0)};i?s.unshift(n):s.push(n)}),s},showResponsiveDropdown:function(){void 0===this.$moreMenu?this.$moreMenu=this.createResponsiveDropdownTrigger():this.$moreMenu.appendTo(this.$buttonGroup)},createResponsiveDropdownTrigger:function(){var t=this.$buttonGroup[0].id,e=r(a.dropdown2.trigger({menu:{id:"aui-responsive-button-group-dropdown-content-"+t},content:'<span class="aui-icon aui-icon-small aui-iconfont-more"></span>',extraAttributes:{href:"#"},extraClasses:"aui-button aui-dropdown2-trigger-arrowless",id:"aui-responsive-button-group-dropdown-trigger-"+t}));return e.append(a.dropdown2.contents({id:"aui-responsive-button-group-dropdown-content-"+t,extraClasses:"aui-style-default",content:a.dropdown2.section({content:'<ul id="aui-responsive-button-group-dropdown-list-'+t+'"></ul>'})})),e.appendTo(this.$buttonGroup),this.moreMenuWidth=e.outerWidth(!0),e},handleResize:function(){if(this.buttons.length){var t=this.getAvailableWidth();if(t>this.totalButtonWidth)this.showAllButtons();else{this.showResponsiveDropdown();for(var e=t-this.moreMenuWidth,o=-1;0<=e-this.buttons[o+1].outerWidth;)e-=this.buttons[o+1].outerWidth,o++;o<this.lastButtonVisibleIndex?this.moveToResponsiveDropdown(this.lastButtonVisibleIndex-o):o>this.lastButtonVisibleIndex&&this.moveOutOfResponsiveDropdown(o-this.lastButtonVisibleIndex)}}},moveOutOfResponsiveDropdown:function(t){if(!(t<=0)){this.$buttonGroup[0].id;var e=this.$moreMenu.children(".aui-dropdown2-trigger");e.hasClass("active")&&e.trigger("aui-button-invoke");for(var o=this.lastButtonVisibleIndex+1,n=this.lastButtonVisibleIndex+t,i=o;i<=n;i++){var s=this.buttons[i].$element;s.addClass("aui-button"),s.appendTo(this.$buttonGroup)}this.lastButtonVisibleIndex+=t}},moveToResponsiveDropdown:function(t){if(!(t<=0)){for(var e=this.$buttonGroup[0].id,o=document.querySelector("#aui-responsive-button-group-dropdown-list-"+e),n=this.lastButtonVisibleIndex,i=this.lastButtonVisibleIndex-t+1,s=n;i<=s;s--){var u=this.buttons[s].$element;u.removeClass("aui-button"),o.insertBefore(u[0],o.firstChild)}this.lastButtonVisibleIndex-=t}},hideResponsiveDropdown:function(){void 0!==this.$moreMenu&&this.$moreMenu.detach()},showAllButtons:function(){this.hideResponsiveDropdown(),this.moveOutOfResponsiveDropdown(this.buttons.length-1-this.lastButtonVisibleIndex)}}),t.exports=e.default}),define("confluence-dashboard/modules/buttons-web-items/buttons-web-items-controller",["./buttons-web-items-view","jquery","../../utils/module-starter"],function(t,e,o){"use strict";var n=s(t).default,i=s(e).default;function s(t){return t&&t.__esModule?t:{default:t}}s(o).default.register(function(){new n({target:i(".dashboard-buttons .aui-buttons")})})}),require(["confluence-dashboard/modules/buttons-web-items/buttons-web-items-controller"]);
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