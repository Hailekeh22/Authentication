import { db } from "../config/database.js";

export const registerUser = (fname, lname, email, pwd) => {
  try {
    const insertValue = db.query(
      "INSERT INTO users(firstname,lastname,email,password) VALUES (?,?,?,?)",
      [fname, lname, email, pwd]
    );

    if (insertValue) {
      return "Sucessfully Registerd";
    }
  } catch (e) {
    return e;
  }
};
