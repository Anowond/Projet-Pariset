import getSession from "./getSession.js"
import { addToCart, getCart, removeFromCart } from "./cart.js"

window.getCart = getCart
window.addToCart = addToCart
window.removeFromCart = removeFromCart

// Récupération de la séssion utilisateur stockée dans le sessionStorage (si elle existe)
getSession()

// Récupération des éléments
let buttons = document.querySelectorAll(".grid button")
let prices = document.querySelectorAll(".btnDiv p")
let quantities = document.querySelectorAll(".grid input")
let names = document.querySelectorAll(".productName")

// Définition d'un objet de stockage des informations
let object = {}

// Remplissage de l'objet via les informations contenus dans les noeuds récupérés du DOM
buttons.forEach(button => {
    let id = button.parentElement.id
    object[id] = { button: button, name: null, price: null, quantity: null, total: null }
})

names.forEach(name => {
    let id = name.parentElement.id
    if (object[id]) {
        object[id].name = name.textContent
    }
})

prices.forEach(price => {
    let id = price.parentElement.id
    if (object[id]) {
        object[id].price = Number(price.textContent.replace(" €", ""))
    }
})

quantities.forEach(quantity => {
    let id = quantity.parentElement.id
    if (object[id]) {
        object[id].quantity = Number(quantity.value)
    }

    // Ajout d'un écouteur d'événements pour mettre à jour la quantité 
    // au sein de l'objet au clic sur les fléches
    quantity.addEventListener("change", () => {
        object[id].quantity = Number(quantity.value)
    })
})

console.log(object)

// Itération de l'objet et ajout de l'écouteur d'événements sur les boutons
for (let key in object) {
    // Attribution de l'objet à une variable
    let objet = object[key]
    // Test pour voir si tout le monde est la
    if (objet.button && objet.name && objet.price && objet.quantity) {

        objet.button.addEventListener("click", () => {
            addToCart(objet)
            location.reload()
        })
    }
}

