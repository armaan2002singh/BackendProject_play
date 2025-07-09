# Basic code

### without any other configuration.

```javascript
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    //cors is an object in itself.
    origin: process.env.CORS_ORIGIN,
    Credential: true,
  })
); // it is used for all middlewares, cors -- TODO

app.use(express.json({ limit: "16kb" }));
//if data comes from the URL then -->
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
//these are difficult to handle but correct way to handle them is given above. "Extended is used for giving object into object."

app.use(express.static("public")); // is for sometime we want to store some files and folder then on that time, can access them.

app.use(cookieParser()); // can read from documentary.

export default app;
```
