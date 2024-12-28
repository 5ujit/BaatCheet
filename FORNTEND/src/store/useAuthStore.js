// forntend >src> >store>useAuthStore.js
import axios from "axios";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIng: false,
  isUpdateingProfile: false,
  ischeckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");

      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({
        ischeckingAuth: false,
      });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIng: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIng: false });
    }
  },

  logout: async () => {
    await axiosInstance.post("/auth/logout");
    set({ authUser: null });
    toast.success("Loged out successfully");
    try {
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  updateProfile: async(data)=>{
    set({isUpdateingProfile:true});
    try {
      const res= await axiosInstance.put("/auth/update-profile",data)
      set({authUser:res.data});
      toast.success("Profile update successfully");
      
    } catch (error) {
      console.log("error in update profile", error);
      toast.error(error.response.data.message)
      
    }finally{
      set({isUpdateingProfile:false});
    }

  },
}));
