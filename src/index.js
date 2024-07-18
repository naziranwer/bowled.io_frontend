import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <TaskProvider>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
