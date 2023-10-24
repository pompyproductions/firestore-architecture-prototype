import "../sass/styles.scss";
import "../modules/resize";

import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../config/firebaseConfig";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, user => {
  if (user) {
    document.querySelector("#logged-in").classList.remove("hidden")
    document.querySelector("#logged-out").classList.add("hidden")
  } else {
    document.querySelector("#logged-in").classList.add("hidden")
    document.querySelector("#logged-out").classList.remove("hidden")
  }
})

document.getElementById("login-button").addEventListener("click", e => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
  .then(userCred => {
    const user = userCred.user;
    alert(`successfully logged in as: ${user}`);
  })
  .catch(err => {
    alert(err.message);
    console.log(`error code: ${err.code}`);
  })
})

document.getElementById("logout-button").addEventListener("click", e => {
  if (auth.currentUser) signOut(auth);
})