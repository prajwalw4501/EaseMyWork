import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Rating = () => {
  const { id } = useParams(); // Get the employee ID from the URL
  const navigate = useNavigate();
  
  const [score, setScore] = useState(5); // Default score to 5
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the rating data object
    const ratingData = {
      employeeId: id,
      score,
      comment,
    };

    // You can handle the submission logic here, such as sending the ratingData to the server
    console.log('Rating submitted:', ratingData);

    // After submission, navigate back or to a success page
    navigate('/somepath');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Rate Employee</h2>
      <form onSubmit={handleSubmit()}>
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
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit Rating
        </button>
      </form>
    </div>
  );
};

export default Rating;
