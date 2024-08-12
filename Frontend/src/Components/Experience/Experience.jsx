import React from "react";
import { FaClock, FaSmile, FaProjectDiagram, FaStar } from "react-icons/fa";

const StatCard = ({ icon, number, text }) => (
  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
    <div className="flex items-center justify-center mb-4">{icon}</div>
    <h2 className="text-4xl font-bold text-center mb-2">{number}</h2>
    <p className="text-center text-gray-300">{text}</p>
  </div>
);

const Experience = () => {
  const stats = [
    {
      icon: <FaClock className="text-5xl text-blue-400" />,
      number: "12+",
      text: "Years Experience",
    },
    {
      icon: <FaSmile className="text-5xl text-green-400" />,
      number: "60+",
      text: "Happy Clients",
    },
    {
      icon: <FaProjectDiagram className="text-5xl text-purple-400" />,
      number: "120+",
      text: "Completed Projects",
    },
    {
      icon: <FaStar className="text-5xl text-yellow-400" />,
      number: "4.9",
      text: "Average Rating",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Experience by Numbers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
