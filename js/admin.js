
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser || loggedInUser.role !== "admin") {
  alert("Access denied! Please log in as admin.");
  window.location.href = "login.html";
}


if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify([]));
}

const productForm = document.getElementById("addProductForm");
const productListSection = document.createElement("section");
productListSection.innerHTML = "<h3>Existing Products</h3>";
document.querySelector(".admin-container").appendChild(productListSection);

function displayProducts() {
  const products = JSON.parse(localStorage.getItem("products"));
  productListSection.innerHTML = "<h3>Existing Products</h3>";

  if (products.length === 0) {
    productListSection.innerHTML += "<p>No products found.</p>";
    return;
  }

  const list = document.createElement("ul");
  products.forEach((p, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${p.name}</strong> - ₹${p.price} <br>
      <small>${p.description}</small>
      <button onclick="deleteProduct(${index})">Delete</button>
    `;
    list.appendChild(li);
  });
  productListSection.appendChild(list);
}


productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("pname").value.trim();
  const price = parseFloat(document.getElementById("pprice").value);
  const desc = document.getElementById("pdesc").value.trim();

  if (!name || !price || !desc) {
    alert("Please fill all fields!");
    return;
  }

  const products = JSON.parse(localStorage.getItem("products"));
  products.push({ name, price, description: desc });
  localStorage.setItem("products", JSON.stringify(products));

  alert("Product added successfully!");
  productForm.reset();
  displayProducts();
});

window.deleteProduct = (index) => {
  const products = JSON.parse(localStorage.getItem("products"));
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  displayProducts();
};

displayProducts();
