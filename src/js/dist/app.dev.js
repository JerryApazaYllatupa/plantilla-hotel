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
var numberClick = 0;

var closeImages = function closeImages() {
  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  if (number > sliderImages.length - 2) {
    numberClick = 0;
  }

  for (var i = 0; i < sliderImages.length; i++) {
    if (i == number) {
      sliderImages[i].classList.add("active");
    } else {
      sliderImages[i].classList.remove("active");
    }
  }
};

closeImages(); // setTimeout(() => {
// }, );

setInterval(function () {
  numberClick = numberClick + 1;
  closeImages(numberClick);
}, 3000);
(0, _library.listener)(btnNext, 'click', function () {
  numberClick++;
  closeImages(numberClick);
});
(0, _library.listener)(btnPrev, 'click', function () {
  numberClick--;
  var newPosition = Math.abs(numberClick);
  closeImages(newPosition);
});