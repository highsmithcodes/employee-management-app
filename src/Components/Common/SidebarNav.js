import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import logo from "../../logo.png";

export default function SidebarNav() {
    let navigate = useNavigate();

    return (
        <ul className="flex flex-col mt-5">
            <Link to="/" className="text-white my-3 button transparent">Dashboard</Link>
            <Link to="/create-post/" className="text-white my-3 button transparent">Create a Post</Link>
            <Link to="/login" className="text-white my-3 button transparent">Your Posts</Link>
        </ul>
    )
}