chrome.storage.local.get().then((result) => {
  console.log("Stored: " + JSON.stringify(result));

  if (!result.user_id) {
    chrome.runtime.sendMessage({ action: "survey" }, function (response) {
      console.log("Response: ", response);
    });

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
    //
    // MAIN
    //

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
              user_id: result.user_id,
              extension_id: "gradual-grayscale",
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

    // Creates a transparent overlay element with fixed position and full viewport size
    const overlayElement = document.createElement("div");
    overlayElement.style.cssText =
      "position:fixed;width:100vw;height:100vh;z-index:999999;background:transparent;pointer-events: none;backdrop-filter:grayscale(0)";
    document.body.insertBefore(overlayElement, document.body.firstChild);

    // Updates the grayscale value by the specified delta.
    // @param delta - The amount by which the grayscale value should be updated.
    // @return True if the grayscale value is successfully updated, False otherwise.
    const updateGrayscale = (delta = 0.01) => {
      console.log("updateGrayscale");
      console.log(overlayElement.style.backdropFilter);
      let grayscale = parseFloat(
        overlayElement.style.backdropFilter.slice(10, -1)
      );

      if (grayscale >= 1) {
        // If the grayscale value reaches 100%
        // alert("You've reached your limit!");
        return false;
      } else {
        console.log(grayscale);
        grayscale += delta;
        overlayElement.style.backdropFilter = `grayscale(${grayscale})`;
        return true;
      }
    };

    // Touch-based Transition
    // This function facilitates the transition effect through touch interaction by updating
    // the grayscale value of the displayed content on each touch event.
    document.body.addEventListener("touchstart", (e) => {
      updateGrayscale(0.05);
    });

    // Time-based Transition
    // This function enables a time-based transition effect by periodically updating the grayscale value
    // of the displayed content at a fixed default interval value of 100 milliseconds.
    // Uncomment the following and comment out the code above to try it out:
    // const interval = setInterval(() => {
    //   if (!updateGrayscale()) {
    //     clearInterval(interval);
    //   }
    // }, 100);
  }
});
