// chrome.webRequest.onBeforeRequest.addListener (
// 	redirectUrl, // Callback function
//     { urls: ["*://*.instagram.com/"] }, // Match pattern for URLs to redirect
//     ["blocking"] // Ensures redirectUrl is handled synchronously so we can modify the URL
// );

// // Callback function to redirect the URL
// function redirectUrl(details) {
//     console.log("Redirecting URL: " + details.url);
// 	var modifiedUrl = details.url.append("/direct/inbox/");
// 	return { redirectUrl: modifiedUrl }; // BlockingResponse object
// }

