import { BrowserRouter } from "react-router-dom";

import { appRoutes } from "../config/routes-config";
import { makeRoutes } from "../factories/routes/routes-factory";

const Router = () => {
  return <BrowserRouter>{makeRoutes(appRoutes)}</BrowserRouter>;
};

export default Router;
