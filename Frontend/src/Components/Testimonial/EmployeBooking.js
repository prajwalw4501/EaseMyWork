import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";
import { Context } from "../../App";
import { FaCalendarAlt, FaMoneyBillWave, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EmployeeBooking = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [amount, setAmount] = useState(1000);
  const [service, setService] = useState("");
  const [isBooking, setIsBooking] = useState(false);
  const { selectedemployee, user } = useContext(Context);
  const [serviceSelected, setServiceSelected] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    console.log(selectedemployee,"dfedsfewdfwrefw");
    if (selectedemployee.length === 0) return;
    setServiceSelected(true);
    setAmount(selectedemployee[7]);
    setService(selectedemployee[6]);
  }, [selectedemployee]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const handleStartDateChange = (e) => {
    const start = new Date(e.target.value);
    setStartDate(e.target.value);
    start.setMonth(start.getMonth() + 1);
    setEndDate(start.toISOString().split("T")[0]);
  };

  const handleEndDateChange = (e) => {
    const start = new Date(startDate);
    const end = new Date(e.target.value);
    const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    if (diffDays < 30) {
      toast.error("End date must be at least 1 month after the start date.");
    } else {
      setEndDate(e.target.value);
    }
  };

  const handlePayment = async () => {
    try {
      setIsBooking(true);
      const orderResponse = await axios.post(
        "http://localhost:8080/pay/createorder",
        {
          //razorpay:response.razorpay_payment_id,
         // orderid:order_id,
          enddate: endDate,
          startDate,
          userid: user.uid,
          empid: selectedemployee[0],
          amount:selectedemployee[7],
        }
      );

      const { id: order_id, amount, currency } = orderResponse.data;
      console.log(order_id,amount,currency,"sadsdsadsadas");

      const options = {
        key: "rzp_test_PoPCUX0so3eLSh",
        amount: amount,
        currency: currency,
        name: "Service Booking",
        order_id: order_id,
        handler: async function (response) {
          console.log(order_id,response.razorpay_payment_id,response.razorpay_signature,"sdfdfsd");
          const paymentData = {
            userid:user.uid,
            amount:amount,
            order_id: order_id,
            payment_id: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          };
          await updatePaymentOnServer(paymentData);
          toast.success("Payment successful! Booking confirmed.");
          navigate("/home");

        },
        
        prefill: {
          name: user.firstname + " " + user.lastname,
          email: user.email,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (err) {
      console.error(err);
      toast.error("Payment initialization failed. Please try again.");
    } finally {
      setIsBooking(false);
    }
  };
  const updatePaymentOnServer = async (paymentData) => {
    try {
      await axios.post("http://localhost:8080/pay/updatepay", paymentData);
      toast.success("Payment details saved successfully.");
    } catch (err) {
      console.error("Failed to update payment on server:", err);
      toast.error("Failed to save payment details. Please contact support.");
    }
  };


  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <ToastContainer position="top-center"/>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Book Service for Employee
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Service
          </label>
          <div className="flex items-center border border-gray-300 rounded-md bg-gray-100 p-2">
            <FaClock className="text-gray-500 mr-2" />
            <input
              type="text"
              value={service}
              readOnly
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Amount</label>
          <div className="flex items-center border border-gray-300 rounded-md bg-gray-100 p-2">
            <FaMoneyBillWave className="text-gray-500 mr-2" />
            <input
              type="text"
              value={`${amount}`}
              readOnly
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Start Date
          </label>
          <div className="relative">
            <FaCalendarAlt className="absolute top-3 left-3 text-gray-500" />
            <input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            End Date
          </label>
          <div className="relative">
            <FaCalendarAlt className="absolute top-3 left-3 text-gray-500" />
            <input
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
      </div>

      <button
        onClick={handlePayment}
        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 disabled:bg-gray-400 mt-6 transition duration-300 ease-in-out transform hover:-translate-y-1"
        disabled={isBooking || !startDate || !endDate || !serviceSelected}
      >
        {isBooking ? "Processing..." : "Proceed to Payment"}
      </button>

      {!serviceSelected && (
        <p className="text-red-500 text-center mt-4">
          Please select a service first
        </p>
      )}
    </div>
  );
};

export default EmployeeBooking;
