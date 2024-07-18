import React from "react";
import { Container, Box, Paper } from "@mui/material";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "url('https://www.freshworksmedia.com/uploads/1/8/6/1/1861318/brand_orig.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box display="flex" flexDirection="column" alignItems="center">
          <SignupForm />
        </Box>
      </Container>
    </Box>
  );
};

export default SignupPage;
