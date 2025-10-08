// controllers/todoController.js
const Todo = require("../Models/Todo");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// const Task = require("../Models/Task.js");

// // Get all tasks
// exports.getTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find().sort({ createdAt: -1 });
//     res.json(tasks);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Create a new task
// exports.createTask = async (req, res) => {
//   try {
//     const { text } = req.body;
//     const task = new Task({ text });
//     const savedTask = await task.save();
//     res.status(201).json(savedTask);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Toggle task completion
// exports.toggleTask = async (req, res) => {
//   try {
//     const task = await Task.findById(req.params.id);
//     if (!task) return res.status(404).json({ message: "Task not found" });
//     task.completed = !task.completed;
//     const updatedTask = await task.save();
//     res.json(updatedTask);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Delete a task
// exports.deleteTask = async (req, res) => {
//   try {
//     const task = await Task.findByIdAndDelete(req.params.id);
//     if (!task) return res.status(404).json({ message: "Task not found" });
//     res.json({ message: "Task deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
