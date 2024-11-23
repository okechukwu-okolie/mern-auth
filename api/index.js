import express from 'express';

const server = express();

server.listen(5000,()=>{
    console.log('this is the auth server running on port 5000');
    
})