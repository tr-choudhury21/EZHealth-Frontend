import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MessageUs = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");


  const handleMessage = async(e)=>{
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/v1/message/send",
        {firstName, lastName, email, phone, message},
        {
          withCredentials: true,
          headers:{ "Content-Type" : "application/json"},

        }).then(res=>{
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="relative bg-blue-100 py-12 px-6 md:px-16">
      {/* Floating Background */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full blur-2xl opacity-50 animate-float1"></div>
      <div className="absolute top-1/4 right-0 w-32 h-32 bg-green-300 rounded-full blur-3xl opacity-40 animate-float2"></div>
      <div className="absolute bottom-0 left-1/3 w-28 h-28 bg-orange-300 rounded-full blur-xl opacity-50 animate-float3"></div>

      <div className="max-w-3xl mx-auto bg-blue-50 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 text-center">
          Message Us
        </h2>
        <form onSubmit={handleMessage} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-sm font-medium text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="Enter your first name"
              className="mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-sm font-medium text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="Enter your last name"
              className="mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-medium text-gray-600">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone} 
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="Enter your phone number"
              className="mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2 flex flex-col">
            <label htmlFor="message" className="text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Type your message here..."
              rows="5"
              className="mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-orange-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageUs;
