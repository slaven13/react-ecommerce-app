import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCx97KTUL5rjk-6UJBXWb6VszqQOuHl5jQ",
  authDomain: "react-ecommerce-app-sa.firebaseapp.com",
  projectId: "react-ecommerce-app-sa",
  storageBucket: "react-ecommerce-app-sa.appspot.com",
  messagingSenderId: "177376415188",
  appId: "1:177376415188:web:3854f46bb23c84e4f7da41",
  measurementId: "G-QY2F1DRQHX"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth();
export const firebaseStorage = getStorage(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"});
export const signInWithGoogle = () => signInWithPopup(firebaseAuth, provider);
