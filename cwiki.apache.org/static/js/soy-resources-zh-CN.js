WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:soy-resources', location = 'soy/sidebar.soy' */
// This file was automatically generated from sidebar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Sidebar.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Sidebar == 'undefined') { Confluence.Templates.Sidebar = {}; }


Confluence.Templates.Sidebar.headerStyles = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + ((opt_data.sidebarWidth) ? '<style>.ia-fixed-sidebar, .ia-splitter-left {width: ' + soy.$$escapeHtml(opt_data.sidebarWidth) + 'px;}.theme-default .ia-splitter #main {margin-left: ' + soy.$$escapeHtml(opt_data.sidebarWidth) + 'px;}.ia-fixed-sidebar {visibility: hidden;}</style>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.headerStyles.soyTemplateName = 'Confluence.Templates.Sidebar.headerStyles';
}


Confluence.Templates.Sidebar.sidebar = function(opt_data, opt_ignored) {
  return '<div class="acs-side-bar ia-scrollable-section"><div class="acs-side-bar-space-info tipsy-enabled" data-configure-tooltip="' + soy.$$escapeHtml('\u7f16\u8f91\u7a7a\u95f4\u8be6\u60c5') + '"><div class="avatar"><div class="space-logo" data-key="' + soy.$$escapeHtml(opt_data.space.key) + '" data-name="' + soy.$$escapeHtml(opt_data.space.name) + '" data-entity-type="confluence.space"><div class="avatar-img-container"><div class="avatar-img-wrapper"><a href="' + soy.$$escapeHtml(opt_data.space.homeUrl) + '" title="' + soy.$$escapeHtml(opt_data.space.name) + '"><img class="avatar-img" src="' + soy.$$escapeHtml(opt_data.space.logoUrl) + '" alt="' + soy.$$escapeHtml(opt_data.space.name) + '"></a></div></div></div></div><div class="space-information-container"><div class="name"><a href="' + soy.$$escapeHtml(opt_data.space.homeUrl) + '" title="' + soy.$$escapeHtml(opt_data.space.name) + '">' + soy.$$escapeHtml(opt_data.space.name) + '</a></div><div class="flyout-handle icon aui-icon aui-icon-small aui-iconfont-edit"></div>' + ((opt_data.hasFavouriteSpacePermission || opt_data.accessMode == 'READ_ONLY') ? '<div class="favourite-space-icon ' + ((opt_data.accessMode == 'READ_ONLY') ? 'disabled' : '') + '">' + Confluence.Templates.Sidebar.renderFavouriteSpace(opt_data) + '</div>' : '') + '</div></div><div class="acs-side-bar-content"><div class="acs-nav-wrapper"><div class="acs-nav" data-has-create-permission="' + soy.$$escapeHtml(opt_data.hasCreatePermission) + '" data-quick-links-state="' + soy.$$escapeHtml(opt_data.quickLinksState) + '" data-page-tree-state="' + soy.$$escapeHtml(opt_data.pageTreeState) + '" data-nav-type="' + soy.$$escapeHtml(opt_data.navType) + '">' + Confluence.Templates.Sidebar.renderLinks(opt_data) + '</div></div>' + ((opt_data.contextualNav) ? Confluence.Templates.Sidebar.contextualNav(opt_data) : '') + '</div><div class="hidden"><a href="' + soy.$$escapeHtml(opt_data.space.browseSpaceUrl) + '" id="space-pages-link"></a><script type="text/x-template" title="logo-config-content"><h2>' + soy.$$escapeHtml('\u7a7a\u95f4\u8be6\u60c5') + '</h2><div class="personal-space-logo-hint">' + soy.$$filterNoAutoescape(AJS.format('\u60a8\u7684\u4e2a\u4eba\u5934\u50cf\u88ab\u4f5c\u4e3a\u60a8\u7684\u4e2a\u4eba\u7a7a\u95f4\u7684logo\u4f7f\u7528\u3002\x3ca href\x3d\x22{0}\x22 target\x3d\x22_blank\x22\x3e\u66f4\u6539\u60a8\u7684\u4e2a\u4eba\u5934\u50cf\x3c/a\x3e.',"/confluence" + '/users/profile/editmyprofilepicture.action')) + '</div><\/script></div></div>' + Confluence.Templates.Sidebar.renderSpaceToolsSection({advancedLinks: opt_data.advancedLinks, hasConfigurePermission: opt_data.hasConfigurePermission, currentlyViewed: opt_data.collectorToHighlight == 'spacebar-advanced', pageTreeState: opt_data.pageTreeState});
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.sidebar.soyTemplateName = 'Confluence.Templates.Sidebar.sidebar';
}


