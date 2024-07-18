import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Box, Typography } from "@mui/material";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";

const TaskList = ({ searchTerm }) => {
  const { tasks, updateTask } = useContext(TaskContext);

  const tasksByStatus = tasks.reduce((acc, task) => {
    acc[task.status] = [...(acc[task.status] || []), task];
    return acc;
  }, {});

  // task filteration based on search term
  const filterTasks = (tasks) =>
    tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const renderTasks = (status) => {
    const tasksForStatus = filterTasks(tasksByStatus[status] || []);
    return tasksForStatus.length > 0 ? (
      tasksForStatus.map((task, index) => (
        <TaskCard key={task._id} task={task} index={index} />
      ))
    ) : (
      <Typography variant="body2" textAlign="center">
        No tasks in {status} category.
      </Typography>
    );
  };

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const updatedTasks = [...tasks];
    const draggedTask = updatedTasks.find((task) => task._id === draggableId);

    if (draggedTask) {
      draggedTask.status = destination.droppableId;
      updateTask(draggedTask);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Box
        sx={{ mt: 3, display: "flex", flexDirection: ["column", null, "row"] }}
      >
        {["To-Do", "In Progress", "Completed"].map((status, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              ml: index > 0 ? [0, null, 2] : 0,
              mb: index > 0 ? 3 : 0,
            }}
          >
            <Typography
              variant="h5"
              textAlign="center"
              sx={{
                mb: 2,
                fontWeight: "bold",
                color: "darkgray",
              }}
            >
              {status} List
            </Typography>
            <Droppable droppableId={status} key={status}>
              {(provided) => (
                <Box {...provided.droppableProps} ref={provided.innerRef}>
                  {renderTasks(status)}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          </Box>
        ))}
      </Box>
    </DragDropContext>
  );
};

export default TaskList;
