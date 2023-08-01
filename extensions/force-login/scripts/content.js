// HTTP Requests
function request() {
    // User id will need to change to the stored user ID for this extension
    fetch('https://interventions.sfu.jryng.com/tracking/usage', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"user_id": 1})
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
    console.log('Setting interval');
    request();
    interval_id = setInterval(request, 5000);
});

window.addEventListener("blur", (event) => {
    console.log('Clearing interval');
    clearInterval(interval_id);
});

// On blur, if user is logged in, reload
window.addEventListener("blur", (event) => {
    if (!document.getElementById('header-login-button')) {
        location.reload();
    }
});
