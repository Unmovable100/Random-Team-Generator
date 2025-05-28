const express = require("express");
const router = express.Router();
// FIXED: Corrected import path to use 'models' directory
const taskModel = require("../models/taskModel");

// This route handles GET requests to fetch all tasks from the database.
// It responds with a JSON array of all tasks.
router.get("/", async (req, res) => {
  const tasks = await taskModel.getTasks();
  res.json(tasks);
});

// This route handles POST requests to add a new task to the database.
// It expects a JSON body with 'title' and 'description' fields,
// inserts the task, and responds with the newly created task.
router.post("/", async (req, res) => {
  // FIXED: Changed 'name' to 'title' to match the expected parameter
  const { title, description } = req.body;
  const task = await taskModel.addTask(title, description);
  res.status(201).json(task);
});

module.exports = router;
