// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // Kept Version 1 
  // apiKey: "AIzaSyCIMx3N4kRgRi6ecJHyYoEc3pWt456dccc",
  // authDomain: "kept-69074.firebaseapp.com",
  // projectId: "kept-69074",
  // storageBucket: "kept-69074.appspot.com",
  // messagingSenderId: "625486389655",
  // appId: "1:625486389655:web:575bc87d1a3a6a7db4a4d2",
  // measurementId: "G-D0Z34JF26M"


  // Kept Version 2
  apiKey: "AIzaSyAEivWjQaAssRdXTQan-smHKZ3_Y3NeZkU",
  authDomain: "keptnew-ecdc1.firebaseapp.com",
  projectId: "keptnew-ecdc1",
  storageBucket: "keptnew-ecdc1.appspot.com",
  messagingSenderId: "895744664326",
  appId: "1:895744664326:web:fb53528ed5dbf0160a3487"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);