import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Services = () => {
    const [employees, setEmployees] = useState([]);
    const [searchCity, setCity] = useState("");
  
    // useEffect(() => {
    //   fetchEmployees();
    // }, []);
  
    // const fetchEmployees = async () => {
    //   try {
    //     const response = await axios.get(`http://localhost:8080/api/owner/allemps`);
    //     setEmployees(response.data);
    //   } catch (err) {
    //     console.error("Error fetching employees", err);
    //   }
    // };
    useEffect(() => {
      fetchUserLocation();
  }, []);
  const fetchUserLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            try {
                // Using a reverse geocoding API to get the city name from coordinates
                const response = await axios.get(
                    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}longitude=${lon}&localityLanguage=en`
                );
                console.log(response);
                setCity(response.data.city);
                handleLocationSearch(response.data.city);
            } catch (err) {
                console.error("Error fetching city from coordinates", err);
            }
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
};


  
    const handleLocationSearch = async (searchCity) => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/user/empbycity/?city=${searchCity}`
        );
        console.log(response.data);
        setEmployees(response.data);
      } catch (err) {
        console.error("Error fetching employees by location", err);
      }
    };
  
    const handleBookService = (employeeId) => {
      // Handle service booking logic here
      console.log(`Booked service for employee ${employeeId}`);
    };
  
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Employees</h1>
            <div className="flex">
              <select className="w-auto p-2 mb-0 rounded border-collapse border-2 border-black-600" value={searchCity}
                        onChange={(e) => setCity(e.target.value)} required>
                        <option value="" disabled>Select City</option>
                        {/* <option value="Role_OWNER">Owner</option> */}
                        <option value="Nagpur">Nagpur</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Chennai">Chennai</option>
                    </select>
              <button
                onClick={handleLocationSearch}
                className="bg-slate-900 text-white p-2 rounded-br-md hover:bg-green-800"
              >
                Search
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {employees.map((employee) => (
              <div
                key={employee[0]}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                   Name: {employee[1]} {employee[2]}
                  </h2>
                  <p className="text-gray-600">Exp: {employee[3]}</p>
                  <p className="text-gray-600">Gender: {employee[4]},City:  {employee[5]}</p>
                  <p className="text-gray-600">Service: {employee[6]}</p>
                  <p className="text-gray-600">Amount: {employee[7]}/month</p>
                </div>
                <button
                  onClick={() => handleBookService(employee.key)}
                  className="mt-4 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
                >
                  Book Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Services
