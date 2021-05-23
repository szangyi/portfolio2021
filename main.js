import "/style.scss";

// *JS functions

// *parallex on images
// https://simpleparallax.com
var images = document.querySelectorAll(".parallex-image");
new simpleParallax(images, {
  scale: 1.9,
});

//portrait hover color
var i;
document.getElementById("portrait_design").onmouseover = function colorDesign() {
  for (i = 0; i < document.getElementsByClassName("cls-1").length; i++) {
    document.getElementsByClassName("cls-1")[i].style.fill = "#ff554b";
  }
};
document.getElementById("portrait_design").onmouseout = function colorDesign() {
  for (i = 0; i < document.getElementsByClassName("cls-1").length; i++) {
    document.getElementsByClassName("cls-1")[i].style.fill = "#1c1b20";
  }
};

document.getElementById("portrait_code").onmouseover = function colorCode() {
  for (i = 0; i < document.getElementsByClassName("cls-2").length; i++) {
    document.getElementsByClassName("cls-2")[i].style.fill = "#ff554b";
  }
};
document.getElementById("portrait_code").onmouseout = function colorCode() {
  for (i = 0; i < document.getElementsByClassName("cls-2").length; i++) {
    document.getElementsByClassName("cls-2")[i].style.fill = "#1c1b20";
  }
};

document.getElementById("portrait_soft").onmouseover = function colorSoft() {
  for (i = 0; i < document.getElementsByClassName("cls-3").length; i++) {
    document.getElementsByClassName("cls-3")[i].style.fill = "#ff554b";
  }
};

document.getElementById("portrait_soft").onmouseout = function colorSoft() {
  for (i = 0; i < document.getElementsByClassName("cls-3").length; i++) {
    document.getElementsByClassName("cls-3")[i].style.fill = "#1c1b20";
  }
};

document.getElementById("portrait_plus").onmouseover = function colorPlus() {
  for (i = 0; i < document.getElementsByClassName("cls-4").length; i++) {
    document.getElementsByClassName("cls-4")[i].style.fill = "#e5fc22";
    document.getElementsByClassName("cls-4")[i].style.stroke = "#1c1b20";
  }
};

document.getElementById("portrait_plus").onmouseout = function colorPlus() {
  for (i = 0; i < document.getElementsByClassName("cls-4").length; i++) {
    document.getElementsByClassName("cls-4")[i].style.fill = "#1c1b20";
    document.getElementsByClassName("cls-4")[i].style.stroke = "none";
  }
};
