// sotre> useAuthStore.js
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import SignUpPage from "../pages/SignUpPage";
import toast from "react-hot-toast";
import { logout } from "../../../BACKEND/src/controllers/auth.controllor";
// import { logout } from "../../../BACKEND/src/controllers/auth.controllor";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLogginging: false,
  isUpdatingProfile: false,

  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
      console.log("Error in checkAuth:", error);
    } catch (error) {
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
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
  















}));
