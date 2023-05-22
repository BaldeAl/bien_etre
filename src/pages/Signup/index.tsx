import Footer from '@/Components/Footer/Footer'
import SignUp from '@/Components/Login/SignupForm'
import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'

export default function index() {
  return (
    <div>
        <Navbar/>
        <SignUp/>
        <Footer/>
    </div>
  )
}
