import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateUserDetails,
  updateUserAvatar,
  updateCoverImage,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/Auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);
//used app.use("ROUTE", method) - https://locahost:8000/api/v1/user/register.

router.route("/login").post(loginUser);
//secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-user-passowrd").post(changeCurrentPassword);
router.route("/get-current-user").get(getCurrentUser);
router.route("/update-user-details").post(updateUserDetails);
router.route("/update-user-avatar").post(updateUserAvatar);
router.route("/update-user-cover-image").post(updateCoverImage);

export default router;
