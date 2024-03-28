import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCgziTwXo29o1oZcYCOTK5Or2gKxDW6eyQ",
  authDomain: "fir-auth-cli-84e58.firebaseapp.com",
  projectId: "fir-auth-cli-84e58",
  storageBucket: "fir-auth-cli-84e58.appspot.com",
  messagingSenderId: "111543958849",
  appId: "1:111543958849:web:11e9e98f4b40ae167bb5c0",
  measurementId: "G-TBS70BY3D0",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions };
