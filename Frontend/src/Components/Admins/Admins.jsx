import React from 'react'
import admin1 from "../Admins/admin1.jpg";

const Admins = () => {
  return(
 
//     <> 
//     <div>About Us  <br />
//       <section id="team" class="team">

// <h1 class="heading"><br/> Our Team</h1>

// <div class="row">

// <div class="card">
//   <div class="image">
//     <img src={require("./admin1.jpg")}/> 
//   </div>
//   <div class="info">
//     <h4>Sushant</h4>
//     <h4>Full Stack-Web Developer</h4>
   
//   </div>
// </div>
// </div>
// </section>

//     </div>
//     </>

<div className='min-h-1/2 py-4 w-full flex justify-center '> 
<div><h1 className=''>MEMBERS:</h1></div>
<div className='w-1/2 pt-12 items-center flex justify-center gap-10'>
<div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
  <div className="bg-cover bg-center h-56 p-4" >

    <div className="h-full flex items-center justify-center">
      <img src={admin1} alt="Employee" className="rounded-full border-4 border-white h-40 w-40"/>
    </div>
  </div>
  <div className="p-4">
    <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
    <p className="text-gray-600">Senior Developer</p>
    <div className="mt-4">
      <div className="flex items-center mt-2 text-gray-600">
        <svg className="h-6 w-6 fill-current mr-2 text-purple-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 11-3.8-11.3l-1 1.7a6.7 6.7 0 103 9.3 6.67 6.67 0 00-3.1 0l1-1.7A8.3 8.3 0 0112 11.5 8.3 8.3 0 0115.4 9zM12 9v6l5-3z"/></svg>
        <p className="text-gray-600">johndoe@example.com</p>
      </div>
      <div className="flex items-center mt-2 text-gray-600">
        <svg className="h-6 w-6 fill-current mr-2 text-purple-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 16.5v1c0 1.5-1.5 2.8-4.5 3.4l-1.5.3c-1 .1-1.8-.2-2.5-.7-1-1-2.6-2.4-4.5-4.5s-3.5-3.5-4.5-4.5c-1-1-1-2.5-.7-3.5l.3-1.5c.6-3 1.9-4.5 3.4-4.5h1c.5 0 .9.2 1.1.5l3 3c.4.4.5.9.5 1.4s-.2 1-1 2L8.4 10.4c-.1.1-.2.4 0 .7l2.4 2.4c.3.3.6.1.7 0l1.6-1.6c.5-.5 1-.6 1.5-.5s1.1.2 1.4.5l3 3c.3.3.5.7.5 1.1z"/></svg>
        <p className="text-gray-600">+1 (555) 123-4567</p>
      </div>
      <div className="flex items-center mt-2 text-gray-600">
        <svg className="h-6 w-6 fill-current mr-2 text-purple-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6l-2-2V3H7v1L5 6H3v15h18V6h-2zM7 4h10v1H7V4zm5 15a6 6 0 100-12 6 6 0 000 12zm-4-7h8v2H8v-2z"/></svg>
        <p className="text-gray-600">1234 Elm St, Springfield, IL</p>
      </div>
    </div>
  </div>
  
</div>  <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
  <div className="bg-cover bg-center h-56 p-4" >

    <div className="h-full flex items-center justify-center">
      <img src={admin1} alt="Employee" className="rounded-full border-4 border-white h-40 w-40"/>
    </div>
  </div>
  <div className="p-4">
    <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
    <p className="text-gray-600">Senior Developer</p>
    <div className="mt-4">
      <div className="flex items-center mt-2 text-gray-600">
        <svg className="h-6 w-6 fill-current mr-2 text-purple-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 11-3.8-11.3l-1 1.7a6.7 6.7 0 103 9.3 6.67 6.67 0 00-3.1 0l1-1.7A8.3 8.3 0 0112 11.5 8.3 8.3 0 0115.4 9zM12 9v6l5-3z"/></svg>
        <p className="text-gray-600">johndoe@example.com</p>
      </div>
      <div className="flex items-center mt-2 text-gray-600">
        <svg className="h-6 w-6 fill-current mr-2 text-purple-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 16.5v1c0 1.5-1.5 2.8-4.5 3.4l-1.5.3c-1 .1-1.8-.2-2.5-.7-1-1-2.6-2.4-4.5-4.5s-3.5-3.5-4.5-4.5c-1-1-1-2.5-.7-3.5l.3-1.5c.6-3 1.9-4.5 3.4-4.5h1c.5 0 .9.2 1.1.5l3 3c.4.4.5.9.5 1.4s-.2 1-1 2L8.4 10.4c-.1.1-.2.4 0 .7l2.4 2.4c.3.3.6.1.7 0l1.6-1.6c.5-.5 1-.6 1.5-.5s1.1.2 1.4.5l3 3c.3.3.5.7.5 1.1z"/></svg>
        <p className="text-gray-600">+1 (555) 123-4567</p>
      </div>
      <div className="flex items-center mt-2 text-gray-600">
        <svg className="h-6 w-6 fill-current mr-2 text-purple-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6l-2-2V3H7v1L5 6H3v15h18V6h-2zM7 4h10v1H7V4zm5 15a6 6 0 100-12 6 6 0 000 12zm-4-7h8v2H8v-2z"/></svg>
        <p className="text-gray-600">1234 Elm St, Springfield, IL</p>
      </div>
    </div>
  </div>
  
</div> 
</div>
</div>

  );


}

export default Admins
