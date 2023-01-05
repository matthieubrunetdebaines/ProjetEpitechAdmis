const menuHamburger = document.querySelector(".menu_burger");
const navLinks = document.querySelector(".nav_links");

menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle("menu_mobile")
})