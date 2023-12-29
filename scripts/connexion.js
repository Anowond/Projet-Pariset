import { ConnexionUtilisateur, RecupererCollection, updateUser } from "./fonctionsFirebase.js"
import getSession from "./getSession.js"

// Récupération de la séssion utilisateur stockée dans le sessionStorage (si elle existe)
getSession()

let loginInputMail = document.getElementById("loginInputMail")
let loginInputPassword = document.getElementById("loginInputPassword")
let loginButton = document.getElementById("loginButton")


loginButton.addEventListener("click", async (e) => {

    // Prévention du rechargement de la page
    e.preventDefault()

    // Appel des fonctions de connexion utilisateur et récupération de la collection de la BDD
    const userAuth = await ConnexionUtilisateur(loginInputMail.value, loginInputPassword.value)
    const users = await RecupererCollection()

    // Si la réponse de laconnxeion utilisateur n'est pas null
    if (userAuth) {

        // Décomposition du tableau réponse de la collectiond de la BDD et recherche d'une correspondance entre l'email stocké dans la BDD
        // et l'email contenu dans l'objet de l'utilsiateur connecté
        users.forEach(async usrs => {
            if (userAuth.user.email === usrs.data.mail) {

                // Si il y a correspondace, mise à jour du champ DisplayName via la fonction updateUser
                // et mise en stockage de session du navigateur pour récuperation ultérieure
                await updateUser(usrs.data.name)
                sessionStorage.setItem("userCredentials", JSON.stringify(userAuth))

            }
        })

    } else {
        alert("Utilisateur ou mot de passe inconnu de la base de données")
    }

    // Remise à zéro des champs
    loginInputMail.value = ""
    loginInputPassword.value = ""
})

