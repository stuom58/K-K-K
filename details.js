
document.addEventListener("DOMContentLoaded", async function () {
    async function loadSlides() {
      const response = await fetch('./data.json');
      const data = await response.json();
      return data.slides;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get("id")); // بازیابی ID از URL

    try {
      const slides = await loadSlides();
      // جستجوی شیء مورد نظر با استفاده از ID
      const slideData = slides.find((slide) => slide.id === id);

      if (slideData) {
        // نمایش اطلاعات
        const productDetails = document.getElementById("product-details");
        productDetails.innerHTML = `
          <div class="product-container">
            <div class="product-img">
              <img src="${slideData.img_src}" alt="${slideData.header_t}" class="product-image">
            </div>
            <div class="product-info">
              <h2 class="product-header"><span>نام محصول :</span> ${slideData.header_t}</h2>
              <p class="product-type"><span> دسته بندی : </span> ${slideData.type}</p>
              <p class="product-description"><span>وظایف:</span> ${slideData.des}</p>
              <p class="product-full-description"><span> توضیحات : </span> ${slideData.description}</p>
            </div>
          </div>
        `;
      } else {
        console.error("No slide data found for the given ID.");
      }
    } catch (error) {
      console.error("An error occurred while loading slide data:", error);
    }
  });