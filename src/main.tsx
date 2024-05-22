import React from "react";
import ReactDOM from "react-dom/client";
import "~/application/shared/styles/globals.css";
import Router from "./main/router/router.tsx";
import "~/main/config/i18next-setup";
import { Provider } from "react-redux";
import { store } from "./main/core/store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
