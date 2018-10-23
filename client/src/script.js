$(document).ready(function() {
  $("#navbar-close").on('click', function() {
    chrome.runtime.sendMessage("closeApplication");
  });
});

