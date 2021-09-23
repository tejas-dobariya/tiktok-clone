import firebase from "firebase";
import { initializeApp } from "firebase";
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjpGSpGrfrL0mYK1mSZHKKwqN0GfIAa_A",
  authDomain: "tiktok-clone-d375f.firebaseapp.com",
  projectId: "tiktok-clone-d375f",
  storageBucket: "tiktok-clone-d375f.appspot.com",
  messagingSenderId: "304209909585",
  appId: "1:304209909585:web:d52ad917e9e8e21af1e570",
  measurementId: "G-WJRNPYYZFY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
 
  