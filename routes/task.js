import express from "express";
import {
  deleteTask,
  getMyTask,
  newTask,
  updateTask,
} from "../controllers/task.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

router.post("/new", isAuth, newTask);

router.get("/my", isAuth, getMyTask);

router.route("/:id").put(isAuth, updateTask).delete(isAuth, deleteTask);

export default router;
