// HTTP Requests
fetch('http://127.0.0.1:8000/usage/?user_id=1', {
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain'
  },
  body: JSON.stringify({})
})
  .then(response => response.json())
  .then(data => {
    // Handle the response data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });

var port = chrome.runtime.connect({name: "clear_cache"});
// This isn't great - if the browsing data is removed while they are attempting to
// log in, it will not work properly. 

// Better solution: Check to see if cache is already clear, if so, clear.
// If not, do not clear. This can probably be done in the service worker!
// Then, I think this should work.
setTimeout(function () {port.postMessage({clear_cache:true});}, 10000);

port.onMessage.addListener(function(msg) {
    console.log(msg.message);
});