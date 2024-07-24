import React from "react";

const Home = () => {
  return (
    <div className=" h-screen w-full bg-amber-700 flex items-center justify-center">
      <div className=" bg-slate-800 flex flex-col px-16 py-10">
        <h2 className=" text-white text-2xl mb-10">
          Sucessfully Logged In Welcome
        </h2>
        <button className=" primary-btn">Logout</button>
      </div>
    </div>
  );
};

export default Home;
