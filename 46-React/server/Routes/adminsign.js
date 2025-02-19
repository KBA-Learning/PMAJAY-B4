import {Router} from 'express';
 const adminsign = Router();

 adminsign.post('/signup',(req,res)=>{
    console.log("Admin Signup");
 })

 export default adminsign;