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
  let grayscale = parseFloat(overlayElement.style.backdropFilter.slice(10, -1));

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
