import React, { useContext, useState } from "react";
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
      className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-200"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {children}
    </Link>
  );

  const renderNavLinks = () => (
    <>
      {user.role === "ROLE_OWNER" && (
        <>
          <NavLink to="/register">Add Employee</NavLink>
          <NavLink to="/display">Manage Employee</NavLink>
        </>
      )}
      {user.role === "ROLE_USER" && (
        <>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/booking">Bookings</NavLink>
        </>
      )}
    </>
  );

  return (
    <header className="relative z-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-full dark:bg-slate-700 dark:text-white">
      <div className="container mx-auto px-4 py-4 md:py-0">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold font-serif">EaseMyWork</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {renderNavLinks()}
            <div className="relative">
              <CgProfile
                className="size-10 text-gray-500 cursor-pointer hover:text-primary transition-colors duration-200"
                onClick={showUser}
              />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-primary transition-colors duration-200"
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4">
            {renderNavLinks()}
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">Profile</span>
              <CgProfile
                className="size-8 text-gray-500 cursor-pointer hover:text-primary transition-colors duration-200"
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
