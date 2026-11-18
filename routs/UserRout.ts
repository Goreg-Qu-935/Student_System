import Express from "express";
import { UserController } from "../controllers/UserController";
import { Auth } from "../MidlleWare/Auth";

const Route = Express.Router()

Route.post("/register",UserController.register)
Route.post("/login",UserController.LogIn)

module.exports=Route