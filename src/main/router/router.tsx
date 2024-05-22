import { BrowserRouter } from "react-router-dom";

import { appRoutes } from "../config/routes-config";
import { makeRoutes } from "../factories/routes/routes-factory";
import { ThemeProvider } from "../provider/theme-provider";
import { useControllerTheme } from "~/application/shared/hooks/use-controller-theme";

const Router = () => {
  useControllerTheme();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      themes={["light", "dark", "system"]}
      disableTransitionOnChange
    >
      <BrowserRouter>{makeRoutes(appRoutes)}</BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
