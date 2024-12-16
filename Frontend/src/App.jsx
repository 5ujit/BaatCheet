import { Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SettingPage from "./pages/SettingPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Navbar from "./components/Navbar.jsx";
import { useAuthStore } from "./store/useAuthStore.js";
import { useEffect } from "react";

import {Loader } from "lucide-react"
import {Toaster} from "react-hot-toast"



const  App=()=> {

  const {authUser,checkAuth,isCheckAuth}=useAuthStore();
  
  useEffect(()=>{
    checkAuth()
  },[checkAuth])

  console.log({authUser});

  if(isCheckAuth && !authUser) return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin" />

    </div>

  )
  
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={authUser ? <HomePage />:<Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage />: <Navigate to="/"/>} />
        <Route path="/login" element={ !authUser ?  <LoginPage /> :<Navigate to="/"/>} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/profile" element={ authUser? <ProfilePage /> :<Navigate to="/login"/>} />
      </Routes>

      <Toaster/>
    </div> 
  );
}
export default App;