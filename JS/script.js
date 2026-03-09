const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const roleError = document.getElementById("roleError");
const statusMessage = document.getElementById("statusMessage");
const selectedRoleInput = document.getElementById("selectedRole");

const roleCards = document.querySelectorAll(".role-card");

roleCards.forEach((card) => {
  card.addEventListener("click", () => {
    roleCards.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");
    selectedRoleInput.value = card.dataset.role;
    roleError.textContent = "";
  });
});

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const selectedRole = selectedRoleInput.value;

  emailError.textContent = "";
  roleError.textContent = "";
  statusMessage.textContent = "";
  statusMessage.style.color = "";

  let hasError = false;

  if (emailValue === "") {
    emailError.textContent = "Email is required";
    hasError = true;
  } else if (!isValidEmail(emailValue)) {
    emailError.textContent = "Invalid email";
    hasError = true;
  }

  if (!selectedRole) {
    roleError.textContent = "Please select a role";
    hasError = true;
  }

  if (hasError) {
    return;
  }

  statusMessage.style.color = "#2563eb";
  statusMessage.textContent = "Logging in...";

  setTimeout(() => {
    statusMessage.style.color = "#16a34a";
    statusMessage.textContent = `Login successful as ${selectedRole}`;

    // Redirect to dashboard based on role
    if (selectedRole === "Admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "teacher.html";
    }
  }, 1200);
});