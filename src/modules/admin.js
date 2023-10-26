import "../sass/styles.scss";
import "../modules/resize";

import firestore from "./firebase/firestore";
import auth from "./firebase/auth";
import { newListItem } from "./adminProjectList";

document.addEventListener("keydown", e => {
  if (!auth.currentUser && e.key === "Enter") {
    auth.logIn(
      document.getElementById("login-email").value,
      document.getElementById("login-password").value
    )
  }
})

document.getElementById("login-button").addEventListener("click", () => {
  auth.logIn(
    document.getElementById("login-email").value,
    document.getElementById("login-password").value
  )
})
document.getElementById("logout-button").addEventListener("click", () => {
  auth.logOut()
})

const parent = document.getElementById("project-list");
const projects = await firestore.getAllProjects();

Object.keys(projects).forEach(id => {
  parent.append(newListItem(id, projects[id]));
})

