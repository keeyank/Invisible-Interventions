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
        "width:100vw;height:50px;z-index:999999;background:black;display: flex;justify-content: center; align-items: center;text-align: center; border: 1px gray; border-style: solid none;";

      // Adds a button above the existing buttons to enable tap-to-scroll functionality.
      // When clicked, the "taptoscroll" function is invoked.
      const PreviousButtonElement = document.createElement("div");
      PreviousButtonElement.style.cssText =
        "position:fixed; top:50px; z-index:1000; width:calc(100vw - 50px); height: 40%;background:rgb(250, 250, 250, 0); color: black; display: flex;justify-content: center; align-items: center;text-align: center;";

      const NextButtonElement = document.createElement("div");
      NextButtonElement.style.cssText =
        "position:fixed; bottom:50px; z-index:1000; width:calc(100vw - 50px); height: 40%;background:rgb(250, 250, 250, 0);color: black;display: flex;justify-content: center; align-items: center;text-align: center;";

      // ButtonGroupElement.appendChild(PreviousButtonElement);
      // ButtonGroupElement.appendChild(NextButtonElement);

      console.log(swiperElement);

      let swiper = swiperElement[0].swiper;
      swiper.allowTouchMove = false;

      PreviousButtonElement.onclick = () => {
        swiper.slidePrev();
      };
      NextButtonElement.onclick = () => {
        swiper.slideNext();
      };
      // document.body.insertBefore(ButtonGroupElement, document.body.firstChild);
      document.body.insertBefore(
        PreviousButtonElement,
        document.body.firstChild
      );

      document.body.insertBefore(NextButtonElement, document.body.firstChild);

      clearInterval(interval);
    }
  }, 100);
}
