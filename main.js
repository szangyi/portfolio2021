import "/style.scss";

// *JS functions

// *parallex on images
// https://simpleparallax.com
var images = document.querySelectorAll(".parallex-image");
new simpleParallax(images, {
  scale: 1.9,
});
