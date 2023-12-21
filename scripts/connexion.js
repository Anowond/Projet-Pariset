import { ConnexionUtilisateur } from "./fonctionsFirebase.js"

let loginInputMail = document.getElementById("loginInputMail")
let loginInputPassword = document.getElementById("loginInputPassword")
let loginButton = document.getElementById("loginButton")

loginButton.addEventListener("click", async (e) => {

    // Prévention du rechargement de la page
    e.preventDefault()

    // Appel de la fonction de connexion utilisateur
    if (await ConnexionUtilisateur(loginInputMail.value, loginInputPassword.value)) {
        console.log("Mettre ici une redirection")
    }

})