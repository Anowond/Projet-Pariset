// Affichage de l'utilisateur courant dans le header

// Récupération de la séssion utilisateur depuis le sessionStorage
let userCredentials = JSON.parse(sessionStorage.getItem("userCredentials"))

// Récupération et création des balises qui stockeront le nom de l'utilisateur
let divUser = document.getElementById("divUser")
let divUserCredentials = document.createElement("div")
let divUserMessage = document.createElement("div")
divUserMessage.textContent = "Bienvenue"

// Condition : Si la session n'est pas null, afficher le nom contenu dans la session
if (userCredentials !== null) {
    divUser.appendChild(divUserMessage)
    divUserCredentials.textContent = userCredentials.user.displayName
    divUser.appendChild(divUserCredentials)
} 