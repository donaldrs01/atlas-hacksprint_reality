console.log('JS loaded in and Firestore intialized!')
import { initializeApp } from "firebase/app";
import {
  getFirestore, collection, query, where, getDocs,
  getDoc
} from 'firebase/firestore';

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

//init Firestore database
const db = getFirestore(firebaseApp)

/*
async function fetchNewsArticles() {
  try {
    //Query for fake news articles
    const qFakenews = query(collection(db, 'headlines'), where('real_or_fake', '==', false));
    const qFakeNewsSnap = await getDocs (qFakenews);
    qFakeNewsSnap.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
  });
  
    //Query for real news articles
    const qRealnews = query(collection(db, 'headlines'), where('real_or_fake', '==', true));
    const qRealNewsSnap = await getDocs (qRealnews);
    qRealNewsSnap.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });
  } catch (error) {
    console.error("Error retrieving headline:", error);
}
}

// Call function to fetch headlines
fetchNewsArticles();
*/