import React from "react";
//import CarPng from "../../assets/car1.png";
import cartlogo from "../../assets/cartlogo.jpg";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={cartlogo}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About Us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
              We understand that finding reliable help for your home can be challenging.
              Your home deserves the best care, and finding reliable help should be simple. We’re here to make that happen 
              by connecting you with dedicated individuals who are ready to make a difference in your daily life. 
              We offer affordable, efficient, and trustworthy solutions that fit your needs perfectly. With our platform,
               you can rest easy knowing your home is in the hands of those who truly care.

              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
