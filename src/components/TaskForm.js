import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";

const TaskForm = ({ handleClose, initialData, handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("To-Do");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setDescription(initialData.description || "");
      setDueDate(initialData.dueDate || "");
      setStatus(initialData.status || "To-Do");
    }
  }, [initialData]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      title,
      description,
      dueDate,
      status,
    };
    if (initialData) {
      taskData._id = initialData._id;
    }
    handleSubmit(taskData);
    handleClose();
  };

  return (
    <Box
      component="form"
      onSubmit={handleFormSubmit}
      sx={{
        mt: 3,
        width: {
          xs: "100%",
          sm: 400,
        },
        bgcolor: "background.paper",
        p: 2,
        mx: "auto",
      }}
    >
      <Typography variant="h6">
        {initialData ? "Update Task" : "Create Task"}
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Select
        fullWidth
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        displayEmpty
        sx={{ mt: 2, mb: 2 }}
      >
        <MenuItem value="To-Do">To-Do</MenuItem>
        <MenuItem value="In Progress">In Progress</MenuItem>
        <MenuItem value="Completed">Completed</MenuItem>
      </Select>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          backgroundColor: "#DEBB85",
          ":hover": { backgroundColor: "#D4AC6D" },
        }}
      >
        {initialData ? "Update" : "Create"}
      </Button>
    </Box>
  );
};

export default TaskForm;
