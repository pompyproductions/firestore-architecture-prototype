import "./sass/styles.scss";
import "./modules/resize";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import firebaseConfig from "./config/firebaseConfig";
import { createThumbnail } from "./modules/projectLinks";

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const querySnapshot = await getDocs(collection(db, "projects"));
querySnapshot.forEach(async entry => {
  // console.log(entry.data().thumbnail);
  const url = await getDownloadURL(ref(storage, entry.data().thumbnail));
  document.querySelector("#project-thumbnails").appendChild(createThumbnail(url));
  console.log(url);
})