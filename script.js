// Smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Typed.js
new Typed("#typed", {
  strings: ["Frontend Developer 🚀", "UI/UX Enthusiast 🎨", "Problem Solver 💡"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// EmailJS init
emailjs.init("YOUR_USER_ID");
const form = document.getElementById("contact-form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      document.getElementById("form-status").textContent = "✅ Message sent successfully!";
      form.reset();
    }, (err) => {
      document.getElementById("form-status").textContent = "❌ Failed to send message.";
      console.error(err);
    });
});

// Mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// dark light theme
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  const icon = themeBtn.querySelector("i");

  if (document.body.classList.contains("dark")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});