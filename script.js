const navBar = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");
const header = document.querySelector(".header");

menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("show-nav");
});

document.addEventListener("click", (e) => {
  const isDropDownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropDownButton && e.target.closest("[data-dropdown]") != null) return;

  if (isDropDownButton) {
    e.target.closest("[data-dropdown]").classList.toggle("active");
    menuBtn.classList.add("hide");
  }
});

const dropDownMenu = document.querySelector(".drop-down-menu");
const closeDropdownBtn = document.querySelector(".close-btn");
closeDropdownBtn.addEventListener("click", (e) => {
  if (e.target.closest("[data-dropdown]").classList.contains("active")) {
    e.target.closest("[data-dropdown]").classList.remove("active");
    menuBtn.classList.remove("hide");
  }
});
