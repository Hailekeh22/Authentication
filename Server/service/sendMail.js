import { transporter } from "../config/emailService.js";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

export const sendMail = async (resiverEmail, num) => {
  const mailOptions = {
    from: process.env.email,
    to: [resiverEmail],
    subject: "Verification Number",
    text: num,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Verification Email sent");
  } catch (e) {
    console.log("Can't Send the Email");
    console.log(e);
  }
};
