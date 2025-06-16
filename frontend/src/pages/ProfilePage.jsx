import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

const ProfilePage = () => {
  const {authUser,isUpdateingProfile,updateProfile}  useAuthStore();
  
  return (
    <div>
  
    </div>
  )
}

export default ProfilePage
