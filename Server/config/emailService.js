import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.email,
    pass: process.env.emailpwd,
  },
});
