// Navbar Menu script
const toggle = document.querySelector(".navbar .toggle");
const menu = document.querySelector(".navbar .nav");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Aos link script
AOS.init();

