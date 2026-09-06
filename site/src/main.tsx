import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { Home } from "./Home";

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
