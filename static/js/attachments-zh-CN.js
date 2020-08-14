WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:attachments', location = '/includes/soy/attachments.soy' */
// This file was automatically generated from attachments.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Attachments.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Attachments == 'undefined') { Confluence.Templates.Attachments = {}; }


Confluence.Templates.Attachments.removalConfirmationTitle = function(opt_data, opt_ignored) {
  return '' + soy.$$escapeHtml('\u9644\u4ef6\u5220\u9664\u786e\u8ba4');
};
if (goog.DEBUG) {
  Confluence.Templates.Attachments.removalConfirmationTitle.soyTemplateName = 'Confluence.Templates.Attachments.removalConfirmationTitle';
}


Confluence.Templates.Attachments.removalConfirmationBody = function(opt_data, opt_ignored) {
  return '<div>' + soy.$$escapeHtml(AJS.format('\u786e\u5b9a\u8981\u5c06\u9644\u4ef6\x22{0}\x22\u6254\u8fdb\u5783\u573e\u7bb1\uff1f\u53ea\u8981\u7a7a\u95f4\u7ba1\u7406\u5458\u624d\u80fd\u6062\u590d\u8fd9\u4e2a\u9644\u4ef6\u3002',opt_data.filename)) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Attachments.removalConfirmationBody.soyTemplateName = 'Confluence.Templates.Attachments.removalConfirmationBody';
}


Confluence.Templates.Attachments.versionRemovalConfirmationTitle = function(opt_data, opt_ignored) {
  return '' + soy.$$escapeHtml('\u9644\u4ef6\u7248\u672c\u5220\u9664\u786e\u8ba4');
};
if (goog.DEBUG) {
  Confluence.Templates.Attachments.versionRemovalConfirmationTitle.soyTemplateName = 'Confluence.Templates.Attachments.versionRemovalConfirmationTitle';
}


Confluence.Templates.Attachments.versionRemovalConfirmationBody = function(opt_data, opt_ignored) {
  return '<div>' + soy.$$escapeHtml(AJS.format('\u60a8\u786e\u5b9a\u8981\u5220\u9664\u9644\u4ef6\u6587\u4ef6{1}\u7684\u7248\u672c{0}\u5417\uff1f',opt_data.version,opt_data.filename)) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Attachments.versionRemovalConfirmationBody.soyTemplateName = 'Confluence.Templates.Attachments.versionRemovalConfirmationBody';
}


Confluence.Templates.Attachments.removalErrorTitle = function(opt_data, opt_ignored) {
  return '' + soy.$$escapeHtml('\u9644\u4ef6\u5220\u9664\u9519\u8bef');
};
if (goog.DEBUG) {
  Confluence.Templates.Attachments.removalErrorTitle.soyTemplateName = 'Confluence.Templates.Attachments.removalErrorTitle';
}


Confluence.Templates.Attachments.removalErrorBody = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<div class="aui-message error">';
  if (! opt_data.messages) {
    output += soy.$$escapeHtml('\u5c1d\u8bd5\u5220\u9664\u9644\u4ef6\u65f6\u53d1\u751f\u9519\u8bef\u3002\u8bf7\u68c0\u67e5\u5f53\u524d\u72b6\u6001\u3002\u6587\u4ef6\u53ef\u80fd\u5df2\u7ecf\u88ab\u79fb\u9664\u3002');
  } else {
    if (opt_data.messages.length == 1) {
      var messageList24 = opt_data.messages;
      var messageListLen24 = messageList24.length;
      for (var messageIndex24 = 0; messageIndex24 < messageListLen24; messageIndex24++) {
        var messageData24 = messageList24[messageIndex24];
        output += soy.$$escapeHtml(messageData24);
      }
    } else {
      output += '<ul>';
      var messageList29 = opt_data.messages;
      var messageListLen29 = messageList29.length;
      for (var messageIndex29 = 0; messageIndex29 < messageListLen29; messageIndex29++) {
        var messageData29 = messageList29[messageIndex29];
        output += '<li>' + soy.$$escapeHtml(messageData29) + '</li>';
      }
      output += '</ul>';
    }
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Attachments.removalErrorBody.soyTemplateName = 'Confluence.Templates.Attachments.removalErrorBody';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:attachments', location = '/includes/js/attachments.js' */
define("confluence/attachments",["ajs","confluence/templates","confluence/api/ajax","confluence/api/constants","confluence/message-controller"],function(d,c,l,j,m){function k(b){clearTimeout(h);a&&(d.log("Preventing submit due to recent form submission."),b.preventDefault());a=!0;h=setTimeout(function(){a=false},2E3)}var i={showOlderVersions:function(b){b(".attachment-history a").click(function(d){var e=b(this).parents("table.attachments"),c=b(this).parents("tr:first")[0].id.substr(11),e=b(".history-"+
c,e);b(this).toggleClass("icon-section-opened");b(this).toggleClass("icon-section-closed");e.toggleClass("hidden");d.stopPropagation();return!1})}},a=!1,h;return{component:i,initialiser:function(b){function a(d,c){return b(d).parents("["+c+"]").attr(c)}function e(c,a,e){var f=d.ConfluenceDialog({width:600,height:200,id:"attachment-removal-confirm-dialog"});f.addHeader(a);f.addPanel("",e);f.addSubmit("\u786e\u5b9a",function(){var a;a={};l.ajax({type:"POST",url:c,data:a,success:function(){location.reload(!0)},
error:function(a){var c=[];c.push(m.parseError(a));a.responseText&&(a=b.parseJSON(a.responseText),a.actionErrors&&(c=a.actionErrors));a=d.ConfluenceDialog({width:600,height:200,id:"attachment-removal-error-dialog"});a.addHeader(g.removalErrorTitle());a.addPanel("",g.removalErrorBody({messages:c}));a.addButton("\u53d6\u6d88",function(){location.reload(true)});a.show();a.updateHeight();f.remove()}})});f.addCancel("\u53d6\u6d88",function(){f.remove()});f.show()}b("#upload-attachments").on("submit",
k);var h=b("#more-attachments-link");h.click(function(a){b(".more-attachments").removeClass("hidden");h.addClass("hidden");a.stopPropagation();return!1});i.showOlderVersions(b);var g=c.Attachments;b(".removeAttachmentLink").click(function(){i.showRemoveAttachmentConfirmDialog(this);return!1});b(".removeAttachmentLinkVersion").click(function(){e(j.CONTEXT_PATH+"/json/removeattachmentversion.action"+this.search,g.versionRemovalConfirmationTitle(),g.versionRemovalConfirmationBody({filename:a(this,"data-attachment-filename"),
version:a(this,"data-attachment-version")}));return!1});i.showRemoveAttachmentConfirmDialog=function(b){var c=j.CONTEXT_PATH+"/json/removeattachment.action"+b.search,d=g.removalConfirmationTitle(),b=g.removalConfirmationBody({filename:a(b,"data-attachment-filename")});e(c,d,b)}},submitHandler:k}});require("confluence/module-exporter").safeRequire("confluence/attachments",function(d){var c=require("ajs");c.Attachments=d.component;c.toInit(d.initialiser)});
}catch(e){WRMCB(e)};