import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Testimonial from "../Components/Testimonial/Testimonial";
import CarList from "../Components/CarList/CarList";
import Contact from "../Components/Contact/Contact";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      {/* Main Content */}
      <main className="flex-grow overflow-y-auto">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
          <Hero />
          <About />
          <Services />
          <CarList />
          <Testimonial />
          <Contact />
        </div>
      </main>

      {/* Mobile Navigation */}
      <nav className="sticky bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-20 md:hidden">
        <div className="flex justify-around py-3">
          {[
            {
              name: "Home",
              path: "/",
              icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
            },
            {
              name: "Services",
              path: "/services",
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
            },
            {
              name: "Contact",
              path: "/contact",
              icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
            },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex flex-col items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={item.icon}
                />
              </svg>
              <span className="text-xs">{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Home;
