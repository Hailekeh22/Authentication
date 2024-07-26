import { db } from "../config/database.js";

export const userLogin = async (email, password) => {
  const login = await new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        if (res.length > 0) {
          return resolve(1);
        } else {
          return resolve(0);
        }
      }
    );
  });
  return login;
};
