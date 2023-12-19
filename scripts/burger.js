/* Gestion du menu burger */

// Importation des liens 
let liens = document.querySelectorAll("nav li")

// Décomposition et ajout d'un écouteur d'événements pour que le menu se ferme au clic de l'un d'eux
liens.forEach(links => {
    links.addEventListener("click", () => {
        nav.classList.remove("active")
    })
});

// Ajout dynamique de la classe active sur la nav bar au clic sur le bouton de menu
icons.addEventListener("click", () => {
    nav.classList.toggle("active")
})

