import express from "express";
import { createUser , getAllUsers , getUsersByID,deleteUsersBYID,updateUserByID } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id" ,getUsersByID)
router.post("/users", createUser);
router.delete("/users/:id" ,deleteUsersBYID)
router.patch("/users/:id" ,updateUserByID)
export default router;
