import Swiper from 'swiper/js/swiper';

export default (function () {
    var productSlider = new Swiper('.product__slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        lazyload: true,
        navigation: {
            nextEl: '.product__navigation--next',
            prevEl: '.product__navigation--prev'
        },
        pagination: {
            el: '.product__pagination',
            type: 'bullets'
        }
    });
}())