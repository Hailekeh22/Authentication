import express from "express";
import { signup } from "../controllers/signUpController.js";
import { login } from "../controllers/loginController.js";

export const signUpRoute = express.Router();
export const loginRoute = express.Router();

signUpRoute.post("/signup", signup);
loginRoute.post("/login", login);
