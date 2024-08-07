import express from "express";
import { validateEmail } from "../controllers/validateEmail.js";

export const verifyEmail = express.Router();

verifyEmail.post("/verify", validateEmail);
