WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-directory:space-directory-templates', location = 'templates/spacedirectory.soy' */
// This file was automatically generated from spacedirectory.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.SpaceDirectory.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.SpaceDirectory == 'undefined') { Confluence.Templates.SpaceDirectory = {}; }


Confluence.Templates.SpaceDirectory.spaceListItem = function(opt_data, opt_ignored) {
  var output = '';
  var isLoggedIn__soy3 = opt_data.remoteUser != '';
  output += '<tr class="space-list-item" data-spacekey="' + soy.$$escapeHtml(opt_data.spaceKey) + '"><td class="entity-attribute space-logo entity-logo entity-icon"><a href="' + soy.$$escapeHtml(opt_data.spaceUrl) + '"><img class="space logo" src="' + soy.$$escapeHtml(opt_data.logoUrl) + '" alt="' + soy.$$escapeHtml(AJS.format('{0} Logo',opt_data.spaceName)) + '"/></a></td><td class="entity-attribute space-name"><a title="' + soy.$$escapeHtml(opt_data.spaceName) + '" href="' + soy.$$escapeHtml(opt_data.spaceUrl) + '">' + soy.$$escapeHtml(opt_data.truncatedSpaceName) + '</a></td><td class="entity-attribute space-desc"><span>' + soy.$$filterNoAutoescape(opt_data.spaceDescHtml) + '</span></td><td class="entity-attribute space-labels"></td><td class="entity-attribute entity-icon entity-info-icon right" data-entity-id="' + soy.$$escapeHtml(opt_data.spaceKey) + '" data-entity-type="space"><a class="aui-icon aui-icon-small aui-iconfont-info" title="' + soy.$$escapeHtml('\u7a7a\u95f4\u7ec6\u8282') + '" href="' + soy.$$escapeHtml("/confluence") + '/spaces/viewspacesummary.action?key=' + soy.$$escapeHtml(opt_data.spaceKey) + '">' + soy.$$escapeHtml('\u7a7a\u95f4\u7ec6\u8282') + '</a></td>' + ((isLoggedIn__soy3) ? '<td class="entity-attribute entity-icon entity-favourites space-favourites ' + ((opt_data.accessMode == 'READ_ONLY') ? 'disabled' : '') + '" data-entity-id="' + soy.$$escapeHtml(opt_data.spaceKey) + '" data-entity-type="space" data-entity-scope="space-directory"><a class="aui-icon aui-icon-small aui-iconfont-star-filled hidden" title="' + soy.$$escapeHtml('\u4ece\u6536\u85cf\u5939\u4e2d\u5220\u9664\u6b64\u7a7a\u95f4') + '" href="#">' + soy.$$escapeHtml(AJS.format('\u4ece\u60a8\u7684\u6536\u85cf\u5939\u4e2d\u5220\u9664\u201c{0}\u201d\u7a7a\u95f4',opt_data.spaceName)) + '</a><a class="aui-icon aui-icon-small aui-iconfont-new-star hidden" title="' + soy.$$escapeHtml('\u5c06\u6b64\u7a7a\u95f4\u52a0\u5165\u6536\u85cf\u5939') + '" href="#">' + soy.$$escapeHtml(AJS.format('\u65b0\u589e\u201c{0}\u201d\u5230\u60a8\u7684\u6536\u85cf\u5939',opt_data.spaceName)) + '</a><span class="icon icon-wait hidden">' + soy.$$escapeHtml('\u6b63\u5728\u8bfb\u53d6') + '</span></td>' : '') + '</tr>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.SpaceDirectory.spaceListItem.soyTemplateName = 'Confluence.Templates.SpaceDirectory.spaceListItem';
}


Confluence.Templates.SpaceDirectory.spaceLabel = function(opt_data, opt_ignored) {
  return '' + aui.labels.label({text: opt_data.spaceLabel, extraClasses: 'space-label', url: '#space-search-result'});
};
if (goog.DEBUG) {
  Confluence.Templates.SpaceDirectory.spaceLabel.soyTemplateName = 'Confluence.Templates.SpaceDirectory.spaceLabel';
}


Confluence.Templates.SpaceDirectory.spaceLabelEllipsis = function(opt_data, opt_ignored) {
  return '<span>&hellip;</span>';
};
if (goog.DEBUG) {
  Confluence.Templates.SpaceDirectory.spaceLabelEllipsis.soyTemplateName = 'Confluence.Templates.SpaceDirectory.spaceLabelEllipsis';
}

}catch(e){WRMCB(e)};