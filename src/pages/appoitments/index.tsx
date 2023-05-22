import AppointmentForm from '@/Components/Appoitment/AppoitmentForm'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'
import '../../app/globals.css'

export default function index() {
  return (
    <div>
      <Navbar/>
         <AppointmentForm/>
      <Footer/>
    </div>
  )
}
