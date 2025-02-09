// background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "dataLoaded") {
      chrome.runtime.sendMessage({ message: "displayData", data: request.data });
    }
});

  