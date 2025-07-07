// ✅ File: src/index.js or server.js

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();

// ✅ Validate required environment variables
if (!process.env.PORT || !process.env.MONGODB_URI || !process.env.JWT_SECRET) {
  console.error("❌ Missing required environment variables.");
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 5001;

// ✅ Use body parser only ONCE, with 20MB limit
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

// ✅ Cookie parser & CORS
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// ✅ Connect to DB and start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on PORT: ${PORT}`);
  connectDB();
});
