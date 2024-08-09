import React from "react";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Testimonial from "../Components/Testimonial/Testimonial";
import CarList from "../Components/CarList/CarList";
import Contact from "../Components/Contact/Contact";





function Home() {
     
    return (
        <div className="flex min-h-screen">
     <div className="bg-gray-300 dark:text-white text-black overflow-x-hidden overflow-y-hidden">
    
        <Hero />
        <About />
        <Services />
        <CarList />
        <Testimonial />
        <Contact />
      </div>
        </div>
 
  )
}

export default Home;