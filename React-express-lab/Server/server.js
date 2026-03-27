const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let tasks = ["Learn React", "Learn Node"];

// API 1 → Test API
app.get("/", (req, res) => {
  res.json({ message: "Backend is working 🚀" });
});

// API 2 → Get Tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// API 3 → Add Task
app.post("/tasks", (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.json({ message: "Task Added ✅" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});