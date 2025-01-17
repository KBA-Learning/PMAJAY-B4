import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
 
const app=express();



app.listen(process.env.PORT,function(){
    console.log(`server is listening at ${process.env.PORT}`);
});