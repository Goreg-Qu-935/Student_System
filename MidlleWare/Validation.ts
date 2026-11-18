import { z } from "zod";
export const UserValidation = z.object({
    UserName: z.string({ error: "User Name Should Be String" }).min(3, { error: "User Name Is Too Short" }).max(20, { message: "User Name Is Too Long" }),
    UserEmail: z.string({ error: "User Email Should Be String" }).regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, { error: "The Email Is Ivalied" }),
    UserPassword: z.string({ error: "User Password Should Be String" }).min(8, { error: "Password should be 8 at Lest" }).max(20, { message: "Password shouldn't be more then 20" })
})