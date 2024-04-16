console.log('JS loaded in!')

/*
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import {
  getFirestore, collection, query, where, getDocs,
  getDoc
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
*/

import { initializeApp } from "firebase/app";
import {
  getFirestore, collection, query, where, getDocs,
  getDoc
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxKUXPlej5myONnx6nah0U5Ffk794adCg",
    authDomain: "reality-check-17ece.firebaseapp.com",
    projectId: "reality-check-17ece",
    storageBucket: "reality-check-17ece.appspot.com",
    messagingSenderId: "693584044894",
    appId: "1:693584044894:web:ceda2d0bc31213b4eae5cf",
    measurementId: "G-HGVPY1BF6R"
  };

//init firebase app with project settings
const firebaseApp = initializeApp(firebaseConfig);
console.log('Firebase initialized!')
//init Firestore database
const db = getFirestore(firebaseApp)
console.log('Database initialized!')

export { db };