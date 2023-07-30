console.log(chrome.runtime.getURL("pages/js/index.js"));

window.addEventListener("message", (event) => {
  console.log(event);
  let data = JSON.parse(event.data);

  console.log(data);

  if (data.userId) {
    chrome.storage.local.set({ userId: data.userId }).then(() => {
      console.log("Value is set");
    });
  }
});
