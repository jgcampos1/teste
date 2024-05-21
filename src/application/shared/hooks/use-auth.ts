import { useEffect } from "react";
import { cacheStorage } from "~/main/cache";
import { AUTH_STORAGE_TOKENS } from "~/application/feature/auth/domain/entities/auth-tokens";
import { ROUTES } from "~/main/types/routes-enum";
import { useNavigate } from "react-router-dom";
import { useGetAccountQuery } from "~/application/feature/account/store/hooks";
import { useAuthStore } from "~/application/feature/auth/store/auth-store";

export const useAuth = () => {
  const { setAuth, authUser, clear } = useAuthStore();
  const accessTokenKey = AUTH_STORAGE_TOKENS.AUTH;
  const navigate = useNavigate();

  const { data: user } = useGetAccountQuery();

  const accessTokenStorage = cacheStorage.get<string>(accessTokenKey);

  useEffect(() => {
    if (user && !authUser) {
      setAuth(user);
    }
  }, [user, setAuth, authUser]);

  const logout = () => {
    cacheStorage.set(accessTokenKey, null);
    navigate(ROUTES.LOGIN);
    clear();
  };

  return {
    isAuthenticated: !!authUser || !!accessTokenStorage,
    logout,
    user,
  };
};
