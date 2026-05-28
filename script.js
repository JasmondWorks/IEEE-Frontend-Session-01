const hamburgerMenu = document.querySelector(".hamburger-icon");
const mobileNav = document.querySelector(".mobile-nav");
const closeBtn = document.querySelector(".mobile-nav__close-btn");

hamburgerMenu.addEventListener("click", () => {
  mobileNav.classList.add("mobile-nav--show");
});

closeBtn.addEventListener("click", () => {
  mobileNav.classList.remove("mobile-nav--show");
});