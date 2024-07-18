// import React, { useContext, useState } from "react";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Typography,
//   Modal,
//   IconButton,
//   Tooltip,
// } from "@mui/material";
// import { Edit, Delete } from "@mui/icons-material";
// import TaskForm from "./TaskForm";
// import { TaskContext } from "../context/TaskContext";
// import CloseIcon from "@mui/icons-material/Close";
// import { Draggable } from "react-beautiful-dnd";

// const TaskCard = ({ task, index }) => {
//   const { deleteTask, updateTask } = useContext(TaskContext);
//   const [open, setOpen] = useState(false);

//   const handleDelete = () => {
//     if (window.confirm("Are you sure you want to delete this task?")) {
//       deleteTask(task._id);
//     }
//   };

//   const handleUpdate = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Draggable draggableId={task._id} index={index}>
//       {(provided) => (
//         <Card
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           ref={provided.innerRef}
//           variant="outlined"
//           sx={{ mb: 2, justifyContent: "center" }}
//         >
//           <CardContent>
//             <Typography variant="h6">{task.title}</Typography>
//             <Typography variant="body1" sx={{ mt: 2 }}>
//               {task.description}
//             </Typography>
//             <Typography variant="body2" sx={{ mt: 2 }}>
//               Due Date: {new Date(task.dueDate).toLocaleDateString()}
//             </Typography>
//             <Typography variant="body2" sx={{ mt: 1 }}>
//               Status: {task.status}
//             </Typography>
//             <Box sx={{ mt: 2 }}>
//               <Tooltip title="Edit Task">
//                 <IconButton onClick={handleUpdate}>
//                   <Edit />
//                 </IconButton>
//               </Tooltip>
//               <Tooltip title="Delete Task">
//                 <IconButton onClick={handleDelete}>
//                   <Delete />
//                 </IconButton>
//               </Tooltip>
//             </Box>
//           </CardContent>
//           <Modal open={open} onClose={handleClose}>
//             <Box
//               sx={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 width: { xs: "90%", sm: "80%", md: "60%", lg: "40%" },
//                 bgcolor: "background.paper",
//                 boxShadow: 24,
//                 p: 4,
//                 borderRadius: 1,
//               }}
//             >
//               <IconButton
//                 onClick={handleClose}
//                 sx={{ position: "absolute", top: 8, right: 8 }}
//               >
//                 <CloseIcon />
//               </IconButton>
//               <TaskForm
//                 handleClose={handleClose}
//                 initialData={task}
//                 handleSubmit={updateTask}
//               />
//             </Box>
//           </Modal>
//         </Card>
//       )}
//     </Draggable>
//   );
// };

// export default TaskCard;

import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Modal,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import TaskForm from "./TaskForm";
import { TaskContext } from "../context/TaskContext";
import CloseIcon from "@mui/icons-material/Close";
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ task, index }) => {
  const { deleteTask, updateTask } = useContext(TaskContext);
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(task._id);
    }
  };

  const handleUpdate = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided) => (
        <Card
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          variant="outlined"
          sx={{
            mb: 2,
            backgroundColor: "#f5f5f5",
            borderLeft: `6px solid ${
              task.status === "Completed"
                ? "#4caf50"
                : task.status === "In Progress"
                ? "#ff9800"
                : "#2196f3"
            }`,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ color: "#3f51b5" }}>
              {task.title}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "#757575" }}>
              {task.description}
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, color: "#757575" }}>
              Due Date: {new Date(task.dueDate).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "#757575" }}>
              Status: {task.status}
            </Typography>
            <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
              <Tooltip title="Edit Task">
                <IconButton onClick={handleUpdate} sx={{ color: "#ff9800" }}>
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete Task">
                <IconButton onClick={handleDelete} sx={{ color: "#f44336" }}>
                  <Delete />
                </IconButton>
              </Tooltip>
            </Box>
          </CardContent>
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
              <TaskForm
                handleClose={handleClose}
                initialData={task}
                handleSubmit={updateTask}
              />
            </Box>
          </Modal>
        </Card>
      )}
    </Draggable>
  );
};

export default TaskCard;
