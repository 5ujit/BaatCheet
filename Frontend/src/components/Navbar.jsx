//src>componet > Navbar.jsx
import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

const Navbar = () => {
  const {authUser}=useAuthStore()
  return (
    <div>
      this is nav
    </div>
  )
}

export default Navbar
