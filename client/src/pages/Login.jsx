import React, {useContext, useState} from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { toast } from "react-toastify";
import { Link, useNavigate, Navigate } from "react-router-dom";
import {Context} from '../auth'
import axios from "axios";
import Loader from "../components/Loader";

const LoginPage = () => {

    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };


    const navigateTo = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();
        setLoading(true); // Indicate login is in progress
        try {
        const res = await axios
            .post(
            "http://localhost:5000/api/v1/user/login",
            { email, password,  role: "Patient" },
            {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            }
            )
            toast.success(res.data.message);
            setIsAuthenticated(true);
            navigateTo("/");
            setEmail("");
            setPassword("");
        } catch (error) {
            toast.error(error.res.data.message);
        }
        finally {
            setLoading(false); // Stop loading spinner
        }
    };

    if (loading) {
        <Loader/>; // Optional: Add a spinner or placeholder during loading
    }

    if (isAuthenticated) {
        return <Navigate to={"/"} />;
    }


    

    return (
        <div className="bg-blue-100 min-h-screen flex justify-center items-center">
            <div className="bg-blue-50 shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Login</h2>
                <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-6 relative">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                    Password
                    </label>
                    <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute top-11 right-4 flex items-center text-gray-600 hover:text-blue-500 focus:outline-none"
                    >
                        {showPassword ? (
                        <IoEye/>
                        ) : (
                        <IoEyeOff/>
                        )}
                    </button>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700"
                >
                    Login
                </button>
                <p className="text-center text-gray-600 mt-4">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-600 font-medium hover:underline">
                    Register
                    </Link>
                </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
