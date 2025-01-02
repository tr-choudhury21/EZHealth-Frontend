import React from "react";
import hero from '../assets/hero.png'
import medikit from "../assets/medikit.png"
import bg from "../assets/Vector.png"
import ServicesPage from "../components/Service";
import MessageUs from "../components/Message";
import { Link } from "react-router-dom";
import FeaturesSection from "../components/Features";
import AboutUsPage from "./About";
import services from '../assets/services.png'
import ServiceHeader from "../components/ServiceHeader";
import DoctorHeader from "../components/DoctorHeader";
import StepsToBook from "../components/Steps";
import FAQComponent from "../components/FAQ";
import PredictionHeader from "../components/PredictionHeader";

const HomePage = () => {
  return (
    <div className="bg-blue-100 min-h-screen">      

      {/* Hero Section */}
      <header className="relative pt-20">
        {/* Background Decorations */}
        <div className="absolute top-12 left-0 w-24 h-24 md:w-32 md:h-32 bg-green-300 rounded-full blur-2xl opacity-40"></div>
        <div className="absolute bottom-0 left-1/4 md:bottom-12 md:left-1/3 w-20 h-20 md:w-28 md:h-28 bg-red-300 rounded-full blur-2xl opacity-50"></div>

        {/* Main Content */}
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-8 relative">
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Serving Your <span className="text-orange-500">Health</span> Needs
              <br />
              Is Our <span className="text-orange-500">Priority</span>.
            </h1>
            <p className="mt-4 text-gray-600 text-sm md:text-base">
              There’s nothing more important than our good health because it is
              our principal capital asset for our future.
            </p>
            <Link to="/appointment">
              <button className="mt-6 px-4 md:px-6 py-2 md:py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-orange-500 transition hover:scale-105">
                Make Appointment
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative md:w-1/2 flex justify-center md:justify-end">
            <img
              src={hero}
              alt="Doctor"
              className="rounded-lg w-2/3 md:w-auto animate-float2 relative"
            />
          </div>
        </div>

        {/* Floating Components */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-24 left-20 w-12 h-12 md:w-16 md:h-16 bg-blue-200 rounded-full flex items-center justify-center shadow-md animate-float3">
            <img src={medikit} alt="Icon" className="w-10 h-10 md:w-12 md:h-12" />
          </div>
          <div className="absolute bottom-0 right-6 md:bottom-10 md:right-48 w-16 h-16 md:w-20 md:h-20 bg-orange-200 rounded-full flex items-center justify-center shadow-md animate-float3">
            <img src="https://via.placeholder.com/50" alt="Icon" className="w-8 h-8 md:w-10 md:h-10" />
          </div>
          {/* <div className="absolute top-20 right-10 md:right-12 w-16 h-16 md:w-20 md:h-20 bg-orange-200 rounded-full flex items-center justify-center shadow-md animate-float2">
            <img src={bg} alt="Icon" className="w-8 h-8 md:w-10 md:h-10" />
          </div> */}
          <div className="absolute top-48 right-6 md:top-40 md:right-14 w-16 h-16 md:w-20 md:h-20 bg-green-200 rounded-full flex items-center justify-center shadow-md">
            <img src="https://via.placeholder.com/50" alt="Icon" className="w-8 h-8 md:w-10 md:h-10" />
          </div>
        </div>
      </header>


      {/* <ServicesPage/> */}
      {/* <AboutUsPage/> */}
      <StepsToBook/>
      <ServiceHeader/>
      <DoctorHeader/>
      <PredictionHeader/>
      <FeaturesSection/>
      <FAQComponent/>
      <MessageUs/>
    </div>
  );
};

export default HomePage;
