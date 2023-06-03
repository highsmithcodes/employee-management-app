import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button';
import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid';
import SidebarNav from '../../Components/Common/SidebarNav';
import logo from "../../logo.png";
import { getAuth } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom'
import { getUsers } from "../../firebase-config";
import { BookOpenIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/20/solid'



export default function CreatePost({ setPostTitle, setPostContent, handleAction }) {
    const auth = getAuth();
    const [ userInfo, setUserInfo] = useState([{}]);
    let navigate = useNavigate();
    let authToken = sessionStorage.getItem('Auth Token')

    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }

    const userInformation = async () => {
        const response = await getUsers();
        setUserInfo(response);
    };
    

    // console.log("daasa", userInfo[0].id);

    useEffect(() => {
        // let authToken = sessionStorage.getItem('Auth Token')

        // if (authToken) {
        //     navigate('/home')
        // }
        userInformation();

        // if (!authToken) {
        //     navigate('/register')
        // }
    }, [])
    return (
        <>
        <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-zinc-900 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
    <div>
        <div class="-mx-6 px-6 py-4">
            <Link to="#">
                <BookOpenIcon className="h-6 w-5 flex-none text-white" aria-hidden="true"  />
            </Link>
        </div>


        <ul class="space-y-2 tracking-wide mt-8">
                    <Link to="/home/" className="px-0 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                            <span class="-mr-1 font-medium">Dashboard</span>
                    </Link>

                    <Link to="/create-post/" className="relative px-0 py-3 flex items-center space-x-4 rounded-xl text-white">
                            <span class="group-hover:text-gray-700">Create a Post</span>
                    </Link>

                    <Link to="/your-posts/" className="px-0 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                            <span class="group-hover:text-gray-700">Your Posts</span>
                    </Link>
                </ul>
    </div>

    <div class="px-6 -mx-6 pt-4 flex justify-between flex-col items-start border-t">
        <div class="mt-0 text-center">
            <h5 class="hidden mt-4 text-lg font-semibold text-gray-600 lg:block">{userInfo[0].fullName} | {userInfo[0].company}</h5>
        </div>
        <button class="px-0 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <ArrowLeftOnRectangleIcon className="h-6 w-5 flex-none text-white" aria-hidden="true"  />
            <span class="text-white"><button onClick={handleLogout} >Logout</button></span>
        </button>
    </div>
</aside>
<div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    

    <div class="px-6 pt-6 2xl:container h-full flex flex-col justify-center items-center h-screen">
        <div className='lg:w-[75%] xl:w-[80%] 2xl:w-[85%]'>
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
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        // variant="filled"
                        id="conten"
                        label="Enter the Content"
                        variant="outlined"
                        sx={{ mb: 4 }}
                        fullWidth
                        onChange={(e) => setPostContent(e.target.value)}
                    />
    
                    {/* <TextField
                        id="conten"
                        label="Enter the Content"
                        variant="outlined"
                        sx={{ mb: 4 }}
                        fullWidth
                        onChange={(e) => setPostContent(e.target.value)}
                    /> */}
                </Box>

                <Button title="Add Post" handleAction={handleAction} className="block items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"/>
        </div>
    </div>
</div>
      
        </>
    );
}