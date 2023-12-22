import { AjouterUnUtilisateur, RecupererCollection, AjoutAuthUser, ConnexionUtilisateur } from "./fonctionsFirebase.js"

// Importation des éléments HTML
let registerInputName = document.getElementById("registerInputName")
let registerInputMail = document.getElementById("registerInputMail")
let registerInputPassword = document.getElementById("registerInputPassword")
let registerButton = document.getElementById("registerButton")

// Ajout d'un utilisateur en base au clic sur le bouton "Envoyer"
registerButton.addEventListener("click", async (e) => {

    //Prévention du rechargement de la page
    e.preventDefault()

    //Expressions réguliéres pour tester la bonne saisie des champs email et mot de passe
    let nameRegExp = new RegExp("[a-zA-Z-\s]+")
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+")
    let passwordRegExp = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}:;<>,.?~_+=|-]).{8,32}$")

    // Test pour ne pas envoyer d'objets vides en BDD
    if (registerInputName.value.trim() !== "" || registerInputMail.value.trim() !== "" || registerInputPassword.value.trim() !== "") {

        // Contrôle de saisie sur les champs via des tests sur les expressions réguliéres définies en amont
        if (nameRegExp.test(registerInputName.value) && emailRegExp.test(registerInputMail.value) && passwordRegExp.test(registerInputPassword.value)) {

            // Tests pour vérifier si l'utilisateur éxiste déja en base avant de l'ajouter

            // Récupération de la collection users
            const users = await RecupererCollection()

            // Si le tableau de réponse est vide, alors l'utilisateur n'éxiste pas, et donc on le créé
            if (users.length === 0) {

                //Appel de la fonction AjouterDocument() et AjoutAuthUser() avec comme paramétres les valeurs des inputs
                AjouterUnUtilisateur(registerInputName.value, registerInputMail.value, registerInputPassword.value)
                AjoutAuthUser(registerInputMail.value, registerInputPassword.value)

                // Sinon, décomposer le tableau users et vérifier une éventuelle correspondance    
            } else {

                for (let usrs of users) {

                    if (registerInputName.value === usrs.data.name && registerInputMail.value === usrs.data.mail && registerInputPassword.value === usrs.data.password) {

                        alert("Utilisateur déja éxistant en base pour ce Nom / Mail / Mot de passe !")

                    } else {

                        //Appel de la fonction AjouterDocument() et AjoutAuthUser() avec comme paramétres les valeurs des inputs
                        AjouterUnUtilisateur(registerInputName.value, registerInputMail.value, registerInputPassword.value)
                        AjoutAuthUser(registerInputMail.value, registerInputPassword.value)

                    }

                };

            }


        } else {
            alert("Saisie incorrecte sur l'un des champs !")
        }

    } else {
        alert("Champs vides ! Remplissez tout les champs !")
    }

    //Remise à blanc des inputs
    registerInputName.value = ""
    registerInputMail.value = ""
    registerInputPassword.value = ""

})

