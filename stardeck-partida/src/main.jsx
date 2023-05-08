import React from "react";
import ReactDOM from "react-dom/client";
import WaitScreen from "./WaitScreen.jsx";
import "./index.css";
import { WaitScreenContextProvider } from "./context/WaitScreenContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WaitScreenContextProvider>
      <WaitScreen />
    </WaitScreenContextProvider>
  </React.StrictMode>
);
