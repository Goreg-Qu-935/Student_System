import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { UserModule } from "../module/UserMdoule";

export interface CustomRequest extends Request {
    user?: any;
}

export const Auth = {
    Authentication(req: CustomRequest, res: Response, next: NextFunction) {
        const AuthHeader = req.headers.authorization
        if (!AuthHeader)
            return res.status(401).json({ Error: "Missing Or Invlaied Token" })
        const Token = AuthHeader.split(" ")[1];
        console.log(Token)
        try {
            const decode = jwt.verify(Token, "SECRET")
            UserModule.Auth(decode.UserId, decode.UserEmail).then((User) => {
              //  console.log(User)
                req.user = User
                next()
            })
        }
        catch {
            return res.status(401).json({ Error: "Missing Or Invlaied Token" })
        }
    },
    Admin(req: Request, res: Response, next: NextFunction) {
        const user = req.user
        console.log(user)
        if (user.UserRole == "admin") { next() }
        else return res.status(401).json({ Error: "Un Authried" })
    }
}