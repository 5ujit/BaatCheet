// backend > src> controllers> auth.controller.js
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
export const signup=async (req,res)=>
    {
        const {fullName,email, password}= req.body 
    try {
        // hash password 
        if(password.length <6){
            return res.status(400).json({message:"Password must be at least 6 characters "});
        }
        const user= await User.findOne({email})
        if (user) res.status(400).json({message:"Email alreaddy exist"})
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await  bcrypt.hash(password,salt)
           
           
            const newUser=new User({
                fullNamme:fullName,
                email:email,
                password:hashedPassword
            })
    } catch (error) {
        
    }
};




export const login = (req,res)=>{
    res.send("login route")
};

export const logout= (req,res)=>{
    res.send("logout route")
};

