import Room from "../models/Room.js";
import { createError } from "../utils/error.js";
import Hotel from "../models/Hotel.js";

export const createRoom =async (req,res,next)=>{

    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)

    try{
        const savedRoom = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: {rooms: savedRoom._id}
            })
        }catch(err){
            next(err);
        }
        res.status(200).json(savedRoom);

    }catch(err){
        next(err)
    }
}



//Controllers for UpdateRoom
export const updateRoom =async (req,res,next)=>{
    try{
        const updatedRoom= await  Hotel.findByIdAndUpdate(req.params.id, 
            {$set: req.body},
            { new:true }
             ); 
        res.status(200).json(updatedRoom);
    }
    catch(err){
        next(err);
    }
}

//Controllers for DeleteRoom
export const deleteRoom =async(req,res,next)=>{
    const hotelId =req.params.hotelId;
    try{
         await  Hotel.findByIdAndDelete(req.params.id); 
         try{
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull:{ rooms: req.param.id},
            })
         }catch(err){
            next(err);
         }
        res.status(200).json("Room has been deleted");
    }
    catch(err){
       next(err);
    }
}


//COntroller for getting one Room
export const getRoom =async(req,res,next)=>{
    
    try{
        const room= await  Hotel.findById(req.params.id); 
        res.status(200).json(room);
    }
    catch(err){
       next(err);
    }
}

//Controller for getting all Room
export const getAllRoom =async(req,res,next)=>{
    try{
        const rooms= await  Room.find(req.params.id); 
        res.status(200).json(rooms);
    }
    catch(err){
        next(err);
    }
}

