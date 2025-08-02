import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function getProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch(error) {
    console.error(`Error obteniendo productos: ${error}`)
    return []
  }
}

