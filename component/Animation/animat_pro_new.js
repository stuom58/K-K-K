document.addEventListener('DOMContentLoaded', function () {
  try {
    const swiperContainer = document.querySelector('.mySwiper2');
    if (!swiperContainer) {
      throw new Error('Swiper container element not found');
    }

    const swiper = new Swiper('.mySwiper2', {
      pagination: {
        el: '.swiper-pagination_new',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 40,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 10,
        depth: 50,
        modifier: 1,
        slideShadows: true,
      },
    });
  } catch (error) {
    console.error('An error occurred while initializing Swiper:', error);
  }
});
