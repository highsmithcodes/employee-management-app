import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../Components/Common/Button';
import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid';
import { FormControl, FormLabel } from '@mui/material';
import { Link } from "react-router-dom"

export default function NewSignup({ setFullName, setCompanyName, handleAction }) {
    
    return(

        <div className="h-screen flex">
          <div className="hidden lg:flex w-full lg:w-1/2 justify-around items-center bg-rose-600">
            <div className="bg-black opacity-20 inset-0 z-0">

                  </div>
            <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
              <h1 className="text-white font-bold text-4xl font-sans">Kept App</h1>
              <p className="text-white mt-1">Keep your team organized with Kept</p>
              <div className="flex justify-center lg:justify-start mt-6">
                  <a href="#" className="hover:bg-rose-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-rose-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Get Started</a>
              </div>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
            <div className="w-full px-8 md:px-32 lg:px-24">
            <div className="bg-white rounded-md shadow-2xl p-5">
              <h1 className="text-gray-800 font-bold text-2xl mb-1">Set Up Your Account</h1>

              <FormControl className='w-full'>
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
                    <div className='flex items-center border-2 mb-8 py-2 px-3 rounded-2xl'>
                        <TextField
                            id="name"
                            label="Full Name"
                            variant="filled"
                            required
                            fullWidth
                            className='w-96 px-3 py-2 border border-slate-600 rounded-xl focus:outline-0'
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div className='flex items-center border-2 mb-8 py-2 px-3 rounded-2xl'>
                        <TextField
                            id="company-name"
                            variant="filled"
                            required
                            fullWidth
                            className='w-96 px-3 py-2 border border-slate-600 rounded-xl focus:outline-0'
                            label="Company Name"
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </div>
                </Box>

                <Button title="Continue" handleAction={handleAction}/>
                <div className="small-title mt-5 text-black text-center">Step 2 of 2</div>
       
                {/* <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '100%' },
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
                    <div className='flex items-center border-2 mb-8 py-2 px-3 rounded-2xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <TextField
                            id="email"
                            label="Enter the Email"
                            variant="filled"
                            className='w-full border-none'
                            onChange={(e) => setEmail(e.target.value)}
                            inputProps={{ "data-testid": "account-enter-email" }}
                        />
                    </div>
                    <div className='flex items-center border-2 mb-8 py-2 px-3 rounded-2xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <TextField
                            id="password"
                            label="Enter the Password"
                            type="password"
                            variant="filled"
                            required
                            fullWidth
                            className='w-96 px-3 py-2 border border-slate-600 rounded-xl focus:outline-0'
                            // variant="outlined"
                            onChange={(e) => setPassword(e.target.value)}
                            inputProps={{ "data-testid": "account-enter-password" }}
                        />
                    </div>
                </Box> */}

            </FormControl>



              <div className="flex justify-between mt-4">
                {/* <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Forgot Password ?</span> */}

                <Link to="/register" className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Don't have an account yet?</Link>
              </div>
              
            </div>
            </div>
            
          </div>
      </div>

    )
}