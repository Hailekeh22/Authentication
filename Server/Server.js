import express from "express";
import { port } from "./constants.js";
import cors from "cors";
import { loginRoute, signUpRoute } from "./routes/authRouth.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(signUpRoute);
app.use(loginRoute);

app.listen(port, () => {
  console.log("Server is Running on port " + port);
});
