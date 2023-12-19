import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'



const firebaseConfig = {
    apiKey: "AIzaSyA7mCUTYn88w1PU63FywnIGlTZJguIfyP4",
    authDomain: "vetorhinodatabase.firebaseapp.com",
    projectId: "vetorhinodatabase",
    storageBucket: "vetorhinodatabase.appspot.com",
    messagingSenderId: "289419623490",
    appId: "1:289419623490:web:7f9a20b3aead4ebbc501db",
    measurementId: "G-929W1VFYPC"
};

//Initialize Firebase and FireStore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth()

// Ajouter unutilisateur en base FireStore
const AjouterUnUtilisateur = async (name, mail, password) => {

    try {
        const docRef = await addDoc(collection(db, "users"), {
            name: name,
            mail: mail,
            password: password,
            rank: "User"
        });
        console.log("Document créé avec l'ID : " + docRef.id)

    } catch (e) {
        console.error("Erreur lors de l'ajout du document : ", e)
    }
}

// Ajouter un utilisateur dans le Auth
const AjoutAuthUser = async (mail, password) => {

    createUserWithEmailAndPassword(auth, mail, password)
        .then((userCredentials) => {

            const user = userCredentials.user;
            console.log(user)

        })

        .catch((e) => {
            console.log(e)
        })

}

// Parcourir une collection
const RecupererCollection = async () => {

    const tableauDoc = [];

    try {
        const querySnapshot = await getDocs(collection(db, "users"));

        querySnapshot.forEach(docs => {
            tableauDoc.push(docs.id, docs.data())
        });
        //console.log(tableauDoc)

        return tableauDoc

    } catch (e) {
        console.error("Erreur : ", e)
    }
}

// Connexion d'un utilisateur
const ConnexionUtilisateur = async () => {



}

export {
    AjouterUnUtilisateur,
    RecupererCollection,
    AjoutAuthUser
}