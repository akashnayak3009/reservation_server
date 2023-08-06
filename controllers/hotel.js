import Hotel from "../models/Hotel.js";


//Controllers for createHotel
export const createHotel =async (req,res,next)=>{
    const newHotel= new Hotel(req.body);

    try{
        const savedHotel= await newHotel.save();
        res.status(200).json(savedHotel);
    }
    catch(err){
        next(err);
    }
}

//Controllers for UpdateHotel
export const updateHotel =async (req,res,next)=>{
    try{
        const updatedHotel= await  Hotel.findByIdAndUpdate(req.params.id, 
            {$set: req.body},
            { new:true }
             ); 
        res.status(200).json(updatedHotel);
    }
    catch(err){
        next(err);
    }
}

//Controllers for DeleteHotel
export const deleteHotel =async(req,res,next)=>{
    try{
        const deletedHotel= await  Hotel.findByIdAndDelete(req.params.id); 
        res.status(200).json("Hotel has been deleted");
    }
    catch(err){
       next(err);
    }
}


//COntroller for getting one hotel
export const getHotel =async(req,res,next)=>{
    
    try{
        const hotel= await  Hotel.findById(req.params.id); 
        res.status(200).json(hotel);
    }
    catch(err){
       next(err);
    }
}

//Controller for getting all hotel
export const getAllHotel =async(req,res,next)=>{
    try{
        const hotels= await  Hotel.find(req.params.id); 
        res.status(200).json(hotels);
    }
    catch(err){
        next(err);
    }
}