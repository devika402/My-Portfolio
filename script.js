const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleBtn.innerHTML = body.classList.contains("dark")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

const modalMood = document.getElementById("modal-mood");
const modalStudy = document.getElementById("modal-study");
const openButtons = document.querySelectorAll(".open-modal");
const closeButtons = document.querySelectorAll(".close");

openButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const project = e.target.closest(".project-card").dataset.project;
    document.getElementById(`modal-${project}`).style.display = "flex";
  });
});

closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});

const contactForm = document.getElementById("contact-form");
const responseMsg = document.getElementById("form-response");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  responseMsg.textContent = "Message sent successfully!";
  contactForm.reset();
});
