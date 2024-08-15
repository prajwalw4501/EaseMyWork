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
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-300 transform group-hover:scale-105"></div>
    <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="absolute top-2 right-2 bg-yellow-400 text-gray-800 px-2 py-1 rounded-full text-sm font-bold">
          ★ {rating}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-1">{service}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            Available Now
          </span>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-colors duration-300 flex items-center shadow-md hover:shadow-lg">
            <FaInfoCircle className="mr-2" />
            Details
          </button>
        </div>
      </div>
    </div>
  </div>
);

const EmployeeList = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Our Star Employees
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          Discover our top-rated professionals ready to assist you with various
          household tasks. From cooking to childcare, our team is here to make
          your life easier.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {employeeList.map((employee, index) => (
            <EmployeeCard key={index} {...employee} />
          ))}
        </div>
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View All Employees
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmployeeList;
