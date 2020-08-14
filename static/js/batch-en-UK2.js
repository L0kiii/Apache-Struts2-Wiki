;
/* module-key = 'jira.webresources:user-message-flags', location = '/includes/jira/admin/admin-flags.js' */
require(["jira/util/logger","wrm/data","jquery","jira/flag"],function(a,s,e,i){"use strict";e(function(){var c=s.claim("jira.core:user-message-flags-data.adminLockout")||{};if(c.noprojects){var n=JIRA.Templates.Flags.Admin,r=n.adminIssueAccessFlagTitle({}),l=n.adminIssueAccessFlagBody({manageAccessUrl:c.manageAccessUrl}),g=i.showWarningMsg(r,l,{dismissalKey:c.flagId});e(g).find("a").on("click",function(){g.dismiss()})}a.trace("admin.flags.done")})});;
;
/* module-key = 'jira.webresources:user-message-flags', location = '/includes/jira/admin/admin-flags.soy' */
// This file was automatically generated from admin-flags.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Templates.Flags.Admin.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Templates == 'undefined') { JIRA.Templates = {}; }
if (typeof JIRA.Templates.Flags == 'undefined') { JIRA.Templates.Flags = {}; }
if (typeof JIRA.Templates.Flags.Admin == 'undefined') { JIRA.Templates.Flags.Admin = {}; }


JIRA.Templates.Flags.Admin.adminIssueAccessFlagTitle = function(opt_data, opt_ignored) {
  return '' + soy.$$escapeHtml('Your current restrictions');
};
if (goog.DEBUG) {
  JIRA.Templates.Flags.Admin.adminIssueAccessFlagTitle.soyTemplateName = 'JIRA.Templates.Flags.Admin.adminIssueAccessFlagTitle';
}


JIRA.Templates.Flags.Admin.adminIssueAccessFlagBody = function(opt_data, opt_ignored) {
  var output = '';
  var start__soy5 = '<a href="' + soy.$$escapeHtml("/jira") + '/' + soy.$$escapeHtml(opt_data.manageAccessUrl) + '">';
  var end__soy11 = '</a>';
  output += '<p id="admin-noprojects">' + soy.$$escapeHtml('You\x27ve logged in as an administrator, but you don\x27t have access to any Jira applications. You can perform administration tasks, but you won\x27t be able to view or edit issues.') + '</p><p><a href="' + soy.$$escapeHtml("/jira") + '/' + soy.$$escapeHtml(opt_data.manageAccessUrl) + '">' + soy.$$escapeHtml('Manage your application access.') + '</a></p>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Templates.Flags.Admin.adminIssueAccessFlagBody.soyTemplateName = 'JIRA.Templates.Flags.Admin.adminIssueAccessFlagBody';
}
;
;
/* module-key = 'com.codebarrel.addons.automation:manual-trigger-client-resources', location = '/page/viewissue/initManualTriggers.js' */
define("codebarrel/init-manual-triggers",["jquery","jira/flag","jira/util/events","jira/util/events/types","jira/issue","jira/util/browser",],function($,flag,Events,EventTypes,Issue,Browser){const isIssuePage=function(){return JIRA&&JIRA.Issue&&JIRA.Issue.getStalker&&JIRA.Issue.getStalker().length>0};const showSpinner=function(){const spinContainer=$('<div class="toolbar-group" style="width:16px;height:16px;padding-top: 4px;"/>');const issueOperations=$("#stalker .ops-menus .toolbar-split-left");if(issueOperations.length>0){issueOperations.append(spinContainer);spinContainer.spin()}return spinContainer};const executeManualTrigger=function(url){return $.ajax({url:url,type:"POST",contentType:"application/json",dataType:"json",success:function(){flag.showSuccessMsg("Automation","Automation rule was successfully executed.")},error:function(){flag.showErrorMsg("Automation","Error executing automation rule. Please reload the issue and try again.")}})};$(document).on("click",".cb-manual-rule-trigger",function(e){e.preventDefault();const spinner=showSpinner();const url=$(this).attr("href");const urlWithoutReturnUrl=url.split("&returnUrl=")[0];executeManualTrigger(urlWithoutReturnUrl).always(function(){spinner.spinStop()}).done(function(){if(isIssuePage()){Events.trigger(EventTypes.REFRESH_ISSUE_PAGE,[Issue.getIssueId()])}else{Browser.reloadViaWindowLocation()}})})});require("codebarrel/init-manual-triggers");;