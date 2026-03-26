/* Typing Animation */
const roles = [
  "ICT Student at Crawford University",
  "Aspiring Web Developer",
  "Technology Enthusiast",
];

let roleIndex = 0;
let charIndex = 0;
const typingEl = document.getElementById("typing");

function typeText() {
  if (charIndex < roles[roleIndex].length) {
    typingEl.textContent += roles[roleIndex][charIndex];
    charIndex++;
    setTimeout(typeText, 90);
  } else {
    setTimeout(eraseText, 1800);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingEl.textContent = roles[roleIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeText, 400);
  }
}

typeText();

/* Dark Mode */
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

/* Scroll Progress */
window.addEventListener("scroll", () => {
  const scrolled = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  document.getElementById("progress-bar").style.width =
    (scrolled / height) * 100 + "%";
});

/* Reveal on Scroll */
document.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach((section) => {
    if (section.getBoundingClientRect().top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
});

/* Contact */
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you. Your message has been sent.");
});
