// products_box.js
export async function loadProducts(containerId, category) {
  const response = await fetch("./data.json"); // به‌روزرسانی مسیر
  if (!response.ok) {
    console.error("Failed to load data.json:", response.statusText);
    return;
  }
  const data = await response.json();
  const products = data.slides; // تغییر به slides

  if (!Array.isArray(products)) {
    console.error("Slides data is not an array:", products);
    return;
  }

  function createProductBox(product) {
    const productBox = document.createElement("div");
    productBox.className = "product-box";
    const queryString = `?id=${product.id}`;

    productBox.innerHTML = `
  <img  class="product-img" src="${product.img_src}" alt="${product.header_t}">
  <div class="contant_shop">
    <div class="proBox_text">
      <p>نام محصول :  
        <a href="${product.link + queryString}" class="product-link">
          ${product.header_t}
        </a>
      </p>
      <p> نوع  : 
        <a href="${product.link_type}" class="product-link">
          ${product.type}
        </a>
      </p>
    </div>
    <div class="shop_icon"> 
     <a href="./form_email.html" target="_top">
              <img src="./buy-now (4).png" alt="shoping_icon" />
     </a>

    </div>
  </div>
  <p class="product-box_description"> توضیحات : ${product.des}</p>
`;

    return productBox;
  }

  const productContainer = document.getElementById(containerId);
  productContainer.innerHTML = ""; // پاک کردن محتویات قبلی

  // فیلتر کردن محصولات بر اساس دسته‌بندی
  const filteredProducts = category
    ? products.filter((product) => product.type === category)
    : products;

  filteredProducts.forEach((product) => {
    const productBox = createProductBox(product);
    productContainer.appendChild(productBox);
  });
}
