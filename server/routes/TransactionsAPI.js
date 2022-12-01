import { Router } from "express";
import * as TransactionController from "../controller/TransactionController.js";
import passport from "passport";

const router = Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  TransactionController.index
);

router.post("/", TransactionController.create);
router.delete("/:id", TransactionController.destroy);
router.patch("/:id", TransactionController.update);

export default router;
