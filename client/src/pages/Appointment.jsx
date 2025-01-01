import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import appoint from '../assets/signin.png'

const AppointmentPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  // Sample departments and doctors list (replace with dynamic data from your backend)
  // const departments = [
  //   { id: 1, name: "Cardiology" },
  //   { id: 2, name: "Dermatology" },
  //   { id: 3, name: "Orthopedics" },
  //   { id: 4, name: "Pediatrics" },
  // ];

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
];

  // const doctors = [
  //   { id: 1, name: "Dr. John Doe", department: "Cardiology" },
  //   { id: 2, name: "Dr. Sarah Smith", department: "Dermatology" },
  //   { id: 3, name: "Dr. Emily Davis", department: "Orthopedics" },
  //   { id: 4, name: "Dr. Michael Brown", department: "Pediatrics" },
  // ];

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: type === "checkbox" ? checked : value,
  //   });
  // };

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
      const fetchDoctors = async () => {
      const { data } = await axios.get(
          "https://ezhealth-backend.onrender.com/api/v1/user/doctors",
          { withCredentials: true }
      );
      setDoctors(data.doctors);
      console.log(data.doctors);
      };
      fetchDoctors();
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
        try {
        const hasVisitedBool = Boolean(hasVisited);
        const { data } = await axios.post(
            "https://ezhealth-backend.onrender.com/api/v1/appointment/post",
            {
            firstName,
            lastName,
            email,
            phone,
            dob,
            gender,
            appointment_date: appointmentDate,
            department,
            doctor_firstName: doctorFirstName,
            doctor_lastName: doctorLastName,
            hasVisited: hasVisitedBool,
            address,
            },
            {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
            }
        );
        toast.success(data.message);
            setFirstName(""),
            setLastName(""),
            setEmail(""),
            setPhone(""),
            setDob(""),
            setGender(""),
            setAppointmentDate(""),
            setDepartment(""),
            setDoctorFirstName(""),
            setDoctorLastName(""),
            setHasVisited(""),
            setAddress("");
        } catch (error) {
        toast.error(error.response.data.message);
        }
  };

  return (
    <div className="bg-blue-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white text-center py-6 mt-20">
        <h1 className="text-3xl font-bold">Book an Appointment</h1>
        <p className="mt-2 text-lg">We’re here to provide you with the best care</p>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-100 py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-700">
              Expert Medical Care You Can Trust
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Our team of experienced doctors is here to ensure the best healthcare experience
              for you. Schedule your appointment now and take the first step towards a healthier
              tomorrow.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={appoint}
              alt="Doctor Consultation"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-12 px-6 md:px-16 bg-blue-100">
        <div className="max-w-4xl mx-auto bg-blue-50 shadow-lg rounded-lg p-8">
          <h3 className="text-3xl text-center font-bold text-blue-600 mb-6">Appointment Form</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            {/* DOB */}
            <div className="flex flex-col">
              <label htmlFor="dob" className="text-sm font-medium text-gray-600">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
                className="mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col">
              <label htmlFor="gender" className="text-sm font-medium text-gray-600">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                className="mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Appointment Date */}
            <div className="flex flex-col">
              <label htmlFor="appointmentDate" className="text-sm font-medium text-gray-600">
                Appointment Date
              </label>
              <input
                type="date"
                id="appointmentDate"
                name="appointmentDate"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                required
                className="mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Department */}
            <div className="flex flex-col">
              <label htmlFor="department" className="text-sm font-medium text-gray-600">
                Department
              </label>
              <select
                id="department"
                name="department"
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                  setDoctorFirstName("");
                  setDoctorLastName("");
                }}
                required
                className="mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Department</option>
                {departmentsArray.map((dept, index) => (
                  <option key={index} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            {/* Doctor */}
            <div className="flex flex-col">
              <label htmlFor="doctor" className="text-sm font-medium text-gray-600">
                Doctor
              </label>
              <select
                id="doctor"
                name="doctor"
                value={`${doctorFirstName} ${doctorLastName}`}
                onChange={(e) => {
                    const [firstName, lastName] = e.target.value.split(" ");
                    setDoctorFirstName(firstName);
                    setDoctorLastName(lastName);
                }}
                disabled={!department}
                className="mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Doctor</option>
                {doctors
                  .filter((doctor) => doctor.doctorDepartment === department)
                  .map((doctor, index) => (
                    <option value={`${doctor.firstName} ${doctor.lastName}`}
                    key={index}>
                      {doctor.firstName} {doctor.lastName}
                    </option>
                  ))}
              </select>
            </div>

            {/* Address */}
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="address" className="text-sm font-medium text-gray-600">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                rows="3"
                placeholder="Enter your address"
                className="mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            {/* Visited Before */}
            <div className="flex items-center md:col-span-2">
              <input
                type="checkbox"
                id="visitedBefore"
                name="visitedBefore"
                checked={hasVisited}
                onChange={(e) => setHasVisited(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="visitedBefore" className="text-sm text-gray-600">
                Have you visited us before?
              </label>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-8 rounded-md shadow-md hover:bg-blue-700 focus:outline-none"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AppointmentPage;
