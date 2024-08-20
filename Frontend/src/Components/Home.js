import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Testimonial from "../Components/Testimonial/Testimonial";
import CarList from "../Components/CarList/CarList";
import Contact from "../Components/Contact/Contact";

import backgroundImage from "../assets/task.png";
import { Context } from "../App"; // Import your authentication context

const Home = () => {
  const { isAuthenticated } = useContext(Context);
  const navigate = useNavigate();
useEffect(()=>{
  if (!isAuthenticated) {
    navigate("/login"); 
    }
},[])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <div
        className="fixed inset-0 bg-cover bg-center bg-fixed -z-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="fixed inset-0 bg-black opacity-30 -z-10" />
      <main className="relative z-10 pt-16 md:pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Services />
          <CarList />
          <Testimonial />
          <Contact />
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-20 md:hidden">
        <nav className="flex justify-around py-3">
          {["Home", "Services", "Contact"].map((item, index) => (
            <Link
              key={item}
              to={index === 0 ? "/" : `/${item.toLowerCase()}`}
              className="flex flex-col items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Add SVG paths here */}
              </svg>
              <span className="text-xs">{item}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Home;
