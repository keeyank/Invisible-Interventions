// Clear cache specifically for Tik Tok
function clearCache() {

    var callback = function () {
        console.log("Browsing data for Tik Tok has been removed");
    };
    
    chrome.browsingData.remove({
        "origins": ["https://www.tiktok.com/"]
    }, {
        "cookies": true
    }, callback);
}

clearCache();

chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name === "clear_cache");
    port.onMessage.addListener(function (msg) {
        if (msg.clear_cache === true) {
            clearCache();
            port.postMessage({message: 'Cache has been cleared for Tik Tok'});
        }
    });
  });