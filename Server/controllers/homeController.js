export const checkSession = (req, res) => {
  if (req.session.isLoggedin) {
    res.json({ loggedIn: true, user: req.session.user });
  } else {
    res.status(401).json({ loggedIn: false, message: "Not authenticated" });
  }
};

export const removeSession = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.json({ error: "Failed to log out" });
    }
    res.clearCookie("isLoggedin", { path: "/" });
    res.json({ loggedIn: false, message: "Logged out successfully" });
  });
};
