import { getAuth} from 'firebase/auth'
import { collection, addDoc, getDocs, doc, setDoc, where, query, onSnapshot } from "firebase/firestore"; 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {firebaseConfig}  from './firebaseEnv'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   // Kept Version 1 
//   // apiKey: "AIzaSyCIMx3N4kRgRi6ecJHyYoEc3pWt456dccc",
//   // authDomain: "kept-69074.firebaseapp.com",
//   // projectId: "kept-69074",
//   // storageBucket: "kept-69074.appspot.com",
//   // messagingSenderId: "625486389655",
//   // appId: "1:625486389655:web:575bc87d1a3a6a7db4a4d2",
//   // measurementId: "G-D0Z34JF26M"


//   // Kept Version 2
//   // apiKey: "AIzaSyAEivWjQaAssRdXTQan-smHKZ3_Y3NeZkU",
//   // authDomain: "keptnew-ecdc1.firebaseapp.com",
//   // projectId: "keptnew-ecdc1",
//   // storageBucket: "keptnew-ecdc1.appspot.com",
//   // messagingSenderId: "895744664326",
//   // appId: "1:895744664326:web:fb53528ed5dbf0160a3487"

//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID 

// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
const auth = getAuth();


async function getUsers() {
  if(auth.currentUser){
    const uid = auth.currentUser.uid;
    const q = query(collection(db, "users"), where("id", "==", uid));
    const querrySnapshot = await getDocs(q);
    let data = [];
    querrySnapshot.forEach((doc) => {
      data = [...data, doc.data()];
      // console.log("User ki auth ka data ----> ", data);
    });
    return data;
  } else{
    console.log("problem with refresh")
  };
}


export {getUsers};