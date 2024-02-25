import ProtectRoute from "@/application/shared/components/protect-route";
import { LayoutConfig } from "@/main/config/layout-config";
import { IRoute } from "@/main/types/route-types";
import { Route, Routes } from "react-router-dom";

export const makeRoutes = (routes: IRoute[]) => {
  return routes.map((route) => {
    const Layout = LayoutConfig[route.layout].component;
    if (route.routes) {
      return (
        <Route
          key={route.name}
          element={
            <Routes location={location}>
              <Route
                path={route.path}
                key={route.path}
                element={
                  <ProtectRoute
                    Layout={Layout}
                    private={route.private ?? false}
                    element={<>{route.element}</>}
                    route={route}
                  />
                }
              />

              {route.routes.map((nested) => (
                <Route
                  path={nested.path}
                  key={nested.path}
                  element={
                    <ProtectRoute
                      Layout={Layout}
                      private={nested.private ?? false}
                      element={<>{nested.element}</>}
                      route={route}
                    />
                  }
                />
              ))}
            </Routes>
          }
        />
      );
    }

    return (
      <Routes key={route.path}>
        <Route
          path={route.path}
          element={
            <ProtectRoute
              Layout={Layout}
              private={route.private ?? false}
              element={route.element}
              route={route}
            />
          }
        />
      </Routes>
    );
  });
};
