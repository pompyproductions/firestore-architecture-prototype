import app from "./app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const storage = getStorage(app);

async function getURL(id) {
  return await getDownloadURL(ref(storage, id))
}

export default { getURL };