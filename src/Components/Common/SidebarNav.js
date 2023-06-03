import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import logo from "../../logo.png";

export default function SidebarNav() {
    let navigate = useNavigate();

    return (

    
        <ul class="space-y-2 tracking-wide mt-8">
            <Link to="/home/" className="relative px-0 py-3 flex items-center space-x-4 rounded-xl text-white">
                    <span class="-mr-1 font-medium">Dashboard</span>
            </Link>

            <Link to="/create-post/" className="px-0 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                    <span class="group-hover:text-gray-700">Create a Post</span>
            </Link>

            <Link to="/your-posts/" className="px-0 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                    <span class="group-hover:text-gray-700">Your Posts</span>
            </Link>
        </ul>
    )
}