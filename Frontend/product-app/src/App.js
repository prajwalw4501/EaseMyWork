import React, { useEffect, useState } from "react";
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
import { ScrollRestoration } from 'react-router-dom';
import { createContext } from "react";
import Register from "./Components/Register.js";
import DisplayEmployee from "./Components/DisplayEmployee.js";
import EditEmployee from "./Components/EditEmployee.js";
import EmployeeBooking from "./Components/Testimonial/EmployeBooking.js";


export const Context = createContext({ isAuthenticated: false });
function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";


  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const[selectedemployee,setSelectedemployee]=useState([]);

  useEffect(()=>{

const authenticate = localStorage.getItem("isAuthenticated")
console.log(authenticate,"asdaf...........................................");
if(authenticate=="true")
  {
  // setIsAuthenticated(true);
  // console.log("printttttttttttttttttt");
  // setUser(()=>({
  //   email:"sjdnj@gmail.com",
  //   role,
  //   firstname,
  //   lastname,
  //   uid

  // }))
}
  },[])


  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        selectedemployee,
        setSelectedemployee,
      }}
    >
      <ScrollRestoration />

      {!isHomePage && !isAuthPage && <Header />}
      <Outlet />
      {!isHomePage && !isAuthPage && <Footer />}
      {/* {!isHomePage && !isAuthPage && <Sidebar />} */}
    </Context.Provider>
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
        path:"/book",
        element:<EmployeeBooking/>
      },
      {
        path: "/contact",
        element: <Admins />,
      },
      {
        path:"/register",
        element:<Register/>,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path:"/display",
        element:<DisplayEmployee/>,
      },
      {
        path:"/editemp/:empid",
        element:<EditEmployee/>,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);

export default App;
