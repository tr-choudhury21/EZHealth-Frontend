import React, {useContext, useState } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";
import axios from "axios";
import { toast } from 'react-toastify';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from '../auth';

const RegistrationPage = () => {

    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const navigateTo = useNavigate();

    const handleRegistration = async (e) => {
        e.preventDefault();
        try {
            await axios
                .post(
                "https://ezhealth-backend.onrender.com/api/v1/user/patient/register",
                { firstName, lastName, email, phone, dob, gender, password },
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                }
                )
                .then((res) => {
                toast.success(res.data.message);
                setIsAuthenticated(true);
                navigateTo("/login");
                setFirstName("");
                setLastName("");
                setEmail("");
                setPhone("");
                setDob("");
                setGender("");
                setPassword("");
                });
            } catch (error) {
            toast.error(error.res.data.message);
            }
        };
    
        if (isAuthenticated) {
            return <Navigate to={"/"} />;
        }

    return (
        <div className="bg-blue-100 min-h-screen flex justify-center items-center">
            <div className="bg-blue-50 shadow-lg rounded-lg mt-24 mb-20 p-10 w-full max-w-4xl">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                Register
                </h2>
                <form onSubmit={handleRegistration}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div>
                    <label
                        htmlFor="firstName"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        placeholder="Enter your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>

                    {/* Last Name */}
                    <div>
                    <label
                        htmlFor="lastName"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        placeholder="Enter your last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>

                    {/* Email */}
                    <div>
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>

                    {/* Mobile Number */}
                    <div>
                    <label
                        htmlFor="mobile"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Mobile Number
                    </label>
                    <input
                        type="number"
                        id="mobile"
                        placeholder="Enter your mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>

                    {/* Date of Birth */}
                    <div>
                    <label
                        htmlFor="dob"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        id="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>

                    {/* Gender */}
                    <div>
                    <label
                        htmlFor="gender"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Gender
                    </label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        id="gender"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option defaultValue="" disabled >
                        Select your gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    </div>

                    {/* Password */}
                    <div className="md:col-span-2 relative">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 font-medium mb-2"
                    >
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
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 mt-6 rounded-lg hover:bg-blue-700"
                >
                    Register
                </button>

                {/* Redirect to Login */}
                <p className="text-center text-gray-600 mt-4">
                    Already have an account?
                    <Link to="/login" className="text-blue-600 font-medium hover:underline">
                    Login
                    </Link>
                </p>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;

