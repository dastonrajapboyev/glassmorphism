const burger = document.querySelector(".header__burger");
const navList = document.getElementById("headerNav");

if (burger && navList) {
  burger.addEventListener("click", function () {
    const expanded = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", !expanded);
    navList.classList.toggle("header__nav-list--open");
    burger.classList.toggle("header__burger--active");
  });
}
