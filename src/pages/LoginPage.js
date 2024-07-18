import React from "react";
import { Container, Box } from "@mui/material";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          //"url('https://png.pngtree.com/thumb_back/fh260/background/20210205/pngtree-simple-login-box-login-page-background-image_544720.jpg')",
          "url('https://www.freshworksmedia.com/uploads/1/8/6/1/1861318/brand_orig.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 0,
            // marginLeft: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LoginForm />
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
