import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAcVregUuACFjeA3FpMmBN9h2hU5L0vCcI",
  authDomain: "cheval-marche.firebaseapp.com",
  projectId: "cheval-marche",
  storageBucket: "cheval-marche.appspot.com",
  messagingSenderId: "651702011402",
  appId: "1:651702011402:web:ae450d16b8b9a6884701f3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);