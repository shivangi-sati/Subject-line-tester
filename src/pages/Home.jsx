import React from "react";
import { motion } from "framer-motion";
import SubjectInput from "../components/SubjectInput";
import SpamCheck from "../components/SpamCheck";
import PreviewEmail from "../components/PreviewEmail";
import ResultCard from "../components/ResultCard";
import { useEmail } from "../context/EmailContext"; 

const Home = () => {
  const { spamScore } = useEmail();

  // Determine text color based on spamScore value
  let spamColor = "text-teal-700"; // default color
  if (spamScore !== null) {
    if (spamScore < 2) spamColor = "text-green-600"; // low spam, good
    else if (spamScore < 5) spamColor = "text-yellow-500"; // medium spam
    else spamColor = "text-red-600"; // high spam, warning
  }

  return (
    // Container for the entire page with radial gradient background
    <motion.div
      className="min-h-screen flex flex-col items-center justify-start 
                 bg-[radial-gradient(circle_at_center,_#0F172A,_#0E4D64)] text-amber-50 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-[27px] font-bold italic text-yellow-500 mb-6"
        initial={{ y: -50, opacity: 0 }} // slide down + fade in
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Email Subject Line Tester
      </motion.h1>

      {/* Container for main components */}
      <motion.div
        className="w-full flex flex-col items-center gap-4"
        initial={{ opacity: 0 }} // fade in
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Input for subject line */}
        <SubjectInput />

        {/* Button to check spam score */}
        <SpamCheck />

        {/* Show ResultCard only if spamScore exists */}
        {spamScore !== null && (
          <motion.div
            initial={{ scale: 0 }} // pop-in animation
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
          >
            <ResultCard
              title="Spam Score ⚠️"
              value={spamScore}
              valueColor={spamColor} // dynamic color based on score
            />
          </motion.div>
        )}

        {/* Preview the email subject */}
        <PreviewEmail />
      </motion.div>
    </motion.div>
  );
};

export default Home;


