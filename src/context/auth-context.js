// src/count-context.js
import React, { useState, createContext } from "react";
const AuthContext = React.createContext();

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("error");
  }
  return context;
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  const value = { auth, setAuth };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
