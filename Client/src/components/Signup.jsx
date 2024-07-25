import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [inputValues, setInputValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [inputs, setInputs] = useState("");
  const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const signup = (e) => {
    e.preventDefault();
    const apilink = import.meta.env.VITE_signupbackend;
    axios.post(apilink, inputValues).then((res) => {
      console.log(res.data);
      navigate("/login");
    });
    setInputValues({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };

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
            value={inputValues.firstname}
            onChange={handlechange}
          ></input>
          <label>Last Name</label>
          <input
            type="text"
            className=" rounded-md p-1"
            name="lastname"
            value={inputValues.lastname}
            onChange={handlechange}
          ></input>
          <label>Email</label>
          <input
            type="email"
            className=" rounded-md p-1"
            name="email"
            value={inputValues.email}
            onChange={handlechange}
          ></input>
          <label>password</label>
          <input
            type="password"
            className=" rounded-md p-1"
            name="password"
            value={inputValues.password}
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
