import React from "react";
import ReactDOM from "react-dom/client";
import "@/application/shared/styles/globals.css";
import Router from "./main/router/router.tsx";
import "@/main/config/i18next-setup";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
