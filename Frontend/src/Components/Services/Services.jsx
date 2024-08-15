import React from "react";
import { FaCameraRetro, FaClipboardCheck, FaUserTie } from "react-icons/fa";

const servicesData = [
  {
    name: "Affordable Price",
    icon: (
      <FaCameraRetro className="text-5xl text-blue-600 group-hover:text-white transition-colors duration-300" />
    ),
    description:
      "Get exceptional service without the premium price tag. Our rates are designed to be as accessible as they are fair, giving you high-quality help at a price that fits your budget.",
  },
  {
    name: "Efficient Work",
    icon: (
      <FaClipboardCheck className="text-5xl text-blue-600 group-hover:text-white transition-colors duration-300" />
    ),
    description:
      "Time is precious, and we respect yours. Our team works swiftly and effectively, ensuring your tasks are completed to the highest standard with minimal disruption to your day.",
  },
  {
    name: "Experienced Workers",
    icon: (
      <FaUserTie className="text-5xl text-blue-600 group-hover:text-white transition-colors duration-300" />
    ),
    description:
      "Trust your home to seasoned professionals. Our workers bring a wealth of experience and dedication to every job, delivering results you can count on.",
  },
];

const ServiceCard = ({ name, icon, description }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-300 transform group-hover:scale-105"></div>
    <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 p-6 flex flex-col items-center text-center">
      <div className="text-blue-600 dark:text-blue-400 mb-4 transition-colors duration-300 group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-white transition-colors duration-300">
        {name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
        {description}
      </p>
      <button className="mt-6 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
        Learn More
      </button>
    </div>
  </div>
);

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
