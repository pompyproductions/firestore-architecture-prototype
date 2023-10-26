import app from "./app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth(app);

const logIn = (email, password) => {
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

export default { logIn, logOut}