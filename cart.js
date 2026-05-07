let cartCount = 0;
let cartTotal = 0;

function formatCurrency(amount) {
  return "₱" + amount.toLocaleString("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function addToCart(price, buttonEl) {
  cartCount++;
  cartTotal += price;

  document.getElementById("cartCount").textContent =
    cartCount + (cartCount === 1 ? " item" : " items");

  document.getElementById("cartTotal").textContent =
    formatCurrency(cartTotal);

  buttonEl.textContent = "Added ✓";
  buttonEl.disabled = true;

  setTimeout(() => {
    buttonEl.textContent = "Add to Cart";
    buttonEl.disabled = false;
  }, 1200);
}
