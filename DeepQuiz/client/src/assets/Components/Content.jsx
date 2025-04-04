import React, { useState } from "react";
import axios from "axios";

function Content() {
  const [notes, setNotes] = useState(""); // State for storing user input
  const [generatedContent, setGeneratedContent] = useState(""); // Store summary and questions

  // Handle user input in textarea
  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  // Handle form submission (Generate button)
  const handleGenerate = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/generate-questions",
        {
          notes: notes,
        }
      );

      // Set the generated content to display
      setGeneratedContent(response.data.summaryAndQuestions);
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  return (
    <div className="w-full h-full px-35 py-10">
      <h1 className="text-5xl mb-3">Online Education</h1>
      <h1 className="text-7xl mb-3">Start learning</h1>
      <h1 className="text-5xl">At Home</h1>

      <div className="mt-5 flex flex-col">
        <h1 className="mb-[-13px]">
          Put all your notes here and I will do the rest .....
        </h1>
        <textarea
          className="border px-3 py-2 h-[200px] mt-5"
          value={notes}
          onChange={handleNotesChange}
        ></textarea>

        <button
          className="bg-gray-300 mt-5 px-5 py-2 cursor-pointer rounded-3xl"
          onClick={handleGenerate}
        >
          Generate
        </button>

        {/* Display generated summary and questions */}
        {generatedContent && (
          <div className="mt-5">
            <h2 className="text-xl font-bold">Generated Content:</h2>
            <pre className="mt-3 p-5 border bg-gray-100">
              {generatedContent}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;
