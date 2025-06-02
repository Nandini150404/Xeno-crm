// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzHOAR-Z0WCZpyP0og1Be7odtf2cVwaE8",
  authDomain: "xeno-crm-66fe6.firebaseapp.com",
  projectId: "xeno-crm-66fe6",
  storageBucket: "xeno-crm-66fe6.appspot.com", // ✅ FIXED
  messagingSenderId: "128179578692",
  appId: "1:128179578692:web:47a7fe45bfa89b6957d911",
  measurementId: "G-TT8V9PWP0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
