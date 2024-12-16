import React from "react";
import cardio from '../assets/departments/cardio.jpg'
import derma from '../assets/departments/derma.jpg'
import ent from '../assets/departments/ent.jpg'
import neuro from '../assets/departments/neuro.jpg'
import onco from '../assets/departments/onco.jpg'
import ortho from '../assets/departments/ortho.jpg'
import pedia from '../assets/departments/pedia.jpg'
import radio from '../assets/departments/radio.jpg'
import therapy from '../assets/departments/therapy.jpg'

const departmentsData = [
  {
    id: 1,
    name: "Cardiology",
    description: "Specializing in the treatment of heart and circulatory system conditions.",
    image: cardio,
  },
  {
    id: 2,
    name: "Neurology",
    description: "Focused on diagnosing and treating disorders of the brain, spinal cord, and nerves.",
    image: neuro,
  },
  {
    id: 3,
    name: "Pediatrics",
    description: "Providing comprehensive medical care for infants, children, and adolescents.",
    image: pedia,
  },
  {
    id: 4,
    name: "Orthopedics",
    description: "Specializing in the treatment of musculoskeletal system issues, including bones, joints, and muscles.",
    image: ortho,
  },
  {
    id: 5,
    name: "Oncology",
    description: "Specialized care for the diagnosis and treatment of cancer.",
    image: onco,
  },
  {
    id: 6,
    name: "Dermatology",
    description: "Specializing in the diagnosis and treatment of skin, hair, and nail conditions.",
    image: derma,
  },
  {
    id: 7,
    name: "ENT",
    description: "Focused on treating conditions of the ear, nose, and throat.",
    image: ent,
  },
  {
    id: 8,
    name: "Therapy",
    description: "Providing physical, occupational, and speech therapy to aid recovery and improve quality of life.",
    image: therapy,
  },
  {
    id: 9,
    name: "Radiology",
    description: "Using imaging techniques like X-rays, MRI, and CT scans for diagnosis and treatment.",
    image: radio,
  },
];


const ServicesPage = () => {
  return (
    <div className="relative bg-blue-100 min-h-screen py-12 px-6 mt-12 md:px-16">
      {/* Floating Items */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
      <div className="absolute top-1/4 right-0 w-32 h-32 bg-green-300 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-1/3 w-28 h-28 bg-orange-300 rounded-full blur-xl opacity-50"></div>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
          Our Departments
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Explore our specialized medical departments to find the care you need.
        </p>
      </div>

      {/* Departments Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {departmentsData.map((department) => (
          <div
            key={department.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
          >
            {/* Department Image */}
            <div className="aspect-square"> 
              <img
                src={department.image}
                alt={department.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Department Details */}
            <div className="p-4">
              <h2 className="text-md font-semibold text-gray-800">
                {department.name}
              </h2>
              <p className="text-xs text-gray-600 mt-1">
                {department.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
