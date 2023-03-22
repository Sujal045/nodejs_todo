import express from "express";
import {
  getUserDetails,
  login,
  logout,
  registerUsers,
} from "../controllers/user.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

router.post("/new", registerUsers);

router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isAuth, getUserDetails);

export default router;
