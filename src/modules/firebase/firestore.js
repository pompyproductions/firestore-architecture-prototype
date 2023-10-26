import app from "./app";
import { getFirestore, collection, doc, getDocs } from "firebase/firestore";

const db = getFirestore(app);

async function getAllProjects() {
  const querySnapshot = await getDocs(collection(db, "projects"));
  let projects = {};
  querySnapshot.forEach(async (entry) => {
    projects[entry.id] = entry.data()
  });
  console.log(projects)
  return projects;
}

export default {
  getAllProjects
}