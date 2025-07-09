import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser);
//used app.use("ROUTE", method) - https://locahost:8000/api/v1/user/register.

export default router;
