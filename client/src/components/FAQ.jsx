import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import doctor from '../assets/physician.png'

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What does telemedicine mean?",
      answer:
        "Remote medical services, diagnosing and treating patients without consulting them in-person, is called telemedicine. Telemedicine, also called online doctor visits.",
    },
    {
      question: "What is telemedicine used for?",
      answer:
        "Telemedicine is used to diagnose, consult, and treat patients remotely through online communication channels like video calls and chat.",
    },
    {
      question: "What equipment do you require for telemedicine?",
      answer:
        "You need a stable internet connection, a device with a camera and microphone, and an app or website that facilitates telemedicine services.",
    },
    {
      question: "What are the pros or advantages of telemedicine?",
      answer:
        "Telemedicine provides convenience, reduces travel time, and offers quick access to medical professionals from the comfort of your home.",
    },
  ];

  return (
    <div className="relative bg-blue-10 py-12 px-6 md:px-16">
      {/* Floating Background Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-200 rounded-full blur-2xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-300 rounded-full blur-xl opacity-40"></div>

      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* Left Content - Image */}
        <div className="mb-8 lg:mb-0 lg:mr-12">
          <div className="relative">
            <img
              src={doctor} // Replace with an actual doctor image
              alt="Doctor holding FAQ"
              className="w-full h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl rounded-lg"
            />
            {/* Circular Background */}
            <div className="absolute -top-8 -left-8 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-pink-200 rounded-full blur-2xl opacity-50"></div>
          </div>
        </div>


        {/* Right Content - FAQs */}
        <div className="relative max-w-2xl">
          <h2 className="text-3xl md:text-4xl text-center font-bold text-blue-600 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 mb-8">
            A frequently asked questions (FAQ) forum is often used in articles,
            websites, email lists, and online forums where common questions
            tend to recur.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-300 pb-4"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center cursor-pointer">
                  <h3
                    className={`text-lg font-medium ${
                      openIndex === index ? "text-blue-600" : "text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <span className="text-blue-600 hover:text-orange-500">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
