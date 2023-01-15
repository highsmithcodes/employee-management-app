import { collection, addDoc, getDocs, doc, where, query, onSnapshot } from "firebase/firestore"; 
import { db } from "../firebase-config";
import { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import PostList from "./PostList";
import { Button } from "@mui/material";


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
        <div className="main row">
            <div className="left">

                <div className="sidebar_nav department_sidebar">
                    <h1>{post.departmentName} Department</h1>
                    <p>Team-Lead: {post.teamLead}</p>
                    <p>More Details to Come</p>
                </div>
                <div className="sidebar_nav">
                    {/* List Out Categories Created By This Department */}
                    <div className="h3 blue">All Categories</div>
                </div>

                <p className="edit-button"><Link to="/edit-department">Edit Department Details</Link></p>
            </div>
            <div className="right">
                <div className="h1">Recent Posts</div>
                <PostList />
                <Link to="/create-post/" className="button">Create New Post</Link>
            </div>
        </div>
    )
}