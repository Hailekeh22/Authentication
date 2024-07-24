import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  const handlechanges = (e) => {
    const { name, value } = e.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <div className=" h-screen w-full bg-slate-800 flex items-center justify-center">
      <div className=" p-4 bg-slate-400 rounded-lg w-80">
        <div className="flex items-center justify-center ">
          <h2 className=" font-bold">Login</h2>
        </div>
        <form onSubmit={login} className=" flex flex-col w-full">
          <label>Email</label>
          <input
            type="email"
            className=" rounded-md p-1"
            name="email"
            onChange={handlechanges}
          ></input>
          <label>password</label>
          <input
            type="password"
            className=" rounded-md p-1"
            name="password"
            onChange={handlechanges}
          ></input>
          <button type="submit" className=" primary-btn mt-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
