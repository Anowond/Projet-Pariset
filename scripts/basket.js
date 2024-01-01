import getSession from "./getSession.js";
import { updateProductQte, removeFromCart, getCart } from "./cart.js";

// Récupération de la séssion utilisateur stockée dans le sessionStorage (si elle existe)
getSession()

// Récupération des éléments HTML
let basketSection = document.querySelector(".basket")

// Calcul du total
let total = 0
let divTotal = document.createElement("h2")

// Ajout du panier dans la section récupérée depuis la localStorage

// Récupération du panier
let basket = getCart()

// Itération et création des éléments HTML pour afficher les informations récupérées depuis le panier
basket.map(e => {

    // Div d'affichage des éléments
    let productDiv = document.createElement("div")
    productDiv.classList.add("productDiv")
    productDiv.textContent = `${e.name} x ${e.quantity} = ${e.total} €`
    basketSection.appendChild(productDiv)

    // Création de l'input de modification de la quantité
    let inputBasket = document.createElement("input")
    inputBasket.type = "number"
    inputBasket.value = "0"
    inputBasket.classList.add("inputBasket")
    productDiv.appendChild(inputBasket)

    // Création d'un bouton de validation de la quantité
    let validateQte = document.createElement("img")
    validateQte.src = "../img/ok-marque.png"
    validateQte.classList.add("valideQte")
    productDiv.appendChild(validateQte)


    // Création d'un bouton de suppression du produit
    let removeBtn = document.createElement("img")
    removeBtn.src = "../img/poubelle-de-recyclage.png"
    removeBtn.classList.add("removeBtn")
    productDiv.appendChild(removeBtn)

    // Incrémentation du total
    total += e.total

    // Ecouteur d'événement sur le bouton de validation de modification de la quantité
    validateQte.addEventListener("click", () => {
        updateProductQte(e, Number(inputBasket.value))
        location.reload()
    })

    // Ecouteur d'événement sur le bouton de suppression du produit
    removeBtn.addEventListener("click", () => {
        removeFromCart(e)
        location.reload()
    })
})

// Ajout du total à la page
if (total != 0) {
    divTotal.textContent = `Total à régler : ${total} €`
} else {
    divTotal.textContent = "Votre panier est vide ! Rendez-vous dans la boutique pour faire vos achats !"
}
basketSection.appendChild(divTotal)
