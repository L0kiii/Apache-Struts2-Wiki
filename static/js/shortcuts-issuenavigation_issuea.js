AJS.keys = {"shortcuts":[{"moduleKey":"go-to-dashboard-kb-shortcut","keys":[["g","d"]],"context":"global","op":"goTo","param":"/secure/Dashboard.jspa"},{"moduleKey":"navigator.view.issue","keys":[["o"]],"context":"issuenavigation","op":"execute","param":"JIRA.Issues.Api.viewSelectedIssue();"},{"moduleKey":"browse-project-kb-shortcut","keys":[["g","p"]],"context":"global","op":"execute","param":"var elem = document.getElementById(\"browse_link\");\n                if (elem) {\n                    window.location.href = elem.getAttribute(\"href\");\n                }"},{"moduleKey":"next.issue","keys":[["j"]],"context":"issuenavigation","op":"execute","param":"JIRA.Issues.Api.nextIssue();"},{"moduleKey":"issue-navigator-kb-shortcut","keys":[["g","i"]],"context":"global","op":"execute","param":"var elem = document.getElementById(\"find_link\");\n                if (elem) {\n                    window.location.href = elem.getAttribute(\"href\");\n                }"},{"moduleKey":"prev.issue","keys":[["k"]],"context":"issuenavigation","op":"execute","param":"JIRA.Issues.Api.prevIssue();"},{"moduleKey":"admin.quicksearch.dialog.shortcut","keys":[["g","g"]],"context":"global","op":"execute","param":"if (AJS.Meta.get('admin-quicksearch-show')) {\n              JIRA.Shifter.show('admin');\n            }"},{"moduleKey":"fullscreen.issue","keys":[["z"]],"context":"issuenavigation","op":"execute","param":"JIRA.Issues.Api.toggleFullscreenIssue();"},{"moduleKey":"quicksearch","keys":[["/"]],"context":"global","op":"moveToAndFocus","param":"#quickSearchInput, #admin-quick-nav-field"},{"moduleKey":"toggle.filter.panel","keys":[["["]],"context":"issuenavigation","op":"execute","param":"JIRA.Issues.Api.toggleFilterPanel();"},{"moduleKey":"create.issue","keys":[["c"]],"context":"global","op":"moveToAndClick","param":"#header .create-issue"},{"moduleKey":"shifter","keys":[["."]],"context":"global","op":"execute","param":"require(['jira/shifter'], function(Shifter) { Shifter.show(); });"},{"moduleKey":"move.to.next.action.item","keys":[["n"]],"context":"issuenavigation","op":"moveToNextItem","param":".issue-data-block:visible"},{"moduleKey":"move.to.prevaction.item","keys":[["p"]],"context":"issuenavigation","op":"moveToPrevItem","param":".issue-data-block:visible"},{"moduleKey":"navigator.focus.search","keys":[["f"]],"context":"issuenavigation","op":"execute","param":"JIRA.Issues.Api.focusSearch();"},{"moduleKey":"navigate.up","keys":[["u"]],"context":"issuenavigation","op":"execute","param":"JIRA.Issues.Api.returnToSearch();"},{"moduleKey":"switch.search.layouts","keys":[["t"]],"context":"issuenavigation","op":"execute","param":"if (JIRA.Issues.Api.isQueryValid() && !JIRA.Issues.Api.isFullScreenIssueVisible()) {\n                    JIRA.Issues.Api.switchLayouts();\n                }"},{"moduleKey":"splitview.orderby","keys":[["y"]],"context":"issuenavigation","op":"click","param":".split-view .order-options"},{"moduleKey":"splitview.focuslist","keys":[["←"]],"context":"issuenavigation","op":"execute","param":""},{"moduleKey":"splitview.focuseditor","keys":[["→"]],"context":"issuenavigation","op":"execute","param":""},{"moduleKey":"help","keys":[["?"]],"context":"global","op":"click","param":"#keyshortscuthelp"}]};