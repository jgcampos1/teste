import { Either } from "../either/either";
import { DomainException } from "../exceptions/domain-exception";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ServiceCommand<R = unknown, T = any> {
  execute: (params: T) => Promise<ServiceCommand.Response<R>>;
}

export namespace ServiceCommand {
  export type Response<R = unknown> = Either<ResponseError, R>;
  export type ResponseError<E = DomainException> = E;
}
