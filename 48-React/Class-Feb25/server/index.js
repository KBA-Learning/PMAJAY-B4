import express,{json} from 'express';
import dotenv from 'dotenv';
import { userauth } from './Routes/userroute.js';
import adminauth from './Routes/adminroute.js';
import adminsign from './Routes/adminsign.js';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from "morgan"



dotenv.config();
 
const app=express();
app.use(morgan('dev'))
app.use(cors({
    origin:'*',
    credentials:true
}))

app.use(json())

app.use('/',userauth);
app.use('/',adminauth);
app.use('/admin',adminsign);


app.get('/',function(req,res){
    // console.log("HI");
    res.send("Hello Everyone");
})

app.post('/',function(req,res){
    res.send("Hello Everyone");
})

mongoose.connect('mongodb://localhost:27017/KBA_COURSE').then(() => {
    console.log(" MongoDB connected successfully to KBA_COURSE");})
    .catch((error) => {
        console.error(" MongoDB connection failed:", error);
    });

app.listen(process.env.PORT,function(){
    console.log(`server is listening at ${process.env.PORT}`);
});