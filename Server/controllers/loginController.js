import { userLogin } from "../service/loginUser.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await userLogin(email, password);

  if (result == 0) {
    res.json({ login: false });
  } else {
    res.cookie("isLoggedin", "true", {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: "strict",
      path: "/",
    });
    req.session.isLoggedin = true;
    res.json({ login: true });
  }
};
