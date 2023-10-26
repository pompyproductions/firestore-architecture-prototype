import "./sass/styles.scss";
import "./modules/resize";

import firestore from "./modules/firebase/firestore";
import storage from "./modules/firebase/storage";

import { createThumbnail } from "./modules/projectLinks";

const projects = await firestore.getAllProjects();
projects.forEach(async entry => {
  const url = await storage.getURL(entry.thumbnail);
  document.querySelector("#project-thumbnails").appendChild(createThumbnail(url));
})