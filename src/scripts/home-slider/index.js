import Swiper from 'swiper/js/swiper';
export default (function () {
    var swiper = new Swiper('.homeSlider', {
        slidesPerView: 1,
        spaceBetween: 30,
        lazyload: true,
        navigation: {
            nextEl: '.homeSlider__navigation--next',
            prevEl: '.homeSlider__navigation--prev'
        },
        pagination: {
            el: '.homeSlider__pagination',
            type: 'bullets'
        }
    });
    console.log(swiper);
}());
