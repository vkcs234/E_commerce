# 🛍️ V2S E-Commerce

A modern, responsive e-commerce web application built using **HTML**, **CSS**, and **JavaScript**, featuring reusable components like a shared header, modular design, and dynamic shopping cart.

---

##  Features

- **Reusable Header Navigation** – common header for all pages  
- **User Authentication Pages** – login and registration with validation  
- **Product Display Page** – responsive grid layout for product cards  
- **Cart Page** – add, view, and calculate totals dynamically  
- **Consistent Design System** – unified colors, typography, and layout  

---

##  Project Structure

E_commerce-main/
│
├── index.html 
├── login.html
├── register.html 
├── cart.html 
├── header.html
│
├── css/
│ ├── header.css 
│ ├── style.css 
│ ├── login.css 
│ ├── register.css 
│ └── cart.css 
│
├── js/
│ ├── login.js 
│ ├── register.js
│ └── cart.js 
│
└── images/
├── logo.png
├── login_bg.jpg
└── log_bg.jpg


## ⚙️ Setup Instructions

1. **Extract** the ZIP file:  

2. Open the project folder in VS Code or your preferred code editor.

3. Use Live Server (VS Code extension) or open index.html directly in your browser.

4. All pages will automatically load the shared header using JavaScript:

js
Copy code
fetch("/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });
  
Tech Stack

Technology - Purpose
HTML5 -	Page structure
CSS3  -(Flexbox/Grid)	Styling and responsiveness
JavaScript (ES6) -	Dynamic page logic
Fetch API	 - Include header dynamically
LocalStorage (optional) -	Store cart or login data locally

Responsive Design

Works on all modern browsers
Optimized for mobile, tablet, and desktop screens
Uses flexible grids and scalable typography

Future Enhancements

Backend integration using Java Spring Boot or Node.js
Dynamic product data from database
Full user authentication system
Order management and payment gateway integration
