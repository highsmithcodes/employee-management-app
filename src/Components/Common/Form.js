import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, FormLabel } from '@mui/material';
import Button from './Button';
import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid';



export default function BasicTextFields({ title, setPassword, setEmail, handleAction, message }) {
    return (
        <Container maxWidth="lg" centered style={{
            paddingTop: "120px",
            paddingBottom: '120px',
            textAlign: 'center'
          }}>
            <FormControl className='form-bg' sx={{ p: 4 }}>
                <div className="text-3xl font-bold text-white mb-4">{title}</div>
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
                        inputProps={{ "data-testid": "account-enter-email" }}
                    />
                    <TextField
                        id="password"
                        label="Enter the Password"
                        type="password"
                        required
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setPassword(e.target.value)}
                        inputProps={{ "data-testid": "account-enter-password" }}
                    />
                </Box>

                <Button title={title} handleAction={handleAction} />
                <div className="small-title mt-5 text-white">{message}</div>
            </FormControl>
        </Container>
    );
}