import { FaHospital, FaUserMd, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import contact from '../assets/contact.png'

const StepsToBook = () => {
  return (
    <div className="relative bg-blue-100 py-12 mx-12 px-6 md:px-16 lg:flex lg:items-center lg:justify-around">
      {/* Floating Background Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-300 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-orange-300 rounded-full blur-xl opacity-50"></div>

      {/* Left Content - Steps */}
      <div className="relative max-w-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
          Book Your Appointment in Easy Steps
        </h2>
        <p className="text-gray-700 mt-4">
          Follow these simple steps to schedule your appointment with ease.
        </p>

        <div className="mt-8 space-y-6">
          {/* Step 1 */}
          <div className="flex items-start hover:scale-105">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-orange-500">
              <FaHospital size={20} />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Search Nearest Hospital
              </h3>
              <p className="text-gray-600">
                Find hospitals near you based on your location.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex items-start hover:scale-105">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-orange-500">
              <FaUserMd size={20} />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Select Your Doctor
              </h3>
              <p className="text-gray-600">
                Choose the best doctor for your needs and availability.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex items-start hover:scale-105">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-orange-500">
              <FaCalendarAlt size={20} />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Book Your Appointment
              </h3>
              <p className="text-gray-600">
                Schedule your visit and receive confirmation instantly.
              </p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="flex items-start hover:scale-105">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-orange-500">
              <FaPhoneAlt size={20} />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Get Reminders
              </h3>
              <p className="text-gray-600">
                Stay updated with timely notifications and reminders.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Hero Section */}
      <div className="relative mt-12 lg:mt-0 lg:ml-12">
        <div className="relative">
          <img
            src={contact} // Replace with an appropriate hero image URL
            alt="Doctor"
            className="w-[85%] rounded-lg"
          />
          {/* Floating Background Circle */}
          <div className="absolute -top-12 -right-8 -z-2 w-40 h-40 bg-blue-100 rounded-full border-4 border-blue-200"></div>
          <div className="absolute -bottom-16 -left-8 w-32 h-32 bg-blue-100 rounded-full border-4 border-blue-300"></div>
        </div>

        {/* Search Box Overlay */}
        {/* <div className="absolute bottom-10 left-10 bg-white shadow-lg p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-blue-600">
            Find the best doctor you need
          </h4>
          <form className="mt-4">
            <input
              type="text"
              placeholder="Search Doctor"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-3 text-gray-800 focus:outline-blue-600"
            />
            <input
              type="text"
              placeholder="Set Location"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-3 text-gray-800 focus:outline-blue-600"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-md px-4 py-2 font-semibold hover:bg-blue-700 transition"
            >
              Search Now
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default StepsToBook;
