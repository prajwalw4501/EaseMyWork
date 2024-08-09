import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom';


export const Header = () => {

    const [showLogout, setShowLogout] = useState(false);

    const navigate =  useNavigate();

    const toggleLogout = () => {
      setShowLogout(!showLogout);
    };
    const showUser =()=>{
      navigate('/user')
    }
  
    const handleLogout = () => { 
        navigate('/login');
    };
  
    return (
      <div className="relative z-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-full
      dark:bg-slate-700 dark:text-white min-h-20 flex items-center px-4">
       <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold font-serif">EaseMyWork</span>
          </div>
          <nav className='hidden md:flex gap-16'>
            <Link to="/home" className='text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary'>Home</Link>
            <Link to="/contact" className='text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary'>Contact Us</Link>
            <Link to="/services" className='text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary'>Services</Link>
            <Link to="/payment" className='text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary'>Payments</Link>
            <Link to="/booking" className='text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary'>Bookings</Link>
            <div className='relative pl-20'>
            <CgProfile color='grey'
              className="size-10 absolute bottom-1 right-5 text-white cursor-auto"
              onClick={toggleLogout}
            />
            {showLogout && (
              <div className="absolute bg-white shadow-md p-2 rounded-md right-0 mt-2 z-30 mt-6 mr-2">
                <button className="text-green-700 hover:bg-gray-200 px-6 py-2 rounded-md w-full"
                onClick={showUser}
                >User Details</button>
                <button
                  className="text-red-700 hover:bg-gray-200 px-4 py-2 rounded-md w-full"
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </div>
            )}
            </div>
          </nav>
          </div>
          </div>
      </div>
 
  )
}

