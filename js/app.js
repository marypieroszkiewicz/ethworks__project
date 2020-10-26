/* --------------------------------------------------- */
/* ----- HIGHLIGHT CURRENT PAGE ACTIVE MENU ITEM ----- */
/* --------------------------------------------------- */

const items = document.querySelectorAll('.menu__link');

function makeActive() {

  items.forEach(elem => elem.classList.remove('active'));
  this.classList.add('active');

}

items.forEach(elem => {
  elem.addEventListener('click', makeActive);
});

/* --------------------------------------------------- */
/* ----- CAROUSEL / SLIDER----- */
/* --------------------------------------------------- */

const buttonsWrapper = document.querySelector(".dots");
const slides = document.querySelector(".main-team__wrap");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
        item.classList.remove("js-active")
    );
    if (e.target.classList.contains("dot--first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("js-active");
    } else if (e.target.classList.contains("dot--second")) {
      slides.style.transform = "translateX(-90%)";
      e.target.classList.add("js-active");
    }
  }
});

const media = window.matchMedia('(min-width: 768px)');

if (media.matches) {

  buttonsWrapper.addEventListener("click", e => {
    if (e.target.nodeName === "BUTTON") {
      Array.from(buttonsWrapper.children).forEach(item =>
          item.classList.remove("js-active")
      );
      if (e.target.classList.contains("dot--first")) {
        slides.style.transform = "translateX(-0%)";
        e.target.classList.add("js-active");
      } else if (e.target.classList.contains("dot--second")) {
        slides.style.transform = "translateX(-55%)";
        e.target.classList.add("js-active");
      }
    }
  });
}


/* --------------------------------------------------- */
/* ----- MULTIPLE MODALS ----- */
/* --------------------------------------------------- */

const triggers = document.querySelectorAll('.js-trigger');
const triggerArray = Array.from(triggers).entries();
const modals = document.querySelectorAll('.main-team__card-modal');
const closeButtons = document.querySelectorAll('.main-team__card-close');

for (let [index, trigger] of triggerArray) {
  const handler = createToggleModal( index );
  trigger.addEventListener("click", handler);
  closeButtons[index].addEventListener("click", handler);
}

function createToggleModal( index ) {
  return () => {
    modals[index].classList.toggle('show-modal');
  };
}















/* Data VidUp */

/* Get all elements with data-vidup */
const vidupElements = document.querySelectorAll('[data-vidup]');
// const modal = document.getElementById('modal');
const modal = document.querySelector('.js-modal')
// const modalVideo = document.getElementById('modal-video');
const modalVideo = document.querySelector('.js-modalVideo')
// const mdc = document.getElementById('mdc');
const mdc = document.querySelector('.js-mdc')
// const close = document.getElementById('close');
const close = document.querySelector('.js-close');

function closeModal() {
  // mdc.style.width = "0";
  mdc.style.transform = "scale(0)";

  setTimeout(() => {
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
    modalVideo.src = "";
  }, 500);
}

function showModal(element) {
  modal.style.visibility = "visible";
  modal.style.opacity = "1";
  modalVideo.src = element.href;
  mdc.style.width = "100%";


  setTimeout(() => {
    mdc.style.transform = "scale(1)";
  }, 300);

}

/* Foreach element add an eventlistener and show the popup when clicked and add the src in the link */
vidupElements.forEach(element => {
  element.addEventListener("click", (e) => {

    e.preventDefault();
    showModal(element);
  });
});

close.addEventListener('click', (e) => {
  closeModal();
});

mdc.addEventListener('click', () => {
  closeModal();
});

modal.addEventListener('click', () => {
  closeModal();
});
