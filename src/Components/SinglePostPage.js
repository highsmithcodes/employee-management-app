import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useParams, useNavigate }  from "react-router-dom";
import { db } from "../firebase-config";
import { collection, addDoc, getDocs, doc, where, query, onSnapshot } from "firebase/firestore"; 
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import SidebarNav from '../Components/Common/SidebarNav';
import { getUsers } from "../firebase-config";
import logo from "../logo.png";


export default function SinglePostPage() {
    const { id } = useParams();
    let navigate = useNavigate();
    const [blog, setblog] = useState([]); 
    const [ userInfo, setUserInfo] = useState([{}]);
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    const userInformation = async () => {
        const response = await getUsers();
        setUserInfo(response);
    };

    const q = query(collection(db, "posts"));

    const getPost = async () => {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            if(doc.id == id){
                setblog(doc.data());
            }
        });
    }
        
    useEffect(() => {
        getPost();
    }, [])
    


    return (
        <>
        <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
    <div>
        <div class="-mx-6 px-6 py-4">
            <a href="#" title="home">
                <img src={logo} class="w-32" alt="kept logo" />
            </a>
        </div>

        <div class="mt-8 text-center">
            <img src={logo} alt="" class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
            <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{userInfo[0].fullName}</h5>
            <span class="hidden text-gray-400 lg:block">Company: {userInfo[0].company}</span>
        </div>

        <SidebarNav/>
    </div>

    <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span class="group-hover:text-gray-700"><button onClick={handleLogout} >Logout</button></span>
        </button>
    </div>
</aside>
<div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    {/* <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
        <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">Dashboard</h5>
            <button class="w-12 h-16 -mr-2 border-r lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <div class="flex space-x-4">
                <div hidden class="md:block">
                    <div class="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                        {authToken ? (
                            <button onClick={handleLogout} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Logout</button>
                        ) : (
                            <>
                            </>
                        )}                    
                    </div>
                </div>
                <button aria-label="search" class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
                    <svg xmlns="http://ww50w3.org/2000/svg" class="w-4 mx-auto fill-current text-gray-600" viewBox="0 0 35.997 36.004">
                        <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                    </svg>
                </button>
                <button aria-label="chat" class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                </button>
                <button aria-label="notification" class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                </button>
            </div>
        </div>
    </div> */}

    <div class="px-6 pt-6 2xl:container flex justify-center items-center h-screen">
        <div class="grid gap-6 grid-cols-1 h-full">
        <Grid container spacing={1} alignItems="center" justifyContent="center">

<div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
    <section>
    <h1 className="text-2xl">
            <span><b>Title: </b></span>
            <span>{blog.title}</span>
        </h1>
        <p><b>Body: </b></p>
        <p>{blog.content}</p>

    </section>
</div>
</Grid>
        </div>
    </div>
</div>
      
        </>

    )
}