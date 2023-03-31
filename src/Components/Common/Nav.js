import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import logo from "../../logo.png";

export default function Nav() {
    let navigate = useNavigate();
    let authToken = sessionStorage.getItem('Auth Token')

    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }

    return (
        <div className="menu">
            <div className="logo">
                <Link to="/">
                 <img src={logo} width="100px" />
                </Link>
            </div>
            <ul>
                {authToken ? (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </ul>
        </div>
    )
}