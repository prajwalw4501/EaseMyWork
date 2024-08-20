import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import task from "../assets/task.png";
import logo from "../assets/digitalflaxlogo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (
      !first_name ||
      !last_name ||
      !state ||
      !city ||
      !pincode ||
      !email ||
      !password
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const result = await axios.post("http://localhost:8080/auth/signup", {
        first_name,
        last_name,
        email,
        password,
        city,
        state,
        pincode,
      });
      console.log(result);
      toast.success("Sign up successful!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      toast.error("Sign up failed. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${task})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="max-w-md w-full space-y-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md p-10 rounded-xl shadow-2xl relative z-10">
        <ToastContainer position="top-center" />
        <div className="text-center">
          <img
            className="mx-auto h-28 will-change-auto mb-4"
            src={logo}
            alt="Digitalflake Logo"
          />
          <h2 className="mt-6 text-4xl font-extrabold text-gray-800">
            Welcome to EaseMyWork
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
          <div className="rounded-md shadow-sm space-y-4">
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 text-gray-900 placeholder-gray-400 bg-white bg-opacity-80 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  placeholder="First Name"
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 text-gray-900 placeholder-gray-400 bg-white bg-opacity-80 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  placeholder="Last Name"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 text-gray-900 placeholder-gray-400 bg-white bg-opacity-80 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                minLength={6}
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 text-gray-900 placeholder-gray-400 bg-white bg-opacity-80 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/3">
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 text-gray-900 placeholder-gray-400 bg-white bg-opacity-80 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="w-1/3">
                <input
                  id="state"
                  name="state"
                  type="text"
                  required
                  className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 text-gray-900 placeholder-gray-400 bg-white bg-opacity-80 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div className="w-1/3">
                <input
                  id="pincode"
                  name="pincode"
                  type="text"
                  required
                  minLength={6}
                  maxLength={6}
                  className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 text-gray-900 placeholder-gray-400 bg-white bg-opacity-80 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  placeholder="Pincode"
                  value={pincode}
                 
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-white">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-purple-300 hover:text-purple-200 transition duration-300"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
