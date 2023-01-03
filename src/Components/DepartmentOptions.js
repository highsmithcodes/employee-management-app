import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../firebase-config';



export default function DepartmentOptions() {

    const [postsList, setPostsList] = useState();
    const postsRef = collection(db, "departments");

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
    })

    return (
        <ul style={{ color: 'blue', display: 'flex',flexDirection: 'row', padding: 50, alignItems: 'center', justifyContent: 'center', listStyle: 'none' }}>
             {postsList?.map((post) => (
                <li key={post.id} style={{ padding:20,background:'#000', margin: 40, color: '#fff'}} >
                    <Link to={ '/departments/' + `${post.id}` }  style={{color: '#fff', textDecoration: 'none', fontWeight: 'bold'}}>
                        {post.departmentName}
                    </Link>
                </li>
            ))}
        </ul>
    )
}