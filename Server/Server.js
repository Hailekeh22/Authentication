import express from "express";
import { port } from "./constants.js";
import cors from "cors";
import { loginRoute, signUpRoute } from "./routes/authRouth.js";
import { homeRoute } from "./routes/homeRoute.js";
import { verifyEmail } from "./routes/verifyEmail.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import crypto from "crypto";
import session from "express-session";

const app = express();
const secrateKey = crypto.randomBytes(32).toString("hex");

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  session({
    secret: secrateKey,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

app.use(signUpRoute);
app.use(verifyEmail);
app.use(loginRoute);
app.use(homeRoute);

app.listen(port, () => {
  console.log("Server is Running on port " + port);
});
