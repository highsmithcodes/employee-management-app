import { collection, addDoc, getDocs, doc, where, query, onSnapshot } from "firebase/firestore"; 
import { db,querySnapshot } from "../firebase-config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CreatePost from "./Common/CreatePost";
import { Link, Route } from "react-router-dom";
import { getUsers } from "../firebase-config";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import SidebarNav from "./Common/SidebarNav";

export default function UserPostList() {
    const [postsList, setPostsList] = useState([]);
    const [categoryId, setCategoryId] = useState([]);
    const [ userInfo, setUserInfo] = useState([{}]);
    const [company, setPostCompany] = useState('');

    const catRef = query(collection(db, 'categories'))

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
   

    const auth = getAuth();

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
        <div className="container mx-auto py-5">
                <div class="flex flex-wrap py-5 my-5">
                    <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78 drop-shadow-md purple-bg py-5 my-5 rounded-lg	">
                        <p className="text-3xl font-bold text-white text-center pb-4">{userInfo[0].fullName}</p>
                        <p className="text-lg font-bold text-white text-center">Company: {userInfo[0].company} </p>
                    {/* <DepartmentOptions/> */}
                        <SidebarNav/>
                    </div>
                    <div class="w-full md:w-6/12 px-4 sm:mt-5 xs:mt-5">

                        <div className="text-3xl font-bold text-black pb-5">Your Posts</div>
                        {/* <CreatePost 
                            setPostTitle={setPostTitle}
                            setPostContent={setPostContent}
                            handleAction={() => publishPost()}
                        /> */}
                            {postsList?.map((post) => (
                                <div className="post drop-shadow-md">
                                    {/* <Link path={`/post/${post.id}`}> */}
                                        <div className="title">{post.title}</div>
                                        <div className="details">{post.content}</div>
                                        <div className="post-btm-details" style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            marginTop: '40px',
                                            alignItems: 'center'
                                        }}>
                                            {/* <div className="categories">Category:{post.category}</div> */}
                                            <div className="more">
                                            <Link to={`/posts/${post.id}`} className="button purple">
                                                Read More
                                            </Link>
                                            </div>
                                        </div>
                                    {/* </Link> */}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
       
        </>
    )
}