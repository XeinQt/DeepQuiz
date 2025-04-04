import React from "react";

function Indentification() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-50">
      <div className="bg-gray-300 mb-10 mt-[-200px] rounded-2xl">
        <h1 className="text-center p-5 text-2xl">
          The human digestive system is responsible for breaking down food into
          nutrients that the body can absorb and use for energy, growth, and
          repair. It includes several key organs, such as the mouth, stomach,
          and intestines.
        </h1>
      </div>
      <label className="flex flex-col">
        <input
          className="w-full border-b-2 border-gray-500 py-2 text-2xl focus:outline-none"
          type="text"
          placeholder="Enter your answer"
        />
        <button className="w-full bg-gray-300 py-2 text-2xl mt-5 cursor-pointer rounded-2xl">
          Submit
        </button>
      </label>
    </div>
  );
}

export default Indentification;
