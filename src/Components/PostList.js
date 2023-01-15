import { collection, addDoc, getDocs, doc, where, query, onSnapshot } from "firebase/firestore"; 
import { db } from "../firebase-config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CreatePost from "./Common/CreatePost";
import { Link, Route } from "react-router-dom";


export default function PostList() {
    const [postsList, setPostsList] = useState([]);
    const [categoryId, setCategoryId] = useState([]);

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
    

    const postsRef = query(collection(db, 'posts'), where('category', '==', "V2xsWyzKoKtVbOHxvPY9"))

    const getPosts = async () => {
        console.log(categoryId)
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
        getCategoryId([]);
        getPosts();
    }, [])
    return (
        <>
            {postsList?.map((post) => (
                <div className="post">
                    {/* <Link path={`/post/${post.id}`}> */}
                        <div className="title">Title:{post.title}</div>
                        <div className="details">Details:{post.details}</div>
                        <div className="categories">Category:{post.category}</div>
                    {/* </Link> */}
                </div>
            ))}
        </>
    )
}