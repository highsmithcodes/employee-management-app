import { collection, addDoc, getDocs, doc, where, query, onSnapshot } from "firebase/firestore"; 
import { db,querySnapshot } from "../firebase-config";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CreatePost from "./Common/CreatePost";
import { Link, Route } from "react-router-dom";
import { getUsers } from "../firebase-config";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import SidebarNav from "./Common/SidebarNav";
import logo from "../logo.png";

export default function UserPostList() {
    const auth = getAuth();
    let navigate = useNavigate();

    const [postsList, setPostsList] = useState([]);
    const [categoryId, setCategoryId] = useState([]);
    const [ userInfo, setUserInfo] = useState([{}]);
    const [company, setPostCompany] = useState('');

    const catRef = query(collection(db, 'categories'))
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    const getCategoryId = async () => {
        const data = await getDocs(catRef)
        try {
            setCategoryId(
                data.docs.map((doc) => ({id: doc.id}))
            );
        } catch(err){
            console.log(err)
        }
    }
    

    const userInformation = async () => {
        const response = await getUsers();
        setUserInfo(response);
    };
   


    const user = auth.currentUser;
    const uid = user.uid;
    const postsRef = query(collection(db, 'posts'), where("authorId", "==", uid))
    const getPosts = async () => {
        console.log("uid",uid)
        
        
        const data = await getDocs(postsRef)
        try {
            setPostsList(
                data.docs.map((doc) => ({...doc.data(), id: doc.id}))
            ); 
        } catch(err){
            console.log(err)
        }
        if(userInfo[0].id == postsRef.id){
            // setblog(doc.data());
            console.log('working')
        } 
    }

   
    useEffect(() => {
        userInformation();
        getPosts();
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

                <ul class="space-y-2 tracking-wide mt-8">
                    <Link to="/home/" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                    <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" class="fill-current text-cyan-400 dark:fill-slate-600"></path>
                                <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" class="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                                <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" class="fill-current group-hover:text-sky-300"></path>
                            </svg>
                            <span class="-mr-1 font-medium">Dashboard</span>
                    </Link>

                    <Link to="/create-post/" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path class="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                                <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                            </svg>
                            <span class="group-hover:text-gray-700">Create a Post</span>
                    </Link>

                    <Link to="/your-posts/" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                                <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                            </svg>
                            <span class="group-hover:text-gray-700">Your Posts</span>
                    </Link>
                </ul>
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

            <div class="px-6 pt-6 2xl:container">
                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {postsList?.map((post) => (
                    <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                    <div>
                        <h5 class="text-xl text-gray-600 text-center font-bold">{post.title}</h5>
                        {/* <div class="mt-2 flex justify-center gap-4">
                            <h3 class="text-3xl font-bold text-gray-700">$23,988</h3>
                            <div class="flex items-end gap-1 text-green-500">
                                <svg class="w-3" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z" fill="currentColor"/>
                                </svg>
                                <span>2%</span>
                            </div>
                        </div> */}
                        <span class="block text-center text-gray-500 mb-5">{post.content}</span>
                        <Link to={`/posts/${post.id}`} className="block items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Read More
                        </Link>
                           
                    </div>

                </div>
                
                            ))}
                </div>
            </div>
        </div>
      
        </>

    )
}