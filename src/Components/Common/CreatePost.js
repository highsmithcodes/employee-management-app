import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, Route } from "react-router-dom";
import { collection, addDoc, getDocs, doc, where, query, onSnapshot } from "firebase/firestore"; 
import { db } from "../../firebase-config";

function CreatePost({setTitle, setDetails, handleAction, setCategory}) {

    const [categoryList, setCategoryList] = useState([]);
    const [categoryId, setCategoryId] = useState([]);
    const categoryRef = collection(db, "categories");
    const getCategories = async () => {
        const data = await getDocs(categoryRef)
        try {
            setCategoryList(
                data.docs.map((doc) => ({...doc.data(), id: doc.id}))
            );
        } catch(err){
            console.log(err)
        }
    } 

    useEffect(() => {
        getCategories();
    }, [])

  return (
    <div className="App">

        <div>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="post-title" label="Enter Title" variant="outlined" onChange={(e) => setTitle(e.target.value)} />
                
                <TextField id="Details" label="Enter Details" variant="outlined" onChange={(e) => setDetails(e.target.value)} />

                <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>

                        <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        // needs access to category id
                        value={categoryId}
                        label="Category"
                        onChange={(e) => setCategory(e.target.value)}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>

                            {categoryList?.map((category) => (
                                <MenuItem value={category.id}>{category.categoryName}</MenuItem>
                            ))}

                        </Select>
                    </FormControl>
                </div>

            </Box>

            <Button title="Add Post" handleAction={handleAction}/>
        </div>

    </div>
  );
}

export default CreatePost;