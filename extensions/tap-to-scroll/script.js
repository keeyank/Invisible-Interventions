const urls = [
  "https://www.tiktok.com/",
  "https://www.tiktok.com/foryou",
  "https://www.tiktok.com/following",
];

console.log(`script ${window.location.origin + window.location.pathname}`);

if (urls.includes(window.location.origin + window.location.pathname)) {
  let interval = setInterval(() => {
    let swiperElement = document.getElementsByClassName("swiper");
    console.log(swiperElement);

    if (swiperElement.length > 0) {
      console.log("a", swiperElement.length);
      console.log("a", swiperElement[0]);
      console.log("a", Object.getOwnPropertyNames(swiperElement[0]));

      const ButtonGroupElement = document.createElement("div");
      ButtonGroupElement.style.cssText =
        "position:fixed;width:100vw;height:50px;bottom:50px;z-index:999999;background:black;display: flex;justify-content: center; align-items: center;text-align: center; border: 1px gray; border-style: solid none;";

      // Adds a button above the existing buttons to enable tap-to-scroll functionality.
      // When clicked, the "taptoscroll" function is invoked.
      const PreviousButtonElement = document.createElement("div");
      PreviousButtonElement.style.cssText =
        "width:50vw; height: 100%;background:rgb(250, 250, 250); color: black; display: flex;justify-content: center; align-items: center;text-align: center; border-right: solid 0.5px gray;";
      PreviousButtonElement.innerHTML += "Previous";

      const NextButtonElement = document.createElement("div");
      NextButtonElement.style.cssText =
        "width:50vw; height: 100%;background:rgb(250, 250, 250);color: black;display: flex;justify-content: center; align-items: center;text-align: center; border-left: solid 0.5px gray;";
      NextButtonElement.innerHTML += "Next";

      ButtonGroupElement.appendChild(PreviousButtonElement);
      ButtonGroupElement.appendChild(NextButtonElement);

      console.log(swiperElement);

      let swiper = swiperElement[0].swiper;
      swiper.allowTouchMove = false;

      PreviousButtonElement.onclick = () => {
        swiper.slidePrev();
      };
      NextButtonElement.onclick = () => {
        swiper.slideNext();
      };
      document.body.insertBefore(ButtonGroupElement, document.body.firstChild);

      clearInterval(interval);
    }
  }, 100);
}
