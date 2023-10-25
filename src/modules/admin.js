import "../sass/styles.scss";
import "../modules/resize";

import firebaseConfig from "../config/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, doc, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { newListItem } from "./adminProjectList";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

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

const querySnapshot = await getDocs(collection(db, "projects"));

const parent = document.getElementById("project-list");
querySnapshot.forEach(async entry => {
  const data = entry.data();
  console.log(newListItem(data));
  parent.append(newListItem(data));
  // const url = await getDownloadURL(ref(storage, entry.data().thumbnail));
  // document.querySelector("#project-thumbnails").appendChild(createThumbnail(url));
  // console.log(url);
})