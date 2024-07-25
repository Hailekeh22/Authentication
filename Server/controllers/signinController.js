import { registerUser } from "../service/registerUser.js";

export const signup = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  const result = await registerUser(firstname, lastname, email, password);

  res.send(result);
  next();
};
