import React, { useEffect ,useContext} from "react";
import Prajwal from "../Admins/prajwal.jpg";
import Shriya from "../Admins/shriya.jpg";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";


const AdminCard = ({ name, role, image, linkedin, phone, location }) => (
  <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32"></div>
    <div className="relative px-6 -mt-16">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto"
      />
    </div>
    <div className="px-6 py-4 text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2 hover:text-purple-600 transition duration-300">{name}</h2>
      <p className="text-gray-600 text-lg mb-4">{role}</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition duration-300 transform hover:scale-110"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href={`tel:${phone}`}
          className="text-green-600 hover:text-green-800 transition duration-300 transform hover:scale-110"
        >
          <IoCall size={24} />
        </a>
      </div>
      <div className="mt-4 flex items-center justify-center text-gray-600">
        <FaMapMarkerAlt className="mr-2 text-purple-600" />
        <p className="text-lg">{location}</p>
      </div>
    </div>
  </div>
);

const Admins = () => {
  const admins = [
    {
      name: "Prajwal Wandhare",
      role: "Full-Stack Developer",
      image: Prajwal,
      linkedin: "https://www.linkedin.com/in/prajwal-wandhare-four5/",
      phone: "7218209234",
      location: "Pune, Maharashtra",
    },
    {
      name: "Shriya Samaddar",
      role: "Full-Stack Developer",
      image: Shriya,
      linkedin: "https://www.linkedin.com/in/shriya-samaddar/",
      phone: "9588633019",
      location: "Pune, Maharashtra",
    },
  ];
  const { isAuthenticated } = useContext(Context);
  const navigate = useNavigate();
  useEffect(()=>{
    if (!isAuthenticated) {
      navigate("/login"); 
      }
  },[])

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Meet Our Team Members
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {admins.map((admin, index) => (
            <AdminCard key={index} {...admin} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admins;
