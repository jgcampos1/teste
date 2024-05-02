import { HttpError } from "../../application/protocols/http-client";
import { DomainException } from "./domain-exception";

export class UnexpectedError implements DomainException {
  message = "Erro inesperado";
  statusCode: number | undefined;
  error: string | undefined;

  constructor(public httpError: HttpError) {
    const { body } = httpError;

    if (!body) return;
    this.message = Array.isArray(body?.message)
      ? body?.message?.[0]
      : body.message;
    this.statusCode = body?.statusCode;
    this.error = body?.error;
  }
}
