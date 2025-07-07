import express from "express"
import dotenv from "dotenv"

import cookieParser from "cookie-parser";
import cors from "cors";


import {connectDB} from "./lib/db.js"
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";


dotenv.config()

// Validate required environment variables
if (!process.env.PORT || !process.env.MONGODB_URI || !process.env.JWT_SECRET) {
    console.error("❌ Missing required environment variables.");
    process.exit(1);
  }
const app = express();

// const PORT =process.env.PORT
const PORT = process.env.PORT || 5001;


app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true, 
}));

// Routes
app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)

// Connect to DB first, then start server
app.listen(PORT,()=>{
    console.log(`server is running on the PORT: ${PORT} `);
    connectDB();
})