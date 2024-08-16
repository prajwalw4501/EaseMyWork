import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.css";
import { Context } from '../App';

const Register = () => {
    const [isLoading, setIsLoading] = useState(true);
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

        if (!firstName) {
            toast.warning("Fill in First Name!");
            return;
        }
        if (!lastName) {
            toast.warning("Fill in Last Name");
            return;
        }
        if (!aadharNo && aadharNo.length !== 12) {
            toast.warning("Fill in Aadhar No.");
            return;
        }
        if (!state) {
            toast.warning("Fill in State");
            return;
        }
        if (!city) {
            toast.warning("Fill in City");
            return;
        }
        if (!pincode) {
            toast.warning("Fill in Pincode");
            return;
        }
        if (!gender) {
            toast.warning("Select Gender");
            return;
        }
        if (!serviceType) {
            toast.warning("Select Service");
            return;
        }
        if (!experience) {
            toast.warning("Fill in Experience");
            return;
        }

        try {
            setIsLoading(true);
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
            });

            console.log(empresult);
            navigate("/home");
        } catch (err) {
            console.error(err);
            toast.error("Sign up failed. Please try again.");
        } finally{
            setIsLoading(false);
        }
    };
    const { isAuthenticated } = useContext(Context);
    useEffect(()=>{
        if (!isAuthenticated) {
          navigate("/login"); 
          }
      },[])

    return (
        <div className='bg-transparent py-6'>
        <div className="max-w-lg mx-auto min-h-screen bg-slate-400  p-6 shadow-2xl rounded-lg">
            <ToastContainer position="top-center" />
            <h2 className="text-4xl font-extrabold text-center text-white mb-6 drop-shadow-lg">Register Employee</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex space-x-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-white">First Name</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-3 border-2 border-transparent rounded-md shadow-lg bg-white text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-white">Last Name</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-3 border-2 border-transparent rounded-md shadow-lg bg-white text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-white">Aadhar Number</label>
                    <input
                        type="text"
                        className="w-full mt-1 p-3 border-2 border-transparent rounded-md shadow-lg bg-white text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                        value={aadharNo}
                        onChange={(e) => setAadharNo(e.target.value)}
                        minLength={12}
                        maxLength={12}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-white">Phone Number</label>
                    <input
                        type="text"
                        className="w-full mt-1 p-3 border-2 border-transparent rounded-md shadow-lg bg-white text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        minLength={10}
                        maxLength={10}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-white">Gender</label>
                    <select
                        className="w-full mt-1 p-3 border-2 border-transparent rounded-md shadow-lg bg-white text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="" disabled>Select Gender</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-white">Experience (in years)</label>
                    <input
                        type="number"
                        className="w-full mt-1 p-3 border-2 border-transparent rounded-md shadow-lg bg-white text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        min={0}
                    />
                </div>
                <div className="flex space-x-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-white">City</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-3 border-2 border-transparent rounded-md shadow-lg bg-white text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-white">State</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-3 border-2 border-transparent rounded-md shadow-lg bg-white text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-white">Pincode</label>
                    <input
                        type="text"
                        className="w-full mt-1 p-3 border-2 border-transparent rounded-md shadow-lg bg-white text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        minLength={6}
                        maxLength={6}
                    />
                </div>
                <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-white">Service Type</label>
                    <select
                        id="serviceType"
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full mt-1 p-3 border-2 border-transparent rounded-md shadow-lg bg-white text-gray-900 focus:ring-teal-500 focus:border-teal-500"
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
                        className="w-full py-3 px-4 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-transform duration-300 ease-in-out transform hover:scale-105 font-semibold shadow-lg"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Register;
