import { type DomainException } from './domain-exception';

// TODO: verify where is using the this error.
export class AccessDeniedError implements DomainException {
  type = 'AccessDeniedError';
  message = 'Access denied';

  constructor(public error?: any) {}
}
