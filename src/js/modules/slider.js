import slick from "slick-carousel";

export default function slider() {
    const productSliders = $('.js_productSlider');

    if (productSliders.length > 0) {
        productSliders.each(function () {
            $(this).slick({
                arrows: false,
                dots: true,
                speed: 500,
                touchMove: false,
                swipe: true,
                centerMode: true,
                centerPadding: '0px',
                // autoplay: true,
                // pauseOnHover: true
            });
        });
    }
}