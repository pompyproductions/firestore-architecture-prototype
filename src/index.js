import "./sass/styles.scss";
import "./modules/resize";

import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebaseConfig";

console.log(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);