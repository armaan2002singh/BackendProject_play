import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js"; // this user is direct contacting with the database.
const registerUser = asyncHandler(async (req, res) => {
  // res.status(500).json({
  //   message: "ok men",
  // });
  //get user details from frontend.
  //validation to check elements.- not empty
  // check if user already exist? : username,email both
  // check for images, check for avator
  // upload them to cloudinary.  - check avator is uploaded or not?
  // now create user object - creation call entry in db.
  // remove password and refresh token field from response.
  // check for user creation ?
  // return response, no then error.

  const { username, email, fullName, password } = req.body;
  console.log(username, email, fullName, password);
  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "🔴all fields are compulsary and required.");
  }
  if (!email.match("@"))
    throw new ApiError(400, "🔴email format is not right.");
  //console.log("🧠",email);
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "🔴 user already exists.");
  }

  //images and avatar
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverimageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath)
    throw new ApiError(400, "🔴 Avatar do not exist or find.");
  console.log(avatarLocalPath, coverimageLocalPath);

  const avatar = await uploadOnCloudinary(avatarLocalPath); //wait till file will upload
  const coverimage = await uploadOnCloudinary(coverimageLocalPath); //wait till file will upload

  if (!avatar) {
    throw new ApiError(400, "🔴 Avatar do not exist or find.");
  }

  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverimage: coverimage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(
      500,
      "🔴 something went error, while registering a User"
    );
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "✅ user registered successfully"));
});

export { registerUser };
