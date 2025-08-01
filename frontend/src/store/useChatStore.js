import { create } from "zustand"
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios"

export const useChatStore = create((set) => ({
    message: [],
    users: [],
    selectUser: null,
    isUserLoading: false,
    isMessagesLoading: false,


    getUsers: async () => {
        set({ isUsersLoading: true });
        try {
            const res = await axiosInstance.get("/message/users");
            set({ users: res.data });
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({ isUserLoading: false });
        }
    },
    getmessages: async () => {
        set({ sisMessagesLoading: true })
        try {
            const res = await axiosInstance.get(`/messages/${userId}`);
            set({ messages: res.data })

        } catch (error) {
                toast.error(error.response.data.message);
        } finally {
            set({ isMessagesLoading: false });
        }

    }
}))