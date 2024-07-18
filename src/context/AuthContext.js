import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const login = async (email, password) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        { email, password }
      );
      setToken(res.data.token);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const signup = async (email, password) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/signup`,
        { email, password }
      );
      setToken(res.data.token);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
