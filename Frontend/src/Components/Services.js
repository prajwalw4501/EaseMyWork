import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";

const Services = () => {
  const allCities = [
    "Nagpur",
    "Pune",
    "Mumbai",
    "Bangalore",
    "Delhi",
    "Chennai",
    "Haveli",
  ];
  const [employees, setEmployees] = useState([]);
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setSelectedemployee } = useContext(Context);

  useEffect(() => {
    fetchUserLocation();
  }, []);

  const fetchUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await axios.get(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            handleLocationSearch(response.data.city);
          } catch (err) {
            console.error("Error fetching city from coordinates", err);
            toast.error(
              "Failed to fetch your location. Please select a city manually."
            );
          }
        },
        (error) => {
          console.error("Geolocation error", error);
          toast.warning(
            "Unable to get your location. Please select a city manually."
          );
        }
      );
    } else {
      toast.warning(
        "Geolocation is not supported by this browser. Please select a city manually."
      );
    }
  };

  const handleLocationSearch = async (searchCity) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8080/api/user/empbycity/?city=${searchCity}`
      );
      setEmployees(response.data);
      setCity(searchCity);
    } catch (err) {
      console.error("Error fetching employees by location", err);
      toast.error("Failed to fetch employees. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookService = (employee) => {
    setSelectedemployee(Object.values(employee));
    navigate("/book");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <ToastContainer position="top-center" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
            Find Service Providers
          </h1>
          <div className="flex w-full md:w-auto">
            <select
              className="w-full md:w-auto p-2 rounded-l border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-600"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            >
              <option value="" disabled>
                Select City
              </option>
              {allCities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <button
              onClick={() => handleLocationSearch(city)}
              className="bg-slate-900 text-white p-2 rounded-r hover:bg-slate-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-600"
              disabled={isLoading}
            >
              {isLoading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-slate-900"></div>
          </div>
        ) : employees.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {employees.map((employee) => (
              <div
                key={employee[0]}
                className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {employee[1]} {employee[2]}
                </h2>
                <p className="text-gray-700 mb-1">
                  Experience: {employee[3]} years
                </p>
                <p className="text-gray-700 mb-1">Gender: {employee[4]}</p>
                <p className="text-gray-700 mb-1">City: {employee[5]}</p>
                <p className="text-gray-700 mb-1">Service: {employee[6]}</p>
                <p className="text-gray-700 font-semibold">
                  Amount: ₹{employee[7]}/month
                </p>
                <button
                  onClick={() => handleBookService(employee)}
                  className="mt-4 w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                >
                  Book Service
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-xl">
            No service providers found. Try searching in a different city.
          </p>
        )}
      </div>
    </div>
  );
};

export default Services;
