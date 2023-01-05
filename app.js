const iconmenu = document.querySelector(".icon");
const ul_navbar = document.querySelector(".ul_navbar");

iconmenu.addEventListener('click',()=>{
    ul_navbar.classList.toggle("mobile_menu")
})

