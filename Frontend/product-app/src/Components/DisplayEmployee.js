import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DisplayEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:8080/api/owner/allemps"
      );
      setEmployees(response.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching employees", err);
      setError("Failed to fetch employees. Please try again later.");
      toast.error("Failed to fetch employees. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (employee) => {
    const editId = employee[0];
    navigate(`/editemp/${editId}`, { state: { employee } });
    console.log(`Edit employee with ID ${editId}`);
  };

  const handleDelete = async (empId) => {
    try {
      await axios.delete(`http://localhost:8080/api/owner/deleteemp/${empId}`);
      toast.success("Employee deleted successfully");
      fetchEmployees();
    } catch (err) {
      console.error("Error deleting employee", err);
      toast.error("Failed to delete employee. Please try again.");
    }
  };

  const EmployeeRow = ({ employee }) => {
    const empId = employee[0];
    return (
      <tr key={empId} className="border-b border-gray-300 hover:bg-gray-50">
        <td className="py-3 px-6 text-gray-700">{empId}</td>
        <td className="py-3 px-6 text-gray-700">{employee[1]}</td>
        <td className="py-3 px-6 text-gray-700">{employee[2]}</td>
        <td className="py-3 px-6 text-gray-700">{employee[3]} Yrs</td>
        <td className="py-3 px-6 text-gray-700">{employee[4]}</td>
        <td className="py-3 px-6 text-gray-700">{employee[5]}</td>
        <td className="py-3 px-6 text-gray-700">{employee[6]}</td>
        <td className="py-3 px-6 text-gray-700">{employee[7]}</td>
        <td className="py-3 px-6 text-gray-700">{employee[8]}</td>
        <td className="py-3 px-6 flex items-center space-x-2">
          <button
            onClick={() => handleEdit(employee)}
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <FaEdit size={20} />
          </button>
          <button
            onClick={() => handleDelete(empId)}
            className="text-red-600 hover:text-red-800 transition-colors duration-200"
          >
            <FaTrash size={20} />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <ToastContainer position="top-center" />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          Employee Details
        </h1>
        {isLoading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading employees...</p>
          </div>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : employees.length === 0 ? (
          <p className="text-center text-gray-500">No employees found.</p>
        ) : (
          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full">
              <thead className="bg-gray-200 border-b border-gray-300">
                <tr>
                  <th className="py-3 px-6 text-left text-gray-600">ID</th>
                  <th className="py-3 px-6 text-left text-gray-600">
                    First Name
                  </th>
                  <th className="py-3 px-6 text-left text-gray-600">
                    Last Name
                  </th>
                  <th className="py-3 px-6 text-left text-gray-600">
                    Experience
                  </th>
                  <th className="py-3 px-6 text-left text-gray-600">Gender</th>
                  <th className="py-3 px-6 text-left text-gray-600">
                    Phone No.
                  </th>
                  <th className="py-3 px-6 text-left text-gray-600">
                    Aadhar No.
                  </th>
                  <th className="py-3 px-6 text-left text-gray-600">City</th>
                  <th className="py-3 px-6 text-left text-gray-600">Service</th>
                  <th className="py-3 px-6 text-left text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <EmployeeRow key={employee[0]} employee={employee} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayEmployee;
