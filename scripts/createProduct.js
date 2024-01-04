function createProduct(products) {

    // Pour chaque produit présent dans le fichier products fourni en argument, créer les éléments HTML correspondants
    products.map((product, index) => {

        // Récupération de la grille
        let grid = document.querySelector(".grid")

        // Le conteneur principal du produit
        let mainDiv = document.createElement("div")
        mainDiv.id = "mainDiv" + index
        mainDiv.classList.add("mainDiv")
        grid.appendChild(mainDiv)

        // L'encadré de gauche qui contient l'image et la description
        let leftDiv = document.createElement("div")
        leftDiv.id = "leftDiv" + index
        leftDiv.classList.add("leftDiv")
        mainDiv.appendChild(leftDiv)

        // L'image
        let img = document.createElement("img")
        img.id = "img" + index
        img.src = product.img
        leftDiv.appendChild(img)

        // La description
        let desc = document.createElement("p")
        desc.id = "desc" + index
        desc.textContent = product.desc
        leftDiv.appendChild(desc)

        // L'encadré de droite qui contient le nom, le prix, l'input de quantité et le bouton de validation
        let rightDiv = document.createElement("div")
        rightDiv.id = "rightDiv" + index
        rightDiv.classList.add("rightDiv")
        mainDiv.appendChild(rightDiv)

        // Le nom
        let name = document.createElement("p")
        name.id = "name" + index
        name.classList.add("name")
        name.textContent = product.name
        rightDiv.appendChild(name)

        // Le prix
        let price = document.createElement("div")
        price.id = "price" + index
        price.classList.add("price")
        price.textContent = `${product.price} €`
        rightDiv.appendChild(price)

        // L'input de type nombre
        let input = document.createElement("input")
        input.id = "input" + index
        input.classList.add("input")
        input.type = "number"
        input.value = "0"
        input.min = "0"
        rightDiv.appendChild(input)

        // Le bouton
        let button = document.createElement("button")
        button.id = "button" + index
        button.classList.add("button")
        button.textContent = "Ajouter"
        rightDiv.appendChild(button)

    })
}

export default createProduct