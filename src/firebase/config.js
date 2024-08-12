import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArBUT-DNyBaKPDqNIDiyeocR0RVUlyIBg",
  authDomain: "proyectocoder-6a0eb.firebaseapp.com",
  projectId: "proyectocoder-6a0eb",
  storageBucket: "proyectocoder-6a0eb.appspot.com",
  messagingSenderId: "1775823539",
  appId: "1:1775823539:web:d2cc765955a86c6272dec6",
  measurementId: "G-F30JT1R19G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
