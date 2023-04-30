import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import "./PrivateRouter.css";

const PrivateRoutes = ({ children }) => {
  const { user, lodging } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }

  if (lodging) {
    return (
      <div className="spinnerContainer">
        <div className="spinner"></div>
      </div>
    );
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
