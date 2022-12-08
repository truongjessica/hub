import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/user_context";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserContext();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
