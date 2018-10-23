chrome.runtime.onInstalled.addListener(function() {

    chrome.runtime.onMessage.addListener(
        function(message, callback) {
          if (message == "runContentScript"){
            chrome.tabs.executeScript({
              file: 'client/src/jquery-3.3.1.js'
            });
            chrome.tabs.executeScript({
              file: 'client/load.js'
            });
          }

          if (message == "closeApplication") {
            chrome.tabs.executeScript({
              file: 'client/unload.js'
            })
          }
       });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { },
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });
  });