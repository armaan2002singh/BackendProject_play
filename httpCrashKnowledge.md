# HTTP CRASH COURSE - https://youtu.be/qgZiUvV41TI?si=aUCGtALx0qy7N4BS

## hyper text transfer protocol

- two major things will be one is server and client,
- and how they will be able to communicate.

- what is URL,URN,URI?
- but there are many type of protocal.

### http header -

- metadata - keyvalue sent along with request and response.
- caching, authentication, manage state.

- Request headers - from client
- Response headers - from server
- Representation - encoding / compression
- Payload headers - data

### Most common Headers

- Accept : application/json

- User-Agent - engins

- Authorization - Bearer with long line.

- Content-Type - images, pdf

- Cookie - further object.

- Cache-Control - when to expire the data.

### CORS - personal-policies of the industries.

- Access-Control-Allow-Origin

- Access-Control-Allow-Credentials

- Access-Control-Allow-Method

### Security

- Cross-Origin-Embedder-Policy

- Cross-Origin-Opener-Policy

- Content-Security-Policy

- X-XSS-Protection

# HTTP Methods

Basic set of operations that can be used to interact with server.

| Method  | Description                              |
| ------- | ---------------------------------------- |
| GET     | Retrieve a resource                      |
| HEAD    | No message body (response headers only)  |
| OPTIONS | What operations are available            |
| TRACE   | Loopback test (get same data) Used-debug |
| DELETE  | Remove a resource                        |
| PUT     | Replace a resource                       |
| POST    | Interact with resource (mostly add)      |
| PATCH   | Change part of a resource                |

# HTTP Status Codes

## Categories

| Code Range | Meaning       |
| ---------- | ------------- |
| 1xx        | Informational |
| 2xx        | Success       |
| 3xx        | Redirection   |
| 4xx        | Client error  |
| 5xx        | Server error  |

## Common Status Codes

| Code | Description        | Code | Description           |
| ---- | ------------------ | ---- | --------------------- |
| 100  | Continue           | 400  | Bad Request           |
| 102  | Processing         | 401  | Unauthorized          |
| 200  | OK                 | 402  | Payment Required      |
| 201  | Created            | 404  | Not Found             |
| 202  | Accepted           | 500  | Internal Server Error |
| 307  | Temporary Redirect | 504  | Gateway Timeout       |
| 308  | Permanent Redirect |      |                       |
