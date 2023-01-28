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

// CONFIG IS A SEPERATE FILE

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