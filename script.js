const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".main-menu");
const barIcon = document.querySelector("#bar-icon");
const crossIcon = document.querySelector("#cross-icon");
menuBtn.addEventListener("click", function () {
  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    crossIcon.style.display = "block";
    barIcon.style.display = "none";
  } else {
    barIcon.style.display = "block";
    crossIcon.style.display = "none";
  }
});
