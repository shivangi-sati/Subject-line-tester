import React from "react";
import { motion, AnimatePresence } from "framer-motion"; 

const ResultCard = ({ title, value, warning, valueColor }) => {
  return (
    <motion.div
      className="shadow-md rounded-xl p-4 text-center mt-4 backdrop-blur-md"
      initial={{ opacity: 0, y: 20 }} // start slightly below and invisible
      animate={{ opacity: 1, y: 0 }} // slide up and fade in
      transition={{ type: "spring", stiffness: 120, damping: 12 }} // spring effect
    >
      {/* Title of the card */}
      <h3 className="text-lg font-semibold text-yellow-500">{title}</h3>

      {/* Display spam score with dynamic color */}
      <p className={`text-xl font-bold mt-2 ${valueColor || "text-teal-700"}`}>
        {value}
      </p>

      {/* AnimatePresence allows smooth exit animation for warnings */}
      <AnimatePresence>
        {warning && (
          <motion.p
            key="warning" // required by AnimatePresence to track element
            className="mt-2 text-red-500 font-semibold"
            initial={{ opacity: 0, y: -10 }} // start slightly above and invisible
            animate={{ opacity: 1, y: 0 }} // slide down and fade in
            exit={{ opacity: 0, y: -10 }} // slide up and fade out when removed
            transition={{ type: "spring", stiffness: 150, damping: 10 }} // spring effect
          >
            {warning} {/* Warning text */}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ResultCard;


