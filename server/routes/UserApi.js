import { Router } from "express";
import User from "../models/User.js";
const router = Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import passport from "passport";

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ user: req.user });
  }
);

export default router;
