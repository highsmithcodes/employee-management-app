import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button';

function CreatePost({setTitle, setDetails, handleAction}) {

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

            </Box>

            <Button title="Add Post" handleAction={handleAction}/>
        </div>

    </div>
  );
}

export default CreatePost;