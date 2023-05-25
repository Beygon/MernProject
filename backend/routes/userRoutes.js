import express from "express";
import protect from "../middlewares/authMiddleware.js";
const router = express.Router();
import {
  authUser,
  getMe,
  loginUser,
  logout,
  registerUser,
} from "../controllers/userControllers.js";

router.post("/auth", protect, authUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logout);
router.get("/getme", protect, getMe);

export default router;
