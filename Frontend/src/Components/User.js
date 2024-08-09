import React from 'react'
const Userslist = ({ users }) => {
    return (
      <div className="flex flex-wrap justify-center">
        {users.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    );
  };

const User = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 m-4 p-4">
          <div className="flex items-center mb-4">
            <img
              className="w-16 h-16 rounded-full mr-4"
      //        src={user.profilePicture || 'https://via.placeholder.com/150'}
         //     alt={`${user.firstName} ${user.lastName}`}
            />
            <div className="text-xl font-semibold">
             {/* {user.firstName} {user.lastName} */}
            </div>
          </div>
          <div className="mb-2">
            {/* <span className="font-bold">Email:</span> {user.email} */}
          </div>
          <div className="mb-2">
            {/* <span className="font-bold">Role:</span> {user.role} */}
          </div>
          <div className="mb-2">
            {/* <span className="font-bold">Location:</span> {user.city}, {user.state} */}
          </div>
          <div className="mb-2">
            {/* <span className="font-bold">Pincode:</span> {user.pincode} */}
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            View Profile
          </button>
        </div>
      );
    };
    
    

export default User
