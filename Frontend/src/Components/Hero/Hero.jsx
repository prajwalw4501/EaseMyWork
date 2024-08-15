import React from "react";
import herologo from "../../assets/herologo.jpg";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Manage Your Home with Ease
            </h1>
            <p className="text-lg mb-10 text-gray-600 dark:text-gray-300 leading-relaxed">
              Simplify your household tasks while making a meaningful impact.
              Our platform connects you with experienced individuals for
              Cleaning, Cooking, and Babysitting. Choose from a pool of
              dedicated helpers, tailor your service options, and enjoy a
              seamless booking process.
            </p>
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started
              <FaArrowRight className="ml-2" />
            </button>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-3xl opacity-30 animate-pulse"></div>
            <img
              src={herologo}
              alt="Home Management"
              className="relative w-full max-w-2xl mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
