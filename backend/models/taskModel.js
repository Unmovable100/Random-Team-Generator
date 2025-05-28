const db = require("../db");

// This function retrieves all tasks from the 'tasks' table in the database,
// ordered by their creation date in descending order (newest first).
// It returns an array of task objects.
const getTasks = async () => {
  const res = await db.query(
    "SELECT * FROM tasks ORDER BY created_at DESC" // Corrected SQL query
  );
  return res.rows;
};

// This function inserts a new task into the 'tasks' table with the given title and description.
// The task is marked as incomplete by default and the current timestamp is used for 'created_at'.
// It returns the newly created task object.
const addTask = async (title, description) => {
  const res = await db.query(
    "INSERT INTO tasks (title, description, is_complete, created_at) VALUES ($1, $2, false, NOW()) RETURNING *",
    [title, description]
  );
  return res.rows[0];
};

module.exports = { getTasks, addTask };
