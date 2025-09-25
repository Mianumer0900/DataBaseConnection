import express from "express";
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
import pool from "./config/db.js";
import createUserTable from "./data/createUserTable.js";
dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.get("/" , (req , res)=>{
  res.json({message:"Hello World!", status:"Success"})
})

createUserTable()
app.use("/api",userRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
