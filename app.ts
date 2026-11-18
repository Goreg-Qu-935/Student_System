import 'dotenv/config';
import  Express, { urlencoded }  from 'express';
import UserRoute from "./routs/UserRout"
import TaskRoute from "./routs/TaskRoute"
import SubmissionRout from "./routs/SubbmitionsRoute"

const app = Express();
app.use(urlencoded({extended:true}))


app.use("/api",UserRoute)
app.use("/api",SubmissionRout)
app.use("/api",TaskRoute)



app.listen(3000,()=>{
    console.log("Done Connectiong")
})
