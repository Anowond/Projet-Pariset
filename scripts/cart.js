// Fonctions de gestion du panier de commandes via le localStorage

function addToCart(object) {
    localStorage.setItem("produit", JSON.stringify(object))
}


export { addToCart }