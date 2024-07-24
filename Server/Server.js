import express from "express";
import { port } from "./constants.js";

const app = express();

app.listen(port, () => {
  console.log("Server is Running on port " + port);
});
