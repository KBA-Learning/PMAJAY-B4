import { Router } from "express";

const userauth=Router();

userauth.get('/',(req,res)=>{
    console.log("HI");
    res.send("Hello Everyone");
});

export {userauth};