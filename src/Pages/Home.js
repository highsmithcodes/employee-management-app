import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DepartmentOptions from '../Components/DepartmentOptions';
import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid';
import { getAuth } from 'firebase/auth';
import { collection, addDoc, getDocs, doc, setDoc, where, query, onSnapshot } from "firebase/firestore"; 
import { getUsers } from "../firebase-config";
import CreatePost  from '../Components/Common/CreatePost';
import { db } from "../firebase-config";


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
    

    console.log("daasa", userInfo[0].id);

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
    const publishPost = async(data) => {
        const user = auth.currentUser;
        const uid = user.uid;
        try {
          const docRef = await addDoc(collection(db, "posts"), {
            ...data,
            authorId: uid,
            title: title,
            content: content
          });
          navigate('/home');
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    return (
        <>
            <Container maxWidth="lg" centered style={{
                paddingTop: "120px",
                paddingBottom: '120px',
                textAlign: 'center'
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>

                        <Typography value="h4">Welcome:{userInfo[0].fullName} </Typography>
                        <Typography>Company: {userInfo[0].company} </Typography>
                        
                        {/* <DepartmentOptions/> */}
                    </Grid>
                    <Grid item xs={6} md={8}>
                        Home Page
                        <CreatePost 
                            setPostTitle={setPostTitle}
                            setPostContent={setPostContent}
                            handleAction={() => publishPost()}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}