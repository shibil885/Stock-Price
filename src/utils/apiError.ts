export class ApiError extends Error {
  public statusCode: number;
  public error: string;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.error = message;
  }

  toJSON() {
    return {
      status: this.statusCode,
      error: this.error,
    };
  }
}
