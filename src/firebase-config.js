import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGL6gmuTiRAGop7PujDv5ME1bK1fwtl5M",
  authDomain: "hackersden-b94c7.firebaseapp.com",
  projectId: "hackersden-b94c7",
  storageBucket: "hackersden-b94c7.appspot.com",
  messagingSenderId: "561867348440",
  appId: "1:561867348440:web:e91e9a76c9421498c5baad"
};

const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

export const auth = getAuth(app);
export default db;
