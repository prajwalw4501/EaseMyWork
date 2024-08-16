import React, { useContext, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../App";
import { HiMenu, HiX } from "react-icons/hi";

export const Header = () => {
  const { user } = useContext(Context);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const showUser = () => {
    navigate("/user");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className="text-lg font-semibold text-gray-700 hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-200"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {children}
    </Link>
  );

  const renderNavLinks = () => (
    <>
      {user.role === "ROLE_OWNER" && (
        <>
          <NavLink
            to="/register"
            className="text-white font-medium text-lg px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-purple-700 hover:text-purple-200 hover:-translate-y-1 hover:scale-110"
            activeClassName="bg-purple-800 text-purple-300"
          >
            Add Employee
          </NavLink>
          <NavLink
            to="/display"
            className="text-white font-medium text-lg px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-purple-700 hover:text-purple-200 hover:-translate-y-1 hover:scale-110"
            activeClassName="bg-purple-800 text-purple-300"
          >
            Manage Employee
          </NavLink>
          <NavLink
            to="/users"
            className="text-white font-medium text-lg px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-purple-700 hover:text-purple-200 hover:-translate-y-1 hover:scale-110"
            activeClassName="bg-purple-800 text-purple-300"
          >
            Manage Clients
          </NavLink>
        </>
      )}
      {user.role === "ROLE_USER" && (
        <>
          <NavLink
            to="/home"
            className="text-white font-medium text-lg px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-700 hover:text-blue-200 hover:-translate-y-1 hover:scale-110"
            activeClassName="bg-blue-800 text-blue-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className="text-white font-medium text-lg px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-700 hover:text-blue-200 hover:-translate-y-1 hover:scale-110"
            activeClassName="bg-blue-800 text-blue-300"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/services"
            className="text-white font-medium text-lg px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-700 hover:text-blue-200 hover:-translate-y-1 hover:scale-110"
            activeClassName="bg-blue-800 text-blue-300"
          >
            Services
          </NavLink>
          <NavLink
            to="/booking"
            className="text-white font-medium text-lg px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-700 hover:text-blue-200 hover:-translate-y-1 hover:scale-110"
            activeClassName="bg-blue-800 text-blue-300"
          >
            Bookings
          </NavLink>
        </>
      )}
    </>
  );
  const { isAuthenticated } = useContext(Context);
  useEffect(()=>{
    if (!isAuthenticated) {
      navigate("/login"); 
      }
  },[])

  return (
    <header className="relative z-20 shadow-md w-full h-16 bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="container mx-auto px-4 py-4 md:py-0">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold font-serif text-primary">
            <NavLink to="/home" className="hover:text-primary-hover">
              EaseMyWork
            </NavLink>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {renderNavLinks()}
            <div className="relative">
              <CgProfile
                className="text-3xl text-gray-500 dark:text-gray-300 cursor-pointer hover:text-primary transition-colors duration-200"
                onClick={showUser}
              />
            </div>
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 dark:text-gray-300 hover:text-primary transition-colors duration-200"
            >
              {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg">
            {renderNavLinks()}
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300">Profile</span>
              <CgProfile
                className="text-3xl text-gray-500 dark:text-gray-300 cursor-pointer hover:text-primary transition-colors duration-200"
                onClick={() => {
                  showUser();
                  setIsMobileMenuOpen(false);
                }}
              />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
