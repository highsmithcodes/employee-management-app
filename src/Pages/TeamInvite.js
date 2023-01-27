import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button';
import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid';

export default function TeamInvite() {
    return (
        <Container maxWidth="lg" centered style={{
            paddingTop: "120px",
            paddingBottom: '120px',
            textAlign: 'center'
          }}>
                <Typography variant="h4" style={{
                        paddingBottom: "40px",
                    }}>Invite Your Team</Typography>
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
                        label="Add Email"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    Choose if Admin or Just a Member

                </Box>

                <Button title={title} handleAction={handleAction}/>
        </Container>
    )
}