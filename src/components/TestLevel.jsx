import React from "react";

const TestLevel = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-[#004AAD] h-screen w-screen border-2 fixed border-blue-500 border-solid object-cover ">
      <div className="test-level flex flex-col gap-8 justify-center items-center w-9/12 border-2 h-3/5 rounded-lg border-red border-solid bg-blue-100 shadow-2xl">
        <div className="name">
            Hy 'Full Name' Let's Break a record
            <input className="w-full h-9 ronded-lg border-2 border-[#004AAD] border-solid text-4" type="text" />
        </div>
        <div className="level-buttons">
            <button className="px-6 py-2  w-max shadow-xl bg-blue-700 hover:bg-[#004AAD] text-white rounded inline-flex ml-3 transition-all duration-300">Easy</button>
            <button className="px-6 py-2  w-max shadow-xl bg-blue-700 hover:bg-[#004AAD] text-white rounded inline-flex ml-3 transition-all duration-300">Medium</button>
            <button className="px-6 py-2  w-max shadow-xl bg-blue-700 hover:bg-[#004AAD] text-white rounded inline-flex ml-3 transition-all duration-300">Hard</button>
        </div>
      </div>
    </div>
  );
};

export default TestLevel;
