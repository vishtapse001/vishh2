// Define constants for API endpoint and DOM elements
const API_URL = "https://reqres.in/api/users";
const usersList = document.getElementById("users-list");

// Function to fetch users from API
async function fetchUsers() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    displayUsers(data.data); // Assuming data is structured with 'data' key containing user array
  } catch (error) {
    console.error("Error fetching users:", error.message);
  }
}

// Function to display users on the webpage
function displayUsers(users) {
  usersList.innerHTML = ""; // Clear previous content
  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");

    const avatar = `<img src="${user.avatar}" alt="Avatar" class="avatar">`;
    const userName = `<h3>${user.first_name} ${user.last_name}</h3>`;
    const email = `<p>Email: ${user.email}</p>`;

    userCard.innerHTML = avatar + userName + email;
    usersList.appendChild(userCard);
  });
}

// Event listener for the Fetch Users button
document.getElementById("fetch-users").addEventListener("click", fetchUsers);
