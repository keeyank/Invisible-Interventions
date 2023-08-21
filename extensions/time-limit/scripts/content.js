/**** Helper Functions ****/
function numToStr(number, digits) {
  const numberString = number.toString();
  const padding = digits - numberString.length;
  if (padding > 0) {
    return "0".repeat(padding) + numberString;
  }
  return numberString;
}
// Code to wait for elements to load
// https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

const tracking = (user_id, extension_id) => {
  console.log(user_id, extension_id);
  // User Tracking
  setInterval(async () => {
    if (!document.hidden) {
      const res = await fetch(
        `https://interventions.sfu.jryng.com/tracking/usage`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user_id,
            extension_id: extension_id,
          }),
        }
      )
        .then(async (res) => {
          if (!res.ok) throw await res.json();
          return await res.json();
        })
        .catch((err) => {
          console.log("tracking", err);

          if (err.detail === "User ID not found") {
            chrome.storage.local.clear().then(() => {
              console.log("Value is set");
            });
            window.location.reload();
          }

          return null;
        });
      console.log("tracking", res);
    }
  }, 5000);
};

function showModal(
  text = "From now on, you will be unable to save your credentials. You will have to log in each time you open up Tik Tok."
) {
  // Create the modal container
  const modal = document.createElement("div");

  // Function to hide the modal
  function hideModal() {
    console.log("hideModal");
    modal.remove();
  }

  modal.style.display = "flex";
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "999999999";

  // Create the modal content
  const modalContent = document.createElement("div");
  modalContent.style.backgroundColor = "#fff";
  modalContent.style.padding = "20px";
  modalContent.style.borderRadius = "5px";
  modalContent.style.textAlign = "center";
  modalContent.innerHTML += `<p> <span style="font-weight:bold;">Your extension has been activated </span><br/>${text}</p>`;

  // Create the close button
  const closeButtonElement = document.createElement("div");
  closeButtonElement.style.cssText =
    "width:100%; cursor: pointer; margin-top: 0.5rem; font-weight: 600; padding-top: 0.5rem; padding-bottom: 0.5rem;border-radius: 0.5rem; background-color: rgb(220 252 231 / 1); color: rgb(22 101 52 / 1);";
  closeButtonElement.innerHTML += "Okay";
  closeButtonElement.style.cursor = "pointer";

  modalContent.appendChild(closeButtonElement);

  modal.appendChild(modalContent);

  // Append the modal to the document body

  document.body.insertBefore(modal, document.body.firstChild);

  // Add click event to close the modal
  closeButtonElement.onclick = () => {
    hideModal();
  };
}

