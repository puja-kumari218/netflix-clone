import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  if (user && token) {
    return <Navigate to="/profiles" replace />;
  }

  return children;
};

export default PublicRoute;
