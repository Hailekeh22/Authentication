import bcrypt from "bcrypt";
import { db } from "../config/database.js";

export const userLogin = async (email, password) => {
  const login = await new Promise((resolve, reject) => {
    db.query("SELECT * FROM users WHERE email = ? ", [email], (err, res) => {
      if (err) {
        return reject(err);
      }
      if (res.length > 0) {
        const pwd = res[0].password;
        bcrypt.compare(password, pwd).then((res) => {
          if (res) {
            return resolve(1);
          } else {
            return resolve(0);
          }
        });
      }
    });
  });
  return login;
};
