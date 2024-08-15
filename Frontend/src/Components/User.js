import React, { useContext } from "react";
import { Context } from "../App";
import {
  FaUser,
  FaMapMarkerAlt,
  FaEnvelope,
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
    if (window.confirm("Are you sure you want to LogOut?")) {
      setIsAuthenticated(false);
      setUser({});
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("isAuthenticated");
      navigate("/", { replace: true });
     // window.location.reload();
     // window.history.pushState(null, null, window.location.href);
      // window.addEventListener("popstate", () => {
      //   navigate("/", { replace: true });
      // });
    }
  };


  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(../src/assets/wp2508260-admin-wallpapers.jpg)`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
      <div className="w-full max-w-md space-y-8 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg p-10 rounded-2xl shadow-2xl relative z-10 transform transition duration-500 hover:scale-105">
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full p-5 mb-4 shadow-lg hover:rotate-12 transition-transform duration-300 ease-in-out">
            <FaUser size={36} className="text-white" />
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-3">
            {user.firstname} {user.lastname}
          </h2>
          <p className="text-purple-200 text-lg mb-6">{user.email}</p>
        </div>

        <div className="space-y-5 mb-10">
          <UserInfoItem
            icon={<FaMapMarkerAlt className="text-indigo-400" />}
            label="Location"
            value={`${user.city}, ${user.state}`}
          />
          <UserInfoItem
            icon={<FaEnvelope className="text-indigo-400" />}
            label="Pincode"
            value={user.pincode}
          />
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-5 rounded-lg hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center shadow-xl"
        >
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default User;
