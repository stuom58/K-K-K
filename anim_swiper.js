var swiper = new Swiper(".mySwiper", {
    speed: 900,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.addEventListener('DOMContentLoaded', function() {
    function setObjectHeight() {
      const obj = document.querySelector('.custom-object');
      if (obj) {
        if (window.innerWidth <= 768) {
          obj.style.height = '800px';
        } else {
          obj.style.height = '540px';
        }
      } else {
        console.error('Element with class custom-object not found.');
      }
    }

    window.addEventListener('resize', setObjectHeight);
    setObjectHeight(); // فراخوانی تابع در هنگام بارگذاری کامل
  });