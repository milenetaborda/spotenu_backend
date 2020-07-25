import express from "express";
import { UserController } from "../controller/UserController";
export const userRouter = express.Router();
const userController = new UserController()

userRouter.post("/signup/listening", userController.signupListeningUser);
userRouter.post("/signup/administrator", userController.signupAdministratorUser);
userRouter.post("/signup/band", userController.signupBandUser);
userRouter.post("/login", userController.login)
userRouter.post("/approve-band", userController.aproveBand)

userRouter.get("/bands", userController.getAllBands) 
