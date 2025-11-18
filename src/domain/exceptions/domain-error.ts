/**
 * Base class for Domain atau Application Errors.
 */
export class DomainError extends Error {
  public readonly tag: string;

  constructor(message: string, tag: string) {
    super(message);
    this.name = 'DomainError';
    this.tag = tag;

    // Keep stack traces
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DomainError);
    }
  }
}
