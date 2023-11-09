const errorElement = document.getElementById("error");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];
  if (name.value === "" || name.value == null) {
    messages.push("Name is required");
  }

  if (password.value.length <= 6) {
    messages.push("Pasword must be longer than 6 characters");
  }
  if (messages.length > 0) {
    errorElement.innerHTML = messages.join(",");
  }
});
