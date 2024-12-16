import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../main';
import logo from '../assets/EZHealthLogo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { toast } from 'react-toastify';

const Navbar = () => {

    const [show, setShow] = useState(false);
    const { isAuthenticated , setIsAuthenticated} = useContext(Context);
    console.log("isAuthenticated in Navbar:", isAuthenticated);

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
            toast.error(err.response.data.message);
        });
    };

    const navigateTo = useNavigate(); 

    const gotoLogin = async()=>{
        navigateTo("/login");
    };

    return (
        <nav className="bg-blue-100 fixed top-0 left-0 w-full z-10">
            <div className="container mx-auto px-6 py-2 flex justify-around items-center">
                <img src={logo} className='w-60' alt="" />
                <ul className="hidden md:flex gap-8 text-gray-700">
                    <Link to='/'><li className="cursor-pointer text-xl hover:text-orange-500">Home</li></Link>
                    <Link to='/service'><li className="cursor-pointer text-xl hover:text-orange-500">Services</li></Link>
                    <Link to='/about'><li className="cursor-pointer text-xl hover:text-orange-500">About Us</li></Link>
                    <Link to='/doctors'><li className="cursor-pointer text-xl hover:text-orange-500">Doctors</li></Link>
                </ul>
                <div className="flex gap-4">
                    {isAuthenticated ? (
                        <button className="hidden md:block px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-orange-500" onClick={handleLogout}>
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link to='/login'>
                                <button className="hidden md:block px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-orange-50 hover:text-orange-600 hover:border-orange-600">
                                    Login
                                </button>
                            </Link>
                            <Link to='/register'>
                                <button className="hidden md:block px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-orange-500">
                                    Register
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
            {/* <div className='hamburger' onClick={() => setShow(!show)}>
                <GiHamburgerMenu/>
            </div> */}
        </nav>
    )
};

export default Navbar