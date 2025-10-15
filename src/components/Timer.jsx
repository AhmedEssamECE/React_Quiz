import React from "react";

import { useEffect } from "react";
export default function Timer({ dispatch, secondsRemaining }) {
  const mins = Number(Math.floor(secondsRemaining / 60));
  const sec = Number(secondsRemaining % 60);
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className=" bg-gray-400 px-6 py-3 rounded-full text-white">
      {mins < 10 && "0"}
      {mins}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}
