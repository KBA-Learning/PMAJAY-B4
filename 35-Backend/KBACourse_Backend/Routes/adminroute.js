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

// adminauth.get('/getCourse/:cname',(req,res)=>{

//     const name = req.params.cname;
//     console.log(name);

// })
adminauth.get('/getCourse',(req,res)=>{
try{
    const name = req.query.courseName;
    console.log(name);
    const result = course.get(name);
    if(result){
        res.status(200).json({data:result});
    }
    else{
        res.send(404).json({msg:"No such course"});
    }
}
catch{
    res.status(500).send("Internal Server Error");
}

})

adminauth.put('/updateCourse',authenticate,adminCheck,(req,res)=>{
    try{
        console.log(req.role);

        // const data = req.body;
        const {CourseName,CourseId,CourseType,Description,Price} = req.body;
        if(course.get(CourseName)){
            course.set(CourseName,{CourseId,CourseType,Description,Price});
            res.status(201).send("Course successfully updated");
        }
        else{
            res.status(404).send("No such course exist");
        }

    }
    catch{
        res.status(500).send("Internal Server Error")
    }
})

adminauth.patch('/editCourse',authenticate,adminCheck,(req,res)=>{
    try{
   const {CourseName,CourseType,Price}= req.body;
   console.log(CourseType);
   const result = course.get(CourseName);
   console.log(result);
   if(result){
    course.set(CourseName,{CourseId:result.CourseId,CourseType,Description:result.Description,Price});
    res.status(200).json({msg:"Course successfully updated"});
   }
   else{
    res.status(404).send("Course not found");
   }}
   catch{
    res.status(500).send("Internal Server Error")
   }

})



export default adminauth;
