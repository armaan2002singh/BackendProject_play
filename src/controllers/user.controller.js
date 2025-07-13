import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js"; // this user is direct contacting with the database.

//generate the tokens --
const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false }); // if will save here then the fields of the mongos will be kicked in.
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "something went wrong while gennerating the refresh and access token."
    );
  }
};

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

  // let coverimageLocalPath;
  // console.log("🔴 coverimage do  exist or find.",req.files,req.files.coverImage[0]);

  //TEST-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  // if (
  //   req.files &&
  //   Array.isArray(req.files.coverImage) &&
  //   req.files.coverImage.lenght > 0
  // ) {
  //   coverimageLocalPath = req.files.coverImage[0].path;
  //   console.log("🔴 coverimage do  exist or find.", req.files.coverImage);
  // }

  if (!avatarLocalPath)
    throw new ApiError(400, "🔴 Avatar do not exist or find.");
  //console.log(avatarLocalPath, coverimageLocalPath);

  const avatar = await uploadOnCloudinary(avatarLocalPath); //wait till file will upload
  const coverimage = await uploadOnCloudinary(coverimageLocalPath); //wait till file will upload

  if (!avatar) {
    throw new ApiError(400, "🔴 Avatar do not exist or find.");
  }
  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverimage?.url || "",
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

const loginUser = asyncHandler(async (req, res) => {
  //request body data
  // username and email? one of them.
  // find the user. exist or not
  //password check?
  //access and refresh token generate.
  // send tokens in cookies
  // response to the user that logged in

  const { email, username, password } = req.body;
  if (!username || !email) {
    // can use the email or username as per the requirement.
    throw new ApiError(400, "username is required");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  }); // can check on the bases of one out of both that user or email, even we can send both to check.

  if (!user) {
    throw new ApiError(404, "user does not exist.");
  }

  //using the pre-declared method in the userSchema.
  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(404, "invalid user credentials.");
  }

  // all things are clear then access and refresh token provide

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged in successfully."
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  //concept of middle ware will be used here.
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully."));
});

export { registerUser, loginUser, logoutUser };
