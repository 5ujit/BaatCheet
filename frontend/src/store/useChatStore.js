import{create} from "zustand"
import toast from "react-hot-toast";
import {axiosInstance} from "../lib/axios"

export const useChatStore= create((set)=>({
message:[],
users: [],
selectUser: null,
isUserLoading: false,.
isMessage``


}))``