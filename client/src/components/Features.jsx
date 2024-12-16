// import React from "react";
// import { FaCalendarCheck, FaUserMd, FaLock, FaBell, FaHeadset } from "react-icons/fa";

// const FeaturesSection = () => {
//   const features = [
//     {
//       icon: <FaCalendarCheck className="text-blue-600 text-4xl" />,
//       title: "Easy Appointment Booking",
//       description: "Book your appointments seamlessly with just a few clicks.",
//     },
//     {
//       icon: <FaUserMd className="text-blue-600 text-4xl" />,
//       title: "Verified Doctors",
//       description: "Access highly qualified and experienced medical professionals.",
//     },
//     {
//       icon: <FaLock className="text-blue-600 text-4xl" />,
//       title: "Secure and Private Platform",
//       description: "Your data and medical history are completely confidential.",
//     },
//     {
//       icon: <FaBell className="text-blue-600 text-4xl" />,
//       title: "Reminders and Notifications",
//       description: "Get timely reminders and updates for your appointments.",
//     },
//     {
//       icon: <FaHeadset className="text-blue-600 text-4xl" />,
//       title: "24/7 Support",
//       description: "We’re here to help you anytime, anywhere.",
//     },
//   ];

//   return (
//     <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-16 overflow-hidden">
//       {/* Floating Background Elements */}
//       <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300 rounded-full opacity-30 animate-pulse"></div>
//       <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400 rounded-full opacity-40 animate-ping"></div>
//       <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>

//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-8">
//           Why Choose Us?
//         </h2>
//         <p className="text-gray-600 text-lg mb-12">
//           Explore the key features that make our platform stand out and provide you with
//           the best healthcare experience.
//         </p>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
//             >
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold text-blue-600">{feature.title}</h3>
//               <p className="text-gray-500 mt-2">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;




import React from "react";
import { FaCalendarAlt, FaUserMd, FaLock, FaBell, FaCapsules, FaHeartbeat, FaVideo, FaMoneyCheckAlt, FaHeadset } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    { id: 1, icon: <FaCalendarAlt />, title: "Easy Appointment Booking", description: "Schedule appointments effortlessly online." },
    { id: 2, icon: <FaUserMd />, title: "Verified Doctors", description: "Get treatment from certified professionals." },
    { id: 3, icon: <FaLock />, title: "Secure and Private Platform", description: "Your data is safe and confidential." },
    { id: 4, icon: <FaBell />, title: "Reminders and Notifications", description: "Stay updated with appointment reminders." },
    { id: 5, icon: <FaCapsules />, title: "Medicine & Precaution Recommendation", description: "Receive personalized medication guidance." },
    { id: 6, icon: <FaHeartbeat />, title: "Easy Disease Detection", description: "Identify potential issues via symptom analysis." },
    { id: 7, icon: <FaVideo />, title: "Video Consultancy By Doctors", description: "Consult doctors online via secure video calls." },
    { id: 8, icon: <FaMoneyCheckAlt />, title: "Secure Payment Features", description: "Pay safely with trusted payment gateways." },
    { id: 9, icon: <FaHeadset />, title: "24/7 Support", description: "Get assistance anytime, anywhere." },
  ];

  return (
    <section className="relative bg-blue-100 py-16 px-6 md:px-16">
      {/* Floating Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full animate-float blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-200 rounded-full animate-float-slow blur-3xl"></div>
      <div className="absolute top-40 right-10 w-16 h-16 bg-blue-300 rounded-full animate-float-fast blur-3xl"></div>

      {/* Section Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-700">Why Choose Us ?</h2>
        <p className="mt-4 text-gray-600">Experience the best healthcare services with our key features designed for your convenience.</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-blue-50 shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 group"
          >
            {/* Icon */}
            <div className="flex items-center justify-center text-blue-600 text-4xl mb-4 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300">
              {feature.icon}
            </div>
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-700 group-hover:text-orange-500">{feature.title}</h3>
            {/* Description */}
            <p className="mt-2 text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

