import { PrismaClient } from './../generated/prisma/client';
const prisma = new PrismaClient()

export const UserModule = {
    async Regester(User_Name: any, User_Email: any, User_Password: any) {
        console.log({ User_Name, User_Email, User_Password })
        const user = await prisma.users.create({
            data: {
                UserName: User_Name,
                UserEmail: User_Email,
                UserPassword: User_Password
            }
        })
        return user
    },
    async LogIn(User_Email) {
        const user = await prisma.users.findFirst({
            where: {
                UserEmail: User_Email
            }
        })
        return user;
    },
    async Auth(User_Id,User_Email) {
        const user = await prisma.users.findFirst({
            where: {
                UserId:User_Id,
                UserEmail:User_Email
            }
        })
        return user
    }
}
