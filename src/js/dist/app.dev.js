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
var sliderContent = (0, _library.getId)("sliderContent");

if (sliderContent) {
  var sliderImages = sliderContent.getElementsByClassName('slider-img');
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

  closeImages(); // Fuction to run 

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
} // =========== SECTION SLIDER =========


var galeriaPrincipal = (0, _library.getId)("galeriaPrincipal");

if (galeriaPrincipal) {
  (function () {
    var imgModal = "";
    var galeria = galeriaPrincipal.getElementsByClassName('galeria-img'),
        modalGaleria = (0, _library.getId)('modalGaleria');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = galeria[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        (0, _library.listener)(item, 'click', function (e) {
          modalGaleria.classList.add('active');
          imgModal = e.target.src;
          modalGaleria.getElementsByClassName("modal-galeria__img")[0].src = e.target.src;
        });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var numberImg = 0;

    for (var i = 0; i < galeria.length; i++) {
      if (imgModal == galeria[i].src) {
        numberImg = i;
      }
    }

    (0, _library.listener)(modalGaleria, 'click', function (e) {
      if (e.target.classList.contains("modal-closed") || e.target.classList.contains("fa-close") || e.target.classList.contains("modal-galeria")) {
        modalGaleria.classList.remove('active');
      }
    });
    var sliderPrevGallery = (0, _library.getId)('sliderPrevGallery'),
        sliderNextGallery = (0, _library.getId)('sliderNextGallery'); // listener(sliderPrevGallery, 'click', () => {
    //   console.log('prev')
    // })

    (0, _library.listener)(sliderNextGallery, 'click', function () {
      for (var _i = 0; _i < galeria.length; _i++) {
        if (numberImg == _i) {
          modalGaleria.getElementsByClassName("modal-galeria__img")[0].src = galeria[_i].src;
        }
      }

      numberImg++;
      console.log(numberImg);
    });
  })();
}