import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { ServiceCommand } from "../../domain/command/service-command";
import { DomainException } from "../../domain/exceptions/domain-exception";

const logError = (error: unknown) => {
  // eslint-disable-next-line no-console
  process.env.NODE_ENV !== "production" && console.error(error);
};

export const baseQueryAdapter: BaseQueryFn<
  {
    service: ServiceCommand;
    params?: unknown;
  },
  unknown,
  DomainException
> = async ({
  service,
  params,
}: {
  service: ServiceCommand;
  params?: unknown;
}) => {
  try {
    const result = await service.execute(params);

    if (result.isError()) {
      logError(result.value);
      return {
        error: result as DomainException,
      };
    }
    return { data: result.value };
    //TODO: AJUSTAR TIPAGEM
  } catch (error: unknown) {
    logError(error);
    return {
      error: {
        type: (error as Error).name,
        message: (error as Error).message,
        error: (error as Error).stack,
      },
    };
  }
};
