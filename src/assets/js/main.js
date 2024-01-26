// scripts.js

function appendSlideShowImages() {
    const imagesArray = [];

    const imagesFilesNames = [
        "codehills-img_1.jpg",
        "codehills-img_3.jpg",
        "codehills-img_4.jpg",
        "codehills-img_6.jpg",
        "codehills-img_7.jpg",
        "codehills-img_8.jpg",
        "codehills-img_9.jpg",
        "codehills-img_10.jpg",
        "codehills-img_11.jpg",
        "codehills-img_12.jpg",
        "codehills-img_13.jpg",
    ];

    const imagesPath = "assets/images/";

    imagesFilesNames.forEach((imageFileName) => {
        const image = new Image();
        image.src = imagesPath + imageFileName;
        image.alt = "Codehills-" + imageFileName;
        image.classList.add("coming-soon__slideShow--slide-image");
        imagesArray.push(image);
    });

    const swiperWrapper = document.querySelector(".swiper-wrapper");
    imagesArray.forEach((image) => {
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add(
            "coming-soon__slideShow--slide-image",
            "swiper-slide"
        );
        swiperSlide.appendChild(image);
        swiperWrapper.appendChild(swiperSlide);
    });
}

function initSlideShow() {
    const swiper = new Swiper(".swiper", {
        loop: true,
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

function isLandScape() {
    return window.matchMedia("(orientation: landscape)").matches;
}

document.addEventListener("DOMContentLoaded", () => {
    appendSlideShowImages();
    initSlideShow();
    initDotsAnimation();
    getScreenWidth();
});

window.addEventListener("resize", () => {
    getScreenWidth();
});
