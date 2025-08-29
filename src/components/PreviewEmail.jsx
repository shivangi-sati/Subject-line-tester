import React from "react";
import { useEmail } from "../context/EmailContext"; 
import { motion } from "framer-motion"; 

const PreviewEmail = () => {
  const { subject } = useEmail();

  return (
    // Container card with fade-in animation
    <motion.div
      className="shadow-lg rounded-xl p-5 w-[50%] mt-6"
      initial={{ opacity: 0 }} // start invisible
      animate={{ opacity: 1 }} // fade in
      transition={{ duration: 5 }} // slow fade over 5 seconds
    >
      {/* Title */}
      <h2 className="text-lg text-yellow-400 font-bold mb-3">
        Email Preview 📧
      </h2>

      {/* Subject line preview */}
      <p className="text-gray-300">
        <span className="text-yellow-400 font-semibold">Subject: </span>
        {subject || "No subject yet"} {/* fallback if empty */}
      </p>

      {/* Sample email body preview */}
      <p className="mt-2 text-gray-400">
        This is how your email subject will appear in the inbox.
      </p>
    </motion.div>
  );
};

export default PreviewEmail;



