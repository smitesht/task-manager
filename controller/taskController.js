const Task = require("../model/taskModel");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, resp) => {
  const tasks = await Task.find({});
  resp.status(200).json({ message: tasks });
});

const newTask = asyncWrapper(async (req, resp) => {
  const data = {
    name: req.body.name,
    completed: req.body.completed,
  };
  const task = await Task.create(data);
  resp.status(201).json({ message: task });
});

const getTaskById = asyncWrapper(async (req, resp) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  resp.status(200).json({ message: task });
});
const updateTask = asyncWrapper(async (req, resp) => {
  const { id } = req.params;
  const data = {
    name: req.body.name,
    completed: req.body.completed,
  };
  console.log(data);
  const task = await Task.findByIdAndUpdate(id, data);
  resp.status(200).json({ message: data });
});

const markCompleteTask = asyncWrapper(async (req, resp) => {
  const { id } = req.params;

  await Task.findByIdAndUpdate(id, {
    completed: true,
  });

  resp.status(200).json({ message: `updateTask ${id}` });
});

const deleteTask = asyncWrapper(async (req, resp) => {
  try {
    const { id } = req.params;
    const re = await Task.findByIdAndDelete(id);
    resp.status(200).json({ message: `deleteTask ${re}` });
  } catch (err) {
    resp.status(500).json({ message: "Server error" });
  }
});

module.exports = {
  getAllTasks,
  newTask,
  getTaskById,
  updateTask,
  markCompleteTask,
  deleteTask,
};
