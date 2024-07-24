import React from "react";

const Signup = () => {
  return (
    <div className=" h-screen w-full bg-slate-800 flex items-center justify-center">
      <div className=" p-4 bg-slate-400 rounded-lg w-80">
        <form action="" method="POST" className=" flex flex-col w-full">
          <label>First Name</label>
          <input type="text" className=" rounded-md p-1"></input>
          <label>Last Name</label>
          <input type="text" className=" rounded-md p-1"></input>
          <label>Email</label>
          <input type="email" className=" rounded-md p-1"></input>
          <label>password</label>
          <input type="password" className=" rounded-md p-1"></input>
          <button type="submit" className=" primary-btn mt-3">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
