import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/SingnUpPage'
import SettingPage from './pages/SettingPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import { useAuthStore } from './store/useAuthStore.js'
import { useThemeStore } from './store/useThemeStore.js'
import {Loader} from "lucide-react"
import { Toaster } from 'react-hot-toast'




const App = () => {
  
  const {authUser,checkAuth,isCheckingAuth}=useAuthStore();
  const {theme}=useThemeStore()
  useEffect(()=>{
    checkAuth()
  },[checkAuth])

  console.log({authUser});

  if (isCheckingAuth && !authUser )return (
    <div className='flex items-center justify-center h-screen'>
      <Loader className='size-10 animate-spin' />

    </div>
  )
    
  
  

  return (
    
    <div data-theme={theme} >
      <Navbar/>
      

      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>
    <Toaster/>

    </div>
  )
}

export default App
