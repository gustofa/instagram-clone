import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
//import firebase from "firebase/app";
//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
//import { getAuth } from "firebase/auth";
//import { getStorage } from "firebase/storage";
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
//con error object(...) is not a function
//const firebaseApp = firebase.initializeApp(firebaseConfig);
//const db = getFirestore(firebaseApp);
//const auth = getAuth(firebaseApp);
//const storage = getStorage(firebaseApp);
// eslint-disable-next-line
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
//const db = getFirestore(app);
//const auth = getAuth(app);

const storage = firebase.storage(); //getStorage(app);

//const storageRef = storage.ref()
//console.log(firebaseApp);

export { db, auth, storage, firebase }; //db, auth,, storage
