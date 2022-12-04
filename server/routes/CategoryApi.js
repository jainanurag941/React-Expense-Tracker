import { Router } from "express";
const router = Router();
import * as CategoryController from "../controller/CategoryController.js";

router.delete("/:id", CategoryController.destroy);

export default router;
