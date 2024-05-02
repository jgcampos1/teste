import { Either } from "../either/either";
import { DomainException } from "../exceptions/domain-exception";

export interface LocalCommand<R = any, T = any> {
  execute: (params: T) => LocalCommand.Response<R>;
}

export namespace LocalCommand {
  export type Response<R = any> = Either<ResponseError, R>;
  export type ResponseError<E = DomainException> = E;
}
