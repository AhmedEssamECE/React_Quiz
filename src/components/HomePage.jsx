import React from "react";
export default function HomePage({ dispatch }) {
  return (
    <div className="grid gap-5  place-items-center">
      <img src="../../public/vite.svg" alt="" className="w-15" />
      <h1 className="text-white text-center font-bold md:text-5xl">
        Welcome to the React quiz app
      </h1>
      <p className="text-white text-center text-[23px]">
        This quiz will test your knowledge in React framework
      </p>
      <div className="flex flex-row-reverse mt-3">
        <button
          className="text-white cursor-pointer  px-5 py-3 bg-gray-500 hover:scale-[23px]  text-center rounded-full hover:bg-gray-900 ease-in-out duration-600 hover:scale-112 "
          onClick={() => dispatch({ type: "/active" })}
        >
          Start Now
        </button>
      </div>
    </div>
  );
}
