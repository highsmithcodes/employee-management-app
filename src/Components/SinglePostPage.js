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
import { BookOpenIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/20/solid'


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
        userInformation();
        getPost();
    }, [])
    


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