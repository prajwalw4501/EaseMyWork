import React, { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../App";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/digitalflaxlogo.png";

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-200 px-3 py-2 rounded-md"
  >
    {children}
  </Link>
);

const MobileMenuButton = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
  >
    <span className="sr-only">Toggle main menu</span>
    {isOpen ? (
      <HiX className="block h-6 w-6" aria-hidden="true" />
    ) : (
      <HiMenu className="block h-6 w-6" aria-hidden="true" />
    )}
  </button>
);

const Navigation = ({ isMobile = false, onItemClick = () => {} }) => {
  const navItems = [
    { to: "/register", label: "Add Employee" },
    { to: "/display", label: "Manage Employee" },
    { to: "/home", label: "Home" },
    { to: "/contact", label: "Contact Us" },
    { to: "/services", label: "Services" },
    { to: "/booking", label: "Bookings" },
  ];
  const navClassName = isMobile
    ? "flex flex-col space-y-2"
    : "hidden lg:flex lg:space-x-1";
  return (
    <nav className={navClassName}>
      {navItems.map((item) => (
        <NavLink key={item.to} to={item.to} onClick={onItemClick}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export const Header = () => {
  const { user } = useContext(Context);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const showUser = () => navigate("/user");
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-white shadow-sm w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                className="h-12 w-auto mr-3"
                src={logo}
                alt="DigitalFlax Logo"
              />
            </Link>
          </div>
          <Navigation />
          <div className="flex items-center">
            <button
              onClick={showUser}
              className="p-1 rounded-full text-gray-500 hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <span className="sr-only">View profile</span>
              <CgProfile className="h-6 w-6" />
            </button>
            <div className="ml-3 lg:hidden">
              <MobileMenuButton
                isOpen={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              />
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Navigation
              isMobile={true}
              onItemClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
