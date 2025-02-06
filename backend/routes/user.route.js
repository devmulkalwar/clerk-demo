import express from "express";
import { insertAdditionalData, getAllUsers, getUsersById } from "../controllers/user.controllers.js";
import { requireAuth } from "@clerk/express";

const router = express.Router();

// Get all users
router.get("/", getAllUsers);

// Get a user by Clerk ID
router.get("/:id", requireAuth(), getUsersById);

// Update additional user data
router.put("/:id", requireAuth(), insertAdditionalData);

export default router;
