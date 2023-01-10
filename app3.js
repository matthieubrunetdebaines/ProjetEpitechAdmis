const menuHamburger = document.querySelector(".menu_burger");
const navLinks = document.querySelector(".nav_links");

menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle("menu_mobile")
})



function afficher() {
    event.preventDefault();
    const fermerLaCarte = document.querySelector(".icon_takeoff");
    const laCarte = document.querySelector(".iframe_map");
    const afficherLaCarte = document.querySelector(".show_map");
    laCarte.setAttribute("style","visibility:visible");
    afficherLaCarte.setAttribute("style","visibility:hidden");
    fermerLaCarte.setAttribute("style","visibility:visible");
}


// Au clic sur le bouton de fermeture => la iframe et le bouton disparaisse => afficher apparait
function decollage(){
    event.preventDefault();
    const fermerLaCarte = document.querySelector(".icon_takeoff");
    const laCarte = document.querySelector(".iframe_map");
    const afficherLaCarte = document.querySelector(".show_map");
    fermerLaCarte.setAttribute("style","margin-top:-100%");
    laCarte.setAttribute("style","visibility:hidden");
    afficherLaCarte.setAttribute("style","visibility:visible");
    alert("Bon vol voyageur :)");
} 

// function verifDecollage(){
//     event.preventDefault();
//     const fermerLaCarte = document.querySelector(".icon_takeoff");
//     const laCarte = document.querySelector(".iframe_map");
//     const afficherLaCarte = document.querySelector(".show_map");
//     if(laCarte.hasAttributes("style","visibility:hidden") && afficherLaCarte.hasAttributes("style","visibility:visible")) {
//         fermerLaCarte.setAttribute("style","visibility:visible");
//     } else {
//         fermerLaCarte.setAttribute("style","visibility:hidden");
//     }
// }

// function doubleDecollage(){
//     decollage() + verifDecollage();
// }