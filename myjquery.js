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

//sections appearing
// const sections = [...document.querySelectorAll("section")];

// let options = {
//   rootMargin: "0px",
//   threshold: 0.25,
// };

// const callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     const { target } = entry;
//     // console.log(entry, target);

//     if (entry.intersectionRatio >= 0.25) {
//       target.classList.add("is-visible");
//     } else {
//       target.classList.remove("is-visible");
//     }
//   });
// };

// const observer = new IntersectionObserver(callback, options);

// sections.forEach((section, index) => {
//   observer.observe(section);
// });

// window.onload(removeClass());
