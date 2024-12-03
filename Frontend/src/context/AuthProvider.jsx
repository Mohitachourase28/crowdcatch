/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const tokenExpiry = localStorage.getItem("tokenExpiry");
    const currentTime = Date.now();

    if (storedToken && tokenExpiry && currentTime < tokenExpiry) {
      setToken(storedToken);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      setToken(null);
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiry");
    }
  }, []);

  const login = (newToken, expiryTime) => {
    setToken(newToken);
    setIsLoggedIn(true);
    localStorage.setItem("token", newToken);
    localStorage.setItem("tokenExpiry", expiryTime);
  };

  const logout = () => {
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiry");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };  // Export AuthContext here
