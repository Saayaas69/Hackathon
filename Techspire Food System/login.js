document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document
      .getElementById("username")
      .value.toLowerCase()
      .trim();
    const password = document.getElementById("password").value;

    const users = {
      raj: { password: "admin123", role: "admin_dashboard.html" },
      bhimsen: { password: "manager123", role: "manager.html" },
      shishir: { password: "customer123", role: "customer.html" },
      bibek: { password: "customer123", role: "customer.html" },
    };

    if (users[username]) {
      if (users[username].password === password) {
        window.location.href = users[username].role;
      } else {
        alert("Incorrect password! Please try again.");
      }
    } else {
      alert("Invalid username! Access denied.");
    }
  });
