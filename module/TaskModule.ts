import { de } from 'zod/locales';
import { PrismaClient } from './../generated/prisma/client';
const prisma = new PrismaClient()
export const TaskModule = {
    async AddTask(Task_Title) {
        await prisma.task.create({
            data: {
                TaskTitle: Task_Title
            }
        })
    },
    async deleteTask(Task_Id) {
        const DeleteSubmmistions = prisma.submission.deleteMany({
            where: {
                TaskSubmissionId: Task_Id
            }
        })
        const DeleteTask = prisma.task.delete({
            where: {
                TaskId: Task_Id
            }
        })
        const Transaction =await prisma.$transaction([DeleteSubmmistions,DeleteTask]) 
    }
}