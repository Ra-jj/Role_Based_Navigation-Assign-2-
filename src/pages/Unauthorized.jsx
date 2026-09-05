import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <h1 className="text-4xl font-extrabold text-red-500">403</h1>
      <h2 className="text-2xl font-semibold text-gray-800">Not Authorized</h2>
      <p className="text-gray-500 text-center max-w-md">
        You do not have permission to view this page. If you believe this is a mistake, please contact your administrator.
      </p>
      <Link 
        to="/" 
        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Unauthorized;
