"use strict";

var range = document.getElementById("before-after");
var before = document.querySelector(".example__before");
var after = document.querySelector(".example__after");
var beforeWrapper = document.querySelector(".example__before-wrapper");
var pageWidth = document.documentElement.scrollWidthWidth;
var max = 100;
function blockHide() {
  if (window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 1439px)").matches) {
    before.style.width = max - range.value + "vw";
  } else {
    before.style.width = max - range.value + "%";
  }
}
function widthCheck() {
  if (window.matchMedia("(max-width: 1439px)").matches) {
    before.style.width = max - range.value + "vw";
  } else {
    before.style.width = max - range.value + "%";
  }
}

// function wrapperWidth() {
//   if (window.matchMedia("(min-width: 1440px)").matches) {
//     beforeWrapper.style.width = 720 + "px";
//   } else {
//     beforeWrapper.style.width = parseInt(pageWidth) + "px";
//   }
// }

// function sizeCheck() {
//   widthCheck();
//   wrapperWidth();
// }

range.addEventListener("input", blockHide);
window.addEventListener("resize", widthCheck);

// window.matchMedia("(min-width: 768px)").matches &&