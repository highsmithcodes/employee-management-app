import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth';
import { collection, addDoc, getDocs, doc, setDoc, where, query, onSnapshot } from "firebase/firestore"; 
import { getUsers } from "../firebase-config";
import PostList from '../Components/PostList';
import CreatePost  from '../Components/Common/CreatePost';
import { db } from "../firebase-config";
import { Link } from "react-router-dom";
import SidebarNav from '../Components/Common/SidebarNav';
import logo from "../logo.png";
import { BookOpenIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/20/solid'
import DashboardHeader from '../Components/DashboardHeader';


export default function Home() {
    //     let navigate = useNavigate();
    const auth = getAuth();
    const [ userInfo, setUserInfo] = useState([{}]);
    const [title, setPostTitle] = useState('');
    const [content, setPostContent] = useState('');
    let navigate = useNavigate();
    let authToken = sessionStorage.getItem('Auth Token')

    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }

    const userInformation = async () => {
        const response = await getUsers();
        setUserInfo(response);
    };
    

    // console.log("daasa", userInfo[0].id);

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/home')
        }
        userInformation();

        if (!authToken) {
            navigate('/register')
        }
    }, [])
    
    // const publishPost = async(data) => {
    //     const user = auth.currentUser;
    //     const uid = user.uid;
    //     try {
    //       const docRef = await addDoc(collection(db, "posts"), {
    //         ...data,
    //         authorId: uid,
    //         title: title,
    //         content: content
    //       });
    //       navigate('/home');
    //       console.log("Document written with ID: ", docRef.id);
    //     } catch (e) {
    //       console.error("Error adding document: ", e);
    //     }
    //   }
    return (
        <>
        <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-zinc-900 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
    <div>
        <div class="-mx-6 px-6 py-4">
            <Link to="#">
                <BookOpenIcon className="h-6 w-5 flex-none text-white" aria-hidden="true"  />
            </Link>
        </div>

        <SidebarNav/>

    </div>

    <div class="px-6 -mx-6 pt-4 flex justify-between flex-col items-start border-t">
        <div class="mt-0 text-center">
            <h5 class="hidden mt-4 text-lg font-semibold text-gray-600 lg:block">{userInfo[0].fullName} | {userInfo[0].company}</h5>
        </div>
        <button class="px-0 py-2 flex items-center space-x-4 rounded-md text-gray-600 group">
            <ArrowLeftOnRectangleIcon className="h-6 w-5 flex-none text-white" aria-hidden="true"  />
            <span class="text-white"><button onClick={handleLogout} >Logout</button></span>
        </button>
    </div>
</aside>
<div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    

    <div class="px-6 pt-6 2xl:container">
        <DashboardHeader />
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-5">
            <PostList />
        </div>
    </div>
</div>
      
        </>
    )
}