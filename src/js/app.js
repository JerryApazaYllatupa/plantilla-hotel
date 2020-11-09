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
  sliderImages = sliderContent.getElementsByClassName('slider-img')



let sliderPosition = 0

let closeImages = (number = sliderPosition) => {

  let sliderLength = sliderImages.length - 1

  if (sliderPosition >= sliderLength) {
    sliderPosition = 0
  }



  for (let i = 0; i <= sliderLength; i++) {

    if (i == number) {
      sliderImages[i].classList.add("active")
    } else {
      sliderImages[i].classList.remove("active")
    }
  }

}

closeImages()

listener(btnNext, 'click', () => {
  sliderPosition++
  closeImages()
})

listener(btnPrev, 'click', () => {
  sliderPosition--
  sliderPosition = Math.abs(sliderPosition)
  closeImages()
})

