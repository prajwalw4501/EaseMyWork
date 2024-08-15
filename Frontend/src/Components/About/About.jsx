import React from "react";
import cartlogo from "../../assets/cartlogo.jpg";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 py-16 sm:py-24 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="order-2 lg:order-1 relative"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img
              src={cartlogo}
              alt="Home services illustration"
              className="w-full max-w-lg mx-auto lg:max-w-none lg:w-[50%] lg:-translate-x-[5%] rounded-lg shadow-2xl transition-transform duration-300 hover:scale-125"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-bold font-serif text-gray-800 dark:text-white leading-tight"
            >
              About Our Mission
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              At our core, we believe in simplifying your life. We understand
              the challenges of finding reliable home care, and we're here to
              bridge that gap. Our platform connects you with dedicated
              professionals who are passionate about making a positive impact on
              your daily life.
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              We offer affordable, efficient, and trustworthy solutions tailored
              to your unique needs. With our service, you can have peace of mind
              knowing your home is in capable and caring hands.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="400"
              className="relative inline-flex items-center justify-center p-1 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300 ease-in-out"
            >
              <span className="relative px-6 py-3 transition-all ease-in duration-150 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 group-hover:text-white">
                Start Your Journey
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
