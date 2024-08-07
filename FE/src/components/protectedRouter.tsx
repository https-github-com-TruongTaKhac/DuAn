// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();
  if (!user || user.role !== "admin") {
    return <Navigate to="/message" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
