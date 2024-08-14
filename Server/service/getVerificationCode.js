import { db } from "../config/database.js";

export const getCode = (email) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM verification WHERE email = ?",
      [email],
      (err, res) => {
        if (res) {
          resolve(res[0].verificationcode);
        } else {
          reject(null);
        }
      }
    );
  });
};
