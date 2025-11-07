
const products = [
  { id: 1, name: "Wireless Headphones", price: 1999, image: "/images/headphones.jpg" },
  { id: 2, name: "Smart Watch", price: 2999, image: "/images/watch.jpg" },
  { id: 3, name: "Bluetooth Speaker", price: 1499, image: "/images/speaker.jpg" },
  { id: 4, name: "Sunglasses", price: 999, image: "/images/sunglasses.jpg" },
  { id: 5, name: "Casual Shoes", price: 2499, image: "/images/shoes.jpg" }
];

const productList = document.getElementById("productList");

function renderProducts() {
  productList.innerHTML = "";

  products.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>Price: ₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

renderProducts();
