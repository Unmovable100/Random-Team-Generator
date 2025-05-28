const express = require("express");
const router = express.Router();
// Corrected import path to match the model file name if it's case-sensitive
const taskModel = require("../models/taskModel"); // Ensure folder name and file name are correct

// This route handles GET requests to fetch all tasks from the database.
// It responds with a JSON array of all tasks.
router.get("/", async (req, res) => {
  const tasks = await taskModel.getTasks();
  res.json(tasks);
});

// This route handles POST requests to add a new task to the database
// It expects a JSON body with 'title' and 'description' fields, 
// then inserts the task and responds with the newly created task.
router.post("/", async (req, res) => {
  // Changed 'name' to 'title' to match the parameter expected by addTask
  const { title, description } = req.body;
  const task = await taskModel.addTask(title, description);
  res.status(201).json(task);
});

module.exports = router;
