import { Router } from "express";
import UserApi from "./UserApi.js";
import TransactionsAPI from "./TransactionsAPI.js";
import AuthApi from "./AuthApi.js";
const router = Router();
import passport from "passport";
import CategoryApi from "./CategoryApi.js";

router.use(
  "/transaction",
  passport.authenticate("jwt", { session: false }),
  TransactionsAPI
);
router.use("/auth", AuthApi);
router.use("/user", UserApi);
router.use(
  "/category",
  passport.authenticate("jwt", { session: false }),
  CategoryApi
);

export default router;
