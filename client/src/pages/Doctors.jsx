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
          "http://localhost:5000/api/v1/user/doctors",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {doctors && doctors.length > 0 ? (
          doctors.map((element) => {
            return (
              <div className="card">
                <img
                  src={element.docAvatar && element.docAvatar.url}
                  alt="doctor avatar"
                />
                <h4>{`${element.firstName} ${element.lastName}`}</h4>
                <div className="details">
                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p>
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p>
                    DOB: <span>{element.dob.substring(0, 10)}</span>
                  </p>
                  <p>
                    Department: <span>{element.doctorDepartment}</span>
                  </p>
                  <p>
                    Age: <span>{element.age}</span>
                  </p>
                  <p>
                    Gender: <span>{element.gender}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Registered Doctors Found!</h1>
        )}
      </div>
    </div>
  );
};

export default DoctorsPage;
