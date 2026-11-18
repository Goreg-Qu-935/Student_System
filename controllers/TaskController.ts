import { Request, Response } from "express";
import { TaskModule } from "../module/TaskModule";
export const TasksController = {
    
    AddTask(req: Request, res: Response) {
    
        TaskModule.AddTask(req.body.TaskTitle).then(() => {
            res.status(200).json({ Message: "Done Adding The Task" })
        }).catch((error) => {
            res.status(500).json({ Error: "Can't Adding The Task" + error })
        })

    },
    DeleteTask(req: Request, res: Response) {
        const TaskId = req.params.id
        TaskModule.deleteTask(TaskId).then(() => {
            res.status(200).json({ Message: "Done Deleteing The Task" })
        }).catch((error) => {
            res.status(500).json({ Error: "Can't Deleteing The Task" + error })
        })
    }

}