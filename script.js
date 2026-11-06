"use strict";

const navigationToggle = document.querySelector(".nav-toggle");
const navigationLinks = document.querySelector("#nav-links");

if (navigationToggle && navigationLinks) {
  navigationToggle.addEventListener("click", () => {
    const expanded = navigationToggle.getAttribute("aria-expanded") === "true";
    navigationToggle.setAttribute("aria-expanded", String(!expanded));
    navigationLinks.classList.toggle("is-open", !expanded);
  });

  navigationLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navigationToggle.setAttribute("aria-expanded", "false");
      navigationLinks.classList.remove("is-open");
    }
  });
}

const year = document.querySelector("[data-current-year]");
if (year) {
  year.textContent = String(new Date().getFullYear());
}
