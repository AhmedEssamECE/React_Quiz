import React from "react";

export default function Options({ question, options, answer, dispatch }) {
  const hasAnswered = answer !== null;

  return (
    <div className="mt-12 space-y-4">
      {options.map((op, ix) => {
        // determine button color dynamically
        let btnClass =
          "rounded-full px-5 py-3 w-full text-white transition-transform duration-200 ease-in-out cursor-pointer ";

        if (!hasAnswered) {
          btnClass += "bg-blue-400 hover:scale-105";
        } else if (ix === question.correctOption) {
          btnClass += "bg-green-600"; // correct answer
        } else if (ix === answer) {
          btnClass += "bg-red-600"; // wrong answer
        } else {
          btnClass += "bg-gray-500"; // other buttons disabled
        }

        return (
          <button
            key={ix}
            onClick={() => dispatch({ type: "/answered", payload: ix })}
            className={btnClass}
            disabled={hasAnswered}
          >
            {op}
          </button>
        );
      })}
    </div>
  );
}
