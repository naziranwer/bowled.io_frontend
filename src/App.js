import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PrivateRoute from "./components/PrivateRoute";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { token } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<PrivateRoute component={HomePage} />} />
      <Route
        path="/login"
        element={token ? <Navigate to="/" /> : <LoginPage />}
      />
      <Route
        path="/signup"
        element={token ? <Navigate to="/" /> : <SignupPage />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
