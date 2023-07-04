const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".resnav-menu");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("activate");
    navMenu.classList.toggle("activate");
});

document.querySelectorAll(".resnav-link")
    .forEach(n => n.addEventListener("click", () => {
        menuIcon.classList.remove("activate");
        navMenu.classList.remove("activate");
    }))
