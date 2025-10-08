require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes.js");

const app = express();
app.use(cors());
app.use(express.json());



  mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅  Lorna Database connection successful"))
.catch(err => console.error(err));


  // Use routes
// app.use("/api/tasks", taskRoutes);
app.use("/api/todos", todoRoutes);
// // Routes
// app.get("/tasks", async (req, res) => {
//   const tasks = await Task.find();
//   res.json(tasks);
// });

// app.post("/tasks", async (req, res) => {
//   const newTask = new Task({ text: req.body.text });
//   await newTask.save();
//   res.json(newTask);
// });

// app.put("/tasks/:id", async (req, res) => {
//   const task = await Task.findByIdAndUpdate(
//     req.params.id,
//     { completed: req.body.completed },
//     { new: true }
//   );
//   res.json(task);
// });

// app.delete("/tasks/:id", async (req, res) => {
//   await Task.findByIdAndDelete(req.params.id);
//   res.json({ message: "Task deleted" });
// });

// Start server
// app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