chrome.storage.local.get().then((result) => {
  console.log("Stored: " + JSON.stringify(result));
  console.log(Math.round(Date.now() / 1000));

  if (!result.installation_timestamp) {
    // Save the timestamp when the user first installs the extension
    chrome.storage.local
      .set({ installation_timestamp: Math.round(Date.now() / 1000) })
      .then(() => {
        console.log("Value is set");
      });
  }

  if (!result.user_id) {
    // If user_id cannot be found in the extension
    // Open the pre-exp survey
    chrome.runtime.sendMessage({ action: "survey" }, function (response) {
      console.log("Response: ", response);
    });

    // Block app access
    // Click on the button to reload the page with the user_id
    const reloadButton = document.createElement("div");
    reloadButton.style.cssText =
      "width:100vw; height: 100vh;background:rgb(250, 250, 250); color: black; display: flex;justify-content: center; align-items: center;text-align: center; border-right: solid 0.5px gray;";
    reloadButton.innerHTML += "Click me after the survey to access the app!";
    reloadButton.onclick = () => {
      window.location.reload();
    };

    document.body.innerHTML = "";
    document.body.insertBefore(reloadButton, document.body.firstChild);
  } else {
    //////////////////
    // MAIN
    //////////////////

    // Activate the intervention after a week (60sec * 60 * 24 * 7)

    if (
      Math.round(Date.now() / 1000) >
      result.installation_timestamp + 60 * 60 * 24 * 5
    ) {
      // Activate only if not already activated
      chrome.storage.local.get("activated", (result) => {
        if (result.activated === undefined) {
          chrome.storage.local.set({ activated: true }, () => {
            showModal(
              "From now on, every time you access the Tik Tok feed, you will be prompted to set a time limit for yourself. The remaining time is visible on the bottom right-hand corner of the screen. Once your time is up, you will be prompted to close the app, but you may alternatively set an additional time limit for yourself and continue using Tik Tok."
            );
            console.log("Intervention activated for the first time");
          });
        } else {
          console.log("The intervention is currently active");
        }
      });

      tracking(result.user_id, "time-limit");

      //////////////////
      // Intervention
      //////////////////

      /*** Intervention Code ***/
      // Create the dialog box container for the 2 popups
      const dialogBoxContainer = document.createElement("div");
      dialogBoxContainer.id = "dialogBoxContainer";
      document.body.appendChild(dialogBoxContainer);
      const dialogBoxContainer2 = document.createElement("div");
      dialogBoxContainer2.id = "dialogBoxContainer2";
      document.body.appendChild(dialogBoxContainer2);
      let initialVisit = true;
      let hideTimesup = false;
      // Create the timer box container
      const timerBoxContainer = document.createElement("div");
      timerBoxContainer.id = "timerBoxContainer";
      // Append timer box to the search bar
      document.body.appendChild(timerBoxContainer);
      // waitForElm('._ab18._ab1b').then((searchBar : HTMLElement) => {
      //     searchBar.appendChild(timerBoxContainer);
      // });
      let timeInMins = 0;
      let timeInSecs = 0;
      fetch(chrome.runtime.getURL("html/dialog-1.html"))
        .then((response) => response.text())
        .then((html) => {
          dialogBoxContainer.innerHTML = html;
          // Get the necessary elements
          const dialogBox = document.getElementById("dialogBox");
          const submitBtn = document.getElementById("submitBtn");
          // Function to close the dialog box
          function closeDialog() {
            dialogBox.style.display = "none";
          }
          submitBtn.addEventListener("click", function () {
            // Obtain the time limit value
            const inputElement = document.getElementById("timeLimit");
            timeInMins = +(inputElement.value !== ""
              ? inputElement.value
              : inputElement.placeholder);
            initialVisit = false;
            hideTimesup = false;
            // PLACEHOLDER VALS FOR TESTING PURPOSES - REMOVE THIS LINE LATER
            // timeInMins = 0
            // timeInSecs = 4
            closeDialog();
          });
        });
      fetch(chrome.runtime.getURL("html/dialog-2.html"))
        .then((response) => response.text())
        .then((html) => {
          dialogBoxContainer2.innerHTML = html;
          document.getElementById("dialogBox2").style.display == "none";
          // Get the necessary elements
          const continueBtn = document.getElementById("continueBtn");
          continueBtn.addEventListener("click", function () {
            // Open the timerDialog
            const timerDialog = document.getElementById("dialogBox");
            const timesupDialog = document.getElementById("dialogBox2");
            timerDialog.style.display = "block";
            timesupDialog.style.display = "none";
            hideTimesup = true;
          });
        });
      fetch(chrome.runtime.getURL("html/timer.html"))
        .then((response) => response.text())
        .then((html) => {
          timerBoxContainer.innerHTML = html;
        });
      // Loop that runs whenever timeInMins and timeInSecs are not 0
      setInterval(function () {
        if (timeInMins !== 0 || timeInSecs !== 0) {
          if (timeInSecs === 0) {
            timeInMins--;
            timeInSecs = 59;
            // Update the timer
            let timerMinutes = document.getElementById("minutes");
            let timerSeconds = document.getElementById("seconds");
            timerMinutes.textContent = numToStr(timeInMins, 2);
            timerSeconds.textContent = numToStr(timeInSecs, 2);
          } else {
            timeInSecs--;
            // Update the timer
            let timerSeconds = document.getElementById("seconds");
            timerSeconds.textContent = numToStr(timeInSecs, 2);
          }
        } else {
          let dialogBox;
          if (initialVisit || hideTimesup) {
            dialogBox = document.getElementById("dialogBox");
          } else {
            dialogBox = document.getElementById("dialogBox2");
          }
          if (
            dialogBox &&
            window.getComputedStyle(dialogBox).getPropertyValue("display") ===
              "none"
          ) {
            dialogBox.style.display = "block";
          }
        }
      }, 1000);
    } else {
      tracking(result.user_id, "inactive");
    }
  }
});
