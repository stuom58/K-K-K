document.addEventListener("DOMContentLoaded", async function () {
  // بارگذاری داده‌های JSON
  async function loadSlides() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data.slides;
  }

  async function fetchProductTextData() {
    const response = await fetch('swiper_tow.json');
    return await response.json();
  }

  function updateProductText(content) {
    const productTextElement = document.querySelector(".product-txet");

    productTextElement.innerHTML = `
      <div class="header_text">${content.header_text}</div>
      <div class="dis_text">${content.dis_text}</div>
      <div class="dis_text_a">${content.dis_text_a}</div>
    `;
  }

  async function initProductText() {
    try {
      const type = new URLSearchParams(window.location.search).get("type") || "all"; // دریافت دسته‌بندی از URL یا پیش‌فرض به "all"
      const data = await fetchProductTextData(); // بارگیری داده‌ها
      const content = data.find(item => item.type === type); // پیدا کردن محتوای مناسب

      if (content) {
        updateProductText(content); // به‌روزرسانی محتوای product-txet
      }
    } catch (error) {
      console.error("An error occurred while initializing product text:", error);
    }
  }

  initProductText(); // شروع اسکریپت

  function createSwiperSlides(slides) {
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    swiperWrapper.innerHTML = ""; // حذف اسلایدهای قبلی

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

  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  function filterSlidesByType(type, slides) {
    if (type === "all" || !type) {
      return slides;
    }
    return slides.filter((slide) => slide.type === type); // فیلتر کردن بر اساس type
  }

  try {
    const swiperContainer = document.querySelector(".mySwiper2");
    if (!swiperContainer) {
      throw new Error("Swiper container element not found");
    }

    const slides = await loadSlides(); // بارگذاری اسلایدها از فایل JSON
    const type = getQueryParam("type") || "all"; // دریافت دسته‌بندی از URL یا پیش‌فرض به "all"
    const filteredSlides = filterSlidesByType(type, slides); // فیلتر کردن اسلایدها بر اساس type

    createSwiperSlides(filteredSlides); // ایجاد اسلایدها

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
