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

let sliderContent = getId("sliderContent")
if (sliderContent) {

  let sliderImages = sliderContent.getElementsByClassName('slider-img');

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
}

// =========== SECTION SLIDER =========

let galeriaPrincipal = getId("galeriaPrincipal")
if (galeriaPrincipal) {
  let imgModal = ""

  let galeria = galeriaPrincipal.getElementsByClassName('galeria-img'),
    modalGaleria = getId('modalGaleria');

  for (const item of galeria) {
    listener(item, 'click', e => {
      modalGaleria.classList.add('active')
      imgModal = e.target.src
      modalGaleria.getElementsByClassName("modal-galeria__img")[0].src = e.target.src
    })
  }

  let numberImg = 0
  for (let i = 0; i < galeria.length; i++) {

    if (imgModal == galeria[i].src) {
      numberImg = i
    }

  }

  listener(modalGaleria, 'click', e => {
    if (e.target.classList.contains("modal-closed") ||
      e.target.classList.contains("fa-close") ||
      e.target.classList.contains("modal-galeria")) {
      modalGaleria.classList.remove('active')
    }

  })

  let sliderPrevGallery = getId('sliderPrevGallery'),
    sliderNextGallery = getId('sliderNextGallery');

  // listener(sliderPrevGallery, 'click', () => {
  //   console.log('prev')

  // })

  listener(sliderNextGallery, 'click', () => {

    for (let i = 0; i < galeria.length; i++) {

      if (numberImg == i) {
        modalGaleria.getElementsByClassName("modal-galeria__img")[0].src = galeria[i].src

      }
    }

    numberImg++
    console.log(numberImg)

  })

}

