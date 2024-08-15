import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../App";
import { Link } from "react-router-dom";

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
    setSelectedEmployee({ id: order[0], name: `${order[2]} ${order[3]}` });
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
      employeeId: selectedEmployee.id,
      comment,
      score,
      user:user.uid,
    };

    try {
      console.log(ratingData,"sdadsadsafasf");
    const response=  await axios.post(`http://localhost:8080/api/user/rate`, ratingData);
    console.log(response,"sadsadsafsafsafasfsa");
      toast.success("Rating submitted successfully!");
      closeModal();
    } catch (err) {
      toast.error("Failed to submit rating. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen ">
      <div className="container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6 flex justify-center">Your Orders</h2>

        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-slate-500">
              <th className="py-2 px-4 border-b">Order ID</th>
              <th className="py-2 px-4 border-b">Employee Name</th>
              <th className="py-2 px-4 border-b">Phone No.</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((order) => (
              <tr className="text-center px-2" key={order[0]}>
                <td className="py-2 px-4 border-b">{order[1]}</td>
                <td className="py-2 px-4 border-b">{order[2]} {order[3]}</td>
                <td className="py-2 px-4 border-b">{order[4]}</td>
                <td className="py-2 px-4 border-b">{order[5]}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => openModal(order)}
                    className="text-red-600"
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
          className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <h2 className="text-2xl font-bold mb-4">Rate Employee</h2>
          {selectedEmployee && (
            <>
              <p className="mb-4">Employee: {selectedEmployee.name}</p>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Score (1-10):</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Comments:</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Leave a comment"
                  required
                />
              </div>
              <button
                onClick={handleCommentSubmit}
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Submit Rating
              </button>
            </>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Booking;
