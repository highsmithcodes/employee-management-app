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


export default function Home() {
    //     let navigate = useNavigate();
    const auth = getAuth();
    const [ userInfo, setUserInfo] = useState([{}]);
    const [title, setPostTitle] = useState('');
    const [content, setPostContent] = useState('');
    let navigate = useNavigate();

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
            <div className="container mx-auto py-5">
                <div class="flex flex-wrap py-5 my-5">
                    <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78 drop-shadow-md purple-bg py-5 my-5 rounded-lg	">
                        <p className="text-3xl font-bold text-white text-center pb-4">{userInfo[0].fullName}</p>
                        <p className="text-lg font-bold text-white text-center">Company: {userInfo[0].company} </p>
                    {/* <DepartmentOptions/> */}
                        <SidebarNav/>
                    </div>
                    <div class="w-full md:w-6/12 px-4 sm:mt-5 xs:mt-5">

                        <div className="text-3xl font-bold text-black pb-5">Recent Posts</div>
                        {/* <CreatePost 
                            setPostTitle={setPostTitle}
                            setPostContent={setPostContent}
                            handleAction={() => publishPost()}
                        /> */}
                        <PostList />
                    </div>
                </div>
            </div>
        </>
    )
}