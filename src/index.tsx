import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RaceContextProvider } from "./RaceContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RaceContextProvider>
      <App />
    </RaceContextProvider>
  </React.StrictMode>
);
