import { PrismaClient } from './../generated/prisma/client';
const prisma = new PrismaClient()
export const SubbmitionModule = {
    async AddTaskSubmossions(Task_Id: any, Student_Id: any, Sub_File: any) {
        const data = await prisma.submission.create({
            data: {
                TaskSubmissionId: Task_Id,
                SubFile: Sub_File,
                StudentSubmissionId: Student_Id
            }
        })
        return data
    },
    async Get(Task_ID) {
        const data = await prisma.submission.findMany({
            where: {
                TaskSubmissionId: Task_ID
            }, select:
            {
                SubFile: true,
                StudentSubmission: {
                    select: {
                        UserId: true,
                        UserName: true,
                        UserEmail: true
                    }
                }
            }

        })
        return data
    },
    async getOne(Sub_id: any) {
        const data = await prisma.submission.findFirst({ where: { SubId: Sub_id } })
        return data
    }
    ,
    async EditeGrade(Sub_id: any, Sub_Grad: any) {
        const data = await prisma.submission.update({
            where: {
                SubId: Sub_id
            }, data: {
                SubGrad: Sub_Grad
            }
        })
        return data
    },
    async GetUsersSubmissions(Users_Id) {
        const data = await prisma.submission.findFirst({
             where: {
                StudentSubmissionId:Users_Id
             } })
    }
}