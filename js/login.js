if (!localStorage.getItem("users")) {
  const users = [
    { username: "admin", password: "admin123", role: "admin" },
    { username: "user1", password: "user123", role: "user" }
  ];
  localStorage.setItem("users", JSON.stringify(users));
}

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = JSON.parse(localStorage.getItem("users"));
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert("Login successful!");

    if (user.role === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href="index.html";
    }
  } else {
    alert("Invalid username or password!");
  }
});
