import Express from "express"
import  {TasksController}  from "../controllers/TaskController";
import { Auth } from "../MidlleWare/Auth";
const Route=Express.Router()

Route.post("/addtask",Auth.Authentication,Auth.Admin,TasksController.AddTask)
Route.delete("/delete",Auth.Authentication,Auth.Admin,TasksController.DeleteTask)

module.exports=Route;