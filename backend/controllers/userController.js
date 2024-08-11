import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/genarateToken.js";

// @desc Auth user/set token
// route post  /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
   res.status(200).json({ message: "Auth User" });
});

// @desc Register new user
// route post  /api/users/auth
// @access Public
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

// @desc Logout user
// route post  /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
   res.status(200);
   res.status(200).json({ message: "Logout User" });
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
