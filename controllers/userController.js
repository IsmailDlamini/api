import User from "../Models/UserModel";
import asyncHandler from "express-async-handler";
import ComparePasswords from "../utils/comparePasswords";
import { generateToken } from "../utils/generateToken";

// lOGIN CONTROLLER

export const Login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = User.findOne({ email });

  const passwordsMatch = ComparePasswords(user.password, password);

  const token = generateToken(user._id);

  if (user && passwordsMatch) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: token,
      createdAt: user.createdAt,
    });

  }else{
    res.status(401)
    throw new Error("invalid email or password")
  }
});
