import React from "react";
import ReactDOM from "react-dom/client";
import "@/application/shared/styles/globals.css";
import Router from "./main/router/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
