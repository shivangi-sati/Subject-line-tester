import React from "react";
import { useEmail } from "../context/EmailContext"; 

const SpamCheck = () => {

  const { subject, setSpamScore, loading, setLoading, error, setError } = useEmail();

  // Function to simulate checking spam score
  const checkSpam = () => {
    // check if subject is empty
    if (!subject) {
      setError("Please enter a subject first."); // show error
      return;
    }

    setError(""); // clear previous errors
    setLoading(true); // set loading state for button

    // Simulate API call with timeout
    setTimeout(() => {
      const simulatedScore = Math.floor(Math.random() * 6); // random spam score 0-5
      setSpamScore(simulatedScore); // update spam score in context
      setLoading(false); // stop loading
    }, 1000); // simulate 1 second delay
  };

  return (
    // Container for spam check button and error messages
    <div className="mt-2 p-2 w-[50%] rounded shadow-md text-center">
      {/* Button to check spam */}
      <button
        onClick={checkSpam} // call function on click
        disabled={loading} // disable button while loading
        className="bg-yellow-500 mt-2 py-2 px-5 rounded text-white hover:bg-yellow-600 disabled:opacity-50"
      >
        {loading ? "Checking..." : "Check Spam"} {/* dynamic button text */}
      </button>

      {/* Show error message if exists */}
      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
};

export default SpamCheck;


