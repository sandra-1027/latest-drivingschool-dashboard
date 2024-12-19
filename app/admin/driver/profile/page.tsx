"use client";

import { useState } from "react";

const DriverProfile = () => {
  const [driverInfo] = useState({
    name: "John Doe",
    phone: "+123-456-7890",
    address: "456 Elm Street, City, Country",
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 dark:bg-gray-900">
        {/* Driver Info */}
        <div className="text-center mb-8">
          {/* <img
            src="/driver-avatar.jpg" 
            alt="Driver Avatar"
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          /> */}
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {driverInfo.name}
          </h2>
        </div>
        {/* Driver Details */}
        <div className="space-y-4 text-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Phone Number:
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {driverInfo.phone}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Address:
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {driverInfo.address}
            </p>
          </div>
        </div>

        {/* Edit Button */}
        {/* <div className="mt-6 text-center">
          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => alert('Edit Profile clicked!')} // Replace with actual edit functionality
          >
            Edit Profile
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default DriverProfile;
