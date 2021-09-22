//import firebase from "firebase/compat/app";
//import "firebase/firestore";
//import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyBd-DBj5QtIC2TuQ2bZaLkmpvj2l72zxQM",
  authDomain: "instagram-clone-58c31.firebaseapp.com",
  projectId: "instagram-clone-58c31",
  storageBucket: "instagram-clone-58c31.appspot.com",
  messagingSenderId: "444079936563",
  appId: "1:444079936563:web:b66e7acda6e0e39044bf46",
  measurementId: "G-0K52G22KP2",
};

//firebase.initializeApp(firebaseConfig);
//const db = firebase.firestore();
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const auth = getAuth();
/* 
const storage = firebase.storage(); */

//const storage = firebaseApp.storage();

console.log(firebaseApp);

export { db, auth }; //, storage };
