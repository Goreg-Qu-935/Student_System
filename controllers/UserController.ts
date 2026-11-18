import { Request, Response } from "express";
import { UserValidation } from "../MidlleWare/Validation";
import { safeParse } from "zod";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { UserModule } from "../module/UserMdoule";

export const UserController = {
    register(req: Request, res: Response) {
        try {
            const { UserName, UserEmail, UserPassword } = req.body
            const Error = UserValidation.safeParse({ UserName, UserEmail, UserPassword })
            if (Error.error?.issues.length >= 1) {
                console.log(Error.error?.issues[0]["message"])
                res.status(500).json({ Error: Error.error?.issues[0]["message"] })
            }
            bcrypt.hash(UserPassword, 10).then((HashedPassword) => {
                UserModule.Regester(UserName, UserEmail, HashedPassword).then((user) => {
                    const Token = jwt.sign({UserId:user.UserId, UserName: UserName, UserEmail: UserEmail }, "SECRET", { expiresIn: 60 * 60 })
                    console.log(Token)
                    res.status(200).json({ Token: Token })

                })
            })
        }
        catch {
            console.log({ Error: "You Should Enter Values" })
            res.status(500).json({ Error: "You Should Enter Values" })
        }
    },
    LogIn(req: Request, res: Response) {
        const { UserName, UserEmail, UserPassword } = req.body;
        UserModule.LogIn(UserEmail).then((User) => {
            if (User === null) { return res.status(500).json("Wronge Email") }
            bcrypt.compare(UserPassword, User.UserPassword).then((hash) => {
                console.log(hash)
                if (hash) {
                    const Token = jwt.sign({ UserName: UserName, UserEmail: UserEmail }, "SECRET", { expiresIn: 60 * 60 })
                    res.status(200).json({ Token: Token })
                } else { res.status(500).json({ Error: "Wrong Password" }) }
            })
        }).catch((err) => { console.log(err) })
    }
}