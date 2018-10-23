if ($("#datacomb-container").length == 0) {
  initialize();
}

function initialize () {
 var STYLE = 
 `
   #datacomb-container {
     font-family: Roboto;
     width: 450px;
     height: 100vh;
     position: absolute;
     background-color: white;
     position: fixed;
     top: 0;
     right: 0;
     border: none;
     background-color: #f7f7f7;
     overflow: hidden;
     z-index: 100000;
     border-left: 1px lightgrey solid;
   }
 `;

  var div = $("<div />", {
    html: '&shy;<style>' + STYLE + '</style>'
  }).appendTo("body"); 

  var src = "chrome-extension://" + chrome.runtime.id + "/client/index.html";
  $("body").append("<iframe id='datacomb-container' src='" + src + "'></iframe>");
}