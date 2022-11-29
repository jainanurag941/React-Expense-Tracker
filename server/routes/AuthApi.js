import { Router } from "express";
const router = Router();

router.post("/register", (req, res) => {
  res.json({ message: "User is successfully created" });
});

export default router;
