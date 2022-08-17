const slider = document.querySelector(".slider");
const dots = document.querySelector(".dots");
const btn_section = document.querySelector(".btn-section");
const btnNext = document.querySelector(".btn-slider-one");
const btnPrew = document.querySelector(".btn-slider-two");

const images = [
  {
    id: 1,
    imgPath: "images/img1.jpg",
  },
  {
    id: 2,
    imgPath: "images/img2.jpg",
  },
  {
    id: 3,
    imgPath: "images/img3.jpg",
  },
  {
    id: 4,
    imgPath: "images/img4.jpg",
  },
];

let slide = 1;
function next() {
  slide++;
  if (slide > images.length) {
    slide = 1;
  }
  showImages();
  dotsActive(slide);
  dotsRemoveActive(slide);
}

function prew() {
  slide--;
  if (slide < 1) {
    slide = images.length;
  }
  showImages();
  dotsActive(slide);
  dotsRemoveActive(slide);
}

btnPrew.addEventListener("click", prew);
btnNext.addEventListener("click", next);

function showImages() {
  let html = "";
  for (let i = 0; i < images.length; i++) {
    html = `<section class="slider">
    <img src="${images[i].imgPath}">
    </section>`;

    if (images[i].id === slide) {
      slider.innerHTML = html;
    }
  }
}

function showDots() {
  let html = "";
  for (let i = 0; i < images.length; i++) {
    html = `<div class="dots">
    <span id="${images[i].id}"></span>
  </div>`;

    dots.insertAdjacentHTML("afterend", html);
  }
}

showDots();
showImages();

function dotsActive(slide) {
  for (let i = 0; i < images.length; i++) {
    if (slide == images[i].id) {
      document.getElementById(`${slide}`).classList.add("active");
    }
  }
}

function dotsRemoveActive(slide) {
  for (let i = 0; i < images.length; i++) {
    if (slide != images[i].id) {
      document.getElementById(`${images[i].id}`).classList.remove("active");
    }
  }
}
