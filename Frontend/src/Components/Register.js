import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.css";

const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [aadharNo, setAadharNo] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [gender, setGender] = useState("");
    const [experience, setExperience] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [serviceType, setServiceType] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(firstName, lastName, aadharNo, state, city, phoneNo, gender, experience, serviceType, pincode, "array");
        // if (!firstName || !lastName || !aadharNo || !state || !city || !pincode || !phoneNo || !gender || !experience || !serviceType) {
        //     toast.alert("Plase fill in all fields!")
        //     return;
        if(!firstName){
            toast.warning("Fill in First Name!")
            return;
        }
        if(!lastName){
            toast.warning("Fill in Last Name")
            return;
        }
        if(!aadharNo && aadharNo.length!==12){
            toast.warning("Fill in Aadhar No.")
            return;
        }
        if(!state){
            toast.warning("Fill in State")
            return;
        }
        if(!city){
            toast.warning("Fill in City")
            return;
        }
        if(!pincode){
            toast.warning("Fill in Pincode")
            return;
        }
        if(!gender){
            toast.warning("Select Gender")
            return;
        }
        if(!serviceType){
            toast.warning("Select Service")
            return;
        }
        if(!experience){
            toast.warning("Fill in Experience")
            return;
        }
        
        
        try {
            const empresult = await axios.post("http://localhost:8080/api/owner/registeremp", {
                first_name: firstName,
                last_name: lastName,
                aadhar_no: aadharNo,
                phone_no: phoneNo,
                state: state,
                city: city,
                phone: pincode,
                gender: gender,
                experience: experience,
                type: serviceType
            }


            );
            console.log(empresult);
            navigate("/");
        } catch (err) {
            console.error(err);
            toast.error("Sign up failed. Please try again.");
        }
    };


    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <ToastContainer position="top-center" />
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Register Employee</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Aadhar Number</label>
            <input
              type="text"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              value={aadharNo}
              onChange={(e) => setAadharNo(e.target.value)}
              minLength={12}
              maxLength={12}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              minLength={10}
              maxLength={10}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled>Select Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Experience (in years)</label>
            <input
              type="number"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              min={0}
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">State</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Pincode</label>
            <input
              type="text"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              minLength={6}
              maxLength={6}
            />
          </div>
          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">Service Type</label>
            <select
              id="serviceType"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="" disabled>Select Service Type</option>
              <option value="MAID">Maid</option>
              <option value="COOK">Cook</option>
              <option value="BABYSITTER">Babysitter</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200 font-semibold"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      
    );
};
export default Register;
