let foodMenu = [
  { name: "Pizza", price: 500, quantity: 20 },
  { name: "Burger", price: 250, quantity: 15 },
];

let users = [
  { username: "Dipankar Shrestha", role: "Customer", balance: 50 },
  { username: "Bhimsen Basnet", role: "Admin", balance: null },
];

function displayFoodMenu() {
  const foodMenuBody = document.getElementById("food-menu-body");
  foodMenuBody.innerHTML = "";
  foodMenu.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${item.name}</td>
          <td>$${item.price}</td>
          <td>${item.quantity}</td>
          <td>
              <button class="btn btn-edit" onclick="editFoodItem(${index})">Edit</button>
              <button class="btn btn-delete" onclick="deleteFoodItem(${index})">Delete</button>
          </td>
      `;
    foodMenuBody.appendChild(row);
  });
}

function displayUsers() {
  const userBody = document.getElementById("user-body");
  userBody.innerHTML = "";
  users.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${user.username}</td>
          <td>${user.role}</td>
          <td>${user.balance !== null ? `$${user.balance}` : "-"}</td>
          <td>
              <button class="btn btn-edit" onclick="editUser(${index})">Edit</button>
              <button class="btn btn-delete" onclick="deleteUser(${index})">Delete</button>
          </td>
      `;
    userBody.appendChild(row);
  });
}

function addFoodItem() {
  const name = prompt("Enter food name:");
  const price = parseFloat(prompt("Enter food price:"));
  const quantity = parseInt(prompt("Enter quantity:"));

  if (name && !isNaN(price) && !isNaN(quantity)) {
    foodMenu.push({ name, price, quantity });
    displayFoodMenu();
  } else {
    alert("Invalid input! Please enter correct values.");
  }
}

function editFoodItem(index) {
  const item = foodMenu[index];
  const newName = prompt("Edit food name:", item.name);
  const newPrice = parseFloat(prompt("Edit food price:", item.price));
  const newQuantity = parseInt(prompt("Edit quantity:", item.quantity));

  if (newName && !isNaN(newPrice) && !isNaN(newQuantity)) {
    foodMenu[index] = { name: newName, price: newPrice, quantity: newQuantity };
    displayFoodMenu();
  } else {
    alert("Invalid input! Please enter correct values.");
  }
}

function deleteFoodItem(index) {
  foodMenu.splice(index, 1);
  displayFoodMenu();
}

function addUser() {
  const username = prompt("Enter username:");
  const role = prompt("Enter role (Customer, Admin):");
  let balance = null;

  if (role === "Customer") {
    balance = parseFloat(prompt("Enter balance:"));
    if (isNaN(balance)) {
      alert("Invalid balance amount!");
      return;
    }
  }

  if (username && role) {
    users.push({ username, role, balance });
    displayUsers();
  } else {
    alert("Please fill in all fields.");
  }
}

function editUser(index) {
  const user = users[index];
  const newUsername = prompt("Edit username:", user.username);
  const newRole = prompt("Edit role (Customer, Admin):", user.role);
  let newBalance = null;

  if (newRole === "Customer") {
    newBalance = parseFloat(prompt("Enter balance:", user.balance));
    if (isNaN(newBalance)) {
      alert("Invalid balance amount!");
      return;
    }
  }

  if (newUsername && newRole) {
    users[index] = {
      username: newUsername,
      role: newRole,
      balance: newBalance,
    };
    displayUsers();
  } else {
    alert("Please fill in all fields.");
  }
}

function deleteUser(index) {
  users.splice(index, 1);
  displayUsers();
}

document.getElementById("add-food-item").addEventListener("click", addFoodItem);
document.getElementById("add-user").addEventListener("click", addUser);

displayFoodMenu();
displayUsers();

document.getElementById("logout").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "landingpage.html";
});

var ctx = document.getElementById("salesChart").getContext("2d");
var salesChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Pizza", "Burger"],
    datasets: [
      {
        label: "Sales ($)",
        data: [65000, 45000],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
