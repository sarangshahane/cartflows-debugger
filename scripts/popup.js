document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get("cartflows", ({ cartflows }) => {
        cartflows ? displayCartflowsData(cartflows) : requestCartflowsData();
    });

    chrome.runtime.onMessage.addListener((request) => {
        if (request.action === "displayData") {
            chrome.storage.local.set({ cartflows: request.data });
            displayCartflowsData(request.data);
        }
    });
});

function requestCartflowsData() {
    chrome.runtime.sendMessage({ action: "inject_script" });
}

function displayCartflowsData(data) {
    document.getElementById("page-title").textContent = "CartFlows Data Extracted!";
    document.getElementById("fname").textContent = "Sarang";
    document.getElementById("sname").textContent = "Shahane";
    document.getElementById("cartflows-data").textContent = JSON.stringify(data, null, 2);
}
