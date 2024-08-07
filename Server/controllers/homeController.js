export const checkSession = (req, res) => {
  if (req.session.isLoggedin) {
    res.json({ loggedIn: true, user: req.session.user });
    console.log(req.session);
  } else {
    res.status(401).json({ loggedIn: false, message: "Not authenticated" });
  }
};
