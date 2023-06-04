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
import { BookOpenIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/20/solid'


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
        <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-zinc-900 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div class="-mx-6 px-6 py-4">
                    <Link to="#">
                        <BookOpenIcon className="h-6 w-5 flex-none text-white" aria-hidden="true"  />
                    </Link>
                </div>

                <ul class="space-y-2 tracking-wide mt-8">
                    <Link to="/home/" className="px-0 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                            <span class="-mr-1 font-medium">Dashboard</span>
                    </Link>

                    <Link to="/create-post/" className="px-0 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                            <span class="group-hover:text-gray-700">Create a Post</span>
                    </Link>

                    <Link to="/your-posts/" className="relative px-0 py-3 flex items-center space-x-4 rounded-xl text-white">
                            <span class="group-hover:text-gray-700">Your Posts</span>
                    </Link>
                </ul>
            </div>

            
            <div class="px-6 -mx-6 pt-4 flex justify-between flex-col items-start border-t">
                <div class="mt-0 text-center">
                    <h5 class="hidden mt-4 text-lg font-semibold text-gray-600 lg:block">{userInfo[0].fullName} | {userInfo[0].company}</h5>
                </div>
                <button class="px-0 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                    <ArrowLeftOnRectangleIcon className="h-6 w-5 flex-none text-white" aria-hidden="true"  />
                    <span class="text-white"><button onClick={handleLogout} >Logout</button></span>
                </button>
            </div>
        </aside>
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
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
                        <Link to={`/posts/${post.id}`} className="block items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-rose-500 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300">
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