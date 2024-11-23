import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';dotenv.config()

mongoose.connect(process.env.MONGO)
.then(()=>{ console.log('database working well')})
    .catch((err)=>{console.log(err);});
    

const server = express();

server.listen(5000,()=>{
    console.log('this is the auth server running on port 5000');
    
})