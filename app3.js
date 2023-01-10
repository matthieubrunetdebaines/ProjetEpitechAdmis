
function afficher() {
    event.preventDefault();
    const laCarte = document.querySelector(".iframe_map");
    const afficherLaCarte = document.querySelector(".show_map");
    laCarte.setAttribute("style","visibility:visible");
    afficherLaCarte.setAttribute("style","visibility:hidden");
}

function decollage(){
    event.preventDefault();
    const fermerLaCarte = document.querySelector(".icon_takeoff");
    const laCarte = document.querySelector(".iframe_map");
    const afficherLaCarte = document.querySelector(".show_map");
    fermerLaCarte.setAttribute("style","margin-top:-100%");
    laCarte.setAttribute("style","visibility:hidden");
    afficherLaCarte.setAttribute("style","visibility:visible");
}