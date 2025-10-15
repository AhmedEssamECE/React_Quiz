import React from "react";

export default function FinishScreen({ dispatch, totalPoints, points }) {
  return (
    <div className="w-full max-w-[34rem] grid grid-cols-1 place-items-center gap-5">
      <img src="../../public/vite.svg" alt="" className="w-[142px]" />
      <h1 className="px-6 py-4 w-full bg-violet-300 shadow-yellow-600 text-white rounded-full text-center hover:scale-105 ease-in-out duration-150 cursor-pointer">
        You scored {points} out of {totalPoints} Points
      </h1>
      <button
        className="text-white cursor-pointer  px-5 py-3 bg-gray-500 hover:scale-[23px]  text-center rounded-full hover:bg-gray-900 ease-in-out duration-600 hover:scale-112 "
        onClick={() => dispatch({ type: "/restart" })}
      >
        Restart Now
      </button>
    </div>
  );
}
