import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import Details from "./components/Details.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="main">
      <Details />
    </div>
  </StrictMode>,
);
