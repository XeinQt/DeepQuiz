import React from "react";

function MultipleChoice() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-50 py-10">
      <h2 className="text-4xl font-semibold bg-gray-300 p-5 w-full mb-6 text-center">
        What is the largest planet in our Solar System?
      </h2>

      <div className="flex flex-col space-y-4 w-full">
        <button className="w-full text-xl text-white py-2 px-6 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
          Earth
        </button>
        <button className="text-xl text-white py-2 px-6 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
          Jupiter
        </button>
        <button className="text-xl text-white py-2 px-6 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
          Mars
        </button>
        <button className="text-xl text-white py-2 px-6 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
          Saturn
        </button>
      </div>

      <button className="mt-6 bg-gray-600 px-6 py-3 rounded-full text-lg font-semibold text-white hover:bg-gray-500 transition ease-in-out duration-200">
        Submit
      </button>
    </div>
  );
}

export default MultipleChoice;
