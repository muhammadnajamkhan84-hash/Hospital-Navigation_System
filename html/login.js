const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // page reload roko, koi backend nahi hai

  const name = document.getElementById("loginName").value.trim();
  const contact = document.getElementById("loginContact").value.trim();
  const role = document.getElementById("loginRole").value;

  // Save details so index.html can greet the user and show role-based content
  localStorage.setItem("userName", name);
  localStorage.setItem("userContact", contact);
  localStorage.setItem("userRole", role);

  window.location.href = "index.html";
});