import React,{useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Context } from "../../App";


const FooterLinks = [
  { title: "Home", link: "/home" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/contact" },
  { title: "Help", link: "/#blog" },
];


const Footer = () => {
  const { isAuthenticated } = useContext(Context);
  const navigate = useNavigate();
  useEffect(()=>{
    if (!isAuthenticated) {
      navigate("/login"); 
      }
  },[])
  return (
    <footer className="relative bg-gradient-to-r pt-6 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-14 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold font-serif mb-4">EaseMyWork</h1>
            <p className="text-purple-200 mb-4">
              Our platform connects you with dedicated helpers who take care of
              your household tasks efficiently, so you can focus on what matters
              most. Enjoy hassle-free service that truly makes your life easier.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <FaLocationArrow className="text-purple-300 text-xl" />
                <p>Pune, Maharashtra</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt className="text-purple-300 text-xl" />
                <div>
                  <p>+91 9588633019</p>
                  <p>+91 7218209234</p>
                </div>
              </div>
            </div>
            {/* Social Handles */}
            <div className="flex items-center gap-4 mt-6">
              {[FaInstagram, FaFacebook, FaLinkedin].map((Icon, index) => (
                <Link
                  key={index}
                  to="#"
                  className="hover:text-purple-300 transition-colors duration-300"
                >
                  <Icon className="text-2xl hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Important Links */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Important Links</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {FooterLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    className="hover:text-purple-300 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-lg">&#8250;</span>
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-purple-400 text-center pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} EaseMyWork. All rights reserved.
          </p>
        </div>
      </div>

      {/* Frosted glass effect overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-t-3xl -z-10"></div>
    </footer>
  );
};

export default Footer;
