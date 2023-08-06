import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import auth from "./routes/auth.js ";
import hotels from "./routes/hotels.js ";
import users from "./routes/users.js ";
import rooms from "./routes/rooms.js ";
import DB from "./DB.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app =express();

dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());



app.use("/api",auth); 
app.use("/api/users",users); 
app.use("/api/hotels",hotels); 
app.use("/api/rooms",rooms); 


app.use((err,req,res,next)=>{
    const errorStatus =err.status || 500

    const errorMessage =err.message || "Something went wrong"
    return res.status(errorStatus).json({
        status:false,
        message :errorMessage,
        message:errorMessage,
        stack:err.stack
    });
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is Connected ${process.env.PORT}`);
    
})