import express from "express";
import { protect } from "../middleware/authMIddleware.js";
const router = express.Router();
import {
   authUser,
   logoutUser,
   registerUser,
   updateUserProfile,
   getUserProfile,
} from "../controllers/userController.js";

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router
   .route("/profile")
   .get(protect, getUserProfile)
   .put(protect, updateUserProfile);
export default router;
