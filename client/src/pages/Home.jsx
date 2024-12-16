import React from "react";
import hero from '../assets/hero.png'
import medikit from "../assets/medikit.png"
import bg from "../assets/Vector.png"
import ServicesPage from "../components/Service";
import MessageUs from "../components/Message";
import { Link } from "react-router-dom";
import FeaturesSection from "../components/Features";

const HomePage = () => {
  return (
    <div className="bg-blue-100 min-h-screen">      

      {/* Hero Section */}
      <header className="relative pt-20">
      <div className="absolute top-12 left-0 w-32 h-32 bg-green-300 rounded-full blur-2xl opacity-40"></div>
      <div className="absolute bottom-0 left-1/3 w-28 h-28 bg-red-300 rounded-full blur-2xl opacity-40"></div>
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-snug">
              Serving Your Health Needs <br /> Is Our Priority.
            </h1>
            <p className="mt-4 text-gray-600">
              There’s nothing more important than our good health because it is
              our principal capital asset for our future.
            </p>
            <Link to='/appointment'><button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-orange-500">
              Make Appointment
            </button></Link>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 relative">
            <img
              src={hero}
              alt="Doctor"
              className="rounded-lg animate-float2"
            />
            
            {/* Floating Components */}
            <div className="absolute top-4 left-8 w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center shadow-md animate-float3">
              <img
                src={medikit}
                alt="Icon"
                className="w-16 h-16"
              />
            </div>
            <div className="absolute bottom-0 right-12 w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center shadow-md animate-float3">
              <img
                src="https://via.placeholder.com/50"
                alt="Icon"
                className="w-10 h-10"
              />
            </div>
            <div className="absolute top-10 right-12 w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center shadow-md animate-float2">
              <img
                src={bg}
                alt="Icon"
                className="w-10 h-10"
              />
            </div>
            <div className="absolute top-40 right-14 w-20 h-20 bg-green-200 rounded-full flex items-center justify-center shadow-md">
              <img
                src="https://via.placeholder.com/50"
                alt="Icon"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
      </header>
      {/* <ServicesPage/> */}
      <FeaturesSection/>
      <MessageUs/>
    </div>
  );
};

export default HomePage;
