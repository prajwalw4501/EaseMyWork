import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

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
        if (!firstName || !lastName || !aadharNo || !state || !city || !pincode || !phoneNo || !gender || !experience || !serviceType) {
            alert("Please fill in all fields.");
            return;
        }
        try {
            const empresult = await axios.post("http://localhost:8080/api/owner/registeremp", {
                firstName,
                lastName, aadharNo, phoneNo, state, city, pincode, gender, experience, serviceType
            }


            );
            console.log(empresult);
            navigate("/");
        } catch (err) {
            console.error(err);
            alert("Sign up failed. Please try again.");
        }
    };


    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Register Employee</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex space-x-4">
                    <div className="w-1/2">
                        <label className="block text-gray-700">First Name</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-gray-700">Last Name</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700">Aadhar Number</label>
                    <input
                        type="text"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        value={aadharNo}
                        onChange={(e) => setAadharNo(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Phone Number</label>
                    <input
                        type="text"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Gender</label>
                    <select
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select Gender</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>

                    </select>
                </div>
                <div>
                    <label className="block text-gray-700">Experience (in years)</label>
                    <input
                        type="number"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        required
                    />
                </div>
                <div className="flex space-x-4">
                    <div className="w-1/2">
                        <label className="block text-gray-700">City</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-gray-700">State</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700">Pincode</label>
                    <input
                        type="text"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">Service Type</label>
                    <select
                        id="serviceType"
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
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
                        className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};
export default Register;
