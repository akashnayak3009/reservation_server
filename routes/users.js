import  express  from "express";
import { createUser, deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router =express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("Hello user, You are  ")
// })

// router.get('/checkuser/:id', verifyUser, ( req, res, next ) => {
//     res.send("hello user, you are logged in and you can delete you account")
// })

// router.get('/checkadmin/:id', verifyAdmin,( req, res, next ) => {
//     res.send("hello user, you are logged in and you can delete all account")
// })

//CREATE

router.post("/",verifyUser,createUser);
 
//UPDATE

router.put("/:id",verifyUser,updateUser);

//DELETE
router.delete("/:id",verifyUser,deleteUser);

//GET

router.get("/:id",verifyUser,getUser);

//GETALL
router.get("/",verifyAdmin,getAllUser);

export default router


