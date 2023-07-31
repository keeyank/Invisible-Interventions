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

var port = chrome.runtime.connect({name: "check_cookies"});

window.addEventListener("focus", (event) => {
    console.log('Setting interval' + interval_id);
    request();
    interval_id = setInterval(request, 5000);
});

window.addEventListener("blur", (event) => {
    console.log('Clearing interval' + interval_id);
    clearInterval(interval_id);
});

// On blur, if user is logged in, reload
// Requires obtaining cookies for Tik Tok from service worker
// We need this check to fix a bug where users cannot log in via 3rd party
window.addEventListener("blur", (event) => {
    // Check cookies using service worker (background.js)
    port.postMessage({check_cookies: true});
});

port.onMessage.addListener(function(msg) {
    cookies = msg.message;
    
    // Check if the cookies involve login info (username + password)
    // If so, reload on blur. Otherwise, do not reload on blur,
    // since the login info is not saved so there is no need
    
    // TODO: Maybe to make this safer, we should do more checks here 
    // (not sure if this will work universally)
    // If we have some or statements involving other cookie names, we
    // will probably cover most cases. Check the oneNote to see all cookies
    // that exist when user logged in vs not logged in. 
    if (cookies.find(cookie => cookie.name == 'uid_tt')) {
        location.reload();
    }
});