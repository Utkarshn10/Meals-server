import express from "express";
import UserModel from "./userModel.js";

const router = express.Router();
const User = UserModel;

router.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send(user);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
});

export default router;
