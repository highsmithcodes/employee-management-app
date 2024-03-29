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
        <ul>
             {postsList?.map((post) => (
                <li key={post.id}>
                    <Link className='button' to={ '/departments/' + `${post.id}` }  style={{color: '#fff', textDecoration: 'none', fontWeight: 'bold'}}>
                        {post.departmentName}
                    </Link>
                </li>
            ))}
        </ul>
    )
}