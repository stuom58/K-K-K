document.addEventListener("DOMContentLoaded", async function () {
  const container = document.getElementById("aos-container");

  // بارگیری داده‌ها از فایل JSON
  async function fetchAOSData() {
    const response = await fetch("Animat_AOS.json");
    return await response.json();
  }

  // ایجاد باکس‌ها به صورت پویا
  function createAOSBoxes(data) {
    data.forEach((item) => {
      const col = document.createElement("div");
      col.className = "col-3 animate_aos";
      col.setAttribute("data-aos", "flip-left");
      col.setAttribute("data-aos-offset", "50");
      col.setAttribute("data-aos-delay", "10");
      col.setAttribute("data-aos-duration", "800");
      col.setAttribute("data-aos-easing", "ease-in-out");
      col.setAttribute("data-aos-mirror", "true");
      col.setAttribute("data-aos-once", "false");
      col.setAttribute("data-aos-anchor-placement", "top-center");

      col.innerHTML = `
                <div class="aos_img">
                    <img src="${item.src}" alt="${item.subtitle}">
                </div>
                <div class="co_name">
                    <h4>${item.subtitle}</h4>
                </div>
                <div class="aos_text">
                    <p>${item.text}</p>
                </div>
            `;
      container.appendChild(col);
    });
  }

  try {
    const data = await fetchAOSData(); // بارگیری داده‌ها
    createAOSBoxes(data); // ایجاد باکس‌ها با داده‌های بارگذاری شده
    AOS.init(); // شروع انیمیشن‌های AOS
    AOS.refresh(); // به‌روزرسانی انیمیشن‌های AOS
  } catch (error) {
    console.error(
      "An error occurred while fetching or creating AOS boxes:",
      error
    );
  }
});
