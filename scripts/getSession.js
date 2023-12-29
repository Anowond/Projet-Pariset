// Fonction de récupération de la séssion utilisateur stockée dans le sessionStorage (si elle existe)

function getSession() {

    let divUser = document.getElementById("divUser")
    let divUserCredentials = document.createElement("div")
    let divUserMessage = document.createElement("div")

    if (sessionStorage["userCredentials"]) {
        let userCredentials = JSON.parse(sessionStorage.getItem("userCredentials"))
        divUserCredentials.textContent = userCredentials.user.displayName
        divUserMessage.textContent = "Bienvenue"
        divUser.appendChild(divUserMessage)
        divUser.appendChild(divUserCredentials)
    }

}

export default getSession