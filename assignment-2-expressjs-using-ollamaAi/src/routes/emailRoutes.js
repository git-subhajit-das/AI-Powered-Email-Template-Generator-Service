import express from "express";
import generateEmail from "../controllers/emailController.js";

const router = express.Router();

// POST http://localhost:4000/api/generate-email
router.post("/generate-email", generateEmail);

export default router;
