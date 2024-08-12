import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaSpinner } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let's Collaborate in Making Your Home Divine!
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your living space with our expert services. Book now and
            experience the difference!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition duration-300 ease-in-out"
            >
              Explore Services
              <FaArrowRight className="ml-2" />
            </Link>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out">
              <FaSpinner className="animate-spin mr-2" />
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
