import express from "express";
import authRouts from "./src/routes/auth.route.js" 

const app = express()


app.use("/api/auth",authRouts)


app.listen(5001,()=>{
    console.log("server is running on port 5001");
    
})