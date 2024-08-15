import React, { useContext } from "react";
import { Context } from "../App";
import {
  FaUser,
  FaMapMarkerAlt,
  FaEnvelope,
  FaUserTag,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserInfoItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-2 text-gray-200">
    {icon}
    <span className="font-semibold">{label}:</span>
    <span>{value || "N/A"}</span>
  </div>
);

const User = () => {
  const { isAuthenticated, setIsAuthenticated, user, setUser } =
    useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser({});
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(../src/assets/wp2508260-admin-wallpapers.jpg)`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="w-full max-w-md space-y-8 bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-2xl relative z-10">
        <div className="text-center">
          <div className="inline-block bg-purple-600 rounded-full p-4 mb-4">
            <FaUser size={32} className="text-white" />
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-2">
            {user.firstname} {user.lastname}
          </h2>
          <p className="text-purple-300 mb-6">{user.email}</p>
        </div>

        <div className="space-y-4 mb-8">
          {/* <UserInfoItem
            icon={<FaUserTag className="text-purple-400" />}
            label="Role"
            value={user.role}
          /> */}
          <UserInfoItem
            icon={<FaMapMarkerAlt className="text-purple-400" />}
            label="Location"
            value={`${user.city}, ${user.state}`}
          />
          <UserInfoItem
            icon={<FaEnvelope className="text-purple-400" />}
            label="Pincode"
            value={user.pincode}
          />
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center justify-center"
        >
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default User;
