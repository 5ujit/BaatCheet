import express from "express";
import dotenv from 'dotenv'

import authRouts from "./routes/auth.route.js" 
import { connectDB } from "./lib/db.js";

dotenv.config();
const app = express();

 
const PORT =process.env.PORT

app.use("/api/auth",authRouts)

app.listen(PORT,()=>{
    console.log("server is running on PORT: " + PORT);
    connectDB()
});

// index.js file 