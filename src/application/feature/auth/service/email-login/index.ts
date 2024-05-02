import { httpAuthorizedClient } from "~/main/core/infra/http";
import { AUTH_API_ROUTES } from "../../api/routes";
import { AUTH_STORAGE_TOKENS } from "../../domain/entities/auth-tokens";
import { EmailLogin } from "./email-login.service";
import { cacheStorage } from "~/main/cache";
import { ServiceCommand } from "~/main/core/domain/command/service-command";

export const emailLoginService: ServiceCommand<EmailLogin.Response> =
  new EmailLogin(
    httpAuthorizedClient,
    cacheStorage,
    AUTH_STORAGE_TOKENS.AUTH,
    AUTH_STORAGE_TOKENS.REFRESH_TOKEN,
    AUTH_API_ROUTES.LOGIN
  );

export type { EmailLogin };
