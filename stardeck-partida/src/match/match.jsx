import React from "react";
import "../index.css";
import ReactDOM from "react-dom/client";
import MatchScreen from "./components/MatchScreen";
import { MatchContextProvider } from "./context/MatchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MatchContextProvider>
      <MatchScreen />
    </MatchContextProvider>
  </React.StrictMode>
);
