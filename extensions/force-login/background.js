// Clear cache specifically for Tik Tok
let minutesPerDataClear = 1;

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
setInterval(clearCache, minutesPerDataClear * 60 * 1000)

chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name === "check_cookies");
    port.onMessage.addListener(async function (msg) {
        if (msg.check_cookies === true) {
            cookies = await chrome.cookies.getAll({ domain: 'tiktok.com' });
            console.log(cookies)
            port.postMessage({message: cookies});
        }
    });
  });