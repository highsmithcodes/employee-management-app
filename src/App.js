import { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Common/Form';
import Home from './Pages/Home';
import LandingPageNoLogin from './Pages/LandingPageNoLogin';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { app } from './firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DepartmentBody from './Components/DepartmentBody';
import { collection, addDoc, getDocs, doc, setDoc, where, query, onSnapshot } from "firebase/firestore"; 
import { db } from "./firebase-config";
import { useParams } from "react-router-dom";
import CreatePost from './Components/Common/CreatePost';
import PostList from './Components/PostList';
import Nav from './Components/Common/Nav';
import NewSignup from './Pages/NewSignup';
import FormRegister from './Components/Common/FormRegister';


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [postsList, setPostsList] = useState([]);
  const [ postInfo, setPostInfo] = useState([{}]);

  let navigate = useNavigate();
  const auth = getAuth();

  const handleAction = (id) => {
    const authentication = getAuth();

    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          console.log(error.code)
          if (error.code === 'auth/wrong-password') {
            toast.error('Please check the Password');
          }
          if (error.code === 'auth/user-not-found') {
            toast.error('Please check the Email');
          }
        })
    }

    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/introduction')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use');
          }
        })
    }
  }

  const publishUser = async(data) => {
      const user = auth.currentUser;
      const uid = user.uid;
    
      try {
        const docRef = await addDoc(collection(db, "users"), {
          id: uid,
          fullName: fullName,
          company: companyName,
        });
        const companyRef = await addDoc(collection(db, "companies"), {
          ...data,
          companyName: companyName,
          accountAdminId: uid,
        });
        navigate('/home');
       
        console.log("Document written with ID: ", docRef.id);
        console.log("Document written with ID: ", companyRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }

  // const departmentsRef = collection(db, "departments");
  // const getDepartments = async () => {
  //     const data = await getDocs(departmentsRef)
  //     try {
  //         setDepartmentList(
  //             data.docs.map((doc) => ({...doc.data(), id: doc.id}))
  //         );
  //     } catch(err){
  //         console.log(err)
  //     }
  // }

  // const postsRef = collection(db, "posts");
  // const getPosts = async () => {
  //     const data = await getDocs(postsRef)
  //     try {
  //         setPostsList(
  //             data.docs.map((doc) => ({...doc.data(), id: doc.id}))
  //         );
  //     } catch(err){
  //         console.log(err)
  //     }
  // }



  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    // getDepartments();
  }, [])

  return (
    <div className="App">
      <>
        <Nav />
        <Routes>
          <Route 
            path="/"
            element={<LandingPageNoLogin />}
          />
          <Route
            path='/login'
            element={
              <Form
                title="Login"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(1)}
              />}
          />
          <Route
            path='/register'
            element={
              <Form
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(2)}
              />}
          />

          <Route 
            path="/introduction" 
            element={
              <NewSignup 
                setFullName={setFullName}
                setCompanyName={setCompanyName}
                handleAction={() => publishUser()}
              />
            } 
          />

          <Route path='/home' element={ <Home />}/>
          
          {/* {departmentList?.map((post) => (
              // <Post post={post}/>
              <Route path={`/departments/${post.id}`} element={<DepartmentBody post={post}  />} />
          ))}

          {postsList?.map((post) => (
              // <Post post={post}/>
              <Route path={`/post/${post.id}`} element={<PostList post={post}  />} />
          ))} */}


          <Route 
            path="/create-post" 
            element={
              <CreatePost />
            } 
          />


        </Routes>
      </>
    </div>
  );
}

export default App;