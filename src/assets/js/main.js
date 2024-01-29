// scripts.js

function appendSlideShowImages() {
  const imagesArray = [];

  const imagesFilesNames = [
    "codehills-img_1.jpg",
    "codehills-img_3.png",
    "codehills-img_4.jpg",
    "codehills-img_7.jpg",
    "codehills-img_9.jpg",
    "codehills-img_11.jpg",
    "codehills-img_12.jpg",
  ];

  const imagesPath = "assets/images/";

  imagesFilesNames.forEach((imageFileName) => {
    const image = new Image();
    image.setAttribute("data-src", imagesPath + imageFileName);
    image.alt = "Codehills-" + imageFileName;
    image.classList.add("coming-soon__slideShow--slide-image");
    imagesArray.push(image);
  });

  const slidesWrapper = document.querySelector(
    ".coming-soon__slideShow--wrapper"
  );
  imagesArray.forEach((image) => {
    const slide = document.createElement("div");
    slide.classList.add("coming-soon__slideShow--slide");
    slide.appendChild(image);
    slidesWrapper.appendChild(slide);
  });
}

function lazyLoadImage(image) {
  if (image && image.getAttribute("data-src")) {
    const rect = image.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // check if image is in viewport
    if (rect.top < windowHeight && rect.bottom >= 0) {
      image.setAttribute("src", image.getAttribute("data-src"));
      image.removeAttribute("data-src");
    }
  }
}

function initSlideShow() {
  const slides = document.querySelectorAll(".coming-soon__slideShow--slide");
  let currentSlide = 0;

  slides[currentSlide].classList.add("coming-soon__slideShow--slide-active");

  lazyLoadImage(slides[currentSlide].querySelector("img"));

  setInterval(() => {
    slides[currentSlide].classList.remove(
      "coming-soon__slideShow--slide-active"
    );
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("coming-soon__slideShow--slide-active");
    lazyLoadImage(slides[currentSlide].querySelector("img"));
  }, 5000);
}

function initDotsAnimation() {
  const dots = document.getElementById("dots");
  const text = ["", ".", "..", "..."];
  let index = 0;

  setInterval(() => {
    dots.textContent = text[index % text.length];
    index++;
  }, 700);
}

function getScreenWidth() {
  document.documentElement.style.setProperty(
    "--screen-width",
    `${window.innerWidth}px`
  );
}
function getScreenHeight() {
  document.documentElement.style.setProperty(
    "--screen-height",
    `${window.innerHeight}px`
  );
}

function checkLandscapeMode() {
  const isLandscape =
    window.matchMedia("(orientation: landscape)").matches &&
    window.matchMedia("(pointer:coarse)").matches;

  if (isLandscape) {
    document
      .querySelector(".coming-soon")
      .classList.add("coming-soon--landscape");
  } else {
    document
      .querySelector(".coming-soon")
      .classList.remove("coming-soon--landscape");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  appendSlideShowImages();
  initSlideShow();
  initDotsAnimation();
  getScreenWidth();
  getScreenHeight();
  checkLandscapeMode();
});

window.addEventListener("resize", () => {
  getScreenWidth();
  getScreenHeight();
  checkLandscapeMode();
});

window.addEventListener("orientationchange", () => {
  getScreenWidth();
  getScreenHeight();
  checkLandscapeMode();
});
