import { IRoute } from "~/main/types/route-types";
import { ROUTES } from "~/main/types/routes-enum";
import { ElementType } from "react";
import { Navigate, type RouteProps } from "react-router-dom";

type Props = RouteProps & {
  private: boolean;
  Layout: ElementType;
  route: IRoute;
};

const ProtectRoute = ({ private: isPrivate, Layout, element }: Props) => {
  const { isAuthenticated } = { isAuthenticated: true };

  const redirect = ROUTES?.LOGIN;

  if (!element) return <Navigate to={redirect} />;
  if (isPrivate) {
    return (
      <Layout>
        {isAuthenticated ? <>{element}</> : <Navigate to={redirect} />}
      </Layout>
    );
  }

  return <Layout>{element}</Layout>;
};

export default ProtectRoute;
