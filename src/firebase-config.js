// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIMx3N4kRgRi6ecJHyYoEc3pWt456dccc",
  authDomain: "kept-69074.firebaseapp.com",
  projectId: "kept-69074",
  storageBucket: "kept-69074.appspot.com",
  messagingSenderId: "625486389655",
  appId: "1:625486389655:web:575bc87d1a3a6a7db4a4d2",
  measurementId: "G-D0Z34JF26M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);