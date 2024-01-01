// Fonctions de gestion du panier de commandes via le localStorage

// Fonction de sauvegarde du panier dans le localStorage 
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart))
}

// Fonction de récupération du panier
function getCart() {
    let cart = localStorage.getItem("cart")
    if (cart == null) {
        return []
    } else {
        return JSON.parse(cart)
    }
}

// Fonction d'ajout au panier
function addToCart(product) {
    let cart = getCart()

    // Recherche pour savoir si le produit existe déja dans le tableau d'objets
    let findProduct = cart.find(e => e.name == product.name)

    // Condition : Si on trouve un produit éxistant, on ajoute la quantité du produit passé en paramétre
    // à la quantité du produit trouvé, sinon, on se contente de le push dans le tableau
    if (findProduct != undefined) {
        findProduct.quantity += product.quantity
        findProduct.total = findProduct.price * findProduct.quantity
    } else {
        product.total = product.price * product.quantity
        cart.push(product)
    }
    saveCart(cart)
}

// Fonction de suppression d'un élément du panier
function removeFromCart(product) {
    let cart = getCart()

    // Filter renvoie un nouveau tableau composé des valeurs du tableau passé en paramétre, et rempli ce tableau
    // avec les valeurs qui on passés la condition de la fonction callback, donc si l'on veut exclure
    // une valeur, on teste dans cette fonction lorsque un élément DIFFERE d'un élément présent
    cart = cart.filter(e => e.name != product.name)
    saveCart(cart)
}

// Fonction de mise à jour de la quantité du produit
function updateProductQte(product, quantity) {
    let cart = getCart()

    // Recherche du produit
    let findProduct = cart.find(e => e.name == product.name)

    if (findProduct != undefined) {
        findProduct.quantity += quantity
        findProduct.total = findProduct.price * findProduct.quantity
        if (findProduct.quantity < 0) {
            removeFromCart(product)
        }
    } else {
        console.log("Produit non trouvé")
    }
    saveCart(cart)
}

export { saveCart, getCart, addToCart, removeFromCart, updateProductQte }