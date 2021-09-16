import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import {
  getFirestore,
  getDocFromServer,
  doc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCx97KTUL5rjk-6UJBXWb6VszqQOuHl5jQ",
  authDomain: "react-ecommerce-app-sa.firebaseapp.com",
  projectId: "react-ecommerce-app-sa",
  storageBucket: "react-ecommerce-app-sa.appspot.com",
  messagingSenderId: "177376415188",
  appId: "1:177376415188:web:3854f46bb23c84e4f7da41",
  measurementId: "G-QY2F1DRQHX",
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);
export const firebaseFirestore = getFirestore(firebaseApp);

export const signInWithGoogle = async () => {
  try {
    const { user } = await signInWithPopup(firebaseAuth, provider);
    await createUserProfileDocument(user);
  } catch (error) {
    console.log("Error signing up with Google: ", error.message);
  }
};

export const signUpWithEmailAndPassword = async (
  displayName,
  email,
  password
) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    await createUserProfileDocument(user, { displayName });
  } catch (error) {
    console.log("Error signing up with email and password: ", error.message);
  }
};

export const loginWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(firebaseAuth, email, password);
  } catch (error) {
    console.log("Error signin in with email and password: ", error.message);
  }
};

const createUserProfileDocument = async (userAuth, additionalData) => {
  const docReference = doc(firebaseFirestore, "users", userAuth.uid);
  var user;

  if (!userAuth) {
    return;
  }

  try {
    user = await getDocFromServer(docReference);
  } catch (error) {
    console.log("Error fetching the user: ", error.message);
  }

  if (!user.exists()) {
    const { displayName, email } = userAuth;
    const userData = {
      displayName: displayName,
      email: email,
      createdAt: new Date(),
      ...additionalData,
    };

    try {
      return await setDoc(docReference, userData);
    } catch (error) {
      console.log("Error creating user: ", error.message);
    }
  }
};