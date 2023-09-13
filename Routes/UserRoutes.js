
import express from "express";
import { Login } from "../controllers/userController.js";
const userRoute = express.Router()


userRoute.post('login', Login)



export default userRoute