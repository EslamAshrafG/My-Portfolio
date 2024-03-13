"use strict";
//Start Header
const tabBtn = document.querySelector(".fa-bars");
const navBars = document.querySelector(".bars");
if (screen.width <= 530) navBars.classList.add("hide");
tabBtn.addEventListener("click", function () {
  navBars.classList.toggle("hide");
});
//End Header


