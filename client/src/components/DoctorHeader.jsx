import React from 'react'
import { Link } from 'react-router-dom'
import doc from '../assets/doctor.png'

const DoctorHeader = () => {
  return (
    <div className="m-24">
        <div className="relative flex flex-col lg:flex-row items-center justify-around mb-16">
          {/* Hero Image */}
        <div className="mt-8 lg:mt-0 lg:ml-8">
            <img
              src={doc}
              className="w-full max-w-md rounded-lg"
              alt="Hero Section"
              />
        </div>
          
          
          
          
          {/* Text Section */}
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
              Expertise of Experienced Medical Team
            </h1>
            <p className="text-gray-700 mt-4 text-lg">
              Explore our diverse medical teams and specialized doctors tailored to your needs.
            </p>
            
            <p className="text-gray-700 mt-2 text-md">
              Your health is our priority. Explore our expertise and experience the difference.
            </p>
            <Link to='/doctors'>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-orange-500 transition hover:scale-110">
                Explore Now
              </button>
            </Link>
          </div>
          
          
          
        </div>
    </div>
  )
}

export default DoctorHeader