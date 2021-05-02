// --masthead--

jQuery(document).ready(function ($) {
  var $masthead = $(".masthead");

  var mastheadWidth = 0;
  function getMastheadWidth() {
    mastheadWidth = $masthead.get(0).scrollWidth;
  }
  getMastheadWidth();
  ScrollTrigger.addEventListener("refreshInit", getMastheadWidth);

  function updateProxy() {
    // move the handler to the corresponding ratio according to the page's scroll position.
    if (mastheadScrollTrigger) {
      gsap.set(proxy, { x: -mastheadScrollTrigger.scroll(), overwrite: "auto" });
    }
  }

  var mastheadScrollTrigger = ScrollTrigger.create({
    id: "masthead",
    animation: gsap.to(".masthead", {
      x: function () {
        return -(mastheadWidth - window.innerWidth);
      },
      ease: "true",
    }),
    trigger: ".masthead",
    end: function () {
      return mastheadWidth;
    },
    scrub: true,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
  });

  var proxy = document.createElement("div");

  window.addEventListener("wheel", updateProxy);
});
