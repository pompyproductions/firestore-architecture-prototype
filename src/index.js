import "./sass/styles.scss";
import "./modules/resize";

import firebaseApp from "./modules/firebase/app";
import firestore from "./modules/firebase/firestore";

import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { createThumbnail } from "./modules/projectLinks";

const storage = getStorage(firebaseApp);

const projects = await firestore.getAllProjects();
projects.forEach(async entry => {
  const url = await getDownloadURL(ref(storage, entry.thumbnail));
  document.querySelector("#project-thumbnails").appendChild(createThumbnail(url));
})