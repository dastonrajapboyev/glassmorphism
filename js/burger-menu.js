// Function to initialize burger menu
function initBurgerMenu() {
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__nav");
  const body = document.body;
  const navLinks = document.querySelectorAll(".header__nav-link");

  if (!burger || !nav) return; // Exit if elements don't exist yet

  // Set active link based on current page
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (
      linkHref === currentPath ||
      (currentPath === "" && linkHref === "index.html")
    ) {
      link.classList.add("active");
    }
  });

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    body.style.overflow = nav.classList.contains("active") ? "hidden" : "";
  });

  // Handle link clicks
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Remove active class from all links
      navLinks.forEach((l) => l.classList.remove("active"));
      // Add active class to clicked link
      link.classList.add("active");

      // Close mobile menu
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
}

// Initialize on DOMContentLoaded for index.html
document.addEventListener("DOMContentLoaded", () => {
  // If header is already in the DOM (index.html), initialize immediately
  if (document.querySelector(".header__burger")) {
    initBurgerMenu();
  }
});

// Export the function to be called from load_components.js
window.initBurgerMenu = initBurgerMenu;
