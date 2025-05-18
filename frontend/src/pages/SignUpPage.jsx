import React, { useState } from 'react'
import { useAuthStore } from '../store/use.AuthStore';


const SignUpPage = () => {
  const [shoPassword,setPassword]=useState(false);
  const [formData,setFormdata]=useState({
    fullName:"",
    email: "",
    password: "",
  });
  const {signup ,isSigningUp}= useAuthStore();
  return (
    <div>
      SignUpPage....
    </div>
  )
}

export default SignUpPage
