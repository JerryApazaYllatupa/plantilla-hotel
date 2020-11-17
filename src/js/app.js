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
  let imgModal = "", numberImg = 0;


  let galeria = galeriaPrincipal.getElementsByClassName('galeria-img'),
    modalGaleria = getId('modalGaleria');

  for (let i = 0; i < galeria.length; i++) {
    listener(galeria[i], 'click', e => {
      modalGaleria.classList.add('active')
      imgModal = e.target.src
      modalGaleria.getElementsByClassName("modal-galeria__img")[0].src = e.target.src
      numberImg = i
    })
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



  listener(sliderNextGallery, 'click', () => {
    if (numberImg > galeria.length - 2) {
      numberImg = 0
    }
    modalGaleria.getElementsByClassName("modal-galeria__img")[0].src = galeria[numberImg].src
    numberImg++
  })

  listener(sliderPrevGallery, 'click', () => {
    if (numberImg > galeria.length - 2) {
      numberImg = 0
    }
    modalGaleria.getElementsByClassName("modal-galeria__img")[0].src = galeria[numberImg].src
    numberImg--
  })

}


// =========== SECTION MODAL FORM =========

let btnActiveModal = getId("btnActiveModal"),
  modalFormReserva = getId("modalFormReserva");

if (btnActiveModal && modalFormReserva) {

  listener(btnActiveModal, 'click', () => {
    modalFormReserva.classList.add('active')
  })

  listener(modalFormReserva, 'click', e => {

    if (e.target.classList.contains('modal-form-close')) {
      modalFormReserva.classList.remove('active')
    }

    if (e.target.classList.contains('modal-form')) {
      modalFormReserva.classList.remove('active')
    }

  })

}