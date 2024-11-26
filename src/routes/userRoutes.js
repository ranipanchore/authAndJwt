import express from "express";
import { userGet,userRegister,userLogin } from "../controller/userController.js";
import authorizedPoint from "../middleware/authMiddleware.js"

const userRoutes = express.Router();

userRoutes.get("/get",authorizedPoint,userGet);
userRoutes.post("/login", userLogin);
userRoutes.post("/register", userRegister);

export default userRoutes;
