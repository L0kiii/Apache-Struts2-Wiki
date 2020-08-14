WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-directory:pagination-resources', location = 'templates/pagination.soy' */
// This file was automatically generated from pagination.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Pagination.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Pagination == 'undefined') { Confluence.Templates.Pagination = {}; }


Confluence.Templates.Pagination.item = function(opt_data, opt_ignored) {
  return '<li><a href="' + soy.$$escapeHtml(opt_data.url) + '" data-index="' + soy.$$escapeHtml(opt_data.startIndex) + '">' + soy.$$escapeHtml(opt_data.pageNumber) + '</a></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Pagination.item.soyTemplateName = 'Confluence.Templates.Pagination.item';
}


Confluence.Templates.Pagination.current = function(opt_data, opt_ignored) {
  return '<li class="aui-nav-selected">' + soy.$$escapeHtml(opt_data.pageNumber) + '</li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Pagination.current.soyTemplateName = 'Confluence.Templates.Pagination.current';
}


Confluence.Templates.Pagination.next = function(opt_data, opt_ignored) {
  return '<li class="aui-nav-next"><a href="' + soy.$$escapeHtml(opt_data.url) + '" data-index="' + soy.$$escapeHtml(opt_data.startIndex) + '">' + soy.$$escapeHtml('\u4e0b\u4e00\u4e2a') + '</a></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Pagination.next.soyTemplateName = 'Confluence.Templates.Pagination.next';
}


Confluence.Templates.Pagination.nextDisabled = function(opt_data, opt_ignored) {
  return '<li class="aui-nav-next"><a aria-disabled="true">' + soy.$$escapeHtml('\u4e0b\u4e00\u4e2a') + '</a></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Pagination.nextDisabled.soyTemplateName = 'Confluence.Templates.Pagination.nextDisabled';
}


Confluence.Templates.Pagination.previous = function(opt_data, opt_ignored) {
  return '<li class="aui-nav-previous"><a href="' + soy.$$escapeHtml(opt_data.url) + '" data-index="' + soy.$$escapeHtml(opt_data.startIndex) + '">' + soy.$$escapeHtml('\u4e0a\u4e00\u4e2a') + '</a></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Pagination.previous.soyTemplateName = 'Confluence.Templates.Pagination.previous';
}


Confluence.Templates.Pagination.previousDisabled = function(opt_data, opt_ignored) {
  return '<li class="aui-nav-previous"><a aria-disabled="true">' + soy.$$escapeHtml('\u4e0a\u4e00\u4e2a') + '</a></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Pagination.previousDisabled.soyTemplateName = 'Confluence.Templates.Pagination.previousDisabled';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-directory:pagination-resources', location = 'js/pagination.js' */
define("confluence-space-directory/pagination",["jquery","ajs","confluence/legacy"],function(g,l,j){function q(b,j){b.empty();b.addClass("hidden");g(">:not(.list-header)",j).remove();j.addClass("hidden")}return function(b){var m=g(this);l.bind("update-list."+b.nameSpace,function(s,r){var n={},h=g("ol.aui-nav-pagination",m),k=g(".list-container",m);m.addClass("updating-container");b.preprocess&&"function"===typeof b.preprocess&&b.preprocess(k);b.getParams&&"function"===typeof b.getParams&&(n=b.getParams());
var o=g("<div></div>").addClass("list-loading");g(".loading-throbber").append(o);var p=Raphael.spinner(o[0],10,"#666");p.throbber=o;n.pageSize=b.pageSize?b.pageSize:10;n.startIndex=r.startIndex;g.ajax({type:"GET",dataType:"json",cache:!!b.cache,data:n,url:b.url}).done(function(a){q(h,k);b.insertResults(a,k);if(a.totalSize){for(var c=a.totalSize,e=b.pageSize,f=r.startIndex,d=[],a=Math.floor((f+e-1)/e),i=0;i<a;i++)d[i]=i*e;a=[];f=f+e>=c?-1:f+e;c=Math.floor((c-f+e-1)/e);if(0<f)for(i=0;i<c;i++)a[i]=i*
e+f;if(d.length||a.length){h.removeClass("hidden");e=b.pageUrl;d.length?(c=d[d.length-1],h.append(j.Templates.Pagination.previous({startIndex:c,url:e+"?startIndex="+c}))):h.append(j.Templates.Pagination.previousDisabled());c=1;f=0;for(i=d.length;f<i;f++)h.append(j.Templates.Pagination.item({startIndex:d[f],pageNumber:c,url:e+"?startIndex="+d[f]})),c++;d=c;h.append(j.Templates.Pagination.current({pageNumber:d}));d++;e=d;d=b.pageUrl;c=0;for(f=a.length;c<f;c++)h.append(j.Templates.Pagination.item({startIndex:a[c],
pageNumber:e,url:d+"?startIndex="+a[c]})),e++;a.length?(a=a[0],h.append(j.Templates.Pagination.next({startIndex:a,url:d+"?startIndex="+a}))):h.append(j.Templates.Pagination.nextDisabled());g("a",h).click(function(a){var c=parseInt(g(this).attr("data-index"),10);l.trigger("update-list."+b.nameSpace,{startIndex:c});l.trigger("analytics",{name:"confluence.space-directory.pagination.click",data:{page:c,text:g.trim(g(this).text())}});return a.preventDefault()})}}}).fail(function(a){q(h,k);b.handleError(a,
k)}).always(function(){var a=b.nameSpace;p();p.throbber.remove();k.removeClass("hidden");m.removeClass("updating-container");l.trigger("update-list-complete."+a)})})}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-space-directory/pagination","$.fn.paginate");
}catch(e){WRMCB(e)};