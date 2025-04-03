import React from "react";
import { Navigate } from "react-router-dom";

const SensitiveRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem("token"); // Change this based on your auth logic
    const isAdmin = localStorage.getItem("role") === "admin"; // Check if the user is an admin

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (!isAdmin) {
        return <Navigate to="/" />; // Redirect non-admins to dashboard
    }

    return <>{children}</>; // Render the children if authenticated and an admin
};

export default SensitiveRoute;
