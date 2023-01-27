import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DepartmentOptions from '../Components/DepartmentOptions';
import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid';
import { getAuth } from 'firebase/auth';
import { collection, addDoc, getDocs, doc, setDoc, where, query, onSnapshot } from "firebase/firestore"; 
import { db } from "../firebase-config";

export default function Home() {

    // const [ userInfo, setUserInfo] = useState('');

    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    let navigate = useNavigate();



    const getUsers = async() => {
        const auth = getAuth();
        const currentUser = auth.currentUser;
        if (currentUser !== null) {
            const usersRef = query(collection(db, 'users'), where('id', '==', currentUser.id).get()
        .then((doc) => {
          const profile = {
            id: currentUser.id,
            fullName: currentUser.fullName,
            ...doc.data(),
          };

        }))
            // console.log(currentUser)
            // const fullName = currentUser.fullName;
            // const company = currentUser.company;
            // const uid = currentUser.uid;
            // setUser(fullName, company, uid);
            const data = await getDocs(usersRef);
        }
    }


    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/home')
        }
        getUsers();

        if (!authToken) {
            navigate('/register')
        }
    }, [])
    return (
        <>
            <Container maxWidth="lg" centered style={{
                paddingTop: "120px",
                paddingBottom: '120px',
                textAlign: 'center'
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>

                        <Typography value="h4">Get accountName from users</Typography>
                        <div className="title">{profile.fullName}</div>
                        
                        <DepartmentOptions/>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        Home Page
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}