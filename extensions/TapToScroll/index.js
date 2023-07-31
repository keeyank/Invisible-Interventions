// chrome.storage.local.clear().then(() => {
//   console.log("Value is set");
// });

chrome.storage.local.get().then((result) => {
  console.log("Stored: " + JSON.stringify(result));

  if (!result.user_id) {
    chrome.runtime.sendMessage({ action: "survey" }, function (response) {
      console.log("Response: ", response);
    });

    const reloadButton = document.createElement("div");
    reloadButton.style.cssText =
      "width:100vw; height: 100vh;background:rgb(250, 250, 250); color: black; display: flex;justify-content: center; align-items: center;text-align: center; border-right: solid 0.5px gray;";
    reloadButton.innerHTML += "Click me after the survey to access the app!";
    reloadButton.onclick = () => {
      window.location.reload();
    };

    document.body.innerHTML = "";
    document.body.insertBefore(reloadButton, document.body.firstChild);
  } else {
    //
    // MAIN
    //

    // Load script.js
    var s = document.createElement("script");
    s.src = chrome.runtime.getURL("script.js");
    s.onload = function () {
      this.remove();
    };
    // see also "Dynamic values in the injected code" section in this answer
    (document.head || document.documentElement).appendChild(s);

    // Watch URL and reload
    let previousUrl = "";
    const observer = new MutationObserver(function (mutations) {
      if (location.href !== previousUrl) {
        if (previousUrl) {
          console.log(`URL changed to ${location.href}`);
          window.location.reload();
        }

        previousUrl = location.href;
      }
    });

    observer.observe(document, { subtree: true, childList: true });
  }
});
