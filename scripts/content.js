function injectScript() {
    const script = document.createElement("script");
    script.src = chrome.runtime.getURL("scripts/injected.js");
    script.onload = () => script.remove();
    (document.head || document.documentElement).appendChild(script);
}

window.addEventListener("message", (event) => {
    if (event.source !== window || event.data.action !== "cartflows_data") return;

    chrome.storage.local.set({ cartflows: event.data.data }, () => {
        chrome.runtime.sendMessage({ action: "cartflows_data", data: event.data.data }, (response) => {});
    });
});

injectScript();
