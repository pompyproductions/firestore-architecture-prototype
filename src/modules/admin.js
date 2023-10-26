import "../sass/styles.scss";
import "../modules/resize";

import app from "./firebase/app";
import firestore from "./firebase/firestore";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { newListItem } from "./adminProjectList";

const auth = getAuth(app);

const logIn = () => {
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
}
const logOut = () => {
  if (auth.currentUser) signOut(auth);
}

document.addEventListener("keydown", e => {
  if (!auth.currentUser && e.key === "Enter") {
    logIn()
  }
})

onAuthStateChanged(auth, user => {
  if (user) {
    document.querySelector("#logged-in").classList.remove("hidden")
    document.querySelector("#logged-out").classList.add("hidden")
  } else {
    document.querySelector("#logged-in").classList.add("hidden")
    document.querySelector("#logged-out").classList.remove("hidden")
  }
})

document.getElementById("login-button").addEventListener("click", logIn)
document.getElementById("logout-button").addEventListener("click", logOut)

const parent = document.getElementById("project-list");
const projects = await firestore.getAllProjects();

projects.forEach(data => {
  parent.append(newListItem(data));
})

