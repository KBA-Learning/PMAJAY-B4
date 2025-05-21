import express,{json} from 'express';
import userRouter from './Routes/userRoute.js';

const app=express();

app.use(json());
app.use('/',userRouter);
app.listen(8000,()=>{
    console.log("Server is listening to port 8000");
})