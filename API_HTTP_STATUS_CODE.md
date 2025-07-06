# ✅ HTTP Status Code Reference for APIs

| Status Code | Name                  | Category     | Description                                            | When to Use                                       |
| ----------- | --------------------- | ------------ | ------------------------------------------------------ | ------------------------------------------------- |
| 200         | OK                    | Success      | Request succeeded, response body contains the result   | GET, PUT, DELETE success with response            |
| 201         | Created               | Success      | Resource created successfully                          | POST request created new resource                 |
| 202         | Accepted              | Success      | Request accepted, processing may happen asynchronously | Queue-based or async processing                   |
| 204         | No Content            | Success      | Request succeeded, no content returned                 | DELETE success or when no response body is needed |
| 400         | Bad Request           | Client Error | Client sent invalid data                               | Missing fields, wrong types, validation failure   |
| 401         | Unauthorized          | Client Error | Client not authenticated                               | Token missing/expired, login required             |
| 403         | Forbidden             | Client Error | Client authenticated but not allowed                   | No access rights to a resource                    |
| 404         | Not Found             | Client Error | Requested resource not found                           | Wrong URL, missing record in database             |
| 409         | Conflict              | Client Error | Conflict with current resource state                   | Duplicate entry, version conflict                 |
| 422         | Unprocessable Entity  | Client Error | Semantically incorrect data                            | Validation passed format but logic is invalid     |
| 429         | Too Many Requests     | Client Error | Rate limit exceeded                                    | Too many requests in short time                   |
| 500         | Internal Server Error | Server Error | Generic error on the server side                       | Uncaught exception, crash, unexpected error       |
| 502         | Bad Gateway           | Server Error | Invalid response from upstream server                  | Reverse proxy or microservice failures            |
| 503         | Service Unavailable   | Server Error | Server temporarily down or overloaded                  | Maintenance, high load                            |
| 504         | Gateway Timeout       | Server Error | Server did not receive timely response from upstream   | Upstream microservice timeout                     |
