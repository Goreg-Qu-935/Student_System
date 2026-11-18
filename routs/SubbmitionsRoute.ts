import Express from "express";
import multer from "multer"
import {Submitions} from "../controllers/SubbmitionsControler"
import { Auth } from "../MidlleWare/Auth";

const Route = Express.Router()
const upload =multer({Storage:multer.memoryStorage()})
Route.post("/task/:id",upload.single("Subbmition"),Auth.Authentication,Submitions.AddSubmition)
Route.get("/getusers",Auth.Authentication,Submitions.GetUserSubmissions)
Route.get("/task/:id",Auth.Authentication,Auth.Admin,Submitions.GetAll)
Route.get("/task/:id/subbmition/:id",Auth.Authentication,Auth.Admin,Submitions.GetOne)
Route.put("/task/:id/subbmition/:id",Auth.Authentication,Auth.Admin,Auth.Admin,Submitions.Update)
module.exports=Route