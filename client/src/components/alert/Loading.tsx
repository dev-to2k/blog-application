import React from "react";

const Loading = () => {
  return (
    <div className="fixed w-full h-full z-10 bg-white flex flex-col justify-center items-center">
      <div className="animate-spin mb-5 rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
