import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarCheck } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-black text-white py-24 sm:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Let's Collaborate in Making Your Home Divine!
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Transform your living space with our expert services. Book now and
            experience the difference!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-gray-900 bg-white hover:bg-gray-100 transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Services
              <FaArrowRight className="ml-2" />
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <FaCalendarCheck className="mr-2" />
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent"></div>
    </section>
  );
};

export default Contact;
