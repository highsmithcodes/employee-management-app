import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DepartmentOptions from '../Components/DepartmentOptions';
import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid';

export default function Home() {
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    let navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/home')
        }

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