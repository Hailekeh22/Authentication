import { db } from "../config/database.js";

export const storeCode = (email, code) => {
  try {
    db.query("INSERT INTO verification(email,verificationcode) VALUES (?,?)", [
      email,
      code,
    ]);
  } catch (e) {
    console.log(e);
  }
};