Confluence.Templates.Sidebar.renderFavouriteSpace = function(opt_data, opt_ignored) {
  return '<button title="' + soy.$$escapeHtml('\u6536\u85cf\u7a7a\u95f4') + '" id="space-favourite-add" class="space-favourite aui-icon aui-icon-small aui-iconfont-unstar"></button><button class="' + ((! opt_data.isFavouriteSpace) ? ' space-favourite-hidden ' : '') + ' space-favourite aui-icon aui-icon-small aui-iconfont-star" id="space-favourite-remove" title="' + soy.$$escapeHtml('\u53d6\u6d88\u6536\u85cf') + '"></button>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.renderFavouriteSpace.soyTemplateName = 'Confluence.Templates.Sidebar.renderFavouriteSpace';
}


Confluence.Templates.Sidebar.renderLinks = function(opt_data, opt_ignored) {
  return '<div class="acs-nav-sections">' + ((opt_data.mainLinks.length) ? Confluence.Templates.Sidebar.renderLinksSection({links: opt_data.mainLinks, sectionClass: 'main-links-section', collectorToHighlight: opt_data.collectorToHighlight}) : '') + ((opt_data.quickLinksState != 'hide') ? '<div class="quick-links-wrapper">' + ((opt_data.quickLinks.length) ? '<h5 class="ia-quick-links-header-title">' + soy.$$escapeHtml('\u7a7a\u95f4\u5feb\u6377\u94fe\u63a5') + '</h5>' + Confluence.Templates.Sidebar.renderLinksSection({links: opt_data.quickLinks, sectionClass: 'quick-links-section tipsy-enabled', collectorToHighlight: null}) : (opt_data.hasConfigurePermission) ? '<h5 class="ia-quick-links-header-title">' + soy.$$escapeHtml('\u7a7a\u95f4\u5feb\u6377\u94fe\u63a5') + '</h5><p class="tip">' + soy.$$filterNoAutoescape(AJS.format('\u5728\u8fd9\u91cc\u60a8\u53ef\u4ee5\u4e3a\u60a8\u7684\u56e2\u961f\u6216\u9879\u76ee\u7684\u91cd\u8981\u5185\u5bb9\u589e\u52a0\u5feb\u6377\u94fe\u63a5\x3ca href\x3d\x22{0}\x22 class\x3d\x22{1}\x22\x3e\u914d\u7f6e\u4fa7\u8fb9\u680f\x3c/a\x3e\u3002','','configure-sidebar')) + '</p>' : '') + '</div>' : '') + ((opt_data.hasSidebarCustomisation) ? Confluence.Templates.Sidebar.renderCustomContent(opt_data) : '') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.renderLinks.soyTemplateName = 'Confluence.Templates.Sidebar.renderLinks';
}


Confluence.Templates.Sidebar.renderCustomContent = function(opt_data, opt_ignored) {
  return '<div class="custom-sidebar"><div class="custom-sidebar-content"><div class="content">' + soy.$$filterNoAutoescape(opt_data.sidebarCustomisation) + '</div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.renderCustomContent.soyTemplateName = 'Confluence.Templates.Sidebar.renderCustomContent';
}


