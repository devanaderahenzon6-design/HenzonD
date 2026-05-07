const productsGrid = document.getElementById("productsGrid");

products.forEach(product => {
  const card = document.createElement("article");
  card.className = "product-card";

  card.innerHTML = `
    <div class="product-icon">${product.icon}</div>
    <div class="product-body">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-desc">${product.desc}</p>
    </div>
    <div class="product-footer">
      <span class="product-price">₱${product.price.toLocaleString()}</span>
      <button class="btn-add">Add to Cart</button>
    </div>
  `;

  const button = card.querySelector(".btn-add");
  button.addEventListener("click", () =>
    addToCart(product.price, button)
  );

  productsGrid.appendChild(card);
});
