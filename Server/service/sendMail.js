import { transporter } from "../config/emailService.js";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const sendMail = async (resiverMail, num) => {
  const mailOptions = {
    from: process.env.email,
    to: [resiverMail],
    subject: "Verification Number",
    text: num,
  };
  const info = await transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent Sucessfully :" + res.response);
    }
  });
};

sendMail("hailekeh22@gmail.com", "Helloww");
