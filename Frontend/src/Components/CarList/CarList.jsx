import React from "react";
import profilephoto from "../../assets/profilephoto.png";
import { FaInfoCircle } from "react-icons/fa";

const employeeList = [
  {
    name: "ABC",
    service: "COOK",
    image: profilephoto,
    rating: 4.5,
  },
  {
    name: "XYZ",
    service: "MAID",
    image: profilephoto,
    rating: 4.2,
  },
  {
    name: "PJW",
    service: "BABY-SITTER",
    image: profilephoto,
    rating: 4.8,
  },
];

const EmployeeCard = ({ name, service, image, rating }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div className="relative">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="absolute top-2 right-2 bg-yellow-400 text-gray-800 px-2 py-1 rounded-full text-sm font-bold">
        ★ {rating}
      </div>
    </div>
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600 mt-1">{service}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-primary font-medium">Available Now</span>
        <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors duration-300 flex items-center">
          <FaInfoCircle className="mr-2" />
          Details
        </button>
      </div>
    </div>
  </div>
);

const CarList = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Our Star Employees
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our top-rated professionals ready to assist you with various
          household tasks. From cooking to childcare, our team is here to make
          your life easier.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {employeeList.map((employee, index) => (
            <EmployeeCard key={index} {...employee} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors duration-300">
            View All Employees
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarList;
