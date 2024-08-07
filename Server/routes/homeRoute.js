import express from "express";
import { checkSession } from "../controllers/homeController.js";

export const homeRoute = express.Router();

homeRoute.get("/home", checkSession);
