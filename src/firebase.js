import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuAlvur6k5jAAv0Gx15lPS0MGHs6IcZCA",
  authDomain: "pictures-772d8.firebaseapp.com",
  projectId: "pictures-772d8",
  storageBucket: "pictures-772d8.appspot.com",
  messagingSenderId: "396590414971",
  appId: "1:396590414971:web:0879dca53922082193b6de",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
