import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ role }) => {
  const user = useSelector((store) => store.user.value);
  if (user?.role == role) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};