import { collection, addDoc, getDocs, doc, where, query, onSnapshot } from "firebase/firestore"; 
import { db } from "../firebase-config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CreatePost from "./Common/CreatePost";
import { Link, Route } from "react-router-dom";


export default function PostList({post}) {
    const [postsList, setPostsList] = useState([]);
    const postsRef = collection(db, "posts");
    const getPosts = async () => {
        const data = await getDocs(postsRef)
        try {
            setPostsList(
                data.docs.map((doc) => ({...doc.data(), id: doc.id}))
            );
        } catch(err){
            console.log(err)
        }
    }
   
    useEffect(() => {
        getPosts();

    }, [])
    return (
        <>
            {postsList?.map((post) => (
                <>
                    <Link path={`/post/${post.id}`}>
                        <div>{post.title}</div>
                        <div>{post.details}</div>
                    </Link>
                </>
            ))}
        </>
    )
}