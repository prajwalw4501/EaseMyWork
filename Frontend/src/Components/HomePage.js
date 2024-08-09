import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  // Set this to true if you want to use a video background instead of animation
  const useVideoBackground = false;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {useVideoBackground ? (
        // Video Background
        <video
          autoPlay
          loop
          muted
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        // Animated Background
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white opacity-10 rounded-full"
              style={{
                width: `${Math.random() * 300}px`,
                height: `${Math.random() * 300}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${2 + Math.random() * 4}s linear infinite`, // Faster animation
                animationDelay: `${Math.random() * 2}s`, // Shorter delay
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-white mb-8 shadow-text">
          Welcome to Ease My Work
        </h1>
        <p className="text-xl text-white mb-12 shadow-text">
          Manage your products with ease and efficiency
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
