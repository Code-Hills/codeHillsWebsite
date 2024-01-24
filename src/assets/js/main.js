// methods


/* initialize hero banner slides
*
* @return {void}
*/
function initSlideshow() {
    let current = 0;
    const slides = document.querySelectorAll("#slideshow .slide");

    setInterval(() => {

        slides[current].style.opacity = 0;
        current = (current + 1) % slides.length;
        slides[current].style.opacity = 1;
    }, 5000);
}

function initDotsAnimation() {
    const dots = document.getElementById('dots');
    const text = ["", ".", "..", "..."];
    let index = 0;

    setInterval(() => {
        dots.textContent = text[index % text.length];
        index++;
    }, 700);

}


document.addEventListener('DOMContentLoaded', function () {
    initSlideshow();
    initDotsAnimation();
});
