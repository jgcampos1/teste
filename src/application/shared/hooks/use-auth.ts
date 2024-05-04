import { useMemo } from "react";
import { useAppSelector } from "./use-app-selector";
import { cacheStorage } from "~/main/cache";
import { AUTH_STORAGE_TOKENS } from "~/application/feature/auth/domain/entities/auth-tokens";
import { ROUTES } from "~/main/types/routes-enum";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const authData = useAppSelector(({ auth }) => auth);
  const accessTokenKey = AUTH_STORAGE_TOKENS.AUTH;
  const navigate = useNavigate();
  const user = {
    name: "John Doe",
  };

  const accessTokenStorage = cacheStorage.get<string>(accessTokenKey);

  const isAuthenticated = useMemo(() => {
    console.log(
      "authData",
      authData,
      accessTokenStorage,
      !!authData?.id_token || !!accessTokenStorage
    );
    return !!authData?.id_token || !!accessTokenStorage;
  }, [authData, accessTokenStorage]);

  const logout = () => {
    cacheStorage.set(accessTokenKey, null);
    navigate(ROUTES.LOGIN);
  };

  return { isAuthenticated, logout, user };
};