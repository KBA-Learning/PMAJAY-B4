import { Router } from "express";
import bcrypt from 'bcrypt';

const userauth=Router();

const user = new Map();
userauth.get('/',(req,res)=>{
    console.log("HI");
    res.send("Hello Everyone");
});

userauth.post('/signup',async(req,res)=>{
    // console.log(req.body);
    // const data =req.body;
    // console.log(data.UserName);
    // user.set(data.UserName,{Name:data.FirstName,initial:data.LastName,Password:data.Password,UserRole:data.UserRole});
    // console.log(user.get(data.UserName));
    const {FirstName,LastName,UserName,Password,UserRole} = req.body;
    console.log(FirstName);
    // user.set(UserName,{FirstName,LastName,Password,UserRole});
    
    const newPassword =await bcrypt.hash(Password,10);
    console.log(newPassword);
    user.set(UserName,{FirstName,LastName,Password:newPassword,UserRole});
    console.log(user.get(UserName));
})

export {userauth};