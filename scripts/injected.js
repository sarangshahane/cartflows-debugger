(function waitForCartflows() {
    if (window.cartflows) {
        window.postMessage({ action: "cartflows_data", data: window.cartflows }, "*");
    } else {
        setTimeout(waitForCartflows, 500);
    }
})();
