import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [comment, setComment] = useState("");
  const [score, setScore] = useState(5);

  const { user } = useContext(Context);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:8080/api/user/bookings/${user.uid}`
      );
      setBookings(response.data);
      setError(null);
    } catch (err) {
      toast.error("Failed to fetch bookings. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = (order) => {
    setSelectedEmployee({ id: order[0], name: `${order[2]} ${order[3]}`, empid: order[6] });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
    setComment("");
    setScore(5);
  };

  const handleCommentSubmit = async () => {
    const ratingData = {
      employeeId: selectedEmployee.empid,
      comment,
      score,
      user: user.uid,
    };

    try {
      const response = await axios.post(`http://localhost:8080/api/user/rate`, ratingData);
      toast.success("Rating submitted successfully!");
      closeModal();
    } catch (err) {
      toast.error("Failed to submit rating. Please try again.");
    }
  };
  const { isAuthenticated } = useContext(Context);
  const navigate = useNavigate();
  useEffect(()=>{
    if (!isAuthenticated) {
      navigate("/login"); 
      }
  },[])

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Orders</h2>

        <table className="w-full bg-white border border-gray-300 shadow-lg rounded-lg">
          <thead className="bg-gradient-to-r from-red-400 to-red-600 text-white">
            <tr>
              <th className="py-3 px-4 border-b">Order ID</th>
              <th className="py-3 px-4 border-b">Employee Name</th>
              <th className="py-3 px-4 border-b">Phone No.</th>
              <th className="py-3 px-4 border-b">Amount</th>
              <th className="py-3 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((order) => (
              <tr className="text-center hover:bg-gray-50 transition-transform transform hover:scale-105" key={order[0]}>
                <td className="py-3 px-4 border-b text-gray-700">{order[1]}</td>
                <td className="py-3 px-4 border-b text-gray-700">{order[2]} {order[3]}</td>
                <td className="py-3 px-4 border-b text-gray-700">{order[4]}</td>
                <td className="py-3 px-4 border-b text-gray-700">{order[5]}</td>
                <td className="py-3 px-4 border-b">
                  <button
                    onClick={() => openModal(order)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    Comment
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Rate Employee"
          ariaHideApp={false}
          className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Rate Employee</h2>
          {selectedEmployee && (
            <>
              <p className="mb-4 text-gray-600">Employee: {selectedEmployee.name}</p>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Score (1-10):</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    className="w-full accent-red-500"
                    required
                  />
                  <span className="text-gray-800 font-medium">{score}</span>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Comments:</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Leave a comment"
                  required
                />
              </div>
              <button
                onClick={handleCommentSubmit}
                className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Submit Rating
              </button>
            </>
          )}
        </Modal>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Booking;
