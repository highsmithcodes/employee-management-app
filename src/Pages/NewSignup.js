import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../Components/Common/Button';
import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid';


export default function NewSignup({ setFullName, setCompanyName, handleAction }) {
    
    return(
        <Container maxWidth="lg" centered style={{
            paddingTop: "120px",
            paddingBottom: '120px',
            textAlign: 'center'
          }}>
                <Typography variant="h4" style={{
                    paddingBottom: "40px",
                }}>Set Up Your Account</Typography>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    style={{
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}
                >
                    <TextField
                        id="name"
                        label="Full Name"
                        variant="outlined"
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <TextField
                        id="company-name"
                        label="Company Name"
                        variant="outlined"
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </Box>

                <Button title="Continue" handleAction={handleAction}/>
        </Container>
    )
}