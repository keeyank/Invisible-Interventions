/**** Helper Functions ****/
function numToStr(number, digits) {
    const numberString = number.toString();
    const padding = digits - numberString.length;
    if (padding > 0) {
        return '0'.repeat(padding) + numberString;
    }
    return numberString;
}
// Code to wait for elements to load
// https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
/*** Intervention Code ***/
// Create the dialog box container for the 2 popups
const dialogBoxContainer = document.createElement('div');
dialogBoxContainer.id = 'dialogBoxContainer';
document.body.appendChild(dialogBoxContainer);
const dialogBoxContainer2 = document.createElement('div');
dialogBoxContainer2.id = 'dialogBoxContainer2';
document.body.appendChild(dialogBoxContainer2);
let initialVisit = true;
let hideTimesup = false;
// Create the timer box container
const timerBoxContainer = document.createElement('div');
timerBoxContainer.id = 'timerBoxContainer';
// Append timer box to the search bar
document.body.appendChild(timerBoxContainer);
// waitForElm('._ab18._ab1b').then((searchBar : HTMLElement) => {
//     searchBar.appendChild(timerBoxContainer);
// });
let timeInMins = 0;
let timeInSecs = 0;
fetch(chrome.runtime.getURL('html/dialog-1.html'))
    .then(response => response.text())
    .then(html => {
    dialogBoxContainer.innerHTML = html;
    // Get the necessary elements
    const dialogBox = document.getElementById('dialogBox');
    const submitBtn = document.getElementById('submitBtn');
    // Function to close the dialog box
    function closeDialog() {
        dialogBox.style.display = 'none';
    }
    submitBtn.addEventListener('click', function () {
        // Obtain the time limit value
        const inputElement = document.getElementById('timeLimit');
        timeInMins = +(inputElement.value !== '' ? inputElement.value : inputElement.placeholder);
        initialVisit = false;
        hideTimesup = false;
        // PLACEHOLDER VALS FOR TESTING PURPOSES - REMOVE THIS LINE LATER
        // timeInMins = 0
        // timeInSecs = 4
        closeDialog();
    });
});
fetch(chrome.runtime.getURL('html/dialog-2.html'))
    .then(response => response.text())
    .then(html => {
    dialogBoxContainer2.innerHTML = html;
    document.getElementById('dialogBox2').style.display == 'none';
    // Get the necessary elements
    const continueBtn = document.getElementById('continueBtn');
    const quitBtn = document.getElementById('quitBtn');
    continueBtn.addEventListener('click', function () {
        // Open the timerDialog
        const timerDialog = document.getElementById('dialogBox');
        const timesupDialog = document.getElementById('dialogBox2');
        timerDialog.style.display = 'block';
        timesupDialog.style.display = 'none';
        hideTimesup = true;
    });
    quitBtn.addEventListener('click', function () {
        // TODO: Close the tab
    });
});
fetch(chrome.runtime.getURL('html/timer.html'))
    .then(response => response.text())
    .then(html => {
    timerBoxContainer.innerHTML = html;
});
// Loop that runs whenever timeInMins and timeInSecs are not 0
setInterval(function () {
    if (timeInMins !== 0 || timeInSecs !== 0) {
        if (timeInSecs === 0) {
            timeInMins--;
            timeInSecs = 59;
            // Update the timer
            let timerMinutes = document.getElementById('minutes');
            let timerSeconds = document.getElementById('seconds');
            timerMinutes.textContent = numToStr(timeInMins, 2);
            timerSeconds.textContent = numToStr(timeInSecs, 2);
        }
        else {
            timeInSecs--;
            // Update the timer
            let timerSeconds = document.getElementById('seconds');
            timerSeconds.textContent = numToStr(timeInSecs, 2);
        }
    }
    else {
        let dialogBox;
        if (initialVisit || hideTimesup) {
            dialogBox = document.getElementById('dialogBox');
        }
        else {
            dialogBox = document.getElementById('dialogBox2');
        }
        if (dialogBox &&
            window.getComputedStyle(dialogBox).getPropertyValue('display') === 'none') {
            dialogBox.style.display = 'block';
        }
    }
}, 1000);
