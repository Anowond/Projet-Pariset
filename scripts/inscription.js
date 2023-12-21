import { AjouterUnUtilisateur, RecupererCollection, AjoutAuthUser } from "./fonctionsFirebase.js"

// Importation des éléments HTML
let registerInputName = document.getElementById("registerInputName")
let registerInputMail = document.getElementById("registerInputMail")
let registerInputPassword = document.getElementById("registerInputPassword")
let registerButton = document.getElementById("registerButton")

// Ajout d'un utilisateur en base au clic sur le bouton "Envoyer"
registerButton.addEventListener("click", async (e) => {

    //Prévention du rechargement de la page
    e.preventDefault()

    // Test pour ne pas envoyer d'objets vides en BDD
    if (registerInputName.value.trim() !== "" || registerInputMail.value.trim() !== "" || registerInputPassword.value.trim() !== "") {

        //Appel de la fonction AjouterDocument() et AjoutAuthuser() avec comme paramétres les valeurs des inputs
        AjouterUnUtilisateur(registerInputName.value, registerInputMail.value, registerInputPassword.value)
        AjoutAuthUser(registerInputMail.value, registerInputPassword.value)

    } else {
        alert("Champs vides ! Remplissez tout les champs !")
    }

    //Remise à blanc des inputs
    registerInputName.value = ""
    registerInputMail.value = ""
    registerInputPassword.value = ""

})

