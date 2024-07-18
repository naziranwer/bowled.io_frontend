// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import { TextField, Button, Box, Link, Typography } from "@mui/material";

// const SignupForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { signup } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await signup(email, password);
//     navigate("/");
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//       <Typography component="h1" variant="h5">
//         Sign Up
//       </Typography>
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         label="Email Address"
//         autoComplete="email"
//         autoFocus
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         label="Password"
//         type="password"
//         autoComplete="new-password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
//         Sign Up
//       </Button>
//       <Link href="/login" variant="body2">
//         {"Already have an account? Sign in"}
//       </Link>
//     </Box>
//   );
// };

// export default SignupForm;

// src/components/SignupForm.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  TextField,
  Button,
  Box,
  Link,
  Typography,
  Paper,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup({ name, email, password });
    navigate("/");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        borderRadius: "1rem",
        marginTop: "2rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar sx={{ margin: "1rem", backgroundColor: "#DEBB85" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ backgroundColor: "#fff", borderRadius: "0.5rem" }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ backgroundColor: "#fff", borderRadius: "0.5rem" }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ backgroundColor: "#fff", borderRadius: "0.5rem" }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              borderRadius: "0.5rem",
              backgroundColor: "#DEBB85",
            }}
          >
            Sign Up
          </Button>
          <Link href="/login" variant="body2" color="#DEBB85">
            {"Already have an account? Sign in"}
          </Link>
        </Box>
      </Box>
    </Paper>
  );
};

export default SignupForm;
