import { Router } from "express";
const router = Router();
import User from "../models/user.model.js";
import bcrypt from "bcrypt";

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashPassword = await bcrypt.hashSync(password, 10);
    const user = new User({
      username,
      email,
      password: hashPassword,
    });
    await user.save().then(() => {
      res.status(200).json({ message: "User created successfully." });
    });
  } catch (error) {
    res.status(200).json({ message: "User already exists." });
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    // const { email, password } = req.body;
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(200).json({ message: "User not found." });
    }
    const validPassword = await bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      res.status(200).json({ message: "Invalid password." });
    }
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(200).json({
      message: "User not found.",
    });
  }
});

export default router;
