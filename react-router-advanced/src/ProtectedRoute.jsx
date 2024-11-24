import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext"; // Import useAuth for authentication checking

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Check authentication status

  if (!isAuthenticated) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the child components
  return children;
};

export default ProtectedRoute;
