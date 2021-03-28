const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 120
      }
    }
  });