Confluence.Templates.Sidebar.renderLinksSection = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.links.length) {
    output += '<div class="' + soy.$$escapeHtml(opt_data.sectionClass) + ' ' + ((opt_data.highlightSection) ? ' current-section' : '') + '"><ul class="acs-nav-list">';
    var linkList134 = opt_data.links;
    var linkListLen134 = linkList134.length;
    for (var linkIndex134 = 0; linkIndex134 < linkListLen134; linkIndex134++) {
      var linkData134 = linkList134[linkIndex134];
      output += '<li class="acs-nav-item ' + soy.$$escapeHtml(linkData134.styleClass) + ((opt_data.collectorToHighlight && linkData134.collectorKey == opt_data.collectorToHighlight) ? ' current-item" aria-current="true' : '') + '"' + ((linkData134.collectorKey) ? ' data-collector-key="' + soy.$$escapeHtml(linkData134.collectorKey) + '"' : '') + '><a class="acs-nav-item-link tipsy-enabled" href="' + soy.$$escapeHtml(linkData134.url) + '" data-collapsed-tooltip="' + soy.$$escapeHtml(linkData134.tooltip) + '">' + ((linkData134.styleClass == 'pinned_attachment') ? '<span class="aui-icon aui-icon-small aui-iconfont-attachment"></span>' : '<span class="icon"></span>') + '<span class="acs-nav-item-label">' + soy.$$escapeHtml(linkData134.title) + '</span></a></li>';
    }
    output += '</ul></div>';
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.renderLinksSection.soyTemplateName = 'Confluence.Templates.Sidebar.renderLinksSection';
}


Confluence.Templates.Sidebar.contextualNav = function(opt_data, opt_ignored) {
  return '<div class="ia-secondary-container tipsy-enabled" data-tree-type="' + ((opt_data.forBlogs) ? 'blogs' : (opt_data.forSettings) ? 'settings' : soy.$$escapeHtml(opt_data.navType)) + '">' + ((opt_data.pageTreeState != 'hide') ? (opt_data.forBlogs) ? '<div class="ia-secondary-header"><h5 class="ia-secondary-header-title blog"><span class="icon"></span><span class="label">' + soy.$$escapeHtml('\u535a\u6587') + '</span></h5></div><div class="ia-secondary-content">' + Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.contextualNav}) + '</div>' : (opt_data.forSettings) ? '<div class="ia-secondary-header"><h5 class="ia-secondary-header-title settings"><span class="label">' + soy.$$escapeHtml('\u9ad8\u7ea7') + '</span></h5></div><div class="ia-secondary-content">' + Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.contextualNav}) + '</div>' : (opt_data.navType == 'page-tree') ? '<div class="ia-secondary-header"><h5 class="ia-secondary-header-title page-tree"><span class="icon"></span><span class="label">' + soy.$$escapeHtml('\u9875\u9762\u6811\u7ed3\u6784') + '</span></h5></div>' + ((opt_data.pageTreeEmpty && opt_data.hasCreatePermission) ? '<p class="tip">' + soy.$$filterNoAutoescape(AJS.format('\u901a\u8fc7\u589e\u52a0\u4e00\u4e9b\u9875\u9762\u5230\u6b64\u7a7a\u95f4\u4e2d\u6765\u5f00\u59cb\u3002\x3ca href\x3d\x22{0}\x22 class\x3d\x22{1}\x22\x3e\u521b\u5efa\u9875\u9762\x3c/a\x3e\u3002',"/confluence" + '/pages/createpage.action?spaceKey=' + opt_data.space.key,'page-tree-create-child-page-link')) + '</p>' : '<div class="ia-secondary-content">' + soy.$$filterNoAutoescape(opt_data.contextualNav) + '</div>') : Confluence.Templates.Sidebar.Pages.renderPageContextualNav({pageContextualNav: opt_data.contextualNav, hasCreatePermission: opt_data.hasCreatePermission}) : '') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.contextualNav.soyTemplateName = 'Confluence.Templates.Sidebar.contextualNav';
}


