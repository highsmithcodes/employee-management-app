import { collection, addDoc, getDocs, doc, where, query, onSnapshot } from "firebase/firestore"; 
import { db } from "../firebase-config";
import { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import PostList from "./PostList";


export default function DepartmentBody({post}) {
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
        <div>
            <h1>{post.departmentName}</h1>
            <div className="float-left">Team-Lead: {post.teamLead} <p>More Details to Come</p></div>
            <div className="float-right">
                <PostList />
                <Link to="/create-post/">Create</Link>
            </div>
        </div>
    )
}