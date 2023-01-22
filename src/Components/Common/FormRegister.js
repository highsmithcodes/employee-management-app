import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button';
import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid';


export default function BasicTextFields({ title, setPassword, setEmail, setFullName, setAccountName, handleAction }) {
    return (
        <Container maxWidth="lg" centered style={{
            paddingTop: "120px",
            paddingBottom: '120px',
            textAlign: 'center'
          }}>
                <Typography variant="h4" style={{
                    paddingBottom: "40px",
                }}>{title} Form</Typography>
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
                        id="email"
                        label="Enter the Email"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        id="password"
                        label="Enter the Password"
                        variant="outlined"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        id="name"
                        label="Full Name"
                        variant="outlined"
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <TextField
                        id="account-name"
                        label="Account Name"
                        variant="outlined"
                        onChange={(e) => setAccountName(e.target.value)}
                    />
                </Box>

                <Button title={title} handleAction={handleAction}/>
        </Container>
    );
}