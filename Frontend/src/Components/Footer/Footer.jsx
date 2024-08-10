import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Help",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              EseMyWork
            </h1>
            <p className="text-sm">
            Our platform connects you with dedicated helpers who take care of your household tasks efficiently, so you can focus on what matters most. Enjoy hassle-free service that truly makes your life easier.
            {" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Pune, Maharashtra</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <div className="space-y-1">
              <p>+91 9588633019</p>
              <p>+91 7218209234</p>
              </div>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <Link to="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </Link>
              <Link to="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </Link>
              <Link to="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </Link>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
       
            </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
