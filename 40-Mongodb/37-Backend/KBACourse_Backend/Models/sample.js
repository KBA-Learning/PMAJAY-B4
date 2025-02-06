import {Schema} from 'mongoose';
import {model} from 'mongoose';

const demo=new Schema({
    firstName:String,
    lastName:String,
    userName:{type:String,required:true,unique:true},
    password:String,
    userRole:{type:String ,required:true}
});
// trim:true, lowercase:true ,minlength:6, enum:['admin','user']
const sample=model('Userdetails',demo)

export default sample;
