import asyncHandler from "express-async-handler";
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
  res.status(201).json({ message: "User Registered!" });
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
