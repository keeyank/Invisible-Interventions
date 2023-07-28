console.log(`hello from ${window.location.href}`);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // listen for messages sent from background.js
  if (request.message === "urlChange") {
    console.log(request.url); // new url is now in content scripts!

    if (request.url === "https://www.instagram.com/") {
      setup();
    } else {
      destroy();
    }
  }
});

const moveToPreviousPost = () => {
  let selectedArticleIdx = 0;

  // Iterate through articles until an unviewed one is found.
  for (let idx = 0; idx < articles.length; idx++) {
    if (articles[idx].getAttribute("viewed") && idx > selectedArticleIdx) {
      selectedArticleIdx = idx;
    }
  }

  selectedArticleIdx -= 1;

  if (selectedArticleIdx >= 0) {
    let article = articles[selectedArticleIdx];
    article.scrollIntoView({ block: "center" });

    // for the remounted posts above
    for (let idx = 0; idx < selectedArticleIdx; idx++) {
      articles[idx].setAttribute("viewed", "true");
    }
    articles[selectedArticleIdx + 1].removeAttribute("viewed");
  } else {
    alert(
      "You've reached the top of the page. No more content is available above this point."
    );
  }
};

const moveToNextPost = () => {
  let selectedArticleIdx = 0;

  // Iterate through articles until an unviewed one is found.
  for (let idx = 0; idx < articles.length; idx++) {
    if (articles[idx].getAttribute("viewed") && idx > selectedArticleIdx) {
      selectedArticleIdx = idx;
    }
  }

  if (selectedArticleIdx !== articles.length - 1) {
    if (selectedArticleIdx === 0) {
      articles[selectedArticleIdx].setAttribute("viewed", "true");
    }

    let article = articles[selectedArticleIdx + 1];
    article.scrollIntoView({ block: "center" });
    article.setAttribute("viewed", "true");
  } else {
    alert("The next post is being loaded. Please wait a moment and try again.");
  }
};

// Retrieves all articles currently loaded in the DOM.
let articles = document.getElementsByTagName("article");

const ButtonGroupElement = document.createElement("div");
ButtonGroupElement.style.cssText =
  "position:fixed;width:100vw;height:50px;bottom:50px;z-index:999999;background:black;display: flex;justify-content: center; align-items: center;text-align: center; border: 1px gray; border-style: solid none;";

// Adds a button above the existing buttons to enable tap-to-scroll functionality.
// When clicked, the "taptoscroll" function is invoked.
const PreviousButtonElement = document.createElement("div");
PreviousButtonElement.style.cssText =
  "width:50vw; height: 100%;background:rgb(250, 250, 250); color: black; display: flex;justify-content: center; align-items: center;text-align: center; border-right: solid 0.5px gray;";
PreviousButtonElement.innerHTML += "Previous";
PreviousButtonElement.onclick = () => {
  moveToPreviousPost();
};

const NextButtonElement = document.createElement("div");
NextButtonElement.style.cssText =
  "width:50vw; height: 100%;background:rgb(250, 250, 250);color: black;display: flex;justify-content: center; align-items: center;text-align: center; border-left: solid 0.5px gray;";
NextButtonElement.innerHTML += "Next";
NextButtonElement.onclick = () => {
  moveToNextPost();
};

ButtonGroupElement.appendChild(PreviousButtonElement);
ButtonGroupElement.appendChild(NextButtonElement);

const setup = () => {
  // Disables scrolling by adding the "touch-action: none" CSS property to the main element.
  // This allows tapping on comments and other interactive elements while preventing scrolling.
  const main = document.getElementsByTagName("main")[0];
  main.style.cssText = "touch-action: none;";

  // Implements a scroll-to-next-post functionality upon tapping.
  // This is necessary due to the dynamic addition and removal of article DOM objects.
  // To ensure that each post is displayed to the user only once, an attribute is set and checked.
  // If the attribute is absent, the next article is selected and shown.

  document.body.insertBefore(ButtonGroupElement, document.body.firstChild);
};

const destroy = () => {
  document.body.remove(ButtonGroupElement);
};

if (
  [
    "https://www.instagram.com/foryou",
    "https://www.tiktok.com/following",
  ].includes(window.location.href)
) {
  setup();
}
