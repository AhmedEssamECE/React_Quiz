import React from "react";

export default function NextButton({ dispatch, index, numQuestion, answer }) {
  if (answer === null) return;
  if (index < numQuestion - 1)
    return (
      <button
        className="px-7 py-3 bg-gray-400 rounded-full text-white hover:scale-105 ease-in duration-76 cursor-pointer"
        onClick={() => dispatch({ type: "/next" })}
      >
        Next
      </button>
    );

  return (
    <div>
      {
        <button
          className="px-7 py-3 bg-gray-400 rounded-full text-white hover:scale-105 ease-in duration-76 cursor-pointer"
          onClick={() => dispatch({ type: "/finished" })}
        >
          Finish
        </button>
      }
    </div>
  );
}
