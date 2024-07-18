import React, { useState, useContext, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import {
  Container,
  Typography,
  Button,
  Box,
  Modal,
  IconButton,
  TextField,
} from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import { TaskContext } from "../context/TaskContext";
import CloseIcon from "@mui/icons-material/Close";

const HomePage = () => {
  const { logout } = useContext(AuthContext);
  const { createTask } = useContext(TaskContext);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 2000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={2}
        px={4}
        backgroundColor="#f5f5f5"
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontFamily: "Roboto Slab, serif",
            fontWeight: "700",
            letterSpacing: "0.1em",
            color: "#3f51b5",
          }}
        >
          Taskify
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#DEBB85",
            ":hover": { backgroundColor: "#D4AC6D" },
          }}
          onClick={logout}
        >
          Logout
        </Button>
      </Box>
      <Container sx={{ mt: 5 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
            sx={{
              backgroundColor: "#DEBB85",
              ":hover": { backgroundColor: "#D4AC6D" },
              borderRadius: "10px",
              padding: "10px 20px",
              fontSize: "16px",
            }}
          >
            + Create New Task
          </Button>
          <TextField
            variant="outlined"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ width: "30%" }}
          />
        </Box>

        <TaskList searchTerm={debouncedSearchTerm} />
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: "80%", md: "60%", lg: "40%" },
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 1,
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>
            <TaskForm handleClose={handleClose} handleSubmit={createTask} />
          </Box>
        </Modal>
      </Container>
    </>
  );
};

export default HomePage;
