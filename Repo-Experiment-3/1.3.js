const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");

  toggleBtn.textContent = 
    body.classList.contains("dark-theme") ? "☀️ Light Mode" : "🌙 Dark Mode";
});
