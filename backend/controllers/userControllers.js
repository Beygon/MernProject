import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
//@desc Auth user/set token
//Route
const authUser = asyncHandler(async (req, res) => {
  res.status(401);
  throw new Error("Not found");
  res.status(200).json({ message: "Auth user" });
});

//@desc Register user
//Route /api/users/register
//Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //check if user exists
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("Email already registered!");
  }

  //Create a user
  const user = await User.create({
    name,
    email,
    password,
  });

  //Check if user was created
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

//@desc login a user
// Route /api/users/login
// post  Public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Login Success!" });
});

//@desc logout a user
// Route /api/users/logout
// Post public
const logout = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout successfull" });
});

//@desc get user data
// Route /api/users/getme
// Private Get request
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User data" });
});

export { authUser, registerUser, loginUser, getMe, logout };
