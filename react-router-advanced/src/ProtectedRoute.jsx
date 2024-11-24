import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // Replace with actual authentication logic

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
