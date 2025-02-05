//import mongoose from 'mongoose';

//const { Schema, model } = mongoose; 
import {Schema} from 'mongoose';
import {model} from 'mongoose';

const demo=new Schema({
    userid:{type:String,required:true},
    name:{type:String,required:true},
    dob:{type:String,required:true}
});
const sample=model('sample1',demo)

export default sample;