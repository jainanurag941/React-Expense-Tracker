import { Router } from "express";
const router = Router();
import * as CategoryController from "../controller/CategoryController.js";

router.delete("/:id", CategoryController.destroy);
router.post("/", CategoryController.create);
router.patch("/:id", CategoryController.update);

export default router;
