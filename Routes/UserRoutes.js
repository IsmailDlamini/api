
import express from "express";
import { Login } from "../controllers/userController";
const userRoute = express.Router()


userRoute.post('login', Login)



export default userRoute