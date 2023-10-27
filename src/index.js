import "./sass/styles.scss";
import "./modules/resize";

import firestore from "./modules/firebase/firestore";
import storage from "./modules/firebase/storage";

import { createThumbnail } from "./modules/projectLinks";

const parent = document.getElementById("project-thumbnails");
const projects = await firestore.getAllProjects();
Object.keys(projects).forEach(async id => {
  const url = await storage.getURL(projects[id].thumbnail);
  parent.append(createThumbnail(id, url));
})
