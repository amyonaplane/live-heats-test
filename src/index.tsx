import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RaceContextProvider } from "./RaceContext";
import { ModalContextProvider } from "./ModalContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RaceContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </RaceContextProvider>
  </React.StrictMode>
);
