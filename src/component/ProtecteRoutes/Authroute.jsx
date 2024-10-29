// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const Authroute = ({ element }) => {
  const isAuthenticated = Boolean(localStorage.getItem("auth")); // Check authentication

  return isAuthenticated ? element : <Navigate to="/login" />; // Redirect to login if not authenticated
};

export default Authroute;
