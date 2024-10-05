import Image from 'next/image'
import React from 'react'

export default function OurVision() {
  return (
    <div className='md:relative mx-4 xl:mx-14 2xl:mx-32 mt-20 md:mb-42 xl:mb-48 flex flex-col md:flex-row'>
        <div className='md:relative w-full md:w-1/2 drop-shadow-xl bg-[#FAFAFA] p-4 md:p-8 z-10'>
            <div>
                <h3 className='text-[#677582] text-4xl font-bold mb-8'>NAŠA VIZIJA</h3>
                <div className='flex mb-8'>
                    <span className='text-[#516795] text-lg font-bold mr-4'>1.</span>
                    <p className='text-[#495057] text-xl '>Istovremeno zadovoljstvo klijenata i briga o životnoj sredini.</p>
                </div>
                <div className='flex mb-8'>
                    <span className='text-[#516795] text-lg font-bold mr-4'>2.</span>
                    <p className='text-[#495057] text-xl '>Korišćenjem BIM (Building Information Modeling) sistema, koji koristi digitalne modele za integraciju svih struka u građevinarstvu i arhitekturi, osiguravamo efikasniju saradnju i veću preciznost tokom cjelog životnog ciklusa projekta.</p>
                </div>
                <div className='flex mb-8'>
                    <span className='text-[#516795] text-lg font-bold mr-4'>3.</span>
                    <p className='text-[#495057] text-xl '>Na ovaj način podižemo kvalitet projektovanja i gradnje, pružajući klijentima najbolja rešenja, dok smanjujemo naš uticaj na planetu.</p>
                </div>
                <div className='flex mb-8'> 
                    <span className='text-[#516795] text-lg font-bold mr-4'>4.</span>
                    <p className='text-[#495057] text-xl '>Stvaranje prostora koji su funkcionalni, estetski privlačni i ekološki odgovorni.</p>
                </div>
            </div>
        </div>
        <div className='w-full lg:w-1/2 lg:h-auto md:absolute right-20 top-20 z-5'>
                <Image alt='Our vision' width={800} height={800} className='w-full' src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2F5d1a2fab80366461efd0d005813adba6.png?alt=media&token=7272c6a8-f6ae-4999-866b-4bedb60c0385'/>
        </div>
    </div>
  )
}
