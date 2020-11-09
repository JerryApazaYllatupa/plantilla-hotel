"use strict";

var _library = require("./library/library");

// =============== Section menu  ==============
var active = (0, _library.getId)("icon-hamburger"),
    menu = (0, _library.getId)("menu-principal"),
    activemenu = (0, _library.getId)("navmenu"); // Active menu

(0, _library.listener)(active, 'click', function () {
  activemenu.classList.toggle("active");
}); // =========== SECTION SLIDER =========

var btnNext = (0, _library.getId)("sliderNext"),
    btnPrev = (0, _library.getId)("sliderPrev");
var sliderContent = (0, _library.getId)("sliderContent"),
    sliderImages = sliderContent.getElementsByClassName('slider-img');
var sliderPosition = 0;

var closeImages = function closeImages() {
  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : sliderPosition;
  var sliderLength = sliderImages.length - 1;

  if (sliderPosition >= sliderLength) {
    sliderPosition = 0;
  }

  for (var i = 0; i <= sliderLength; i++) {
    if (i == number) {
      sliderImages[i].classList.add("active");
    } else {
      sliderImages[i].classList.remove("active");
    }
  }
};

closeImages();
(0, _library.listener)(btnNext, 'click', function () {
  sliderPosition++;
  closeImages();
});
(0, _library.listener)(btnPrev, 'click', function () {
  sliderPosition--;
  sliderPosition = Math.abs(sliderPosition);
  closeImages();
});