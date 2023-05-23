import { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Common/Form';
import Home from './Pages/Home';
import SinglePostPage from './Components/SinglePostPage';
import LandingPageNoLogin from './Pages/LandingPageNoLogin';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { collection, addDoc, query, where, getDocs} from "firebase/firestore"; 
import { db } from "./firebase-config";
import CreatePost from './Components/Common/CreatePost';
import Nav from './Components/Common/Nav';
import NewSignup from './Pages/NewSignup';
import PostList from './Components/PostList';
import UserPostList from './Components/UserPostList';
// add in context


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [postsList, setPostsList] = useState([]);
  const [ postInfo, setPostInfo] = useState([{}]);
  const [title, setPostTitle] = useState('');
  const [content, setPostContent] = useState('');
  const [company, setPostCompany] = useState('');

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
    // update conditionals for posts

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
// 


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
       
        // console.log("Document written with ID: ", docRef.id);
        // console.log("Document written with ID: ", companyRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }

  const findUser = async(data) => {
    // console.log('User Company:', userCompany)
    const user = auth.currentUser;
    const uid = user.uid;
    const q = query(collection(db, "users"), where("id", "==", uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      const data = doc.data();
      const finalCompany = data.company;
      setPostCompany(finalCompany)
    });
  }

  const publishPost = async(data) => {
      const user = auth.currentUser;
      const uid = user.uid;
      try {
        const docRef = await addDoc(collection(db, "posts"), {
          ...data,
          authorId: uid,
          title: title,
          company: company,
          content: content
        });
        navigate('/home');
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }

  useEffect(() => {
    findUser();
    publishPost();
    let authToken = sessionStorage.getItem('Auth Token')
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
                message="Step 1 of 2"
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
          

          <Route 
            path="/create-post" 
            element={
              <CreatePost 
                setPostTitle={setPostTitle}
                setPostContent={setPostContent}
                setPostCompany={setPostCompany}
                handleAction={() => publishPost()}
              />
            } 
          />

          <Route 
            path="/dashboard" 
            element={
              <Home />
            } 
          />

          <Route exact path="/posts" component={<PostList />} />
          <Route path="/your-posts" element={<UserPostList />} />
          <Route path="/posts/:id" element={<SinglePostPage/>} />

        </Routes>
      </>
    </div>
  );
}

export default App;