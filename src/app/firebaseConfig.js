// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAxxXwB1TgieFuA_QnTUeIMoL6kqUhFEY",
  authDomain: "level-3-project-44445.firebaseapp.com",
  projectId: "level-3-project-44445",
  storageBucket: "level-3-project-44445.appspot.com",
  messagingSenderId: "670405490312",
  appId: "1:670405490312:web:c8959012b89162b2ed113d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
