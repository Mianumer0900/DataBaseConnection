import express from "express";
import {
  getAllItems,
  getItemByID,
  createItem,
  deleteItemByID,
  updateItemByID,
} from "../controllers/basketControllers.js";

const router = express.Router();

router.get("/basket", getAllItems);
router.get("/basket/:id", getItemByID);
router.post("/basket", createItem);
router.delete("/basket/:id", deleteItemByID);
router.patch("/basket/:id", updateItemByID);

export default router;
