function loadNavbar() {
  fetch("./navbar.html")
    .then((response) => response.text())
    .then((data) => {
      const navbarContainer = document.getElementById("navbar-container");
      navbarContainer.innerHTML = data; // مدیریت رویدادهای کلیک روی آیتم‌های منو و زیرمنوها
      const navbarItems = document.querySelectorAll(".navbar-item");
      navbarItems.forEach((item) => {
        item.addEventListener("click", function (event) {
          event.stopPropagation();
          const submenu = this.querySelector(".submenu");
          closeAllSubmenus();
          if (submenu) {
            submenu.classList.toggle("active");
            adjustNavbarHeight();
          }
        });
        const submenuItems = item.querySelectorAll(".submenu-item");
        submenuItems.forEach((subItem) => {
          subItem.addEventListener("click", function (event) {
            event.stopPropagation();
            const subSubmenu = this.querySelector(".submenu");
            closeAllSubmenus();
            if (subSubmenu) {
              subSubmenu.classList.toggle("active");
              adjustNavbarHeight();
            }
          });
        });
      });
      document.addEventListener("click", function () {
        closeAllSubmenus();
      });

      function closeAllSubmenus() {
        const submenus = document.querySelectorAll(".submenu");
        submenus.forEach((submenu) => {
          submenu.classList.remove("active");
        });
        adjustNavbarHeight();
      }

      function adjustNavbarHeight() {
        const navbar = document.querySelector(".navbar");
        let maxHeight = 0;
        const submenus = document.querySelectorAll(".submenu.active");
        submenus.forEach((submenu) => {
          if (submenu.offsetHeight > maxHeight) {
            maxHeight = submenu.offsetHeight;
          }
        });
        navbar.style.height = maxHeight > 0 ? `${maxHeight + 40}px` : "auto"; // 40 پیکسل برای ارتفاع پایه نوار
      }

      // مدیریت منوی همبرگری
      const hamburger = document.querySelector(".hamburger");
      const navbarMenu = document.querySelector(".navbar-menu");

      if (hamburger) {
        hamburger.addEventListener("click", function () {
          navbarMenu.classList.toggle("active");
          document.body.classList.toggle("no-scroll"); // جلوگیری از اسکرول هنگام باز بودن منو
          adjustNavbarHeight();

          // پنهان کردن آیکن همبرگری زمانی که منو باز است
          hamburger.style.display = navbarMenu.classList.contains("active")
            ? "none"
            : "flex";
        });
      }
    })
    .catch((error) => {
      console.error("خطا در لود کردن نوار ناوبری:", error);
    });
}

window.onload = loadNavbar;
