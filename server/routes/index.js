import { Router } from "express";
import UserApi from "./UserApi.js";
import TransactionsAPI from "./TransactionsAPI.js";
import AuthApi from "./AuthApi.js";
const router = Router();

router.use("/transaction", TransactionsAPI);
router.use("/auth", AuthApi);
router.use("/user", UserApi);

export default router;
