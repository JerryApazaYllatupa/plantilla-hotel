import {
  getId,
  getClass,
  getAll,
  listener,
  getName,
  ajax,
  ruteImg,
  rutePeticion,
} from './library/library';

// =============== Section menu  ==============
let active = getId("icon-hamburger"),
  menu = getId("menu-principal"),
  activemenu = getId("navmenu");


// Active menu
listener(active, 'click', () => {

  activemenu.classList.toggle("active")
})

// =========== SECTION SLIDER =========


let btnNext = getId("sliderNext"),
  btnPrev = getId("sliderPrev")

let sliderContent = getId("sliderContent"),
  sliderImages = sliderContent.getElementsByClassName('slider-img');

let numberClick = 0

let closeImages = (number = 0) => {

  if (number > sliderImages.length - 2) {
    numberClick = 0
  }

  for (let i = 0; i < sliderImages.length; i++) {

    if (i == number) {
      sliderImages[i].classList.add("active")

    } else {

      sliderImages[i].classList.remove("active")
    }

  }

}

closeImages()

// Fuction to run 
setInterval(() => {
  numberClick = numberClick + 1
  closeImages(numberClick)
}, 3000);

listener(btnNext, 'click', () => {
  numberClick++
  closeImages(numberClick)

})

listener(btnPrev, 'click', () => {

  numberClick--
  let newPosition = Math.abs(numberClick)
  closeImages(newPosition)

})

