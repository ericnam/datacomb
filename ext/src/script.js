$(document).ready(function() {
  const reader = new FileReader();

  $("#btndoc").on("click", function() {
    chrome.runtime.sendMessage("runContentScript");
  });

  $("#newjob").on("click", function () {
    chrome.runtime.sendMessage("runContentScript");
  });

  function ScrapeDocument () {    
    chrome.tabs.getSelected(function (tab) {
      chrome.pageCapture.saveAsMHTML({ tabId: tab.id}, function(mhtmlData) {
        reader.onload = function () {alert(reader.result);}
        reader.readAsText(mhtmlData);
      })
    });
  }
});

function flipview() {
  if ($("#main").is(":hidden") == true) {
    $("#main").show();
    $("#edit").hide();
  } else {
    $("#main").hide();
    $("#edit").show();
  }
}