Confluence.Templates.Sidebar.pagetreeList = function(opt_data, opt_ignored) {
  var output = '<ul class="' + ((opt_data.isSubtree) ? 'ia-subpagetree' : 'ia-pagetree') + '">';
  var itemList216 = opt_data.pagetree;
  var itemListLen216 = itemList216.length;
  for (var itemIndex216 = 0; itemIndex216 < itemListLen216; itemIndex216++) {
    var itemData216 = itemList216[itemIndex216];
    output += Confluence.Templates.Sidebar.pagetreeItem(itemData216);
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.pagetreeList.soyTemplateName = 'Confluence.Templates.Sidebar.pagetreeList';
}


Confluence.Templates.Sidebar.throbber = function(opt_data, opt_ignored) {
  return '<div class="content-container"><div class="throbber-container"><div class="throbber"><div class="spinner"></div><span>' + soy.$$escapeHtml('\u6b63\u5728\u52a0\u8f7d...') + '</span></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.throbber.soyTemplateName = 'Confluence.Templates.Sidebar.throbber';
}


Confluence.Templates.Sidebar.treeThrobber = function(opt_data, opt_ignored) {
  return '<ul class="ia-subpagetree"><li class="acs-tree-item leaf"><span class="node-title">' + soy.$$escapeHtml('\u6b63\u5728\u52a0\u8f7d...') + '</span></li></ul>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.treeThrobber.soyTemplateName = 'Confluence.Templates.Sidebar.treeThrobber';
}


Confluence.Templates.Sidebar.pagetreeItem = function(opt_data, opt_ignored) {
  return '<li class="acs-tree-item' + ((opt_data.hasChildren) ? (opt_data.children.length) ? ' opened' : ' closed' : ' leaf') + ((opt_data.groupType) ? ' grouping' : '') + ((opt_data.active) ? ' current-item' : '') + '"' + ((opt_data.pageId) ? ' data-page-id="' + soy.$$escapeHtml(opt_data.pageId) + '"' : '') + ((opt_data.groupType) ? ' data-group-type="' + soy.$$escapeHtml(opt_data.groupType) + '" data-group-value="' + soy.$$escapeHtml(opt_data.groupValue) + '"' : '') + ((opt_data.hasChildren) ? ' aria-expanded="' + ((opt_data.children.length) ? 'true' : 'false') + '"' : '') + '>' + ((! opt_data.groupType) ? '<a href="' + soy.$$escapeHtml(opt_data.url) + '">' : '') + '<span class="icon aui-icon aui-icon-small ' + ((opt_data.hasChildren) ? (opt_data.children.length) ? 'aui-iconfont-expanded' : 'aui-iconfont-collapsed' : '') + '"></span><span class="node-title navigation-pseudo-link">' + soy.$$escapeHtml(opt_data.title) + '</span>' + ((! opt_data.groupType) ? '</a>' : '') + ((opt_data.children && opt_data.children.length > 0) ? Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.children, isSubtree: true}) : '') + '</li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.pagetreeItem.soyTemplateName = 'Confluence.Templates.Sidebar.pagetreeItem';
}


