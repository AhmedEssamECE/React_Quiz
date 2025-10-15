import React from "react";

export default function Loader() {
  return (
    <div className="grid place-items-center mx-auto ">
      <div className="border-4 border-white border-t-transparent rounded-full w-12 h-12 animate-spin "></div>
      <p className="mt-1 text-white">Loading...</p>
    </div>
  );
}
