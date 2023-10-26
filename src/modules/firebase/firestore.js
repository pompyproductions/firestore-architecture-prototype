import app from "./app";
import { getFirestore, collection, doc, getDocs } from "firebase/firestore";

const db = getFirestore(app);

async function getAllProjects() {
  const querySnapshot = await getDocs(collection(db, "projects"));
  let arr = [];
  querySnapshot.forEach(async (entry) => {
    arr.push(entry.data());
    // const url = await getDownloadURL(ref(storage, entry.data().thumbnail));
    // document
    //   .querySelector("#project-thumbnails")
    //   .appendChild(createThumbnail(url));
    // console.log(url);
  });
  return arr;
}

export default {
  getAllProjects
}