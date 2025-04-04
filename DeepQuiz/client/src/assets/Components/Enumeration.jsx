import React from "react";

function Enumeration() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-50 py-10">
      <h2 className="text-4xl font-semibold bg-gray-300 p-5 w-full mb-6">
        Enumeration Example
      </h2>

      <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-full">
        <ol className=" text-xl space-y-4">
          <li>
            First item in the enumeration:
            <input
              type="text"
              placeholder="Your answer"
              className="ml-2 p-2 rounded"
            />
          </li>
          <li>
            Second item in the enumeration:
            <input
              type="text"
              placeholder="Your answer"
              className="ml-2 p-2 rounded"
            />
          </li>
          <li>
            Third item in the enumeration:
            <input
              type="text"
              placeholder="Your answer"
              className="ml-2 p-2 rounded"
            />
          </li>
          <li>
            Fourth item in the enumeration:
            <input
              type="text"
              placeholder="Your answer"
              className="ml-2 p-2 rounded"
            />
          </li>
          <li>
            Fifth item in the enumeration:
            <input
              type="text"
              placeholder="Your answer"
              className="ml-2 p-2 rounded "
            />
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Enumeration;
