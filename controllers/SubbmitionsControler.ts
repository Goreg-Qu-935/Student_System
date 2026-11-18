import { Response, Request } from "express";
import { SubbmitionModule } from "../module/Subbmitionsmodule";

export const Submitions = {

    GetAll(req: Request, res: Response) {
        const TaskId = req.params.id
        SubbmitionModule.Get(TaskId).then((Tasks) => {
            res.status(200).json({ Data: { Tasks } })
        }).catch((error) => {
            res.status(500).json({ Message: "Can't Get The submissions " + error })
        })
    },

    GetOne(req: Request, res: Response) {
        SubbmitionModule.getOne(req.body.SubmissionId).then((Task) => {
            res.status(200).json({ Data: Task })
        }).catch((error) => {
            res.status(500).json({ Error: "Can't Get The Submissions " + error })
        })
    },

    GetUserSubmissions(req: Request, res: Response) {
        const UserId = req.user.UserId
        SubbmitionModule.GetUsersSubmissions(UserId).then((submissions) => {
            res.status(200).json({ Data: submissions })
        }).catch((error) => {
            res.status(500).json({ Error: "Can't Get The Submissions " + error })
        })

    },
    AddSubmition(req: Request, res: Response) {
        const TaskId = req.params.id
        const file = req.file?.buffer
        SubbmitionModule.AddTaskSubmossions(TaskId, req.user.UserId, file).then(() => {
            res.status(200).json({ Message: "Done Adding submissions" })
        }).catch((error) => {
            res.status(500).json({ Message: "Can't Adding submissions" + error })
        })

    },
    Update(req: Request, res: Response) {
        const Grade = req.body.Grade;
        const SubmissionId = req.body.SubmissionId;
        console.log("Sub")
        SubbmitionModule.EditeGrade(SubmissionId, Grade).then(() => {
            res.status(200).json({ Message: "Done Updating Grade" })
        }).catch((error) => {
            res.status(500).json({ Message: "Can't Updating Grade" + error })
        })
    },
}