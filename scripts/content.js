// content.js
// chrome.runtime.sendMessage({ message: "dataLoaded", data: document.title });


function collectData() {
    // Collect data from the web page
    
    var data = {
        documentTitle: document.title,
        name: "Sarang",
        surname: "Shahane",
        cartflows: window.cartflows
    };

    console.log( data );
    // Send data to background.js
    chrome.runtime.sendMessage({ message: "dataLoaded", data: data });
}
  
// Check if the document is already loaded, and if not, wait for it to be loaded
if (document.readyState === "complete" || document.readyState === "interactive") {
    // Document is already loaded, collect data
    collectData();
} else {
    // Wait for the window to be fully loaded
    window.onload = function () {
        // Document is now loaded, collect data
        collectData();
    };
}