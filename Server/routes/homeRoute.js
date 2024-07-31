import express from "express";
import session from "express-session";

export const homeRoute = express.Router();

homeRoute.get("/home", (req, res) => {
  if (req.session.isLoggedin) {
    res.json({ loggedIn: true, user: req.session.user });
    console.log(req.session);
  } else {
    res.status(401).json({ loggedIn: false, message: "Not authenticated" });
  }
});
