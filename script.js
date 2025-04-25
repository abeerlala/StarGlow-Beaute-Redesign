// Detect  Current Page And Highlight It On Navigation Menu
const navLinks = document.querySelectorAll(".navLink a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.parentElement.classList.add("activeLink");
    }
});
// Mobile Navigation Toggle

const menuIcon = document.querySelector(".menuIcon");
const icon = document.querySelector(".menuIcon i");
const navList = document.querySelector(".navList");

menuIcon.addEventListener("click", () => {
    navList.classList.toggle("activeNav")
    icon.classList.toggle("fa-bars-staggered")
    icon.classList.toggle("fa-xmark")
});