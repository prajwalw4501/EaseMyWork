import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [duration, setDuration] = useState("");
    const navigate = useNavigate();
  
    const handleBooking = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post(
          `http://localhost:8080/book-service`,
          {
           // employeeId,
            date,
            time,
            duration,
          },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        );
  
        console.log(response.data);
        alert("Service booked successfully!");
        navigate("/booking-confirmation"); // Redirect to a confirmation page or similar
      } catch (error) {
        console.error(error);
        alert("Failed to book service. Please try again.");
      }
    };
  
    return (
      <div className="max-w-md mx-auto bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Book a Service</h2>
        <form onSubmit={handleBooking}>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 mb-2">
              Select Date:
            </label>
            <input
              type="date"
              id="date"
              className="w-full p-2 border border-gray-300 rounded"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700 mb-2">
              Select Time:
            </label>
            <input
              type="time"
              id="time"
              className="w-full p-2 border border-gray-300 rounded"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="duration" className="block text-gray-700 mb-2">
              Duration (hours):
            </label>
            <input
              type="number"
              id="duration"
              className="w-full p-2 border border-gray-300 rounded"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
          >
            Book Now
          </button>
        </form>
      </div>
    );
  };
export default Booking
