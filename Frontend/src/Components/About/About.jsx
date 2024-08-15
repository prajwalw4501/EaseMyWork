import React from "react";
import cartlogo from "../../assets/cartlogo.jpg";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 py-20 sm:py-32 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img
              src={cartlogo}
              alt="Home services illustration"
              className="relative w-full max-w-lg mx-auto lg:max-w-none rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-tight">
              About Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              At our core, we believe in simplifying your life. We understand
              the challenges of finding reliable home care, and we're here to
              bridge that gap. Our platform connects you with dedicated
              professionals who are passionate about making a positive impact on
              your daily life.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We offer affordable, efficient, and trustworthy solutions tailored
              to your unique needs. With our service, you can have peace of mind
              knowing your home is in capable and caring hands.
            </p>
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
