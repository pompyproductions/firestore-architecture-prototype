import app from "./app";
import { getFirestore, collection, doc, getDocs } from "firebase/firestore";

const db = getFirestore(app);

async function getAllProjects() {
  const querySnapshot = await getDocs(collection(db, "projects"));
  let arr = [];
  querySnapshot.forEach(async (entry) => {
    arr.push(entry.data());
  });
  return arr;
}

export default {
  getAllProjects
}