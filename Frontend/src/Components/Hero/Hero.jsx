import React, { useEffect, useState } from "react";

import herologo from "../../assets/herologo.jpg";

const Hero = () => {
  // useEffect(() => {
  //   AOS.refresh();
  // });
  return (
    <div className="dark:bg-black dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={herologo}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">

            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-3xl sm:text-4xl font-bold font-serif"
            >
              Manage Your Home!
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
            Simplify your household tasks while making a meaningful impact. Our platform connects you with individuals who truly needs
             work and have hands-on experience in household chores. Whether it’s Cleaning, Cooking, or Babysitting, you can
              choose from a pool of hardworking, dedicated individuals ready to assist you. Tailor your service options, select
               the right helper for your needs, and enjoy a seamless booking and payment process. Manage your home with ease, knowing
                you’re supporting those who need it most.

            </p>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Get Started
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
