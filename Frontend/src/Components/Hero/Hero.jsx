import React from "react";
import herologo from "../../assets/herologo.jpg";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
              Manage Your Home with Ease
            </h1>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              Simplify your household tasks while making a meaningful impact.
              Our platform connects you with experienced individuals for
              Cleaning, Cooking, and Babysitting. Choose from a pool of
              dedicated helpers, tailor your service options, and enjoy a
              seamless booking process. Manage your home effortlessly while
              supporting those who need it most.
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out">
              Get Started
              <FaArrowRight className="ml-2" />
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={herologo}
              alt="Home Management"
              className="w-full max-w-lg mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
