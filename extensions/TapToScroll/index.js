var s = document.createElement("script");
s.src = chrome.runtime.getURL("script.js");
s.onload = function () {
  this.remove();
};
// see also "Dynamic values in the injected code" section in this answer
(document.head || document.documentElement).appendChild(s);

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
