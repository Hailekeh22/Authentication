import express from "express";
import { checkSession, removeSession } from "../controllers/homeController.js";

export const homeRoute = express.Router();

homeRoute.get("/home", checkSession);
homeRoute.post("/home/logout", removeSession);
