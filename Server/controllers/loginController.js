import { userLogin } from "../service/loginUser.js";

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const result = await userLogin(email, password);

  if (result == 0) {
    res.json({ login: false });
  } else {
    res.json({ login: true });
  }
};
