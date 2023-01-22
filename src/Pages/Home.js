import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DepartmentOptions from '../Components/DepartmentOptions';

export default function Home() {
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/home')
        }

        if (!authToken) {
            navigate('/register')
        }
    }, [])
    return (
        <>
            <div style={{ padding: 50 }} className="main">
                Home Page
                <DepartmentOptions/>
            </div>
        </>
    )
}