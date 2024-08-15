// File: src/Components/Navbar/Navbar.jsx
import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../../assets/digitalflaxlogo.png";

export const Navlinks = [
  { id: 1, name: "Home", link: "/home" },
  { id: 2, name: "Services", link: "/services" },
  { id: 3, name: "About", link: "/contact" },
  { id: 4, name: "Bookings", link: "/booking" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-zinc-400 shadow-lg" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="h-20 max-w-64 flex items-center justify-center animate-none">
                <img
                  src={logo}
                  alt="EaseMyWork Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {Navlinks.map(({ id, name, link }, index) => (
                <Link
                  key={id}
                  to={link}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:animate-pulse"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-300"
            >
              {showMenu ? (
                <HiX
                  className="block h-6 w-6 animate-spin"
                  aria-hidden="true"
                />
              ) : (
                <HiMenuAlt3
                  className="block h-6 w-6 animate-pulse"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          showMenu ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
          {Navlinks.map(({ id, name, link }, index) => (
            <Link
              key={id}
              to={link}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setShowMenu(false)}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
