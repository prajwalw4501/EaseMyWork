import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const FooterLinks = [
  { title: "Home", link: "/home" },
  { title: "About", link: "/#about" },
  { title: "Services", link: "/services" },
  { title: "Contact", link: "/contact" },
  { title: "Help", link: "/#help" },
  { title: "Privacy Policy", link: "/privacy" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {/* Company Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              EaseMyWork
            </h1>
            <p className="text-gray-300">
              Our platform connects you with dedicated helpers who take care of
              your household tasks efficiently, so you can focus on what matters
              most. Enjoy hassle-free service that truly makes your life easier.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <p>Pune, Maharashtra</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400" />
                <div>
                  <p>+91 9588633019</p>
                  <p>+91 7218209234</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <p>contact@easemywork.com</p>
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Important Links
            </h2>
            <ul className="grid grid-cols-2 gap-4">
              {FooterLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-blue-400">&#8250;</span>
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Stay Connected
            </h2>
            <p className="mb-4 text-gray-300">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-md hover:from-blue-600 hover:to-purple-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Handles */}
        <div className="mt-12 flex justify-center space-x-6">
          {[FaInstagram, FaFacebook, FaLinkedin].map((Icon, index) => (
            <Link
              key={index}
              to="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Icon className="text-2xl" />
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} EaseMyWork. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>
    </footer>
  );
};

export default Footer;
