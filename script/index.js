const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    autoplay: { delay: 5000, },



    slidesPerView: 2,
    centeredSlides: true,

    breakpoints: {
        // when window  
        120: { slidesPerView: 2, spaceBetween: 20 },
        
        // when window width is >=
        480: { slidesPerView: 2, spaceBetween: 50, centeredSlides: true},
        //    when window width is >= 640px
        640: { slidesPerView: 2, spaceBetween: 50, centeredSlides: true }
    },

});

swiper.changeLanguageDirection('rtl')