Confluence.Templates.Sidebar.renderSpaceToolsSection = function(opt_data, opt_ignored) {
  var output = '<div class="space-tools-section"><div id="space-tools-menu-additional-items" class="hidden">';
  var linkList295 = opt_data.advancedLinks;
  var linkListLen295 = linkList295.length;
  for (var linkIndex295 = 0; linkIndex295 < linkListLen295; linkIndex295++) {
    var linkData295 = linkList295[linkIndex295];
    output += '<div data-label="' + soy.$$escapeHtml(linkData295.title) + '" data-class="' + soy.$$escapeHtml(linkData295.styleClass) + '" data-href="' + soy.$$escapeHtml(linkData295.url) + '">' + soy.$$escapeHtml(linkData295.title) + '</div>';
  }
  output += ((opt_data.hasConfigurePermission) ? '<div data-label="' + soy.$$escapeHtml('\u914d\u7f6e\u4fa7\u8fb9\u680f') + '" data-class="configure-sidebar" data-href="">' + soy.$$escapeHtml('\u914d\u7f6e\u4fa7\u8fb9\u680f') + '</div>' : '') + '</div>' + aui.dropdown2.trigger({id: 'space-tools-menu-trigger', tagName: 'button', content: '<span class="aui-icon aui-icon-small aui-iconfont-configure">' + soy.$$escapeHtml('\u8bbe\u7f6e') + '</span><span class="aui-button-label">' + soy.$$escapeHtml('\u7a7a\u95f4\u7ba1\u7406') + '</span>', extraClasses: 'aui-button aui-button-subtle tipsy-enabled aui-dropdown2-trigger-arrowless ' + ((opt_data.currentlyViewed) ? ' current-item' : ''), menu: {id: 'space-tools-menu'}}) + aui.dropdown2.contents({id: 'space-tools-menu', extraClasses: 'aui-style-default space-tools-dropdown', extraAttributes: {'data-aui-alignment': 'top left'}}) + '<a class="expand-collapse-trigger aui-icon aui-icon-small ' + ((opt_data.pageTreeState == 'hide') ? 'aui-iconfont-chevron-double-right' : 'aui-iconfont-chevron-double-left') + '"></a></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.renderSpaceToolsSection.soyTemplateName = 'Confluence.Templates.Sidebar.renderSpaceToolsSection';
}


Confluence.Templates.Sidebar.spaceToolsMenu = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.isAuiFiveSeven) {
    output += '<div class="space-tools-menu"><div class="aui-dropdown2-section"><ul class="space-tools-navigation">';
    var linkList344 = opt_data.spaceToolLinks;
    var linkListLen344 = linkList344.length;
    for (var linkIndex344 = 0; linkIndex344 < linkListLen344; linkIndex344++) {
      var linkData344 = linkList344[linkIndex344];
      output += '<li><a href="' + soy.$$escapeHtml(linkData344.href) + '" title="' + soy.$$escapeHtml(linkData344.label) + '">' + soy.$$escapeHtml(linkData344.label) + '</a></li>';
    }
    output += '</ul></div>';
    if (opt_data.spaceLinks.length > 0) {
      output += '<div class="aui-dropdown2-section"><ul class="space-operations">';
      var linkList357 = opt_data.spaceLinks;
      var linkListLen357 = linkList357.length;
      for (var linkIndex357 = 0; linkIndex357 < linkListLen357; linkIndex357++) {
        var linkData357 = linkList357[linkIndex357];
        output += '<li><a class="' + soy.$$escapeHtml(linkData357.className) + '" href="' + soy.$$escapeHtml(linkData357.href) + '" title="' + soy.$$escapeHtml(linkData357.label) + '">' + soy.$$escapeHtml(linkData357.label) + '</a></li>';
      }
      output += '</ul></div>';
    }
    output += '</div>';
  } else {
    output += aui.dropdown2.itemGroup({isTruncated: true, items: opt_data.spaceToolLinks, extraClasses: 'space-tools-navigation'}) + ((opt_data.spaceLinks.length > 0) ? aui.dropdown2.itemGroup({isTruncated: true, items: opt_data.spaceLinks, extraClasses: 'space-operations'}) : '');
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.spaceToolsMenu.soyTemplateName = 'Confluence.Templates.Sidebar.spaceToolsMenu';
}


