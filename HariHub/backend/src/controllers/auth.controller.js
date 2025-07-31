// backend > src> controllers> auth.controller.js
import User from "../models/user.model";
export const signup=async (req,res)=>
    {
        const {fullName,email, password}= req.body 
    try {
        // hash password 
        if(password.length <6){
            return res.status(400).json({message:"Password must be at least 6 characters "});
        }
        const user= await user.findOne({email})
        if (user) res.status(400).json({message:"Email alreaddy exist"})
    } catch (error) {
        
    }
};




export const login = (req,res)=>{
    res.send("login route")
};

export const logout= (req,res)=>{
    res.send("logout route")
};

