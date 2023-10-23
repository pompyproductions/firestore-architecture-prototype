import "../sass/styles.scss";
import "../modules/resize";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../config/firebaseConfig";

const app = initializeApp("firebaseConfig");
const auth = getAuth(app);

signInWithEmailAndPassword(auth, email, password)
  .then(userCred => {
    const user = userCred.user
  })