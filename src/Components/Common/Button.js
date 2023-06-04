import * as React from 'react';
// import Button from '@mui/material/Button';

export default function BasicButtons({title, handleAction}) {
    return (
        <a variant="contained" fullWidth="true" onClick={handleAction} className='text-white bg-rose-500 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none hover:cursor-pointer block text-center'>{title}</a>
    );
}