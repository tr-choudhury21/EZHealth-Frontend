import React, {useState, useEffect} from "react";
import axios from "axios";
import { toast } from "react-toastify";


const doctorsData = [
  {
    id: 1,
    name: "Dr. Anna Lindemann",
    specialty: "Cardiologist",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Dr. Michael Tan",
    specialty: "Orthopedic Surgeon",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Dr. Sarah Kim",
    specialty: "Neurologist",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Dr. David Wilson",
    specialty: "Pediatrician",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Dr. David Wilson",
    specialty: "Pediatrician",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Dr. David Wilson",
    specialty: "Pediatrician",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Dr. David Wilson",
    specialty: "Pediatrician",
    image: "https://via.placeholder.com/150",
  },
];

const DoctorsPage = () => {

  const [doctors, setDoctors] = useState([]);
  // const { isAuthenticated } = useContext(Context);
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "https://ezhealth-backend.onrender.com/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchDoctors();
  }, []);


  return (
    <div className="relative bg-blue-100 min-h-screen py-12 mt-12 px-6 md:px-16">
      {/* Floating Items */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute top-1/3 right-0 w-40 h-40 bg-orange-200 rounded-full blur-2xl opacity-40"></div>
      <div className="absolute bottom-0 left-1/4 w-28 h-28 bg-green-300 rounded-full blur-xl opacity-50"></div>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
          Our Doctors
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Meet our highly qualified specialists, ready to take care of your
          health.
        </p>
      </div>

      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        {doctors && doctors.length > 0 ? (
          doctors.map((element, index) => {
            return (
              <div
                key={index}
                className="card bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex justify-center items-center mt-6 transform transition duration-300 hover:scale-150">
                  <img
                    src={element.docAvatar && element.docAvatar.url}
                    alt="doctor avatar"
                    className="w-24 h-24 object-cover rounded-full border-4 border-gray-300 shadow-md"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg text-center font-bold text-gray-800">
                    {`${element.firstName} ${element.lastName}`}
                  </h4>
                  <div className="details mt-2 text-gray-600">
                    <p>
                      <span className="font-semibold">Email:</span> {element.email}
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span> {element.phone}
                    </p>
                    <p>
                      <span className="font-semibold">DOB:</span>{" "}
                      {element.dob.substring(0, 10)}
                    </p>
                    <p>
                      <span className="font-semibold">Department:</span>{" "}
                      {element.doctorDepartment}
                    </p>
                    <p>
                      <span className="font-semibold">Age:</span> {element.age}
                    </p>
                    <p>
                      <span className="font-semibold">Gender:</span> {element.gender}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="col-span-full text-center text-2xl font-bold text-gray-500">
            No Registered Doctors Found!
          </h1>
        )}
      </div>

    </div>
  );
};

export default DoctorsPage;
