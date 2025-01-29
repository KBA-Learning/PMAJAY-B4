import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import authenticate from "../Middleware/auth.js";
dotenv.config();

const userauth=Router();

const user = new Map();


userauth.get('/',(req,res)=>{
    console.log("HI");
    res.send("Hello Everyone");
});

userauth.post('/signup',async(req,res)=>{
    try{
        
    // console.log(req.body);
    // const data =req.body;
    // console.log(data.UserName);
    // user.set(data.UserName,{Name:data.FirstName,initial:data.LastName,Password:data.Password,UserRole:data.UserRole});
    // console.log(user.get(data.UserName));
    const {FirstName,LastName,UserName,Password,UserRole} = req.body;
    console.log(FirstName);
    // user.set(UserName,{FirstName,LastName,Password,UserRole});
    
   
    if(user.get(UserName)){
       res.status(400).send("Username already exist") ;
    }
    else{
        const newPassword =await bcrypt.hash(Password,10);
        console.log(newPassword);
        user.set(UserName,{FirstName,LastName,Password:newPassword,UserRole});
        res.status(201).send("Signed-up successfully")
    }}
    

catch{
    res.status(500).send("Internal Server error");
}
// finally{

// }    
   
})

userauth.post('/login',async(req,res)=>{
    try{
        const {UserName,Password}=req.body;
        const result = user.get(UserName);
        if(!result){
            res.status(400).send("Enter a valid username");
        }
        else{
            console.log(result.Password);
            const valid =await bcrypt.compare(Password,result.Password);
            console.log(valid);
            if(valid){
                const token = jwt.sign({UserName:UserName,UserRole:result.UserRole},process.env.SECRET_KEY,{expiresIn:'1h'});
                console.log(token);
                res.cookie('authToken',token,
                {
                    httpOnly:true
                });
                res.status(200).json({message:"Logged in successfully"});
            }
            else{

                res.status(401).send("Unauthorized access");

            }
         }

    }
    catch{
        res.status(500).send("Internal Server Error")
    }
})

userauth.get('/logout',(req,res)=>{
    res.clearCookie('authToken');
    res.status(200).json({msg:"Successfully logged out"})
})


export {userauth};