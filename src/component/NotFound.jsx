// src/components/NotFound.js
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Page Not Found</p>
        <a href="/" className="text-blue-500 hover:underline text-lg">Go back to Home</a>
      </div>
    </div>
  );
};

export default NotFound;
