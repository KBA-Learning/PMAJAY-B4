import { Router } from "express";
import authenticate from "../Middleware/auth.js";
import adminCheck from "../Middleware/adminauth.js";

const adminauth = Router();
const course= new Map();

adminauth.post("/addCourse",authenticate,adminCheck,(req,res)=>{
    try{
    
    const {CourseName, CourseId, CourseType,Description,Price} = req.body;
    if(course.get(CourseName)){
        res.status(400).json({msg:"Course name already exist"});
    }
    else{
        course.set(CourseName,{CourseId,CourseType,Description,Price});
        res.status(201).json({msg:`${CourseName} stored successfully`})
    }
   
}
catch{
    res.status(500).send("Internal Server error");
}

})

export default adminauth;
