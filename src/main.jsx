import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { EmailProvider } from "./context/EmailContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EmailProvider>
      <App />
    </EmailProvider>
  </React.StrictMode>
);

