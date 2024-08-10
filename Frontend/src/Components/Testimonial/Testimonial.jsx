import React from "react";

const testimonialData = [
  {
    name: "- Darshan",
    image: "",
    description: "This platform made finding reliable help so easy! The workers are great, and it feels good to support those in need. Highly recommend!",
    aosDelay: "0",
  },
  {
    name: "- Faraz",
    image: "",
    description: "The service is affordable and efficient. Booking was simple, and the helpers were experienced and trustworthy.",
    aosDelay: "300",
  },
  {
    name: "- Pratiksha",
    image: "",
    description: "I love the peace of mind this service provides. The workers are reliable, and it’s great knowing I’m helping someone who really needs it.",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-56">
            Our clients rave about the exceptional service and heartfelt dedication of our team. With countless positive reviews and loyal customers, their experiences reflect our commitment to excellence and the real difference we make in their lives. Discover why our clients trust us to deliver outstanding results every time.

            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center font-bold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
