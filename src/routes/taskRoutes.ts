import { Router } from "express";
import { getTasks, postTask, putTask, deleteTask } from "../controllers/taskController";

const router = Router();

router.get("/", getTasks);
router.post("/", postTask);
router.put("/:id", putTask);
router.delete("/:id", deleteTask);

export default router;