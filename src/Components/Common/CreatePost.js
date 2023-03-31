import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button';
import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid';



export default function CreatePost({ setPostTitle, setPostContent, handleAction }) {
    
    return (

        <div className="container mx-auto py-5">
        <div class="flex flex-wrap py-5 my-5">
            <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78 drop-shadow-md purple-bg py-5">
                <p className="text-3xl font-bold text-white text-center pb-5">Welcome</p>


            {/* <DepartmentOptions/> */}
            </div>
            <div className="w-full md:w-6/12 px-4 sm:mt-5 xs:mt-5">

                <Typography variant="h4" style={{
                        paddingBottom: "40px",
                    }}>New Post</Typography>
                <Box
                    component="form"

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
                        id="title"
                        label="Enter the Title"
                        sx={{ mb: 4 }}
                        variant="outlined"
                        onChange={(e) => setPostTitle(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        id="conten"
                        label="Enter the Content"
                        variant="outlined"
                        sx={{ mb: 4 }}
                        fullWidth
                        onChange={(e) => setPostContent(e.target.value)}
                    />
                </Box>

                <Button title="Add Post" handleAction={handleAction}/>
            </div>
        </div>
    </div>
    );
}