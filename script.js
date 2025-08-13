let cart = [];
let total = 0;

function addToCart(button) {
  const item = button.parentElement;
  const name = item.dataset.name;
  const price = parseInt(item.dataset.price);

  cart.push({ name, price });
  total += price;

  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  const totalDisplay = document.getElementById("total");

  cartList.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
  });

  totalDisplay.textContent = total;
}

document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Order placed! Thank you.");
  cart = [];
  total = 0;
  updateCart();
  this.reset();
});