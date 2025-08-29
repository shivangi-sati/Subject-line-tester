import React, { createContext, useState, useContext } from "react";

const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [subject, setSubject] = useState("");
  const [spamScore, setSpamScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <EmailContext.Provider
      value={{
        subject,
        setSubject,
        spamScore,
        setSpamScore,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};

export const useEmail = () => useContext(EmailContext);
