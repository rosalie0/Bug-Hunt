import React from "react";
import Leaderboard from "./Leaderboard";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Initialize project using json generated from project at firebase.google.com
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ8fZqS0J2UjtV0VdSo66BfCx_P8G44BI",
  authDomain: "bug-hunt-54ba1.firebaseapp.com",
  projectId: "bug-hunt-54ba1",
  storageBucket: "bug-hunt-54ba1.appspot.com",
  messagingSenderId: "68183399093",
  appId: "1:68183399093:web:205a75bebdbc6778623cfc",
  measurementId: "G-Y1G07GMQ1N",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Prompt the user to login in with google account
function FirebaseStuff() {
  return <Leaderboard db={db} />;
}

export default FirebaseStuff;
