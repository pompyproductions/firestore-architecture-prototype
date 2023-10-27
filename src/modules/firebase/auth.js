import app from "./app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth(app);

// consider putting this back in admin.js
onAuthStateChanged(auth, user => {
  console.log(user);
  if (user) {
    document.querySelector("#logged-in").classList.remove("hidden")
    document.querySelector("#logged-out").classList.add("hidden")
  } else {
    document.querySelector("#logged-in").classList.add("hidden")
    document.querySelector("#logged-out").classList.remove("hidden")
  }
})

const logIn = (email, password) => {
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

export default { logIn, logOut  }