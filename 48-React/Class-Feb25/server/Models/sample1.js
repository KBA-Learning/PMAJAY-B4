import {Schema} from 'mongoose';
import {model} from 'mongoose';

const demo=new Schema({
    firstName:String,
    lastName:String,
    userName:{type:String,required:true,unique:true},
    password:String,
    userRole:{type:String ,enum:['admin','user'],required:true}
});
// trim:true, lowercase:true ,minlength:6
const sample=model('sample1',demo)

export default sample;

const CourseSchema=new Schema({
    courseName:{type:String,unique:true},
    courseId:String,
    courseType:String,
    description:String,
    price:Number,
    image:String

}) 
// Create Course model
const Course=model('courses',CourseSchema) 

export  {Course};