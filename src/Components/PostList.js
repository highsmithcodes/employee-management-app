import { collection, addDoc, getDocs, doc, where, query, onSnapshot } from "firebase/firestore"; 
import { db } from "../firebase-config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CreatePost from "./Common/CreatePost";
import { Link, Route } from "react-router-dom";
import { getUsers } from "../firebase-config";


export default function PostList() {
    const [postsList, setPostsList] = useState([]);
    const [categoryId, setCategoryId] = useState([]);
    const [ userInfo, setUserInfo] = useState([{}]);


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
   

    const postsRef = query(collection(db, 'posts'))
    const getPosts = async () => {
        console.log(userInfo[0].id)
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
        getCategoryId([]);
        getPosts();
    }, [])
    return (
        <>
         {/* {userInfo[0].company}  */}
            {postsList?.map((post) => (
                <div className="post">
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
                            <Link to={`/posts/${post.id}`} className="button muted-button">
                                Read More
                            </Link>
                            </div>
                        </div>
                    {/* </Link> */}
                </div>
            ))}
        </>
    )
}