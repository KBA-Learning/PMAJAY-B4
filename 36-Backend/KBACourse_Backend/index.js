import express,{json} from 'express';
import dotenv from 'dotenv';
import { userauth } from './Routes/userroute.js';
import adminauth from './Routes/adminroute.js';
import adminsign from './Routes/adminsign.js';

dotenv.config();
 
const app=express();
app.use(json())

app.use('/',userauth);
app.use('/',adminauth);
app.use('/admin',adminsign);


app.get('/',function(req,res){
    // console.log("HI");
    res.send("Hello Everyone");
})

app.post('/',function(req,res){
    res.send("Hello Everyone");
})



app.listen(process.env.PORT,function(){
    console.log(`server is listening at ${process.env.PORT}`);
});