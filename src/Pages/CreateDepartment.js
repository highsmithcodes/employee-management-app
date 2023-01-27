import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button';
import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid';

export default function CreateDepartment() {
    return (
        <Container maxWidth="lg" centered style={{
            paddingTop: "120px",
            paddingBottom: '120px',
            textAlign: 'center'
          }}>
                <Typography variant="h4" style={{
                        paddingBottom: "40px",
                    }}>Create </Typography>
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
                        id="department"
                        label="Create Your First Department"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </Box>

                <Button title={title} handleAction={handleAction}/>
        </Container>
    )
}