import React from "react";
import { useEmail } from "../context/EmailContext"; 

const SubjectInput = () => {
  const { subject, setSubject } = useEmail();

  // Determine length warning messages
  let lengthWarning = "";
  if (subject.length > 0 && subject.length < 5) lengthWarning = "Too short!"; // warn if subject < 5 chars
  if (subject.length > 60) lengthWarning = "Too long!"; // warn if subject > 60 chars

  return (
    // Container for input and length info
    <div className="p-4 w-[50%] text-center">
       {/* Input field for subject line  */}
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)} 
        placeholder="Enter email subject..."
        className="w-full px-4 py-2 border-b outline-0" 
      />
      
      {/* Display subject length and warnings */}
      <p
        className={`mt-2 text-sm ${
          subject.length > 0 && subject.length < 5
            ? "text-red-500" // short warning in red
            : subject.length > 60
            ? "text-red-500" // long warning in red
            : "text-gray-200" // normal text color
        }`}
      >
        Subject length: {subject.length}  {lengthWarning} {/* Show actual length and warning */}
      </p>
    </div>
  );
};

export default SubjectInput;

