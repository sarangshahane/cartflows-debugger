// popup.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "displayData") {
        var requestData = request.data;
        document.getElementById("page-title").textContent = requestData.documentTitle;
        document.getElementById("fname").textContent = requestData.name;
        document.getElementById("sname").textContent = requestData.surname;
        document.getElementById("document").textContent = requestData.document;

        // Display cartflows data
        var cartflowsData = JSON.stringify(requestData.cartflows, null, 2); // Convert to string for display
        document.getElementById("cartflows-data").textContent = cartflowsData; // Assuming you have an element with id "cartflows"
    }
});
  