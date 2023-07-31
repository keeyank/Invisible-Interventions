// HTTP Requests
function request() {
    // User id will need to change to the stored user ID for this extension
    fetch('http://127.0.0.1:8000/usage/?user_id=1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
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
}

request();
let interval_id = setInterval(request, 5000);

window.addEventListener("focus", (event) => {
    console.log('Setting interval' + interval_id);
    request();
    interval_id = setInterval(request, 5000);
});

window.addEventListener("blur", (event) => {
    console.log('Clearing interval' + interval_id);
    clearInterval(interval_id);
});

// TODO: Only have the reload occur when already logged in
window.addEventListener("blur", (event) => {
    // TODO: This doesn't work, update it so the cookies are done in the background.js
    // and make it so the await syntax is correct. And you can delete the anonymous function
    // as it is just for debugging. 
    // I actually almostn guarantee this will not work. It is likely that the cookies will
    // have been populated at this point. We need to see what cookie in particular we need
    // to check for. We can log the cookies to the console to see what cookies there will
    // be at that point, and what cookies we need to check for.
    cookies = await chrome.cookies.getAll({ domain: 'tiktok.com' }, function(cookies) {
        console.log(cookies);
    });
    if (cookies.length !== 0) {
        location.reload()
    }
});

// var port = chrome.runtime.connect({name: "clear_cache"});
// setTimeout(function () {port.postMessage({clear_cache:true});}, 3000);

// port.onMessage.addListener(function(msg) {
//     console.log(msg.message);
// });