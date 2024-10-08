"use strict";

var buttonMenu = document.querySelector(".main-navigation__toggle");
var mainNav = document.querySelector(".main-navigation");
mainNav.classList.remove("main-navigation--nojs");
if (window.matchMedia("(min-width: 768px)").matches && mainNav.classList.contains("main-navigation--closed")) {
  mainNav.classList.remove("main-navigation--closed");
  mainNav.classList.add("main-navigation--opened");
}
buttonMenu.addEventListener("click", function () {
  if (mainNav.classList.contains("main-navigation--closed")) {
    mainNav.classList.remove("main-navigation--closed");
    mainNav.classList.add("main-navigation--opened");
  } else {
    mainNav.classList.remove("main-navigation--opened");
    mainNav.classList.add("main-navigation--closed");
  }
});
window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 768px)").matches && mainNav.classList.contains("main-navigation--closed")) {
    mainNav.classList.remove("main-navigation--closed");
    mainNav.classList.add("main-navigation--opened");
  }
});