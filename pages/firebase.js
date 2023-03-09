import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC8xZHU_-jM-F22bUNsgaxoTPuNqQ4BoAQ",
  authDomain: "event-app-dd06a.firebaseapp.com",
  projectId: "event-app-dd06a",
  storageBucket: "event-app-dd06a.appspot.com",
  messagingSenderId: "900405376318",
  appId: "1:900405376318:web:f9298028479f66b166e86f"
};
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export {createUserWithEmailAndPassword, signInWithEmailAndPassword, collection, addDoc, doc, getDocs}