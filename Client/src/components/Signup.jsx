import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [inputValues, setInputValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const signup = (e) => {};

  return (
    <div className=" h-screen w-full bg-slate-800 flex items-center justify-center">
      <div className=" p-4 bg-slate-400 rounded-lg w-80">
        <div className="flex items-center justify-center ">
          <h2 className=" font-bold">Sign Up</h2>
        </div>
        <form onSubmit={signup} className=" flex flex-col w-full">
          <label>First Name</label>
          <input
            type="text"
            className=" rounded-md p-1"
            name="firstname"
            onChange={handlechange}
          ></input>
          <label>Last Name</label>
          <input
            type="text"
            className=" rounded-md p-1"
            name="lastname"
            onChange={handlechange}
          ></input>
          <label>Email</label>
          <input
            type="email"
            className=" rounded-md p-1"
            name="email"
            onChange={handlechange}
          ></input>
          <label>password</label>
          <input
            type="password"
            className=" rounded-md p-1"
            name="password"
            onChange={handlechange}
          ></input>
          <button type="submit" className=" primary-btn mt-3">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
