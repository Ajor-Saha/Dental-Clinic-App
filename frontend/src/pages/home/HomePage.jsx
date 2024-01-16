import React from 'react'
import MainLayout from '../../components/MainLayout'
import Slider from '../../components/Slider/Slider'
import CTA from '../../components/CTA'
import Services from '../../components/Services'
import ServicePrice from '../../components/ServicePrice'
import Booking from '../../components/form/Booking'
import DoctorSection from '../../components/DoctorSection'

const HomePage = () => {
  return (
    <MainLayout>
        <Slider />
        <CTA />
        <Services />
        <ServicePrice />
        <Booking />
        <DoctorSection />
    </MainLayout>
  )
}

export default HomePage
