import React from "react";

export default function Progress({ index, points, totalPoints }) {
  return (
    <div className="text-white w-full">
      <progress
        max={15}
        value={index + 1}
        className="w-full h-3 rounded-lg overflow-hidden [&::-webkit-progress-bar]:bg-gray-700 [&::-webkit-progress-value]:bg-white [&::-webkit-progress-value]:from-indigo-500 [&::-webkit-progress-value]:to-purple-600 [&::-moz-progress-bar]:bg-indigo-500"
      ></progress>
      <div className="flex justify-between text-2xl text-gray-300 mt-2 font-bold ">
        <span>Question {index + 1}/15</span>
        <span>
          {points}/{totalPoints}
        </span>
      </div>
    </div>
  );
}
