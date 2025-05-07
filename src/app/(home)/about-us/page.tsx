import React from 'react'
import Header from './components/header'
import OurVision from './components/ourVision'
import Bim from './components/bim'
import Footer from '../components/footer/footer'
import { HomeSidebar } from '../components/homeNav/homeSidebar'
import { HomeNav } from '../components/homeNav/homeNav'

export default function AboutUs() {
  return (
    <div className='pt-24 px-4 md:px-8 lg:px-16'>
     
        <Header />
        <OurVision />
        <Bim />
        
    </div>
  )
}
