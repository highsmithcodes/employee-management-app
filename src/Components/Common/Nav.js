import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import logo from "../../logo.png";
import { BookOpenIcon } from '@heroicons/react/20/solid'

export default function Nav() {
    let navigate = useNavigate();
    let authToken = sessionStorage.getItem('Auth Token')

    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }

    return (
        <>
        {authToken ? (
            <>
            <header className="lg:hidden">
                <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link to="/" className="flex items-center">
                            <BookOpenIcon className="h-6 w-5 flex-none text-white" aria-hidden="true"  />
                            {/* <span class="self-center text-xl font-semibold whitespace-nowrap ">Kept</span> */}
                        </Link>
                        <div class="flex items-center lg:order-2">                
                            <button data-collapse-toggle="mobile-menu-3" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-3" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-3">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <>
                                <Link to="/dashboard/" className="block py-2 pr-4 pl-3 text-black rounded lg:bg-transparent lg:p-0 ">Home</Link>
                                <Link to="/create-post/" className="block py-2 pr-4 pl-3 text-black rounded lg:bg-transparent lg:p-0 ">Create a Post</Link>
                                <Link to="/your-posts/" className="block py-2 pr-4 pl-3 text-black rounded lg:bg-transparent lg:p-0 ">Your Posts</Link>
                            </>
                            </ul>
                        </div>
                    </div>
                </nav>
                </header>
            </>
        ) : (
            <>
                <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link to="/" className="flex items-center">
                    {/* <img src={logo} class="mr-3 h-6 sm:h-9" alt="Logo" /> */}
                    <BookOpenIcon className="h-6 w-5 flex-none text-black" aria-hidden="true"  />
                </Link>
                <div class="flex items-center lg:order-2">

                    <Link to="/dashboard" className="text-white bg-rose-600 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none">Get started</Link>
     
                    <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <>
                        <Link to="/" className="block py-2 pr-4 pl-3 text-black rounded lg:bg-transparent lg:p-0 ">Home</Link>
                        <Link to="/login" className="block py-2 pr-4 pl-3 text-black rounded lg:bg-transparent lg:p-0 ">Login</Link>
                        <Link to="/register" className="block py-2 pr-4 pl-3 text-black rounded lg:bg-transparent lg:p-0 ">Register</Link>
                    </>
                    </ul>
                </div>
            </div>
        </nav>
                </header>
            </>
        )}
        </>
             

    )
}