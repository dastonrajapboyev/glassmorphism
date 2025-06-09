document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__nav");
  const body = document.body;

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    body.style.overflow = nav.classList.contains("active") ? "hidden" : "";
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll(".header__nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      nav.classList.remove("active");
      body.style.overflow = "";
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !nav.contains(e.target) &&
      !burger.contains(e.target) &&
      nav.classList.contains("active")
    ) {
      burger.classList.remove("active");
      nav.classList.remove("active");
      body.style.overflow = "";
    }
  });
});
