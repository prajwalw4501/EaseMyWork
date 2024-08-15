import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import task from "../assets/home.avif";
import logo from "../assets/digitalflaxlogo.png";
import { Context } from "../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      let alertMessage = "Please enter ";
      if (!email) alertMessage += "email";
      if (!email && !password) alertMessage += " and ";
      if (!password) alertMessage += "password";
      toast.error(alertMessage);
      return;
    }

    try {
      const result = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      setIsAuthenticated(true);
      const dummy={  email: result.data.email,
        role: result.data.role,
        firstname: result.data.first_name,
        lastname: result.data.last_name,
        uid: result.data.user_id}

      setUser(() => ({
        email: result.data.email,
        role: result.data.role,
        firstname: result.data.first_name,
        lastname: result.data.last_name,
        uid: result.data.user_id,
      }));
      sessionStorage.setItem("isAuthenticated", "true");
      sessionStorage.setItem("user",JSON.stringify(dummy));
    } catch (err) {
      console.error(err);
      toast.error("Login failed. Invalid Email & Password!");
    }
  };

  if (isAuthenticated) {
    navigate("/home");
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${task})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="max-w-md w-full space-y-8 bg-white bg-opacity-0 backdrop-filter backdrop-blur-md p-10 rounded-xl shadow-2xl relative z-10">
        <ToastContainer position="top-center" />
        <div>
          <img
            className="mx-auto h-40 w-80"
            src={logo}
            alt="Ease My Work Logo"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-800">
            Welcome Back !!
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-white rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm bg-white bg-opacity-20"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-white rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm mt-2 bg-white bg-opacity-20"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-purple-200 hover:text-purple-100"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 bg-opacity-80 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-white">
          Or{" "}
          <Link
            to="/signup"
            className="font-medium text-purple-300 hover:text-purple-200"
          >
            Sign up for an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
