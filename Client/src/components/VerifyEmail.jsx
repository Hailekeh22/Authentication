import React, { useState } from "react";
import { PinInput } from "@mantine/core";

const VerifyEmail = () => {
  const [pin, setPin] = useState("");

  const handleChange = (value) => {
    setPin(value);
  };

  const handleSubmit = () => {
    console.log(pin);
  };

  return (
    <div className=" flex items-center justify-center h-screen w-full bg-slate-900">
      <div className=" p-10 bg-black flex flex-col justify-center items-center gap-3">
        <h2 className=" text-white ">Enter Verification Code</h2>
        <PinInput placeholder="-" type={/^[0-9]*$/} onChange={handleChange} />
        <button
          className="text-white outline-none bg-lime-500 w-full py-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
