import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/ReactToastify.css";
import { Context } from '../App';


const EditUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state;

  const [formState, setFormState] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });

  useEffect(() => {
    if (user) {
      setFormState({
        //empid:employee[0],
        first_name: user[1],
        last_name: user[2],
        email: user[3],
          });
    }
  }, [user]);

  const handleChange = (e) => {
    const {name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const empidd=user[0];
    console.log(formState,typeof(formState),"make any changessssss");
    try {
     await axios.put(`http://localhost:8080/api/user/edituser/${empidd}`, formState);
     console.log(user[0]);

      console.log('User updated successfully');
      toast.success("Client Updated Successfully!");
      navigate('/users'); // Navigate back to the employee list
    } catch (err) {
      console.error('Error updating user', err);
      toast.error("Error Updating Client, Please try again!");
      navigate('/users'); // Navigate back to the employee list

    }
  };
  const { isAuthenticated } = useContext(Context);
  useEffect(()=>{
    if (!isAuthenticated) {
      navigate("/login"); 
      }
  },[])

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center p-6">
      <ToastContainer position='top-center'/>
    <div className="w-full max-w-md bg-white shadow-2xl rounded-lg p-8 border border-gray-300 overflow-hidden">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-900 text-center">Edit Client</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex gap-6">
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-2">First Name</label>
            <input
              name="first_name"
              value={formState.first_name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
            <input
              name="last_name"
              value={formState.last_name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300"
             required
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">E-Mail</label>
          <input
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300"
            type="email"
           required
            
          />
        </div>
       
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
  
  
  );
};

export default EditUser;
