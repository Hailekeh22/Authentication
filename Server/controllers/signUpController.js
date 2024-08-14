import bcrypt from "bcrypt";
import { registerUser } from "../service/registerUser.js";
import { sendMail } from "../service/sendMail.js";
import { code } from "../utils/codeGenerator.js";
import { storeCode } from "../service/storeVerificationCode.js";

export const signup = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  bcrypt.hash(password, 12).then(async (hash) => {
    storeCode(email, code);
    const result = await registerUser(firstname, lastname, email, hash);
    if (result) {
      const VerificationMessage = `Your Verification Number is : ${code}`;
      res.send(result);
      await sendMail(email, VerificationMessage);
      next();
    } else {
      res.send("Signup Error");
    }
  });
};
