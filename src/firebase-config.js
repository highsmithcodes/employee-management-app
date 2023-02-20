import { getAuth} from 'firebase/auth'
import { collection, addDoc, getDocs, doc, setDoc, where, query, onSnapshot } from "firebase/firestore"; 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId 

  apiKey: "AIzaSyCR9VXkthCRDPYwVyVWXnd84rKYQgtmOzE",
  authDomain: "kept-4a470.firebaseapp.com",
  projectId: "kept-4a470",
  storageBucket: "kept-4a470.appspot.com",
  messagingSenderId: "700476479924",
  appId: "1:700476479924:web:d92a36e97139201870bae1"
};

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
    });
    return data;
  } else{
    console.log("problem with refresh")
  };

}


export {getUsers};