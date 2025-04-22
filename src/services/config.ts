import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env!.VITE_FIREBASE_API_KEY,
  authDomain: "tienda-gaming-7b9ac.firebaseapp.com",
  projectId: "tienda-gaming-7b9ac",
  storageBucket: "tienda-gaming-7b9ac.appspot.com",
  messagingSenderId: "118670919837",
  appId: "1:118670919837:web:8ba5996f0ac948684e2c74"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
