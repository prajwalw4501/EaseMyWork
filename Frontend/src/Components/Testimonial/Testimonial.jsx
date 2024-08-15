import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonialData = [
  {
    name: "Darshan",
    image: "https://picsum.photos/seed/darshan/200",
    description:
      "This platform made finding reliable help so easy! The workers are great, and it feels good to support those in need. Highly recommend!",
    rating: 5,
  },
  {
    name: "Faraz",
    image: "https://picsum.photos/seed/faraz/200",
    description:
      "The service is affordable and efficient. Booking was simple, and the helpers were experienced and trustworthy using for the future projects.",
    rating: 5,
  },
  {
    name: "Pratiksha",
    image: "https://picsum.photos/seed/pratiksha/200",
    description:
      "I love the peace of mind this service provides. The workers are reliable, and it's great knowing I'm helping someone who really needs it.",
    rating: 5,
  },
];

const TestimonialCard = ({ name, image, description, rating }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-300 transform group-hover:scale-105"></div>
    <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
      <div className="flex justify-center mb-6">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-lg"
        />
      </div>
      <FaQuoteLeft className="text-blue-500 text-4xl mb-4 mx-auto" />
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
        {description}
      </p>
      <div className="flex justify-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-xl" />
        ))}
      </div>
      <p className="font-bold text-center text-xl text-gray-800 dark:text-white">
        {name}
      </p>
    </div>
  </div>
);

const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 sm:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            What Our Clients Say About Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Our clients rave about the exceptional service and heartfelt
            dedication of our team. With countless positive reviews and loyal
            customers, their experiences reflect our commitment to excellence
            and the real difference we make in their lives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
