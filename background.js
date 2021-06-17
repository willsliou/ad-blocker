// Background scripts
chrome.webRequest.onBeforeRequest.addListener(
    function(details) { 
        return {
            cancel: true 
            } 
        },
        
        // Filter object to block select url's 
        { 
            urls: ["*://*.zedo.com/*"]
        },
        
        ["blocking"]

)