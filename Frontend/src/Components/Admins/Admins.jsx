import React from "react";
import Prajwal from "../Admins/prajwal.jpg";
import Shriya from "../Admins/shriya.jpg";
import { IoCall } from "react-icons/io5";
const Admins = () => {
  return (
    <div className="min-h-1/2 py-4 pb-10 w-full flex justify-center bg-gray-100 ">
      <div className="flex flex-col w-full items-center">
        <div className="flex justify-center w-full">
          <h1 className="text-3xl ">MEMBERS</h1>
        </div>
        <div className="w-1/2 pt-12 items-center flex justify-center gap-10">
          <div className="max-w-sm mx-auto h-[60vh]  bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-cover bg-center h-56 p-4 flex flex-col justify-center">
              <div className="h-full flex items-center justify-center ">
                <img
                  src={Prajwal}
                  alt="Employee"
                  className="rounded-full border-4 border-white h-40 w-40"
                />
              </div>
            </div>
            <div className="p-4 ">
              <h2 className="text-2xl font-semibold text-gray-800">
                Prajwal Wandhare
              </h2>
              <p className="text-gray-600">Full-Stack Developer</p>
              <div className="mt-4 ">
                <div className="flex items-center mt-2 gap-3 text-gray-600 w-full">
                  <a
                    href="https://www.linkedin.com/in/prajwal-wandhare-four5/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      class="w-8 h-8 text-blue-700 hover:text-blue-900 transition duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.234c-.966 0-1.5-.645-1.5-1.453 0-.829.553-1.453 1.447-1.453.966 0 1.5.624 1.5 1.453 0 .808-.533 1.453-1.447 1.453zm13.5 11.234h-3v-5.5c0-1.379-.027-3.15-2.035-3.15-2.035 0-2.348 1.484-2.348 3.033v5.617h-3v-10h2.88v1.367h.041c.401-.763 1.381-1.567 2.843-1.567 3.04 0 3.599 2.002 3.599 4.606v5.594z" />
                    </svg>
                  </a>
                  <a
                    href="tel:+91 7218209234"
                    class="inline-flex items-center px-4 py-2   text-white font-medium rounded-md hover:bg-gray-100 transition duration-300"
                  >
                    <IoCall color="green" className="scale-150" />
                  </a>
                </div>

                <div className="flex items-center mt-2 text-gray-600">
                  <svg
                    className="h-6 w-6 fill-current mr-2 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 6l-2-2V3H7v1L5 6H3v15h18V6h-2zM7 4h10v1H7V4zm5 15a6 6 0 100-12 6 6 0 000 12zm-4-7h8v2H8v-2z" />
                  </svg>
                  <p className="text-gray-600">Pune,Maharashtra</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="max-w-sm mx-auto h-[60vh]  bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-cover bg-center h-56 p-4 flex flex-col justify-center">
              <div className="h-full flex items-center justify-center ">
                <img
                  src={Shriya}
                  alt="Employee"
                  className="rounded-full border-4 border-white h-40 w-40"
                />
              </div>
            </div>
            <div className="p-4 ">
              <h2 className="text-2xl font-semibold text-gray-800">
                Shriya Samaddar
              </h2>
              <p className="text-gray-600">Full-Stack Developer</p>
              <div className="mt-4 ">
                <div className="flex items-center mt-2 gap-3 text-gray-600 w-full">
                  <a
                    href="https://www.linkedin.com/in/shriya-samaddar-bb0898200//"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      class="w-8 h-8 text-blue-700 hover:text-blue-900 transition duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.234c-.966 0-1.5-.645-1.5-1.453 0-.829.553-1.453 1.447-1.453.966 0 1.5.624 1.5 1.453 0 .808-.533 1.453-1.447 1.453zm13.5 11.234h-3v-5.5c0-1.379-.027-3.15-2.035-3.15-2.035 0-2.348 1.484-2.348 3.033v5.617h-3v-10h2.88v1.367h.041c.401-.763 1.381-1.567 2.843-1.567 3.04 0 3.599 2.002 3.599 4.606v5.594z" />
                    </svg>
                  </a>
                  <a
                    href="tel:+91 9588633019"
                    class="inline-flex items-center px-4 py-2   text-white font-medium rounded-md hover:bg-gray-100 transition duration-300"
                  >
                    <IoCall color="green" className="scale-150" />
                  </a>
                </div>

                <div className="flex items-center mt-2 text-gray-600">
                  <svg
                    className="h-6 w-6 fill-current mr-2 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 6l-2-2V3H7v1L5 6H3v15h18V6h-2zM7 4h10v1H7V4zm5 15a6 6 0 100-12 6 6 0 000 12zm-4-7h8v2H8v-2z" />
                  </svg>
                  <p className="text-gray-600">Pune,Maharashtra</p>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Admins;
