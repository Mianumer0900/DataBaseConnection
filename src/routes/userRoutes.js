import express from "express";
// import createUser from "../controllers/userControllers.js";
import { createUser } from "../controllers/userControllers.js";

const router = express.Router();

// router.get ("/users" , (request,result)=>{
//  result.json({message:"User Route", status:"Success"})
// })

router.post("/users", createUser);
export default router;
