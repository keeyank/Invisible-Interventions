// Retrieves all articles currently loaded in the DOM.
let articles = document.getElementsByTagName("article");

// Implements a scroll-to-next-post functionality upon tapping.
// This is necessary due to the dynamic addition and removal of article DOM objects.
// To ensure that each post is displayed to the user only once, an attribute is set and checked.
// If the attribute is absent, the next article is selected and shown.
const tapToScroll = () => {
  let selectedArticleIdx = 1;

  // Iterate through articles until an unviewed one is found.
  while (articles[selectedArticleIdx].getAttribute("viewed")) {
    selectedArticleIdx += 1;
  }

  let article = articles[selectedArticleIdx];

  article.scrollIntoView({ block: "center" });
  article.setAttribute("viewed", "true");
};

// Disables scrolling by adding the "touch-action: none" CSS property to the main element.
// This allows tapping on comments and other interactive elements while preventing scrolling.
const main = document.getElementsByTagName("main")[0];
main.style.cssText = "touch-action: none;";

// Adds a button above the existing buttons to enable tap-to-scroll functionality.
// When clicked, the "taptoscroll" function is invoked.
const tapToScrollButtonElement = document.createElement("div");
tapToScrollButtonElement.style.cssText =
  "position:fixed;width:100vw;height:50px;bottom:50px;z-index:999999;background:black;display: flex;justify-content: center; align-items: center;text-align: center; border: 1px gray; border-style: solid none;";
tapToScrollButtonElement.innerHTML += "Tap Here to Scroll";
tapToScrollButtonElement.onclick = () => {
  tapToScroll();
};
document.body.insertBefore(tapToScrollButtonElement, document.body.firstChild);
