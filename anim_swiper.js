// تنظیمات اسوایپر
var swiper = new Swiper(".mySwiper", {
  speed: 1600,
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
  // بارگذاری داده‌ها از فایل JSON
  fetch("swiper_one.json")
      .then(response => response.json())
      .then(data => {
          const swiperWrapper = document.getElementById("swiper-wrapper");

          data.forEach(item => {
              const swiperSlide = document.createElement("div");
              swiperSlide.classList.add("swiper-slide");

              const titleDiv = document.createElement("div");
              titleDiv.classList.add("title");
              titleDiv.setAttribute("data-swiper-parallax", "-300");
              titleDiv.textContent = item.title;
              swiperSlide.appendChild(titleDiv);

              const subtitleDiv = document.createElement("div");
              subtitleDiv.classList.add("subtitle");
              subtitleDiv.setAttribute("data-swiper-parallax", "-200");
              subtitleDiv.textContent = item.subtitle;
              swiperSlide.appendChild(subtitleDiv);

              const textDiv = document.createElement("div");
              textDiv.classList.add("text");
              textDiv.setAttribute("data-swiper-parallax", "-100");

              const p = document.createElement("p");
              p.classList.add("p_text");
              p.textContent = item.text;
              textDiv.appendChild(p);

              swiperSlide.appendChild(textDiv);
              swiperWrapper.appendChild(swiperSlide);
          });

          // پس از افزودن اسلایدها به اسوایپر، باید اسوایپر را مجدداً اجرا کنیم
          swiper.update();
      })
      .catch(error => console.error("Error loading content data:", error));

  // تنظیم ارتفاع شیء
  function setObjectHeight() {
    const obj = document.querySelector('.custom-object');
    if (obj) {
      if (window.innerWidth <= 768) {
        obj.style.height = '900px'; // تنظیم ارتفاع برای حالت موبایل
      } else {
        obj.style.height = '540px'; // تنظیم ارتفاع برای حالت‌های دیگر
      }
    } else {
      console.error('Element with class custom-object not found.');
    }
  }
  
  // فراخوانی تابع برای تنظیم اولیه
  setObjectHeight();
  
  // تنظیم دوباره ارتفاع هنگام تغییر اندازه پنجره
  window.addEventListener('resize', setObjectHeight);

});
