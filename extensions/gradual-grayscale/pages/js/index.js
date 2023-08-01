console.log(chrome.runtime.getURL("pages/js/index.js"));
window.addEventListener("message", (event) => {
  console.log(event);
  let data = JSON.parse(event.data);

  console.log(data);

  if (data.user_id) {
    chrome.storage.local.set({ user_id: data.user_id }).then(() => {
      console.log("Value is set");
      window.close();
    });
  }
});
