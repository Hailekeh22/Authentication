import { db } from "../config/database.js";

export const deleteCode = (email) => {
  db.query("DELETE FROM verification WHERE email = ?", [email]);
};
