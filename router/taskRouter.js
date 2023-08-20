const express = require("express");
const taskRouter = express.Router();

const {
  getAllTasks,
  newTask,
  getTaskById,
  updateTask,
  deleteTask,
  markCompleteTask,
} = require("../controller/taskController");

taskRouter.route("/").get(getAllTasks).post(newTask);
taskRouter.route("/:id").get(getTaskById).patch(updateTask).delete(deleteTask);
taskRouter.route("/:id/completed").put(markCompleteTask);

taskRouter.param("id", (req, resp, next, id) => {
  next();
});

module.exports = taskRouter;
