// Create the dialog box container
const dialogBoxContainer = document.createElement('div');
dialogBoxContainer.id = 'dialogBoxContainer';
document.body.appendChild(dialogBoxContainer);

// Create the timer box container
const timerBoxContainer = document.createElement('div');
timerBoxContainer.id = 'timerBoxContainer';

// Append it to the search bar
const searchBar = document.querySelector('._ab18._ab1b');
searchBar.appendChild(timerBoxContainer);

let timeInMins = 0;
// Load the dialog-1.html file into the dialog box container
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

        submitBtn.addEventListener('click', function() {
            // Obtain the time limit value
            const inputElement = <HTMLInputElement>document.getElementById('timeLimit');
            timeInMins = +(inputElement.value !== '' ? inputElement.value : inputElement.placeholder);

            closeDialog();
        });
    });

fetch(chrome.runtime.getURL('html/timer.html'))
    .then(response => response.text())
    .then(html => {
        timerBoxContainer.innerHTML = html;

        /*
        Have a countdown timer that counts down from the time limit value
        in both minutes and seconds. 
        This countdown timer will also update the countdown timer html element
        */

        // Get the necessary elements
        const timerMinutes = document.getElementById('minutes');

        // remainingTime = new Date()
        // remainingTime.setMinutes(timeInMins);
        // console.log(remainingTime);
        
        //timerMinutes.textContent = remainingTime.getMinutes();
    });