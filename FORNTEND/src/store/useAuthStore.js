import axios from "axios";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";

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
      console.log("Error in checkAuth:", error);
    } catch (error) {
      set({ authUser: null });
    } finally {
      set({
        ischeckingAuth: false,
      });
    }
  },

    signup:async(data)=>{
        
    }

}));
