console.log('hey from src index.js')
import { initializeApp } from "firebase/app";
import {
  getFirestore, collection, query, where, getDocs,
  getDoc
} from 'firebase/firestore'

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
initializeApp(firebaseConfig)

//init services
const db = getFirestore()

//Query for fake news articles
const qFakenews = query(collection(db, 'headlines'), where('real_or_fake', '==', false));
const qFakenews_snap = await getDocs (qFakenews);
qFakenews_snap.forEach((doc) => {
  console.log(doc.id, ' => ', doc.data());
})

//Query for real news articles
const qRealnews = query(collection(db, 'headlines'), where('real_or_fake', '==', true));
const qRealnews_snap = await getDocs (qRealnews);
qRealnews_snap.forEach((doc) => {
  console.log(doc.id, ' => ', doc.data());
})


  .catch(err.message)
    console.log(err.message)