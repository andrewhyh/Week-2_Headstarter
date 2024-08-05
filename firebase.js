// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb6zlLReAJRYcdEdfxezUxldlpZqq_rAU",
  authDomain: "inventory-management-ee5c2.firebaseapp.com",
  projectId: "inventory-management-ee5c2",
  storageBucket: "inventory-management-ee5c2.appspot.com",
  messagingSenderId: "648689114913",
  appId: "1:648689114913:web:71ad163a64d28c72ede860",
  measurementId: "G-JZP6EXMZ2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore }