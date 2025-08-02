
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDujxzvwMwW2GRDofvHlT1N0pkMmGLcTck",
  authDomain: "tpfinal-98489.firebaseapp.com",
  projectId: "tpfinal-98489",
  storageBucket: "tpfinal-98489.firebasestorage.app",
  messagingSenderId: "196707255836",
  appId: "1:196707255836:web:ab3b28f0b752ae34abc1d9",
  measurementId: "G-PCZBNJXMGC"
};


const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)
