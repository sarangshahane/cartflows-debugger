chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "inject_script") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (tabs.length === 0) {
              sendResponse({ success: false, error: "No active tab found" });
              return;
          }
          chrome.scripting.executeScript({
              target: { tabId: tabs[0].id },
              files: ["scripts/content.js"]
          }, () => {
              if (chrome.runtime.lastError) {
                  sendResponse({ success: false, error: chrome.runtime.lastError.message });
              } else {
                  sendResponse({ success: true });
              }
          });
      });

      return true;
  } 
  
  else if (request.action === "cartflows_data") {
      chrome.storage.local.set({ cartflows: request.data }, () => {
          sendResponse({ success: true });
      });

      return true;
  }
});
