import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import Content from "../Components/Content";
import Identification from "../Components/Indentification"; // Ensure correct spelling
import MultipleChoice from "../Components/MultipleChoice";
import Enumeration from "../Components/Enumeration";
import logo from "../img/logo.png";

function Home() {
  const [main, setMain] = useState("content"); // Default to Multiple Choice

  return (
    <div className="flex h-[100vh] w-full overflow-hidden">
      {/* Sidebar */}
      <div className="bg-gray-300 w-1/6 h-full py-5 px-2">
        <GiHamburgerMenu className="h-7 w-7 ms-3 my-2 cursor-pointer" />

        <div className="w-full h-full mt-10 flex flex-col">
          <h1 className="ms-2 mb-5 font-bold">History</h1>
          <div className="rounded-2xl px-5 py-2 bg-gray-400 cursor-pointer flex items-center justify-between">
            <FaPlus />
            Add
          </div>

          <div className="rounded-2xl ps-3 py-2 hover:bg-gray-400 cursor-pointer">
            <p>Activity 1</p>
          </div>
          <div className="rounded-2xl ps-3 py-2 hover:bg-gray-400 cursor-pointer">
            <p>Activity 2</p>
          </div>
          <div className="rounded-2xl ps-3 py-2 hover:bg-gray-400 cursor-pointer">
            <p>Activity 3</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full">
        <div className="flex items-center justify-around px-5 shadow-sm">
          <img
            onClick={() => setMain("content")}
            className="w-25 h-20 cursor-pointer"
            src={logo}
            alt="error"
          />

          <h1
            onClick={() => setMain("multipleChoice")}
            className="cursor-pointer hover:text-gray-500 transition-all duration-100"
          >
            Multiple Choice
          </h1>

          <h1
            onClick={() => setMain("identification")}
            className="cursor-pointer hover:text-gray-500 transition-all duration-100"
          >
            Identification
          </h1>

          <h1
            onClick={() => setMain("enumeration")}
            className="cursor-pointer hover:text-gray-500 transition-all duration-100"
          >
            Enumeration
          </h1>
        </div>

        {/* Dynamic Component Rendering */}
        {main === "content" && <Content />}
        {main === "multipleChoice" && <MultipleChoice />}
        {main === "identification" && <Identification />}
        {main === "enumeration" && <Enumeration />}
      </div>
    </div>
  );
}

export default Home;
