// methods


/* initialize hero banner slides 
*
* @return {void}
*/
function initHeroBannerSlides() {
    var heroSwiper = new Swiper('.hero-banner-swiper', {
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}


document.addEventListener('DOMContentLoaded', function () {
    initHeroBannerSlides();
});
