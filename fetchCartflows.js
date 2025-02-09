// fetchCartflows.js

// Function to send the cartflows variable to the background script
function sendCartflowsToBackground(cartflows) {
    chrome.runtime.sendMessage({ message: "dataLoaded", data: cartflows });
}

// Fetch the cartflows variable and send it to the background script
var cartflowsData = window.cartflows;
sendCartflowsToBackground(cartflowsData);
