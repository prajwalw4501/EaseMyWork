import React from "react";
import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home.js";
import { Header } from "./Components/Header.js";
import SignUp from "./Components/Signup.js";
import HomePage from "./Components/HomePage.js";
import Footer from "./Components/Footer/Footer.jsx"
import Admins from "./Components/Admins/Admins.jsx";
import Services from "./Components/Services.js";
import Booking from "./Components/Booking.js";
import Payment from "./Components/Payment.js";
import User from "./Components/User.js";


function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

    const users=[{
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      role: 'User',
      city: 'New York',
      state: 'NY',
      pincode: '10001',
      profilePicture: 'https://example.com/profile/john.jpg',
    }]

  return (
    <>
      {!isHomePage && !isAuthPage && <Header />}
      <Outlet />
      {!isHomePage && !isAuthPage && <Footer />}
     {/* {!isHomePage && !isAuthPage && <Sidebar />} */}
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path:"/contact",
        element:<Admins/>,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path:"/payment",
        element:<Payment/>,
      },
      {
        path:"/user",
        element:<User/>,
      },
    ],
  },
]);

export default App;
