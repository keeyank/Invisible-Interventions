articles = document.getElementsByTagName("article");

const tapToScroll = () => {
  let selectedArticleIdx = 1;

  while (articles[selectedArticleIdx].getAttribute("viewed")) {
    selectedArticleIdx += 1;
  }

  let article = articles[selectedArticleIdx];

  article.scrollIntoView({ block: "center" });
  article.setAttribute("viewed", "true");

  console.log(article, selectedArticleIdx, article.getAttribute("viewed"));
};

const tapToScrollButtonElement = document.createElement("div");
tapToScrollButtonElement.style.cssText =
  "position:fixed;width:100vw;height:50px;bottom:50px;z-index:999999;background:black;display: flex;justify-content: center; align-items: center;text-align: center; border: 1px gray; border-style: solid none;";
tapToScrollButtonElement.innerHTML += "Tap Here to Scroll";
tapToScrollButtonElement.onclick = () => {
  tapToScroll();
};
document.body.insertBefore(tapToScrollButtonElement, document.body.firstChild);
