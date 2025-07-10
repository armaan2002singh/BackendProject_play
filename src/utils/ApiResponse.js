//This is a custom response wrapper class for formatting your successful API responses in a consistent and structured way.

class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode; // API server statusCode -- TODO
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}
export { ApiResponse };
