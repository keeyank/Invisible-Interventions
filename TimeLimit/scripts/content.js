//window.prompt("sometext","defaultText");

// Create the dialog box container
const dialogBoxContainer = document.createElement('div');
dialogBoxContainer.id = 'dialogBoxContainer';
document.body.appendChild(dialogBoxContainer);

// Load the popup.html file into the dialog box container
fetch(chrome.runtime.getURL('html/dialog-1.html'))
  .then(response => response.text())
  .then(html => {
    dialogBoxContainer.innerHTML = html;
    console.log('html', html);
    // const script = document.createElement('script');
    // script.src = chrome.extension.getURL('popup.js');
    // dialogBoxContainer.appendChild(script);
  });