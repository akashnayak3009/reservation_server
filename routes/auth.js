import  express  from "express";
import { register, login } from "../controllers/auth.js";

const router =express.Router();


//Routes for register
router.post('/register',register)


//Routes for login
router.post('/login', login)


export default router


