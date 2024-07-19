// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import {
//   TextField,
//   Button,
//   Box,
//   Link,
//   Typography,
//   Paper,
//   Avatar,
// } from "@mui/material";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       setMessage("Login successful! Redirecting to homepage...");
//       navigate("/");
//     } catch (err) {
//       console.error(err);
//       setMessage(
//         "Login failed: " +
//           (err.response ? err.response.data.msg : "Server error")
//       );
//     }
//   };

//   return (
//     <Paper
//       elevation={3}
//       sx={{
//         padding: "2rem",
//         borderRadius: "1rem",
//         marginTop: "1rem",
//         backgroundColor: "#f5f5f5",
//       }}
//     >
//       <Box display="flex" flexDirection="column" alignItems="center">
//         <Avatar sx={{ margin: "1rem", backgroundColor: "#DEBB85" }}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign In
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             label="Email Address"
//             autoComplete="email"
//             autoFocus
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             sx={{ backgroundColor: "#fff", borderRadius: "0.5rem" }}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             label="Password"
//             type="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             sx={{ backgroundColor: "#fff", borderRadius: "0.5rem" }}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{
//               mt: 3,
//               mb: 2,
//               borderRadius: "0.5rem",
//               backgroundColor: "#DEBB85",
//             }}
//           >
//             Sign In
//           </Button>
//           <Link href="/signup" variant="body2" color="#DEBB85">
//             {"Don't have an account? Sign Up"}
//           </Link>
//           {message && <Typography>{message}</Typography>}
//         </Box>
//       </Box>
//     </Paper>
//   );
// };

// export default LoginForm;

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

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      setMessage("Login successful! Redirecting to homepage...");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      console.error(err);
      setMessage(
        "Login failed: " +
          (err.response ? err.response.data.msg : "Server error")
      );
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        borderRadius: "1rem",
        marginTop: "1rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar sx={{ margin: "1rem", backgroundColor: "#DEBB85" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
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
            autoComplete="current-password"
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
            Sign In
          </Button>
          <Link href="/signup" variant="body2" color="#DEBB85">
            {"Don't have an account? Sign Up"}
          </Link>
          {message && (
            <Typography
              sx={{
                mt: 2,
                color: message.includes("failed") ? "red" : "green",
              }}
            >
              {message}
            </Typography>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

export default LoginForm;
