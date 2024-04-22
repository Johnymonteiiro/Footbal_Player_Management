export class PrimeErrorHandler extends Error {
  constructor(message: string) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PrimeErrorHandler);
    }
  }
}
