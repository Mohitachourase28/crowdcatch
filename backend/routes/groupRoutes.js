import express from "express";
import { createGroup } from "../controllers/groupController.js"; // Import the controller function

const router = express.Router();

// POST route for creating a group
router.post("/start", createGroup);

export default router;
