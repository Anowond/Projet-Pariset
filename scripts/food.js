import getSession from "./getSession.js";
import products from "./products.js";
import createProduct from "./createProduct.js";
import { addToCart } from "./cart.js";

// Récupération de la séssion utilisateur stockée dans le sessionStorage (si elle existe)
getSession()

// Appel de la fonction createProduct sur l'index voulu du document JSON
createProduct(products[1])

// récupération des boutons et des quantité
let buttons = document.querySelectorAll(".grid button")
let inputs = document.querySelectorAll(".grid input")
let names = document.querySelectorAll(".name")
let prices = document.querySelectorAll(".price")

// Définition d'un objet de stockage des données
let data = {}

// Décompostion des différences noeuds HTML dans l'objet
// via la création d'un nouvel objet dont l'id sera l'élément HTML parent
buttons.forEach(button => {
    let id = button.parentElement.id
    data[id] = { button: button, name: null, price: null, quantity: null, total: null }
})

inputs.forEach(quantity => {
    let id = quantity.parentElement.id
    if (data[id]) {
        data[id].quantity = Number(quantity.value)
    }
})

names.forEach(name => {
    let id = name.parentElement.id
    if (data[id]) {
        data[id].name = name.textContent
    }
})

prices.forEach(price => {
    let id = price.parentElement.id
    if (data[id]) {
        data[id].price = Number(price.textContent.replace(" €", ""))
    }
})

console.log(data)

// Décomposition de l'objet data
for (let key in data) {

    // Assignation de l'objet produit dans une variable product
    let product = data[key]

    // Ajout de l'écouteur d'événements sur les boutons
    product.button.addEventListener("click", () => {
        console.log("ok !")
    })

}