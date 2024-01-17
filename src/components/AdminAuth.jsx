import React from 'react';
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AdminAuth = ({ allowedRoles }) => {
  console.log(allowedRoles);
    const { auth } = useAuth();
    const location = useLocation();
  console.log(auth);
  console.log(location);
    return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
      <Outlet />
    ) : auth?.username ? (
      <Navigate
        to="/dash/students/userview"
        state={{ from: location }}
        replace
      />
    ) : (
      <Navigate to="/" state={{ from: location }} replace></Navigate>
    );
}

export default AdminAuth