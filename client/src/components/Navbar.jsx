import React, {useContext, useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/EZHealthLogo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { toast } from 'react-toastify';
import axios from 'axios';
import { IoClose } from "react-icons/io5"; 
import { Context } from '../auth';

const Navbar = () => {

    const [show, setShow] = useState(false);
    const { isAuthenticated , setIsAuthenticated, user } = useContext(Context);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    
    useEffect(() => {
        console.log("Navbar isAuthenticated:", isAuthenticated);
    }, [isAuthenticated]);
    

    // useEffect(() => {
    //     const verifyAuthentication = async () => {
    //         try {
    //             const { data } = await axios
    //             .get(
    //                 'https://localhost:5000/api/v1/user/verifyAuth',
    //                 {withCredentials: true}
    //             );
    //             setIsAuthenticated(data.isAuthenticated);
    //         } catch (error) {
    //             setIsAuthenticated(false);
    //         }
    //     };
    //     verifyAuthentication();
    // }, [setIsAuthenticated])

    const handleLogout = async()=>{
        await axios
            .get("http://localhost:5000/api/v1/user/patient/logout", {
            withCredentials: true,
        })
        .then((res) => {
            toast.success(res.data.message);
            setIsAuthenticated(false);
        })
        .catch((err) => {
            toast.error(err.res.data.message);
        });
    };

    const navigateTo = useNavigate(); 

    const gotoLogin = async()=>{
        navigateTo("/login");
    };

    return (
        <nav className="bg-blue-100 fixed top-0 left-0 w-full z-10">
            <div className="container mx-auto px-6 py-2 flex justify-around items-center">
                {/* Logo */}
                <img src={logo} className="w-60" alt="Logo" />

                {/* Hamburger Icon */}
                <div className="md:hidden text-2xl cursor-pointer" onClick={() => setShow(!show)}>
                    {show ? <IoClose /> : <GiHamburgerMenu />}
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-8 text-gray-700">
                    <Link to="/"><li className="cursor-pointer text-xl hover:text-orange-500">Home</li></Link>
                    <Link to="/about"><li className="cursor-pointer text-xl hover:text-orange-500">About</li></Link>
                    <Link to="/service"><li className="cursor-pointer text-xl hover:text-orange-500">Services</li></Link>
                    <Link to="/doctors"><li className="cursor-pointer text-xl hover:text-orange-500">Doctors</li></Link>
                </ul>

                {/* Desktop Auth Buttons */}
                {/* <div className="hidden md:flex gap-4">
                    {isAuthenticated ? (
                        <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-orange-500" onClick={handleLogout}>
                            Logout
                        </button>
                    ) : (
                        <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-orange-500" onClick={gotoLogin}>
                            Login
                        </button>                          
                    )}
                </div> */}

                <div className="hidden md:flex gap-4">
                    {isAuthenticated ? (
                        <div className="relative">
                            {/* User Button */}
                            <button
                                className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-orange-500"
                                onClick={toggleDropdown}
                            >
                                {user.firstName}
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded-lg shadow-lg">
                                    <button
                                        className="block w-full px-4 py-2 text-center text-gray-800 hover:bg-gray-100 hover:text-orange-400 hover:font-semibold"
                                    >
                                        Profile
                                    </button>
                                    <button
                                        className="block w-full px-4 py-2 text-center text-gray-800 hover:bg-gray-100 hover:text-orange-400 hover:font-semibold"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button
                            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-orange-500"
                            onClick={gotoLogin}
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {show && (
                <div className="md:hidden bg-blue-100 shadow-md">
                    <ul className="flex items-center flex-col gap-4 py-4 px-6 text-gray-700">
                        <Link to="/"><li className="cursor-pointer text-lg hover:text-orange-500" onClick={() => setShow(false)}>Home</li></Link>
                        <Link to="/service"><li className="cursor-pointer text-lg hover:text-orange-500" onClick={() => setShow(false)}>Services</li></Link>
                        <Link to="/about"><li className="cursor-pointer text-lg hover:text-orange-500" onClick={() => setShow(false)}>About</li></Link>
                        <Link to="/doctors"><li className="cursor-pointer text-lg hover:text-orange-500" onClick={() => setShow(false)}>Doctors</li></Link>
                    </ul>
                    <div className="flex items-center flex-col gap-4 px-6 pb-4">
                        {isAuthenticated ? (
                            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-orange-500" onClick={handleLogout}>
                                Logout
                            </button>
                        ) : (
                                
                                    <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-orange-500" onClick={gotoLogin}>
                                        Login
                                    </button>
                            
                        )}
                    </div>
                </div>
            )}
        </nav>
    )
};

export default Navbar