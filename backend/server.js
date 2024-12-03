import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import groupRoutes from "./routes/groupRoutes.js";

// Load environment variables
config();

// Connect to MongoDB Atlas
connectDB();

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/groups", groupRoutes);  // Fixed the route

// Example route with logging
app.post('/api/groups/start', (req, res) => {
  console.log("Request Body:", req.body); // Log the incoming request body
  res.status(200).json({ message: "Group endpoint called" });
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
