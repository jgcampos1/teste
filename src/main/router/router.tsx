import { BrowserRouter } from "react-router-dom";

import { appRoutes } from "../config/routes-config";
import { makeRoutes } from "../factories/routes/routes-factory";
import { Provider } from "react-redux";
import { store } from "../core/store/store";

const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>{makeRoutes(appRoutes)}</BrowserRouter>
    </Provider>
  );
};

export default Router;
