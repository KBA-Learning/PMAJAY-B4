import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import authenticate from "../Middleware/auth.js";
import sample from "../Models/sample.js";
dotenv.config();

const userauth=Router();



userauth.get('/',(req,res)=>{
    console.log("HI");
    res.send("Hello Everyone");
});

userauth.post('/signup',async(req,res)=>{
    try{
        
    
    const {FirstName,LastName,UserName,Password,UserRole} = req.body;
    console.log(FirstName);
    // user.set(UserName,{FirstName,LastName,Password,UserRole});
    
    const existingUser=await sample.findOne({userName:UserName});
    console.log(existingUser);
    
    if(existingUser){
       res.status(400).send("Username already exist") ;
    }
    else{
        const newPassword =await bcrypt.hash(Password,10);
        console.log(newPassword);

        //user.set(UserName,{FirstName,LastName,Password:newPassword,UserRole});
        const newUser = new sample({
            firstName: FirstName,
            lastName: LastName,
            userName: UserName,
            password: newPassword,
            userRole: UserRole
          });
           // Save user to MongoDB
          await newUser.save();
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
        const result = await sample.findOne({userName:UserName}).exec();
        console.log(result);
        
        if(!result){
            res.status(400).send("Enter a valid username");
        }
        else{
            console.log(result.password);
            const valid = await bcrypt.compare(Password,result.password);
            console.log(valid);
            if(valid){
                const token = jwt.sign({UserName:UserName,UserRole:result.userRole},process.env.SECRET_KEY,{expiresIn:'1h'});
                console.log(token);
                res.cookie('authToken',token,
                {
                    httpOnly:true
                });
                res.status(200).json({message:"Logged in successfully"});
            }
            else{

                res.status(401).json({msg:"Unauthorized access"});

            }
         }

    }
    catch{
        res.status(500).send({msg:"Internal Server Error"})
    }
    
})

userauth.get('/logout',(req,res)=>{
    res.clearCookie('authToken');
    res.status(200).json({msg:"Successfully logged out"})
})


export {userauth};