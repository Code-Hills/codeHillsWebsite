// scripts.js

function appendSlideShowImages() {
    const imagesArray = [];

    const imagesFilesNames = [
        "codehills-img_1.jpg",
        "codehills-img_3.png",
        "codehills-img_4.jpg",
        "codehills-img_7.jpg",
        "codehills-img_8.jpg",
        "codehills-img_9.jpg",
        "codehills-img_11.jpg",
        "codehills-img_12.jpg",
    ];

    const imagesPath = "assets/images/";

    imagesFilesNames.forEach((imageFileName) => {
        const image = new Image();
        image.src = imagesPath + imageFileName;
        image.setAttribute("loading", "lazy");
        image.alt = "Codehills-" + imageFileName;
        image.classList.add("coming-soon__slideShow--slide-image");
        imagesArray.push(image);
    });

    const swiperWrapper = document.querySelector(".swiper-wrapper");
    imagesArray.forEach((image) => {
        const swiperSlide = document.createElement("div");
        const swiperPreloader = document.createElement("div");
        swiperPreloader.classList.add("swiper-lazy-preloader");
        swiperSlide.classList.add(
            "coming-soon__slideShow--slide",
            "swiper-slide"
        );
        swiperSlide.appendChild(image);
        swiperSlide.appendChild(swiperPreloader);
        swiperWrapper.appendChild(swiperSlide);
    });
}

function initSlideShow() {
    const swiper = new Swiper(".swiper", {
        loop: true,
        lazy: true,
        effect: "fade",
        autoplay: {
            delay: 5000,
        },
    });
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
    const isLandscape = window.matchMedia('(orientation: landscape)').matches && window.matchMedia('(pointer:coarse)').matches;

    if(isLandscape) {
        document.querySelector('.coming-soon').classList.add('coming-soon--landscape');
    } else {
        document.querySelector('.coming-soon').classList.remove('coming-soon--landscape');
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