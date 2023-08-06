import  express  from "express";

const router =express.Router();

import { verifyAdmin } from "../utils/verifyToken.js";
import { createRoom,updateRoom,getRoom,getAllRoom,deleteRoom } from "../controllers/room.js";
 

//CREATE

router.post("/",verifyAdmin,createRoom);

//UPDATE

router.put("/:id",verifyAdmin,updateRoom);

//DELETE
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom);

//GET

router.get("/:id",getRoom);

//GETALL
router.get("/",getAllRoom);


export default router


