import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({title, handleAction}) {
    return (
        <Button variant="contained" fullWidth="true" onClick={handleAction}>{title}</Button>
    );
}