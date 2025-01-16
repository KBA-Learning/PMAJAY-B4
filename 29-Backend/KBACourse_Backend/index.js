import express from 'express';
 
const app=express();

app.listen(8000,function(){
    console.log("server is listening at 8000");
});