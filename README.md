#  V2S E-Commerce

A modern, responsive e-commerce web application built using **HTML, CSS, and JavaScript**, featuring reusable components like a shared header, modular design, and dynamic shopping cart.

---

##  Features

-  **Reusable Header Navigation**

-  **User Authentication Pages**

-  **Product Display Page**

-  **Cart Page**

-  **Consistent Design System**


---

##  Project Structure
E_commerce-main/
│
├── index.html # Home page
├── login.html # Login page
├── register.html # Register page
├── cart.html # Cart page
├── header.html # Shared header for all pages
│
├── css/
│ ├── header.css # Navbar styles
│ ├── style.css # Homepage styles
│ ├── login.css # Login form styles
│ ├── register.css # Registration form styles
│ └── cart.css # Cart layout styles
│
├── js/
│ ├── login.js # Login form logic
│ ├── register.js # Register form logic
│ └── cart.js # Cart functionality
│
└── images/
├── logo.png
├── login_bg.jpg
└── log_bg.jpg


---

##  Setup Instructions

1. **Extract** the ZIP file:


unzip E_commerce-main.zip


2. **Open the project folder** in VS Code or any editor.

3. Use **Live Server** (VS Code extension) or open `index.html` directly in your browser.

4. All pages will automatically load the shared header via:
```js
fetch("/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });

| Technology                | Purpose                          |
| ------------------------- | -------------------------------- |
| HTML5                     | Page structure                   |
| CSS3 (Flexbox/Grid)       | Styling and responsiveness       |
| JavaScript (ES6)          | Dynamic page logic               |
| Fetch API                 | To include header dynamically    |
| LocalStorage *(optional)* | Store cart or login data locally |

📱 Responsive Design

Works on all modern browsers

Optimized for mobile, tablet, and desktop screens

Uses flexible grids and scalable typography

📸 Preview

Header Navigation

Sticky navbar with V2S E-Commerce branding and links.

Product Grid

Clean layout with hover animations and “Add to Cart” buttons.

Login / Register

Centered form with shadows and smooth input focus effects.

 Future Enhancements

Backend integration using Java Spring Boot / Node.js

Real product data from database

User authentication system

Order management and payment gateway
