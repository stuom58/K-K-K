import { slides } from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  function createSwiperSlides(slides) {
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    slides.forEach((slide) => {
      const slideElement = document.createElement("div");
      slideElement.className = "swiper-slide";

      // ایجاد لینک با پارامتر ID
      const queryString = `?id=${slide.id}`;

      slideElement.innerHTML = `
        <img src="${slide.img_src}" alt="${slide.header_t}">
        <div class="slide-content">
          <h4><span class="span_header_t"> نام : </span><a href="${slide.link + queryString}" target="_top">${slide.header_t}</a></h4>
          <h4><span class="span_type"> دسته بندی : </span><a href="${slide.link_type}" target="_top">${slide.type}</a></h4>
          <p>${slide.des}</p>
        </div>
      `;
      swiperWrapper.appendChild(slideElement);
    });
  }

  try {
    const swiperContainer = document.querySelector(".mySwiper2");
    if (!swiperContainer) {
      throw new Error("Swiper container element not found");
    }

    createSwiperSlides(slides); // بارگذاری اسلایدها از آرایه

    const swiper = new Swiper(".mySwiper2", {
      pagination: {
        el: ".swiper-pagination_new",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 40,
      loop: true,
      autoplay: {
        delay: 5000,
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
    console.error("An error occurred while initializing Swiper:", error);
  }
});