Confluence.Templates.Sidebar.configure = function(opt_data, opt_ignored) {
  return '<div class="acs-nav-sections"><table id="acs-nav-list-main" class="acs-nav-list"></table><div class="acs-nav-list-quick-section' + ((opt_data.quickLinksState == 'hide') ? ' hidden-section' : '') + '"><div class="quick-links-header"><h5>' + soy.$$escapeHtml('\u7a7a\u95f4\u5feb\u6377\u94fe\u63a5') + '</h5><a href="#" class="aui-icon aui-icon-small toggle-link ' + ((opt_data.quickLinksState == 'hide') ? 'aui-iconfont-add-circle' : 'aui-iconfont-plan-disabled') + '" data-tooltip="' + soy.$$escapeHtml('\u663e\u793a/\u9690\u85cf\u7a7a\u95f4\u5feb\u6377\u94fe\u63a5') + '"/></div><table id="acs-nav-list-quick" class="acs-nav-list"></table><p class="tip">' + soy.$$escapeHtml('\u70b9\u51fb\u201c\u589e\u52a0\u94fe\u63a5\u201d\u6765\u5411\u4fa7\u8fb9\u680f\u4e2d\u589e\u52a0\u94fe\u63a5\u3002') + '</p><a class="acs-add-link" href="#"><span class="aui-icon aui-icon-small aui-iconfont-add-small"></span><span class="label">' + soy.$$escapeHtml('\u589e\u52a0\u94fe\u63a5') + '</span></a></div>' + ((opt_data.hasSidebarCustomisation) ? '<p class="tip">' + soy.$$filterNoAutoescape(AJS.format('\u4f60\u53ef\u4ee5\u7ee7\u7eed\u5728\u7a7a\u95f4\u7ba1\u7406\u4e2d\u81ea\u5b9a\u4e49\u4fa7\u8fb9\u680f\u3002 \x3ca href\x3d\x22{0}\x22 class\x3d\x22{1}\x22\x3e\u524d\u5f80\u7a7a\u95f4\u7ba1\u7406\x3c/a\x3e\u3002',opt_data.customContentAdminLink,'custom-sidebar-tip')) + '</p>' + Confluence.Templates.Sidebar.renderCustomContent(opt_data) : '') + '<div class="acs-nav-list-page-tree-section' + ((opt_data.pageTreeState == 'hide') ? ' hidden-section' : '') + '"><div class="page-tree-header"><h5>' + soy.$$escapeHtml('\u5bfc\u822a\u663e\u793a\u9009\u9879') + '</h5><a href="#" class="aui-icon aui-icon-small ' + ((opt_data.pageTreeState == 'hide') ? 'aui-iconfont-add-circle' : 'aui-iconfont-plan-disabled') + '" data-tooltip="' + soy.$$escapeHtml('\u9690\u85cf\uff0f\u663e\u793a \u5bfc\u822a\u663e\u793a\u9009\u9879') + '"/></div><form class="aui page-tree-options"><div class="radio"><input ' + ((opt_data.pageTreeState == 'hide') ? 'disabled ' : '') + ' class="radio acs-nav-type" type="radio" name="nav-type" value="pages" id="nav-type-pages" ' + ((! opt_data.pageTree) ? 'checked' : '') + '><label for="nav-type-pages">' + soy.$$escapeHtml('\u5b50\u9875\u9762') + '</label></div><div class="radio"><input ' + ((opt_data.pageTreeState == 'hide') ? 'disabled ' : '') + ' class="radio acs-nav-type" type="radio" name="nav-type" value="page-tree" id="nav-type-tree" ' + ((opt_data.pageTree) ? 'checked' : '') + '><label for="nav-type-tree">' + soy.$$escapeHtml('\u9875\u9762\u6811\u7ed3\u6784') + '</label></div></form></div><button class="aui-style aui-button acs-done-link">' + soy.$$escapeHtml('\u5b8c\u6210') + '</button></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.configure.soyTemplateName = 'Confluence.Templates.Sidebar.configure';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:soy-resources', location = 'soy/sidebar-pages.soy' */
// This file was automatically generated from sidebar-pages.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Sidebar.Pages.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Sidebar == 'undefined') { Confluence.Templates.Sidebar = {}; }
if (typeof Confluence.Templates.Sidebar.Pages == 'undefined') { Confluence.Templates.Sidebar.Pages = {}; }


Confluence.Templates.Sidebar.Pages.renderPageContextualNav = function(opt_data, opt_ignored) {
  return '<div class="ia-secondary-header"><h5 class="ia-secondary-header-title pages"><span class="label">' + soy.$$escapeHtml('\u5b50\u9875\u9762') + '</span></h5></div><div class="ia-secondary-parent-content">' + Confluence.Templates.Sidebar.Pages.parentPage({parentPage: opt_data.pageContextualNav.parentPage}) + '</div><div class="ia-secondary-current-content">' + Confluence.Templates.Sidebar.Pages.currentPage({currentPage: opt_data.pageContextualNav.currentPage}) + '</div><div class="ia-secondary-content">' + Confluence.Templates.Sidebar.Pages.childPages({children: opt_data.pageContextualNav, createPermission: opt_data.hasCreatePermission}) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.Pages.renderPageContextualNav.soyTemplateName = 'Confluence.Templates.Sidebar.Pages.renderPageContextualNav';
}


Confluence.Templates.Sidebar.Pages.childPages = function(opt_data, opt_ignored) {
  return '<div class="contextual-nav-child-pages">' + ((opt_data.children.initialChildPages.length) ? '<ul class="children">' + Confluence.Templates.Sidebar.Pages.renderChildren({children: opt_data.children.initialChildPages}) + '</ul>' + ((opt_data.children.remainingChildPages.length) ? '<ul class="more-children">' + Confluence.Templates.Sidebar.Pages.renderChildren({children: opt_data.children.remainingChildPages}) + '</ul><a class="more-children-link" href=""><span class="icon"></span><span class="label">' + soy.$$escapeHtml(AJS.format('{0}\u66f4\u591a\u5b50\u9875\u9762',opt_data.children.remainingChildPages.length)) + '</span></a>' : '') : '') + ((opt_data.createPermission && opt_data.children.createLink) ? '<a class="create-child-page-link" href="' + soy.$$escapeHtml(opt_data.children.createLink) + '"><span class="aui-icon aui-icon-small aui-iconfont-add-small"></span><span class="label">' + soy.$$escapeHtml('\u521b\u5efa\u5b50\u9875\u9762') + '</span></a>' : '') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.Pages.childPages.soyTemplateName = 'Confluence.Templates.Sidebar.Pages.childPages';
}


Confluence.Templates.Sidebar.Pages.currentPage = function(opt_data, opt_ignored) {
  return '' + ((opt_data.currentPage) ? '<ul class="ia-secondary-currentPage-title wiki' + ((opt_data.currentPage.active) ? ' current-item' : '') + '"><li><span class="icon"></span><span class="label">' + soy.$$escapeHtml(opt_data.currentPage.title) + '</span></li></ul>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.Pages.currentPage.soyTemplateName = 'Confluence.Templates.Sidebar.Pages.currentPage';
}


Confluence.Templates.Sidebar.Pages.parentPage = function(opt_data, opt_ignored) {
  return '' + ((opt_data.parentPage) ? '<ul class="parent ia-secondary-header-title wiki' + ((opt_data.parentPage.active) ? ' current-item' : '') + '"><li class="parent-item"><a class="parent-item-link" href="' + soy.$$escapeHtml(opt_data.parentPage.url) + '" title="' + soy.$$escapeHtml(opt_data.parentPage.title) + '"><span class="icon"></span><span class="label">' + soy.$$escapeHtml(opt_data.parentPage.title) + '</span></a></li></ul>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.Pages.parentPage.soyTemplateName = 'Confluence.Templates.Sidebar.Pages.parentPage';
}


Confluence.Templates.Sidebar.Pages.renderChildren = function(opt_data, opt_ignored) {
  var output = '';
  var childList65 = opt_data.children;
  var childListLen65 = childList65.length;
  for (var childIndex65 = 0; childIndex65 < childListLen65; childIndex65++) {
    var childData65 = childList65[childIndex65];
    output += '<li class="child-item" data-page-id="' + soy.$$escapeHtml(childData65.pageId) + '"><span class="icon"></span><a href="' + soy.$$escapeHtml(childData65.url) + '" title="' + soy.$$escapeHtml(childData65.title) + '"><span class="label">' + soy.$$escapeHtml(childData65.title) + '</span></a></li>';
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.Pages.renderChildren.soyTemplateName = 'Confluence.Templates.Sidebar.Pages.renderChildren';
}

}catch(e){WRMCB(e)};