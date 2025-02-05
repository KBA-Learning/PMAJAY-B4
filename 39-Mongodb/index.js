//const express= require ('express');
import routes from './routes.js'

import mongoose from 'mongoose'
import express from 'express'
const app=express();
const port=8000;
app.use(express.json());
app.use('/',routes);
app.listen(port,()=>{ console.log(`server is running on ${port}`);
})
mongoose.connect('mongodb://localhost:27017/demo')


