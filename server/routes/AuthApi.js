import { Router } from "express";
import User from "../models/User.js";
const router = Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

router.post("/register", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(406).json({ message: "User already exists." });
    return;
  }

  const saltRounds = 10;
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hashedPassword = await bcrypt.hashSync(password, salt);

  const user = await User({
    email,
    password: hashedPassword,
    firstName,
    lastName,
  });

  await user.save();
  res.status(201).json({ message: "User is successfully created" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    res.status(406).json({ message: "Invalid Credentials." });
    return;
  }

  const matched = await bcrypt.compare(password, user.password);
  if (!matched) {
    res.status(406).json({ message: "Invalid Credentials." });
    return;
  }

  const payload = {
    username: email,
    _id: user._id,
  };

  const token = jwt.sign(payload, process.env.SECRET);
  res.json({ message: "Successfully Logged In", token });
});

export default router;
