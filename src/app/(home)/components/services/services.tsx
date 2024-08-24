import Image from 'next/image'
import React from 'react'

export default function Services() {
  return (
    <div id="services" className='mx-14 sm:mx-20 2xl:mx-32 mt-20 text-center'>
        <h2 className='text-4xl font-bold text-[#677582] mb-20'>USLUGE</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
            <div className='flex flex-col items-center drop-shadow-2xl bg-[#FAFAFA] p-4 xsm:p-10 md:p-8'>
                
                    <Image 
                    src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Farhitektonsko-projektovanje.png?alt=media&token=021e6e41-cae1-4a9f-b650-1dbbe9f1a597'
                    alt="Arhitektonsko projektovanje"
                    width={500}
                    height={500}
                    className='w-1/2 xsm:w-1/3 xl:w-1/4'
                    />
                
                <p className='text-xl font-semibold text-[#495057] mt-8 text-center'>Arhitektonsko projektovanje</p>
            </div>
            <div className='flex flex-col items-center drop-shadow-2xl bg-[#FAFAFA] p-4 xsm:p-10 md:p-8'>
            
                    <Image 
                    src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fdizajn-enterijera.png?alt=media&token=cb7e9182-e85c-45fe-b46a-7c0aec870802'
                    alt="Dizajn enterijera"
                    width={500}
                    height={500}
                    className='w-1/2 xsm:w-1/3 xl:w-1/4'
                    />
                
                <p className='text-xl font-semibold text-[#495057] mt-8 text-center'>Dizajn enterijera</p>
            </div>
            <div className='flex flex-col items-center drop-shadow-2xl bg-[#FAFAFA] p-4 xsm:p-10 md:p-8'>
                
                    <Image 
                    src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Ftehn-savjetovanje-konsalting.png?alt=media&token=878173b4-755d-40e0-b848-27e4b11d4c4a'
                    alt="Tehničko savjetovanje i Konsalting"
                    width={500}
                    height={500}
                    className='w-1/2 xsm:w-1/3 lg:w-1/4'
                    />
                
                <p className='text-xl font-semibold text-[#495057] mt-8 text-center'>Tehničko savjetovanje i Konsalting</p>
            </div>
            <div className='flex flex-col items-center drop-shadow-2xl bg-[#FAFAFA] p-4 xsm:p-10 md:p-8'>
                
                    <Image 
                    src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fnadzor-gradj-radnjama.png?alt=media&token=8b8f0884-70f3-48f5-812e-2a3948e5c4fc'
                    alt="Nadzor nad gađevinskim radovima"
                    width={500}
                    height={500}
                    className='w-1/2 xsm:w-1/3 lg:w-1/4'
                    />
                
                <p className='text-xl font-semibold text-[#495057] mt-8 text-center'>Nadzor nad gađevinskim radovima</p>
            </div>
            <div className='flex flex-col items-center drop-shadow-2xl bg-[#FAFAFA] p-4 xsm:p-10 md:p-8'>
                
                    <Image 
                    src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fproj-menadzment.png?alt=media&token=54784dd2-08a4-43c1-bbbb-804a094574b5'
                    alt="Projektni menadžment"
                    width={500}
                    height={500}
                    className='w-1/2 xsm:w-1/3 lg:w-1/4'
                    />
            
                <p className='text-xl font-semibold text-[#495057] mt-8 text-center'>Projektni menadžment</p>
            </div>
            <div className='flex flex-col items-center drop-shadow-2xl bg-[#FAFAFA] p-4 xsm:p-10 md:p-8'>
                
                    <Image 
                    src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fvizuelizacija.png?alt=media&token=e784a6fe-3cd6-43dd-9a06-127262be80cb'
                    alt="Usluge vizualizacije projekta "
                    width={500}
                    height={500}
                    className='w-1/2 xsm:w-1/3 lg:w-1/4'
                    />
                
                <p className='text-xl font-semibold text-[#495057] mt-8 text-center'>Usluge vizualizacije projekta </p>
            </div>
            <div className='flex flex-col items-center drop-shadow-2xl bg-[#FAFAFA] p-4 xsm:p-10 md:p-8'>
                
                    <Image 
                    src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fodrziva-gradnja.png?alt=media&token=9501ef4b-47c2-4a12-a052-6436c5df231f'
                    alt="Održiva gradnja"
                    width={500}
                    height={500}
                    className='w-1/2 xsm:w-1/3 lg:w-1/4'
                    />
                
                <p className='text-xl font-semibold text-[#495057] mt-8 text-center'>Održiva gradnja</p>
            </div>
            <div className='flex flex-col items-center drop-shadow-2xl bg-[#FAFAFA] p-4 xsm:p-10 md:p-8'>
                
                    <Image 
                    src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fbim.png?alt=media&token=c62851bd-76f0-4f5d-9c0f-8577d07bd025'
                    alt="BIM - Building Information Modeling"
                    width={500}
                    height={500}
                    className='w-1/2 xsm:w-1/3 lg:w-1/4'
                    />
                
                <p className='text-xl font-semibold text-[#495057] mt-8 text-center'>BIM - Building Information Modeling</p>
            </div>
        </div>
    </div>
  )
}
