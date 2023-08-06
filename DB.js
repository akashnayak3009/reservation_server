import mongoose from "mongoose";

const DB = async()=>{
    try{
const connect = await mongoose.connect(/**your mongo db url */);
console.log("DATABASE CONNECTED")
    }catch(err){
        console.log("Connection error")
        console.log(err)
    }
}

DB();


export default DB