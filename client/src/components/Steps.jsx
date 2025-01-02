import { FaHospital, FaUserMd, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import contact from '../assets/contact.png'

const StepsToBook = () => {
  return (
    <div className="relative bg-blue-100 py-12 px-6 md:px-16 mx-6 md:mx-12 lg:flex lg:items-center lg:justify-center">
      {/* Floating Background Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 md:w-40 md:h-40 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-green-300 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 md:w-28 md:h-28 bg-orange-300 rounded-full blur-xl opacity-50"></div>

      {/* Left Content - Steps */}
      <div className="relative max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600">
          Book Your Appointment in Easy Steps
        </h2>
        <p className="text-gray-700 mt-4 text-sm md:text-base">
          Follow these simple steps to schedule your appointment with ease.
        </p>

        <div className="mt-8 space-y-6 text-left">
          {/* Step 1 */}
          <div className="flex items-start hover:scale-105">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-orange-500 aspect-square overflow-hidden">
              <FaHospital size={18} />
            </div>
            <div className="ml-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-800">
                Search Nearest Hospital
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Find hospitals near you based on your location.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex items-start hover:scale-105">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-orange-500 aspect-square overflow-hidden">
              <FaUserMd size={18} />
            </div>
            <div className="ml-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-800">
                Select Your Doctor
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Choose the best doctor for your needs and availability.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex items-start hover:scale-105">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-orange-500 aspect-square overflow-hidden">
              <FaCalendarAlt size={18} />
            </div>
            <div className="ml-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-800">
                Book Your Appointment
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Schedule your visit and receive confirmation instantly.
              </p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="flex items-start hover:scale-105">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-orange-500 aspect-square overflow-hidden">
              <FaPhoneAlt size={18} />
            </div>
            <div className="ml-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-800">
                Get Reminders
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Stay updated with timely notifications and reminders.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Hero Section */}
      <div className="relative mt-12 lg:mt-0 lg:ml-12 flex justify-center">
        <div className="relative w-3/4 md:w-2/3 lg:w-auto">
          <img
            src={contact} // Replace with your hero image URL
            alt="Doctor"
            className="w-full rounded-lg"
          />
          {/* Floating Background Circles */}
          {/* <div className="absolute -top-8 md:-top-12 -right-4 md:-right-8 -z-1 w-20 h-20 md:w-40 md:h-40 bg-blue-100 rounded-full border-2 md:border-4 border-blue-200"></div>
          <div className="absolute -bottom-10 md:-bottom-16 -left-4 md:-left-8 w-16 h-16 md:w-32 md:h-32 bg-blue-100 rounded-full border-2 md:border-4 border-blue-300"></div> */}
        </div>
      </div>
    </div>

  );
};

export default StepsToBook;
