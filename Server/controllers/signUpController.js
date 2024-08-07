import { registerUser } from "../service/registerUser.js";
import { sendMail } from "../service/sendMail.js";
import { code } from "../utils/codeGenerator.js";

export const signup = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  const verificationCode = code;

  const result = await registerUser(firstname, lastname, email, password);
  if (result) {
    const reciver = email;
    const VerificationMessage = `Your Verification Number is : ${verificationCode}`;

    await sendMail(reciver, VerificationMessage);
    console.log(VerificationMessage);
  }
  res.send(result);
  next();
};
