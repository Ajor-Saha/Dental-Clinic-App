import React from 'react'
import PatientForm from './PatientForm'

const Booking = () => {
  return (
    <div className="h-auto py-10 bg-slate-200" id='bookappointment'>
        <div className="flex flex-col justify-center items-center text-2xl text-blue-600 font-semibold mb-4">
            <h1>Book An Apointment</h1>
            <span className="border-b-2 border-blue-400"></span>
        </div>
        <div className="px-10">
            <PatientForm />
        </div>
    </div>
  )
}

export default Booking
