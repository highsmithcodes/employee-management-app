import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useParams }  from "react-router-dom";
import { db } from "../firebase-config";
import { collection, addDoc, getDocs, doc, where, query, onSnapshot } from "firebase/firestore"; 
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';


export default function SinglePostPage() {
    const { id } = useParams();
    const [blog, setblog] = useState([]); 

    const q = query(collection(db, "posts"));

    const getPost = async () => {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            if(doc.id == id){
                setblog(doc.data());
            }
        });
    }
        
    useEffect(() => {
        getPost();
    }, [])
    


    return (
        <>
        <Container maxWidth="lg" centered style={{
                paddingTop: "120px",
                paddingBottom: '120px',
                textAlign: 'center'
            }}>
                <Grid container spacing={1} alignItems="center" justifyContent="center">

                    <Grid item xs={6} md={12} style={{
                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                        backgroundColor: '#fff',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '40px',
                        textAlign: 'center'
                    }}>
                        <section>
                        <h1 className="text-2xl">
                                <span><b>Title: </b></span>
                                <span>{blog.title}</span>
                            </h1>
                            <p><b>Body: </b></p>
                            <p>{blog.content}</p>

                        </section>
                    </Grid>
                </Grid>
            </Container>

        </>
    )
}