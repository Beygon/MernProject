import express from "express";
const router = express.Router();
import {
  authUser,
  getMe,
  loginUser,
  logout,
  registerUser,
} from "../controllers/userControllers.js";

router.post("/auth", authUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logout);
router.get("/getme", getMe);

export default router;
