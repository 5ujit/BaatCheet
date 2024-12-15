// sotre> useAuthStore.js
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import SignUpPage from "../pages/SignUpPage";

export const useAuthStore = create((set)=>({
    authUser:null,
    isSigningUp:false,
    isLogginging:false,
    isUpdatingProfile:false,


    isCheckingAuth:true,


    checkAuth: async()=>{
        try {
            const res=await axiosInstance.get("/auth/check")
            set({authUser:res.data})    
            console.log("Error in checkAuth:",error);
                   
        } catch (error) {
            set({authUser:null})
            
        }finally{
            set({isCheckingAuth:false})
        }
    },
    signup: async(data)=>{
        
    }
}))