import mongoose from "mongoose";
import Group from "../models/Group.js";

export const createGroup = async (req, res) => {
  try {
    const { name, description, members } = req.body;

    if (!name || !description) {
      return res.status(400).json({ message: "Name and description are required" });
    }

    const newGroup = new Group({
      name,
      description,
      members: members || [],
    });

    await newGroup.save();
    res.status(201).json({ message: "Group created successfully", group: newGroup });
  } catch (error) {
    console.error("Error creating group:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
