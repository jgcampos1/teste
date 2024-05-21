import { BrowserRouter } from "react-router-dom";

import { appRoutes } from "../config/routes-config";
import { makeRoutes } from "../factories/routes/routes-factory";
import { Provider } from "react-redux";
import { store } from "../core/store/store";
import { ThemeProvider } from "../provider/theme-provider";

const Router = () => {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
        themes={["light", "dark", "system"]}
        disableTransitionOnChange
      >
        <BrowserRouter>{makeRoutes(appRoutes)}</BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default Router;
