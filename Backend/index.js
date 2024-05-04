import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js'
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connect to the database');
}).catch((err)=>{
    console.log(err);
});


const app = express();

app.listen(3000, () => {
  console.log("Server listening on the port 3000");
});

app.use('/backend/user',userRoutes);