// document.addEventListener('DOMContentLoaded', function() {
//     var navbarItems = document.querySelectorAll('.navbar-item');

//     navbarItems.forEach(function(item) {
//         item.addEventListener('click', function(event) {
//             event.stopPropagation(); // جلوگیری از انتشار رویداد
//             var submenu = item.querySelector('.submenu');
//             closeAllSubmenus();
//             if (submenu) {
//                 submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
//             }
//         });

//         var submenuItems = item.querySelectorAll('.submenu-item');
//         submenuItems.forEach(function(subItem) {
//             subItem.addEventListener('click', function(event) {
//                 event.stopPropagation(); // جلوگیری از انتشار رویداد
//                 var subSubmenu = subItem.querySelector('.submenu');
//                 closeAllSubmenus();
//                 if (subSubmenu) {
//                     subSubmenu.style.display = subSubmenu.style.display === 'block' ? 'none' : 'block';
//                 }
//             });
//         });
//     });

//     document.addEventListener('click', function() {
//         closeAllSubmenus(); // بستن تمامی زیرمنوها با کلیک در خارج از نوبار
//     });

//     function closeAllSubmenus() {
//         var submenus = document.querySelectorAll('.submenu');
//         submenus.forEach(function(submenu) {
//             submenu.style.display = 'none';
//         });
//     }
// });
