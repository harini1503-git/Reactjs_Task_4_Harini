import React from "react";
import { useAuth } from "./useAuth";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();

  return auth.email ? (
    children
  ) : (
    <Navigate to="/"/>
  );
};