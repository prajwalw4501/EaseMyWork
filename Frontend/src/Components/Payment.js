import React from 'react'
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/ReactToastify.css";



const Payment = () => {
    const handlePayment = async () => {
        try {
          // Step 1: Create order on the backend
          const orderResponse = await axios.post('http://localhost:8080/createOrder', {
          //  amount: bookingDetails.amount, // Amount in paise
          });
    
          const { id: order_id, amount, currency } = orderResponse.data;
    
          // Step 2: Initialize Razorpay
          const options = {
            key: 'rzp_test_PoPCUX0so3eLSh', // Replace with your Razorpay key ID
            amount: amount,
            currency: currency,
            name: 'Service Booking',
           // description: `Booking for ${bookingDetails.serviceName}`,
            order_id: order_id,
            handler: async function (response) {
              const paymentData = {
                order_id: order_id,
                payment_id: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              };
    
              // Step 3: Verify payment on the backend
              const verificationResponse = await axios.post('http://localhost:8080/verifyPayment', paymentData);
    
              if (verificationResponse.data.success) {
                toast.success('Payment successful!');
                // Proceed with booking confirmation
              } else {
                toast.error('Payment verification failed!');
              }
            },
            prefill: {
            //   name: bookingDetails.userName,
            //   email: bookingDetails.userEmail,
            //   contact: bookingDetails.userPhone,
            },
            theme: {
              color: '#F37254',
            },
          };
    
          const rzp1 = new window.Razorpay(options);
          rzp1.open();
        } catch (err) {
          console.error(err);
          toast.error('Payment initialization failed. Please try again.');
        }
      };
    
      return (
        
        <div className="flex flex-col items-center justify-center">
          <ToastContainer position='top-center'/>
            
          <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
          {/* <p>Service: {bookingDetails.serviceName}</p>
          <p>Amount: ₹{bookingDetails.amount / 100}</p> */}
          <button
            onClick={handlePayment}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Pay Now
          </button>
        </div>
      );
    };

export default Payment
