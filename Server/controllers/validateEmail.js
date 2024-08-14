import { getCode } from "../service/getVerificationCode.js";
import { deleteCode } from "../service/removeVerification.js";

export const validateEmail = async (req, res) => {
  const { email, code } = req.body;

  const sentcode = await getCode(email);
  const submittedCode = parseInt(code);

  if (sentcode === submittedCode) {
    res.json({ emailValidated: true });
    deleteCode(email);
  } else {
    res.json({ emailValidated: false });
  }
};
