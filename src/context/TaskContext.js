import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (token) {
      fetchTasks();
    }
  }, [token]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/tasks`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTasks(res.data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  const createTask = async (task) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/tasks`,
        task,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTasks([...tasks, res.data]);
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      const { _id, ...updatedData } = updatedTask;
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/tasks/${_id}`,
        updatedData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const updatedTasks = tasks.map((task) =>
        task._id === _id ? res.data : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
