import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/genarateToken.js";

// authUser route
const authUser = asyncHandler(async (req, res) => {
   const { email, password } = req.body;
   const user = await User.findOne({ email });
   if (user && (await user.matchPasswords(password))) {
      generateToken(res, user._id);
      res.status(201).json({
         _id: user._id,
         name: user.name,
         email: user.email,
      });
   } else {
      res.status(401);
      throw new Error("Invalid email or password");
   }
   res.status(200).json({ message: "Auth User" });
});

// register route
const registerUser = asyncHandler(async (req, res) => {
   const { name, email, password } = req.body;
   const userExist = await User.findOne({ email });
   if (userExist) {
      res.status(400);
      throw new Error("User already Exists");
   }

   const user = await User.create({ name, email, password });

   if (user) {
      generateToken(res, user._id);
      res.status(201).json({
         _id: user._id,
         name: user.name,
         email: user.email,
      });
   } else {
      res.status(400);
      throw new Error("Invalid user data");
   }
});

// logout user route
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
   res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
   res.status(200).json({ message: " User Logged out" });
});

// @desc get user profile
// route post  /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
   res.status(200);
   res.status(200).json({ message: "User Profile" });
});

// @desc update user profile
// route put /api/users/profile
// @access Public
const updateUserProfile = asyncHandler(async (req, res) => {
   res.status(200);
   res.status(200).json({ message: "update user  Profile" });
});
export {
   authUser,
   registerUser,
   logoutUser,
   getUserProfile,
   updateUserProfile,
};
